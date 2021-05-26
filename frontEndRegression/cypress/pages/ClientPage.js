/// <reference types="cypress" />

import * as targets from '../targets/targets'

// Elements
const indexPageTitle = 'Testers Hotel'
const createClientBtn = 'h2 > .btn'
const returnBtn = ':nth-child(3) > .btn'
const userName = ''



//  Actions
function CheckTitleAndHeader(cy){
    //cy.title().should('eq', indexPageTitle)
    cy.contains('Clients')
}

function NavigateToCreateClient(cy){
    cy.get(createClientBtn).click()
}

function NavigateBack(cy){
    cy.get(returnBtn).click()    
}


// Exports
module.exports = {
    NavigateBack, NavigateToCreateClient, CheckTitleAndHeader
}