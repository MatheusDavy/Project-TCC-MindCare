describe('Login Page', () => {
    const randomNumber = Math.floor(Math.random() * 1000000) + 1;

    it('user should be able to register', () => {
        cy.visit('http://localhost:3000/auth/');
        cy.get('a').contains('Registrar').click();

        cy.get('input#register-name').type('teste teste');
        cy.get('input#register-email').type(`teste${randomNumber}@gmail.com`);
        cy.get('input#register-password').type('@Teste01');
        cy.get('button#register-submit').contains('Criar Conta').click();

        cy.contains('p', 'Usuário cadastrado com sucesso!').should('be.visible');
    });

    it('user should be able to log in', () => {
        cy.visit('http://localhost:3000/auth/');

        cy.get('input#login-email').type(`teste${randomNumber}@gmail.com`);
        cy.get('input#login-password').type('@Teste01');
        cy.get('button#login-submit').contains('Login').click();

        cy.visit('http://localhost:3000/dashboard');
    });
});

