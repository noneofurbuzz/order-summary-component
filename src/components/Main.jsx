import heroimage from "/src/assets/images/illustration-hero.svg"
import music from "/src/assets/images/icon-music.svg"

function Main(){
    return(
        <div className="bg-white flex flex-col rounded-2xl max-w-sm mx-90">
            <img src={heroimage} alt="hero image" className="rounded-t-2xl max-w-full"></img>
            <h1 className="font-black text-xl text-center pt-8 pb-5 text-dark-blue">Order Summary</h1>
            <p className="font-medium text-base text-center text-desaturated px-10">You can now listen to millions of songs, audiobooks, and podcasts on any 
                device anywhere you like!
            </p>
            <div className="flex items-center bg-very-pale-blue mt-4 mb-6 mx-9 p-5 rounded-lg">
                <div className="flex mr-20">
                <img src= {music} alt="music-logo" className="pr-4"></img>
                <div>
                    <p className="text-dark-blue font-bold text-base">Annual Plan</p>
                    <p className="text-base font-medium text-desaturated">$59.99/year</p>
                </div>
                </div>
                <a href="#" className="text-bright-blue font-bold underline text-base hover:text-desaturated active:text-desaturated focus:text-desaturated">Change</a>
            </div>
            <button className="bg-bright-blue mx-9 rounded-xl py-2 text-white font-bold text-base shadow-2xl hover:bg-desaturated active:bg-desaturated focus:bg-desaturated">Proceed to Payment</button>
            <a href="#" className="text-center mx-9 font-bold pt-4 pb-6 text-base text-desaturated hover:text-dark-blue active:text-dark-blue focus:text-dark-blue">Cancel Order</a>
        </div>
    )
}
export default Main