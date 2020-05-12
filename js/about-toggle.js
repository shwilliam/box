;(() => {
  const aboutContainer = document.getElementById('about')
  const aboutToggle = document.getElementById('about-toggle')
  const announcementsContainer = document.getElementById(
    'breathing-announcements',
  )

  aboutToggle.checked = false

  aboutToggle.addEventListener('change', e => {
    if (e.target.checked) {
      announcementsContainer.setAttribute('aria-live', 'false')
      aboutContainer.innerText =
        '"Box breathing" is a technique used to regain calm and control thoughts while under stress: four seconds in, four holding, four exhaling, four holding, and repeat.'
    } else {
      announcementsContainer.setAttribute('aria-live', 'polite')
      aboutContainer.innerText = ''
    }
  })
})()
