import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { NewsSection } from './components/NewsSection';
import { Footer } from './components/Footer';
import { AIAssistant } from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow">
        {/* Main Hero Section */}
        <section>
          <Hero />
        </section>

        {/* Quick Links / Services (Simulated) */}
        <section id="services" className="py-16 container mx-auto px-4 mt-20 md:mt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {['Цахим бүртгэл', 'Санхүүжилт', 'Тайлан', 'Лавлагаа'].map((item, idx) => (
                 <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all cursor-pointer text-center group">
                     <div className="w-12 h-12 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-600 transition-colors">
                        <span className="text-blue-600 font-bold text-lg group-hover:text-white transition-colors">{idx + 1}</span>
                     </div>
                     <h3 className="font-semibold text-slate-700">{item}</h3>
                 </div>
             ))}
          </div>
        </section>

        {/* News Section */}
        <NewsSection />
        
        {/* About / CTA Section */}
        <section id="about" className="py-20 bg-blue-900 text-white relative overflow-hidden">
             <div className="absolute inset-0 opacity-10">
                  <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-400 filter blur-3xl"></div>
                  <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-purple-400 filter blur-3xl"></div>
             </div>
             <div className="container mx-auto px-4 relative z-10 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Шинжлэх ухаан бол хөгжлийн түлхүүр</h2>
                  <p className="max-w-2xl mx-auto text-blue-100 text-lg mb-8">
                      Та өөрийн судалгааны ажлыг бодит ажил хэрэг болгохыг хүсч байна уу?
                      Бид таны санааг дэмжихэд бэлэн байна.
                  </p>
                  <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                      Төслийн материал бүрдүүлэх
                  </button>
             </div>
        </section>

      </main>

      <Footer />
      
      {/* Integrated Gemini AI Assistant */}
      <AIAssistant />
    </div>
  );
};

export default App;