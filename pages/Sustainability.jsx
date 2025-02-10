import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Sustainability = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.querySelector("h2"),
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
    );

    gsap.fromTo(
      sectionRef.current.querySelector("p"),
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", delay: 0.3 }
    );

    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          delay: index * 0.2,
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#F5EDE1] text-[#1A1A1A] py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-6xl font-extrabold text-[#4A4A4A] mb-16 tracking-wide uppercase">
          Our Story
        </h2>
        <p className="text-lg text-[#4A4A4A] leading-relaxed max-w-4xl mx-auto">
        In June 2022, under New Delhi’s scorching sun, we observed a ragpicker tirelessly collecting domestic waste. He carefully separated plastic for recycling but discarded organic waste by the roadside. Nearby, animals scavenged through the waste, often falling ill. Communities also suffered from diseases linked to improper disposal. <br /> This scene revealed a glaring gap: while plastic recycling is prioritized, organic waste remains largely ignored. No major efforts exist to upcycle household vegetable and fruit waste, leaving immense potential untapped. Ragpickers, hailed as “Swachhagrahis” by India’s Prime Minister, lack resources to fully utilize the waste they collect. <br /> This challenge is global, but solutions can start locally. We aspire to address this by creating high-quality recycled paper products from organic waste, promoting sustainability and economically empowering ragpickers. <br /> "The journey begins here, under the scorching sun of realization, with the promise of a greener, healthier tomorrow"
        </p>
      </div>

      <div className="bg-[#F6F6F6] py-16 px-6 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold text-black mb-12">Their Voice</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { name: "Suman", text: "Kaagazz enabled me to gain independence and cover hospital expenses." },
              { name: "Arti", text: "Thanks to Kaagazz, I could afford my children’s education and secure their future." },
              { name: "Nagma", text: "Kaagazz enabled me to rebuild my life after losing my husband and father-in-law." },
              { name: "Chubuli", text: "Kaagazz empowered me to save for emergencies and secure my family’s well-being." },
              { name: "Babli", text: "With Kaagazz, I can now buy basic necessities for my family of eight members." },
              { name: "Uma", text: "With Kaagazz’s help, I was able to start a new chapter in life after my divorce." }
            ].map((item, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="p-6 bg-white shadow-lg rounded-xl"
              >
                <h3 className="text-2xl font-semibold text-[#4A4A4A]">{item.name}</h3>
                <p className="text-lg text-[#4A4A4A] mt-4">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
