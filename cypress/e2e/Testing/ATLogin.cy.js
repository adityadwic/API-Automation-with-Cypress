describe("Login Page Test Cases", () => {

    it("Visit Login Page", () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      cy.title().should("eq", "OrangeHRM");
      cy.contains("Login").should("be.visible");
    });
  
    // it("Contains Email and Password input, and Login button", () => {
    //   // check email
    //   cy.visit("http://localhost:3000");
    //   const email = cy.get("input[name='email']");
    //   email.should("be.visible");
    //   email.should("have.attr", "type", "email");
    //   email.should("have.attr", "placeholder", "Email Address");
  
    //   // check password
    //   const password = cy.get("input[name='password']");
    //   password.should("be.visible");
    //   password.should("have.attr", "type", "password");
    //   password.should("have.attr", "placeholder", "Password");
  
    //   // check login button
    //   const button = cy.get("button");
    //   button.should("be.visible");
    //   button.contains("Login");
    //   button.should("have.css", "background-color", "rgb(79, 70, 229)");
    //   button.should("have.css", "color", "rgb(255, 255, 255)");
    // })
})