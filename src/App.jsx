import { Box, Divider } from '@mui/material'
import { useState } from 'react'
import SidebarNav from './components/layouts/SidebarNav'
import AppHeader from './components/layouts/AppHeader'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Layout from './components/layouts/Layout';
import TodoList from './pages/todo/TodoList';
import ImportantNotes from './pages/notes/ImportantNotes';
import Reminders from './pages/notes/Reminders';
import TodoCategorised from './pages/todo/TodoCategorised';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/todoList' element={<TodoList />} />
          <Route path='/importantNotes' element={<ImportantNotes />} />
          <Route path='/taskGroups' element={<TodoCategorised />} />
          <Route path='/reminders' element={<Reminders />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
