#Sharem

##Setup

This project is using [Docker](https://docs.docker.com/), to be precise `docker-compose` to run everything.
Before using it:

1. Install docker, please follow the installation process from [docker website](https://www.docker.com/products/overview)
2. After installing docker please clone the repo into your machine `git clone https://github.com/FottyM/sharem_frontend.git`
3. `cd ` into the application root folder then run `dock-compose up -d` to run it in daemon mode or just `docker-compose up` in this case you'll have to open another terminal window to run other commands.
4. Visit `localhost:4200` and the app should be up and running.

## Development 

## Version control
 
 1. first pull the latest changes from the remote `git pull origin staging`
 2. create a new branch with the feature name and issue number `git checkout -b Feature#IssueNumber_ISSUE_NAME` same goes for bug fixes 
 3. after the work is done, please commit and don't forget to add the issue number in the commit message `git commit -m '#ISSUE_NUMBER commit message'`
 4. create a pull request to _'staging'_
 
## Angular 2 CLI commands 

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.22-1.
Since this project runs into a docker container before each set of command listed down here, please make sure you type this command before `docker-compose run web` followed but the respective command.

Example: `docker-compose run web ng generate component component-name `

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

### Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

