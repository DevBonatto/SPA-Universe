import { Router } from './router.js'
import { setActiveLink, getCurrentPath } from './actions.js'
import './actions.js'

const router = new Router()
router.add('/', '/pages/home.html')
router.add('/about', '/pages/about.html')
router.add('/explorer', '/pages/explorer.html')
router.add(404, '/pages/404.html')

router.handle()

window.onpopstate = () => {
  router.handle()
  const newPath = getCurrentPath()
  setActiveLink(newPath)
}  

window.route = () => router.route()