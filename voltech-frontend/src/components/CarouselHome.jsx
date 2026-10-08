import { Carousel } from 'react-bootstrap';

export default function Inicio() {
    return (<>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images5.alphacoders.com/332/thumb-1920-332662.jpg"
                    alt="Imagen de Portada"
                />
                <Carousel.Caption>
                    <h3>Primera Impresion</h3>
                    <p>Hola, este es un juegazo</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images8.alphacoders.com/534/thumb-1920-534480.jpg"
                    alt="Segunda diapositiva"
                />
                <Carousel.Caption>
                    <h3>Segunda diapositiva</h3>
                    <p>Otro contenido interesante.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images5.alphacoders.com/297/thumb-1920-297999.jpg"
                    alt="Segunda diapositiva"
                />
                <Carousel.Caption>
                    <h3>Segunda diapositiva</h3>
                    <p>Otro contenido interesante.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </>
    );
}