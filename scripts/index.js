var vacancyBtn = document.querySelector('.vacancy_btn')
var vacancyTitle = document.querySelector('.vacancy_title')

vacancyBtn.addEventListener('click', function (event) {
  event.preventDefault()
  vacancyTitle.classList.toggle('d-none')
})
