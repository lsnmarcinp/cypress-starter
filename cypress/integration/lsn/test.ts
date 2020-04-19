enum scenario {
  URL = "https://www.cypress.io/",
}

describe("cypress starter pack, type script", () => {
  it("I visit cypress.io", () => {
    cy.visit(scenario.URL);
  });
});
