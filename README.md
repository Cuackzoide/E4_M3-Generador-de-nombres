# 🛠️ E4-M3 Ejercicio

## Generador de Nombres de Usuario 🤖

### Objetivo:

Practicar el uso de métodos de los objetos preconstruidos String y Math para manipular texto y generar números aleatorios, combinándolos para crear un resultado dinámico a partir de la entrada del usuario.

### Instrucciones:

#### Captura de Datos:

1. Solicita al usuario su nombre utilizando `prompt()` y guárdalo en una variable.

2. Solicita al usuario su apellido en un segundo `prompt()` y guárdalo en otra variable.

3. Se migra a uso de formulario HTML `<input>`, `<label>` y `<button>`

#### Procesamiento de los Nombres:

1. Inicial: Toma la primera letra del nombre. Puedes usar `slice(0, 1)` o `charAt(0)`.

2. Apellido: Toma las primeras tres letras del apellido. Usa `slice(0, 3)`.

3. Formato: Convierte ambos fragmentos a minúsculas utilizando `toLowerCase()`.

#### Generación de Número Aleatorio:

- Genera un número aleatorio de dos dígitos. Para ello, puedes combinar `Math.random()` con `Math.floor()`.

- Se regenera automaticamente en caso de no cumplir validación.

#### Ensamblaje y Muestra del Resultado:

- Une la inicial del nombre, los primeros caracteres del apellido y el número aleatorio para formar el nombre de usuario final. Puedes usar el operador `+` o el método `concat()`

- Muestra el resultado final en la consola `console.log()` con un mensaje claro.

- Se modifica la presentación del resultado utilizando manipulación del DOM, desplegando la información del usuario en formato `card` de bootstrapp.

#### Ejemplo de Salida

- Si el usuario ingresa "Ana" y "De Armas":

**en Consola:**

```bash
Tu nuevo nombre de usuario es: adea87
```

**en HTML**

<div class="container">
 <div class="row">
  <div class="col-4 m-4"> 
    <div class="card">
      <div class="card-header">
      Username: adea87
      </div>
    <div class="card-body">
      <p>First Name: Ana</p>
      <p>Last Name: De Armas</p>
    </div>
  </div>
 </div>
</div>

### Conceptos a Aplicar:

- Objetos Preconstruidos: `String` y `Math`.

- Métodos de String:

`toLowerCase()`: Para la conversión a minúsculas.

`slice()` o `charAt()`: Para extraer partes de un string.

`concat()` (o el operador `+`): Para la unión de strings.

- Métodos de Math:

`Math.random()`: Para generar un número decimal aleatorio.

`Math.floor()`: Para redondear hacia el entero inferior.

- Entrada de Datos: `prompt()` / Formulario HTML con validaciones.

- Manipulación del DOM:

* `addEventListener` + `preventDefault()` para manejo de eventos

* Selección de elementos HTML `.querySelector`

* Captura de datos `.value`

* Validaciones con flujos condicionales `if` + `while`

* Manipulación de atributtos `hidden` para mostrar errores

* Renderizado de información `.innerHTML`

### Entrega:

- El trabajo deberá ser entregado a través de un [repositorio público](https://github.com/Cuackzoide/E4_M3-Generador-de-nombres) en GitHub.
