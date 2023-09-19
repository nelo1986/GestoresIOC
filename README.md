Instrucciones para el despliegue de un entorno de desarrollo básico para NodeJs (ExpressJs), MySql y Adminer usando docker-compose.

Se desplegarán 3 contenedores:
- Base de datos MySQL
- Adminer (para administrar la base de datos)
- app (aplicacion basica de NodeJs con EspressJs)



## Instrucciones de instalación


0. Dependiendo de nuestro procesador (x86 o arm64), tendremos descomentar las siguientes lineas


```js
//fichero Dockerfile
ARG PLATFORM=amd64 (Descomentar esta línea para Windows)
ARG PLATFORM=arm64v8 (Descomentar esta línea para Mac con procesador Apple Silicon)
```


```js
//fichero.env
BUILDPLATFORM=amd64 (Descomentar esta línea para Windows)
BUILDPLATFORM=arm64v8 (Descomentar esta línea para Mac con procesador Apple Silicon)
````

1. Nos movemos al directorio local donde queremos desplegar el entorno.
2. Clonamos el repositorio con los archivos con ```git clone```.
3. Ejecutamos el script *update_and_run.sh/bat* (renombrar con la extensión que corresponda en Linux/Mac o Windows).

Debemos lanzar este script cada vez que vayamos a trabajar con el proyecto. Básicamente, se hará un pull y se levantarán los conetenedores.

```bash
#update_and_run.sh
echo "Moviendo a carpeta del proyecto"
cd "./GestoresIOC"
echo "Actualizando repositorio local"
git pull origin main
docker-compose down
echo "Creando imagen y levantando contenedor"
docker-compose up --build -d 
```


Podremos acceder a los mismos desde nuestra máquina local en los siguientes puertos:

**Adminer:** ```http://localhost:8080```

**app:** ```http://localhost:3000```

Al levantarse el contenedor de MySQL se crea una base de datos llamada ```gestores```, una tabla llamada ```recipes```` y se insertan 50 registros de prueba.

Los datos para acceder a la base de datos desde Adminer son:


- **System:**	MySQL
- **Server:**	host.docker.internal
- **Username:** gestor
- **Password:** ioc
- **Database:** gestores

>>>>>>> 8d820a0 (first commit)
