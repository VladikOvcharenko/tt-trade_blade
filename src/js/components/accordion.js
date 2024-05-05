document.addEventListener('DOMContentLoaded', () => {
  const listItems = document.querySelectorAll('.faq-list__item')

  listItems.forEach((listItem) => {
    const activeBtn = listItem.querySelector('.faq-list__item-btn')

    activeBtn.addEventListener('click', () => {
      listItem.classList.toggle('active')
    })
  })
})
