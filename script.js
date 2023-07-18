function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  if(html.classList.contains ('light')) {
    img.setAttribute('src', './assets/Alex01.png')
   
  } else {
    img.setAttribute('src', './assets/Alex.png')
    
  }

  html.classList.toggle("light")


}
