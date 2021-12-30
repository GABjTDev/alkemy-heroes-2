import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import Team from "./Team";

const updateStats = (stats) => {
    return stats.reduce((previousValue, currentValue) => {
        return {
            'intelligence': Number(previousValue.intelligence) + Number(currentValue.intelligence),
            'strength': Number(previousValue.strength) + Number(currentValue.strength),
            'speed': Number(previousValue.speed) + Number(currentValue.speed),
            'durability': Number(previousValue.durability) + Number(currentValue.durability),
            'power': Number(previousValue.power) + Number(currentValue.power),
            'combat': Number(previousValue.combat) + Number(currentValue.combat),
            'height': Number(previousValue.height.split(' ')[0]) + Number(currentValue.height.split(' ')[0]) + ' cm',
            'weight': Number(previousValue.weight.split(' ')[0]) + Number(currentValue.weight.split(' ')[0]) + ' kg'
        }
    });
}

const createStats = (team) => {

    if(team.length >= 1){

        const arrStats = [];

        team.forEach(pj => {
            const newObj = {
                ...pj.powerstats,
                height: pj.appearance.height[1],
                weight: pj.appearance.weight[1]
            }


            arrStats.push(newObj);
        });

        const newStats = updateStats(arrStats);
        return newStats;
    }

    return {}
}



const TeamScreen = () => {

    const {heroesTeam, villansTeam} = useSelector(state => state.teams);
    const [statsHeroes, setStatsHeroes] = useState({});
    const [statsVillans, setStatsVillans] = useState({});

    useEffect(() => {
        setStatsHeroes(createStats(heroesTeam))
    }, [heroesTeam])

    useEffect(() => {
        setStatsVillans(createStats(villansTeam));
    }, [villansTeam])

    return (
        <main className="container">
            <h1 className="text-center mb-5">Teams Heroes/Villans</h1>
            {
                heroesTeam.length >= 1?
                    <Team title="Heroes" teams={heroesTeam} stats={statsHeroes} />
                    :
                    <h2 className="text-center mb-5 text-primary">Heroes empty</h2>
            }

            {
                villansTeam.length >= 1?
                    <Team title="Villans" teams={villansTeam} stats={statsVillans} />
                    :
                    <h2 className="text-center text-danger">Villans empty</h2>
            }
        </main>
    )
}

export default TeamScreen
