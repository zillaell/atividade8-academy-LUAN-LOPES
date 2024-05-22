import { faker } from '@faker-js/faker';
const nome = faker.person.fullName()
const email = faker.internet.email()
const senha = faker.internet.password()
function criarUsuario() {
    return {
      nameM: faker.person.fullName(),
      emailM: faker.internet.email(),
      passwordM: faker.internet.password({ length: 10 }),
    };
  };

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
        cy.get(this.inputEmail).type(email)
        const roubado = email
        cy.wrap(roubado).as('emailRoubado');
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
    usuarioMocante(){
        return cy
        .request('POST','https://raromdb-3c39614e42d4.herokuapp.com/api/users',{
                "name": "jotaro",
                "email": faker.string.alpha({length: 10}) + '@co.co',
                "password": "123456",
              }
         ).then((response)=>{
            response.body;
            expect(response.body).to.be.an('object');
            expect(response.body).have.property('type');
            expect(response.body.type).to.equal(0);
            cy.log(response.body.type);
         });
    }
    usuarioDuplicado(){
        cy.get(this.inputNome).type(nome);
        cy.get(this.inputEmail).type(email);
        cy.get(this.buttonCadastrar).click();
        cy.get('.modal-actions button').click();
        cy.wait(3000);
        cy.get(this.buttonCadastrar).click();
    }

}