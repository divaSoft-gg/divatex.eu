import { INav } from "./types";

export const NAV: INav[] = [
  {
    label: "Accueil",
    link: "/",
  },
  {
    label: "ERP",
    link: "/erp",
  },
  {
    label: "A propos",
    link: "/about",
  },
  {
    label: "Contact",
    link: "/get-in-touch",
  },
  {
    label: "Réserver une démo",
    link: "/demo",
  },
];

export const LEADING_ARRAY = [
  {
    icon: "specifique",
    title: "Spécifique",
    description:
      "DivaTex transcende les solutions ERP génériques, offrant des fonctionnalités métier précises et adaptées aux défis uniques de l’industrie textile, assurant une intégration parfaite à vos processus.",
    subFeatures: [],
  },
  {
    icon: "efficient",
    title: "Efficient",
    description:
      "Profitez d’une mise en œuvre 10 fois plus rapide que les systèmes ERP standards. DivaTex élimine les coûts et délais superflus, permettant une optimisation immédiate de vos ressources.",
    subFeatures: [],
  },
  {
    icon: "innovant",
    title: "Innovant",
    description:
      "Exploitez l’intelligence artificielle pour l’équilibrage des chaînes de production et bénéficiez de fonctionnalités avancées comme le Planning Automatique et la Gestion Qualité spécifique au textile.",
    subFeatures: [],
  },
];

export const FEATURES_ARRAY = [
  {
    icon: "vente",
    title: "vente",
    description:
      "Optimisez vos stratégies tarifaires, gérez le cycle de vie de vos produits de la conception à la vente, et centralisez la gestion commerciale.",
    subFeatures: [
      "Étude de Prix",
      "Product Lifecycle Management",
      "Gestion commerciale",
    ],
  },
  {
    icon: "appro",
    title: "Appro",
    description:
      "Maîtrisez vos niveaux de stock, simplifiez les processus d’achat et conservez une visibilité totale sur vos opérations d’approvisionnement.",
    subFeatures: ["Gestion des stocks", "Achats"],
  },
  {
    icon: "planning",
    title: "Planning",
    description:
      "Anticipez les besoins de production avec un simulateur avancé, planifiez et ajustez les opérations par une gestion optimisée des ressources.",
    subFeatures: [
      "Simulation avancée",
      "Anticipation des délais",
      "Prévisions fiables",
    ],
  },
  {
    icon: "methods",
    title: "Méthodes",
    description:
      "Standardisez les opérations, détaillez les gammes de montage et équilibrez les charges de travail pour une efficience maximale en production.",
    subFeatures: ["Catalogue du temps", "Gamme de montage", "Équilibrage"],
  },
  {
    icon: "production",
    title: "Production",
    description:
      "Contrôlez le processus de coupe, gérez l’exécution de la production en temps réel et planifiez précisément grâce à notre système MES avancé.",
    subFeatures: ["Suivi de la coupe", "Manufacturing Execution System"],
  },
  {
    icon: "quality",
    title: "Qualité",
    description:
      "Assurez la surveillance qualité tout au long de la production et réalisez des audits de qualité pour maintenir les standards élevés de vos produits.",
    subFeatures: [
      "Encours de chaîne ",
      "Fin de chaîne",
      "Audit qualité par AQL",
    ],
  },
  {
    icon: "logistics",
    title: "Logistique",
    description:
      "Gérez le colisage et les expéditions avec efficacité et assurez la conformité douanière pour une livraison sans heurt de vos produits.",
    subFeatures: ["Colisage", "Gestion douanière (apurement)", "Étude de Prix"],
  },
  {
    icon: "finance",
    title: "Finance",
    description:
      "Automatisez la facturation, suivez les paiements avec précision et gérez la trésorerie pour une santé financière robuste de l’entreprise.",
    subFeatures: ["Facturation", "Règlement", "Trésorerie"],
  },
  {
    icon: "gmao",
    title: "GMAO",
    description:
      "Planifiez la maintenance préventive et suivez les interventions pour optimiser la performance et la longévité de vos équipements.",
    subFeatures: [
      "Planification maintenance",
      "Suivi des interventions",
      "Gestion des pièces de rechange",
    ],
  },
  {
    icon: "bi",
    title: "Business Intelligence",
    description:
      "Exploitez des tableaux de bord pour analyser les rendements et les activités, et prendre des décisions basées sur des données stratégiques précises.",
    subFeatures: [
      "Rendements et les activités ",
      "Comptabilité analytique",
      "Affichage dynamique",
    ],
  },
];

export const CONTACT_ARRAY = [
  {
    id: 1,
    location: "Luxembourg",
    addresse: "8 rue des marguerites 8056 Strassen",
    email: "lionel@diva-software.io",
    phone: "+352621545054",
  },
  {
    id: 2,
    location: "Belgique",
    addresse: "Apostelhuizen 93 9000 Gent",
    email: "lionel@diva-software.io",
    phone: "+32460228844",
  },
  {
    id: 3,
    location: "France",
    addresse: "5 impasse de la colombette 31000 Toulouse",
    email: "sammy@diva-software.io",
    phone: "+33756810077",
  },
  {
    id: 4,
    location: "Maroc",
    addresse: "Boulevard d’Anfa, Résidence le petit paradis 20000 Casablanca.",
    email: "fabrizio@diva-software.io",
    phone: "+212763086382",
  },
  {
    id: 5,
    location: "Tunisie",
    addresse:
      "Boulevard Yasser Arafat Immeuble N° 38 Bureau 44 Sahloul 4054 Sousse",
    email: "rochdi@diva-software.io",
    phone: "+21653333853",
  },
];

export const DIVATEX_MODULES = [
  {
    image: "functionlity-1.png",
    title: "Commercial",
    functionalities: [
      "etude de prix",
      "Développment (PLM)",
      "Gestion commerciale",
    ],
  },
  {
    image: "functionlity-2.png",
    title: "Approvisionnement",
    functionalities: ["Gestion des stocks", "Achat", "Vision complàte"],
  },
  {
    image: "functionlity-3.png",
    title: "Production",
    functionalities: ["Suivi de la coupe", "MES", "Planification avancée"],
  },
];
