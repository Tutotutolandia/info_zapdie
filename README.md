# 🛡️ La Tríada de la Ciberseguridad (info_zapdie)

Una infografía web interactiva diseñada para enseñar los conceptos fundamentales de la ciberseguridad (Confidencialidad, Integridad y Disponibilidad) a personas sin conocimientos técnicos previos.

El proyecto utiliza analogías de la vida cotidiana para hacer que los conceptos abstractos sean fáciles de entender y recordar.

## ✨ Características

- **Diseño Interactivo:** Tarjetas clickeables que revelan información detallada de cada pilar de la ciberseguridad.
- **Enfoque Educativo:** Explicaciones divididas en dos contextos: "En la vida real" (analogías sencillas) y "En el mundo digital" (aplicación técnica).
- **Totalmente Responsivo:** Se adapta perfectamente a dispositivos móviles, tablets y pantallas de escritorio.
- **Rendimiento Óptimo:** Construido con Vite para una carga ultrarrápida.

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca principal para la interfaz de usuario.
- **Vite** - Herramienta de construcción y entorno de desarrollo (Bundler).
- **CSS3 Puro** - Estilos personalizados con Flexbox, CSS Grid y animaciones sin depender de frameworks externos.
- **Lucide React** - Biblioteca de iconos modernos y ligeros.

## 🚀 Instalación y Uso Local

Sigue estos pasos para correr el proyecto en tu computadora:

1. **Clona el repositorio** (si ya lo tienes en GitHub) o ingresa a la carpeta del proyecto:
   ```bash
   cd info_zapdie
   ```

2. **Instala las dependencias** necesarias (asegúrate de tener [Node.js](https://nodejs.org/) instalado):
   ```bash
   npm install
   ```
   *Nota: Esto instalará `react`, `react-dom` y `lucide-react`.*

3. **Inicia el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

4. **Abre tu navegador**:
   El terminal te mostrará un enlace (generalmente `http://localhost:5173`). Haz clic en él para ver la aplicación funcionando.

## ☁️ Despliegue en Vercel

Este proyecto está optimizado para ser desplegado fácilmente en **Vercel**:

1. Sube tu proyecto a un repositorio en GitHub, GitLab o Bitbucket.
2. Inicia sesión en [Vercel](https://vercel.com/) y haz clic en "Add New..." > "Project".
3. Importa tu repositorio.
4. Vercel detectará automáticamente que es un proyecto **Vite**. La configuración por defecto funcionará perfectamente:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Haz clic en **Deploy**. ¡En menos de un minuto tu sitio estará en vivo!
