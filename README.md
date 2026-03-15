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
│   └── product.spec.ts
│
├── utils
│   ├── dataGenerator.ts
│   └── logger.ts
│
├── mock-data
│   └── db.json
│
├── playwright.config.ts
├── package.json
└── README.md
```

### Folder Responsibilities

| Folder      | Description                                              |
| ----------- | -------------------------------------------------------- |
| `tests`     | Contains Playwright test cases                           |
| `pages`     | Page Object Model (POM) classes for UI interactions      |
| `api`       | API helper functions                                     |
| `utils`     | Reusable utilities like test data generators and logging |
| `mock-data` | Mock backend database used by JSON Server                |

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
http://localhost:3000/products
```

This allows:

* API testing
* UI validation
* persistent test data

---

# Installation

Clone the repository:

```
git clone <repository-url>
cd playwright-jira-automation
```

Install dependencies:

```
npm install
```

Install Playwright browsers:

```
npx playwright install
```

---

# Running the Mock API Server

Start the mock backend server:

```
npm run mock-server
```

Or directly:

```
json-server mock-data/db.json --port 3000
```

This exposes the API:

```
http://localhost:3000/products
```

---

# Running Tests

Execute all Playwright tests:

```
npx playwright test
```

Run tests in headed mode:

```
npx playwright test --headed
```

Open Playwright report:

```
npx playwright show-report
```

---

# Example Test Flow

1. Generate unique product data
2. Send POST request to create product
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
* CI/CD integration using **GitHub Actions**
* Test reporting using **Allure**
* API schema validation
* Environment configuration management

---

# Technologies Used

* **Playwright**
* **TypeScript**
* **JSON Server**
* **Node.js**

---

# Purpose of This Project

This repository demonstrates:

* API testing
* UI automation
* scalable automation framework design
* real-world QA engineering practices

The project is intended as a **portfolio demonstration for QA Automation**.

---
