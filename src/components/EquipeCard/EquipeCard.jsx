import { useState, useEffect } from "react";
import Star from "../Star/Star";
import FilterButtons from "../FilterButtons/FilterButtons";

function EquipeCard({ equipes }) {
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [filteredEquipes, setFilteredEquipes] = useState(equipes);
    const [averagePosition, setAveragePosition] = useState(null);

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
    };

    const updateFilteredEquipes = () => {
        const favoritedTeams = JSON.parse(localStorage.getItem('favoritedTeams')) || [];

        if (selectedFilter === 'favorites') {
            const filtered = Object.keys(equipes).reduce((acc, equipeId) => {
                if (favoritedTeams.some(fav => fav.equipeId === equipeId)) {
                    acc[equipeId] = equipes[equipeId];
                }
                return acc;
            }, {});
            setFilteredEquipes(filtered);
        } else {
            setFilteredEquipes(equipes);
        }
    };

    useEffect(() => {
        updateFilteredEquipes();
    }, [selectedFilter, equipes]);

    // Cálculo da média das posições das equipes filtradas
    useEffect(() => {
        if (Object.keys(filteredEquipes).length > 0) {
            const totalPositions = Object.keys(filteredEquipes).reduce((acc, equipeId) => {
                return acc + filteredEquipes[equipeId]["posicao"];
            }, 0);
            const avg = totalPositions / Object.keys(filteredEquipes).length;
            setAveragePosition(avg);
        } else {
            setAveragePosition(null); // Reseta a média se não houver equipes
        }
    }, [filteredEquipes]);

    const hasNoFavorites = selectedFilter === 'favorites' && Object.keys(filteredEquipes).length === 0;

    return (
        <div>
            <FilterButtons selectedFilter={selectedFilter} onFilterChange={handleFilterChange} />

            <div className="mb-6"></div>

            {/* Exibir a média das posições */}
            {averagePosition !== null && (
                <div className="text-center mb-4">
                    <h4 className="font-bold">Média das Posições: {averagePosition.toFixed(2)}</h4>
                </div>
            )}

            <div className="container mx-0 px-6 gap-6 grid grid-cols-1 sm:grid-cols-2 sm:mx-0 sm:px-0 md:grid-cols-3 lg:grid-cols-4">
                {   
                    hasNoFavorites ? (
                        <div className="col-span-full flex justify-center items-center h-64">
                            <h3>Nenhuma equipe favoritada</h3>
                        </div>
                    ) : (
                        Object.keys(filteredEquipes).map((equipeId) => (
                            <div className="w-full h-32 justify-center flex gap-8 items-center border px-12 py-6 sm:px-4" key={equipeId}>
                                <div className="w-max h-28 sm:w-48 lg:w-32 flex items-center justify-center">
                                    <img src={filteredEquipes[equipeId]["img"]} alt="" className="w-44 h-auto lg:max-w-full" />
                                </div>

                                <div className="h-24 w-px bg-black"></div>

                                <div className="flex h-full w-full md:w-full gap-1">
                                    <div className="flex flex-col gap-1 w-full">
                                        <h2 className="text-l font-raleway w-full md:text-base">{filteredEquipes[equipeId]["nome"]}</h2>
                                        <span className="text-base w-full md:text-sm">Posição: {filteredEquipes[equipeId]["posicao"]}</span>
                                    </div>
                                    <Star equipeId={equipeId} onFavoriteChange={updateFilteredEquipes} />
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    );
}

export default EquipeCard;
