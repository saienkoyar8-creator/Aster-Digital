/* ============================================================
   ASTER DIGITAL — i18n engine
   Languages: uk (default), ru
   ============================================================ */

const I18N = {
  uk: {
    nav: {
      build:   'Послуги',
      process: 'Процес',
      work:    'Роботи',
      about:   'Про нас',
      cta:     'Почати проєкт',
    },
    hero: {
      eyebrow: 'Інженерна студія · З 2019 року',
      t1: 'Ми будуємо',
      t2: 'цифрові продукти',
      t3: 'для бізнесу.',
      desc: 'Aster Digital проєктує та запускає сайти, SaaS-платформи, AI-інструменти та внутрішні системи для компаній, які хочуть рости швидше.',
      cta_primary:   'Почати проєкт',
      cta_secondary: 'Переглянути роботи',
      studio: 'Product Engineering Studio',
      s1: 'Будуємо SaaS-продукти.',
      s2: 'Інтегруємо AI.',
      s3: 'Автоматизуємо процеси.',
      s4: 'Запускаємо продукти.',
      scroll: 'Гортати',
    },
    build: {
      eyebrow:   '02 — Можливості',
      title:     'Одна студія. Повна продуктова екосистема.',
      core_name: 'Aster Core',
      core_desc: 'Спільна інфраструктура',
      web_tag:   'Web',
      web_name:  'Сайти',
      web_items: ['Лендінги', 'Корп. сайти', 'E-commerce', 'Веб-застосунки'],
      web_tech:  'Next.js · CMS · Figma',
      saas_tag:  'Platform',
      saas_name: 'SaaS-платформи',
      saas_items: ['Дашборди', 'Білінг', 'Auth', 'Multi-tenant'],
      saas_tech:  'PostgreSQL · Stripe · Auth.js',
      ai_tag:    'Intelligence',
      ai_name:   'AI-інструменти',
      ai_items:  ['Агенти', 'Копілоти', 'RAG', 'LLM API'],
      ai_tech:   'OpenAI · Anthropic · Vercel AI',
      auto_tag:  'Ops',
      auto_name: 'Автоматизація',
      auto_items: ['Воркфлоу', 'Вебхуки', 'CRM', 'Пайплайни'],
      auto_tech:  'n8n · Zapier · Custom APIs',
      int_tag:   'Internal',
      int_name:  'Внутрішні системи',
      int_items: ['Адмін-панелі', 'Аналітика', 'Operations', 'RBAC'],
      int_tech:  'Role-based · Audit log · Tailored',
      status_active: 'ACTIVE',
    },
    evolve: {
      eyebrow:  '03 — Процес',
      title:    'Як народжуються продукти.',
      stages:   ['Ідея', 'Архітектура', 'Розробка', 'Запуск', 'Результат'],
      captions: [
        'Ідея уточнюється — цілі, обмеження, перша форма продукту.',
        'Система набуває структури. Рішення, які витримують навантаження.',
        'Шар за шаром: UI, логіка, база даних, API, тести.',
        'Продукт виходить у реальний світ. Запуск під контролем.',
        'Живий продукт. Метрики. Ріст. Наступна ітерація.',
      ],
    },
    work: {
      eyebrow:  '04 — Вибрані роботи',
      title:    'Продукти, а не скриншоти.',
      view_all: 'Переглянути всі проєкти →',
      projects: [
        {
          title: 'Northwind',
          tag:   'SaaS-платформа',
          img:   'public/assets/project-saas.png',
          desc:  'Аналітична платформа для обробки мільярдів подій. Модель даних, білінг та дашборди реального часу.',
          meta:  ['Next.js', 'PostgreSQL', 'Білінг', 'Realtime'],
        },
        {
          title: 'Cipher',
          tag:   'AI-інструмент',
          img:   'public/assets/project-ai.png',
          desc:  'AI-копілот для юридичного документообігу. Retrieval-системи, агенти та контрольований шар моделі.',
          meta:  ['AI SDK', 'RAG', 'Агенти', 'Evals'],
        },
      ],
    },
    contact: {
      eyebrow:     '05 — Контакт',
      title:       'Є продукт, який варто побудувати?',
      desc:        'Розкажіть нам про свій проєкт. Відповідаємо на кожен серйозний запит протягом двох робочих днів.',
      label_name:  "Ім'я",
      label_email: 'Електронна пошта',
      label_msg:   'Повідомлення',
      ph_name:     "Ваше ім'я",
      ph_email:    'ви@компанія.com',
      ph_msg:      'Що ви будуєте?',
      btn_send:    'Надіслати повідомлення',
      ok:          'Дякуємо — ваше повідомлення надіслано. Відповімо протягом двох робочих днів.',
      err:         "Будь ласка, заповніть усі обов'язкові поля.",
    },
    footer: {
      copy: 'Aster Digital. Інженерно. Навмисно. Точно.',
    },
    modal: {
      close: 'Закрити',
    },
  },

  ru: {
    nav: {
      build:   'Услуги',
      process: 'Процесс',
      work:    'Работы',
      about:   'О нас',
      cta:     'Начать проект',
    },
    hero: {
      eyebrow: 'Инженерная студия · С 2019 года',
      t1: 'Мы создаём',
      t2: 'цифровые продукты',
      t3: 'для бизнеса.',
      desc: 'Aster Digital проектирует и запускает сайты, SaaS-платформы, AI-инструменты и внутренние системы для компаний, которые хотят расти быстрее.',
      cta_primary:   'Начать проект',
      cta_secondary: 'Посмотреть работы',
      studio: 'Product Engineering Studio',
      s1: 'Создаём SaaS-продукты.',
      s2: 'Интегрируем AI.',
      s3: 'Автоматизируем процессы.',
      s4: 'Запускаем продукты.',
      scroll: 'Листать',
    },
    build: {
      eyebrow:   '02 — Возможности',
      title:     'Одна студия. Полная продуктовая экосистема.',
      core_name: 'Aster Core',
      core_desc: 'Общая инфраструктура',
      web_tag:   'Web',
      web_name:  'Сайты',
      web_items: ['Лендинги', 'Корп. сайты', 'E-commerce', 'Веб-приложения'],
      web_tech:  'Next.js · CMS · Figma',
      saas_tag:  'Platform',
      saas_name: 'SaaS-платформы',
      saas_items: ['Дашборды', 'Биллинг', 'Auth', 'Multi-tenant'],
      saas_tech:  'PostgreSQL · Stripe · Auth.js',
      ai_tag:    'Intelligence',
      ai_name:   'AI-инструменты',
      ai_items:  ['Агенты', 'Копилоты', 'RAG', 'LLM API'],
      ai_tech:   'OpenAI · Anthropic · Vercel AI',
      auto_tag:  'Ops',
      auto_name: 'Автоматизация',
      auto_items: ['Воркфлоу', 'Вебхуки', 'CRM', 'Пайплайны'],
      auto_tech:  'n8n · Zapier · Custom APIs',
      int_tag:   'Internal',
      int_name:  'Внутренние системы',
      int_items: ['Админ-панели', 'Аналитика', 'Operations', 'RBAC'],
      int_tech:  'Role-based · Audit log · Tailored',
      status_active: 'ACTIVE',
    },
    evolve: {
      eyebrow:  '03 — Процесс',
      title:    'Как рождаются продукты.',
      stages:   ['Идея', 'Архитектура', 'Разработка', 'Запуск', 'Результат'],
      captions: [
        'Идея уточняется — цели, ограничения, первая форма продукта.',
        'Система обретает структуру. Решения, которые выдерживают нагрузку.',
        'Слой за слоем: UI, логика, база данных, API, тесты.',
        'Продукт выходит в реальный мир. Запуск под контролем.',
        'Живой продукт. Метрики. Рост. Следующая итерация.',
      ],
    },
    work: {
      eyebrow:  '04 — Избранные работы',
      title:    'Продукты, не скриншоты.',
      view_all: 'Посмотреть все проекты →',
      projects: [
        {
          title: 'Northwind',
          tag:   'SaaS-платформа',
          img:   'public/assets/project-saas.png',
          desc:  'Аналитическая платформа для обработки миллиардов событий. Модель данных, биллинг и дашборды реального времени.',
          meta:  ['Next.js', 'PostgreSQL', 'Биллинг', 'Realtime'],
        },
        {
          title: 'Cipher',
          tag:   'AI-инструмент',
          img:   'public/assets/project-ai.png',
          desc:  'AI-копилот для юридического документооборота. Retrieval-системы, агенты и управляемый слой модели.',
          meta:  ['AI SDK', 'RAG', 'Агенты', 'Evals'],
        },
      ],
    },
    contact: {
      eyebrow:     '05 — Контакт',
      title:       'Есть продукт, который стоит построить?',
      desc:        'Расскажите нам о своём проекте. Отвечаем на каждый серьёзный запрос в течение двух рабочих дней.',
      label_name:  'Имя',
      label_email: 'Электронная почта',
      label_msg:   'Сообщение',
      ph_name:     'Ваше имя',
      ph_email:    'вы@компания.com',
      ph_msg:      'Что вы строите?',
      btn_send:    'Отправить сообщение',
      ok:          'Спасибо — ваше сообщение отправлено. Ответим в течение двух рабочих дней.',
      err:         'Пожалуйста, заполните все обязательные поля.',
    },
    footer: {
      copy: 'Aster Digital. Инженерно. Намеренно. Точно.',
    },
    modal: {
      close: 'Закрыть',
    },
  },
};

/* ── engine ── */
const i18n = (function () {
  const KEY = 'aster-lang';
  let current = 'uk';

  function t(path) {
    const keys = path.split('.');
    let v = I18N[current];
    for (const k of keys) { if (v == null) return path; v = v[k]; }
    return v ?? path;
  }

  function applyDOM() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const val = t(el.dataset.i18n);
      if (typeof val === 'string') el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const val = t(el.dataset.i18nHtml);
      if (typeof val === 'string') el.innerHTML = val;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      el.dataset.i18nAttr.split('|').forEach(pair => {
        const [attr, key] = pair.split(':');
        const val = t(key);
        if (typeof val === 'string') el.setAttribute(attr, val);
      });
    });
    document.documentElement.lang = current === 'uk' ? 'uk' : 'ru';
  }

  function updateSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const on = btn.dataset.lang === current;
      btn.classList.toggle('is-active', on);
      btn.setAttribute('aria-pressed', String(on));
    });
  }

  function setLanguage(lang) {
    if (!I18N[lang]) return;
    current = lang;
    try { localStorage.setItem(KEY, lang); } catch (_) {}
    applyDOM();
    updateSwitcher();
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
  }

  function getCurrent() { return current; }

  function init() {
    try { const s = localStorage.getItem(KEY); if (I18N[s]) current = s; } catch (_) {}
    applyDOM();
    updateSwitcher();
    document.addEventListener('click', e => {
      const btn = e.target.closest('.lang-btn');
      if (btn?.dataset.lang) setLanguage(btn.dataset.lang);
    });
  }

  return { init, t, setLanguage, getCurrent, applyDOM };
})();

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => i18n.init());
} else {
  i18n.init();
}
