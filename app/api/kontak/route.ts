//app/api/kontak/route.ts

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "Data tidak lengkap." },
        { status: 400 }
      );
    }

    // Simpan ke database
    await prisma.contact.create({
      data: { name, email, phone, subject, message }
    });

    // Kirim email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      subject: `Pesan baru: ${subject} dari ${name}`,
      text: `
Nama   : ${name}
Email  : ${email}
Telepon: ${phone}
Subjek : ${subject}
Pesan  : ${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email or saving contact:", error);
    return NextResponse.json(
      { success: false, error: "Gagal mengirim email atau menyimpan data" },
      { status: 500 }
    );
  }
}
