# Playwright + Jira Automation Demo Framework

![Playwright Tests](https://github.com/ssehajpal/Playwright_JIRA/actions/workflows/playwright.yml/badge.svg)

## Overview

This project demonstrates a **modern QA automation framework** built using **Playwright**.
The framework validates data created via **API calls** and verifies it on the **UI**, while maintaining a **scalable project structure**.

---

# Architecture

The automation framework follows a **layered architecture** to keep tests maintainable and scalable.

```
playwright-jira-automation
│
├── api
│   └── productAPI.ts
│
├── pages
│   └── productsPage.ts
│
├── tests
│   └── products.spec.ts
│
├── utils
│   ├── dataGenerator.ts
│   └── logger.ts
│
├── db.json
├── playwright.config.ts
├── package.json
└── README.md
```

### Folder Responsibilities

| Folder  | Description                                              |
| ------- | -------------------------------------------------------- |
| `tests` | Contains Playwright test cases                           |
| `pages` | Page Object Model (POM) classes for UI interactions      |
| `api`   | API helper functions                                     |
| `utils` | Reusable utilities like test data generators and logging |
| `db.json` | Mock backend database used by JSON Server              |

---

# Key Features

### API → UI Validation

The test workflow demonstrates **backend + frontend validation**:

```
Generate Test Data
        ↓
POST API request
        ↓
Backend stores data
        ↓
UI loads data
        ↓
Playwright validates UI
```

This pattern is commonly used in **real-world QA automation frameworks**.

---

### Dynamic Test Data Generation

Product names and prices are generated dynamically to avoid data conflicts.

Example:

```
Playwright_Product_171234567890
```

---

### Logging Utility

A reusable logging utility captures test execution events.

Example log output:

```
[INFO] Generating product data
[INFO] Creating product via API
[INFO] API response status: 201
[INFO] Validating product on UI
```

---

### Mock Backend

The project uses **JSON Server** as a mock backend to simulate API behavior.

Mock API endpoint:

```
http://127.0.0.1:3000/products
```

This allows:
* API testing
* UI validation
* Persistent test data

> **Note:** JSON Server is managed automatically by Playwright's `webServer` configuration — no manual server startup is required before running tests.

---

### CI/CD with GitHub Actions

The framework includes a **GitHub Actions pipeline** that runs on every push and pull request to `main`.

The pipeline:
* Installs dependencies via `npm ci`
* Installs Playwright browsers
* Starts the JSON Server mock backend automatically via `playwright.config.ts` `webServer` config
* Runs all tests across configured browsers
* Uploads the HTML test report as an artifact

---

# Installation

Clone the repository:
```bash
git clone 
cd playwright-jira-automation
```

Initialize Playwright (installs dependencies, browsers, and config):
```bash
npm init playwright@latest
```
---

# Running Tests

Playwright automatically starts the mock backend before tests run (configured via `webServer` in `playwright.config.ts`). No manual server startup is needed.

Execute all Playwright tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Open Playwright report:

```bash
npx playwright show-report
```

---

# Configuration

### `playwright.config.ts`

Key configuration details:

* `baseURL` is set to `http://127.0.0.1:3000` (uses IPv4 explicitly to avoid IPv6 resolution issues in CI)
* `webServer` block automatically starts and stops JSON Server around test runs:

```typescript
webServer: {
  command: 'npx json-server db.json --port 3000 --host 0.0.0.0',
  url: 'http://127.0.0.1:3000/products',
  reuseExistingServer: true,
  stdout: 'pipe',
  stderr: 'pipe',
},
```

* `retries: 2` on CI for flake resilience
* `workers: 1` on CI to avoid port conflicts

---

# Example Test Flow

1. Generate unique product data
2. Send POST request to create product via API
3. Navigate to UI page
4. Verify product appears on UI

Example test case:

```
Create product via API & verify on UI
```

---

# Future Enhancements

The framework can be extended with the following features:

* Automatic **Jira issue creation on test failure**
* Screenshot attachment to Jira tickets
* Test reporting using **Allure**
* API schema validation

---

# Technologies Used

* **Playwright**
* **TypeScript**
* **JSON Server** `v0.17.4`
* **Node.js**
* **GitHub Actions**

---

# Purpose of This Project

This repository demonstrates:

* API testing
* UI automation
* CI/CD pipeline integration
* Scalable automation framework design
* Real-world QA engineering practices

The project is intended as a **portfolio demonstration for QA Automation**.

---
