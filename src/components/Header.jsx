import avatar from "../assets/images/avatarRB.jpg"
import email from "../assets/images/email.svg"
import linkedin from "../assets/images/linkedin.svg"

export default function Header(){
  return (
    <header>
      <img src={avatar} alt="Rosa Benchabane avatar" className="avatar"/>
      <section className="titles">
        <h1>Rosa Benchabane</h1>
        <h2>Frontend Developer</h2>
        <p><a href="#" target="_blank" rel="noopener noreferrer">Visit My Portfolio</a></p>
      </section>
      <section className="buttons">
        <button className="email"><img src={email} alt="email to" /> <a href="mailto:benchabane.rosa@outlook.com"> Email</a></button>
        <button className="linkedin"><img src={linkedin} alt="linkedin link" /><a href="https://www.linkedin.com/in/rosa-ben?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank"> Linkedin</a></button>
      </section>
    </header>
  )
}