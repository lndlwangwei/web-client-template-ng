pipeline {
  agent { label '37test' }
  stages {
    stage('build') {
      steps {
        sh 'npm install'
//        archiveArtifacts '**/target/*.jar'
      }
    }
  }
}
