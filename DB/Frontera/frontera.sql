CREATE TABLE content_from_frontera (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    page ENUM('HOME', 'ABOUT', 'ESG', 'HISTORY', 'LOCATION', 'OPERATIONS') NOT NULL,
    section_id VARCHAR(100) NOT NULL UNIQUE,
    description TEXT NOT NULL,
    language VARCHAR(2) NOT NULL DEFAULT 'EN',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


INSERT INTO content_from_frontera (page, section_id, description, language)
VALUES
    ('ABOUT', 'ABOUT_01_EN', 'About Us', 'EN'),
    ('ABOUT', 'ABOUT_01_ES', 'Sobre nosotros', 'ES'),
    ('ABOUT', 'ABOUT_02_EN', 'Frontera Copper Corporation', 'EN'),
    ('ABOUT', 'ABOUT_02_ES', 'Frontera Copper Corporation', 'ES'),
    ('ABOUT', 'ABOUT_03_EN', 'Frontera is a copper mining company that operates the Piedras Verdes mine. The mine is located in southern Sonora, 25 minutes from Alamos and 35 minutes from Navojoa, where most employees live.', 'EN'),
    ('ABOUT', 'ABOUT_03_ES', 'Frontera es una empresa minera de cobre que opera la mina Piedras Verdes, ubicada en el sur de Sonora, a 25 minutos de Álamos y 35 minutos de Navojoa, donde reside la mayoría de los empleados.', 'ES'),
    ('ABOUT', 'ABOUT_04_EN', 'Piedras Verdes is an open-pit copper mine that operates on a conventional basis with a mining rate of ~135ktpd and processes it ore by heap leaching and Solvent Extraction & Electrowinning.', 'EN'),
    ('ABOUT', 'ABOUT_04_ES', 'Piedras Verdes es una mina de cobre a cielo abierto que opera de forma convencional con una tasa de extracción de ~200ktpd y procesos de lixiviación en pila y SX/EW', 'ES'),
    ('ABOUT', 'ABOUT_05_EN', 'PV mines and processes sulfide and oxide ores, produces London Metals Exchange Grade “A” copper cathodes, and sells primarily hypogene ore that cannot be economically processed by heap leachng to Kupari Metals, an independently-owned tolling company that produces and sells copper concentrates.', 'EN'),
    ('ABOUT', 'ABOUT_05_ES', 'Extrae y procesa minerales de sulfuro y óxido, produce cátodos de cobre de grado "A" en la Bolsa de Metales de Londres y vende principalmente mineral hipógeno a Kupari Metals, una empresa de propiedad independiente que produce y vende concentrados de cobre.', 'ES'),
    ('ABOUT', 'ABOUT_06_EN', 'Fully integrated with the CFE power grid and other infrastructure. All water is sourced from within the mine footprint. Within 1 hour and 15 minutes from two airports. The Ciudad Obregón International Airport operates ~20 commercial flights daily.', 'EN'),
    ('ABOUT', 'ABOUT_06_ES', 'Totalmente integrada con la red eléctrica de la CFE y otras infraestructuras. Toda el agua procede de la huella de la mina. A menos de 1 hora y 15 minutos de dos aeropuertos, el aeropuerto internacional de Ciudad Obregón opera unos 20 vuelos comerciales al día.', 'ES'),
    ('ABOUT', 'ABOUT_07_EN', 'Strategy', 'EN'),
    ('ABOUT', 'ABOUT_07_ES', 'Estrategia', 'ES'),
    ('ABOUT', 'ABOUT_08_EN', 'PV prioritizes safety, care for the community, and sustainability. It will continue to optimize capacity and recovery rates by maximizing the productivity of the mining fleet, minimizing mining dilution as the deposit becomes more highly disseminated, and selectively investing in enhanced processes focused on increasing crushing capacity, the proportion of crushed leach ore that is agglomerated and ore sorting. Investment decisions are driven by payback, internal rates of return, and their carbon footprint. As and when copper prices continue to increase, such investments will become increasingly compelling.', 'EN'),
    ('ABOUT', 'ABOUT_08_ES', 'PV continuará optimizando la capacidad y las tasas de recuperación maximizando la productividad de la flota minera, minimizando la dilución minera a medida que el yacimiento se vuelve más diseminado e invirtiendo selectivamente en procesos mejorados centrados en el aumento de la capacidad de trituración y la proporción de mineral de lixiviación triturado que se aglomera. Las decisiones de inversión serán impulsadas por la recuperación de la inversión y en las tasas internas de retorno y su huella de carbono. A medida que los precios del cobre sigan aumentando, estas inversiones serán cada vez más atractivas.', 'ES'),
    ('ABOUT', 'ABOUT_09_EN', 'This will occur while prioritizing safety, care for the community and sustainability.', 'EN'),
    ('ABOUT', 'ABOUT_09_ES', 'Esto ocurrirá mientras se prioriza la seguridad, el cuidado de la comunidad y la sostenibilidad.', 'ES'),
    ('ABOUT', 'ABOUT_10_EN', 'Values', 'EN'),
    ('ABOUT', 'ABOUT_10_ES', 'Valores', 'ES'),
    ('ABOUT', 'ABOUT_11_EN', 'Our core values are focussed on the health, safety and wellbeing of our employees, contractors and other stakeholders, we operate to world-class environmental, social, and governance standards.', 'EN'),
    ('ABOUT', 'ABOUT_11_ES', 'Nuestros valores fundamentales incluyen la salud y la seguridad de nuestros empleados y contratistas, y el compromiso de operar de acuerdo con las normas ambientales, sociales y estándares gubernamentales.', 'ES');
