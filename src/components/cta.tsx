import BookingModal from "./booking-modal";

export default function CTA() {
  return (
    <section className="py-28">
      <div className="container mx-auto px-6">
        <div className="rounded-[3rem] border border-yellow-500/10 bg-linear-to-r from-zinc-950 to-black p-16 text-center">
          <h2 className="text-4xl font-bold text-white md:text-6xl">
            Ready To Wear Your Crown?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            Book your luxury beauty experience today and let us
            craft beauty uniquely for you.
          </p>

          <BookingModal
            size="lg"
            className="mt-10 bg-yellow-500 text-black hover:bg-brand-gold"
          />
        </div>
      </div>
    </section>
  );
}