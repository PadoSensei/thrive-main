// Refactor for new images
// Add image carousel to each card
import irishCastle from "./assets/images/Irish_Castle.jpeg";
import Abandoned_Bridge_Japan from "./assets/images/Abandoned_Bridge_Japan.jpeg";
import Abandoned_Island_City from "./assets/images/Abandoned_Island_City.jpeg";
import Abandoned_Island_Italy from "./assets/images/Abandoned_Island_Italy.jpeg";
import Abandoned_Island_Portugal from "./assets/images/Abandoned_Island_Italy.jpeg";
import Abandoned_Lighthouse from "./assets/images/Abandoned_Lighthouse.jpeg";
import Abandoned_Mansion from "./assets/images/Abandoned_Mansion.jpeg";
import Abandoned_Mansion_Colombia from "./assets/images/Abandoned_Mansion_Colombia.jpeg";
import Abandoned_Train from "./assets/images/Abandoned_Train.jpeg";
import Castle_France_2 from "./assets/images/Castle_France_2.jpeg";
import Castle_France from "./assets/images/Castle_France.jpeg";
import Castle_Scotland from "./assets/images/Castle_Scotland.jpeg";
import Church_Portugal from "./assets/images/Church_Portugal.jpeg";
import Church_Ukraine from "./assets/images/Church_Ukraine.jpeg";
import House_Russia from "./assets/images/House_Russia.jpeg";
import Ireland_Woods from "./assets/images/Ireland_Woods.jpeg";
import Missile_Silo from "./assets/images/Missile_Silo_Tree.jpeg";
import Scotland from "./assets/images/Scotland.jpeg";
import Staircase_Indonesia from "./assets/images/Staircase_Indonesia.jpeg";
import Staircase_Italy from "./assets/images/Staircase_Italy.jpeg";
import Staircase_Japan from "./assets/images/Staircase_Japan.jpeg";
import Staircase_Manchester from "./assets/images/Staircase_Manchester.jpeg";
import Staircase_Portugal from "./assets/images/Staircase_Portugal.jpeg";
import Staircase_UK from "./assets/images/Staircase_UK.jpeg";
import Staircase_Peru from "./assets/images/Staircase_Peru.jpeg";
import Staircase_USA from "./assets/images/Staircase_USA.jpeg";
import Traffic_Jam from "./assets/images/Traffic_Jam.jpeg";
import Villa_Germany from "./assets/images/Villa_Germany.jpeg";

const stairs = [
  Staircase_USA,
  Staircase_UK,
  Staircase_Portugal,
  Staircase_Indonesia,
  Staircase_Japan,
  Staircase_Peru,
];
const abandoned = [Abandoned_Bridge_Japan, Traffic_Jam];
const ireland = [irishCastle, Ireland_Woods, Scotland];

/*
TODO: we should be consistant with our naming conventions.
For arrays I would reccomend always using the plural

island should be islands
church should be churches etc

<Done>

*/
const houses = [
  Villa_Germany,
  House_Russia,
  Abandoned_Mansion,
  Abandoned_Mansion_Colombia,
];
const islands = [
  Abandoned_Island_City,
  Abandoned_Island_Italy,
  Abandoned_Lighthouse,
];
const churches = [Church_Ukraine, Church_Portugal, Missile_Silo];
const castles = [Castle_France_2, Castle_France, Castle_Scotland];

const dummyData = [
  {
    dataNumber: 1,
    //TODO: No need to destructure here.
    images: [...castles],
    title: "Mad Looking Castles",
    badgeText: "On Sale",
    altText: "Castles",
    blurbText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac nulla nulla. Pellentesque consectetur augue justo, maximus interdum tellus sodales non. Quisque eleifend convallis tempor.",
    buttonText: "Book classic tour now",
  },
  {
    dataNumber: 2,
    images: [...churches],
    title: "Amazing Churches",
    badgeText: "On Sale",
    altText: "Churches",
    blurbText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac nulla nulla. Pellentesque consectetur augue justo, maximus interdum tellus sodales non. Quisque eleifend convallis tempor.",
    buttonText: "Book classic tour now",
  },
  {
    dataNumber: 3,
    images: [...islands],
    title: "Remote Islands",
    badgeText: "On Sale",
    altText: "Islands",
    blurbText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac nulla nulla. Pellentesque consectetur augue justo, maximus interdum tellus sodales non. Quisque eleifend convallis tempor.",
    buttonText: "Book classic tour now",
  },
  {
    dataNumber: 4,
    images: [...stairs],
    title: "Creepy Staircases",
    badgeText: "Sold Out",
    altText: "Stairs",
    blurbText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac nulla nulla. Pellentesque consectetur augue justo, maximus interdum tellus sodales non. Quisque eleifend convallis tempor.",
    buttonText: "Book classic tour now",
  },
  {
    dataNumber: 5,
    images: [...houses],
    title: "Overgrown Houses",
    badgeText: "On Sale",
    altText: "Houses",
    blurbText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac nulla nulla. Pellentesque consectetur augue justo, maximus interdum tellus sodales non. Quisque eleifend convallis tempor.",
    buttonText: "Book classic tour now",
  },
  {
    dataNumber: 6,
    images: [...ireland],
    title: "Ireland's Pretty!",
    badgeText: "Sold Out",
    altText: "Ireland",
    blurbText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac nulla nulla. Pellentesque consectetur augue justo, maximus interdum tellus sodales non. Quisque eleifend convallis tempor.",
    buttonText: "Book classic tour now",
  },
];
export default dummyData;
