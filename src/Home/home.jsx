import './home.css';
import Navbar from '../Navbar/navbar';
import Content from '../Content/content';
import Footer from '../Footer/footer';

const Home = () => {
    return ( 
        <div className="app-bg">
            <Navbar/>
            <Content/>
            <Footer/>
        </div>
    );
}
 
export default Home;