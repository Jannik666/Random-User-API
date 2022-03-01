# Random Users API APP

1. [Структура](#Structure)
1. [Пример](#Example)
1. [Getting Started with Create React App](#class)

Используя [RandomUser API](https://randomuser.me/documentation) реализовано:

- Фильтрация по гендеру и национальности
- Плагинация
- Открытие модального окна с детальной информации по отдельному пользователю
- Темная и светлая тема

В ветке [TypeScript](https://github.com/Jannik666/Random-User-API/tree/TypeScript) проект реализован на TypeScript.

---

#### <a name="Example"></a> Пример

![Пример](./random-users.gif)

---

#### <a name="Structure"></a> Структура

```q
main
├── public
├── src
│  ├── api
│  │   ├── User.js
│  ├── components
│  │   ├── SwitchButton
│  │   │    ├── index.js
│  │   │    ├── MaterialUISwitch.js
│  │   │    └── SwitchButton.js
│  │   ├── User
│  │   │    ├── index.js
│  │   │    └── User.js
│  │   ├── UserForm
│  │   │    ├── index.js
│  │   │    └── UserForm.js
│  └── containers
│  │   ├── Filter
│  │   │    ├── constans.js
│  │   │    ├── Filter.js
│  │   │    └── index.js
│  │   ├── UserContainer
│  │   │    ├── index.js
│  │   │    └── UserContainer.js
│  │   ├── UserList
│  │   │    ├── index.js
│  │   │    └── UserList.js
│  └── providers
│  │   ├── LocalesProvider
│  │   │    ├── index.js
│  │   │    ├── LocalesProvider.js
│  │   │    └── translations.js
│  │   └── ThemeProvider
│  │        ├── index.js
│  │        └── ThemeProvider.js
│  ├── App.js
│  ├── index.css
│  └── index.js
├── .gitignore
├── package.json
├── README.md
└── yarn.lock

```

# <a name="class"></a> Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
