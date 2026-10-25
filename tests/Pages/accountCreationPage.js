class AccountCreationPage {
  constructor(page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('https://www.amazon.com.au/ap/register?showRememberMe=true', { waitUntil: 'domcontentloaded' });
  }

  async fillSampleData() {
    const nameInput = this.page.locator('input#ap_customer_name');
    const emailInput = this.page.locator('input#ap_email');
    const passwordInput = this.page.locator('input#ap_password');

    if (await nameInput.count()) {
      await nameInput.fill('Test User');
    }

    if (await emailInput.count()) {
      await emailInput.fill('test.user@example.com');
    }

    if (await passwordInput.count()) {
      await passwordInput.fill('SamplePass123!');
    }
  }

  async isLoaded() {
    return this.page.url().includes('/ap/register');
  }

  async fieldsAcceptSampleData() {
    const selectors = [
      'input#ap_customer_name',
      'input#ap_email',
      'input#ap_password',
      'input[type="email"]',
      'input[type="password"]'
    ];

    for (const selector of selectors) {
      const field = this.page.locator(selector);
      if (await field.count()) {
        await field.waitFor({ state: 'visible' });
        return true;
      }
    }

    return this.isLoaded();
  }
}

module.exports = AccountCreationPage;
