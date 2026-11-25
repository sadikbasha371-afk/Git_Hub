import { test } from "@playwright/test";

test ('Launch Amazon', async ({page})=> {
    await page.goto ('https://www.amazon.com')
})