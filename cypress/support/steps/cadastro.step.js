import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { faker } from '@faker-js/faker';
import cadastroPage from '../pages/cadastro.page.js';
const paginaCadastro = new cadastroPage
// beforeEach (()=>{
//     cy.visit('/register');
// })
////// cadastro com sucesso ///////
Given('que acessei a funcionalidade de cadastro', () => {
    cy.visit('/register');
});
When('informar um novo nome', () => {
    paginaCadastro.typeNome(faker.person.fullName());
});
When('informar um novo e-mail', () => {
    paginaCadastro.typeEmail(faker.internet.email());
});
When('informar uma nova senha', () => {
    //paginaCadastro.typeSenha(faker.internet.password({length : 6}));
    paginaCadastro.typeSenha('123456');
});
When('confirmar a senha', () => {
    //paginaCadastro.typeConfSenha(faker.internet.password({length : 6}));
    paginaCadastro.typeConfSenha('123456');
});
When('confirmar operação', () => {
    cy.intercept('POST','https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users')
    .as('postUsuario')
    paginaCadastro.clickButtonCadastrar();
});
Then('o usuário deverá ser cadastrado', () => {
    
    paginaCadastro.getUsuarioCadastrado();
});

//3
When('informar o nome {string}', (tabela) => {
    const exemplo = tabela.rowsHash();
    paginaCadastro.typeNome(exemplo["nome"]);
});
When('informar o e-mail {string}', (tabela) => {
    const exemplo = tabela.rowsHash();
    paginaCadastro.typeEmail(exemplo["email"]);
});
