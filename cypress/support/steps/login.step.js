import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { faker } from '@faker-js/faker';
import loginPage from '../pages/login.page.js';
const paginaLogin = new loginPage

Given('',()=>{
    paginaLogin.typeEmail()
})