# Portafolio Frontend

Aplicación web que presenta un currículum profesional de forma dinámica. Está construida con Angular y Tailwind CSS, y toma toda su información desde un archivo JSON local, por lo que no requiere backend.

## Requisitos

- Node.js 20.19+ o 22.12+
- npm 11+

## Instalación

```bash
npm install
```

## Servidor de desarrollo

```bash
npm start
```

La aplicación estará disponible en `http://localhost:4200/` y se recargará automáticamente al modificar los archivos fuente.

## Build

```bash
npm run build
```

Los artefactos de producción se generan en `dist/portafolio-frontend/browser`.

## Pruebas

```bash
npm test
```

## Estructura del proyecto

```text
src/
  app/
    features/cv/
      components/   Componentes de cada sección del CV
      interfaces/   Tipos del modelo de datos
      services/     Carga del JSON del CV
      utils/        Utilidades compartidas
    pages/
      home-page/    Página principal
  public/
    _headers        Cabeceras de seguridad para el hosting
    assets/
      data/cv.json  Contenido del currículum
      images/       Imágenes
```

## Datos del currículum

El contenido se obtiene desde `public/assets/data/cv.json` al iniciar la aplicación. Las secciones disponibles son:

- `profile`: datos generales y presentación.
- `contact`: medios de contacto.
- `education`: formación académica.
- `categorySkill`: competencias técnicas agrupadas por categoría.
- `experience`: experiencia profesional.
- `projectSkill`: proyectos y tecnologías utilizadas.
- `additionalSkill`: conocimientos adicionales.
- `other`: información complementaria.

Para actualizar el contenido, basta con editar ese archivo respetando las interfaces definidas en `src/app/features/cv/interfaces`.

## Despliegue

El archivo `public/_headers` define cabeceras de seguridad y se copia automáticamente a la raíz del build. Es compatible con hostings estáticos que soportan este formato, como Cloudflare Pages o Netlify.
