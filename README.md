# Alyna Capital - Website

Sitio web corporativo para Alyna Capital, especialistas en financiación no dilutiva de la UE y operaciones M&A para PYMEs.

## Descripción

Web institucional de alto impacto visual que transmite profesionalidad, confianza y expertise en el sector financiero. Diseñada con arquitectura geométrica, efectos visuales avanzados y una paleta de colores corporativa elegante.

## Características Principales

### Diseño Visual
- **Hero Section** con geometrías arquitectónicas (pilares, líneas, marcos, escultura)
- **Partículas flotantes** con efecto "constelación financiera"
- **Gradiente animado** con efecto de respiración sutil
- **Contadores animados** para estadísticas clave (€65M+, +120 proyectos, 85% éxito)
- **Navbar glassmorphism** estilo Luix con capsule design

### Efectos Interactivos
- Parallax multi-velocidad en scroll
- Animaciones de entrada dramáticas al cargar la página
- Mouse move parallax en elementos geométricos
- Botones magnéticos con efecto shine
- Navbar con transición suave

### Paleta de Colores
- **Verde corporativo**: `#6b9580` (sage green elegante)
- **Variaciones**: `#7ba897`, `#9ec4b3`, `#5a8270`
- **Background**: Ultra-dark blue-black gradient
- **Geometrías**: Off-white `rgba(245, 245, 240, ...)`

## Estructura del Proyecto

```
alyna-capital-web/
├── index.html          # Estructura HTML principal
├── styles.css          # Estilos CSS con gradientes y animaciones
├── script.js           # JavaScript para efectos interactivos
└── README.md           # Este archivo
```

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Gradientes complejos, animaciones, glassmorphism
- **JavaScript (Vanilla)**: Canvas API, Intersection Observer, efectos parallax
- **Canvas API**: Sistema de partículas flotantes
- **Responsive Design**: Adaptable a diferentes dispositivos

## Instalación

1. Clona el repositorio:
```bash
git clone <repository-url>
cd alyna-capital-web
```

2. Abre el archivo `index.html` en tu navegador preferido, o usa un servidor local:
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (http-server)
npx http-server
```

3. Accede a `http://localhost:8000` en tu navegador

## Secciones del Sitio

### 1. Hero Section
- Título principal con SEO optimizado
- Tagline descriptivo de servicios
- Estadísticas animadas (€65M obtenidos, +120 proyectos, 85% éxito)
- CTAs principales (Solicitar consulta, Conocer servicios)
- Efectos visuales: partículas, parallax, geometrías

### 2. Método Alyna
- Descripción del enfoque metodológico
- 3 pilares: Análisis profundo, Narrativa estratégica, Ejecución técnica
- Timeline visual del proceso

### 3. Servicios
- Fondos UE (I+D, Digitalización, Sostenibilidad)
- M&A Advisory (Due diligence, Valoración, Negociación)

### 4. Casos de Éxito
- Showcase de proyectos destacados
- Resultados medibles

### 5. Equipo
- Presentación del equipo ejecutivo
- Credenciales y experiencia

### 6. Contacto
- Formulario de contacto
- Información de contacto directo

## Efectos Visuales Implementados

### Nivel 1: Mejoras Visuales Inmediatas
1. **Partículas flotantes**: 60 partículas conectadas con líneas cuando están cerca
2. **Contadores animados**: Stats que cuentan desde 0 al valor final
3. **Gradiente animado**: Fondo con movimiento sutil (15s loop)

### Efectos de Scroll
- Parallax multi-velocidad en diferentes capas
- Fade out progresivo de elementos
- Scale dinámico de la escultura geométrica

### Efectos de Entrada
- Hero zoom in dramático (1.8s)
- Escultura rotación desde -45deg (400ms delay)
- Contenido slide up (600ms delay)
- Navbar drop down (200ms delay)

### Efectos de Mouse
- Parallax basado en posición del cursor
- Botones magnéticos que siguen el mouse
- Shine effect en CTAs

## Optimizaciones de Rendimiento

- Uso de `requestAnimationFrame` para animaciones suaves
- Throttling en eventos de scroll y mousemove (implementar si es necesario)
- Canvas optimizado con cantidad controlada de partículas
- CSS animations con `will-change` para GPU acceleration

## Navegadores Compatibles

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Futuras Mejoras (Nivel 2-4)

### Nivel 2: Interactividad Avanzada
- Scroll snap sections
- Transiciones entre secciones con GSAP
- Timeline interactivo clickeable

### Nivel 3: Efectos Wow
- 3D tilt en cards (parallax.js)
- Cursor custom que reacciona a elementos
- Morphing SVG animations

### Nivel 4: Premium Experience
- WebGL background (Three.js)
- Page transitions con Barba.js
- Micro-interacciones en cada elemento

## Contribución

Este es un proyecto privado para Alyna Capital. Para contribuciones o sugerencias, contactar al equipo de desarrollo.

## Créditos

- **Diseño y Desarrollo**: Equipo Alyna Capital
- **Inspiración**: Luix design system, arquitectura institucional moderna
- **Efectos**: Canvas API, CSS3 Animations, Vanilla JavaScript

## Licencia

© 2024 Alyna Capital. Todos los derechos reservados.

---

**Contacto**: info@alynacapital.com
**Web**: [www.alynacapital.com](https://www.alynacapital.com)
