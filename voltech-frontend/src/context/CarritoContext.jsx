import { createContext, useContext, useState, useEffect } from 'react'

const CarritoContext = createContext()

export function CarritoProvider({ children }) {
  const [items, setItems] = useState(() => {
    const guardado = localStorage.getItem('carrito')
    return guardado ? JSON.parse(guardado) : []
  })

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(items))
  }, [items])

  function agregar(producto, cantidad = 1) {
    const existe = items.find((item) => item.id === producto.id)
    if (existe) {
      setItems(
        items.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + cantidad } : item
        )
      )
    } else {
      setItems([...items, { ...producto, cantidad }])
    }
  }

  function cambiarCantidad(id, cantidad) {
    if (cantidad < 1) return
    setItems(items.map((item) => (item.id === id ? { ...item, cantidad } : item)))
  }

  function eliminar(id) {
    setItems(items.filter((item) => item.id !== id))
  }

  function vaciar() {
    setItems([])
  }

  const total = items.reduce((suma, item) => suma + item.precio * item.cantidad, 0)
  const cantidadTotal = items.reduce((suma, item) => suma + item.cantidad, 0)

  return (
    <CarritoContext.Provider
      value={{ items, total, cantidadTotal, agregar, cambiarCantidad, eliminar, vaciar }}
    >
      {children}
    </CarritoContext.Provider>
  )
}

export function useCarrito() {
  return useContext(CarritoContext)
}