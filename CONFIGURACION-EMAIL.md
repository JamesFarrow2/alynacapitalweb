# Configuración del Sistema de Emails - Calculadora de Valoración

## ¿Qué hace el sistema?

Cuando un usuario usa la calculadora:
1. **Email al cliente**: Recibe los resultados + análisis profesional personalizado
2. **Email a Alyna Capital**: Recibes todos los datos del lead formatado
3. **Consola del navegador**: Mientras no configures EmailJS, puedes ver todos los datos en la consola (F12)

---

## OPCIÓN 1: Ver los datos sin configurar nada (ACTUAL)

**Cómo ver los leads ahora mismo:**

1. Abre la página de fusiones-adquisiciones.html en el navegador
2. Presiona `F12` para abrir la consola de desarrollador
3. Usa la calculadora normalmente
4. En la consola verás algo así:

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
   Rango: 2.400.000 € - 5.000.000 €
   Valor Central: 3.500.000 €
───────────────────────────────────────────────
📅 Fecha: 28/11/2025 15:30:45
═══════════════════════════════════════════════
```

También verás el análisis completo que se enviaría al cliente.

---

## OPCIÓN 2: Configurar EmailJS para envío automático (RECOMENDADO)

EmailJS es **GRATIS** hasta 200 emails/mes. Perfecto para empezar.

### Paso 1: Crear cuenta en EmailJS

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click en "Sign Up" (Registrarse)
3. Usa tu email de Alyna Capital
4. Verifica tu email

### Paso 2: Configurar servicio de email

1. En el dashboard, ve a "Email Services"
2. Click "Add New Service"
3. Selecciona tu proveedor (Gmail, Outlook, etc.)
4. Sigue las instrucciones para conectar tu cuenta
5. **Copia el SERVICE_ID** que te dan

### Paso 3: Crear plantilla para el CLIENTE

1. Ve a "Email Templates"
2. Click "Create New Template"
3. Nombre: "Resultados Valoración Cliente"
4. En el editor, usa esta plantilla:

**Subject:**
```
Tu valoración estimada - {{sector}}
```

**Body (HTML):**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Montserrat', Arial, sans-serif; line-height: 1.6; color: #3c3c3b; }
        .header { background: linear-gradient(135deg, #74bba0 0%, #5fa98a 100%); color: white; padding: 30px; text-align: center; }
        .content { padding: 30px; max-width: 600px; margin: 0 auto; }
        .result-box { background: #f5f5f5; border-left: 4px solid #74bba0; padding: 20px; margin: 20px 0; }
        .footer { background: #3c3c3b; color: white; padding: 20px; text-align: center; font-size: 12px; }
        h2 { color: #74bba0; }
        .highlight { font-size: 24px; font-weight: bold; color: #74bba0; }
    </style>
</head>
<body>
    <div class="header">
        <h1>ALYNA CAPITAL</h1>
        <p>Resultados de tu Valoración</p>
    </div>

    <div class="content">
        <p>Hola {{to_name}},</p>

        <div class="result-box">
            <h2>Valoración Estimada</h2>
            <p class="highlight">{{valuation_min}} - {{valuation_max}}</p>
            <p><strong>Valor Central:</strong> {{valuation_avg}}</p>
            <p><strong>Sector:</strong> {{sector}}</p>
        </div>

        <h2>Datos de tu Empresa</h2>
        <ul>
            <li><strong>Ingresos Anuales:</strong> {{revenue}}</li>
            <li><strong>EBITDA:</strong> {{ebitda}}</li>
        </ul>

        <h2>Metodología Aplicada</h2>
        <ul>
            <li><strong>Por Ingresos:</strong> {{method_revenue}}</li>
            <li><strong>Por EBITDA:</strong> {{method_ebitda}}</li>
        </ul>

        <div style="white-space: pre-wrap; background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">{{professional_analysis}}</div>

        <div style="text-align: center; margin: 30px 0;">
            <a href="https://tuweb.com/contacto" style="background: #74bba0; color: white; padding: 15px 30px; text-decoration: none; border-radius: 50px; display: inline-block;">
                Solicitar Valoración Profesional Gratuita
            </a>
        </div>
    </div>

    <div class="footer">
        <p>© 2025 Alyna Capital - Todos los derechos reservados</p>
        <p>Esta valoración es orientativa. Consulta nuestros términos y condiciones.</p>
    </div>
</body>
</html>
```

4. Click "Save"
5. **Copia el TEMPLATE_ID**

### Paso 4: Crear plantilla para ADMINISTRADOR (tú)

1. Crea otra plantilla nueva
2. Nombre: "Notificación Lead Valoración"
3. **Subject:**
```
🎯 Nuevo Lead - Calculadora Valoración - {{lead_name}}
```

4. **Body:**
```html
<!DOCTYPE html>
<html>
<body style="font-family: monospace; background: #f5f5f5; padding: 20px;">
    <div style="background: white; padding: 30px; border-radius: 8px; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #74bba0;">🎯 NUEVO LEAD - CALCULADORA</h1>

        <h2>Datos del Contacto</h2>
        <ul>
            <li><strong>Email:</strong> {{lead_email}}</li>
            <li><strong>Nombre:</strong> {{lead_name}}</li>
            <li><strong>Fecha:</strong> {{date}}</li>
        </ul>

        <h2>Datos de la Empresa</h2>
        <ul>
            <li><strong>Sector:</strong> {{sector}}</li>
            <li><strong>Ingresos:</strong> {{revenue}}</li>
            <li><strong>EBITDA:</strong> {{ebitda}}</li>
            <li><strong>Margen EBITDA:</strong> {{margin_percent}}</li>
            <li><strong>Empleados:</strong> {{employees}}</li>
        </ul>

        <h2 style="color: #74bba0;">💎 Valoración Calculada</h2>
        <div style="background: #f0f8f5; padding: 20px; border-left: 4px solid #74bba0;">
            <p><strong>Rango:</strong> {{valuation_range}}</p>
            <p><strong>Valor Central:</strong> {{valuation_avg}}</p>
        </div>

        <div style="margin-top: 30px; padding: 15px; background: #fff3cd; border-radius: 5px;">
            <strong>⚡ Acción requerida:</strong> Contacta con este lead lo antes posible mientras el interés está alto.
        </div>

        <div style="margin-top: 20px; text-align: center;">
            <a href="mailto:{{lead_email}}" style="background: #74bba0; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">
                Responder a {{lead_name}}
            </a>
        </div>
    </div>
</body>
</html>
```

5. **Copia el TEMPLATE_ID**

### Paso 5: Actualizar el código

1. Abre `fusiones-adquisiciones.html`
2. Añade ANTES del cierre de `</body>`:

```html
<!-- EmailJS SDK -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
<script type="text/javascript">
    (function(){
        emailjs.init("TU_PUBLIC_KEY_AQUI"); // Copia tu Public Key del dashboard de EmailJS
    })();
</script>
```

3. Abre `calculator.js`
4. Busca las líneas que dicen:
   - `'YOUR_SERVICE_ID'` → Reemplaza con tu SERVICE_ID
   - `'client_template'` → Reemplaza con el TEMPLATE_ID del email al cliente
   - `'admin_template'` → Reemplaza con el TEMPLATE_ID del email al admin

**Ejemplo:**
```javascript
emailjs.send('service_abc1234', 'template_xyz5678', { ... })
```

### Paso 6: Configurar email de destino para notificaciones

En EmailJS, en la plantilla de administrador:
1. Ve a "Settings" de la plantilla
2. En "To Email" pon: `tu@alynacapital.com` (o el email donde quieres recibir las notificaciones)

---

## OPCIÓN 3: Integrar con tu CRM o base de datos

Si prefieres guardar los datos en una base de datos o CRM (HubSpot, Salesforce, etc.):

1. Crea un endpoint en tu backend
2. En `calculator.js`, busca la función `sendLeadNotification`
3. Añade un fetch a tu API:

```javascript
fetch('https://tu-api.com/leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        email: email,
        name: name,
        data: calculationData
    })
});
```

---

## Ventajas de cada opción

| Opción | Ventaja | Desventaja |
|--------|---------|------------|
| Consola del navegador | Inmediato, sin configuración | Tienes que estar mirando la consola |
| EmailJS | Automático, emails bonitos, GRATIS | Requiere 10 min de configuración |
| Backend propio | Control total, CRM integrado | Requiere desarrollo |

---

## Recomendación

**Para empezar**: Usa la consola del navegador (ya funciona)
**Para producción**: Configura EmailJS (10 minutos, gratis, profesional)
**Para escala**: Integra con tu CRM cuando tengas muchos leads

---

## ¿Necesitas ayuda?

Si tienes problemas configurando EmailJS, avísame y te ayudo paso a paso.
