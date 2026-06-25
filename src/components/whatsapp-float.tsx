import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";

interface WhatsAppFloatProps{
  phone: string;
  className?:string;
}
export default function WhatsAppFloat({phone, className}: WhatsAppFloatProps) {
  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noreferrer"
      className={cn("fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 shadow-2xl transition hover:scale-110 ", className)}
    >
      <MessageCircle className="h-8 w-8 text-white" />
    </a>
  );
}