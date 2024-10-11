import { ReactNode } from "react";

export interface INav {
  label: string;
  link: string;
}

export interface ILogo {
  id: number;
  logo: string;
  name: string;
}

export default interface IFeature {
  icon: string;
  title: string;
  description: string;
  subFeatures: string[];
}

export interface IHeroConfig {
  coverPath: string;
  maxHeight: string;
  renderContent: () => ReactNode;
}

export interface IContactInfo {
  id: number;
  location: string;
  addresse: string;
  email: string;
  phone: string;
}

export interface IFunctionality {
  image: string;
  title: string;
  functionalities: string[];
}
