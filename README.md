# Reto calculadora simple

Este es un ejercicio para crear una calculadora

## Instrucciones

1. Crea la maquetación necesaria para la calculadora.
2. Escucha los clicks del usuario a los botones y haz que se muestre la operación en pantalla
3. Realiza el cálculo, limpiando la pantalla y mostrando el resultado

## Esquema de la pantalla

| <td colspan=4>PANTALLA |
| ---------------------- | --- | --- | --- |
| 7                      | 8   | 9   | /   |
| 4                      | 5   | 6   | \*  |
| 1                      | 2   | 3   | -   |
| C                      | 0   | =   | +   |

## Funciones

### `add(a, b)`

Esta función toma dos números como argumentos y devuelve la suma de los mismos.

### `substract(a, b)`

Esta función toma dos números como argumentos y devuelve la resta del segundo número al primero.

### `product(a, b)`

Esta función toma dos números como argumentos y devuelve el producto de los mismos.

### `division(a, b)`

Esta función toma dos números como argumentos y devuelve el cociente de la división del primer número entre el segundo.

### `clear()`

Esta función limpia la pantalla

## A tener en cuenta

1. El diseño puede ser tan sencillo como hacer un grid con los botones, como tan complejo como trabajar el CSS para que se parezca a una calculadora Braun ET66
2. En JS existe una función [eval()](https://www.w3schools.com/jsref/jsref_eval.asp) que permite convertir un string en una operación y realizar el cálculo pero cuidado, se trata de una función peligrosa y que no se recomienda su uso, incluso ha sido deprecada. Deberás buscar alternativas a eval (chatGPT y stack overflow son tus copilotos)

## Evaluación

-   Si la calculadora no sigue el esquema propuesto o no hace las operaciones indicadas, recibirás una nota del 0 al 5
-   Si la calculadora sigue el esquema propuesto y hace las operaciones indicadas, recibirás una nota del 5 al 7
-   Si has descubierto alternativas a eval(), tendrás un punto más
-   Si además has trabajado los CSS para que tenga un aspecto impresionte, tendrás dos puntos más.