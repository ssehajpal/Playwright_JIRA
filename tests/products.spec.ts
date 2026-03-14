import { test, expect } from '@playwright/test';
import { createProduct } from '../api/productAPI';
import { generateProductData } from '../utils/dataGenerator';
import { ProductsPage } from '../pages/productsPage';
import { Logger } from '../utils/logger';

test('Create product via API & verify on UI', async ({ page, request }) => {
    Logger.info("Generating product data");
    const { productName, productPrice } = generateProductData();

    Logger.info(`Generated product name: ${productName}`);
    Logger.info(`Generated product price: ${productPrice}`);

    Logger.info("API product creation request sent");
    const response = await createProduct(request, productName, productPrice);
    expect(response.status()).toBe(201);

    //Initialise Page Object
    const productsPage = new ProductsPage(page);

    //Open Page & Verify Data
    await productsPage.open();
    await page.reload();
    await productsPage.verifyProduct(productName, productPrice);

});

































// import {test, expect} from '@playwright/test'



// test('Create test using API & verify on UI', async({page, request}) => {
// const productName = "Playwright_Product_" + Date.now();
// const productPrice = Math.floor(Math.random() * 1000) + 1;
// //POST API
// const response = await request.post('/products',
//     {data:
//         {
//             title: productName,
//             price: productPrice,
//         }
//     })

// expect(response.status()).toBe(201)
// const body = await response.json();
// const productId = body.id;

// await page.goto('/products')
//     await page.reload();
//     await expect(page.locator('body')).toContainText(productName)
//     await expect(page.locator('body')).toContainText(productPrice.toString())
// })