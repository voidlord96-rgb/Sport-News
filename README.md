# Sport News

Современный веб-сайт спортивных новостей, разработанный с использованием **React** и **Vite**.

## О проекте

Sport News — frontend-проект, созданный на основе дизайна из **Figma**.

Проект демонстрирует работу с React-компонентами, семантическим HTML, BEM-методологией, CSS-переменными и интерактивными элементами интерфейса.

## Основные возможности

* Навигация по разделам сайта
* Поиск по интерфейсу
* Категории видов спорта
* Новостные карточки
* Таблица рейтинга футбольных клубов
* Интерактивная пагинация
* Форма подписки на рассылку
* Переключение и взаимодействие с элементами интерфейса

## Используемые технологии

* React
* JavaScript
* Vite
* React Router
* CSS3
* Font Awesome

### Библиотеки

* `react-router-dom`
* `@fortawesome/react-fontawesome`
* `@fortawesome/fontawesome-svg-core`
* `@fortawesome/free-solid-svg-icons`
* `@fortawesome/free-brands-svg-icons`

## Дизайн

Проект реализован на основе **Figma-дизайна** с сохранением основных:

* цветовой системы;
* типографики;
* структуры блоков;
* отступов и размеров;
* расположения изображений;
* интерактивных элементов.

<details>
<summary>Скриншот проекта</summary>

![Sport-News](Landing.png)

</details>

## Подход к разработке

В проекте используются:

* компонентная архитектура React;
* BEM-методология;
* семантический HTML;
* CSS-переменные;
* переиспользуемые массивы данных;
* `useState` для интерактивных элементов.

## Структура проекта

```text
src/
├── components/
│   ├── sport-nav/
│   ├── header/
│   ├── category/
│   ├── news-dashboard/
│   ├── football/
│   ├── news-and-ranking/
│   ├── sports-article/
│   ├── subscribe/
│   ├── fonts/
│   └── img/
├── App.jsx
├── main.jsx
└── index.css
```

## Установка и запуск

Клонируйте репозиторий:

```bash
git clone https://github.com/voidlord96-rgb/Sport-News.git
```

Перейдите в папку проекта:

```bash
cd Sport-News
```

Установите зависимости:

```bash
npm install
```

Запустите сервер разработки:

```bash
npm run dev
```

Для production-сборки:

```bash
npm run build
```

## Репозиторий

[GitHub](https://github.com/voidlord96-rgb/Sport-News.git)

## Автор

**Алан**

Frontend Developer

## Лицензия

Проект создан в образовательных целях и для демонстрации навыков frontend-разработки.
