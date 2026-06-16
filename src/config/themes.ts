export const defaultTheme = "console-green";

export const themeOptions = [
  {
    id: "swiss",
    label: "Swiss",
    description: "Crisp black, white, and blue with strict spacing.",
  },
  {
    id: "editorial",
    label: "Editorial",
    description: "Warm paper tones with refined resume typography.",
  },
  {
    id: "product",
    label: "Product",
    description: "Clean tech palette with practical cards and teal accents.",
  },
  {
    id: "classic",
    label: "Classic",
    description: "Recruiter-safe document styling with navy and gray.",
  },
  {
    id: "console",
    label: "Console Green",
    description: "Dark developer profile with soft green terminal accents.",
  },
  {
    id: "console-cyan",
    label: "Console Cyan",
    description: "Dark terminal style with electric cyan accents.",
  },
  {
    id: "console-amber",
    label: "Console Amber",
    description: "Dark terminal style with warm amber command-line accents.",
  },
  {
    id: "console-violet",
    label: "Console Violet",
    description: "Dark terminal style with violet and lavender accents.",
  },
] as const;

export type ThemeId = (typeof themeOptions)[number]["id"];
