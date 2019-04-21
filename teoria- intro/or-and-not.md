## or-and-not

## || (OR)

`alert(true || false); // true`
`alert(false || true); // true`
`alert(true || true); // true`
`alert(false || false); // false`

Devuelve el primer valor verdadero si lo hay.

Si no hay valores verdaderos devuelve el último valor

## && (AND)

`alert(true && true); // true`
`alert(false && true); // false`
`alert(true && false); // false`
`alert(false && false); // false`

AND devuelve el primer valor falsy o el último valor si no se encontró ninguno.

Se puede usar en cosas avanzadas como:

```js run
user.isAdmin && alert("Solo se muestra este mensaje si soy admin");
```

## ! (NOT)

```js run
console.log(!0); // true
console.log(!true); // false
```

se puede usar en casos como:

- Check si algo es null:

```js run
if (!algo) {
  // Do something
}
```
