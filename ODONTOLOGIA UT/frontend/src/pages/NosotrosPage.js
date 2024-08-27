import React from "react";
import '../styles/components/pages/NosotrosPage.css';
const NosotrosPage = (props) => {

    return (
        <main className="nosotros">
            <div className="contenedornosotros">
                <div className="textonosotros">
                    <h2>Somos Odontologia UT</h2>
                    <p>Somos un equipo de Odontólogos con una continua capacitación que nos permite ofrecer el tratamiento ideal
                        a
                        cada paciente. La atención es totalmente
                        personalizada dando confianza y calidez en un ambiente agradable.
                        Buscamos la prevención y mantenimiento de la salud bucal.
                        No solo realizamos implantes, coronas, prótesis, arreglos de caries, sino que también ayudamos a que
                        mantengas una excelente salud bucal.</p>
                </div>
                <div><img className="imagennosotros" src="img/Nosotros.jpg" width="400 px" alt="nosotros" /></div>
            </div>
        </main>
    );
}

export default NosotrosPage;