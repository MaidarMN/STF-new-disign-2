import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">S</div>
              <span className="text-white font-bold text-lg">STF Mongolia</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Үндэсний Шинжлэх ухаан, технологийн сан нь Монгол Улсын шинжлэх ухааны хөгжлийг дэмжих, санхүүжүүлэх төрийн байгууллага юм.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Холбоос</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Бидний тухай</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Бүтэц зохион байгуулалт</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Хууль эрх зүй</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Ил тод байдал</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Үйлчилгээ</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Төсөл бүртгүүлэх</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Тайлан илгээх</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Санхүүжилт шалгах</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Тендер зарлал</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Холбоо барих</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-blue-500 shrink-0" />
                <span>Улаанбаатар хот, Сүхбаатар дүүрэг, 8-р хороо, Бээжингийн гудамж, Мэдээллийн технологийн үндэсний парк</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-blue-500 shrink-0" />
                <span>+976 11-318080</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-blue-500 shrink-0" />
                <span>info@stf.gov.mn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Үндэсний Шинжлэх ухаан, технологийн сан. Бүх эрх хуулиар хамгаалагдсан.</p>
        </div>
      </div>
    </footer>
  );
};