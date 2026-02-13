export default function Contact() {
  return (
    <div className="container mx-auto py-20 max-w-xl">
      <h1 className="text-4xl font-bold mb-8 text-center">Contactez-nous</h1>

      <form className="space-y-6">
        <input
          type="text"
          placeholder="Nom complet"
          className="w-full border rounded-lg p-4"
        />
        <input
          type="email"
          placeholder="Adresse email"
          className="w-full border rounded-lg p-4"
        />
        <textarea
          rows="5"
          placeholder="Votre message"
          className="w-full border rounded-lg p-4"
        />
        <button
          type="submit"
          className="w-full bg-accent text-white py-4 rounded-lg font-semibold hover:scale-105 transition"
        >
          Envoyer le message
        </button>
      </form>
    </div>
  );
}
