import { Phone } from "lucide-react";
import { PHONE_TEL } from "@/lib/site";

export default function FloatingCallButton() {
  return (
    <a href={`tel:${PHONE_TEL}`} className="float-call">
      <Phone />
      تماس فوری
    </a>
  );
}
