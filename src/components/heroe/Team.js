import ColHeroeCard from "./ColHeroeCard"

const Team = ({title, teams, stats}) => {

    return (
        <div className="mb-2 mt-2">
            <h2 className={`text-center ${title === 'Heroes'? 'text-primary': 'text-danger'}`}>{title}</h2>
            <div className="container">
                <div className="row" style={{justifyContent:'center'}}>
                    {
                        teams.map(heroe => {
                            return <ColHeroeCard key={heroe.id} heroe={heroe} actionDelete={true}  />
                        })
                    }
                    <div className="col-sm-10 col-md-10 col-xl-3 mb-4 text-stats">
                        <h2>Stats Total {title}</h2>
                        <p>Combat: <b>{stats.combat}</b></p>
                        <p>Durability: <b>{stats.durability}</b></p>
                        <p>Intelligence: <b>{stats.intelligence}</b></p>
                        <p>Power: <b>{stats.power}</b></p>
                        <p>Speed: <b>{stats.speed}</b></p>
                        <p>Strength: <b>{stats.strength}</b></p>
                        <p>Height: <b>{stats.height}</b></p>
                        <p>Weight: <b>{stats.weight}</b></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
