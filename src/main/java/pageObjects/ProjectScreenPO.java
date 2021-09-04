package pageObjects;

import commons.BasePage;
import org.openqa.selenium.WebDriver;
import pageUIs.ProjectScreenPageUIs;

public class ProjectScreenPO extends BasePage {
    WebDriver driver;

    public ProjectScreenPO(WebDriver driver) {
        this.driver = driver;
    }

    public boolean isCreateProjectDisplayed() {
        waitForElementVisible(driver, ProjectScreenPageUIs.CREATE_PROJECT);
        return isElementDisplayed(driver, ProjectScreenPageUIs.CREATE_PROJECT);
    }
}
