# Propuesta de Bloques Visuales - Alyna Capital
## Arquitectura Visual Inspiradora (No Casposa, No Vendehumos)

---

## REFERENCIAS VISUALES - ESTÉTICA OBJETIVO

### **STRIPE** (Inspiración diseño)
- Espacios generosos
- Tipografía grande y clara
- Gradientes sutiles de fondo
- Animaciones micro-sutiles
- Datos destacados visualmente

### **APPLE BUSINESS** (Inspiración profesionalismo)
- Minimalismo extremo
- Cada sección respira
- Imágenes/datos quality over quantity
- Sin saturación visual

### **NOTION** (Inspiración modernidad)
- Limpio pero no frío
- Iconografía geométrica simple
- Contraste suave entre secciones
- Sensación de producto premium

---

## PALETA DE COLORES (del manual adaptada)

### Fondos:
```
Claro suave:    #f8f9fa (blanco roto, no blanco puro)
Gris muy claro: #f3f4f6 (alternativa sutil)
Gris medio:     #e5e7eb (separadores, borders)
Oscuro:         #1a1c1f (hero, footer, secciones ancla)
Oscuro suave:   #2d3035 (alternativa oscura)
```

### Acentos (del manual):
```
Verde:   #74bba0 (Fondos Europeos)
Coral:   #ee706a (M&A/Venta)
Naranja: #f9ba73 (Highlight/Datos)
Gris:    #3c3c3b (Textos, elementos neutros)
```

### Estrategia de Uso:
- **80% neutros** (blancos rotos, grises claros)
- **15% oscuros** (hero, footer, 1-2 secciones ancla)
- **5% color** (solo para acentuar datos clave, CTAs, badges)

---

## ARQUITECTURA DE BLOQUES (7 SECCIONES)

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                                             ┃
┃  BLOQUE 1: HERO                             ┃
┃  Altura: 100vh                              ┃
┃  Fondo: Oscuro (#1a1c1f)                    ┃
┃  Efecto: Gradiente sutil + geometría        ┃
┃                                             ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
      ↓
┌─────────────────────────────────────────────┐
│                                             │
│  BLOQUE 2: SERVICIOS                        │
│  Altura: auto (~80vh)                       │
│  Fondo: Claro (#f8f9fa)                     │
│  Layout: 2 cards lado a lado                │
│                                             │
└─────────────────────────────────────────────┘
      ↓
┌─────────────────────────────────────────────┐
│                                             │
│  BLOQUE 3: TRACK RECORD (Números)           │
│  Altura: ~50vh (compacto)                   │
│  Fondo: Gris muy claro (#f3f4f6)            │
│  Layout: 4 stats en grid 2x2                │
│                                             │
└─────────────────────────────────────────────┘
      ↓
┌─────────────────────────────────────────────┐
│                                             │
│  BLOQUE 4: CLIENTES                         │
│  Altura: auto (~70vh)                       │
│  Fondo: Claro (#f8f9fa)                     │
│  Layout: 3 columnas                         │
│                                             │
└─────────────────────────────────────────────┘
      ↓
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                                             ┃
┃  BLOQUE 5: METODOLOGÍA                      ┃
┃  Altura: auto (~80vh)                       ┃
┃  Fondo: Oscuro (#1a1c1f)                    ┃
┃  Layout: Timeline vertical/horizontal       ┃
┃                                             ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
      ↓
┌─────────────────────────────────────────────┐
│                                             │
│  BLOQUE 6: CASOS                            │
│  Altura: auto (~90vh)                       │
│  Fondo: Claro (#f8f9fa)                     │
│  Layout: 3 cards grid                       │
│                                             │
└─────────────────────────────────────────────┘
      ↓
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                                             ┃
┃  BLOQUE 7: CONTACTO                         ┃
┃  Altura: auto (~80vh)                       ┃
┃  Fondo: Oscuro (#1a1c1f)                    ┃
┃  Layout: Formulario centrado                ┃
┃                                             ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

**Ritmo visual:**
- Oscuro → Claro → Gris claro → Claro → Oscuro → Claro → Oscuro
- Secciones "ancla" oscuras (Hero, Metodología, Contacto)
- Resto claras para respirar

---

## DETALLE BLOQUE 1: HERO ✅ (Ya implementado)

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                                                  ┃
┃                    [Logo]                        ┃
┃                                                  ┃
┃                                                  ┃
┃         ┌──────────────────────────┐             ┃
┃         │                          │             ┃
┃         │   Fondos europeos y      │             ┃
┃         │   venta de empresas      │             ┃
┃         │                          │             ┃
┃         │   Tagline...             │             ┃
┃         │                          │             ┃
┃         │   [stats stats stats]    │             ┃
┃         │                          │             ┃
┃         │   [CTA 1]  [CTA 2]       │             ┃
┃         │                          │             ┃
┃         │   microcopy              │             ┃
┃         │                          │             ┃
┃         └──────────────────────────┘             ┃
┃                                                  ┃
┃        [Elementos geométricos sutiles]           ┃
┃                                                  ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

Características:
- Fondo oscuro con gradiente sutil
- Geometría arquitectónica (ya implementada)
- Texto centrado, amplio
- Stats inline horizontales
- CTAs claros
```

---

## DETALLE BLOQUE 2: SERVICIOS

```
┌───────────────────────────────────────────────────┐
│                                                   │
│                   Especialización                 │
│                   en dos áreas                    │
│                                                   │
│  ┌────────────────────┐  ┌────────────────────┐  │
│  │                    │  │                    │  │
│  │  [Badge: Fondos]   │  │  [Badge: M&A]      │  │
│  │                    │  │                    │  │
│  │  FONDOS            │  │  M&A ADVISORY      │  │
│  │  EUROPEOS          │  │                    │  │
│  │                    │  │  Venta de          │  │
│  │  Financiación      │  │  empresas          │  │
│  │  no dilutiva       │  │  medianas          │  │
│  │                    │  │                    │  │
│  │  • I+D             │  │  • Valoración      │  │
│  │  • Digitalización  │  │  • Due diligence   │  │
│  │  • Sostenibilidad  │  │  • Negociación     │  │
│  │                    │  │                    │  │
│  │  ────────────────  │  │  ────────────────  │  │
│  │                    │  │                    │  │
│  │  Importe medio:    │  │  Rango:            │  │
│  │  €500K-€2M         │  │  €2M-€100M         │  │
│  │                    │  │                    │  │
│  │  Plazo medio:      │  │  Plazo medio:      │  │
│  │  6-9 meses         │  │  8-14 meses        │  │
│  │                    │  │                    │  │
│  │  [CTA discreto →]  │  │  [CTA discreto →]  │  │
│  │                    │  │                    │  │
│  └────────────────────┘  └────────────────────┘  │
│                                                   │
└───────────────────────────────────────────────────┘

Características visuales:
- Fondo claro (#f8f9fa)
- 2 cards con borde sutil
- Badge color en esquina (verde/coral)
- Hover: elevación sutil
- Iconografía geométrica minimalista
- Datos destacados (plazos, importes)
- Separador sutil entre info y datos
```

---

## DETALLE BLOQUE 3: TRACK RECORD

```
┌───────────────────────────────────────────────────┐
│                                                   │
│                    Resultados                     │
│                                                   │
│  ┌────────────────┐    ┌────────────────┐        │
│  │                │    │                │        │
│  │     +45M€      │    │      65+       │        │
│  │  [número XL]   │    │  [número XL]   │        │
│  │                │    │                │        │
│  │  Fondos        │    │  Proyectos     │        │
│  │  obtenidos     │    │  completados   │        │
│  │                │    │                │        │
│  └────────────────┘    └────────────────┘        │
│                                                   │
│  ┌────────────────┐    ┌────────────────┐        │
│  │                │    │                │        │
│  │      85%       │    │   8-12 meses   │        │
│  │  [número XL]   │    │  [número XL]   │        │
│  │                │    │                │        │
│  │  Tasa éxito    │    │  Plazo medio   │        │
│  │  (vs 27% media)│    │  ejecución     │        │
│  │                │    │                │        │
│  └────────────────┘    └────────────────┘        │
│                                                   │
│              [Ver casos de éxito →]               │
│                                                   │
└───────────────────────────────────────────────────┘

Características visuales:
- Fondo gris muy claro (#f3f4f6)
- Grid 2x2 perfectamente alineado
- Números XL (72px+) con color naranja (#f9ba73)
- Descripción small debajo
- Sin borders en cards (minimalista)
- CTA centrado abajo
```

---

## DETALLE BLOQUE 4: CLIENTES

```
┌───────────────────────────────────────────────────┐
│                                                   │
│              Con quién trabajamos                 │
│                                                   │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐        │
│  │          │  │          │  │          │        │
│  │ [Icono]  │  │ [Icono]  │  │ [Icono]  │        │
│  │          │  │          │  │          │        │
│  │ Admin.   │  │ Empresas │  │ Empresas │        │
│  │ públicas │  │ innovad. │  │ venta    │        │
│  │          │  │          │  │          │        │
│  │ • Ayunt. │  │ • PYMEs  │  │ • Famil. │        │
│  │ • Diput. │  │ • I+D    │  │ • Sucesión│        │
│  │ • Organ. │  │ • Digital│  │ • Exit   │        │
│  │          │  │          │  │          │        │
│  │ ──────── │  │ ──────── │  │ ──────── │        │
│  │          │  │          │  │          │        │
│  │ Proyectos│  │ Facturaión│  │ Facturaión│       │
│  │ €500K-€5M│  │ €500K+   │  │ €2M-€100M│        │
│  │          │  │          │  │          │        │
│  └──────────┘  └──────────┘  └──────────┘        │
│                                                   │
└───────────────────────────────────────────────────┘

Características visuales:
- Fondo claro (#f8f9fa)
- 3 columnas equiespaciadas
- Iconos geométricos top (48px)
- Cards con borde sutil
- Separador horizontal antes de datos
- Badge con rango en color verde claro
```

---

## DETALLE BLOQUE 5: METODOLOGÍA

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                                                  ┃
┃                   Metodología                    ┃
┃                                                  ┃
┃                                                  ┃
┃  ┌────────┐          ┌────────┐          ┌────┐ ┃
┃  │        │          │        │          │    │ ┃
┃  │   01   │────────→ │   02   │────────→ │ 03 │ ┃
┃  │        │          │        │          │    │ ┃
┃  └────────┘          └────────┘          └────┘ ┃
┃                                                  ┃
┃  ANÁLISIS           ESTRATEGIA         EJECUCIÓN ┃
┃                                                  ┃
┃  Evaluación         Diseño de plan    Presentac. ┃
┃  viabilidad.        de acción.        negociación┃
┃  Diagnóstico        Preparación       y cierre.  ┃
┃  inicial.           documentación.               ┃
┃                                                  ┃
┃  Duración:          Duración:         Duración:  ┃
┃  1-2 semanas        2-4 semanas       4-12 meses ┃
┃                                                  ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

Características visuales:
- Fondo oscuro (#1a1c1f)
- Timeline horizontal con flechas
- Números en círculos (color verde #74bba0)
- Texto blanco/gris claro
- Conexión visual con líneas sutiles
- Responsive: vertical en mobile
```

---

## DETALLE BLOQUE 6: CASOS

```
┌───────────────────────────────────────────────────┐
│                                                   │
│              Operaciones cerradas                 │
│                                                   │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐        │
│  │[Badge]   │  │[Badge]   │  │[Badge]   │        │
│  │          │  │          │  │          │        │
│  │ Ayunta-  │  │ Fabric.  │  │ Startup  │        │
│  │ miento   │  │ industr. │  │ IA salud │        │
│  │ CLM      │  │ Valencia │  │ Madrid   │        │
│  │          │  │          │  │          │        │
│  │ ──────── │  │ ──────── │  │ ──────── │        │
│  │          │  │          │  │          │        │
│  │ Tipo:    │  │ Tipo:    │  │ Tipo:    │        │
│  │ FEDER    │  │ Venta    │  │ H.Europa │        │
│  │          │  │          │  │          │        │
│  │ €2.1M    │  │ €13.8M   │  │ €950K    │        │
│  │ 7 meses  │  │ 11 meses │  │ 9 meses  │        │
│  │          │  │          │  │          │        │
│  └──────────┘  └──────────┘  └──────────┘        │
│                                                   │
│              [Ver más proyectos →]                │
│                                                   │
└───────────────────────────────────────────────────┘

Características visuales:
- Fondo claro (#f8f9fa)
- 3 cards grid
- Badge categoría esquina (verde/coral según tipo)
- Separador sutil
- Datos destacados: € en naranja, plazos en gris
- Hover: elevación + borde color
```

---

## DETALLE BLOQUE 7: CONTACTO ✅ (Ya implementado)

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                                                  ┃
┃              Primera consulta                    ┃
┃                                                  ┃
┃         ┌──────────────────────────┐             ┃
┃         │                          │             ┃
┃         │  Reunión inicial de      │             ┃
┃         │  30-45 minutos...        │             ┃
┃         │                          │             ┃
┃         │  [FORMULARIO]            │             ┃
┃         │                          │             ┃
┃         │  [Campos...]             │             ┃
┃         │                          │             ┃
┃         │  [CTA: Enviar]           │             ┃
┃         │                          │             ┃
┃         │  ───────────────          │             ┃
┃         │                          │             ┃
┃         │  Alternativas:           │             ┃
┃         │  Tel | Email | LinkedIn  │             ┃
┃         │                          │             ┃
┃         └──────────────────────────┘             ┃
┃                                                  ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

Características:
- Fondo oscuro (#1a1c1f)
- Formulario centrado, max-width 600px
- Campos con borde sutil claro
- CTA destacado
- Alternativas contacto abajo
```

---

## ELEMENTOS VISUALES CLAVE

### 1. BADGES (Categorías)
```
┌──────────────┐
│ FONDOS UE    │  Verde (#74bba0)
└──────────────┘

┌──────────────┐
│ M&A          │  Coral (#ee706a)
└──────────────┘

Características:
- Border-radius: 4px
- Padding: 4px 12px
- Font-size: 12px
- Font-weight: 600
- Text-transform: uppercase
- Background: color con opacity 0.1
- Color: color sólido
```

### 2. ICONOGRAFÍA
```
Estilo: Geométrica minimalista
Stroke: 1.5px
Tamaño: 48px
Color: #3c3c3b (claro) o #f8f9fa (oscuro)

Ejemplos:
- Administraciones: Edificio con columnas
- Empresas innovadoras: Bombilla + engranaje
- Empresas venta: Apretón manos simplificado
- Metodología: Círculos numerados
```

### 3. CARDS
```css
.card {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 3rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
    border-color: #d1d5db;
}
```

### 4. SEPARADORES
```
Horizontal: 1px solid #e5e7eb
Uso: Entre contenido y datos en cards
No usar: Como decoración excesiva
```

### 5. TIPOGRAFÍA

```css
/* Títulos secciones */
h2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 2.5rem; /* 40px */
    letter-spacing: -0.02em;
    margin-bottom: 4rem;
}

/* Subtítulos cards */
h3 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 1.5rem; /* 24px */
    margin-bottom: 1rem;
}

/* Números grandes (stats) */
.stat-number {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 4.5rem; /* 72px */
    color: #f9ba73; /* Naranja */
}

/* Cuerpo texto */
p {
    font-family: 'Plantin MT Pro', serif;
    font-size: 1.125rem; /* 18px */
    line-height: 1.7;
    color: #6b7280;
}
```

---

## ANIMACIONES MICRO

### Fade-in al scroll
```javascript
Observer API:
- Threshold: 0.1
- Efecto: opacity 0 → 1
- Transform: translateY(20px) → 0
- Duration: 0.6s
- Easing: ease-out
```

### Hover cards
```css
- Transform: translateY(-4px)
- Box-shadow: elevación
- Border-color: cambio sutil
- Duration: 0.3s
```

### CTAs
```css
- Transform: translateY(-2px) hover
- Background: ligero cambio de tono
- Duration: 0.2s
```

**Regla oro:** Animaciones sutiles, imperceptibles pero agradables

---

## RESPONSIVE BREAKPOINTS

```css
/* Mobile First */
Base: 320px+
  - Todo stack vertical
  - Padding reducido (1.5rem)
  - Font-size reducido 15%

@media (min-width: 768px) /* Tablet */
  - Servicios: 2 columnas
  - Clientes: 2 columnas
  - Casos: 2 columnas
  - Padding normal (2rem)

@media (min-width: 1024px) /* Desktop */
  - Servicios: 2 columnas amplias
  - Clientes: 3 columnas
  - Track: 2x2 grid
  - Casos: 3 columnas
  - Padding amplio (3rem)
  - Max-width: 1280px

@media (min-width: 1440px) /* Large Desktop */
  - Max-width: 1400px
  - Padding extra: 4rem
```

---

## ESPACIADO (Sistema 8px)

```css
/* Espaciado interno secciones */
section {
    padding-top: 6rem;    /* 96px */
    padding-bottom: 6rem; /* 96px */
}

/* Espaciado entre elementos */
.element-spacing {
    margin-bottom: 2rem;  /* 32px */
}

/* Espaciado cards */
.cards-grid {
    gap: 2rem;            /* 32px */
}

/* Espaciado título-contenido */
h2 + content {
    margin-top: 4rem;     /* 64px */
}
```

---

## COMPARATIVA VISUAL

### ❌ CONSULTORA CASPOSA:
- Colores saturados (azul corporativo chillón)
- Fotografías stock genéricas
- Iconos clip-art
- Gradientes años 2000
- Sombras exageradas
- Tipografía Times New Roman

### ❌ VENDEHUMOS/CURSOS:
- Colores neón (amarillo, fucsia)
- CTAs agresivos everywhere
- Pop-ups inmediatos
- Contadores countdown
- Testimonios falsos con foto stock
- "¡Solo quedan 3 plazas!"

### ✅ ALYNA CAPITAL (OBJETIVO):
- Colores neutros + acentos sutiles
- Sin fotografías (o muy selectivas)
- Iconografía geométrica minimalista
- Gradientes sutiles modernos
- Sombras discretas
- Montserrat + Plantin (elegante, profesional)
- CTAs discretos pero claros
- Datos reales, sin artificios

---

## INSPIRACIÓN FINAL

**Estética objetivo = STRIPE meets NOTION meets APPLE BUSINESS**

- **STRIPE:** Espacios, tipografía, gradientes sutiles
- **NOTION:** Limpieza, modernidad, iconografía simple
- **APPLE:** Minimalismo, calidad sobre cantidad

**Sensación final:**
"Boutique financiera moderna, profesional pero accesible,
seria pero no aburrida, premium pero no ostentosa"

---

## IMPLEMENTACIÓN

¿Empezamos a implementar estos bloques visualmente?

**Orden sugerido:**
1. Actualizar sistema de colores (variables CSS) - 15min
2. Crear sección Servicios (2 cards) - 1h
3. Crear sección Track Record (4 stats) - 30min
4. Crear sección Clientes (3 columnas) - 45min
5. Crear sección Metodología (timeline) - 1h
6. Mejorar sección Casos (3 cards) - 1h
7. Animaciones scroll + micro-interacciones - 30min

**Total:** ~5 horas

¿Vamos con esto?
