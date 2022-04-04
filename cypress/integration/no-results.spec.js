describe('No results', () => {
	it('should navigate without results', () => {
		cy.visit('http://localhost:3000/')

		cy.get('[data-testid="nav-bar"]').find('input').type('dklsjfdsklfjioqweuoqwieaskld{enter}')

		cy.get('ul p').should('have.text', 'Sin resultados')
	})
})