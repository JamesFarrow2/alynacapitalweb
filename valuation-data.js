// Múltiplos de valoración por sector basados en Damodaran
// Datos aproximados para mercados europeos
// Última actualización: 2025

const valuationMultiples = {
    'tecnologia-software': {
        name: 'Tecnología y Software',
        evRevenue: { min: 2.5, avg: 4.5, max: 7.0 },
        evEbitda: { min: 12, avg: 18, max: 25 }
    },
    'comercio-retail': {
        name: 'Comercio y Retail',
        evRevenue: { min: 0.3, avg: 0.6, max: 1.2 },
        evEbitda: { min: 5, avg: 8, max: 12 }
    },
    'hosteleria-restauracion': {
        name: 'Hostelería y Restauración',
        evRevenue: { min: 0.5, avg: 1.0, max: 2.0 },
        evEbitda: { min: 6, avg: 9, max: 13 }
    },
    'construccion': {
        name: 'Construcción',
        evRevenue: { min: 0.2, avg: 0.5, max: 0.9 },
        evEbitda: { min: 5, avg: 7, max: 10 }
    },
    'manufactura-industrial': {
        name: 'Manufactura e Industrial',
        evRevenue: { min: 0.4, avg: 0.8, max: 1.5 },
        evEbitda: { min: 6, avg: 9, max: 13 }
    },
    'servicios-profesionales': {
        name: 'Servicios Profesionales',
        evRevenue: { min: 0.8, avg: 1.5, max: 3.0 },
        evEbitda: { min: 7, avg: 11, max: 16 }
    },
    'salud-healthcare': {
        name: 'Salud y Healthcare',
        evRevenue: { min: 1.0, avg: 2.0, max: 4.0 },
        evEbitda: { min: 8, avg: 12, max: 18 }
    },
    'educacion': {
        name: 'Educación',
        evRevenue: { min: 0.8, avg: 1.5, max: 2.5 },
        evEbitda: { min: 7, avg: 10, max: 15 }
    },
    'logistica-transporte': {
        name: 'Logística y Transporte',
        evRevenue: { min: 0.3, avg: 0.7, max: 1.3 },
        evEbitda: { min: 5, avg: 8, max: 12 }
    },
    'alimentacion-bebidas': {
        name: 'Alimentación y Bebidas',
        evRevenue: { min: 0.5, avg: 1.2, max: 2.5 },
        evEbitda: { min: 7, avg: 10, max: 15 }
    },
    'energia-renovables': {
        name: 'Energía y Renovables',
        evRevenue: { min: 1.5, avg: 3.0, max: 5.5 },
        evEbitda: { min: 9, avg: 14, max: 20 }
    },
    'inmobiliario': {
        name: 'Inmobiliario',
        evRevenue: { min: 1.0, avg: 2.5, max: 4.5 },
        evEbitda: { min: 10, avg: 15, max: 22 }
    },
    'marketing-publicidad': {
        name: 'Marketing y Publicidad',
        evRevenue: { min: 0.5, avg: 1.0, max: 2.0 },
        evEbitda: { min: 6, avg: 9, max: 14 }
    },
    'ecommerce': {
        name: 'E-commerce',
        evRevenue: { min: 0.8, avg: 1.8, max: 3.5 },
        evEbitda: { min: 8, avg: 12, max: 18 }
    },
    'farmaceutico': {
        name: 'Farmacéutico',
        evRevenue: { min: 2.0, avg: 3.5, max: 6.0 },
        evEbitda: { min: 12, avg: 16, max: 24 }
    },
    'otros': {
        name: 'Otros Sectores',
        evRevenue: { min: 0.5, avg: 1.0, max: 2.0 },
        evEbitda: { min: 6, avg: 9, max: 14 }
    }
};

// Función para calcular valoración
function calculateValuation(sector, revenue, ebitda) {
    const multiples = valuationMultiples[sector];

    if (!multiples) {
        return null;
    }

    // Calcular valoración por Revenue
    const valuationByRevenue = {
        min: revenue * multiples.evRevenue.min,
        avg: revenue * multiples.evRevenue.avg,
        max: revenue * multiples.evRevenue.max
    };

    // Calcular valoración por EBITDA
    const valuationByEbitda = {
        min: ebitda * multiples.evEbitda.min,
        avg: ebitda * multiples.evEbitda.avg,
        max: ebitda * multiples.evEbitda.max
    };

    return {
        sectorName: multiples.name,
        byRevenue: valuationByRevenue,
        byEbitda: valuationByEbitda,
        // Promedio ponderado (dando más peso a EBITDA si es positivo)
        recommended: ebitda > 0 ? {
            min: Math.min(valuationByRevenue.min, valuationByEbitda.min),
            avg: (valuationByRevenue.avg * 0.3 + valuationByEbitda.avg * 0.7),
            max: Math.max(valuationByRevenue.max, valuationByEbitda.max)
        } : valuationByRevenue
    };
}

// Función para formatear números a euros
function formatCurrency(amount) {
    return new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}
