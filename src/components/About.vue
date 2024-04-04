<template>
    <div>
        <div class="quiz-container">
            <div style="width: 60%;">
                <h4 style="color: #4D4D4D;">About:</h4>
                <ol>
                    <li class="list_style">
                        A quiz app lets you take quizzes and submit answers from any device. Whether you need a place to
                        share
                        quizzes for your classroom, office party, or friend group, get started with Jotform’s free Quiz
                        App! This ready-to-use template includes four premade quizzes that you can fill out using any device
                        and
                        share with others.

                    </li>
                    <li class="list_style">

                         Using our drag-and-drop builder, you can create and add your own quizzes. All
                        responses will be instantly synced to your secure and easily-accessible Jotform account for
                        quick and
                        easy scoring.
                    </li>
                    <li class="list_style">
                        Make this Quiz App your own in just a few clicks. All you need to do is drag and drop to build
                        and add
                        quizzes, upload tables to see results, embed links and documents, create new pages and buttons,
                        upload
                        photos and videos, and much more.
                    </li>
                    <li class="list_style">
                        When your app is ready to use, download it onto your favorite
                        device
                        and share it with others via the app link or by sending email invites. Take your online quizzes
                        to the
                        next level with a fully custom and engaging Quiz App that works anywhere.
                    </li>
                </ol>
            </div>
        </div>
    </div>
</template>

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
</style>