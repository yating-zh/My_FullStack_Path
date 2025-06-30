import { createClient } from "@sanity/client";
import imageURLBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-02-01",
  //useCdn: true,
  useCdn: false,
  token: import.meta.env.VITE_SANITY_TOKEN,
});

const builder = imageURLBuilder(client);
export const urlFor = (source) => builder.image(source);
