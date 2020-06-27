const path = require('path');
const AWS = require('aws-sdk');
AWS.config.loadFromPath(
    path_join(__dirname, 'config', 'awsConfig.json')
)
//AWS 보안 자격정보를 담은 json 파일을 path 모듈로 연결
