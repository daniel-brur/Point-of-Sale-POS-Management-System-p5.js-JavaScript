# Point-of-Sale (POS) Management System

A browser-based Point-of-Sale (POS) management application developed with **JavaScript and p5.js**.

The project was originally developed as a practical business-management application and includes sales, orders, cash management, expenses, employee registration, search, validation, and report/export workflows.

## Features

- Product catalog loaded from a text data file.
- Product search and order creation.
- Sales and cash collection workflow.
- Price modification before closing a sale.
- Expenses and cash contributions.
- Cash balance and cash-cut workflow.
- Order / kitchen-ticket tracking with start and completion times.
- Employee entry and exit registration.
- Basic user authentication flow using a demo data file.
- Input validation and interactive dialogs.
- Export of sales/order and cash-cut information as text files.
- Interactive desktop-style interface rendered with p5.js.

## Technology

- JavaScript (ES6+)
- p5.js
- HTML5
- Browser DOM inputs and buttons
- Plain-text data files for the demo dataset

## Repository structure

```text
POS-Management-System/
├── index.html
├── README.md
├── LICENSE
├── .gitignore
├── src/
│   ├── sketch.js
│   └── sketch.original.js
├── data/
│   ├── productos.txt
│   └── RH.txt
├── assets/
│   └── .gitkeep
└── docs/
    └── screenshots/
        └── .gitkeep
```

## Run locally

Because the application loads local data files, use a local web server rather than opening `index.html` directly with `file://`.

### Option 1 — VS Code

Install the **Live Server** extension, open the repository, and launch `index.html` with Live Server.

### Option 2 — Python

From the repository folder:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Demo login

The repository contains **demo-only credentials** in `data/RH.txt`:

- Username: `DemoUser`
- Password: `DemoPass123`

Do not use real passwords or personal information in the repository.

## Data format

### `data/productos.txt`

Each line follows this pattern:

```text
PRODUCT_CODE PRODUCT_NAME PRICE
```

Example:

```text
P001 Pizza 120
```

### `data/RH.txt`

The demo authentication file uses tab-separated fields. The application checks the first and last fields as username/password values.

## Important security note

This project is a **portfolio/demo application**, not a production authentication or payment system. Credentials are stored in a plain-text file and are therefore intentionally unsuitable for real-world security.

For production use, authentication, authorization, payment processing, persistent storage, encryption, audit logging, and access control should be redesigned using a backend service and secure credential management.

## Portfolio value

This project demonstrates practical experience with:

- Application logic and state management
- Object-oriented JavaScript
- Interactive UI development
- Event-driven programming
- User input validation
- Business-process modeling
- File-based data handling
- Transaction and cash-flow logic
- Time/date processing
- Technical problem solving

## Original source

`src/sketch.original.js` preserves the original source provided for this portfolio preparation. `src/sketch.js` is the GitHub-ready version configured to use the repository's demo data files.

## License

MIT License. See `LICENSE`.
