# RankingSongs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Notas sobre PWA

- ng add @angular/pwa --project name-proyect
- ng build --prod
- http-server -p 8080 -c-1 dist/name-proyect (abrir un servidor en produccion)

`Nota: probar los audits / offline`

- Colocar en el manifest.json `"start_url": "https://user-name.github.io/name-repository/"`
- Configurar el service worker(ngsw-config.json):
    "dataGroups": [
    {
      "name": "Last.fm API",
      "urls": [
        "https://ws.audioscrobbler.com/2.0/**"
      ],
      "cacheConfig": {
        "startegy": "freshness",
        "maxAge": "2h",
        "maxSize": 100,
        "timeout": "8s"
      }
    }
  ]