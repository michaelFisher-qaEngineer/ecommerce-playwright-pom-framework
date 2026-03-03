# ecommerce-playwright-pom-framework

Playwright test automation framework demonstrating **Page Object Model (POM)** design for common **e-commerce user flows**.

This project automates realistic shopping scenarios against the Cloudberry Store demo site and showcases maintainable Playwright test architecture using page classes, reusable actions, and organized test suites.

---

# Why This Project Exists

This repository demonstrates how to structure **scalable UI automation using Playwright** with a clean Page Object Model architecture.

It focuses on:

- Clear separation between **tests and page logic**
- Reusable page classes
- Readable scenario-based test cases
- Tag-based test execution
- Data-driven testing

The project is intended as a **portfolio example of real-world Playwright framework design**.

---

# Tech Stack

- Playwright Test Runner
- JavaScript (CommonJS)
- Node.js
- Page Object Model (POM)

---

# Project Structure

```
ecommerce-playwright-pom-framework
│
├── pages
│ ├── AccountPage.js
│ ├── AffiliateInfoPage.js
│ ├── CheckoutPage.js
│ ├── HomePage.js
│ ├── LaptopsAndNotebooksPage.js
│ ├── LoginPage.js
│ ├── OrderSuccessPage.js
│ └── ProductPage.js
│
├── tests
│ ├── test-data
│ │ └── CloydBerryStoreTestData.json
│ │
│ ├── TC01_LaunchApplication.spec.js
│ ├── TC02_Login.spec.js
│ ├── TC03_AddToCart.spec.js
│ ├── TC04_CompletePurchase.spec.js
│ ├── TC05_AddToWishList.spec.js
│ └── TC06_AddAffiliate.spec.js
│
├── playwright.config.js
├── package.json
└── package-lock.json
```

---

# Test Coverage

The framework includes automated scenarios for common e-commerce functionality:

### Application Launch
Verifies that the storefront loads successfully.

### Login
Validates user login functionality including a **data-driven version using JSON test data**.

### Add To Cart
Automates product browsing, selecting delivery options, and adding items to the shopping cart.

### Complete Purchase
Executes a full **end-to-end checkout flow**, validating order completion.

### Wishlist
Adds products to a user wishlist and verifies UI confirmation.

### Affiliate Registration
Automates affiliate account setup with multiple payment method options.

---

# Setup

## Prerequisites

- Node.js (LTS recommended)
- npm

## Install Dependencies

```bash
git clone https://github.com/michaelFisher-qaEngineer/ecommerce-playwright-pom-framework.git
cd ecommerce-playwright-pom-framework
npm install
npx playwright install
Running Tests
```


The project includes scripts to run specific groups of tests.

Run sanity tests:

npm run sanity

Run regression tests:

npm run regression

Run data-driven tests:

npm run datadriven
Test Tags

Tests are grouped using Playwright tags:

Tag	Purpose
@sanity	Fast smoke validation
@regression	Full functional test coverage
@datadriven	Runs scenarios with multiple datasets
Test Reports

Playwright generates an HTML report after test execution.

Open the report with:

npx playwright show-report
Notes

Tests currently run using the Chromium browser by default.

Additional browsers can be enabled in playwright.config.js.

Test data for login scenarios is stored in a JSON file inside tests/test-data.