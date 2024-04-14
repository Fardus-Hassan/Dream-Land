
import SecondaryNav from "../SecondaryNav/SecondaryNav";



const Properties = () => {


    return (
        <div className="md:mt-[100px] mt-10 px-5">
            <div className="text-center md:mb-12 mb-6">
                <h1 className="font-jost text-3xl font-semibold">Recently Added Properties For Sale</h1>
                <p className="font-medium text-[16px] mt-6 max-w-[750px] text-black text-opacity-60 mx-auto jost ">Search land for sale in your local area by price, amenities, or other features. We’ll show you the sales history and provide helpful advice.

                </p>
            </div>
            <div className="max-w-[1440px] mx-auto">
                <SecondaryNav></SecondaryNav>
            </div>
            
        </div>
    );
};

export default Properties;