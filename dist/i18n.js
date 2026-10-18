// English editorial content. Original learning expressions are never translated by the UI.
const englishMeanings = {
'Olá':'Hello','Obrigado(a)':'Thank you','Por favor':'Please','Bom dia':'Good morning','água':'water','comida':'food','Eu não entendo':'I don’t understand','Você poderia falar devagar?':'Could you speak slowly?','Quanto custa isto?':'How much is this?','Onde fica o banheiro?':'Where is the bathroom?','Meu nome é Letícia':'My name is Letícia','Sou do Brasil':'I’m from Brazil','Pode falar mais devagar?':'Could you speak more slowly?','Olá / bom dia':'Hello / good morning','Boa noite (ao chegar)':'Good evening (on arrival)','Quanto custa?':'How much does it cost?','Olá (formal)':'Hello (formal)','Até logo':'See you later','sim':'yes','não':'no','Como você está?':'How are you?','Bem, obrigado(a)':'Fine, thank you','Até nos encontrarmos':'Until we meet again','Oi / tchau':'Hi / bye','Sou brasileira':'I’m Brazilian (female speaker)','Oi':'Hi','Como você está? (polido)':'How are you? (polite)','pão':'bread','Por favor (a uma mulher)':'Please (to a woman)','Bom dia / como passou a noite?':'Good morning / how was your night?','Olá / tudo bem?':'Hello / are you well?','Bem-vindo(a)':'Welcome','Como vai?':'How are you?','Qual é o preço?':'What is the price?','Olá (uma pessoa)':'Hello (to one person)','Vá bem (despedida a quem sai)':'Go well (to someone leaving)','Bom dia (respeitoso)':'Good morning (respectful)','Obrigado(a) (respeitoso)':'Thank you (respectful)','Boa tarde (respeitoso)':'Good afternoon (respectful)','Por favor / com licença':'Please / excuse me','Adeus':'Goodbye','arroz cozido / refeição':'cooked rice / meal','Eu não entendo o que ouço':'I don’t understand what I hear','Fale um pouco mais devagar, por favor':'Please speak a little more slowly','Eu venho do Brasil':'I come from Brazil','Olá / boa tarde':'Hello / good afternoon','Muito obrigado(a) (polido)':'Thank you very much (polite)','Por favor (ao solicitar algo)':'Please (when requesting something)','Bom dia (polido)':'Good morning (polite)','Mais uma vez, por favor':'Once more, please','Olá (polido)':'Hello (polite)','Desculpe':'Sorry','Prazer em conhecer você':'Nice to meet you','Desculpe / com licença':'Sorry / excuse me','Até a próxima':'See you next time','Eu preciso de água':'I need water','Fale devagar, por favor':'Please speak slowly','Olá (saudação)':'Hello (greeting)','água (comum em Bangladesh)':'water (common in Bangladesh)','refeição':'meal','Por favor (pedido de ajuda)':'Please (asking for help)','De nada':'You’re welcome','Eu quero água':'I want water','Posso perguntar?':'May I ask a question?','Olá / como vai?':'Hello / how are you?','Tudo bem / não tem problema':'It’s okay / no problem','Obrigada (falante mulher)':'Thank you (female speaker)','Olá / obrigado(a)':'Hello / thank you','Agradecimentos':'Thanks / acknowledgements','Até nos vermos de novo':'Until we see each other again'
};
const englishRegions = {
global:['Global connections','Languages that cross borders'],americas:['The Americas','Living Indigenous languages and histories'],europa:['Europe','Where cities and traditions meet'],central:['Central & West Asia','Routes, encounters and hospitality'],africa:['Africa','Many voices, many worlds'],leste:['East Asia','New ways to speak and listen'],sul:['South Asia','Conversations across a cultural mosaic'],sudeste:['Southeast Asia','From vibrant cities to archipelagos'],ilhas:['Pacific Islands','Languages connecting the ocean']
};
const englishLanguages = {
en:['English','Many regions around the world','English has many varieties. An expression familiar in the US may sound different in India or Nigeria.'],
es:['Spanish','The Americas and Spain','Tú, vos and usted vary by country and by the relationship between speakers. Notice the form used by your conversation partner.'],
fr:['French','Europe, Africa, Canada and the Caribbean','French-speaking cultures extend far beyond France. Bonjour often opens an interaction in shops and services.'],
ru:['Russian','Russia and communities across Eurasia','Vy is a respectful or plural form of address. Ty is used in closer relationships.'],
nv:['Navajo · Diné','Southwestern United States','Diné Bizaad is a living language. Traditional introductions may include family and clan relationships; learn this context from community sources.'],
quc:['K’iche’','The Guatemalan highlands','One of Guatemala’s major Mayan languages. Greetings vary with age, social standing and local variety.'],
qu:['Quechua · Cusco','The Peruvian Andes; other varieties across the Andes','Quechua is a family of varieties, not one uniform language across the Andes. This trail begins with southern Peruvian forms.'],
de:['German','Germany, Austria and Switzerland, among other regions','Sie is formal; du usually signals familiarity. Spoken Swiss German differs significantly from the standard language.'],
it:['Italian','Italy and parts of Switzerland','Ciao is informal and works for both greeting and parting. Buongiorno is a more respectful way to start a conversation.'],
sr:['Serbian','Serbia and communities across the Balkans','Serbian uses both Latin and Cyrillic scripts. This introductory trail uses its Latin spelling.'],
pl:['Polish','Poland and communities abroad','Pan and pani are used in respectful forms of address. Letter marks represent sounds; keeping them helps distinguish words.'],
tr:['Turkish','Türkiye, Cyprus and the diaspora','Türkiye connects southeastern Europe and western Asia. This regional collection is a learning route rather than a rigid classification.'],
ku:['Kurdish · Kurmanji','Parts of Türkiye, Syria, Iraq and the diaspora','This trail uses Kurmanji. Sorani and other Kurdish varieties differ in writing and structure.'],
fa:['Persian · Iran','Iran; related varieties in Afghanistan and Tajikistan','Iranian Persian, Dari and Tajik differ. Ta’arof is a set of courtesy conventions whose use depends greatly on context.'],
ar:['Arabic · standard','North Africa and West Asia','We start with Modern Standard Arabic. Everyday conversation uses local varieties, such as Egyptian and Moroccan Arabic.'],
ha:['Hausa','Northern Nigeria, Niger and regional trade networks','Hausa is spoken both as a first language and as a shared language. Greetings may include questions about family and the day.'],
sw:['Swahili','East Africa, especially Tanzania and Kenya','Kiswahili connects communities with other first languages. Shikamoo is a respectful greeting to older people.'],
zu:['Zulu','South Africa','Sawubona addresses one person; sanibonani addresses several. The language has click consonants that require careful listening.'],
ig:['Igbo','Southeastern Nigeria and the diaspora','Igbo has many varieties and is tonal. The pitch pattern of a word is part of its meaning.'],
yo:['Yoruba','Southwestern Nigeria, Benin and the diaspora','Tones and vowel marks matter. E added to a greeting can show respect or address more than one person.'],
ee:['Ewe','Ghana and Togo, with communities in Benin','Greetings often reflect the time of day. Letters such as ɛ, ɔ and ŋ belong to the language’s Latin-based writing system.'],
mg:['Malagasy','Madagascar','An Austronesian language on an African island. The initial trail uses forms close to the standard; the island has regional diversity.'],
zh:['Mandarin','China, Taiwan and Chinese communities','We use pinyin with tone marks. Tones distinguish words; romanization is not English phonetic spelling.'],
ja:['Japanese','Japan and communities abroad','Respectful forms are useful with strangers. A sentence may leave out the subject when it is already clear.'],
ko:['Korean','The Korean Peninsula and the diaspora','This trail starts with polite South Korean forms. Endings indicate the level of respect in a conversation.'],
mn:['Mongolian','Mongolia and communities in China','The trail starts with Khalkha as used in Mongolia. There are regional differences and more than one writing tradition.'],
hi:['Hindi / Urdu','Northern India, Pakistan and the diaspora','A joint trail of everyday Hindustani. The spoken core is widely shared; greetings and formal vocabulary vary. Both Devanagari and Urdu script appear above the shared romanization.'],
bn:['Bengali','Bangladesh and eastern India','Greetings may vary by community and religion. Apni is respectful; Bangla has regional varieties.'],
ta:['Tamil','Southern India, Sri Lanka, Singapore and the diaspora','Spoken Tamil differs considerably from literary Tamil. Region and context affect word choices.'],
kn:['Kannada','Karnataka, southern India','Kannada is a Dravidian language. Forms of address and endings vary with respect and familiarity.'],
id:['Indonesian','Indonesia','Bahasa Indonesia connects a country with hundreds of languages. Pak and Bu are common respectful forms of address.'],
tl:['Tagalog','The Philippines, especially Luzon','Standard Filipino is based on Tagalog. Po adds respect in many interactions.'],
th:['Thai','Thailand','Tones are part of words. Kha and khrap are politeness particles; their use depends on the speaker and the sentence.'],
km:['Khmer','Cambodia and neighbouring communities','Chum reap suor is more formal than suostei. The sampeah greeting involves joined hands, with gestures varying by context.'],
my:['Burmese','Myanmar','Burmese is one of Myanmar’s many languages. Politeness particles and tones matter; romanization is only a reading aid.'],
vi:['Vietnamese','Vietnam and the diaspora','The writing is already Latin-based. Diacritics indicate vowels and tones; forms of address also express age and social relationships.'],
tet:['Tetum','Timor-Leste and parts of West Timor','Tetum Prasa has many Portuguese loanwords. Portuguese and Tetum are official languages of Timor-Leste.'],
mi:['Māori','Aotearoa / New Zealand','Te reo Māori is an Indigenous Polynesian language. Connections to land and genealogy can be an important part of introductions.'],
sm:['Samoan','Samoa, American Samoa and the diaspora','Gagana Sāmoa is connected to family and community life. Respectful registers depend on the person and occasion.'],
fj:['Fijian','Fiji','Fijian offers a route through Melanesia. Fiji also has communities speaking Fiji Hindi and other languages.']
};
const englishNotes = {
'en-extra-0':'I is the subject. Don’t is the contraction of do not and makes the sentence negative. Understand is the main verb.',
'es-extra-0':'No comes before the verb to negate it. Entiendo already marks the first person, so the pronoun yo can be left out.',
'fr-extra-0':'Je means “I”. Ne … pas surrounds the verb to negate it. Comprends is the form of comprendre used with je.',
'id-extra-0':'Saya = I; tidak = not; mengerti = understand. The verb does not change according to the person here.',
'id-extra-4':'Nama = name; saya = I/my. Possession follows the noun: nama saya means “my name”. No equivalent of “is” is required here.',
'id-extra-5':'Saya = I; dari = from, indicating origin. Brasil completes the information about origin.',
'ja-extra-3':'Toire = toilet; wa marks the topic; doko = where; desu adds politeness; ka marks a question.',
'zh-extra-1':'Duōshao asks “how much”; qián means money. This is a common way to ask a price.',
'hi-extra-0':'Mera = my; naam = name; hai = is. The verb comes last. Mera agrees with naam, which is masculine, not with the speaker’s gender.',
'sw-extra-2':'Jina = name; langu = my, agreeing with jina; ni = is. Letícia completes the introduction.'
};
const urduNative = ['آپ کیسے ہیں؟','شکریہ','معاف کیجیے','پھر ملیں گے','پانی','کھانا'];
langs.find(l=>l.id==='hi').cards.forEach((c,i)=>{c.nativeAlt=i<6?urduNative[i]:['میرا نام لیٹیسیا ہے','مجھے پانی چاہیے','یہ کتنے کا ہے؟','آہستہ بولیے'][i-6];});
langs.find(l=>l.id==='ar').cards[2].native='مِنْ فَضْلِكِ';
langs.find(l=>l.id==='hi').culture='Trilha conjunta de hindustani cotidiano. O núcleo falado é amplamente compartilhado; saudações e vocabulário formal variam. As escritas devanágari e urdu aparecem acima da romanização compartilhada.';
