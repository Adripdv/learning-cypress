describe("UI TESTS", () => {
    //it("should navigate to google's website", ()=>{
      //  cy.visit("www.amazon.com");
    //});

    beforeEach(()=>{
        cy.visit("https://example.cypress.io/commands/actions");
    });

    it("should celar the input text field", () =>{
      cy.get('.action-email').type("fake@email.com");
      cy.get('.action-email').clear();
      cy.get('.action-email').should('have.value', '');
       });

       it("should double click the element", () =>{
        cy.get('.action-div').dblclick()
        .should('not.be.visible')
        .should("have.value", "");
         });


    it("should check the first checkbox", () =>{
      cy.get('.action-checkboxes [type="checkbox"]')
      .check(["checkbox1", "checkbox3"])
      .should("be.checked");
          });    
    
    it("should uncheck the first checkbox", () =>{
      cy.get('.action-checkboxes [type="checkbox"]')
      .check(["checkbox1", "checkbox3"])
      .should("be.checked");

      cy.get('.action-checkboxes [type="checkbox"]')
      .uncheck(["checkbox1"])
      .should("not.be.checked");
     });  

    it("should select first radio button", () =>{
      cy.get('.action-radios [type="radio"]')
      .check('radio1',)
      .should('be.checked')
    });

    it("should select first dropdwon item", () =>{
      cy.get('.action-select')
      .select("apples")
      .should('have.value', 'fr-apples');
    });
  });

