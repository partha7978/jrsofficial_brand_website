export function setHomepageMainButtonClick(data: Record<string, any>) {
  if (typeof window !== "undefined" && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: "Homepage_Main_Button_Click",
      ...data,
    });
  }
}

export function setEpisodesSliderViewAllButtonClick(data: Record<string, any>) {
  if (typeof window !== "undefined" && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: "Episodes_Slider_View_All_Button_Click",
      ...data,
    });
  }
}