import "./Course.scss";
import { SmallLoader } from "../../components";
import Footer from "../Footer/Footer";
import { useEffect, useRef, useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import {
  CourseVideoSection,
  CourseMiniFormSection,
  CourseAboutSection,
  CourseFeaturedPodcastSection,
  CourseMembershipSection,
  CourseWhosThisForSection,
  CourseWhyDiffSection,
  CourseAccordionSection,
  CourseStillHaveQuestionSection,
  CourseGallerySection,
} from "../../components/SubPage";
import { VideoTestimonial } from "../../components";

const Course = () => {
  const [loadedSections, setLoadedSections] = useState<number[]>([0]); // load only first section
  const [loadingSections, setLoadingSections] = useState<number[]>([]);

  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    // changing the footer color and overflow when on load for this page only
    const rootElement = document.getElementById("root");
    if (rootElement && rootElement.style) {
      rootElement.style.background = "#000000";
      rootElement.style.overflow = "hidden";
    }

    document.title = "Course | The JRS Show";
    const metaTag = document.querySelector('meta[name="theme-color"]');

    if (metaTag) {
      metaTag.setAttribute("content", "#ffeace");
    }

    return () => {
      if (rootElement && rootElement.style) {
        rootElement.style.background = "#FBF7EC";
        rootElement.style.overflow = "";
      }
      document.title = "The JRS Show | Your Voice, Your Story, Your Show";
      if (metaTag) {
        metaTag.setAttribute("content", "#000000");
      }
    };
  }, []);

  const loadSection = async (index: number) => {
    if (loadedSections.includes(index) || loadingSections.includes(index))
      return;

    setLoadingSections((prev) => [...prev, index]);

    try {
      //Fetch logic
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
    <main className="course">
      {loadedSections.includes(0) && (
        <section
          className="course-video"
          data-index={0}
          ref={(el) => (sectionRefs.current[0] = el)}
        >
          <CourseVideoSection />
        </section>
      )}
      {loadingSections.includes(1) && (
        <section className="section-loader">
          <SmallLoader />
        </section>
      )}
      {loadedSections.includes(1) && (
        <section
          className="course-mini-form-container"
          data-index={1}
          ref={(el) => (sectionRefs.current[1] = el)}
        >
          <CourseMiniFormSection />
        </section>
      )}
      {loadingSections.includes(2) && (
        <section className="section-loader">
          <SmallLoader />
        </section>
      )}
      {loadedSections.includes(2) && (
        <section
          className="course-about"
          data-index={2}
          ref={(el) => (sectionRefs.current[2] = el)}
        >
          <CourseAboutSection />
        </section>
      )}
      {loadingSections.includes(3) && (
        <section className="section-loader">
          <SmallLoader />
        </section>
      )}
      {loadedSections.includes(3) && (
        <section
          className="featured-podcast"
          data-index={3}
          ref={(el) => (sectionRefs.current[3] = el)}
        >
          <CourseFeaturedPodcastSection />
        </section>
      )}
      {loadingSections.includes(4) && (
        <section className="section-loader">
          <SmallLoader />
        </section>
      )}
      {loadedSections.includes(4) && (
        <section
          className="course-membership"
          data-index={4}
          ref={(el) => (sectionRefs.current[4] = el)}
        >
          <CourseMembershipSection />
        </section>
      )}
      {loadingSections.includes(5) && (
        <section className="section-loader">
          <SmallLoader />
        </section>
      )}
      {loadedSections.includes(5) && (
        <section
          className="course-whose-this-for-section"
          data-index={5}
          ref={(el) => (sectionRefs.current[5] = el)}
        >
          <CourseWhosThisForSection />
        </section>
      )}
      {loadingSections.includes(6) && (
        <section className="section-loader">
          <SmallLoader />
        </section>
      )}
      {loadedSections.includes(6) && (
        <section
          className="course-why-different-section"
          data-index={6}
          ref={(el) => (sectionRefs.current[6] = el)}
        >
          <CourseWhyDiffSection />
        </section>
      )}
      {loadingSections.includes(7) && (
        <section className="section-loader">
          <SmallLoader />
        </section>
      )}
      {loadedSections.includes(7) && (
        <section
          className="course-testimonial"
          data-index={7}
          ref={(el) => (sectionRefs.current[7] = el)}
        >
          <VideoTestimonial />
        </section>
      )}
      {loadingSections.includes(8) && (
        <section className="section-loader">
          <SmallLoader />
        </section>
      )}
      {loadedSections.includes(8) && (
        <section
          className="course-accordion"
          data-index={8}
          ref={(el) => (sectionRefs.current[8] = el)}
        >
          <CourseAccordionSection />
        </section>
      )}
      {loadingSections.includes(9) && (
        <section className="section-loader">
          <SmallLoader />
        </section>
      )}
      {loadedSections.includes(9) && (
        <section
          className="section-still-have-question-section"
          data-index={9}
          ref={(el) => (sectionRefs.current[9] = el)}
        >
          <CourseStillHaveQuestionSection />
        </section>
      )}
      {loadingSections.includes(10) && (
        <section className="section-loader">
          <SmallLoader />
        </section>
      )}
      {loadedSections.includes(10) && (
        <section
          className="course-gallery"
          data-index={10}
          ref={(el) => (sectionRefs.current[10] = el)}
        >
          <CourseGallerySection />
        </section>
      )}
    </main>
  );
};

const CourseWithFooter = Footer(Course);

export default CourseWithFooter;
