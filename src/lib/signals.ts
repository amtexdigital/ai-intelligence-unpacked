export type SignalCategory =
  | "human_signal"
  | "nhi_signal"
  | "agi_signal"
  | "weird_signal"
  | "false_signal";

export type SubmissionType =
  | "uap_story"
  | "ai_breakthrough"
  | "cognition_research"
  | "weird_observation"
  | "host_question";

export interface SignalRow {
  id: string;
  title: string;
  summary: string;
  source_url: string | null;
  source_name: string | null;
  category: SignalCategory;
  published_at: string;
  created_at: string;
}

export const categoryMeta: Record<
  SignalCategory,
  { label: string; badgeClass: string; hoverShadow: string }
> = {
  human_signal: {
    label: "HUMAN SIGNAL",
    badgeClass: "bg-primary/15 neon-text-magenta border border-primary/40",
    hoverShadow: "hover:shadow-[0_0_18px_hsl(var(--neon-magenta)/0.4)] hover:border-primary/60",
  },
  nhi_signal: {
    label: "NHI SIGNAL",
    badgeClass: "bg-secondary/15 neon-text-cyan border border-secondary/40",
    hoverShadow: "hover:shadow-[0_0_18px_hsl(var(--neon-cyan)/0.4)] hover:border-secondary/60",
  },
  agi_signal: {
    label: "AGI SIGNAL",
    badgeClass: "bg-accent/15 text-accent border border-accent/40",
    hoverShadow: "hover:shadow-[0_0_18px_hsl(var(--neon-purple)/0.4)] hover:border-accent/60",
  },
  weird_signal: {
    label: "WEIRD SIGNAL",
    badgeClass: "bg-[hsl(var(--neon-green)/0.12)] text-[hsl(var(--neon-green))] border border-[hsl(var(--neon-green)/0.4)]",
    hoverShadow: "hover:shadow-[0_0_18px_hsl(var(--neon-green)/0.4)]",
  },
  false_signal: {
    label: "FALSE SIGNAL",
    badgeClass: "bg-destructive/15 text-destructive border border-destructive/40",
    hoverShadow: "hover:shadow-[0_0_18px_hsl(var(--destructive)/0.4)]",
  },
};

export const submissionTypeOptions: { value: SubmissionType; label: string }[] = [
  { value: "uap_story", label: "UAP / NHI story or news" },
  { value: "ai_breakthrough", label: "AI breakthrough" },
  { value: "cognition_research", label: "Cognition research" },
  { value: "weird_observation", label: "Weird intelligence observation" },
  { value: "host_question", label: "Question for the hosts" },
];
