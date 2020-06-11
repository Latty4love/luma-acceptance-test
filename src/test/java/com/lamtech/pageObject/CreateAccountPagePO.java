package com.lamtech.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CreateAccountPagePO {


    //object locators
    @FindBy(id = "firstname")
    public static WebElement FirstNameField;

    @FindBy(id = "lastname")
    public static WebElement LastNameField;

    @FindBy(name = "email")
    public static WebElement EmailAddressField;

    @FindBy(name = "password")
    public static WebElement PasswordField;

    @FindBy(name = "password_confirmation")
    public static WebElement ConfirmPassField;

    @FindBy(css = "#form-validate > div > div.primary > button > span")
    public static WebElement CreateAccountButton;

    //initialize elements
    public CreateAccountPagePO(WebDriver driver){ PageFactory.initElements(driver,this);
    }
    //page specific methods
    public void enterFirstName(String FirstName){
        FirstNameField.sendKeys(FirstName);}

    public void enterLastName(String LastName){
        LastNameField.sendKeys(LastName);}

    public void enterEmailAddress(String EmailAddress){
        EmailAddressField.sendKeys(EmailAddress);}

    public void enterPassword(String Password){
        PasswordField.sendKeys(Password);}

    public void enterConfirmPassword(String ConfirmPassword){
       ConfirmPassField.sendKeys(ConfirmPassword);
    }

    public void clickOnCreateAccountButton(){
        CreateAccountButton.click();
    }





}
