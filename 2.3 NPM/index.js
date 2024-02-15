import generateName from 'sillyname';
import superheroes from "superheroes";

var sillyName = generateName();

console.log(`My name is ${sillyName}`)
const superHero = superheroes.random();

console.log(`Super Hero is ${superHero}`);