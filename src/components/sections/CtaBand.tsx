import { PhoneCall } from "lucide-react";
import { PHONE, PHONE_TEL } from "@/lib/site";
interface CtaBandProps {
    title: string;
    description: string;
    showPhoneNumber?: boolean;
}
export default function CtaBand({
    title,
    description,
    showPhoneNumber,
}: CtaBandProps) {
    return (
        <div className="rounded-3xl bg-blue-700 p-8 text-center text-white md:p-14">
            <h2 className="mb-3 text-3xl text-white md:text-4xl">{title}</h2>
            <p className="mb-6 text-lg text-blue-100">{description}</p>
            <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-lg font-bold text-blue-700 transition hover:bg-blue-50"
            >
                <PhoneCall className="size-5" />
                تماس بگیرید
            </a>
            {showPhoneNumber && (
                <div className="mt-3 text-3xl font-extrabold" dir="ltr">
                    {PHONE}
                </div>
            )}
        </div>
    );
}
