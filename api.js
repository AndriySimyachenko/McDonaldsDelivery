import SanityClient from "./sanity";
let sanityQuery = (query, params) => SanityClient.fetch(query, params);

export const getFeaturedRestaurants = () => {
  return sanityQuery(`*[_type == "featured"] {
    ...,
   sections[]->{
     ...,
     dishes[]->,
     type-> {
       name
     }
   }
   }`);
};

export const getCategories = () => {
  return sanityQuery(`*[_type == "category"]`);
};

export const getFeaturedRestaurantsById = (id) => {
  return sanityQuery(
    `
  *[_type == "featured" && _id == $id] {
    ...,
   sections[]->{
     ...,
     dishes[]->,
     type-> {
       name
     }
   }
   }[0]
  `,
    { id }
  );
};
