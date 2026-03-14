import { Logger } from '../utils/logger';

export async function createProduct(request, productName, productPrice) {
    Logger.info(`Creating product via API: ${productName} costing ${productPrice}`);
    const response = await request.post('/products', {
        data: {
            title: productName,
            price: productPrice
        }
    });
    Logger.info(`API response status: ${response.status()}`);
    return response;
}