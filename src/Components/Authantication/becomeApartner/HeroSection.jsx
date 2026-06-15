
const HeroSection = () => {
  return (
    <section
      className="relative h-[620px] w-full overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1625047509248-ec889cbff17f?q=80&w=1974&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1e3a8a]/70"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-8 md:px-20">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold leading-tight md:text-6xl">
            Scale Your Auto Business <br />
            with Find My Mechanic
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            Join India's most trusted network of independent service centers.
          </p>

          <button className="mt-10 rounded-xl bg-orange-400 px-10 py-4 text-lg font-semibold text-white transition hover:bg-orange-500">
            Partner with Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;