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
  link: string;
  backgroundColor?: string;
  color?: string;
  hoverBackgroundColor?: string;
  hoverColor?: string;
  width?: number;
  height?: number;
}