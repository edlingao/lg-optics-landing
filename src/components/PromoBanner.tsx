"use client";
import { useEffect, useState } from "react";
import { activePromotion, promotions, type Promotion } from "@/lib/promotions";
import { storeToday } from "@/lib/contact";
import { whatsappUrl } from "@/lib/business";

// Dates are checked in the browser because pages are prerendered once at deploy time.
export default function PromoBanner() {
  const [promo, setPromo] = useState<Promotion>();
  useEffect(() => {
    const update = () => setPromo(activePromotion(storeToday(new Date())));
    update();
    const timer = setInterval(update, 3600000);
    return () => clearInterval(timer);
  }, []);
  if (!promotions.length || !promo) return null;
  return <aside aria-label="Promoción vigente" className="bg-amber-100 text-navy-950 text-center text-sm px-4 py-3">
    <a href={whatsappUrl(promo.whatsapp)} className="font-semibold underline">{promo.text}</a> <span className="block sm:inline text-xs text-gray-700">{promo.conditions}</span>
  </aside>;
}
