package com.lamtech.stepDefination;

import com.lamtech.pageObject.CreateAccountPagePO;
import com.lamtech.pageObject.HomePagePO;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class CreateAccountSteps{
    WebDriver driver;
    @Given("^User is on Create An Account page$")
    public void userIsOnCreateAnAccountPage() {

        WebDriverManager.chromedriver().setup();

        //Define Web Driver
        driver = new ChromeDriver();
        driver.get("http://demo-magento2.vuestorefront.io/");

        //Maximise Browser Window
        driver.manage().window().maximize();
        //driver.findElement(By.linkText("Create an Account")).click();
        HomePagePO homePagePO = new HomePagePO (driver);
        homePagePO.ClickOnCreateAccountLink();






    }

    @When("^User Enter \"([^\"]*)\" on Create an Account Page$")
    public void userEnterOnCreateAnAccountPage(String FirstName) throws Throwable {
        //driver.findElement(By.id("firstname")).sendKeys(FirstName);
        CreateAccountPagePO createAccountPagePO = new CreateAccountPagePO(driver);
        createAccountPagePO.enterFirstName(FirstName);

    }

    @And("^User Enters their \"([^\"]*)\"$")
    public void userEntersTheir(String LastName) throws Throwable {
       // driver.findElement(By.id("lastname")).sendKeys(LastName);
        CreateAccountPagePO createAccountPagePO = new CreateAccountPagePO(driver);
        createAccountPagePO.enterLastName(LastName);

    }

    @And("^User Enter an \"([^\"]*)\"$")
    public void userEnterAn(String EmailAddress) throws Throwable {
        //driver.findElement(By.name("email")).sendKeys(EmailAddress);
        CreateAccountPagePO createAccountPagePO = new CreateAccountPagePO(driver);
        createAccountPagePO.enterEmailAddress(EmailAddress);


    }

    @And("^User Enter a \"([^\"]*)\"$")
    public void userEnterA(String Password) throws Throwable {
        //driver.findElement(By.name("password")).sendKeys(Password);
        CreateAccountPagePO createAccountPagePO = new CreateAccountPagePO(driver);
        createAccountPagePO.enterPassword(Password);


    }

    @And("^User Enter \"([^\"]*)\"$")
    public void userEnter(String ConfirmPassword) throws Throwable {
       // driver.findElement(By.name("password_confirmation")).sendKeys(ConfirmPassword);
        CreateAccountPagePO createAccountPagePO = new CreateAccountPagePO(driver);
        createAccountPagePO.enterConfirmPassword(ConfirmPassword);


    }

    @And("^User Click on CreateAccount$")
    public void userClickOnCreateAccount() {
        //driver.findElement(By.cssSelector("#form-validate > div > div.primary > button > span")).click();
        CreateAccountPagePO createAccountPagePO = new CreateAccountPagePO(driver);
        createAccountPagePO.clickOnCreateAccountButton();

    }

    @Then("^Customer Account Dashboard is Displayed$")
    public void customerAccountDashboardIsDisplayed() {
    }
}
