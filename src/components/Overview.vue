<template>
    <div>
        <div class="quiz-container">
            <div style="width: 60%;">
                <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Subject</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(record, index) in records" :key="index">
            <td>{{ record.name }}</td>
            <td>{{ record.rollNo }}</td>
            <td>{{ record.email }}</td>
            <td>{{ record.score }}</td>
          </tr>
        </tbody>
      </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Roll No', value: 'rollNo' },
        { text: 'Email', value: 'email' },
        { text: 'Score', value: 'score' }
      ],
      records: [
        { name: 'Thiyanesh', rollNo: '00123', email: 'thiyaneshoff@gmail.com', score: 12 },
        { name: 'Ranjith Raja', rollNo: '00456', email: 'ranjithraja2696@gmail.com', score: 11 },
        { name: 'Sriram', rollNo: '00789', email: 'sriram@gmail.com', score: 9 },
      ]
    };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
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
    color: rgb(0, 0, 0);
    border-color: rgb(255, 255, 255);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.3s ease;
}

.toolbar-button:hover {
    background-color: black;
    color: #ffffff;
}

.quiz-container {
    display: flex;
    justify-content: left;
    padding-left: 2%;
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

.list_style {
    color: #4D4D4D; 
    line-height: 1.8;
    padding-top: 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-family: Arial, sans-serif;
}

thead th {
  background-color: #f2f2f2;
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tbody td {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}

tbody tr:hover {
  background-color: #dddddd;
}
</style>