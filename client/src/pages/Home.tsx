import { motion } from "framer-motion";
import { Instagram, Facebook, Phone, MapPin, ExternalLink, Sparkles } from "lucide-react";
import logo from "@assets/d832cfd3-3661-495e-b4df-94ba89c2eb3a_1769619854329.webp";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// WhatsApp Icon Component
const WhatsAppIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const branches = [
  {
    id: "mk-old",
    title: "فرع 1",
    phoneLabel: "0781244498",
    tel: "tel:0781244498",
    whatsapp: "https://wa.me/962781244498",
    address: "إربد - الحي الشرقي بجانب MK القديم",
    mapUrl: "https://maps.app.goo.gl/zBCSu4yZ3k2s1kZX6?g_st=iw",
  },
  {
    id: "mk-new",
    title: "فرع 2 ",
    phoneLabel: "0790098886",
    tel: "tel:+962790098886",
    whatsapp: "https://wa.me/962790098886",
    address: "إربد - الرهبات الوردية غرب MK الجديد",
    mapUrl: "https://maps.app.goo.gl/gFvcUu5AfwQnxyFS6?g_st=iw",
  },
] as const;

export default function Home() {
  return (
    <div
      className="min-h-screen bg-[#050505] text-white selection:bg-yellow-400/30 font-sans"
      data-testid="page-home"
    >
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-yellow-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-yellow-500/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="relative z-10">
        <header className="max-w-5xl mx-auto px-6 pt-12 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center"
          >
            <div className="relative group mb-6">
              <div className="absolute inset-0 bg-yellow-400/20 blur-2xl rounded-full group-hover:bg-yellow-400/30 transition-all duration-500" />
              <div className="relative h-24 w-24 sm:h-32 sm:w-32 rounded-3xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-xl p-1">
                <img
                  src={logo}
                  alt="Doge Toys"
                  className="h-full w-full object-contain"
                  data-testid="img-logo"
                />
              </div>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tighter mb-2 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
              DOGE TOYS
            </h1>
            <p className="text-yellow-400 font-bold tracking-[0.2em] text-sm sm:text-base mb-8 uppercase">
              Your Pet Our Passion
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <a href="https://www.instagram.com/dogetoys" target="_blank" rel="noreferrer">
                <Button variant="outline" className="rounded-full bg-white/5 border-white/10 hover:bg-white/10 px-6 py-6 h-auto transition-all hover:scale-105 active:scale-95">
                  <Instagram className="ml-2 h-5 w-5 text-pink-500" />
                  Instagram
                </Button>
              </a>
              <a href="https://www.facebook.com/M.Hamawii" target="_blank" rel="noreferrer">
                <Button variant="outline" className="rounded-full bg-white/5 border-white/10 hover:bg-white/10 px-6 py-6 h-auto transition-all hover:scale-105 active:scale-95">
                  <Facebook className="ml-2 h-5 w-5 text-blue-500" />
                  Facebook
                </Button>
              </a>
            </div>
          </motion.div>
        </header>

        <main className="max-w-5xl mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-testid="grid-branches">
            {branches.map((branch, idx) => (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="group relative bg-white/[0.03] border-white/10 rounded-[2.5rem] p-8 overflow-hidden hover:bg-white/[0.05] transition-all duration-500 hover:border-yellow-400/30">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Sparkles className="h-12 w-12 text-yellow-400" />
                  </div>

                  <div className="relative z-10">
                    <div className="mb-8">
                      <span className="inline-block px-3 py-1 rounded-full bg-yellow-400 text-black text-[10px] font-black uppercase tracking-wider mb-4">
                        Branch {idx + 1}
                      </span>
                      <h2 className="text-3xl font-black mb-2">{branch.title}</h2>
                      <a 
                        href={branch.mapUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center text-white/50 hover:text-yellow-400 text-sm italic transition-colors group/address"
                      >
                        {/* <MapPin className="ml-1.5 h-4 w-4 group-hover/address:text-yellow-400 transition-colors" />
                        {branch.address}
                        <ExternalLink className="mr-1.5 h-3 w-3 opacity-0 group-hover/address:opacity-100 transition-opacity" /> */}
                      </a>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-black/40 rounded-3xl p-6 border border-white/5 group-hover:border-white/10 transition-colors">
                        <div className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">رقم التواصل والواتس</div>
                        <div className="text-2xl font-mono font-bold tracking-tight text-yellow-400" dir="ltr">
                          {branch.phoneLabel}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <a href={branch.tel} className="flex-1">
                          <Button className="w-full h-14 rounded-2xl bg-white text-black font-bold hover:bg-yellow-400 transition-colors">
                            <Phone className="ml-2 h-5 w-5" />
                          </Button>
                        </a>
                        <a href={branch.whatsapp} target="_blank" rel="noreferrer" className="flex-1">
                          <Button variant="outline" className="w-full h-14 rounded-2xl border-white/10 bg-white/5 font-bold hover:bg-green-500/20 hover:text-green-400 hover:border-green-500/30 transition-all">
                            <WhatsAppIcon className="ml-2 h-6 w-6" />
                          </Button>
                        </a>
                      </div>

                      <a href={branch.mapUrl} target="_blank" rel="noreferrer" className="block mt-3">
                        {/* <Button variant="outline" className="w-full h-14 rounded-2xl border-white/10 bg-white/5 font-bold hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-500/30 transition-all">
                          <MapPin className="ml-2 h-5 w-5" />
                          موقعنا على الخريطة
                          <ExternalLink className="mr-2 h-4 w-4" />
                        </Button> */}
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.footer 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-20 text-center border-t border-white/5 pt-12"
          >
            <p className="text-white/30 text-xs uppercase tracking-[0.3em] font-bold">
              Premium Pet Toys • Arbid, Jordan
            </p>
          </motion.footer>
        </main>
      </div>
    </div>
  );
}
