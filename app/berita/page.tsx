import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User } from 'lucide-react';

export default function News() {
  const news = [
    {
      title: "SMA Nusantara Raih Juara 1 Olimpiade Matematika Tingkat Provinsi",
      excerpt: "Tim olimpiade matematika SMA Nusantara berhasil meraih prestasi gemilang dengan meraih juara 1 dalam Olimpiade Matematika tingkat provinsi yang diselenggarakan di Universitas Negeri Jakarta.",
      date: "12 Februari 2024",
      author: "Admin",
      category: "Prestasi",
      image: "https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Pendaftaran Siswa Baru Tahun Ajaran 2024/2025 Dibuka",
      excerpt: "SMA Nusantara membuka pendaftaran siswa baru untuk tahun ajaran 2024/2025. Pendaftaran dapat dilakukan secara online melalui website sekolah atau langsung datang ke sekolah.",
      date: "1 Februari 2024",
      author: "Tim PPDB",
      category: "Pengumuman",
      image: "https://images.pexels.com/photos/5905713/pexels-photo-5905713.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Workshop 'Preparing for University Life' untuk Kelas XII",
      excerpt: "Sekolah mengadakan workshop khusus untuk siswa kelas XII tentang persiapan menghadapi kehidupan kampus, tips memilih jurusan, dan strategi sukses di perguruan tinggi.",
      date: "28 Januari 2024",
      author: "BK SMA Nusantara",
      category: "Kegiatan",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Renovasi Laboratorium Sains Selesai Dilaksanakan",
      excerpt: "Laboratorium sains SMA Nusantara telah selesai direnovasi dengan peralatan modern dan fasilitas terbaru untuk mendukung pembelajaran praktikum yang lebih efektif.",
      date: "20 Januari 2024",
      author: "Admin",
      category: "Fasilitas",
      image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Kunjungan Industri ke PT Teknologi Nusantara",
      excerpt: "Siswa jurusan IPA berkesempatan mengunjungi PT Teknologi Nusantara untuk melihat langsung penerapan ilmu pengetahuan dalam dunia industri teknologi.",
      date: "15 Januari 2024",
      author: "Koordinator IPA",
      category: "Kunjungan",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Peluncuran Program Beasiswa Prestasi Tahun 2024",
      excerpt: "SMA Nusantara meluncurkan program beasiswa prestasi untuk siswa berprestasi dari keluarga kurang mampu. Program ini mencakup pembebasan SPP dan bantuan buku pelajaran.",
      date: "8 Januari 2024",
      author: "Yayasan Nusantara",
      category: "Beasiswa",
      image: "https://images.pexels.com/photos/5905892/pexels-photo-5905892.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Prestasi': 'bg-green-100 text-green-800',
      'Pengumuman': 'bg-blue-100 text-blue-800',
      'Kegiatan': 'bg-purple-100 text-purple-800',
      'Fasilitas': 'bg-orange-100 text-orange-800',
      'Kunjungan': 'bg-teal-100 text-teal-800',
      'Beasiswa': 'bg-yellow-100 text-yellow-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Berita Terbaru</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ikuti perkembangan terkini dari SMA Nusantara, mulai dari prestasi siswa, 
              kegiatan sekolah, hingga pengumuman penting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getCategoryColor(item.category)}>
                      {item.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900 hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {item.date}
                    </div>
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {item.author}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}