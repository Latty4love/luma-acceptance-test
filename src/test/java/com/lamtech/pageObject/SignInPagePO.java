package com.lamtech.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SignInPagePO {
    //object locators
    @FindBy(id = "email")
    public static WebElement EmailAddressField;

    @FindBy(name = "login[password]")
    public static WebElement PasswordField;

    @FindBy(css = "#send2 > span")
    public static WebElement SignIn;


    //initialize elements
    public SignInPagePO(WebDriver driver){ PageFactory.initElements(driver,this);
    }


    //page specific methods
    public void enterEmailAddress(String EmailAddress){
       EmailAddressField.sendKeys(EmailAddress);
    }

    public void enterPassword(String Password){
        PasswordField.sendKeys(Password);

    }
    public void ClickOnSignIn(){
       SignIn.click();
    }
}
