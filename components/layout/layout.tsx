import Navbar from '../pageComponents/navbar'
import Footer from '../pageComponents/footer'
const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
