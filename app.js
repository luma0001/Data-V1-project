"use strict";

window.addEventListener("load", initApp);

async function initApp() {
  console.log("initApp");

  const scottMalkinson = await fetch(
    "https://raw.githubusercontent.com/luma0001/Data-V1-project/07f6ce395a9b87079df42f68b35483f405eb0c21/scott.json"
  );

  console.log(scottMalkinson);

  // const scottMalkinson = {
  //   name: "Scott Malkinson",
  //   nickname: "Captain Diabetes",
  //   image:
  //     "https://static.wikia.nocookie.net/southpark/images/a/a1/ScottMalkinson_2.png/revision/latest?cb=20211125042917",
  //   occupation: "student",
  //   age: 9,
  //   voicedBy: "Matt Stone",
  //   gender: "male",
  //   religion: "christian",
  //   catchPhrase: "I have Diabetes",
  //   hairColor: "brown",
  //   schoolGrade: 4,
  //   episodes: [
  //     " S12E13 ",
  //     " S13E09 ",
  //     " S17E08 ",
  //     " S17E09 ",
  //     " S26E01 ",
  //     " S18E02 ",
  //     " S26E03 ",
  //   ],
  //   appearances: 7,
  //   firstAppearance: [" Elementary School Musical ", " S12E13 "],
  // };

  //   getCharacter(character);
  showCharacter(scottMalkinson);
  showCharacter(scottMalkinson);
  showCharacter(scottMalkinson);
  showCharacter(scottMalkinson);
  showCharacter(scottMalkinson);
}

function showCharacter(character) {
  console.log(character["image"]);
  const myHTML =
    /*html*/
    `<article>
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

  function characterClicked() {
    //     const dialogHTML =
    //       /*html*/
    //       `
    //         <dialog id="dialogCharacter">
    //         <img src=${character["image"]}/>;
    //         <h2 id="dialogName">${character["name"]}</h2>
    //         <h3 id="dialogNickname">${character["nickname"]}</h3>
    //         <p id="dialogOccupation">${character["occupation"]}</p>
    // <p id="dialogAge">${character["age"]}</p>
    // <p id="dialogGender">${character["gender"]}</p>
    // <p id="dialogReligion">${character["religion"]}</p>
    //         <p id="dialogPhrase">${character["catchphrase"]}</p>
    // <p id="dialogHair">${character["hariColor"]}</p>
    // <p id="dialogGrade">${character["schoolGrade"]}</p>
    // <p id="dialogEpisodes">${character["episodes"]}</p>
    // <P id="dialogApperances">${character["apperances"]}</P>
    // <p id="dialogFirstApperance">${character["firstApperance"]}</p>

    //         <form method="dialog">
    //           <button>Close</button>
    //         </form>
    //       </dialog>;
    //         `;

    //     document
    //       .querySelector("#dialog")
    //       .insertAdjacentHTML("beforeend", dialogHTML);
    // ???
    // document.querySelector("#dialog").showModal();

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
