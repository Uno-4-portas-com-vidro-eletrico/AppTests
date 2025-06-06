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

    })
})

describe('persist tests', () => {

  it('should persist session after app restart', async () => {
    // Fecha e reabre o app via comandos compatíveis
    await driver.execute('mobile: terminateApp', { appId: 'com.uno4portas.EloDrinksApp' });
    await driver.execute('mobile: activateApp', { appId: 'com.uno4portas.EloDrinksApp' });

    await expect(driver.$('//android.widget.TextView[contains(@text, "Olá,")]')).toBeDisplayed();

});

})

describe('escolher pacotes test', () => {

it('should show seleção de pacotes', async () => {
  const button_plus = $('//android.widget.TextView[@text=""]');
  const button_package = $('//android.view.ViewGroup[@content-desc="Escolher Pacotes"]');

  await button_plus.click();
  await expect(driver.$('//android.widget.TextView[@text="Escolher Pacotes"]')).toBeDisplayed();
  await button_package.click();
  await expect(driver.$('//android.widget.TextView[@text="Seleção de Pacotes"]')).toBeDisplayed();

});
})

