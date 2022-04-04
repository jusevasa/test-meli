import { MAX_NUMBER_ITEMS_ARRAY } from '../../src/constants/mapper.constants'
describe('App', () => {
	it('should navigatein the app', () => {
		cy.visit('http://localhost:3000/')

		cy.get('[data-testid="nav-bar"]').find('input').type('hola{enter}')

		cy.get('ul li').should('have.length', MAX_NUMBER_ITEMS_ARRAY)

		cy.get('ul li').first().click()

		cy.get('h2').should('have.text', 'Descripción del producto')

	})
})