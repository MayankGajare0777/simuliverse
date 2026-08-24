import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hls from 'hls.js';
import { ArrowUpRight, Cpu, Layers, Sparkles, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// --- Components ---

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["Initialize", "Simulate", "Render"];

  useEffect(() => {
    let startTime: number;
    const duration = 2700;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      setCount(Math.floor(progress * 100));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(onComplete, 400);
      }
    };
    requestAnimationFrame(animate);

    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 900);

    return () => clearInterval(wordInterval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between p-8 overflow-hidden">
      <motion.div 
        initial={{ y: -20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }}
        className="text-xs text-muted uppercase tracking-[0.3em]"
      >
        Simulation Engine v2.4
      </motion.div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={wordIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display italic text-[#FF6B4A]"
          >
            {words[wordIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex flex-col items-end justify-end space-y-4">
        <div className="text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums">
          {String(count).padStart(3, "0")}
        </div>
        <div className="w-full max-w-sm h-[3px] bg-stroke/50 relative overflow-hidden">
          <div 
            className="absolute inset-y-0 left-0 accent-gradient"
            style={{ 
              width: `${count}%`, 
              boxShadow: '0 0 8px rgba(255, 107, 74, 0.4)' 
            }}
          />
        </div>
      </div>
    </div>
  );
};

const HlsVideo = ({ src, className, flipped = false }: { src: string, className?: string, flipped?: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      className={`absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 ${flipped ? 'scale-y-[-1]' : ''} ${className}`}
    />
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <div className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface/80 px-3 py-2 transition-shadow duration-300 ${scrolled ? 'shadow-lg shadow-black/40' : ''}`}>
        
        <div className="group relative w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105">
          <div className="absolute inset-0 rounded-full accent-gradient group-hover:rotate-180 transition-transform duration-700" />
          <div className="absolute inset-[1px] bg-bg rounded-full flex items-center justify-center">
            <span className="font-display italic text-[13px] text-[#FF6B4A]">SU</span>
          </div>
        </div>

        <div className="hidden md:block w-px h-5 bg-stroke mx-3" />

        <div className="flex items-center gap-1 mx-2">
          {['Home', 'Features', 'Architecture', 'Docs'].map((item, i) => (
            <button key={item} className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors ${i === 0 ? 'text-text-primary bg-stroke/50' : 'text-muted hover:text-text-primary hover:bg-stroke/50'}`}>
              {item}
            </button>
          ))}
        </div>

        <div className="w-px h-5 bg-stroke mx-2" />

        <button className="group relative text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 accent-gradient-border">
          <div className="relative z-10 flex items-center gap-1 bg-surface px-3 py-1 rounded-full text-white">
            Join Waitlist <ArrowUpRight className="w-3.5 h-3.5 text-[#FF6B4A]" />
          </div>
        </button>

      </div>
    </nav>
  );
};

const Hero = () => {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.name-reveal', 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1.2, delay: 0.1, ease: 'power3.out' }
    );
    tl.fromTo('.blur-in',
      { opacity: 0, filter: 'blur(10px)', y: 20 },
      { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1, stagger: 0.1, ease: 'power3.out' },
      "-=0.8"
    );
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center px-4">
      <div className="absolute inset-0 z-0">
        <HlsVideo src="https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-4xl pt-20">
        <div className="blur-in flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-surface/60 backdrop-blur-md mb-8">
          <div className="w-2 h-2 rounded-full bg-[#FF6B4A] animate-pulse shadow-[0_0_8px_#FF6B4A]" />
          <span className="text-xs text-muted tracking-wide">Building the next simulation engine</span>
        </div>

        <h1 className="name-reveal text-6xl md:text-8xl lg:text-9xl tracking-tight mb-6 font-bold text-text-primary">
          Simulation <br/>
          <span className="font-display italic text-[#FF6B4A]">Universe</span>
        </h1>
        
        <p className="blur-in text-sm md:text-base text-[#888888] max-w-lg mb-10 leading-relaxed">
          The ultimate environment for modeling complex physical systems, generating synthetic training environments, and scaling real-time virtual worlds.
        </p>
        
        <div className="blur-in flex items-center gap-4">
          <button className="accent-gradient-border rounded-full group">
             <div className="relative z-10 bg-text-primary text-bg group-hover:bg-bg group-hover:text-text-primary rounded-full text-sm font-medium px-7 py-3.5 transition-all duration-300">
               Join Waitlist
             </div>
          </button>
          <button className="accent-gradient-border rounded-full group">
             <div className="relative z-10 border border-stroke bg-bg/80 text-text-primary group-hover:border-transparent rounded-full text-sm font-medium px-7 py-3.5 transition-all duration-300">
               Read Docs ↗
             </div>
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
        <span className="text-xs text-muted uppercase tracking-[0.2em] mb-4">Scroll</span>
        <div className="w-px h-10 bg-stroke relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[#FF6B4A] animate-scroll-down" />
        </div>
      </div>
    </section>
  );
};

const SectionHeader = ({ eyebrow, title, subtext, highlight }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
    className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
  >
    <div className="max-w-2xl">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-8 h-px bg-[#FF6B4A]" />
        <span className="text-xs text-muted uppercase tracking-[0.3em]">{eyebrow}</span>
      </div>
      <h2 className="text-4xl md:text-6xl mb-4 font-semibold">
        {title} <span className="font-display italic text-[#FF6B4A]">{highlight}</span>
      </h2>
      <p className="text-muted text-sm md:text-base leading-relaxed">{subtext}</p>
    </div>
    <button className="hidden md:inline-flex items-center gap-2 text-sm accent-gradient-border group rounded-full">
       <span className="relative z-10 px-6 py-3 bg-surface rounded-full flex items-center gap-2 text-white">
         Explore Architecture <ArrowUpRight className="w-4 h-4 text-[#FF6B4A]" />
       </span>
    </button>
  </motion.div>
);

const EngineFeatures = () => {
  const features = [
    { title: "Real-Time Physics Engine", desc: "Sub-millisecond dynamic collision solvers for large scale multi-agent environments.", span: "md:col-span-7", icon: Zap },
    { title: "Distributed Compute Nodes", desc: "Instantly scale rendering across GPU clusters with ultra-low latency.", span: "md:col-span-5", icon: Cpu },
    { title: "Synthetic Sensor Perception", desc: "Generate pixel-perfect LiDAR, Radar, and Depth telemetry on demand.", span: "md:col-span-5", icon: Layers },
    { title: "Neural Shader Pipeline", desc: "Photorealistic ray-tracing coupled with AI-driven material rendering.", span: "md:col-span-7", icon: Sparkles }
  ];

  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <SectionHeader 
          eyebrow="Engine Capabilities" 
          title="Built for extreme" 
          highlight="scale"
          subtext="Empowering researchers and engineers to model real-world interactions with physics-grade accuracy." 
        />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className={`group relative bg-surface/60 border border-stroke p-8 rounded-3xl ${item.span} flex flex-col justify-between hover:border-[#FF6B4A]/40 transition-colors duration-500 overflow-hidden min-h-[260px]`}>
                <div className="absolute top-0 right-0 p-8 text-white/10 group-hover:text-[#FF6B4A]/30 transition-colors">
                  <Icon className="w-20 h-20 stroke-1" />
                </div>
                <div>
                  <div className="w-10 h-10 rounded-full bg-stroke/50 flex items-center justify-center mb-6 text-[#FF6B4A]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted text-sm max-w-md leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-xs font-mono text-muted uppercase tracking-wider">
                  <span>Module 0{i + 1}</span>
                  <div className="w-8 h-px bg-stroke group-hover:bg-[#FF6B4A] transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Explorations = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        pin: '.pinned-content',
        pinSpacing: false,
        start: 'top top',
        end: 'bottom bottom',
      });

      gsap.to(col1Ref.current, {
        y: '-30%',
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: true }
      });

      gsap.to(col2Ref.current, {
        y: '-60%',
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: true }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-bg min-h-[300vh] overflow-hidden py-24">
      <div className="pinned-content h-screen w-full flex items-center justify-center pointer-events-none z-10 absolute top-0">
        <div className="text-center bg-bg/90 backdrop-blur-md p-10 rounded-3xl border border-white/10 pointer-events-auto shadow-2xl max-w-lg mx-4">
          <span className="text-xs text-[#FF6B4A] uppercase tracking-[0.3em] block mb-4">Interactive Sandbox</span>
          <h2 className="text-5xl md:text-7xl mb-6 font-bold">
            Simulated <span className="font-display italic text-[#FF6B4A]">Worlds</span>
          </h2>
          <p className="text-muted text-sm mb-8 leading-relaxed">Explore synthetic environments built entirely through mathematical procedural generation.</p>
          <button className="px-6 py-3 bg-[#FF6B4A] text-white rounded-full text-sm font-medium hover:bg-[#FF8F75] transition-colors shadow-lg shadow-[#FF6B4A]/20">
            Launch Sandbox Preview
          </button>
        </div>
      </div>

      <div className="absolute inset-0 z-0 pt-[50vh]">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 gap-12 md:gap-40 h-full relative">
          <div ref={col1Ref} className="flex flex-col gap-12 md:gap-32 translate-y-32">
            {[1,2,3].map(i => (
              <div key={i} className="aspect-square bg-surface border border-stroke rounded-3xl overflow-hidden max-w-[320px] ml-auto rotate-[-2deg] hover:rotate-0 transition-transform duration-500 hover:z-20 shadow-xl">
                 <img src={`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80`} alt="Simulation visual" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div ref={col2Ref} className="flex flex-col gap-12 md:gap-32 translate-y-[300px]">
            {[4,5,6].map(i => (
              <div key={i} className="aspect-square bg-surface border border-stroke rounded-3xl overflow-hidden max-w-[320px] rotate-[2deg] hover:rotate-0 transition-transform duration-500 hover:z-20 shadow-xl">
                <img src={`https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=600&q=80`} alt="Simulation mesh" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Stats = () => (
  <section className="bg-bg py-16 md:py-24 border-y border-stroke">
    <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-stroke">
      {[
        { val: "10x", label: "Faster Simulation Speed" },
        { val: "99.9%", label: "Physics Fidelity Accuracy" },
        { val: "1M+", label: "Simulated Concurrent Entities" }
      ].map((stat, i) => (
        <div key={i} className="pt-8 md:pt-0 flex flex-col items-center">
          <span className="text-6xl md:text-7xl font-display italic text-[#FF6B4A] mb-2">{stat.val}</span>
          <span className="text-xs text-muted uppercase tracking-widest">{stat.label}</span>
        </div>
      ))}
    </div>
  </section>
);

const Footer = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.to(marqueeRef.current, {
      xPercent: -50,
      duration: 35,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <footer className="relative bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden flex flex-col min-h-screen justify-between">
      <div className="absolute inset-0 z-0">
        <HlsVideo src="https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8" flipped={true} />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-bg to-transparent" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center">
        <div className="w-full overflow-hidden mb-16 whitespace-nowrap flex">
          <div ref={marqueeRef} className="text-7xl md:text-[140px] font-display italic text-white/10 flex select-none">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="px-6">SIMULATION UNIVERSE •</span>
            ))}
          </div>
        </div>

        <a href="mailto:contact@simuliverse.com" className="accent-gradient-border rounded-full group">
          <div className="relative z-10 px-8 py-5 bg-bg/80 backdrop-blur-md border border-white/10 text-xl md:text-2xl rounded-full hover:bg-surface transition-colors flex items-center gap-3">
             contact@simuliverse.com <ArrowUpRight className="w-6 h-6 text-[#FF6B4A]" />
          </div>
        </a>
      </div>

      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-6 mt-20 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 pt-8">
        <div className="flex gap-6 text-sm text-muted">
          {['Twitter', 'GitHub', 'Discord', 'Documentation'].map(link => (
            <a key={link} href="#" className="hover:text-text-primary transition-colors">{link}</a>
          ))}
        </div>
        <div className="flex items-center gap-3 bg-surface/50 backdrop-blur px-4 py-2 rounded-full border border-white/5">
          <div className="w-2 h-2 bg-[#FF6B4A] rounded-full animate-pulse shadow-[0_0_8px_#FF6B4A]" />
          <span className="text-xs text-muted font-mono">Engine v2.4 Active</span>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <main className="relative w-full overflow-x-hidden">
          <Navbar />
          <Hero />
          <EngineFeatures />
          <Explorations />
          <Stats />
          <Footer />
        </main>
      )}
    </>
  );
}
