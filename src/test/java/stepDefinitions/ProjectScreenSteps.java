package stepDefinitions;

import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import pageObjects.PageGenerator;
import pageObjects.ProjectScreenPO;

public class ProjectScreenSteps {
    WebDriver driver;
    ProjectScreenPO projectScreen;

    @Then("^I verify Project screen$")
    public void iVerifyProjectScreen() {
        projectScreen = PageGenerator.getProjectScreen(driver);
        projectScreen.sleepInSecond(3);
        Assert.assertTrue(projectScreen.isCreateProjectDisplayed());
    }
}
