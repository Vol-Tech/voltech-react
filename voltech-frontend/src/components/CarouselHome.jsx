import Carousel from 'react-bootstrap/Carousel'

function CarouselHome() {
  return (
    <Carousel fade interval={5000}>
      <Carousel.Item>
        <img src="/img/Banner Voltech.png" alt="Banner VolTech" />
        <Carousel.Caption>
          <h3>Tienda Tecnologica VolTech</h3>
          <p>Todos tus productos tecnologicos a tu disposición</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src="/img/Cables Voltech.png" alt="Monitor gamer" />
      </Carousel.Item>

      <Carousel.Item>
        <img src="/img/Equipo Voltech.png" alt="Mouse gamer" />
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselHome