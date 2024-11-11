export type Theme = "light" | "dark";

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export interface NavbarItemsProps {
  label: string;
  link: string;
}
