import { Linkedin, Instagram, Twitter, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-cool-gray text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold mb-4 inline-block">
              ChillGrid
            </Link>
            <p className="text-white/80 mb-4">
              Transforming hot air into cool breezes — energy-free, aesthetic, and sustainable.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-white/80 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-white/80 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#cooling-mechanisms" className="text-white/80 hover:text-white transition-colors">
                  Cooling Science
                </Link>
              </li>
              <li>
                <Link href="#business-model" className="text-white/80 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-white/80">
                <strong>Email:</strong> info@chillgrid.com
              </li>
              <li className="text-white/80">
                <strong>Phone:</strong> +1 (555) 123-4567
              </li>
              <li className="text-white/80">
                <strong>Address:</strong> 123 Eco Innovation Park, Sustainable City, SC 12345
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
          <p>© {new Date().getFullYear()} ChillGrid. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
