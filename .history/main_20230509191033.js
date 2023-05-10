console.log('here');

//data

arrRepos = [
  {
    id: 1,
    name: "Pet Adoption",
    description:"",
    penned: true,
  },
  {
    id: 2,
    name: "Product Cards",
    description:"",
    penned: false,
  }
];
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
    <p class="card-text">${card.description}</a>
  </div>`
  }
  renderToDom("#repos-id", domString); 
}

cardsOnDom(arrRepos) 


//function to create a new repo card with a form on the .teammate-task(repo.html) #repos-id div Kirthana

//function to pin repo cards on the .teammate-task(index.html) #overview-repos div Fernanda

//function to render the pinned repo cards on the .teammate-task(index.html) #overview-repos div Fernanda

//function to render project cards on the .teammate-task(projects.html) #projects-id div Kyle

//function to create a new project card with a form on the .teammate-task(projects.html) #projects-id div Kyle

//function to render packages cards on the .teammate-task(packages.html) #packages-id div Luca

//function to create a new package card with a form on the .teammate-task(packages.html) #packages-id div Luca
