const listOfProjects = [
    {
        title: "BookList App",
        description: "A Vanilla JS Book listing app. Uses Bootstrap 4 for styling. ",
        filePath: "./VanillaJS_BookList_App/index.html",
    },
    {
        title: "Calculator",
        description:
            "A Vanilla JS Calculator. Uses css grid for styling the calculator ui. A Calculator class is defined with methods for perform the functions of a real world calculator.",
        filePath: "./VanillaJS_Calculator/index.html",
    },
    {
        title: "Music Player",
        description: "A Vanilla JS Music Player.",
        filePath: "./VanillaJS_Music_Player/index.html",
    },
    {
        title: "Tik Tak Toe",
        description: "A Vanilla JS Tik Tak Toe Game.",
        filePath: "./VanillaJS_TicTacToe_WDS/index.html",
    },
    {
        title: "Clock With Theme Toggle",
        description: "A Vanilla JS Analog Clock with them toggle.",
        filePath: "./VanillaJS_Clock/index.html",
    },
    {
        title: "Toggle Sign in and Sign up (css animation)",
        description:
            "A Vanilla JS Sign in and Register form width the functionality to toggle between them.",
        filePath: "./VanillaJS-Login-Registration-Form-WebDev/index.html",
    },
    {
        title: "Movie Searching app using OMDB API",
        description:
            "A movie searching web app that uses OMDB API to fetch movie names and details.",
        filePath: "./VanillaJS_Movie_Search_App_Using_OMDb_API/index.html",
    },
    {
        title: "Random Password Generator",
        description: "A Vanilla JS random password generator.",
        filePath: "./random-password-generator/index.html",
    },
];

const container = document.querySelector(".container");

listOfProjects.map((item) => {
    const tab = document.createElement("div");
    const description = document.createTextNode(item.description);
    tab.setAttribute("onclick", `location.href='${item.filePath}';`);
    tab.setAttribute("class", "tab");
    tab.innerHTML = `
            <h3 class="tab-header">
                ${item.title} <a href="${item.filePath}"><i class="fa fa-link" aria-hidden="true"></i></a>
            </h3>
    `;
    tab.appendChild(description);
    container.appendChild(tab);
});
