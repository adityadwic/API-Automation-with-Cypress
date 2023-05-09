describe("Login Page Test Cases", () => {
  // it("Visit Login Page", () => {
  //   cy.visit("http://localhost:3000");
  //   cy.title().should("eq", "React Gallery");
  //   cy.contains("Hello Again");
  // });

  it("Contains Email and Password input, and Login button", () => {
    // check email
    cy.visit("http://localhost:3000");
    const email = cy.get("input[name='email']");
    email.should("be.visible");
    email.should("have.attr", "type", "email");
    email.should("have.attr", "placeholder", "Email Address");

    // check password
    const password = cy.get("input[name='password']");
    password.should("be.visible");
    password.should("have.attr", "type", "password");
    password.should("have.attr", "placeholder", "Password");

    // check login button
    const button = cy.get("button");
    button.should("be.visible");
    button.contains("Login");
    button.should("have.css", "background-color", "rgb(79, 70, 229)");
    button.should("have.css", "color", "rgb(255, 255, 255)");
  });

  it("Do Login with null value", () => {
    const button = cy.get("button");
    button.click();
    cy.on("window:alert", (t) => {
      expect(t).to.contains("login failed");
    });
  });

  it("Do Login with wrong value", () => {
    const email = cy.get("input[name='email']");
    email.type("wrong@react.test");

    const password = cy.get("input[name='password']");
    password.type("password");

    const button = cy.get("button");
    button.click();
    cy.on("window:alert", (t) => {
      expect(t).to.contains("login failed");
    });
  });

  it("Do Login with correct value", () => {
    const email = cy.get("input[name='email']");
    email.type("user@react.test");

    const password = cy.get("input[name='password']");
    password.type("password");

    const button = cy.get("button");

    button.click();
    cy.on("window:alert", (t) => {
      expect(t).to.contains("welcome");
    });
    cy.url().should('eq', 'http://localhost:3000/dashboard')
  });
});
