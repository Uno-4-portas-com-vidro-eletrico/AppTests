export async function logoutFromHome() {
    await driver.performActions([{
        type: 'pointer',
        id: 'finger1',
        parameters: { pointerType: 'touch' },
        actions: [
            { type: 'pointerMove', duration: 0, x: 0, y: 500 },
            { type: 'pointerDown', button: 0 },
            { type: 'pause', duration: 100 },
            { type: 'pointerMove', duration: 100, x: 500, y: 500 },
            { type: 'pointerUp', button: 0 }
        ]
    }]);
    await driver.pause(1000);

    const logoutButton = await $('//android.widget.TextView[@text="Sair"]');
    await logoutButton.click();
    await driver.pause(1000);

    const buttonConfirm = $('//android.widget.TextView[@text="Entrar"]');
    await expect(buttonConfirm).toExist();
}

export async function loginWithCredentials(email: string, password: string) {
    const inputs = $$('//android.widget.EditText');
    await inputs[0].setValue(email);
    await inputs[1].setValue(password);
    const buttonLogin = $('//android.widget.TextView[@text="Entrar"]');
    await buttonLogin.click();
}