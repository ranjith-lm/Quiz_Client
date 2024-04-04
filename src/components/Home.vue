<template>
  <div>
    <div class="toolbar">
<div class="spacer"></div>
      <button class="toolbar-button">About</button>
      <button class="toolbar-button">Info</button>
    </div>
    <div class="quiz-container">

      <div class="quiz-form">
        <loader v-if="showLoader"></loader>
        <div class="input-group">
          <input type="text" v-model="name" class="form-control" placeholder="Enter Your Name">
        </div>
        <div class="input-group">
          <input type="email" v-model="email" class="form-control" placeholder="Enter Your Email">
        </div>
        <div class="input-group">
          <input type="text" v-model="code" class="form-control" placeholder="Enter Code (Q1001)">
        </div>
        <div class="error-message" v-if="isIncorrectCode">Incorrect Code</div>
        <button @click="validateCode" class="btn btn-primary" :disabled="disable">SUBMIT</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Loader from './Loader';

export default {
  components: {
    Loader,
  },
  data() {
    return {
      name: '',
      code: '',
      email: '',
      isIncorrectCode: false,
      showLoader: false,
      quiz: '',
    };
  },
  methods: {
    validateCode: function () {
      this.showLoader = true;
      axios
        .get('./static/json/questions.json')
        .then((response) => {
          for (let data of response.data) {
            if (data.code == this.code) {
              this.quiz = data.quiz;
              console.log("this.quiz", this.quiz)
              this.$router.push({ name: 'Quiz', params: { quizData: this.quiz, userName: this.name, email: this.email } });
              break;
            }
          }

          if (this.quiz == '') {
            this.isIncorrectCode = true;
          }

          this.showLoader = false;
          console.log(this.quiz);
        })
        .catch((error) => {
          console.log(error);
          this.showLoader = false;
        });
    },
  },
  computed: {
    disable: function () {
      return this.code.length < 4 || this.name.length < 4;
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
*{
  font-family: "poppins", sans-serif;
  font-weight: 600;
}

.toolbar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  background-color: #f0f0f0;
}

.spacer {
  flex-grow: 1;
  
  /* Take up all available space to push buttons to the right */
}

.toolbar-button {
  font-size: 120%;
  margin-left: 10px;
  padding: 8px 16px;
  background-color: #ffffff;
  color:rgb(0, 0, 0);
  border-color: rgb(255, 255, 255);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition:0.3s ease;
}

.toolbar-button:hover {
  background-color:black;
  color: #ffffff;
}

.quiz-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-image: url('https://github.com/ranjith-lm/Quiz_Bg/raw/main/jk.jpg');
  background-size: cover;
}

.quiz-form {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 25%;
}

.input-group {
  margin-bottom: 15px;
}

.form-control {
  border-radius: 5px;
  padding: 10px;
  width: 100%;
}

.error-message {
  color: red;
  margin-bottom: 10px;
}

.btn {
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.btn-primary {
  background-color: #3498db;
  color: #fff;
}

.btn-primary:disabled {
  background-color: #bdc3c7;
  cursor: not-allowed;
  color: #7f8c8d;
}
</style>