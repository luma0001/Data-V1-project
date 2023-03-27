"use strict";

window.addEventListener("load", initApp);

// Fetches the json objects
async function initApp() {
  console.log("initApp");

  const fetchScott = await fetch(
    "https://raw.githubusercontent.com/luma0001/Data-V1-project/07f6ce395a9b87079df42f68b35483f405eb0c21/scott.json"
  );

  //     https://raw.githubusercontent.com/TheDanishMexican/object-south-park/main/data/app.json
  //     https://raw.githubusercontent.com/Asbjoernemil/data-assignment/main/data/characters.json

  const scottMalkinson = await fetchScott.json();

  console.log(scottMalkinson);

  //   getCharacter(character);
  showCharacter(scottMalkinson);
  showCharacter(scottMalkinson);
  showCharacter(scottMalkinson);
  showCharacter(scottMalkinson);
  showCharacter(scottMalkinson);
}

// Creates the HTML element for the character
function showCharacter(character) {
  console.log(character["image"]);
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
