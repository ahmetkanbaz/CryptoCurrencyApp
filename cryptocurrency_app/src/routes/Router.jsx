import {useRoutes} from 'react-router-dom'
import Home from '../views/Home/Home'
import AllCoins from '../views/AllCoins/AllCoins'
import DetailCoinView from '../views/DetailCoinView/DetailCoinView'

const Router =() => {
  const routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/allcoins', element: <AllCoins />},
    {path: 'detailcoin/:id', element: <DetailCoinView />}
  ])
  return routes
}

export default Router