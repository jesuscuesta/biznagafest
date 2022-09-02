# Biznagafest

Taller de Microfrontend para el evento [Biznagafest](https://devfest.gdgmalaga.dev/) 2022.

## Que pondremos

- Tipos de microfrontends
  - Iframe
  - Angular Applications
  - Angular Element, con módulo o standalone components?
  - Por CDN
  - Por packaje.json
  - Module Federation

Ejemplo de despliegue con Travis
¿Poner diferentes tipos de despliegues?

Hacer PPT

- basada en mi anterior charla de microfrontend
- poner otros casos que no usaremos

## Consejos

Para crear un nuevo módulo usar:

´ng new iframe --routing --prefix=micro´

## Pasos

- Creamos proyecto angular

- Instalamos [compodoc](https://compodoc.app/): ´ng add @compodoc/compodoc´
Este nos creará el archivo tsconfig.doc.json.
Ejecutamos el comando
Añadimos a gitignore, que no coja documentación

## Módulo

- Creamos un modulo de ejemplo sin lazy loading

## Iframe

- Creamos el proyecto de iframe, y explicamos

## Angular Application básico

- Creamos un proyecto de angular application con lazy loading
`ng g app pokemon --routing --prefix=micro`
Le creamos un componente, para añadirle routing
`ng g c shared/charmander --project=pokemon`
Lo enlazamos con el routing y lazy loading

## Submodules

- Creamos proyecto angular application, lazy loading y .submodules
Necesitamos crear primero otra application en nuestro proyecto
`ng g app digimon --routing --prefix=micro`
Creamos un componente, para añadir routing con contenido
`ng g c shared/agumon --project=digimon`
Añadimos la configuración de routing
Añadimos los comandos al package.json


- Creamos un nuevo repositorio
- Movemos el proyecto
- Lo metemos en una carpeta projects
- Añadimos un submodulo clonando el proyecto
`git submodule add -b master https://github.com/jesuscuesta/biznaga-digimon.git`

Otros comandos de .submodules
pull all changes in the repo including changes in the submodules
`git pull --recurse-submodules`

pull all changes for the submodules
`git submodule update --remote`

- Inicializamos el submodule
git submodule init
Posteriormente nos llevamos el contenido a un nuevo repositorio
Utilizamos la funcionalidad de .submodules, para añadir el contenido y la versión
PONER LOS COMANDOS Y DEL GIT

SIGUIENTES PASOS MODULE FEDERATION

- Derivar a angular element al otro proyecto

- Añadir configuración module federation proyecto angular

- Añadir proyecto otra tecnología

## Module federation


## Secciones

Para las secciones, las iremos conectando con lazy loading, para aislar mejor las diferentes aplicaciones.

### Iframe

Las ventajas que nos proporcionaría el Iframe, es que podremos conectar tanto aplicaciones nuevas y antiguas, con independencia
de las versiones y el tipo de librería y/o framework que tuviese.

Esta solución, aunque era la usada mayoritariamente antes del 2017, actualmente suele estar desaconsejada en la mayoría de los casos.

## [Compodoc](https://compodoc.app/)

Una vez instalada la dependencia, podremos ejectuar los comandos:
`npm run compodoc: build` Con este comando, generaríamos la documentación

`npm run compodoc:serve` Con este comando, levantaremos el servidor, para ver la documentación.

## Technical

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

## Development server

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
