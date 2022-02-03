import { Header } from "./Header"
import { Content } from "./Content"

const Contents = ({ courses = [] }) => {
  return courses.map((course) => {
    return <Content key={course.id} course={course.name?course.name:"Not name yet"} cant={course.exercises?course.exercises:0} />
  })
}
export const Course = ({ courseInfo = {} }) => {
  return (
    <>
      <Header text={courseInfo.name} />
      <Contents courses={courseInfo.parts} />
    </>
  )
}
