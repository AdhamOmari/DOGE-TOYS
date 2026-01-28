import { motion } from "framer-motion";
import { Instagram, Facebook, Phone, MapPin, MessageCircle } from "lucide-react";
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
    address: "اربد الحي الشرقي بجانب mk القديم",
  },
  {
    id: "mk-new",
    title: "فرع 2 MK جديد",
    phoneLabel: "+962 7 9009 8886",
    tel: "tel:+962790098886",
    whatsapp: "https://wa.me/962790098886",
    address: "اربد الرهبات الوردية غرب mk الجديد",
  },
] as const;

export default function Home() {
  return (
    <div
      className="min-h-dvh bg-[radial-gradient(1200px_800px_at_20%_10%,rgba(255,214,51,0.18),transparent_55%),radial-gradient(900px_700px_at_90%_30%,rgba(255,255,255,0.06),transparent_60%),radial-gradient(1000px_800px_at_60%_95%,rgba(255,214,51,0.10),transparent_55%),linear-gradient(180deg,#070812,#050610_60%,#04050e)]"
      data-testid="page-home"
    >
      <div className="noise relative">
        <header className="mx-auto max-w-6xl px-5 pt-10 pb-6 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
                <img
                  src={logo}
                  alt="Doge Toys"
                  className="h-full w-full object-cover"
                  data-testid="img-logo"
                />
              </div>
              <div className="leading-tight">
                <div
                  className="font-[800] tracking-tight text-2xl sm:text-3xl"
                  data-testid="text-title"
                >
                  DOGE TOYS
                </div>
                <div
                  className="text-sm text-white/70"
                  data-testid="text-subtitle"
                >
                  متجر ألعاب الحيوانات • فروع إربد
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://www.instagram.com/dogetoys?igsh=dTVlNXoyeTEzeGV2&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="inline-flex"
                data-testid="link-instagram"
              >
                <Button
                  variant="secondary"
                  className="h-10 rounded-xl bg-white/6 text-white hover:bg-white/10 active:scale-[0.99]"
                  data-testid="button-instagram"
                >
                  <Instagram className="ms-2 h-4 w-4" />
                  Instagram
                </Button>
              </a>
              <a
                href="https://www.facebook.com/M.Hamawii?mibextid=wwXIfr&rdid=DgvnrYrbyfGPGwSy&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F184knidCNY%2F%3Fmibextid%3DwwXIfr#"
                target="_blank"
                rel="noreferrer"
                className="inline-flex"
                data-testid="link-facebook"
              >
                <Button
                  variant="secondary"
                  className="h-10 rounded-xl bg-white/6 text-white hover:bg-white/10 active:scale-[0.99]"
                  data-testid="button-facebook"
                >
                  <Facebook className="ms-2 h-4 w-4" />
                  Facebook
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8"
          >
            <div className="glass rounded-3xl p-6 sm:p-8">
              <div className="max-w-2xl">
                <h1
                  className="text-balance text-3xl sm:text-4xl font-[800] tracking-tight"
                  data-testid="text-hero"
                >
                  تواصل معنا واختر أقرب فرع
                </h1>
                <p
                  className="mt-3 text-white/70 leading-relaxed"
                  data-testid="text-hero-desc"
                >
                  رقم هاتف + واتس لكل فرع، مع العنوان وروابط السوشال.
                </p>
              </div>
            </div>
          </motion.div>
        </header>

        <main className="mx-auto max-w-6xl px-5 pb-12 sm:px-6">
          <div
            className="grid gap-4 md:grid-cols-2"
            data-testid="grid-branches"
          >
            {branches.map((b, idx) => (
              <motion.div
                key={b.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 + idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card
                  className="glass relative overflow-hidden rounded-3xl p-6"
                  data-testid={`card-branch-${b.id}`}
                >
                  <div className="absolute inset-0 opacity-70">
                    <div className="absolute -top-16 -left-16 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,214,51,0.28),transparent_60%)]" />
                    <div className="absolute -bottom-20 -right-14 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10),transparent_60%)]" />
                  </div>

                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div
                          className="text-xl font-[800] tracking-tight"
                          data-testid={`text-branch-title-${b.id}`}
                        >
                          {b.title}
                        </div>
                        <div
                          className="mt-2 inline-flex items-center gap-2 rounded-full bg-white/6 px-3 py-1 text-sm text-white/80 ring-1 ring-white/10"
                          data-testid={`text-branch-phone-${b.id}`}
                        >
                          <Phone className="h-4 w-4 text-[hsl(var(--primary))]" />
                          <span dir="ltr">{b.phoneLabel}</span>
                          <span className="text-white/60">رقم هاتف و واتس</span>
                        </div>
                      </div>
                      <div className="rounded-2xl bg-white/6 px-3 py-2 text-xs text-white/70 ring-1 ring-white/10" data-testid={`badge-branch-${b.id}`}>
                        فرع {idx + 1}
                      </div>
                    </div>

                    <div className="mt-5 flex items-start gap-2 text-white/75" data-testid={`text-branch-address-${b.id}`}>
                      <MapPin className="mt-0.5 h-4 w-4 text-white/70" />
                      <div className="leading-relaxed">{b.address}</div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                      <a
                        href={b.tel}
                        className="inline-flex"
                        data-testid={`link-call-${b.id}`}
                      >
                        <Button
                          className="w-full rounded-2xl bg-white text-black hover:bg-white/90 active:scale-[0.99]"
                          data-testid={`button-call-${b.id}`}
                        >
                          <Phone className="ms-2 h-4 w-4" />
                          اتصال
                        </Button>
                      </a>
                      <a
                        href={b.whatsapp}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex"
                        data-testid={`link-whatsapp-${b.id}`}
                      >
                        <Button
                          variant="secondary"
                          className="w-full rounded-2xl bg-[hsl(var(--primary))] text-black hover:brightness-95 active:scale-[0.99]"
                          data-testid={`button-whatsapp-${b.id}`}
                        >
                          <MessageCircle className="ms-2 h-4 w-4" />
                          واتس
                        </Button>
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-3 text-center">
            <div className="text-sm text-white/60" data-testid="text-footer">
              © {new Date().getFullYear()} Doge Toys
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
