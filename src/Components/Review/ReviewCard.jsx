

const ReviewCard = ({ info }) => {


    const {img, name, review, companyName} = info

    return (
        <div data-aos="fade-left" data-aos-duration="1000"
            className="border rounded-3xl border-opacity-20 w-full h-auto flex flex-col gap-6 p-6 shadow-xl my-10">
            <div className="flex justify-start items-center gap-6" >
                <div className="max-w-[100px] max-h-[100px] rounded-full"> 
                    <img className="max-w-[100px] max-h-[100px] block rounded-full object-cover" src={img} alt="" />

                </div>
                <div className="text-left font-jost">
                    <h3 className="sm:text-base text-sm font-bold font-inter">By : {name}</h3>
                    <p className="sm:text-base text-sm font-bold mt-1 font-inter">{companyName}</p>
                </div>
            </div>
            <div>
                <p className="text-left h-[120px] overflow-auto md:text-base text-sm" >{review}</p>
            </div>
            <div className="flex justify-between items-center gap-4">
                <p className="sm:text-base text-sm">Rating : 5.00</p>
                <span>⭐⭐⭐⭐⭐</span>
            </div>
        </div>
    );
};

export default ReviewCard;