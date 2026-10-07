import TaskList from './TaskList'
import TaskSummary from './TaskSummary'
import UserDetails from './UserDetails'

function App() {
  // רשימת המשימות — כל משימה היא אובייקט עם שם וסטטוס.
  // הנתונים מוגדרים כאן בלבד (בקומפוננטת האב), ולא אמורים להשתנות.
  const tasks = [
    { id: 1, name: 'פריט 1', status: 'הושלם' },
    { id: 2, name: 'פריט 2', status: 'בטיפול' },
    { id: 3, name: 'פריט 3', status: 'הושלם' },
    { id: 4, name: 'פריט 4', status: 'ממתין' },
  ]

  // פרטי המשתמש — יועברו לקומפוננטת המשתמש
  const user = {
    name: 'שם מלא 1',
    role: 'תפקיד 1',
    email: 'user@example.com',
  }

  return (
    <div className="app">
      <h1>ניהול משימות</h1>
      <UserDetails user={user} />
      <TaskList tasks={tasks} />
      <TaskSummary tasks={tasks} />
    </div>
  )
}

export default App
