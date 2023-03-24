"use strict";

window.addEventListener("load", initApp);

function initApp() {
  console.log("initApp");

  const scottMalkinson = {
    name: "Scott Malkinson",
    nickname: "Captain Diabetes",
    image:
      "https://static.wikia.nocookie.net/southpark/images/a/a1/ScottMalkinson_2.png/revision/latest?cb=20211125042917",
    occupation: "student",
    age: 9,
    voicedBy: "Matt Stone",
    gender: "male",
    religion: "christian",
    catchPhrase: "I have Diabetes",
    hairColor: "brown",
    schoolGrade: 4,
    episodes: [
      "S12E13",
      "S13E09",
      "S17E08",
      "S17E09",
      "S26E01",
      "S18E02",
      "S26E03",
    ],
    appearances: 7,
    firstAppearance: ["Elementary School Musical", "S12E13"],
  };

  //   getCharacter(character);
  showCharacter(scottMalkinson);
}

function showCharacter(character) {
  console.log(character["image"]);
  const myHTML =
    /*html*/
    `<article>
  <img src=${character["image"]}>
  <h2>${character["name"]}</h2>
  <p>${character["gender"]}</p>
  <P>${character["nickname"]}</P>
  <p>${character["catchPhrase"]}</p>
  <p>Hair colour: ${character["hairColor"]}</p>
  <p>${character["name"]} is played by ${character["voicedBy"]}</p>
  </article>`;

  document.querySelector("#characters").insertAdjacentHTML("beforeend", myHTML);

  document
    .querySelector("#characters article:last-child")
    .addEventListener("click", characterClicked);

  function characterClicked() {
    document.querySelector("#dialogImage").src = character.image;
    document.querySelector("#dialogName").textContent = character.name;
    document.querySelector("#dialogHouse").textContent = character.house;
    document.querySelector("#dialogBirthdate").textContent =
      character.dateOfBirth;

    document.querySelector("#dialogCharacter").showModal();
  }
}

// async function getCharacter(character) {
//   const response = await fetch(
//     `https://vscode.dev/github/luma0001/Data-V1-project/blob/a6e425aa64eb381de69083db87a0a3b54a8a49b7/scott.json#L13`
//   );

//   const character = await response.json();

//   console.log(character);

//   document.querySelector("#character").insertAdjacentHTML(
//     "beforebegin",
//     character/* html */ `
// <article>
// <img scr=${image}/>
// <h2>${name}</h2>
// <p>${age}</p>
// </article>
// `
//   );
// }
