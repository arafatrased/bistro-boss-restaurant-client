import Footer from "../shared/Footer/Footer";
import NavBar from "../shared/Navbar";



const MainLayout = ({children}) => {
    return (
        <>
          <NavBar />
          <main className="min-h-screen">{children}</main>
          <Footer></Footer>
        </>
      );
    }

export default MainLayout;