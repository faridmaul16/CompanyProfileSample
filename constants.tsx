
import React from 'react';
import { Leaf, Recycle, Sprout, ShieldCheck, Factory, Truck, SearchCheck, Droplets } from 'lucide-react';
import { Product, ProcessStep, Testimonial, GalleryItem } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Pupuk Kandang Kambing Premium",
    description: "Kotoran kambing murni yang telah melalui proses fermentasi sempurna untuk nutrisi tanah yang maksimal.",
    benefits: ["Kaya Nitrogen & Kalium", "Meningkatkan pH Tanah", "Memperbaiki Struktur Tanah"],
    imageUrl: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Pupuk Kompos Organik Cair",
    description: "Ekstrak nutrisi organik cair untuk penyerapan cepat oleh akar dan daun tanaman.",
    benefits: ["Efek Instan", "Mudah Diaplikasikan", "Meningkatkan Daya Tahan"],
    imageUrl: "https://images.unsplash.com/photo-1728895604559-a4e16081504e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    name: "Media Tanam Super Kompos",
    description: "Campuran limbah organik pilihan, sekam, dan kompos kambing siap pakai untuk tabulampot atau kebun.",
    benefits: ["Aerasi Baik", "Menjaga Kelembaban", "Siap Pakai"],
    imageUrl: "https://images.unsplash.com/photo-1586984456747-d78bd259c534?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "Pengumpulan Bahan",
    description: "Seleksi ketat kotoran kambing dari peternakan terpercaya dan limbah organik perkebunan.",
    icon: <Recycle className="w-8 h-8 text-emerald-600" />
  },
  {
    title: "Fermentasi Alami",
    description: "Proses penguraian selama 30-45 hari dengan kontrol suhu dan kelembaban yang presisi.",
    icon: <Droplets className="w-8 h-8 text-emerald-600" />
  },
  {
    title: "Filtrasi & Higienis",
    description: "Pembersihan dari gulma, patogen, dan bau tidak sedap menggunakan teknologi ramah lingkungan.",
    icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />
  },
  {
    title: "Quality Control",
    description: "Uji laboratorium berkala untuk memastikan kandungan NPK seimbang dan standar mutu tinggi.",
    icon: <SearchCheck className="w-8 h-8 text-emerald-600" />
  }
];

export const ADVANTAGES = [
  {
    title: "100% Organik",
    description: "Tanpa bahan kimia sintetis yang dapat merusak ekosistem tanah dalam jangka panjang.",
    icon: <Leaf className="w-6 h-6" />
  },
  {
    title: "Ramah Lingkungan",
    description: "Membantu mengelola limbah ternak dan organik menjadi sumber daya berharga.",
    icon: <Recycle className="w-6 h-6" />
  },
  {
    title: "Kesuburan Tanah",
    description: "Meningkatkan aktivitas mikroba tanah yang membantu pertumbuhan alami tanaman.",
    icon: <Sprout className="w-6 h-6" />
  },
  {
    title: "Keamanan Terjamin",
    description: "Aman bagi petani, konsumen hasil panen, dan keberlangsungan tanah.",
    icon: <ShieldCheck className="w-6 h-6" />
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Bapak Sutrisno",
    role: "Petani Sayur, Lembang",
    content: "Setelah beralih ke pupuk Artha Organik, tanah saya jadi lebih gembur dan hasil panen tomat meningkat hingga 20% dibanding tahun lalu.",
    avatar: "https://picsum.photos/100/100?random=1"
  },
  {
    name: "Ibu Maya",
    role: "Pemilik Nursery, Malang",
    content: "Kualitas pupuknya sangat stabil. Pelanggan tanaman hias saya sangat senang karena tanaman mereka tumbuh lebih hijau dan sehat.",
    avatar: "https://picsum.photos/100/100?random=2"
  }
];

export const GALLERY: GalleryItem[] = [
  { id: 1, category: 'product', title: 'Produk Unggulan', imageUrl: 'https://plus.unsplash.com/premium_photo-1669122601993-449a0a3b70c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 2, category: 'process', title: 'Fasilitas Produksi', imageUrl: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=800' },
  { id: 3, category: 'field', title: 'Kunjungan Petani', imageUrl: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800' },
  { id: 4, category: 'process', title: 'Sortir Bahan Baku', imageUrl: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&q=80&w=800' },
  { id: 5, category: 'field', title: 'Hasil Panen Organik', imageUrl: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800' },
  { id: 6, category: 'product', title: 'Pengemasan', imageUrl: 'https://plus.unsplash.com/premium_photo-1678344170545-c3edef92a16e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
];
