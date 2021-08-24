import React, { Component } from "react";
import "../styles/ContactPage.css";
import { Prompt } from "react-router-dom";

class ContactPage extends Component {
  state = {
    username: "",
    email: "",
    message: "",
    accept: false,

    errors: {
      username: false,
      email: false,
      message: false,
      accept: false,
    },
  };

  errorMessages = {
    username_incorrect: "Twoje imię powinno zawierać conajmniej 3 znaki",
    email_incorrect: "Błędny adres email!",
    message_incorrect: "Wiadomość powinna zawierać conajmniej 5 znaków",
    accept_incorrect: "Wyraź zgodę na przetwarzanie danych osobowych",
  };

  handleChange = (e) => {
    const name = e.target.name;
    const type = e.target.type;

    if (type === "text" || type === "email") {
      this.setState({
        [name]: e.target.value,
      });
    } else if (type === "checkbox") {
      const checked = e.target.checked;
      this.setState({
        [name]: checked,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const validation = this.formValidation();
    if (validation.correct) {
      this.setState({
        username: "",
        email: "",
        message: "",
        accept: false,
        success: "Formularz został wysłany",

        errors: {
          username: false,
          email: false,
          message: false,
          accept: false,
        },
      });
    } else {
      this.setState({
        errors: {
          username: !validation.username,
          email: !validation.email,
          message: !validation.message,
          accept: !validation.accept,
        },
      });
    }
  };

  formValidation = () => {
    let username = false;
    let email = false;
    let message = false;
    let accept = false;
    let correct = false;

    if (this.state.username.length > 3) {
      username = true;
    }
    if (this.state.email.indexOf("@") !== -1) {
      email = true;
    }
    if (this.state.message.length > 5) {
      message = true;
    }
    if (this.state.accept) {
      accept = true;
    }
    if (username && email && message && accept) {
      correct = true;
    }
    return {
      username,
      email,
      message,
      accept,
      correct,
    };
  };

  componentDidUpdate() {
    if (this.state.success !== "") {
      setTimeout(
        () =>
          this.setState({
            success: "",
          }),
        3000
      );
    }
  }

  handleTextArea = (e) => {
    this.setState({
      message: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <h1>Napisz do nas</h1>
        <div className="form_wrapper">
          <div className="contact_info">
            <p>Numer telefonu: +48 535 800 355</p>
            <p>E-mail: benartstudio@gmail.com</p>
          </div>
          <form
            className="form"
            onSubmit={this.handleSubmit}
            noValidate
            id="contactForm"
          >
            <input
              type="text"
              name="username"
              id="username"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Imię"
            />
            {this.state.errors.username && (
              <span className="error">
                {this.errorMessages.username_incorrect}
              </span>
            )}
            <input
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
              id="email"
              placeholder="e-mail"
            />
            {this.state.errors.email && (
              <span className="error">
                {this.errorMessages.email_incorrect}
              </span>
            )}
            <textarea
              form="contactForm"
              placeholder="Twoja wiadomość"
              value={this.state.message}
              onChange={this.handleTextArea}
              rows="5"
            ></textarea>
            {this.state.errors.message && (
              <span className="error">
                {this.errorMessages.message_incorrect}
              </span>
            )}
            <label htmlFor="accept">
              <input
                type="checkbox"
                id="accept"
                checked={this.state.accept}
                onChange={this.handleChange}
                name="accept"
              />
              Wyrażam zgodę na przetwarzanie danych osobowych przez BenArt
              studio dekoracji...
            </label>
            {this.state.errors.accept && (
              <span className="error">
                {this.errorMessages.accept_incorrect}
              </span>
            )}
            <button className="form_button">Wyślij</button>
          </form>
          <Prompt
            when={this.state.message ? true : false}
            message="Formularz niewysłany. Czy na pewno chcesz opuścić tę stronę?"
          />
          {this.state.success && (
            <h2 className="success_message">{this.state.success}</h2>
          )}
        </div>
      </div>
    );
  }
}

export default ContactPage;
