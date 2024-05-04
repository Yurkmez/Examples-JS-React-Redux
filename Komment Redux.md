# Redux

## 1. Импорт модулей

npm install react-redux \
npm install @reduxjs/toolkit

## 2. Организация работы

-   <span style="color:yellow"> **index.js**</span>. \
    <span style="color:lightgreen">(обеспечиваем всем компонентам доступ к магазину redux ("магазин" story))</span>.

import { Provider } from 'react-redux'; \
import store from './store';

```
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
```

-   <span style="color:yellow"> **sendEvent.js**</span>. \
    <span style="color:lightgreen">(из данного файла передается событие в файл store)</span>.

import { useDispatch } from 'react-redux'; \
import { addBook } from './slice';

<span style="color:lightgreen">(хук отправки данных в story)</span>. \
const dispatch = useDispatch();

```
const [formDate, setFormDate] = useState({
        title: '',
        author: '',
    });
```

<span style="color:lightgreen">(отправка данных в story через обработчик)</span>.

```
    const handleSubmit = (e) => {
        ...
            dispatch(addBook(formDate));
        ...
    };
```

-   <span style="color:yellow"> **acceptanceEvent.js**</span>. \
    <span style="color:lightgreen">(в данном файле принимается событие из файла store)</span>. \
    import { useSelector } from 'react-redux'; \
    import { selectBooks } from './slice'; \
    <span style="color:lightgreen">(подписываемся на изменения состояния books)</span>. \
     const books = useSelector(selectBooks);

<span style="color:lightgreen">(отражаем)</span>. \
 `    <p>{book.title}</p>
    <p>{book.author}</p>
   `

-   <span style="color:yellow"> **story.js**</span>. \
     <span style="color:lightgreen">(собственно, магазин store)</span>. \
     import { configureStore } from '@reduxjs/toolkit'; \
    import Reducer from './slice';

```
const store = configureStore({
    reducer: {
        books: Reducer,
    },
});

export default store;
```

-   <span style="color:yellow"> **slice.js**</span>. \
     <span style="color:lightgreen">(собственно, reducer)</span>. \
    import { createSlice } from '@reduxjs/toolkit';

const initialState = {
books: [],
};

const slice = createSlice({ \
 name: 'books',
initialState, \
 reducers: { \
 addBook: (state, action) => {
state.books.push(action.payload); \
 }, \
 });

export const { addBook } = slice.actions; \
export const selectBooks = (state) => state.books.books; \
export default slice.reducer;

## Как это работает.

Из <span style="color:yellow"> **sendEvent.js**</span> мы передаем в <span style="color:yellow"> **slice.js**</span> (через dispatch) ф-цию **addBook**, передавая туда объект **book**.  
В <span style="color:yellow"> **slice.js**</span> с ним выполняется определенное действие (в рассмотренном случае добавление книги), которое отслеживается в <span style="color:yellow"> **store .js**</span>.

<p style="color:grey">...configureStore(
    reducer: 
        books: Reducer ...).</p>

В свою очередь, файл <span style="color:yellow">**acceptanceEvent.js**</span> подписан на изменение состояния selectBooks <p style="color:grey">(const books = useSelector(selectBooks)),</p>  
и, по аналогии с **useState**, при изменении состояния **selectBooks** происходит ререндеринг компонента-файла <span style="color:yellow">**acceptanceEvent.js**</span>.
