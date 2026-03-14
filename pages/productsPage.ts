import { expect } from '@playwright/test';

export class ProductsPage {

  constructor(page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('/products');
  }

  async verifyProduct(productName, productPrice) {

    await expect(this.page.locator('body')).toContainText(productName);
    await expect(this.page.locator('body')).toContainText(productPrice.toString());

  }

}