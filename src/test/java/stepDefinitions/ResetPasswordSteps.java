package stepDefinitions;

import commons.BaseTest;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import pageObjects.LoginPO;
import pageObjects.PageGenerator;
import pageObjects.ResetPasswordPO;

public class ResetPasswordSteps extends BaseTest {
    WebDriver driver;
    LoginPO loginPage;
    ResetPasswordPO resetPasswordPage;

    @Given("^Open forgot password screen$")
    public void openForgotPasswordScreen() {
        loginPage.clickToForgotPasswordButton();
        resetPasswordPage = PageGenerator.getResetPasswordPage(driver);
        verifyTrue(resetPasswordPage.resetPasswordDisplayedTiTle());
    }

    @And("^I click to Reset Password button$")
    public void iClickToResetPasswordButton() {
        resetPasswordPage.clickToResetPasswordButton();
    }

    @Then("^I verify \"([^\"]*)\" is displayed$")
    public void iVerifyIsDisplayed(String errorMessage)  {
        verifyTrue(resetPasswordPage.errorResetMessageDisplayed(errorMessage));
    }

    @When("^I input to Email address in Reset Password Page with \"([^\"]*)\"$")
    public void iInputToEmailAddressInResetPasswordPageWith(String emailReset) {
        resetPasswordPage.inputToEmailResetTextBox(emailReset);
    }


}
