import React from "react";
import '../styles/components/pages/ServiciosPage.css';
const ServiciosPage = (props) => {

    return (
        <main className="servicios">
            <div className="contenedorservicios">
                <div>
                    <h2>Odontologia general</h2>
                    <p> Diagnóstico, prevención y tratamiento de las
                        enfermedades.</p><img className="imgservicio" src="img/ODONTOLOGIA.png" width="90px"
                            alt="odontologia" />
                </div>
                <div>
                    <h2>Implante</h2>
                    <p> Tornillo de titanio que se coloca en el maxilar para reemplazar la raíz del diente perdido.</p> <img
                        className="imgservicio" src="img/IMPLANTE.png" width="90px" alt="implante" />
                </div>
                <div>

                    <h2>Ortodoncia y ortopedia</h2>
                    <p>Ramas que se encargan de la corrección y guía de los dientes y huesos para una correcta posición.</p>
                    <img className="imgservicio" src="img/ORTODONCIA.png" width="90px" alt="ortodoncia" />
                </div>
                <div>
                    <h2> Blanqueamiento</h2>
                    <p>Tratamiento que tiene como finalidad aclarar los dientes (disminuir el tono).</p><img
                        className="imgservicio" src="img/BLANQUEAMIENTO.png" width="90px" alt="blanqueamiento" />
                </div>
            </div>
        </main>
    );
}

export default ServiciosPage;