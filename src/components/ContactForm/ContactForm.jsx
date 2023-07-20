import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    createUser: PropTypes.func.isRequired,
  };

  handeleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  hendleSubmit = e => {
    const { name, number } = this.state;
    e.preventDefault();

    this.props.createUser({
      name: name,
      number: number,
    });
    this.resetState();
  };

  resetState = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.hendleSubmit}>
        <label className={css.label} htmlFor={this.loginInputId}>
          Name:
          <input
            className={css.input}
            id={this.loginInputId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handeleChange}
          />
        </label>
        <label className={css.label} htmlFor={this.loginInputId}>
          Number:
          <input
            className={css.input}
            id={this.loginInputId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handeleChange}
          />
        </label>
        <button className={css.submit} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
