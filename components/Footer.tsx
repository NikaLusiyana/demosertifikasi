import Link from 'next/link';
import { GraduationCap, MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Youtube className="h-5 w-5" />, href: "#", label: "YouTube" }
  ];

  const quickLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang Kami', href: '/tentang' },
    { name: 'Kegiatan', href: '/kegiatan' },
    { name: 'Berita', href: '/berita' },
    { name: 'Kontak', href: '/kontak' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-12 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <div>
                <h3 className="text-xl font-bold">SMA Nusantara</h3>
                <p className="text-sm text-gray-400">Sekolah Unggulan</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Sekolah menengah atas unggulan yang berkomitmen menghasilkan lulusan 
              berkualitas dengan karakter yang kuat dan prestasi gemilang.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Menu Utama</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Program Unggulan</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Kelas Olimpiade Sains</li>
              <li>• Program Bahasa Asing</li>
              <li>• Ekstrakurikuler Beragam</li>
              <li>• Bimbingan Konseling</li>
              <li>• Program Beasiswa</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Informasi Kontak</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-blue-400 flex-shrink-0" />
                <span>Jl. Pendidikan No. 123, Kec. Sukamaju, Kota Bandung, Jawa Barat 40123</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>(022) 1234-5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>info@smanusantara.sch.id</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 SMA Nusantara. Semua hak cipta dilindungi.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            © 2025 Nika Lusiyana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;