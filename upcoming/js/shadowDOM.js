const sectionData = {
    'Projects': document.getElementById("project-list"),
    'Experience': document.getElementById("experience-list"),
    'Recommendations': document.getElementById("recommendation-list"),
}

const keys = Object.keys(sectionData);

const sectionContainer = document.getElementById('section-container');
document.querySelector("#section-content").classList.add('projects');
document.getElementById("section-title").innerText = "Projects";
let instance = document.importNode(sectionData.Projects, true);
const shadow = document.querySelector("#section-content").attachShadow({ mode: 'open' });
shadow.appendChild(instance.content);
let current = 0;


document.getElementById("prevScreen").onclick = (e) => {
    // scroll down
    changeScreen(false);
};

document.getElementById("nextScreen").onclick = (e) => {
    changeScreen(true);
}

function changeScreen(scrollDown) {
    // show loading popup
    const currClassLst = document.querySelector("#section-content").classList;
    currClassLst.remove(keys[current].toLowerCase());
    shadow.innerHTML = '';

    if (scrollDown) {
        current = current < keys.length - 1 ? current + 1 : 0;
    } else {
        current = current > 0 ? current - 1 : keys.length - 1;
    }
    let nextElem = keys[current];
    // load next element
    currClassLst.add(nextElem.toLowerCase());
    document.getElementById("section-title").innerText = nextElem;
    instance = document.importNode(sectionData[nextElem], true);
    shadow.appendChild(instance.content);
}
