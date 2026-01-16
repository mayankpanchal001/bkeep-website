'use client';

import { useEffect, useRef, RefObject, useState } from 'react';
import { gsap, ScrollTrigger } from '@/lib/animations';

export const useGSAP = (
  callback: (context: { scope: HTMLElement | null }) => void,
  dependencies: any[] = []
) => {
  const scopeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const context = gsap.context(() => {
      callback({ scope: scopeRef.current });
    }, scopeRef);

    return () => {
      context.revert();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger && scopeRef.current?.contains(trigger.vars.trigger as HTMLElement)) {
          trigger.kill();
        }
      });
    };
  }, dependencies);

  return scopeRef;
};

export const useScrollReveal = (
  ref: RefObject<HTMLElement>,
  options: {
    delay?: number;
    duration?: number;
    y?: number;
    opacity?: number;
    once?: boolean;
  } = {}
) => {
  useEffect(() => {
    if (!ref.current || typeof window === 'undefined') return;

    const {
      delay = 0,
      duration = 0.6,
      y = 30,
      opacity = 0,
      once = true,
    } = options;

    gsap.fromTo(
      ref.current,
      {
        opacity,
        y,
      },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: once ? 'play none none none' : 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === ref.current) {
          trigger.kill();
        }
      });
    };
  }, [ref, options.delay, options.duration, options.y, options.opacity, options.once]);
};

// Hook equivalent to framer-motion's useInView
export const useInView = (
  ref: RefObject<HTMLElement>,
  options: { once?: boolean; margin?: string } = {}
) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current || typeof window === 'undefined') return;

    const { once = true, margin = '-100px' } = options;

    const scrollTrigger = ScrollTrigger.create({
      trigger: ref.current,
      start: `top ${margin.includes('-') ? 'bottom' : '85%'}`,
      onEnter: () => {
        setIsInView(true);
        if (once) {
          scrollTrigger.kill();
        }
      },
      onLeave: () => {
        if (!once) {
          setIsInView(false);
        }
      },
      onEnterBack: () => {
        if (!once) {
          setIsInView(true);
        }
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [ref, options.once, options.margin]);

  return isInView;
};
