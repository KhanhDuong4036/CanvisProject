package stepDefinitions;

import commons.BaseTest;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumberOptions.Hooks;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import pageObjects.LoginPO;
import pageObjects.PageGenerator;
import pageObjects.ProjectScreenPO;

public class LoginSteps extends BaseTest {
    WebDriver driver;
    LoginPO loginPage;
    ProjectScreenPO projectScreen;

    public LoginSteps() {
        driver = Hooks.openAndQuitBrowser();
    }

    @Given("^Open the Canvis webapp$")
    public void openTheCanvisWebapp() {
        loginPage = PageGenerator.getLoginPage(driver);
    }

    @When("^I input to Email address with \"([^\"]*)\"$")
    public void iInputToEmailAddressWith(String email) {
        loginPage.inputToEmailTextbox(email);
    }

    @And("^I input to Password with \"([^\"]*)\"$")
    public void iInputToPasswordWith(String password) {
        loginPage.inputToPasswordTextbox(password);
    }

    @And("^I click to SignIn button$")
    public void iClickToSignInButton() {
        loginPage.clickToSignInButton();
    }

    @Then("^I verify the error message is displayed$")
    public void iVerifyTheErrorMessageIsDisplayed() {
        Assert.assertTrue(loginPage.isErrorMessageDisplayed());
    }

    @Then("^I verify Project screen$")
    public void iVerifyProjectScreen() {
        projectScreen = PageGenerator.getProjectScreen(driver);
        verifyTrue(projectScreen.isCreateProjectDisplayed());
    }
}
