class Nodo {
  constructor (llave, valor, izq, der) {
    this.llave = llave
    this.valor = valor
    this.izq = izq
    this.der = der
  }
  add (llave, valor) {
    // caso en que se agregue a la izquierda
    if (llave < this.llave) {
      if (this.izq) {
        this.izq.add(llave, valor)
      }
      else {
        this.izq = new Nodo(llave, valor)
      }
    }
    // caso en que se agrega a la derecha
    else {
      if (this.der) {
        this.der.add(llave, valor)
      }
      else {
        this.der = new Nodo(llave, valor)
      }
    }
  }

  search (term) {
    if (term == this.llave) {
      return this.valor
    }
    else if (term < this.llave) {
      if (this.izq) {
        return this.izq.search(term)
      }
      else {
        return null
      }
    }
    else {
      if (this.der) {
        return this.der.search(term)
      }
      else {
        return null
      }
    }
  }
  altura () {
    let alturaIzq
    if (this.izq) {
      alturaIzq = this.izq.altura()
    }
    else {
      alturaIzq = 0
    }

    let alturaDer
    if (this.der) {
      alturaDer = this.der.altura()
    }
    alturaDer = 0

    return 1 + Math.max(alturaDer, alturaIzq)
  }

  print () {
    if (this.izq) {
      this.izq.print()
    }
    console.log(this.llave)
    if (this.der) {
      this.der.print()
    }
  }
}
//'abalid' 'abel'
class Abb {

  constructor () {
    this.raiz = null
  }

  search(termino) {
    if (this.raiz == null) {
      return null
    }
    return this.raiz.search(termino)
  }

  add (llave, valor) {
    // 1. Si el árbol está vacío
    if (this.raiz == null) {
      this.raiz = new Nodo(llave, valor)
    }
    else {
      this.raiz.add(llave, valor)
    }

  }

  altura () {
    if (!this.raiz) {
      return 0
    }
    return this.raiz.altura()
  }
  print () {
    if (!this.raiz) {
      return
    }
    return this.raiz.print()
  }


}

const arbol = new Abb()
arbol.add('italo', 'datos de italo')
arbol.add('carolina', 'datos de carolina')
arbol.add('jessica', 'datos de jessica')
arbol.add('andy', 'datos de andy')
arbol.add('teuddy', 'datos de teuddy')
arbol.add('lucho', 'datos de lucho')
arbol.add('matias', 'datos de matias')
arbol.add('jesus', 'datos de jesus')
arbol.add('sara', 'datos de sara')

