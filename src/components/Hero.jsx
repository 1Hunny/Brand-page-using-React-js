const HeroSection =()=>{
    return (
    <main className="hero container ">

    <div className="hero-content">
        <h1>YOUR FEET DESERVES THE BEST</h1>
        <p>By choosing the right footwear for different activities and occasions, and by avoiding common foot problems, injuries and pain caused by improper footwear, we can enjoy great foot health, better mobility, comfort and quality of life and prevent future complications. Remember, your feet deserve the best!</p>
        <div className="hero-btn">
        <button>Shop Now</button>
        
        <button>Category</button>

        <div>
        <div >
            <p className="shopping">Also avaliable on</p>
            <div className="brand-icons">
                <img src="/amazon.jpeg" alt="amazon-logo"height={70} />
                <img src="/flipkart.jpeg" alt="flipkart-logo" height={70} />
            </div>
        </div>
    </div>
    </div>


    </div>
   
    

    <div className="shoe-image">
 <img src="/f7b4c6a7-8ac2-441a-ba7a-100dd10efff41700471725512-Nike-Men-Woven-Design-Downshifter-11-Running-Shoes-293170047-1.jpg" alt="shoes-image" height={300}  />

    </div>

    </main>
    );
};

export default HeroSection;