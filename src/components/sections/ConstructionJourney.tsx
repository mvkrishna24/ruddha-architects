"use client";
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '@/styles/constructionJourney.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


interface Stage {
  id: number;
  title: string;
  description: string;
  image: string; // path relative to public folder
}

// Placeholder titles & descriptions – can be customized later
const stages: Stage[] = [
  { id: 1, title: 'Empty Plot', description: 'Site cleared and ready for work.', image: '/construction/01-empty-plot.jpeg' },
  { id: 2, title: 'Excavation', description: 'Ground excavation begins.', image: '/construction/02-excavation.jpeg' },
  { id: 3, title: 'Foundation', description: 'Laying the foundation.', image: '/construction/03-foundation.jpeg' },
  { id: 4, title: 'Columns', description: 'Erecting structural columns.', image: '/construction/04-columns.jpeg' },
  { id: 5, title: 'Ground Floor', description: 'Constructing the ground floor slab.', image: '/construction/05-ground-floor.jpeg' },
  { id: 6, title: 'Walls', description: 'Raising walls and partitions.', image: '/construction/06-walls.jpeg' },
  { id: 7, title: 'Roof', description: 'Roof structure completed.', image: '/construction/07-roof.jpeg' },
  { id: 8, title: 'Shell', description: 'Building envelope sealed.', image: '/construction/08-shell.jpeg' },
  { id: 9, title: 'Services', description: 'Mechanical, electrical, plumbing installed.', image: '/construction/09-services.jpeg' },
  { id: 10, title: 'Exterior', description: 'Facade and external works.', image: '/construction/10-exterior.jpeg' },
  { id: 11, title: 'Interiors', description: 'Interior finishes and detailing.', image: '/construction/11-interiors.jpeg' },
  { id: 12, title: 'Final Villa', description: 'Completed luxury villa.', image: '/construction/12-final-villa.jpeg' },
];

export default function ConstructionJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !imagesRef.current) return;
    const isMobile = window.innerWidth < 768;
    if (isMobile) return; // No GSAP on mobile

    gsap.registerPlugin(ScrollTrigger);

    // Create a timeline that scrubs through the images
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${stages.length * 100}%`, // each stage 100% of viewport height
        scrub: true,
        pin: true,
        anticipatePin: 1,
        snap: 1 / (stages.length - 1),
      },
    });

    // For each stage, fade in the corresponding image and update UI elements
    stages.forEach((stage, i) => {
      const img = imagesRef.current!.children[i] as HTMLElement;
      tl.fromTo(
        img,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        i // start each at its index (scrub will manage exact timing)
      );
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // Render mobile layout if viewport is small
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return (
      <section className={styles.mobileSection} aria-label="Construction Journey">
        <h2 className={styles.heading}>Construction Journey</h2>
        <div className={styles.mobileCarousel} role="region" aria-roledescription="carousel">
          {stages.map((stage) => (
            <div key={stage.id} className={styles.mobileCard}>
              <Image
                src={stage.image}
                alt={stage.title}
                width={300}
                height={200}
                className={styles.mobileImage}
                placeholder="blur"
                blurDataURL="/construction/placeholder.png"
              />
              <div className={styles.mobileInfo}>
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Desktop layout – pinned image sequence with progress rail
  return (
    <section className={styles.desktopSection} ref={containerRef} aria-label="Construction Journey">
      <h2 className={styles.heading}>Construction Journey</h2>
      <div className={styles.contentWrapper}>
        <div className={styles.imageStack} ref={imagesRef}>
          {stages.map((stage) => (
            <div key={stage.id} className={styles.imageWrapper}>
              <Image
                src={stage.image}
                alt={stage.title}
                fill
                className={styles.image}
                placeholder="blur"
                blurDataURL="/construction/placeholder.png"
                sizes="(min-width: 1024px) 60vw, 100vw"
                priority={stage.id === 1}
              />
            </div>
          ))}
        </div>
        {/* Progress rail and textual info */}
        <div className={styles.infoPanel}>
          {stages.map((stage) => (
            <div key={stage.id} className={styles.stageInfo} data-stage-id={stage.id}>
              <div className={styles.stageNumber}>Stage {stage.id}</div>
              <h3 className={styles.stageTitle}>{stage.title}</h3>
              <p className={styles.stageDesc}>{stage.description}</p>
            </div>
          ))}
          <div className={styles.progressRail}>
            {stages.map((stage) => (
              <div key={stage.id} className={styles.progressDot} data-stage-id={stage.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
