;(() => {
  const announcementsContainer = document.getElementById(
    'breathing-announcements',
  )

  const announceBreathingCycle = () => {
    announcementsContainer.innerText = 'Breathe in slowly'

    setTimeout(() => {
      announcementsContainer.innerText = 'Now, hold your breath'
    }, 4000)

    setTimeout(() => {
      announcementsContainer.innerText = 'Exhale slowly'
    }, 8000)

    setTimeout(() => {
      announcementsContainer.innerText = 'And hold'
    }, 12000)
  }

  announceBreathingCycle()
  setInterval(() => {
    announceBreathingCycle()
  }, 16000)
})()
