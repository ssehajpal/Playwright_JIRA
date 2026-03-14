export function generateProductData() {

    const productName = "Playwright_Product_" + Date.now();
    const productPrice = Math.floor(Math.random() * 1000) + 1;

    return { productName, productPrice };
}