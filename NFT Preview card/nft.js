const cyanHoverBox = document.querySelector(".eye-image")
const closeButton = document.querySelector(".close")
const popupContainer = document.querySelector(".popup-image")

cyanHoverBox.addEventListener("click", (e) => {
    e.preventDefault
    popupContainer.style.display = "block"
})

closeButton.addEventListener("click", (e) => {
    e.preventDefault
    popupContainer.style.display = "none"
})