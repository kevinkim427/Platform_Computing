const {By, Builder} = require('selenium-webdriver');
const assert = require("assert");

(async function firstTest() {
  //var clicks = 0;
  //function clickME() {
    //clicks += 1;
    // document.getElementById("clicks").innerHTML = clicks;
    //console.log(clicks);
  //}
  try {
    let driver = await new Builder().forBrowser('MicrosoftEdge').build();
    await driver.get('http://localhost:3000');
  
    let title = await driver.getTitle();
    assert.equal("About Me", title);
  
    await driver.manage().setTimeouts({implicit: 500});
    
    var clicknum = 0;
    let button = await driver.findElement(By.className('App-link'));
    await button.click();

    let message = await driver.findElement(By.id('message'));
    let value = await message.getText();
    assert.equal("Received!", value);
  } 
  catch (e) 
  {
    console.log(e)
  } 
  finally 
  {
    await driver.quit();
  }
}())