'use client'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white px-6 py-12">
      {/* Navbar */}
      <header className="flex justify-between items-center max-w-7xl mx-auto mb-16">
        <div className="text-2xl font-bold flex items-center gap-2">
          <span className="text-white">SilverMind</span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#" className="hover:underline">Anasayfa</a>
          <a href="#" className="hover:underline">Hakkımızda</a>
          <a href="#" className="hover:underline">Özellikler</a>
          <a href="#" className="hover:underline">Mentorluk</a>
        </nav>
        <div className="flex gap-2">
          <button className="border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition">
            Giriş Yap
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto mb-16 gap-12">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            SilverMind: <br /> Bilgelik Kazandırır.
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            Emekli profesyoneller için kariyer, etkileşim ve fırsatlar ağı
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-[#0f172a] font-semibold px-6 py-2 rounded-md hover:bg-gray-200 transition">
              Başlayın
            </button>
            <button className="border border-white text-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition">
              Demo İzle
            </button>
          </div>
        </div>

        {/* Görsel */}
        <div className="w-full md:w-1/2">
          <img
            src="/image.png"
            alt="Mentorluk görseli"
            className="w-full max-h-[400px] object-contain rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Feature Cards */}
      <section className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <FeatureCard title="Kariyer Fırsatları" description="Proje bazlı işler" />
        <FeatureCard title="Mentorluk" description="Gençlerle eşleşme" />
        <FeatureCard title="Topluluk" description="Sosyal paylaşım" />
        <FeatureCard title="Akademi" description="Öğrenmeye devam" />
      </section>

      {/* User Showcase */}
      <section className="max-w-7xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-6">Demo Kullanıcı Vitrini</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ProfileCard name="Selçuk Yılmaz" title="Emekli Mühendis" country="Türkiye" />
          <ProfileCard name="Robert Campbell" title="Emekli Hâkim" country="ABD" />
          <ProfileCard name="Jessica Wong" title="Emekli Öğretmen" country="Kanada" />
        </div>
      </section>

      {/* Testimonial */}
      <section className="max-w-5xl mx-auto text-center border-t border-gray-700 pt-10">
        <p className="text-xl italic text-gray-300 mb-4">
          “Emekli olduktan sonra kendimi yeniden değerli hissettim...”
        </p>
        <p className="text-gray-400">– Ayşe Hanım, Emekli Öğretmen</p>
      </section>
    </main>
  )
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white bg-opacity-5 p-4 rounded-xl shadow hover:shadow-md transition">
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  )
}

function ProfileCard({ name, title, country }: { name: string; title: string; country: string }) {
  return (
    <div className="bg-white bg-opacity-5 p-4 rounded-xl shadow hover:shadow-md transition text-left">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-12 h-12 rounded-full bg-white bg-opacity-10" />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-xs text-gray-300">{title} – {country}</p>
        </div>
      </div>
      <p className="text-sm text-gray-400">AI ve yeni nesil teknolojilerle ilgileniyorum.</p>
    </div>
  )
}
