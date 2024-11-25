import loginPage from "../../page_objects/login.page";
import dashboardPage from "../../page_objects/dashboard.page";
import userCredentials from "../../fixtures/testData/userCredentials.json";
import { UserCredentials } from "../../types"

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should Log in with exusting account", () => {
    const credentials: UserCredentials = userCredentials;
    loginPage.login(credentials.realtor.email, credentials.realtor.password);

    dashboardPage.nameLbl.should("have.text", credentials.realtor.name);
    dashboardPage.roleLbl.should("have.text", credentials.realtor.role);
    cy.title().should("eq", "User: Profile | Delek Homes");
  });

  it("Should Log out", () => {
    cy.login();
    dashboardPage.accountIcn.click();
    cy.contains("Logout").click();

    cy.url().should("include", "auth/login");
    cy.title().should("eq", "Login | Delek Homes");
  });
});
