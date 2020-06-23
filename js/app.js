
/**
 * Define Global Variables
 *
*/

const sections = document.querySelectorAll('section');
const navbar = document.querySelector('.navbar__menu');
let navbarsections;
const sectionsholder = document.querySelector('.sectionsholder');
/**
 * End Global Variables
 * Start Helper Functions
 *
*/

function setLocationOfScroll(element) {
    let indexOfElement;
    for(let i=0; i < navbarsections.length; i++)
    {
        if ( element === navbarsections[i])
        {
            indexOfElement = i;
        }
    }
    return sections[indexOfElement];
}


function scrollThere (event) {
    let tmp = event.target;
    setLocationOfScroll(tmp).scrollIntoView();
}


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
for (let i=0; i<sections.length;i++ )
{
    let tmp = document.createElement('li');
    tmp.innerText= 'Section ' + (i+1);
    let idtext = "navsection" + (i+1);
    tmp.setAttribute("id", idtext);
    tmp.setAttribute("class", "navbarsection");
    navbar.appendChild(tmp);
}

navbarsections = document.querySelectorAll(".navbarsection");

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/
for(let i = 0; i < navbarsections.length; i++)
{
    navbarsections[i].addEventListener('click', scrollThere);
}
// Build menu 

// Scroll to section on link click

// Set sections as active