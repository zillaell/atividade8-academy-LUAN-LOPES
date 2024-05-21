import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { faker } from '@faker-js/faker';
import gerenciarPage from '../pages/login.page.js';
const paginaGerenciar = new gerenciarPage

Given('',()=>{
    paginaGerenciar.typeEmail();
})