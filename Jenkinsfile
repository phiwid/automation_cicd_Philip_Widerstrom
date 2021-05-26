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
                sh '''
                    cd performance-tests/
                    rm test1.csv -Rf
                    rm html-reports/ -Rf
                    jmeter -n -t login-logout.jmx -l test1.csv -e -o html-reports/
                '''
                publishHTML([
                    allowMissing: false,
                     alwaysLinkToLastBuild: false,
                      keepAll: false, 
                      reportDir: 'performance-tests/html-reports', 
                      reportFiles: 'index.html',
                       reportName: 'Performance Report', 
                       reportTitles: ''
                ])
                
            }
        }
    }
}