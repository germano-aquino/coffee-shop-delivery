import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/index'
import { DefaultLayout } from './layout/DefaultLayout/index'
import { Delivery } from './pages/Delivery/index'
import { Checkout } from './pages/Checkout/index'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/delivery" element={<Delivery />} />
      </Route>
    </Routes>
  )
}