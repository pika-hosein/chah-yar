import { PhoneCall } from "lucide-react";
import { PHONE, PHONE_TEL } from "@/lib/site";

interface CtaBandProps {
  title: string;
  description: string;
  showPhoneNumber?: boolean;
}

export default function CtaBand({ title, description, showPhoneNumber }: CtaBandProps) {
  return (
    <div className="cta-band">
      <h2>{title}</h2>
      <p className="text-gray-400!">
        {description}
      </p>
      <a href={`tel:${PHONE_TEL}`} className="btn btn-ghost btn-lg">
        <PhoneCall />
        تماس بگیرید
      </a>
      {showPhoneNumber && <div className="phone-big">{PHONE}</div>}
    </div>
  );
}
