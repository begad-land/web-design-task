
//h1 styling
const h1 =  document.createElement('h1')
h1.textContent = 'Projects'
h1.style.color = 'purple'
document.body.appendChild(h1)

//body styling 
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column'; // Stack h1 and divs vertically
document.body.style.flexWrap = 'wrap';
document.body.style.gap = '30px';
document.body.style.padding = '20px';
document.body.style.justifyContent = 'center'; // Center vertically
document.body.style.alignItems = 'center'; // Center horizontally
document.body.style.minHeight = '100vh';
document.body.style.backgroundColor = 'pink';
document.body.style.margin = '0';


//div that contains the project divs for easier handling
const projectsWrapper = document.createElement('div');
projectsWrapper.style.display = 'flex';
projectsWrapper.style.flexWrap = 'wrap';
projectsWrapper.style.gap = '30px';
projectsWrapper.style.justifyContent = 'center';
projectsWrapper.style.maxWidth = '800px'; // Limit width for better centering

document.body.appendChild(projectsWrapper);


//project divs
for(let i = 1; i < 19 ; i++) {
    const newDiv = document.createElement('div')
    

    //h3 styling
    const h3 = document.createElement('h3')
    h3.textContent = `project ${i}`
    h3.style.color = 'purple'
    

    const nameDiv = document.createElement('div')
    nameDiv.textContent = 'Begad'
    nameDiv.style.color = 'purple'

    newDiv.appendChild(h3)
    newDiv.appendChild(nameDiv)


    newDiv.style.width = '120px'
    newDiv.style.height = '90px'
    newDiv.style.backgroundColor = 'white'
    newDiv.style.color = 'purple'
    newDiv.style.textAlign = 'center'

    projectsWrapper.appendChild(newDiv)
}
