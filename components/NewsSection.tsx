import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { NewsItem } from '../types';

const newsData: NewsItem[] = [
  {
    id: 1,
    category: 'Зарлал',
    date: '2023.10.25',
    title: 'Шинжлэх ухаан, технологийн төслийн сонгон шалгаруулалт эхэллээ',
    summary: '2024 онд хэрэгжүүлэх шинжлэх ухаан, технологийн төслийн саналыг хүлээн авч эхэллээ.',
    image: 'https://picsum.photos/400/250?random=1',
  },
  {
    id: 2,
    category: 'Арга хэмжээ',
    date: '2023.10.20',
    title: '"Инновацийн 7 хоног" арга хэмжээ амжилттай болж өндөрлөлөө',
    summary: 'Монголын инновацийн долоо хоног арга хэмжээнд 500 гаруй судлаачид оролцлоо.',
    image: 'https://picsum.photos/400/250?random=2',
  },
  {
    id: 3,
    category: 'Хамтын ажиллагаа',
    date: '2023.10.15',
    title: 'Гадаад хамтын ажиллагааны шинэ санамж бичигт гарын үсэг зурлаа',
    summary: 'Япон улсын Шинжлэх ухааны сантай хамтран ажиллах гэрээг шинэчиллээ.',
    image: 'https://picsum.photos/400/250?random=3',
  },
];

export const NewsSection: React.FC = () => {
  return (
    <section id="news" className="py-20 md:py-32 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Мэдээ мэдээлэл</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Сүүлийн үеийн үйл явдал</h3>
          </div>
          <a href="#" className="hidden md:flex items-center text-blue-600 font-medium hover:text-blue-700 mt-4 md:mt-0">
            Бүх мэдээг үзэх <ArrowRight size={16} className="ml-2" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-slate-800 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-slate-400 text-xs mb-3">
                  <Calendar size={14} className="mr-2" />
                  {item.date}
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">
                  {item.summary}
                </p>
                <a href="#" className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700">
                  Дэлгэрэнгүй <ArrowRight size={14} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <button className="bg-white border border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-medium w-full">
                Бүх мэдээг үзэх
            </button>
        </div>
      </div>
    </section>
  );
};