## Tipos

Hay 7 tipos básicos en JavaScript.

- `number` para números de cualquier tipo: enteros, decimales...
- `string` para cadenas. Una cadena puede tener uno o más caracteres.
- `boolean` para `true`/`false`.
- `null` para valores desconocidos.
- `undefined` para valores no asignados `undefined`.
- `object` para estructuras de datos más complejas (el array entra aquí junto con el objeto -> [], {}).
- `symbol` para identificadores únicos.

El operador `typeof` nos permite ver qué tipo está almacenado en una variable.

- Dos formas de usarse: `typeof x` o `typeof(x)`.
- Devuelve una cadena con el nombre del tipo, como `"string"` o `"number"` por ejemplo.
- Para `null` devuelve `"object"` -- esto es un error en el lenguaje, en realidad no es un objeto. Cosas de javascript...
- En breves se añadirá un nuevo tipo: el `"BigInt"`

## Conversiones de tipos

- a **string** -> `String(value)` o en algunos casos podemos usar la forma rápida de `"" + 23`

- a **number** -> `Number(value)` o con `+` como vimos en el prompt()

  - **conversiones:**
  - `undefined` -> `NaN`
  - `null` -> `0`
  - `true/false` -> `1/0`
  - `string` -> si tiene contenido da `NaN` y una cadena vacía se convierte en `0`

- a **boolean** -> `Boolean()`
  - **conversiones**:
  - Los valores que son intuitivamente "vacíos", como "0", una cadena vacía, `null`, `undefined`, y `NaN`, se convierten en `false`. (**falsy values**)
  - Otros valores se vuelven `true`.(**truthy values**)
