## Firebase, Redux Todo

Za pokretanje ovog projekta, kreirati datoteku `fire.js` unutar foldera `src/config` te kopirati kredencije sa vašeg firebase računa, napraviti instalaciju potrebnih modula `yarn install` te pokrenuti node script `yarn start`

Za ovaj projekt je korišten firebase za bazu i autentikaciju, react, redux te bootstrap i bootstrap table, za podatke korišten immutable.js

Kod firebase-a promjene ne ulaze u stanje store-a jer firebase usluga sama šalje promjene automatski, te time crud operacije tamo nisu potrebne, crud operacije se nalaze unutar `middleware/firebase.js`

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
        styled.js
      App.jsx
      Home.jsx
      Login.jsx
    config/
      constants.js
      fire.js
    containers/
      index.js
    middleware/
      firebase.js
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

#### Vrijeme riješavanja:

3 dana