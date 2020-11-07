const quotes = [
  {
    quote:
      'Основная философская ценность физики в том, что она даёт мозгу нечто определённое, на что можно положиться. Если вы окажетесь где-то не правы, природа сама сразу же скажет вам об этом',
    author: 'Джеймс Максвелл',
  },
  {
    quote:
      'Каждый имеет достаточно сил, чтобы достойно прожить жизнь. А все эти разговоры о том, какое сейчас трудное время, это хитроумный способ оправдать своё бездействие, лень и разные унылости. Работать надо, а там, глядишь, и времена изменятся.',
    author: 'Лев Ландау',
  },
  {
    quote:
      'В беспрерывном одиночестве ум становится все острее. Для того, чтобы думать и изобретать не нужна большая лаборатория. Идеи рождаются в условиях отсутствия влияния на разум внешних условий. Секрет изобретательности в одиночестве. В одиночестве рождаются идеи.',
    author: 'Никола Тесла',
  },
  {
    quote:
      'Самоя большая глупость - это делать тоже самое и надеятся на другой результат. Невозможно решить проблему на том же уровне, где она возникла нужно стать выше этой проблемы, поднявшись на следующий уровень',
    author: 'Альберт Эйнштейн',
  },
];

gsap.registerPlugin(ScrollTrigger);

const quotes_text = document.querySelector('#quotes-text');
const quotes_author = document.querySelector('#quotes-author');
const quotes_dots = document.querySelector('#quotes-dots');
let dots = '';
quotes.forEach((quote, index) => {
  dots += `<div class='dot ${index == 0 ? 'active' : ''}' data-quote='${
    quote.quote
  }' data-author='${quote.author}'></div>`;
});
if (quotes_dots) {
  quotes_dots.innerHTML = dots;
  let active_dot = quotes_dots.children[0];
  quotes_text.innerHTML = active_dot.dataset.quote;
  quotes_author.innerHTML = active_dot.dataset.author;
  for (let dot of quotes_dots.children) {
    dot.onclick = () => {
      quotes_text.innerHTML = dot.dataset.quote;
      quotes_author.innerHTML = dot.dataset.author;
      active_dot.classList.remove('active');
      active_dot = dot;
      active_dot.classList.add('active');
    };
  }
}

3;
constopenMenu = document.querySelector('#openMenu');
constmobileMenu = document.querySelector('#mobileMenu');
constcloseMenu = document.querySelector('#closeMenu');
openMenu.onclick = () => {
  mobileMenu.style.left = '0';
};

closeMenu.onclick = () => {
  mobileMenu.style.left = '-70%';
  mobileMenu.style.left = '-70vmin';
};

const tl = gsap.timeline();
tl.to('.overlay', { duration: 2, opacity: 0 })
  .from(
    '.headerh2',
    {
      duration: 1,
      x: -100,
      opacity: 0,
    },
    '-=2'
  )
  .from('.header p', { duration: 1, opacity: 0, x: -100 }, '-=1.5')
  .from('.header .hero img', { duration: 1, opacity: 0, x: 100 }, '-=1.4')
  .from('.logo', { duration: 1, opacity: 0, y: -100 }, '-=1.5')
  .from(
    '.header nav ul li',
    { duration: 1, opacity: 0, y: -100, stagger: 0.1 },
    '-=1.5'
  );

gsap.to('#scrolldown', { duration: 1, y: 10, repeat: -1, yoyo: true });

gsap.to('.logo i', {
  duration: 6,
  rotateZ: '360deg',
  repeat: -1,
  ease: 'none',
});

// Mobile menu sub menus

const expandable_lis = document.querySelectorAll('.mobile-menu .expandable');

for (let li of expandable_lis) {
  li.onclick = (e) => {
    li.classList.toggle('opened');
  };

  // for (let child of li.children) {
  //   child.onclick = (e) => {
  //     e.stopPropagation();
  //   };
  // }
}

// OGE ====================================================================

const exam = document.querySelector('.exam');

if (exam) {
  const content = {
    // ОГЭ ============================================
    documents_oge: [
      {
        header: 'Демоверсия ОГЭ 2021',
        description: `Демонстрационный вариант
        контрольных измерительных материалов
        основного государственного экзамена 2021 года
        по ФИЗИКЕ`,
        isOpenable: true,
        isDownloadable: true,
        link: 'content/ogedemo2021.pdf'
      },
      {
        header: 'Демоверсия ОГЭ 2020',
        description: `Демонстрационный вариант
        контрольных измерительных материалов
        основного государственного экзамена 2020 года
        по ФИЗИКЕ`,
        isOpenable: true,
        isDownloadable: true,
        link: 'content/ogedemo2020.pdf'
      },
      {
        header: 'Изменения в ОГЭ 2021',
        description: `Информация об изменениях в КИМ ОГЭ 2021 г. в сравнении с КИМ ОГЭ 2020 г.`,
        isOpenable: true,
        isDownloadable: true,
        link: 'content/changes2021.pdf'
      },
      {
        header: 'Методические рекомендации для учащихся',
        description: `Методические рекомендации предназначены для обучающихся 9 классов,
        планирующих сдавать ОГЭ по физике.`,
        isOpenable: true,
        isDownloadable: true,
        link: 'content/recommendations.pdf'
      },
      {
        header: 'Методические рекомендации для предметных комиссий',
        description: `Методические материалы для предметных комиссий субъектов Российской Федерации по проверке выполнения заданий с развернутым ответом экзаменационных работ ОГЭ 2020 года.`,
        isOpenable: true,
        isDownloadable: true,
        link: 'content/recommendations2.pdf'
      },
      {
        header: 'Реальные варианты досрочного экзамена 2020',
        description: `На выполнение экзаменационной работы по физике отводится 3 часа
        (180 минут). Экзаменационная работа включает в себя 25 заданий`,
        isOpenable: true,
        isDownloadable: true,
        link: 'content/real.pdf'
      },
      {
        header: 'Спецификация + кодификатор',
        description: `Спецификация
        контрольных измерительных материалов для проведения
        в 2021 году основного государственного экзамена
        по ФИЗИКЕ.<br>Кодификатор
        проверяемых требований к результатам освоения
        основной образовательной программы основного
        общего образования и элементов содержания
        для проведения основного государственного экзамена
        по ФИЗИКЕ`,
        isOpenable: true,
        isDownloadable: true,
        link: 'content/specification-codificator.pdf'
      },
    ],
    books_oge: [
      {
        header: 'ОГЭ-2021. Физика. Готов. к атестации - Пурышева.',
        description: `Данное пособие предназначено для подготовки учащихся 9 классов к государственной аттестации - основному государственному экзамену (ОГЭ) по физике.`,
        isOpenable: true,
        isDownloadable: true,
        link: 'content/ogephysic1.pdf'
      },
      {
        header: 'ОГЭ-2021. Физика. Типовые тестовые задания - Камзеева',
        description: `Пособие содержит 10 вариантов типовых тестовых заданий Основного государственного экзамена 2021 года.`,
        isOpenable: true,
        isDownloadable: true,
        link: 'content/ogephysic4.pdf'
      },
      {
        header: 'ОГЭ-2021. Физика. Экзаменационный тренажер. 20 вариантов - Бобошина',
        description: `Экзаменационный тренажёр содержит 20 тренировочных экзаменационных вариантов Основного государственного экзамена по физике.`,
        isOpenable: true,
        isDownloadable: true,
        link: 'content/ogephysic5.pdf'
      },
      {
        header: 'ОГЭ-2020. Физика. Сборник заданий - Ханнанов',
        description: `Издание предназначено для подготовки учащихся к ОГЭ по физике.<br>
        Пособие включает:<br>
        - 800 заданий разных типов;<br>
        - ответы ко всем заданиям.<br>
        `,
        isOpenable: true,
        isDownloadable: true,
        link: 'content/ogephysic2.pdf'
      },
      {
        header: 'ОГЭ-2020. Физика. Тренажер. Экспериментальные задания - Никифоров',
        description: `Тренажёр в форме рабочей тетради предназначен для подготовки к выполнению экспериментальных заданий, включённых в ОГЭ по физике. Задания группируются по тематическому принципу.
        `,
        isOpenable: true,
        isDownloadable: true,
        link: 'content/ogephysic3.pdf'
      },
      {
        header: 'Справочник ОГЭ по физике - Пурышева, Тарбиль',
        description: `В справочнике в виде математических таблиц представлены все разделы физики, изучаемые в основной школе.`,
        isOpenable: true,
        isDownloadable: true,
        link: 'content/ogephysic6.pdf'
      },
      {
        header: 'Я сдам ОГЭ! Физика. Типовые задания. Технология решения Ч.1 - Демидова',
        description: `Курс «Я сдам ОГЭ!» Демидовой, Камзеевой по физике создан членами Федеральной комиссии по составлению КИМ ОГЭ.`,
        isOpenable: true,
        isDownloadable: true,
        link: 'content/ogephysic7.pdf'
      },
      
    ],
    usefullinks_oge: [

    ],

    // ЕГЭ ===================================================
    codificator_ege: [

    ],
    specification_ege: [

    ],
    demo_ege: [

    ],
    books_ege: [

    ],
    trainers_ege: [

    ],
    conspects_ege: [

    ],
  };

  const $filesList = document.querySelector('.exam .files .container');

  function renderFilesList(list) {
    let result = '';
    for (let file of list) {
      result += `
        <div class='file'>
          <h3>${file.header}</h3>
          <p>${file.description}</p>
          ${file.isDownloadable ? `<a href='${file.link}' download='download'>Скачать</a>` : ''}
          ${file.isOpenable ? `<a href='${file.link}' target='_blank'>Открыть онлайн</a>` : ''}
        </div>
      `;
    }
    $filesList.innerHTML = result;
  }

  // renderFilesList(content[Object.keys(content)[0]]);

  const $categoriesList = document.querySelector(
    '.exam .categories .container'
  );

  if ($categoriesList) {
    let $activeCategory = $categoriesList.children[0];
    $activeCategory.classList.add('active');
    renderFilesList(content[$activeCategory.dataset.category]);
    for (let category of $categoriesList.children) {
      category.onclick = () => {
        renderFilesList(content[category.dataset.category]);
        $activeCategory.classList.remove('active');
        $activeCategory = category;
        $activeCategory.classList.add('active');
      };
    }
  }
}

if (document.querySelector('.subject')) {
  let currectClass;
  let currectCategory;

  const $classList = document.querySelector('.categories.classes .container');
  const $categoryList = document.querySelector('.categories.types .container');
  const $content = document.querySelector('.files .container');
  let $lastActiveClass;
  let $lastActiveCategory;
  currectCategory = $categoryList.children[0].dataset.category;
  currectClass = $classList.children[0].dataset.class;
  console.log(currectClass, currectCategory);

  function renderList() {
    let result = '';
    if (content[currectClass]) {
      if (content[currectClass][currectCategory]) {
        for (let elem of content[currectClass][currectCategory]) {
          result += `
            <div class='file'>
              <h3>${elem.header}</h3>
              <p>${elem.description}</p>
              ${
                elem.isDownloadable
                  ? `<a href='${elem.link}' download='download'>Скачать</a>`
                  : ''
              }
              ${elem.isOpenable ? `<a href='${elem.link}' target='_blank'>Открыть онлайн</a>` : ''}
            </div>
          `;
        }
      }
    } else {
      result = '<h2 class="empty">Здесь пока пусто</h2>';
    }

    $content.innerHTML = result;
  }

  function updateActive() {
    if ($lastActiveClass) {
      $lastActiveClass.classList.remove('active');
    }
    if ($lastActiveCategory) {
      $lastActiveCategory.classList.remove('active');
    }
    const $currentClass = document.querySelector(
      `.categories.classes p[data-class=${currectClass}]`
    );
    const $currentCategory = document.querySelector(
      `.categories.types p[data-category=${currectCategory}]`
    );
    $currentCategory.classList.add('active');
    $currentClass.classList.add('active');
    $lastActiveCategory = $currentCategory;
    $lastActiveClass = $currentClass;
  }

  const content = {
    // physic7student: {},
    // physic8student: {},
    // physic9student: {},
    // physic10student: {},
    // physic11student: {},
    // astronomy10student: {},
    // astronomy11student: {},
    physic7teacher: {
      books: [
        { 
          header: 'ВПР - Шахматова',
          description: `Данное пособие содержит материал, необходимый для подготовки к всероссийской проверочной работе по физике в 7 классе`,
          isOpenable: true,
          isDownloadable: true,
          link: 'content/v1.pdf'
        },
        {
          header: 'Контрольные и самостоятельные работы - Перышкина',
          description: `Контрольные работы Громцевой по физике за 7 класс к учебнику Перышкина соответствуют ФГОС ООО. Предназначатся для СОШ.`,
          isOpenable: true,
          isDownloadable: true,
          link: 'content/v2.pdf'
        },
        {
          header: 'Лабораторные работы - Перышкина',
          description: `Данное пособие полностью соответствует федеральному государственному образовательному стандарту (второго поколения).`,
          isOpenable: true,
          isDownloadable: true,
          link: 'content/v3.pdf'
        },
        {
          header: 'Тесты - Перышкина',
          description: `Пособие представляет собой сборник тестов для тематического и рубежного контроля. Может быть использовано как при работе с учебником, соответствующим ФК ГОС, так и при работе с учебником, соответствующим ФГОС.`,
          isOpenable: true,
          isDownloadable: true,
          link: 'content/v4.pdf'
        },
        {
          header: 'Технологические карты уроков - Перышкина',
          description: `В пособии представлены технологические карты уроков по физике для 7 класса, составленные на основе ФГОС основного общего образования, Примерной программы и ориентированные на работу с учебником А. В. Перышкина (М.: Дрофа).`,
          isOpenable: true,
          isDownloadable: true,
          link: 'content/v5.pdf'
        },
        {
          header: 'Физика. Тетрадь-практикум - Белага',
          description: `Тетрадь-практикум является составной частью учебно-методического комплекса "Физика" для 7 класса линии "Сферы".
          В ней собраны лабораторные работы, необходимые для успешного усвоения курса физики в соответствии с программой.`,
          isOpenable: true,
          isDownloadable: true,
          link: 'content/v6.pdf'
        },
        {
          header: 'Физика. Тетрадь-тренажер - Панебратцев',
          description: `Тетрадь-тренажер является составной частью учебно-методического комплекта «Физика» для 7 класса линии УМК «Сферы». В ней содержатся задания для самостоятельной работы учащихся в соответствии с новым образовательным стандартом.`,
          isOpenable: true,
          isDownloadable: true,
          link: 'content/v7.pdf'
        },
        {
          header: 'Физика. Тетрадь-экзаменатор - Жумаев',
          description: `Пособие предназначено для проверки результатов обучения по курсу физики 7 класса в соответствии с требованиями Федерального государственного образовательного стандарта основного общего образования.`,
          isOpenable: true,
          isDownloadable: true,
          link: 'content/v8.pdf'
        },
    ],
    tests: [
      {
        header: 'Тесты - Перышкина',
        description: `Пособие представляет собой сборник тестов для тематического и рубежного контроля. Может быть использовано как при работе с учебником, соответствующим ФК ГОС, так и при работе с учебником, соответствующим ФГОС.`,
        isOpenable: true,
        isDownloadable: true,
        link: 'content/v4.pdf'
      },
    ],
    selftests: [
      {
        header: 'Контрольные и самостоятельные работы - Перышкина',
        description: `Контрольные работы Громцевой по физике за 7 класс к учебнику Перышкина соответствуют ФГОС ООО. Предназначатся для СОШ.`,
        isOpenable: true,
        isDownloadable: true,
        link: 'content/v2.pdf'
      },
    ],
    controltests: [
      {
        header: 'Контрольные и самостоятельные работы - Перышкина',
        description: `Контрольные работы Громцевой по физике за 7 класс к учебнику Перышкина соответствуют ФГОС ООО. Предназначатся для СОШ.`,
        isOpenable: true,
        isDownloadable: true,
        link: 'content/v2.pdf'
      },
    ],
    labtests: [
      {
        header: 'Лабораторные работы - Перышкина',
        description: `Данное пособие полностью соответствует федеральному государственному образовательному стандарту (второго поколения).`,
        isOpenable: true,
        isDownloadable: true,
        link: 'content/v3.pdf'
      },
    ]
    },
    physic8teacher: {
      books: [
        {
          header: 'ВПР Практикум - Бобошина',
          description: `Данное пособие полностью соответствует федеральному государственному образовательному стандарту (второго поколения).`,
          isOpenable: true,
          isDownloadable: true,
          link: 'content/d1.pdf'
        },
        {
          header: 'ВПР Практикум - Шахматова',
          description: `Данное пособие полностью соответствует федеральному государственному образовательному стандарту (второго поколения).`,
          isOpenable: true,
          isDownloadable: true,
          link: 'content/d2.pdf'
        },
        {
          header: 'Контрольные и самостоятельные работы - Перышкина',
          description: `Издание предназначено для проверки знаний учащихся по курсу физики 8 класса. Оно ориентировано на учебник А. В. Перышкина "Физика. 8 класс" и содержит контрольные работы по всем темам, изучаемым в 8 классе, а также самостоятельные работы.`,
          isOpenable: true,
          isDownloadable: true,
          link: 'content/d3.pdf'
        },
        {
          header: 'Контрольные работы в новом формате - Перышкина',
          description: `В сборник включены контрольные работы по всем темам традиционного курса физики 8 класса.`,
          isOpenable: true,
          isDownloadable: true,
          link: 'content/d4.pdf'
        },
        {
          header: 'Тетрадь для лабораторных работ по физике - Перышкина',
          description: `Тетрадь для лабораторных работ предназначена для изучающих физику по учебнику А.В. Перышкина "Физика".`,
          isOpenable: true,
          isDownloadable: true,
          link: 'content/d5.pdf'
        },
        {
          header: 'Тесты по физике - Чеботарева',
          description: `Пособие содержит тесты для проверки усвоения и понимания восьмиклассниками учебного материала по физике всех тем, изложенных в учебнике А. В. Перышкина, а также шесть контрольных итоговых тестов, охватывающих основные вопросы этих тем.`,
          isOpenable: true,
          isDownloadable: true,
          link: 'content/d6.pdf'
        },
        {
          header: 'Технологические карты уроков по учебнику Перышкина - Пелагейченко',
          description: `В пособии представлены технологические карты уроков по физике для 8 класса, составленные на основе ФГОС основного общего образования, Примерной программы и ориентированные на работу с учебником А. В. Перышкина`,
          isOpenable: true,
          isDownloadable: true,
          link: 'content/d7.pdf'
        },
        {
          header: 'Физика. КИМы - Бобошина',
          description: `Книга содержит контрольные измерительные материалы (КИМы) по предмету "Физика", аналогичные материалам ЕГЭ.`,
          isOpenable: true,
          isDownloadable: true,
          link: 'content/d8.pdf'
        },
        {
          header: 'Физика. Тетрадь-экзаменатор - Жумаев',
          description: `Пособие предназначено для проверки результатов обучения по курсу физики 8 класса в соответствии с требованиями Федерального государственного образовательного стандарта основного общего образования.`,
          isOpenable: true,
          isDownloadable: true,
          link: 'content/d10.pdf'
        },
      ],
      selftests: [
        {
          header: 'Контрольные и самостоятельные работы - Перышкина',
          description: `Издание предназначено для проверки знаний учащихся по курсу физики 8 класса. Оно ориентировано на учебник А. В. Перышкина "Физика. 8 класс" и содержит контрольные работы по всем темам, изучаемым в 8 классе, а также самостоятельные работы.`,
          isOpenable: true,
          isDownloadable: true,
          link: 'content/d3.pdf'
        },
      ],
      controltests: [
        {
          header: 'Контрольные и самостоятельные работы - Перышкина',
          description: `Издание предназначено для проверки знаний учащихся по курсу физики 8 класса. Оно ориентировано на учебник А. В. Перышкина "Физика. 8 класс" и содержит контрольные работы по всем темам, изучаемым в 8 классе, а также самостоятельные работы.`,
          isOpenable: true,
          isDownloadable: true,
          link: 'content/d3.pdf'
        },
        {
          header: 'Контрольные работы в новом формате - Перышкина',
          description: `В сборник включены контрольные работы по всем темам традиционного курса физики 8 класса.`,
          isOpenable: true,
          isDownloadable: true,
          link: 'content/d4.pdf'
        },
      ],
      labtests: [
        {
          header: 'Тетрадь для лабораторных работ по физике - Перышкина',
          description: `Тетрадь для лабораторных работ предназначена для изучающих физику по учебнику А.В. Перышкина "Физика".`,
          isOpenable: true,
          isDownloadable: true,
          link: 'content/d5.pdf'
        },
      ]
    },
    physic9teacher: {
      books: [
        {
          header: 'ВПР - Громцева',
          description: `В книге представлены пятнадцать вариантов проверочных работ по физике для учащихся 9-х классов.`,
          isOpenable: true,
          isDownloadable: true,
          link: 'content/a1.pdf'
        },
        {
          header: 'Контрольные и самостоятельные работы. уч. Перышкина - Громцева',
          description: `Книга содержит самостоятельные и контрольные работы по всем темам школьного курса за 9 класс основной школы, по учебнику Перышкина.`,
          isOpenable: true,
          isDownloadable: true,
          link: 'content/a2.pdf'
        },
        {
          header: 'Тетрадь для лабораторных работ к учебнику Перышкина ФГОС - Минькова, Иванова',
          description: `Физика. 9 класс. Тетрадь для лабораторных работ к учебнику А. В. Перышкина, Е. М. Гутника. ФГОС`,
          isOpenable: true,
          isDownloadable: true,
          link: 'content/a3.pdf'
        },
        {
          header: 'Рабочая тетрадь. к уч. Перышкина - Перышкин',
          description: `Рабочая тетрадь по физике адресована школьникам, обучающимся по учебнику А.В. Перышкина, Е.М. Гутник "Физика. 9 класс", и предназначена для классной и домашней работы.`,
          isOpenable: true,
          isDownloadable: true,
          link: 'content/a4.pdf'
        },
        {
          header: 'Тесты. К уч. Перышкина - Слепнева',
          description: `Пособие представляет собой сборник тестов для тематического и рубежного контроля.`,
          isOpenable: true,
          isDownloadable: true,
          link: 'content/a5.pdf'
        },
        {
          header: 'Тетрадь-экзаминатор - Панебратцев',
          description: `Рабочая тетрадь по физике адресована школьникам 9 класса.`,
          isOpenable: true,
          isDownloadable: true,
          link: 'content/a6.pdf'
        },
        {
          header: 'Тетрадь-практикум - Панебратцев',
          description: `Тетрадь-практикум содержит лабораторные работы, необходимые для успешного освоения курса физики в соответствии с рабочей программой.`,
          isOpenable: true,
          isDownloadable: true,
          link: 'content/a7.pdf'
        },
        {
          header: 'Тетрадь-тренажер - Панебратцев',
          description: `В данном пособии содержатся задания для самостоятельной работы учащихся в соответствии с требованиями Федерального государственного образовательного стандарта основного общего образования`,
          isOpenable: true,
          isDownloadable: true,
          link: 'content/a8.pdf'
        },
        {
          header: 'Технологические карты уроков. К уч. Перышкина - Пелагейченко',
          description: `В пособии представлены технологические карты уроков по физике для 9 класса, составленные на основе ФГОС основного общего образования.`,
          isOpenable: true,
          isDownloadable: true,
          link: 'content/a9.pdf'
        },
        {
          header: 'Экспресс-диагностика - Домнина',
          description: `Пособие содержит материалы для проведения оперативной диагностики уровня освоения учебного материала в виде самостоятельных проверочных работ по основным блокам всех тем курса физики 9 класса`,
          isOpenable: true,
          isDownloadable: true,
          link: 'content/a10.pdf'
        },
      ],
      selftests: [
        {
          header: 'Контрольные и самостоятельные работы. уч. Перышкина - Громцева',
          description: `Книга содержит самостоятельные и контрольные работы по всем темам школьного курса за 9 класс основной школы, по учебнику Перышкина.`,
          isOpenable: true,
          isDownloadable: true,
          link: 'content/a2.pdf'
        },
      ],
      controltests: [
        {
          header: 'Контрольные и самостоятельные работы. уч. Перышкина - Громцева',
          description: `Книга содержит самостоятельные и контрольные работы по всем темам школьного курса за 9 класс основной школы, по учебнику Перышкина.`,
          isOpenable: true,
          isDownloadable: true,
          link: 'content/a2.pdf'
        },
      ],
      labtests: [
        {
          header: 'Тетрадь для лабораторных работ к учебнику Перышкина ФГОС - Минькова, Иванова',
          description: `Физика. 9 класс. Тетрадь для лабораторных работ к учебнику А. В. Перышкина, Е. М. Гутника. ФГОС`,
          isOpenable: true,
          isDownloadable: true,
          link: 'content/a3.pdf'
        },
      ],

    },
    physic10teacher: {
      books: [
        {
          header: 'ВПР Физика. Практикум. - Громцева',
          description: `В книге представлены пятнадцать вариантов проверочных работ по физике для учащихся 10-х классов. Каждая проверочная работа содержит пятнадцать заданий, которые по своему содержанию охватывают все основные темы курса физики общеобразовательных классов.`,
          isOpenable: true,
          isDownloadable: true,
          link: 'content/e1.pdf'
        },
        {
          header: 'Физика. 1ч - Генденштейн',
          description: `Учебник предназначен для изучения физики на базовом и углублённом уровнях в соответствии с новым ФГОС. Используется системно-деятельностный подход в обучении, способствующий формированию универсальных учебных действий`,
          isOpenable: true,
          isDownloadable: true,
          link: 'content/e2.pdf'
        },
        {
          header: 'Физика. 2ч - Генденштейн',
          description: `Учебник предназначен для изучения физики на базовом и углублённом уровнях в соответствии с новым ФГОС. Используется системно-деятельностный подход в обучении, способствующий формированию универсальных учебных действий`,
          isOpenable: true,
          isDownloadable: true,
          link: 'content/e3.pdf'
        },
        {
          header: 'Физика. 60 диагн. вариантов - Соколова',
          description: `Пособие содержит материалы для проведения оперативной диагностики уровня освоения учебного материала в виде самостоятельных проверочных работ по основным блокам всех тем курса физики 10 класса.`,
          isOpenable: true,
          isDownloadable: true,
          link: 'content/e4.pdf'
        },
        {
          header: 'Физика. Опорные конспекты и задания - Марон',
          description: `Пособие содержит комплект опорных конспектов и разноуровневых заданий, охватывающих все основные темы курса физики 10 класса.`,
          isOpenable: true,
          isDownloadable: true,
          link: 'content/e5.pdf'
        },
        {
          header: 'Физика. Самостоятельные работы - Генденштейн',
          description: `Тетрадь содержит материал, который поможет учащимся овладеть различными видами деятельности, необходимыми для успешной сдачи Единого государственного экзамена (ЕГЭ).`,
          isOpenable: true,
          isDownloadable: true,
          link: 'content/e6.pdf'
        },
      ],
      selftests: [
        {
          header: 'Физика. Самостоятельные работы - Генденштейн',
          description: `Тетрадь содержит материал, который поможет учащимся овладеть различными видами деятельности, необходимыми для успешной сдачи Единого государственного экзамена (ЕГЭ).`,
          isOpenable: true,
          isDownloadable: true,
          link: 'content/e6.pdf'
        },
        {
          header: 'Физика. 60 диагн. вариантов - Соколова',
          description: `Пособие содержит материалы для проведения оперативной диагностики уровня освоения учебного материала в виде самостоятельных проверочных работ по основным блокам всех тем курса физики 10 класса.`,
          isOpenable: true,
          isDownloadable: true,
          link: 'content/e4.pdf'
        },
      ]
    },
    // physic11teacher: {},
    // astronomy10teacher: {},
    // astronomy11teacher: {},
  };

  for (let elem of $classList.children) {
    elem.onclick = () => {
      currectClass = elem.dataset.class;
      renderList();
      updateActive();
    };
  }

  for (let elem of $categoryList.children) {
    elem.onclick = () => {
      currectCategory = elem.dataset.category;
      renderList();
      updateActive();
    };
  }

  renderList();
  updateActive();
}
