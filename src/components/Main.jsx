import heroimage from "/src/assets/images/illustration-hero.svg"
import music from "/src/assets/images/icon-music.svg"

function Main(){
    return(
        <div className=" flex flex-col bg-white rounded-2xl max-w-sm mx-8">
            <img src={heroimage} alt="hero image" className="rounded-t-2xl max-w-full"></img>
            <h1 className="font-black text-xl text-center pt-8 pb-5 text-dark-blue">Order Summary</h1>
            <p className="font-medium text-base text-center text-desaturated px-8 ">You can now listen to millions of songs, audiobooks, and podcasts on any 
                device anywhere you like!
            </p>
            <div className="flex items-center justify-between bg-very-pale-blue mt-4 mb-6 mx-5 p-4 rounded-lg">
                <div className="flex items-center mr-10">
                <img src= {music} alt="music-logo" className="pr-4"></img>
                <div>
                    <p className="text-dark-blue font-bold text-sm">Annual Plan</p>
                    <p className="text-sm font-medium text-desaturated">$59.99/year</p>
                </div>
                </div>
                <a href="#" className="text-bright-blue font-bold ml-10 underline text-sm hover:text-desaturated active:text-desaturated">Change</a>
            </div>
            <div className="flex flex-col">
                <button className="bg-bright-blue mx-5 rounded-xl py-3 text-white font-bold text-sm shadow-2xl hover:bg-desaturated active:bg-desaturated">Proceed to Payment</button>
                <a href="#" className="text-center font-bold pt-4 pb-6 text-sm text-desaturated hover:text-dark-blue active:text-dark-blue">Cancel Order</a>
            </div>
            
        </div>
    )
}
export default Main