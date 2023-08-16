

describe("filtering Hotels", () => {
    it("mostrara todas las cards de los hoteles", () => {
        cy.visit("http://127.0.0.1:5500/index.html");
        cy.get(".card").should("be.visible").and("have.length", 18)
    })
    it("aplicar filtro y verificar cards", () => {
        cy.visit("http://127.0.0.1:5500/index.html");
        
        cy.get("#prices").select("$");
        cy.wait(2000)
        cy.get(".card").should("be.visible");
        cy.get('.card').each((card) => {
            cy.wrap(card).find(".precio").should( "have.text", "$")
        })



        cy.get("#prices").select("$$$$");
        cy.wait(2000)
        cy.get(".card").should("be.visible")
        cy.get(".card").each((card) => {
            cy.wrap(card).find(".precio").should("contain.text", "$$$$")
        })
    })
    it("borrar filtros", () => {
        cy.visit("http://127.0.0.1:5500/index.html");
        cy.get("#filter-countries").select("Argentina");
        cy.get("#clear").click();
        cy.get(".card").should("be.visible").and("have.length", 18)

    })
})


