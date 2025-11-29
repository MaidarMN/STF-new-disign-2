import React from 'react';
import { ArrowRight, FileText, FlaskConical, Users } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Science Lab"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center md:text-left">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 bg-blue-500/30 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-100 text-xs md:text-sm font-medium mb-6">
            Инноваци • Технологи • Хөгжил
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Монгол Улсын <br />
            <span className="text-blue-300">Шинжлэх Ухааны</span> Хөгжил
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
            Бид шинжлэх ухаан, технологийн төсөл, хөтөлбөрүүдийг санхүүжүүлж, 
            судалгаа хөгжүүлэлтийн үр дүнг үйлдвэрлэлд нэвтрүүлэхэд дэмжлэг үзүүлдэг.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3.5 rounded-lg font-semibold transition-all shadow-lg shadow-blue-900/20">
              Төсөл мэдүүлэх
              <ArrowRight size={18} />
            </button>
            <button className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-3.5 rounded-lg font-semibold transition-all">
              Дэлгэрэнгүй
            </button>
          </div>
        </div>
      </div>

      {/* Floating Stats/Cards at bottom */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 hidden md:block z-20">
        <div className="container mx-auto px-4 grid grid-cols-3 gap-6">
            <FeatureCard icon={FileText} title="Нээлттэй тендер" count="12" />
            <FeatureCard icon={FlaskConical} title="Хэрэгжиж буй төсөл" count="145" />
            <FeatureCard icon={Users} title="Судлаачид" count="2,300+" />
        </div>
      </div>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ElementType, title: string, count: string }> = ({ icon: Icon, title, count }) => (
    <div className="bg-white p-6 rounded-xl shadow-xl border border-slate-100 flex items-center space-x-4 transform hover:-translate-y-1 transition-transform duration-300">
        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
            <Icon size={24} />
        </div>
        <div>
            <p className="text-slate-500 text-sm font-medium">{title}</p>
            <h3 className="text-2xl font-bold text-slate-800">{count}</h3>
        </div>
    </div>
);