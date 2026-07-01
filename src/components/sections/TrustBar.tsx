import { Clock, ShieldCheck, BadgePercent, MapPin, Award } from "lucide-react";

export default function TrustBar() {
  return (
    <div className="trustbar">
      <div className="container">
        <span>
          <Clock /> خدمات ۲۴ ساعته
        </span>
        <span>
          <ShieldCheck /> گارانتی کتبی کار
        </span>
        <span>
          <BadgePercent /> تماس و بازدید رایگان
        </span>
        <span>
          <MapPin /> پوشش سراسری تهران
        </span>
        <span>
          <Award /> ۱۵ سال تجربه
        </span>
      </div>
    </div>
  );
}
