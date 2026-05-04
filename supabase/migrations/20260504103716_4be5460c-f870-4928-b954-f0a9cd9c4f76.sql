-- Tighten the public INSERT policy on signal_submissions
DROP POLICY IF EXISTS "Anyone can submit" ON public.signal_submissions;

CREATE POLICY "Anyone can submit a non-empty signal"
  ON public.signal_submissions FOR INSERT
  WITH CHECK (
    char_length(trim(title)) BETWEEN 1 AND 200
    AND char_length(trim(content)) BETWEEN 1 AND 5000
  );

-- Revoke public EXECUTE on the security-definer role check
REVOKE EXECUTE ON FUNCTION public.has_role(UUID, public.app_role) FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.has_role(UUID, public.app_role) FROM anon;
REVOKE EXECUTE ON FUNCTION public.has_role(UUID, public.app_role) FROM authenticated;