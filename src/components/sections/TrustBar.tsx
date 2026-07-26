import { Award, BadgePercent, Clock, MapPin, ShieldCheck } from "lucide-react";

const items = [
    [Clock, "خدمات ۲۴ ساعته"],
    [ShieldCheck, "گارانتی کتبی کار"],
    [BadgePercent, "تماس و بازدید رایگان"],
    [MapPin, "پوشش سراسری تهران"],
    [Award, "۱۵ سال تجربه"],
] as const;

export default function TrustBar() {
    return (
        <div className="bg-blue-700 text-white">
            <div className="mx-auto flex w-full max-w-6xl flex-wrap justify-center gap-x-8 gap-y-2 px-5 py-3">
                {items.map(([Icon, text]) => (
                    <span
                        key={text}
                        className="inline-flex items-center gap-2 text-sm font-semibold"
                    >
                        <Icon className="size-4" />
                        {text}
                    </span>
                ))}
            </div>
        </div>
    );
}
