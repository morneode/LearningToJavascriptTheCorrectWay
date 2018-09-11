# LearningToJavascriptTheCorrectWay

##For starting a project
npm init -y

## To run the project
npm run start-simple // this was defined in package.json

npm install --upgrade

## Tests
### Install development dependancies

npm install jest -D // install this with the flag which will remove this from the final release
npm install -D babel-jest babel-core // you can also add multiple deps

### Run a test

npm run all-tests // see package.json
npm run all-tests-continuously // see package.json

### Update a package
npm install jest --upgrade -D // upgrade a specific package
npm update //this will update the minor verion if there was a ^
