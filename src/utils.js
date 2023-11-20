export const scene = new URL("./assets/studio_room_2.spline", import.meta.url).href;

export const benefits = [
    {title: "Много практики", desc: "Целый час практической отработки выбранной песни"},
    {title: "Запись голоса", desc: "Использование специального оборудования звукозаписи и усиления звука"},
    {title: "Групповое исполнение", desc: "Споешь под аккомпанемент профессионального гитариста/клавишника"},
    {title: "Сообщество", desc: "Комфортное отношение среди коллег-музыкантов"},
];

export const aboutSchoolPoints = [
    {point: "679", desc: "Счастливых учеников"},
    {point: "5 + 1", desc: "Кабинеты + студия"},
    {point: "Craft Core", desc: "Партнер по организации концертов и продвижению"},
    {point: "Pravda Records", desc: "Партнер по мастерингу и подготовке к релизу"}
];

export const galleryImages = [
    new URL('./assets/IMG_6251-18-1-min.jpg', import.meta.url).href,
    new URL("./assets/photo_2023-10-17_06-51-22-min.jpg", import.meta.url).href,
    new URL("./assets/IMG_6465-62-min.jpg", import.meta.url).href,
    new URL("./assets/IMG_6668-180-min.jpg", import.meta.url).href,
    new URL("./assets/IMG_6694-198-min.jpg", import.meta.url).href,
    new URL("./assets/IMG_6758-243-min.jpg", import.meta.url).href,
];

export const teachers = [
    {
        name: "Эд Хупбутдинов",
        image: new URL('./assets/Ed.jpg', import.meta.url).href,
        exp: "6 лет преподавания. Звукорежиссер, саунд-продюсер",
        favs: ["Twelve foot ninja", "Spliknot", "Korn", "Polyphia", "Wolfpack"]
    },
    {
        name: "Антон Перцев",
        image: new URL('./assets/Anton.jpg', import.meta.url).href,
        exp: "10 лет преподавания. Вокалист, актер театра и кино, гитарист, теле-радиоведущий, композитор",
        favs: ["Metallica", "The Police", "Green Day", "A-ha", "HIM", "Staind", "Браво", "Константин Никольский", "Uma2rman", "ДДТ", "Муслим Магамаев"]
    },
    {
        name: "Лера Козлова",
        image: new URL('./assets/Lera.jpg', import.meta.url).href,
        exp: "6 лет преподавания. Звукорежиссер, саунд-продюсер",
        favs: ["Twelve foot ninja", "Spliknot", "Korn", "Polyphia", "Wolfpack"]
    },
    {
        name: "Александра Несмеянова",
        image: new URL('./assets/Sasha.jpg', import.meta.url).href,
        exp: "5 лет преподавания. Артист, педагог",
        favs: ["Rachelle Farrell", "Regina Belle", "Stevie Wonder ", "Kara Marni", "Michael Jackson", "Леонид Агутин", "Алексей Чумаков", "Jamiroquai"]
    }
];

export const students = [
    {
        name: "Ян Емелин", 
        image:  new URL("./assets/Yan.jpg", import.meta.url).href,
        exp: "20 уроков",
    },
    {
        name: "Камилла Галимуллина", 
        image: new URL("./assets/Kamilla.jpg", import.meta.url).href,
        exp: "12 уроков",
    }, 
    {
        name: "Лилия Рахматулина",
        image: new URL("./assets/Lilya.jpg", import.meta.url).href,
        exp: "27 уроков",
    },
    {
        name: "Андрей Зиновьев",
        image: new URL("./assets/Andrey.jpg", import.meta.url).href,
        exp: "50 уроков",
    },
    {
        name: "Артем Шустер",
        image: new URL("./assets/photo_2023-10-17_06-51-22-min.jpg", import.meta.url).href,
        exp: "23 урока",
    }
];

export const steps = [
    {
        image: "keyboard.png", 
        name: "Этап 1", 
        desc: "Ты показыаешь, что и как хочешь петь, мы подбираем техники для твоего успешного исполнения, а также разминаем твой голос"
    }
    , 
    {
        image: "mixing.png",
        name: "Запись вокала в студии",
        desc: "Твой голос пишется на профессиональной студии для мгновенной обратной связи и улучшения вокальных навыков",
    },
    {
        image: "singing.png",
        name: "Профессиональное исполнение",
        desc: "Ты исполнишь профессионально желаемую песню на отчетном концерте школы, в караоке или на профессиональной аудиозаписи в студии школы"
    }
];

export const categories = [
    "Все",
    "Концерты",
    "Джемы",
    "Съемки",
]

export const questions = [
    {text: "Смогу ли я изучать разные предметы?", answer: "Да, формат нашего обучения предполагает мультинаправленность. Ты получаешь всеобъемлющие знания в сфере музыкального образования, можешь посещать  все направления в школе"},
    {text: "А есть уроки скрипки?", answer: "В нашей школе есть следующие направления: барабаны, написание и обработка электронной музыки, гитара, электрогитара, бас гитара, вокал, актерское мастерство, фортепиано"},
    {text:"Мне 50+, и я мечтаю освоить игру на инструментах и записать свой клип, возможно ли это?", answer:"Да, возраст - это всего лишь числа,  нашим ученикам от 16 до 87 (пока что)"},
    {text:"Почему занятия музыкой нужны и полезны?", answer: "Творчество заряжает позитивом, придает уверенности и, кстати, держит в тонусе мозговую деятельность! Оно не травмоопасно, развивает интеллект и помогает при социализации"},
    {text: "Я мечтаю зарабатывать музыкой, научиться писать её под заказ, но как это сделать?", answer: "Ты обратился по адресу! У нас разработана специальная программа по написанию музыки с нуля до про, а также мы рассказываем, где искать клиентов и знакомим с крупными студиями звукозаписи"},
    {text: "Можно ли использовать школу как репетиционный класс для свободного посещения?", answer: "Да! Ты можешь приходить в нашу комфортную атмосферу, играть на наших инструментах, петь или просто отдыхать"},
    {text: "Могу ли я оплатить курс по частям?", answer: "Да, наши менеджеры подберут для тебя комфортный вариант оплаты. Можно разбить стоимость курса на несколько месяцев или оплатить его целиком. Ты можешь начать с небольшого блока занятий или взять заряженный вкусный большой курс!"},
    {text: "Можно ли получить сертификат по окончанию курса?", answer: "Да, конечно. Кроме того, что ты получишь потрясающий навык, который останется с тобой на всю жизнь, Мы подготовим для тебя выпускной сертификат, фото и видео"},
    {text: "Можно ли приобрести подарочный сертификат для друга?", answer: "Да, у нас есть такие предложения. Твой друг получит море позитивных эмоций даже за эти несколько занятий!"},
    {text: "Можно ли прийти на урок в 7 утра?", answer: "Часы работы школы: 10:00-23:00. Но мы всегда поддерживаем стремления наших учеников, даем возможность провести  как можно больше времени в творчестве, поэтому можно обсудить и такой вариант записи"},
    {text: "Можно ли у вас записать свою песню?", answer: "Да! У нас в школе находится студия звукозаписи, и работают музыканты, которые могут обработать и свести твой трек"},
    {text: "Вы принимаете учеников без музыкального опыта?", answer: "Наша школа занимается обучением и продвижением как опытных музыкантов, так и заинтересованных в получении нового музыкального образования с нуля"},
    {text: "Проводите ли вы концерты?", answer: "Да! Мы проводим мероприятия как внутри школы, так и на арендованных концертных площадках, барах"},
    {text: "Кто у вас преподает?", answer: "Наши учителя - это звездные концертные музыканты и профессиональные педагоги с высшим музыкальным образованием. Они расскажут интересную теорию, погрузят в интенсивные практические занятия и примут любой твой выбор музыкального жанра"},
];