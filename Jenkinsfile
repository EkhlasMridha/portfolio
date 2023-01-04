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
                sh 'CI=false npm run build'
            }
        }
        stage('deploy'){
            steps{
                echo 'Deploying project'
                sh 'cp -rf build/. /var/www/html/portfolio'
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