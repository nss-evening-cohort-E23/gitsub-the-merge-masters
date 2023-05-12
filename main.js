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
  },
  {
    id: 2,
    name: "Product Cards",
    description: "It is a kind of a Shopping Website",
    type: "Private",
    pinned: false,
  },
  {
    id: 3,
    name: "Sorting Hat",
    description: "This website is FUN ! allows the user to add students from the harry potter movie and also allows to expel them to the Voldemont's Army ",
    type: "Public",
    pinned: false,
  }
];
arrProjects = [
  {
    id: 1,
    name: "Example 1",
    description: "This is an example description",
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
    <h5 class="card-title">${card.name}</h5>
    <p class="card-text">${card.description}</p>
    <p class="card-text">${card.type}</p>
    <button class="btn btn-danger" id="delete--${card.id}">Delete</button>
  </div>
  </div>`
  }
  renderToDom(divId, domString);
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
  cardsOnDom(arrRepos, "#repos-id");
  form.reset();
}





//function to pin repo cards on the .teammate-task(index.html) #overview-repos div Fernanda

//function to render the pinned repo cards on the .teammate-task(index.html) #overview-repos div Fernanda

//function to render project cards on the .teammate-task(projects.html) #projects-id div Kyle

const projectsOnDom = (divId, array) => {
  let domString = "";
  for (const card of array) {
    domString += `<div class="card">
  <div class="card-body">
    <h5 class="card-title">${card.name}</h5>
    <p class="card-text">${card.description}</p>
    <p class="card-text">${card.type}</p>
    <button class="btn btn-danger" id="delete--${card.id}">Delete</button>
  </div>
  </div>`
  }
  renderToDom(divId, domString);
}

//function to create a new project card with a form on the .teammate-task(projects.html) #projects-id div Kyle

//function to render packages cards on the .teammate-task(packages.html) #packages-id div Luca
 
const packagesOnDom = (divId, array) => {
  let domString = "";
  for (const card of array) {
    domString += `<div class="card">
  <div class="card-body">
    <h5 class="card-title">${card.name}</h5>
    <p class="card-text">${card.description}</p>
    <p class="card-text">${card.type}</p>
    <button class="btn btn-danger" id="delete--${card.id}">Delete</button>
  </div>
  </div>`
  }
  renderToDom(divId, domString);
}

//function to create a new package card with a form on the .teammate-task(packages.html) #packages-id div Luca

const formOnDom = (divId) => {
  let domString = 
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
  
  renderToDom(divId, domString);
}


const addPackage = document.querySelector('form');


const createNewPackage =  (e) =>{

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
