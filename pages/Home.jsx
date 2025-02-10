import React, { useEffect, useRef } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  // Hero Section Refs
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const imgRef = useRef(null);
  const taglineRef = useRef(null);

  // Mission & About Section Refs
  const sectionTitleRef = useRef(null);
  const missionStatementsRef = useRef([]);
  missionStatementsRef.current = [];
  const aboutTextRef = useRef(null);

  // Timeline Section Refs
  const timelineCardsRef = useRef([]);
  timelineCardsRef.current = [];

  // Function to add refs to arrays inside .map()
  const addToRefs = (el, refArray) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  };

  useEffect(() => {
    // Hero section animations
    gsap.fromTo(
      [titleRef.current, subtitleRef.current, imgRef.current, taglineRef.current],
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "expo.out", stagger: 0.2 }
    );

    // Mission statements animation
    gsap.fromTo(
      missionStatementsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionTitleRef.current,
          start: "top 70%",
        },
      }
    );

    // About text animation
    gsap.fromTo(
      aboutTextRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: aboutTextRef.current,
          start: "top 80%",
        },
      }
    );

    // Timeline cards animation
    timelineCardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
        }
      );
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-[#F7F2E6] to-[#E6DAC2] px-6 text-center overflow-hidden">
        <div className="max-w-6xl space-y-8">
          <h1 ref={titleRef} className="text-7xl font-bold text-[#4A3F35] mb-4 opacity-0">
            KAAGAZZ
          </h1>
          <h4 ref={subtitleRef} className="text-2xl font-light text-[#6B5D4D] opacity-0">
            Peel to Paper
          </h4>
          
          <div ref={imgRef} className="relative mt-12 w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="../assets/main.jpg"
              alt="Kaagazz Paper Production"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 ref={taglineRef} className="text-xl font-light text-[#6B5D4D] italic opacity-0">
          Building a safe future for all,one sheet at a time.
          </h2>
        </div>
      </section>
      {/* Mission Section */}
      <section className="w-full py-24 bg-[#F5F1EB]">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={sectionTitleRef} className="mb-20 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#4A3F35] mb-8">
              What is Kaagazz
            </h1>
            
            {[
              "Kaagazz is a dream to have forests full of trees and roads free of filth.",
              "Kaagazz is a promise to treat all with respect and care.",
              "Kaagazz is an experience of finest Indian tree-free paper."
            ].map((text, index) => (
              <h2 
                key={index}
                ref={(el) => addToRefs(el, missionStatementsRef)}
                className="text-xl md:text-2xl font-light text-[#6B5D4D] mb-6 opacity-0"
              >
                {text}
              </h2>
            ))}
          </div>

          <div ref={aboutTextRef} className="text-center opacity-0">
            <p className="text-lg md:text-xl text-[#4A3F35] leading-relaxed max-w-4xl mx-auto">
              Kaagazz is a social enterprise founded by DTU alumni. We create premium paper products 
              while empowering marginalized communities through sustainable employment. Our innovative 
              production technology transforms urban waste into exquisite paper, fostering environmental 
              stewardship and social change.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-24 bg-gradient-to-b from-[#3B3228] to-[#1F1B16]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#EAE0C8] mb-16">
            Our Journey Through Time
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                date: "12 May 2024", 
                text: "Incubated at Delhi Technological University's prestigious innovation cell",
                img: "../assets/dtu.jpg"
              },
              { 
                date: "14 Nov 2024", 
                text: "Shortlisted for MSME Hackathon by FITT at IIT Delhi",
                img: "../assets/iit-delhi.jpg"
              },
              { 
                date: "2 Jan 2025", 
                text: "Completed herSTART 4.0 Bootcamp with GUSEC and UNICEF",
                img: "../assets/gsu.jpg"
              }
            ].map((card, index) => (
              <div 
                key={index}
                ref={(el) => addToRefs(el, timelineCardsRef)}
                className="bg-[#5A4D42] rounded-xl p-8 shadow-xl transform transition-all hover:scale-105 duration-300 opacity-0"
              >
                <div className="border-l-2 border-[#BFAF99] pl-4 mb-6">
                  <h3 className="text-xl font-semibold text-[#EAE0C8]">{card.date}</h3>
                </div>
                <p className="text-[#C9B8A3] mb-6 leading-relaxed">{card.text}</p>
                <img 
                  src={card.img} 
                  alt={`Milestone ${index + 1}`} 
                  className="w-full h-56 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* What Do We Do Section */}
      <section className="bg-[#eaeaea] py-24 px-6 relative overflow-hidden">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] mb-20 tracking-wide uppercase">
      What Do We Do?
    </h2>

    <div className="space-y-16">
      {[
        {
          title: "Ability for 'Dis'Ability",
          text: "Connect your site to the most popular apps out there.",
          img: "../assets/disability.jpg",
        },
        {
          title: "Sanitation for All",
          text: "We have overturned the waste problem of urban landscapes into a scalable solution. We care for humans and animals that have suffered from the filth that decays around ourselves.",
          img: "../assets/sanitation.jpg",
        },
        {
          title: "NO to Deforestation",
          text: "We create tree-free carbon neutral and chemical-free paper using our patentable technology. This is key to our fight against global issues like climate change and greenhouse gas emissions.",
          img: "../assets/deforestation.png",
        },
        {
          title: "Inclusive Employment",
          text: "We are an equal opportunity platform that welcomes all genders for dignified employment.",
          img: "../assets/main.jpg",
        }
      ].map((item, index) => (
        <motion.div
          key={index}
          className={`flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="md:w-1/2 w-full p-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#1A1A1A] mb-4">{item.title}</h3>
            <p className="text-md sm:text-lg md:text-xl lg:text-2xl text-[#4A4A4A] font-thin leading-[1.4]">{item.text}</p>
          </div>
          <div className="md:w-1/2 w-full">
            <img 
              src={item.img} 
              alt={item.title} 
              className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-xl" 
            />
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
    {/*Products gallery*/}
    <section className="bg-[#FFFFFF] py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <div className="space-y-16">
          {[  
            {
              title: "Premium Paper Stationaire",
              text: "Perfect for office supplies and environment vigilantees",
              img: "../assets/diary.jpeg",
              btn_text: "Shop Now"
            },
            {
              title: "Publish Your Next Book ",
              text: "Paper with a cause. Excellent for  Premium Hard Cover Books.",
              img: "../assets/book.jpeg",
              btn_text: "Explore Now"
            },
            {
              title: "Are You An Art Connoisseur ?",
              text: "Experience our satin finish guilt-free paper for your aesthetics.",
              img: "../assets/A4.jpg",
              btn_text: "Shop Now"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <div className="md:w-1/2 w-full p-10">
                <h3 className="text-2xl font-semibold text-[#1A1A1A] mb-4">{item.title}</h3>
                <p className="text-3xl text-[#4A4A4A] font-thin mb-10 leading-tight">{item.text}</p>
                <Link to="/shop">
                  <Button text={item.btn_text} />
                </Link>
              </div>
              <div className="md:w-1/2 w-full">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover rounded-2xl shadow-xl" 
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <section className="bg-[#EAEAEA] py-16 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-6xl font-extrabold text-[#1A1A1A] mb-12 tracking-wide uppercase">
          Our Founders
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {[  
            {
              name: "Hemant Singh",
              position: "Co-Founder & CFO",
              bio: "A DTU alumnus and visionary leader, our CFO pioneers sustainable innovation with a passion for technology and impact.",
              img: "../assets/hemant.jpg",
            },
            {
              name: "Srishti Singh",
              position: "Co-Founder & CTO",
              bio: "A DTU alumnus and passionate entrepreneur, our CEO leads with a vision to revolutionize sustainability through innovation",
              img: "../assets/srishti.jpg",
            }
          ].map((founder, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center text-left bg-white shadow-2xl p-6 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <img 
                src={founder.img} 
                alt={founder.name} 
                className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full shadow-lg mr-6" 
              />
              <div>
                <h3 className="text-3xl font-bold text-[#1A1A1A]">{founder.name}</h3>
                <p className="text-lg text-[#4A4A4A] font-medium">{founder.position}</p>
                <p className="text-md text-[#6A6A6A] mt-2">{founder.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Home;
