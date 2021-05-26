// Fetch client
function fetchClient(cy, userID){
    cy.authenticateSession().then(response =>{
    cy.request({
        method : "GET",
        url : 'http://localhost:3000/api/client/' + userID,
        headers : {
            'X-User-Auth' : JSON.stringify(Cypress.env().loginToken),
            'Content-Type': 'application/json'
        },

    }).then((response => {
        const responseString = JSON.stringify(response) 
        cy.log(responseString)
    }))
    })
}

// Fetch clients. Check that we get status #200 back
function fetchClients(cy){
    cy.authenticateSession().then(response =>{
    cy.request({
        method : "GET",
        url : 'http://localhost:3000/api/clients',
        headers: {
            'X-User-Auth' : JSON.stringify(Cypress.env().loginToken),
            'Content-Type': 'application/json'
        },
    }).then((response => {
        expect(response.status).to.eq(200)
    }))
    })
}

// Create a new client and check that response are equal to input data
function createNewClient(cy, UserName, UserEmail, UserTelephoneNumber){

    cy.authenticateSession().then(response =>{
        const payload = {
            "name" : UserName,
            "email" : UserEmail,
            "telephone" : UserTelephoneNumber,
        }
       cy.request({
           method: "POST",
           url: "http://localhost:3000/api/client/new",
           headers : {
               "X-User-Auth" : JSON.stringify(Cypress.env().loginToken),
               "content-type" : "application/json"
           },
           body:payload
       }).then((response =>{
           // Check that status, name, email and telephone are equal to payload values
           expect(response.status).to.eq(200)
           expect(response.body.name).to.eq(payload.name)
           expect(response.body.email).to.eq(payload.email)
           expect(response.body.telephone).to.eq(payload.telephone)           
       }))      
    })
}  

// Edit exiting client
function editClient(cy, userID){
    
    // Create a payload variable
    cy.authenticateSession().then(response => {
        const payload = {
            "name" : "UpdatedUserName",
            "email" : "UpdatedEmail",
            "telephone" : "123 456 789",
        }

        // Get latest client
        cy.request({
            method : "GET",
            url : 'http://localhost:3000/api/clients',
            headers: {
                'X-User-Auth' : JSON.stringify(Cypress.env().loginToken),
                'Content-Type': 'application/json'
        }
        }).then(response => {
            
            //cy.log(response.body[response.body.length -1].id)
            // Store last ClientID as variable
            let lastID = response.body[response.body.length -1].id

            // Update user which was created last (Use payload-parameters)
            cy.request({
                method : "PUT",
                url : 'http://localhost:3000/api/client/' + lastID,
                headers : {
                    'X-User-Auth' : JSON.stringify(Cypress.env().loginToken),
                    'Content-Type': 'application/json'
                },
                body : {
                    "id": parseInt(lastID),
                    "name": payload.name,
                    "email": payload.email,
                    "telephone": payload.telephone,
                },
            }).then((response => {          
                expect(response.body.id).to.eq(lastID) 
                expect(response.body.name).to.eq(payload.name) 
                expect(response.body.email).to.eq(payload.email) 
                expect(response.body.telephone).to.eq(payload.telephone) 
            }))        
        })
        })    
}

// Delete client
function deleteLastClient(cy){
    cy.authenticateSession().then(response =>{
        cy.request({
            method : "GET",
            url : 'http://localhost:3000/api/clients',
            headers: {
                'X-User-Auth' : JSON.stringify(Cypress.env().loginToken),
                'Content-Type': 'application/json'
            }
        }).then(response => {
            cy.log(response.body[response.body.length -1].id)
            let lastID = response.body[response.body.length -1].id
            cy.request({
                method : "DELETE",
                url : 'http://localhost:3000/api/client/' + lastID,
                headers : {
                    'X-User-Auth' : JSON.stringify(Cypress.env().loginToken),
                    'Content-Type': 'application/json'
                },
        })
    }).then((response => {        
        const responseString = JSON.stringify(response.body)         
        expect(responseString).to.have.string('"ok":true') // Check if we OK response

    }))
    })
}



module.exports  = { 
   fetchClient, fetchClients, createNewClient, editClient, deleteLastClient
}
    