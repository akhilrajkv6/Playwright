class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('https://www.amazon.com.au/ap/signin', { waitUntil: 'domcontentloaded' });
  }

  async login(email = 'test.user@example.com', password = 'SamplePass123!') {
    const emailInput = this.page.locator('input#ap_email');
    const passwordInput = this.page.locator('input#ap_password');
    const signInButton = this.page.locator('input#signInSubmit');

    if (await emailInput.count()) {
      await emailInput.fill(email);
    }

    if (await passwordInput.count()) {
      await passwordInput.fill(password);
    }

    if (await signInButton.count()) {
      await signInButton.click();
    }
  }

  async isLoaded() {
    return this.page.url().includes('/ap/signin');
  }
}

module.exports = LoginPage;
