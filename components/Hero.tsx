//components/Hero.tsx

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, BookOpen } from 'lucide-react';

const Hero = () => {
  const stats = [
    { icon: <Users className="h-6 w-6" />, value: "1200+", label: "Siswa Aktif" },
    { icon: <BookOpen className="h-6 w-6" />, value: "95%", label: "Tingkat Kelulusan" },
    { icon: <Award className="h-6 w-6" />, value: "50+", label: "Prestasi Tahun Ini" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-20" />
      <div className="relative container mx-auto px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Wujudkan Masa Depan
                <span className="block text-yellow-300">Cemerlang</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                SMA Nusantara menghadirkan pendidikan berkualitas tinggi dengan fasilitas modern, 
                tenaga pengajar profesional, dan program unggulan yang mempersiapkan siswa 
                untuk meraih kesuksesan di masa depan.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg" 
                className="bg-white text-blue-600 hover:bg-black hover:text-white font-semibold px-8 py-3"
              >
                <Link href="/tentang">
                  Pelajari Lebih Lanjut
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg" 
                className="border-none text-blue-600 hover:bg-black hover:text-white font-semibold px-8 py-3"
              >
                <Link href="/kontak">Hubungi Kami</Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-blue-400">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2 text-yellow-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Siswa SMA Nusantara"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-yellow-300 rounded-lg opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;