// Datos de proyectos - Track Record Alyna Capital
const projectsData = [
    // ========== AYUDAS ZONAS URBANAS COMERCIALES ==========
    {
        id: 1,
        type: 'ayudas',
        category: 'Zonas Urbanas Comerciales',
        location: 'Jaén',
        province: 'Jaén',
        client: 'Ayuntamiento de Jaén',
        amount: 1900000,
        description: 'Ayudas para Zonas Urbanas Comerciales',
        coordinates: { x: 420, y: 520 }
    },
    {
        id: 2,
        type: 'ayudas',
        category: 'Zonas Urbanas Comerciales',
        location: 'Alfafar',
        province: 'Valencia',
        client: 'Ayuntamiento de Alfafar',
        amount: 1010000,
        description: 'Ayudas para Zonas Urbanas Comerciales en Zonas Turísticas',
        coordinates: { x: 685, y: 470 }
    },
    {
        id: 3,
        type: 'ayudas',
        category: 'Zonas Urbanas Comerciales',
        location: 'Miranda de Ebro',
        province: 'Burgos',
        client: 'Ayuntamiento de Miranda de Ebro',
        amount: 1890000,
        description: 'Ayudas para Zonas Urbanas Comerciales',
        coordinates: { x: 315, y: 275 }
    },

    // ========== INDUSTRIA 4.0 ==========
    {
        id: 4,
        type: 'ayudas',
        category: 'Industria 4.0',
        location: 'Barcelona',
        province: 'Barcelona',
        client: 'Empresa industrial',
        amount: 7000,
        description: 'Programa Industria 4.0 - Consultoría',
        coordinates: { x: 745, y: 340 }
    },
    {
        id: 5,
        type: 'ayudas',
        category: 'Industria 4.0',
        location: 'Sevilla',
        province: 'Sevilla',
        client: 'Empresa industrial',
        amount: 7000,
        description: 'Programa Industria 4.0 - Consultoría',
        coordinates: { x: 240, y: 615 }
    },
    {
        id: 6,
        type: 'ayudas',
        category: 'Industria 4.0',
        location: 'Zaragoza',
        province: 'Zaragoza',
        client: 'Empresa industrial',
        amount: 7000,
        description: 'Programa Industria 4.0 - Consultoría',
        coordinates: { x: 625, y: 330 }
    },
    {
        id: 7,
        type: 'ayudas',
        category: 'Industria 4.0',
        location: 'Valladolid',
        province: 'Valladolid',
        client: 'Empresa industrial',
        amount: 7000,
        description: 'Programa Industria 4.0 - Consultoría',
        coordinates: { x: 255, y: 335 }
    },
    {
        id: 8,
        type: 'ayudas',
        category: 'Industria 4.0',
        location: 'Murcia',
        province: 'Murcia',
        client: 'Empresa industrial',
        amount: 7000,
        description: 'Programa Industria 4.0 - Consultoría',
        coordinates: { x: 605, y: 590 }
    },
    {
        id: 9,
        type: 'ayudas',
        category: 'Industria 4.0',
        location: 'Vitoria-Gasteiz',
        province: 'Álava',
        client: 'Empresa industrial',
        amount: 7000,
        description: 'Programa Industria 4.0 - Consultoría',
        coordinates: { x: 345, y: 240 }
    },
    {
        id: 10,
        type: 'ayudas',
        category: 'Industria 4.0',
        location: 'Pamplona',
        province: 'Navarra',
        client: 'Empresa industrial',
        amount: 7000,
        description: 'Programa Industria 4.0 - Consultoría',
        coordinates: { x: 465, y: 245 }
    },
    {
        id: 11,
        type: 'ayudas',
        category: 'Industria 4.0',
        location: 'Málaga',
        province: 'Málaga',
        client: 'Empresa industrial',
        amount: 7000,
        description: 'Programa Industria 4.0 - Consultoría',
        coordinates: { x: 235, y: 665 }
    },

    // ========== DIGITALIZACIÓN ADMINISTRACIONES ==========
    {
        id: 12,
        type: 'ayudas',
        category: 'Digitalización AAPP',
        location: 'Calatayud',
        province: 'Zaragoza',
        client: 'Ayuntamiento de Calatayud',
        amount: 160000,
        description: 'Digitalización de las Administraciones',
        coordinates: { x: 565, y: 355 }
    },
    {
        id: 13,
        type: 'ayudas',
        category: 'Digitalización AAPP',
        location: 'Zamora',
        province: 'Zamora',
        client: 'Diputación de Zamora',
        amount: 730000,
        description: 'Digitalización de las Administraciones',
        coordinates: { x: 195, y: 335 }
    },
    {
        id: 14,
        type: 'ayudas',
        category: 'Digitalización AAPP',
        location: 'Salamanca',
        province: 'Salamanca',
        client: 'Diputación de Salamanca',
        amount: 1050000,
        description: 'Digitalización de las Administraciones',
        coordinates: { x: 180, y: 380 }
    },
    {
        id: 15,
        type: 'ayudas',
        category: 'Digitalización AAPP',
        location: 'Burgos',
        province: 'Burgos',
        client: 'Diputación de Burgos',
        amount: 350000,
        description: 'Digitalización de las Administraciones',
        coordinates: { x: 305, y: 265 }
    },

    // ========== ZONAS BAJAS EMISIONES ==========
    {
        id: 16,
        type: 'ayudas',
        category: 'Zonas Bajas Emisiones',
        location: 'Majadahonda',
        province: 'Madrid',
        client: 'Ayuntamiento de Majadahonda',
        amount: 1140921,
        description: 'Convocatoria de Zona de Bajas Emisiones',
        coordinates: { x: 355, y: 425 }
    },
    {
        id: 17,
        type: 'ayudas',
        category: 'Zonas Bajas Emisiones',
        location: 'Majadahonda',
        province: 'Madrid',
        client: 'Ayuntamiento de Majadahonda',
        amount: 85000,
        description: 'Consultoría para diseñar la Zona de Bajas Emisiones',
        coordinates: { x: 355, y: 425 }
    },
    {
        id: 18,
        type: 'ayudas',
        category: 'Zonas Bajas Emisiones',
        location: 'Motril',
        province: 'Granada',
        client: 'Ayuntamiento de Motril',
        amount: 75000,
        description: 'Consultoría para diseñar la Zona de Bajas Emisiones',
        coordinates: { x: 345, y: 645 }
    },

    // ========== OFICINAS TÉCNICAS ==========
    {
        id: 19,
        type: 'ayudas',
        category: 'Oficinas Técnicas',
        location: 'Madrid',
        province: 'Madrid',
        client: 'EGEDA',
        amount: 120000,
        description: 'Oficina técnica de ayudas y subvenciones',
        coordinates: { x: 350, y: 420 }
    },
    {
        id: 20,
        type: 'ayudas',
        category: 'Oficinas Técnicas',
        location: 'Madrid',
        province: 'Madrid',
        client: 'Fundación Atlético de Madrid',
        amount: 95000,
        description: 'Oficina técnica de ayudas y subvenciones',
        coordinates: { x: 350, y: 420 }
    },
    {
        id: 21,
        type: 'ayudas',
        category: 'Oficinas Técnicas',
        location: 'Barcelona',
        province: 'Barcelona',
        client: 'ATOM Modular',
        amount: 110000,
        description: 'Oficina técnica de ayudas y subvenciones',
        coordinates: { x: 745, y: 340 }
    },
    {
        id: 22,
        type: 'ayudas',
        category: 'Oficinas Técnicas',
        location: 'Oleiros',
        province: 'A Coruña',
        client: 'Ayuntamiento de Oleiros',
        amount: 85000,
        description: 'Oficina técnica de ayudas y subvenciones',
        coordinates: { x: 45, y: 240 }
    },

    // ========== INSTALACIONES DEPORTIVAS ==========
    {
        id: 23,
        type: 'ayudas',
        category: 'Instalaciones Deportivas',
        location: 'Miranda de Ebro',
        province: 'Burgos',
        client: 'Ayuntamiento de Miranda de Ebro',
        amount: 509000,
        description: 'Construcción Bike Park',
        coordinates: { x: 315, y: 275 }
    },

    // ========== PERTES DEL AGUA ==========
    {
        id: 24,
        type: 'ayudas',
        category: 'PERTE Agua',
        location: 'Miranda de Ebro',
        province: 'Burgos',
        client: 'Ayuntamiento de Miranda de Ebro',
        amount: 795000,
        description: 'PERTE del Agua',
        coordinates: { x: 315, y: 275 }
    },
    {
        id: 25,
        type: 'ayudas',
        category: 'PERTE Agua',
        location: 'Oleiros',
        province: 'A Coruña',
        client: 'Ayuntamiento de Oleiros',
        amount: 726000,
        description: 'PERTE del Agua',
        coordinates: { x: 45, y: 240 }
    },
    {
        id: 26,
        type: 'ayudas',
        category: 'PERTE Agua',
        location: 'A Coruña',
        province: 'A Coruña',
        client: 'EDAR Bens',
        amount: 2400000,
        description: 'PERTE del Agua',
        coordinates: { x: 40, y: 250 }
    },

    // ========== DIGITALIZACIÓN TURISMO ==========
    {
        id: 27,
        type: 'ayudas',
        category: 'Digitalización Turismo',
        location: 'Marbella',
        province: 'Málaga',
        client: 'Hotel',
        amount: 2847500,
        description: 'Digitalización Última Milla - Sector Turístico',
        coordinates: { x: 220, y: 680 }
    },
    {
        id: 28,
        type: 'ayudas',
        category: 'Digitalización Turismo',
        location: 'Ibiza',
        province: 'Baleares',
        client: 'Resort',
        amount: 1925000,
        description: 'Digitalización Última Milla - Sector Turístico',
        coordinates: { x: 765, y: 470 }
    },
    {
        id: 29,
        type: 'ayudas',
        category: 'Digitalización Turismo',
        location: 'San Sebastián',
        province: 'Gipuzkoa',
        client: 'Hotel boutique',
        amount: 487500,
        description: 'Digitalización Última Milla - Sector Turístico',
        coordinates: { x: 395, y: 225 }
    },
    {
        id: 30,
        type: 'ayudas',
        category: 'Digitalización Turismo',
        location: 'Santander',
        province: 'Cantabria',
        client: 'Cadena hotelera',
        amount: 1265000,
        description: 'Digitalización Última Milla - Sector Turístico',
        coordinates: { x: 305, y: 225 }
    },
    {
        id: 31,
        type: 'ayudas',
        category: 'Digitalización Turismo',
        location: 'Valencia',
        province: 'Valencia',
        client: 'Grupo hotelero',
        amount: 2120000,
        description: 'Digitalización Última Milla - Sector Turístico',
        coordinates: { x: 675, y: 470 }
    },
    {
        id: 32,
        type: 'ayudas',
        category: 'Digitalización Turismo',
        location: 'Benidorm',
        province: 'Alicante',
        client: 'Resort',
        amount: 3350000,
        description: 'Digitalización Última Milla - Sector Turístico',
        coordinates: { x: 685, y: 555 }
    },
    {
        id: 33,
        type: 'ayudas',
        category: 'Digitalización Turismo',
        location: 'Salamanca',
        province: 'Salamanca',
        client: 'Hotel histórico',
        amount: 625000,
        description: 'Digitalización Última Milla - Sector Turístico',
        coordinates: { x: 180, y: 380 }
    },

    // ========== PERTE DESCARBONIZACIÓN ==========
    {
        id: 34,
        type: 'ayudas',
        category: 'PERTE Descarbonización',
        location: 'Cartagena',
        province: 'Murcia',
        client: 'Empresa química',
        amount: 1420000,
        description: 'PERTE de Descarbonización Industrial',
        coordinates: { x: 625, y: 600 }
    },
    {
        id: 35,
        type: 'ayudas',
        category: 'PERTE Descarbonización',
        location: 'Huelva',
        province: 'Huelva',
        client: 'Empresa petroquímica',
        amount: 1150000,
        description: 'PERTE de Descarbonización Industrial',
        coordinates: { x: 135, y: 620 }
    },
    {
        id: 36,
        type: 'ayudas',
        category: 'PERTE Descarbonización',
        location: 'Tarragona',
        province: 'Tarragona',
        client: 'Industria química',
        amount: 975000,
        description: 'PERTE de Descarbonización Industrial',
        coordinates: { x: 735, y: 370 }
    },
    {
        id: 37,
        type: 'ayudas',
        category: 'PERTE Descarbonización',
        location: 'Gijón',
        province: 'Asturias',
        client: 'Siderurgia',
        amount: 1580000,
        description: 'PERTE de Descarbonización Industrial',
        coordinates: { x: 185, y: 215 }
    },

    // ========== PREMIO IGUALDAD ==========
    {
        id: 38,
        type: 'ayudas',
        category: 'Premios Europeos',
        location: 'Miranda de Ebro',
        province: 'Burgos',
        client: 'Ayuntamiento de Miranda de Ebro',
        amount: 0,
        description: 'Premio Capitales Europeas por la Igualdad y la Diversidad - 2º puesto',
        coordinates: { x: 315, y: 275 }
    },

    // ========== PROGRAMA LIFE EUROPA ==========
    {
        id: 39,
        type: 'ayudas',
        category: 'Programa LIFE',
        location: 'Villaviciosa',
        province: 'Asturias',
        client: 'Ayuntamiento de Villaviciosa y Principado',
        amount: 2800000,
        description: 'Programa LIFE Europa - Ría de Villaviciosa',
        coordinates: { x: 195, y: 220 }
    },

    // ========== JUNTA CASTILLA Y LEÓN - ICE ==========
    {
        id: 40,
        type: 'ayudas',
        category: 'ICE Castilla y León',
        location: 'León',
        province: 'León',
        client: 'Empresa logística',
        amount: 1175000,
        description: 'Ayudas ICE - Proyectos empresariales de inversión',
        coordinates: { x: 185, y: 280 }
    },
    {
        id: 41,
        type: 'ayudas',
        category: 'ICE Castilla y León',
        location: 'Palencia',
        province: 'Palencia',
        client: 'Empresa agroalimentaria',
        amount: 825000,
        description: 'Ayudas ICE - Proyectos empresariales de inversión',
        coordinates: { x: 260, y: 285 }
    },
    {
        id: 42,
        type: 'ayudas',
        category: 'ICE Castilla y León',
        location: 'Ávila',
        province: 'Ávila',
        client: 'Empresa transformación',
        amount: 450000,
        description: 'Ayudas ICE - Proyectos empresariales de inversión',
        coordinates: { x: 240, y: 410 }
    },
    {
        id: 43,
        type: 'ayudas',
        category: 'ICE Castilla y León',
        location: 'Segovia',
        province: 'Segovia',
        client: 'Empresa industrial',
        amount: 365000,
        description: 'Ayudas ICE - Proyectos empresariales de inversión',
        coordinates: { x: 300, y: 385 }
    },
    {
        id: 44,
        type: 'ayudas',
        category: 'ICE Castilla y León',
        location: 'Soria',
        province: 'Soria',
        client: 'Empresa forestal',
        amount: 580000,
        description: 'Ayudas ICE - Proyectos empresariales de inversión',
        coordinates: { x: 410, y: 335 }
    },
    {
        id: 45,
        type: 'ayudas',
        category: 'ICE Castilla y León',
        location: 'Valladolid',
        province: 'Valladolid',
        client: 'Empresa tecnológica',
        amount: 920000,
        description: 'Ayudas ICE - Proyectos empresariales de inversión',
        coordinates: { x: 255, y: 335 }
    },

    // ========== FUNDACIÓN BIODIVERSIDAD ==========
    {
        id: 46,
        type: 'ayudas',
        category: 'Biodiversidad',
        location: 'La Rinconada',
        province: 'Sevilla',
        client: 'Ayuntamiento de La Rinconada',
        amount: 2400000,
        description: 'Fundación Biodiversidad EU',
        coordinates: { x: 245, y: 605 }
    },
    {
        id: 47,
        type: 'ayudas',
        category: 'Biodiversidad',
        location: 'Logroño',
        province: 'La Rioja',
        client: 'Ayuntamiento de Logroño',
        amount: 3500000,
        description: 'Fundación Biodiversidad EU',
        coordinates: { x: 415, y: 275 }
    },

    // ========== M&A - VENTA DE EMPRESAS ==========
    {
        id: 48,
        type: 'ma',
        category: 'Venta de empresa',
        location: 'Toledo',
        province: 'Toledo',
        client: 'Empresa Facility Services',
        amount: 8100000,
        description: 'Venta de empresa del sector Facility Services',
        sector: 'Facility Services',
        coordinates: { x: 335, y: 465 }
    },
    {
        id: 49,
        type: 'ma',
        category: 'Venta de empresa',
        location: 'Terrassa',
        province: 'Barcelona',
        client: 'Empresa sociosanitaria',
        amount: 2000000,
        description: 'Venta de empresa del sector sociosanitario - Cuidado de mayores',
        sector: 'Sociosanitario',
        coordinates: { x: 730, y: 345 }
    },
    {
        id: 50,
        type: 'ma',
        category: 'Venta de empresa',
        location: 'Badajoz',
        province: 'Badajoz',
        client: 'Empresa sociosanitaria',
        amount: 11000000,
        description: 'Venta de empresa del sector sociosanitario - Cuidado de mayores',
        sector: 'Sociosanitario',
        coordinates: { x: 130, y: 475 }
    },
    {
        id: 51,
        type: 'ma',
        category: 'Venta de empresa',
        location: 'Zaragoza',
        province: 'Zaragoza',
        client: 'Empresa sociosanitaria',
        amount: 800000,
        description: 'Venta de empresa del sector sociosanitario - Cuidado de mayores',
        sector: 'Sociosanitario',
        coordinates: { x: 625, y: 330 }
    },
    {
        id: 52,
        type: 'ma',
        category: 'Venta de empresa',
        location: 'Lleida',
        province: 'Lleida',
        client: 'Empresa sociosanitaria',
        amount: 950000,
        description: 'Venta de empresa del sector sociosanitario - Cuidado de mayores',
        sector: 'Sociosanitario',
        coordinates: { x: 705, y: 315 }
    },
    {
        id: 53,
        type: 'ma',
        category: 'Venta de empresa',
        location: 'Valladolid',
        province: 'Valladolid',
        client: 'Bodega',
        amount: 1500000,
        description: 'Venta de bodega del sector vitivinícola',
        sector: 'Vinos',
        coordinates: { x: 255, y: 335 }
    },
    {
        id: 54,
        type: 'ma',
        category: 'Venta de empresa',
        location: 'Bilbao',
        province: 'Bizkaia',
        client: 'Empresa ingeniería',
        amount: 4250000,
        description: 'Venta de empresa de ingeniería industrial',
        sector: 'Ingeniería',
        coordinates: { x: 335, y: 230 }
    },
    {
        id: 55,
        type: 'ma',
        category: 'Venta de empresa',
        location: 'Granada',
        province: 'Granada',
        client: 'Empresa turismo',
        amount: 1875000,
        description: 'Venta de empresa del sector turístico rural',
        sector: 'Turismo',
        coordinates: { x: 345, y: 640 }
    }
];

// Función para formatear cantidades
function formatAmount(amount) {
    if (amount === 0) return 'Premio';
    if (amount >= 1000000) {
        return (amount / 1000000).toFixed(2).replace('.', ',') + 'M€';
    } else if (amount >= 1000) {
        return (amount / 1000).toFixed(0) + 'k€';
    } else {
        return amount.toLocaleString('es-ES') + '€';
    }
}

// Calcular stats por tipo
function calculateStats(filter = 'all') {
    const filtered = filter === 'all' ? projectsData : projectsData.filter(p => p.type === filter);

    const totalAmount = filtered.reduce((sum, p) => sum + p.amount, 0);
    const provinces = [...new Set(filtered.map(p => p.province))].length;

    return {
        amount: formatAmount(totalAmount),
        projects: filtered.length,
        provinces: provinces
    };
}
