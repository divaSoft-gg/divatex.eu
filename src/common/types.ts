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