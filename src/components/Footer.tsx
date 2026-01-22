import { Heart, Mail, Phone, MapPin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary via-pink to-accent text-primary-foreground mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-xl mb-3">Brînza Dumitrița</h3>
            <p className="text-primary-foreground/90">
              Învățător la clasele primare și informatică
            </p>
            <p className="text-primary-foreground/80 text-sm mt-2">
              Liceul Teoretic „George Meniuc", Chișinău
            </p>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h3 className="font-bold text-xl mb-3">Contact</h3>
            <div className="space-y-2">
              <a
                href="tel:+373068315807"
                className="flex items-center justify-center gap-2 hover:underline"
              >
                <Phone className="w-4 h-4" />
                +373 068 315 807
              </a>
              <a
                href="mailto:brinza.dumitrita@gmail.com"
                className="flex items-center justify-center gap-2 hover:underline"
              >
                <Mail className="w-4 h-4" />
                brinza.dumitrita@gmail.com
              </a>
              <a
                href="https://www.facebook.com/96miss.d"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 hover:underline"
              >
                <Facebook className="w-4 h-4" />
                Facebook
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="text-center md:text-right">
            <h3 className="font-bold text-xl mb-3">Adresă</h3>
            <div className="flex items-center justify-center md:justify-end gap-2">
              <MapPin className="w-4 h-4" />
              <span>Chișinău, Moldova</span>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="flex items-center justify-center gap-2 text-sm">
            Creat cu <Heart className="w-4 h-4 text-yellow animate-pulse" /> pentru
            educație
          </p>
          <p className="text-primary-foreground/70 text-xs mt-2">
            © {new Date().getFullYear()} Brînza Dumitrița. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
