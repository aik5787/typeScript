
import userCredentials from "../fixtures/testData/userCredentials.json";

Cypress.Commands.add("login", (email: string = userCredentials.realtor.email, password: string = userCredentials.realtor.password): void => {
    cy.request("POST", "/api/users/login", {
      email: email,
      password: password,
    }).then((response) => {
      window.localStorage.setItem("accessToken", response.body.accessToken);
      cy.visit("dashboard/user/profile");
    });
  });
