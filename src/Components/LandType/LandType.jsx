

const LandType = () => {
    return (
        <div className="md:mt-[100px] mt-10 px-5">
            <div className="text-center md:mb-10 mb-6">
                <h1 className="font-jost text-3xl font-semibold">Search Your Land By Type</h1>
                <p className="font-medium text-[16px] mt-6 max-w-[750px] text-black text-opacity-60 mx-auto jost ">Let our land purchase advisors help you to find the perfect spot for your next home. We can offer in-depth insights and assessments of the land that meet your needs.</p>
            </div>
            <div className="grid grid-rows-6 max-h-[700px] grid-cols-5 gap-2">
                <div className="relative col-span-1 row-span-6">
                    <img className="rounded-md object-cover h-full w-full" src="https://i.pinimg.com/564x/81/f6/bb/81f6bb5ce720b922378f4a7b42fac62d.jpg" alt="" />
                    <div className="absolute z-10 top-10 left-10 text-white font-jost text-xl">
                        <h2>Agricultural Land</h2>
                    </div>
                    <div className="absolute inset-0 bg-black rounded-md opacity-40 hover:opacity-20 duration-100"></div>
                </div>
                <div className="relative col-span-1 row-span-2">
                    <img className="rounded-md object-cover h-full w-full" src="https://i.pinimg.com/564x/c5/ee/4d/c5ee4de1bb4e15888cabe0904df17bbd.jpg" alt="" />
                    <div className="absolute z-10 top-10 left-10 text-white font-jost text-xl">
                        <h2>Ranches</h2>
                    </div>
                    <div className="absolute inset-0 bg-black rounded-md opacity-40 hover:opacity-20 duration-100"></div>
                </div>
                <div className="relative col-span-1 row-span-4">
                    <img className="rounded-md h-full w-full object-cover" src="https://i.pinimg.com/564x/b8/68/5a/b8685a93b8a61da125f84afc104ce072.jpg" alt="" />
                    <div className="absolute z-10 top-10 left-10 text-white font-jost text-xl">
                        <h2>Forest Land</h2>
                    </div>
                    <div className="absolute inset-0 bg-black rounded-md opacity-40 hover:opacity-20 duration-100"></div>
                </div>
                <div className="relative col-span-1 row-span-2">
                    <img className="rounded-md h-full w-full object-cover" src="https://i.pinimg.com/564x/80/6f/b0/806fb0e386180e4dca836505eb1ebb8b.jpg" alt="" />
                    <div className="absolute z-10 top-10 left-10 text-white font-jost text-xl">
                        <h2>Farms</h2>
                    </div>
                    <div className="absolute inset-0 bg-black rounded-md opacity-40 hover:opacity-20 duration-100"></div>
                </div>
                <div className="relative col-span-1 row-span-6">
                    <img className="rounded-md object-cover h-full w-full" src="https://i.pinimg.com/564x/06/6f/e2/066fe2b5fa523cad599aeda35a3c1788.jpg" alt="" />
                    <div className="absolute z-10 top-10 left-10 text-white font-jost text-xl">
                        <h2>plantations</h2>
                    </div>
                    <div className="absolute inset-0 bg-black rounded-md opacity-40 hover:opacity-20 duration-100"></div>
                </div>
                <div className="relative col-span-1 row-span-4">
                    <img className="rounded-md w-full h-full object-cover" src="https://i.pinimg.com/564x/65/6f/b9/656fb91c815da9e1c7eb4658a1d1ad16.jpg" alt="" />
                    <div className="absolute z-10 top-10 left-10 text-white font-jost text-xl">
                        <h2>Commercial Land</h2>
                    </div>
                    <div className="absolute inset-0 bg-black rounded-md opacity-40 hover:opacity-20 duration-100"></div>
                </div>
                <div className="relative col-span-1 row-span-4">
                    <img  className="rounded-md h-full w-full object-cover" src="https://i.pinimg.com/564x/0c/1c/05/0c1c05f86c78fa85dca37ccd899f9c50.jpg" alt="" />
                    <div className="absolute z-10 top-10 left-10 text-white font-jost text-xl">
                        <h2>Underdevelopment</h2>
                    </div>
                    <div className="absolute inset-0 bg-black rounded-md opacity-40 hover:opacity-20 duration-100"></div>
                </div>
                <div className="relative col-span-1 row-span-2">
                    <img className="rounded-md h-full object-cover w-full" src="https://i.pinimg.com/564x/8f/c4/02/8fc402d27549757f0648e12a964735ee.jpg" alt="" />
                    <div className="absolute z-10 top-10 left-10 text-white font-jost text-xl">
                        <h2>Vineyards</h2>
                    </div>
                    <div className="absolute inset-0 bg-black rounded-md opacity-40 hover:opacity-20 duration-100"></div>
                </div>
            </div>
        </div>
    );
};

export default LandType;