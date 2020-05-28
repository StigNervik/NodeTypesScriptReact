## Node TypeScript React project

This project uses Node and React there the Node is written in TypeScript and React in JavaScript.

### Install the node server

Create project file and install TypeScript.

```
$ yarn init
$ yarn add typescript --dev

```

Update the package.json file to call typescript compilator from the command line:

```
"scripts": {
    "tsc": "tsc"
}
```

Create the typescript configuration file:

```
$ npx tsc --init
```

Install Express and Express types:

```
$ yarn add express @types/express
```

Create the server file, compile and run server:

```
$ touch server.ts
$ yarn tsc
$ node server.js
```

## React client

A React applicaton which is the frontend of this project.
React is a JavaScript library for building user interfaces.
Using Create React App that is the best way to start building a new single page application in React.

```
npx create-react-app client
cd client
npm start
```
