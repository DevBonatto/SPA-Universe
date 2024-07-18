export function setActiveLink(href) {
  document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'))
  const activeLink = document.querySelector(`nav a[href="${href}"]`)
  if(activeLink) {
    activeLink.classList.add('active')
  }
}

export function getCurrentPath() {
  return window.location.pathname
}

document.addEventListener("DOMContentLoaded", function() {
  setActiveLink()
  getCurrentPath()

  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function() {
      const href = this.getAttribute('href') 
      setActiveLink(href)
    })
  })

  const currentPath = getCurrentPath()
  setActiveLink(currentPath)
})