class DashboardPage {
  get nameLbl() {return cy.get("h6")}
  get roleLbl() {return cy.get("a p")}
  get accountIcn() {return cy.get('button [data-testid="PersonIcon"]')}
}
export default new DashboardPage();
