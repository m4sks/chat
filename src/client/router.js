import Index from './pages/Index'
import AccountSetting from './pages/AccountSetting'
import Talks from './pages/Talks'

export default [
  { path: '/', component: Index },
  { path: '/:user_id', component: AccountSetting },
  { path: '/talks', component: Talks },
]