import mahindraImg from "../../assets/images/svg/mahindra.svg";
import EquipeCard from "../../components/EquipeCard/EquipeCard";


function Equipes() {

    const equipes = {
        "mahindra": {
            "img": mahindraImg,
        },
    }


    return (
        <div className="mx-auto container mt-32">
            <div id="titles" class="w-full mb-12">
                <h1 className="text-4xl font-bold">Equipes</h1>
                <h3 className="font-bold text-opacity-85 text-black">Descubra o seu time!</h3>
            </div>
            <EquipeCard equipes={equipes} />
        </div>
    );
}

export default Equipes;