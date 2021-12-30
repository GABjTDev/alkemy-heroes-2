import { useState, useEffect } from 'react';
import axios from 'axios';

const API = 'https://www.superheroapi.com/api.php/6270248763048316';

const initialState = {
    heroes: [],
    loading: true,
    error: null
}

const validate = (heroe) => {

    if(heroe.appearance.height[1].split(' ')[0] !== '0'){

        if ((!(heroe.powerstats.combat === "null") || !(heroe.powerstats.intelligence === "null") || !(heroe.powerstats.durability === "null") || !(heroe.powerstats.power === "null")) && (heroe.biography.alignment !== 'neutral')) {
            return heroe
        }

    }

    return false;

}

const useHeroes = () => {
    const [data, setData] = useState(initialState);

    const getHeroesAsync = async() => {

        const newHeroes = [];

        for(let i = 1; i <= 25; i++){
            const res = await axios.get(`${API}/${i}`);
            const heroe = await res.data;
            let heroeValidate = validate(heroe);

            if(heroeValidate){
                newHeroes.push(heroeValidate);
            }
            
        }

        setData({
            heroes: newHeroes,
            loading: false,
            error: null
        });
    }

    const searchHeroe = async(search) => {

        setData({
            ...data,
            loading: true,
            error: null
        });

        const newHeroes = [];

        const res = await axios.get(`${API}/search/${search}`);
        const heroes = await res.data;

        if(heroes.response === 'error'){
            setData({
                heroes: [],
                loading: false,
                error: true
            });

        }else{

            heroes.results.forEach(heroe => {
                let heroeValidate = validate(heroe);

                if(heroeValidate){
                    newHeroes.push(heroeValidate);
                }

                if(newHeroes.length === 0){

                    setData({
                        heroes: [],
                        loading: false,
                        error: true
                    });

                }else{

                    setData({
                        heroes: newHeroes,
                        loading: false,
                        error: null
                    });

                }

            })


        }

    }

    useEffect(() => {

        getHeroesAsync();
        
    }, [])

    return {...data, searchHeroe}

}

export default useHeroes
