import React from 'react';
import './../../styles/components/pages/PromocionesPage.css';
const PromocionItem = (props) => {

    const { promocion, descripcion, inicio, fin, imagen, body } = props;

    return (
        <div className="promociones">
            <h1> {promocion} </h1 >
            <h2> {descripcion} </h2 >
            <h2> Promoción válida desde {inicio} </h2 >
            <h2> hasta {fin} ó agotar stock</h2 >
            <img className="imagenp" src={imagen} />
            <div dangerouslySetInnerHTML={{ __html: body }} />

            <hr />
        </div>

    );
}

export default PromocionItem;