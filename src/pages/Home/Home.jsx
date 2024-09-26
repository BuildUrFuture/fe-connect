import fecarImg from '../../assets/images/jpg/fe-car.jpg';
import './Home.css';

function Home() {
    return (
        <>
            <div className="w-full h-screen font-raleway">
                <img src={fecarImg} alt="Carro da Formula E" className='w-full h-full object-cover brightness-25' />

                <div className="absolute inset-0 flex justify-center items-center">
                    <h1 className="px-6 sm:px-0 animate-fade-up max-w-5xl text-white animate-once animate-duration-[1500ms] animate-ease-in-out text-4xl text-center font-bold">
                        Desafie-se, divirta-se e contribua: a Fórmula E é mais do que uma corrida!
                    </h1>
                </div>

            </div>
            <div className="mx-auto container">
                <h1 id="item1" className="text-3xl font-bold underline">Olá Home</h1>
            </div>
        </>
    );
}

export default Home