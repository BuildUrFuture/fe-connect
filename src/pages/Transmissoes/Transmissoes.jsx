import { useState } from "react";
import vr from "../../assets/images/svg/vr.svg"

function Transmissoes() {
    const [isVr, setVr] = useState(false);

    const handleTransmissionChange = () => {
        setVr(prev => !prev);
    };

    return ( 
        <div className="mx-auto container px-2 mt-32 sm:px-1 h-screen">
            <div className="mb-32 lg:mb-16">
                <h1 className="text-4xl font-bold">Assista a transmissão aqui!</h1>
                <h3 className="font-bold text-opacity-85 text-black">O melhor do automobilismo.</h3>
            </div>
            <div className="flex flex-wrap w-full h-1/4 justify-center content-center items-center mx-auto gap-3 h-1/2 lg:w-full lg:h-3/4 lg:flex-nowrap">
                <div className="w-full h-min lg:w-min">
                    <button onClick={handleTransmissionChange} className="w-16 h-max">
                        <img src={vr} className="w-full h-min" alt="Imagem VR" />
                        {isVr ? "Voltar" : "VR"}
                    </button>
                </div> 

                {isVr ? (
                    <iframe className="w-full h-full" src="https://www.youtube.com/embed/ycMnAMnNX3I?si=mWS0zFelh6TBXLbg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                ) : (
                    <iframe className="w-full h-full"  src="https://www.youtube.com/embed/odGD7rMRqJQ?si=KtOGC0KrK2Jt9AvZ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                )}
            </div>
        </div>
    );
}

export default Transmissoes;
