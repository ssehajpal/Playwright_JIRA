import {test, expect} from '@playwright/test'



test('Create test using API & verify on UI', async({page, request}) => {
const productName = "Playwright_Product_" + Date.now();
const productPrice = Math.floor(Math.random() * 1000) + 1;
//POST API
const response = await request.post('http://localhost:3000/products',
    {data:
        {
            title: productName,
            price: productPrice,
        }
    })

expect(response.status()).toBe(201)
const body = await response.json();
const productId = body.id;

await page.goto('http://localhost:3000/products')
    await page.reload();
    await expect(page.locator('body')).toContainText(productName)
    await expect(page.locator('body')).toContainText(productPrice.toString())
})