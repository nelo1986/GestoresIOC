# Despliegue de un entorno de eesarrollo con Node.js (Express.js), MySQL y Adminer usando Docker-Compose

Este proyecto permite desplegar un entorno de desarrollo que consta de tres contenedores:

- **MySQL:** Base de datos
- **Adminer:** Herramienta para administración de la base de datos
- **app:** Aplicación básica usando Node.js con Express.js

## Tabla de Contenidos

1. [Instrucciones de instalación](#instrucciones-de-instalación)
2. [Uso](#uso)
3. [Acceso a los servicios](#acceso-a-los-servicios)
4. [Nota importante](#nota-importante)

## Instrucciones de instalación

### Preparación

Dependiendo de la arquitectura de tu procesador (x86 o arm64), tendrás que descomentar las líneas correspondientes en los ficheros `Dockerfile` y `.env`.

- **Dockerfile**

    ```dockerfile
    # ARG PLATFORM=amd64 # Descomentar para Windows, Linux o Mac con Intel
    # ARG PLATFORM=arm64v8 # Descomentar para Mac con procesador Apple Silicon
    ```

- **.env**

    ```dotenv
    # BUILDPLATFORM=amd64 # Descomentar para Windows, Linux o Mac con Intel
    # BUILDPLATFORM=arm64v8 # Descomentar para Mac con procesador Apple Silicon
    ```

### Pasos de Instalación

1. **Muévete** al directorio local donde deseas desplegar el entorno.
2. **Clona** este repositorio:

    ```bash
    git clone [URL_DEL_REPOSITORIO]
    ```

3. **Ejecuta** el script `update_and_run.sh` (en Linux/Mac) o `update_and_run.bat` (en Windows):

    ```bash
    ./update_and_run.sh  # o update_and_run.bat en Windows
    ```

Este script actualizará el repositorio local, detendrá los contenedores si están ejecutándose, construirá la imagen y levantará los contenedores.

## Uso

Es necesario ejecutar el script `update_and_run.sh` (o `.bat`) cada vez que trabajemos en el proyecto. Este script se encarga de actualizar el repositorio y levantar los contenedores.

```bash
# fichero update_and_run.sh
git pull origin main
docker-compose down
docker-compose up --build -d 
```

## Acceso a los servicios

Para acceder a los servicios, sigue las siguientes URLs desde tu navegador:

- **Adminer**: [http://localhost:8080](http://localhost:8080)
- **app**: [http://localhost:3000](http://localhost:3000)

### Datos para Adminer

Para acceder a la base de datos mediante Adminer, utiliza los siguientes datos:

- **System**: MySQL
- **Server**: host.docker.internal
- **Username**: gestor
- **Password**: ioc
- **Database**: gestores

## Nota Importante

Dentro del contenedor `app` se ejecuta el proceso `nodemon`. Si instalas un nuevo módulo o agregas nuevos directorios será necesario ejecutar los siguientes comandos para reiniciar el contenedor:

```bash
docker-compose down
docker-compose up --build -d 
