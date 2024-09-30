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
    icon: string,
    title: string,
    description: string,
    subFeatures: string[],
}

export interface IHeroConfig {
    slug: string;
    title: string;
    description: string;
    button: {
        text: string;
        link: string;
    }
}

export interface IContactInfo {
    id: number;
    location: string;
    addresse: string;
    email: string;
    phone: string;
}