import { newE2EPage } from '@stencil/core/testing';

describe('app-home', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-home></app-home>');

    const element = await page.find('app-home');
    expect(element).toHaveClass('hydrated');
    const span = await page.find('span');
    expect(span.innerHTML).toBe('Welcome to the Stencil App Starter .');
  });

  it('renders after click', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-home></app-home>');

    (await page.find('button')).click();
    await page.waitForTimeout(500);

    const span = await page.find('span');
    expect(span.innerHTML).toBe('Welcome to the Stencil App Starter UNKNOWN USER.');
  });
});
