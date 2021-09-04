package pageObjects;

import commons.BasePage;
import org.openqa.selenium.WebDriver;
import pageUIs.LoginPageUIs;

public class LoginPO extends BasePage {
    WebDriver driver;
    public LoginPO(WebDriver driver) {
        this.driver = driver;
    }

    public void inputToEmailTextbox(String email) {
        waitForElementVisible(driver, LoginPageUIs.EMAIL_TEXTBOX);
        sendkeyToElement(driver, LoginPageUIs.EMAIL_TEXTBOX, email);
    }

    public void inputToPasswordTextbox(String password) {
        waitForElementVisible(driver, LoginPageUIs.PASSWORD_TEXTBOX);
        sendkeyToElement(driver, LoginPageUIs.PASSWORD_TEXTBOX, password);
    }

    public void clickToSignInButton() {
        waitForElementClickable(driver, LoginPageUIs.SIGNIN_BUTTON);
        clickToElement(driver, LoginPageUIs.SIGNIN_BUTTON);
    }

    public boolean isErrorMessageDisplayed() {
        waitForElementVisible(driver, LoginPageUIs.ERROR_MESSAGE);
        return isElementDisplayed(driver, LoginPageUIs.ERROR_MESSAGE);
    }
}
