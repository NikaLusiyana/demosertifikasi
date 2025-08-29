//app/kontak/page.tsx

'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: "Alamat",
      info: "Jl. Pendidikan No. 123, Kec. Sukamaju, Kota Bandung, Jawa Barat 40123"
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: "Telepon",
      info: "(022) 1234-5678"
    },
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: "Email",
      info: "info@smanusantara.sch.id"
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "Jam Operasional",
      info: "Senin - Jumat: 07:00 - 15:00 WIB"
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Silakan hubungi kami untuk informasi lebih lanjut tentang pendaftaran, 
              program sekolah, atau pertanyaan lainnya.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-none shadow-sm">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                          <p className="text-gray-600 text-sm">{info.info}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Kirim Pesan</CardTitle>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 text-center">Lokasi Sekolah</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                      <p className="text-gray-600 font-medium">Peta Lokasi SMA Nusantara</p>
                      <p className="text-gray-500 text-sm mt-2">
                        Jl. Pendidikan No. 123, Kec. Sukamaju, Kota Bandung
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}