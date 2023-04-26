/* Create a To do list in Next.js 

- add items to do the list
- delete items from the list
*/

import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
 // create state for to do list with default items like: learn next.js, learn react.js, learn copilot
  const [todoList, setTodoList] = useState([
    { id: uuidv4(), name: 'Learn Next.js' },
    { id: uuidv4(), name: 'Learn React.js' },
    { id: uuidv4(), name: 'Learn Copilot' },
  ]);

  // create state for to do items
  const [todoItem, setTodoItem] = useState('');

  // function that handles adding new items to list
  const handleAddItem = () => {
    // create new item object
    const newItem = { id: uuidv4(), name: todoItem };
    // update state with new item
    setTodoList([...todoList, newItem]);
    // reset input field
    setTodoItem('');
  }

  // function that handles deleting items from list
  const handleDeleteItem = (id) => {
    // filter out item with id
    const filteredList = todoList.filter((item) => item.id !== id);
    // update state with new list
    setTodoList(filteredList);
  }

  // render input field and button to add items and list of items
  return (
    <div className="container">
      <Head>
        <title>To Do List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>To Do List</h1>
        <input
          type="text"
          value={todoItem}
          onChange={(e) => setTodoItem(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
        <ul>
          {todoList.map((item) => (
            <li key={item.id}>
              {item.name}
              <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
        </main>

    </div>
  );

}
