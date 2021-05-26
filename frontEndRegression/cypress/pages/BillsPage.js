/// <reference types="cypress" />

import * as targets from '../targets/targets'

// Elements
const indexPageTitle = 'Tester Hotel'
const createBillsBtn = 'h2 > .btn'
const returnBtn = ':nth-child(3) > .btn'



//  Actions
function CheckTitleAndHeader(cy){
    cy.contains('Bills')
}

// Create new Room
function NavigateToCreateNewBill(cy){
    cy.get(createBillsBtn).click()
}

function NavigateBack(cy){
    cy.get(returnBtn).click()    
}

function CheckNewBill(cy){
    cy.contains('1000')
}

// Exports
module.exports = {
    NavigateBack, NavigateToCreateNewBill, CheckTitleAndHeader, CheckNewBill
}