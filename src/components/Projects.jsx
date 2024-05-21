import Card from '../ui/Card';
import classes from './Projects.module.css';
import { projects } from '../data';

export default function Projects() {
  function getImage(name){
    return new URL(`../assets/${name}`, import.meta.url).href;
  }
  return (
    <>
      <h2>My Projects</h2>
      {projects.map(
        project => {
          return (
              <Card key={project.title}>
                <section className={classes.detail}>
                    <img src={getImage(project.image)} alt={project.description}></img>
                    <h3>{project.tite}</h3>
                    <p>{project.description}</p>
                    <a href={project.link} target="_blank">Visit Page</a>
                </section>
              </Card>
          )
        }
      )}
    </>
  )
}


