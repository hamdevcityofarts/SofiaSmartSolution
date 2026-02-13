import {
  BookOpen,
  Hotel,
  MonitorSmartphone,
  ShoppingCart,
  CalendarCheck,
  BarChart3,
  ShieldCheck,
  TrendingUp,
  Users
} from "lucide-react";

export const services = [
  {
    id: "librairie",
    title: "Librairie Digitale",
    tagline: "Librairie en ligne officielle de Sofia",
    description:
      "Plateforme e-commerce dédiée à la vente en ligne des ouvrages Sofia.",
    heroText:
      "Découvrez et commandez en ligne les ouvrages Sofia, conçus pour accompagner la transformation digitale et la montée en compétences.",

    icon: BookOpen,

    // 🔗 lien direct vers le service e-commerce
    link: "/shop"
,

    features: [
      { icon: ShoppingCart, text: "Vente en ligne de livres Sofia" },
      { icon: Users, text: "Compte client et historique d’achats" },
      { icon: BarChart3, text: "Catalogue structuré et évolutif" },
      { icon: ShieldCheck, text: "Paiement et commandes sécurisées (API-ready)" }
    ],

    testimonials: [
      {
        name: "Responsable Librairie Sofia",
        role: "Direction",
        quote:
          "La librairie en ligne a permis d’élargir notre audience et de professionnaliser la distribution."
      }
    ]
  },

  {
    id: "hotellerie",
    title: "Digitalisation Hôtelière",
    tagline: "Optimisez la gestion et la réservation de vos établissements",
    description:
      "Solution complète pour la gestion hôtelière et les demandes de réservation.",
    heroText:
      "Centralisez vos opérations hôtelières et améliorez l’expérience client.",

    icon: Hotel,

    // 🔗 page service classique
    link: "/services/hotellerie",

    features: [
      { icon: Hotel, text: "Présentation des chambres et services" },
      { icon: CalendarCheck, text: "Demandes de réservation simplifiées" },
      { icon: TrendingUp, text: "Amélioration du taux d’occupation" },
      { icon: ShieldCheck, text: "Fiabilité et cohérence des données" }
    ],

    testimonials: [
      {
        name: "Gérant Hôtel Partenaire",
        role: "Hôtellerie",
        quote:
          "Une solution claire, efficace et parfaitement adaptée à notre réalité terrain."
      }
    ]
  },

  {
    id: "digital",
    title: "Services Numériques",
    tagline: "Des solutions digitales sur mesure",
    description:
      "Développement, marketing digital et accompagnement stratégique.",
    heroText:
      "Accélérez votre transformation numérique avec des solutions adaptées à vos besoins.",

    icon: MonitorSmartphone,

    // 🔗 page service classique
    link: "/services/digital",

    features: [
      { icon: MonitorSmartphone, text: "Applications web & mobile sur mesure" },
      { icon: TrendingUp, text: "Visibilité et performance digitale" },
      { icon: Users, text: "Accompagnement stratégique personnalisé" },
      { icon: ShieldCheck, text: "Solutions fiables et sécurisées" }
    ],

    testimonials: [
      {
        name: "Entrepreneur partenaire",
        role: "Client",
        quote:
          "Un accompagnement sérieux, structuré et orienté résultats."
      }
    ]
  }
];
