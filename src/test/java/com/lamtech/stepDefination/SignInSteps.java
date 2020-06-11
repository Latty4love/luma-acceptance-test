package com.lamtech.stepDefination;

import com.lamtech.pageObject.HomePagePO;
import com.lamtech.pageObject.SignInPagePO;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class SignInSteps {
    WebDriver driver;

    @Given("^User is on Sign In page$")
    public void userIsOnSignInPage() {
        WebDriverManager.chromedriver().setup();

        //Define Web Driver
        driver = new ChromeDriver();
        driver.get("http://demo-magento2.vuestorefront.io/");

        //Maximise Browser Window
        driver.manage().window().maximize();
       // driver.findElement(By.linkText("Sign In")).click();
        HomePagePO homePagePO =new HomePagePO(driver);
        homePagePO.ClickOnSignInLink();


    }

    @And("^User Enter  \"([^\"]*)\" in Sign In Page$")
    public void userEnterInSignInPage(String EmailAddress) throws Throwable {
       // driver.findElement(By.id("email")).sendKeys(EmailAddress);
        SignInPagePO signInPagePO =new SignInPagePO(driver);
        signInPagePO.enterEmailAddress(EmailAddress);

    }

    @And("^User Enter their \"([^\"]*)\"$")
    public void userEnterTheir(String Password) throws Throwable {
        //driver.findElement(By.name("login[password]")).sendKeys(Password);
        SignInPagePO signInPagePO =new SignInPagePO(driver);
        signInPagePO.enterPassword(Password);

    }


    @And("^User Click on Sign In$")
    public void userClickOnSignIn() {
        //driver.findElement(By.cssSelector("#send2 > span")).click();
        SignInPagePO signInPagePO =new SignInPagePO(driver);
       signInPagePO.ClickOnSignIn();
    }

    @Then("^Customer Account Dashboard Should be Displayed$")
    public void customerAccountDashboardShouldBeDisplayed() {
    }
}
