import '../styles/components/pages/ContactoPage.css';
import React from "react";
import { useState } from 'react';
import axios from 'axios';

const ContactoPage = (props) => {
    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        comentario: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <body className="fondocontacto" >
            <main className="contacto">
                <div className="contenedorcontacto">
                    <div>
                        <h2>Contacto</h2>
                        <form action="/contacto" method="post" className="formulario" onSubmit={handleSubmit} >
                            <p>
                                <label for="nombre">Nombre</label>
                                <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                            </p>
                            <p>
                                <label for="email">Email</label>
                                <input type="text" name="email" value={formData.email} onChange={handleChange} />
                            </p>
                            <p>
                                <label for="telefono">Telefono</label>
                                <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                            </p>
                            <p>
                                <label for="mensaje">Mensaje</label>
                                <textarea name="comentario" value={formData.comentario} onChange={handleChange}></textarea>
                            </p>
                            <p><input type="submit" value="Enviar" /></p>
                            {sending ? <p>Enviando...</p> : null}
                            {msg ? <p>{msg}</p> : null}
                        </form>
                    </div>
                </div>

                <div className="direccion">
                    <h2>Encontranos</h2>
                    <ul>
                        <li>Dirección: Av. Acevedo 10000, CABA, Argentina
                        </li>
                        <li>Email: odontologiaut@com.ar
                        </li>
                        <li> Tel.: 011.4000-9000</li>
                        <li>
                            <a href="https://www.facebook.com/"> <img className="imagenredes" src="img/facebook.png"
                                alt="facebook" /></a>

                            <a href="https://www.whatsapp.com/"><img className="imagenredes" src="img/whatsapp.png"
                                alt="whatsapp" /></a>

                            <a href="https://www.instagram.com/"><img className="imagenredes" src="img/instagram.jpg"
                                alt="instagram" /></a>
                        </li>
                    </ul>
                </div>

            </main>
        </body>
    );
}

export default ContactoPage;