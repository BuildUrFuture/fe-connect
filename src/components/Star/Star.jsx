import { useState, useEffect } from "react";
import star from "../../assets/images/svg/star.svg";
import yellow_star from "../../assets/images/svg/yellow_star.svg";

function Star({ equipeId, onFavoriteChange }) {
    const [isFavorited, setIsFavorited] = useState(false);

    useEffect(() => {
        const favoritedTeams = JSON.parse(localStorage.getItem("favoritedTeams")) || [];
        const alreadyFavorited = favoritedTeams.some(team => team.equipeId === equipeId);
        setIsFavorited(alreadyFavorited);
    }, [equipeId]);

    const handleFavorite = () => {
        let favoritedTeams = JSON.parse(localStorage.getItem("favoritedTeams")) || [];

        if (isFavorited) {
            favoritedTeams = favoritedTeams.filter(team => team.equipeId !== equipeId);
            localStorage.setItem("favoritedTeams", JSON.stringify(favoritedTeams));
            setIsFavorited(false);
        } else {
            favoritedTeams.push({ equipeId });
            localStorage.setItem("favoritedTeams", JSON.stringify(favoritedTeams));
            setIsFavorited(true);
        }

        if (onFavoriteChange) {
            onFavoriteChange();
        }
    };

    return (
        <div onClick={handleFavorite} className="cursor-pointer w-4 h-4">
            <img src={isFavorited ? yellow_star : star} alt="Favorite Star" className="w-full h-full"/>
        </div>
    );
}

export default Star;
