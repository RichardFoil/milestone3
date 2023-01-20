// import axios from 'axios';

// export function searchBreweriesByZip(zipcode) {
//   return axios
//     .get(`https://api.openbrewerydb.org/breweries?by_postal=${zipcode}&per_page=5`)
//     .then(response => {
      
//     });
// }


// const forum = result.forum.row.map(processRow);
//                 let collisions = 0, errors = 0, added = 0;
//                 const total = forum.length;
//                 for (let i = 0; i < total; i++) {
//                     try {
//                         const { id } = forum[i];
//                         const existingPost = await Post.findByPk(id)
//                         if (!existingPost) {
//                             const post = await Post.create(forum[i])
//                             added++;
//                         } else {
//                             collisions++;
//                         }
//                     } catch (e) {
//                         console.log(e);
//                         errors++;
//                     }
//                 }
