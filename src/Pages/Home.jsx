import Banner from "../Components/Banner/Banner";
import LandType from "../Components/LandType/LandType";
import Properties from "../Components/Properties/Properties";
import Review from "../Components/Review/Review";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LandType></LandType>
            <Properties></Properties>
            <Review></Review>
        </div>
    );
};

export default Home;