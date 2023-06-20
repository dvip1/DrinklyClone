import NavBar from './navBar'
import '../hero.css'
import Server from './server';
function Hero() {
    return (
        <>
            <section className="hero">
                <NavBar />
                <div className="myContainer">
                    <h1>Find the best  <span className='server'> <Server /> </span></h1>
                  
                </div>
            </section>


        </>
    )
}
export default Hero;