// ===== 模拟测试数据 =====
// 5种类型：writing（写作）、reading（阅读）、translation（翻译）、vocab（词汇）、comprehensive（综合）
// 每种10套，每套10题

// 基础词汇测试题（原有）
const QUIZ_QUESTIONS = [
  { q:'Which word means "to make something easier or more likely to happen"?', opts:['A. undermine','B. facilitate','C. exacerbate','D. alleviate'], ans:'B', exp:'facilitate = 促进，便利。undermine=削弱，exacerbate=加剧，alleviate=减轻。' },
  { q:'The word "prevalent" is closest in meaning to:', opts:['A. rare','B. dangerous','C. widespread','D. temporary'], ans:'C', exp:'prevalent = 普遍的，widespread = 广泛的，两者同义。' },
  { q:'Choose the correct word: "We need to _____ new policies to address climate change."', opts:['A. undermine','B. implement','C. alleviate','D. foster'], ans:'B', exp:'implement policies = 实施政策，是固定搭配。' },
  { q:'What does "resilience" mean?', opts:['A. 脆弱性','B. 创新性','C. 韧性/恢复力','D. 相关性'], ans:'C', exp:'resilience = 韧性，恢复力，适应逆境的能力。' },
  { q:'The Silk Road was primarily a:', opts:['A. military route','B. trade and cultural exchange route','C. religious pilgrimage path','D. postal delivery system'], ans:'B', exp:'丝绸之路是古代贸易和文化交流的通道，这是翻译题的核心知识点。' },
  { q:'In CET-6 translation, "举世瞩目" is best translated as:', opts:['A. world-famous','B. attract worldwide attention','C. globally recognized','D. internationally acclaimed'], ans:'B', exp:'"举世瞩目" = attract worldwide attention，是六级翻译高频表达。' },
  { q:'Which sentence structure is most appropriate for a CET-6 essay conclusion?', opts:['A. I think this is good.','B. In conclusion, it is good.','C. Only by embracing innovation can we achieve sustainable development.','D. So, we should do better.'], ans:'C', exp:'"Only by + doing + can + 主语 + 动词"是六级作文高分结尾句型，体现倒装和逻辑性。' },
  { q:'The word "sustainable" in "sustainable development" means:', opts:['A. 快速的','B. 可持续的','C. 全面的','D. 创新的'], ans:'B', exp:'sustainable = 可持续的，sustainable development = 可持续发展，是六级高频词组。' },
  { q:'In CET-6 reading, when a question asks about the author\'s "attitude", you should look for:', opts:['A. specific numbers and dates','B. words expressing opinion like "unfortunately", "remarkably"','C. the first sentence of each paragraph','D. words in bold or italics'], ans:'B', exp:'态度题要找表达作者情感和观点的词汇，如unfortunately（遗憾地）、remarkably（显著地）等。' },
  { q:'Which is NOT a common topic in CET-6 translation passages?', opts:['A. Traditional Chinese medicine','B. The Great Wall','C. American pop culture','D. China\'s space program'], ans:'C', exp:'六级翻译几乎全部围绕中国文化、历史、科技、社会发展，美国流行文化不在考查范围内。' },
  { q:'"Biodiversity" refers to:', opts:['A. 生物技术','B. 生物多样性','C. 生态系统','D. 物种进化'], ans:'B', exp:'biodiversity = bio(生物) + diversity(多样性) = 生物多样性。' },
  { q:'In the Banked Cloze section, how many words do you choose from?', opts:['A. 10','B. 12','C. 15','D. 20'], ans:'C', exp:'选词填空题型：从15个选项中选10个填入空白，有5个干扰项。' },
  { q:'Which word best completes: "The new regulation aims to _____ traffic congestion in the city center."', opts:['A. exacerbate','B. undermine','C. alleviate','D. implement'], ans:'C', exp:'alleviate = 减轻，缓解。alleviate congestion = 缓解拥堵，是正确搭配。' },
  { q:'The CET-6 writing section requires approximately how many words?', opts:['A. 80-100 words','B. 120-150 words','C. 150-200 words','D. 250-300 words'], ans:'C', exp:'六级作文要求150-200词，低于150词会被扣分。' },
  { q:'"Empirical evidence" means evidence that is based on:', opts:['A. theoretical reasoning','B. observation and experiment','C. expert opinion','D. historical records'], ans:'B', exp:'empirical = 实证的，基于观察和实验的，与theoretical（理论的）相对。' },
  { q:'Which translation of "天人合一" is most accurate?', opts:['A. heaven and earth','B. the unity of man and nature','C. human civilization','D. natural harmony'], ans:'B', exp:'"天人合一"是中国哲学核心概念，英译为"the unity of man and nature"或"harmony between humanity and nature"。' },
  { q:'In CET-6 long reading (matching), one paragraph can match:', opts:['A. only one question','B. no questions','C. multiple questions','D. exactly two questions'], ans:'C', exp:'长篇阅读匹配题中，一个段落可以对应多个题目，不要因为已用过某段就排除它。' },
  { q:'The word "controversial" describes something that:', opts:['A. is widely accepted','B. causes disagreement or debate','C. is scientifically proven','D. is historically significant'], ans:'B', exp:'controversial = 有争议的，引起争论的，如"a controversial decision"（一个有争议的决定）。' },
  { q:'Which phrase correctly translates "一带一路"?', opts:['A. One Belt One Road','B. the Belt and Road Initiative','C. the Silk Road Project','D. China\'s Trade Network'], ans:'B', exp:'"一带一路"的官方英译是"the Belt and Road Initiative"，注意要用Initiative（倡议）。' },
  { q:'In CET-6 essays, which type of sentence is considered "high-scoring"?', opts:['A. Short, simple sentences','B. Sentences with complex structures and varied vocabulary','C. Sentences copied from the prompt','D. Sentences with many adjectives'], ans:'B', exp:'六级作文高分要求：句式多样（简单句+复合句+倒装句），词汇丰富（避免重复），逻辑清晰。' }
];

const MOCK_TESTS = {

// ===== 写作专项（10套）=====
writing: [
  {
    id: 'w-mock-1', title: '写作专项·第1套', type: 'writing',
    desc: '图画作文：科技与人文',
    prompt: '图画中，一个人手持智能手机，背后是一座图书馆，但图书馆的门紧闭着。请描述图画，阐释寓意，谈谈科技时代如何保持人文素养。（150-200词）',
    tips: '结构：描述图画→阐释寓意（科技便利但人文阅读被忽视）→观点（两者并重）',
    keyPhrases: ['the picture vividly depicts', 'the underlying message is', 'it is imperative that', 'strike a balance between'],
    reference: 'As is vividly depicted in the picture, a person is absorbed in their smartphone while the library behind them remains closed and unvisited. The picture conveys a thought-provoking message: in the age of digital technology, people are increasingly neglecting the profound value of humanistic learning.\n\nThis phenomenon reflects a broader societal trend. While smartphones provide instant access to information, they often deliver fragmented, superficial content that cannot replace the depth and richness of traditional reading. The humanities — literature, history, philosophy — cultivate critical thinking, empathy, and cultural identity, qualities that no algorithm can replicate.\n\nIn my view, technological advancement and humanistic cultivation are not mutually exclusive. We should leverage technology as a tool while consciously preserving time for deep reading and reflection. Only by striking a balance between digital convenience and humanistic depth can we develop into well-rounded individuals capable of navigating the complexities of modern life.'
  },
  {
    id: 'w-mock-2', title: '写作专项·第2套', type: 'writing',
    desc: '议论文：网络信息真实性',
    prompt: '在信息爆炸的时代，网络上充斥着大量虚假信息。有人认为平台应承担更多责任，也有人认为用户自身应提高媒体素养。谈谈你的观点。（150-200词）',
    tips: '结构：引出问题→两方观点分析→个人立场（双管齐下）',
    keyPhrases: ['misinformation', 'media literacy', 'platform accountability', 'critical thinking'],
    reference: 'The proliferation of misinformation in the digital age has become one of the most pressing challenges of our time. While some argue that online platforms bear primary responsibility for filtering false content, others contend that users themselves must develop stronger media literacy skills.\n\nBoth perspectives have merit. Platforms possess the technical resources and algorithms to detect and remove misleading content at scale. However, relying solely on platform regulation risks censorship and the suppression of legitimate discourse. On the other hand, empowering users with critical thinking skills creates a more sustainable, long-term solution.\n\nIn my opinion, addressing misinformation requires a dual approach. Platforms should implement transparent fact-checking mechanisms and clearly label unverified content. Simultaneously, educational institutions should incorporate media literacy into curricula, teaching students to evaluate sources critically. Only through this combined effort can we build a healthier information ecosystem.'
  },
  {
    id: 'w-mock-3', title: '写作专项·第3套', type: 'writing',
    desc: '图表作文：大学生创业意愿',
    prompt: '图表显示，近五年来有创业意愿的大学生比例从18%上升至35%。请描述变化趋势，分析原因，并谈谈这一现象的意义。（150-200词）',
    tips: '结构：描述数据变化→分析原因（政策支持、就业压力、创新文化）→意义',
    keyPhrases: ['the chart reveals a significant increase', 'this upward trend can be attributed to', 'entrepreneurial spirit', 'innovation-driven economy'],
    reference: 'The chart reveals a significant and steady increase in the proportion of college students with entrepreneurial aspirations, rising from 18% to 35% over the past five years — nearly doubling in just half a decade.\n\nThis upward trend can be attributed to several factors. First, supportive government policies, including startup subsidies and tax incentives, have lowered the barriers to entrepreneurship. Second, intensifying competition in the job market has prompted many graduates to consider self-employment as a viable alternative. Third, the growing culture of innovation on campuses, fueled by incubators and entrepreneurship courses, has inspired students to transform ideas into ventures.\n\nThis phenomenon carries profound significance. A generation of entrepreneurially-minded graduates will drive innovation, create employment opportunities, and contribute to an innovation-driven economy. However, students should also be aware of the risks involved and equip themselves with practical business knowledge before taking the entrepreneurial leap.'
  },
  {
    id: 'w-mock-4', title: '写作专项·第4套', type: 'writing',
    desc: '图画作文：环境保护',
    prompt: '图画中，一只北极熊站在一块正在融化的冰块上，周围是无边的海洋。请描述图画，阐释寓意，谈谈人类应如何应对气候变化。（150-200词）',
    tips: '结构：描述图画→寓意（气候变化威胁生态）→人类责任与行动',
    keyPhrases: ['the picture poignantly illustrates', 'climate change', 'ecological crisis', 'collective responsibility'],
    reference: 'The picture poignantly illustrates a polar bear stranded on a rapidly melting ice floe, surrounded by an endless expanse of ocean. This powerful image serves as a stark warning about the devastating consequences of climate change on our planet\'s ecosystems.\n\nThe melting Arctic ice is not merely a distant environmental issue — it is a symptom of a global crisis driven by human activities, particularly the excessive burning of fossil fuels and deforestation. As temperatures rise, entire species face extinction, sea levels threaten coastal communities, and weather patterns become increasingly unpredictable.\n\nAddressing climate change demands collective responsibility at every level. Governments must accelerate the transition to renewable energy and honor their commitments under international climate agreements. Corporations should adopt sustainable practices and reduce carbon emissions. As individuals, we can make conscious choices — reducing energy consumption, minimizing waste, and supporting environmentally responsible businesses. The fate of the polar bear, and indeed our own future, depends on the actions we take today.'
  },
  {
    id: 'w-mock-5', title: '写作专项·第5套', type: 'writing',
    desc: '议论文：大学生兼职利弊',
    prompt: '越来越多的大学生选择在校期间兼职工作。有人认为这有助于积累经验，也有人担心会影响学业。谈谈你的看法。（150-200词）',
    tips: '结构：引出现象→利（经验、经济独立、时间管理）→弊（影响学业）→建议（适度兼职）',
    keyPhrases: ['part-time employment', 'practical experience', 'academic performance', 'time management'],
    reference: 'The growing trend of college students taking part-time jobs reflects both economic necessity and a desire for practical experience. While this practice offers undeniable benefits, it also carries potential risks that students must carefully consider.\n\nOn the positive side, part-time employment provides students with valuable real-world experience, financial independence, and enhanced time management skills. Working alongside professionals exposes students to workplace dynamics that classroom learning cannot replicate, giving them a competitive edge in future job searches.\n\nHowever, excessive work commitments can seriously compromise academic performance. Students who overextend themselves risk falling behind in coursework, missing important lectures, and experiencing burnout — ultimately undermining the very purpose of their university education.\n\nIn my view, part-time work can be highly beneficial when approached with moderation. Students should limit working hours to no more than 15 per week, prioritize academic responsibilities, and choose jobs relevant to their field of study. With careful planning, part-time work can enrich rather than hinder the university experience.'
  },
  {
    id: 'w-mock-6', title: '写作专项·第6套', type: 'writing',
    desc: '图画作文：读书的力量',
    prompt: '图画中，一个孩子坐在书堆中阅读，书本化作翅膀托举着他飞翔。请描述图画，阐释寓意，谈谈阅读对个人成长的重要性。（150-200词）',
    tips: '结构：描述图画→寓意（阅读赋予人飞翔的力量）→阅读的价值',
    keyPhrases: ['the picture symbolizes', 'reading empowers', 'broaden one\'s horizons', 'intellectual growth'],
    reference: 'The picture presents an inspiring image: a child sits surrounded by towering stacks of books, and as he reads, the books transform into wings that lift him soaring through the sky. This vivid metaphor powerfully symbolizes the transformative power of reading.\n\nReading is far more than a leisure activity — it is a gateway to knowledge, imagination, and self-discovery. Through books, readers can travel across time and space, inhabit different perspectives, and encounter ideas that challenge and expand their worldview. Research consistently shows that avid readers develop stronger critical thinking skills, richer vocabularies, and greater empathy than their non-reading peers.\n\nIn an age dominated by short-form digital content, cultivating a deep reading habit has become both more challenging and more essential. I firmly believe that reading is the foundation of intellectual growth and lifelong learning. Parents and educators should nurture children\'s love of reading from an early age, for it is through books that young minds truly learn to fly.'
  },
  {
    id: 'w-mock-7', title: '写作专项·第7套', type: 'writing',
    desc: '议论文：人工智能与隐私',
    prompt: '人工智能技术的广泛应用带来了便利，但也引发了对个人隐私的担忧。谈谈你对AI与隐私保护问题的看法。（150-200词）',
    tips: '结构：引出矛盾→AI便利性→隐私风险→平衡方案',
    keyPhrases: ['artificial intelligence', 'privacy concerns', 'data security', 'regulatory framework'],
    reference: 'The rapid proliferation of artificial intelligence has brought unprecedented convenience to modern life, from personalized recommendations to smart home devices. Yet this technological revolution has simultaneously raised profound concerns about personal privacy and data security.\n\nAI systems rely on vast amounts of personal data to function effectively. While this enables highly personalized services, it also means that intimate details of our lives — our habits, preferences, health conditions, and social connections — are continuously collected, analyzed, and potentially exploited. High-profile data breaches and the misuse of personal information by corporations have understandably eroded public trust.\n\nAddressing this challenge requires a multi-faceted approach. Governments must establish robust regulatory frameworks that hold tech companies accountable for data protection. Companies should adopt privacy-by-design principles, collecting only the data strictly necessary for their services. As users, we should remain vigilant about the permissions we grant to applications. Ultimately, the goal is not to halt AI development, but to ensure it advances in a manner that respects human dignity and privacy.'
  },
  {
    id: 'w-mock-8', title: '写作专项·第8套', type: 'writing',
    desc: '图表作文：城乡教育差距',
    prompt: '数据显示，城市学生与农村学生在高等教育入学率上存在显著差距（城市68%，农村34%）。请描述现状，分析原因，提出建议。（150-200词）',
    tips: '结构：描述数据差距→原因（资源分配、师资、经济）→建议（政策、技术手段）',
    keyPhrases: ['educational disparity', 'urban-rural divide', 'equal access to education', 'targeted policies'],
    reference: 'The data reveals a stark educational disparity between urban and rural China: while 68% of urban students access higher education, only 34% of their rural counterparts do so — a gap that reflects deep-rooted structural inequalities.\n\nThis divide stems from multiple factors. Urban areas benefit from better-funded schools, more experienced teachers, and richer extracurricular resources. Rural families, often constrained by lower incomes, may prioritize immediate economic needs over long-term educational investment. Additionally, the concentration of prestigious universities in major cities creates geographical barriers for rural students.\n\nBridging this gap requires targeted, sustained policy intervention. The government should increase educational funding for rural areas, improve teacher compensation to attract qualified educators to underserved regions, and expand scholarship programs for rural students. Technology also offers promising solutions: high-quality online courses can deliver urban-standard education to remote areas. Ultimately, equal access to education is not merely a social justice issue — it is essential for China\'s long-term development and social cohesion.'
  },
  {
    id: 'w-mock-9', title: '写作专项·第9套', type: 'writing',
    desc: '议论文：社会责任与个人利益',
    prompt: '有人认为个人应将社会责任置于个人利益之上，也有人认为追求个人利益本身就是对社会的贡献。谈谈你的观点。（150-200词）',
    tips: '结构：引出争议→两种观点分析→辩证立场（两者可以统一）',
    keyPhrases: ['social responsibility', 'personal interest', 'collective well-being', 'harmonious society'],
    reference: 'The tension between social responsibility and personal interest has long been a subject of philosophical debate. While some argue that individuals should prioritize collective well-being over personal gain, others contend that the pursuit of self-interest, when channeled productively, inherently benefits society.\n\nBoth perspectives contain important truths. History is filled with examples of individuals who sacrificed personal comfort for the greater good — scientists, activists, and public servants whose contributions transformed society. At the same time, Adam Smith\'s insight that individual enterprise drives economic progress and innovation remains relevant today.\n\nIn my view, the dichotomy between social responsibility and personal interest is largely false. When individuals pursue their goals with integrity and contribute their talents to meaningful work, they simultaneously advance their own interests and benefit society. The key lies in cultivating a sense of purpose that transcends narrow self-interest. A truly fulfilling life, I believe, is one in which personal achievement and social contribution reinforce rather than contradict each other.'
  },
  {
    id: 'w-mock-10', title: '写作专项·第10套', type: 'writing',
    desc: '图画作文：传承与创新',
    prompt: '图画中，一位老工匠正在向年轻人传授传统手工艺，年轻人手中的作品融合了传统图案与现代设计。请描述图画，阐释寓意，谈谈如何在传承中创新。（150-200词）',
    tips: '结构：描述图画→寓意（传承是创新的根基）→如何在传承中创新',
    keyPhrases: ['the picture captures', 'inheritance and innovation', 'cultural continuity', 'creative transformation'],
    reference: 'The picture captures a touching scene of intergenerational transmission: a seasoned craftsman patiently guides a young apprentice, whose finished work beautifully blends traditional patterns with contemporary design sensibilities. This image eloquently illustrates the relationship between cultural inheritance and creative innovation.\n\nThe scene conveys a profound message: true innovation does not emerge from a cultural vacuum. The richest creative works are those that draw deeply from tradition while reimagining it for new contexts and audiences. Traditional craftsmanship embodies centuries of accumulated wisdom, aesthetic refinement, and cultural identity — a foundation upon which genuinely original work can be built.\n\nIn practice, inheriting and innovating requires both reverence and courage. We must first master the fundamentals of our cultural heritage before we can meaningfully transform them. Young creators should immerse themselves in traditional forms, understand their underlying principles, and then apply contemporary perspectives and technologies to breathe new life into ancient arts. This approach ensures cultural continuity while keeping traditions vibrant and relevant in the modern world.'
  }
],

// ===== 阅读专项（10套）=====
reading: [
  {
    id: 'r-mock-1', title: '阅读专项·第1套', type: 'reading',
    passage: `The concept of "flow," introduced by psychologist Mihaly Csikszentmihalyi, describes a state of complete immersion in a challenging activity. When in flow, people report losing track of time, feeling energized, and experiencing deep satisfaction. Research shows that flow occurs most often when the difficulty of a task is well-matched to a person's skill level — too easy and boredom sets in; too hard and anxiety takes over. Csikszentmihalyi argues that designing work and learning environments that facilitate flow is key to both productivity and well-being.`,
    questions: [
      { q: 'What is "flow"?', opts: ['A. A type of physical exercise.', 'B. A state of deep immersion in a challenging task.', 'C. A theory about time management.', 'D. A form of meditation.'], ans: 'B', exp: '"a state of complete immersion in a challenging activity"。' },
      { q: 'When does flow most likely occur?', opts: ['A. When a task is very easy.', 'B. When under extreme pressure.', 'C. When task difficulty matches skill level.', 'D. In a quiet environment.'], ans: 'C', exp: '"flow occurs most often when the difficulty of a task is well-matched to a person\'s skill level"。' },
      { q: 'What happens when a task is too easy?', opts: ['A. Flow is achieved instantly.', 'B. Anxiety increases.', 'C. Boredom sets in.', 'D. Creativity is enhanced.'], ans: 'C', exp: '"too easy and boredom sets in"。' },
      { q: '"Immersion" most likely means:', opts: ['A. complete involvement', 'B. physical submersion', 'C. mental confusion', 'D. temporary relaxation'], ans: 'A', exp: 'immersion = 全神贯注，complete involvement。' },
      { q: 'Csikszentmihalyi\'s main argument is:', opts: ['A. Flow should only be studied in athletes.', 'B. Flow-friendly environments boost productivity and well-being.', 'C. Schools should eliminate challenging tasks.', 'D. Flow is impossible in modern workplaces.'], ans: 'B', exp: '"designing environments that facilitate flow is key to both productivity and well-being."' }
    ]
  },
  {
    id: 'r-mock-2', title: '阅读专项·第2套', type: 'reading',
    passage: `Urban farming — growing food in cities — is gaining momentum worldwide. Rooftop gardens, vertical farms, and community plots are transforming unused urban spaces into productive agricultural land. Proponents argue that urban farming reduces food miles (the distance food travels from farm to table), provides fresh produce to urban residents, and strengthens community bonds. However, critics point out that urban farms produce far less food per square meter than conventional farms, and the cost of urban real estate makes large-scale urban agriculture economically unviable. Despite these challenges, many urban planners see urban farming as valuable for its social and environmental benefits.`,
    questions: [
      { q: 'What are "food miles"?', opts: ['A. Calories in food.', 'B. Distance food travels from farm to consumer.', 'C. Farmland area needed to feed a city.', 'D. Cost of transporting food.'], ans: 'B', exp: '括号内直接解释。' },
      { q: 'Which is NOT a mentioned benefit of urban farming?', opts: ['A. Reducing food miles.', 'B. Providing fresh produce.', 'C. Eliminating food waste.', 'D. Strengthening community bonds.'], ans: 'C', exp: '文章提到A、B、D，未提到消除食物浪费。' },
      { q: 'A major criticism of urban farming is:', opts: ['A. Uses too much water.', 'B. Produces less food per area and is costly.', 'C. Causes noise pollution.', 'D. Requires too many workers.'], ans: 'B', exp: '产量低 + 成本高。' },
      { q: 'The author\'s attitude is:', opts: ['A. Strongly opposed', 'B. Completely enthusiastic', 'C. Balanced', 'D. Indifferent'], ans: 'C', exp: '同时介绍支持者和批评者观点，态度平衡。' },
      { q: 'Urban planners primarily value urban farming for:', opts: ['A. Replacing conventional agriculture.', 'B. Low costs.', 'C. Social and environmental benefits.', 'D. National food security.'], ans: 'C', exp: '"particularly for its social and environmental benefits."' }
    ]
  },
  {
    id: 'r-mock-3', title: '阅读专项·第3套', type: 'reading',
    passage: `Sleep deprivation has reached epidemic proportions in modern societies. Studies indicate that nearly one-third of adults regularly sleep fewer than the recommended seven to nine hours per night. Chronic sleep loss impairs cognitive function, weakens the immune system, and is associated with increased risks of obesity, diabetes, cardiovascular disease, and depression. Paradoxically, many people sacrifice sleep in pursuit of productivity, unaware that sleep-deprived brains perform significantly worse on tasks requiring creativity and problem-solving. Sleep researchers now emphasize that adequate sleep is not a luxury but a biological necessity.`,
    questions: [
      { q: 'Recommended sleep duration:', opts: ['A. 5-7 hours', 'B. 6-8 hours', 'C. 7-9 hours', 'D. 8-10 hours'], ans: 'C', exp: '"the recommended seven to nine hours per night"。' },
      { q: 'The paradox is:', opts: ['A. More sleep = less productive.', 'B. People sacrifice sleep for productivity, but it hurts performance.', 'C. Short sleepers live longer.', 'D. Exercise improves sleep.'], ans: 'B', exp: '为效率牺牲睡眠，但睡眠不足使表现更差。' },
      { q: 'Which is NOT a risk of sleep loss?', opts: ['A. Obesity', 'B. Depression', 'C. Alzheimer\'s disease', 'D. Cardiovascular disease'], ans: 'C', exp: '文章未提及阿尔茨海默症。' },
      { q: '"Epidemic" suggests sleep deprivation is:', opts: ['A. Contagious', 'B. Widespread and serious', 'C. Caused by a virus', 'D. Easily treatable'], ans: 'B', exp: '比喻用法，表示问题非常普遍严重。' },
      { q: 'Sleep researchers\' main conclusion:', opts: ['A. Work fewer hours.', 'B. Napping replaces nighttime sleep.', 'C. Adequate sleep is a biological necessity.', 'D. Technology causes sleep deprivation.'], ans: 'C', exp: '"adequate sleep is not a luxury but a biological necessity."' }
    ]
  },
  {
    id: 'r-mock-4', title: '阅读专项·第4套', type: 'reading',
    passage: `Microplastics — tiny plastic particles less than five millimeters in size — have been found in virtually every environment on Earth, from Arctic ice to the deepest ocean trenches. They originate from the breakdown of larger plastic items and industrial processes. Recent studies have detected microplastics in human blood, lungs, and placentas. Preliminary research suggests microplastics may cause inflammation, disrupt hormonal function, and carry toxic chemicals into the body. Addressing this crisis requires reducing plastic production at the source, improving waste management, and developing biodegradable alternatives.`,
    questions: [
      { q: 'What are microplastics?', opts: ['A. Microscopic organisms.', 'B. Plastic particles smaller than 5mm.', 'C. Industrial chemicals.', 'D. Biodegradable materials.'], ans: 'B', exp: '"tiny plastic particles less than five millimeters in size"。' },
      { q: 'Where are microplastics NOT detected in the passage?', opts: ['A. Arctic ice', 'B. Human blood', 'C. Ocean trenches', 'D. Freshwater rivers'], ans: 'D', exp: '文章未提到淡水河流。' },
      { q: 'A potential health effect:', opts: ['A. Improved immunity', 'B. Hormonal disruption', 'C. Enhanced cognition', 'D. Stronger bones'], ans: 'B', exp: '"disrupt hormonal function"。' },
      { q: '"At the source" means:', opts: ['A. From recycling centers', 'B. Reducing plastic production in the first place', 'C. Ocean cleanup', 'D. Filtering water'], ans: 'B', exp: '从源头减少塑料生产。' },
      { q: 'The recommended approach is:', opts: ['A. Ban all plastic immediately.', 'B. Reduce production + improve waste management + develop alternatives.', 'C. Develop medical treatments.', 'D. Move production to remote areas.'], ans: 'B', exp: '三管齐下的方法。' }
    ]
  },
  {
    id: 'r-mock-5', title: '阅读专项·第5套', type: 'reading',
    passage: `The gig economy — characterized by short-term contracts and freelance work — has grown dramatically. Platforms like ride-sharing apps have created millions of income opportunities for workers valuing flexibility. However, gig workers typically lack health insurance, paid leave, and retirement savings plans. Labor advocates argue this arrangement transfers risk from corporations to individual workers. Some countries have begun legislating minimum wage protections for gig workers, reflecting debate about adapting labor laws to the modern economy.`,
    questions: [
      { q: 'The gig economy is characterized by:', opts: ['A. Long-term stable contracts.', 'B. Short-term and freelance work.', 'C. Government enterprises.', 'D. High-paying careers.'], ans: 'B', exp: '"short-term contracts and freelance work"。' },
      { q: 'Gig workers typically lack:', opts: ['A. Flexible hours', 'B. Autonomy', 'C. Health insurance and paid leave', 'D. Multiple income sources'], ans: 'C', exp: '"lack health insurance, paid leave, and retirement savings plans"。' },
      { q: 'Labor advocates say the gig economy:', opts: ['A. Increases corporate profits unfairly.', 'B. Transfers risk to workers.', 'C. Reduces need for regulation.', 'D. Eliminates discrimination.'], ans: 'B', exp: '"transfers risk from corporations to individual workers."' },
      { q: 'A trend regarding gig workers:', opts: ['A. Gig work is declining.', 'B. Workers are forming unions.', 'C. Some countries are legislating protections.', 'D. Platforms are being banned.'], ans: 'C', exp: '"Some countries have begun legislating...protections for gig workers."' },
      { q: '"Adapting labor laws" implies:', opts: ['A. Existing laws are perfect.', 'B. Current laws may not address gig work adequately.', 'C. Laws should be abolished.', 'D. Only tech companies need new rules.'], ans: 'B', exp: '"adapt"暗示现有法律不足以应对新经济形态。' }
    ]
  },
  {
    id: 'r-mock-6', title: '阅读专项·第6套', type: 'reading',
    passage: `Bilingualism has long been associated with cognitive advantages. Research suggests bilingual individuals outperform monolinguals on attention switching, conflict resolution, and working memory tasks. Scientists attribute this to managing two language systems, which strengthens executive function — the brain's ability to control attention and inhibit irrelevant information. Some studies suggest bilingualism may delay dementia onset by several years. However, some studies have failed to replicate these benefits, leading to ongoing debate.`,
    questions: [
      { q: 'Bilinguals excel at:', opts: ['A. Math and memory.', 'B. Attention switching, conflict resolution, working memory.', 'C. Creative writing.', 'D. Physical coordination.'], ans: 'B', exp: '文章明确列举这三项。' },
      { q: '"Executive function" is:', opts: ['A. The brain\'s language center.', 'B. Ability to learn languages.', 'C. Ability to control attention and inhibit irrelevant information.', 'D. Long-term memory.'], ans: 'C', exp: '文章直接定义。' },
      { q: 'A health benefit of bilingualism:', opts: ['A. Reduced cardiovascular risk.', 'B. Delayed dementia onset.', 'C. Better fitness.', 'D. Lower anxiety.'], ans: 'B', exp: '"may delay the onset of dementia."' },
      { q: 'Why is there ongoing debate?', opts: ['A. Hard to measure.', 'B. Some studies failed to replicate benefits.', 'C. Most people aren\'t truly bilingual.', 'D. Only studied in children.'], ans: 'B', exp: '"some studies have failed to replicate the cognitive benefits."' },
      { q: 'The passage tone is:', opts: ['A. Promotional', 'B. Highly critical', 'C. Informative and balanced', 'D. Pessimistic'], ans: 'C', exp: '客观介绍研究发现同时指出争议。' }
    ]
  },
  {
    id: 'r-mock-7', title: '阅读专项·第7套', type: 'reading',
    passage: `The circular economy offers an alternative to the "take-make-dispose" model. Products are designed for longevity, repairability, and recycling. Waste is viewed as a resource to re-enter the production cycle. Companies adopting circular principles find cost savings and new revenue streams from repair services. European governments lead circular economy policy development. Transitioning requires collaboration across industries, governments, and consumers.`,
    questions: [
      { q: '"Take-make-dispose" is:', opts: ['A. Products lasting forever.', 'B. A linear process ending in disposal.', 'C. Recycling all materials.', 'D. Using renewables only.'], ans: 'B', exp: '线性生产模式，最终废弃。' },
      { q: 'In a circular economy, waste is:', opts: ['A. An unavoidable cost.', 'B. An environmental hazard.', 'C. A resource to re-enter production.', 'D. A government responsibility.'], ans: 'C', exp: '"a resource to be fed back into the production cycle."' },
      { q: 'Business benefits include:', opts: ['A. Faster production.', 'B. Cost savings and new revenue.', 'C. Reduced workforce.', 'D. Lower marketing costs.'], ans: 'B', exp: '"cost savings and new revenue streams."' },
      { q: 'Which region leads circular economy policy?', opts: ['A. North America', 'B. Asia Pacific', 'C. Europe', 'D. Latin America'], ans: 'C', exp: '"European governments lead."' },
      { q: 'Transition requires:', opts: ['A. Government control.', 'B. Banning all plastic.', 'C. Collaboration across industries, governments, consumers.', 'D. Replacing all products.'], ans: 'C', exp: '"requires collaboration across industries, governments, and consumers."' }
    ]
  },
  {
    id: 'r-mock-8', title: '阅读专项·第8套', type: 'reading',
    passage: `Emotional intelligence (EI) — recognizing, understanding, and managing emotions — is critical for success. Unlike IQ, which is stable, EI can be developed. High-EI individuals have stronger relationships, perform better under stress, and lead more effectively. High-EI leaders inspire teams, navigate conflicts, and create inclusive environments. Some researchers argue EI may predict career success better than IQ in many fields.`,
    questions: [
      { q: 'EI differs from IQ because:', opts: ['A. EI is inherited; IQ learned.', 'B. EI can be developed; IQ is stable.', 'C. EI measures academics.', 'D. EI matters more in science.'], ans: 'B', exp: '"Unlike IQ, which is stable, EI can be developed."' },
      { q: 'Which is NOT associated with high EI?', opts: ['A. Stronger relationships.', 'B. Better stress performance.', 'C. Higher test scores.', 'D. Effective leadership.'], ans: 'C', exp: '文章未提到学术考试成绩。' },
      { q: 'High-EI leaders can:', opts: ['A. Make faster decisions.', 'B. Increase profits directly.', 'C. Inspire teams, manage conflict, create inclusive environments.', 'D. Develop technical skills faster.'], ans: 'C', exp: '"inspire teams, navigate conflicts, create inclusive environments."' },
      { q: 'Some researchers claim EI:', opts: ['A. IQ is always more important.', 'B. EI may predict career success better than IQ.', 'C. EI and IQ are the same.', 'D. Neither predicts success.'], ans: 'B', exp: '"EI may be a better predictor of career success than IQ."' },
      { q: 'The passage mainly:', opts: ['A. Argues schools stop testing IQ.', 'B. Explains EI and its importance.', 'C. Describes how to measure EI.', 'D. Compares cultural views on intelligence.'], ans: 'B', exp: '围绕EI的定义和重要性展开。' }
    ]
  },
  {
    id: 'r-mock-9', title: '阅读专项·第9套', type: 'reading',
    passage: `"Brain drain" — emigration of skilled professionals from developing to wealthier nations — challenges global equity. Home countries lose talent and educational investment. Receiving countries gain skilled workers without training costs. Some economists point to "brain circulation" — knowledge flowing back via diaspora networks. China and India show how emigrant communities can contribute to home country development.`,
    questions: [
      { q: '"Brain drain" is:', opts: ['A. A neurological condition.', 'B. Emigration of skilled professionals from developing to wealthier countries.', 'C. Knowledge transfer within a country.', 'D. Declining education standards.'], ans: 'B', exp: '文章开头直接定义。' },
      { q: 'Developing countries lose:', opts: ['A. Only money.', 'B. Talent and educational investment.', 'C. Political influence.', 'D. Foreign technology access.'], ans: 'B', exp: '"lose not only talent but also the investment in their education."' },
      { q: '"Brain circulation" is:', opts: ['A. A medical term.', 'B. Knowledge returning to home countries via diaspora.', 'C. Executive rotation.', 'D. An immigration policy.'], ans: 'B', exp: '"knowledge flowing back via diaspora networks."' },
      { q: 'China and India are examples of:', opts: ['A. Countries damaged by brain drain.', 'B. Countries restricting emigration.', 'C. Countries whose emigrants contribute to home development.', 'D. Countries with highest brain drain.'], ans: 'C', exp: '"emigrant communities can contribute to home country development."' },
      { q: 'The main debate is:', opts: ['A. Whether to restrict immigration.', 'B. Whether brain drain is purely negative or can have positive effects.', 'C. Whether to invest more in education.', 'D. Whether wealthy countries should compensate developing ones.'], ans: 'B', exp: '文章同时呈现负面影响和积极面。' }
    ]
  },
  {
    id: 'r-mock-10', title: '阅读专项·第10套', type: 'reading',
    passage: `Nudge theory proposes that subtle changes in how choices are presented influence decisions without restricting freedom. Unlike mandates or financial incentives, nudges exploit cognitive biases. For example, placing healthy food at eye level increases its selection. Automatically enrolling employees in retirement plans (with opt-out option) dramatically increases participation. Nudge theory has been applied in public health, energy conservation, tax compliance, and organ donation.`,
    questions: [
      { q: 'Nudge theory\'s core principle:', opts: ['A. Force healthy choices.', 'B. Financial penalties work best.', 'C. Subtle presentation changes influence decisions without restricting freedom.', 'D. Education changes behavior best.'], ans: 'C', exp: '"subtle changes...influence decisions without restricting freedom."' },
      { q: 'Nudges work by:', opts: ['A. Offering rewards.', 'B. Exploiting cognitive biases.', 'C. Legal mandates.', 'D. Education.'], ans: 'B', exp: '"nudges work by exploiting cognitive biases."' },
      { q: 'The cafeteria example shows:', opts: ['A. Banning unhealthy food helps.', 'B. Placing healthy food prominently increases selection.', 'C. People choose cheapest options.', 'D. Staff influence choices.'], ans: 'B', exp: '"placing healthy food at eye level increases its selection."' },
      { q: '"Opt out" means:', opts: ['A. Choosing to join.', 'B. Being automatically enrolled.', 'C. Actively leaving the plan.', 'D. Receiving benefits.'], ans: 'C', exp: '主动退出已被默认加入的计划。' },
      { q: 'Nudge theory is NOT applied in:', opts: ['A. Public health', 'B. Energy conservation', 'C. Criminal justice', 'D. Organ donation'], ans: 'C', exp: '文章未提到criminal justice。' }
    ]
  }
],

translation: [
  {
    id: 'tr-mock-1', title: '翻译专项·第1套', type: 'translation',
    original: '中国是世界上人口最多的国家，拥有超过14亿人口。中国地域辽阔，自然资源丰富，拥有多样的地理环境，从北方的草原到南方的热带雨林，从东部的平原到西部的高原。中国有着五千年的文明史，是世界上最古老的文明之一，对人类文明的发展作出了重要贡献。',
    reference: 'China is the most populous country in the world, with a population of over 1.4 billion. China has a vast territory and abundant natural resources, with diverse geographical environments ranging from grasslands in the north to tropical rainforests in the south, and from plains in the east to plateaus in the west. China has a 5,000-year history of civilization and is one of the oldest civilizations in the world, making significant contributions to the development of human civilization.',
    keypoints: ['人口最多 → most populous', '地域辽阔 → vast territory', '自然资源丰富 → abundant natural resources', '热带雨林 → tropical rainforests', '文明史 → history of civilization', '作出贡献 → make contributions']
  },
  {
    id: 'tr-mock-2', title: '翻译专项·第2套', type: 'translation',
    original: '改革开放以来，中国经济取得了举世瞩目的成就。中国已成为世界第二大经济体，制造业规模居世界首位。数亿人口摆脱了贫困，人民生活水平显著提高。中国的城镇化进程不断加快，越来越多的农村人口迁移到城市，推动了经济的持续发展。',
    reference: 'Since the reform and opening up, China\'s economy has achieved remarkable accomplishments that have attracted worldwide attention. China has become the world\'s second-largest economy, with its manufacturing sector ranking first in the world. Hundreds of millions of people have been lifted out of poverty, and people\'s living standards have improved significantly. China\'s urbanization process has been accelerating, with more and more rural populations migrating to cities, driving sustained economic development.',
    keypoints: ['改革开放 → reform and opening up', '举世瞩目 → attract worldwide attention', '第二大经济体 → second-largest economy', '摆脱贫困 → be lifted out of poverty', '城镇化 → urbanization', '持续发展 → sustained development']
  },
  {
    id: 'tr-mock-3', title: '翻译专项·第3套', type: 'translation',
    original: '中国传统节日是中华文化的重要组成部分，承载着丰富的历史文化内涵。除春节外，清明节、端午节、中秋节等传统节日也深受人们喜爱。这些节日不仅是家人团聚的时刻，也是传承民族文化、增强民族凝聚力的重要载体。近年来，中国传统节日越来越受到国际社会的关注和认可。',
    reference: 'Traditional Chinese festivals are an important component of Chinese culture, carrying rich historical and cultural connotations. In addition to the Spring Festival, traditional festivals such as the Qingming Festival, the Dragon Boat Festival, and the Mid-Autumn Festival are also deeply loved by people. These festivals are not only occasions for family reunions but also important vehicles for passing down ethnic culture and enhancing national cohesion. In recent years, traditional Chinese festivals have attracted increasing attention and recognition from the international community.',
    keypoints: ['传统节日 → traditional festivals', '历史文化内涵 → historical and cultural connotations', '清明节 → Qingming Festival', '端午节 → Dragon Boat Festival', '中秋节 → Mid-Autumn Festival', '民族凝聚力 → national cohesion']
  },
  {
    id: 'tr-mock-4', title: '翻译专项·第4套', type: 'translation',
    original: '中国的教育事业取得了长足进步。九年义务教育已在全国范围内普及，高等教育入学率大幅提升。中国高校数量和在校学生人数均居世界前列。政府持续加大对教育的投入，不断改善农村和偏远地区的教育条件，努力缩小城乡教育差距，促进教育公平。',
    reference: 'China\'s education sector has made great strides. Nine-year compulsory education has been universally implemented nationwide, and the enrollment rate in higher education has increased significantly. The number of universities and enrolled students in China both rank among the top in the world. The government has continued to increase investment in education, constantly improving educational conditions in rural and remote areas, striving to narrow the urban-rural education gap and promote educational equity.',
    keypoints: ['九年义务教育 → nine-year compulsory education', '高等教育入学率 → enrollment rate in higher education', '持续加大投入 → continue to increase investment', '偏远地区 → remote areas', '城乡差距 → urban-rural gap', '教育公平 → educational equity']
  },
  {
    id: 'tr-mock-5', title: '翻译专项·第5套', type: 'translation',
    original: '中国是世界上最大的发展中国家，也是全球应对气候变化的重要参与者。中国承诺力争于2030年前实现碳达峰，2060年前实现碳中和。为实现这一目标，中国大力发展可再生能源，积极推进能源结构转型，持续提高能源利用效率，努力走出一条绿色低碳的可持续发展道路。',
    reference: 'China is the world\'s largest developing country and an important participant in global efforts to address climate change. China has pledged to strive to peak carbon emissions before 2030 and achieve carbon neutrality before 2060. To achieve this goal, China is vigorously developing renewable energy, actively promoting the transformation of its energy structure, continuously improving energy efficiency, and striving to forge a green, low-carbon path of sustainable development.',
    keypoints: ['发展中国家 → developing country', '应对气候变化 → address climate change', '碳达峰 → peak carbon emissions', '碳中和 → carbon neutrality', '可再生能源 → renewable energy', '能源结构转型 → transformation of energy structure']
  },
  {
    id: 'tr-mock-6', title: '翻译专项·第6套', type: 'translation',
    original: '中国互联网产业发展迅猛，网民规模居全球首位。移动支付、电子商务、共享经济等新业态蓬勃发展，深刻改变了人们的生活方式和消费习惯。中国的数字经济规模不断扩大，已成为推动经济增长的重要引擎。与此同时，中国也在积极推进数字基础设施建设，加快5G网络部署，为数字经济发展奠定坚实基础。',
    reference: 'China\'s internet industry has developed rapidly, with the number of internet users ranking first in the world. New business models such as mobile payment, e-commerce, and the sharing economy have flourished, profoundly changing people\'s lifestyles and consumption habits. The scale of China\'s digital economy continues to expand, becoming an important engine driving economic growth. At the same time, China is also actively promoting the construction of digital infrastructure, accelerating the deployment of 5G networks, and laying a solid foundation for the development of the digital economy.',
    keypoints: ['网民规模 → number of internet users', '移动支付 → mobile payment', '共享经济 → sharing economy', '新业态 → new business models', '数字经济 → digital economy', '5G网络部署 → deployment of 5G networks']
  },
  {
    id: 'tr-mock-7', title: '翻译专项·第7套', type: 'translation',
    original: '中国是世界上最大的粮食生产国和消费国。中国以占世界约9%的耕地养活了世界近20%的人口，创造了举世公认的奇迹。近年来，中国大力推进农业现代化，积极推广农业科技，提高粮食生产效率，确保国家粮食安全。同时，中国也在积极探索可持续农业发展模式，减少农业对环境的负面影响。',
    reference: 'China is the world\'s largest producer and consumer of grain. China feeds nearly 20% of the world\'s population with approximately 9% of the world\'s arable land, creating a universally recognized miracle. In recent years, China has vigorously promoted agricultural modernization, actively promoted agricultural technology, improved grain production efficiency, and ensured national food security. At the same time, China is also actively exploring sustainable agricultural development models to reduce the negative impact of agriculture on the environment.',
    keypoints: ['粮食生产国 → producer of grain', '耕地 → arable land', '举世公认 → universally recognized', '农业现代化 → agricultural modernization', '粮食安全 → food security', '可持续农业 → sustainable agriculture']
  },
  {
    id: 'tr-mock-8', title: '翻译专项·第8套', type: 'translation',
    original: '中国文化博大精深，源远流长。中国的文学、艺术、哲学、建筑等各个领域都有着辉煌的成就。儒家思想、道家思想、佛教文化等对中国人的思维方式和价值观念产生了深远影响。中国的传统艺术形式，如京剧、书法、国画、民间工艺等，是中华文明的瑰宝，也是全人类共同的文化遗产。',
    reference: 'Chinese culture is profound and extensive, with a long history. China has achieved brilliant accomplishments in literature, art, philosophy, architecture, and other fields. Confucianism, Taoism, and Buddhist culture have had a profound influence on the way of thinking and values of the Chinese people. Traditional Chinese art forms, such as Peking opera, calligraphy, traditional Chinese painting, and folk crafts, are treasures of Chinese civilization and the common cultural heritage of all humanity.',
    keypoints: ['博大精深 → profound and extensive', '儒家思想 → Confucianism', '道家思想 → Taoism', '京剧 → Peking opera', '国画 → traditional Chinese painting', '文化遗产 → cultural heritage']
  },
  {
    id: 'tr-mock-9', title: '翻译专项·第9套', type: 'translation',
    original: '中国积极参与全球治理，致力于推动构建人类命运共同体。中国坚持走和平发展道路，奉行互利共赢的开放战略，积极参与多边合作机制。"一带一路"倡议自提出以来，已有众多国家和国际组织参与其中，为沿线国家的基础设施建设和经济发展提供了重要支持，促进了各国之间的互联互通。',
    reference: 'China actively participates in global governance and is committed to promoting the building of a community with a shared future for mankind. China adheres to the path of peaceful development, pursues an open strategy of mutual benefit and win-win cooperation, and actively participates in multilateral cooperation mechanisms. Since the Belt and Road Initiative was proposed, numerous countries and international organizations have joined it, providing important support for infrastructure construction and economic development in countries along the routes, and promoting connectivity among countries.',
    keypoints: ['全球治理 → global governance', '人类命运共同体 → community with a shared future for mankind', '和平发展 → peaceful development', '互利共赢 → mutual benefit and win-win', '多边合作 → multilateral cooperation', '互联互通 → connectivity']
  },
  {
    id: 'tr-mock-10', title: '翻译专项·第10套', type: 'translation',
    original: '中国的医疗卫生事业取得了显著进步。基本医疗保险覆盖率大幅提升，人均预期寿命不断延长。中国建立了覆盖城乡的医疗卫生服务体系，基层医疗卫生机构的服务能力持续增强。面对新冠疫情等重大公共卫生挑战，中国展现出强大的应对能力，为全球公共卫生安全作出了重要贡献。',
    reference: 'China\'s healthcare sector has made remarkable progress. The coverage rate of basic medical insurance has increased significantly, and life expectancy has continued to rise. China has established a healthcare service system covering both urban and rural areas, with the service capacity of primary healthcare institutions continuously strengthening. In the face of major public health challenges such as COVID-19, China has demonstrated strong response capabilities and made important contributions to global public health security.',
    keypoints: ['基本医疗保险 → basic medical insurance', '人均预期寿命 → life expectancy', '基层医疗 → primary healthcare', '公共卫生 → public health', '应对能力 → response capabilities', '全球公共卫生安全 → global public health security']
  }
],

vocab: [
  {
    id: 'v-mock-1', title: '词汇专项·第1套', type: 'vocab',
    questions: [
      { word: 'facilitate', sentence: 'Technology can _____ communication between people in different countries.', opts: ['A. hinder', 'B. facilitate', 'C. complicate', 'D. ignore'], ans: 'B', exp: 'facilitate = 促进、使便利。句意：技术能促进不同国家人们之间的交流。' },
      { word: 'inevitable', sentence: 'With the rapid development of AI, some job losses seem _____.', opts: ['A. optional', 'B. avoidable', 'C. inevitable', 'D. temporary'], ans: 'C', exp: 'inevitable = 不可避免的。句意：随着AI快速发展，一些工作岗位的消失似乎不可避免。' },
      { word: 'substantial', sentence: 'The company made a _____ profit last year despite the economic downturn.', opts: ['A. minimal', 'B. substantial', 'C. marginal', 'D. negative'], ans: 'B', exp: 'substantial = 大量的、可观的。句意：尽管经济下滑，该公司去年仍获得了可观利润。' },
      { word: 'undermine', sentence: 'Constant criticism can _____ a person\'s confidence.', opts: ['A. boost', 'B. maintain', 'C. undermine', 'D. restore'], ans: 'C', exp: 'undermine = 削弱、破坏。句意：持续的批评会削弱一个人的自信心。' },
      { word: 'prevalent', sentence: 'Smartphone addiction has become increasingly _____ among teenagers.', opts: ['A. rare', 'B. prevalent', 'C. harmless', 'D. beneficial'], ans: 'B', exp: 'prevalent = 普遍的、流行的。句意：智能手机成瘾在青少年中越来越普遍。' },
      { word: 'acknowledge', sentence: 'The scientist _____ that her research had certain limitations.', opts: ['A. denied', 'B. ignored', 'C. acknowledged', 'D. exaggerated'], ans: 'C', exp: 'acknowledge = 承认。句意：这位科学家承认她的研究有一定局限性。' },
      { word: 'sustainable', sentence: 'We need to develop _____ energy sources to protect the environment.', opts: ['A. sustainable', 'B. exhaustible', 'C. polluting', 'D. expensive'], ans: 'A', exp: 'sustainable = 可持续的。句意：我们需要开发可持续能源来保护环境。' },
      { word: 'enhance', sentence: 'Regular exercise can _____ both physical and mental health.', opts: ['A. damage', 'B. enhance', 'C. reduce', 'D. ignore'], ans: 'B', exp: 'enhance = 增强、提升。句意：定期锻炼能增强身心健康。' },
      { word: 'implement', sentence: 'The government plans to _____ new policies to reduce carbon emissions.', opts: ['A. abandon', 'B. implement', 'C. oppose', 'D. delay'], ans: 'B', exp: 'implement = 实施、执行。句意：政府计划实施新政策以减少碳排放。' },
      { word: 'vulnerable', sentence: 'Elderly people are particularly _____ to respiratory diseases in winter.', opts: ['A. immune', 'B. resistant', 'C. vulnerable', 'D. indifferent'], ans: 'C', exp: 'vulnerable = 脆弱的、易受影响的。句意：老年人在冬季特别容易受到呼吸道疾病的侵袭。' }
    ]
  },
  {
    id: 'v-mock-2', title: '词汇专项·第2套', type: 'vocab',
    questions: [
      { word: 'alleviate', sentence: 'The new medicine helped to _____ the patient\'s pain significantly.', opts: ['A. worsen', 'B. alleviate', 'C. ignore', 'D. cause'], ans: 'B', exp: 'alleviate = 减轻、缓解。句意：新药物帮助显著减轻了患者的疼痛。' },
      { word: 'innovative', sentence: 'The startup is known for its _____ approach to solving environmental problems.', opts: ['A. traditional', 'B. outdated', 'C. innovative', 'D. conventional'], ans: 'C', exp: 'innovative = 创新的。句意：这家初创公司以其解决环境问题的创新方法而闻名。' },
      { word: 'comprehensive', sentence: 'The report provides a _____ analysis of the current economic situation.', opts: ['A. partial', 'B. comprehensive', 'C. brief', 'D. biased'], ans: 'B', exp: 'comprehensive = 全面的、综合的。句意：该报告对当前经济形势进行了全面分析。' },
      { word: 'foster', sentence: 'Schools should _____ creativity and critical thinking in students.', opts: ['A. suppress', 'B. discourage', 'C. foster', 'D. ignore'], ans: 'C', exp: 'foster = 培养、促进。句意：学校应该培养学生的创造力和批判性思维。' },
      { word: 'controversial', sentence: 'The politician\'s speech on immigration was highly _____.', opts: ['A. uncontroversial', 'B. controversial', 'C. boring', 'D. irrelevant'], ans: 'B', exp: 'controversial = 有争议的。句意：这位政客关于移民问题的演讲极具争议。' },
      { word: 'deteriorate', sentence: 'Air quality tends to _____ during the winter months in many cities.', opts: ['A. improve', 'B. stabilize', 'C. deteriorate', 'D. fluctuate'], ans: 'C', exp: 'deteriorate = 恶化、变差。句意：许多城市冬季空气质量往往会恶化。' },
      { word: 'accumulate', sentence: 'Over time, small savings can _____ into a significant amount.', opts: ['A. disappear', 'B. accumulate', 'C. decrease', 'D. remain'], ans: 'B', exp: 'accumulate = 积累、积聚。句意：随着时间推移，小额储蓄可以积累成可观的数额。' },
      { word: 'diverse', sentence: 'The city is home to a _____ population from many different cultural backgrounds.', opts: ['A. uniform', 'B. diverse', 'C. isolated', 'D. homogeneous'], ans: 'B', exp: 'diverse = 多样的。句意：这座城市居住着来自不同文化背景的多元化人口。' },
      { word: 'anticipate', sentence: 'Economists _____ that inflation will decrease in the second half of the year.', opts: ['A. deny', 'B. anticipate', 'C. ignore', 'D. regret'], ans: 'B', exp: 'anticipate = 预期、预料。句意：经济学家预计下半年通货膨胀将会下降。' },
      { word: 'diminish', sentence: 'The effectiveness of the drug tends to _____ over time.', opts: ['A. increase', 'B. maintain', 'C. diminish', 'D. fluctuate'], ans: 'C', exp: 'diminish = 减少、降低。句意：该药物的效果往往会随时间推移而降低。' }
    ]
  },
  {
    id: 'v-mock-3', title: '词汇专项·第3套', type: 'vocab',
    questions: [
      { word: 'prominent', sentence: 'She is a _____ figure in the field of renewable energy research.', opts: ['A. obscure', 'B. prominent', 'C. minor', 'D. controversial'], ans: 'B', exp: 'prominent = 著名的、杰出的。句意：她是可再生能源研究领域的杰出人物。' },
      { word: 'reluctant', sentence: 'Many employees are _____ to report workplace harassment for fear of retaliation.', opts: ['A. eager', 'B. reluctant', 'C. willing', 'D. determined'], ans: 'B', exp: 'reluctant = 不情愿的、勉强的。句意：许多员工因害怕报复而不愿举报职场骚扰。' },
      { word: 'adequate', sentence: 'The shelter provided _____ protection from the rain.', opts: ['A. inadequate', 'B. excessive', 'C. adequate', 'D. minimal'], ans: 'C', exp: 'adequate = 足够的、适当的。句意：这个避难所提供了足够的雨水防护。' },
      { word: 'perceive', sentence: 'How we _____ risk often depends on our personal experiences.', opts: ['A. ignore', 'B. perceive', 'C. create', 'D. eliminate'], ans: 'B', exp: 'perceive = 感知、认识。句意：我们如何感知风险往往取决于个人经历。' },
      { word: 'collaborate', sentence: 'Scientists from different countries _____ to find a cure for the disease.', opts: ['A. compete', 'B. collaborate', 'C. argue', 'D. separate'], ans: 'B', exp: 'collaborate = 合作。句意：来自不同国家的科学家合作寻找该疾病的治疗方法。' },
      { word: 'skeptical', sentence: 'Many experts are _____ about the long-term benefits of the new policy.', opts: ['A. optimistic', 'B. skeptical', 'C. enthusiastic', 'D. indifferent'], ans: 'B', exp: 'skeptical = 持怀疑态度的。句意：许多专家对新政策的长期效益持怀疑态度。' },
      { word: 'transition', sentence: 'The country is undergoing a difficult _____ from a planned to a market economy.', opts: ['A. regression', 'B. transition', 'C. stagnation', 'D. collapse'], ans: 'B', exp: 'transition = 转变、过渡。句意：该国正在经历从计划经济向市场经济的艰难转变。' },
      { word: 'constraint', sentence: 'Budget _____ forced the company to cancel several planned projects.', opts: ['A. freedom', 'B. constraint', 'C. support', 'D. expansion'], ans: 'B', exp: 'constraint = 限制、约束。句意：预算限制迫使公司取消了几个计划中的项目。' },
      { word: 'initiative', sentence: 'The government launched a new _____ to promote digital literacy among seniors.', opts: ['A. initiative', 'B. obstacle', 'C. restriction', 'D. penalty'], ans: 'A', exp: 'initiative = 倡议、举措。句意：政府启动了一项新举措，以提高老年人的数字素养。' },
      { word: 'resilient', sentence: 'The economy proved surprisingly _____ in the face of the global crisis.', opts: ['A. fragile', 'B. resilient', 'C. stagnant', 'D. volatile'], ans: 'B', exp: 'resilient = 有韧性的、能快速恢复的。句意：面对全球危机，经济表现出令人惊讶的韧性。' }
    ]
  },
  {
    id: 'v-mock-4', title: '词汇专项·第4套', type: 'vocab',
    questions: [
      { word: 'ambiguous', sentence: 'The contract contained several _____ clauses that led to disputes.', opts: ['A. clear', 'B. ambiguous', 'C. specific', 'D. binding'], ans: 'B', exp: 'ambiguous = 模糊的、有歧义的。句意：合同中包含几个模糊条款，导致了纠纷。' },
      { word: 'advocate', sentence: 'Environmental groups _____ for stricter regulations on industrial pollution.', opts: ['A. oppose', 'B. advocate', 'C. ignore', 'D. accept'], ans: 'B', exp: 'advocate = 倡导、主张。句意：环保团体倡导对工业污染实施更严格的法规。' },
      { word: 'coherent', sentence: 'A good essay should present a _____ argument from beginning to end.', opts: ['A. coherent', 'B. fragmented', 'C. contradictory', 'D. vague'], ans: 'A', exp: 'coherent = 连贯的、有条理的。句意：一篇好文章应该从头到尾呈现连贯的论点。' },
      { word: 'exploit', sentence: 'Some companies _____ cheap labor in developing countries to maximize profits.', opts: ['A. protect', 'B. exploit', 'C. support', 'D. train'], ans: 'B', exp: 'exploit = 剥削、利用。句意：一些公司剥削发展中国家的廉价劳动力以最大化利润。' },
      { word: 'fluctuate', sentence: 'Stock prices tend to _____ significantly during periods of economic uncertainty.', opts: ['A. stabilize', 'B. fluctuate', 'C. increase', 'D. decrease'], ans: 'B', exp: 'fluctuate = 波动、起伏。句意：在经济不确定时期，股价往往会大幅波动。' },
      { word: 'integrity', sentence: 'A leader\'s _____ is essential for building trust within an organization.', opts: ['A. arrogance', 'B. integrity', 'C. ignorance', 'D. indifference'], ans: 'B', exp: 'integrity = 诚信、正直。句意：领导者的诚信对于在组织内建立信任至关重要。' },
      { word: 'mitigate', sentence: 'Planting trees can help _____ the effects of urban heat islands.', opts: ['A. worsen', 'B. mitigate', 'C. ignore', 'D. accelerate'], ans: 'B', exp: 'mitigate = 减轻、缓和。句意：植树可以帮助减轻城市热岛效应。' },
      { word: 'notion', sentence: 'The _____ that success requires sacrifice is widely accepted.', opts: ['A. notion', 'B. denial', 'C. rejection', 'D. ignorance'], ans: 'A', exp: 'notion = 观念、概念。句意：成功需要牺牲这一观念被广泛接受。' },
      { word: 'obsolete', sentence: 'Many traditional skills have become _____ in the digital age.', opts: ['A. valuable', 'B. obsolete', 'C. essential', 'D. popular'], ans: 'B', exp: 'obsolete = 过时的、废弃的。句意：许多传统技能在数字时代已经过时。' },
      { word: 'profound', sentence: 'The invention of the internet has had a _____ impact on human communication.', opts: ['A. minimal', 'B. profound', 'C. temporary', 'D. negative'], ans: 'B', exp: 'profound = 深刻的、深远的。句意：互联网的发明对人类通信产生了深远影响。' }
    ]
  },
  {
    id: 'v-mock-5', title: '词汇专项·第5套', type: 'vocab',
    questions: [
      { word: 'rational', sentence: 'It is important to make _____ decisions based on evidence rather than emotion.', opts: ['A. irrational', 'B. rational', 'C. impulsive', 'D. emotional'], ans: 'B', exp: 'rational = 理性的、合理的。句意：基于证据而非情感做出理性决策很重要。' },
      { word: 'spontaneous', sentence: 'The crowd broke into _____ applause when the performer finished.', opts: ['A. planned', 'B. spontaneous', 'C. reluctant', 'D. forced'], ans: 'B', exp: 'spontaneous = 自发的、自然的。句意：表演者结束时，人群自发地鼓起掌来。' },
      { word: 'transparent', sentence: 'The government promised to be more _____ about its decision-making process.', opts: ['A. secretive', 'B. transparent', 'C. complex', 'D. rigid'], ans: 'B', exp: 'transparent = 透明的。句意：政府承诺在决策过程中更加透明。' },
      { word: 'unprecedented', sentence: 'The pandemic caused _____ disruption to global supply chains.', opts: ['A. minor', 'B. unprecedented', 'C. expected', 'D. manageable'], ans: 'B', exp: 'unprecedented = 前所未有的。句意：疫情对全球供应链造成了前所未有的破坏。' },
      { word: 'viable', sentence: 'Solar energy is becoming an increasingly _____ alternative to fossil fuels.', opts: ['A. impractical', 'B. viable', 'C. expensive', 'D. unreliable'], ans: 'B', exp: 'viable = 可行的、切实可行的。句意：太阳能正成为化石燃料越来越可行的替代品。' },
      { word: 'abstract', sentence: 'The professor\'s lecture was too _____ for most students to follow.', opts: ['A. concrete', 'B. abstract', 'C. simple', 'D. practical'], ans: 'B', exp: 'abstract = 抽象的。句意：教授的讲座太抽象，大多数学生难以理解。' },
      { word: 'bias', sentence: 'Researchers must be careful to avoid _____ in their data collection methods.', opts: ['A. accuracy', 'B. bias', 'C. precision', 'D. objectivity'], ans: 'B', exp: 'bias = 偏见、偏差。句意：研究人员必须注意避免数据收集方法中的偏差。' },
      { word: 'consensus', sentence: 'There is a growing _____ among scientists that climate change is human-caused.', opts: ['A. disagreement', 'B. consensus', 'C. debate', 'D. confusion'], ans: 'B', exp: 'consensus = 共识。句意：科学家们越来越形成共识，认为气候变化是人为造成的。' },
      { word: 'dedicate', sentence: 'She _____ her life to helping underprivileged children get an education.', opts: ['A. wasted', 'B. dedicated', 'C. ignored', 'D. limited'], ans: 'B', exp: 'dedicate = 致力于、奉献。句意：她将一生奉献给帮助贫困儿童获得教育。' },
      { word: 'empirical', sentence: 'The theory needs to be supported by _____ evidence from experiments.', opts: ['A. theoretical', 'B. empirical', 'C. anecdotal', 'D. speculative'], ans: 'B', exp: 'empirical = 实证的、经验的。句意：该理论需要来自实验的实证证据支持。' }
    ]
  },
  {
    id: 'v-mock-6', title: '词汇专项·第6套', type: 'vocab',
    questions: [
      { word: 'hierarchy', sentence: 'The company has a strict _____ with the CEO at the top.', opts: ['A. equality', 'B. hierarchy', 'C. democracy', 'D. chaos'], ans: 'B', exp: 'hierarchy = 等级制度。句意：该公司有严格的等级制度，CEO处于顶端。' },
      { word: 'incentive', sentence: 'Tax breaks serve as an _____ for companies to invest in green technology.', opts: ['A. obstacle', 'B. incentive', 'C. penalty', 'D. restriction'], ans: 'B', exp: 'incentive = 激励、动机。句意：税收减免作为激励措施，鼓励企业投资绿色技术。' },
      { word: 'justify', sentence: 'The high cost of the project is difficult to _____ given the limited benefits.', opts: ['A. justify', 'B. ignore', 'C. exaggerate', 'D. minimize'], ans: 'A', exp: 'justify = 证明...合理、为...辩护。句意：鉴于有限的收益，该项目的高成本难以证明其合理性。' },
      { word: 'legitimate', sentence: 'Workers have a _____ right to safe working conditions.', opts: ['A. illegitimate', 'B. legitimate', 'C. questionable', 'D. disputed'], ans: 'B', exp: 'legitimate = 合法的、正当的。句意：工人有权享有安全工作条件，这是正当权利。' },
      { word: 'manipulate', sentence: 'Advertisers often _____ consumers\' emotions to influence purchasing decisions.', opts: ['A. inform', 'B. manipulate', 'C. educate', 'D. respect'], ans: 'B', exp: 'manipulate = 操纵、控制。句意：广告商经常操纵消费者的情感来影响购买决策。' },
      { word: 'negligible', sentence: 'The side effects of the medication were _____ and did not affect daily life.', opts: ['A. severe', 'B. negligible', 'C. significant', 'D. dangerous'], ans: 'B', exp: 'negligible = 微不足道的、可忽略的。句意：该药物的副作用微不足道，不影响日常生活。' },
      { word: 'objective', sentence: 'A good journalist should remain _____ when reporting on controversial issues.', opts: ['A. biased', 'B. objective', 'C. emotional', 'D. subjective'], ans: 'B', exp: 'objective = 客观的。句意：好的记者在报道有争议的问题时应保持客观。' },
      { word: 'paradox', sentence: 'It is a _____ that the more connected we are digitally, the lonelier we feel.', opts: ['A. paradox', 'B. fact', 'C. solution', 'D. benefit'], ans: 'A', exp: 'paradox = 悖论、矛盾现象。句意：我们数字连接越多却感到越孤独，这是一个悖论。' },
      { word: 'quantify', sentence: 'It is difficult to _____ the emotional impact of losing a loved one.', opts: ['A. quantify', 'B. ignore', 'C. exaggerate', 'D. minimize'], ans: 'A', exp: 'quantify = 量化。句意：失去亲人的情感影响很难量化。' },
      { word: 'reinforce', sentence: 'Positive feedback can _____ good behavior in children.', opts: ['A. discourage', 'B. reinforce', 'C. punish', 'D. ignore'], ans: 'B', exp: 'reinforce = 强化、加强。句意：积极的反馈可以强化儿童的良好行为。' }
    ]
  },
  {
    id: 'v-mock-7', title: '词汇专项·第7套', type: 'vocab',
    questions: [
      { word: 'scrutiny', sentence: 'The company\'s financial records came under intense _____ after the scandal.', opts: ['A. scrutiny', 'B. protection', 'C. praise', 'D. neglect'], ans: 'A', exp: 'scrutiny = 仔细审查、监督。句意：丑闻发生后，该公司的财务记录受到严格审查。' },
      { word: 'tangible', sentence: 'The new policy has produced _____ results in reducing unemployment.', opts: ['A. intangible', 'B. tangible', 'C. invisible', 'D. theoretical'], ans: 'B', exp: 'tangible = 有形的、切实的。句意：新政策在减少失业方面产生了切实的成果。' },
      { word: 'underestimate', sentence: 'Many people _____ the difficulty of learning a new language as an adult.', opts: ['A. overestimate', 'B. underestimate', 'C. appreciate', 'D. acknowledge'], ans: 'B', exp: 'underestimate = 低估。句意：许多人低估了成年人学习新语言的难度。' },
      { word: 'validate', sentence: 'The experiment was designed to _____ the researcher\'s hypothesis.', opts: ['A. disprove', 'B. validate', 'C. ignore', 'D. complicate'], ans: 'B', exp: 'validate = 验证、证实。句意：该实验旨在验证研究者的假设。' },
      { word: 'widespread', sentence: 'The use of social media has become _____ among people of all ages.', opts: ['A. limited', 'B. widespread', 'C. restricted', 'D. declining'], ans: 'B', exp: 'widespread = 广泛的、普遍的。句意：社交媒体的使用在各年龄段人群中已变得普遍。' },
      { word: 'yield', sentence: 'The new farming techniques _____ a much higher crop output per acre.', opts: ['A. reduce', 'B. yield', 'C. waste', 'D. limit'], ans: 'B', exp: 'yield = 产生、出产。句意：新农业技术每英亩产出的农作物产量高得多。' },
      { word: 'abolish', sentence: 'Many countries have moved to _____ the death penalty in recent decades.', opts: ['A. introduce', 'B. abolish', 'C. strengthen', 'D. maintain'], ans: 'B', exp: 'abolish = 废除。句意：近几十年来，许多国家已着手废除死刑。' },
      { word: 'benign', sentence: 'The doctor confirmed that the tumor was _____ and not life-threatening.', opts: ['A. malignant', 'B. benign', 'C. dangerous', 'D. serious'], ans: 'B', exp: 'benign = 良性的、无害的。句意：医生确认肿瘤是良性的，不会危及生命。' },
      { word: 'chronic', sentence: 'She has suffered from _____ back pain for over ten years.', opts: ['A. acute', 'B. chronic', 'C. temporary', 'D. mild'], ans: 'B', exp: 'chronic = 慢性的、长期的。句意：她患有慢性背痛已超过十年。' },
      { word: 'dilemma', sentence: 'The manager faced a _____ between cutting costs and maintaining quality.', opts: ['A. solution', 'B. dilemma', 'C. opportunity', 'D. advantage'], ans: 'B', exp: 'dilemma = 两难困境。句意：经理面临削减成本与保持质量之间的两难困境。' }
    ]
  },
  {
    id: 'v-mock-8', title: '词汇专项·第8套', type: 'vocab',
    questions: [
      { word: 'eloquent', sentence: 'The lawyer gave an _____ speech that moved the entire courtroom.', opts: ['A. eloquent', 'B. confusing', 'C. boring', 'D. aggressive'], ans: 'A', exp: 'eloquent = 雄辩的、有说服力的。句意：律师发表了一篇感人的雄辩演讲，打动了整个法庭。' },
      { word: 'feasible', sentence: 'The engineer proposed a _____ solution to the infrastructure problem.', opts: ['A. impossible', 'B. feasible', 'C. impractical', 'D. expensive'], ans: 'B', exp: 'feasible = 可行的、可实现的。句意：工程师提出了一个解决基础设施问题的可行方案。' },
      { word: 'generate', sentence: 'Wind turbines can _____ clean electricity without producing greenhouse gases.', opts: ['A. consume', 'B. generate', 'C. waste', 'D. store'], ans: 'B', exp: 'generate = 产生、发电。句意：风力涡轮机可以在不产生温室气体的情况下发电。' },
      { word: 'hypothesis', sentence: 'The scientist developed a _____ to explain the unexpected experimental results.', opts: ['A. hypothesis', 'B. conclusion', 'C. fact', 'D. law'], ans: 'A', exp: 'hypothesis = 假设。句意：科学家提出了一个假设来解释意外的实验结果。' },
      { word: 'immense', sentence: 'The construction of the dam required an _____ amount of resources.', opts: ['A. minimal', 'B. immense', 'C. moderate', 'D. insufficient'], ans: 'B', exp: 'immense = 巨大的、极大的。句意：大坝的建设需要大量资源。' },
      { word: 'jeopardize', sentence: 'Reckless driving can _____ not only your life but also others\' safety.', opts: ['A. protect', 'B. jeopardize', 'C. improve', 'D. maintain'], ans: 'B', exp: 'jeopardize = 危及、损害。句意：鲁莽驾驶不仅会危及你的生命，也会危及他人安全。' },
      { word: 'keen', sentence: 'She has always been _____ on learning new languages and cultures.', opts: ['A. reluctant', 'B. keen', 'C. indifferent', 'D. opposed'], ans: 'B', exp: 'keen = 热衷的、渴望的。句意：她一直热衷于学习新语言和文化。' },
      { word: 'linger', sentence: 'The smell of fresh coffee tends to _____ in the kitchen for hours.', opts: ['A. disappear', 'B. linger', 'C. fade', 'D. vanish'], ans: 'B', exp: 'linger = 持续、徘徊。句意：新鲜咖啡的香味往往会在厨房里持续数小时。' },
      { word: 'mandatory', sentence: 'Wearing a seatbelt is _____ by law in most countries.', opts: ['A. optional', 'B. mandatory', 'C. voluntary', 'D. suggested'], ans: 'B', exp: 'mandatory = 强制性的、法定的。句意：在大多数国家，系安全带是法律强制要求的。' },
      { word: 'neutral', sentence: 'Switzerland has maintained a _____ position in international conflicts for centuries.', opts: ['A. aggressive', 'B. neutral', 'C. biased', 'D. active'], ans: 'B', exp: 'neutral = 中立的。句意：瑞士在国际冲突中保持中立立场已有数百年。' }
    ]
  },
  {
    id: 'v-mock-9', title: '词汇专项·第9套', type: 'vocab',
    questions: [
      { word: 'optimistic', sentence: 'Despite the challenges, the team remained _____ about achieving their goals.', opts: ['A. pessimistic', 'B. optimistic', 'C. uncertain', 'D. indifferent'], ans: 'B', exp: 'optimistic = 乐观的。句意：尽管面临挑战，团队对实现目标仍保持乐观。' },
      { word: 'persistent', sentence: 'Her _____ efforts eventually paid off when she was accepted to her dream university.', opts: ['A. occasional', 'B. persistent', 'C. halfhearted', 'D. brief'], ans: 'B', exp: 'persistent = 坚持不懈的、持续的。句意：她坚持不懈的努力最终得到了回报，被梦想中的大学录取。' },
      { word: 'quest', sentence: 'The scientist\'s lifelong _____ for a cure for cancer finally succeeded.', opts: ['A. quest', 'B. retreat', 'C. failure', 'D. indifference'], ans: 'A', exp: 'quest = 追求、探索。句意：这位科学家毕生追求癌症治疗方法，终于成功了。' },
      { word: 'rigid', sentence: 'The company\'s _____ rules made it difficult to adapt to changing market conditions.', opts: ['A. flexible', 'B. rigid', 'C. reasonable', 'D. modern'], ans: 'B', exp: 'rigid = 僵化的、严格的。句意：公司僵化的规定使其难以适应不断变化的市场条件。' },
      { word: 'stimulate', sentence: 'The government introduced tax cuts to _____ economic growth.', opts: ['A. hinder', 'B. stimulate', 'C. reduce', 'D. ignore'], ans: 'B', exp: 'stimulate = 刺激、促进。句意：政府推出减税措施以刺激经济增长。' },
      { word: 'tedious', sentence: 'Data entry is often considered a _____ and repetitive task.', opts: ['A. exciting', 'B. tedious', 'C. creative', 'D. rewarding'], ans: 'B', exp: 'tedious = 乏味的、单调的。句意：数据录入通常被认为是一项乏味且重复的工作。' },
      { word: 'unanimous', sentence: 'The committee reached a _____ decision to approve the new budget.', opts: ['A. divided', 'B. unanimous', 'C. controversial', 'D. delayed'], ans: 'B', exp: 'unanimous = 一致的、全体同意的。句意：委员会一致决定批准新预算。' },
      { word: 'versatile', sentence: 'A _____ employee who can handle multiple tasks is highly valued.', opts: ['A. specialized', 'B. versatile', 'C. limited', 'D. inflexible'], ans: 'B', exp: 'versatile = 多才多艺的、多用途的。句意：能处理多项任务的多才多艺员工备受重视。' },
      { word: 'withstand', sentence: 'The new building was designed to _____ earthquakes of magnitude 8 or higher.', opts: ['A. collapse under', 'B. withstand', 'C. avoid', 'D. ignore'], ans: 'B', exp: 'withstand = 承受、抵御。句意：新建筑设计为能够承受8级或更高震级的地震。' },
      { word: 'zeal', sentence: 'Her _____ for environmental protection inspired many young people to take action.', opts: ['A. indifference', 'B. zeal', 'C. reluctance', 'D. opposition'], ans: 'B', exp: 'zeal = 热情、热忱。句意：她对环境保护的热情激励了许多年轻人采取行动。' }
    ]
  },
  {
    id: 'v-mock-10', title: '词汇专项·第10套', type: 'vocab',
    questions: [
      { word: 'accelerate', sentence: 'Digital technology has _____ the pace of change in almost every industry.', opts: ['A. slowed', 'B. accelerate', 'C. accelerated', 'D. stopped'], ans: 'C', exp: 'accelerate = 加速。句意：数字技术加速了几乎每个行业的变革步伐。' },
      { word: 'benchmark', sentence: 'The company uses industry standards as a _____ for measuring performance.', opts: ['A. benchmark', 'B. obstacle', 'C. distraction', 'D. limitation'], ans: 'A', exp: 'benchmark = 基准、标杆。句意：该公司以行业标准作为衡量绩效的基准。' },
      { word: 'concede', sentence: 'After hours of debate, the politician finally _____ that the policy had failed.', opts: ['A. denied', 'B. conceded', 'C. ignored', 'D. celebrated'], ans: 'B', exp: 'concede = 承认、让步。句意：经过数小时辩论，这位政客最终承认该政策已经失败。' },
      { word: 'deplete', sentence: 'Overfishing has severely _____ fish populations in many ocean regions.', opts: ['A. increased', 'B. depleted', 'C. maintained', 'D. protected'], ans: 'B', exp: 'deplete = 耗尽、大量减少。句意：过度捕捞已严重耗尽许多海洋地区的鱼类种群。' },
      { word: 'elaborate', sentence: 'Could you _____ on your proposal? I need more details.', opts: ['A. simplify', 'B. elaborate', 'C. abandon', 'D. repeat'], ans: 'B', exp: 'elaborate = 详细说明、阐述。句意：你能详细说明你的提案吗？我需要更多细节。' },
      { word: 'formidable', sentence: 'The team faced a _____ challenge in completing the project on time.', opts: ['A. simple', 'B. formidable', 'C. minor', 'D. manageable'], ans: 'B', exp: 'formidable = 艰巨的、令人敬畏的。句意：团队面临按时完成项目的艰巨挑战。' },
      { word: 'grasp', sentence: 'It took her several weeks to fully _____ the complexity of the new software.', opts: ['A. ignore', 'B. grasp', 'C. reject', 'D. forget'], ans: 'B', exp: 'grasp = 理解、掌握。句意：她花了几周时间才完全理解新软件的复杂性。' },
      { word: 'hinder', sentence: 'Poor infrastructure can _____ economic development in rural areas.', opts: ['A. promote', 'B. hinder', 'C. accelerate', 'D. support'], ans: 'B', exp: 'hinder = 阻碍、妨碍。句意：基础设施落后会阻碍农村地区的经济发展。' },
      { word: 'illuminate', sentence: 'The documentary helped to _____ the complex history of the region.', opts: ['A. obscure', 'B. illuminate', 'C. complicate', 'D. ignore'], ans: 'B', exp: 'illuminate = 阐明、揭示。句意：这部纪录片有助于阐明该地区复杂的历史。' },
      { word: 'jurisdiction', sentence: 'The case fell outside the court\'s _____ and had to be transferred.', opts: ['A. interest', 'B. jurisdiction', 'C. opinion', 'D. preference'], ans: 'B', exp: 'jurisdiction = 管辖权、司法权。句意：该案件超出了法院的管辖范围，必须移交。' }
    ]
  }
],

comprehensive: [
  {
    id: 'comp-mock-1', title: '综合专项·第1套', type: 'comprehensive',
    sections: {
      writing: { title: '写作（30分钟）', prompt: '图画作文：图画中一个人站在十字路口，一条路通向城市，另一条路通向乡村。请描述图画，阐释寓意，谈谈城乡发展与个人选择的关系。（150-200词）', tips: '结构：描述图画→阐释寓意（城乡发展各有价值）→个人观点（根据自身条件做出理性选择）' },
      reading: {
        passage: `The concept of "work-life balance" has evolved significantly in recent decades. Previously, success was measured primarily by professional achievement. Today, many workers prioritize personal well-being alongside career goals. Research shows that employees with better work-life balance are more productive, creative, and loyal to their employers. Companies that offer flexible working arrangements report lower turnover rates and higher employee satisfaction. However, achieving balance remains challenging in competitive industries where long hours are the norm.`,
        questions: [
          { q: 'Work-life balance today compared to the past:', opts: ['A. Less important', 'B. More valued alongside career', 'C. Only for senior employees', 'D. Replaced by remote work'], ans: 'B', exp: '"many workers prioritize personal well-being alongside career goals."' },
          { q: 'Companies with flexible arrangements report:', opts: ['A. Lower productivity', 'B. Higher costs', 'C. Lower turnover and higher satisfaction', 'D. More conflicts'], ans: 'C', exp: '"lower turnover rates and higher employee satisfaction."' },
          { q: 'Balance remains challenging because:', opts: ['A. Workers lack motivation', 'B. Long hours are the norm in competitive industries', 'C. Technology makes work harder', 'D. Managers oppose flexibility'], ans: 'B', exp: '"competitive industries where long hours are the norm."' }
        ]
      },
      translation: { original: '中国的乡村振兴战略旨在缩小城乡差距，促进农村地区的全面发展。通过加大农业投入、改善农村基础设施、发展乡村旅游等措施，越来越多的农村地区实现了经济腾飞。', reference: 'China\'s rural revitalization strategy aims to narrow the urban-rural gap and promote the comprehensive development of rural areas. Through measures such as increasing agricultural investment, improving rural infrastructure, and developing rural tourism, more and more rural areas have achieved economic takeoff.', keypoints: ['乡村振兴 → rural revitalization', '城乡差距 → urban-rural gap', '基础设施 → infrastructure', '经济腾飞 → economic takeoff'] },
      vocab: [
        { word: 'equilibrium', sentence: 'The economy needs to find a new _____ after the disruption.', opts: ['A. chaos', 'B. equilibrium', 'C. decline', 'D. crisis'], ans: 'B', exp: 'equilibrium = 平衡、均衡。' },
        { word: 'pragmatic', sentence: 'A _____ approach focuses on practical solutions rather than ideals.', opts: ['A. idealistic', 'B. pragmatic', 'C. theoretical', 'D. abstract'], ans: 'B', exp: 'pragmatic = 务实的、实用的。' }
      ]
    }
  },
  {
    id: 'comp-mock-2', title: '综合专项·第2套', type: 'comprehensive',
    sections: {
      writing: { title: '写作（30分钟）', prompt: '议论文：有人认为大学生应该专注于专业学习，也有人认为应该广泛涉猎各类知识。谈谈你的观点。（150-200词）', tips: '结构：引出争议→辩证分析（专业深度 vs 知识广度）→个人立场（两者结合，以专业为主）' },
      reading: {
        passage: `Artificial intelligence is transforming healthcare in remarkable ways. Machine learning algorithms can now detect certain cancers from medical images with accuracy comparable to experienced radiologists. AI-powered chatbots provide mental health support to millions who lack access to therapists. Predictive analytics help hospitals allocate resources more efficiently. However, concerns remain about data privacy, algorithmic bias, and the potential erosion of the doctor-patient relationship. Experts emphasize that AI should augment, not replace, human medical judgment.`,
        questions: [
          { q: 'AI in cancer detection:', opts: ['A. Outperforms all doctors', 'B. Matches experienced radiologists in accuracy', 'C. Is still experimental', 'D. Only works for rare cancers'], ans: 'B', exp: '"accuracy comparable to experienced radiologists."' },
          { q: 'AI chatbots in mental health:', opts: ['A. Replace therapists entirely', 'B. Support those lacking therapist access', 'C. Are ineffective', 'D. Only for severe cases'], ans: 'B', exp: '"provide mental health support to millions who lack access to therapists."' },
          { q: 'Experts say AI should:', opts: ['A. Replace doctors', 'B. Augment human medical judgment', 'C. Be banned in healthcare', 'D. Only handle administrative tasks'], ans: 'B', exp: '"AI should augment, not replace, human medical judgment."' }
        ]
      },
      translation: { original: '人工智能正在深刻改变医疗行业。从辅助诊断到药物研发，AI技术的应用大大提高了医疗效率和准确性。然而，如何确保AI在医疗领域的安全性和伦理性，仍是亟待解决的重要课题。', reference: 'Artificial intelligence is profoundly transforming the healthcare industry. From assisted diagnosis to drug development, the application of AI technology has greatly improved medical efficiency and accuracy. However, how to ensure the safety and ethics of AI in the medical field remains an important issue that urgently needs to be addressed.', keypoints: ['辅助诊断 → assisted diagnosis', '药物研发 → drug development', '医疗效率 → medical efficiency', '伦理性 → ethics'] },
      vocab: [
        { word: 'augment', sentence: 'Technology can _____ human capabilities rather than replace them.', opts: ['A. reduce', 'B. augment', 'C. eliminate', 'D. ignore'], ans: 'B', exp: 'augment = 增强、扩大。' },
        { word: 'algorithm', sentence: 'The search engine uses a complex _____ to rank web pages.', opts: ['A. algorithm', 'B. opinion', 'C. guess', 'D. tradition'], ans: 'A', exp: 'algorithm = 算法。' }
      ]
    }
  },
  {
    id: 'comp-mock-3', title: '综合专项·第3套', type: 'comprehensive',
    sections: {
      writing: { title: '写作（30分钟）', prompt: '图表作文：调查显示，近五年来大学生参与社会实践活动的比例从45%上升到78%。描述变化趋势，分析原因，谈谈社会实践的意义。（150-200词）', tips: '结构：描述数据变化→分析原因（就业压力、高校引导、个人成长需求）→意义（理论联系实际、提升综合素质）' },
      reading: {
        passage: `The sharing economy, exemplified by platforms like Airbnb and Uber, has disrupted traditional industries by enabling peer-to-peer transactions. Proponents argue it increases efficiency by utilizing underused assets and provides flexible income opportunities. Critics point to concerns about worker protections, tax avoidance, and the displacement of traditional businesses. Regulatory responses have varied widely: some cities have embraced sharing platforms while others have imposed strict restrictions or outright bans.`,
        questions: [
          { q: 'The sharing economy works by:', opts: ['A. Government-owned platforms', 'B. Peer-to-peer transactions using underused assets', 'C. Traditional retail methods', 'D. Corporate monopolies'], ans: 'B', exp: '"enabling peer-to-peer transactions" and "utilizing underused assets."' },
          { q: 'Critics\' main concerns include:', opts: ['A. Too much innovation', 'B. Worker protections and tax avoidance', 'C. High prices for consumers', 'D. Lack of technology'], ans: 'B', exp: '"worker protections, tax avoidance, and displacement of traditional businesses."' },
          { q: 'Cities\' regulatory responses:', opts: ['A. All cities banned sharing platforms', 'B. All cities embraced them', 'C. Responses have varied widely', 'D. No regulations exist'], ans: 'C', exp: '"Regulatory responses have varied widely."' }
        ]
      },
      translation: { original: '共享经济的兴起改变了传统的商业模式，使资源得到更充分的利用。然而，共享经济平台上的劳动者权益保护问题引发了广泛关注。如何在促进创新与保障劳动者权益之间寻求平衡，是各国政府面临的共同挑战。', reference: 'The rise of the sharing economy has changed traditional business models, enabling more efficient utilization of resources. However, the protection of workers\' rights on sharing economy platforms has attracted widespread attention. How to strike a balance between promoting innovation and safeguarding workers\' rights is a common challenge faced by governments around the world.', keypoints: ['共享经济 → sharing economy', '商业模式 → business models', '劳动者权益 → workers\' rights', '寻求平衡 → strike a balance'] },
      vocab: [
        { word: 'disrupt', sentence: 'New technologies often _____ established industries.', opts: ['A. support', 'B. disrupt', 'C. maintain', 'D. ignore'], ans: 'B', exp: 'disrupt = 颠覆、扰乱。' },
        { word: 'peer', sentence: 'The platform enables _____ -to-peer lending without banks.', opts: ['A. peer', 'B. bank', 'C. government', 'D. corporate'], ans: 'A', exp: 'peer = 同等的人、同伴。' }
      ]
    }
  },
  {
    id: 'comp-mock-4', title: '综合专项·第4套', type: 'comprehensive',
    sections: {
      writing: { title: '写作（30分钟）', prompt: '图画作文：图画中一棵大树被砍伐，旁边是一座工厂。请描述图画，阐释寓意，谈谈经济发展与环境保护的关系。（150-200词）', tips: '结构：描述图画→阐释寓意（过度开发破坏环境）→观点（绿色发展，两者并非对立）' },
      reading: {
        passage: `Microplastics — tiny plastic particles less than 5mm in size — have been found in virtually every environment on Earth, from deep ocean trenches to mountain peaks, and even in human blood and breast milk. They enter ecosystems through the breakdown of larger plastic items, synthetic clothing fibers, and industrial processes. Research suggests microplastics can disrupt hormonal systems in marine animals and may pose health risks to humans, though the full extent of harm remains under investigation.`,
        questions: [
          { q: 'Microplastics are defined as:', opts: ['A. Plastic larger than 5mm', 'B. Particles less than 5mm', 'C. Only ocean plastics', 'D. Industrial chemicals'], ans: 'B', exp: '"tiny plastic particles less than 5mm in size."' },
          { q: 'Sources of microplastics include:', opts: ['A. Only industrial waste', 'B. Breakdown of larger plastics, synthetic fibers, industrial processes', 'C. Only ocean pollution', 'D. Natural decomposition'], ans: 'B', exp: '"breakdown of larger plastic items, synthetic clothing fibers, and industrial processes."' },
          { q: 'The full extent of harm to humans:', opts: ['A. Is fully understood', 'B. Is still under investigation', 'C. Has been proven severe', 'D. Is considered negligible'], ans: 'B', exp: '"the full extent of harm remains under investigation."' }
        ]
      },
      translation: { original: '塑料污染已成为全球性环境问题。每年有数百万吨塑料垃圾进入海洋，对海洋生态系统造成严重破坏。减少塑料使用、推广可降解材料、加强废物回收利用，是解决这一问题的有效途径。', reference: 'Plastic pollution has become a global environmental problem. Every year, millions of tons of plastic waste enter the ocean, causing serious damage to marine ecosystems. Reducing plastic use, promoting biodegradable materials, and strengthening waste recycling are effective ways to address this problem.', keypoints: ['塑料污染 → plastic pollution', '海洋生态系统 → marine ecosystems', '可降解材料 → biodegradable materials', '废物回收利用 → waste recycling'] },
      vocab: [
        { word: 'contaminate', sentence: 'Industrial waste can _____ nearby water sources.', opts: ['A. purify', 'B. contaminate', 'C. protect', 'D. improve'], ans: 'B', exp: 'contaminate = 污染、污染。' },
        { word: 'biodegradable', sentence: 'We should use _____ packaging to reduce environmental impact.', opts: ['A. plastic', 'B. biodegradable', 'C. synthetic', 'D. permanent'], ans: 'B', exp: 'biodegradable = 可生物降解的。' }
      ]
    }
  },
  {
    id: 'comp-mock-5', title: '综合专项·第5套', type: 'comprehensive',
    sections: {
      writing: { title: '写作（30分钟）', prompt: '议论文：随着人工智能的发展，有人担心机器将取代人类的创造性工作。谈谈你对这一问题的看法。（150-200词）', tips: '结构：引出话题→分析AI的局限性（缺乏情感、文化理解、真实体验）→结论（AI是工具，人类创造力不可替代）' },
      reading: {
        passage: `The global aging population presents both challenges and opportunities. By 2050, the number of people over 65 will double, straining pension systems and healthcare infrastructure. However, older adults represent a significant consumer market and a reservoir of experience and wisdom. Some economists argue that aging societies can maintain productivity through automation, immigration, and encouraging older workers to remain in the workforce longer. Successful aging policies require balancing fiscal sustainability with quality of life for seniors.`,
        questions: [
          { q: 'By 2050, the over-65 population will:', opts: ['A. Decrease', 'B. Double', 'C. Triple', 'D. Stay the same'], ans: 'B', exp: '"the number of people over 65 will double."' },
          { q: 'Economists\' solutions for aging societies include:', opts: ['A. Reducing immigration', 'B. Automation, immigration, keeping older workers employed', 'C. Lowering retirement age', 'D. Reducing healthcare spending'], ans: 'B', exp: '"automation, immigration, and encouraging older workers to remain in the workforce."' },
          { q: 'Successful aging policies must balance:', opts: ['A. Youth and elderly interests', 'B. Fiscal sustainability and seniors\' quality of life', 'C. Urban and rural needs', 'D. Public and private sectors'], ans: 'B', exp: '"balancing fiscal sustainability with quality of life for seniors."' }
        ]
      },
      translation: { original: '人口老龄化是许多国家面临的共同挑战。老龄化社会对养老金制度、医疗体系和劳动力市场都带来了巨大压力。积极应对人口老龄化，需要政府、社会和个人的共同努力，建立完善的养老保障体系。', reference: 'Population aging is a common challenge faced by many countries. An aging society puts enormous pressure on pension systems, healthcare systems, and labor markets. Actively addressing population aging requires the joint efforts of the government, society, and individuals to establish a sound old-age security system.', keypoints: ['人口老龄化 → population aging', '养老金制度 → pension systems', '劳动力市场 → labor markets', '养老保障体系 → old-age security system'] },
      vocab: [
        { word: 'demographic', sentence: 'The _____ shift toward an older population affects economic planning.', opts: ['A. demographic', 'B. geographic', 'C. economic', 'D. political'], ans: 'A', exp: 'demographic = 人口统计的。' },
        { word: 'pension', sentence: 'Many workers rely on their _____ for income after retirement.', opts: ['A. salary', 'B. pension', 'C. bonus', 'D. loan'], ans: 'B', exp: 'pension = 养老金、退休金。' }
      ]
    }
  },
  {
    id: 'comp-mock-6', title: '综合专项·第6套', type: 'comprehensive',
    sections: {
      writing: { title: '写作（30分钟）', prompt: '图画作文：图画中一个学生面对堆积如山的书本，旁边是一台电脑。请描述图画，阐释寓意，谈谈传统学习方式与数字化学习的关系。（150-200词）', tips: '结构：描述图画→阐释寓意（学习方式的变革）→观点（两者互补，关键在于学习者的主动性）' },
      reading: {
        passage: `Food security — ensuring all people have access to sufficient, safe, and nutritious food — remains one of humanity's greatest challenges. Climate change threatens agricultural productivity through extreme weather events, shifting rainfall patterns, and rising temperatures. Meanwhile, global food waste is staggering: approximately one-third of all food produced is lost or wasted. Addressing food security requires both technological innovation in agriculture and systemic changes in food distribution and consumption patterns.`,
        questions: [
          { q: 'Food security means:', opts: ['A. Only having enough calories', 'B. Access to sufficient, safe, and nutritious food', 'C. Food self-sufficiency for nations', 'D. Eliminating all hunger immediately'], ans: 'B', exp: '"ensuring all people have access to sufficient, safe, and nutritious food."' },
          { q: 'How much food is wasted globally?', opts: ['A. One-tenth', 'B. One-quarter', 'C. One-third', 'D. One-half'], ans: 'C', exp: '"approximately one-third of all food produced is lost or wasted."' },
          { q: 'Solutions to food security require:', opts: ['A. Only technology', 'B. Only policy changes', 'C. Both technological innovation and systemic changes', 'D. Reducing food production'], ans: 'C', exp: '"both technological innovation in agriculture and systemic changes."' }
        ]
      },
      translation: { original: '粮食安全是关系人类生存与发展的根本问题。气候变化、人口增长和资源短缺给全球粮食生产带来了严峻挑战。发展现代农业技术、减少粮食浪费、建立公平的粮食分配体系，是保障全球粮食安全的关键举措。', reference: 'Food security is a fundamental issue related to human survival and development. Climate change, population growth, and resource scarcity pose serious challenges to global food production. Developing modern agricultural technology, reducing food waste, and establishing a fair food distribution system are key measures to ensure global food security.', keypoints: ['粮食安全 → food security', '气候变化 → climate change', '粮食浪费 → food waste', '分配体系 → distribution system'] },
      vocab: [
        { word: 'scarcity', sentence: 'Water _____ is becoming a serious problem in many regions.', opts: ['A. abundance', 'B. scarcity', 'C. quality', 'D. pollution'], ans: 'B', exp: 'scarcity = 稀缺、短缺。' },
        { word: 'nutritious', sentence: 'A _____ diet is essential for maintaining good health.', opts: ['A. nutritious', 'B. expensive', 'C. exotic', 'D. processed'], ans: 'A', exp: 'nutritious = 有营养的。' }
      ]
    }
  },
  {
    id: 'comp-mock-7', title: '综合专项·第7套', type: 'comprehensive',
    sections: {
      writing: { title: '写作（30分钟）', prompt: '议论文：网络时代，信息获取变得极为便捷，但虚假信息也大量传播。谈谈如何在信息时代保持理性判断。（150-200词）', tips: '结构：引出问题（信息爆炸与虚假信息）→分析（媒体素养的重要性）→建议（核实来源、批判性思考、多元视角）' },
      reading: {
        passage: `Mental health awareness has grown significantly in recent years, yet stigma remains a major barrier to seeking help. Studies show that nearly half of people with mental health conditions never receive treatment. Cultural factors play a significant role: in many societies, admitting mental health struggles is seen as weakness. Workplace mental health programs have shown promise, with companies reporting reduced absenteeism and improved productivity when employees have access to counseling services. Early intervention is crucial, as untreated conditions tend to worsen over time.`,
        questions: [
          { q: 'The main barrier to mental health treatment is:', opts: ['A. Cost', 'B. Stigma', 'C. Lack of doctors', 'D. Ineffective treatments'], ans: 'B', exp: '"stigma remains a major barrier to seeking help."' },
          { q: 'What percentage never receive treatment?', opts: ['A. One-quarter', 'B. One-third', 'C. Nearly half', 'D. Two-thirds'], ans: 'C', exp: '"nearly half of people with mental health conditions never receive treatment."' },
          { q: 'Workplace mental health programs result in:', opts: ['A. Higher costs', 'B. Reduced absenteeism and improved productivity', 'C. More sick days', 'D. Employee dissatisfaction'], ans: 'B', exp: '"reduced absenteeism and improved productivity."' }
        ]
      },
      translation: { original: '心理健康是整体健康的重要组成部分。长期忽视心理健康问题会对个人的工作、生活和人际关系产生负面影响。社会应当消除对心理疾病的偏见，鼓励人们主动寻求专业帮助，建立更加完善的心理健康服务体系。', reference: 'Mental health is an important component of overall health. Long-term neglect of mental health issues can have negative impacts on an individual\'s work, life, and interpersonal relationships. Society should eliminate prejudice against mental illness, encourage people to proactively seek professional help, and establish a more comprehensive mental health service system.', keypoints: ['心理健康 → mental health', '偏见 → prejudice', '专业帮助 → professional help', '心理健康服务体系 → mental health service system'] },
      vocab: [
        { word: 'stigma', sentence: 'The _____ around mental illness prevents many from seeking help.', opts: ['A. stigma', 'B. support', 'C. awareness', 'D. treatment'], ans: 'A', exp: 'stigma = 污名、耻辱。' },
        { word: 'intervention', sentence: 'Early _____ can prevent minor problems from becoming serious.', opts: ['A. intervention', 'B. ignorance', 'C. delay', 'D. avoidance'], ans: 'A', exp: 'intervention = 干预、介入。' }
      ]
    }
  },
  {
    id: 'comp-mock-8', title: '综合专项·第8套', type: 'comprehensive',
    sections: {
      writing: { title: '写作（30分钟）', prompt: '图画作文：图画中一个年轻人手持手机，背后是美丽的自然风景，但他的眼睛只盯着屏幕。请描述图画，阐释寓意，谈谈数字时代如何保持与自然的连接。（150-200词）', tips: '结构：描述图画→阐释寓意（沉迷数字世界，忽视真实生活）→建议（有意识地放下手机，亲近自然）' },
      reading: {
        passage: `The gig economy — characterized by short-term contracts and freelance work rather than permanent employment — has grown dramatically with digital platforms. Proponents highlight flexibility and autonomy for workers. Critics argue that gig workers lack job security, benefits like health insurance and retirement plans, and legal protections afforded to traditional employees. Some countries have begun reclassifying gig workers as employees, while others maintain that flexibility is the primary appeal and should be preserved.`,
        questions: [
          { q: 'The gig economy is characterized by:', opts: ['A. Permanent employment', 'B. Short-term contracts and freelance work', 'C. Government jobs', 'D. Manufacturing work'], ans: 'B', exp: '"short-term contracts and freelance work rather than permanent employment."' },
          { q: 'Critics say gig workers lack:', opts: ['A. Skills', 'B. Job security, benefits, and legal protections', 'C. Work opportunities', 'D. Digital access'], ans: 'B', exp: '"lack job security, benefits...and legal protections."' },
          { q: 'Some countries\' response to gig workers:', opts: ['A. Banned gig platforms', 'B. Reclassified them as employees', 'C. Increased their pay', 'D. Provided free training'], ans: 'B', exp: '"Some countries have begun reclassifying gig workers as employees."' }
        ]
      },
      translation: { original: '灵活就业已成为现代劳动力市场的重要组成部分。越来越多的人选择自由职业或兼职工作，以获得更大的工作自主权和时间灵活性。然而，灵活就业者在社会保障、职业发展等方面面临的挑战也不容忽视。', reference: 'Flexible employment has become an important component of the modern labor market. More and more people are choosing freelance or part-time work to gain greater work autonomy and time flexibility. However, the challenges faced by flexible workers in terms of social security and career development should not be overlooked.', keypoints: ['灵活就业 → flexible employment', '自由职业 → freelance', '工作自主权 → work autonomy', '社会保障 → social security'] },
      vocab: [
        { word: 'autonomy', sentence: 'Employees value _____ in deciding how to complete their tasks.', opts: ['A. control', 'B. autonomy', 'C. supervision', 'D. restriction'], ans: 'B', exp: 'autonomy = 自主权、自治。' },
        { word: 'precarious', sentence: 'Gig workers often face _____ financial situations without stable income.', opts: ['A. stable', 'B. precarious', 'C. comfortable', 'D. secure'], ans: 'B', exp: 'precarious = 不稳定的、岌岌可危的。' }
      ]
    }
  },
  {
    id: 'comp-mock-9', title: '综合专项·第9套', type: 'comprehensive',
    sections: {
      writing: { title: '写作（30分钟）', prompt: '议论文：有人认为全球化促进了文化多样性，也有人认为全球化导致了文化同质化。谈谈你的观点。（150-200词）', tips: '结构：引出争议→辩证分析（全球化带来文化交流 vs 强势文化侵蚀弱势文化）→个人立场（保护文化多样性的同时拥抱文化交流）' },
      reading: {
        passage: `Urbanization — the movement of people from rural to urban areas — is one of the defining trends of the 21st century. Currently, over half the world's population lives in cities, and this proportion is expected to reach two-thirds by 2050. Cities drive economic growth and innovation but also concentrate poverty, pollution, and inequality. Smart city technologies — using data and digital infrastructure to improve urban services — offer promising solutions to urban challenges, from traffic management to energy efficiency.`,
        questions: [
          { q: 'Current urban population proportion:', opts: ['A. One-third', 'B. Over half', 'C. Two-thirds', 'D. Three-quarters'], ans: 'B', exp: '"over half the world\'s population lives in cities."' },
          { q: 'Cities concentrate:', opts: ['A. Only wealth', 'B. Only innovation', 'C. Poverty, pollution, and inequality alongside growth', 'D. Only educated workers'], ans: 'C', exp: '"concentrate poverty, pollution, and inequality."' },
          { q: 'Smart city technologies address:', opts: ['A. Only traffic', 'B. Only energy', 'C. Urban challenges from traffic to energy efficiency', 'D. Only housing'], ans: 'C', exp: '"from traffic management to energy efficiency."' }
        ]
      },
      translation: { original: '城镇化是推动经济社会发展的重要力量。随着城镇化进程的加快，城市规模不断扩大，城市功能日趋完善。然而，城镇化也带来了交通拥堵、环境污染、住房紧张等一系列城市问题，需要通过科学规划和智慧城市建设加以解决。', reference: 'Urbanization is an important force driving economic and social development. As the urbanization process accelerates, cities continue to expand in scale and their functions become increasingly complete. However, urbanization has also brought a series of urban problems such as traffic congestion, environmental pollution, and housing shortages, which need to be addressed through scientific planning and smart city construction.', keypoints: ['城镇化 → urbanization', '交通拥堵 → traffic congestion', '环境污染 → environmental pollution', '智慧城市 → smart city'] },
      vocab: [
        { word: 'infrastructure', sentence: 'Good _____ is essential for economic development.', opts: ['A. infrastructure', 'B. decoration', 'C. entertainment', 'D. tradition'], ans: 'A', exp: 'infrastructure = 基础设施。' },
        { word: 'congestion', sentence: 'Traffic _____ in major cities costs billions in lost productivity.', opts: ['A. flow', 'B. congestion', 'C. safety', 'D. speed'], ans: 'B', exp: 'congestion = 拥堵、堵塞。' }
      ]
    }
  },
  {
    id: 'comp-mock-10', title: '综合专项·第10套', type: 'comprehensive',
    sections: {
      writing: { title: '写作（30分钟）', prompt: '图画作文：图画中一个人站在书山前，书山上有一条通往顶峰的路。请描述图画，阐释寓意，谈谈终身学习的重要性。（150-200词）', tips: '结构：描述图画→阐释寓意（知识是通往成功的阶梯）→观点（终身学习是适应快速变化时代的必要选择）' },
      reading: {
        passage: `The concept of emotional intelligence (EQ) — the ability to recognize, understand, and manage one's own emotions and those of others — has gained prominence in psychology and business. Research suggests that EQ may be a better predictor of professional success than IQ in many fields. Leaders with high EQ tend to build stronger teams, navigate conflicts more effectively, and inspire greater loyalty. Unlike IQ, which remains relatively stable, EQ can be developed through practice, self-reflection, and feedback.`,
        questions: [
          { q: 'EQ refers to:', opts: ['A. Intelligence quotient', 'B. Ability to recognize and manage emotions', 'C. Academic achievement', 'D. Technical skills'], ans: 'B', exp: '"the ability to recognize, understand, and manage one\'s own emotions and those of others."' },
          { q: 'Compared to IQ, EQ:', opts: ['A. Is less important', 'B. Can be developed through practice', 'C. Is fixed from birth', 'D. Only matters in personal life'], ans: 'B', exp: '"EQ can be developed through practice, self-reflection, and feedback."' },
          { q: 'High-EQ leaders tend to:', opts: ['A. Avoid conflicts', 'B. Build stronger teams and inspire loyalty', 'C. Focus only on results', 'D. Prefer working alone'], ans: 'B', exp: '"build stronger teams, navigate conflicts more effectively, and inspire greater loyalty."' }
        ]
      },
      translation: { original: '情商是指个人识别、理解和管理自身及他人情绪的能力。研究表明，高情商的人在职场和人际关系中往往更为成功。情商不是天生固定的，可以通过学习和实践不断提升。培养高情商，需要增强自我意识、学会换位思考、提高情绪调节能力。', reference: 'Emotional intelligence refers to an individual\'s ability to recognize, understand, and manage their own and others\' emotions. Research shows that people with high emotional intelligence tend to be more successful in the workplace and in interpersonal relationships. Emotional intelligence is not fixed from birth and can be continuously improved through learning and practice. Cultivating high emotional intelligence requires enhancing self-awareness, learning to empathize, and improving emotional regulation ability.', keypoints: ['情商 → emotional intelligence', '自我意识 → self-awareness', '换位思考 → empathize', '情绪调节 → emotional regulation'] },
      vocab: [
        { word: 'empathy', sentence: 'Good leaders show _____ by understanding their team members\' feelings.', opts: ['A. empathy', 'B. indifference', 'C. authority', 'D. strictness'], ans: 'A', exp: 'empathy = 同理心、共情。' },
        { word: 'resilience', sentence: 'Mental _____ helps people recover quickly from setbacks.', opts: ['A. weakness', 'B. resilience', 'C. fragility', 'D. dependence'], ans: 'B', exp: 'resilience = 韧性、恢复力。' }
      ]
    }
  }
]
};
