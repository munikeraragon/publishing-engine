pipeline {
    agent {
        docker {
            image 'node:lts-buster-slim'
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
                    sh "chown --reference=/codegrow/server/dist /var/jenkins_home/workspace/codegrow/server/dist"
                    sh "rm -rf /codegrow/server/dist"
                    sh "cp -r /var/jenkins_home/workspace/codegrow/server/dist /codegrow/server/dist"
                }

                dir('./client') {
                    sh "chown --reference=/codegrow/client/.next /var/jenkins_home/workspace/codegrow/client/.next"
                    sh "rm -rf /codegrow/client/.next"
                    sh "cp -r /var/jenkins_home/workspace/codegrow/client/.next /codegrow/client/.next"
                }
            }
        }
    }
}