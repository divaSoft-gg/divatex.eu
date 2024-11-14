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
export interface featuresProps {
  title: string;
  description: string;
  imagePreview: string;
  cardWidthClass: string;
}
export interface erpFeaturesCardProps {
  title: string;
  icon: string;
  backgroundImage: string;
  description: string;
  list: string[];
}

export interface locationProps {
  country: string;
  address: string;
}
export interface socialsProps {
  question: string;
  answer: string;
}
export interface locationsProps {
  countryName: string;
  map: string;
  flag: string;
  address: string;
  list: string[];
}
