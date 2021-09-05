package pageObjects;

import commons.BasePage;
import org.openqa.selenium.WebDriver;
import pageUIs.ResetPasswordPageUIs;

public class ResetPasswordPO extends BasePage {

    WebDriver driver;
    public ResetPasswordPO(WebDriver driver) {
        this.driver = driver;
    }

    public void clickToResetPasswordButton() {
        waitForElementVisible(driver, ResetPasswordPageUIs.RESET_PASSWORD_BUTTON);
        clickToElement(driver, ResetPasswordPageUIs.RESET_PASSWORD_BUTTON);

    }

    public boolean resetPasswordDisplayedTiTle() {
        waitForElementVisible(driver, ResetPasswordPageUIs.RESET_PASSWORD_TITLE);
        return isElementDisplayed(driver, ResetPasswordPageUIs.RESET_PASSWORD_TITLE);
    }

    public boolean errorResetMessageDisplayed(String errorMessage) {
        waitForElementVisible(driver, ResetPasswordPageUIs.ERROR_MESSAGE);
        return isElementDisplayed(driver, ResetPasswordPageUIs.ERROR_MESSAGE, errorMessage);
    }

    public void inputToEmailResetTextBox(String emailReset) {
        waitForElementVisible(driver, ResetPasswordPageUIs.EMAIL_RESET_TEXTBOX);
        sendkeyToElement(driver, ResetPasswordPageUIs.EMAIL_RESET_TEXTBOX, emailReset);
    }
}
