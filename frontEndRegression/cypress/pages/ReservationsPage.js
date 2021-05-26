/// <reference types="cypress" />

import * as targets from '../targets/targets'

// Elements
const indexPageTitle = 'Testers Hotel'
const createReservation = 'h2 > .btn'
const returnBtn = ':nth-child(3) > .btn'



//  Actions
function CheckTitleAndHeader(cy){
    cy.contains('Reservations')
    cy.title().should('eq', indexPageTitle)
}

// Create new Room
function NavigateToCreateNewReservation(cy){
    cy.get(createBillsBtn).click()
}

function NavigateBack(cy){
    cy.get(returnBtn).click()    
}

function CheckReservation(cy){
    cy.contains('Jonas')
}

// Exports
module.exports = {
    NavigateBack, NavigateToCreateNewReservation, CheckTitleAndHeader, CheckReservation
}