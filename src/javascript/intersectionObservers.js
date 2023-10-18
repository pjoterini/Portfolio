const intersectionObservers = () => {
  const projectVideoLinks = document.querySelectorAll('.project-video-link')
  const sectionTitles = document.querySelectorAll('.section-title')

  // PROJECT VIDEOS
  const projectVideoLinkObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const projectVideoLink = entry.target
          const projectVideo = entry.target.firstElementChild
          const src = projectVideo.getAttribute('data-lazy')

          projectVideoLink.classList.add(
            'project-link-video-show',
            entry.isIntersecting
          )
          projectVideo.setAttribute('src', src)
          projectVideoLinkObserver.unobserve(projectVideoLink)
        }
      })
    },
    {
      threshold: 0.6
    }
  )
  // SECTION TITLES
  projectVideoLinks.forEach((projectVideo) => {
    projectVideoLinkObserver.observe(projectVideo)
  })

  const sectionTitleObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-title-show')
          sectionTitleObserver.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 1
    }
  )
  sectionTitles.forEach((sectionTitle) => {
    sectionTitleObserver.observe(sectionTitle)
  })
}

export default intersectionObservers
