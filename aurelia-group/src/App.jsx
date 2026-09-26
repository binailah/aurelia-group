import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import TheHouse from './pages/TheHouse.jsx'
import Collections from './pages/Collections.jsx'
import CollectionDetail from './pages/CollectionDetail.jsx'
import Restaurants from './pages/Restaurants.jsx'
import RestaurantDetail from './pages/RestaurantDetail.jsx'
import Menus from './pages/Menus.jsx'
import MenuDetail from './pages/MenuDetail.jsx'
import HeritageMenuDetail from './pages/HeritageMenuDetail.jsx'
import Reservations from './pages/Reservations.jsx'
import NotFound from './pages/NotFound.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/the-house" element={<TheHouse />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/:slug" element={<CollectionDetail />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/restaurants/:slug" element={<RestaurantDetail />} />
          <Route path="/menus" element={<Menus />} />
          <Route path="/menus/heritage/:key" element={<HeritageMenuDetail />} />
          <Route path="/menus/:slug" element={<MenuDetail />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
