pipeline {
    agent any
    stages {
        stage('Deploy/Build app') {
            steps {
                sh '''
                    echo 'Application deployed successfully'
                '''
            }
        }
        
         stage('Backend tests') {
            steps {
                sh '''
                    cd backend-tests/
                    npm install && npm run cypress:run
                    echo 'Publish test results'
                    pwd
                    ls -lart
                '''

                publishHTML([
                    allowMissing: false,
                     alwaysLinkToLastBuild: false,
                      keepAll: false, 
                      reportDir: 'backend-tests/mochawesome-report', 
                      reportFiles: 'mochawesome.html',
                       reportName: 'BackEnd Report', 
                       reportTitles: ''
                ])
            }
        }
        
         stage('FrontEnd tests') {
            steps {
                  sh '''
                    cd frontEndRegression/
                    npm install && npm run cypress:run
                    echo 'Publish test results'
                    pwd
                    ls -lart
                '''
                 publishHTML([
                    allowMissing: false,
                     alwaysLinkToLastBuild: false,
                      keepAll: false, 
                      reportDir: 'frontEndRegression/mochawesome-report', 
                      reportFiles: 'mochawesome.html',
                       reportName: 'FrontEnd Report', 
                       reportTitles: ''
                ])
                archiveArtifacts  allowEmptyArchive: true,  artifacts: 'frontEndRegression/cypress/videos/**'
            }
        }
        
             stage('Performance test') {
            steps {
                // sh '''
                //     jmeter -n -t login.logout.jmx -l test1.csv -e -0 html-reports/
                // '''
            }
        }
    }
}