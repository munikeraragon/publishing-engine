pipeline {
    agent {
        docker {
            image 'node:lts-buster-slim'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Build') {
            steps {
                dir('./server') {
                    sh 'npm install'
                    sh 'npm build'
                }

                dir('./client') {
                    sh 'npm install'
                    sh 'npm build'
                }
            }
        }
        stage('Deploy') {
            steps {
                sh"""
                

                """
            }
        }
    }
}