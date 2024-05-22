import { faker } from '@faker-js/faker';
const nome = faker.person.fullName()
const email = faker.internet.email()
const senha = faker.internet.password({ length: 10 })
let token

export default class gerenciarPage{

    inputNome = '[placeholder="Nome"]';
    inputSenha = '[placeholder="Senha"]';
    intutConfSenha = '[placeholder="Confirmar senha"]';
    
    buttonSalvar = '.account-save-button';
    buttonAlterarSenha = '.account-password-button';

    typeNome(nome){
        cy.get(this.inputNome).type(nome);
    }
    clickSalvar(){
        Cy.get(this.buttonSalvar).click();
    }
    usuarioSeguro(){
        return cy
        .request({
            method:'PUT',
            url:'https://raromdb-3c39614e42d4.herokuapp.com/api/users/39',
            body:{
                "name": "jotaro",
                "password": "123456",
              },
         }).then((response)=>{
            expect(response.body).to.not.be.empty
            // expect(response.body).to.be.an('object');
            // expect(response.body).have.property('type');
            // expect(response.body.type).to.equal(0);
            // cy.log(response.body.type);
            // const email = response.body.email;
            // cy.wrap(email).as('emailCamufla');
         });
    }
}