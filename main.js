let verbs = ["love", "hate", "think it's crazy", "adore"];
let adverbs = ["trees", "aliens", "people", "animals"];
let characteristics = ["interesting", "boring", "sad", "lovely"];

let principalMessage = ['I', 'that', 'are', '.'];

const getRandomValue = array => {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
  }

const randomMessage = (arrverbs, arradverbs, arrcharacteristics) => {
    const randomVerb = getRandomValue(arrverbs);
    const randomAdverb = getRandomValue(arradverbs);
    const randomCharacterists = getRandomValue(arrcharacteristics);
    return `I ${randomVerb} ${randomAdverb} because they are ${randomCharacterists}.`
}

console.log(randomMessage(verbs, adverbs, characteristics));