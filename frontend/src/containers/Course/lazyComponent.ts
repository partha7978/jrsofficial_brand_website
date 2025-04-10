import { lazy } from "react";

export const MiniFormSectionWrapper = lazy(
  () => import("./subPages/MiniFormSection")
);
export const CourseAboutSection = lazy(
  () => import("./subPages/CourseAboutSection")
);
export const FeaturedPodcastSection = lazy(
  () => import("./subPages/FeaturedPodcastSection")
);
export const CourseMembershipSection = lazy(
  () => import("./subPages/CourseMembershipSection")
);
export const WhoIsThisForSection = lazy(
  () => import("./subPages/WhoIsThisForSection")
);
export const WhyDifferentSection = lazy(
  () => import("./subPages/WhyDifferentSection")
);
export const CourseAccordionSection = lazy(
  () => import("./subPages/CourseAccordionSection")
);
export const StillHaveQuestionSection = lazy(
  () => import("./subPages/StillHaveQuestionSection")
);
export const CourseGallerySection = lazy(
  () => import("./subPages/CourseGallerySection")
);
