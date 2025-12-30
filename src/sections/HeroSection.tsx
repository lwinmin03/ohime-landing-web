import HeroCard from "@/components/HeroSection/HeroCard";
import { cards } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

gsap.registerPlugin(SplitText);

const HeroSection = () => {
  const heroRef = useRef<HTMLHeadingElement | null>(null);
  const fillerRef = useRef<HTMLParagraphElement | null>(null);

  useGSAP(() => {
    if (!heroRef.current || !fillerRef.current) return;

    const heroSplit = new SplitText(heroRef.current, {
      type: "lines",
      mask: "lines",
    });

    const fillerSplit = new SplitText(fillerRef.current, {
      type: "lines",
      mask: "lines",
    });

    const tl = gsap.timeline();

    tl.from(heroSplit.lines, {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power4.inOut",
      stagger: 0.06,
    })
    .from(
      fillerSplit.lines,
      {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out",
        stagger: 0.05,
      },
      "-=0.25" 
    );


    return () => {
      heroSplit.revert();
      fillerSplit.revert();
    };
  }, []);

  return (
    <section className="bg-gray-400/5 mt-10 p-12 h-full">
      <div className="font-arimo w-8/12 mx-auto flex flex-col py-24 justify-center items-center gap-y-9">
        <h2
          ref={heroRef}
          className="text-6xl text-center font-medium mt-0.5 p-1"
        >
          The only Myanmar electric mobility platform for buildings
        </h2>

        <p
          ref={fillerRef}
          className="text-center w-11/12 text-lg font-light text-black/50"
        >
          EV charging, shared EVs, e-bikes, and more — MyanCharge makes it simple
          for developers to deliver, and manage mobility infrastructure with one
          fully accountable partner.
        </p>

        <button className="border border-black/15 cursor-pointer hover:border-black/50 transition-all ease-linear rounded-full text-lg px-5 py-2 w-fit">
          Get Started
        </button>
      </div>

      <div className="grid grid-cols-6 gap-64">
        {cards.map((card) => (
          <HeroCard
            key={card.no}
            no={card.no}
            heading={card.heading}
            filler={card.filler}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
