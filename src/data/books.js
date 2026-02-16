import abcdubac from "../assets/ABC du BAC.png";
import ameliorezVotreVie from "../assets/Ameliorez votre vie - Danielle Lapp.png";
import apero from "../assets/Apero.png";
import asterixTransitaliqueCopie from "../assets/Asterix et la transItalique - Rene Goscinny - Copie.png";
import asterixTransitalique from "../assets/Asterix et la transItalique - Rene Goscinny.png";
import asterixGauloisCopie from "../assets/Asterix et le gaulois - Rene Goscinny - Copie.png";
import cahierVacances from "../assets/Cahier des vacances.png";
import cherubinsBretteurs from "../assets/Cherubins et Bretteurs - Fritz Bell.png";
import codeCopropriete from "../assets/Code de la coproprieté.png";
import codeCollectivites from "../assets/Code des collectivités territoriales.png";
import codeEtrangers from "../assets/Code des etrangers.png";
import codeCommerce from "../assets/code du commerce.png";
import codeElectoral from "../assets/Code electorale.png";
import convivialitesFraternelles from "../assets/Convivialités Fraternelles - Jean  Paul NDINDJOCK.png";
import corpsAme from "../assets/Corps et ame.png";
import cuisineMonde from "../assets/Cuisine du monde pas compliqué - inrattable.png";
import educationCitoyennete from "../assets/Education à la citoyenneté 6-ieme - 5ieme.png";
import financeEntreprise from "../assets/Finance d'entreprise.png";
import futureMamanClaude from "../assets/Future Maman - Marie Claude de l.png";
import futureMamanDelahaye from "../assets/Future maman - Marie Claude Delahaye.png";
import jeMevalueFrancais from "../assets/Je m'evalue Frabcais.png";
import jeanRacinePhedre from "../assets/Jean Racine Phedre.png";
import kidiwePetitBerger from "../assets/Kidiwe le petit berger - Paule yvette Ntyam.png";
import kottak from "../assets/Kottak - CONRAD PHILLIP.png";
import retraititude from "../assets/La Retraititude dans la fonction public.png";
import santeDeAaz from "../assets/la santé de A a Z.png";
import artSimplicite2 from "../assets/L'art de la simplicité (2).png";
import artSimplicite from "../assets/L'art de la simplicité.png";
import grandThermomix from "../assets/Le grand Thermomix - Larousse.png";
import pilliersExcellence from "../assets/Le pilliers de l'excellence.png";
import liensSacres from "../assets/Les liens sacrés de l'amour.png";
import urgenceAfricaine from "../assets/L'urgence Africaine - Kako Nabukpo.png";
import maternelleVacances from "../assets/Maternelle - Cahier des vacance.png";
import moliereEcoleFemmes from "../assets/Moliere, l'ecole des femmes.png";
import objectifCinquieme from "../assets/Objectif 5ieme - Jean Pierre Blaise.png";
import passionApero from "../assets/Passion Apero , Simplissime -  J F Mallet.png";
import paulVirginie from "../assets/Paul et Virginie.png";
import philippeGrimbertSecret from "../assets/Philippe Grimberg un Secret.png";
import physicalScience from "../assets/Physical Science - BILL W Tillery.png";
import plancha from "../assets/Plancha.png";
import cheminMort from "../assets/Sur le chemin de la mort - Gabrielle BASS.png";
import perfectGuideIct from "../assets/The Perfect Guide in Ict - Work Book 3.png";
import toutSeJoueAvant from "../assets/Tout se jous avant 6 ans - Dr Fithzhug DODSON.png";
import transformezVotreVie from "../assets/Transformez Votre vie.png";
import urgenceNouveauPacte from "../assets/Urgence d'un nouveau Republicain.png";

export const books = [
  {
    id: "bk-001",
    title: "ABC du BAC - Réussite Maths Terminale",
    author: "Nathan",
    description: "Cours précis et concis, méthodes claires et efficaces pour réussir le bac.",
    price: null,
    currency: "XAF",
    stock: 15,
    category: "scolaire",
    cover: abcdubac,
    featured: false,
    formats: ["Papier"],
    rating: 4.5
  },
  {
    id: "bk-002",
    title: "Tremblez, mais osez !",
    author: "Susan Jeffers",
    description: "Menez la vie dont vous rêvez en surmontant vos peurs.",
    price: null,
    currency: "XAF",
    stock: 8,
    category: "developpement-personnel",
    cover: ameliorezVotreVie,
    featured: false,
    formats: ["Papier"],
    rating: 4.7
  },
  {
    id: "bk-003",
    title: "Apéro - Trouvez l'intrus",
    author: "Larousse",
    description: "Jeu de société avec questions et défis pour animer vos soirées.",
    price: null,
    currency: "XAF",
    stock: 12,
    category: "jeux",
    cover: apero,
    featured: false,
    formats: ["Papier"],
    rating: 4.3
  },
  {
    id: "bk-004",
    title: "Astérix et la Transitalique",
    author: "René Goscinny",
    description: "Les aventures du célèbre Gaulois dans une nouvelle épopée.",
    price: null,
    currency: "XAF",
    stock: 20,
    category: "bd",
    cover: asterixTransitaliqueCopie,
    featured: false,
    formats: ["Papier"],
    rating: 4.8
  },
  {
    id: "bk-005",
    title: "Astérix et la Transitalique",
    author: "René Goscinny",
    description: "Les aventures du célèbre Gaulois dans une nouvelle épopée.",
    price: null,
    currency: "XAF",
    stock: 18,
    category: "bd",
    cover: asterixTransitalique,
    featured: false,
    formats: ["Papier"],
    rating: 4.8
  },
  {
    id: "bk-006",
    title: "Astérix le Gaulois",
    author: "René Goscinny",
    description: "Le tout premier album des aventures d'Astérix et Obélix.",
    price: null,
    currency: "XAF",
    stock: 22,
    category: "bd",
    cover: asterixGauloisCopie,
    featured: true,
    formats: ["Papier"],
    rating: 4.9
  },
  {
    id: "bk-007",
    title: "Cahier de vacances de la 4e à la 3e",
    author: "Magnard",
    description: "Français, maths, histoire-géo pour réviser pendant l'été.",
    price: null,
    currency: "XAF",
    stock: 25,
    category: "scolaire",
    cover: cahierVacances,
    featured: false,
    formats: ["Papier"],
    rating: 4.4
  },
  {
    id: "bk-008",
    title: "Cherubins et Bretteurs",
    author: "Fritz Bell",
    description: "Roman d'aventure captivant.",
    price: null,
    currency: "XAF",
    stock: 6,
    category: "roman",
    cover: cherubinsBretteurs,
    featured: false,
    formats: ["Papier"],
    rating: 4.2
  },
  {
    id: "bk-009",
    title: "Code de la copropriété",
    author: "Calloz",
    description: "Édition 2014 complète du code de la copropriété.",
    price: null,
    currency: "XAF",
    stock: 10,
    category: "droit",
    cover: codeCopropriete,
    featured: false,
    formats: ["Papier"],
    rating: 4.5
  },
  {
    id: "bk-010",
    title: "Code général des collectivités territoriales",
    author: "Dalloz",
    description: "Édition 2015 avec la réforme territoriale et la loi MAPAM.",
    price: null,
    currency: "XAF",
    stock: 7,
    category: "droit",
    cover: codeCollectivites,
    featured: false,
    formats: ["Papier"],
    rating: 4.6
  },
  {
    id: "bk-011",
    title: "Code de l'entrée et du séjour des étrangers",
    author: "Dalloz",
    description: "Édition 2015 à jour du décret du 18 août 2014.",
    price: null,
    currency: "XAF",
    stock: 5,
    category: "droit",
    cover: codeEtrangers,
    featured: false,
    formats: ["Papier"],
    rating: 4.5
  },
  {
    id: "bk-012",
    title: "Code de commerce",
    author: "Dalloz",
    description: "Édition 2015 du code de commerce.",
    price: null,
    currency: "XAF",
    stock: 9,
    category: "droit",
    cover: codeCommerce,
    featured: false,
    formats: ["Papier"],
    rating: 4.5
  },
  {
    id: "bk-013",
    title: "Code électoral",
    author: "Dalloz",
    description: "Édition 2015 avec les dispositions pour les élections départementales.",
    price: null,
    currency: "XAF",
    stock: 8,
    category: "droit",
    cover: codeElectoral,
    featured: false,
    formats: ["Papier"],
    rating: 4.5
  },
  {
    id: "bk-014",
    title: "Convivialités fraternelles",
    author: "Jean Paul Ndindjock",
    description: "Inspirations libres d'une poésie africaine.",
    price: null,
    currency: "XAF",
    stock: 12,
    category: "poesie",
    cover: convivialitesFraternelles,
    featured: false,
    formats: ["Papier"],
    rating: 4.4
  },
  {
    id: "bk-015",
    title: "Corps et âme",
    author: "Oumar N'Dao",
    description: "Les liens sacrés de l'amour - Recueil de textes classiques.",
    price: null,
    currency: "XAF",
    stock: 15,
    category: "litterature",
    cover: corpsAme,
    featured: false,
    formats: ["Papier"],
    rating: 4.6
  },
  {
    id: "bk-016",
    title: "Cuisine du monde pas compliquée",
    author: "Collectif",
    description: "Les meilleures recettes inratables pour voyager par les saveurs.",
    price: null,
    currency: "XAF",
    stock: 20,
    category: "cuisine",
    cover: cuisineMonde,
    featured: false,
    formats: ["Papier"],
    rating: 4.7
  },
  {
    id: "bk-017",
    title: "Éducation à la citoyenneté 6e & 5e",
    author: "Éditions scolaires",
    description: "Manuel d'éducation civique pour le collège.",
    price: null,
    currency: "XAF",
    stock: 18,
    category: "scolaire",
    cover: educationCitoyennete,
    featured: false,
    formats: ["Papier"],
    rating: 4.3
  },
  {
    id: "bk-018",
    title: "Finance d'entreprise - DCG",
    author: "François Lefebvre",
    description: "Mini mémo Foucher avec tables financières et statistiques.",
    price: null,
    currency: "XAF",
    stock: 10,
    category: "gestion",
    cover: financeEntreprise,
    featured: false,
    formats: ["Papier"],
    rating: 4.8
  },
  {
    id: "bk-019",
    title: "Le livre de bord de la future maman",
    author: "Marie-Claude Delahaye",
    description: "Ses neuf premiers mois, semaine après semaine.",
    price: null,
    currency: "XAF",
    stock: 14,
    category: "parentalite",
    cover: futureMamanClaude,
    featured: false,
    formats: ["Papier"],
    rating: 4.7
  },
  {
    id: "bk-020",
    title: "Le livre de bord de la future maman",
    author: "Marie-Claude Delahaye",
    description: "Ses neuf premiers mois, semaine après semaine.",
    price: null,
    currency: "XAF",
    stock: 16,
    category: "parentalite",
    cover: futureMamanDelahaye,
    featured: false,
    formats: ["Papier"],
    rating: 4.7
  },
  {
    id: "bk-021",
    title: "Je m'évalue - Français CM2",
    author: "Daniel Lissug II",
    description: "Cahier d'évaluation de l'élève pour une réussite à 100%.",
    price: null,
    currency: "XAF",
    stock: 22,
    category: "scolaire",
    cover: jeMevalueFrancais,
    featured: false,
    formats: ["Papier"],
    rating: 4.4
  },
  {
    id: "bk-022",
    title: "Phèdre",
    author: "Jean Racine",
    description: "Chef-d'œuvre de la tragédie classique française.",
    price: null,
    currency: "XAF",
    stock: 12,
    category: "theatre",
    cover: jeanRacinePhedre,
    featured: false,
    formats: ["Papier"],
    rating: 4.8
  },
  {
    id: "bk-023",
    title: "Kidiwe le petit berger",
    author: "Paule Yvette Ntyam",
    description: "Histoire touchante d'un petit berger africain.",
    price: null,
    currency: "XAF",
    stock: 18,
    category: "jeunesse",
    cover: kidiwePetitBerger,
    featured: false,
    formats: ["Papier"],
    rating: 4.5
  },
  {
    id: "bk-024",
    title: "Kottak - Anthropologie",
    author: "Conrad Phillip Kottak",
    description: "Manuel de référence en anthropologie.",
    price: null,
    currency: "XAF",
    stock: 5,
    category: "sciences-humaines",
    cover: kottak,
    featured: false,
    formats: ["Papier"],
    rating: 4.6
  },
  {
    id: "bk-025",
    title: "La retraititude dans la fonction publique",
    author: "Pierre Vincent Ngambo Fondjo",
    description: "Guide sur la retraite dans la fonction publique.",
    price: null,
    currency: "XAF",
    stock: 8,
    category: "professionnel",
    cover: retraititude,
    featured: false,
    formats: ["Papier"],
    rating: 4.3
  },
  {
    id: "bk-026",
    title: "La santé de A à Z",
    author: "Éditions médicales",
    description: "Le système endocrinien, le métabolisme, les voies respiratoires.",
    price: null,
    currency: "XAF",
    stock: 9,
    category: "sante",
    cover: santeDeAaz,
    featured: false,
    formats: ["Papier"],
    rating: 4.5
  },
  {
    id: "bk-027",
    title: "L'art de la simplicité",
    author: "Dominique Loreau",
    description: "Posséder moins pour plus de liberté et de joie.",
    price: null,
    currency: "XAF",
    stock: 14,
    category: "developpement-personnel",
    cover: artSimplicite2,
    featured: false,
    formats: ["Papier"],
    rating: 4.8
  },
  {
    id: "bk-028",
    title: "L'art de la simplicité",
    author: "Dominique Loreau",
    description: "Posséder moins pour plus de liberté et de joie.",
    price: null,
    currency: "XAF",
    stock: 15,
    category: "developpement-personnel",
    cover: artSimplicite,
    featured: false,
    formats: ["Papier"],
    rating: 4.8
  },
  {
    id: "bk-029",
    title: "Le grand Thermomix",
    author: "Larousse",
    description: "120 recettes pour votre robot Thermomix.",
    price: null,
    currency: "XAF",
    stock: 20,
    category: "cuisine",
    cover: grandThermomix,
    featured: false,
    formats: ["Papier"],
    rating: 4.7
  },
  {
    id: "bk-030",
    title: "Les piliers de l'excellence",
    author: "Youkna Kamyap",
    description: "Services bancaires et financiers - Les clés de l'excellence.",
    price: null,
    currency: "XAF",
    stock: 8,
    category: "finance",
    cover: pilliersExcellence,
    featured: false,
    formats: ["Papier"],
    rating: 4.4
  },
  {
    id: "bk-031",
    title: "Les liens sacrés de l'amour",
    author: "Oumar N'Dao",
    description: "Recueil de textes sur l'amour à travers les classiques.",
    price: null,
    currency: "XAF",
    stock: 10,
    category: "litterature",
    cover: liensSacres,
    featured: false,
    formats: ["Papier"],
    rating: 4.6
  },
  {
    id: "bk-032",
    title: "L'urgence africaine",
    author: "Kako Nubukpo",
    description: "Réflexions sur les défis et opportunités du continent africain.",
    price: null,
    currency: "XAF",
    stock: 12,
    category: "essai",
    cover: urgenceAfricaine,
    featured: true,
    formats: ["Papier"],
    rating: 4.6
  },
  {
    id: "bk-033",
    title: "J'entre en grande section - Cahier de vacances",
    author: "Magnard",
    description: "Toutes les activités de la maternelle pour les 4-5 ans.",
    price: null,
    currency: "XAF",
    stock: 20,
    category: "scolaire",
    cover: maternelleVacances,
    featured: false,
    formats: ["Papier"],
    rating: 4.5
  },
  {
    id: "bk-034",
    title: "L'école des femmes",
    author: "Molière",
    description: "Chef-d'œuvre de la comédie classique.",
    price: null,
    currency: "XAF",
    stock: 12,
    category: "theatre",
    cover: moliereEcoleFemmes,
    featured: false,
    formats: ["Papier"],
    rating: 4.7
  },
  {
    id: "bk-035",
    title: "Objectif 5e - Musicollege",
    author: "Jean-Pierre Blaise",
    description: "Collection d'éducation musicale pour le collège.",
    price: null,
    currency: "XAF",
    stock: 8,
    category: "scolaire",
    cover: objectifCinquieme,
    featured: false,
    formats: ["Papier"],
    rating: 4.3
  },
  {
    id: "bk-036",
    title: "Passion Apéro - Simplissime",
    author: "J.F. Mallet",
    description: "100 recettes simplissimes pour l'apéritif.",
    price: null,
    currency: "XAF",
    stock: 18,
    category: "cuisine",
    cover: passionApero,
    featured: false,
    formats: ["Papier"],
    rating: 4.7
  },
  {
    id: "bk-037",
    title: "Paul et Virginie",
    author: "Bernardin de Saint-Pierre",
    description: "Roman pastoral et romantique du XVIIIe siècle.",
    price: null,
    currency: "XAF",
    stock: 10,
    category: "litterature",
    cover: paulVirginie,
    featured: false,
    formats: ["Papier"],
    rating: 4.6
  },
  {
    id: "bk-038",
    title: "Un secret",
    author: "Philippe Grimbert",
    description: "Roman psychologique poignant sur les secrets de famille.",
    price: null,
    currency: "XAF",
    stock: 12,
    category: "roman",
    cover: philippeGrimbertSecret,
    featured: false,
    formats: ["Papier"],
    rating: 4.7
  },
  {
    id: "bk-039",
    title: "Physical Science",
    author: "Bill W. Tillery",
    description: "Manuel de sciences physiques en anglais.",
    price: null,
    currency: "XAF",
    stock: 6,
    category: "sciences",
    cover: physicalScience,
    featured: false,
    formats: ["Papier"],
    rating: 4.5
  },
  {
    id: "bk-040",
    title: "Plancha",
    author: "Éditions culinaires",
    description: "Poêlées végétariennes, cookies, macarons et recettes à la plancha.",
    price: null,
    currency: "XAF",
    stock: 15,
    category: "cuisine",
    cover: plancha,
    featured: false,
    formats: ["Papier"],
    rating: 4.4
  },
  {
    id: "bk-041",
    title: "Sur le chemin de la mort",
    author: "Gabrielle Bass",
    description: "Roman captivant.",
    price: null,
    currency: "XAF",
    stock: 7,
    category: "roman",
    cover: cheminMort,
    featured: false,
    formats: ["Papier"],
    rating: 4.3
  },
  {
    id: "bk-042",
    title: "The Perfect Guide in ICT - Workbook 3",
    author: "ICT Editions",
    description: "Cahier d'exercices d'informatique en anglais.",
    price: null,
    currency: "XAF",
    stock: 12,
    category: "informatique",
    cover: perfectGuideIct,
    featured: false,
    formats: ["Papier"],
    rating: 4.4
  },
  {
    id: "bk-043",
    title: "Tout se joue avant 6 ans",
    author: "Dr Fitzhugh Dodson",
    description: "Guide d'éducation pour les premières années de l'enfant.",
    price: null,
    currency: "XAF",
    stock: 15,
    category: "parentalite",
    cover: toutSeJoueAvant,
    featured: false,
    formats: ["Papier"],
    rating: 4.8
  },
  {
    id: "bk-044",
    title: "Transformez votre vie",
    author: "Susan Jeffers",
    description: "Méthodes pour oser et mener la vie dont vous rêvez.",
    price: null,
    currency: "XAF",
    stock: 12,
    category: "developpement-personnel",
    cover: transformezVotreVie,
    featured: false,
    formats: ["Papier"],
    rating: 4.7
  },
  {
    id: "bk-045",
    title: "Urgence d'un nouveau pacte républicain et social",
    author: "Urbain Olanguena Awono",
    description: "Rêve d'avenir pour le Cameroun avec préface de Mgr Samuel Kleda.",
    price: null,
    currency: "XAF",
    stock: 10,
    category: "essai-politique",
    cover: urgenceNouveauPacte,
    featured: true,
    formats: ["Papier"],
    rating: 4.5
  }
];