export class Router {
  routes = {}

  add(routeName, page){
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()
  
    window.history.pushState({}, "", event.target.href)
  
    this.handle()
  }

  handle() {
    const routeName = window.location.pathname
    const route = this.routes[routeName] || this.routes[404]
  
    fetch(route)
    .then(data => data.text())
    .then(html => {
      document.querySelector('#app').innerHTML = html
      this.updateBodyClass(routeName)
    })    
  }

  updateBodyClass(routeName) {
    document.body.className = routeName.replace(/\//g, '') || 'home'
  }

}
