/// <reference types="cypress" />

import * as targets from '../targets/targets'

// Elements
const indexPageTitle = 'Testers Hotel'
const roomBtn = ':nth-child(1) > .btn'
const clientBtn = '.blocks > :nth-child(2) > .btn'
const billsBtn = ':nth-child(3) > .btn'
const reservationBtn = ':nth-child(4) > .btn'
const logoutBtn = '.user > .btn'


//  Actions
function checkTitleAndHeader(cy){
    cy.title().should('eq', indexPageTitle)
    cy.contains('Tester Hotel Overview')    
}

function NavigateToRooms(cy){
    cy.get(roomBtn).click()
}
function NavigateToClients(cy){
    cy.get(clientBtn).click()
}
function NavigateToBills(cy){
    cy.get(billsBtn).click()
}
function NavigateToReservations(cy){
    cy.get(reservationBtn).click()
}
function Logout(cy){
    cy.get(logoutBtn).click()
}

// Exports
module.exports = {
    NavigateToBills, NavigateToClients, NavigateToReservations, NavigateToRooms, Logout, checkTitleAndHeader
}