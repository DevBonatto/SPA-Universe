document.addEventListener("DOMContentLoaded", function() {
  function setActiveLink(href) {
    document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'))
    const activeLink = document.querySelector(`nav a[href="${href}"]`)
    if(activeLink) {
      activeLink.classList.add('active')
    }
  }

  function getCurrentPath() {
    return window.location.pathname
  }

  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function() {
      const href = this.getAttribute('href') 
      setActiveLink(href)
    })
  })

  const currentPath = getCurrentPath()
  setActiveLink(currentPath)
})