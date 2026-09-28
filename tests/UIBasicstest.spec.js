 const {test, expect}= require('@playwright/test');
test.only('Browser context playwright test', async ({browser})=>{
   
    const context  = await browser.newContext();
    const page =await context.newPage();
   await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
   const userName = page.locator('#username');
   const signIn = page.locator('#signInBtn');
   console.log(await page.title());
   await userName.fill('rahulshetty');
   await page.locator('#password').fill('Learning@830$3mK2');
   await signIn.click();
   console.log(await page.locator("[style*='block']").textContent());
   await expect(page.locator("[style*='block']")).toContainText("Incorrect");

   await userName.fill("");
   await userName.fill('rahulshettyacademy');
   await signIn.click();
   console.log(await page.locator('.card-body a').nth(0).textContent());
   //console.log(await page.locator('.card-body a').first().textContent());
   console.log(await page.locator('.card-body a').last().textContent());
   await page.pause();

});
test('Page playwrite test', async ({page})=>{
    
   await page.goto('https://google.com');
   console.log(await page.title());
   await expect(page).toHaveTitle("Google");


});