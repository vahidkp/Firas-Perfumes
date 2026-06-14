import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '@/lib/site';

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink('Hi FIRAS Perfume, I have a question about your fragrances.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-gold px-4 py-3 text-ivory shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle className="h-5 w-5" aria-hidden />
      <span className="label-caps hidden text-[11px] sm:inline">Chat</span>
    </a>
  );
}
