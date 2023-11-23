class Answers {
    constructor(answers) {
        this.answers = answers;
    }

    isAnswersCorrect() {
        if (this.answers[0] === "BLOOM&BOOM" && this.answers[1] === "Rose" && this.answers[2] === "Floristry" && this.answers[3] === "Snowdrop" && this.answers[4] === "Bridal bouquet" && this.answers[5] === "Thistle" && this.answers[6] === "Daisies" && this.answers[7] === "Chrysanthemum" && this.answers[8] === "Tulip" && this.answers[9] === "Gerberas") {
            return true;
        }
        return false;
    }
}


let answers = [];
const quizForm = document.getElementById('quiz');
const resultDiv = document.getElementById('result');

quizForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(quizForm);
    let answers = [formData.get('q1'), formData.get('q2'), formData.get('q3'), formData.get('q4'), formData.get('q5'), formData.get('q6'), formData.get('q7'), formData.get('q8'), formData.get('q9'), formData.get('q10')];
    let quiz = new Answers(answers);
    let score = quiz.isAnswersCorrect();

    if (score === true) {
        resultDiv.textContent = `Вы ответили правильно на все вопросы! Можете отправить скрин этого экрана при заказе и получить свой бонус!`;
    } else {
        resultDiv.textContent = `Еще есть шанс исправить свою ошибку! Попробуйте еще раз!`;
    }
});