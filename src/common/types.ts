export type Theme = "light" | "dark";

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export interface NavbarItemsProps {
  label: string;
  link: string;
}
export interface IClient {
  logo: string;
  name: string;
  description: string;
  websiteLink: string;
}
