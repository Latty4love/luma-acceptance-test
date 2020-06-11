package com.lamtech.pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePagePO {

    //object locators
    @FindBy(linkText = "Create an Account")
    public static WebElement CreateAnAccountLink;

    @FindBy(linkText = "Sign In")
    public static WebElement SignInLink;


    //initialize elements
    public HomePagePO(WebDriver driver){
        PageFactory.initElements(driver, this);


    }

    //page specific methods
    public void ClickOnCreateAccountLink(){
        CreateAnAccountLink.click();
    }

    public void ClickOnSignInLink(){
    SignInLink.click();}
}

