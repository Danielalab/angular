# Convirtiendo un aplicacion de angular en una PWA

- Ejecutar el siguiente comando a la altura del package.json de nuestro proyecto.

  `ng add @angular/pwa --project name-proyect`

  **Nota: Esto debe de agregar el archivo: manifest.json y ngsw-config.json, tambien debe de registrar el service worker en el app.module y actualizar tu index.html(agrega link a manifest.json y agrega el meta-tag theme-color)**

- Configurar la **start_url** donde se se alojará nuestro proyecto.

  `"start_url": "https://user-name.github.io/name-repository/"`

  **Nota: si deseas probarlo en tu local colocar localhost:8080 como start_url**

- Configurar el service worker(ngsw-config.json), para guardar en cache las peticiones fecth, en este caso guardamos en cache todas las peticiones realializadas a la api de last.fm(Api de música):

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
  
  **Nota: Si utilizas firebase debes de colocar la url de tu base de datos**

  [Más info sobre datagroups](https://angular.io/guide/service-worker-config#datagroups)

- Pasar nuestro codigo para produccion:

  `ng build --prod`

- Por último, puedes verificar el uso del service worker en tu local abriendo un servidor en produccion:

  `http-server -p 8080 -c-1 dist/name-proyect`

  **Nota: Puedes probar corriendo los audits**
