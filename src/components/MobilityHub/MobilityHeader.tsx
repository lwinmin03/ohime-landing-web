import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
// Ensure you are importing from the correct source based on your license
// If testing locally without a token, use "gsap-trial/SplitText"
import { SplitText } from "gsap/SplitText"; 

gsap.registerPlugin(ScrollTrigger, SplitText);

const MobilityHeader = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
  
    if (!textRef.current || !containerRef.current) return;

    gsap.set(textRef.current, { autoAlpha: 1 });

    const split = new SplitText(textRef.current, { 
      type: "words",
    mask:"words",
      wordsClass: "split-word" 
    });


    const anim = gsap.from(split.words, {
      duration: 1,
      yPercent: 100,
      mask:"words",
      autoAlpha: 0, 
      stagger: 0.05,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%", 
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        
      },
    });

    // Cleanup
    return () => {
      split.revert();
      anim.kill();
    };
  }, { scope: containerRef }); // Scope ensures cleanups

  return (
    <div className="w-6/12 font-arimo" >
      <h2 className="px-2 text-lg py-1 text-gray-900/50 w-fit uppercase border border-gray-900/40 rounded-md">
        Electric mobility hub
      </h2>
      <div 
        ref={containerRef} 
        className="w-10/12 mt-2 overflow-hidden" 
      >
        <div 
          ref={textRef} 
          className="text-4xl font-medium text-gray-900"
          
        >
          Tailored solutions to help you get your building EV ready
        </div>
      </div>

      <span className="text-[16px] mt-3 text-gray-900/50 mb-1 block">
        Ohmie GO delivers a suite of integrated solutions that are exclusive to
        your residents.
      </span>
    </div>
  );
};

export default MobilityHeader;