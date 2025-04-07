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


INSERT INTO content_from_frontera (page, section_id, description, language) VALUES
('ESG', 'ESG_01_EN', 'ESG', 'EN'),
('ESG', 'ESG_01_ES', 'ESG', 'ES'),
('ESG', 'ESG_02_EN', 'Local Communities', 'EN'),
('ESG', 'ESG_02_ES', 'Comunidades locales', 'ES'),
('ESG', 'ESG_03_EN', 'The sound development of the surrounding communities is of fundamental importance to PV. It strives to be supportive, maintain an open dialogue and a high level of trust in its communication.', 'EN'),
('ESG', 'ESG_03_ES', 'El buen desarrollo de las comunidades circundantes tiene una importancia fundamental para PV. Se esfuerza por ser solidario, mantener un diálogo abierto y un alto nivel de confianza en su comunicación:', 'ES'),
('ESG', 'ESG_04_EN', 'Piedras Verdes funds the operating budget of the Instituto Tecnológico de Cajeme, which provides undergraduate education in engineering and management science', 'EN'),
('ESG', 'ESG_04_ES', 'Piedras Verdes financia el presupuesto operativo del Instituto Tecnológico de Cajeme que imparte educación de grado en ingeniería y ciencias de la administración.', 'ES'),
('ESG', 'ESG_05_EN', 'Piedras Verdes funds and supports the Festival Alfonso Ortíz Tirado, an annual musical weekend in Alamos, Sonora, that attracts visitors from across the country, showcases the Sonora Symphony Orchestra, and combines classical music, jazz, and contemporary genres.', 'EN'),
('ESG', 'ESG_05_ES', 'Piedras Verdes financia y apoya el Festival Alfonso Ortíz Tirado, un fin de semana musical anual en Álamos, Sonora, que atrae a visitantes de todo el país, presenta a la Orquesta Sinfónica de Sonora y combina música clásica, jazz y géneros contemporáneos', 'ES'),
('ESG', 'ESG_06_EN', 'In cooperation with the municipality of Alamos, Piedras Verdes funds a temporary employment program for the local fishing communities.', 'EN'),
('ESG', 'ESG_06_ES', 'En colaboración con el municipio de Álamos, Piedras Verdes financia un programa de empleo temporal para las comunidades pesqueras locales.', 'ES'),
('ESG', 'ESG_07_EN', 'We have created and managed various programs to support the health of local children. Likewise, we are actively participating in the management of the local food bank, which is accessible by anyone in need.', 'EN'),
('ESG', 'ESG_07_ES', 'Piedras Verdes creó y gestiona un programa de apoyo a los niños locales con discapacidad y participa activamente en los bancos de alimentos para los más necesitados de las comunidades.', 'ES'),
('ESG', 'ESG_08_EN', 'Water and Environment', 'EN'),
('ESG', 'ESG_08_ES', 'Agua y medio ambiente', 'ES'),
('ESG', 'ESG_09_EN', 'At Piedras Verdes our surrounding environment is important. In addition to operating in compliance with both, national and international regulations, we focus on serving our local conditions. 2024 is a year in which we have set out to create a much more real, sincere, and solid ESG awareness for the benefit of the natural world.', 'EN'),
('ESG', 'ESG_09_ES', 'PV opera según las normas medioambientales internacionales y cumple con todas las normas medioambientales mexicanas aplicables. No se han producido incidentes medioambientales significativos ni se han llevado a cabo acciones de cumplimiento desde el inicio de las operaciones en 2006.', 'ES'),
('ESG', 'ESG_10_EN', 'Health and Safety', 'EN'),
('ESG', 'ESG_10_ES', 'Salud y seguridad', 'ES'),
('ESG', 'ESG_11_EN', 'We prioritize the safe and health of our people first and foremost. Our safety records compare favorably against international standards, and we firmly believe that prevention will lead us down the path of zero accidents  We take risk assessments and job safety analyses as the basis of our day-to-day work. The continuous improvement of our processes and procedures is a must. Our employees and contractors receive extensive ongoing training to ensure operational safety, emphasizing those who manage higher-risk functions. Some of the pillars of our culture and values are safe, health, and well-being. As part of our new awareness, we integrated the caring of mental health into our work environment as a priority, recognizing that the wellness at work directly influences the success of any operation.', 'EN'),
('ESG', 'ESG_11_ES', 'Damos prioridad a la seguridad de nuestros empleados por encima de todo.  Nuestros empleados y contratistas reciben una amplia formación continua para garantizar la seguridad operativa con énfasis en los que gestionan las funciones con mayor riesgo. Nuestra cultura y valores corporativos hacen hincapié en la prioridad de la seguridad y el cumplimiento de las normas medioambientales por encima de cualquier consideración operativa. Llevamos a cabo análisis de causa raíz de todos los incidentes, sin importar cual intrascendentes puedan ser, y rápidamente implementar los cambios apropiados en los procedimientos y prácticas. Nuestro historial de seguridad se compara muy favorablemente con estándares internacionales. ', 'ES');

INSERT INTO content_from_frontera (page, section_id, description, language) VALUES
('HISTORY', 'HISTORY_01_EN', 'HISTORY', 'EN'),
('HISTORY', 'HISTORY_01_ES', 'Historia', 'ES'),
('HISTORY', 'HISTORY_02_EN', 'Frontera Copper Corporation built the Piedras Verdes Mine and started commercial production in 2006.', 'EN'),
('HISTORY', 'HISTORY_02_ES', 'Frontera Copper Corporation construyó la mina Piedras Verdes e inició la producción comercial en 2006.', 'ES'),
('HISTORY', 'HISTORY_03_EN', 'The mine was capital-constrained, mining was subcontracted at a high cost, and leaching was undertaken on a run-of-mine basis with poor metallurgical recoveries. In the context of low copper prices prevailing during the financial crisis, the mine suspended operations in 2008.', 'EN'),
('HISTORY', 'HISTORY_03_ES', 'Tenía limitaciones de capital, la minería se subcontrataba a un alto coste y la lixiviación se realizaba a pie de mina con pobres recuperaciones metalúrgicas', 'ES'),
('HISTORY', 'HISTORY_04_EN', 'Invecture Group made a tender offer for Frontera that was successfully concluded in May 2009.', 'EN'),
('HISTORY', 'HISTORY_04_ES', 'En el contexto de los bajos precios del cobre que prevalecían durante la crisis financiera, suspendió sus operaciones en 2008. Invecture Group hizo una oferta pública de adquisición de todas las acciones de Frontera, que concluyó con éxito en mayo de 2009.', 'ES'),
('HISTORY', 'HISTORY_05_EN', 'Invecture Group invested over $450m to convert the Piedras Verdes Mine from a run-of-mine heap leach operation to multiple process streams, increasing production and reducing unit costs.', 'EN'),
('HISTORY', 'HISTORY_05_ES', 'Invecture Group invirtió más de 450 millones de dólares para convertir la mina de Piedras Verdes de una operación de lixiviación en pila en un proceso múltiple, aumentando la producción y reduciendo los costes unitarios.', 'ES'),
('HISTORY', 'HISTORY_06_EN', 'Kupari Metals built a floatation plant adjacent to the Piedras Verdes deposit and started operations in 4Q12, which allowed Frontera the ability to optimize the value of certain ore types which offering better economics when processed by flotation.', 'EN'),
('HISTORY', 'HISTORY_06_ES', 'Kupari Metals construyó una planta de flotación adyacente al yacimiento de Piedras Verdes y comenzó a operar en el 4T12, lo que proporcionó a Frontera la capacidad de monetizar ciertos tipos de mineral que ofrecen una mejor economía cuando se procesan por flotación', 'ES'),
('HISTORY', 'HISTORY_07_EN', 'From 1Q20 through 2Q21, Piedras Verdes was placed on Care and Maintenance in the context of the Covid pandemic and low copper prices. During this time, much test work was undertaken and significant operational improvements were identified, analyzed, and implemented.', 'EN'),
('HISTORY', 'HISTORY_07_ES', 'Desde el 4T19 hasta el 2T21, Piedras Verdes fue puesta bajo Cuidado y Mantenimiento en el contexto de los bajos precios del cobre. Durante este tiempo, se identificaron muchas mejoras operativas, se analizaron y realizaron pruebas.', 'ES'),
('HISTORY', 'HISTORY_08_EN', 'As a result, over the past three years, Piedras Verdes has:', 'EN'),
('HISTORY', 'HISTORY_08_ES', 'Como resultado, en los últimos 18 meses, Piedras Verdes cuenta con:', 'ES'),
('HISTORY', 'HISTORY_09_EN', 'Expanded the mineral reserve from 628kt of contained copper to 934 kt with a combination of exploration drilling and developing an NSR-driven block model at $3.50/lb copper.', 'EN'),
('HISTORY', 'HISTORY_09_ES', 'Ampliamos la reserva mineral de 628 kt de cobre contenido a 934 kt con una combinación de perforaciones de exploración y el desarrollo de un modelo de bloques impulsado por el NSR a 3,50 $/lb de cobre', 'ES'),
('HISTORY', 'HISTORY_10_EN', 'Grown and optimized operations by', 'EN'),
('HISTORY', 'HISTORY_10_ES', 'Crecimiento y optimización de las operaciones mediante:', 'ES');

