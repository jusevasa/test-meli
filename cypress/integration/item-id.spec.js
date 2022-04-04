describe('Item param id', () => {
	it('should navigate without results', () => {
		cy.visit('http://localhost:3000/items/skldjgkldfgj90823423lkasdas')

		cy.get('.text-center').should('have.text', 'Producto no encontrado')

	})
})