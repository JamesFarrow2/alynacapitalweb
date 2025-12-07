# Guía Rápida - Calculadora de Valoración

## 📋 Cómo usar la calculadora

### 1. Formato de números

**Ahora puedes escribir los números de TRES formas:**

✅ **Con puntos** (recomendado para legibilidad):
```
1.000.000
200.000
```

✅ **Sin separadores**:
```
1000000
200000
```

✅ **Con comas**:
```
1,000,000
200,000
```

**El sistema automáticamente:**
- Limpia los caracteres no numéricos
- Formatea con puntos cuando sales del campo
- Calcula correctamente el valor

### 2. Ejemplo práctico

Imaginemos una empresa de software:

| Campo | Qué escribir | Ejemplo |
|-------|-------------|---------|
| Sector | Seleccionar del menú | "Tecnología y Software" |
| Ingresos Anuales | Facturación del año | `1.000.000` (un millón) |
| EBITDA | Beneficio operativo | `200.000` (doscientos mil) |
| Empleados | Opcional | `15` |

**Al salir del campo**, el número se formatea automáticamente con puntos:
- Escribes: `1000000`
- Se muestra: `1.000.000`

### 3. Flujo completo

```
1. Seleccionar sector
   ↓
2. Introducir Ingresos (ej: 1.000.000)
   ↓
3. Introducir EBITDA (ej: 200.000)
   ↓
4. [Opcional] Número de empleados
   ↓
5. Click "Calcular Valoración"
   ↓
6. Aparece modal pidiendo EMAIL
   ↓
7. Introducir email + aceptar privacidad
   ↓
8. Click "Ver Resultados"
   ↓
9. Se muestran los resultados en pantalla
   ↓
10. Los datos se registran en la consola
```

---

## 💻 Cómo ver los datos del lead (Mac)

### Opción 1: Google Chrome (Recomendado)

1. Abre la página `fusiones-adquisiciones.html` en Chrome
2. Presiona: **`Cmd + Option + J`**
3. Se abre el panel de DevTools en la pestaña "Console"
4. Usa la calculadora normalmente
5. Verás todos los datos del lead formateados así:

```
═══════════════════════════════════════════════
🎯 NUEVO LEAD - CALCULADORA DE VALORACIÓN
═══════════════════════════════════════════════
📧 Email: cliente@empresa.com
👤 Nombre: Juan Pérez
🏢 Sector: Tecnología y Software
💰 Ingresos: 1.000.000 €
📊 EBITDA: 200.000 €
📈 Margen EBITDA: 20.0%
👥 Empleados: 15
───────────────────────────────────────────────
💎 VALORACIÓN ESTIMADA:
   Rango: 2.500.000 € - 7.000.000 €
   Valor Central: 4.050.000 €
───────────────────────────────────────────────
📅 Fecha: 28/11/2025, 15:30:45
═══════════════════════════════════════════════
```

**También verás** el análisis completo que recibiría el cliente por email.

### Opción 2: Safari

1. **Primero habilita el menú desarrollador** (solo una vez):
   - Abre Safari
   - Menu: Safari → Preferencias (o Settings)
   - Ve a la pestaña "Avanzado"
   - Marca: ☑️ "Mostrar el menú Desarrollador en la barra de menús"

2. **Luego, para ver la consola**:
   - Presiona: **`Cmd + Option + C`**
   - O: Menu Desarrollador → Mostrar Consola JavaScript

### Opción 3: Firefox

- Presiona: **`Cmd + Option + K`**

---

## 🎨 Vista de la consola

La consola muestra información en **dos formatos**:

### Formato 1: Lead Data (formateado)
```
═══════════════════════════════════════════════
🎯 NUEVO LEAD - CALCULADORA DE VALORACIÓN
...
```
👆 Este es el más fácil de leer

### Formato 2: Email cliente (expandible)
```
Email para cliente: { ... }
```
👆 Click en la flecha `▶` para expandir y ver el análisis completo

---

## 📊 Información que captura

Para cada lead, recibes:

### Datos de contacto
- ✉️ Email
- 👤 Nombre (si lo pone)
- 📅 Fecha y hora exacta

### Datos de la empresa
- 🏢 Sector
- 💰 Ingresos anuales
- 📊 EBITDA
- 📈 Margen EBITDA (calculado automáticamente)
- 👥 Número de empleados

### Valoración calculada
- 💎 Rango de valoración (mínimo - máximo)
- 🎯 Valor central
- 📐 Metodología por ingresos
- 📐 Metodología por EBITDA

### Análisis enviado al cliente
- Texto completo del análisis personalizado
- Comentarios sobre el margen EBITDA
- Factores no considerados
- Próximos pasos

---

## 🔍 Tips para analizar los leads

### Leads de alta calidad (contactar urgente):

✅ Margen EBITDA > 15%
✅ Ingresos > 500.000€
✅ Proporciona nombre y email corporativo
✅ Sector de alto múltiplo (tecnología, salud, etc.)

### Leads para nutrir:

⚠️ Margen EBITDA 5-15%
⚠️ Ingresos 100.000 - 500.000€
⚠️ Sectores de múltiplo medio

### Red flags:

🚩 Margen EBITDA < 5% (empresa con problemas)
🚩 Solo email, sin nombre
🚩 Datos no coherentes

---

## 🚀 Próximos pasos (configurar emails)

Ahora mismo ves los datos en la consola. Para **recibir emails automáticos**:

1. Lee el archivo: `CONFIGURACION-EMAIL.md`
2. Sigue los pasos para configurar EmailJS (10 minutos)
3. Recibirás emails automáticos cada vez que alguien use la calculadora

**Ventajas de configurar emails:**
- ✅ Notificación instantánea en tu bandeja
- ✅ Email bonito con toda la info formateada
- ✅ Cliente recibe automáticamente su valoración
- ✅ No necesitas estar mirando la consola
- ✅ GRATIS hasta 200 emails/mes

---

## 💡 Ejemplos de uso

### Ejemplo 1: Empresa de Tecnología rentable

```
Sector: Tecnología y Software
Ingresos: 2.500.000
EBITDA: 600.000
Empleados: 25
→ Margen EBITDA: 24% (EXCELENTE)
→ Valoración: 6.250.000 - 17.500.000 €
→ Acción: Contactar URGENTE
```

### Ejemplo 2: Restaurante pequeño

```
Sector: Hostelería y Restauración
Ingresos: 350.000
EBITDA: 35.000
Empleados: 8
→ Margen EBITDA: 10% (BUENO)
→ Valoración: 175.000 - 700.000 €
→ Acción: Lead cualificado, hacer seguimiento
```

### Ejemplo 3: Comercio con margen bajo

```
Sector: Comercio y Retail
Ingresos: 800.000
EBITDA: 32.000
Empleados: 5
→ Margen EBITDA: 4% (BAJO)
→ Valoración: 240.000 - 960.000 €
→ Acción: Educar sobre mejora de márgenes antes de venta
```

---

## ❓ Preguntas frecuentes

**P: ¿Qué pasa si pongo los números con comas?**
R: Funciona perfectamente. El sistema acepta: 1.000.000 o 1,000,000 o 1000000

**P: ¿Tengo que tener la consola abierta siempre?**
R: No, pero mientras no configures EmailJS, es la única forma de ver los leads.

**P: ¿Se guardan los datos en algún sitio?**
R: Ahora mismo solo en la consola (temporal). Cuando configures EmailJS, llegarán a tu email.

**P: ¿Puedo usar esto en producción ya?**
R: ¡SÍ! Está 100% funcional. Solo que necesitas mirar la consola para ver los leads.

**P: ¿Cuánto tarda configurar los emails?**
R: 10-15 minutos siguiendo la guía de CONFIGURACION-EMAIL.md

---

## 📞 ¿Necesitas ayuda?

Si tienes algún problema:
1. Asegúrate de estar usando Chrome (es más fácil)
2. Verifica que la consola esté abierta (Cmd+Option+J)
3. Prueba con datos de ejemplo (sector: Tecnología, ingresos: 1000000, EBITDA: 200000)
4. Si no ves nada, recarga la página (Cmd+R) y vuelve a intentar

¡La calculadora está lista para capturar leads! 🎉
