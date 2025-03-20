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
  width?: number;
  height?: number;
  icon?: any;
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
}