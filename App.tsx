
import React, { useState, useEffect } from 'react';
// Add Factory to the imported icons list
import { Phone, Mail, MapPin, Menu, X, ArrowRight, CheckCircle2, Facebook, Instagram, Twitter, Factory } from 'lucide-react';
import { PRODUCTS, PROCESS_STEPS, ADVANTAGES, TESTIMONIALS, GALLERY } from './constants';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Tentang', href: '#about' },
    { name: 'Produk', href: '#products' },
    { name: 'Proses', href: '#process' },
    { name: 'Keunggulan', href: '#advantages' },
    { name: 'Galeri', href: '#gallery' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-emerald-600 p-2 rounded-lg">
              <span className="text-white font-bold text-xl">AO</span>
            </div>
            <span className={`text-2xl font-bold ${isScrolled ? 'text-stone-800' : 'text-white md:text-stone-800'} hidden sm:block`}>Artha Organik</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`font-medium transition-colors hover:text-emerald-600 ${isScrolled ? 'text-stone-600' : 'text-stone-800 lg:text-stone-700'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden lg:block">
            <a href="#contact" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full font-medium transition-all shadow-lg hover:shadow-emerald-200">
              Hubungi Kami
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="text-stone-800" /> : <Menu className={isScrolled ? 'text-stone-800' : 'text-stone-800'} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-stone-100 shadow-xl py-4 flex flex-col items-center space-y-4 animate-fade-in-down">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-stone-700 font-medium hover:text-emerald-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="bg-emerald-600 text-white px-8 py-2 rounded-full font-medium" onClick={() => setIsMenuOpen(false)}>
              Hubungi Kami
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 bg-stone-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-50 hidden lg:block rounded-l-full translate-x-1/4"></div>
        <div className="container mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center relative z-10">
          <div className="lg:w-1/2 text-center lg:text-left space-y-8">
            <span className="inline-block bg-emerald-100 text-emerald-800 px-4 py-1 rounded-full font-semibold text-sm tracking-wide uppercase">
              Pertanian Berkelanjutan
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-stone-900 leading-tight">
              Solusi Alami untuk <br />
              <span className="text-emerald-600">Tanah Subur</span> & <br />
              Panen Melimpah
            </h1>
            <p className="text-lg text-stone-600 max-w-lg mx-auto lg:mx-0">
              Menghadirkan pupuk organik kualitas premium dari kotoran kambing dan limbah alami pilihan. 
              Membangun masa depan pertanian Indonesia yang lebih hijau dan produktif.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#products" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center transition-all group shadow-xl shadow-emerald-200">
                Lihat Produk <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#about" className="bg-white hover:bg-stone-100 text-emerald-600 border border-emerald-100 px-8 py-4 rounded-xl font-bold transition-all shadow-sm">
                Pelajari Lebih Lanjut
              </a>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-6 pt-4 text-stone-500 font-medium">
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl text-emerald-700 font-bold">100%</span>
                <span className="text-xs uppercase">Alami</span>
              </div>
              <div className="w-px h-8 bg-stone-200"></div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl text-emerald-700 font-bold">50+</span>
                <span className="text-xs uppercase">Mitra Tani</span>
              </div>
              <div className="w-px h-8 bg-stone-200"></div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl text-emerald-700 font-bold">10+</span>
                <span className="text-xs uppercase">Tahun Pengalaman</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Petani Organik" className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center space-x-4 animate-bounce">
              <div className="bg-amber-100 p-3 rounded-full">
                <CheckCircle2 className="text-amber-600 w-8 h-8" />
              </div>
              <div>
                <p className="font-bold text-stone-800">Kualitas Terjamin</p>
                <p className="text-xs text-stone-500">Standar Nasional Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=400" className="rounded-2xl shadow-lg mt-8" alt="Kebun Organik" />
              <img src="https://images.unsplash.com/photo-1652860213441-6622f9fec77f?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-2xl shadow-lg" alt="Proses Alami" />
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-sm">Tentang Artha Organik</h2>
              <h3 className="text-4xl font-bold text-stone-900 leading-tight">Berkomitmen Mewujudkan Pertanian Yang Lebih Baik</h3>
              <p className="text-stone-600 leading-relaxed">
                Berdiri sejak 2014, Artha Organik berawal dari kepedulian kami terhadap kerusakan ekosistem tanah akibat penggunaan bahan kimia berlebih. Kami percaya bahwa alam memiliki solusi terbaik untuk kesuburan.
              </p>
              <div className="grid sm:grid-cols-2 gap-8 py-4">
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-stone-800 flex items-center">
                    <span className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mr-3 text-sm">V</span> Visi
                  </h4>
                  <p className="text-sm text-stone-500 leading-relaxed">Menjadi produsen pupuk organik terpercaya yang menginspirasi transisi menuju pertanian berkelanjutan di seluruh pelosok Indonesia.</p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-stone-800 flex items-center">
                    <span className="w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mr-3 text-sm">M</span> Misi
                  </h4>
                  <p className="text-sm text-stone-500 leading-relaxed">Menyediakan produk berkualitas tinggi melalui riset berkelanjutan, edukasi petani, dan pengelolaan limbah organik yang bertanggung jawab.</p>
                </div>
              </div>
              <div className="bg-stone-50 p-6 rounded-2xl border-l-4 border-emerald-600 italic text-stone-600">
                "Kesehatan tanah adalah kesehatan kita semua. Kami mengembalikan apa yang alam berikan dengan cara yang paling terhormat."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-stone-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-sm">Produk Kami</h2>
            <h3 className="text-4xl font-bold text-stone-900">Solusi Nutrisi Untuk Setiap Tanaman</h3>
            <p className="text-stone-500">Diformulasikan secara khusus untuk berbagai kebutuhan, mulai dari sayuran, buah-buahan, hingga tanaman hias kesayangan Anda.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col h-full border border-stone-100">
                <div className="h-64 overflow-hidden relative">
                  <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">Premium</div>
                </div>
                <div className="p-8 flex flex-col flex-grow space-y-4">
                  <h4 className="text-2xl font-bold text-stone-900">{product.name}</h4>
                  <p className="text-stone-500 text-sm leading-relaxed">{product.description}</p>
                  <div className="space-y-2 pt-2">
                    {product.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-xs font-medium text-emerald-700">
                        <CheckCircle2 className="w-4 h-4 mr-2" /> {benefit}
                      </div>
                    ))}
                  </div>
                  <div className="pt-6 mt-auto">
                    <button className="w-full border-2 border-emerald-600 text-emerald-600 py-3 rounded-xl font-bold hover:bg-emerald-600 hover:text-white transition-all">
                      Detail Produk
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3 space-y-6">
              <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-sm">Proses Produksi</h2>
              <h3 className="text-4xl font-bold text-stone-900">Bagaimana Kami Menciptakan Keajaiban?</h3>
              <p className="text-stone-500 leading-relaxed">
                Kami menggabungkan metode tradisional yang teruji dengan standar kontrol kualitas modern. Setiap langkah dipantau untuk memastikan hasil akhir yang aman dan efektif bagi tanah Anda.
              </p>
              <div className="pt-4">
                <div className="flex items-center space-x-4 p-4 bg-emerald-50 rounded-2xl">
                  <div className="bg-emerald-600 p-3 rounded-full text-white">
                    <Factory className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-emerald-900">Teknologi Higienis</p>
                    <p className="text-xs text-emerald-700">Bebas bau dan bakteri jahat</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
              {PROCESS_STEPS.map((step, idx) => (
                <div key={idx} className="relative p-8 bg-stone-50 rounded-3xl hover:bg-emerald-50 transition-colors group">
                  <div className="mb-6 bg-white w-16 h-16 flex items-center justify-center rounded-2xl shadow-sm group-hover:shadow-md transition-shadow">
                    {step.icon}
                  </div>
                  <h4 className="text-xl font-bold text-stone-900 mb-2">{step.title}</h4>
                  <p className="text-stone-500 text-sm leading-relaxed">{step.description}</p>
                  <span className="absolute top-8 right-8 text-6xl font-black text-stone-200 opacity-20 pointer-events-none">{idx + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-24 bg-emerald-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-800 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-800 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl opacity-50"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-emerald-400 font-bold tracking-widest uppercase text-sm">Keunggulan Artha Organik</h2>
            <h3 className="text-4xl font-bold">Mengapa Memilih Kami?</h3>
            <p className="text-emerald-100/70">Lebih dari sekadar pupuk, kami adalah mitra pertumbuhan tanaman dan keberlanjutan bumi Anda.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {ADVANTAGES.map((adv, idx) => (
              <div key={idx} className="bg-emerald-800/40 backdrop-blur-sm border border-emerald-700 p-8 rounded-3xl text-center space-y-4 hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="bg-emerald-500 w-16 h-16 flex items-center justify-center rounded-2xl mx-auto text-white shadow-lg">
                  {adv.icon}
                </div>
                <h4 className="text-xl font-bold">{adv.title}</h4>
                <p className="text-emerald-100/60 text-sm leading-relaxed">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-sm">Galeri</h2>
            <h3 className="text-4xl font-bold text-stone-900">Lensa Aktivitas Kami</h3>
            <p className="text-stone-500">Melihat lebih dekat proses di balik layar dan kebahagiaan para mitra tani kami di lapangan.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {GALLERY.map((item) => (
              <div key={item.id} className="relative group overflow-hidden rounded-2xl shadow-lg aspect-square">
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-emerald-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <span className="text-white font-bold text-lg mb-1">{item.title}</span>
                  <span className="text-emerald-200 text-xs uppercase tracking-widest">{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-stone-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-sm">Testimoni</h2>
            <h3 className="text-4xl font-bold text-stone-900">Apa Kata Mereka?</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl shadow-md relative">
                <div className="absolute top-10 right-10 text-stone-100">
                  <svg className="w-16 h-16 fill-current" viewBox="0 0 24 24">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 7.34315 11.3601 6 13.017 6H19.017C20.6739 6 22.017 7.34315 22.017 9V15C22.017 17.7614 19.7784 20 17.017 20H14.017V21ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.017C5.46472 8 5.017 8.44772 5.017 9V12C5.017 12.5523 4.56928 13 4.017 13H2.017C1.46472 13 1.017 12.5523 1.017 12V9C1.017 7.34315 2.36014 6 4.017 6H10.017C11.6739 6 13.017 7.34315 13.017 9V15C13.017 17.7614 10.7786 20 8.017 20H5.017V21Z" />
                  </svg>
                </div>
                <p className="text-lg text-stone-600 mb-8 relative z-10 italic">"{t.content}"</p>
                <div className="flex items-center space-x-4">
                  <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full border-2 border-emerald-100" />
                  <div>
                    <h5 className="font-bold text-stone-900">{t.name}</h5>
                    <p className="text-sm text-stone-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-5/12 space-y-10">
              <div className="space-y-4">
                <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-sm">Hubungi Kami</h2>
                <h3 className="text-4xl font-bold text-stone-900 leading-tight">Mari Tumbuh <br /> Bersama Kami</h3>
                <p className="text-stone-500">Punya pertanyaan atau ingin menjadi mitra distributor? Tim kami siap melayani Anda.</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-2xl text-emerald-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900">Alamat Kantor</p>
                    <p className="text-stone-500 text-sm">Jl. Raya Hijau No. 123, Kawasan Industri Organik, Kabupaten Malang, Jawa Timur</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-2xl text-emerald-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900">Telepon / WhatsApp</p>
                    <p className="text-stone-500 text-sm">+62 812 3456 7890</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-2xl text-emerald-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900">Email</p>
                    <p className="text-stone-500 text-sm">kontak@arthaorganik.com</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-64 bg-stone-100 rounded-3xl overflow-hidden shadow-inner flex items-center justify-center relative">
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale" alt="Map" />
                <div className="relative bg-white p-4 rounded-xl shadow-lg border border-stone-200">
                  <p className="text-xs font-bold text-emerald-600 uppercase">Lokasi Produksi Kami</p>
                  <p className="text-sm font-medium">Malang, Jawa Timur</p>
                </div>
              </div>
            </div>

            <div className="lg:w-7/12 bg-stone-50 p-8 md:p-12 rounded-3xl border border-stone-200 shadow-xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-stone-700">Nama Lengkap</label>
                    <input type="text" className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="Masukkan nama Anda" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-stone-700">Email</label>
                    <input type="email" className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="email@contoh.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-700">Subjek</label>
                  <select className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all appearance-none">
                    <option>Konsultasi Produk</option>
                    <option>Pemesanan Grosir</option>
                    <option>Kemitraan Bisnis</option>
                    <option>Lainnya</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-700">Pesan</label>
                  <textarea rows={5} className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="Tuliskan pesan Anda di sini..."></textarea>
                </div>
                <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-200 transition-all">
                  Kirim Pesan Sekarang
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 pt-20 pb-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-white">
                <div className="bg-emerald-600 p-2 rounded-lg">
                  <span className="font-bold text-xl">AO</span>
                </div>
                <span className="text-2xl font-bold">Artha Organik</span>
              </div>
              <p className="text-sm leading-relaxed">
                Pelopor pupuk organik premium di Indonesia Timur. Berkomitmen pada keberlanjutan tanah dan kesejahteraan petani.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-stone-800 rounded-lg hover:bg-emerald-600 hover:text-white transition-all"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="p-2 bg-stone-800 rounded-lg hover:bg-emerald-600 hover:text-white transition-all"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="p-2 bg-stone-800 rounded-lg hover:bg-emerald-600 hover:text-white transition-all"><Twitter className="w-5 h-5" /></a>
              </div>
            </div>
            
            <div>
              <h5 className="text-white font-bold mb-6">Tautan Cepat</h5>
              <ul className="space-y-3 text-sm">
                <li><a href="#home" className="hover:text-emerald-500 transition-colors">Beranda</a></li>
                <li><a href="#about" className="hover:text-emerald-500 transition-colors">Tentang Kami</a></li>
                <li><a href="#products" className="hover:text-emerald-500 transition-colors">Produk</a></li>
                <li><a href="#gallery" className="hover:text-emerald-500 transition-colors">Galeri</a></li>
                <li><a href="#contact" className="hover:text-emerald-500 transition-colors">Hubungi Kami</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-bold mb-6">Produk Utama</h5>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Pupuk Kandang Kambing</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Kompos Cair Alami</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Media Tanam Super</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Paket Kemitraan</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-bold mb-6">Buletin</h5>
              <p className="text-sm mb-4">Dapatkan tips bertani organik dan info produk terbaru.</p>
              <div className="flex flex-col space-y-2">
                <input type="email" placeholder="Email Anda" className="bg-stone-800 border-none rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 text-white" />
                <button className="bg-emerald-600 text-white rounded-lg py-2 font-bold hover:bg-emerald-700 transition-colors">Berlangganan</button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-stone-800 pt-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs">
            <p>&copy; 2024 Artha Organik Indonesia. Seluruh hak cipta dilindungi.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white">Kebijakan Privasi</a>
              <a href="#" className="hover:text-white">Syarat & Ketentuan</a>
              <a href="#" className="hover:text-white">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/6281234567890" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-8 right-8 bg-emerald-500 text-white p-4 rounded-full shadow-2xl hover:bg-emerald-600 transition-all z-50 animate-pulse hover:animate-none flex items-center group"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap px-0 group-hover:px-2">Hubungi Kami via WhatsApp</span>
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
};

export default App;