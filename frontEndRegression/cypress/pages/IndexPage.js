/// <reference types="cypress" />

import * as targets from '../targets/targets'

// Elements
const indexPageTitle = 'Testers Hotel'
const userNameField = ':nth-child(1) > input'
const userPassWordField = ':nth-child(2) > input'
const loginBtn = '.btn'


//  Actions
function checkTitleOfIndexPage(cy){
    cy.title().should('eq', indexPageTitle)
}

// Perform login
function loginWithValidUser(cy, userName, passWord){
    cy.get(userNameField).type(targets.username)
    cy.get(userPassWordField).type(targets.password)
    cy.get(loginBtn).click()
}

// Exports
module.exports = {
    checkTitleOfIndexPage, loginWithValidUser
}