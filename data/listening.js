// 听力题数据（暂无音频，提供题型分析和题目文本）
const LISTENING_DATA = {
  overview: {
    structure: [
      { section: '对话听力', format: '8段短对话 + 2段长对话', questions: 16, timePerQ: '约15秒', tips: '关注5W1H信息，注意对话结尾往往是答题关键' },
      { section: '短文听力', format: '3篇短文', questions: 8, timePerQ: '约20秒', tips: '预读选项，关注数字、地点、人物关系' },
      { section: '讲座/报道', format: '2段讲座或报道', questions: 6, timePerQ: '约25秒', tips: '把握主题和逻辑结构，注意转折词' }
    ],
    keyStrategies: [
      '预读选项：每题有约8秒预读时间，快速扫选项锁定关键词',
      '首尾原则：短对话答案常在最后一句',
      '同义替换：正确答案通常是原文的同义改写，非原词复现',
      '排除法：用逻辑排除明显错误选项',
      '数字敏感：时间、金额、距离等数字是高频考点',
      '情感判断：注意说话人的语气和态度'
    ]
  },
  highFreqTopics: [
    { topic: '学术生活', subtopics: ['课程选择', '图书馆', '作业与考试', '社团活动', '宿舍问题'] },
    { topic: '日常生活', subtopics: ['天气出行', '购物消费', '医疗健康', '餐饮娱乐', '交通安排'] },
    { topic: '职场工作', subtopics: ['求职面试', '工作安排', '商务会议', '职业发展'] },
    { topic: '科技文化', subtopics: ['科学发现', '历史文化', '环境问题', '社会现象'] }
  ],
  sampleTexts: [
    {
      id: 'l2024dec1', year: 2024, period: '12月', set: '第一套',
      section: '对话听力（短对话节选）',
      dialogs: [
        {
          num: 1,
          text: 'W: I heard the library will be closed for renovation next month. Where are you going to study then?\nM: I\'ve been thinking about that. Maybe I\'ll use the study rooms in the dormitory building, or try the new cafe near campus that has Wi-Fi.',
          question: 'What is the man going to do when the library closes?',
          opts: ['A. Study at home.', 'B. Use alternative study spaces.', 'C. Take a break from studying.', 'D. Go to a different library.'],
          ans: 'B',
          exp: '男生提到两个替代方案：宿舍学习室和校园咖啡厅，B选项"alternative study spaces"是同义概括。'
        },
        {
          num: 2,
          text: 'W: Have you decided which elective to take next semester? I\'m considering the photography course.\nM: I signed up for it too, but then I found out it conflicts with my internship schedule, so I switched to the creative writing class.',
          question: 'Why did the man change his course selection?',
          opts: ['A. He prefers writing to photography.', 'B. The photography course was full.', 'C. It conflicted with his internship.', 'D. His advisor recommended the change.'],
          ans: 'C',
          exp: '男生明确说"it conflicts with my internship schedule"，所以改选了创意写作课。'
        },
        {
          num: 3,
          text: 'W: The professor said we need to submit our research proposal by Friday. I haven\'t even chosen a topic yet.\nM: You\'d better get started. Once you have a clear research question, the rest usually comes together pretty quickly.',
          question: 'What does the man suggest the woman do?',
          opts: ['A. Ask for an extension.', 'B. Choose her research topic soon.', 'C. Work with a partner.', 'D. Read more background material.'],
          ans: 'B',
          exp: '男生建议"get started"，并说一旦确定研究问题其他部分就会顺利推进，核心建议是尽快选定题目。'
        }
      ]
    },
    {
      id: 'l2024dec1-long', year: 2024, period: '12月', set: '第一套',
      section: '长对话',
      title: '关于志愿者工作的对话',
      text: 'W: Hi David, I heard you spent your summer vacation doing volunteer work. How was the experience?\nM: It was truly eye-opening. I worked with an environmental organization planting trees in a rural area about 200 kilometers from the city.\nW: That sounds amazing. Was it physically demanding?\nM: Definitely. We worked six hours a day under the hot sun. But the sense of accomplishment was incredible when we saw the land transform.\nW: Did you learn anything beyond environmental skills?\nM: Absolutely. I learned how to work as a team and communicate with people from completely different backgrounds. Some volunteers were retired teachers, others were college students like me. The diversity made the experience richer.\nW: Would you recommend it to other students?\nM: Without hesitation. I think every college student should have at least one volunteer experience. It broadens your perspective in ways that classroom learning simply cannot.',
      questions: [
        { q: 'Where did the man do his volunteer work?', opts: ['A. In the city center.', 'B. In a rural area far from the city.', 'C. At a local community center.', 'D. In a foreign country.'], ans: 'B', exp: '对话中明确提到"in a rural area about 200 kilometers from the city"。' },
        { q: 'What skill does the man say he gained beyond environmental work?', opts: ['A. Leadership skills.', 'B. Scientific knowledge.', 'C. Teamwork and communication.', 'D. Technical expertise.'], ans: 'C', exp: '男生说"I learned how to work as a team and communicate with people from completely different backgrounds"。' },
        { q: 'What is the man\'s attitude toward volunteer work for students?', opts: ['A. It depends on the student\'s major.', 'B. It is optional but beneficial.', 'C. It is highly recommended for all students.', 'D. It is too physically demanding.'], ans: 'C', exp: '男生说"Without hesitation...every college student should have at least one volunteer experience"，态度是强烈推荐。' }
      ]
    },
    {
      id: 'l2024jun1', year: 2024, period: '6月', set: '第一套',
      section: '短文听力',
      title: '关于"深度工作"的讲座节选',
      text: 'In today\'s always-connected world, the ability to perform "deep work" — cognitively demanding tasks that require extended periods of focused attention — has become increasingly rare yet increasingly valuable. Studies show that professionals who can concentrate without distraction for two to four hours produce work of significantly higher quality than those who work in fragmented 20-minute intervals. The rise of open-plan offices and constant digital notifications has made sustained focus increasingly difficult. However, researchers suggest several strategies to reclaim your focus: scheduling dedicated "deep work" blocks, turning off notifications during these periods, and communicating clearly with colleagues about when you are available.',
      questions: [
        { q: 'What does "deep work" refer to according to the passage?', opts: ['A. Physical labor requiring great effort.', 'B. Tasks requiring extended focused attention.', 'C. Work done late at night.', 'D. Complex mathematical calculations.'], ans: 'B', exp: '"deep work"被定义为"cognitively demanding tasks that require extended periods of focused attention"。' },
        { q: 'What has made sustained focus more difficult?', opts: ['A. Longer working hours.', 'B. Open-plan offices and digital notifications.', 'C. More complex work tasks.', 'D. Lack of proper training.'], ans: 'B', exp: '文章明确指出"open-plan offices and constant digital notifications"使专注变得困难。' }
      ]
    },
    {
      id: 'l2023dec1', year: 2023, period: '12月', set: '第一套',
      section: '长对话',
      title: '关于职业规划的对话',
      text: 'M: Professor Wang, I\'m really confused about my career direction. I\'ve been offered a position at a big corporation, but I\'m also thinking about pursuing a master\'s degree.\nW: That\'s a common dilemma for final-year students. What factors are you weighing?\nM: Well, the job offers great starting pay and benefits. But I worry that without a graduate degree, my long-term career prospects might be limited.\nW: That\'s a valid concern. However, I\'d encourage you to consider your specific field. In some industries, practical experience gained early on can be just as valuable as an advanced degree.\nM: My field is data science. Would you say work experience is sufficient there?\nW: Data science is interesting because it values both. Many top companies actually prefer candidates who have both a strong theoretical foundation and hands-on project experience. If the company you\'re considering offers good mentorship and interesting projects, that could be very valuable.\nM: That\'s helpful. I think I need to research the company culture more carefully before deciding.',
      questions: [
        { q: 'What is the student\'s dilemma?', opts: ['A. Choosing between two job offers.', 'B. Deciding whether to work or pursue further study.', 'C. Selecting a major for graduate school.', 'D. Dealing with a difficult professor.'], ans: 'B', exp: '对话开头明确说是纠结于接受工作机会还是读研究生。' },
        { q: 'What does Professor Wang suggest the student consider?', opts: ['A. His family\'s financial situation.', 'B. The reputation of graduate schools.', 'C. The value of experience in his specific field.', 'D. The opinions of his classmates.'], ans: 'C', exp: '教授建议"consider your specific field"，并说在某些领域实践经验和学位同样有价值。' },
        { q: 'What does the student decide to do?', opts: ['A. Accept the job offer immediately.', 'B. Apply to graduate school.', 'C. Research the company more before deciding.', 'D. Ask his parents for advice.'], ans: 'C', exp: '学生最后说"I think I need to research the company culture more carefully before deciding"。' }
      ]
    }
  ]
};
const LISTENING_EXAMS = [
  {
    id: 'l2025dec1', year: 2025, period: '12月', set: '第一套',
    audio: 'Audio/cet6_2025_12_1.mp3',
    secA: [
        {num:1, opts:['A) He has distinguished himself in foreign service.', 'B) He is his country’s ambassador to Winopia.', 'C) He is currently an electrical engineer.', 'D) He craves attention from the media.']},
        {num:2, opts:['A) A government reshuffle.', 'B) A fundamental reform.', 'C) Some sort of political reorientation.', 'D) Some sort of crisis of legitimacy.']},
        {num:3, opts:['A) All diplomats have more or less similar stories to tell.', 'B) It is a prerequisite to get some practice in diplomacy.', 'C) Different people can take different paths.', 'D) It is a must to first obtain a law degree.']},
        {num:4, opts:['A) Key skills required of a diplomat.', 'B) The making of an expert diplomat.', 'C) Diplomatic discourse and rhetoric.', 'D) Contributions by diplomatic envoys.']}
      ],
    secB: [
        {num:5, opts:['A) They have got their work done.', 'B) They both look tired', 'C) They can meet again tomorrow anyway.', 'D) They are both anxious to go home.']},
        {num:6, opts:['A) The board members’ insufficient support.', 'B) Two months devoted to the same contract.', 'C) Working two months without any progress.', 'D) The man’s long concentration on the project.']},
        {num:7, opts:['A) Unprofessional.', 'B) Inspirational.', 'C) Exceptional.', 'D) Delusional.']},
        {num:8, opts:['A) Fewer rectifications of the contract.', 'B) More support from the board members.', 'C) The early implementation of the project.', 'D) The alignment of all sections of the contract.']},
        {num:9, opts:['A) When two employees propose contrary solutions to their dispute.', 'B) When two employees are directed by their respective manager.', 'C) When two people behave in an apparently clashing manner.', 'D) When two people tell different stories of the same event.']},
        {num:10, opts:['A) How it got resolved.', 'B) How it happened.', 'C) What it was about.', 'D) When it was settled.']},
        {num:11, opts:['A) They intervened promptly lest their dispute escalate.', 'B) They tried to ascertain the actual facts of the matter.', 'C) They assumed the best about them and moved on.', 'D) They persuaded them to put their conflict aside.']},
        {num:12, opts:['A) Dine out daily.', 'B) Budget sensibly.', 'C) [missing]', 'D) [missing]']},
        {num:13, opts:['A) Shopping.', 'B) Sewing.', 'C) [missing]', 'D) [missing]']},
        {num:14, opts:['A) Satisfy their taste.', 'B) Cut down expenses.', 'C) Enjoy cooking.', 'D) Shop at groceries.']},
        {num:15, opts:['A) People’s intense focus on convenience.', 'B) People’s deteriorating family finances.', 'C) People’s strong aversion to junk foods.', 'D) People’s increasing dislike of cooking.']}
      ],
    secC: [
        {num:16, opts:['A) Its owner’s flight is delayed because of bad weather.', 'B) Airlines cannot find its owner without an ID tag on it.', 'C) Airline staff have not correctly coded its destination tag.', 'D) Its owner has forgot to pick it up from the baggage claim.']},
        {num:17, opts:['A) Its tag may get torn off on the conveyor belt.', 'B) Its tag may get stuck in the sorting machine.', 'C) It may be sent to a wrong destination.', 'D) It may be picked up by someone else.']},
        {num:18, opts:['A) Purchase irretrievably lost things at auction.', 'B) Contact the airport staff to find our missing bag.', 'C) Get the airline agent’s phone number before boarding.', 'D) Avoid packing valuable items in our checked baggage.']},
        {num:19, opts:['A) It can be behaviorally hazardous.', 'B) It can be especially disappointing.', 'C) [missing]', 'D) [missing]']},
        {num:20, opts:['A) They considered it inevitable.', 'B) They held a negative view towards it.', 'C) It can be socially harmful.', 'D) It can be really embarrassing.']},
        {num:21, opts:['A) Elaborate forms of social contact.', 'B) Ill effects on one’s sense of pride.', 'C) Poor relationships with others.', 'D) Vicious cycles of detachment.']},
        {num:22, opts:['A) The ill treatment they get as tourists.', 'B) The nonprofessional business they see.', 'C) The impersonal accommodations.', 'D) The many adventures on their way.']},
        {num:23, opts:['A) They have been the classic way to visit Europe.', 'B) They attract tourists with location and decoration.', 'C) They have long been competing with chain hotels.', 'D) They are in fact a completely new idea in America.']},
        {num:24, opts:['A) Your financial status.', 'B) Your family’s consent.', 'C) [missing]', 'D) [missing]']},
        {num:25, opts:['A) Costs for starting the business.', 'B) The number of guests to receive.', 'C) Your property.', 'D) Your personality.']}
      ],
    answers: {"1":"D", "2":"D", "3":"B", "4":"C", "5":"A", "6":"B", "7":"D", "8":"C", "9":"D", "10":"A", "11":"C", "12":"B", "13":"B", "14":"C", "15":"D", "16":"B", "17":"A", "18":"D", "19":"C", "20":"B", "21":"D", "22":"C", "23":"A", "24":"C", "25":"D"}
  },
  {
    id: 'l2025dec2', year: 2025, period: '12月', set: '第二套',
    audio: 'Audio/cet6_2025_12_2.mp3',
    secA: [
        {num:1, opts:['A) It is absurdly expensive.', 'B) It is appropriately priced.', 'C) [missing]', 'D) [missing]']},
        {num:2, opts:['A) They never really appeal to her.', 'B) They are never actually good value.', 'C) It brings shame on the university.', 'D) It caters to students and teachers.']},
        {num:3, opts:['A) The food.', 'B) The space.', 'C) The speed.', 'D) The environment.']},
        {num:4, opts:['A) A complete refurnishing.', 'B) A ruinous burning down.', 'C) A substantial expansion.', 'D) A massive renovation.']}
      ],
    secB: [
        {num:5, opts:['A) They have a poor work ethic.', 'B) They don’t get along with managers.', 'C) They are struggling in the workplace.', 'D) They aren’t as varied as their predecessors.']},
        {num:6, opts:['A) Learning about the way they adhere to their own values.', 'B) Recognizing how they try to strike a work-life balance.', 'C) Knowing how they struggle to connect with managers.', 'D) Understanding the way they seek career advancement.']},
        {num:7, opts:['A) In terms of the number of hours spent.', 'B) By the amount of work they perform.', 'C) In terms of the work done in 8 hours.', 'D) By the quality of the work they do.']},
        {num:8, opts:['A) Those whose culture facilitates their advancement.', 'B) Those allowing them to do projects of their choice.', 'C) Those whose values align with their own.', 'D) Those refraining from discrediting their perspectives.']},
        {num:9, opts:['A) They may unconsciously help customers choose greener dishes.', 'B) They may unintentionally encourage customers to eat meat.', 'C) They raise customers’ environmental awareness.', 'D) They enable customers to eat in a healthy way.']},
        {num:10, opts:['A) By inviting them to taste different kinds of food.', 'B) By observing the eating behavior of strict vegetarians.', 'C) By comparing participants eating vegetarian food frequently with those doing so rarely.', 'D) By requiring participants to choose a meal as if they were feasting at a family gathering.']},
        {num:11, opts:['A) They are less likely to choose a vegetarian dish.', 'B) They find vegetarian dishes become more appealing.', 'C) They tend to consume larger portions of unhealthy food.', 'D) They are less likely to choose dishes recommended by chefs.']},
        {num:12, opts:['A) They have found a solution to the global problem of air pollution.', 'B) They have managed to freeze polluting particles to around –18 °C.', 'C) They have been seeking a way to prevent pollutants from penetrating indoors.', 'D) They have been cooperating closely on developing a new type of air-conditioner.']},
        {num:13, opts:['A) They can be costly and inefficient.', 'B) They are constantly being perfected.', 'C) They are by-products of health research.', 'D) They can save over 40,000 lives each year.']},
        {num:14, opts:['A) They keep their windows closed.', 'B) They spend a lot more time indoors.', 'C) They make more use of air-conditioners.', 'D) They try various ways to purify indoor air.']},
        {num:15, opts:['A) It shows the importance of eliminating indoor pollution.', 'B) It may change the way of future environmental research.', 'C) It demonstrates the fruitful cooperation between UK and Chinese scientists.', 'D) It may make household appliances serve an additional air cleaner function.']}
      ],
    secC: [
        {num:16, opts:['A) It distinguishes different species of animals.', 'B) It reflects distinct traits in animal behavior.', 'C) It demonstrates animals’ ability to recognize themselves.', 'D) It gauges the level of intelligence of various animal species.']},
        {num:17, opts:['A) It meets few of the behavioral criteria set in the mirror test.', 'B) It behaves similarly to animals capable of self-recognition.', 'C) It removes marks from itself to show self-awareness.', 'D) It matches children over 18 months in intelligence.']},
        {num:18, opts:['A) They have conclusively established the criteria of animal intelligence.', 'B) They have advanced the concept of self-awareness to a higher level.', 'C) They incorporate more perspectives than one.', 'D) They raise more questions than answers.']},
        {num:19, opts:['A) Small children are even more keen on screens than their elders.', 'B) Both parents and children preferred to read electronic books.', 'C) Parents differed from children in reading behavior.', 'D) Children reading electronic books learned more.']},
        {num:20, opts:['A) They came to conflicting conclusions.', 'B) They were based on small samples.', 'C) They yielded unanticipated findings.', 'D) They were focused on younger kids.']},
        {num:21, opts:['A) Those that prove simple enough for them to comprehend.', 'B) Those that produce both audio and visual effects on them.', 'C) Those that draw their attention to the educational content.', 'D) Those that contribute to their increased interest in reading.']},
        {num:22, opts:['A) Regret having wasted much time in making them.', 'B) Think how different we could have made them.', 'C) Keep ourselves from regretting them.', 'D) Live with them for the time being.']},
        {num:23, opts:['A) It has made us the person we are now.', 'B) It has been made with a lot of thinking.', 'C) It stems from our valuable knowledge.', 'D) It benefits us greatly one way or another.']},
        {num:24, opts:['A) Challenging things to do.', 'B) Beautiful things to share.', 'C) Choices to make.', 'D) Lessons to learn.']},
        {num:25, opts:['A) Foreseeing the possibility for regret later.', 'B) Making proper use of the lessons learned.', 'C) Perfecting the decision-making strategies.', 'D) Seeing them as obstacles to moving forward.']}
      ],
    answers: {"1":"B", "2":"A", "3":"C", "4":"D", "5":"A", "6":"B", "7":"D", "8":"C", "9":"B", "10":"C", "11":"A", "12":"C", "13":"A", "14":"B", "15":"D", "16":"C", "17":"B", "18":"D", "19":"B", "20":"B", "21":"C", "22":"B", "23":"C", "24":"C", "25":"B"}
  },
  {
    id: 'l2025dec3', year: 2025, period: '12月', set: '第三套',
    audio: 'Audio/cet6_2025_12_2.mp3',
    secA: [
        
      ],
    secB: [
        
      ],
    secC: [
        
      ],
    answers: {"1":"B", "2":"A", "3":"C", "4":"D", "5":"A", "6":"B", "7":"D", "8":"C", "9":"B", "10":"C", "11":"A", "12":"C", "13":"A", "14":"B", "15":"D", "16":"C", "17":"B", "18":"D", "19":"B", "20":"B", "21":"C", "22":"B", "23":"C", "24":"C", "25":"B"}
  },
  {
    id: 'l2025jun1', year: 2025, period: '6月', set: '第一套',
    audio: 'Audio/cet6_2025_06_1.mp3',
    secA: [
        {num:1, opts:['A) Met the computer technician.', 'B) Told the man about her trouble.', 'C) [missing]', 'D) [missing]']},
        {num:2, opts:['A) Consulted someone in charge.', 'B) Came as soon as possible.', 'C) Called the man’s company.', 'D) Visited Alpha Maintenance.']},
        {num:3, opts:['A) Frustration.', 'B) Intimidation.', 'C) Desperation.', 'D) Indignation.']},
        {num:4, opts:['A) Whether the contents have been backed up.', 'B) Whether they can find help somewhere else.', 'C) Whether all data stored on the hard drive has got lost.', 'D) Whether they need to wipe the system directories clean.']}
      ],
    secB: [
        {num:5, opts:['A) It’s boring.', 'B) It’s challenging.', 'C) It’s a beautiful thing.', 'D) It’s unlike most jobs.']},
        {num:6, opts:['A) Arbitrating between disagreeing solicitors.', 'B) Preventing disputes from escalating.', 'C) Buying and selling property.', 'D) Mediating land disputes.']},
        {num:7, opts:['A) Courts are intended for fixing major legal disputes.', 'B) Courts are getting too bureaucratic to function.', 'C) Courts can be frustrating and expensive.', 'D) Courts can be frightening and arbitrary.']},
        {num:8, opts:['A) The ability to make arguments in a unique way.', 'B) The skill of preventing conflicts between parties concerned.', 'C) The skill of foreseeing any potential stakes in their work.', 'D) The ability to express themselves clearly and forcefully.']},
        {num:9, opts:['A) They looked into the relationship between one’s prior knowledge and creativity.', 'B) They offered novel ways to help older adults to keep their memories from aging.', 'C) They proposed an explanation for old people’s difficulty in retrieving memories.', 'D) They advanced a new model concerning human information storage and retrieval.']},
        {num:10, opts:['A) Young adults rely on memory while older adults keep notes as a reminder.', 'B) Older adults often retrieve irrelevant memories along with what they want.', 'C) Young adults accumulate knowledge much more quickly than older adults.', 'D) Older adults generally perform cognitive tasks much slower than young adults.']},
        {num:11, opts:['A) They show preserved, and sometimes enhanced, creativity.', 'B) They frequently suffer from disorderly crowded memories.', 'C) They can rely on their accumulated wisdom in an emergency.', 'D) They may well be served by forgetting their prior knowledge.']},
        {num:12, opts:['A) They are actually proud of the goods and services they produce.', 'B) They are worried about being alienated from the outside world.', 'C) They are rarely in control of many things related to their work.', 'D) They are longing to share the profits made from their work.']},
        {num:13, opts:['A) The steady decrease in productivity.', 'B) The adverse effect on physical health.', 'C) The feeling of being time-poor.', 'D) The rising economic inequality.']},
        {num:14, opts:['A) It alters the structure of work.', 'B) It puts jobs and wages at risk.', 'C) [missing]', 'D) [missing]']},
        {num:15, opts:['A) Finding meaning in work.', 'B) Prioritizing life over work.', 'C) It liberates people from tedious and laborious work.', 'D) It creates new work opportunities in the IT industry.']}
      ],
    secC: [
        {num:16, opts:['A) Affect our attitude to novel tasks.', 'B) Distinguish us in the social world.', 'C) [missing]', 'D) [missing]']},
        {num:17, opts:['A) By pressing a hidden button.', 'B) By pushing a big button on top.', 'C) Outweigh IQ in importance.', 'D) Impact academic achievements.']},
        {num:18, opts:['A) Perform difficult tasks successfully just by observing how adults acted.', 'B) Make generalizable inferences about persistence from a few examples.', 'C) Adapt themselves to different social contexts.', 'D) Work hard to interact with experimenters.']},
        {num:19, opts:['A) Offering advice on overcoming habitual lateness.', 'B) Exemplifying various recreational opportunities.', 'C) Scrutinizing individuals’ defining traits.', 'D) Suggesting ways for setting priorities.']},
        {num:20, opts:['A) Make the breakfast simpler.', 'B) Take the alarms seriously.', 'C) Ready yourself in the early dawn.', 'D) Get prepared the night before.']},
        {num:21, opts:['A) Finish the prior task 30 minutes earlier.', 'B) Keep ourselves from hitting a bump.', 'C) Leave time in between activities.', 'D) Try to avoid possible hold-ups.']},
        {num:22, opts:['A) Their lifestyles vary.', 'B) Their traits vary.', 'C) They have different customs.', 'D) They have different feels.']},
        {num:23, opts:['A) They are not as willing to help strangers.', 'B) They are not as patient with one another.', 'C) They violate traffic rules more frequently.', 'D) They become more easily irritated in public.']},
        {num:24, opts:['A) It was practiced by Boston’s founding fathers.', 'B) It is not deemed exotic by Proper Bostonians.', 'C) It was adopted by Boston’s upper class.', 'D) It is not part of Boston’s local culture.']},
        {num:25, opts:['A) Stick to its own way of showing courtesy to strangers.', 'B) Follow the examples set by Paris and New York City.', 'C) Learn from the world’s major cities in promoting tourism.', 'D) Take pride in its history and adhere to its cultural tradition.']}
      ],
    answers: {"1":"C", "2":"B", "3":"D", "4":"A", "5":"A", "6":"D", "7":"C", "8":"D", "9":"C", "10":"B", "11":"A", "12":"C", "13":"C", "14":"B", "15":"B", "16":"D", "17":"A", "18":"B", "19":"B", "20":"C", "21":"B", "22":"D", "23":"A", "24":"D", "25":"A"}
  },
  {
    id: 'l2025jun2', year: 2025, period: '6月', set: '第二套',
    audio: 'Audio/cet6_2025_06_2.mp3',
    secA: [
        {num:1, opts:['A) They have to make a choice by the end of the day.', 'B) Both candidates are very keen on getting the job.', 'C) They hold different views on the procedure.', 'D) Both candidates are quite competitive.']},
        {num:2, opts:['A) Both Rachel and Peter came across as respectful and professional.', 'B) Rachel scored moderately higher grades than Peter at school.', 'C) Both Rachel and Peter excelled in their academic pursuit.', 'D) Peter appeared slightly stronger than Rachel physically.']},
        {num:3, opts:['A) His use of body language.', 'B) His accumulation of experience.', 'C) His unusual state of mind.', 'D) His knowledge about the company.']},
        {num:4, opts:['A) Compare the candidates side by side again.', 'B) Ask the board to cast the deciding vote.', 'C) Find a way to break the tie next time.', 'D) Let John make the final decision.']}
      ],
    secB: [
        {num:5, opts:['A) The private label “L’Orange”.', 'B) The woman’s latest collection.', 'C) This season’s new fashion.', 'D) The head designer’s role.']},
        {num:6, opts:['A) Something reflecting the social norms.', 'B) Something meeting public expectations.', 'C) Something slightly absurd.', 'D) Something a bit ambiguous.']},
        {num:7, opts:['A) Merge styles often at opposite ends of the fashion spectrum.', 'B) Learn from the designs of the Asian rural mountain villagers.', 'C) Make velvet capes look both majestic and masculine.', 'D) Draw intricate patterns onto a traditional power suit.']},
        {num:8, opts:['A) Obtaining the woman’s signature.', 'B) Seeing the woman’s new creations.', 'C) Incorporating indigenous aspects into his work.', 'D) Sharing more ideas with the woman next time.']},
        {num:9, opts:['A) They could readily recognize their owner simply by looking.', 'B) They could understand the implications of human commands.', 'C) They could be domesticated to act as our companions.', 'D) They could follow pointing gestures without training.']},
        {num:10, opts:['A) Cultivating them to be intelligent creatures.', 'B) Training them to behave like domesticated dogs.', 'C) Understanding how humans impact their behavior.', 'D) Taking measures to reduce their numbers.']},
        {num:11, opts:['A) Tame them through repeated training.', 'B) Treat them with sensitivity and respect.', 'C) Make them responsive to our commands.', 'D) Watch their behavior and try to improve it.']},
        {num:12, opts:['A) The temperature inside it varies from place to place.', 'B) Proper placement facilitates access to food products.', 'C) Its different shelves are designed for different purposes.', 'D) The space in an average fridge changes from top to bottom.']},
        {num:13, opts:['A) To slow the rising of temperature in it.', 'B) To provide a big box of evenly cold air.', 'C) To prevent germs from growing quickly.', 'D) To keep the food cold as long as possible.']},
        {num:14, opts:['A) On the top shelf.', 'B) In the middle section.', 'C) [missing]', 'D) [missing]']},
        {num:15, opts:['A) They will be extra-chilly.', 'B) They will be hard to defrost.', 'C) On the inside of its doors.', 'D) At the back of its bottom shelf.']}
      ],
    secC: [
        {num:16, opts:['A) Chronic depression.', 'B) Growing feebleness.', 'C) [missing]', 'D) [missing]']},
        {num:17, opts:['A) It feels real and relevant.', 'B) It contributes to psychology.', 'C) Hip fracture.', 'D) Fatal infections.']},
        {num:18, opts:['A) By bringing together experts old and young.', 'B) By counting on advanced modern technology.', 'C) By making full use of her expertise.', 'D) By combining multiple perspectives.']},
        {num:19, opts:['A) They don’t teach basic organization.', 'B) They don’t focus on teaching techniques.', 'C) They attach little importance to recipes.', 'D) They hire very few distinguished chefs.']},
        {num:20, opts:['A) It’s unique to celebrity chefs.', 'B) It’s a way of transformation.', 'C) It’s too demanding for them.', 'D) It’s a way of life to them.']},
        {num:21, opts:['A) Respect others so as to be respected.', 'B) Use time and resources in a wise way.', 'C) Cultivate a habit of self-discipline.', 'D) Learn from philosophers earnestly.']},
        {num:22, opts:['A) The motive for hard work.', 'B) The reason for stagnation.', 'C) The basis for self-improvement.', 'D) The justification for self-confidence.']},
        {num:23, opts:['A) Feel confidence, happiness and satisfaction.', 'B) Believe they have achieved their life goals.', 'C) Use a key tool for setting ambitious goals.', 'D) Stop imagining further progress in life.']},
        {num:24, opts:['A) We feel we are always falling behind others.', 'B) We have to adapt to the ever-changing goal.', 'C) There are various misconceptions about goal setting.', 'D) There are always problems with the goal originally set.']},
        {num:25, opts:['A) A noticeable change in the number of goals to achieve.', 'B) Measuring always against the gap rather than the gain.', 'C) Measuring where we’ve come from instead of measuring against the goal.', 'D) A proper conception of what we fail to notice in trying to achieve our goals.']}
      ],
    answers: {"1":"B", "2":"A", "3":"C", "4":"D", "5":"A", "6":"B", "7":"D", "8":"C", "9":"B", "10":"C", "11":"A", "12":"C", "13":"A", "14":"B", "15":"D", "16":"C", "17":"B", "18":"D", "19":"C", "20":"D", "21":"C", "22":"C", "23":"D", "24":"B", "25":"C"}
  },
  {
    id: 'l2025jun3', year: 2025, period: '6月', set: '第三套',
    audio: 'Audio/cet6_2025_06_2.mp3',
    secA: [
        
      ],
    secB: [
        
      ],
    secC: [
        
      ],
    answers: {"1":"B", "2":"A", "3":"C", "4":"D", "5":"A", "6":"B", "7":"D", "8":"C", "9":"B", "10":"C", "11":"A", "12":"C", "13":"A", "14":"B", "15":"D", "16":"C", "17":"B", "18":"D", "19":"C", "20":"D", "21":"C", "22":"C", "23":"D", "24":"B", "25":"C"}
  },
  {
    id: 'l2024dec1', year: 2024, period: '12月', set: '第一套',
    audio: 'Audio/cet6_2024_12_1.mp3',
    secA: [
        {num:1, opts:['A) Preparing for a job interview.', 'B) Writing a work report together.', 'C) Going through a couple of issues the company faces.', 'D) Discussing the woman’s annual performance review.']},
        {num:2, opts:['A) The overall culture of the company.', 'B) The instruction from her supervisor.', 'C) The honesty of the manager.', 'D) The recognition of her merits.']},
        {num:3, opts:['A) Her inadequate language proficiency.', 'B) Her inability to interact with colleagues properly.', 'C) Her inappropriate behavior at company meetings.', 'D) Her simplistic approach to dealing with others.']},
        {num:4, opts:['A) To avoid offending the recipients.', 'B) To show her unique writing style.', 'C) To save time.', 'D) To be frank.']}
      ],
    secB: [
        {num:5, opts:['A) Provide medical service to the community.', 'B) Make healthcare in her hometown the best.', 'C) Obtain a doctoral degree in internal medicine.', 'D) Have a profound impact on people around her.']},
        {num:6, opts:['A) They have constantly urged her to study hard.', 'B) They have worked hard to finance her education.', 'C) They have tried to create a positive learning environment.', 'D) They have pursued the family’s dreams together with her.']},
        {num:7, opts:['A) It is a key medical branch conducive to realizing her dreams.', 'B) It connects many other specialties with its broad coverage.', 'C) It has a long history in the man’s prestigious institution.', 'D) It is a medical branch both of her parents specialize in.']},
        {num:8, opts:['A) Problematic.', 'B) Competitive.', 'C) Inconsistent.', 'D) Trustworthy.']},
        {num:9, opts:['A) To prevent hackers from cracking our secret codes.', 'B) To show that all the guidelines are being followed.', 'C) To provide evidence that passwords are forgotten.', 'D) To convince our computer that we are human.']},
        {num:10, opts:['A) Put an end to the hacking phenomenon.', 'B) Help people remember their passwords.', 'C) Reduce the intricacy of the password itself.', 'D) Explain the need for different email accounts.']},
        {num:11, opts:['A) Innovate technologies to ensure the safety of users’ accounts.', 'B) Provide incentives for the application of creative passwords.', 'C) Explore the possibility of using simpler secret codes.', 'D) Take steps to encourage users to log in more often.']},
        {num:12, opts:['A) Her work no longer interested her.', 'B) Her training app did not fit her.', 'C) Her fitness fell into a slump.', 'D) Her business deteriorated.']},
        {num:13, opts:['A) Help users keep track of their fitness levels.', 'B) Design personalised training programmes.', 'C) Strengthen ties among users worldwide.', 'D) Select well-qualified human coaches.']},
        {num:14, opts:['A) They are never repeated.', 'B) They help enrich her life.', 'C) They are of no extreme intensity.', 'D) They keep her focused on her goal.']},
        {num:15, opts:['A) They will not be able to take the place of human personal trainers.', 'B) They will not be able to comprehend some of the profiles users put in.', 'C) They cannot lead to optimal results with their mathematical approach.', 'D) They cannot match humans in arranging meticulous workout schedules.']}
      ],
    secC: [
        {num:16, opts:['A) All societies are built upon the cornerstones of basic values.', 'B) Everyone everywhere demonstrates seven character traits.', 'C) All societies are kept together by seven basic moral rules.', 'D) Everyone everywhere shares a universal moral standard.']},
        {num:17, opts:['A) Ascertain whether deferring to authority was confined to right-wing people.', 'B) Find out whether different societies had different versions of morality.', 'C) Make clear whether all societies faced the same moral issues.', 'D) Find out whether left-wing people still had a group loyalty.']},
        {num:18, opts:['A) Make independent descriptions of cultures around the world.', 'B) Strive to understand the basic differences between peoples.', 'C) Appreciate the foundational value of the existing data.', 'D) Carry out systematic field studies to gather new data.']},
        {num:19, opts:['A) They might be the most important part of our eating experience.', 'B) They can activate our brain functions in a most direct fashion.', 'C) They can be viewed as the windows to our soul.', 'D) They could mislead us in more ways than one.']},
        {num:20, opts:['A) It attracts food companies’ growing attention.', 'B) It adversely impacts one’s eating experience.', 'C) It invariably determines how food sells.', 'D) It changes the way people taste food.']},
        {num:21, opts:['A) Enhance the taste.', 'B) Make predictions.', 'C) Identify distinct flavors.', 'D) Enrich the eating experience.']},
        {num:22, opts:['A) Social status.', 'B) Financial resources.', 'C) Meaning.', 'D) Happiness.']},
        {num:23, opts:['A) Their effect on people’s happiness has long been overstated.', 'B) Their influence on people’s life varies with social contexts.', 'C) They can affect people’s experience of meaning.', 'D) They can ensure people’s overall well-being.']},
        {num:24, opts:['A) It used questions totally different from those in their first study.', 'B) It focused on the sense of meaning of French participants.', 'C) It analysed cases from a daily poll of US residents.', 'D) It examined data collected from multiple countries.']},
        {num:25, opts:['A) They might have more access to external sources of happiness.', 'B) They might focus on an individual sense of satisfaction or meaning.', 'C) They might be less easily affected by a community’s overall feeling.', 'D) They might be less adversely impacted by failure to achieve a purpose.']}
      ],
    answers: {"1":"B", "2":"A", "3":"C", "4":"C", "5":"A", "6":"B", "7":"A", "8":"D", "9":"A", "10":"B", "11":"B", "12":"D", "13":"C", "14":"C", "15":"D", "16":"A", "17":"C", "18":"B", "19":"A", "20":"B", "21":"D", "22":"D", "23":"A", "24":"D", "25":"C"}
  },
  {
    id: 'l2024dec2', year: 2024, period: '12月', set: '第二套',
    audio: 'Audio/cet6_2024_12_2.mp3',
    secA: [
        {num:1, opts:['A) Changing his major.', 'B) His family situation.', 'C) Revising his graduation thesis.', 'D) His passion for Art History.']},
        {num:2, opts:['A) He doesn’t think it legitimate to depend on his father.', 'B) He thinks his financial situation has now changed.', 'C) He doesn’t think it will provide him with a living.', 'D) He thinks it nourishes the financially secure only.']},
        {num:3, opts:['A) Try his best to socialize and build a network in the art industry.', 'B) Seek financially viable employment opportunities after graduation.', 'C) Investigate all possible ways to become a celebrity in the art world.', 'D) Strike a balance between intellectual pursuits and financial security.']},
        {num:4, opts:['A) Money.', 'B) Time.', 'C) Determination.', 'D) Optimism.']}
      ],
    secB: [
        {num:5, opts:['A) Their decision on investigating beef consumption.', 'B) Their original ideas about the domestic market.', 'C) Their different approaches to a case study.', 'D) Their end-of-semester business projects.']},
        {num:6, opts:['A) Expanding farmland out west.', 'B) Importing most of the beef.', 'C) Raising cattle domestically.', 'D) Continuing to boost economic growth.']},
        {num:7, opts:['A) Technical equipment.', 'B) Business consultancy.', 'C) Beef.', 'D) Carwashing.']},
        {num:8, opts:['A) Car owners of all walks of life.', 'B) High-end customers in big cities.', 'C) Consumers craving for professional service.', 'D) Well-off dealers seeking a profitable markup.']},
        {num:9, opts:['A) Parents’ talking with them during TV time raises their curiosity levels.', 'B) Their daily television exposure cuts parent-child conversation time.', 'C) The more TV they watch the poorer their progress in development.', 'D) Their socioeconomic levels impact their academic achievement.']},
        {num:10, opts:['A) Kids’ enhanced learning.', 'B) Kids’ curiosity levels.', 'C) Kids’ reading and math.', 'D) Kids’ behavioral development.']},
        {num:11, opts:['A) It can hinder kids from getting on with their peers.', 'B) It can cut into kids’ time on exploratory activities.', 'C) It can arouse kids’ interest in how people interact in real life.', 'D) It can widen the gap between kids from different economic statuses.']},
        {num:12, opts:['A) Exerting ourselves too hard in order to attain our life’s goals.', 'B) Being possessed with a single thought of professional success.', 'C) Trying every means to beat others in terms of personal aspirations.', 'D) Being mindlessly driven to possess more and more material things.']},
        {num:13, opts:['A) We might isolate ourselves from our fellow beings.', 'B) We might acquire an incorrect sense of well-being.', 'C) We might end up pursuing all the wrong things.', 'D) We might make a mess of our personal lives.']},
        {num:14, opts:['A) They should be based on solid theoretical concepts.', 'B) They should take personal interests into account.', 'C) They should include goals to help other people.', 'D) They should increase our sense of worthiness.']},
        {num:15, opts:['A) Drifting through life aimlessly.', 'B) Giving up the chance to fulfill yourself.', 'C) Abandoning all that life has to offer.', 'D) Spoiling your character and integrity.']}
      ],
    secC: [
        {num:16, opts:['A) Grade-raising ways and means.', 'B) Pressure-alleviating exercise.', 'C) [missing]', 'D) [missing]']},
        {num:17, opts:['A) Buying it from coffee shops.', 'B) Building up a tolerance of it.', 'C) Revision-conducting approaches.', 'D) Brain-boosting food and drink.']},
        {num:18, opts:['A) By taking varied vitamin supplements.', 'B) By consuming a rich variety of foods.', 'C) By eating both oranges and frozen berries.', 'D) By getting components packaged in tablets.']},
        {num:19, opts:['A) Many people across advanced economies think the world is going from bad to worse.', 'B) The news focuses on reporting catastrophes that occur across the world.', 'C) A significant part of the world is experiencing another great recession.', 'D) Many people have no idea of those living under miserable conditions.']},
        {num:20, opts:['A) It has experienced ups and downs like any other historical trend.', 'B) It is hailed as a miracle by both economists and ordinary people.', 'C) It is the only way for all countries to share economic prosperity.', 'D) It has given more and more countries a rare chance to thrive.']},
        {num:21, opts:['A) Their fortunes may take a downturn.', 'B) They can be classified as middle class.', 'C) Their living standards have been deteriorating.', 'D) They are experiencing a radical transformation.']},
        {num:22, opts:['A) Why smells can activate emotional memories.', 'B) How powerful the sense of smell can become.', 'C) How scent particles revive memories forgotten.', 'D) Why the scent of bread has a strong mental impact.']},
        {num:23, opts:['A) The brain cells’ processing of memories experienced as strongly emotional.', 'B) The activation of the brain’s emotion processing area by chemical particles.', 'C) The interaction between chemical particles and the brain cells responsible for smell.', 'D) The sensations of scents going directly to the brain’s emotional and memory centers.']},
        {num:24, opts:['A) Imagination.', 'B) Association.', 'C) Experience.', 'D) Context.']},
        {num:25, opts:['A) Inaccuracy and alterability.', 'B) Susceptibility to polar interpretations.', 'C) Being personal and individualistic.', 'D) Being dependent on relevant scenarios.']}
      ],
    answers: {"1":"A", "2":"C", "3":"A", "4":"B", "5":"D", "6":"C", "7":"D", "8":"A", "9":"A", "10":"D", "11":"B", "12":"B", "13":"C", "14":"D", "15":"C", "16":"D", "17":"A", "18":"C", "19":"C", "20":"B", "21":"C", "22":"B", "23":"B", "24":"A", "25":"D"}
  },
  {
    id: 'l2024dec3', year: 2024, period: '12月', set: '第三套',
    audio: 'Audio/cet6_2024_12_2.mp3',
    secA: [
        
      ],
    secB: [
        
      ],
    secC: [
        
      ],
    answers: {"1":"D", "2":"C", "3":"A", "4":"C", "5":"A", "6":"B", "7":"A", "8":"D", "9":"C", "10":"B", "11":"C", "12":"B", "13":"C", "14":"B", "15":"A", "16":"A", "17":"B", "18":"C", "19":"A", "20":"D", "21":"C", "22":"B", "23":"D", "24":"C", "25":"A"}
  },
  {
    id: 'l2024jun1', year: 2024, period: '6月', set: '第一套',
    audio: 'Audio/cet6_2024_06_1.mp3',
    secA: [
        {num:1, opts:['A) Read numerous comments users put online.', 'B) Blended all his food without using a machine.', 'C) Searched for the state-of-the-art models of blenders.', 'D) Did thorough research on the price of kitchen appliances.']},
        {num:2, opts:['A) Eating any blended food.', 'B) Buying a blender herself.', 'C) Using machines to do her cooking.', 'D) Making soups and juices for herself.']},
        {num:3, opts:['A) Cooking every meal creatively in the kitchen.', 'B) Paying due attention to his personal hygiene.', 'C) Eating breakfast punctually every morning.', 'D) Making his own fresh fruit juice regularly.']},
        {num:4, opts:['A) One-tenth of it is sugar.', 'B) It looks healthy and attractive.', 'C) One’s fancy may be tickled by it.', 'D) It contains an assortment of nutrients.']}
      ],
    secB: [
        {num:5, opts:['A) How he has made himself popular as the mayor of Berkton.', 'B) How the residents will turn Berkton into a tourist attraction.', 'C) How charming he himself considers the village of Berkton to be.', 'D) How he has led people of Berkton to change the village radically.']},
        {num:6, opts:['A) It was developed only to a limited extent.', 'B) It was totally isolated as a sleepy village.', 'C) It was relatively unknown to the outside.', 'D) It was endowed with rare natural resources.']},
        {num:7, opts:['A) All the properties in Berkton were designed by the same architect.', 'B) The majority of residents lived in harmony with their neighbours.', 'C) The majority of residents enjoyed cosy housing conditions.', 'D) All the houses in Berkton looked aesthetically similar.']},
        {num:8, opts:['A) They have helped boost the local economy.', 'B) They have made the residents unusually proud.', 'C) They have contributed considerably to its popularity.', 'D) They have brought happiness to everyone in the village.']},
        {num:9, opts:['A) They have created the smallest remote-controlled walking robot in the world.', 'B) They are going to publish their research findings in the journal Science Robotics.', 'C) They are the first to build a robot that can bend, crawl, walk, turn and even jump.', 'D) They are engaged in research on a remote-controlled robot which uses special power.']},
        {num:10, opts:['A) It changes its shape by complex hardware.', 'B) It is operated by a special type of tiny motor.', 'C) It moves from one place to another by memory.', 'D) It is powered by the elastic property of its body.']},
        {num:11, opts:['A) Replace humans in exploratory tasks.', 'B) Perform tasks in tightly confined spaces.', 'C) Explore the structure of clogged arteries.', 'D) Assist surgeons in highly complex surgery.']},
        {num:12, opts:['A) She threw up in the bathroom.', 'B) She slept during the entire ride.', 'C) She dozed off for a few minutes.', 'D) She boasted of her marathon race.']},
        {num:13, opts:['A) They are mostly immune to cognitive impairment.', 'B) They can sleep soundly during a rough ride at sea.', 'C) They are genetically determined to need less sleep.', 'D) They constitute about 13 percent of the population.']},
        {num:14, opts:['A) Whether there is a way to reach elite status.', 'B) Whether it is possible to modify one’s genes.', 'C) Whether having a baby impacts one’s passion.', 'D) Whether one can train themselves to sleep less.']},
        {num:15, opts:['A) It is in fact quite possible to nurture a passion for sleep.', 'B) Babies can severely disrupt their parents’ sleep patterns.', 'C) Being forced to rise early differs from being an early bird.', 'D) New parents are forced to jump out of bed at the crack of dawn.']}
      ],
    secC: [
        {num:16, opts:['A) We have poor awareness of how many controversial issues are being debated', 'B) No one knows better than yourself what you are thinking about at the moment.', 'C) No one can change your opinions more than those who speak in a convincing tone.', 'D) We are likely to underestimate how much we can be swayed by a convincing article.']},
        {num:17, opts:['A) Their belief about physical punishment changed.', 'B) Their memory pushed them toward a current belief.', 'C) The memory of their initial belief came back to them.', 'D) Their experiences of physical punishment haunted them.']},
        {num:18, opts:['A) They apparently have little to do with moderate beliefs.', 'B) They don’t reflect the changes of view on physical punishment.', 'C) They may not apply to changes to extreme or deeply held beliefs.', 'D) They are unlikely to alter people’s position without more evidence.']},
        {num:19, opts:['A) American moms have been increasingly inclined to live alone.', 'B) The American population has been on the rise in the past 25 years.', 'C) American motherhood has actually been on the decline.', 'D) The fertility rates in America have in fact been falling sharply.']},
        {num:20, opts:['A) More new mothers tend to take greater care of their children.', 'B) More new mothers are economically able to raise children.', 'C) A larger proportion of women take pride in their children.', 'D) A larger proportion of women really enjoy motherhood.']},
        {num:21, opts:['A) The meaning of motherhood has changed considerably.', 'B) More and more mothers go shopping to treat themselves.', 'C) More mothers have adult children celebrating the holiday.', 'D) The number of American mothers has been growing steadily.']},
        {num:22, opts:['A) Add to indoor toxic pollutants.', 'B) Absorb poisonous chemicals.', 'C) Beautify the home environment.', 'D) Soak up surrounding moisture.']},
        {num:23, opts:['A) NASA did experiments in sealed containers resembling the super insulated offices of 1970s.', 'B) It was based on experiments under conditions unlike those in most homes or offices.', 'C) NASA conducted tests in outer space whose environment is different from ours.', 'D) It drew its conclusion without any contrastive data from other experiments.']},
        {num:24, opts:['A) Natural ventilation proves much more efficient for cleaning the air than houseplants.', 'B) Houseplants disperse chemical compounds more quickly with people moving around.', 'C) Natural ventilation turns out to be most effective with doors and windows wide open.', 'D) Houseplants in a normal environment rarely have any adverse impact on the air.']},
        {num:25, opts:['A) The root cause for misinterpretations of scientific findings.', 'B) The difficulty in understanding what’s actually happening.', 'C) The steps to be taken in arriving at any conclusion with certainty.', 'D) The necessity of continually reexamining and challenging findings.']}
      ],
    answers: {"1":"D", "2":"B", "3":"C", "4":"A", "5":"A", "6":"B", "7":"D", "8":"C", "9":"A", "10":"B", "11":"B", "12":"D", "13":"C", "14":"C", "15":"D", "16":"A", "17":"C", "18":"B", "19":"A", "20":"B", "21":"D", "22":"D", "23":"A", "24":"D", "25":"C"}
  },
  {
    id: 'l2024jun2', year: 2024, period: '6月', set: '第二套',
    audio: 'Audio/cet6_2024_06_2.mp3',
    secA: [
        {num:1, opts:['A) Reply to the man’s last proposal within a short time.', 'B) Sign the agreement if one small change is made to it.', 'C) Make a sponsorship deal for her client at the meeting.', 'D) Give the man some good news regarding the contract.']},
        {num:2, opts:['A) They are becoming impatient.', 'B) They are afraid time is running out.', 'C) They are used to making alterations.', 'D) They are concerned about the details.']},
        {num:3, opts:['A) To prevent geographical discrimination.', 'B) To tap the food and beverage market.', 'C) To avoid any conflict of interest.', 'D) To reduce unfair competition.']},
        {num:4, opts:['A) It is a potential market for food and beverage.', 'B) It is very attractive for real estate developers.', 'C) It is a negligible market for his company.', 'D) It is very different from other markets.']}
      ],
    secB: [
        {num:5, opts:['A) They are thrilled by a rare astronomic phenomenon.', 'B) They are celebrating a big event on mountain tops.', 'C) They are enthusiastic about big science-related stories.', 'D) They are joined by astronomers all across North America.']},
        {num:6, opts:['A) It will be the most formidable of its kind in over a century.', 'B) It will come closest to Earth in more than one hundred years.', 'C) It will eclipse many other such events in human history.', 'D) It will be seen most clearly from Denver’s mountain tops.']},
        {num:7, opts:['A) A blur.', 'B) Stars.', 'C) [missing]', 'D) [missing]']},
        {num:8, opts:['A) Use professional equipment.', 'B) Climb to the nearby heights.', 'C) The edge of our galaxy.', 'D) An ordinary flying object.']},
        {num:9, opts:['A) Whether consumers should be warned against ultra-processed foods.', 'B) Whether there is sufficient scientific consensus on dietary guidelines.', 'C) Whether guidelines can form the basis for nutrition advice to consumers.', 'D) Whether food scientists will agree on the concept of ultra-processed foods.']},
        {num:10, opts:['A) By the labor cost for the final products.', 'B) By the degree of industrial processing.', 'C) By the extent of chemical alteration.', 'D) By the convention of classification.']},
        {num:11, opts:['A) Increased consumers’ expenses.', 'B) Greater risk of chronic diseases.', 'C) People’s misunderstanding of nutrition.', 'D) Children’s dislike for unprocessed foods.']},
        {num:12, opts:['A) They begin to think of the benefits of constraints.', 'B) They try to seek solutions from creative people.', 'C) They try hard to maximize their mental energy.', 'D) They begin to see the world in a different way.']},
        {num:13, opts:['A) It is characteristic of all creative people.', 'B) It is essential to pushing society forward.', 'C) It is a creative person’s response to limitation.', 'D) It is an impetus to socio-economic development.']},
        {num:14, opts:['A) Scarcity or abundance of resources has little impact on people’s creativity.', 'B) Innovative people are not constrained in connecting unrelated concepts.', 'C) People have no incentive to use available resources in new ways.', 'D) Creative people tend to consume more available resources.']},
        {num:15, opts:['A) It is key to a company’s survival.', 'B) It shapes and focuses problems.', 'C) It is essential to meeting challenges.', 'D) It thrives best when constrained.']}
      ],
    secC: [
        {num:16, opts:['A) Because they are learned.', 'B) Because they come naturally.', 'C) Because they have to be properly personalized.', 'D) Because there can be more effective strategies.']},
        {num:17, opts:['A) The extent of difference and of similarity between the two sides.', 'B) The knowledge of the specific expectation the other side holds.', 'C) The importance of one’s goals and of the relationship.', 'D) The approaches one adopts to conflict management.']},
        {num:18, opts:['A) The fox.', 'B) The owl.', 'C) The shark.', 'D) The turtle.']},
        {num:19, opts:['A) Help save species from extinction and boost human health.', 'B) Understand how plants and animals perished over the past.', 'C) Help gather information publicly available to researchers.', 'D) Find out the cause of extinction of Britain’s 66,000 species.']},
        {num:20, opts:['A) It was once dominated by dinosaurs.', 'B) It has entered the sixth mass extinction.', 'C) Its prospects depend on future human behaviour.', 'D) Its climate change is aggravated by humans.']},
        {num:21, opts:['A) It dwarfs all other efforts to conserve, protect and restore biodiversity on earth.', 'B) It is costly to get started and requires the joint efforts of thousands of scientists.', 'C) It can help to bring back the large numbers of plants and animals that have gone extinct.', 'D) It is the most exciting, most relevant, most timely and most internationally inspirational.']},
        {num:22, opts:['A) Cultural identity.', 'B) Social evolution.', 'C) The Copernican revolution.', 'D) Human individuality.']},
        {num:23, opts:['A) It is a delusion to be disposed of.', 'B) It is prevalent even among academics.', 'C) It is a myth spread by John Donne’s poem.', 'D) It is rooted in the mindset of the 17th century.']},
        {num:24, opts:['A) He believes in Copernican philosophical doctrines about the universe.', 'B) He has gained ample scientific evidence at the University of Reading.', 'C) He has found that our inner self and material self are interconnected.', 'D) He contends most of our body cells can only live a few days or weeks.']},
        {num:25, opts:['A) By coming to see how disruptive such problems have got to be.', 'B) By realising that we all can do our own bit in such endeavours.', 'C) By becoming aware that we are part of a bigger world.', 'D) By making joint efforts resolutely and persistently.']}
      ],
    answers: {"1":"D", "2":"C", "3":"A", "4":"B", "5":"D", "6":"C", "7":"D", "8":"A", "9":"A", "10":"D", "11":"B", "12":"B", "13":"C", "14":"D", "15":"C", "16":"D", "17":"A", "18":"C", "19":"C", "20":"B", "21":"C", "22":"B", "23":"B", "24":"A", "25":"D"}
  },
  {
    id: 'l2024jun3', year: 2024, period: '6月', set: '第三套',
    audio: 'Audio/cet6_2024_06_2.mp3',
    secA: [
        
      ],
    secB: [
        
      ],
    secC: [
        
      ],
    answers: {"1":"D", "2":"C", "3":"A", "4":"B", "5":"D", "6":"C", "7":"D", "8":"A", "9":"A", "10":"D", "11":"B", "12":"B", "13":"C", "14":"D", "15":"C", "16":"D", "17":"A", "18":"C", "19":"C", "20":"B", "21":"C", "22":"B", "23":"B", "24":"A", "25":"D"}
  },
  {
    id: 'l2023dec1', year: 2023, period: '12月', set: '第一套',
    audio: 'Audio/cet6_2023_12_1.mp3',
    secA: [
        {num:1, opts:['A) It is clear that he is expected to enjoy a healthy life.', 'B) There is nothing wrong with his digestive system.', 'C) There is some indication of an issue with his blood circulation.', 'D) He doesn’t know he has long been suffering from poor health.']},
        {num:2, opts:['A) Mistaking symptoms of illness for stress.', 'B) Complaining they are being overworked.', 'C) Being unaware of the stress they are under.', 'D) Suffering from illness without recognising it.']},
        {num:3, opts:['A) Prescribe some medication for him.', 'B) Give him another physical check-up.', 'C) Explain to him the common consequence of stress.', 'D) Buy some sleeping pills for him from the drugstore.']},
        {num:4, opts:['A) It calls for responsible management.', 'B) It proves to be quite profitable.', 'C) It is remarkably promising.', 'D) It is full of competition.']}
      ],
    secB: [
        {num:5, opts:['A) To avoid being in the limelight.', 'B) To seek medical help for his injury.', 'C) To pursue a less competitive career.', 'D) To stay away from his hostile teammates.']},
        {num:6, opts:['A) It has ups and downs.', 'B) It proves rewarding.', 'C) [missing]', 'D) [missing]']},
        {num:7, opts:['A) He was a financial advisor.', 'B) He suffered from poor health.', 'C) [missing]', 'D) [missing]']},
        {num:8, opts:['A) Study issues of public health.', 'B) Alleviate the obesity problem', 'C) It does not last long.', 'D) It is not so profitable.']},
        {num:9, opts:['A) When she started teaching at Edinburgh University in Scotland.', 'B) While she was doing her doctoral studies on American Literature.', 'C) After publishing her first novel Behind the Scenes at the Museum.', 'D) After winning the 1986 Woman’s Own Short Story Competition.']},
        {num:10, opts:['A) The themes of love and loss.', 'B) The code of human behaviour.', 'C) The sins and flaws of eccentrics.', 'D) The manners of fashionable circles.']},
        {num:11, opts:['A) They are usually ignorant of complex human relations.', 'B) They successfully imitate the manners of celebrities.', 'C) They often get rewarded instead of being punished.', 'D) They are generally looked down upon in society.']},
        {num:12, opts:['A) It is what members use to alleviate tension in a team.', 'B) It is what employers are increasing seeking after.', 'C) It is conducive to getting over a recession.', 'D) It is necessary for learning a new task.']},
        {num:13, opts:['A) Make better choices.', 'B) Follow innovative ideas.', 'C) Achieve recognition duly.', 'D) Accumulate work experience.']},
        {num:14, opts:['A) Workers show more emotional intelligence.', 'B) Workers use brains more than muscles.', 'C) People usually work flexible hours.', 'D) People often work in teams.']},
        {num:15, opts:['A) Leave the group as soon as possible.', 'B) Anticipate setbacks well in advance.', 'C) Decide on new priorities speedily.', 'D) Stick to original goals confidently.']}
      ],
    secC: [
        {num:16, opts:['A) What differentiates people from animals.', 'B) Why philosophers disagree with scientists.', 'C) Where humans’ great cognitive capacity originates.', 'D) When being creative becomes a biological mandate.']},
        {num:17, opts:['A) It is what tells apart two adjacent generations.', 'B) It is what sharpens our appetite for novelty.', 'C) It is something only geniuses can achieve.', 'D) It is something every human being can do.']},
        {num:18, opts:['A) It seeks inspiration for novel inventions.', 'B) It constantly absorbs new information.', 'C) It uses existing ideas to create new ones.', 'D) It repeats precedent on a regular basis.']},
        {num:19, opts:['A) Dogs know when their owners are not feeling well.', 'B) Dogs have the cognition for telling right from wrong.', 'C) Dogs have an aptitude for developing skills to interact with humans.', 'D) Dogs know when their human companions can no longer stand them.']},
        {num:20, opts:['A) They can readily detect different ill smells of viruses.', 'B) They can easily tell what bacteria cause odor change.', 'C) They are particularly sensitive to strange smells.', 'D) They have an extremely powerful sense of smell.']},
        {num:21, opts:['A) It can ensure owners suffer fewer chronic diseases.', 'B) It can benefit owners both physically and mentally.', 'C) It can reduce owners’ risk of getting cancer or diabetes.', 'D) It can alert owners to the seriousness of their conditions.']},
        {num:22, opts:['A) Crack down on courses like science, technology, engineering and math.', 'B) Restrict the ability of creative arts courses to recruit new students.', 'C) Look at how to reform technical and vocational education.', 'D) Ensure creative arts students get better value for money.']},
        {num:23, opts:['A) Seemingly reasonable.', 'B) Clearly well-grounded.', 'C) Extremely irrational.', 'D) Apparently simplistic.']},
        {num:24, opts:['A) A high proportion of them haven’t tried to save money.', 'B) Most of them never hope to buy a house or to retire.', 'C) Forty percent of them earn less than £25,000 a year.', 'D) The majority of them have fairly well-paying jobs.']},
        {num:25, opts:['A) The context of a bank balance.', 'B) Britain’s economy as a whole.', 'C) The specific degree a student earns.', 'D) Britain’s defective educational system.']}
      ],
    answers: {"1":"B", "2":"C", "3":"A", "4":"D", "5":"D", "6":"C", "7":"D", "8":"B", "9":"D", "10":"A", "11":"C", "12":"B", "13":"A", "14":"D", "15":"C", "16":"A", "17":"B", "18":"B", "19":"C", "20":"B", "21":"D", "22":"A", "23":"D", "24":"C", "25":"C"}
  },
  {
    id: 'l2023dec2', year: 2023, period: '12月', set: '第二套',
    audio: 'Audio/cet6_2023_12_2.mp3',
    secA: [
        {num:1, opts:['A) Spending their holidays in a novel way.', 'B) Exploring more summer holiday resorts.', 'C) Surfing online to check out the best deals.', 'D) Renting a car instead of driving their own.']},
        {num:2, opts:['A) He did not like to be locked into one place.', 'B) He did not find holiday homes appealing.', 'C) He was well travelled.', 'D) He once owned a van.']},
        {num:3, opts:['A) Generate their own electricity.', 'B) Drive under any weather condition.', 'C) Receive instructions via computers.', 'D) Ensure the safety of passengers.']},
        {num:4, opts:['A) Riding one’s mountain bike on vacation.', 'B) Slowing down in one’s increasingly hectic life', 'C) Enjoying the freedom to choose where to go and work.', 'D) Having one’s basic needs covered while away from home.']}
      ],
    secB: [
        {num:5, opts:['A) Her physical health has deteriorated these past few weeks.', 'B) She has lagged behind most of her co-workers in output.', 'C) Her job performance has worsened over the past month.', 'D) She has missed several important appointments lately.']},
        {num:6, opts:['A) Penalty for curtailed output.', 'B) Some problems at home.', 'C) Disturbance of her mind.', 'D) Serious health issues.']},
        {num:7, opts:['A) The woman’s whole- hearted support.', 'B) The woman’s work proficiency.', 'C) His management capability.', 'D) His engaging personality.']},
        {num:8, opts:['A) The man will help the woman get back to her usual self.', 'B) The man will be back at his 100% in a couple of weeks.', 'C) The woman will be off work on the next two Mondays.', 'D) The woman will resume her work in two weeks.']},
        {num:9, opts:['A) It can have an impact on our moods and emotions.', 'B) It can improve our financial status significantly.', 'C) It can help us achieve better work performance.', 'D) It can enable us to live a healthier and longer life.']},
        {num:10, opts:['A) One’s health tends to differ before and after marriage.', 'B) The spouse’s level of education can impact one’s health.', 'C) The wealthier one’s spouse is, the healthier one becomes.', 'D) One’s health status is related to one’s social background.']},
        {num:11, opts:['A) They had more education than their spouses.', 'B) They had much in common with their spouses.', 'C) They benefited a lot from their career achievements.', 'D) They showed interest in their spouses’ occupations.']},
        {num:12, opts:['A) Finding out the changing climate patterns.', 'B) Identifying the cities’ geological features.', 'C) Forecasting flood risks accurately.', 'D) Eliminating their root cause.']},
        {num:13, opts:['A) To validate his hypothesis about the gravity of floods.', 'B) To determine the frequency of high tides causing floods.', 'C) To see the feasibility of his project on flooding.', 'D) To improve his mathematical flooding model.']},
        {num:14, opts:['A) To forecast rapid floods in real time.', 'B) To classify the flooding data processed.', 'C) To study the consequences of high tides on flooded areas.', 'D) To teach local citizens how to collect data of incoming floods.']},
        {num:15, opts:['A) They tracked the rising tides with video-cameras.', 'B) They set up Internet-connected water-level sensors.', 'C) They used newly-developed supercomputing facilities.', 'D) They observed the direction of water flow on the spot.']}
      ],
    secC: [
        {num:16, opts:['A) To debate the validity of current survey data.', 'B) To argue about the value of a college degree.', 'C) To account for the drastic decline in employment among men.', 'D) To compare men without college degrees with those who have.']},
        {num:17, opts:['A) The issue of changing job requirements.', 'B) The increase in women taking up jobs.', 'C) The impact of inflation.', 'D) The factor of wages.']},
        {num:18, opts:['A) The sharp decline in marriage among men with no college degrees.', 'B) The wage gap between those with college degrees and those without.', 'C) More jobs requiring their holders to have a college degree nowadays.', 'D) Men’s unwillingness to accept low wages in times of growing inflation.']},
        {num:19, opts:['A) More and more people attach importance to protecting endangered animals.', 'B) An increasing number of people demand to free animals being kept in cages.', 'C) More and more people prioritize animal welfare when buying things to wear.', 'D) An increasing number of people follow the latest trend of becoming vegetarians']},
        {num:20, opts:['A) Utilized a silk substitute made from mushrooms.', 'B) Refrained from using chemicals in their products.', 'C) Labelled all their products as vegan.', 'D) Avoided the use of leather and fur.']},
        {num:21, opts:['A) Whether they can be regarded as ethical.', 'B) Whether they can be considered sustainable.', 'C) Whether they actually signify a substantial change.', 'D) Whether they effectively protect animals at large.']},
        {num:22, opts:['A) The belief is less prevalent that the world is going to hell.', 'B) The environmental welfare has worsened in the world.', 'C) The world has seen more violence in recent years.', 'D) The era we live in is the most peaceful in history.']},
        {num:23, opts:['A) They did not wish to live in the previous century.', 'B) They were convinced by the statistics presented to them.', 'C) They believed the world was deteriorating.', 'D) They were actually not in their right mind.']},
        {num:24, opts:['A) Our ancestors’ influence.', 'B) Our psychological biases.', 'C) The current state of affairs.', 'D) The subjectivity of mass media.']},
        {num:25, opts:['A) Paying attention to negative information.', 'B) Calculating dangerous risks to our survival.', 'C) Vacuuming up depressing or enraging stories.', 'D) Spreading exciting news around us far and wide.']}
      ],
    answers: {"1":"D", "2":"A", "3":"C", "4":"B", "5":"A", "6":"A", "7":"B", "8":"C", "9":"B", "10":"D", "11":"C", "12":"A", "13":"B", "14":"D", "15":"A", "16":"A", "17":"B", "18":"D", "19":"B", "20":"A", "21":"C", "22":"D", "23":"B", "24":"A", "25":"A"}
  },
  {
    id: 'l2023dec3', year: 2023, period: '12月', set: '第三套',
    audio: 'Audio/cet6_2023_12_2.mp3',
    secA: [
        
      ],
    secB: [
        
      ],
    secC: [
        
      ],
    answers: {"1":"D", "2":"A", "3":"C", "4":"C", "5":"D", "6":"A", "7":"B", "8":"D", "9":"D", "10":"B", "11":"A", "12":"A", "13":"D", "14":"D", "15":"B", "16":"D", "17":"B", "18":"B", "19":"C", "20":"D", "21":"C", "22":"C", "23":"A", "24":"D", "25":"A"}
  },
  {
    id: 'l2023jun1', year: 2023, period: '6月', set: '第一套',
    audio: 'Audio/cet6_2023_06_1.mp3',
    secA: [
        {num:1, opts:['A) It was spacious and tranquil.', 'B) It was warm and comfortable.', 'C) It was shabby and solitary.', 'D) It was tiny and noisy.']},
        {num:2, opts:['A) She no longer hates people talking loudly in the dorm.', 'B) She misses her roommates she used to complain about.', 'C) She begins to enjoy the movies she once found irritating.', 'D) She finds the crowded dorm as cozy as her new apartment.']},
        {num:3, opts:['A) He found the apartment perfectly furnished.', 'B) He had a feeling of despair and frustration.', 'C) He had a similar feeling to the woman’s.', 'D) He felt the new place was like paradise.']},
        {num:4, opts:['A) Go to see the woman’s apartment.', 'B) Make a phone call to his parents.', 'C) Buy some furniture for the woman.', 'D) Decorate the woman’s apartment.']}
      ],
    secB: [
        {num:5, opts:['A) He works as a literary critic.', 'B) He hosts an educational program.', 'C) He has initiated a university reform.', 'D) He has published a book recently.']},
        {num:6, opts:['A) It fails to keep up with the radical changes of society.', 'B) It fails to ensure universities get sufficient resources.', 'C) It has not prepared young people for the job market.', 'D) It has not fostered the growth of the arts disciplines.']},
        {num:7, opts:['A) More of the budget should go to science and technology.', 'B) The underfunded music discipline should be prioritized.', 'C) Subdisciplines like sculpture should get more funding.', 'D) Literature should get as much funding as engineering.']},
        {num:8, opts:['A) Build a prosperous nation.', 'B) Make skilled professionals.', 'C) Create ingenious artists.', 'D) Cultivate better citizens.']},
        {num:9, opts:['A) It is quite common.', 'B) It is rarely noticed.', 'C) [missing]', 'D) [missing]']},
        {num:10, opts:['A) Seeing things in black and white.', 'B) Engaging in regular contemplation.', 'C) Having a special understanding of creativity.', 'D) Knowing how to make their mental batteries work.']},
        {num:11, opts:['A) Engaging in intense activity.', 'B) Fantasizing in one’s down time.', 'C) Working on a particular project.', 'D) Reflecting during one’s relaxation.']},
        {num:12, opts:['A) Farmers helped Native Americans grow crops.', 'B) There were expansive university campuses.', 'C) There existed post offices.', 'D) Migrants found gold there.']},
        {num:13, opts:['A) It helped to boost the economy in the American West.', 'B) It provided job opportunities for many gold seekers.', 'C) It extended the influence of the federal government.', 'D) It kept people in the deserts and plains connected.']},
        {num:14, opts:['A) It employed Native Americans to work as postmen.', 'B) It commissioned private wagons to carry the mail.', 'C) It subsidized the locals who acted as postmasters.', 'D) It centralized postal services in its remote areas.']},
        {num:15, opts:['A) He analyzed interactive maps of mail routes.', 'B) He read a large collection of books on the topic.', 'C) He examined its historical trends with data science.', 'D) He collected data about its impact on local business.']}
      ],
    secC: [
        {num:16, opts:['A) Higher levels of anxiety may improve people’s memory.', 'B) Some experiences are easier to remember than others.', 'C) Most people tend to remember things selectively.', 'D) Simple thing may leave a deep impression on one’s memory.']},
        {num:17, opts:['A) They classified the participants’ mindset.', 'B) They showed some photos to the participants.', 'C) They measured the participants’ anxiety levels.', 'D) They tested the size of the participants’ vocabulary.']},
        {num:18, opts:['A) Anxiety has become a serious problem for an increasing number of people.', 'B) Extreme levels of anxiety can adversely affect cognitive performance.', 'C) People diagnosed with anxiety disorder may forget things selectively.', 'D) There is no direct correlation between memory and levels of anxiety.']},
        {num:19, opts:['A) They compare products from different companies before making a choice.', 'B) They get information from other consumers’ postings and comments.', 'C) They lose patience when their phone call is not promptly answered.', 'D) They expect to get instantaneous responses to their inquiry.']},
        {num:20, opts:['A) Giving them rewards on the spot.', 'B) Broadening their scope of interest.', 'C) Speaking directly to their emotions.', 'D) Focusing on the details of the product.']},
        {num:21, opts:['A) Change the rules of the game in the market every year.', 'B) Keep up with the latest technological developments.', 'C) Learn from technological innovators to do business.', 'D) Make greater efforts to build up consumers’ confidence.']},
        {num:22, opts:['A) People have only one social engagement per week.', 'B) Working together enhances friendship.', 'C) Few people have devoted friends.', 'D) Friendships benefit work.']},
        {num:23, opts:['A) The impact of friends on people’s self-esteem.', 'B) How supportive friends can be in the workplace.', 'C) How to boost one’s sense of value and worthiness.', 'D) The role of family ties in people’s mental well-being.']},
        {num:24, opts:['A) They show little interest in their friends’ work.', 'B) They tend to be much more difficult to make.', 'C) They are more trustworthy and reliable.', 'D) They increase people’s job satisfaction.']},
        {num:25, opts:['A) Allow employees to have a flexible work schedule.', 'B) Encourage employees to be friends with colleagues.', 'C) Help employees balance work and family responsibilities.', 'D) Organize activities to nourish friendships outside of work.']}
      ],
    answers: {"1":"B", "2":"B", "3":"C", "4":"A", "5":"D", "6":"C", "7":"A", "8":"D", "9":"A", "10":"B", "11":"D", "12":"C", "13":"D", "14":"B", "15":"C", "16":"A", "17":"C", "18":"B", "19":"D", "20":"C", "21":"B", "22":"D", "23":"A", "24":"D", "25":"A"}
  },
  {
    id: 'l2023jun2', year: 2023, period: '6月', set: '第二套',
    audio: 'Audio/cet6_2023_06_2.mp3',
    secA: [
        {num:1, opts:['A) She is attracted to the beauty of modern buildings.', 'B) She is preoccupied with her dream to be an architect.', 'C) She is influenced by her father who teaches architecture.', 'D) She is drawn to its integration of design and engineering.']},
        {num:2, opts:['A) Through hard work.', 'B) With the professor’s help.', 'C) [missing]', 'D) [missing]']},
        {num:3, opts:['A) It is groundbreaking.', 'B) It is long-lasting.', 'C) [missing]', 'D) [missing]']},
        {num:4, opts:['A) Economics.', 'B) Philosophy.', 'C) By studying the subject online.', 'D) By taking prerequisite courses.']}
      ],
    secB: [
        {num:5, opts:['A) He has occasionally been harassed by his fans.', 'B) He has been guarded by a discreet assistant.', 'C) He is well known to the public.', 'D) He is a famous football coach.']},
        {num:6, opts:['A) Serve as a personal assistant.', 'B) Play a key role in Real Madrid.', 'C) Run common daily chores for the woman.', 'D) Help promote Mr. Sanchez’s public profile.']},
        {num:7, opts:['A) He is honest and always tells the truth.', 'B) He once worked part-time in university.', 'C) He cares little about his working hours.', 'D) He has little previous work experience.']},
        {num:8, opts:['A) He has a strong ability to connect with people.', 'B) He has a high proficiency in several languages.', 'C) He has a sound knowledge of sports consultancy.', 'D) He has a natural capacity to cooperate with others.']},
        {num:9, opts:['A) They bring more benefits to young people', 'B) They require less supervision and training.', 'C) They are more suitable to young people.', 'D) They have fewer rules and pressures.']},
        {num:10, opts:['A) They prevent kids from enjoying adventure sports.', 'B) They help kids guard against any possible injuries.', 'C) They rob kids of the chance to cultivate their courage', 'D) They deprive kids of the opportunity to develop team spirit.']},
        {num:11, opts:['A) Help them take up these sports when they are more mature.', 'B) Let them participate in some less risky outdoor activities.', 'C) Ask them to try some forms of indoor sports.', 'D) Introduce them to these sports step by step.']},
        {num:12, opts:['A) Consumers often have a craving for the latest model.', 'B) Such products tend to comprise parts that are irreplaceable.', 'C) Tech firms intentionally design products to have short lifespans.', 'D) Manufacturers use effective strategies to promote fancier products.']},
        {num:13, opts:['A) Indicate the competitiveness of their products.', 'B) List a repairability score of their products.', 'C) Specify the major parts of their products.', 'D) Detail the life cycle of their products.']},
        {num:14, opts:['A) Take the initiative to reduce electronic waste.', 'B) Take due caution in upgrading their products.', 'C) Invest in constructing more recycling facilities.', 'D) Substitute all toxic substances with non-toxic ones.']},
        {num:15, opts:['A) It can be solved.', 'B) It is certain to worsen.', 'C) It will be fixed by tech companies.', 'D) It is unavoidable in the long run.']}
      ],
    secC: [
        {num:16, opts:['A) How internet monitoring can be implemented.', 'B) How to encourage productive internet surfing.', 'C) How cyberloafing affects overall productivity.', 'D) How to prevent employees from cyberloafing.']},
        {num:17, opts:['A) Cyberloafing is a sign of workers’ laziness.', 'B) Cyberloafing may relieve employees of stress.', 'C) Employee engagement is closely related to job satisfaction.', 'D) Overuse of social media may lead to decline in productivity.']},
        {num:18, opts:['A) Taking mini-breaks means better job performance.', 'B) Cyberloafing generally does more harm than good.', 'C) Worker turnover is linked to the time allowed for cyberloafing.', 'D) Employees who indulge in internet surfing are most likely to quit.']},
        {num:19, opts:['A) There were no wooden buildings.', 'B) There were environmental problems.', 'C) There were no trees.', 'D) There were few settlers.']},
        {num:20, opts:['A) He served as chairman of the Nebraska State Board of Agriculture.', 'B) He urged the state to start the Nebraska State Gardening Society.', 'C) He engaged himself in a large number of aesthetic projects.', 'D) He founded a newspaper and used it to promote his ideas.']},
        {num:21, opts:['A) A special prize was awarded to Julius Morton.', 'B) One million trees were planted throughout Nebraska.', 'C) The state government declared it the official Arbor Day.', 'D) Nebraska earned the nickname “the Tree Planters State”.']},
        {num:22, opts:['A) They spread across Europe and Asia in a few decades.', 'B) They lived mostly in Africa for about 200,000 years.', 'C) They preferred to live in Europe rather than in Asia.', 'D) They moved out of Africa about 60,000 years ago.']},
        {num:23, opts:['A) The discovery of two modern human teeth in China.', 'B) The traces of human migration out of Africa to Asia.', 'C) The human fossils discovered most recently in Africa.', 'D) The Luna cave in Guangxi Zhuang Autonomous Region.']},
        {num:24, opts:['A) There must have been some reason for human migration.', 'B) There have been changes in animals’ living conditions.', 'C) Humans adapted themselves to the environment there.', 'D) Humans had access to abundant food sources there.']},
        {num:25, opts:['A) How humans settled down on the Arabian Peninsula.', 'B) When modern humans started to disperse out of Africa.', 'C) What path modern humans took to migrate out of Africa.', 'D) Why fresh water is so important for human survival.']}
      ],
    answers: {"1":"D", "2":"A", "3":"C", "4":"B", "5":"D", "6":"C", "7":"D", "8":"A", "9":"A", "10":"B", "11":"C", "12":"A", "13":"B", "14":"D", "15":"C", "16":"D", "17":"A", "18":"C", "19":"C", "20":"B", "21":"C", "22":"B", "23":"B", "24":"A", "25":"D"}
  },
  {
    id: 'l2023jun3', year: 2023, period: '6月', set: '第三套',
    audio: 'Audio/cet6_2023_06_2.mp3',
    secA: [
        
      ],
    secB: [
        
      ],
    secC: [
        
      ],
    answers: {"1":"D", "2":"A", "3":"C", "4":"B", "5":"D", "6":"C", "7":"D", "8":"A", "9":"A", "10":"B", "11":"C", "12":"A", "13":"B", "14":"D", "15":"C", "16":"D", "17":"A", "18":"C", "19":"C", "20":"B", "21":"C", "22":"B", "23":"B", "24":"A", "25":"D"}
  }
];
