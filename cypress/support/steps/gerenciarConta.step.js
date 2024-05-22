import { Given, When, Then, After, Before } from '@badeball/cypress-cucumber-preprocessor'
import { faker } from '@faker-js/faker';
import GerenciarPage from '../pages/login.page.js';
import LoginPage from '../pages/login.page.js';
import CadastroPage from '../pages/cadastro.page.js';
const paginaGerenciar = new GerenciarPage
const paginaLogin = new LoginPage
const paginaCadastro = new CadastroPage
let token

function logarUsuario(){
    paginaLogin.usuarioMocante()
    cy.visit('/login')
    paginaLogin.typeEmail('jotaro@co.co')
    paginaLogin.typeSenha('123456')
    paginaLogin.clickButtonLogin() 
    paginaLogin.clickButtonPerfil();
}

function requestLogin (){
    return cy.request({
        method:'POST',
        url:'https://raromdb-3c39614e42d4.herokuapp.com/api/auth/login', 
        body: {
            "email":  'jotaro@co.co',
            "password": '123456',
        },
    }).then((response)=> {
          cy.log(response)
          expect(response.status).to.equal(200);
          expect(response.body).to.have.property('accessToken');
          token = response.body.accessToken;
          cy.log(token);
          cy.wrap(token).as('tokenRoubado')
        })
    }

    function usuarioSeguro(){
        return cy
        .request({
            method:'PUT',
            url:'https://raromdb-3c39614e42d4.herokuapp.com/api/users/39',
            headers:{
                Authorization: 'Bearer '+ token,
            },
            body:{
                "name": "jotaro",
                "password": "123456",
              },
         }).then((response)=>{
            expect(response).to.not.be.empty
            // expect(response.body).to.be.an('object');
            // expect(response.body).have.property('type');
            // expect(response.body.type).to.equal(0);
            // cy.log(response.body.type);
            // const email = response.body.email;
            // cy.wrap(email).as('emailCamufla');
         });
    }

After({tags: '@afetaUsuário'}, ()=>{
    requestLogin();
    usuarioSeguro();
});
//1
Given('que sou usuário cadastrado e autenticado',()=>{
    logarUsuario();
});
Given('acessei a funcionalidade de Gerenciar Conta',()=>{
    cy.visit('/account');
});
When('tentar editar o nome',()=>{
    paginaCadastro.typeNome('jotaro Kujo');
    //cy.get('[placeholder="Nome"]').type('jotaro Kujo');
});
When('confirmar operação',()=>{
    //paginaGerenciar.clickSalvar();
    cy.get('.account-save-button').click();
});
Then('devo ser capaz de alterar o nome com sucesso',()=>{
    cy.wait(1000);
    cy.contains('Informações atualizadas!');
});
//2


//3