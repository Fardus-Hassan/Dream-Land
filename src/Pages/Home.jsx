import Banner from "../Components/Banner/Banner";
import LandType from "../Components/LandType/LandType";
import Properties from "../Components/Properties/Properties";
import Footer from "../Components/Footer/Footer"
import Nav from "../Components/Navbar/Nav";


const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <Banner></Banner>
            <LandType></LandType>
            <Properties></Properties>
            <Footer></Footer>
        </div>
    );
};

export default Home;