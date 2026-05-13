import github from "../assets/images/github.svg"

export default function Main(){
  return(
        <main className="container">
      <section className="descriptions">
        <article>
          <h2>About</h2>
          <p>I am currently learning web development starting with frontend. </p>
          <p>I am a self learner and great in problem solving</p>
          <p>I will try to keep up with security and best practices, and I am looking forward to learning new things</p>
        </article>
        <article>
          <h2>Interests</h2>
          <p>I am currently a freelance rollerskate instructor</p>
          <p>I practice roller skate as a dancer and  as a mean of transportation</p>
          <p>I love science fiction and geopolitics</p>
        </article>
      </section>
    
    <section className="footer">
         <button className="github"><img src={github} alt="Follow my work on github" /><a href="#"></a></button>
      </section>
    </main>
  )
}