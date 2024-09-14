# Rick & Morty Universe

## Описание проекта

Это одностраничное приложение (SPA), созданное с использованием публичного API `Rick and Morty`, которое отображает список карточек персонажей. Данные карточек загружаются с API и сохраняются в Redux-хранилище. Приложение позволяет пользователю взаимодействовать с карточками, ставить "лайки", удалять карточки, а также фильтровать только залайканные карточки.

## Функционал

- **Загрузка данных:** Данные персонажей загружаются с публичного API и сохраняются в Redux.
- **Карточки персонажей:** Отображение карточек с изображением и именем персонажей известного мульт-сериала.
- **Лайк:** Возможность лайкать персонажей. Залайканные карточки помечаются соответствующим цветом.
- **Удаление:** Возможность удаления карточки персонажа.
- **Фильтрация:** Кнопка фильтрации залайканных карточек. При активации показываются только залайканные карточки.
 - **Восстановление удаленых карточек**: Пользователь может восстановить удаленные карточки персонажей.
- **Переход на страницу персонажа:** При клике на карточку (кроме кнопок лайка и удаления) пользователь переходит на отдельную страницу персонажа с полным описанием. На этой странице также есть кнопка для возврата к списку карточек.

## Технологический стек

- **TypeScript**
- **CSS**
- **React**
- **Redux Toolkit (RTK Query)**

## Инструкции по установке и запуску

### Требования:

- **Node.js** версии 18.20.1 или выше.

### Шаги по установке:

1. Клонируйте репозиторий:
   `git clone https://github.com/Boolick/RickAndMorty-Universe.git`

2. Перейдите в папку проекта:
 `cd rick-morty-universe`
3. Установите зависимости: 
 `npm install`
4. Запустите сервер:
`npm run dev`

Примечание: если после выполнения команды `$ npm install` возникнут ошибки, удалите папку `node_modules` и файл `package-lock.json`, затем выполните `$ npm install`.

#### Описание доступных скриптов:
`npm run dev` 
Запускает приложение в режиме разработки. Откройте http://localhost:5173/ для просмотра в браузере. Страница автоматически перезагрузится при изменениях в коде. Также в консоли будут отображаться ошибки форматирования.

`npm run build`
Собирает приложение для продакшена в папку `/dist`. Приложение будет оптимизировано для наилучшей производительности.

`npm run format`
Форматирует код с помощью Prettier в соответствии с конфигурацией.

`npm run lint`
Запускает линтер ESLint для проверки кода по стандартам Airbnb.

`npm run lint --fix`
Запускает ESLint и автоматически исправляет найденные ошибки.

Публичное API.
Данные для карточек загружаются с публичного API: [Rick and Morty API](https://rickandmortyapi.com/)

##### Планы на будущее
- Добавление пагинации для списка персонажей.
- Улучшение стилизации, анимации адаптивности интерфейса.
- Добавление возможности поиска персонажей по имени, типу, локации.

Автор:
Александр Булло
