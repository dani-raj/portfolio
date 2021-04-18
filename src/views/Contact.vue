<template>
  <div id="contact">
      <div class="thanks-box" v-if="isThanksVisible">
          <p><span>Thank you for your letter!</span>I will reply as soon as possible.</p>
      </div>
      <div id="form-container">
          <h1 class="headline">Let's get to know each other!</h1>
          <form id="form" action="/" v-on:submit.prevent="checkForm">
            <div class="form-group">
                <label for="name">Name</label>
                <input :class="{error: nameError}" v-model="name" id="name" name="name" type="text" placeholder="Enter your name">
                <p v-if="nameError" class="error-message">Please enter your name</p>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input :class="{error: emailError}" v-model="email" id="email" name="email" type="email" placeholder="Enter your email">
                <p v-if="emailError" class="error-message">Please enter your email</p>
            </div>
            <div class="form-group">
                <label for="message">Message</label>
                <textarea :class="{error: messageError}" v-model="message" name="message" id="message" cols="30" rows="10" placeholder="Write your message here"></textarea>
                <p v-if="messageError" class="error-message">Please write a message</p>
            </div>
            <button type="submit" id="submit-btn" value="Send">Send</button>
          </form>
      </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
    data() {
        return {
            name: '',
            email: '',
            message: '',
            error: false,
            nameError: false,
            emailError: false,
            messageError: false,
            isThanksVisible: false
        }
    },
    methods: {
        checkForm(e) {
            this.name.length > 0 ? this.nameError = false :  this.nameError = true
            this.email.indexOf('@') > 0 ? this.emailError = false : this.emailError = true
            this.message.length > 0 ? this.messageError = false :  this.messageError = true

            if (this.nameError === false && this.emailError === false && this.messageError === false) {
                this.sendMail(e)
            }
        },
        sendMail(e) {
            try {
                emailjs.sendForm('service_lca2web', 'template_yr85n69', e.target, 'user_HNfIVBylZHbtFjHAJjetm', 
                {
                    name: this.name,
                    email: this.email,
                    message: this.message
                })
                    this.isThanksVisible = true
                    this.setThanksMsg()
            } catch(error) {
                console.log({error})
            }
                this.name = ''
                this.email = ''
                this.message = ''
        },
        setThanksMsg() {
            this.interval = setInterval(function(){
                this.isThanksVisible = false;
            }.bind(this), 5000);
        }
    }
}
</script>

<style>
    .thanks-box {
        background:  rgb(18, 20, 57);
        height: 100px;
        width: 30%;
        margin: 0 auto;
        color: #fff;
        position: fixed;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
        z-index: 2000;
        border-radius: 20px 20px 0px 0px;
    }
    .thanks-box p {
        margin: 2rem auto;
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
    }
    #form-container {
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        margin: 4rem auto 6rem;
        max-width: 450px;
        padding: 3rem; 
    }
    .headline {
        margin-bottom: 5rem;
    }
    .form-group {
        display: flex;
        flex-direction: column;
        max-width: 70%;
        margin: 2rem auto;
    }
    input, textarea {
        opacity: .6;
        padding: .4rem;   
        margin-top: 2rem;
        outline: none;
    }
    input {
        border: none;
        border-bottom: 1px solid #ccc;
    }
    input.error, textarea.error {
        border: 1px solid rgb(250, 100, 100)
    }
    #submit-btn {
        display: flex;
        align-items: center;
        background: rgb(18, 20, 57, .9);
        border: none;
        outline: none;
        color: #fff;
        padding: .7rem 1.7rem;
        margin: 1rem auto;
        cursor: pointer;
        transition: all .2s;
        font-weight: 500;
    }
    #submit-btn:hover {
        background: rgb(18, 20, 57, 1);
    }
    .error-message {
        font-size: 14px;
        color: rgb(250, 100, 100);
    }
    textarea {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

  @media (max-width: 500px) {
    #form-container {
        max-width: 70%;
    }
    input, textarea {
        margin-top: 2rem;
    }
    .form-group {
        width: 500px;
    }
    .thanks-box {
        width: 50%;
    }
  }

  @media (max-width: 376px) {
    #form-container {
        max-width: 245px;
    }
  }

  @media (max-width: 320px) {
    #form-container {
        max-width: 200px;
    }
  }

  @media (max-width: 280px) {
    #form-container {
        max-width: 160px;
    }
  }

</style>


