# Random Users API APP

1. [Структура](#Structure)
1. [Пример](#Example)
1. [Getting Started with Create React App](#class)

Используя [RandomUser API](https://randomuser.me/documentation) реализовано:

- Фильтрация по гендеру и национальности
- Плагинация
- Открытие модального окна с детальной информации по отдельному пользователю
- Темная и светлая тема

В ветке [main](https://github.com/Jannik666/Random-User-API/tree/TypeScript) проект реализован на JavaScript.

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
│  │   ├── User.ts
│  │   ├── User.types.ts
│  ├── components
│  │   ├── SwitchButton
│  │   │    ├── index.ts
│  │   │    ├── MaterialUISwitch.ts
│  │   │    ├── SwitchButton.tsx
│  │   │    └── SwitchButton.types.ts
│  │   ├── User
│  │   │    ├── index.ts
│  │   │    ├── User.tsx
│  │   │    └── User.types.ts
│  │   ├── UserForm
│  │   │    ├── index.ts
│  │   │    ├── UserForm.tsx
│  │   │    └── UserForm.types.ts
│  └── containers
│  │   ├── Filter
│  │   │    ├── constans.ts
│  │   │    ├── Filter.tsx
│  │   │    ├── Filter.types.ts
│  │   │    └── index.ts
│  │   ├── UserContainer
│  │   │    ├── index.ts
│  │   │    └── UserContainer.tsx
│  │   ├── UserList
│  │   │    ├── index.ts
│  │   │    ├── UserList.tsx
│  │   │    └── UserList.types.ts
│  └── providers
│  │   ├── LocalesProvider
│  │   │    ├── index.ts
│  │   │    ├── LocalesProvider.tsx
│  │   │    ├── LocalesProvider.types.ts
│  │   │    └── translations.ts
│  │   └── ThemeProvider
│  │        ├── index.ts
│  │        ├── ThemeProvider.tsx
│  │        └── ThemeProvider.types.ts
│  ├── App.tsx
│  ├── index.css
│  └── index.tsx
├── .gitignore
├── package.json
├── README.md
├── tsconfig.json
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
