/* Fichas educativas. Revisión editorial: 27 de octubre de 2026.
 * Las síntesis religiosas son aproximaciones, no un censo actual.
 * Cada ficha conserva sus fuentes para facilitar correcciones.
 */
window.COUNTRIES_B = [
  {
    id: 'LY', name: 'Libia', region: 'Norte', capital: 'Trípoli',
    officialLanguages: ['Árabe'], spokenLanguages: ['Árabe libio', 'Lenguas amaziges', 'Tamasheq', 'Tebu'],
    languageNote: 'El árabe libio se usa en la vida diaria. Las lenguas amaziges se hablan, por ejemplo, en las montañas de Nafusa y en Zuara; el tamasheq, entre comunidades tuareg del sur.',
    religion: { summary: 'El islam suní es ampliamente mayoritario. También hay musulmanes ibadíes y pequeñas comunidades cristianas, muchas formadas por personas migrantes.', largest: 'Islam', note: 'Los ibadíes tienen presencia histórica en Nafusa. El conflicto y las migraciones dificultan disponer de cifras recientes completas.' },
    culture: [{ title: 'Arquitectura de Gadamés', text: 'En este oasis, las casas tradicionales se organizan en varios niveles y sobre calles cubiertas, una solución adaptada al calor del desierto.' }, { title: 'Arte de Tadrart Acacus', text: 'Las pinturas y grabados rupestres del suroeste muestran animales y escenas de distintas épocas de la historia del Sáhara.' }],
    sources: [{ label: 'UNESCO · patrimonio de Libia', url: 'https://whc.unesco.org/en/statesparties/ly/' }, { label: 'Departamento de Estado · religiones, informe 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/libya/' }]
  },
  {
    id: 'MG', name: 'Madagascar', region: 'Este', capital: 'Antananarivo',
    officialLanguages: ['Malgache', 'Francés'], spokenLanguages: ['Malgache, con variedades regionales', 'Francés'],
    languageNote: 'El malgache es la lengua cotidiana más extendida. El francés tiene presencia en la administración y la enseñanza; su uso no es igual en todas las regiones.',
    religion: { summary: 'El cristianismo es el grupo más numeroso en las estimaciones consultadas. También se practican religiones malgaches tradicionales y el islam.', largest: 'Cristianismo', note: 'Las fuentes dan cifras muy distintas. Es frecuente combinar tradiciones familiares con prácticas cristianas; el islam tiene especial presencia en algunas zonas costeras.' },
    culture: [{ title: 'Hiragasy', text: 'En las Tierras Altas centrales, compañías presentan música, danza, discursos y relatos que comentan la vida social.' }, { title: 'Talla zafimaniry', text: 'Las comunidades zafimaniry del sureste de las Tierras Altas transmiten conocimientos de construcción y decoración geométrica de la madera.' }],
    sources: [{ label: 'UNESCO · patrimonio vivo de Madagascar', url: 'https://ich.unesco.org/en/state/madagascar-MG?info=elements-on-the-lists' }, { label: 'Departamento de Estado · religiones, informe 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/madagascar/' }]
  },
  {
    id: 'MW', name: 'Malaui', region: 'Este', capital: 'Lilongüe',
    officialLanguages: ['Inglés (uso oficial)'], spokenLanguages: ['Chichewa', 'Tumbuka', 'Yao', 'Lomwe', 'Inglés'],
    languageNote: 'El chichewa es lengua nacional y la más extendida para comunicarse entre comunidades. El inglés se utiliza en ámbitos oficiales; tumbuka, yao y lomwe son importantes regionalmente.',
    religion: { summary: 'La mayoría de la población se identifica como cristiana, en distintas iglesias. El islam constituye otra comunidad importante y existen creencias tradicionales.', largest: 'Cristianismo', note: 'Las comunidades musulmanas tienen especial presencia en el sur y alrededor del lago, entre ellas muchas de lengua yao.' },
    culture: [{ title: 'Gule wamkulu', text: 'La tradición chewa combina máscaras, danza y enseñanzas comunitarias. También se practica en Mozambique y Zambia.' }, { title: 'Vimbuza', text: 'Entre los tumbuka del norte, esta tradición ritual reúne canto, tambores y danza. Tiene significados espirituales propios de sus comunidades.' }],
    sources: [{ label: 'UNESCO · patrimonio vivo de Malaui', url: 'https://ich.unesco.org/en/state/malawi-MW?info=elements-on-the-lists' }, { label: 'Departamento de Estado · religiones, informe 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/malawi/' }]
  },
  {
    id: 'ML', name: 'Malí', region: 'Oeste', capital: 'Bamako',
    officialLanguages: ['Lenguas nacionales, entre ellas bambara, fulfulde, soninké, songhay y tamasheq'], spokenLanguages: ['Bambara', 'Fulfulde', 'Songhay', 'Soninké', 'Tamasheq', 'Francés'],
    languageNote: 'La Constitución de 2023 convirtió las lenguas nacionales en oficiales y dejó el francés como lengua de trabajo. El bambara es muy usado para comunicarse entre comunidades, sobre todo en el sur.',
    religion: { summary: 'El islam es mayoritario, principalmente suní y con importantes tradiciones sufíes. Hay comunidades cristianas y distintas religiones tradicionales.', largest: 'Islam', note: 'Algunas personas combinan prácticas islámicas o cristianas con creencias locales. La diversidad no desaparece por existir una mayoría nacional.' },
    culture: [{ title: 'Balafón senufo', text: 'Entre comunidades senufo, este instrumento de láminas de madera acompaña celebraciones y transmite conocimientos; la tradición cruza fronteras con Burkina Faso y Costa de Marfil.' }, { title: 'M’bolon', text: 'Este instrumento de cuerdas y percusión, presente especialmente en el sur, acompaña cantos y relatos en celebraciones y ceremonias.' }],
    sources: [{ label: 'Gobierno de Malí · Constitución de 2023, artículo 31', url: 'https://sgg-mali.ml/JO/2023/mali-jo-2023-20.pdf' }, { label: 'UNESCO · patrimonio vivo de Malí', url: 'https://ich.unesco.org/en/state/mali-ML?info=elements-on-the-lists' }, { label: 'Departamento de Estado · religiones, informe 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/mali/' }]
  },
  {
    id: 'MA', name: 'Marruecos', region: 'Norte', capital: 'Rabat',
    officialLanguages: ['Árabe', 'Amazige'], spokenLanguages: ['Árabe marroquí (darija)', 'Variedades amaziges', 'Francés'],
    languageNote: 'La darija es muy habitual en la vida diaria. Se hablan distintas variedades amaziges, como tarifit, tamazight y tashelhit; el francés tiene presencia en negocios y estudios.',
    religion: { summary: 'El islam suní es ampliamente mayoritario. Existen pequeñas comunidades judías de larga historia y comunidades cristianas.', largest: 'Islam', note: 'La presencia y las prácticas religiosas varían entre familias y regiones. Una mayoría religiosa no describe por sí sola a toda la población.' },
    culture: [{ title: 'Gnawa', text: 'Esta tradición de comunidades de ascendencia subsahariana combina música, canto y prácticas espirituales; utiliza el guembri y castañuelas metálicas llamadas qraqeb.' }, { title: 'Tbourida', text: 'Grupos de jinetes realizan exhibiciones coordinadas en fiestas. Sus vestimentas y ceremonias se relacionan con tradiciones árabes y amaziges.' }],
    sources: [{ label: 'UNESCO · Gnawa', url: 'https://ich.unesco.org/en/RL/gnawa-01170' }, { label: 'UNESCO · tbourida', url: 'https://ich.unesco.org/fr/RL/la-tbourida-01483' }, { label: 'Departamento de Estado · religiones, informe 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/morocco/' }]
  },
  {
    id: 'MU', name: 'Mauricio', region: 'Este', capital: 'Port Louis',
    officialLanguages: [], spokenLanguages: ['Criollo mauriciano', 'Francés', 'Inglés', 'Bhojpuri'],
    languageNote: 'La Constitución no declara un idioma oficial general: establece el inglés para la Asamblea y permite intervenir en francés. El criollo mauriciano es el más extendido en la vida cotidiana.',
    religion: { summary: 'El hinduismo es el grupo de mayor presencia. También hay comunidades cristianas, musulmanas y budistas, entre otras.', largest: 'Hinduismo', note: 'No todos los habitantes pertenecen al mismo grupo. En Rodrigues la población es principalmente cristiana, lo que muestra las diferencias entre islas.' },
    culture: [{ title: 'Sega tipik', text: 'La comunidad criolla transmite este canto y baile, acompañado por instrumentos como la ravanne. Su historia está ligada a personas esclavizadas y sus descendientes.' }, { title: 'Geet gawai', text: 'En comunidades de habla bhojpuri, los preparativos de bodas reúnen cantos, música, danza y rituales que se transmiten entre generaciones.' }],
    sources: [{ label: 'Constitución de Mauricio · artículo 49 (OMPI)', url: 'https://wipolex-res.wipo.int/edocs/lexdocs/laws/en/mu/mu009en.html' }, { label: 'Gobierno de Mauricio · cultura', url: 'https://www.govmu.org/EN/infoservices/arts/Pages/culture.aspx' }, { label: 'Departamento de Estado · religiones, informe 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/mauritius/' }]
  },
  {
    id: 'MR', name: 'Mauritania', region: 'Oeste', capital: 'Nuakchot',
    officialLanguages: ['Árabe'], spokenLanguages: ['Árabe hasanía', 'Pulaar', 'Soninké', 'Wólof', 'Francés'],
    languageNote: 'El hasanía es una variedad de árabe muy extendida. Pulaar, soninké y wólof son lenguas nacionales reconocidas; el francés también se utiliza en la administración y la enseñanza.',
    religion: { summary: 'El islam suní es ampliamente mayoritario. Hay pequeñas comunidades de otras religiones, en buena parte formadas por personas extranjeras.', largest: 'Islam', note: 'Las tradiciones y cofradías islámicas no son idénticas en todas las comunidades. Las minorías son pequeñas y las cifras detalladas son limitadas.' },
    culture: [{ title: 'Epopeya T’heydinn', text: 'Griots de comunidades moras recitan en hasanía poemas sobre historia y valores, con instrumentos de cuerda y percusión.' }, { title: 'Manuscritos de los ksour', text: 'Ciudades caravaneras como Chingueti y Ualata conservan bibliotecas y arquitectura vinculadas a siglos de enseñanza y comercio sahariano.' }],
    sources: [{ label: 'UNESCO · T’heydinn', url: 'https://ich.unesco.org/en/RL/moorish-epic-t-heydinn-00524' }, { label: 'UNESCO · antiguos ksour de Mauritania', url: 'https://whc.unesco.org/en/list/750/' }, { label: 'Departamento de Estado · religiones, informe 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/mauritania/' }]
  },
  {
    id: 'MZ', name: 'Mozambique', region: 'Este', capital: 'Maputo',
    officialLanguages: ['Portugués'], spokenLanguages: ['Emakhuwa', 'Changana', 'Sena', 'Lomwe', 'Portugués'],
    languageNote: 'El portugués conecta la administración y la enseñanza. Emakhuwa es muy extendido en el norte; changana tiene presencia en el sur y sena en zonas del centro. Se hablan muchas otras lenguas.',
    religion: { summary: 'El cristianismo, en distintas iglesias, es el conjunto religioso más numeroso. Hay una importante población musulmana y personas sin afiliación religiosa.', largest: 'Cristianismo', note: 'El islam tiene especial presencia en el norte, sobre todo en Cabo Delgado. Muchas personas mantienen prácticas tradicionales junto con otras creencias.' },
    culture: [{ title: 'Timbila chopi', text: 'En comunidades chopi del sur, conjuntos de xilófonos de madera acompañan música, canto y danza.' }, { title: 'Mapiko makonde', text: 'Entre los makonde del norte, máscaras talladas y actuaciones con música transmiten relatos, conocimientos y comentarios sobre la vida comunitaria.' }],
    sources: [{ label: 'UNESCO · patrimonio vivo de Mozambique', url: 'https://ich.unesco.org/en/state/mozambique-MZ' }, { label: 'Departamento de Estado · religiones, informe 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/mozambique/' }]
  },
  {
    id: 'NA', name: 'Namibia', region: 'Sur', capital: 'Windhoek',
    officialLanguages: ['Inglés'], spokenLanguages: ['Lenguas oshiwambo', 'Khoekhoegowab', 'Afrikáans', 'Otjiherero', 'Rukwangali', 'Inglés'],
    languageNote: 'Las lenguas oshiwambo son las más habladas en conjunto, especialmente en el norte. El inglés es oficial, aunque no es la lengua materna de la mayoría; el afrikáans sirve de comunicación en varias zonas.',
    religion: { summary: 'El cristianismo es mayoritario; destacan iglesias luteranas, católicas y otras protestantes. También se practican creencias tradicionales y otras religiones minoritarias.', largest: 'Cristianismo', note: 'Algunas tradiciones familiares relacionadas con los antepasados conviven con la afiliación cristiana. Las denominaciones varían según la región.' },
    culture: [{ title: 'Oshituthi shomagongo', text: 'Las comunidades aawambo del norte celebran la temporada del fruto del marula con reuniones, cantos y transmisión de conocimientos.' }, { title: 'Cestería y recipientes', text: 'En torno a esta celebración aawambo se transmiten técnicas para fabricar cestas, vasijas de barro y recipientes tallados en madera.' }],
    sources: [{ label: 'UNESCO · festival del marula', url: 'https://ich.unesco.org/en/RL/oshituthi-shomagongo-marula-fruit-festival-01089' }, { label: 'Departamento de Estado · religiones, informe 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/namibia/' }]
  },
  {
    id: 'NE', name: 'Níger', region: 'Oeste', capital: 'Niamey',
    officialLanguages: [], spokenLanguages: ['Hausa', 'Zarma-songhay', 'Fulfulde', 'Tamasheq', 'Kanuri', 'Francés'],
    languageNote: 'La Carta de 2025 designa al hausa como lengua nacional y al francés y al inglés como lenguas de trabajo. Hausa y zarma-songhay están muy extendidos; otras lenguas tienen fuerte presencia regional.',
    religion: { summary: 'El islam es ampliamente mayoritario, principalmente suní. Hay pequeñas comunidades cristianas, bahaíes y de religiones tradicionales.', largest: 'Islam', note: 'Las prácticas y corrientes musulmanas son diversas. En algunos lugares se conservan costumbres tradicionales junto con prácticas islámicas.' },
    culture: [{ title: 'Imzad tuareg', text: 'Entre comunidades tuareg, mujeres interpretan este instrumento de una cuerda con arco, acompañando poesía y canto.' }, { title: 'Arquitectura de Agadez', text: 'En esta ciudad del Aïr destacan casas y edificios religiosos de tierra, incluido un alto minarete, ligados a su historia de comercio sahariano.' }],
    sources: [{ label: 'Diario Oficial de Níger · Carta de 2025, artículo 12', url: 'https://droit-et-politique-en-afrique.info/wp-content/uploads/2025/04/Niger-Charte-de-la-refondation-du-26-mars-2025-Ordonnance-de-dissolution-des-partis-politiques-du-26-mars-2025.pdf' }, { label: 'UNESCO · imzad', url: 'https://ich.unesco.org/en/RL/music-of-the-imzad-of-the-tuareg-communities-00891' }, { label: 'UNESCO · Agadez', url: 'https://whc.unesco.org/en/list/1268/' }, { label: 'Departamento de Estado · religiones, informe 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/niger/' }]
  },
  {
    id: 'NG', name: 'Nigeria', region: 'Oeste', capital: 'Abuya',
    officialLanguages: ['Inglés'], spokenLanguages: ['Hausa', 'Yoruba', 'Igbo', 'Pidgin nigeriano', 'Fulfulde', 'Inglés'],
    languageNote: 'Hausa, yoruba e igbo son grandes lenguas regionales. El pidgin nigeriano permite comunicarse entre comunidades, especialmente en ciudades; se hablan cientos de lenguas, no solo estas.',
    religion: { summary: 'El islam y el cristianismo reúnen a la gran mayoría de habitantes. También existen religiones tradicionales, entre ellas tradiciones yoruba e igbo.', largest: 'Islam, según la estimación de Pew para 2020', note: 'Pew estima que el islam es el grupo mayor, pero las cifras son estimaciones. Hay fuerte presencia musulmana en el norte y cristiana en el sur, con muchas zonas y familias diversas.' },
    culture: [{ title: 'Gèlèdé yoruba-nago', text: 'Máscaras, cantos y danza reconocen el papel de las mujeres en comunidades yoruba-nago del suroeste; la tradición también existe en Benín y Togo.' }, { title: 'Literatura de Ifá', text: 'La tradición yoruba conserva un extenso conjunto de versos y relatos orales, transmitidos por especialistas, que acompaña prácticas espirituales y enseñanzas.' }],
    sources: [{ label: 'Ministerio de Cultura de Nigeria · patrimonio inmaterial', url: 'https://fmacce.gov.ng/intangible-cultural-heritage' }, { label: 'Pew Research Center · estimación religiosa de Nigeria, 2020', url: 'https://www.pewresearch.org/chart/the-majority-of-nigerias-population-is-muslim/' }, { label: 'Departamento de Estado · religiones, informe 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/nigeria/' }]
  },
  {
    id: 'UG', name: 'Uganda', region: 'Este', capital: 'Kampala',
    officialLanguages: ['Inglés', 'Suajili'], spokenLanguages: ['Luganda', 'Runyankore-rukiga', 'Lusoga', 'Acholi', 'Ateso', 'Inglés', 'Suajili'],
    languageNote: 'El luganda es muy utilizado en el centro y en Kampala. Otras lenguas tienen fuerte presencia regional. El suajili tiene estatus oficial, aunque su uso cotidiano no es uniforme.',
    religion: { summary: 'El cristianismo es mayoritario, con comunidades católicas, anglicanas y pentecostales. El islam es otra religión importante; también hay creencias tradicionales.', largest: 'Cristianismo', note: 'La afiliación religiosa cambia según comunidades y regiones. Algunas prácticas familiares y rituales locales conviven con las grandes religiones.' },
    culture: [{ title: 'Tela de corteza', text: 'Entre los baganda del reino de Buganda, artesanos golpean corteza del árbol mutuba hasta convertirla en una tela utilizada en ceremonias.' }, { title: 'Bigwala', text: 'En el reino de Busoga, conjuntos de trompetas de calabaza acompañan danza y celebraciones de las comunidades basoga.' }],
    sources: [{ label: 'UNESCO · tela de corteza', url: 'https://ich.unesco.org/en/RL/barkcloth-making-in-uganda-00139' }, { label: 'UNESCO · bigwala', url: 'https://ich.unesco.org/en/USL/bigwala-gourd-trumpet-music-and-dance-of-the-busoga-kingdom-in-uganda-00749' }, { label: 'Departamento de Estado · religiones, informe 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/uganda/' }]
  },
  {
    id: 'CF', name: 'República Centroafricana', region: 'Centro', capital: 'Bangui',
    officialLanguages: ['Sango', 'Francés'], spokenLanguages: ['Sango', 'Lenguas gbaya', 'Lenguas banda', 'Francés'],
    languageNote: 'El sango funciona como lengua de comunicación entre muchas comunidades. Las lenguas gbaya y banda tienen variedades propias; el francés se emplea en ámbitos administrativos y educativos.',
    religion: { summary: 'El cristianismo es el conjunto religioso más numeroso. Hay comunidades musulmanas y personas que practican diversas religiones tradicionales.', largest: 'Cristianismo', note: 'El islam tiene especial presencia en zonas del norte y noreste. Los desplazamientos de población dificultan las cifras actuales; las identidades religiosas no son uniformes.' },
    culture: [{ title: 'Polifonía aka', text: 'En comunidades aka del suroeste, varias voces se entrelazan e improvisan durante celebraciones y actividades comunitarias.' }, { title: 'Orquestas banda-linda', text: 'En la región de Ippy, conjuntos de trompas distribuyen pequeñas partes musicales entre intérpretes para construir una melodía colectiva.' }],
    sources: [{ label: 'UNESCO · canto aka', url: 'https://ich.unesco.org/en/RL/polyphonic-singing-of-the-aka-pygmies-of-central-africa-00082' }, { label: 'CNRS · archivos de polifonía aka y banda-linda', url: 'https://archives.crem-cnrs.fr/archives/collections/CNRSMH_E_1996_013_001/related/5/download/' }, { label: 'Departamento de Estado · religiones, informe 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/central-african-republic/' }]
  },
  {
    id: 'RW', name: 'Ruanda', region: 'Este', capital: 'Kigali',
    officialLanguages: ['Kinyarwanda', 'Inglés', 'Francés', 'Suajili'], spokenLanguages: ['Kinyarwanda', 'Inglés', 'Francés', 'Suajili'],
    languageNote: 'El kinyarwanda es la lengua común, hablada en todo el país. El inglés, el francés y el suajili tienen estatus oficial, pero su conocimiento y uso varían.',
    religion: { summary: 'El cristianismo es mayoritario, con varias iglesias protestantes y la Iglesia católica. Hay una minoría musulmana, personas sin religión y otras creencias.', largest: 'Cristianismo', note: 'El peso de las iglesias ha cambiado con el tiempo. Las cifras de afiliación no permiten saber cómo practica su religión cada persona.' },
    culture: [{ title: 'Intore', text: 'Grupos de danza interpretan saltos, movimientos coordinados, cantos y poesía. La tradición estuvo vinculada a la corte y hoy se enseña en numerosas comunidades.' }, { title: 'Cestas agaseke', text: 'La cestería de fibras vegetales, con motivos geométricos y tapas cónicas, es transmitida por artesanas y cooperativas; las cestas también simbolizan encuentros y paz.' }],
    sources: [{ label: 'Gobierno de Ruanda · idiomas y cultura', url: 'https://www.gov.rw/about' }, { label: 'UNESCO · intore', url: 'https://ich.unesco.org/en/RL/intore-02129' }, { label: 'Embajada de Ruanda · artes y cestería', url: 'https://www.rwandainjapan.gov.rw/info/practical-info' }, { label: 'Departamento de Estado · religiones, informe 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/rwanda/' }]
  },
  {
    id: 'ST', name: 'Santo Tomé y Príncipe', region: 'Centro', capital: 'Santo Tomé',
    officialLanguages: ['Portugués'], spokenLanguages: ['Portugués', 'Forro', 'Angolar', 'Lunguiê'],
    languageNote: 'El portugués es el idioma más extendido. El forro y el angolar se hablan en Santo Tomé; el lunguiê está vinculado a Príncipe. Estas lenguas criollas necesitan transmisión y protección.',
    religion: { summary: 'El cristianismo es el conjunto religioso más numeroso y la Iglesia católica tiene una presencia histórica importante. También hay otras iglesias y personas sin afiliación.', largest: 'Cristianismo', note: 'Algunas prácticas espirituales locales conviven con la afiliación cristiana. Hay pequeñas comunidades de otras religiones, incluido el islam.' },
    culture: [{ title: 'Tchiloli', text: 'En Santo Tomé, este teatro popular combina música, danza, vestuario y una historia de origen europeo reinterpretada por agrupaciones locales.' }, { title: 'Auto de Floripes', text: 'En la isla de Príncipe se representa una extensa obra popular sobre cristianos y musulmanes, con desfiles, personajes y vestimentas teatrales.' }],
    sources: [{ label: 'Turismo de Santo Tomé y Príncipe · cultura e idiomas', url: 'https://turismo.gov.st/en/pourquoi-sao-tome-et-principe/culture-et-patrimoine/blend-culture-and-history' }, { label: 'Departamento de Estado · religiones, informe 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/sao-tome-and-principe/' }]
  },
  {
    id: 'SN', name: 'Senegal', region: 'Oeste', capital: 'Dakar',
    officialLanguages: ['Francés'], spokenLanguages: ['Wólof', 'Pulaar', 'Serer', 'Jola', 'Mandinga', 'Francés'],
    languageNote: 'El wólof es la lengua de comunicación más extendida, aunque no es la lengua materna de todos. Pulaar, serer, jola y mandinga son importantes en distintas regiones.',
    religion: { summary: 'El islam es mayoritario y tiene importantes cofradías sufíes, como la muridiyya y la tijaniyya. Hay comunidades cristianas y religiones tradicionales.', largest: 'Islam', note: 'La presencia cristiana es mayor en algunas comunidades, entre ellas zonas de Casamance. Las tradiciones serer y otras creencias locales también forman parte de la diversidad.' },
    culture: [{ title: 'Ceebu jën', text: 'Este plato de arroz y pescado se originó entre comunidades pesqueras de Saint-Louis. Sus recetas y formas de compartirlo cambian de una región a otra.' }, { title: 'Xooy serer', text: 'En comunidades serer, especialistas conocidos como saltigues participan en encuentros rituales con discursos y relatos sobre la vida comunitaria.' }],
    sources: [{ label: 'UNESCO · patrimonio vivo de Senegal', url: 'https://ich.unesco.org/en/state/senegal-SN?info=elements-on-the-lists' }, { label: 'UNESCO · ceebu jën', url: 'https://ich.unesco.org/fr/RL/le-ceebu-jn-art-culinaire-du-sngal-01748' }, { label: 'Departamento de Estado · religiones, informe 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/senegal/' }]
  },
  {
    id: 'SC', name: 'Seychelles', region: 'Este', capital: 'Victoria',
    officialLanguages: ['Criollo seychelense', 'Inglés', 'Francés'], spokenLanguages: ['Criollo seychelense (seselwa)', 'Inglés', 'Francés'],
    languageNote: 'El seselwa, un criollo de base francesa, es la lengua cotidiana más extendida. El inglés y el francés se emplean también en educación, administración y comunicación.',
    religion: { summary: 'El cristianismo es mayoritario, especialmente el catolicismo. Existen comunidades anglicanas, de otras iglesias, hindúes y musulmanas, entre otras.', largest: 'Cristianismo', note: 'La vida religiosa del archipiélago refleja historias familiares diversas. Las pequeñas comunidades no están presentes por igual en todas las islas.' },
    culture: [{ title: 'Moutya', text: 'Esta música y danza de la comunidad criolla tiene raíces en la experiencia de personas esclavizadas; se acompaña de tambores y canto.' }, { title: 'Contredanse', text: 'La comunidad criolla también conserva bailes de conjunto que adaptan formas francesas y británicas a una historia cultural propia de las islas.' }],
    sources: [{ label: 'UNESCO · moutya', url: 'https://ich.unesco.org/en/RL/moutya-01690' }, { label: 'Turismo de Seychelles · música y danza', url: 'https://seychelles.com/blog-details/2515/highlights/seychelles-rhythmic-tales-dance-and-music' }, { label: 'Departamento de Estado · religiones, informe 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/seychelles/' }]
  },
  {
    id: 'SL', name: 'Sierra Leona', region: 'Oeste', capital: 'Freetown',
    officialLanguages: ['Inglés'], spokenLanguages: ['Krio', 'Mende', 'Temne', 'Limba', 'Inglés'],
    languageNote: 'El krio es la principal lengua de comunicación entre comunidades. El mende y el temne están muy extendidos en sus regiones; el inglés se utiliza en la enseñanza y el gobierno.',
    religion: { summary: 'El islam es mayoritario. También existe una importante comunidad cristiana y se mantienen distintas prácticas espirituales tradicionales.', largest: 'Islam', note: 'Muchas familias y localidades reúnen a musulmanes y cristianos. La convivencia y las costumbres compartidas son importantes, aunque no eliminan todas las diferencias.' },
    culture: [{ title: 'Máscaras sowei', text: 'Artistas mende y sherbro tallan máscaras de madera para la asociación femenina Sande. Sus formas y peinados expresan ideales culturales y conocimientos.' }, { title: 'Danza de las portadoras', text: 'En tradiciones mende, mujeres especialistas llevan las máscaras con vestimentas de fibras en actuaciones ceremoniales. La obra de arte incluye tanto la talla como su interpretación.' }],
    sources: [{ label: 'Museo Metropolitano · máscara mende o sherbro de Moyamba', url: 'https://archived.metmuseum.org/art/online-features/metkids/explore/313757/African-Helmet-Mask' }, { label: 'British Museum · máscara y danza Sande', url: 'https://www.britishmuseum.org/collection/object/E_Af1950-05-1' }, { label: 'Departamento de Estado · religiones, informe 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/sierra-leone/' }]
  },
  {
    id: 'SO', name: 'Somalia', region: 'Este', capital: 'Mogadiscio',
    officialLanguages: ['Somalí', 'Árabe'], spokenLanguages: ['Somalí', 'Maay', 'Árabe'],
    languageNote: 'El somalí es la lengua predominante, con variedades regionales. El maay se habla especialmente en zonas del sur; el árabe tiene usos religiosos y educativos.',
    religion: { summary: 'El islam suní es ampliamente mayoritario. Hay comunidades religiosas minoritarias muy pequeñas, cuya presencia es difícil de medir con precisión.', largest: 'Islam', note: 'Existen distintas tradiciones islámicas, incluidas sufíes. La falta de un censo religioso reciente y completo impide dar cifras actuales exactas.' },
    culture: [{ title: 'Poesía oral', text: 'Los géneros poéticos somalíes transmiten historias, debates sociales y sentimientos. La recitación y la memoria tienen un papel importante.' }, { title: 'Buraanbur', text: 'Esta tradición poética, interpretada especialmente por mujeres, aparece en reuniones y celebraciones y puede expresar mensajes de solidaridad y paz.' }],
    sources: [{ label: 'UNESCO · cultura de Somalia', url: 'https://www.cisp-som.org/assets/usermedia/resources/DIGITAL_Brochure_UNESCO_Somalia_ENG.pdf' }, { label: 'PNUD · una nación de poetas', url: 'https://www.undp.org/stories/nation-poets' }, { label: 'Departamento de Estado · religiones, informe 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/somalia/' }]
  },
  {
    id: 'ZA', name: 'Sudáfrica', region: 'Sur', capital: 'Pretoria (ejecutiva), Ciudad del Cabo (legislativa) y Bloemfontein (judicial tradicional)',
    officialLanguages: ['Zulú', 'Xhosa', 'Afrikáans', 'Inglés', 'Sepedi', 'Sesotho', 'Setswana', 'Suazi', 'Tshivenda', 'Tsonga', 'Ndebele', 'Lengua de señas sudafricana'],
    spokenLanguages: ['Zulú', 'Xhosa', 'Afrikáans', 'Sepedi', 'Inglés', 'Setswana', 'Sesotho'],
    languageNote: 'El país reconoce 12 idiomas oficiales desde la incorporación de la lengua de señas sudafricana en 2023. Zulú y xhosa están entre los más usados en los hogares; el inglés es habitual en comunicación pública.',
    religion: { summary: 'El cristianismo es el conjunto religioso más numeroso, con muchas iglesias diferentes. También hay religiones tradicionales, islam, hinduismo, judaísmo y personas sin religión.', largest: 'Cristianismo', note: 'En KwaZulu-Natal hay comunidades hindúes importantes y en el Cabo Occidental comunidades musulmanas. Algunas personas combinan creencias cristianas y prácticas ancestrales.' },
    culture: [{ title: 'Pintura ndebele', text: 'En Mpumalanga, artistas ndebele como Esther Mahlangu son conocidas por pinturas de vivos colores y formas geométricas vinculadas a la decoración de viviendas.' }, { title: 'Literatura de múltiples voces', text: 'La obra de autores como Nadine Gordimer y J. M. Coetzee, ambos premiados con el Nobel, aborda conflictos sociales e historias de Sudáfrica desde perspectivas distintas.' }],
    sources: [{ label: 'Gobierno de Sudáfrica · lengua de señas oficial', url: 'https://www.gov.za/news/media-statements/minister-zizi-kodwa-south-african-sign-language-being-recognised-official' }, { label: 'Gobierno de Mpumalanga · Esther Mahlangu', url: 'https://www.mpg.gov.za/media/office-premier/mpumalanga-premiers-well-wishes-iconic-ndebele-artist-esther-mahlangu' }, { label: 'Premio Nobel · Nadine Gordimer', url: 'https://www.nobelprize.org/prizes/literature/1991/gordimer/facts/' }, { label: 'Premio Nobel · J. M. Coetzee', url: 'https://www.nobelprize.org/prizes/literature/2003/coetzee/facts/' }, { label: 'Departamento de Estado · religiones, informe 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/south-africa/' }]
  },
  {
    id: 'SS', name: 'Sudán del Sur', region: 'Este', capital: 'Yuba',
    officialLanguages: ['Inglés'], spokenLanguages: ['Dinka', 'Nuer', 'Bari', 'Zande', 'Árabe de Yuba', 'Inglés'],
    languageNote: 'La Constitución de 2011 establece el inglés como lengua oficial de trabajo y reconoce como nacionales las lenguas indígenas. El árabe de Yuba se usa para comunicarse en la capital y otras zonas.',
    religion: { summary: 'El cristianismo es el grupo más numeroso en las estimaciones consultadas. También tienen gran presencia las religiones tradicionales y existe una minoría musulmana.', largest: 'Cristianismo, según estimaciones', note: 'No hay un censo religioso reciente y completo. El conflicto y los desplazamientos hacen especialmente inciertas las proporciones actuales.' },
    culture: [{ title: 'Canciones dinka', text: 'En comunidades dinka, las canciones guardan recuerdos personales y colectivos, hablan de relaciones y de la vida pastoril y transmiten ideas sociales.' }, { title: 'Escultura bongo', text: 'Comunidades bongo del oeste han creado postes de madera con figuras humanas para recordar a personas importantes de la comunidad.' }],
    sources: [{ label: 'Constitución de Sudán del Sur · artículo 6 (OIT)', url: 'https://natlex.ilo.org/dyn/natlex2/natlex2/files/download/90704/SSD90704%202011C.pdf' }, { label: 'Museo Metropolitano · escultura bongo', url: 'https://www.metmuseum.org/art/collection/search/309909' }, { label: 'UNESCO · cultura y desarrollo, canciones dinka', url: 'https://unesco-uganda.ug/wp-content/uploads/2019/02/post-2015-development-agenda.pdf' }, { label: 'Departamento de Estado · religiones, informe 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/south-sudan/' }]
  },
  {
    id: 'SD', name: 'Sudán', region: 'Norte', capital: 'Jartum',
    officialLanguages: ['Árabe', 'Inglés'], spokenLanguages: ['Árabe sudanés', 'Lenguas nubias', 'Beja', 'Fur', 'Inglés'],
    languageNote: 'El árabe sudanés es la principal lengua de comunicación. Las lenguas nubias, beja y fur tienen presencia regional. Las fuentes institucionales señalan árabe e inglés como oficiales; el marco político atraviesa cambios.',
    religion: { summary: 'El islam suní es mayoritario. Hay comunidades cristianas y diversas religiones tradicionales, con distribuciones regionales diferentes.', largest: 'Islam', note: 'El cristianismo tiene presencia, por ejemplo, en partes de las montañas Nuba. La guerra y los desplazamientos desde 2023 limitan la precisión de datos actuales.' },
    culture: [{ title: 'Arte del reino de Kush', text: 'Los templos, pirámides, relieves e inscripciones de Meroe muestran la historia de una civilización del valle medio del Nilo.' }, { title: 'Patrimonio de Napata', text: 'En Gebel Barkal y sus alrededores, tumbas pintadas y arquitectura monumental conservan ejemplos del arte de antiguas sociedades nubias.' }],
    sources: [{ label: 'Embajada de Sudán · idiomas', url: 'https://sudanembassy.org/in-brief-sudan/' }, { label: 'UNESCO · Meroe', url: 'https://whc.unesco.org/en/list/1336/' }, { label: 'UNESCO · Gebel Barkal', url: 'https://whc.unesco.org/en/list/1073/' }, { label: 'Departamento de Estado · religiones, informe 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/sudan/' }]
  },
  {
    id: 'TZ', name: 'Tanzania', region: 'Este', capital: 'Dodoma',
    officialLanguages: ['Suajili (lengua nacional y de uso oficial)', 'Inglés (uso oficial)'], spokenLanguages: ['Suajili', 'Sukuma', 'Chaga', 'Haya', 'Inglés'],
    languageNote: 'El suajili conecta a la población de todo el país y es la principal lengua de comunicación. El inglés se usa en ámbitos oficiales y educativos. También se hablan numerosas lenguas locales.',
    religion: { summary: 'El cristianismo y el islam son las grandes religiones, junto con distintas creencias tradicionales. Las estimaciones consultadas sitúan al cristianismo como grupo nacional más numeroso.', largest: 'Cristianismo, según estimaciones nacionales', note: 'No se pregunta religión en los censos desde hace décadas, por lo que las cifras varían. En Zanzíbar la población es ampliamente musulmana.' },
    culture: [{ title: 'Khanga', text: 'Este tejido estampado, muy usado por mujeres en la costa suajili y otras zonas, lleva colores, motivos y a menudo mensajes o refranes en suajili.' }, { title: 'Patrimonio de Zanzíbar', text: 'La Ciudad de Piedra conserva arquitectura y espacios urbanos que reflejan intercambios entre culturas suajilis, árabes, persas, indias y europeas.' }],
    sources: [{ label: 'UNESCO · patrimonio vivo y proyecto Khanga', url: 'https://ich.unesco.org/en/state/united-republic-of-tanzania-TZ' }, { label: 'UNESCO · Ciudad de Piedra de Zanzíbar', url: 'https://whc.unesco.org/en/list/173/' }, { label: 'Departamento de Estado · religiones, informe 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/tanzania/' }]
  },
  {
    id: 'TG', name: 'Togo', region: 'Oeste', capital: 'Lomé',
    officialLanguages: ['Francés'], spokenLanguages: ['Ewe', 'Kabiye', 'Mina', 'Tem', 'Francés'],
    languageNote: 'El ewe tiene fuerte presencia en el sur y el kabiye en el norte. El mina es habitual en zonas costeras y comerciales; el francés se usa en la administración y la escuela.',
    religion: { summary: 'El cristianismo es el conjunto más numeroso en las estimaciones consultadas. Las religiones tradicionales y el islam también tienen una presencia importante.', largest: 'Cristianismo, según estimaciones', note: 'El islam tiene más presencia en el norte; tradiciones como el vodún son importantes en zonas del sur. Las fuentes no coinciden en las proporciones exactas.' },
    culture: [{ title: 'Gèlèdé yoruba-nago', text: 'Comunidades yoruba-nago de Togo comparten con Benín y Nigeria una tradición de máscaras, cantos y danza que reconoce el papel social de las mujeres.' }, { title: 'Casas takienta', text: 'En Koutammakou, los batammariba construyen casas de tierra con formas de torres; la arquitectura se relaciona con la organización familiar y el paisaje.' }],
    sources: [{ label: 'UNESCO · Gèlèdé', url: 'https://ich.unesco.org/en/RL/oral-heritage-of-gelede-00002' }, { label: 'UNESCO · Koutammakou', url: 'https://whc.unesco.org/en/list/1140/' }, { label: 'Departamento de Estado · religiones, informe 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/togo/' }]
  },
  {
    id: 'TN', name: 'Túnez', region: 'Norte', capital: 'Túnez',
    officialLanguages: ['Árabe'], spokenLanguages: ['Árabe tunecino', 'Francés', 'Variedades amaziges'],
    languageNote: 'El árabe tunecino es la lengua más extendida en la vida diaria. El francés se usa en estudios y negocios; pequeñas comunidades mantienen variedades amaziges, sobre todo en el sur.',
    religion: { summary: 'El islam suní es ampliamente mayoritario. Existen comunidades judías de larga historia, además de cristianos y otras minorías religiosas.', largest: 'Islam', note: 'Yerba conserva una importante historia judía. Las prácticas personales y la presencia de minorías varían entre localidades y familias.' },
    culture: [{ title: 'Cerámica de Sejnane', text: 'En el norte, mujeres de Sejnane modelan a mano vasijas y figuras de barro, decoradas con motivos geométricos de dos colores.' }, { title: 'Harissa', text: 'La preparación de esta pasta de pimientos reúne conocimientos culinarios y prácticas familiares que se transmiten, con distintas recetas, en comunidades tunecinas.' }],
    sources: [{ label: 'UNESCO · cerámica de Sejnane', url: 'https://ich.unesco.org/en/RL/pottery-skills-of-the-women-of-sejnane-01406' }, { label: 'UNESCO · harissa', url: 'https://ich.unesco.org/en/RL/harissa-knowledge-skills-and-culinary-and-social-practices-01710' }, { label: 'Departamento de Estado · religiones, informe 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/tunisia/' }]
  },
  {
    id: 'ZM', name: 'Zambia', region: 'Este', capital: 'Lusaka',
    officialLanguages: ['Inglés'], spokenLanguages: ['Bemba', 'Nyanja', 'Tonga', 'Lozi', 'Kaonde', 'Lunda', 'Luvale', 'Inglés'],
    languageNote: 'El bemba se usa mucho en el norte y el Copperbelt; el nyanja es habitual en Lusaka y el este. Otras lenguas, como tonga y lozi, son importantes regionalmente.',
    religion: { summary: 'El cristianismo es mayoritario, con varias iglesias protestantes y católicas. También hay religiones tradicionales y pequeñas comunidades musulmanas, hindúes y bahaíes.', largest: 'Cristianismo', note: 'Algunas ceremonias y creencias ancestrales conviven con la afiliación cristiana. La identidad religiosa no es idéntica en todos los hogares.' },
    culture: [{ title: 'Mascarada makishi', text: 'Comunidades luvale, chokwe, luchazi y mbunda del oeste y noroeste celebran actuaciones de personajes enmascarados vinculadas a la transmisión de conocimientos.' }, { title: 'Danza mooba', text: 'En comunidades lenje de la Provincia Central, la danza se acompaña de tambores, canto, cuentas y sonajas, con funciones sociales y espirituales.' }],
    sources: [{ label: 'UNESCO · mascarada makishi', url: 'https://ich.unesco.org/en/RL/makishi-masquerade-00140' }, { label: 'UNESCO · mooba', url: 'https://ich.unesco.org/en/RL/mooba-dance-of-the-lenje-ethnic-group-of-central-province-of-zambia-01372' }, { label: 'Departamento de Estado · religiones, informe 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/zambia/' }]
  },
  {
    id: 'ZW', name: 'Zimbabue', region: 'Este', capital: 'Harare',
    officialLanguages: ['Chewa', 'Chibarwe', 'Inglés', 'Kalanga', 'Koisan', 'Nambya', 'Ndau', 'Ndebele', 'Shangani', 'Shona', 'Lengua de señas', 'Sotho', 'Tonga', 'Tswana', 'Venda', 'Xhosa'],
    spokenLanguages: ['Shona', 'Ndebele', 'Inglés', 'Tonga', 'Kalanga', 'Ndau'],
    languageNote: 'La Constitución reconoce oficialmente 16 lenguas. El shona es el más extendido; el ndebele tiene fuerte presencia en el oeste y el inglés se usa en enseñanza y administración.',
    religion: { summary: 'El cristianismo es mayoritario, en iglesias protestantes, apostólicas, católicas y otras. También hay religiones tradicionales y pequeñas comunidades de otras creencias.', largest: 'Cristianismo', note: 'La relación con los antepasados sigue siendo importante en algunas familias, incluidas personas que se identifican como cristianas. Las prácticas cambian entre comunidades.' },
    culture: [{ title: 'Mbira', text: 'Este instrumento de láminas metálicas pulsadas acompaña cantos, celebraciones y ceremonias, especialmente en comunidades shona. Su fabricación también transmite conocimientos.' }, { title: 'Mbende jerusarema', text: 'Comunidades zezuru-shona del este, especialmente en Murewa y Uzumba-Maramba-Pfungwe, practican esta danza con tambores, palmas y movimientos en pareja.' }],
    sources: [{ label: 'Constitución de Zimbabue · artículo 6 (FAO)', url: 'https://faolex.fao.org/docs/pdf/zim127325.pdf' }, { label: 'Ministerio de Cultura de Zimbabue · patrimonio vivo', url: 'https://zimich.gov.zw/ich-elements.html' }, { label: 'UNESCO · mbira y sansi', url: 'https://ich.unesco.org/en/RL/art-of-crafting-and-playing-mbira-sansi-the-finger-plucking-traditional-musical-instrument-in-malawi-and-zimbabwe-01541' }, { label: 'Departamento de Estado · religiones, informe 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/zimbabwe/' }]
  }
];
