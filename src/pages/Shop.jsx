import { Navigate } from "react-router-dom";

export default function Shop() {
  // Rediriger vers /librairie pour éviter la duplication
  return <Navigate to="/librairie" replace />;
}

// OU si vous voulez garder Shop comme alias :
/*
export default function Shop() {
  // Utiliser exactement le même code que Library.jsx
  // Ou mieux : importer Library et l'exporter
}
*/