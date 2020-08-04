describe("UI TESTS", () => {
    //it("should navigate to google's website", ()=>{
      //  cy.visit("www.amazon.com");
    //});

    beforeEach(()=>{
        cy.visit("http://localhost:3003");
        //cy.visit("https://adripdv-cypress-web.azurewebsites.net/");
    });

    it("should load the login page correctly", () =>{
        cy.get('[data-cy=login-text]').should("have.length", 1);
        cy.get("[data-cy=login-text]").should("be.visible");
    });

    it("should not allow login when email is not provided", () =>{
        cy.get('[data-cy=password]').type("12345");
        cy.get('[data-cy=submit-button]').click();
        // Check that we are still on the same page 
        cy.get("[data-cy=login-text]").should("have.length", 1);
        cy.get("[data-cy=homepage]").should("have.length", 0);
      });

      it("should not allow login when password is not provided", () =>{
        cy.get('[data-cy=email]').type("john@example.com");
        cy.get('[data-cy=submit-button]').click();
        // Check that we are still on the same page 
        cy.get("[data-cy=login-text]").should("have.length", 1);
        cy.get("[data-cy=homepage]").should("have.length", 0);
      });

      it("should allow login when email & password is provided", () =>{
        cy.get('[data-cy=email]').type("john@example.com");
        cy.get('[data-cy=password]').type("12345");
        cy.get('[data-cy=submit-button]').click();
        // Check that we are redirected to home page
        cy.get("[data-cy=homepage]").should("have.length", 1);
        cy.get('[data-cy=log-out-btn]').should("be.visible");
        cy.get('[data-cy=log-out-btn]').should("have.class", "btn-sm");
        cy.get('[data-cy=log-out-btn]').should("not.have.class", "kdjfld");
      });

      it("should contain correct input field values", () =>{
        cy.get('[data-cy=email]').type("smith@sample.com");
        cy.get('[data-cy=email]').should("have.value", "smith@sample.com");
        cy.get('[data-cy=password]').type("12345");
        cy.get('[data-cy=password]').should("have.value", "12345");
        cy.get('[data-cy=password]').should("not.have.value", "12345568");
      });

      it("should logout successfuly", () =>{
        cy.get('[data-cy=email]').type("john@example.com");
        cy.get('[data-cy=password]').type("12345");
        cy.get('[data-cy=submit-button]').click();
        cy.get('[data-cy=log-out-btn]').click();
        // should be on the logout page
        cy.get('[data-cy=logout-txt]').should("contain", "You are now logged out!");
        cy.get('[data-cy=logout-txt]').should("not.contain", "blahblah");   
      });
    
      it("should have existing elements", () =>{
        cy.get("[data-cy=login-text]").should("exist");
        cy.get('[data-cy=logout-txt]').should("not.exist");
        //cy.wait(5000);
      });

      //it("should fail and create video and screenshot", () =>{
        //cy.get("[data-cy=zzzzz]").should("exist");
      //});

});

