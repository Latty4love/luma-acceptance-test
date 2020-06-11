package com.lamtech.pageObject;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class SignInPagePO {
    //object locators
    @FindBy(id = "email")
    public static WebElement EmailAddressField;

    @FindBy(name = "login[password]")
    public static WebElement PasswordField;

    @FindBy(css = "#send2 > span")
    public static WebElement SignIn;

}
