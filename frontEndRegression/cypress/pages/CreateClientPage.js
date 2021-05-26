/// <reference types="cypress" />

import * as targets from '../targets/targets'

// Elements
const indexPageTitle = 'Testers Hotel'
const nameField = ':nth-child(1) > input'
const emailField = ':nth-child(2) > input'
const telephoneNumberField = ':nth-child(3) > input'
const saveBtn = '.blue'
const returnBtn = '[href="/clients"]'

//  Actions
function CheckTitleAndHeader(cy){
    cy.title().should('eq', indexPageTitle)
    cy.contains('New Client')
}

function CreateAndSaveNewClient(cy){
    cy.get(nameField).type('TestUser') // TODO update with faker
    cy.get(emailField).type('TestUser@test.se')
    cy.get(telephoneNumberField).type('123456')
    cy.get(saveBtn).click()
}

function NavigateBack(cy){
    cy.get(returnBtn).click()    
}

// Exports
module.exports = {
    CreateAndSaveNewClient, CheckTitleAndHeader, NavigateBack
}