function UserDetails(props) {
  const { name, role, email } = props.user

  return (
    <section className="user-details">
      <h2>פרטי משתמש</h2>
      <p>שם: {name}</p>
      <p>תפקיד: {role}</p>
      <p>דוא״ל: {email}</p>
    </section>
  )
}

export default UserDetails
