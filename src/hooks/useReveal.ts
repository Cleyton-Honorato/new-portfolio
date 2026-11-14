import { useEffect } from "react";

/**
 * Fades in every element marked with `data-reveal` as it enters the viewport.
 * Elements stay visible if IntersectionObserver is missing, because the hiding
 * CSS only applies once the `js-reveal` class is added here.
 * Elements added later (e.g. after filtering projects) are picked up too.
 */
export function useReveal() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const root = document.documentElement;
    root.classList.add("js-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    const observeWithin = (node: ParentNode) => {
      node.querySelectorAll?.("[data-reveal]:not(.is-visible)").forEach((el) => observer.observe(el));
    };

    observeWithin(document);

    const mutations = new MutationObserver((records) => {
      records.forEach((r) =>
        r.addedNodes.forEach((n) => {
          if (!(n instanceof Element)) return;
          if (n.matches("[data-reveal]")) observer.observe(n);
          observeWithin(n);
        })
      );
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
      root.classList.remove("js-reveal");
    };
  }, []);
}
