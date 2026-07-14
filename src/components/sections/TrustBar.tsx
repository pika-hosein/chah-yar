import { Clock, ShieldCheck, BadgePercent, MapPin, Award } from "lucide-react";

export default function TrustBar() {
  return (
    <div className="bg-(--brand) text-white" dir="rtl">
      <div className="container mx-auto flex flex-wrap justify-center gap-x-7.5 gap-y-2.5 py-3">
        <span className="inline-flex items-center gap-2 text-sm font-semibold">
          <Clock className="w-4 h-4 opacity-90" aria-hidden="true" /> خدمات ۲۴ ساعته
        </span>
        <span className="inline-flex items-center gap-2 text-sm font-semibold">
          <ShieldCheck className="w-4 h-4 opacity-90" aria-hidden="true" /> گارانتی کتبی کار
        </span>
        <span className="inline-flex items-center gap-2 text-sm font-semibold">
          <BadgePercent className="w-4 h-4 opacity-90" aria-hidden="true" /> تماس و بازدید رایگان
        </span>
        <span className="inline-flex items-center gap-2 text-sm font-semibold">
          <MapPin className="w-4 h-4 opacity-90" aria-hidden="true" /> پوشش سراسری تهران
        </span>
        <span className="inline-flex items-center gap-2 text-sm font-semibold">
          <Award className="w-4 h-4 opacity-90" aria-hidden="true" /> ۱۵ سال تجربه
        </span>
      </div>
    </div>
  );
}