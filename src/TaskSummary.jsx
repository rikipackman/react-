// קומפוננטת בת: מקבלת את רשימת המשימות מקומפוננטת האב (App),
// ומציגה סיכום — כמה משימות יש בסך הכל, וכמה מהן הושלמו.
function TaskSummary(props) {
  const total = props.tasks.length

  const completed = props.tasks.filter(
    (task) => task.status === 'הושלם'
  ).length

  return (
    <div className="task-summary">
      <h2>סיכום</h2>
      <p>
        יש {total} משימות, מתוכן {completed} הושלמו.
      </p>
    </div>
  )
}

export default TaskSummary
