import "./Course.scss";
import { IoIosArrowDown } from "react-icons/io";
import { Button, SmallLoader } from "../../components";
import { FaVideo } from "react-icons/fa6";
import Footer from "../Footer/Footer";
import { lazy, Suspense, useEffect, useRef, useState } from "react";

const MiniFormSectionWrapper = lazy(() => import("./subPages/MiniFormSection"));
const CourseAboutSection = lazy(() => import("./subPages/CourseAboutSection"));
const FeaturedPodcastSection = lazy(
  () => import("./subPages/FeaturedPodcastSection")
);
const CourseMembershipSection = lazy(
  () => import("./subPages/CourseMembershipSection")
);
const WhoIsThisForSection = lazy(
  () => import("./subPages/WhoIsThisForSection")
);
const WhyDifferentSection = lazy(
  () => import("./subPages/WhyDifferentSection")
);
const CourseAccordionSection = lazy(
  () => import("./subPages/CourseAccordionSection")
);
const StillHaveQuestionSection = lazy(
  () => import("./subPages/StillHaveQuestionSection")
);
const CourseGallerySection = lazy(
  () => import("./subPages/CourseGallerySection")
);
// todo: For the lazy loading, before I have created a lazy.ts file and made every lazy load there for a clean code and imported it here.
// todo: But it didnt worked on production due to Vite's tree shaking the files didnt load, and thats why I have to add lazy load here.

const Course = () => {
  const [loadedSections, setLoadedSections] = useState<number[]>([0]); // load only first section
  const [loadingSections, setLoadingSections] = useState<number[]>([]);

  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    // changing the cooter color and overflow when on load for this page only
    const rootElement = document.getElementById("root");
    if (rootElement && rootElement.style) {
      rootElement.style.background = "#000000";
      rootElement.style.overflow = "hidden";
    }

    return () => {
      if (rootElement && rootElement.style) {
        rootElement.style.background = "#FBF7EC";
        rootElement.style.overflow = "auto";
      }
    };
  }, []);

  const loadSection = async (index: number) => {
    if (loadedSections.includes(index) || loadingSections.includes(index))
      return;

    setLoadingSections((prev) => [...prev, index]);

    try {
      //Fetch logic
      await new Promise((res) => setTimeout(res, 200));
      setLoadedSections((prev) => [...prev, index]);
    } finally {
      setLoadingSections((prev) => prev.filter((i) => i !== index));
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          console.log("Entry is intersecting: ", index, entry.isIntersecting);
          if (entry.isIntersecting) {
            loadSection(index + 1);
          }
        });
      },
      {
        rootMargin: "200px",
        threshold: 0.2,
      }
    );

    // 🔁 Observe only the newly rendered sections
    loadedSections.forEach((index) => {
      const el = sectionRefs.current[index];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [loadedSections]); // rerun when new section is loaded

  return (
    <main className="course">
      {loadedSections.includes(0) && (
        <section
          className="course-video"
          data-index={0}
          ref={(el) => (sectionRefs.current[0] = el)}
        >
          <video
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            autoPlay
            loop
            muted
            preload="auto"
            playsInline
          ></video>
          <div className="course-video-heading">
            <h1>
              Create a Business and Life You <span>Love</span>
            </h1>
          </div>
          <div className="course-video-action">
            <Button
              name="Watch the video"
              backgroundColor=""
              hoverBackgroundColor=""
              color=""
              hoverColor=""
              icon={<FaVideo />}
            />
          </div>
          <div className="course-video-navigation">
            <IoIosArrowDown />
          </div>
        </section>
      )}
      <Suspense fallback={<SmallLoader />}>
        {loadingSections.includes(1) && (
          <section className="section-loader">
            <SmallLoader />
          </section>
        )}
        {loadedSections.includes(1) && (
          <MiniFormSectionWrapper
            index={1}
            ref={(el) => (sectionRefs.current[1] = el)}
          />
        )}
      </Suspense>
      <Suspense fallback={<SmallLoader />}>
        {loadingSections.includes(2) && (
          <section className="section-loader">
            <SmallLoader />
          </section>
        )}

        {loadedSections.includes(2) && (
          <>
            {console.log("Rendering CourseAboutSection")}
            <CourseAboutSection
              index={2}
              ref={(el) => (sectionRefs.current[2] = el)}
            />
          </>
        )}
      </Suspense>
      <Suspense fallback={<SmallLoader />}>
        {loadingSections.includes(3) && (
          <section className="section-loader">
            <SmallLoader />
          </section>
        )}
        {loadedSections.includes(3) && (
          <>
            {console.log("Rendering CourseAboutSection")}
            <FeaturedPodcastSection
              index={3}
              ref={(el) => (sectionRefs.current[3] = el)}
            />
          </>
        )}
      </Suspense>
      <Suspense fallback={<SmallLoader />}>
        {loadingSections.includes(4) && (
          <section className="section-loader">
            <SmallLoader />
          </section>
        )}
        {loadedSections.includes(4) && (
          <CourseMembershipSection
            index={4}
            ref={(el) => (sectionRefs.current[4] = el)}
          />
        )}
      </Suspense>
      <Suspense fallback={<SmallLoader />}>
        {loadingSections.includes(5) && (
          <section className="section-loader">
            <SmallLoader />
          </section>
        )}
        {loadedSections.includes(5) && (
          <WhoIsThisForSection
            index={5}
            ref={(el) => (sectionRefs.current[5] = el)}
          />
        )}
      </Suspense>
      <Suspense fallback={<SmallLoader />}>
        {loadingSections.includes(6) && (
          <section className="section-loader">
            <SmallLoader />
          </section>
        )}
        {loadedSections.includes(6) && (
          <WhyDifferentSection
            index={6}
            ref={(el) => (sectionRefs.current[6] = el)}
          />
        )}
      </Suspense>
      <Suspense fallback={<SmallLoader />}>
        {loadingSections.includes(7) && (
          <section className="section-loader">
            <SmallLoader />
          </section>
        )}
        {loadedSections.includes(7) && (
          <CourseAccordionSection
            index={7}
            ref={(el) => (sectionRefs.current[7] = el)}
          />
        )}
      </Suspense>
      <Suspense fallback={<SmallLoader />}>
        {loadingSections.includes(8) && (
          <section className="section-loader">
            <SmallLoader />
          </section>
        )}
        {loadedSections.includes(8) && (
          <StillHaveQuestionSection
            index={8}
            ref={(el) => (sectionRefs.current[8] = el)}
          />
        )}
      </Suspense>
      <Suspense fallback={<SmallLoader />}>
        {loadingSections.includes(9) && (
          <section className="section-loader">
            <SmallLoader />
          </section>
        )}
        {loadedSections.includes(9) && (
          <CourseGallerySection
            index={9}
            ref={(el) => (sectionRefs.current[9] = el)}
          />
        )}
      </Suspense>
    </main>
  );
};

const CourseWithFooter = Footer(Course);

export default CourseWithFooter;
