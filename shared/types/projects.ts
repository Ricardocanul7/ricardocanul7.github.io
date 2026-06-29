export type LocalizedString = Record<string, string>

export interface Project {
  title: LocalizedString;
  description: LocalizedString;
  image: string;
  link: string;
  tags: string[];
  active?: boolean;
}