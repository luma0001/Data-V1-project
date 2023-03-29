"use strict";

window.addEventListener("load", initApp);

async function initApp() {
  console.log("initApp");

  const characters = await getJson();
  const sorted = characters.sort(byApperance);
  console.log("new " + sorted);
  runShowCharacter(sorted);
}

// det her kan umuligt virke bare sådan. Vi skal have character.age somehow....
function byApperance(characterA, characterB) {
  return characterB - characterA;
}

// Fetches the json objects
async function getJson() {
  const promise = await fetch(
    "https://cederdorff.github.io/dat-js/05-data/southpark.json"
  );
  const figures = await promise.json();

  return figures;
}

//Loops every object in the json array and calls showCharacter.
function runShowCharacter(characters) {
  for (let index = 0; index < characters.length; index++) {
    const person = characters[index];
    showCharacter(person);
  }
}

//Returns a value responding to classes for css styling, depending on character age.
function checkAge(character) {
  const age = character["age"];
  let setClass;
  if (age < 13) {
    setClass = "ageChild";
  } else if (age < 29) {
    setClass = "ageYoung";
  } else if (age < 49) {
    setClass = "ageAdult";
  } else setClass = "ageSenior";

  return setClass;
}

// Creates the HTML element for the character
function showCharacter(character) {
  const ageColor = checkAge(character);

  console.log(character["image"]);
  const myHTML = /*html*/ `<article class=${ageColor}>
  <img src=${character["image"]}>
  <h2>${character["name"]}</h2>
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
    console.log("Clicked");
    const phrase = catchPhraseContent(character);

    const dialog = document.querySelector("dialog");
    dialog.setAttribute("data-theme", ageColor.toLowerCase());
    dialog.showModal();

    // Hard coded
    document.querySelector("#dialogImage").src = character.image;
    document.querySelector(
      "#dialogName"
    ).textContent = `Name: ${character.name}`;
    document.querySelector(
      "#dialogGender"
    ).textContent = `Gender: ${character.gender}`;
    document.querySelector("#dialogPhrase").textContent = phrase;
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
// Theoretically checks if the value is null or not...
function catchPhraseContent(character) {
  console.log("phrase run");
  let output = "";
  if (character.catchPhrase != null) {
    output = `Catchphrase:  ${character.catchPhrase}`;
  } else {
    output = `${character.name} has so catch phrase`;
  }
  return output;
}

// character.catchPhrase === null ? console.log("false") : console.log("true");

// function test();
