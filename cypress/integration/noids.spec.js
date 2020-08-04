describe("UI TESTS", () => {
    //it("should navigate to google's website", ()=>{
      //  cy.visit("www.amazon.com");
    //});

    beforeEach(()=>{
        cy.visit("http://localhost:3003/noids");
    });

    it("should celar the input text field", () =>{
      cy.get('body > :nth-child(1) > :nth-child(1)').check();
    });
  });
