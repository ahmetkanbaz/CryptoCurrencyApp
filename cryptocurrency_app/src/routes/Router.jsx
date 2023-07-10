import {useRoutes} from 'react-router-dom'
import Home from '../views/Home/Home'
import AllCoins from '../views/AllCoins/AllCoins'

const Router =() => {
  const routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/allcoins', element: <AllCoins />}
  ])
  return routes
}

export default Router