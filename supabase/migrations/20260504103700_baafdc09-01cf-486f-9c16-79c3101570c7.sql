-- Roles infrastructure
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  role public.app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

CREATE POLICY "Admins manage roles" ON public.user_roles
  FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Signal categories
CREATE TYPE public.signal_category AS ENUM (
  'human_signal',
  'nhi_signal',
  'agi_signal',
  'weird_signal',
  'false_signal'
);

-- Public signals feed
CREATE TABLE public.intelligence_signals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  summary TEXT NOT NULL,
  source_url TEXT,
  source_name TEXT,
  category public.signal_category NOT NULL,
  published_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.intelligence_signals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read signals"
  ON public.intelligence_signals FOR SELECT
  USING (true);

CREATE POLICY "Admins manage signals"
  ON public.intelligence_signals FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Audience submissions
CREATE TYPE public.submission_type AS ENUM (
  'uap_story',
  'ai_breakthrough',
  'cognition_research',
  'weird_observation',
  'host_question'
);

CREATE TABLE public.signal_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  submitter_name TEXT,
  submitter_email TEXT,
  submission_type public.submission_type NOT NULL,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  source_url TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.signal_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit"
  ON public.signal_submissions FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Admins read submissions"
  ON public.signal_submissions FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins update submissions"
  ON public.signal_submissions FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins delete submissions"
  ON public.signal_submissions FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Seed a few starter signals so the feed isn't empty
INSERT INTO public.intelligence_signals (title, summary, source_url, source_name, category, published_at) VALUES
('Average attention span drops below 47 seconds', 'New research from UC Irvine shows knowledge workers now switch tasks every 47 seconds on average — down from 2.5 minutes in 2004.', 'https://news.uci.edu', 'UC Irvine', 'human_signal', now() - interval '2 days'),
('Pentagon releases new UAP video archive', 'AARO publishes 12 previously classified UAP encounters from Navy aviators between 2019 and 2024.', 'https://www.aaro.mil', 'AARO', 'nhi_signal', now() - interval '4 days'),
('Frontier model passes researcher-level math benchmark', 'A new frontier model scored above the median IMO gold medalist on FrontierMath, marking a step-change in autonomous reasoning.', 'https://epoch.ai', 'Epoch AI', 'agi_signal', now() - interval '1 day'),
('Octopuses observed dreaming in color-shift sequences', 'Marine biologists document REM-like color sequences in cephalopods — possible evidence of complex non-human cognition.', NULL, 'Nature', 'weird_signal', now() - interval '6 days'),
('Viral "AGI achieved internally" rumor traced to satire account', 'The trending claim originated from a parody account and was amplified without verification by major tech newsletters.', NULL, 'Detecting Intelligence', 'false_signal', now() - interval '3 days');