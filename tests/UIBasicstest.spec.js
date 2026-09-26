 const {test, expect}= require('@playwright/test');
test('Browser context playwright test', async ({browser})=>{
    const context  = await browser.newContext();
    const page =await context.newPage();
   await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
   await page.locator('#username').fill('rahulshetty');
   await page.locator('#password').fill('Learning@830$3mK2');
   await page.locator('#signInBtn').click();
   console.log(await page.title());

});
test('Page playwrite test', async ({page})=>{
    
   await page.goto('https://google.com');
   console.log(await page.title());
   await expect(page).toHaveTitle("Google");


});