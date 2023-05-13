console.log(' Hi everyone');
console.log("Hello")

//data

const arrRepos = [
  {
    id: 1,
    name: "Pet Adoption",
    description: "Fantastic website where the user could buy a Pet they love to by just one click",
    type: "Private",
    pinned: true,
    starred: false
  },
  {
    id: 2,
    name: "Product Cards",
    description: "It is a kind of a Shopping Website",
    type: "Private",
    pinned: false,
    starred: false
  },
  {
    id: 3,
    name: "Sorting Hat",
    description: "This website is FUN ! allows the user to add students from the harry potter movie and also allows to expel them to the Voldemont's Army ",
    type: "Public",
    pinned: false,
    starred: true
  }
];
const arrProjects = [
  {
    id: 1,
    name: "Example 1",
    description: "This is an example description",
    type: "Public",
  }
];

arrPackages = [
  {
    id: 1,
    name: "Example 1",
    description: "This is a package example",
  }
];


//function to render repo cards on the .teammate-task(repo.html) #repos-id div Kirthana

const renderToDom = (divId, htmlToRender) => {
  const selectedDivId = document.querySelector(divId);
  selectedDivId.innerHTML = htmlToRender;
}

const cardsOnDom = (divId, array) => {
  let domString = "";
  for (const card of array) {
    domString += `<div class="card">
  <div class="card-body">
    <div class="title"><h5 class="card-title">${card.name}</h5>
      <div class="actions">
        <i class="bi bi-${card.pinned ? 'pin-fill' : 'pin'}" onclick="pinRepo(${card.id})" id="btnPinRepo"></i>
        <i class="bi bi-${card.starred ? 'star-fill' : 'star'}" onclick="starRepo(${card.id})"></i>
        <i class="bi bi-trash" onclick="deleteRepo(${card.id})" id="delete--${card.id}"></i></div>
    </div>
    <p class="card-text">${card.description}</p>
    <p class="card-text">${card.type}</p>
  </div>
  </div>`
  }
  renderToDom(divId, domString);
}

function searchRepo(e) {
  var matchedRepos = arrRepos.filter(x => x.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
    || x.description.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1);
  cardsOnDom("#repos-id", matchedRepos);
}

const starRepo = (cardId) => {
  var repo = arrRepos.find(x => x.id === cardId);
  repo.starred = !repo.starred;
  cardsOnDom("#repos-id", arrRepos);
}

const pinRepo = (cardId) => {
  var repo = arrRepos.find(x => x.id === cardId);
  repo.pinned = !repo.pinned;
  cardsOnDom("#repos-id", arrRepos);
}

const deleteRepo = (cardId) => {
  var repoId = arrRepos.findIndex(x => x.id === cardId);
  arrRepos.splice(repoId, 1);
  cardsOnDom("#repos-id", arrRepos);
}

//function to create a new repo card with a form on the .teammate-task(repo.html) #repos-id div Kirthana

const form = document.querySelector('form')

const createRepo = (e) => {
  e.preventDefault();

  const newRepoObj = {
    id: arrRepos.length + 1,
    name: document.querySelector("#name").value,
    description: document.querySelector("#description").value,
    type: document.querySelector("#type").value
  }
  arrRepos.push(newRepoObj);
  cardsOnDom("#repos-id", arrRepos);
  form.reset();
}

//function to pin repo cards on the .teammate-task(index.html) #overview-repos div Fernanda

// pinRepo('#overview-repos')

// const btnPin = document.querySelector("#btnPinRepo")

// btnPin.addEventListener('click', (array) => {
//   for (const card of array){
//     card.pinned = true;
//   }
// })

//function to render the pinned repo cards on the .teammate-task(index.html) #overview-repos div Fernanda

// const pinnedRepos = (array) => {
//   for (const card of array){
//     if(card.pinned){
//       arrPinned.push(card)
//     }
//     return arrPinned
//   }
// }

// pinnedRepos(arrRepos);

// const pinnedOnDom = (array) => {
//   let pinnedCard =""
//   for (const card of array) {
//     pinnedCard += `<div class="card w-50">
//     <div class="card-body">
//       <h5 class="card-title">${card.name}</h5>
//       <p class="card-text">${card.description}</p>
//     </div>
//   </div>`
//   }
//   renderToDom("#overview-repos", pinnedCard)
// }

// pinnedOnDom(arrPinned)

//function to render project cards on the .teammate-task(projects.html) #projects-id div Kyle

const projectsOnDom = (divId, array) => {
  let domString = "";
  for (const card of array) {
    domString += `<div class="card">
  <div class="card-body">
    <h5 class="card-title">${card.name}</h5>
    <p class="card-text">${card.description}</p>
    <p class="card-text">${card.type}</p>
    <button class="btn btn-danger" onclick="deleteCard(${card.id})" id="delete--${card.id}">Delete</button>
  </div>
  </div>`
  }
  renderToDom(divId, domString);
}


const searchProject = (e) => {
  const eventLC = e.target.value.toLowerCase();
  const searchResult = arrProjects.filter(filtering =>
    filtering.name.toLowerCase().includes(eventLC) ||
    filtering.description.toLowerCase().includes(eventLC))

  projectsOnDom("#projects-id", searchResult);
}

const deleteCard = (cardId) => {
  // Find the index of the card with the given ID in the array
  const cardIndex = arrProjects.findIndex((card) => card.id === cardId);

  if (cardIndex !== -1) {
    // Remove the card from the array
    arrProjects.splice(cardIndex, 1);

    // Render the updated cards on the DOM
    projectsOnDom("#projects-id", arrProjects);
  }
};


//function to create a new project card with a form on the .teammate-task(projects.html) #projects-id div Kyle

const createProject = (e) => {
  e.preventDefault();

  const newProjectObj = {
    id: arrProjects.length + 1,
    name: document.querySelector("#name").value,
    description: document.querySelector("#description").value,
    type: document.querySelector("#type").value
  }
  arrProjects.push(newProjectObj);
  projectsOnDom("#projects-id", arrProjects);
  form.reset();
}


//function to render packages cards on the .teammate-task(packages.html) #packages-id div Luca

const packagesOnDom = (divId, array) => {
  let packagesString = "";
  for (const card of array) {
    packagesString += `<div class="card">
  <div class="card-body">
    <h5 class="card-title">${card.name}</h5>
    <p class="card-text">${card.description}</p>
    <p class="card-text">${card.type}</p>
    <button class="btn btn-danger" id="delete--${card.id}">Delete</button>
  </div>
  </div>`
  }
  renderToDom(divId, packagesString);
}

//function to create a new package card with a form on the .teammate-task(packages.html) #packages-id div Luca

const formOnDom = (divId) => {
  let formString =
    `<div class="form-package-cards">
    <div id="form-packages-id"></div>
    <form class="row g-3">
      <div class="mb-3">
        <label for="formExampleInput" class="form-label">New Package</label>
        <input type="text" class="form-control" id="name" placeholder="Example input placeholder">
      </div>
      <div class="col-12">
        <label for="description" class="form-label">Description</label>
        <input type="text" class="form-control" id="description">
      </div>
      <div class="col-auto">
        <label for="inputState" class="form-label">Public or Private</label>
        <select id="type" class="form-select">
          <option selected>Choose</option>
          <option>Private</option>
          <option>Public</option>
        </select>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary">Create New Repo</button>
      </div>
    </form>
  </div>`

  renderToDom(divId, formString);
}


const addPackage = document.querySelector('form');


const createNewPackage = (e) => {

  e.preventDefault();

  const newPackageObj = {

    id: arrPackages.length + 1,
    name: document.querySelector("#name").value,
    description: document.querySelector("#description").value,

  }

  arrPackages.push(newPackageObj);
  cardsOnDom(arrPackages, "#packages-id");
  form.reset();
}
