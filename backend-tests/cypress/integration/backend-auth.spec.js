///// <reference types="cypress" />

import * as clientHelper from '../helpers/clientHelpers'

const LOGIN_URL = 'http://localhost:3000/api/login'

describe('Testing suite', function(){

    it('#1 - Fetch clients', function(){        
        clientHelper.fetchClients(cy)
        cy.logoutSession(cy)
    })
  
    it('#2 - Create new client', function(){
        clientHelper.createNewClient(cy, "TestName", "TesterEmail@test.com", "123 123 123")
        cy.logoutSession(cy)
    })

    it("#3 - Edit existing client", function(){
        clientHelper.createNewClient(cy, "EditTestName", "EditTesterEmail@test.com", "1337 1337")
        clientHelper.editClient(cy)  
        cy.logoutSession(cy)
    })

    it("#4 - Delete existing client", function(){
        clientHelper.createNewClient(cy, "DeleteTestName", "DeleteTesterEmail@test.com", "444 555 666")
        clientHelper.deleteLastClient(cy)
        cy.logoutSession(cy)

    })
})
