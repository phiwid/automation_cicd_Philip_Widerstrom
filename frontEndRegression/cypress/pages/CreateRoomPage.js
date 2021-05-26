/// <reference types="cypress" />

import * as targets from '../targets/targets'

// Elements
const indexPageTitle = 'Testers Hotel'
const categorySelect = ':nth-child(1) > select'
const numberField = ':nth-child(2) > input'
const floorField = ':nth-child(3) > input'
const availableCheckBox = '.checkbox'
const priceField = ':nth-child(5) > input'
const featureSelect = ':nth-child(6) > select'
const saveBtn = '.blue'
const returnBtn = '[href="/rooms"]'



//  Actions
function CheckTitleAndHeader(cy){    
    cy.title().should('eq', 'Testers Hotel')    
}

// Create new Room
function EnterRoomInormationAndSave(cy){
    cy.get(categorySelect).select('Double')
    cy.get(numberField).type('12')
    cy.get(floorField).type('11')
    cy.get(availableCheckBox).click()
    cy.get(priceField).type('1200')
    cy.get(featureSelect).select('Balcony')
    cy.get(saveBtn).click()

}

function NavigateBack(cy){
    cy.get(returnBtn).click()    
}

// Exports
module.exports = {
    EnterRoomInormationAndSave, CheckTitleAndHeader, NavigateBack
}