import { useEffect, useMemo } from "react";

const useIsVisibleOnScreen = (options, targetRef) => {
  const callbackFunction = (entries) => {
    entries.forEach((entry) => {
      !entry.isIntersecting
        ? (entry.target.style.opacity = 0.4)
        : (entry.target.style.opacity = 1);
    });
  };

  const optionsMemo = useMemo(() => {
    return options;
  }, [options]);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, optionsMemo);
    const Targets = targetRef;

    if (Targets)
      Targets.forEach((target) => {
        observer.observe(target);
      });

    return () => {
      if (Targets)
        Targets.forEach((target) => {
          observer.unobserve(target);
        });
    };
  }, [targetRef, options, optionsMemo]);
};

export default useIsVisibleOnScreen;
