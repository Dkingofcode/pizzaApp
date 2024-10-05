import React from 'react';
import Widget from './widget';


const profileCard = () => {

    const skills = [
       {
        stack: "HTML+CSS",
        level: 'advanced'
       },
       {
        stack: "JavaScript",
        level: 'advanced'
       },
       {
        stack: "React",
        level: 'advanced'
       },
       {
        stack: "Nodejs",
        level: 'advanced'
       },
       {
        stack: "Angular",
        level: 'advanced'
       },
       {
        stack: "Vuejs",
        level: 'advanced'
       },
       {
        stack: "Nextjs",
        level: 'advanced'
       },
       

    ]

  return (
    <div>
      <h1>Ronald Ropert</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or preparing
        a course, I like to play board games, to cook (and eat), or to just enjoy the
        Portugese sun at the beach.
      </p>
      {skills.map((skill) => (
      <Widget  skill={skill.stack} level={skill.level} />
      ))}
    </div>
  )
}

export default profileCard;
