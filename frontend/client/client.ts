import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const Maintoken = import.meta.env.VITE_API_KEY;
const projectId = import.meta.env.VITE_API_KEY_PROJECTID;

export const client = sanityClient({
  projectId: projectId,
  dataset: "production",
  useCdn: true,
  token: Maintoken,
});
const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);
