export async function createProduct(request, productName, productPrice) {

  const response = await request.post('/products', {
    data: {
      title: productName,
      price: productPrice
    }
  });

  return response;
}