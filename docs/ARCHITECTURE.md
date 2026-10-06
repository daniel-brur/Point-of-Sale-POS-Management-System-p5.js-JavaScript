# Architecture Overview

## Application flow

```text
index.html
    |
    v
p5.js runtime
    |
    v
src/sketch.js
    |
    +--> data/productos.txt  -> Product catalog
    |
    +--> data/RH.txt         -> Demo user authentication
    |
    +--> Interactive UI      -> Sales / orders / cash / HR
    |
    +--> Browser downloads   -> TXT reports
```

## Main domain objects

- `Producto`: product catalog item and interactive product selection.
- `Orden`: item currently added to the sale.
- `comanda`: registered order/ticket with timing, employee and transaction information.
- `persona`: employee attendance record.
- `boton`: interactive application control.
- `Carpeta`: top-level application section.
- `tablita`, `info`, and `productoBusq`: UI/helper components.

## Application states

The application uses a state-oriented design through variables such as `status`, `status2`, and transaction flags. Major screens/workflows include:

- `Inicio`
- `Escritorio`
- `Comandas`
- `Registro`
- `Otros`
- `Pregunta`

This allows the same p5.js canvas to behave as a multi-screen desktop-style application.

## Data flow

1. `preload()` reads the demo product and user files.
2. `setup()` creates the UI model and initializes products and controls.
3. `draw()` continuously renders the current application state.
4. Mouse events trigger product selection, order manipulation, cash operations, and order completion.
5. `guardarArchivo()` generates text reports for selected workflows.

## Production considerations

The current project intentionally uses simple text files and client-side authentication for portfolio demonstration. A production version should use a backend API, database, secure authentication, role-based authorization, encrypted transport, server-side validation, and an auditable transaction model.
