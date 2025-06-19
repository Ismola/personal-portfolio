# Personal Portfolio 🚀

¡Bienvenido/a al repositorio **Personal Portfolio**!  
Este proyecto es un portafolio personal desarrollado para mostrar tus habilidades, proyectos y experiencia profesional de manera atractiva y moderna.

---

## 📦 Estructura del proyecto

```plaintext
.
├── .devcontainer/           # Configuración para entorno de desarrollo remoto
├── .github/                 # Workflows y configuraciones de GitHub
│   └── instructions/        # Instrucciones personalizadas para Copilot
├── src/                     # Código fuente principal del portafolio
│   ├── pages/               # Páginas Astro
│   └── styles/              # Estilos globales
├── public/                  # Archivos estáticos públicos (favicon, etc.)
├── package.json             # Dependencias y scripts de Node.js
├── tsconfig.json            # Configuración de TypeScript
├── astro.config.mjs         # Configuración de Astro
├── docker-compose.yml       # Orquestación de contenedores Docker
├── Dockerfile               # Imagen base para despliegue
├── nginx.conf, nginx.*      # Configuración de Nginx
└── README.md                # Este archivo
```

---

## 🛠️ ¿Qué hace este proyecto?

- Presenta tu perfil profesional, habilidades y proyectos destacados.
- Permite personalización sencilla de contenido y estilos.
- Optimizado para despliegue en la web y fácil mantenimiento.

---

## 🚀 Cómo iniciar el proyecto


1. **Instala las dependencias:**
   ```bash
   npm install
   ```

2. **Inicia el entorno de desarrollo:**
   ```bash
   npm run dev
   ```

3. **Abre tu navegador en** [http://localhost:4321](http://localhost:4321) **para ver el portafolio.**

---

## 🐳 Uso con Docker Compose

Puedes levantar el entorno completo usando Docker Compose:

```bash
docker compose up --build
```

Esto construirá la imagen y levantará el contenedor en el puerto `4321`.

> Si necesitas desplegar en la nube, consulta el archivo `README.Docker.md` para instrucciones detalladas sobre build y push de imágenes.

---

## 🖥️ Entorno de desarrollo remoto (Devcontainer)

Este proyecto incluye configuración para [Dev Containers](https://code.visualstudio.com/docs/devcontainers/containers).  
Puedes abrir el proyecto en VS Code usando la extensión **Remote - Containers** para un entorno de desarrollo listo para usar.

**Pasos:**
1. Abre VS Code.
2. Presiona `F1` y selecciona `Remote-Containers: Open Folder in Container...`.
3. Selecciona la carpeta del proyecto.

Esto instalará automáticamente dependencias y ejecutará comandos post-instalación definidos en `.devcontainer/devcontainer.json`.

---

## 📜 Scripts disponibles (`package.json`)

| Script      | Descripción                                 |
|-------------|---------------------------------------------|
| `dev`       | Inicia el servidor de desarrollo            |
| `build`     | Compila el proyecto para producción         |
| `preview`   | Previsualiza el build en modo local         |
| `astro`     | Ejecuta comandos directos de Astro          |

Ejemplo de uso:
```bash
npm run build
npm run preview
```

---

## 📚 Dependencias principales

- **Astro** para desarrollo web moderno.
- **TailwindCSS** para estilos utilitarios.
- **TypeScript** para tipado estático.
- **ESLint** para mantener la calidad y estilo del código.

---

## 💡 Notas adicionales

- Personaliza el contenido editando los archivos en la carpeta `src/`.
- Para agregar nuevos proyectos o secciones, sigue la estructura y ejemplos existentes.

---

## 📄 Licencia

Incluye aquí la licencia del proyecto si aplica.

---

> ¡No dudes en contribuir o reportar issues!  
> Hecho con ❤️ y tecnología moderna.
