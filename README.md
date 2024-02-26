# NgUIChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Start Code

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Approach
- import seed project and create new github repo https://github.com/official-av/ng-16-seed - done
- switch to scss - done
- create mock-data file with tariffs array
- create mock service and add tests
- implement mock service to return the tariffs mock data async and add sort implementation
- create components and add tests
- implement tariff-row component with presentation UI and tariff input
- implement tariff-list component with container UI, list of tariff-row and sorting using tariff-sort component
- implement tariff-sort component with presentation UI and events to do sort by criteria + by asc/desc
- adjust styles to make mobile, tablet friendly
- optimisations + misc

# Decisions
- why use angular 16 standalone app: becuase it's performant and backward compatible (LTS till Nov2024)
- why use esbuild: faster DX, faster builds
- why test-driven development: good for design driven development and helps with automated tests to ensure quality code
- why presentation/container component: Single responsibility Principle helps to Keep things Simple (KISS) and not repeat code (DRY)
