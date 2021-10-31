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
                    sh "rm -rf /codegrow/server/dist"
                    sh "cp -r /var/jenkins_home/workspace/codegrow/server/dist /codegrow/server/dist"
                }

                dir('./client') {
                    sh "rm -rf /codegrow/client/.next"
                    sh "cp -r /var/jenkins_home/workspace/codegrow/client/.next /codegrow/client/.next"
                }
            }
        }
    }
}