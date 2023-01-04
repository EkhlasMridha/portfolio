pipeline{
    agent any
   stages{
        stage('initialize'){
            steps{
                script {
                    properties([pipelineTriggers([pollSCM('')])])
            }
            }
        }
        stage('package'){
            steps{
                echo 'Installing packages'
                sh 'npm install'
            }
        }
        stage('build'){
            steps{
                echo 'Building project'
                sh 'npm run build'
            }
        }
        stage('deploy'){
            steps{
                echo 'Deploying project'
                sh 'cp -r /var/lib/jenkins/workspace/first-jenkin/dist/rootline-basic /var/www/html'
            }
        }
    }
    post{
        always{
            echo "========always========"
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}