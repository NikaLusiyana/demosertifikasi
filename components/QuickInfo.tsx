import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Users, Trophy, BookOpen } from 'lucide-react';

const QuickInfo = () => {
  const features = [
    {
      icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
      title: "Akreditasi A",
      description: "Terakreditasi A oleh Badan Akreditasi Nasional Sekolah/Madrasah (BAN-S/M)"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Tenaga Pendidik Profesional",
      description: "Guru-guru berpengalaman dengan kualifikasi S1 dan S2 dari universitas terkemuka"
    },
    {
      icon: <Trophy className="h-8 w-8 text-blue-600" />,
      title: "Prestasi Gemilang",
      description: "Meraih berbagai prestasi akademik dan non-akademik tingkat regional dan nasional"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: "Kurikulum Terdepan",
      description: "Menerapkan Kurikulum Merdeka dengan pendekatan pembelajaran yang inovatif"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Mengapa Memilih SMA Nusantara?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami berkomitmen memberikan pendidikan terbaik dengan fasilitas modern dan program unggulan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="pt-8 pb-6">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickInfo;