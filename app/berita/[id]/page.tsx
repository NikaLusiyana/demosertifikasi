import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Calendar, User } from 'lucide-react';
import { notFound } from 'next/navigation';

const news = [
  {
    title: "SMA Nusantara Raih Juara 1 Olimpiade Matematika Tingkat Provinsi",
    excerpt: "Tim olimpiade matematika SMA Nusantara berhasil meraih prestasi gemilang dengan meraih juara 1 dalam Olimpiade Matematika tingkat provinsi yang diselenggarakan di Universitas Negeri Jakarta.",
    date: "12 Februari 2024",
    author: "Admin",
    category: "Prestasi",
    image: "https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  // ...data berita lainnya...
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

export default function NewsDetail({ params }: { params: { id: string } }) {
  const id = parseInt(params.id, 10);
  const item = news[id];

  if (!item) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-12 max-w-3xl">
          <div className="mb-8">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover rounded-lg shadow"
            />
          </div>
          <div className="flex items-center gap-2 mb-4">
            <Badge className={getCategoryColor(item.category)}>
              {item.category}
            </Badge>
            <span className="flex items-center text-gray-500 text-sm">
              <Calendar className="h-4 w-4 mr-1" /> {item.date}
            </span>
            <span className="flex items-center text-gray-500 text-sm">
              <User className="h-4 w-4 mr-1" /> {item.author}
            </span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-6">{item.title}</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            {item.excerpt}
          </p>
          {/* Tambahkan konten lengkap berita di sini jika ada */}
        </div>
      </section>
      <Footer />
    </main>
  );
}