// 翻译题数据（近三年真题原文）
const TRANSLATION_DATA = [
  {
    id: 'tr2025dec1', year: 2025, period: '12月', set: '第一套',
    title: '尊老传统',
    original: '尊老是中华民族的传统美德，深深植根于中国人的思想和行为中，是人们普遍遵守的行为规范和社会准则。在当今的中国，这种美德得到广泛传承。社会各界积极营造敬老助老的社会氛围。为老年人提供便利服务已成为社会共识，例如社区专门开设长者食堂，公共场所配置优先座位。政府还出台了一系列政策，为老年人的权益提供有力保障。尊老是社会和谐与发展的重要基石，有助于构建更加和谐美好的社会。',
    reference: 'Respecting the elderly is a traditional virtue of the Chinese nation, deeply rooted in the thoughts and behaviors of Chinese people, and is a code of conduct and social norm that people generally abide by. In today\'s China, this virtue is widely passed down. All sectors of society actively create a social atmosphere of respecting and helping the elderly. Providing convenient services for the elderly has become a social consensus, for example, communities have specially opened canteens for the elderly, and public places are equipped with priority seats. The government has also introduced a series of policies to provide strong protection for the rights and interests of the elderly. Respecting the elderly is an important cornerstone of social harmony and development, and helps build a more harmonious and beautiful society.',
    keypoints: ['传统美德 → traditional virtue', '行为规范 → code of conduct', '社会准则 → social norm', '长者食堂 → canteens for the elderly', '优先座位 → priority seats', '社会和谐 → social harmony']
  },
  {
    id: 'tr2025dec2', year: 2025, period: '12月', set: '第二套',
    title: '自强自立精神',
    original: '中华民族崇尚自强自立的精神，这一精神深植于中国文化之中，是民族生存与发展的重要支撑。改革开放以来，中国在自强自立的征程上，持续加大科研投入，在信息技术、人工智能、航天工程等领域不断取得新突破。5G网络覆盖全国，远程医疗发展迅速，电子支付的使用全球领先，嫦娥探月工程展现了航天领域引人注目的发展。自强自主精神成为推动国家现代化进程的强大动力，激励着中国人民为实现中华民族伟大复兴而不懈奋斗。',
    reference: 'The Chinese nation advocates the spirit of self-improvement and self-reliance, a spirit deeply rooted in Chinese culture and an important support for the nation\'s survival and development. Since the reform and opening up, China has continuously increased investment in scientific research on the journey of self-improvement and self-reliance, achieving new breakthroughs in fields such as information technology, artificial intelligence, and aerospace engineering. 5G networks cover the whole country, telemedicine is developing rapidly, the use of electronic payment leads the world, and the Chang\'e lunar exploration project has demonstrated remarkable development in the aerospace field. The spirit of self-improvement and self-reliance has become a powerful driving force for the country\'s modernization process, inspiring the Chinese people to strive tirelessly for the great rejuvenation of the Chinese nation.',
    keypoints: ['自强自立 → self-improvement and self-reliance', '科研投入 → investment in scientific research', '人工智能 → artificial intelligence', '航天工程 → aerospace engineering', '远程医疗 → telemedicine', '中华民族伟大复兴 → great rejuvenation of the Chinese nation']
  },
  {
    id: 'tr2025dec3', year: 2025, period: '12月', set: '第三套',
    title: '节俭美德',
    original: '节俭（frugality）是中华民族的传统美德。在中国古代，生产力低下，先人们深知劳动成果来之不易，因而秉持节俭的理念。到了物质极大丰富的今天，中国人民依然坚持节俭的生活方式，体现了理性消费的生活理念和对劳动的尊重。近年来，中国政府持续加强节约型社会的建设，倡导"光盘行动"，减少食物浪费，提倡简约低碳的生活方式，推进资源循环利用，反对过度消费。节约型社会的建设有力推动了可持续发展，为子孙后代留下了宝贵的资源和良好的生态环境。',
    reference: 'Frugality is a traditional virtue of the Chinese nation. In ancient China, with low productivity, ancestors knew well that the fruits of labor were hard-won, and thus adhered to the concept of frugality. Even today, when material wealth is greatly abundant, the Chinese people still insist on a frugal lifestyle, reflecting the concept of rational consumption and respect for labor. In recent years, the Chinese government has continuously strengthened the construction of a conservation-oriented society, advocating the "Clean Plate Campaign" to reduce food waste, promoting a simple and low-carbon lifestyle, advancing resource recycling, and opposing excessive consumption. The construction of a conservation-oriented society has powerfully promoted sustainable development, leaving precious resources and a good ecological environment for future generations.',
    keypoints: ['节俭 → frugality', '劳动成果 → fruits of labor', '理性消费 → rational consumption', '光盘行动 → Clean Plate Campaign', '资源循环利用 → resource recycling', '可持续发展 → sustainable development']
  },
  {
    id: 'tr2025jun1', year: 2025, period: '6月', set: '第一套',
    title: '天宫空间站',
    original: '天宫空间站（Tiangong Space Station）是中国首个太空实验室，拥有110多立方米使用空间，可驻留3名航天员，在距地球表面400—450公里的轨道上运行。天宫空间站已实施180多个科学研究与应用项目，涉及空间生命科学、太空医学、空间材料科学等领域。天宫空间站的研究成果在我国得到了广泛应用，产生了显著的经济效益。例如，太空育种创造的直接经济价值已超过2000亿元。天宫空间站将继续为人类探索宇宙、造福人类作出更大贡献。',
    reference: 'The Tiangong Space Station is China\'s first space laboratory, with more than 110 cubic meters of usable space, capable of accommodating 3 astronauts, and operating in an orbit 400 to 450 kilometers above the Earth\'s surface. The Tiangong Space Station has implemented more than 180 scientific research and application projects, covering fields such as space life science, space medicine, and space materials science. The research results of the Tiangong Space Station have been widely applied in China, generating significant economic benefits. For example, the direct economic value created by space breeding has exceeded 200 billion yuan. The Tiangong Space Station will continue to make greater contributions to humanity\'s exploration of the universe and the benefit of mankind.',
    keypoints: ['太空实验室 → space laboratory', '航天员 → astronauts', '空间生命科学 → space life science', '太空医学 → space medicine', '太空育种 → space breeding', '探索宇宙 → exploration of the universe']
  },
  {
    id: 'tr2025jun2', year: 2025, period: '6月', set: '第二套',
    title: '南水北调工程',
    original: '自古以来，中国的水资源北缺南丰，分布极不均衡。为了有效解决北方严重缺水问题，中国政府实施了南水北调工程（the South-to-North Water Diversion Project）。这是一项跨区域配置水资源的宏大水利工程。历经数十年的规划与筹备，工程于2002年开工建设，分为东、中、西3条线路，总长4350公里，惠及人口将超过4亿。自2014年通水以来，工程向北方调水累计已超500亿立方米，有效缓解了北方地区的水资源短缺问题，改善了沿线地区的生态环境，促进了区域经济社会的协调发展。',
    reference: 'Since ancient times, China\'s water resources have been scarce in the north and abundant in the south, with extremely uneven distribution. To effectively address the serious water shortage in the north, the Chinese government implemented the South-to-North Water Diversion Project. This is a grand water conservancy project for cross-regional allocation of water resources. After decades of planning and preparation, construction began in 2002, divided into three routes — eastern, central, and western — with a total length of 4,350 kilometers, benefiting a population of more than 400 million. Since water was first diverted in 2014, the project has transferred a cumulative total of more than 50 billion cubic meters of water to the north, effectively alleviating the water shortage in northern regions, improving the ecological environment along the routes, and promoting the coordinated development of regional economy and society.',
    keypoints: ['南水北调 → South-to-North Water Diversion', '水资源 → water resources', '水利工程 → water conservancy project', '跨区域 → cross-regional', '生态环境 → ecological environment', '协调发展 → coordinated development']
  },
  {
    id: 'tr2025jun3', year: 2025, period: '6月', set: '第三套',
    title: '粤港澳大湾区',
    original: '粤港澳大湾区（Guangdong-Hong Kong-Macao Greater Bay Area）具有得天独厚的地理位置，拥有完善的交通基础设施和丰富的产业资源。大湾区是中国开放程度最高、经济活力最强的区域之一，在国家经济发展中具有重要的战略地位。大湾区不仅将建成充满活力的世界级城市群和具有全球影响力的国际科技创新中心，还将打造成适合工作、购物、旅游的优质生活圈。随着改革开放的不断深入，大湾区的发展将为中国乃至世界经济注入新的活力。',
    reference: 'The Guangdong-Hong Kong-Macao Greater Bay Area has a uniquely advantageous geographical location, with well-developed transportation infrastructure and abundant industrial resources. The Greater Bay Area is one of the most open and economically dynamic regions in China, with an important strategic position in the country\'s economic development. The Greater Bay Area will not only be built into a vibrant world-class urban agglomeration and an international science and technology innovation center with global influence, but will also be developed into a high-quality living circle suitable for work, shopping, and tourism. As reform and opening up continues to deepen, the development of the Greater Bay Area will inject new vitality into China\'s and even the world\'s economy.',
    keypoints: ['粤港澳大湾区 → Guangdong-Hong Kong-Macao Greater Bay Area', '交通基础设施 → transportation infrastructure', '经济活力 → economic vitality', '城市群 → urban agglomeration', '科技创新中心 → science and technology innovation center', '改革开放 → reform and opening up']
  },
  {
    id: 'tr2024dec1', year: 2024, period: '12月', set: '第一套',
    title: '北斗卫星导航系统',
    original: '北斗（Beidou）卫星导航系统的成功研制是中国自改革开放以来取得的一项重大科技成就。研发人员经过不懈努力，攻克了一系列技术难题，北斗系统最终实现了全球覆盖和高精度定位，使中国成为世界上少数几个独立拥有全球卫星导航系统的国家之一。北斗系统已广泛应用于交通运输、灾害救援、天气预报、公共安全等诸多领域。北斗系统现在已经在国际上得到广泛认可，开始为越来越多的国家和地区提供优质服务。',
    reference: 'The successful development of the Beidou Satellite Navigation System is a major scientific and technological achievement China has made since the reform and opening up. After tireless efforts, researchers overcame a series of technical difficulties, and the Beidou system ultimately achieved global coverage and high-precision positioning, making China one of the few countries in the world to independently possess a global satellite navigation system. The Beidou system has been widely applied in many fields such as transportation, disaster relief, weather forecasting, and public safety. The Beidou system has now gained wide international recognition and has begun to provide quality services to an increasing number of countries and regions.',
    keypoints: ['卫星导航系统 → Satellite Navigation System', '高精度定位 → high-precision positioning', '交通运输 → transportation', '灾害救援 → disaster relief', '天气预报 → weather forecasting', '国际认可 → international recognition']
  },
  {
    id: 'tr2024dec2', year: 2024, period: '12月', set: '第二套',
    title: '洋山港',
    original: '洋山港（Yangshan Port）是上海航运中心的重要组成部分，是中国第一个深水港，也是世界上规模最大的深水港之一。经过近20年的发展，洋山港已实现高度自动化。数字技术和人工智能的使用大大减少了用工成本和碳排放。自主研发的码头管理系统可以在百公里之外对大型设备进行远程操控。洋山港看上去一片繁忙，现场却见不到人工操作，而且能够24小时不间断运作。洋山港将不断发展，为把上海建成一个全球航运中心做出更大贡献。',
    reference: 'Yangshan Port is an important component of Shanghai\'s shipping center, China\'s first deep-water port, and one of the largest deep-water ports in the world. After nearly 20 years of development, Yangshan Port has achieved a high degree of automation. The use of digital technology and artificial intelligence has greatly reduced labor costs and carbon emissions. The independently developed terminal management system can remotely control large equipment from hundreds of kilometers away. Yangshan Port appears to be bustling with activity, yet no manual operations can be seen on site, and it can operate continuously 24 hours a day. Yangshan Port will continue to develop and make greater contributions to building Shanghai into a global shipping center.',
    keypoints: ['深水港 → deep-water port', '高度自动化 → high degree of automation', '碳排放 → carbon emissions', '码头管理系统 → terminal management system', '远程操控 → remote control', '全球航运中心 → global shipping center']
  },
  {
    id: 'tr2024dec3', year: 2024, period: '12月', set: '第三套',
    title: '中国航天梦',
    original: '遨游太空历来是中华民族的梦想。2003年，神舟五号飞船发射成功，杨利伟成为第一个飞入太空的中国宇航员。2008年，神舟七号升空，翟志刚成为中国历史上首位进行太空行走的宇航员。近年来，中国航天进入创新发展"快车道"，太空基础设施建设稳步推进，中国空间站于2022年全面建成。中国航天事业的迅速发展在中华民族的历史上写下了辉煌一页，也为人类文明进步做出了巨大贡献。未来，中国探索太空的脚步将迈得更稳、更远。',
    reference: 'Traveling in space has always been the dream of the Chinese nation. In 2003, the Shenzhou-5 spacecraft was successfully launched, and Yang Liwei became the first Chinese astronaut to fly into space. In 2008, Shenzhou-7 was launched, and Zhai Zhigang became the first astronaut in Chinese history to conduct a spacewalk. In recent years, China\'s space program has entered a "fast lane" of innovative development, with the construction of space infrastructure steadily advancing, and China\'s space station was fully completed in 2022. The rapid development of China\'s space program has written a glorious page in the history of the Chinese nation and has also made tremendous contributions to the progress of human civilization. In the future, China\'s steps in exploring space will be more steady and far-reaching.',
    keypoints: ['宇航员 → astronaut', '太空行走 → spacewalk', '空间站 → space station', '太空基础设施 → space infrastructure', '人类文明进步 → progress of human civilization', '探索太空 → exploring space']
  },
  {
    id: 'tr2024jun1', year: 2024, period: '6月', set: '第一套',
    title: '中国传统婚礼',
    original: '中国的传统婚礼习俗历史悠久，从周朝开始就逐渐形成了一套完整的婚礼仪式，有些一直沿用至今。如今的中式婚礼习俗已有很大变化，但婚礼庆典仍然十分隆重。婚礼场地经过精心装饰，以象征喜庆（jubilance）的红色为主色调，摆放着许多祝愿新人幸福的物件。在婚礼上，新人要拜天地（bow to Heaven and Earth），感谢父母的养育之恩，并向宾客敬茶。婚礼上的每一个环节都寄托着人们对新人的美好祝愿。',
    reference: 'Chinese traditional wedding customs have a long history. Starting from the Zhou Dynasty, a complete set of wedding ceremonies gradually formed, some of which are still in use today. Today\'s Chinese wedding customs have changed greatly, but wedding celebrations are still very grand. The wedding venue is carefully decorated, with red as the main color symbolizing jubilance, and many objects wishing the newlyweds happiness are displayed. At the wedding, the newlyweds bow to Heaven and Earth, express gratitude to their parents for raising them, and serve tea to the guests. Every aspect of the wedding carries people\'s best wishes for the newlyweds.',
    keypoints: ['传统婚礼 → traditional wedding', '婚礼仪式 → wedding ceremonies', '婚礼庆典 → wedding celebrations', '拜天地 → bow to Heaven and Earth', '养育之恩 → raising them', '敬茶 → serve tea']
  },
  {
    id: 'tr2024jun2', year: 2024, period: '6月', set: '第二套',
    title: '中国竹文化',
    original: '中国盛产竹子，是最早开发利用竹资源的国家。竹子在中国分布广泛，品种丰富。竹子实用性强，用于生产和生活的许多方面，如筷子、桌椅的制作和桥梁、房屋的建造。中国人爱竹，自古以来就有无数文人以竹为主题，创作了绚丽多彩的文学和绘画作品。竹子主干（stem）笔直，象征正直的品格。竹子具有强大的生命力和适应能力，无论环境多么恶劣，都能够顽强生存，因而寓意坚韧不拔的精神。几千年来，竹子一直被视为中华民族品格的象征。',
    reference: 'China is rich in bamboo and is the first country to develop and utilize bamboo resources. Bamboo is widely distributed in China with abundant varieties. Bamboo is highly practical and is used in many aspects of production and daily life, such as making chopsticks, tables and chairs, and constructing bridges and houses. Chinese people love bamboo, and since ancient times, countless literati have created colorful literary and artistic works with bamboo as their theme. The stem of bamboo is straight, symbolizing an upright character. Bamboo has strong vitality and adaptability, and can survive tenaciously no matter how harsh the environment, thus symbolizing an indomitable spirit. For thousands of years, bamboo has been regarded as a symbol of the Chinese national character.',
    keypoints: ['竹资源 → bamboo resources', '实用性 → practicality', '文人 → literati', '正直的品格 → upright character', '坚韧不拔 → indomitable spirit', '民族品格 → national character']
  },
  {
    id: 'tr2024jun3', year: 2024, period: '6月', set: '第三套',
    title: '中国扇文化',
    original: '扇子自古以来就深受中国人喜爱，但现在已不只是消暑纳凉的工具，而更多地作为艺术品供人欣赏。许多扇子造型优美、做工精良，并绘有山水、花鸟、人物等精美图案，具有很高的艺术价值。中国许多著名画家和书法家喜欢在扇子上作诗绘画，展示其艺术品味。扇子常作为礼物赠予他人，表达美好的祝福和真挚的情感。如今，扇子的实用功能已大为减弱，但作为一种文化符号和艺术形式，扇子仍然在中国传统文化中扮演着重要角色。',
    reference: 'Fans have been deeply loved by Chinese people since ancient times, but now they are no longer just tools for cooling off in summer, but are more often appreciated as works of art. Many fans have beautiful shapes, exquisite craftsmanship, and are painted with delicate patterns of landscapes, flowers and birds, and figures, possessing high artistic value. Many famous Chinese painters and calligraphers like to compose poems and paint on fans to showcase their artistic taste. Fans are often given as gifts to express good wishes and sincere feelings. Today, the practical function of fans has greatly diminished, but as a cultural symbol and art form, fans still play an important role in Chinese traditional culture.',
    keypoints: ['消暑纳凉 → cooling off in summer', '艺术品 → works of art', '书法家 → calligraphers', '艺术品味 → artistic taste', '文化符号 → cultural symbol', '传统文化 → traditional culture']
  },
  {
    id: 'tr2023dec1', year: 2023, period: '12月', set: '第一套',
    title: '中国人口老龄化应对',
    original: '随着经济与社会的发展，中国人口结构发生了显著变化，逐渐步入老龄化社会。中国老年人口将持续增加，人口老龄化趋势将更加明显。为了应对人口老龄化带来的种种挑战，国家正积极采取措施，加大对养老的支持。通过改革社会保障（social security）制度，政府不断增加社会保障经费，逐步扩大社会保障覆盖范围，使更多老年人受益。政府还鼓励各种社会团体为老年人提供服务。在政府和社会团体的共同努力下，老年人将生活得更加幸福。',
    reference: 'With the development of the economy and society, China\'s population structure has undergone significant changes, gradually entering an aging society. China\'s elderly population will continue to increase, and the trend of population aging will become more pronounced. In order to cope with the various challenges brought by population aging, the country is actively taking measures to increase support for elderly care. By reforming the social security system, the government has continuously increased social security funding and gradually expanded the coverage of social security, benefiting more elderly people. The government also encourages various social organizations to provide services for the elderly. With the joint efforts of the government and social organizations, the elderly will live happier lives.',
    keypoints: ['人口老龄化 → population aging', '老龄化社会 → aging society', '社会保障 → social security', '养老 → elderly care', '社会团体 → social organizations', '覆盖范围 → coverage']
  },
  {
    id: 'tr2023dec2', year: 2023, period: '12月', set: '第二套',
    title: '养老模式多元化',
    original: '在中国，随着老龄化社会的到来，养老受到普遍关注。人们谈论最多的是应当采取什么样的养老模式。多数人认为，养老模式需要多元化。可以通过政府引导和社会参与，建立更多更好的养老服务机构，改进社区服务中心，鼓励居家自助养老，还可以推行家庭养老与社会养老相结合的模式。随着政府和社会对养老服务事业投入的持续增加，养老设施将不断升级，服务质量逐步改进，老年人的生活将会更加方便舒适、健康快乐。',
    reference: 'In China, with the arrival of an aging society, elderly care has attracted widespread attention. What people discuss most is what kind of elderly care model should be adopted. Most people believe that elderly care models need to be diversified. Through government guidance and social participation, more and better elderly care service institutions can be established, community service centers can be improved, home-based self-care for the elderly can be encouraged, and a model combining family care with social care can be promoted. As the government and society continue to increase investment in elderly care services, elderly care facilities will be continuously upgraded, service quality will gradually improve, and the lives of the elderly will become more convenient, comfortable, healthy, and happy.',
    keypoints: ['养老模式 → elderly care model', '多元化 → diversified', '养老服务机构 → elderly care service institutions', '居家养老 → home-based elderly care', '家庭养老 → family care', '社会养老 → social care']
  },
  {
    id: 'tr2023dec3', year: 2023, period: '12月', set: '第三套',
    title: '养老服务体系建设',
    original: '近年来，中国老龄人口持续增长。中国政府正采取各种措施，推进养老服务体系建设，使老年人晚年生活健康幸福。全国兴建了各类养老服务机构。为了提升养老机构的服务质量，政府颁布了一系列标准，加强对养老机构的监管。许多城市为方便老年人用餐，开设了社区食堂，为他们提供价格实惠的饭菜。行动不便的老年人还能享受上门送餐服务。同时，中国还在积极探索居家和社区养老等其他养老模式，以确保所有老年人老有所养。',
    reference: 'In recent years, China\'s elderly population has continued to grow. The Chinese government is taking various measures to advance the construction of an elderly care service system, enabling the elderly to live healthy and happy lives in their later years. Various types of elderly care service institutions have been established across the country. To improve the service quality of elderly care institutions, the government has promulgated a series of standards and strengthened supervision of elderly care institutions. Many cities have opened community canteens to make it convenient for the elderly to have meals, providing them with affordable food. Elderly people with mobility difficulties can also enjoy meal delivery services. At the same time, China is actively exploring other elderly care models such as home-based and community-based care to ensure that all elderly people are well cared for.',
    keypoints: ['养老服务体系 → elderly care service system', '养老机构 → elderly care institutions', '监管 → supervision', '社区食堂 → community canteens', '上门送餐 → meal delivery services', '老有所养 → well cared for']
  },
  {
    id: 'tr2023jun1', year: 2023, period: '6月', set: '第一套',
    title: '城市公共设施建设',
    original: '随着中国经济的快速发展和人们生活水平的稳步提高，城市居民对环境和生活品质的要求越来越高。中国地方政府更加注重公共设施的建设和改进，以更好地满足人们的需求。通过兴建新的广场、公园和公共绿地或对原有公共场地重新加以规划改造，许多城市为市民提供了更多休闲和社交的场所。如今，政府出资购置的健身器械和铺设的健身步道在不少城市随处可见，既明显改善了市民户外活动的条件，又使城市更加美丽。',
    reference: 'With the rapid development of China\'s economy and the steady improvement of people\'s living standards, urban residents have increasingly higher requirements for the environment and quality of life. Local governments in China are paying more attention to the construction and improvement of public facilities to better meet people\'s needs. By building new squares, parks, and public green spaces, or by re-planning and renovating existing public spaces, many cities have provided citizens with more places for leisure and social activities. Today, fitness equipment purchased by the government and fitness trails laid by the government can be seen everywhere in many cities, which has not only significantly improved the conditions for citizens\' outdoor activities, but also made cities more beautiful.',
    keypoints: ['生活水平 → living standards', '公共设施 → public facilities', '公共绿地 → public green spaces', '休闲和社交 → leisure and social activities', '健身器械 → fitness equipment', '健身步道 → fitness trails']
  },
  {
    id: 'tr2023jun2', year: 2023, period: '6月', set: '第二套',
    title: '中国文化产品走向世界',
    original: '近年来，越来越多的中国文化产品走向全球市场，日益受到海外消费者的青睐。随着中国对外文化贸易的快速发展，中国文化产品出口额已持续多年位居世界前列，形成了一批具有国际影响力的文化企业、产品和品牌。数据显示，中国的出版物、影视作品、网络文学与动漫作品等在海外的销售量连年攀升。中国政府出台了一系列政策鼓励和支持更多具有中国元素的优秀文化产品走出国门，扩大海外市场份额，进一步提升中国文化的世界影响力。',
    reference: 'In recent years, more and more Chinese cultural products have entered the global market and are increasingly favored by overseas consumers. With the rapid development of China\'s foreign cultural trade, China\'s cultural product exports have ranked among the top in the world for many consecutive years, forming a group of cultural enterprises, products, and brands with international influence. Data shows that the overseas sales of China\'s publications, film and television works, online literature, and animation works have been rising year after year. The Chinese government has introduced a series of policies to encourage and support more excellent cultural products with Chinese elements to go global, expand overseas market share, and further enhance the global influence of Chinese culture.',
    keypoints: ['文化产品 → cultural products', '对外文化贸易 → foreign cultural trade', '国际影响力 → international influence', '影视作品 → film and television works', '网络文学 → online literature', '海外市场份额 → overseas market share']
  },
  {
    id: 'tr2023jun3', year: 2023, period: '6月', set: '第三套',
    title: '城市高质量发展',
    original: '近年来，中国城市加快发展，城市人居环境得到显著改善。许多城市努力探索中国特色的城市高质量发展之路，城市功能不断完善，治理水平明显提高。中国持续开展城市生态修复和功能修补，全面实施城镇老旧小区改造，大力推进城市园林绿化，消除污染；同时大力推进城市基础设施体系化建设，开展房屋建筑和市政设施普查以及安全隐患排查整治，努力为市民创造高品质的生活环境，让城市更美丽、更安全、更宜居。',
    reference: 'In recent years, China\'s cities have accelerated their development, and the urban living environment has been significantly improved. Many cities are striving to explore a path of high-quality urban development with Chinese characteristics, with urban functions continuously improving and governance levels significantly enhanced. China has continuously carried out urban ecological restoration and functional repair, comprehensively implemented the renovation of old urban residential areas, vigorously promoted urban landscaping and greening, and eliminated pollution. At the same time, it has vigorously promoted the systematic construction of urban infrastructure, conducted surveys of buildings and municipal facilities, and investigated and rectified potential safety hazards, striving to create a high-quality living environment for citizens and make cities more beautiful, safer, and more livable.',
    keypoints: ['人居环境 → living environment', '高质量发展 → high-quality development', '生态修复 → ecological restoration', '老旧小区改造 → renovation of old residential areas', '园林绿化 → landscaping and greening', '宜居 → livable']
  }
];
