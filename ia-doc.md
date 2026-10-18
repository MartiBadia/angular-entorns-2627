# Document IA — Marti Badia — Pràctica AEA1

## Part 1 — Disseny de dades

- He usat IA? No
- Sin IA: escribí el código por mi cuenta.
- Reflexions:
  - ¿Por qué elegiste los tipos de cada campo?
    - Elegí `number` para el id, el precio, el stock y la puntuación porque son valores numéricos.
    - Elegí `string` para el nombre, la categoría y la imagen porque son textos o direcciones.
    - Elegí `boolean` para `disponible` porque solo necesitamos saber si se puede comprar.
  - ¿Dudaste al incluir algún campo?
    - Dudé con el campo de la imagen porque no tenía claro si debía guardarse o mostrarse.

## Part 2 — Components, interpolació i getters

- He usat IA? Sí
- Prompt: "He preguntado si las imágenes se debían mostrar en TarjetaComponent porque no sabía cómo interpretar el documento. Después he pedido que se añadieran de forma sencilla."
- Usat directament: La forma básica de mostrar la imagen con `[src]` y `[alt]`.
- Modificat: Añadí la imagen en la tarjeta y un estilo sencillo. No añadí funcionalidades innecesarias.
- Getter creatiu: `resumProducte` — combina el nombre y la puntuación del producto.
- Reflexions:
  - ¿Qué getter te costó más y por qué?
    - El getter creativo me costó más decidirlo porque tenía que combinar dos campos del producto.
  - ¿Qué diferencia hay entre un getter y un método normal?
    - Un getter devuelve un valor automáticamente y se usa sin paréntesis. Un método hay que llamarlo con paréntesis.

## Part 3 — @for

- He usat IA? No
- Sin IA: escribí el código por mi cuenta.
- Reflexiones:
  - ¿Por qué hay que usar `track` en `@for`?
    - Para que Angular pueda identificar cada producto de forma única.

## Part 4 — @if

- He usat IA? No
- Sin IA: escribí el código por mi cuenta.
- 3 usos de `@if` en mi proyecto:
  1. En `TarjetaComponent` para mostrar si el producto está disponible.
  2. En `App` para mostrar el producto seleccionado.
  3. En `Info` para mostrar si el componente está activo.
- Reflexiones:
  - ¿Podría hacer lo mismo con getters?
    - Un getter sirve para calcular o preparar un valor. `@if` sirve para decidir si algo se muestra o no.

## Part 5 — @Input i @Output

- He usat IA? Sí
- Prompt: "He pedido ayuda para completar la parte de `@Input` y `@Output` de forma sencilla."
- Usat directament: La forma básica de passar un producto a la targeta i de enviar l'esdeveniment de selecció.
- Modificat: He mantingut un sol `@Output` i he evitat afegir funcionalitats complexes.
- @Output triat: `producteSeleccionat` — avisa a la aplicación cuando el usuario selecciona un producto.
- Reflexiones:
  - ¿Cuál es la diferencia entre `@Input` y `@Output`?
    - `@Input` recibe datos del componente padre. `@Output` envía información del componente hijo al padre.
  - ¿Qué ha cambiado en las tarjetas ahora que tienen `@Input`?
    - Ahora cada tarjeta puede mostrar un producto diferente del array.