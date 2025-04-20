import { useEffect, useRef, useState } from "react";
import "./Production.scss";
import {
  ProductionHomePage,
  ProductionAboutPage,
  ProductionPricePage,
  ProductionEndCtaPage,
  ProductionDynamicAccordionPage,
} from "../../components/ProdSubPage";
import { SmallLoader } from "../../components";

const Production = () => {
  const [loadedSections, setLoadedSections] = useState<number[]>([0]); // load only first section
  const [loadingSections, setLoadingSections] = useState<number[]>([]);

  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    // changing the cooter color and overflow when on load for this page only
    const rootElement = document.getElementById("root");
    if (rootElement && rootElement.style) {
      rootElement.style.background = "#000000";
      rootElement.style.height = "100%";
    }

    return () => {
      if (rootElement && rootElement.style) {
        rootElement.style.background = "#FBF7EC";
        rootElement.style.height = "auto";
      }
    };
  }, []);

  const loadSection = async (index: number) => {
    if (loadedSections.includes(index) || loadingSections.includes(index))
      return;

    setLoadingSections((prev) => [...prev, index]);

    try {
      await new Promise((res) => setTimeout(res, 500));

      setLoadedSections((prev) => [...prev, index]);
    } finally {
      setLoadingSections((prev) => prev.filter((i) => i !== index));
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = Number(entry.target.getAttribute("data-index"));
        if (entry.isIntersecting) {
          loadSection(index + 1); // Load next section(s) when current is visible
        }
      });
    });

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [loadedSections]);

  return (
    <main className="production">
      {loadedSections.includes(0) && (
        <section
          className="production-home"
          data-index={0}
          ref={(el) => (sectionRefs.current[0] = el)}
        >
          <ProductionHomePage />
        </section>
      )}
      {loadingSections.includes(1) && (
        <section className="section-loader">
          <SmallLoader />
        </section>
      )}
      {loadedSections.includes(1) && (
        <section
          className="production-about"
          data-index={1}
          ref={(el) => (sectionRefs.current[1] = el)}
        >
          <ProductionAboutPage />
        </section>
      )}
      {loadingSections.includes(2) && (
        <section className="section-loader">
          <SmallLoader />
        </section>
      )}
      {loadedSections.includes(2) && (
        <section
          className="production-accordion"
          data-index={2}
          ref={(el) => (sectionRefs.current[2] = el)}
        >
          <ProductionDynamicAccordionPage />
        </section>
      )}
      {loadingSections.includes(3) && (
        <section className="section-loader">
          <SmallLoader />
        </section>
      )}
      {loadedSections.includes(3) && (
        <section
          className="production-price"
          data-index={3}
          ref={(el) => (sectionRefs.current[3] = el)}
        >
          <ProductionPricePage />
        </section>
      )}
      {loadingSections.includes(4) && (
        <section className="section-loader">
          <SmallLoader />
        </section>
      )}
      {loadedSections.includes(4) && (
        <section
          className="production-end"
          data-index={4}
          ref={(el) => (sectionRefs.current[4] = el)}
        >
          <ProductionEndCtaPage />
        </section>
      )}
      {loadingSections.includes(5) && (
        <section className="section-loader">
          <SmallLoader />
        </section>
      )}
    </main>
  );
};

export default Production;
