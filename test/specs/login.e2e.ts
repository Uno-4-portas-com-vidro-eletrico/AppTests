import { expect } from '@wdio/globals'
import { loginWithCredentials, logoutFromHome } from '../utils/actions'

describe('Login tests', () => {
    it('should incorrect login and get error', async () => {
        const buttons = await $$('//android.widget.TextView[@text="Entrar"]');
        await buttons[0].click();
        await driver.pause(1000)

        await loginWithCredentials("teste-wrong@example.com", "wrong-password")

        await driver.$('//android.widget.TextView[@text="Email ou senha incorretos"]').waitForDisplayed({ timeout: 10000 });
    })

    it('should correct login and go to home and logout', async () => {
        const button = $('//android.widget.TextView[@text="Entrar"]');
        await button.click();
        await driver.pause(1000);

        await loginWithCredentials("teste@example.com", "123456")
        await driver.pause(5000); // API is slow, so we need to wait for the response

        await expect(driver.$('//android.widget.TextView[contains(@text, "Olá,")]')).toBeDisplayed();

        await logoutFromHome();
    })
})
