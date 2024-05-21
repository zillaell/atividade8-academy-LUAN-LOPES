import { faker } from '@faker-js/faker';
const nome = faker.person.fullName()
const email = faker.internet.email()
const senha = faker.internet.password()

export default class CadastroPage{
    
    inputNome = '[placeholder="Nome"]';
    inputEmail = '[placeholder="E-mail"]';
    inputSenha = '[placeholder="Senha"]';
    inputConfSenha = '[placeholder="Confirmar senha"]';
    buttonCadastrar = 'button.account-save-button';
    msgUsuarioCadastrado = 'Cadastro realizado!';

// outros elementos não referentes a funcionalidade;
    buttonTermsPriv = 'a.privacy-link';
    buttonRaroLabs = 'a.link-logo';
    abaPesquisar = '[placeholder="Buscar filmes"]';
    buttonPesquisar = '.search-button';
    buttonFilmes = '.movies-page-link[href="/"]';
    buttonLogin = '.movies-page-link[href="/login"]';
    buttonRegistreSe ='.movies-page-link[href="/register"]';


    typeNome (nome){
        cy.get(this.inputNome).type(nome);
    }
    typeEmail (email){
        cy.get(this.inputEmail).type(email);
    }
    typeSenha (senha){
        cy.get(this.inputSenha).type(senha);
    }
    typeConfSenha (senha){
        cy.get(this.inputConfSenha).type(senha);
    }
    clickButtonCadastrar (){
        cy.get(this.buttonCadastrar).click();
    }
    getUsuarioCadastrado (){
        return cy.contains(this.msgUsuarioCadastrado);
    }

}