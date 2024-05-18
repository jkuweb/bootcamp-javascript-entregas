import { isGameOver, valorarResultado, obtenerNumeroAleatorio, generarCarta, obtenerPuntosDeLaCarta } from "./motor"
import * as modelo from "./modelo"
import { vi } from "vitest"

describe('isGameOver', () => {
  it('debería de devolver true si puntuacion > PUNTUACION_GANADORA', () => {
    // Arrange
    vi.spyOn(modelo, 'puntuacion', 'get').mockReturnValue(8)
    // Act
    const resultado = isGameOver()
    // Assert
    expect(resultado).toBe(true)
  })
  it('deveria de devolver el siguiente texto "¡ Lo has clavado! ¡Enhorabuena!" si puntuacion === PUNTUACION_GANADORA', () => {
    // Arrange
    vi.spyOn(modelo, 'puntuacion', 'get').mockReturnValue(7.5)
    // Act
    const resultado: string = valorarResultado()
    // Assert
    expect(resultado).toBe('¡ Lo has clavado! ¡Enhorabuena!')
  })
})

describe('obtenerNumeroAleatorio', () => {
  it('"MathRandom lo forzamos a que devuelva 0, debería de devolver 0', () => {
    // Arrange
    const numeroEsperado = 0;
    vi.spyOn(global.Math, 'random').mockReturnValue(0)

    // Act
    const resultado = obtenerNumeroAleatorio()
    // Assert
    expect(resultado).toBe(numeroEsperado)
  })

  it('"MathRandom lo forzamos a que devuelva 1, debería de devolver 10', () => {
    // Arrange
    const numeroEsperado = 10;
    vi.spyOn(global.Math, 'random').mockReturnValue(1)

    // Act
    const resultado = obtenerNumeroAleatorio()
    // Assert
    expect(resultado).toBe(numeroEsperado)
  })
  it('"MathRandom lo forzamos a que devuelva 0.5, debería de devolver 5', () => {
    // Arrange
    const numeroEsperado = 5;
    vi.spyOn(global.Math, 'random').mockReturnValue(.5)

    // Act
    const resultado = obtenerNumeroAleatorio()
    // Assert
    expect(resultado).toBe(numeroEsperado)
  })
})

describe('generarCarta', () => {
  it('debería de devolver 10 cuando el número aleatório sea 8', () => {
    // Arrange
    const numeroEsperado = 10;

    vi.spyOn(global.Math, 'random').mockReturnValue(.8)
    const numeroAleatorio = obtenerNumeroAleatorio()

    // Act
    const resultado = generarCarta(numeroAleatorio)

    // Assert
    expect(resultado).toBe(numeroEsperado)
  })
  it('debería de devolver 11 cuando el número aleatório sea 9', () => {
    // Arrange
    const numeroEsperado = 11;

    vi.spyOn(global.Math, 'random').mockReturnValue(.9)
    const numeroAleatorio = obtenerNumeroAleatorio()

    // Act
    const resultado = generarCarta(numeroAleatorio)

    // Assert
    expect(resultado).toBe(numeroEsperado)
  })
  it('debería de devolver 12 cuando el número aleatório sea 1', () => {
    // Arrange
    const numeroEsperado = 12;

    vi.spyOn(global.Math, 'random').mockReturnValue(1)
    const numeroAleatorio = obtenerNumeroAleatorio()

    // Act
    const resultado = generarCarta(numeroAleatorio)

    // Assert
    expect(resultado).toBe(numeroEsperado)
  })
})

describe('obtenerPuntosDeLaCarta', () => {
  it('Debería devolver el numero 5 si el numero de la carta es un 5', () => {
    // Arrange
    const numeroEsperado = 5;

    vi.spyOn(global.Math, 'random').mockReturnValue(.5)
    const numeroAleatorio = obtenerNumeroAleatorio()
    const numeroCarta = generarCarta(numeroAleatorio)

    // Act
    const resultado = obtenerPuntosDeLaCarta(numeroCarta)

    // Expect
    expect(resultado).toBe(numeroEsperado)
  })
  it('Debería devolver el numero 0.5 si el numero de la carta es >= 10', () => {
    // Arrange
    const numeroEsperado = .5;

    vi.spyOn(global.Math, 'random').mockReturnValue(1)
    const numeroAleatorio = obtenerNumeroAleatorio()
    const numeroCarta = generarCarta(numeroAleatorio)

    // Act
    const resultado = obtenerPuntosDeLaCarta(numeroCarta)

    // Expect
    expect(resultado).toBe(numeroEsperado)
  })
})