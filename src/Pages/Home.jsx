import Banner from "../Components/Banner/Banner";
import LandType from "../Components/LandType/LandType";
import Properties from "../Components/Properties/Properties";
import Review from "../Components/Review/Review";
import SiteTittle from "../Components/SiteTittle/SiteTittle";


const Home = () => {
    return (
        <div>
            <SiteTittle title={'Home'}></SiteTittle>
            <Banner></Banner>
            <LandType></LandType>
            <Properties></Properties>
            <Review></Review>
        </div>
    );
};

export default Home;