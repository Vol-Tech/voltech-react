import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { obtenerProductos } from '../services/api';

export default function Categorias() {
  const { id } = useParams();

  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [cargando, setCargando] = useState(true);

  const categoriaId = id || categorias[0].id;
  const categoriaActual = categorias.find((cat) => cat.id === categoriaId) || categorias[0];

  useEffect(() => {
    const cargarCategoriaProductos = async () => {
      setCargando(true);

      try {
        const productos = await obtenerProductos();

        const filtrar = productos.filter((prod) => prod.categoria.toLowerCase() === categoriaId.toLowerCase());

        setProductosFiltrados(filtrar);
      } catch (error) {
        console.error("Error al cargar los productos de la categoria:", error);
      } finally {
        setCargando(false);
      }
    };

    cargarCategoriaProductos();

  }, [categoriaId]);

  return (
    <main className="container py-4">
      <div className="titulo-categoria">
        <h2>Categorías Disponibles</h2>
      </div>

      <div className="row g-3 justify-content-center mb-4">
        {categorias.map((cat) => (
          <div className="col-6 col-md-3" key={cat.id}>
            <Link to={`/categorias/${cat.id}`} className="card text-center text-decoration-none p-2">
              <img src={cat.imagen} alt={cat.nombre} className="categoria-img" />
              <span className="mt-2">{cat.nombre}</span>
            </Link>
          </div>
        ))}
      </div>

      <h2 className="mb-3">{categoriaActual.nombre}</h2>

      <div className="producto-contenedor">
        {cargando ? (
          <p>Cargando productos de la base de datos...</p>
        ) : productosFiltrados.length === 0 ? (
          <p>No hay productos disponibles en esta categoría por el momento.</p>
        ) : (
          productosFiltrados.map((producto) => (
            <ProductCard key={producto.id} producto={producto} clase="producto" />
          ))
        )}
      </div>

    </main>
  )
}