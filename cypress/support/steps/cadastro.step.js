import { Given, When, Then, Before, After } from '@badeball/cypress-cucumber-preprocessor'
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
//2 =intercept=
When('cadastro um novo usuário', () => {
    paginaCadastro.usuarioMocante();
});
Then('ele deve ser criado com o tipo 0, usuário comum.', () => {
 
});

//3
When('informar o nome {string}', (nome) => {
    // const exemplo = tabela.rowsHash();
    paginaCadastro.typeNome(nome);
});
When('informar o e-mail {string}', (email) => {
    // const exemplo = tabela.rowsHash();
    paginaCadastro.typeEmail(faker.string.alpha()+ email);
});
// 4
Then('o usuário não deverá ser cadastrado sem preencher o campo nome',()=>{
    cy.wait(2000);
    cy.contains('Informe o nome');
});
//5
Then('o usuário não deverá ser cadastrado sem preencher o campo e-mail',()=>{
    cy.wait(2000);
    cy.contains('Informe o e-mail');
});
//6
Then('o usuário não deverá ser cadastrado sem preencher o campo senha',()=>{
    cy.wait(2000);
    cy.contains('Informe a senha');
});
//7
Then('o usuário não deverá ser cadastrado sem preencher o campo confirmar senha',()=>{
    cy.wait(2000);
    cy.contains('Informe a senha');
});
//8
When('informar o nome novo {string}',(nome)=>{
    paginaCadastro.typeNome(nome);
});
When('informar o e-mail novo {string}',(email)=>{
    paginaCadastro.typeEmail(faker.string.alpha()+ email);
});
Then('o usuário não deverá ser cadastrado com um e-mail em formato inválido',()=>{
    cy.wait(2000);
    cy.contains('Não foi possível cadastrar o usuário.');
});
//9
When('informar um e-mail já em uso',()=>{

});
Then('o usuário não deverá ser cadastrado com um e-mail já em uso',()=>{
    paginaCadastro.usuarioDuplicado();
    cy.contains('E-mail já cadastrado. Utilize outro e-mail');
});
//10
When('confirmar uma nova senha novamente',()=>{
    paginaCadastro.typeConfSenha('1234567');
});
Then('o usuário não deverá ser cadastrado com senhas diferentes nos campos senha e Confirmar senha',()=>{
    cy.contains('As senhas devem ser iguais.');
});
//11
When('informar um novo e-mail de 60 caracteres',()=>{
    paginaCadastro.typeEmail('123456789212345678931234567894123456789512345678961qedez@q.co');
});
Then('o usuário não deverá ser cadastrado com um e-mail em tamanho maior que 60 caracteres',()=>{
    cy.contains('Não foi possível cadastrar o usuário.');
});
12//
When('informar um novo nome com mais de 100 caracteres',()=>{
    paginaCadastro.typeNome('1234567891123456789212345678931234567894123456789512345678961234567897123456789812345678991234567890a')
});
Then('o usuário não deverá ser cadastrado com um nome em tamanho maior que 100 caracteres',()=>{
    cy.contains('Não foi possível cadastrar o usuário.');
});
//13
When('informar uma nova senha com menos de 6 caracteres',()=>{

    paginaCadastro.typeSenha('12345');
});
Then('o usuário não deverá ser cadastrado com senha menor que 6 caracteres',()=>{
   cy.contains('A senha deve ter pelo menos 6 dígitos.'); 
});
//14
When('confirmar a senha com mais de 12 caracteres',()=>{
    paginaCadastro.typeSenha('1234567891123');
});
Then('o usuário não deverá ser cadastrado com senha maior que 12 caracteres',()=>{
    cy.contains('A senha deve ter no máximo 12 dígitos.');
});