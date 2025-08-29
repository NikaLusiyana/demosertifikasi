import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin, Users } from 'lucide-react';

export default function Activities() {
  const activities = [
    {
      title: "Olimpiade Sains Nasional",
      date: "15 Maret 2024",
      location: "Aula Utama",
      participants: "Siswa Kelas XI & XII",
      description: "Kompetisi sains tingkat sekolah untuk mempersiapkan siswa menghadapi OSN tingkat kabupaten.",
      image: "https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Festival Seni dan Budaya",
      date: "22 April 2024", 
      location: "Lapangan Sekolah",
      participants: "Seluruh Siswa",
      description: "Pameran karya seni, pertunjukan musik, dan tarian tradisional yang menampilkan kreativitas siswa.",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Bakti Sosial Ramadan",
      date: "10 Mei 2024",
      location: "Desa Sukamaju",
      participants: "OSIS & Rohis",
      description: "Kegiatan berbagi takjil dan sembako kepada masyarakat kurang mampu di sekitar sekolah.",
      image: "https://images.pexels.com/photos/6646978/pexels-photo-6646978.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Lomba Olahraga Antar Kelas",
      date: "5 Juni 2024",
      location: "Lapangan Olahraga",
      participants: "Kelas X, XI, XII",
      description: "Turnamen olahraga meliputi futsal, basket, voli, dan badminton untuk mempererat persaudaraan.",
      image: "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Workshop Digital Marketing",
      date: "18 Juli 2024",
      location: "Lab Komputer",
      participants: "Kelas XII IPS",
      description: "Pelatihan digital marketing dan e-commerce untuk mempersiapkan siswa menghadapi dunia kerja modern.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Study Tour Jakarta",
      date: "25 Agustus 2024",
      location: "Jakarta",
      participants: "Kelas XI",
      description: "Kunjungan edukatif ke museum, universitas, dan pusat bisnis untuk memperluas wawasan siswa.",
      image: "https://images.pexels.com/photos/22616346/pexels-photo-22616346.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Kegiatan Sekolah</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai kegiatan menarik yang dirancang untuk mengembangkan potensi siswa 
              dalam bidang akademik, seni, olahraga, dan kepedulian sosial.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48">
                  <img 
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 hover:text-blue-600 transition-colors">
                    {activity.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                    {activity.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                    {activity.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-blue-500" />
                    {activity.participants}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {activity.description}
                  </p>
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