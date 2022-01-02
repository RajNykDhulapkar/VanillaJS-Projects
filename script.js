const listOfProjects = [
    {
        title: "Project 1",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quasi? Adratione.",
        filePath: "./VanillaJS_TicTacToe/index.html",
    },
    {
        title: "Project 1",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quasi? Adratione.",
        filePath: "./VanillaJS_TicTacToe/index.html",
    },
    {
        title: "Project 1",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quasi? Adratione.",
        filePath: "./VanillaJS_TicTacToe/index.html",
    },
    {
        title: "Project 1",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quasi? Adratione.",
        filePath: "./VanillaJS_TicTacToe/index.html",
    },
    {
        title: "Project 1",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quasi? Adratione.",
        filePath: "./VanillaJS_TicTacToe/index.html",
    },
    {
        title: "Project 1",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quasi? Adratione.",
        filePath: "./VanillaJS_TicTacToe/index.html",
    },
    {
        title: "Project 1",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quasi? Adratione.",
        filePath: "./VanillaJS_TicTacToe/index.html",
    },
    {
        title: "Project 1",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quasi? Adratione.",
        filePath: "./VanillaJS_TicTacToe/index.html",
    },
    {
        title: "Project 1",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quasi? Adratione.",
        filePath: "./VanillaJS_TicTacToe/index.html",
    },
    {
        title: "Project 1",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quasi? Adratione.",
        filePath: "./VanillaJS_TicTacToe/index.html",
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
