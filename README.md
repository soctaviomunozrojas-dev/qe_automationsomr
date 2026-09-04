# SauceDemo Automation Framework

## Descripción

Proyecto de automatización web desarrollado para el reto QA FrontEnd utilizando:

- Playwright
- Cucumber
- TypeScript
- Page Object Model (POM)

La automatización valida los principales flujos de negocio de SauceDemo:

- Login exitoso
- Login con usuario bloqueado
- Adición de productos al carrito
- Visualización del carrito
- Checkout completo
- Confirmación de compra

## Tecnologías

- Node.js
- Playwright
- Cucumber
- TypeScript
- Chai

## Escenarios Automatizados

### Login

- Login exitoso con usuario válido.
- Login con usuario bloqueado.

### Carrito

- Agregar producto al carrito.
- Validar producto agregado.

### Checkout

- Completar proceso de compra.
- Validar mensaje de confirmación.

## Instalación

```bash
npm install
```

## Instalación de navegadores

```bash
npx playwright install
```

## Ejecución de pruebas

### Ejecutar toda la suite

```bash
npm test
```

### Ejecutar Login

```bash
npm run test:login
```

### Ejecutar Carrito

```bash
npm run test:cart
```

### Ejecutar Checkout

```bash
npm run test:checkout
```

## Resultado de Ejecución

La suite ejecuta correctamente todos los escenarios automatizados:

```text
3 scenarios (3 passed)
15 steps (15 passed)
```

## Autor

**Segundo Octavio Muñoz Rojas**

QA Engineer

Proyecto desarrollado utilizando Playwright, Cucumber y TypeScript.