pipeline {
    agent {
        docker {
            image 'node:16'
            args '-p 7000:7000'
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
                }

                dir('./client') {
                    sh "docker exec -it client npm run build"
                }
            }
        }
    }
}