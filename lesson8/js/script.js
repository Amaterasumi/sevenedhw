function fillingNotHoverTeamMembers() {
    const nodeList = document.querySelectorAll(".member:not(:hover) .member__photo");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.opacity = 0.6;
    }
}

function unFillingNotHoverTeamMembers() {
    const nodeList = document.querySelectorAll(".member__photo");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.opacity = 1;
    }
}