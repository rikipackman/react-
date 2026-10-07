// קומפוננטת בת: מקבלת את רשימת המשימות מקומפוננטת האב (App)
// דרך props, ומציגה כל משימה — שם וסטטוס.
function TaskList(props) {
  return (
    <div className="task-list">
      <h2>רשימת המשימות</h2>
      <ul>
        {props.tasks.map((task) => (
          <li key={task.id}>
            {task.name} — {task.status}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskList
