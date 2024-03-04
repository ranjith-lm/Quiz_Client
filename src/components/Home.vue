<template>
    <div class="quiz-container">
      <div class="quiz-form">
        <loader v-if="showLoader"></loader>
        <div class="input-group">
          <input type="text" v-model="name" class="form-control" placeholder="Enter Your Name">
        </div>
        <div class="input-group">
          <input type="text" v-model="code" class="form-control" placeholder="Enter Code (Q1001)">
        </div>
        <div class="error-message" v-if="isIncorrectCode">Incorrect Code</div>
        <button @click="validateCode" class="btn btn-primary" :disabled="disable">SUBMIT</button>
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
                this.$router.push({ name: 'Quiz', params: { quizData: this.quiz } });
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
  .quiz-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
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
  