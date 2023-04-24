const fs = require('fs')
const readline = require('readline')

arr = ['Jesus', 'Pili', 'Teuddy', 'Andy']


dict = [
  {'palabra1': 'resultado1'},
  {'palabra2': 'resultado2'},
  // ...
  {'palabra10000': 'resultado10000'}
]

// fuerza bruta (prom: N/2 consultas => TO(N)  )
function fuerza_bruta(palabra) {

  for (let termino of diccionario) {
    if (termino[0] == palabra) {
      return termino[1]
    }
  }
  return undefined
}

function b_binaria(palabra, diccionario, inicial, final) {
  if (inicial == undefined) {
    inicial = 0
  }
  if (final == undefined) {
    final = diccionario.length - 1
  }
  const pto_medio = Math.floor((inicial + final) / 2)

  // ahora busco la palabra
  if (diccionario[pto_medio] == palabra) {
    return 'LISTO!'
  }
  else if (inicio == final) {
    return 'No existe!!!'
  }
  // Si está en la mitad de antes de la palabra
  else if (palabra < diccionario[pto_medio]) {
    return b_binaria(palabra, diccionario, inicio, pto_medio)
  }
  else {
    return b_binaria(palabra, diccionario, pto_medio, final)
  }
}

function distancia (punto1, punto2) {
  return Math.abs(punto1[0], punto2[0]) + Math.abs(punto1[1], punto2[1])
}

const clientes = [[1, 1], [4, 9], [9, 6]]
// 0 <= x <= 5
// 4 <= y <= 7
function joe (clientes) {
  // 1. Buscamos el cuadrante en donde se encuentra el punto óptimo
  let min_x = clientes[0][0]
  let max_x = clientes[0][0]

  let min_y = clientes[0][1]
  let max_y = clientes[0][1]

  for (let i=0; i < clientes.length; ++i) {
    const cliente = clientes[i]

    if (cliente[0] < min_x) {
      min_x = cliente[0]
    }
    if (cliente[0] > max_x) {
      max_x = cliente[0]
    }

    if (cliente[1] < min_y) {
      min_y = cliente[1]
    }
    if (cliente[1] > max_y) {
      max_y = cliente[1]
    }
  }

  
  let d_total = 100000
  let optimo = [min_x, min_y]
  // 2. Visitamos todos los puntos dentro del cuadrante. Y vamos guardando el
  // punto que tenga la menor distancia
  for (let x = min_x; x <= max_x; x++) {
    for (let y = min_y; y <= max_y; y++) {
      const dist = distancia([x, y], clientes[0]) + distancia([x, y], clientes[1])
      + distancia([x, y], clientes[2]);
      console.log(`En ${[x, y]}, la distancia es de ${dist}`)
      
      if (dist < d_total) {
        optimo = [x, y]
        d_total = dist
      }
    }
  }

  console.log(`El óptimo es el punto ${optimo}, y la distancia total es de: ${d_total}`)
}

joe(clientes);
