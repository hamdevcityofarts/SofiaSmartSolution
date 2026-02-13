export default function Footer() {
  return (
    <footer className="bg-primary text-slate-300 mt-20">
      <div className="container mx-auto px-6 py-16 grid gap-10 md:grid-cols-4">

        {/* Branding */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">
            Sofia Smart Solutions
          </h3>
          <p className="text-sm leading-relaxed">
            Plateforme de digitalisation des services.
            Nous accompagnons la transformation numérique
            des entreprises, librairies et établissements hôteliers.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Accueil</a></li>
            <li><a href="/about" className="hover:text-white">À propos</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Nos services
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Librairie digitale</li>
            <li>Digitalisation hôtelière</li>
            <li>Services numériques</li>
            <li>Accompagnement digital</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Contact
          </h4>
          <p className="text-sm mb-2">
            📧 contact@sofiasmartsolutions.com
          </p>
          <p className="text-sm mb-2">
            📞 +237 XXX XXX XXX
          </p>
          <p className="text-sm">
            📍 Cameroun
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6 text-center text-sm">
        © {new Date().getFullYear()} Sofia Smart Solutions.  
        Tous droits réservés.
      </div>
    </footer>
  );
}
