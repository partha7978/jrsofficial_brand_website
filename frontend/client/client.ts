import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
    projectId: 'lnbqi1qv',
    dataset: "production",
    // apiVersion: "2021-03-25",
    // useCdn: true,
    // token: process.env.REACT_APP_SANITY_TOKEN,
});
const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);