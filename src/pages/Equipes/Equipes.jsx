import mahindraImg from "../../assets/images/svg/mahindra.svg";
import abtCupra from "../../assets/images/svg/abt.svg"
import andretti from "../../assets/images/svg/andretti.svg"
import dsAutomobile from "../../assets/images/svg/dsautomobiles.svg"
import envision from "../../assets/images/svg/envision.svg"
import ert from "../../assets/images/svg/ert.svg"
import jaguar from "../../assets/images/svg/jaguar.svg"
import maserati from "../../assets/images/svg/maserati.svg"
import mclaren from "../../assets/images/svg/maserati.svg"
import nissan from "../../assets/images/svg/nissan.svg"
import tagheuer from "../../assets/images/svg/tagheuer.svg"
import EquipeCard from "../../components/EquipeCard/EquipeCard";


function Equipes() {

    const equipes = {
        "jaguar": {
            "nome": "Jaguar Racing",
            "img": jaguar,
            "posicao": 1,
        },
        "tagheuer": {
            "nome": "TAG Heuer Porsche",
            "img": tagheuer,
            "posicao": 2,
        },
        "ds": {
            "nome": "DS Penske",
            "img": dsAutomobile,
            "posicao": 3,
        },
        "nissan": {
            "nome": "Nissan",
            "img": nissan,
            "posicao": 4,
        },
        "andretti": {
            "nome": "Andretti",
            "img": andretti,
            "posicao": 5,
        },
        "envision": {
            "nome": "Envision Racing",
            "img": envision,
            "posicao": 6,
        },
        "mclaren": {
            "nome": "NEOM McLaren",
            "img": mclaren,
            "posicao": 7,
        },
        "maserati": {
            "nome": "Maserati MSG Racing",
            "img": maserati,
            "posicao": 8,
        },
        "abt": {
            "nome": "ABT CUPRA",
            "img": abtCupra,
            "posicao": 9,
        },
        "mahindra": {
            "nome": "Mahindra Racing",
            "img": mahindraImg,
            "posicao": 10,
        },
        "ert": {
            "nome": "ERT",
            "img": ert,
            "posicao": 11,
        },
    }


    return (
        <div className="mx-auto container px-2 mt-32 sm:px-1 h-screen">
            <div id="titles" class="w-full mb-12">
                <h1 className="text-4xl font-bold">Equipes</h1>
                <h3 className="font-bold text-opacity-85 text-black">Descubra o seu time!</h3>
            </div>
            <EquipeCard equipes={equipes} />
        </div>
    );
}

export default Equipes;