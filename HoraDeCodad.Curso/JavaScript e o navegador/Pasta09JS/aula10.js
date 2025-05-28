//Alterando atributos

const firstLink = navLinks.querySelector("a")

console.log(firstLink)

firstLink.setAttribute("href", "http://www.google.com")

console.log(firstLink.getAttribute("href"))

firstLink.setAttribute("target", "_blank")