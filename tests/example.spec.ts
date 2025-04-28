import { test, expect } from '@playwright/test';


test('auto4', async ({ page }) => {
    // Aumentar el tiempo de espera predeterminado de Playwright
    test.setTimeout(1000000); // 60 segundos
    // Navegar a la página de login
    await page.goto('https://antamina-200-135-asiq.auth.us-east-1.amazoncognito.com/login?client_id=3avs4hffpf72l9vn0lco7pp7o5&response_type=code&scope=aws.cognito.signin.user.admin+openid+profile&redirect_uri=https%3A%2F%2Fentrenamientomina.asiq.antamina.com%2FSecurity%2FProcess');

    // Completar las credenciales de usuario
    await page.getByRole('textbox', { name: 'Username' }).fill('qa.user.checklistoperadores');
    await page.getByRole('textbox', { name: 'Password' }).fill('Desarroll$0');
    await page.getByRole('button', { name: 'submit' }).click();

    // Interactuar con el interruptor (inputswitch)
    await page.locator('p-inputswitch span').click();
    
    console.log("EL TEST SE EJECUTO CORRECTAMENTE AAA")
});

