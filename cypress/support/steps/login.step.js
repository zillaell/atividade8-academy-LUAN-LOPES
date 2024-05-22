import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { faker } from '@faker-js/faker';
import loginPage from '../pages/login.page.js';
import cadastroPage from '../pages/cadastro.page.js';
const paginaLogin = new loginPage
const paginaCadastro = new cadastroPage

function logarUsuario(){
    paginaLogin.usuarioMocante()
    cy.visit('/login')
    paginaLogin.typeEmail('jotaro@co.co')
    paginaLogin.typeSenha('123456')
    paginaLogin.clickButtonLogin() 
    paginaLogin.clickButtonPerfil();
}

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

//3
Given('que sou um usuário cadastrado e autenticado', () => {
    logarUsuario()
});
When('clicar na aba de perfil', () => {
    cy.wait(1000);
    paginaLogin.clickButtonPerfil();
});
Then('devo ser capaz de acessa-la', () => {
    cy.url('').should('equal','https://raromdb-frontend-c7d7dc3305a0.herokuapp.com/profile');
});
//4

When('acessar a funcionalidade de Perfil',()=>{
    cy.visit('/profile');
});
Then('devo ser capaz ver o campo com minhas avaliações',()=>{
    paginaLogin.verAvaliações();
});
Then('nome no campo de perfil',()=>{
    paginaLogin.verNome();
});
Then('email no campo de perfil',()=>{
    paginaLogin.verEmail();
});
Then('foto no campo de perfil',()=>{
    paginaLogin.verFoto();
});
//5
When('clicar em gerenciar conta',()=>{
    paginaLogin.clickButtonGerenciarConta();
});
Then('devo ser capaz de acessar o gerenciamneto da conta',()=>{
    cy.url('').should('equal','https://raromdb-frontend-c7d7dc3305a0.herokuapp.com/account');
});
//6
When('clicar em sair',()=>{
    paginaLogin.clickButtonSair();
});
Then('não devo estar mais autenticado no site',()=>{
    cy.url('').should('equal','https://raromdb-frontend-c7d7dc3305a0.herokuapp.com/');
});