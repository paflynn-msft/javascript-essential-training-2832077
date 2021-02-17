/**
 * Use the global Date() object to transform dates.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 */

import Backpack from "./Backpack.js";
import Cabinet from "./Cabinet.js";
import Person from "./Person.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

// console.log("The everydayPack object:", everydayPack);
// console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

const deskFilingCabinet = new Cabinet(
  "desk filing cabinet",
  3,
  "white",
  24,
  26,
  30,
  false,
  "December 10, 2018 15:00:00 PST"
);

console.log(
  "The desk filing cabinet has this many drawers:",
  deskFilingCabinet.drawers
);
console.log(
  "The desk filing cabinet has these dimensions:",
  deskFilingCabinet.dimensions.height,
  "h x",
  deskFilingCabinet.dimensions.width,
  "w x",
  deskFilingCabinet.dimensions.depth,
  "d"
);
console.log("Date acquired", deskFilingCabinet.dateAcquired);
console.log(
  "Days since acquired desk filing cabinet",
  deskFilingCabinet.cabinetAge()
);
console.log("The drawer is open", deskFilingCabinet.drawerOpen);

const patrickFlynn = new Person(
  "Patrick Flynn",
  "white",
  "5'11",
  161,
  "male",
  "March 1, 1989 15:00:00 EST"
);

console.log("Patrick is", patrickFlynn.personAge(), "years old");
