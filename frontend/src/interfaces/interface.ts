import React from "react";

export interface episodeCardProps {
  title: string;
  speakerName: string;
  episodeImage: string;
  episodeAudio?: string;
  episodeDate: string;
  category: string;
  cardSize: "small" | "medium" | "large";
}

export interface EpisodesArraySchemaForSlider {
  title: string;
  speakerName: string;
  episodeImage: any;
  episodeDate: string;
  category: string;
  shortDescription: string;
}

export interface MainButton {
  name: string;
  link?: string;
  backgroundColor?: string;
  color?: string;
  hoverBackgroundColor?: string;
  hoverColor?: string;
  borderColor?: string;
  hoverBorderColor?: string;
  width?: string;
  height?: number;
  icon?: React.ReactElement;
  backgroundBlur?: number;
  action?:
    | "redirectExternal"
    | "triggerPopup"
    | "redirectInternal"
    | "formSubmit";
  disabled?: boolean;
  actionData?: string | object | Array<any> | ((arg?: any) => void);
  gtmKey?: string;
}

export interface InputProps {
  value?: string;
  type: string;
  placeholder: string;
  name: string;
  required?: boolean;
  disabled?: boolean;
  background?: string;
  color?: string;
  border?: string;
  className?: string;
  width?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface TestimonialSchema {
  _id: string;
  title: string;
  description: string;
  name: string;
  occupation: string;
  image: string;
}

export interface ContactSchema {
  title: string;
  description: string;
  phone: string;
  email: string;
  address: string;
}

export interface MainAboutPageSchema {
  title: string;
  description: string;
  subscribeText: string;
  views: string;
  impressions: string;
  clients: string;
  hosts: string;
  youtubeLink: string;
  featuredImage: string;
  logoName: string;
  logoDesc: string;
  highlights: string[];
}
export interface AccordionDataProps {
  faqItemTitle: string;
  faqItemImage: React.ReactElement | string;
  faqItemText: string;
}
export interface AccordionStyleProps {
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  color?: string;
  hoverColor?: string;
  borderColor?: string;
  hoverBorderColor?: string;
  backgroundBlur?: string;
  parentBackgroundColor?: string;
  dividerBackgroundColor?: string;
}

export interface HomepageCourseSchema {
  coursePage: {
    title: string;
    description: string;
    buttonText: string;
    courseBanner: string;
  }[],
  productionPage: {
    title: string;
    description: string;
    buttonText: string;
    courseBanner: string;
  }[]
}