package pageObjects;

import org.openqa.selenium.WebDriver;

public class PageGenerator {

    public static LoginPO getLoginPage (WebDriver driver) {
        return new LoginPO(driver);
    }

    public static ProjectScreenPO getProjectScreen (WebDriver driver) {
        return new ProjectScreenPO(driver);
    }

    public static ResetPasswordPO getResetPasswordPage (WebDriver driver) {
        return new ResetPasswordPO(driver);
    }
}
