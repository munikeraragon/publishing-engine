pipeline {
    agent {
        node {
            label 'nodeagent'
        }
    }
    stages {
        stage('Build') {
            steps {
                dir('./server') {
                    sh 'npm install'
                    sh 'npm run build'
                }

                dir('./client') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }
        stage('Deploy') {
            steps {
                dir('./server') {
                    sh "docker exec -it server npm run build"
                    sh "docker restart client"
                }

                dir('./client') {
                    sh "docker exec -it client npm run build"
                    sh "docker restart server"
                }
            }
        }
    }
}