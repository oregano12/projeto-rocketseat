function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  //pegar a img
  const img = document.querySelector("#profile img")

  //substituir img
  if(html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "foto de Mayk Brito com óculos de sol")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "foto de Mayk Brito sem óculos de sol")
  }
}