import HeroCard from "@/components/HeroSection/HeroCard";
import { cards } from "@/constants";

const HeroSection = () => {
  return (
    <section className="bg-gray-400/5 mt-10 p-12 h-full">
      <div className="font-arimo w-8/12 mx-auto flex flex-col py-24 justify-center items-center gap-y-9">
        <h2 className="text-6xl text-center font-medium mt-2">The only Myanmar electric mobility platform for buildings</h2>

        <p className="text-center w-11/12 text-lg font-light text-black/50">
          EV charging, shared EVs, e-bikes, and more — MyanCharge makes it simple
          for developers to deliver, and manage mobility infrastructure with one
          fully accountable partner.
        </p>

        <button className="border border-black/15 cursor-pointer hover:border-black/50 transition-all ease-linear  rounded-full text-lg px-5 py-2 w-fit">Get Started</button>
      </div>

<div className="grid grid-cols-6 gap-64">


{cards.map((card)=>(
  <HeroCard no={card.no} key={card.no} heading={card.heading} filler={card.filler} />
))}
</div>
      
    </section>
  );
};

export default HeroSection;
