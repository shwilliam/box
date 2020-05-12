;(() => {
  const announcementsContainer = document.getElementById(
    'breathing-announcements',
  )

  const announceBreathingCycle = () => {
    announcementsContainer.innerText = 'Breathe in for four seconds'

    setTimeout(() => {
      announcementsContainer.innerText = 'Hold your breath for four seconds'
    }, 4000)

    setTimeout(() => {
      announcementsContainer.innerText = 'Now exhale for four seconds'
    }, 8000)

    setTimeout(() => {
      announcementsContainer.innerText = 'Hold your breath for four seconds'
    }, 12000)
  }

  announceBreathingCycle()
  setInterval(() => {
    announceBreathingCycle()
  }, 16000)
})()
