// Calculator functionality for valuation tool
// Requires valuation-data.js to be loaded first

(function() {
    'use strict';

    // State management
    let calculationData = null;
    let userEmail = null;

    // DOM Elements
    const calculateBtn = document.getElementById('calculateBtn');
    const calculatorForm = document.getElementById('calculatorForm');
    const calculatorResults = document.getElementById('calculatorResults');
    const emailModal = document.getElementById('emailModal');
    const emailForm = document.getElementById('emailForm');
    const modalClose = document.getElementById('modalClose');
    const calculateAgainBtn = document.getElementById('calculateAgain');
    const requestDetailedValuationBtn = document.getElementById('requestDetailedValuation');

    // Input elements
    const sectorInput = document.getElementById('sector');
    const revenueInput = document.getElementById('revenue');
    const ebitdaInput = document.getElementById('ebitda');
    const employeesInput = document.getElementById('employees');

    // Result elements
    const resultsSector = document.getElementById('resultsSector');
    const resultMin = document.getElementById('resultMin');
    const resultMax = document.getElementById('resultMax');
    const resultAvg = document.getElementById('resultAvg');
    const methodRevenue = document.getElementById('methodRevenue');
    const methodEbitda = document.getElementById('methodEbitda');

    // Initialize
    if (calculateBtn) {
        calculateBtn.addEventListener('click', handleCalculateClick);
    }

    // Auto-format currency inputs
    if (revenueInput) {
        revenueInput.addEventListener('input', formatCurrencyInput);
        revenueInput.addEventListener('blur', formatCurrencyOnBlur);
    }

    if (ebitdaInput) {
        ebitdaInput.addEventListener('input', formatCurrencyInput);
        ebitdaInput.addEventListener('blur', formatCurrencyOnBlur);
    }

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    if (emailModal) {
        emailModal.addEventListener('click', function(e) {
            if (e.target === emailModal) {
                closeModal();
            }
        });
    }

    if (emailForm) {
        emailForm.addEventListener('submit', handleEmailSubmit);
    }

    if (calculateAgainBtn) {
        calculateAgainBtn.addEventListener('click', resetCalculator);
    }

    if (requestDetailedValuationBtn) {
        requestDetailedValuationBtn.addEventListener('click', function() {
            // Redirect to contact section
            window.location.href = 'index.html#contacto';
        });
    }

    // Format currency input as user types
    function formatCurrencyInput(e) {
        let value = e.target.value;

        // Remove all non-numeric characters except dots and commas
        value = value.replace(/[^\d.,]/g, '');

        // Allow typing
        e.target.value = value;
    }

    // Format currency on blur (when user leaves the field)
    function formatCurrencyOnBlur(e) {
        let value = e.target.value;

        // Remove all separators
        value = value.replace(/[.,]/g, '');

        if (value && !isNaN(value)) {
            // Format with thousand separators (dots)
            const formatted = parseInt(value).toLocaleString('es-ES');
            e.target.value = formatted;
        }
    }

    // Parse currency value (remove separators)
    function parseCurrencyValue(value) {
        if (!value) return 0;
        // Remove all dots and commas
        const cleaned = value.replace(/[.,]/g, '');
        return parseFloat(cleaned) || 0;
    }

    // Handle calculate button click
    function handleCalculateClick(e) {
        e.preventDefault();

        // Validate inputs
        if (!validateInputs()) {
            return;
        }

        // Get form data - parse currency values
        const sector = sectorInput.value;
        const revenue = parseCurrencyValue(revenueInput.value);
        const ebitda = parseCurrencyValue(ebitdaInput.value);

        // Calculate valuation
        const valuation = calculateValuation(sector, revenue, ebitda);

        if (!valuation) {
            alert('Error al calcular la valoración. Por favor, verifica los datos.');
            return;
        }

        // Store calculation data
        calculationData = {
            sector: sector,
            sectorName: valuation.sectorName,
            revenue: revenue,
            ebitda: ebitda,
            employees: employeesInput.value || 'N/A',
            valuation: valuation,
            timestamp: new Date().toISOString()
        };

        // Show email modal
        showModal();
    }

    // Validate form inputs
    function validateInputs() {
        // Remove previous error states
        removeErrorStates();

        if (!sectorInput.value) {
            showError(sectorInput, 'Por favor, selecciona un sector');
            return false;
        }

        const revenue = parseCurrencyValue(revenueInput.value);
        if (!revenueInput.value || revenue <= 0) {
            showError(revenueInput, 'Por favor, introduce unos ingresos anuales válidos (mayor que 0)');
            return false;
        }

        const ebitda = parseCurrencyValue(ebitdaInput.value);
        if (!ebitdaInput.value) {
            showError(ebitdaInput, 'Por favor, introduce el EBITDA de tu empresa');
            return false;
        }
        if (ebitda < 0) {
            showError(ebitdaInput, 'El EBITDA no puede ser negativo');
            return false;
        }

        return true;
    }

    // Show error state on input
    function showError(input, message) {
        input.classList.add('input-error');
        input.focus();

        // Create error message if doesn't exist
        let errorMsg = input.parentElement.querySelector('.error-message');
        if (!errorMsg) {
            errorMsg = document.createElement('div');
            errorMsg.className = 'error-message';
            input.parentElement.appendChild(errorMsg);
        }
        errorMsg.textContent = message;

        // Shake animation
        input.style.animation = 'shake 0.5s';
        setTimeout(() => {
            input.style.animation = '';
        }, 500);
    }

    // Remove all error states
    function removeErrorStates() {
        document.querySelectorAll('.input-error').forEach(input => {
            input.classList.remove('input-error');
        });
        document.querySelectorAll('.error-message').forEach(msg => {
            msg.remove();
        });
    }

    // Show modal
    function showModal() {
        if (emailModal) {
            emailModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }

    // Close modal
    function closeModal() {
        if (emailModal) {
            emailModal.style.display = 'none';
            document.body.style.overflow = '';
        }
    }

    // Handle email form submission
    function handleEmailSubmit(e) {
        e.preventDefault();

        const email = document.getElementById('userEmail').value;
        const name = document.getElementById('userName').value || 'Cliente';
        const acceptPrivacy = document.getElementById('acceptPrivacy').checked;

        if (!email) {
            alert('Por favor, introduce tu email');
            return;
        }

        if (!acceptPrivacy) {
            alert('Debes aceptar la política de privacidad');
            return;
        }

        // Store user data
        userEmail = email;
        calculationData.userEmail = email;
        calculationData.userName = name;

        // Show loading state
        const submitBtn = e.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = 'Enviando...';
        submitBtn.disabled = true;

        // Send emails
        Promise.all([
            sendResultsToClient(email, name, calculationData),
            sendLeadNotification(email, name, calculationData)
        ])
        .then(() => {
            console.log('Emails enviados correctamente');
            // Close modal
            closeModal();
            // Show results
            displayResults();
        })
        .catch((error) => {
            console.error('Error al enviar emails:', error);
            alert('Hubo un problema al enviar el email. Aún así, puedes ver los resultados.');
            // Close modal and show results anyway
            closeModal();
            displayResults();
        })
        .finally(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
    }

    // Send results email to client
    function sendResultsToClient(email, name, data) {
        const valuation = data.valuation;
        const analysis = generateProfessionalAnalysis(data);

        // Using EmailJS (you'll need to configure this)
        if (typeof emailjs !== 'undefined') {
            return emailjs.send('YOUR_SERVICE_ID', 'client_template', {
                to_email: email,
                to_name: name,
                sector: valuation.sectorName,
                revenue: formatCurrency(data.revenue),
                ebitda: formatCurrency(data.ebitda),
                valuation_min: formatCurrency(valuation.recommended.min),
                valuation_max: formatCurrency(valuation.recommended.max),
                valuation_avg: formatCurrency(valuation.recommended.avg),
                method_revenue: formatCurrency(valuation.byRevenue.avg),
                method_ebitda: formatCurrency(valuation.byEbitda.avg),
                professional_analysis: analysis,
                date: new Date().toLocaleDateString('es-ES')
            });
        } else {
            // Fallback: Log to console
            console.log('Email para cliente:', {
                to: email,
                name: name,
                results: data,
                analysis: analysis
            });
            return Promise.resolve();
        }
    }

    // Send lead notification to Alyna Capital
    function sendLeadNotification(email, name, data) {
        const valuation = data.valuation;

        // Using EmailJS
        if (typeof emailjs !== 'undefined') {
            return emailjs.send('YOUR_SERVICE_ID', 'admin_template', {
                lead_email: email,
                lead_name: name,
                sector: valuation.sectorName,
                revenue: formatCurrency(data.revenue),
                ebitda: formatCurrency(data.ebitda),
                employees: data.employees,
                valuation_range: `${formatCurrency(valuation.recommended.min)} - ${formatCurrency(valuation.recommended.max)}`,
                valuation_avg: formatCurrency(valuation.recommended.avg),
                date: new Date().toLocaleString('es-ES'),
                margin_percent: ((data.ebitda / data.revenue) * 100).toFixed(1) + '%'
            });
        } else {
            // Fallback: Log to console with detailed info
            console.log('═══════════════════════════════════════════════');
            console.log('🎯 NUEVO LEAD - CALCULADORA DE VALORACIÓN');
            console.log('═══════════════════════════════════════════════');
            console.log('📧 Email:', email);
            console.log('👤 Nombre:', name);
            console.log('🏢 Sector:', valuation.sectorName);
            console.log('💰 Ingresos:', formatCurrency(data.revenue));
            console.log('📊 EBITDA:', formatCurrency(data.ebitda));
            console.log('📈 Margen EBITDA:', ((data.ebitda / data.revenue) * 100).toFixed(1) + '%');
            console.log('👥 Empleados:', data.employees || 'No especificado');
            console.log('───────────────────────────────────────────────');
            console.log('💎 VALORACIÓN ESTIMADA:');
            console.log('   Rango:', formatCurrency(valuation.recommended.min), '-', formatCurrency(valuation.recommended.max));
            console.log('   Valor Central:', formatCurrency(valuation.recommended.avg));
            console.log('───────────────────────────────────────────────');
            console.log('📅 Fecha:', new Date().toLocaleString('es-ES'));
            console.log('═══════════════════════════════════════════════');
            return Promise.resolve();
        }
    }

    // Generate professional analysis
    function generateProfessionalAnalysis(data) {
        const valuation = data.valuation;
        const margin = ((data.ebitda / data.revenue) * 100).toFixed(1);

        let analysis = `
Estimado/a ${data.userName},

Gracias por utilizar nuestra calculadora de valoración. A continuación encontrarás un análisis preliminar de los resultados obtenidos:

**Valoración Estimada:** ${formatCurrency(valuation.recommended.min)} - ${formatCurrency(valuation.recommended.max)}

**Análisis Inicial:**

Tu empresa en el sector ${valuation.sectorName} presenta un margen EBITDA del ${margin}%, `;

        // Add margin analysis
        if (parseFloat(margin) > 20) {
            analysis += `lo cual es excelente y refleja una operación muy eficiente. Este margen suele ser muy atractivo para compradores estratégicos y fondos de inversión.`;
        } else if (parseFloat(margin) > 10) {
            analysis += `lo cual está dentro de los rangos saludables para tu sector. Este nivel de rentabilidad es atractivo para potenciales compradores.`;
        } else if (parseFloat(margin) > 5) {
            analysis += `lo cual es moderado. Existen oportunidades para mejorar la rentabilidad antes de un proceso de venta que podrían incrementar significativamente la valoración.`;
        } else {
            analysis += `lo cual sugiere que hay importantes oportunidades de mejora operativa que podrían aumentar sustancialmente el valor de la empresa.`;
        }

        analysis += `

La valoración proporcionada se basa en múltiplos de mercado del sector ${valuation.sectorName}:
- Múltiplo EV/Ingresos aplicado: considera el tamaño y el potencial de crecimiento
- Múltiplo EV/EBITDA aplicado: refleja la rentabilidad y eficiencia operativa

**Importante - Factores No Considerados:**

Esta estimación es orientativa y NO incluye factores críticos que pueden aumentar o disminuir significativamente el valor final:

✓ Tasa de crecimiento histórica y proyectada
✓ Concentración de clientes y contratos recurrentes
✓ Calidad y dependencia del equipo directivo
✓ Activos tangibles e intangibles (marca, patentes, tecnología)
✓ Posición competitiva y barreras de entrada
✓ Calidad de los estados financieros y auditorías
✓ Contingencias legales, fiscales o laborales
✓ Capital de trabajo necesario y deuda financiera

**Próximos Pasos:**

Para obtener una valoración profesional precisa, realizamos un análisis exhaustivo que incluye:
1. Revisión detallada de estados financieros (3-5 años)
2. Análisis de la posición competitiva y del mercado
3. Due diligence preliminar
4. Identificación de sinergias potenciales para compradores
5. Estrategia de maximización de valor pre-venta

Esta valoración profesional es **completamente gratuita y confidencial**.

Si estás considerando vender tu empresa en los próximos 6-18 meses, te recomendamos iniciar el proceso de preparación cuanto antes.

¿Te gustaría que analicemos tu empresa en detalle? Simplemente responde a este email o llámanos.

Saludos cordiales,
Equipo Alyna Capital

---
Este email contiene información confidencial. La valoración proporcionada tiene carácter orientativo y no constituye una oferta de compra ni un compromiso de valoración final.
        `;

        return analysis;
    }

    // Display results
    function displayResults() {
        if (!calculationData) {
            return;
        }

        const valuation = calculationData.valuation;

        // Update sector
        resultsSector.textContent = `Sector: ${valuation.sectorName}`;

        // Update main results
        resultMin.textContent = formatCurrency(valuation.recommended.min);
        resultMax.textContent = formatCurrency(valuation.recommended.max);
        resultAvg.textContent = formatCurrency(valuation.recommended.avg);

        // Update methodology
        methodRevenue.textContent = formatCurrency(valuation.byRevenue.avg);
        methodEbitda.textContent = formatCurrency(valuation.byEbitda.avg);

        // Hide form, show results
        calculatorForm.style.display = 'none';
        calculatorResults.style.display = 'block';

        // Scroll to results
        calculatorResults.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Reset calculator
    function resetCalculator() {
        // Reset form
        sectorInput.value = '';
        revenueInput.value = '';
        ebitdaInput.value = '';
        employeesInput.value = '';

        // Reset state
        calculationData = null;

        // Show form, hide results
        calculatorForm.style.display = 'block';
        calculatorResults.style.display = 'none';

        // Scroll to form
        calculatorForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Optional: Function to send data to backend
    function sendLeadToBackend(data) {
        // Example implementation using fetch
        /*
        fetch('/api/valuation-leads', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            console.log('Lead sent successfully:', result);
        })
        .catch(error => {
            console.error('Error sending lead:', error);
        });
        */
    }

})();
