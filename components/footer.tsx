import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Image src="/logo-white.webp" alt="Diodo Couture" width={180} height={50} className="h-12 w-auto" />
            <p className="text-gray-400 max-w-xs">
              Une fusion de tradition et modernité dans la mode et l'artisanat textile, incarnant l'élégance et
              l'authenticité.
            </p>
            <div className="flex space-x-4">
              <Link href="https://instagram.com" className="text-gray-400 hover:text-gold transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://facebook.com" className="text-gray-400 hover:text-gold transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://twitter.com" className="text-gray-400 hover:text-gold transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-serif font-medium mb-4 text-gold">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/collection" className="text-gray-400 hover:text-white transition-colors">
                  Collection
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-serif font-medium mb-4 text-gold">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Rue de la Mode</li>
              <li>Dakar, Sénégal</li>
              <li>contact@diodocouture.com</li>
              <li>+221 XX XXX XXXX</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-serif font-medium mb-4 text-gold">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Inscrivez-vous pour recevoir nos dernières collections et offres exclusives.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Votre email"
                className="px-4 py-2 bg-gray-900 border border-gray-800 focus:border-gold focus:outline-none"
                required
              />
              <button type="submit" className="px-4 py-2 bg-gold hover:bg-gold-dark text-white transition-colors">
                S'inscrire
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Diodo Couture. Tous droits réservés.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Politique de Confidentialité
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Conditions d'Utilisation
            </Link>
            <Link href="/shipping" className="hover:text-white transition-colors">
              Livraison
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
