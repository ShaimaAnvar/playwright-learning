 const {test, expect}= require('@playwright/test');
test.only('Browser context playwright test', async ({browser})=>{
    const context  = await browser.newContext();
    const page =await context.newPage();
   await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
   console.log(await page.title());
   await page.locator('#username').fill('rahulshetty');
   await page.locator('#password').fill('Learning@830$3mK2');
   await page.locator('#signInBtn').click();
   console.log(await page.locator("[style*='block']").textContent());
   await expect(page.locator("[style*='block']")).toContainText("Incorrect");

});
test('Page playwrite test', async ({page})=>{
    
   await page.goto('https://google.com');
   console.log(await page.title());
   await expect(page).toHaveTitle("Google");


});