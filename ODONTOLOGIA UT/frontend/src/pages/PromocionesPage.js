import { useState, useEffect } from 'react';
import axios from 'axios';
import PromocionItem from '../components/promociones/PromocionItem';


const PromocionesPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [promociones, setPromociones] = useState([]);

    useEffect(() => {

        const cargarPromociones = async () => {
            setLoading(true);

            const response = await axios.get('http://localhost:3000/api/promociones');

            setPromociones(response.data);
            setLoading(false);
        };
        cargarPromociones();

    }, []);

    return (
        <section className="holder">
            <h2 > PROMOCIONES!!! </h2>
            {
                loading ? (

                    <p> Cargando...</p>
                ) : (
                    promociones.map(item => <PromocionItem key={item.id}
                        promocion={item.promocion} descripcion={item.descripcion}
                        inicio={item.inicio} fin={item.fin}
                        imagen={item.imagen} body={item.cuerpo} />)
                )
            }
        </section>
    )
};



export default PromocionesPage;