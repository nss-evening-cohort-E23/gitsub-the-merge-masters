console.log('here');

//data

arrRepos = [
  {
    id: 1,
    name: "Pet Adoption",
    description:"",
    pinned: true,
  },
  {
    id: 2,
    name: "Product Cards",
    description:"",
    pinned: false,
  }
];
arrPinned =[];
arrProjects=[];
arrPackages= [];

//function to render repo cards on the .teammate-task(repo.html) #repos-id div Kirthana

const renderToDom =(divId, htmlToRender) => {
  const selectedDivId = document.querySelector(divId); 
  selectedDivId.innerHTML = htmlToRender;
}

const cardsOnDom = (array) => {  
  let domString =  ""; 
  for (const card of array) { 
    domString += `<div class="card w-50">
    <div class="card-body">
      <h5 class="card-title">${card.name}</h5>
      <p class="card-text">${card.description}</p>
      <a href="#" class="btn btn-primary" id="btnPinRepo">Pin</a>
    </div>
  </div>`
  }
  renderToDom("#repos-id", domString); 
}

cardsOnDom(arrRepos) 


//function to create a new repo card with a form on the .teammate-task(repo.html) #repos-id div Kirthana

//function to pin repo cards on the .teammate-task(index.html) #overview-repos div Fernanda

const btnPin = document.querySelector("#btnPinRepo")

btnPin.addEventListener('click', (array) => {
  for (const cards of array){
    card.pinned = true;
  }
})

//function to render the pinned repo cards on the .teammate-task(index.html) #overview-repos div Fernanda

const pinnedRepos = (array) => {
  for (const card of array){
    if(`${card.pinned}`){
      arrPinned.push(card)
    }
    return arrPinned
  }
}

pinnedRepos(arrRepos);
 
const pinnedOnDom = (array) => {
  let pinnedCard =""
  for (const card of array) {
    pinnedCard += `<div class="card w-50">
    <div class="card-body">
      <h5 class="card-title">${card.name}</h5>
      <p class="card-text">${card.description}</p>
    </div>
  </div>`
  }
  renderToDom("#overview-repos", pinnedCard)
}

pinnedOnDom(arrPinned)


//function to render project cards on the .teammate-task(projects.html) #projects-id div Kyle

//function to create a new project card with a form on the .teammate-task(projects.html) #projects-id div Kyle

//function to render packages cards on the .teammate-task(packages.html) #packages-id div Luca

//function to create a new package card with a form on the .teammate-task(packages.html) #packages-id div Luca
