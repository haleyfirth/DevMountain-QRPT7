import {Builder, Capabilities, By, until} from "selenium-webdriver";
const chromedriver = require("chromedriver");
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

 test("Can it add a new employee???", async () =>{
     await driver.get("https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html");
     await driver.sleep(2000)
     await driver.wait(until.elementLocated(By.name("employee1")));
     await driver.findElement(By.name("addEmployee")).click();
    await driver.findElement(By.name("employee11")).click();
     await driver.findElement(By.name("nameEntry")).clear();
     await driver.findElement(By.name("nameEntry")).sendKeys("Arthur Morgan");
     await driver.findElement(By.name("phoneEntry")).click();
     await driver.findElement(By.name("phoneEntry")).clear();
     
     await driver.findElement(By.name("phoneEntry")).sendKeys("8018675309");
     await driver.findElement(By.name("titleEntry")).click();
     await driver.findElement(By.name("titleEntry")).clear(); 
     await driver.findElement(By.name("titleEntry")).sendKeys("Dutch's right hand");
     await driver.findElement(By.name("save")).click();
    
     await driver.sleep(5000);
     await driver.quit();
 })