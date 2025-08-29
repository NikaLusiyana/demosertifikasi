//components/ContactForm.tsx

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubjectChange = (value: string) => {
    setFormData(prev => ({ ...prev, subject: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error('Nama harus diisi');
      return false;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error('Email tidak valid');
      return false;
    }
    if (!formData.phone.trim() || !/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      toast.error('Nomor telepon tidak valid');
      return false;
    }
    if (!formData.subject) {
      toast.error('Subjek harus dipilih');
      return false;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      toast.error('Pesan harus diisi minimal 10 karakter');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/kontak", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Pesan berhasil dikirim! Kami akan segera menghubungi Anda.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        const { error } = await res.json();
        toast.error(error || "Terjadi kesalahan, coba lagi.");
      }
    } catch (err) {
      toast.error("Gagal menghubungi server.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Nama Lengkap *</Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Masukkan nama lengkap"
            className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="nama@email.com"
            className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone">Nomor Telepon *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="08xx-xxxx-xxxx"
            className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">Subjek *</Label>
          <Select onValueChange={handleSubjectChange} value={formData.subject}>
            <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-blue-500">
              <SelectValue placeholder="Pilih subjek" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pendaftaran">Informasi Pendaftaran</SelectItem>
              <SelectItem value="akademik">Program Akademik</SelectItem>
              <SelectItem value="fasilitas">Fasilitas Sekolah</SelectItem>
              <SelectItem value="ekstrakurikuler">Ekstrakurikuler</SelectItem>
              <SelectItem value="beasiswa">Program Beasiswa</SelectItem>
              <SelectItem value="umum">Pertanyaan Umum</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Pesan *</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Tuliskan pesan Anda di sini..."
          className="min-h-32 transition-all duration-200 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <Button 
        type="submit" 
        size="lg" 
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <div className="flex items-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
            Mengirim Pesan...
          </div>
        ) : (
          <div className="flex items-center">
            <Send className="mr-2 h-5 w-5" />
            Kirim Pesan
          </div>
        )}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        * Kolom wajib diisi. Data Anda akan kami jaga kerahasiaannya.
      </p>
    </form>
  );
};

export default ContactForm;