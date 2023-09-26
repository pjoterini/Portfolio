const projects = () => {
  let projects = document.querySelectorAll('.project-vid')

  const projectsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('show-project-vid', entry.isIntersecting)
      })
    },
    {
      threshold: 0
    }
  )

  projects.forEach((project) => {
    projectsObserver.observe(project)
  })
}

export default projects
