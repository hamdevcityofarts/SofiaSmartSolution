export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-gray-600 mb-6">Page introuvable</p>
      <a href="/" className="text-accent font-semibold">
        Retour à l’accueil
      </a>
    </div>
  );
}
