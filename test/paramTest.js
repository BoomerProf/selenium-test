const { Builder, By, Key } = require('selenium-webdriver');
let chai = require('chai');
let should = chai.should();
let expect = chai.expect;
let driver;

// describe block
describe('add todo tests', function () {
  // it block
  it('as a user I want to add a todo successfully', async () => {
    // launch the browser
    let driver = await new Builder().forBrowser('firefox').build();

    // navigate to our application
    await driver.get('https://lambdatest.github.io/sample-todo-app/');

    // add a todo
    await driver
      .findElement(By.id('sampletodotext'))
      .sendKeys('Learn Selenium', Key.RETURN);

    // assertion for new text
    let todoText = await driver
      .findElement(By.xpath('//li[last()]'))
      .getText()
      .then((value) => value)
      .catch((err) => console.log('Error: ', err.message));

    // assert using node
    //assert.strictEqual(todoText, 'Learn Selenium');

    // should use chai
    todoText.should.equal('Learn Selenium');
    //expect using chai
    expect(todoText).to.equal('Learn Selenium');

    // close the browser
    await driver.quit();
  });
});
