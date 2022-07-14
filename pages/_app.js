import 'antd/dist/antd.css';
import '../styles/globals.css'
import NavBar from '../components/NavBar';
import Responsive from '../components/Responsive';
import BurgerMenu from '../components/BurgerMenu';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Responsive display={['Laptop', 'Tablet']}> */}
        <NavBar />
        <BurgerMenu />
      {/* </Responsive> */}
      {/* <Responsive display={['Mobile']}>
        
      </Responsive> */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
