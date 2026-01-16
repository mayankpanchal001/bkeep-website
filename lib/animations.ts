import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Animation utility functions
export const fadeInUp = (element: HTMLElement | null, delay = 0) => {
  if (!element) return;

  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay,
      ease: "power2.out",
    }
  );
};

export const fadeIn = (element: HTMLElement | null, delay = 0) => {
  if (!element) return;

  gsap.fromTo(
    element,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.5,
      delay,
      ease: "power2.out",
    }
  );
};

export const fadeInLeft = (element: HTMLElement | null, delay = 0) => {
  if (!element) return;

  gsap.fromTo(
    element,
    {
      opacity: 0,
      x: -40,
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.6,
      delay,
      ease: "power2.out",
    }
  );
};

export const fadeInRight = (element: HTMLElement | null, delay = 0) => {
  if (!element) return;

  gsap.fromTo(
    element,
    {
      opacity: 0,
      x: 40,
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.6,
      delay,
      ease: "power2.out",
    }
  );
};

export const scaleIn = (element: HTMLElement | null, delay = 0) => {
  if (!element) return;

  gsap.fromTo(
    element,
    {
      opacity: 0,
      scale: 0.95,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      delay,
      ease: "power2.out",
    }
  );
};

// Stagger animation for multiple elements
export const staggerChildren = (
  container: HTMLElement | null,
  childrenSelector: string,
  delay = 0.1
) => {
  if (!container) return;

  const children = container.querySelectorAll(childrenSelector);

  gsap.fromTo(
    children,
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: delay,
      ease: "power2.out",
    }
  );
};

// Scroll-triggered animation
export const scrollReveal = (
  element: HTMLElement | null,
  options: {
    delay?: number;
    duration?: number;
    y?: number;
    opacity?: number;
    once?: boolean;
  } = {}
) => {
  if (!element || typeof window === "undefined") return;

  const {
    delay = 0,
    duration = 0.6,
    y = 30,
    opacity = 0,
    once = true,
  } = options;

  gsap.fromTo(
    element,
    {
      opacity,
      y,
    },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: once ? "play none none none" : "play none none reverse",
      },
    }
  );
};

// Hover animations
export const hoverScale = (element: HTMLElement | null) => {
  if (!element) return;

  element.addEventListener("mouseenter", () => {
    gsap.to(element, {
      scale: 1.03,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  element.addEventListener("mouseleave", () => {
    gsap.to(element, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  });
};

export const hoverElevate = (element: HTMLElement | null) => {
  if (!element) return;

  element.addEventListener("mouseenter", () => {
    gsap.to(element, {
      y: -5,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  element.addEventListener("mouseleave", () => {
    gsap.to(element, {
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  });
};

// Stagger container and item animations (for replacing framer-motion variants)
export const staggerContainer = (element: HTMLElement | null) => {
  if (!element) return;

  const children = element.children;
  gsap.fromTo(
    Array.from(children),
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
    }
  );
};

export const staggerItem = (element: HTMLElement | null, delay = 0) => {
  if (!element) return;

  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      delay,
      ease: "power2.out",
    }
  );
};

// Scroll reveal with in-view detection (replaces useInView from framer-motion)
export const scrollRevealInView = (
  element: HTMLElement | null,
  options: {
    delay?: number;
    duration?: number;
    y?: number;
    opacity?: number;
    once?: boolean;
    margin?: string;
  } = {}
) => {
  if (!element || typeof window === "undefined") return;

  const {
    delay = 0,
    duration = 0.6,
    y = 30,
    opacity = 0,
    once = true,
    margin = "-100px",
  } = options;

  gsap.fromTo(
    element,
    {
      opacity,
      y,
    },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: `top ${margin.includes("-") ? "bottom" : "85%"}`,
        end: "bottom 20%",
        toggleActions: once ? "play none none none" : "play none none reverse",
        once,
      },
    }
  );
};

// Scale animation
export const scaleInAnimation = (element: HTMLElement | null, delay = 0) => {
  if (!element) return;

  gsap.fromTo(
    element,
    {
      opacity: 0,
      scale: 0.9,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      delay,
      ease: "power2.out",
    }
  );
};

// Hover scale with y movement (for buttons)
export const hoverScaleY = (element: HTMLElement | null) => {
  if (!element) return;

  element.addEventListener("mouseenter", () => {
    gsap.to(element, {
      scale: 1.03,
      y: -2,
      duration: 0.2,
      ease: "power2.out",
    });
  });

  element.addEventListener("mouseleave", () => {
    gsap.to(element, {
      scale: 1,
      y: 0,
      duration: 0.2,
      ease: "power2.out",
    });
  });

  element.addEventListener("mousedown", () => {
    gsap.to(element, {
      scale: 0.98,
      duration: 0.1,
      ease: "power2.out",
    });
  });

  element.addEventListener("mouseup", () => {
    gsap.to(element, {
      scale: 1.03,
      y: -2,
      duration: 0.1,
      ease: "power2.out",
    });
  });
};

// Background gradient animation
export const animateBackgroundGradient = (element: HTMLElement | null) => {
  if (!element) return;

  gsap.to(element, {
    backgroundPosition: "100% 100%",
    duration: 20,
    repeat: -1,
    yoyo: true,
    ease: "none",
  });
};

// Note: React hooks are now in lib/hooks/useGSAP.ts

// Export GSAP for direct use
export { gsap, ScrollTrigger };
