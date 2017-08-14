# DemoSiteAngular
Sitio para probar el desarrollo de aplicación Angular, hospedadas en GithubPages, utilizando base de datos FireBase.

## Cómo ejecutar?
Se debe instalar Angular CLI
npm install -g angular-cli

Ejecutar
ng serve -o

Librerías y herramientas:

- https://daneden.github.io/animate.css/
- https://firebase.google.com/pricing/
- https://console.firebase.google.com/project/demoappangular/database/data/
- http-server
- https://codepen.io/Klerith/pen/RZpwKm



**Firebase:**
npm install -g firebase-tools
firebase login
firebase init
Add your static files to your deploy directory (the default is public)
firebase deploy

*Compilar local o firebase hosting*
ng build --prod --base-href "file:///C:/Develop/Node/DemoAngularGithubPages/DemoSiteAngular/portafolio/dist/"  --deploy-url "
file:///C:/Develop/Node/DemoAngularGithubPages/DemoSiteAngular/portafolio/dist/"

npm install http-server -g

ng build --env=prod --prod


http://shermandigital.com/blog/deploy-an-angular-cli-application-to-github-pages/
http://shermandigital.com/blog/fix-404-errors-from-angular-projects-hosted-on-github-pages/