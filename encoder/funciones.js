import { LoremIpsum } from "lorem-ipsum";


const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 7
  },
  wordsPerSentence: {
    max: 16,
    min: 8
  }
});


//const paraph = lorem.generateParagraphs(1)
//console.log(paraph)

// 1. transformar un texto a binario
function text2Binary (string) {
  let arr = string.split('')
  arr = arr.map(char => {
    const binary = char.charCodeAt(0).toString(2)
    return ('0000000' + binary).slice(-8)
  })
  return arr.join(' ')
}

function binary2Text(str) {
  let letters = str.split(' ')
  letters = letters.map(letter => {
    return String.fromCharCode(parseInt(letter, 2))
  })
  return letters.join('')
}

//console.log(text2Binary('hola'))

//console.log(binary2Text('01101000 01101111 01101100 01100001'))

function encrypt (message) {
  const binary = text2Binary(message)
  let paraph = lorem.generateParagraphs(1)
  paraph = paraph.split('').filter(x => x.toLowerCase() != x.toUpperCase()).join('')
  let encodedMessage = ''

  let i  = 0
  
  for (let digit of binary) {
    const letter = paraph[i]

    // si hay un espacio en el binario
    if (digit == ' ') {
      continue
    }
    // ahora sabemos que en el binario hay un '0' o un '1', y en el párrafo hay una letra
    if (digit == '0') {
      encodedMessage += letter.toLowerCase()
    }
    else if (digit == '1') {
      encodedMessage += letter.toUpperCase()
    }
    i++;
  }
  return encodedMessage
}

//console.log(encrypt('hola'))

function decrypt (text) {
  let message = []
  for (let i = 0; i < text.length; i += 8) {
    let letter = ''
    for (let j=i; j<=i+7; j++) {

      if (text[j] == text[j].toLowerCase()) {
        letter += '0'
      }
      else {
        letter += '1'
      }
    }
    message.push(letter)
  }
  return binary2Text(message.join(' '))
}

export default {encrypt, decrypt}