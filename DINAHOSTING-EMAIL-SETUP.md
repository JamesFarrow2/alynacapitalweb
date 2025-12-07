# Configuración de Emails con Dinahosting

## ¿EmailJS o Dinahosting?

Tienes Dinahosting, que es genial, pero **necesitas EmailJS de todas formas**. Te explico por qué:

### 🔐 Dinahosting (Hosting + Email)
- ✅ Tienes tu servidor de email corporativo
- ✅ Puedes enviar/recibir emails desde tu@alynacapital.com
- ❌ **NO puede enviar emails directamente desde JavaScript del navegador** (seguridad)

### 📧 EmailJS (Servicio de envío desde web)
- ✅ Servicio que SÍ puede enviar emails desde el navegador
- ✅ Se conecta a tu email de Dinahosting como "remitente"
- ✅ Gratis hasta 200 emails/mes
- ✅ No requiere programar backend

---

## 🎯 La solución óptima: EmailJS + Dinahosting

**Cómo funciona:**

```
Usuario usa calculadora
    ↓
JavaScript activa EmailJS
    ↓
EmailJS envía email usando tu cuenta de Dinahosting
    ↓
Email llega desde: noreply@alynacapital.com
                  o: calculadora@alynacapital.com
```

---

## 📝 Configuración paso a paso

### Opción 1: EmailJS con tu cuenta de Dinahosting (RECOMENDADO)

#### Paso 1: Crea una cuenta de email en Dinahosting

1. Entra al panel de Dinahosting
2. Ve a **Email → Cuentas de correo**
3. Crea una nueva cuenta: `calculadora@alynacapital.com` o `noreply@alynacapital.com`
4. Anota la contraseña

#### Paso 2: Configura EmailJS

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Regístrate con tu email de Alyna Capital
3. Ve a **Email Services** → **Add New Service**
4. Selecciona **"Custom SMTP"** (no Gmail, ni Outlook)

#### Paso 3: Datos SMTP de Dinahosting

Introduce estos datos en EmailJS:

```
SMTP Server: mail.alynacapital.com
(o el que te dé Dinahosting, suele ser mail.tudominio.com)

Port: 587
(o 465 si usas SSL)

Username: calculadora@alynacapital.com
(la cuenta que creaste)

Password: [tu contraseña]

Security: TLS/STARTTLS
```

**¿No sabes los datos SMTP?**
- Busca en tu panel de Dinahosting: "Configuración de email" o "SMTP"
- O contacta con soporte de Dinahosting, te los dan al instante

#### Paso 4: Prueba que funciona

En EmailJS:
1. Ve a **Email Templates**
2. Crea una plantilla de prueba
3. Click en **"Send Test Email"**
4. Si llega → ✅ Todo configurado correctamente

---

## 📋 Datos SMTP típicos de Dinahosting

Normalmente Dinahosting usa:

```
Servidor SMTP entrante (IMAP):
- Host: mail.tudominio.com
- Puerto: 993 (SSL)

Servidor SMTP saliente:
- Host: mail.tudominio.com
- Puerto: 587 (TLS) o 465 (SSL)
- Autenticación: SÍ (requiere usuario y contraseña)
```

---

## 🆚 Comparación de opciones

| Método | Ventaja | Desventaja | Coste |
|--------|---------|-----------|-------|
| **EmailJS + Dinahosting** | ✅ Email desde tu dominio<br>✅ Sin backend<br>✅ Fácil setup | ⚠️ Límite 200/mes gratis | Gratis |
| **Backend propio + Dinahosting** | ✅ Control total<br>✅ Sin límites | ❌ Requiere programar PHP/Node<br>❌ Más complejo | Gratis |
| **Solo Dinahosting (formulario PHP)** | ✅ Ya lo tienes | ❌ Requiere backend<br>❌ Menos interactivo | Gratis |

**Recomendación:** Usa **EmailJS + Dinahosting** (opción 1)

---

## 🚀 Implementación rápida

Una vez configurado EmailJS con Dinahosting:

### 1. Añade el SDK de EmailJS

En `fusiones-adquisiciones.html`, antes de `</body>`:

```html
<!-- EmailJS SDK -->
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
<script>
    (function(){
        emailjs.init("TU_PUBLIC_KEY"); // De EmailJS dashboard
    })();
</script>
```

### 2. Actualiza calculator.js

Busca estas líneas:
```javascript
emailjs.send('YOUR_SERVICE_ID', 'client_template', { ... })
```

Cambia a:
```javascript
emailjs.send('service_abc123', 'template_xyz789', { ... })
```

Con tus IDs reales de EmailJS.

---

## 📊 Flujo de emails

### Email 1: Al cliente

```
De: calculadora@alynacapital.com
Para: cliente@empresa.com
Asunto: Tu valoración estimada - [Sector]

[Contenido con análisis profesional]
```

### Email 2: A ti (Alyna Capital)

```
De: calculadora@alynacapital.com
Para: info@alynacapital.com (o el que quieras)
Asunto: 🎯 Nuevo Lead - Calculadora - [Nombre Cliente]

[Datos del lead formateados]
```

---

## ⚙️ Alternativa: Backend PHP con Dinahosting

Si prefieres NO usar EmailJS y hacer todo con Dinahosting:

### 1. Crea `send-valuation.php` en tu servidor:

```php
<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// Recibir datos
$data = json_decode(file_get_contents('php://input'), true);

$to = $data['email'];
$subject = "Tu valoración estimada - " . $data['sector'];
$message = $data['analysis'];

// Headers
$headers = "From: calculadora@alynacapital.com\r\n";
$headers .= "Reply-To: info@alynacapital.com\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

// Enviar email
$sent = mail($to, $subject, $message, $headers);

// Email a ti
$adminEmail = "info@alynacapital.com";
$adminSubject = "🎯 Nuevo Lead - " . $data['name'];
$adminMessage = "Email: " . $data['email'] . "\n\n" . $data['leadData'];
mail($adminEmail, $adminSubject, $adminMessage, $headers);

echo json_encode(['success' => $sent]);
?>
```

### 2. Modifica calculator.js:

```javascript
// En lugar de emailjs.send():
fetch('https://alynacapital.com/send-valuation.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        email: email,
        name: name,
        sector: valuation.sectorName,
        analysis: analysis,
        leadData: JSON.stringify(calculationData)
    })
})
.then(response => response.json())
.then(data => {
    console.log('Email enviado:', data);
});
```

**Ventaja:** Control total, sin límites
**Desventaja:** Más complejo de configurar

---

## 💡 Recomendación final

**EMPIEZA con EmailJS + Dinahosting:**

1. ⏱️ Configuración: 15 minutos
2. 💰 Coste: Gratis (200 emails/mes)
3. 🎨 Emails bonitos con HTML
4. 📧 Desde tu dominio (@alynacapital.com)

**Si creces mucho (>200 emails/mes):**
- EmailJS Plan Pro: 7€/mes (1000 emails)
- O migra a backend PHP propio

---

## 🆘 ¿Necesitas ayuda?

### Para encontrar datos SMTP de Dinahosting:

1. **Panel Dinahosting** → Email → Configuración
2. O búscalos en: https://dinahosting.com/ayuda/email
3. O contacta soporte: suelen responder en 1-2 horas

### Para configurar EmailJS:

1. Sigue la guía en: [CONFIGURACION-EMAIL.md](CONFIGURACION-EMAIL.md)
2. Usa los datos SMTP de Dinahosting
3. Prueba con email de test primero

---

## ✅ Checklist de configuración

- [ ] Crear cuenta `calculadora@alynacapital.com` en Dinahosting
- [ ] Anotar usuario, contraseña y servidor SMTP
- [ ] Registrarse en EmailJS
- [ ] Conectar EmailJS con SMTP de Dinahosting
- [ ] Crear plantilla "cliente" en EmailJS
- [ ] Crear plantilla "admin" en EmailJS
- [ ] Añadir script de EmailJS al HTML
- [ ] Actualizar calculator.js con tus IDs
- [ ] Probar envío de test
- [ ] ✨ Lanzar en producción

---

**Tiempo estimado total: 20-30 minutos**

¿Empezamos? Dime si necesitas ayuda con algún paso específico.
