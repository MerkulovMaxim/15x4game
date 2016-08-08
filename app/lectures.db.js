

var lectures = {};

// ruby -e '(1..60).each { |i| puts "new Lecture(\"#{i}\", \"#{i}\"),\n" }'

lectures.offered = [];

lectures.db = [
    new Lecture("Ася Казанцева", "15 минут про никотин и 15 минут про алкоголь", "Табачный куст вырабатывает никотин для того, чтобы сделать гадость насекомым. Как так получилось, что вещество-инсектицид одновременно оказалось наркотиком? Большое преимущество алкоголя перед никотином - меньшая вероятность развития физической зависимости. Но если вы в нее все же вляпались - то лучше бы уж вы курили! Я расскажу конкретные признаки, которые позволяют вовремя заподозрить, что у вас сформировались не совсем здоровые отношения с алкоголем или никотином", "https://www.youtube.com/watch?v=sI5d5lBwn8c"),
    new Lecture("Александр Гапак", "15 минут про Искусственный Интеллект","Что такое Искусственный Интеллект, каких он бывает видов, как устроен внутри? Будут ли у него чувства и эмоции, захватит ли он человечество или будет нам верным помощником?", "https://www.youtube.com/watch?v=JW78WYT8HU4"),
    new Lecture("Александр Гапак", "15 минут про корабли EVE Online", "Благодаря усилиям инженеров четырех рас и шести независимых фракций, верфи Нового Эдема выпускают более 300 различных корпусов кораблей, разбитых на более чем 30 разных классов. В своей лекции я расскажу, какие корабли вы встретите, выйдя из дока.", "https://www.youtube.com/watch?v=dO5gVvSiW30"),
    new Lecture("Таня Бушенева", "15 минут про ловушки психики", "Наша психика иногда поступает с нами очень подло и совсем не способствует нашему выживанию, успеху и счастью. Может, понимания, что мы иногда ведем себя не умнее, чем голуби, будет достаточно, чтобы выбраться из ловушки?","https://www.youtube.com/watch?v=Pru7mZz4W4E"),
    new Lecture("Богдан Колчигин", "15 минут о теории хаоса", "Hазвание будоражит фантазию, но попытки близкого знакомства часто упираются в суровую математику и странную терминологию. Попробуем с безопасного расстояния разобраться, чем занимается теория хаоса и почему её не любят синоптики (но должны полюбить мы).", "https://www.youtube.com/watch?v=yyu-cKn25SI"),
    new Lecture("Александр Гапак", "15 минут про 15х4", "15х4 — это сообщество молодых ученых и фанатов науки. Мы хотим, чтобы люди выступали и делились знаниями. Наша цель — создать крупное движение популяризато", "https://www.youtube.com/watch?v=MR4a1v8qVa4"),
    new Lecture("Александр Гапак", "15 минут о теории относительности", "Теория относительности - один из величайших прорывов физики, изменивший наше понимание вселенной. Вместе с тем, она изящна и доступна даже для детей. На множестве примеров я расскажу об искривлении времени при движении с околосветовой скоростью.", "https://www.youtube.com/watch?v=Ls9fKgdm18k"),
    new Lecture("Богдан Колчигин", "15 минут про самосознание", "Кто смотрит вашими глазами, озвучивает ваши мысли, слушает ваш внутренний диалог? Кто такой \"я\", есть ли у него своё мнение, где он находится и как он там оказался? На всё это у современной нейрофизиологии есть свой вариант ответа, и с ним стоит ознакомиться, потому что он касается вас самым непосредственным образом", "https://www.youtube.com/watch?v=oMqOEllecYg"),
    new Lecture("Александр Гапак", "15 минут об устройстве силы воли", "Я хочу поговорить о силе воли, о нашем механизме достижения целей. Можем ли мы управлять своими желаниями? Полезно ли ругать себя? Как страх и усталость влияют на наши решения?", "https://www.youtube.com/watch?v=uMhgsd4QXZQ"),
    new Lecture("Алиса Власенко", "15 минут о вреде ЗОЖ-1", "Это первая часть лекции о заблуждениях насчет здорового образа жизни: о том, почему детокс не работает, но все равно может улучшить ваше самочувствие, и почему он может быть вреден для вас и действительно опасен для вашей бабушки; о диетах для здоровых и больных и о шлаках.", "https://www.youtube.com/watch?v=AYsvzox92RI"),
    new Lecture("Александр Коляда", "15 минут о биологии гомосексуальности", "Что мы знаем о гомосексуальности в природе? Есть ли гены гомосексуальности и можно ли ее смоделировать на животных? Я расскажу об этом и о современных научных взглядах на причины и эволюционное значение этого явления.", "https://www.youtube.com/watch?v=TyUqxYVMR90"),
    new Lecture("София Зимницкая", "15 минут про изучение языков", "Изучение языка не сводится к скучному заучиванию слов и грамматики. Приходите, и мы поговорим о том, почему любимый сериал — лучший помощник в изучении языка и как за полгода сделать то, что раньше растягивалось на несколько лет.","https://www.youtube.com/watch?v=gGBOTszgW-Y"),
    new Lecture("Ульяна Громова", "15 минут про мозг и музыку", "Как работает наш мозг во время обучения? Что происходит, когда мы осваиваем новый музыкальный инструмент, учимся рисовать или изучаем новый язык? Что происходит с нашим мозгом, когда мы перестаем учиться, и почему так важно учиться новому, даже если вам 80 лет?", "https://www.youtube.com/watch?v=F2arDtUpx_M"),
    new Lecture("Анастасия Кондратьева", "15 минут об Игре Престолов", "Речь пойдет о проекте, который перевернул мир фэнтези и изменил правила игры. Нет сил ждать продолжения Игры престолов? Хочешь узнать, что замыслил автор книг?", "https://www.youtube.com/watch?v=pNGYp6gf6FI"),
    new Lecture("Борис Мороз", "15 минут про японские цифры", "Японская система записи цифр не похожа на нашу не только внешне, но и функционально. Например, каждая цифра имеет минимум два (или более) чтения для разных случаев употребления, а известные нам цифры разбиваются на непривычные составляющие. Эта лекция коротко рассказывает о происхождении и общем функционировании японских цифр.", "https://www.youtube.com/watch?v=lAlvjb5Gd-E"),
    new Lecture("Ульяна Громова", "15 минут про говорящих обезьян", "Обезьяны владеют речью, хотя не умеют произносить слова вслух. Я расскажу про эксперименты с гориллами, шимпанзе, бонобо и орангутанами, жестовый язык Амслен, лексиграммы Йеркиш, другие способы общения с приматами и то, чем отличается речь приматов от человеческой.","https://www.youtube.com/watch?v=0e9maNd9AdE"),
    new Lecture("Анна Дорошенко", "15 минут про графен", "Графен – самый тонкий материал, полученный учеными. Он обладает необычными свойствами и в перспективе может заменить собой кремниевую электронику. Я расскажу про свойства графена и про элементы электроники, которые уже сейчас созданы на его основе", "https://www.youtube.com/watch?v=diMFwhJld7w"),
    new Lecture("Борис Мороз", "15 минут о My little pony", "Чем считать сериал и культурный феномен My Little Pony — религией, общественным движением или троллингом? Я расскажу о том, как разноцветные лошади могут влиять на массовую культуру и вашу жизнь.", "https://www.youtube.com/watch?v=qyK68YjjRCA"),
    new Lecture("Александр Гапак", "15 минут о мировой истории", "Историю обычно изучают кусками: история той-то страны такого-то периода. Я хочу целостно рассказать про события последних 50 000 лет: расселение людей по планете, неолитическая революция, первые цивилизации, фасоль, античность, средневековье, новое время.", "https://www.youtube.com/watch?v=sgx_KauWoxQ"),
    new Lecture("Александр Семченков", "15 минут про трансгуманизм", "Трансгуманизм — это уверенность в технологическом бессмертии. Это подготовка к будущему, в котором мы победим смерть. Сегодня многие технологические дороги стекаются в одну широкую магистраль. Я расскажу о том, откуда эти дороги берут начало и куда нас ведет эта магистраль.", "https://www.youtube.com/watch?v=GYhNhRGhfm4"),
    new Lecture("Татьяна Бушенев", "15 минут про Большой адронный коллайдер", "Хотите узнать больше о самой огромной и сложной машине, построенной людьми? Я побывала на БАКе, привезла оттуда уникальные фото и интересные факты, и теперь хочу поделиться этим с вами. А еще я хочу рассказать, что хорошего и полезного Большой адронный коллайдер дал всем нам.", "https://www.youtube.com/watch?v=z3aV5TdYYb8"),
    new Lecture("Мария Кошевая", "15 минут про глютен", "Глютен — вредное вещество или пищевой миф? Для кого соблюдать \"глютен-фри\" диету — жизненная необходимость, а для кого — модная причуда? Я расскажу, в каких продуктах содержится глютен, стоит ли его избегать и какие мифы связаны с этим веществом.", "https://www.youtube.com/watch?v=8U8DpENsaaU"),
    new Lecture("Александр Гапак", "15 минут о еде", "Вредная еда убила больше людей, чем ДТП, ВИЧ, рак и вирусные заболевания вместе взятые. Я хочу поговорить о причинах неправильного питания современных людей. Изменив свой рацион, мы можем прожить на 30 лет дольше.", "https://www.youtube.com/watch?v=MfWA5yTB-o4"),
    new Lecture("Мирослава Мирошник", "15 минут про самооценку", "Что такое самооценка, для чего она, как формируется. И какая она должна быть, почему позитивные самоутверждения не работают, и как можно оптимизировать ее уровень. Почему важно признавать свои ошибки, и решится задавать вопросы.", "https://www.youtube.com/watch?v=6lxqIvq8PEY"),
    new Lecture("Иван Магда", "15 минут про биотехнологии", "Биотехнология — одна из молодых и развивающихся наук, и, несмотря на это, она достигла большого научного и прикладного прогресса. Это привело к формированию множества споров и вопросов, за и против. Доклад посвящён тому, чем биотехнологи занимаются в повседневной работе и как всё выглядит в действительности.", "https://www.youtube.com/watch?v=xlyajYDRU3Ahttps://www.youtube.com/watch?v=xlyajYDRU3A"),
    new Lecture("Мариам Найем", "15 минут о порнографии", "Я расскажу о порнографии как о культурном феномене. Как давно она уже есть? Меняет ли отношение к сексу? Позитивное или негативное воздействие оказывает на зрителя? Никакого ханжества не будет.", "https://www.youtube.com/watch?v=tMGfWBvAPS4"),
    new Lecture("Александра Бойко", "15 минут про ВИЧ-диссидентство", "Я расскажу о том, что же это за явление — ВИЧ-диссидентство, почему оно возникло и какие ужасные последствия за собой влечет. Также мы поговорим чуть-чуть о СПИДе, немного о толерантности и капельку об ненависти.", "https://www.youtube.com/watch?v=x1FLMxDcJto"),
    new Lecture("Лия Савельева", "15 минут про боль", "Я объясню механизм образования боли, почему она ощущается и зачем существует. Мы рассмотрим прохождение болевого сигнала от рецептора до мозга и компоненты боли. Что такое ноцицепция, чем она отличается от боли и в чем она является тем же самым?", "https://www.youtube.com/watch?v=0UQgyDAaols"),
    new Lecture("Юрий Гошовский", "15 минут про происхождение человека", "Я расскажу о последних двух миллионах лет — о запутанной истории становления рода Homo. Сколько существовало видов людей, где они были, сколько одновременно было разных видов, куда делись другие и зачем палеоантропологам сидеть на диете?", "https://www.youtube.com/watch?v=vh1h6dZmFc8"),
    new Lecture("Дима Веселов", "15 минут о когнитивной теории сознания", "Почему людям легко видеть вещи вокруг, а компьютерам очень сложно? Насколько наши решения — это действительно наши решения? Как работает наше сознание, как оно не работает и как именно это мешает нам жить?", "https://www.youtube.com/watch?v=7bwXv5n9SlUhttps://www.youtube.com/watch?v=7bwXv5n9SlU"),
    new Lecture("Таня Бушенева", "15 минут о критической массе", "Ядерные реакторы работают благодаря цепной реакции деления тяжелых ядер. Я расскажу, как получают критическую массу, как запускают цепную реакцию, как ей управляют и как управляли, когда только учились это делать.", "https://www.youtube.com/watch?v=PwL7bXn1YFw"),
    new Lecture("Александр Семченков", "15 минут про клеточные автоматы", "Что может быть живого на листе бумаги в клеточку? Хотите почувствовать себя творцом жизни? На лекции вы можете научиться играть в интереснейшую игру \"Жизнь\". Также вы узнаете о том, как сделать робота, который делает свои копии.", "https://www.youtube.com/watch?v=KFpID7ixaMY"),
    new Lecture("Мариам Найем", "15 минут про мультики Дисней", "Мы все любим Дисней. Мы все его пересматриваем, но есть детали, на которые не обращаем внимание. Лекция о том, какими были и какими стали представители королевских кровей. И, конечно же, немного о стереотипах.", "https://www.youtube.com/watch?v=lBxpaqELq_U"),
    new Lecture("Таня Бушенева", "15 минут про ловушки психики", "Наша психика иногда поступает с нами очень подло и совсем не способствует выживанию, успеху и счастью. Я расскажу о случаях, когда мозг работает против нас. Может, понимания, что мы иногда ведем себя не умнее, чем голуби, будет достаточно, чтобы выбраться из ловушки?", "https://www.youtube.com/watch?v=ery9r7BLdxg"),
    new Lecture("Дмитрий Шевченко", "15 минут про ошибки в лекциях", "Каждый, кто учится, рано или поздно сталкивается с необходимостью делиться знаниями. Я расскажу вам, чего НЕ стоит делать, если вы не хотите, чтобы ваша аудитория потеряла к вам интерес через несколько минут после начала лекции.", "https://www.youtube.com/watch?v=hRZE5DWgEJM"),
    new Lecture("Сергей Мовчан", "15 минут об эстетике Warhammer 40К", "Огромный Империум человечества, бюрократия, миллионы людских планет, окруженные ордами ксеносов, будто созданными для бойни, силы Хаоса, предатели и война... Я расскажу об эстетике мира, где нет ничего, кроме войны.", "https://www.youtube.com/watch?v=MoTZjm6P9IM"),
    new Lecture("Александра Бойко", "15 минут о вакцинации", "Я расскажу всем сомневающимся о том, почему делать прививки дешевле, чем лечиться у меня и не только у меня, как вакцинированные соседи защищают непривитого ребенка и о том, что пробу Манту мочить вполне можно.", "https://www.youtube.com/watch?v=RS3Kb5ucUvs"),
    new Lecture("Таня Бушенева", "15 минут о радиации", "Радиация всегда с нами, но мы не видим и не ощущаем ее в несмертельных дозах. Я хочу поговорить о том, как она устроена, что она с нами делает и как мы с ней все-таки уживаемся.", "https://www.youtube.com/watch?v=SG704p9JxZc"),
    new Lecture("Борис Мороз", "15 минут про зарождение хираганы", "Позаимствовав иероглифы у Китая, Япония едва не потеряла свою самобытность, растворившись в языке и культуре Поднебесной. Однако свой собственный алфавит смог не только зародиться, но и выжить в непростой борьбе. Решающую роль в этом сыграла судьба лишь одного человека.", "https://www.youtube.com/watch?v=NKRDz_CNG1s"),
    new Lecture("Евгений Звяги", "15 минут про микровол", "Микроволновое излучение зарекомендовало себя в быту, в промышленности и в науке. Я расскажу, почему нельзя класть ложку в воду в СВЧ-печи, почему в ней искрится фольга и как микроволны помогают в создании лекарств.", "https://www.youtube.com/watch?v=TXUBAHffKyo"),
    new Lecture("Александр Гапак", "15 минут про Искусственный Интеллект. Обсуждение.", "Что такое Искусственный Интеллект, каких он бывает видов, как устроен внутри? Будут ли у него чувства и эмоции, захватит ли он человечество или будет нам верным помощником? Узнай все об ИИ в этой лекции.", "https://www.youtube.com/watch?v=Pkx8xwcpG1U"),
    new Lecture("Максим Меркулов", "15 минут про нейромедиаторы", "Мозг имеет множество скрытых механизмов работы, многие из которых совершенно иначе мы видим изнутри. Я попробую рассказать о некоторых из них.", "https://www.youtube.com/watch?v=g3qRxZZc-C4"),
    new Lecture("Дарья Андреева", "15 минут о вакцинации", "О вакцинации сейчас ведется много споров, однако далеко не все, что говорят о прививках, имеет отношение к действительности. Я расскажу о том, как работают вакцины, о возможных рисках и о том, как наш выбор за или против вакцинации влияет на общество в целом.", "https://www.youtube.com/watch?v=ngpoOqUxW6w"),
    new Lecture("Дарья Бурцева", "15 минут про прионы", "Мы привыкли думать, что инфекционные болезни вызывают живые существа: бактерии, грибы, вирусы. Я хочу вам рассказать о прионах — инфекционных белках. Не являясь 'живыми' в привычном смысле слова, они не менее опасны и интересны для изучения", "https://www.youtube.com/watch?v=yiHcBdz1uPo"),
    new Lecture("Борис Тренин", "15 минут о виртуальной реальности", "Станут ли VR-технологии изобретением, сравнимым по значению с телевизором? С чего все началось и каким станет в будущем?", "На этой лекции можно будет не только услышать о виртуальной реальности, но и увидеть действующие экземпляры VR-очков", "https://www.youtube.com/watch?v=bSnEJnNkD30"),
    new Lecture("Евгений Киося", "15 минут про тихоходок", "Тихоходки — это очень-очень мелкие животные, замечательные своей устойчивостью практически ко всему на свете. Я расскажу, как проходит их жизнь, как им удается \"умирать и оживать\" в капле воды и на чем основана их сверхустойчивость.", "https://www.youtube.com/watch?v=qbyhivWtblo"),
    new Lecture("Дмитрий Веселов", "15 минут о крахе цивилизаций", "С какими проблемами сталкивались исчезнувшие цивилизации? Что мы о них узнали из новых археологических исследований? Может ли опыт древних людей помочь современному человеку и чем именно - об этом и еще о многом в лекции о коллапсе цивилизаций.", "https://www.youtube.com/watch?v=JRk4MKTPXRA"),
    new Lecture("Екатерина Лебедь", "15 минут про антиоксиданты", "В XVI веке Парацельс произнес тезис \"Все есть яд и все есть лекарство; тем или иным его делает только доза\". Мы поговорим о балансе между содержанием свободных радикалов и антиоксидантов в организме и последствиях его нарушения.", "https://www.youtube.com/watch?v=xwikcTK4d9A"),
    new Lecture("Ольга Соколова", "15 минут о депрессии", "Моя лекція - про опис захворювання депресії, симптоми та розповсюдженість. Хочу пояснити людям, що це серйозне захворювання, яке вимагає діагностики та лікування. А також те, що хворі потребують адекватного відношення. Коротко розкажу про лікування.", "https://www.youtube.com/watch?v=B3wIiRoq37U"),
    new Lecture("Максим Лойченко", "15 минут про CRISPR", "CRISPR — подающий надежды прорыв в генной инженерии. Он может стать как лекарством, так и источником проблем. Я расскажу, как лечить генетические заболевания, редактировать людей и уничтожать комаров с помощью бактериального иммунитета.","https://www.youtube.com/watch?v=W7m8_26RH_0"),
    new Lecture("Мариам Найем", "15 минут про Tinder-сюрприз", "Моя лекция — о приложении для знакомств Tinder и о причинах его популярности. Меняют или нет подобные вещи привычный нам тип общения? Кто не знаком с приложением, советую перед лекцией скачать его и поиграть немного.", "https://www.youtube.com/watch?v=-FvRsRu2X1M"),
    new Lecture("Ирина Яцюк", "15 минут про антибиотики", "Антибиотики спасли и спасают множество жизней. Однако болезнетворные микроорганизмы становятся устойчивыми к антибиотикам. Я расскажу, как эта устойчивость возникает и какие пути решения этой проблемы предлагает нам наука.", "https://www.youtube.com/watch?v=TR8S0st_HK4"),
    new Lecture("Таня Бушенева", "15 минут про атомные станции", "Сейчас (3 января 2016 года) в мире работают 442 атомных реактора. Атомные станции использует 31 страна, а вы, возможно, еще не знаете в подробностях, как они работают. Приходите, и я расскажу вам, как устроены 282 из них.", "https://www.youtube.com/watch?v=-_fGgMX1fdk"),
    new Lecture("Александр Семченков", "15 минут про 3D-печать", "3D-печать — аддитивный способ производства, быстро набирающий популярность. У нее большое будущее — освоение космоса, печать органов, новые свойства старых материалов. Способы печати очень разнообразны, мы попробуем в них разобраться.", "https://www.youtube.com/watch?v=KXoT_KfutnM"),
    new Lecture("команда 15x4 Харьков", "Открытие бранча во Львове", "Видео от команды 15x4 Харьков про открытие бранча во Львове. Мы хотим показать, чем является 15х4 вне ивентов и кто мы такие вне лекций.", "https://www.youtube.com/watch?v=7BcWBhKvVGc"),
    new Lecture("Глеб Сидора ", "15 минут о демагогии", "Я расскажу вам, как правильно вести дискуссию, каких ошибок избегать при построении аргументов и как понять, что вами пытаются манипулировать.", "https://www.youtube.com/watch?v=mkcduEZFJvI"),
    new Lecture("Святослав Денисенко", "15 минут о бессмертии", "Я расскажу, зачем нам нужно жить вечно, каким образом можно этого достичь, что уже сделано в этом направлении и что нам еще предстоит сделать.", "https://www.youtube.com/watch?v=R1dQ3xqoLM0https://www.youtube.com/watch?v=R1dQ3xqoLM0"),
    new Lecture("Влада Исакова", "15 минут о частях речи", "В школе каждому рассказывали про подлежащее и сказуемое, учили отличать причастие от деепричастия. Но как-то забыли объяснить, чем это поможет вам в жизни, если вы - не студент филфака. Я постараюсь исправить это досадное разумение и раскрою секрет гениальности Шекспира на десерт", "https://www.youtube.com/watch?v=30VgYpL8cRU"),
    new Lecture("Евгений Майковец", "15 минут про неочевидные изобретения", "Есть вещи настолько привычные, что мы пользуемся ими каждый день, даже не замечая. Моя лекция расскажет, откуда они взялись, кто их придумал и когда.", "https://www.youtube.com/watch?v=owHyjtVyyXA"),
    new Lecture("Иван Магда", "15 минут про научный метод", "С древних времен ученые стремились к систематизации проведения исследований для получения истинных научных знаний без домыслов и предубеждений. Это привело к созданию \"Научного метода\". О его развитии, основных принципах и сути вы узнаете в данной лекции", "https://www.youtube.com/watch?v=1jhUwBHAKCMhttps://www.youtube.com/watch?v=1jhUwBHAKCM")
];


