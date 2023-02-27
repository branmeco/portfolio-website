import React from 'react'

const Social = () => {
    return (
        <div className='home__social'>
            <a href="https://discord.gg/PgCjXaUA" className="home__social-icon" target="_blank" rel="noreferrer">
                <i class="uil uil-discord"></i>
            </a>
            <a href="https://api.whatsapp.com/send?phone=%2B573227178508&text=Hola+%3A-D+quieres+que+creamos+un+plataforma+para+tu+negocio+juntos%2C+hablamos+y+organizaremos+todos+los+detalles." className="home__social-icon" target="_blank" rel="noreferrer">
                <i class="uil uil-whatsapp"></i>
            </a>
            <a href="https://github.com/branmeco" className="home__social-icon" target="_blank" rel="noreferrer">
                <i class="uil uil-github"></i>
            </a>
        </div>
    )
}

export default Social