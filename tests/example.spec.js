// @ts-check
const { test, expect } = require('@playwright/test');

test('Cenário login com sucesso @login @smoke', async ({ page }) => {
  await page.goto('/login');

  await page.locator('#user').fill('qazando123@gmail.com');
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByRole('heading', { name: 'Login realizado' })).toBeVisible();
});

test('Validar E-mail Invalido', async ({ page }) => {
  await page.goto('/login');

  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByText('E-mail inválido')).toBeVisible();
});
