## Redux Todo

Za pokretanje ovog projekta, napraviti instalaciju potrebnih modula `yarn install` te pokrenuti node script `yarn start`, ovo je implementacija bez backend baze, za implementacija sa Firebaseom pogledati branch firebase


### Primjer 

nadimak: flipkod@flipkod.hr

lozinka: Flipkod54321

url : [tihi321.github.io/Redux-Todolist](https://tihi321.github.io/Redux-Todolist/)

Za ovaj projekt korišten je react, redux te bootstrap i bootstrap table, za podatke korištnen immutable.js

## Struktura foldera

```
todo/
  ...
  src/
    actions/
      forms.js
      login.js
      modals.js
      todos.js
      types.js
    components/
      Buttons/
        AddButton/
          index.jsx
        DeleteButton/
          index.jsx
        EditButton/
          index.jsx
      Forms/
        AddForm/
         index.jsx
        Edit/
          index.jsx
      Table/
        index.jsx
      Title/
        index.jsx
      App.jsx
      Home.jsx
      Login.jsx
    config/
      constants.js
    containers/
      index.js
    reducers/
      formReducer.js
      index.js
      loginReducer.js
      modalsReducer.js
      todosReducer.js
    utils/
      registerServiceWorker.js
    index.css
    index.js
    store.js
  ...
```

Više o načinu rada aplikacije u komentarima unutar koda u folderima `actions`, `containers` i `reducers`
