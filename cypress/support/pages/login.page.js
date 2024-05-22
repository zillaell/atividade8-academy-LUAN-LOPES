import { faker } from '@faker-js/faker';
const nome = faker.person.fullName()
const email = faker.internet.email()
const senha = faker.internet.password()
let token

export default class LoginPage{

    inputEmail = '[placeholder="E-mail"]';
    inputSenha = '[placeholder="Password"]';
    buttonLogin = '.login-button'; 
 // outros elementos não referentes a funcionalidade;
    buttonTermsPriv = 'a.privacy-link';
    buttonRaroLabs = 'a.link-logo';
    abaPesquisar = '[placeholder="Buscar filmes"]';
    buttonPesquisar = '.search-button';
    buttonFilmes = '.movies-page-link[href="/"]';
    buttonLoginSuperior = '.movies-page-link[href="/login"]';
    buttonRegistreSe ='.movies-page-link[href="/register"]';
    msgFalha = 'Usuário ou senha inválidos.';
    buttonProfile = '.movies-page-link[href="/profile"]';
// outros elementos de Perfil
    abaAvaliacoes = '.ratings h2';
    nomePerfil = '.user-info > :nth-child(1)';
    emailPerfil = '.user-info > :nth-child(2)';//o mesmo, tem que diferencialos na chamada.
    ftPerfil = '.profile-nickname' ;
    gerenciarConta = '.account-link[href="/account"]';
    sair = '.account-link[href="/logout"]';

    /////////////////funções////////////////////
    typeEmail (email){
        cy.get(this.inputEmail).type(email);
    }
    typeSenha (senha){
        cy.get(this.inputSenha).type(senha);
    }
    clickButtonLogin (){
        cy.get(this.buttonLogin).click();
    }
    getMsgFalha (){
        cy.contains(this.msgFalha);
    }
    clickButtonPerfil(){
        cy.get(this.buttonProfile).click();
    }
    /// da aba de perfil ///
    verAvaliações(){
        cy.get(this.abaAvaliacoes);
    }
    verNome(){
        cy.get(this.nomePerfil);
    }
    verEmail(){
        cy.get(this.emailPerfil);
    }
    verFoto(){
        cy.get(this.ftPerfil);
    }
    clickButtonGerenciarConta(){
        cy.get(this.gerenciarConta).click();
    }
    clickButtonSair(){
        cy.get(this.sair).click();
    }
    ///////////////////Mocador//////////////////////
    usuarioMocante(){
        return cy
        .request({
            method:'POST',
            url:'https://raromdb-3c39614e42d4.herokuapp.com/api/users',
            body:{
                "name": "jotaro",
                "email": "jotaro@co.co",
                "password": "123456",
              },
            failOnStatusCode: false,
         }).then((response)=>{
            expect(response.body).to.not.be.empty
            // expect(response.body).to.be.an('object');
            // expect(response.body).have.property('type');
            // expect(response.body.type).to.equal(0);
            // cy.log(response.body.type);
            // const email = response.body.email;
            // cy.wrap(email).as('emailCamufla');
         }).as('tokenCamufla') 
    }
    logarMocante(){
        paginaLogin.typeEmail('jotaro@co.co');
        paginaLogin.typeSenha('123456');
        paginaLogin.clickButtonLogin();
    }
    requestLogin (){
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
              
            })
    }
    promoveAdm() {
        return cy.request({
            method:'PATCH',
            url:'https://raromdb-3c39614e42d4.herokuapp.com/api/admin', 
            headers: {
                Authorization: 'Bearer' + token
            }
        }).then(function (response) {
              cy.log(response)
              expect(response.status).to.equal(204);
            })
    }
}