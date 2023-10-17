import { students } from "./utils"
export default function Students() {
  return (
    <section className="students">
      <div className="container">
        <h2 className="students__headline">
          Ученики
        </h2>
        <ul>
          <li>Все</li>
          <li>Концерты</li>
          <li>Джемы</li>
          <li>Съемки</li>
        </ul>
        <ul>
          {students.map((student, index) => {
            return <li key={index}>
              <h4>{student.name}</h4>
            </li>
          })}
        </ul>
      </div>
    </section>
  )
}