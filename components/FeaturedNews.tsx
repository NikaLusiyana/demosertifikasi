import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowRight } from 'lucide-react';

const FeaturedNews = () => {
  const featuredNews = [
    {
      title: "SMA Nusantara Raih Juara 1 Olimpiade Matematika Tingkat Provinsi",
      excerpt: "Tim olimpiade matematika berhasil meraih prestasi gemilang di kompetisi tingkat provinsi.",
      date: "12 Februari 2024",
      category: "Prestasi",
      image: "https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Workshop Digital Marketing untuk Siswa Kelas XII",
      excerpt: "Pelatihan digital marketing dan e-commerce untuk mempersiapkan siswa menghadapi dunia kerja modern.",
      date: "18 Juli 2024",
      category: "Kegiatan",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Pendaftaran Siswa Baru Tahun Ajaran 2024/2025",
      excerpt: "Pendaftaran siswa baru telah dibuka untuk tahun ajaran 2024/2025. Daftar sekarang!",
      date: "1 Februari 2024",
      category: "Pengumuman",
      image: "https://images.pexels.com/photos/5905713/pexels-photo-5905713.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Berita Terbaru</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ikuti perkembangan terkini dari SMA Nusantara
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredNews.map((news, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="relative h-48">
                <img 
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white text-blue-600 font-semibold">
                    {news.category}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                  {news.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {news.excerpt}
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <Calendar className="h-3 w-3 mr-1" />
                  {news.date}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/berita">
              Lihat Semua Berita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedNews;