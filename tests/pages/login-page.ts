import { BasePage } from './base-page';

export class LoginPage extends BasePage {
  private usernameInput = 'input[placeholder="Email address or phone number"]';
  private passwordInput = 'input[placeholder="Password"]';
  private loginButton = 'button:has-text("Log In")';

  async navigate() {
    await this.page.goto(`${process.env.TEST_BASED_URL}`);
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }
}
