function EquipeCard({ equipes }) {

    const equipesIds = Object.keys(equipes);

    return (
        <div className="container">

            {
                equipesIds.map((equipeId) => (
                    <div className="w-full h-32 flex gap-8 items-center border px-12 py-6 md:w-1/2">
                        <div className="w-max h-32 flex items-center justify-center">
                            <img src={equipes[equipeId]["img"]} alt="" className="w-44 h-auto" />
                        </div>

                        <div className="h-24 w-px bg-black"></div>

                        <div className="flex h-full">
                            <div className="flex flex-col gap-1">
                                <h2 className="text-l font-raleway">Mahindra Racing</h2>

                                <span className="text-base">12 Lugar</span>
                            </div>
                        </div>


                    </div>
                ))
            }

        </div>
    );
}

export default EquipeCard
