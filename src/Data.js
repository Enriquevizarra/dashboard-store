// * HotDihses 
import HotPot from "./assets/hot-pot.png"
import areopuerto from "./assets/areopuerto.png"
import pollito from "./assets/pollito.png"
import beefPeper from "./assets/beef-pepper.png"
// * ColdDishes
import salad from "./assets/salad.png"
import salad2 from "./assets/salad2.png"
import ceviche from "./assets/ceviche.png"
// * SoupDishes
import SoupWithUdonNodle from "./assets/sopaFideoUdon.png"
import Ramen from "./assets/ramen.png"
// * GrillDishes
import SeaFoodGrill from "./assets/seaFoodGrill.png"
import BeafGrill from "./assets/BeafGrill.png"


const Data = [
  { 
    id:0,
    title: "Hot Dishes",
    dishes: [
      {
        id:1,
        img: HotPot,
        description: "HotDogs and potatoes",
        price: "$30",
        inventory: "20 Bowls avaible",     
      },
      {
        id:2,
        img: areopuerto,
        description: "Aeropuerto ",
        price: "$30.01",
        inventory: "20 Bowls avaible",     
      },
      {
        id:3,
        img: pollito,
        description: "Chicken",
        price: "$30.01",
        inventory: "20 Bowls avaible",     
      },
      {
        id:4,
        img: beefPeper,
        description: "Beef and papers",
        price: "$40.01",
        inventory: "20 Bowls avaible",     
      },
    ]
  },

  {
    id:1,
    title: "Cold Dishes",
    dishes:[
      {
        id:1,
        img: salad,
        description: "salad with chicken, egg and lettuce.",
        price: "$19.50",
        inventory: "20 Bowls avaible",     
      },
      {
        id:2,
        img: ceviche,
        description: "Ceviche",
        price: "$20.25",
        inventory: "20 Bowls avaible",     
      },
      {
        id:3,
        img: salad2,
        description: "Lettuce and tomato salad.",
        price: "$10.25",
        inventory: "20 Bowls avaible",     
      },
    ]
  },

  { 
    id:2,
    title: "Soup Dishes",
    dishes: [
      {
        id:1, 
        img: SoupWithUdonNodle,
        description: "Soup with udon noodle",
        price: "$17.53",
        inventory: "20 Bowls avaible",     
      },
      {
        id:2,
        img: Ramen,
        description: "Soup Ramen",
        price: "$35.10",
        inventory: "20 Bowls avaible",     
      },
    ]
  },
  
  { 
    id:3,
    title: "Grill Dishes",
    dishes: [
      {
        id:1,
        img: SeaFoodGrill,
        description: "seafood grilll",
        price: "$50.49",
        inventory: "20 Bowls avaible",     
      },
      {
        id:2,
        img: BeafGrill,
        description: "grilled Beaf with salad",
        price: "$40.50",
        inventory: "20 Bowls avaible",     
      },
    ]
  },

];

export { Data }