package stepDefinitions;

import commons.BaseTest;
import commons.GlobalConstants;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumberOptions.Hooks;
import org.openqa.selenium.WebDriver;
import pageObjects.LoginPO;
import pageObjects.PageGenerator;
import pageObjects.ResetPasswordPO;

public class ResetPasswordSteps extends BaseTest {
    WebDriver driver;
    LoginPO loginPage;
    ResetPasswordPO resetPasswordPage;

    public ResetPasswordSteps() {
        driver = Hooks.openAndQuitBrowser();
    }

    @Given("^Open Canvis webapp$")
    public void openCanvisWebapp() {
        loginPage = PageGenerator.getLoginPage(driver);
    }

    @When("^I click to Forgot Password button$")
    public void iClickToForgotPasswordButton() {
        loginPage.clickToForgotPasswordButton();
        resetPasswordPage = PageGenerator.getResetPasswordPage(driver);
        verifyTrue(resetPasswordPage.resetPasswordDisplayedTiTle());
    }

    @When("^I input to Email address in Reset Password Page with \"([^\"]*)\"$")
    public void iInputToEmailAddressInResetPasswordPageWith(String emailReset) {
        resetPasswordPage.inputToEmailResetTextBox(emailReset);
    }

    @When("^I click to Reset Password button$")
    public void iClickToResetPasswordButton() {
        resetPasswordPage.clickToResetPasswordButton();
    }

    @Then("^I verify \"([^\"]*)\" is displayed$")
    public void iVerifyIsDisplayed(String errorMessage)  {
        verifyTrue(resetPasswordPage.errorResetMessageDisplayed(errorMessage));
    }





}
