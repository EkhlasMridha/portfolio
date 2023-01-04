pipeline{
    agent{
        label "node"
    }
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
                nodejs('NodeJS'){
                    sh 'npm install'
                }
            }
        }
        stage('build'){
            steps{
                echo 'Building project'
                nodejs('NodeJS'){
                    sh 'npm run-script build'
                }
            }
        }
        stage('deploy'){
            steps{
                echo 'Deploying project'
                nodejs('NodeJS'){
                    sh 'cp -r /var/lib/jenkins/workspace/jenkins-git_master/dist/rootline-basic /var/www/html'
                }
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