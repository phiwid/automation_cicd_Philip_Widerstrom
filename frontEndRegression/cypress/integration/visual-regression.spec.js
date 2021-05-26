/// <reference types="cypress" />

import * as indexFuncs from '../pages/IndexPage'
import * as dashboardFuncs from '../pages/DashboardPage'
import * as clientFuncs from '../pages/ClientPage'
import * as createClientFuncs from '../pages/CreateClientPage'
import * as targets from '../targets/targets'
import * as roomFuncs from '../pages/RoomPage'
import * as createRoomFuncs from '../pages/CreateRoomPage'
import * as billsFuncs from '../pages/BillsPage'
import * as createBillFuncs from '../pages/CreateBillPage'
import * as reservationFuncs from '../pages/ReservationsPage'



// Test Suite 
describe('Test suite - Visual regression', function(){

    // Start each test by loading the base url and check the title
    beforeEach(() => {
        cy.visit(targets.url)
        indexFuncs.checkTitleOfIndexPage(cy)
    })

    it('#1 Login & log out with existing user', function(){        
        cy.percySnapshot('LoginPage')
        indexFuncs.loginWithValidUser(cy)    

        dashboardFuncs.checkTitleAndHeader(cy)
        cy.percySnapshot('DashboardPage')
       
        dashboardFuncs.NavigateToRooms(cy)
        roomFuncs.NavigateToCreateNewRoom(cy)

        cy.percySnapshot('CreateNewRoom')
        createRoomFuncs.NavigateBack(cy)        
        roomFuncs.NavigateBack(cy)

        dashboardFuncs.NavigateToClients(cy)
        clientFuncs.NavigateToCreateClient(cy)
        cy.percySnapshot('CreateNewClient')
        createClientFuncs.NavigateBack(cy)
        clientFuncs.NavigateBack(cy)

        dashboardFuncs.Logout(cy) 
        cy.wait(1000);
        cy.percySnapshot('LogOut')    
    })
 })