package com.lamtech.cucumber;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/feature",
        glue = {"com.lamtech.stepDefination"},
        format = {"pretty","html:target/site/cucumber-pretty"},
        tags = {"@createAccount,@SignIn" }



)
public class TestRunner {




}
