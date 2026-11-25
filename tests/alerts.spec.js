import {test} from "@playwright/test";

test("Handling alerts", async({page})=>{
    await page.goto ("https://demo.automationtesting.in/Alerts.html");

    page.on('dialog', async (Dialog)=>{
       await console.log (Dialog.message());
        await console.log (Dialog.type());
        await page.waitForTimeout(3000)
        await Dialog.accept();
    });

    await page.locator('//button[contains(text(),"alert box:")]').click;
})