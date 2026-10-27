/* Fichas educativas. Revisión: 27 de octubre de 2026.
 * Las religiones se resumen sin porcentajes: las encuestas y censos tienen fechas
 * y métodos distintos. Las lenguas habladas son ejemplos, no listas exhaustivas.
 * Cada ficha conserva sus fuentes para facilitar correcciones. */
window.COUNTRIES_A = [
  {
    id: 'DZ', name: 'Argelia', region: 'Norte', capital: 'Argel',
    officialLanguages: ['Árabe', 'Tamazight'],
    spokenLanguages: ['Árabe argelino (darija)', 'Lenguas amaziges, como el cabilio', 'Francés'],
    languageNote: 'El árabe argelino se usa mucho en la vida diaria. Las lenguas amaziges tienen especial presencia en Cabilia y otras zonas; el francés también se utiliza, aunque no es oficial.',
    religion: { summary: 'Predomina el islam suní. Existen comunidades ibadíes, especialmente en el valle del Mzab, y pequeñas comunidades cristianas y de otras creencias.', largest: 'Islam', note: 'El informe religioso de 2023 describe una clara mayoría musulmana; las estimaciones de las minorías varían.' },
    culture: [{ title: 'Raï de Orán', text: 'La canción raï, ligada al oeste del país y a ciudades como Orán, aborda la vida cotidiana y combina estilos musicales.' }, { title: 'Ahellil del Gourara', text: 'Las comunidades zenatas del Gourara conservan un canto y una poesía colectivos, acompañados de movimientos de danza.' }],
    sources: [{ label: 'UNESCO · Patrimonio cultural de Argelia', url: 'https://ich.unesco.org/en/state/algeria-DZ' }, { label: 'Departamento de Estado · Religiones, 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/algeria/' }, { label: 'Embajada de Argelia · Lenguas oficiales', url: 'https://embparis.mfa.gov.dz/fr/discover-algeria/about-algeria' }]
  },
  {
    id: 'AO', name: 'Angola', region: 'Centro', capital: 'Luanda',
    officialLanguages: ['Portugués'], spokenLanguages: ['Portugués', 'Umbundu', 'Kimbundu', 'Kikongo', 'Cokwe'],
    languageNote: 'El portugués es una lengua común entre regiones y predomina en muchas ciudades. El umbundu se habla especialmente en el centro y sur; el kimbundu, en el entorno de Luanda y el noroeste.',
    religion: { summary: 'El cristianismo es mayoritario, con católicos y numerosas iglesias protestantes. También hay religiones locales, personas sin afiliación religiosa y comunidades musulmanas.', largest: 'Cristianismo', note: 'El informe de 2023 cita el censo de 2014. Algunas personas combinan su afiliación cristiana con prácticas familiares tradicionales.' },
    culture: [{ title: 'Sona del este', text: 'Los pueblos lunda-cokwe y sus vecinos dibujan figuras geométricas en la arena para transmitir relatos, conocimientos y enseñanzas.' }, { title: 'Semba', text: 'Esta música y danza se desarrolló especialmente en Luanda. Sus canciones suelen contar experiencias y comentar la vida social.' }],
    sources: [{ label: 'UNESCO · Dibujos sona', url: 'https://ich.unesco.org/en/RL/sona-drawings-and-geometric-figures-on-sand-01994' }, { label: 'UNESCO · Salvaguarda del semba', url: 'https://ich.unesco.org/en/assistances/safeguarding-semba-by-creating-new-levers-for-intergenerational-transmission-and-income-generating-opportunities-02124' }, { label: 'Departamento de Estado · Religiones, 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/angola/' }, { label: 'France Diplomatie · Perfil y lenguas', url: 'https://www.diplomatie.gouv.fr/fr/information-par-pays/angola/presentation-de-l-angola' }]
  },
  {
    id: 'BJ', name: 'Benín', region: 'Oeste', capital: 'Porto Novo',
    officialLanguages: ['Francés'], spokenLanguages: ['Fon', 'Yoruba (nago)', 'Bariba (baatonum)', 'Adja', 'Francés'],
    languageNote: 'El fon tiene gran presencia en el sur y centro; el yoruba, en el sureste, y el bariba, en el noreste. El francés se emplea en la administración y la escuela.',
    religion: { summary: 'Conviven cristianismo, islam, vodun y otras religiones locales. El cristianismo reúne el grupo más numeroso en el censo de 2013, sin superar por sí solo la mitad de la población.', largest: 'Cristianismo, como grupo más numeroso', note: 'Hay mayor presencia musulmana en el norte y cristiana en el sur. Algunas personas cristianas o musulmanas también practican vodun.' },
    culture: [{ title: 'Gèlèdé yoruba-nago', text: 'Esta tradición compartida con Nigeria y Togo combina máscaras talladas, cantos en yoruba y danzas para reconocer el papel de las mujeres en la comunidad.' }, { title: 'Arte de Abomey', text: 'Los palacios del antiguo reino de Dahomey conservan bajorrelieves que representan símbolos, acontecimientos y relatos de sus gobernantes.' }],
    sources: [{ label: 'UNESCO · Patrimonio oral Gèlèdé', url: 'https://ich.unesco.org/en/RL/oral-tradition-of-the-gelede-00002' }, { label: 'UNESCO · Palacios reales de Abomey', url: 'https://whc.unesco.org/en/list/323/' }, { label: 'Departamento de Estado · Religiones, 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/benin/' }, { label: 'Consulado de Benín · Lenguas', url: 'https://consulatdubenin.com/fr/actualites/langues-parlees-au-benin-fon-yoruba-bariba' }]
  },
  {
    id: 'BW', name: 'Botsuana', region: 'Sur', capital: 'Gaborone',
    officialLanguages: ['Inglés (uso oficial)'], spokenLanguages: ['Setsuana (setswana)', 'Kalanga', 'Lenguas san', 'Inglés'],
    languageNote: 'El setsuana es la lengua nacional más extendida. El Gobierno describe al inglés como idioma oficial de uso administrativo; también se hablan otras lenguas regionales.',
    religion: { summary: 'El cristianismo es mayoritario. Hay prácticas ancestrales conocidas como badimo, personas sin religión y pequeñas comunidades musulmanas, hindúes y de otras creencias.', largest: 'Cristianismo', note: 'Las fuentes distinguen de forma diferente entre afiliación religiosa y prácticas ancestrales, que a veces se combinan con el cristianismo.' },
    culture: [{ title: 'Dikopelo de Kgatleng', text: 'Los bakgatla ba kgafela practican este canto coral con danza, que se transmite en la comunidad y acompaña encuentros festivos.' }, { title: 'Seperu en Chobe', text: 'La danza seperu, con cantos y movimientos colectivos, forma parte del patrimonio de las comunidades veekuhane del distrito de Chobe.' }],
    sources: [{ label: 'Gobierno de Botsuana · El país y sus lenguas', url: 'https://www.gov.bw/about-our-country-0' }, { label: 'UNESCO · Patrimonio de Botsuana', url: 'https://ich.unesco.org/en/state/botswana-BW' }, { label: 'Departamento de Estado · Religiones, 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/botswana/' }]
  },
  {
    id: 'BF', name: 'Burkina Faso', region: 'Oeste', capital: 'Uagadugú',
    officialLanguages: ['Lenguas nacionales (reconocidas por la Constitución)'], spokenLanguages: ['Mooré', 'Fulfulde', 'Diula', 'Francés'],
    languageNote: 'El mooré es muy extendido. El diula sirve de lengua común en el oeste. La Constitución consolidada de 2024 reconoce las lenguas nacionales como oficiales; francés e inglés son lenguas de trabajo.',
    religion: { summary: 'El islam es mayoritario. Hay importantes comunidades católicas y protestantes, además de religiones locales.', largest: 'Islam', note: 'El censo de 2019 es la base del informe de 2023. Las prácticas ancestrales pueden coexistir con el islam o el cristianismo; la distribución cambia entre regiones.' },
    culture: [{ title: 'Balafón sénufo', text: 'En comunidades sénufo del oeste, este instrumento de láminas de madera y resonadores de calabaza acompaña celebraciones y transmite conocimientos.' }, { title: 'Máscaras de los bwaba', text: 'En el oeste, las comunidades bwaba elaboran y utilizan máscaras de hojas, fibras o madera dentro de sus propias ceremonias y enseñanzas.' }],
    sources: [{ label: 'Gobierno · Constitución consolidada de 2024', url: 'https://dgre.gov.bf/documents/77/constitution_consolid%C3%A9e_apres_la_relecture_du_29_octobre_2024VF.pdf' }, { label: 'Región de Hauts-Bassins · Patrimonio cultural', url: 'https://cultures.hautsbassins.bf/wp-content/uploads/2024/06/bat-TOUPLAN-de-GESTION.pdf' }, { label: 'Departamento de Estado · Religiones, 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/burkina-faso/' }]
  },
  {
    id: 'BI', name: 'Burundi', region: 'Este', capital: 'Gitega',
    officialLanguages: ['Kirundi', 'Francés', 'Inglés'], spokenLanguages: ['Kirundi', 'Suajili', 'Francés'],
    languageNote: 'El kirundi es la principal lengua de la vida diaria. El francés y el inglés se emplean en ámbitos oficiales; el suajili sirve para intercambios comerciales, sobre todo en ciudades.',
    religion: { summary: 'El cristianismo es mayoritario, con una importante presencia católica y diversas iglesias protestantes. También hay musulmanes, religiones locales y personas sin afiliación religiosa.', largest: 'Cristianismo', note: 'El informe de 2023 recurre al censo de 2008 y recoge desacuerdos sobre el tamaño de la población musulmana, principalmente urbana.' },
    culture: [{ title: 'Danza del tambor real', text: 'Conjuntos de tamborileros combinan ritmos sincronizados, danza, poesía y canciones en fiestas locales y nacionales.' }, { title: 'Fabricación de tambores', text: 'Las familias vinculadas a los santuarios de tambores transmiten técnicas para fabricar estos instrumentos, junto con conocimientos sobre su uso ceremonial.' }],
    sources: [{ label: 'UNESCO · Danza del tambor real', url: 'https://ich.unesco.org/en/RL/ritual-dance-of-the-royal-drum-00989' }, { label: 'Gobierno de Burundi · Ley de lenguas de 2014', url: 'https://amategeko.gov.bi/wp-content/uploads/2019/11/BOB_No11-2014.pdf' }, { label: 'Departamento de Estado · Religiones, 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/burundi/' }]
  },
  {
    id: 'CV', name: 'Cabo Verde', region: 'Oeste', capital: 'Praia',
    officialLanguages: ['Portugués'], spokenLanguages: ['Criollo caboverdiano (kriolu)', 'Portugués'],
    languageNote: 'El kriolu es la lengua cotidiana más extendida y presenta variedades propias de cada isla. El portugués se utiliza en la enseñanza y la administración.',
    religion: { summary: 'Predomina el cristianismo católico. Hay otras iglesias cristianas, una comunidad musulmana y personas que no se identifican con ninguna religión.', largest: 'Cristianismo, principalmente católico', note: 'El informe de 2023 cita el censo de 2021. La afiliación y la participación en prácticas religiosas no son lo mismo.' },
    culture: [{ title: 'Morna', text: 'Esta música y poesía cantada del archipiélago expresa temas como la despedida, el amor y la vida isleña. Cesária Évora fue una de sus intérpretes más conocidas.' }, { title: 'Funaná de Santiago', text: 'El funaná está especialmente vinculado a la isla de Santiago: combina música y baile, tradicionalmente con acordeón y un instrumento metálico llamado ferrinho.' }],
    sources: [{ label: 'UNESCO · Patrimonio de Cabo Verde', url: 'https://ich.unesco.org/en/state/cabo-verde-CV' }, { label: 'Instituto del Patrimonio Cultural · Funaná', url: 'https://ipc.cv/en/patromonio-imaterial/funana/' }, { label: 'Departamento de Estado · Religiones, 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/cabo-verde/' }]
  },
  {
    id: 'CM', name: 'Camerún', region: 'Centro', capital: 'Yaundé',
    officialLanguages: ['Francés', 'Inglés'], spokenLanguages: ['Francés', 'Inglés y pidgin camerunés', 'Fulfulde', 'Ewondo', 'Duala'],
    languageNote: 'El francés tiene mayor extensión territorial; el inglés y el pidgin se usan especialmente en el Noroeste y Suroeste. El fulfulde es importante en el norte; existen numerosas lenguas locales.',
    religion: { summary: 'El cristianismo es mayoritario a escala nacional. El islam tiene fuerte presencia en el norte; también se practican religiones locales.', largest: 'Cristianismo', note: 'Las comunidades no se distribuyen por igual. Algunas personas mantienen prácticas ancestrales junto con su afiliación cristiana o musulmana.' },
    culture: [{ title: 'Ngondo de los sawa', text: 'Las comunidades sawa del litoral celebran encuentros y ceremonias vinculados al río Wouri, en Douala, con cantos, danzas y actividades fluviales.' }, { title: 'Guruna de los massa', text: 'En comunidades massa de Camerún y Chad, el retiro pastoral guruna reúne conocimientos sobre el ganado, música, danza y aprendizaje comunitario.' }],
    sources: [{ label: 'Asamblea tradicional sawa · Ngondo', url: 'https://www.ngondo.cm/' }, { label: 'UNESCO · Guruna de los massa', url: 'https://ich.unesco.org/es/RL/guruna-practica-de-retiro-pastoral-sociocultural-y-artistico-en-torno-al-ganado-entre-los-massa-02260' }, { label: 'Embajada de Camerún · Lenguas', url: 'https://www.ambacam.de/fr/preparez-votre-voyage-au-cameroun/' }, { label: 'Departamento de Estado · Religiones, 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/cameroon/' }]
  },
  {
    id: 'TD', name: 'Chad', region: 'Centro', capital: 'Yamena',
    officialLanguages: ['Árabe', 'Francés'], spokenLanguages: ['Árabe chadiano', 'Lenguas sara', 'Kanembu', 'Teda'],
    languageNote: 'El árabe chadiano sirve de lengua común en gran parte del país. Las lenguas sara tienen especial presencia en el sur; existen muchas otras lenguas regionales.',
    religion: { summary: 'El islam es mayoritario a escala nacional. Convive con el cristianismo católico y protestante y con religiones locales.', largest: 'Islam', note: 'El islam tiene más presencia en el norte y centro; el cristianismo, en el sur. En las ciudades hay comunidades mixtas y algunas prácticas se combinan.' },
    culture: [{ title: 'Guruna massa', text: 'Los massa del suroeste, también presentes en Camerún, conservan retiros vinculados al ganado en los que se aprenden música, danza y conocimientos de la comunidad.' }, { title: 'Arte rupestre de Ennedi', text: 'El macizo de Ennedi conserva pinturas y grabados de distintas épocas, con figuras humanas y animales que muestran la larga historia de sus habitantes.' }],
    sources: [{ label: 'UNESCO · Guruna de los massa', url: 'https://ich.unesco.org/es/RL/guruna-practica-de-retiro-pastoral-sociocultural-y-artistico-en-torno-al-ganado-entre-los-massa-02260' }, { label: 'UNESCO · Patrimonio de Chad', url: 'https://whc.unesco.org/en/statesparties/td' }, { label: 'France Diplomatie · Perfil y lenguas', url: 'https://www.diplomatie.gouv.fr/fr/information-par-pays/tchad/presentation-du-tchad' }, { label: 'Departamento de Estado · Religiones, 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/chad/' }]
  },
  {
    id: 'KM', name: 'Comoras', region: 'Este', capital: 'Moroni',
    officialLanguages: ['Comorense (shikomori)', 'Árabe', 'Francés'], spokenLanguages: ['Variedades del comorense', 'Francés'],
    languageNote: 'El comorense predomina en la conversación y cambia entre islas. El francés se utiliza en muchos textos escolares y administrativos; el árabe tiene un papel importante en la enseñanza religiosa.',
    religion: { summary: 'El islam suní es ampliamente mayoritario. También hay pequeñas comunidades chiíes, ahmadíes y cristianas.', largest: 'Islam suní', note: 'Según el informe de 2023, las minorías no musulmanas se concentran principalmente en Moroni y Mutsamudu. Las prácticas también varían por isla y comunidad.' },
    culture: [{ title: 'Gran matrimonio o anda', text: 'En Gran Comora, especialmente, el anda reúne a familias y vecinos en celebraciones con intercambios de regalos, música y comidas compartidas.' }, { title: 'Herencia familiar materna', text: 'En comunidades de Gran Comora, las casas y bienes familiares se transmiten por la línea materna. Esta tradición forma parte de la organización local de la familia.' }],
    sources: [{ label: 'UNESCO · Tradiciones familiares de Comoras', url: 'https://courier.unesco.org/en/articles/powerful-women' }, { label: 'France Diplomatie · Perfil y lenguas', url: 'https://www.diplomatie.gouv.fr/fr/information-par-pays/comores/presentation-des-comores' }, { label: 'Departamento de Estado · Religiones, 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/comoros/' }]
  },
  {
    id: 'CG', name: 'República del Congo', region: 'Centro', capital: 'Brazzaville',
    officialLanguages: ['Francés'], spokenLanguages: ['Lingala', 'Kituba', 'Francés', 'Lenguas teke'],
    languageNote: 'El lingala y el kituba son lenguas nacionales de comunicación entre comunidades; su presencia cambia por región. El francés se usa en la administración, la escuela y numerosas ciudades.',
    religion: { summary: 'Predomina el cristianismo, con comunidades católicas, protestantes y otras iglesias. También hay islam y religiones locales.', largest: 'Cristianismo', note: 'El informe de 2023 recoge cifras contradictorias sobre qué rama cristiana es la mayor. Por eso no se atribuye el primer lugar a una denominación concreta.' },
    culture: [{ title: 'Rumba de Brazzaville', text: 'La rumba congoleña se cultiva a ambos lados del río Congo. En Brazzaville reúne canción, guitarras y baile en celebraciones y espacios urbanos.' }, { title: 'La sape', text: 'En ambientes urbanos de Brazzaville, los sapeurs convierten la combinación de trajes, colores y accesorios en una forma de expresión personal y actuación pública.' }],
    sources: [{ label: 'UNESCO · Rumba congoleña', url: 'https://ich.unesco.org/en/RL/congolese-rumba-01711' }, { label: 'UNESCO · Brazzaville, ciudad de la música', url: 'https://www.unesco.org/en/creative-cities/brazzaville' }, { label: 'Departamento de Estado · Religiones, 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/republic-of-the-congo/' }]
  },
  {
    id: 'CD', name: 'República Democrática del Congo', region: 'Centro', capital: 'Kinsasa',
    officialLanguages: ['Francés'], spokenLanguages: ['Lingala', 'Suajili', 'Kikongo y kituba', 'Tshiluba', 'Francés'],
    languageNote: 'Lingala, suajili, kikongo y tshiluba tienen reconocimiento como lenguas nacionales. El lingala es muy importante en Kinsasa; el suajili, en el este. Hay numerosas lenguas adicionales.',
    religion: { summary: 'El cristianismo es ampliamente mayoritario: incluye católicos, protestantes, iglesias evangélicas y kimbanguistas. Hay musulmanes y seguidores de religiones locales.', largest: 'Cristianismo', note: 'Las estimaciones del tamaño de cada comunidad difieren. Algunas personas combinan prácticas ancestrales con el cristianismo u otras creencias.' },
    culture: [{ title: 'Rumba de Kinsasa', text: 'La rumba congoleña y sus orquestas forman parte de la vida musical de Kinsasa. Es un patrimonio compartido con la vecina República del Congo.' }, { title: 'Tejidos kuba', text: 'Los pueblos kuba de la región del Kasái elaboran tejidos de rafia con bordados, aplicaciones y diseños geométricos de gran variedad.' }],
    sources: [{ label: 'UNESCO · Rumba congoleña', url: 'https://ich.unesco.org/en/RL/congolese-rumba-01711' }, { label: 'RDC · Patrimonio y cultura', url: 'https://rdccoeurafrique.com/en/culture' }, { label: 'France Diplomatie · Perfil y lenguas nacionales', url: 'https://www.diplomatie.gouv.fr/fr/information-par-pays/republique-democratique-du-congo/presentation-de-la-republique-democratique-du-congo' }, { label: 'Departamento de Estado · Religiones, 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/democratic-republic-of-the-congo/' }]
  },
  {
    id: 'CI', name: 'Costa de Marfil', region: 'Oeste', capital: 'Yamusukro',
    officialLanguages: ['Francés'], spokenLanguages: ['Francés', 'Diula', 'Baulé', 'Lenguas bete', 'Lenguas sénufo'],
    languageNote: 'El francés sirve de lengua común en muchas ciudades. El diula se utiliza ampliamente en el comercio; el baulé y otras lenguas tienen mayor presencia en sus respectivas zonas.',
    religion: { summary: 'El islam es el grupo más numeroso en el censo de 2021, pero no reúne a la mitad de la población. El cristianismo tiene una presencia cercana y también hay religiones locales y personas sin afiliación.', largest: 'Islam, como grupo más numeroso', note: 'El islam tiene mayor presencia en el norte y el cristianismo en el sur, aunque ambas comunidades viven en todo el país.' },
    culture: [{ title: 'Zaouli de los guro', text: 'En Bouaflé y Zuénoula, las comunidades guro combinan una máscara esculpida, vestimenta, música y movimientos rápidos de danza en el zaouli.' }, { title: 'Tejido del pagne', text: 'Comunidades baulé, guro, sénufo y otras elaboran telas con técnicas y diseños propios. Algunas se tejen en tiras que después se unen.' }],
    sources: [{ label: 'UNESCO · Zaouli de los guro', url: 'https://ich.unesco.org/en/RL/zaouli-popular-music-and-dance-of-the-guro-communities-in-cote-d-ivoire-01255' }, { label: 'UNESCO · Patrimonio de Costa de Marfil', url: 'https://ich.unesco.org/en/state/cote-d-ivoire-CI' }, { label: 'Departamento de Estado · Religiones, 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/cote-divoire/' }]
  },
  {
    id: 'DJ', name: 'Yibuti', region: 'Este', capital: 'Yibuti',
    officialLanguages: ['Árabe', 'Francés'], spokenLanguages: ['Somalí', 'Afar', 'Francés', 'Árabe'],
    languageNote: 'El somalí y el afar son las principales lenguas de la vida cotidiana de sus comunidades. El francés y el árabe se emplean en ámbitos oficiales y educativos.',
    religion: { summary: 'Predomina ampliamente el islam suní. Hay pequeñas comunidades chiíes, cristianas, hindúes, baháíes y personas sin religión.', largest: 'Islam suní', note: 'Las minorías no musulmanas se concentran principalmente en la capital e incluyen comunidades de origen extranjero.' },
    culture: [{ title: 'Xeedho', text: 'En comunidades somalíes, se prepara carne conservada en un recipiente decorado como regalo de boda. Las mujeres transmiten tanto la receta como la elaboración del envoltorio.' }, { title: 'Xeer ciise', text: 'Las comunidades somalí-issa conservan un sistema oral de normas y mediación. Su transmisión utiliza relatos, enseñanzas y reuniones comunitarias.' }],
    sources: [{ label: 'UNESCO · Patrimonio de Yibuti', url: 'https://ich.unesco.org/fr/etat/djibouti-DJ' }, { label: 'Gobierno de Yibuti · Presentación', url: 'https://www.egouv.dj/sousmenu/sousmenu_selected_presentation/1/3' }, { label: 'Departamento de Estado · Religiones, 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/djibouti/' }]
  },
  {
    id: 'EG', name: 'Egipto', region: 'Norte', capital: 'El Cairo',
    officialLanguages: ['Árabe'], spokenLanguages: ['Árabe egipcio', 'Árabe saidí', 'Lenguas nubias', 'Inglés en algunos ámbitos'],
    languageNote: 'El árabe egipcio predomina en la conversación; el árabe estándar se usa en textos y situaciones formales. En el sur existen comunidades de lenguas nubias.',
    religion: { summary: 'El islam, principalmente suní, es mayoritario. El cristianismo copto es la principal comunidad minoritaria; existen otras iglesias y pequeñas comunidades de otras creencias.', largest: 'Islam', note: 'Las estimaciones de población cristiana varían y no se presenta un porcentaje único. Las comunidades cristianas tienen especial presencia en algunas zonas del Alto Egipto.' },
    culture: [{ title: 'Tahteeb del Alto Egipto', text: 'Este juego tradicional con bastones se practica con música y reglas de respeto entre participantes. Está ligado especialmente al Alto Egipto.' }, { title: 'Epopeya Al-Sirah Al-Hilaliyyah', text: 'Poetas y músicos conservan oralmente las historias de los Banu Hilal. La tradición cantada continúa especialmente en comunidades del Alto Egipto.' }],
    sources: [{ label: 'UNESCO · Patrimonio cultural de Egipto', url: 'https://ich.unesco.org/en/state/egypt-EG' }, { label: 'Servicio de Información de Egipto · Lengua oficial', url: 'https://sis.gov.eg/fr/egypte/informations-principales/' }, { label: 'Departamento de Estado · Religiones, 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/egypt/' }]
  },
  {
    id: 'GQ', name: 'Guinea Ecuatorial', region: 'Centro', capital: 'Ciudad de la Paz',
    officialLanguages: ['Español', 'Francés', 'Portugués'], spokenLanguages: ['Español', 'Fang', 'Bubi', 'Fá d’Ambô'],
    languageNote: 'El español es la lengua oficial más utilizada. El fang predomina en gran parte de la zona continental; el bubi se habla en Bioko y el fá d’Ambô en Annobón. El francés y el portugués tienen menor uso cotidiano.',
    religion: { summary: 'El cristianismo es mayoritario, principalmente católico. También hay iglesias protestantes, islam y religiones locales.', largest: 'Cristianismo, principalmente católico', note: 'Las fuentes ofrecen estimaciones diferentes sobre cada comunidad. Las tradiciones familiares y regionales pueden coexistir con la afiliación cristiana.' },
    culture: [{ title: 'Escultura fang', text: 'Las comunidades fang del continente elaboraron figuras guardianas de reliquias familiares, llamadas byeri, vinculadas a la memoria de los antepasados.' }, { title: 'Literatura en español', text: 'Juan Tomás Ávila Laurel, de familia annobonesa, escribe narrativa, poesía y ensayo. Sus obras, como Rusia se va a Asamsé, tratan experiencias de la sociedad ecuatoguineana.' }],
    sources: [{ label: 'Smithsonian · Figura guardiana fang', url: 'https://africa.si.edu/collection/object/nmafa_98-15-13' }, { label: 'Instituto Cervantes · Literatura ecuatoguineana', url: 'https://cvc.cervantes.es/lengua/anuario/anuario_05/bolekia/p05.htm' }, { label: 'Gobierno · Nueva capital, enero de 2026', url: 'https://www.guineaecuatorialpress.com/noticias/el_presidente_de_la_republica_proclama_la_ciudad_de_la_paz_como_capital_de_la_republica_de_guinea_ecuatorial_con_la_firma_de_un_decreto_ley' }, { label: 'Departamento de Estado · Religiones, 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/equatorial-guinea/' }]
  },
  {
    id: 'ER', name: 'Eritrea', region: 'Este', capital: 'Asmara',
    officialLanguages: ['Sin idioma oficial único declarado'], spokenLanguages: ['Tigriña', 'Tigré', 'Árabe', 'Afar', 'Inglés en ámbitos de trabajo'],
    languageNote: 'El tigriña tiene gran presencia en las tierras altas y el tigré en el oeste y norte. Tigriña, árabe e inglés se utilizan como lenguas de trabajo; no se equiparan aquí con idiomas oficiales por ley.',
    religion: { summary: 'El islam y el cristianismo son las dos grandes tradiciones. Entre los cristianos destacan la Iglesia ortodoxa eritrea, el catolicismo y comunidades protestantes.', largest: 'No se afirma una mayoría concluyente', note: 'No hay un censo religioso reciente y las estimaciones discrepan sobre qué tradición es mayor. Las tierras altas tienen fuerte presencia cristiana y las tierras bajas, musulmana.' },
    culture: [{ title: 'Arquitectura de Asmara', text: 'Asmara conserva cines, comercios y edificios modernistas del siglo XX, construidos durante el dominio italiano y posteriormente incorporados a la vida cultural eritrea.' }, { title: 'Ceremonia del café', text: 'En muchas familias se tuestan los granos y se prepara café en una vasija llamada jebena para compartirlo con familiares o invitados. Los detalles cambian según la comunidad.' }],
    sources: [{ label: 'UNESCO · Ciudad de Asmara', url: 'https://whc.unesco.org/en/list/1550/' }, { label: 'Ministerio de Información de Eritrea · Ceremonia del café', url: 'https://shabait.com/2011/12/23/the-exquisite-coffee-ceremony/' }, { label: 'Constitución de Eritrea · Lenguas', url: 'https://constituteproject.org/constitution/Eritrea_1997' }, { label: 'Departamento de Estado · Informe de 2023, copia documental', url: 'https://www.ecoi.net/en/document/2120690.html' }]
  },
  {
    id: 'SZ', name: 'Esuatini', region: 'Sur', capital: 'Mbabane y Lobamba',
    officialLanguages: ['Suazi (siswati)', 'Inglés'], spokenLanguages: ['Suazi (siswati)', 'Inglés', 'Zulú'],
    languageNote: 'El siswati es la principal lengua cotidiana. El inglés se utiliza en la administración y la enseñanza. Mbabane es la capital administrativa y Lobamba la sede real y legislativa.',
    religion: { summary: 'El cristianismo es mayoritario, con iglesias católicas, protestantes y sionistas africanas. También existen islam, religiones locales y otras creencias.', largest: 'Cristianismo', note: 'Las iglesias sionistas africanas combinan elementos cristianos y prácticas locales; este nombre no alude a un movimiento político. Las cifras disponibles son estimaciones.' },
    culture: [{ title: 'Umhlanga', text: 'La ceremonia suazi de los juncos reúne a jóvenes participantes que entregan juncos y realizan cantos y danzas en torno a la residencia real.' }, { title: 'Incwala', text: 'Esta celebración suazi, relacionada con la realeza y el ciclo agrícola, reúne danzas, cantos y ceremonias comunitarias en la zona de Lobamba.' }],
    sources: [{ label: 'Gobierno de Esuatini · Tradiciones', url: 'https://www.gov.sz/index.php/about-us-sp-15933109/who-we-are' }, { label: 'Alta Comisión de Esuatini · Cultura', url: 'https://eswatinikualalumpur.org/culture/' }, { label: 'Departamento de Estado · Religiones, 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/eswatini/' }]
  },
  {
    id: 'ET', name: 'Etiopía', region: 'Este', capital: 'Adís Abeba',
    officialLanguages: ['Amárico (trabajo federal)', 'Lenguas oficiales regionales'], spokenLanguages: ['Oromo', 'Amárico', 'Somalí', 'Tigriña', 'Afar'],
    languageNote: 'Oromo y amárico son los más extendidos. La Constitución reconoce todas las lenguas y designa al amárico para el trabajo federal; cada estado elige sus lenguas de trabajo. Una política de 2020 prevé añadir oromo, somalí, tigriña y afar al nivel federal; su aplicación es gradual.',
    religion: { summary: 'El cristianismo es mayoritario al reunir las iglesias ortodoxa etíope, protestantes y católicas. El islam tiene una presencia muy importante; también existe la tradición oromo waaqeffanna y otras creencias.', largest: 'Cristianismo, sumando sus distintas iglesias', note: 'El censo de 2007 sigue apareciendo en muchos informes, por lo que sus cifras no describen con exactitud el presente. La distribución varía mucho por región.' },
    culture: [{ title: 'Gada de los oromo', text: 'El sistema gada organiza responsabilidades y etapas de la vida comunitaria oromo; transmite normas, relatos y conocimientos entre generaciones.' }, { title: 'Meskel', text: 'Las comunidades ortodoxas etíopes celebran Meskel con procesiones, cantos y una gran hoguera llamada demera, en recuerdo del hallazgo de la cruz.' }],
    sources: [{ label: 'UNESCO · Patrimonio de Etiopía', url: 'https://ich.unesco.org/en/state/ethiopia-ET' }, { label: 'Estudio académico · Política lingüística de 2020', url: 'https://www.e-iji.net/dosyalar/iji_2025_1_19.pdf' }, { label: 'Constitución de Etiopía · Artículo 5', url: 'https://www.constituteproject.org/constitution/Ethiopia_1994' }, { label: 'Departamento de Estado · Religiones, 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/ethiopia/' }]
  },
  {
    id: 'GA', name: 'Gabón', region: 'Centro', capital: 'Libreville',
    officialLanguages: ['Francés'], spokenLanguages: ['Francés', 'Fang', 'Myene', 'Punu', 'Nzebi'],
    languageNote: 'El francés sirve de lengua común y tiene una amplia presencia urbana. El fang, myene, punu, nzebi y otras lenguas se hablan en sus comunidades y regiones.',
    religion: { summary: 'Predomina el cristianismo, con católicos y diversas iglesias protestantes. Hay islam y tradiciones locales como el bwiti.', largest: 'Cristianismo', note: 'El informe de 2023 advierte que faltan estudios demográficos completos y que las estimaciones varían. Algunas prácticas del bwiti coexisten con el cristianismo.' },
    culture: [{ title: 'Guardianes fang', text: 'En el norte, las esculturas fang llamadas byeri se relacionan con el cuidado de reliquias y la memoria de los antepasados de cada linaje.' }, { title: 'Máscaras punu', text: 'En comunidades punu del sur, las máscaras de rostro claro y peinados elaborados forman parte de representaciones con vestimenta, música y danza.' }],
    sources: [{ label: 'Metropolitan Museum · Arte y esculturas fang', url: 'https://www.metmuseum.org/-/media/files/learn/for-educators/publications-for-educators/the-art-of-africa.pdf' }, { label: 'Museo del Quai Branly · Guardián fang', url: 'https://collection-lacharriere.quaibranly.fr/fr/gardien-de-reliquaire-eyema-byeri' }, { label: 'Departamento de Estado · Religiones, 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/gabon/' }]
  },
  {
    id: 'GM', name: 'Gambia', region: 'Oeste', capital: 'Banjul',
    officialLanguages: ['Inglés'], spokenLanguages: ['Mandinga', 'Wólof', 'Pulaar', 'Jola', 'Inglés'],
    languageNote: 'El mandinga y el wólof son muy utilizados para la comunicación cotidiana, junto con el pulaar y otras lenguas. El inglés se emplea en la administración y la educación.',
    religion: { summary: 'El islam es ampliamente mayoritario, sobre todo suní. Hay comunidades cristianas y otras minorías religiosas.', largest: 'Islam', note: 'Las prácticas ancestrales pueden coexistir con el islam y el cristianismo. La diversidad religiosa también se observa entre familias y localidades.' },
    culture: [{ title: 'Kankurang mandinga', text: 'Compartida con Senegal, esta tradición incluye un personaje cubierto con fibras y hojas, procesiones y enseñanzas transmitidas por los mayores.' }, { title: 'Kora y jali', text: 'Los músicos y narradores jali de tradición mandinga utilizan la kora, un instrumento de cuerdas con caja de calabaza, para acompañar relatos y canciones.' }],
    sources: [{ label: 'UNESCO · Patrimonio de Gambia', url: 'https://ich.unesco.org/en/state/gambia-GM' }, { label: 'Smithsonian Folkways · Música y kora de Gambia', url: 'https://folkways.si.edu/gambias-music-vol-1/world/album/smithsonian' }, { label: 'Departamento de Estado · Religiones, 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/gambia/' }]
  },
  {
    id: 'GH', name: 'Ghana', region: 'Oeste', capital: 'Acra',
    officialLanguages: ['Inglés'], spokenLanguages: ['Lenguas akan, como twi y fante', 'Ewe', 'Ga', 'Dagbani', 'Inglés'],
    languageNote: 'Las lenguas akan son muy extendidas en el centro y sur. El ewe se habla especialmente en el sureste, el ga en Acra y el dagbani en el norte. El inglés sirve de lengua oficial común.',
    religion: { summary: 'El cristianismo es mayoritario. El islam tiene una presencia importante, junto con religiones locales y personas sin afiliación religiosa.', largest: 'Cristianismo', note: 'El censo de 2021 es la base del informe de 2023. Hay mayor presencia musulmana en el norte, aunque las comunidades viven en distintas regiones.' },
    culture: [{ title: 'Tejido kente', text: 'Artesanos asante y ewe, entre otras comunidades, tejen tiras de colores que se unen para formar telas. Sus nombres y diseños comunican historias y valores.' }, { title: 'Símbolos adinkra', text: 'En la tradición akan, los símbolos adinkra representan ideas y proverbios. Se estampan en telas y también aparecen en otros objetos y obras artísticas.' }],
    sources: [{ label: 'UNESCO · Artesanía del kente', url: 'https://ich.unesco.org/en/RL/craftsmanship-of-traditional-woven-textile-kente-02130' }, { label: 'Comisión Nacional de Cultura de Ghana · Adinkra', url: 'https://ghanaculture.gov.gh/world-recognition-of-adinkra/' }, { label: 'Departamento de Estado · Religiones, 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/ghana/' }]
  },
  {
    id: 'GN', name: 'Guinea', region: 'Oeste', capital: 'Conakri',
    officialLanguages: ['Francés', 'Lenguas nacionales'], spokenLanguages: ['Pular', 'Maninka (malinké)', 'Susu', 'Francés'],
    languageNote: 'La Constitución de septiembre de 2025 reconoce como oficiales el francés y las lenguas nacionales; el francés es lengua de trabajo. El pular destaca en Futa Yallon, el maninka en Alta Guinea y el susu en la costa.',
    religion: { summary: 'El islam, principalmente suní, es mayoritario. Hay cristianismo, religiones locales y pequeñas comunidades de otras creencias.', largest: 'Islam', note: 'El cristianismo y las religiones locales tienen una presencia destacada en Guinea Forestal. Algunas personas combinan prácticas ancestrales con otras afiliaciones.' },
    culture: [{ title: 'Sosso-bala de Nyagassola', text: 'La familia Dökala conserva este balafón histórico en Nyagassola. La enseñanza del instrumento mantiene conocimientos musicales de tradición mandinga.' }, { title: 'Epopeya de Sunyata', text: 'Los narradores y músicos mandingas transmiten relatos de Sunyata, fundador del Imperio de Malí, mediante poesía oral y música ligada al balafón.' }],
    sources: [{ label: 'UNESCO · Espacio cultural del sosso-bala', url: 'https://ich.unesco.org/es/RL/el-espacio-cultural-del-sosso-bala-00009' }, { label: 'Secretaría General del Gobierno · Constitución de 2025', url: 'https://www.sgg.gov.gn/document/downloadfile/546' }, { label: 'Departamento de Estado · Religiones, 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/guinea/' }]
  },
  {
    id: 'GW', name: 'Guinea-Bisáu', region: 'Oeste', capital: 'Bisáu',
    officialLanguages: ['Portugués'], spokenLanguages: ['Criollo guineano (kriol)', 'Balanta', 'Fula', 'Mandinga', 'Portugués'],
    languageNote: 'El kriol es la principal lengua común entre comunidades. El portugués se utiliza oficialmente; balanta, fula, mandinga y otras lenguas conservan gran importancia regional.',
    religion: { summary: 'Conviven islam, religiones locales y cristianismo. El islam es el grupo más numeroso en la estimación citada por el informe de 2023, sin una mayoría absoluta clara.', largest: 'Islam en la estimación citada; sin mayoría absoluta segura', note: 'Las estimaciones varían mucho. El islam tiene mayor presencia en el norte y este; las tradiciones locales son especialmente importantes en otras comunidades y en las islas.' },
    culture: [{ title: 'Carnaval de Bisáu', text: 'Los desfiles de la capital reúnen música, bailes y máscaras. Los participantes representan historias comunitarias y también temas de la vida actual.' }, { title: 'Máscaras de papel maché', text: 'En los talleres del carnaval, niños y adultos modelan y pintan máscaras con animales, personajes y escenas. Es un ejemplo de arte urbano que cambia con cada generación.' }],
    sources: [{ label: 'Smithsonian · Carnaval y elaboración de máscaras', url: 'https://africa.si.edu/exhibits/playful/playful_performers.pdf' }, { label: 'Departamento de Estado · Religiones, 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/guinea-bissau/' }]
  },
  {
    id: 'KE', name: 'Kenia', region: 'Este', capital: 'Nairobi',
    officialLanguages: ['Suajili', 'Inglés'], spokenLanguages: ['Suajili', 'Kikuyu', 'Lenguas luhya', 'Dholuo', 'Kalenjin', 'Inglés'],
    languageNote: 'El suajili es además lengua nacional y permite la comunicación entre muchas comunidades. Las lenguas kikuyu, luhya, dholuo y kalenjin tienen amplia presencia en sus regiones.',
    religion: { summary: 'El cristianismo es mayoritario, con numerosas iglesias protestantes y católicas. Hay una importante comunidad musulmana, además de hinduismo, sijismo y religiones locales.', largest: 'Cristianismo', note: 'El censo de 2019 es la base del informe de 2023. El islam tiene una presencia especialmente importante en la costa y el noreste.' },
    culture: [{ title: 'Isukuti del oeste', text: 'Las comunidades isukha e idakho, del grupo luhya, celebran con una danza enérgica acompañada por tambores isukuti, cantos y otros instrumentos.' }, { title: 'Artesanía de cuentas masái', text: 'En comunidades masái del sur, collares y otros adornos de cuentas expresan identidades y ocasiones de la vida. Los estilos varían entre grupos y generaciones.' }],
    sources: [{ label: 'UNESCO · Patrimonio de Kenia', url: 'https://ich.unesco.org/en/state/kenya-KE' }, { label: 'UNESCO · Programa cultural con comunidades masái', url: 'https://whc.unesco.org/document/221107' }, { label: 'Departamento de Estado · Religiones, 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/kenya/' }]
  },
  {
    id: 'LS', name: 'Lesoto', region: 'Sur', capital: 'Maseru',
    officialLanguages: ['Sesoto', 'Inglés'], spokenLanguages: ['Sesoto', 'Inglés', 'Zulú', 'Xhosa'],
    languageNote: 'El sesoto es la principal lengua cotidiana. El inglés se utiliza en la administración y la enseñanza; también hay comunidades que hablan otras lenguas del sur de África.',
    religion: { summary: 'El cristianismo es ampliamente mayoritario, con católicos y distintas iglesias protestantes. También existen islam, religiones locales y otras creencias.', largest: 'Cristianismo', note: 'Las prácticas ancestrales de algunas familias pueden coexistir con el cristianismo. Las minorías religiosas no se distribuyen por igual entre localidades.' },
    culture: [{ title: 'Mantas basotho', text: 'Las mantas de lana forman parte de la vestimenta basotho. Además de proteger del frío de las montañas, pueden señalar celebraciones y etapas de la vida.' }, { title: 'Sombrero mokorotlo', text: 'El mokorotlo es un sombrero cónico tejido con fibras vegetales y un símbolo de la identidad basotho. También aparece en la bandera del país.' }],
    sources: [{ label: 'Reading Museum · Manta basotho y mokorotlo', url: 'https://collections.readingmuseum.org.uk/index.asp?filename=REDMG&hitsStart=132&mwsquery=+%7Bcollection%7D%3D%7Bworld%7D+AND+%28%7Bplace%7D%3D%2A%7BAfrica%7D%29&page=record' }, { label: 'Parlamento de Lesoto · Manta y sombrero basotho', url: 'https://nationalassembly.parliament.ls/wp-content/uploads/2024/12/Thursday-12th-December-2024-1.pdf' }, { label: 'Departamento de Estado · Religiones, 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/lesotho/' }]
  },
  {
    id: 'LR', name: 'Liberia', region: 'Oeste', capital: 'Monrovia',
    officialLanguages: ['Inglés'], spokenLanguages: ['Inglés liberiano y variedades criollas', 'Kpelle', 'Bassa', 'Grebo', 'Gio (dan)', 'Vai'],
    languageNote: 'El inglés liberiano permite la comunicación entre comunidades. Kpelle, bassa, grebo y otras lenguas son importantes en sus zonas; el pueblo vai conserva además un sistema de escritura propio.',
    religion: { summary: 'El cristianismo es mayoritario. Hay una importante minoría musulmana, religiones locales y pequeñas comunidades de otras creencias.', largest: 'Cristianismo', note: 'El informe de 2023 cita el censo de 2022 y recoge discrepancias sobre el tamaño de la comunidad musulmana. Muchas personas incorporan prácticas ancestrales a su vida religiosa.' },
    culture: [{ title: 'Escritura vai', text: 'El pueblo vai de la costa occidental utiliza un silabario desarrollado en el siglo XIX. Sus signos representan sílabas y permiten escribir la lengua vai.' }, { title: 'Máscaras dan', text: 'Las comunidades dan del noreste, también presentes en Costa de Marfil, tallan máscaras de madera que forman parte de actuaciones con música, danza y vestimenta.' }],
    sources: [{ label: 'Unicode · Escritura vai', url: 'https://www.unicode.org/versions/Unicode16.0.0/UnicodeStandard-16.0.pdf' }, { label: 'Metropolitan Museum · Máscaras dan', url: 'https://www.metmuseum.org/art/collection/search/312448' }, { label: 'Departamento de Estado · Religiones, 2023', url: 'https://2021-2025.state.gov/reports/2023-report-on-international-religious-freedom/liberia/' }]
  }
];
