import { SITE } from '@/lib/site';

export function AnnouncementBar() {
  return (
    <div className="bg-gold text-onyx">
      <div className="container-px flex items-center justify-center py-2 text-center">
        <p className="label-caps text-[10px] sm:text-[11px]">{SITE.announcement}</p>
      </div>
    </div>
  );
}
