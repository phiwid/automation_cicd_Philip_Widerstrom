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
describe('Regression Test suite', function(){

    // Start each test by loading the base url and check the title
    beforeEach(() => {
        cy.visit(targets.url)
        indexFuncs.checkTitleOfIndexPage(cy)
    })

    it('#1 Login & log out with existing user', function(){      
        // Login with existing user  
        indexFuncs.loginWithValidUser(cy)
        // Controll existing header and title
        dashboardFuncs.checkTitleAndHeader(cy)
        // Logout
        dashboardFuncs.Logout(cy)
        // Controll existing header and title
        indexFuncs.checkTitleOfIndexPage(cy)                
    })

    it('#2 Create new client', function(){       
        // Login with existing user   
        indexFuncs.loginWithValidUser(cy)
        // Controll existing header and title
        dashboardFuncs.checkTitleAndHeader(cy)    
        // Navigate to Client page && check title and header
        dashboardFuncs.NavigateToClients(cy)
        clientFuncs.CheckTitleAndHeader(cy)    
        // Navigate to create new client and check title and header
        clientFuncs.NavigateToCreateClient(cy)
        createClientFuncs.CheckTitleAndHeader(cy)
        // Create new Client and assert that we get back to client page after creation
        createClientFuncs.CreateAndSaveNewClient(cy)
        clientFuncs.CheckTitleAndHeader(cy)
        // Navigate back to dashboard and logout
        clientFuncs.NavigateBack(cy)
        dashboardFuncs.Logout(cy)
        indexFuncs.checkTitleOfIndexPage(cy)   
    })
    it('#3 Create new room' , function(){        
        indexFuncs.loginWithValidUser(cy)
        dashboardFuncs.checkTitleAndHeader(cy)
        dashboardFuncs.NavigateToRooms(cy)
        roomFuncs.CheckTitleAndHeader(cy) 
        roomFuncs.NavigateToCreateNewRoom(cy)
        createRoomFuncs.EnterRoomInormationAndSave(cy)
        roomFuncs.CheckNewRoom(cy)      
        roomFuncs.NavigateBack(cy)
        dashboardFuncs.Logout(cy)  
    })
    it('#4 Create new bill' , function(){        
        indexFuncs.loginWithValidUser(cy)
        dashboardFuncs.checkTitleAndHeader(cy)
        dashboardFuncs.NavigateToBills(cy)
        billsFuncs.CheckTitleAndHeader(cy) 
        billsFuncs.NavigateToCreateNewBill(cy)
        createBillFuncs.CreateNewBills(cy)
        billsFuncs.CheckNewBill(cy)  
        billsFuncs.NavigateBack(cy)
        dashboardFuncs.Logout(cy)      
    })
    it('#5 Navigate through the application' , function(){        
        indexFuncs.loginWithValidUser(cy)
        dashboardFuncs.checkTitleAndHeader(cy)
        dashboardFuncs.NavigateToRooms(cy)
        roomFuncs.CheckTitleAndHeader(cy)
        roomFuncs.NavigateBack(cy)
        dashboardFuncs.checkTitleAndHeader(cy)
        dashboardFuncs.NavigateToClients(cy)
        clientFuncs.CheckTitleAndHeader(cy)
        clientFuncs.NavigateBack(cy)
        dashboardFuncs.checkTitleAndHeader(cy)
        dashboardFuncs.NavigateToBills(cy)
        billsFuncs.CheckTitleAndHeader(cy)
        billsFuncs.NavigateBack(cy)
        dashboardFuncs.checkTitleAndHeader(cy)
        dashboardFuncs.NavigateToReservations(cy)
        reservationFuncs.CheckTitleAndHeader(cy)
        reservationFuncs.NavigateBack(cy)
        dashboardFuncs.checkTitleAndHeader(cy)
        dashboardFuncs.Logout(cy)
          
    })

})
