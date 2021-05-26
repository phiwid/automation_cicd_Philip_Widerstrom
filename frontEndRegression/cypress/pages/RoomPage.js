/// <reference types="cypress" />

import * as targets from '../targets/targets'

// Elements
const indexPageTitle = 'Testers Hotel'
const createRoomBtn = 'h2 > .btn'
const returnBtn = ':nth-child(3) > .btn'



//  Actions
function CheckTitleAndHeader(cy){
    cy.contains('Rooms')
    cy.title().should('eq', indexPageTitle)
}

// Create new Room
function NavigateToCreateNewRoom(cy){
    cy.get(createRoomBtn).click()
}

function NavigateBack(cy){
    cy.get(returnBtn).click()    
}

function CheckNewRoom(cy){
    cy.contains('Floor 11, Room 12')
}

// Exports
module.exports = {
    NavigateBack, NavigateToCreateNewRoom, CheckTitleAndHeader,CheckNewRoom
}