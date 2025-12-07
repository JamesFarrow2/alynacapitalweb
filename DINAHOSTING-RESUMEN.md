# Configuración Dinahosting - Resumen Ejecutivo

## ⚡ Lo que necesitas saber

**Tienes Dinahosting, pero NECESITAS EmailJS de todas formas** para que la calculadora envíe emails desde el navegador.

### Por qué:
- ❌ Dinahosting NO puede enviar emails directamente desde JavaScript del navegador (seguridad)
- ✅ EmailJS SÍ puede hacerlo, y usa tu cuenta de Dinahosting como remitente
- ✅ EmailJS es GRATIS hasta 200 emails/mes

---

## 🎯 La solución: EmailJS + Dinahosting

```
Usuario usa calculadora
    ↓
JavaScript activa EmailJS
    ↓
EmailJS envía email usando tu cuenta de Dinahosting
    ↓
Email llega desde: calculadora@alynacapital.com
```

**Ventajas:**
- ✅ Emails profesionales desde tu dominio @alynacapital.com
- ✅ Sin programar backend
- ✅ Gratis hasta 200 emails/mes
- ✅ Configuración: 15 minutos

---

## 📋 Pasos rápidos (15 minutos)

### 1️⃣ En Dinahosting (5 min)
1. Entra a tu panel de Dinahosting
2. Ve a **Email → Cuentas de correo**
3. Crea: `calculadora@alynacapital.com` (o `noreply@alynacapital.com`)
4. Anota la contraseña

### 2️⃣ En EmailJS (5 min)
1. Regístrate en [emailjs.com](https://www.emailjs.com/)
2. Ve a **Email Services** → **Add New Service**
3. Selecciona **"Custom SMTP"**
4. Introduce estos datos:

```
SMTP Server: mail.alynacapital.com
Port: 587
Username: calculadora@alynacapital.com
Password: [la que creaste]
Security: TLS/STARTTLS
```

### 3️⃣ Crear plantillas en EmailJS (5 min)
1. **Email Templates** → **Create New Template**
2. Crea 2 plantillas:
   - Una para el cliente (con los resultados)
   - Una para ti (notificación de lead)
3. Copia los TEMPLATE_ID que te dan

### 4️⃣ Actualizar el código (2 min)
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

En `calculator.js`, reemplaza:
- `'YOUR_SERVICE_ID'` → Tu SERVICE_ID de EmailJS
- `'client_template'` → TEMPLATE_ID del email al cliente
- `'admin_template'` → TEMPLATE_ID del email a ti

---

## 🔍 ¿Dónde encuentro los datos SMTP de Dinahosting?

Normalmente son:
```
Servidor: mail.alynacapital.com
Puerto: 587 (TLS) o 465 (SSL)
```

Si no los encuentras:
1. Panel Dinahosting → Email → Configuración
2. O contacta soporte Dinahosting (responden en 1-2h)

---

## ✅ Checklist

- [ ] Crear `calculadora@alynacapital.com` en Dinahosting
- [ ] Anotar usuario, contraseña y servidor SMTP
- [ ] Registrarse en EmailJS
- [ ] Conectar EmailJS con SMTP de Dinahosting
- [ ] Crear plantilla "cliente" en EmailJS
- [ ] Crear plantilla "admin" en EmailJS
- [ ] Añadir script de EmailJS al HTML
- [ ] Actualizar calculator.js con tus IDs
- [ ] Probar envío de test
- [ ] 🚀 Lanzar en producción

---

## 💰 Costes

| Servicio | Coste |
|----------|-------|
| Dinahosting | Ya lo tienes pagado ✅ |
| EmailJS | Gratis hasta 200 emails/mes |
| **TOTAL** | **0 €** |

Si creces mucho (>200 emails/mes):
- EmailJS Plan Pro: 7€/mes (1000 emails)

---

## 🆘 ¿Necesitas ayuda?

Lee la guía completa en: [DINAHOSTING-EMAIL-SETUP.md](DINAHOSTING-EMAIL-SETUP.md)

O las plantillas HTML en: [CONFIGURACION-EMAIL.md](CONFIGURACION-EMAIL.md)

---

## 🚀 Alternativa sin EmailJS (más complejo)

Si prefieres programar un backend PHP en Dinahosting (no recomendado para empezar):
- Requiere crear un archivo PHP en tu servidor
- Más control pero más trabajo
- Ver guía completa en DINAHOSTING-EMAIL-SETUP.md

**Recomendación:** Empieza con EmailJS. Es más fácil y profesional.

---

**Tiempo total estimado: 15-20 minutos** ⏱️
