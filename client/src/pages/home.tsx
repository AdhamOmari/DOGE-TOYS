import { motion } from "framer-motion";
import { Instagram, Facebook, Phone, MapPin, ExternalLink, Sparkles } from "lucide-react";
import { WhatsAppOutline } from "@/components/icons/whatsapp";
import logo from "@assets/d832cfd3-3661-495e-b4df-94ba89c2eb3a_1769619854329.webp";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const branches = [
  {
    id: "mk-old",
    title: "فرع MK القديم",
    phoneLabel: "0781244498",
    tel: "tel:0781244498",
    whatsapp: "https://wa.me/962781244498",
    address: "إربد - الحي الشرقي بجانب MK القديم",
  },
  {
    id: "mk-new",
    title: "فرع 2 MK جديد",
    phoneLabel: "0790098886",
    tel: "tel:+962790098886",
    whatsapp: "https://wa.me/962790098886",
    address: "إربد - الرهبات الوردية غرب MK الجديد",
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
                      <div className="flex items-center text-white/50 text-sm italic">
                        <MapPin className="ml-1.5 h-4 w-4" />
                        {branch.address}
                      </div>
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
                            اتصال
                          </Button>
                        </a>
                        <a href={branch.whatsapp} target="_blank" rel="noreferrer" className="flex-1">
                          <Button variant="outline" className="w-full h-14 rounded-2xl border-white/10 bg-white/5 font-bold hover:bg-green-500/20 hover:text-green-400 hover:border-green-500/30 transition-all">
                            <WhatsAppOutline className="ml-2 h-6 w-6" />
                            واتس
                          </Button>
                        </a>
                      </div>
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
