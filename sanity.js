import { createClient } from "@sanity/client";
import imgUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "wov900xb",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});
const builder = imgUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
