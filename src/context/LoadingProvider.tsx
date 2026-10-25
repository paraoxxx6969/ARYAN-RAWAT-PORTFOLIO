import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import Loading from "../components/Loading";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface LoadingType {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  setLoading: (percent: number) => void;
}

export const LoadingContext = createContext<LoadingType | null>(null);

export const LoadingProvider = ({ children }: PropsWithChildren) => {
  // Check if user has already seen the loading screen this session
  const hasVisited = sessionStorage.getItem("portfolio_visited") === "true";
  const isMobile = window.innerWidth <= 768;

  const [isLoading, setIsLoading] = useState(() => {
    if (isMobile || hasVisited) return false;
    return true;
  });
  const [loading, setLoading] = useState(0);

  const value = { isLoading, setIsLoading, setLoading };

  useEffect(() => {
    // Mark session as visited so back-navigation skips loading
    sessionStorage.setItem("portfolio_visited", "true");

    // On back-navigation (hasVisited=true) or mobile, fire initialFX immediately
    if (isMobile || hasVisited) {
      // Kill all stale GSAP animations & ScrollTriggers from previous mount
      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.killTweensOf("*");

      // Immediately make the main element visible (initialFX does this async normally)
      const mainEl = document.querySelector("main");
      if (mainEl) mainEl.classList.add("main-active");
      document.body.style.overflowY = "auto";
      document.body.style.backgroundColor = "#0b080c";

      // Scroll to top cleanly
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });

      import("../components/utils/initialFX").then((module) => {
        if (module.initialFX) {
          setTimeout(() => {
            module.initialFX();
          }, 80);
        }
      });

      // Re-initialize split text scroll animations after DOM settles
      import("../components/utils/splitText").then((module) => {
        if (module.default) {
          setTimeout(() => {
            ScrollTrigger.refresh();
            module.default();
          }, 200);
        }
      });
    }

    // Cleanup: kill all GSAP instances when leaving this route
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.killTweensOf("*");
    };
  }, []);

  useEffect(() => {}, [loading]);

  return (
    <LoadingContext.Provider value={value as LoadingType}>
      {isLoading && <Loading percent={loading} />}
      <main className="main-body">{children}</main>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
