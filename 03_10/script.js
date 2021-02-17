/**
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);

const llbeanBag = new Backpack(
  "llBean Backpack",
  15,
  "blue",
  10,
  20,
  20,
  false
);

console.log("The llBean object:", llbeanBag);
console.log("The pocketNum value:", llbeanBag.pocketNum);
