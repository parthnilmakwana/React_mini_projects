
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router'

function Root() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />


    </div>
  )
}

export default Root
