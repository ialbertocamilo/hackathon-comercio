import homePage from './pages/home'
import Complaints from './pages/complaints'
import Admin from './pages/admin'
import Monitor from './pages/monitor'

const routes = [
  {
    path: '/',
    component: () => import('layouts/BaseLayout.vue'),
    children: [
      homePage,
      Complaints,
      Admin,
      Monitor
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
