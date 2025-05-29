pipeline {
  agent any

  tools {
    nodejs 'NodeJS_24'  // Make sure this is configured in Jenkins Global Tools
  }

  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
  }
}
