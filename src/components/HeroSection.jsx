import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white space-y-6">
        <h2 className="text-4xl md:text-6xl font-playfair   tracking-wide">
          Drip.Confidence.Repeat
        </h2>

        <p className="text-lg md:text-xl font-light italic">
        Style That Speaks Before You Do.
</p>
        <div className="flex space-x-6">
          <Link to="/products">
            <button className="px-12 py-4 bg-transparent border-2 border-white text-sm font-light uppercase 
                               rounded-3xl hover:bg-white/10 transition-all duration-300
                               transform hover:scale-105 hover:border-white/80
                               backdrop-blur-sm tracking-widest">
              Discover
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
