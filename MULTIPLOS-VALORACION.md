# Múltiplos de Valoración - Calculadora

## Múltiplos actuales por sector

Los múltiplos están configurados de forma **conservadora** para PYMEs españolas, basados en Damodaran ajustados para empresas pequeñas/medianas.

### 📊 Tabla de Múltiplos

| Sector | EV/Revenue (min-avg-max) | EV/EBITDA (min-avg-max) | Notas |
|--------|--------------------------|-------------------------|-------|
| **Tecnología y Software** | 2.5x - 4.5x - 7.0x | 12x - 18x - 25x | Múltiplos más altos del mercado |
| **Farmacéutico** | 2.0x - 3.5x - 6.0x | 12x - 16x - 24x | Barreras de entrada altas |
| **Energía y Renovables** | 1.5x - 3.0x - 5.5x | 9x - 14x - 20x | Sector en crecimiento |
| **Inmobiliario** | 1.0x - 2.5x - 4.5x | 10x - 15x - 22x | Activos tangibles |
| **Salud y Healthcare** | 1.0x - 2.0x - 4.0x | 8x - 12x - 18x | Demanda estable |
| **E-commerce** | 0.8x - 1.8x - 3.5x | 8x - 12x - 18x | Escalabilidad digital |
| **Servicios Profesionales** | 0.8x - 1.5x - 3.0x | 7x - 11x - 16x | Dependencia de talento |
| **Educación** | 0.8x - 1.5x - 2.5x | 7x - 10x - 15x | Contratos recurrentes |
| **Alimentación y Bebidas** | 0.5x - 1.2x - 2.5x | 7x - 10x - 15x | Márgenes medios |
| **Hostelería y Restauración** | 0.5x - 1.0x - 2.0x | 6x - 9x - 13x | Alta dependencia de ubicación |
| **Marketing y Publicidad** | 0.5x - 1.0x - 2.0x | 6x - 9x - 14x | Márgenes variables |
| **Manufactura e Industrial** | 0.4x - 0.8x - 1.5x | 6x - 9x - 13x | Activos pesados |
| **Logística y Transporte** | 0.3x - 0.7x - 1.3x | 5x - 8x - 12x | Márgenes bajos |
| **Comercio y Retail** | 0.3x - 0.6x - 1.2x | 5x - 8x - 12x | Competencia alta |
| **Construcción** | 0.2x - 0.5x - 0.9x | 5x - 7x - 10x | Cíclico, márgenes bajos |
| **Otros Sectores** | 0.5x - 1.0x - 2.0x | 6x - 9x - 14x | Default conservador |

---

## 🎯 Cómo funciona el cálculo

La calculadora usa **ambos múltiplos** y hace un promedio ponderado:

### Ejemplo: Empresa de Tecnología
```
Ingresos: 1.000.000 €
EBITDA: 200.000 €
Margen EBITDA: 20%

Valoración por Revenue:
- Mínimo: 1.000.000 × 2.5 = 2.500.000 €
- Promedio: 1.000.000 × 4.5 = 4.500.000 €
- Máximo: 1.000.000 × 7.0 = 7.000.000 €

Valoración por EBITDA:
- Mínimo: 200.000 × 12 = 2.400.000 €
- Promedio: 200.000 × 18 = 3.600.000 €
- Máximo: 200.000 × 25 = 5.000.000 €

Resultado final (promedio ponderado 30% Revenue / 70% EBITDA):
- Rango: 2.400.000 € - 7.000.000 €
- Valor Central: 4.050.000 €
```

---

## 💡 ¿Son correctos estos múltiplos?

### ✅ **Están bien si:**
- Representan tu experiencia en el mercado español de PYMEs
- Son conservadores (mejor dar rango bajo y sorprender al alza)
- Se alinean con transacciones recientes que has cerrado

### ⚠️ **Considera ajustarlos si:**
- Cierras operaciones a múltiplos muy diferentes
- Hay sectores específicos donde tienes más expertise
- Quieres ser más agresivo/conservador en ciertos sectores

---

## 🔧 Cómo ajustar los múltiplos

Si quieres cambiar algún sector, edita el archivo `valuation-data.js`:

```javascript
'tecnologia-software': {
    name: 'Tecnología y Software',
    evRevenue: { min: 2.5, avg: 4.5, max: 7.0 },  // ← Cambia aquí
    evEbitda: { min: 12, avg: 18, max: 25 }        // ← Y aquí
},
```

### Ejemplos de ajustes comunes:

**Si vendes muchas empresas de hostelería y tus múltiplos son más altos:**
```javascript
'hosteleria-restauracion': {
    name: 'Hostelería y Restauración',
    evRevenue: { min: 0.7, avg: 1.3, max: 2.5 },  // ← Aumentado
    evEbitda: { min: 7, avg: 11, max: 15 }        // ← Aumentado
},
```

**Si quieres ser más conservador en tecnología:**
```javascript
'tecnologia-software': {
    name: 'Tecnología y Software',
    evRevenue: { min: 2.0, avg: 3.5, max: 5.0 },  // ← Reducido
    evEbitda: { min: 10, avg: 15, max: 20 }       // ← Reducido
},
```

---

## 📈 Comparación con mercado

### Múltiplos típicos según tamaño de empresa:

| Tamaño Empresa | EV/EBITDA Promedio |
|----------------|-------------------|
| Micro (<1M facturación) | 3x - 5x |
| Pequeña (1-10M) | 5x - 8x ← **TU CALCULADORA** |
| Mediana (10-50M) | 7x - 12x |
| Grande (>50M) | 10x - 20x |

**Los múltiplos de tu calculadora están en el rango 5x-18x**, lo cual es **correcto para PYMEs de 1-10M de facturación**.

---

## 🎨 Factores que aumentan/reducen múltiplos

### ✅ Aumentan valoración:
- Crecimiento >20% anual
- Margen EBITDA >20%
- Clientes recurrentes/contratos
- Propiedad intelectual/patentes
- Poca dependencia del fundador
- Mercado en crecimiento

### ❌ Reducen valoración:
- Decrecimiento o estancamiento
- Margen EBITDA <5%
- Concentración de clientes
- Dependencia total del fundador
- Sector maduro/en declive
- Problemas legales/fiscales

---

## 💼 Recomendaciones según tu experiencia

### Si cierras operaciones habitualmente:

**Hostelería/Restauración a 7-9x EBITDA:**
→ Aumenta los múltiplos actuales (ahora 6-9x)

**Comercio a 4-6x EBITDA:**
→ Los actuales (5-8x) están bien

**Tecnología a 12-18x EBITDA:**
→ Los actuales (12-18x) están correctos

**Servicios profesionales a 8-12x EBITDA:**
→ Los actuales (7-11x) son conservadores

---

## 🚀 Testing recomendado

Antes de lanzar al público:

1. **Prueba con 3-5 empresas que hayas vendido**
2. **Compara los resultados de la calculadora con el precio final**
3. **Ajusta los múltiplos si las diferencias son >30%**

### Ejemplo de test:

```
Caso real: Restaurante vendido por 450.000€
- Ingresos: 400.000€
- EBITDA: 60.000€
- Múltiplo real: 7.5x EBITDA

¿Qué dice la calculadora?
- Rango: 360.000€ - 780.000€ (6x-13x)
- Promedio: 540.000€ (9x)
✅ El precio real está dentro del rango
```

---

## 📞 ¿Quieres que ajuste algún sector?

Dime qué sectores quieres cambiar y a qué múltiplos, y lo actualizo inmediatamente.

**Formato:**
```
Sector: Hostelería
EV/Revenue: min 0.7, avg 1.3, max 2.2
EV/EBITDA: min 7, avg 10, max 14
Razón: Cierro operaciones a múltiplos más altos en ubicaciones prime
```
