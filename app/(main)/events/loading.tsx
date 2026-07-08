import PageHeader from "@/components/PageHeader";
import "./loading.css";

export default function EventsLoading() {
  return (
    <>
      <PageHeader label="Upcoming Events" title="Workshops & Bootcamps to Get You There" reveal={false} />
      <section className="bg-ivory-2 py-27.5">
        <div className="wrap">
          <div className="mt-15 grid grid-cols-3 gap-6.5 max-[980px]:grid-cols-2 max-[980px]:max-w-115 max-[980px]:mx-auto max-[680px]:grid-cols-1">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-xl overflow-hidden bg-paper border border-[color-mix(in_srgb,var(--ink)_8%,transparent)]" aria-hidden="true">
                <div className="aspect-[16/10] bg-[linear-gradient(90deg,var(--ivory)_25%,var(--ivory-2)_50%,var(--ivory)_75%)] bg-[length:200%_100%] animate-[shimmer_1.5s_infinite]" />
                <div className="p-5 flex flex-col gap-[0.6rem]">
                  <div className="h-[0.85rem] rounded w-1/2 bg-[linear-gradient(90deg,var(--ivory)_25%,var(--ivory-2)_50%,var(--ivory)_75%)] bg-[length:200%_100%] animate-[shimmer_1.5s_infinite]" />
                  <div className="h-[0.85rem] rounded bg-[linear-gradient(90deg,var(--ivory)_25%,var(--ivory-2)_50%,var(--ivory)_75%)] bg-[length:200%_100%] animate-[shimmer_1.5s_infinite]" />
                  <div className="h-[0.85rem] rounded w-1/2 bg-[linear-gradient(90deg,var(--ivory)_25%,var(--ivory-2)_50%,var(--ivory)_75%)] bg-[length:200%_100%] animate-[shimmer_1.5s_infinite]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
