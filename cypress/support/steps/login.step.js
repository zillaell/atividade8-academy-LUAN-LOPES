import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { faker } from '@faker-js/faker';
import loginPage from '../pages/login.page.js';
import cadastroPage from '../pages/cadastro.page.js';
const paginaLogin = new loginPage
const paginaCadastro = new cadastroPage


Given('que sou um usuário cadastrado', () => {
    paginaLogin.usuarioMocante();
    //cy.wait('@tokenCamufla');
    // paginaLogin.requestLogin();

});
Given('que acessei a funcionalidade de login', () => {
    cy.visit('/login');
});
When('informar o e-mail',()=>{
    paginaLogin.typeEmail('jotaro@co.co');
});
When('informar a senha',()=>{
    paginaLogin.typeSenha('123456');
});
When('confirmar operação',()=>{
    paginaLogin.clickButtonLogin();
});
Then('devo ser capaz de realizar o login',()=>{
    cy.url('').should('equal','https://raromdb-frontend-c7d7dc3305a0.herokuapp.com/');
    cy.wait(2000);
    paginaLogin.clickButtonPerfil();
});

// BAD REQUEST ///////
When('informar um novo e-mail',()=>{
    paginaLogin.typeEmail(faker.internet.email());
});

Then('não devo ser capaz de realizar o login',()=>{
    paginaLogin.getMsgFalha();
});

// cy.get(this.inputNome).type(nome);
// cy.get(this.inputEmail).type(email)
// cy.get(this.inputSenha).type(senha);
// cy.get(this.inputConfSenha).type(senha);


