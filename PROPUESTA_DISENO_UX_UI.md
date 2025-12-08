# Propuesta de Diseño UX/UI - Alyna Capital
## Estética Minimalista y Profesional

---

## ANÁLISIS DEL MANUAL DE IDENTIDAD

### Colores Corporativos:
```
Color Principal:
- Verde Corporativo: #74bba0 (Fondos Europeos)
- Coral/Salmón: #ee706a (Comunicación)
- Naranja: #f9ba73 (Consultoría)
- Gris Antracita: #3c3c3b (Alyna Capital)

Paleta Oscura Propuesta (versión minimalista):
- Gris Carbón: #2b2d31 (fondos principales)
- Gris Pizarra: #3a3f47 (secciones alternas)
- Gris Profundo: #1a1c1f (hero y footer)
- Verde Oscuro Apagado: #4a6b5f (acentos sutiles)
- Coral Apagado: #a85952 (CTAs secundarios)
- Crema: #f8f9fa (texto principal)
- Gris Claro: #d1d5db (texto secundario)
```

### Tipografías:
- **Primaria:** Montserrat (títulos, hero, destacados)
- **Secundaria:** Plantin MT Pro (textos, cuerpo)

### Personalidad de Marca:
- Global
- Fresco
- Profesional
- Sostenible

---

## ESTÉTICA PROPUESTA: DARK MINIMALISM

### Concepto Visual:
**"Boutique financiera de alto nivel con estética oscura y refinada"**

Inspiración en:
- Stripe.com (minimalismo técnico)
- Sequoia Capital (seriedad financiera)
- Bain & Company (profesionalismo sin florituras)
- Linear.app (diseño limpio, dark mode)

### Características:
1. **Fondos oscuros dominantes** (80% oscuro, 20% claro)
2. **Espacios en blanco generosos** (breathing room)
3. **Tipografía grande y legible**
4. **Acentos de color sutiles** (verde apagado, coral)
5. **Fotografía mínima o nula** (iconografía geométrica)
6. **Bordes y separadores tenues**
7. **Animaciones micro-sutiles**

---

## PALETA DE COLORES FINAL

```css
:root {
    /* Fondos */
    --bg-primary: #1a1c1f;        /* Hero, Footer */
    --bg-secondary: #2b2d31;       /* Secciones principales */
    --bg-tertiary: #3a3f47;        /* Secciones alternas */
    --bg-card: #252729;            /* Cards, tarjetas */

    /* Textos */
    --text-primary: #f8f9fa;       /* Títulos, principal */
    --text-secondary: #d1d5db;     /* Cuerpo, subtítulos */
    --text-muted: #9ca3af;         /* Texto terciario */

    /* Acentos */
    --accent-green: #4a6b5f;       /* Fondos Europeos */
    --accent-coral: #a85952;       /* M&A / Venta */
    --accent-orange: #c4976b;      /* Consultoría */

    /* Bordes */
    --border-subtle: rgba(255, 255, 255, 0.08);
    --border-medium: rgba(255, 255, 255, 0.12);

    /* CTAs */
    --cta-primary: #4a6b5f;
    --cta-primary-hover: #5d7f72;
    --cta-secondary: #3a3f47;
    --cta-secondary-hover: #4a5058;
}
```

---

## ESTRUCTURA HOME (basada en NARRATIVA_HOME_FINAL.md)

```
┌─────────────────────────────────────────────────┐
│                                                 │
│  1. HERO ✅ (ya implementado)                   │
│     Fondo: --bg-primary (#1a1c1f)              │
│     Efectos geométricos sutiles                 │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  2. SERVICIOS                                   │
│     Título: "Dos servicios. Punto."            │
│     Fondo: --bg-secondary (#2b2d31)            │
│     Layout: 2 columnas side-by-side            │
│                                                 │
│     [Fondos Europeos]    [Venta Empresas]      │
│     Verde apagado        Coral apagado         │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  3. PARA QUIÉN                                  │
│     Título: "Trabajamos con"                   │
│     Fondo: --bg-tertiary (#3a3f47)             │
│     Layout: 3 cards horizontales               │
│                                                 │
│     [Administr.] [Empresas Innov.] [Venta]     │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  4. CÓMO TRABAJAMOS                             │
│     Título: "Proceso probado en 65 proyectos"  │
│     Fondo: --bg-secondary (#2b2d31)            │
│     Layout: Timeline vertical                  │
│                                                 │
│     [1] Diagnóstico (Semana 1)                 │
│      ↓                                          │
│     [2] Estrategia (Semanas 2-4)               │
│      ↓                                          │
│     [3] Ejecución (Semanas 5+)                 │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  5. CASOS REALES                                │
│     Título: "Últimos proyectos cerrados"       │
│     Fondo: --bg-tertiary (#3a3f47)             │
│     Layout: 3 cards con hover effect           │
│                                                 │
│     [Caso 1]  [Caso 2]  [Caso 3]               │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  6. CONTACTO ✅ (ya implementado)               │
│     Fondo: --bg-primary (#1a1c1f)              │
│     Formulario inteligente                     │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

## COMPONENTES DE DISEÑO

### 1. CARDS (Tarjetas)
```css
.card {
    background: var(--bg-card);
    border: 1px solid var(--border-subtle);
    border-radius: 12px;
    padding: 2.5rem;
    transition: all 0.3s ease;
}

.card:hover {
    border-color: var(--border-medium);
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
}
```

### 2. SECCIÓN SERVICIOS
```
Estructura:

┌──────────────────────────┬──────────────────────────┐
│ FONDOS EUROPEOS          │ VENTA DE EMPRESAS        │
├──────────────────────────┼──────────────────────────┤
│                          │                          │
│ Conseguimos              │ Vendemos empresas        │
│ financiación no          │ medianas al mejor        │
│ dilutiva UE              │ comprador estratégico    │
│                          │                          │
│ • I+D: Horizonte Europa  │ • Valoración empresa     │
│ • Digitalización: PRTR   │ • Búsqueda compradores   │
│ • Sostenibilidad: LIFE   │ • Negociación y cierre   │
│                          │                          │
│ Timeline: 3-8 meses      │ Timeline: 8-18 meses     │
│ Ticket: €500K-€2M        │ Ticket: €2M-€50M         │
│                          │                          │
│ [Analizar viabilidad →]  │ [Solicitar valoración →] │
│                          │                          │
└──────────────────────────┴──────────────────────────┘

Estilo:
- Borde izquierdo sutil con color de categoría (verde/coral)
- Fondo card ligeramente elevado sobre bg-secondary
- Hover: eleva card y intensifica borde
```

### 3. SECCIÓN PARA QUIÉN
```
Layout: 3 columnas

┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ [Icono Admin]│ │[Icono Empresa│ │[Icono Venta] │
│              │ │  Innovadora] │ │              │
│ Administrac. │ │              │ │ Empresas en  │
│ Públicas     │ │ Empresas     │ │ Venta        │
│              │ │ Innovadoras  │ │              │
│ • Ayuntam.   │ │ • PYMEs I+D  │ │ • Familiares │
│ • Diputac.   │ │ • Digital.   │ │ • Sucesión   │
│              │ │ • Sostenib.  │ │ • Exit       │
│              │ │              │ │              │
│ Desde €500K  │ │ €500K+       │ │ €2M-€100M    │
└──────────────┘ └──────────────┘ └──────────────┘

Estilo:
- Iconos geométricos minimalistas (no ilustraciones)
- Texto centrado
- Badge con rango de facturación en color sutil
```

### 4. SECCIÓN PROCESO
```
Timeline vertical (móvil: horizontal scroll)

┌─────────────────────────────────────────┐
│                                         │
│  [1] ──────────────────────────────     │
│      DIAGNÓSTICO INICIAL                │
│      Semana 1                           │
│                                         │
│      • Análisis de viabilidad           │
│      • Revisión financiera              │
│      • Decisión GO/NO GO                │
│                                         │
│      ✓ Si es NO → No cobramos           │
│                                         │
│  [2] ──────────────────────────────     │
│      ESTRATEGIA                         │
│      Semanas 2-4                        │
│                                         │
│      • Diseño de plan                   │
│      • Preparación documentación        │
│      • Identificación líneas/comprador  │
│                                         │
│  [3] ──────────────────────────────     │
│      EJECUCIÓN                          │
│      Semanas 5+                         │
│                                         │
│      • Presentación/Negociación         │
│      • Seguimiento                      │
│      • Cierre operación                 │
│                                         │
│  RESULTADO                              │
│  +45M€ | +65 proyectos | 2 servicios    │
│                                         │
└─────────────────────────────────────────┘

Estilo:
- Línea conectora vertical en color verde apagado
- Números en círculos
- Cada paso en card sutil
- Highlight en "Si es NO → No cobramos" (coral)
```

### 5. SECCIÓN CASOS REALES
```
3 Cards en grid

┌─────────────────────────────────────┐
│ CASO 1                              │
│ Ayuntamiento 25.000 hab.           │
│ Castilla-La Mancha                 │
├─────────────────────────────────────┤
│ OBJETIVO:                           │
│ Proyecto Smart City rechazado 2    │
│ veces. Necesitaban €1.8M           │
│                                     │
│ SOLUCIÓN:                           │
│ Replanteamiento enfoque            │
│ sostenibilidad. Fondos FEDER       │
│                                     │
│ RESULTADO:                          │
│ €2.1M aprobados                    │
│ 7 meses                            │
│                                     │
│ [badge: FONDOS EUROPEOS]           │
└─────────────────────────────────────┘

Estilo:
- Badge con categoría en esquina (verde/coral)
- Datos concretos destacados (€, meses)
- Hover: expande ligeramente
```

---

## TIPOGRAFÍA

### Escala Tipográfica:
```css
/* Títulos */
h1: Montserrat Bold, 3.5rem / 56px
h2: Montserrat Bold, 2.5rem / 40px
h3: Montserrat SemiBold, 1.75rem / 28px
h4: Montserrat Medium, 1.25rem / 20px

/* Cuerpo */
body: Plantin MT Pro Regular, 1.125rem / 18px
small: Plantin MT Pro Regular, 0.875rem / 14px

/* Espaciado */
Letter-spacing títulos: -0.02em (apretado)
Letter-spacing cuerpo: 0 (normal)
Line-height títulos: 1.2
Line-height cuerpo: 1.6
```

### Jerarquía Visual:
```
HERO H1:
Montserrat Bold 56px
Color: --text-primary
Letter-spacing: -0.02em

SECCIÓN H2:
Montserrat Bold 40px
Color: --text-primary
Margin-bottom: 3rem

CARD H3:
Montserrat SemiBold 28px
Color: --text-primary
Margin-bottom: 1.5rem

CUERPO TEXTO:
Plantin MT Pro Regular 18px
Color: --text-secondary
Line-height: 1.6
```

---

## COPY - PRINCIPIOS

### ✅ HACER:
1. **Datos concretos:** "+45M€", "7 meses", "€2.1M aprobados"
2. **Plazos reales:** "3-8 meses", no "rápidamente"
3. **Honestidad:** "Si es NO → No cobramos"
4. **Lenguaje cliente:** "Vender empresa", no "M&A"
5. **Filtrar leads:** "Facturación €2M-€100M"

### ❌ EVITAR:
1. "Líderes del sector"
2. "Soluciones innovadoras"
3. "Equipo altamente cualificado"
4. "Compromiso con la excelencia"
5. Jerga innecesaria

### Ejemplos Reescritos:

**MALO:**
"Somos líderes en el sector de la financiación empresarial con soluciones innovadoras"

**BUENO:**
"+45M€ conseguidos en 65 proyectos"

---

**MALO:**
"Nuestro equipo altamente cualificado te acompañará en todo el proceso"

**BUENO:**
"Proceso probado 65 veces. Diagnóstico → Estrategia → Ejecución"

---

**MALO:**
"Ofrecemos servicios integrales de consultoría financiera"

**BUENO:**
"Dos servicios. Punto. Fondos europeos y venta de empresas."

---

## ANIMACIONES MICRO

### Principios:
- **Sutiles**, nunca llamativas
- **Rápidas**: 200-400ms
- **Propósito**: feedback, no decoración

### Implementación:
```css
/* Hover en Cards */
.card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
    transform: translateY(-4px);
}

/* Fade-in al scroll */
.fade-in-up {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}
.fade-in-up.visible {
    opacity: 1;
    transform: translateY(0);
}

/* Botones */
.btn {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.btn:hover {
    transform: translateY(-2px);
}
```

---

## ICONOGRAFÍA

### Estilo:
- **Geométrica minimalista** (NO ilustraciones complejas)
- **Monocolor** (blanco/gris claro)
- **Stroke weight:** 1.5-2px
- **Tamaño:** 32-48px

### Ejemplos:
```
Fondos Europeos:
└─ Documento + Euro (€)

Venta Empresas:
└─ Apretón de manos simplificado

Administraciones:
└─ Edificio geométrico

Empresas Innovadoras:
└─ Bombilla + engranaje

Timeline:
└─ Círculos numerados conectados
```

---

## RESPONSIVIDAD

### Breakpoints:
```css
/* Mobile First */
Base: 320px+

@media (min-width: 768px)  /* Tablet */
@media (min-width: 1024px) /* Desktop */
@media (min-width: 1440px) /* Large Desktop */
```

### Cambios Clave:

**SERVICIOS:**
- Móvil: Stack vertical
- Tablet+: 2 columnas side-by-side

**PARA QUIÉN:**
- Móvil: Stack vertical
- Tablet: 2 columnas
- Desktop: 3 columnas

**PROCESO:**
- Móvil: Timeline vertical compacta
- Desktop: Timeline vertical espaciosa

**CASOS:**
- Móvil: Stack vertical
- Tablet: 2 columnas
- Desktop: 3 columnas

---

## SEO COPY - INTEGRACIÓN

### H1 (Hero):
```html
<h1>
  <span class="highlight">Fondos europeos</span> y
  <span class="highlight">venta de empresas</span>
</h1>
```
**Keywords:** fondos europeos, venta de empresas

### H2 (Secciones):
```html
<h2>Dos servicios. Punto.</h2>
<h2>Trabajamos con</h2>
<h2>Proceso probado en 65 proyectos</h2>
<h2>Últimos proyectos cerrados</h2>
```
**Keywords longtail:** fondos europeos empresas, venta empresas medianas, consultora financiación

### Descripción Servicios:
```
FONDOS:
"Conseguimos ayudas y subvenciones europeas, nacionales y regionales.
I+D: Horizonte Europa, CDTI, Cervera.
Digitalización: Kit Digital, PRTR.
Sostenibilidad: Green Deal, LIFE."

M&A:
"Vendemos empresas medianas (€2M-€100M) al mejor comprador estratégico.
Valoración, due diligence, negociación y cierre."
```

---

## INSPIRACIÓN REFERENCIA

### Stripe.com
- ✅ Minimalismo técnico
- ✅ Espacios generosos
- ✅ Tipografía grande
- ✅ Gradientes sutiles

### Sequoia Capital
- ✅ Seriedad financiera
- ✅ Datos destacados
- ✅ Sin fotografía genérica
- ✅ Portfolio/casos destacados

### Bain & Company
- ✅ Profesionalismo sin florituras
- ✅ Estructura clara
- ✅ Copy directo
- ✅ Credenciales visibles

### Linear.app
- ✅ Dark mode elegante
- ✅ Animaciones sutiles
- ✅ Interfaz limpia
- ✅ Micro-interacciones

---

## SIGUIENTE PASO

¿Quieres que implemente esta propuesta completa en el código?

**Plan de implementación:**
1. Actualizar variables CSS con paleta oscura (30min)
2. Crear sección Servicios (1h)
3. Crear sección Para Quién (45min)
4. Crear sección Proceso (1h)
5. Mejorar sección Casos Reales (1h)
6. Ajustes responsivos finales (30min)
7. Animaciones micro-sutiles (30min)

**Total:** ~5.5 horas de implementación

---

## NOTAS FINALES

Esta propuesta:
- ✅ Respeta manual de identidad (colores, tipografías)
- ✅ Estética oscura minimalista profesional
- ✅ Copy directo sin marketinerías
- ✅ Inspirada en webs top (Stripe, Sequoia, Bain)
- ✅ SEO-optimizada con keywords naturales
- ✅ Enfocada en conversión (3 CTAs estratégicos)
- ✅ Móvil-first responsive

NO es:
- ❌ Grandilocuente
- ❌ Llena de ilustraciones coloridas
- ❌ Marketinera
- ❌ Genérica

Es sobria, profesional, y habla el lenguaje del cliente.
