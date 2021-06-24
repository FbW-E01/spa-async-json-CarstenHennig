// The following line makes sure your styles are included in the project. Don't remove this.
// import "../styles/main.scss";
// Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/
import { recipes } from "./data.js";

let parsedData = JSON.parse(recipes);
Object.entries(parsedData).forEach((entryCards) => {
  const sections = [
    document.getElementById("cakes"),
    document.getElementById("biscuits"),
    document.getElementById("bread"),
  ];
  entryCards[1].map((card) => {
    sections.forEach((section) => {
      if (card.type === section.id) {
        let cardDetails = `<div class="card m-3" style="width: 18rem;">
               <img src="${
                 card.image
               }" class="card-img-top" alt="Baked Goods" height="200rem">
               <div class="card-body">
                 <h4 class="card-title">${card.title}</h4>
                 <h6>${card.author}<h6>
                 <p class="border-top border-secondary pt-2">Ingredients: ${card.ingredients.join(
                   ", "
                 )}</p>
               </div>
             </div>`;
        section.insertAdjacentHTML("afterbegin", cardDetails);
      }
    });
  });
});

// Object.entries(parseData).forEach((x) => {
//   const section = [
//     document.getElementById("cakes"),
//     document.getElementById("biscuits"),
//     document.getElementById("bread"),
//   ];
//   x[1].map((card) => {
//     section.forEach((res) => {
//       if (card.type === res.id) {
//         let cardDetails = `<div>
//                 <img src=${card.image}>
//                 <div>
//                 <h4>${card.title}</h4>
//                 <h5>${card.author}</h5>
//                 <p>${card.ingredients}</p>
//                 </div>
//                 </div>`;
//         card.insertAdjacentHTML(cardDetails);
//       }
//     });
//   });
// });
