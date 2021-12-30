import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { getHeroe } from "../../helpers/getHeroe";
import Progress from "../ui/Progress";
import Spinner from "../ui/Spinner";

import '../../styles/components/heroe/HeroeScreen.css';
import ButtonsAdd from "../ui/ButtonsAdd";

const initialState = {
    heroe: {},
    loading: true
}

const HeroeScreen = () => {

    const {id} = useParams();
    const [heroe, setHeroe] = useState(initialState);

    const {name, biography, image, powerstats, appearance, work} = heroe.heroe;

    useEffect(() => {
        
        const dataHeroe = async() =>{
            const heroe = await getHeroe(id);
    
            setHeroe({
                heroe,
                loading: false
            })
        }

        dataHeroe()

    }, [id])

    return (
        <div className={`container ${heroe.loading? 'd-flex justify-content-center' : ''}`}>
            {   
                heroe.loading ?
                    <Spinner />
                    :
                    <>
                        <div className="heroe-data">
                            <h1>{name}</h1>
                            <div className="heroe-title-img">
                                <img className="img-fluid img-thumbnail" src={image.url} alt={`Foto de ${name}`} style={{maxHeight: "400px"}}/>
                            </div>
                            <div className="heroe-info">
                                <h2>Biography</h2>
                                <p>Full-name: <b>{biography["full-name"]}</b></p>
                                <p>Aliases: <b>{biography["aliases"]}</b></p>
                                <p>First-appearance: <b>{biography["first-appearance"]}</b></p>
                                <p>Publisher: <b>{biography["publisher"]}</b></p>
                                <p>Alignment: <b>{biography["alignment"]}</b></p>
                                <p>Height: <b>{appearance["height"][1]}</b></p>
                                <p>Weight: <b>{appearance["weight"][1]}</b></p>
                                <p>Eye Color: <b>{appearance["eye-color"]}</b></p>
                                <p>Hair Color: <b>{appearance["hair-color"]}</b></p>
                                <p>Work: <b>{work["occupation"]}</b></p>
                                <ButtonsAdd {...heroe.heroe} />
                            </div>
                        </div>
                        <h2>Stats:</h2>
                        <Progress powerstats={powerstats} rol={biography["alignment"]} />
                    </>
            }
        </div>
    )
}

export default HeroeScreen
