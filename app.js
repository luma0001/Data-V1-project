"use strict";

window.addEventListener("load", initApp);

let approved = [];

// Fetches the json objects
async function initApp() {
  console.log("initApp");

  const promise = await fetch(
    "https://cederdorff.github.io/dat-js/05-data/southpark.json"
  );
  const characters = await promise.json();

  // characters.forEach(noDoubles);
  for (let index = 0; index < characters.length; index++) {
    const person = characters[index];
    noDoubles(person);
  }
  console.log(approved);
  approved.forEach(showCharacter);
}

function noDoubles(element) {
  const person = element["name"];
  if (approved.includes(element["name"]) == false) {
    console.log(element["name"], approved.includes(element));
    //apend?
    approved.push(element);
  } else {
    console.log("Double");
  }
}

function y() {}

// function noNull(value) {
//   let element;
//   if (value == null) {
//     element = `<p>Religion: unknown</p>`;
//   } else {
//     element = `<p>Relegion: ${value}</p>`;
//   }
//   return value;
// }

// Creates the HTML element for the character
function showCharacter(character) {
  // console.log(character["image"]);
  const myHTML = /*html*/ `<article>
  <img src=${character["image"]}>
  <h2>Name: ${character["name"]}</h2>
  <p>Gender: ${character["gender"]}</p>
  <P>Nick Name: ${character["nickname"]}</P>
  <p>Catch phrase: ${character["catchPhrase"]}</p>
  <p>Hair colour: ${character["hairColor"]}</p>
  <p>${character["name"]} is played by ${character["voicedBy"]}</p>
  </article>`;

  document.querySelector("#characters").insertAdjacentHTML("beforeend", myHTML);

  // Man kan også bruge et Call Back istedet for Modal Function...
  document
    .querySelector("#characters article:last-child")
    .addEventListener("click", characterClicked);

  // Connects the character info to the DIALOG HTML elements
  function characterClicked() {
    // Hard coded
    document.querySelector("#dialogImage").src = character.image;
    document.querySelector(
      "#dialogName"
    ).textContent = `Name: ${character.name}`;
    document.querySelector(
      "#dialogGender"
    ).textContent = `Gender: ${character.gender}`;
    document.querySelector(
      "#dialogPhrase"
    ).textContent = `Catchphrase:  ${character.catchPhrase}`;
    document.querySelector(
      "#dialogNickname"
    ).textContent = `Nickname:  ${character.nickname}`;
    document.querySelector(
      "#dialogOccupation"
    ).textContent = `Occupation ${character.occupation}`;
    document.querySelector("#dialogAge").textContent = `Age: ${character.age}`;
    document.querySelector(
      "#dialogReligion"
    ).textContent = `Religion: ${character.religion}`;
    document.querySelector(
      "#dialogHair"
    ).textContent = `Hair Color: ${character.hairColor}`;
    document.querySelector(
      "#dialogGrade"
    ).textContent = `Garde: ${character.schoolGrade}`;
    document.querySelector(
      "#dialogEpisodes"
    ).textContent = `Appears in following epidoes: ${character.episodes}`;
    document.querySelector(
      "#dialogApperances"
    ).textContent = `Features in ${character.appearances} episodes`;
    document.querySelector(
      "#dialogFirstApperance"
    ).textContent = `First episode: ${character.firstAppearance}`;

    document.querySelector("#dialogCharacter").showModal();
  }
}
