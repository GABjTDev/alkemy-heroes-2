import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { removeHeroe, removeVillan } from "../../actions/teams";
import ButtonsAdd from "../ui/ButtonsAdd";

import '../../styles/components/heroe/ColHeroeCard.css';



const ColHeroeCard = ({heroe, actionDelete}) => {

    const dispatch = useDispatch();

    const {
        id,
        name,
        image,
        biography
    } = heroe

    const handleDelete = (id) => {
        Swal.fire({
            title: `Estas seguro de eliminar a ${name} del equipo`,
            showDenyButton: true,
            confirmButtonText: 'Eliminar personaje',
            denyButtonText: `Cancelar`,
          }).then((result) => {
            if (result.isConfirmed) {
                
                if(biography['alignment'] === 'good'){
                    dispatch(removeHeroe(id));

                    const newObj = JSON.parse(localStorage.getItem('heroesAlkemy')).filter(heroe => heroe.id !== id);
                    localStorage.setItem('heroesAlkemy', JSON.stringify(newObj));

                }else{
                    dispatch(removeVillan(id));

                    const newObj = JSON.parse(localStorage.getItem('villansAlkemy')).filter(heroe => heroe.id !== id);
                    localStorage.setItem('villansAlkemy', JSON.stringify(newObj));

                }
                
                Swal.fire('Eliminado!', '', 'success')
            }
          })
    }

    return (
        <div className="col-sm-10 col-md-4 col-xl-3 mb-4">
            <div className="card card-height">
                <img src={image.url} className="card-img-top img-height" alt={`Imagen de ${name}`} style={{objectFit:"cover"}}/>
                <div className="card-body">
                    <div>
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">First-appearance: <b>{biography['first-appearance']}</b></p>
                        <p className="card-text">Full-name: <b>{biography['full-name']}</b></p>
                        <p className="card-text">Publisher: <b>{biography['publisher']}</b></p>
                    </div>
                    <div>
                        <Link className="btn btn-success btn-block mb-2" to={`/heroe/${id}`}>Ver más</Link>
                        
                        {
                            !actionDelete ?
                                <ButtonsAdd {...heroe} />
                            :
                                <button className="btn btn-danger btn-block mb-2" onClick={() => handleDelete(id)}>Eliminar</button>
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ColHeroeCard
