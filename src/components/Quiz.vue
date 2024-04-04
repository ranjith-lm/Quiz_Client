<template>
  <div class="col-12 custom-container">

      <div class="col-md-8 box" v-show="isComplete">
          <canvas id="quiz-result"></canvas>
      </div>
      <div class="col-md-8 box" v-show="!isComplete">
        <span v-for="(id, index) in loggedInIds" :key="index">
            {{id}} 
        </span>

          <loader v-if="showLoader"></loader>
          <div class="points">Score <span style="font-weight: 600;">{{score}}</span></div>
          <div class="round">Quiz {{game.id}} of {{gamesList.length}}</div>
          <div class="timer">
              <div class="count">{{timer}}</div>
          </div>
          <div class="quiz">
              <div>
                  <div class="col-12 center">
                    <div class="col-md-10 question">
                        {{game.question}}
                    </div>
                  </div>

                  <div class="col-md-12 center">
                    <div class="row col-md-12 options">
                       <div class="col-md-5 option" v-for="(option, index) in game.options" :key="index" @click="submitAnswer(option.id)" :class="[(option.id == currentId) ? (option.id == correctId) ? 'correct': 'incorrect' : '',(option.id == correctId) ? 'correct': '']">
                           {{option.value}}
                       </div>
                    </div>
                  </div>
              </div>
          </div>
          <div class="progress" :style="{width: 100 - (timer/game.timer*100)+'%'}"></div>
      </div>
  </div>
</template>

<script>

import axios from 'axios';
import Loader from './Loader';
import Chart from 'chart.js';

export default {
  props: ['quizData','userName','email'],
  components:{
    Loader
  },
  data(){
      return{
          gamesList: "",
          game: "",
          result: [],
          timer: '',
          counter: '',
          showLoader: false,
          correct:0,
          inCorrect:0,
          notanswer:0,
          score:0,
          isComplete: false,
          correctId: '',
          currentId: '',
          loggedInIds: []
      }
  },
  methods:{
  	submitAnswer: function(id){
        clearInterval(this.counter);
        this.currentId = id;
        

        if(id != -1){
            this.correctId = this.game.answer;
        }
        
        if(id==-1){
            this.notanswer++;
        }
        else if(id == this.game.answer){
            this.correct++;
            this.score+=this.game.point;
        }
        else{
            this.inCorrect++;
        }



        this.showLoader = true;

        setTimeout(()=>{

            this.showLoader = false;
            this.currentId = '';
            this.correctId = '';    
            if(this.game.id < this.gamesList.length){
                this.game = this.gamesList[this.game.id++];
                this.timer = this.game.timer;
                this.countdown();
            }else{
                let obj = { 
                    name: this.userName || '',
                    email: this.email || 'thiyaneshoff@gmail.com',
                    correctAnswer: this.correct ? this.correct : 0,
                    inCorrectAnswer: this.inCorrect ? this.inCorrect : 0,
                    notAnswered: this.notanswer ? this.notanswer : 0
                }
                this.result.push(this.correct);
                this.result.push(this.inCorrect);
                this.result.push(this.notanswer);   
                console.log(this.result);
                console.log('obj -->'+JSON.stringify(obj));
                this.callbackend(obj)
                this.isComplete = true;
                this.drawChart();
               }


        },1000);
    },
    async callbackend(bodyObj) {
        let res = await axios({
            url: 'http://localhost:9000/api/data',
            method: "post",
            data: bodyObj,
        });
        console.log("res",res)
    // return res.data;
    },
    countdown: function(){
        this.counter = setInterval(()=>{
            this.timer--;
        },1000);
    },
    createChart: function(chartId, chartData){

        const ctx = document.getElementById(chartId);
        const myChart = new Chart(ctx, {
            type: chartData.type,
            data: chartData.data,
            options: chartData.options
        });
    },

    drawChart: function(){

        let chartData = {
            type: 'pie',
            data: {
                labels: ["Correct","Incorrect","NotAnswer"],
                datasets: [
                    {
                        label: 'Quiz',
                        backgroundColor: ['#ff6953','#ffce56','#36a2eb'],
                        data: this.result,
                        borderColor: 'white',
                        borderWidth: 1
                    }, 
                    ]
            },
            options: {
            responsive: true,
                title: {
                    display: true,
                    text: 'Result'
                },
                tooltips: {
                    mode: 'index',
                    intersect: true
                },
                scales: {
                    ticks: [{
                        beginAtZero:true
                    }]
                }
            }
        }


        this.createChart('quiz-result', chartData);

    }
  },

  created(){
        console.log("erererere",this.userName)
        if(this.quizData == undefined){
            this.$router.push({name: 'Home'});
        }else{
            this.gamesList = this.quizData;
            this.game = this.gamesList[0];
            this.timer = this.game.timer;
            this.countdown();
        }

  },
  watch:{
      'timer': function(){
          if(this.timer == 0){
              console.log("Done");
              this.submitAnswer(-1);
          }
      }
  }
}
</script>

<style scoped>

    .progress{
        transition: all 1s cubic-bezier(1, 1, 1, 1);
        height: 5px;
        width: 0%;
        background: #079b80;
        position: absolute;
        bottom: -1px;
        left: 0;
        right: 0;
        border-radius: 0;
    }
    .correct{
        background: green;
        color: #fff;
    }

    .incorrect{
        background: red;
        color: #fff;
    }

    .custom-container{
        display: flex;
        justify-content: center;
    }
    .box{
        width: 90%;
        margin-top: 100px;
        min-height: 200px;
        border-radius: 3px;
        border: 1px solid #ccc;
        padding: 15px 20px 35px;
        -webkit-box-shadow: 7px 9px 22px -9px rgba(0,0,0,0.63);
        -moz-box-shadow: 7px 9px 22px -9px rgba(0,0,0,0.63);
        box-shadow: 7px 9px 22px -9px rgba(0,0,0,0.63);
    }

    .round{
        text-align: center;
        font-weight: 600;
    }

    .timer{
        margin: 10px;
        display: flex;
        justify-content: center;
    }

    .timer .count{
        border: 1px solid #333;
        border-radius: 50%;
        height: 30px;
        width: 30px;
        line-height: 25px;
        text-align: center;
    }

    .center{
        display: flex;
        justify-content: center;
    }

    .options{
        display: flex;
        justify-content: space-around
    }

    .option{
        border: 1px solid #ccc;
        border-radius: 10px;
        min-height: 40px;
        line-height: 35px;
        margin: 10px;
        padding: 0px 10px;
        cursor: pointer;
        word-wrap: break-word;
    }

    .question{
        font-weight: 600;
        margin-bottom: 30px;
        text-align: center;
    }
</style>
