describe('Log In', () => {
    it('Log In', () => {
      cy.visit('http://siakad.polinema.ac.id/')
        cy.get('input[name = "username"]').type('1941720009')
        cy.get('input[name = "password"]').type('Dandiagungs29')
        cy.get('.form-actions > .btn').click()
        cy.title().should('include','Sistem Informasi Akademik')
    })
  })