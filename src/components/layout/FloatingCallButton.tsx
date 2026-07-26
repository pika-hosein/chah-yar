import { Phone } from "lucide-react";
import { PHONE_TEL } from "@/lib/site";

export default function FloatingCallButton() {
    return (
        <a
            href={`tel:${PHONE_TEL}`}
            className="fixed bottom-5 left-5 z-50 inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-3 font-extrabold text-white shadow-xl md:hidden"
        >
            <Phone className="size-5" />
            تماس فوری
        </a>
    );
}
