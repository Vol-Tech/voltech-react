export function guardarUltimaOrden(orden) {
  localStorage.setItem('ultimaOrden', JSON.stringify(orden))
}

export function obtenerUltimaOrden() {
  const guardada = localStorage.getItem('ultimaOrden')
  return guardada ? JSON.parse(guardada) : null
}