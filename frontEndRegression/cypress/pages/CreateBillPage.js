/// <reference types="cypress" />

import * as targets from '../targets/targets'

// Elements
const indexPageTitle = 'Testers Hotel'
const valueField = 'input'
const paidCheckBox = '.checkbox'
const saveBtn = '.blue'
const returnBtn = ':nth-child(3) > .btn'



//  Actions
function CheckTitleAndHeader(cy){
    cy.contains('Bills')
    cy.title().should('eq', indexPageTitle)
}

// Create new Room
function CreateNewBills(cy){
    cy.get(valueField).type('1000')
    cy.get(paidCheckBox).click()
    cy.get(saveBtn).click()
}

function NavigateBack(cy){
    cy.get(returnBtn).click()    
}



// Exports
module.exports = {
    NavigateBack, CreateNewBills, CheckTitleAndHeader
}