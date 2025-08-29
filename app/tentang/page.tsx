import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Award, Book } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Visi",
      description: "Menjadi sekolah unggul yang menghasilkan generasi berkarakter, berprestasi, dan berwawasan global."
    },
    {
      icon: <Book className="h-8 w-8 text-blue-600" />,
      title: "Misi",
      description: "Menyelenggarakan pendidikan berkualitas tinggi dengan mengembangkan potensi siswa secara optimal."
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Prestasi",
      description: "Meraih berbagai prestasi akademik dan non-akademik di tingkat regional dan nasional."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Komunitas",
      description: "Membangun komunitas sekolah yang solid dengan melibatkan siswa, guru, dan orangtua."
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Tentang Kami</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              SMA Nusantara adalah institusi pendidikan yang berkomitmen untuk menghasilkan 
              lulusan berkualitas dengan karakter yang kuat dan prestasi gemilang.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Sejarah Sekolah</h2>
              <p className="text-gray-600 mb-4">
                Didirikan pada tahun 1985, SMA Nusantara telah menjadi salah satu sekolah 
                menengah atas terbaik di Indonesia. Dengan pengalaman lebih dari 35 tahun 
                dalam dunia pendidikan, kami telah meluluskan ribuan siswa yang sukses 
                melanjutkan pendidikan ke perguruan tinggi terkemuka.
              </p>
              <p className="text-gray-600">
                Sekolah ini didirikan dengan semangat untuk memberikan pendidikan berkualitas 
                tinggi yang tidak hanya fokus pada akademik, tetapi juga pengembangan karakter 
                dan soft skills yang dibutuhkan di era modern.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Gedung SMA Nusantara"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-8 pb-6">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
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