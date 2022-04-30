import { Skills } from "./Skills"

export const SkillsContainer = ({ skills }) => {

  const skillList = skills.map(skill => {
    return <Skills
      key={Date.now()}
      skill={skill}
      />
  })
  
  return (
    <section>
      {skillList}
    </section>
  )
}