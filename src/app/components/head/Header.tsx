export default function Header() {
    return (
        <div className="h-[100%] py-10 w-full relative flex items-center  pl-2 bg-gradient-to-l from-[rgb(20,20,20)] to-[rgba(16,16,16)]">

            <div className="absolute right-10 rounded-[6px] w-40 h-40 rotate-45 bg-[rgb(207,164,123)]  "></div>
            <div className="absolute right-[4.5%] rounded-[6px] w-60 h-60 rotate-45 bg-black border-gray-900 hover:backdrop-blur-[8px] hover:bg-white/50  hover:rotate-90 transition-all duration-500 border-[0.5px] shadow-normal flex justify-center items-center text-[27px] tracking-widest hover:text-black text-white ">Menu</div>

            <div className="w-[55%] flex flex-col  items-start justify-center pl-10 h-[90%]">
                <div className="flex text-white flex-col text-[10px] items-center justify-start w-full h-[13%]">
                    <div className="h-full text-[rgb(207,164,123)]  w-full gap-2 flex items-center justify-start text-[14px] tracking-widest">
                        <span>MIXING .</span>
                        <span>MASTERING .</span>
                        <span>COMPOSITION</span>
                    </div>
                </div>
                <div className="w-[60%]">
                    <span className=" text-white tracking-widest leading-tight font-bold w-full text-wrap text-[60px]">
                        PROFESSIONAL
                        MUSIC
                        PRODUCTION
                    </span>
                </div>
                <div>
                    <span className="text-white  font-bold w-full text-wrap">
                        Bring Your Songs to Life With a World-Class Sound
                    </span>
                </div>
                <div className="w-30 py-3  bg-white h-10 flex justify-center items-center cursor-pointer rounded-xl tracking-wider hover:tracking-widest transition-all duration-300 text-[12px] hover:text-[11px] hover:bg-gray-800 hover:text-white/80 mt-2">
                    EXPLORE MORE
                </div>
            </div>
            <div className="absolute right-14 flex gap-4">

            </div>
        </div>
    )
}
