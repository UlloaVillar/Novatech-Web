# Novatech - Sitio Web de Automatización

## 🚀 Despliegue en Producción

### **Opción 1: Netlify (Recomendada - GRATIS)**

1. **Crear cuenta en Netlify**:
   - Ve a [netlify.com](https://netlify.com)
   - Regístrate con tu cuenta de GitHub

2. **Subir el proyecto**:
   - Haz clic en "New site from Git"
   - Conecta tu repositorio de GitHub
   - Selecciona la rama `main`
   - Build command: (dejar vacío)
   - Publish directory: `.` (punto)

3. **Configurar dominio**:
   - Netlify te dará una URL temporal
   - Puedes conectar tu dominio personalizado después

### **Opción 2: Vercel (GRATIS)**

1. **Crear cuenta en Vercel**:
   - Ve a [vercel.com](https://vercel.com)
   - Conecta tu cuenta de GitHub

2. **Desplegar**:
   - Haz clic en "New Project"
   - Importa tu repositorio
   - Framework Preset: Other
   - Build Command: (dejar vacío)
   - Output Directory: `.`

### **Opción 3: GitHub Pages + Cloudflare (GRATIS)**

1. **Habilitar GitHub Pages**:
   - Ve a Settings → Pages
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)

2. **Configurar Cloudflare**:
   - Crea cuenta en [cloudflare.com](https://cloudflare.com)
   - Añade tu dominio
   - Configura los nameservers

## 📁 Estructura del Proyecto

```
/
├── index.html              # Página principal
├── index-landing.html      # Landing page B2B
├── css/
│   └── styles.css         # Estilos personalizados
├── js/
│   └── main.js            # JavaScript principal
├── images/
│   ├── Group-8.png        # Logo transparente
│   ├── Group-9.png        # Logo sólido
│   ├── hero-1.png         # Imagen hero 1
│   ├── hero-2.png         # Imagen hero 2
│   └── hero-3.png         # Imagen hero 3
└── videos/
    ├── excelvideo.mp4      # Video Excel
    ├── emailvideo.mp4      # Video Email
    └── Automaticreport.mp4 # Video Informes
```

## 🎯 Características

- ✅ **Navbar dinámico** con cambio de logo según scroll
- ✅ **Videos automáticos** en tabs principales
- ✅ **Sistema de tabs** interactivo
- ✅ **Diseño responsive** con Tailwind CSS
- ✅ **SEO optimizado** con metadatos completos
- ✅ **Favicon personalizado** con Group-9.png

## 🔧 Configuración

### **Favicon y Metadatos**
- Favicon: `images/Group-9.png`
- Título: "Novatech | Automatización Inteligente para Empresas"
- Descripción: Optimizada para SEO y redes sociales

### **Videos**
- **Excel**: `videos/excelvideo.mp4`
- **Email**: `videos/emailvideo.mp4`
- **Informes**: `videos/Automaticreport.mp4`

## 📱 Responsive Design

- **Mobile-first** con Tailwind CSS
- **Breakpoints**: sm, md, lg, xl
- **Grid system** adaptativo
- **Imágenes y videos** optimizados para móvil

## 🚀 Performance

- **Videos precargados** con `preload="auto"`
- **Imágenes optimizadas** con `object-fit: cover`
- **CSS minificado** (Tailwind CDN)
- **JavaScript optimizado** para carga rápida

## 🔗 Enlaces Importantes

- **Página principal**: `index.html`
- **Landing B2B**: `index-landing.html`
- **Estilos**: `css/styles.css`
- **JavaScript**: `js/main.js`

## 📞 Soporte

Para cualquier problema o consulta sobre el despliegue, revisa la documentación de la plataforma elegida o contacta con el equipo de desarrollo. 