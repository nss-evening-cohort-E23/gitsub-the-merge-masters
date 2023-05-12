console.log(' Iam here');

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
arrPackages = [];

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
        <i class="bi bi-${card.pinned ? 'pin-fill' : 'pin'}" onclick="pinRepo(${card.id})"></i>
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
  var matchedRepos = arrRepos.filter(x => x.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1);
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

//function to create a new package card with a form on the .teammate-task(packages.html) #packages-id div Luca
