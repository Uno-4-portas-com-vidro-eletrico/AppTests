import { expect } from '@wdio/globals'

describe('App open', () => {
    it('should open the app', async () => {
        await expect(true).toBeTruthy()
    })

    it('should display a button with text "entrar"', async () => {
        const button = await $('//android.widget.TextView[@text="Entrar"]')
        await expect(button).toBeDisplayed()
    })
})
