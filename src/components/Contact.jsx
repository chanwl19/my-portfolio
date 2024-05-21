import { Form, useNavigate } from 'react-router-dom';
import classes from './Contact.module.css'
import { contacts } from '../data';

export default function Contact() {
  const navigate = useNavigate();

  function handleSubmit() {
    event.preventDefault();
    navigate('/');
  }
  return (
    <section>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" name="firstName" id="firstName" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" name="lastName" id="lastName" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" required/>
        </div>
        <div className={classes.control}>
          <label htmlFor="contact">Contact Number:</label>
          <input type="text" name="contact" id="contact" required/>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Messager:</label>
          <textarea name="message" id="message" required/>
        </div>
        <div className={classes.actions}>
          <button type="submit">Submit</button>
        </div>
      </form>
      <div>
        {contacts.map(contact => (
          <p>{contact}</p>
        ))}
      </div>
    </section>
  )
}


