// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "She was able to __________ her tone to convey different emotions during the speech.",
        chinese_question: "她能够 __________ 她的语调，在演讲中传达不同的情感。",
        answers: [
                { option: "A", answer: "inflect", chinese_answer: "改变", chinese_romanization: "gǎibiàn" },
                { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
                { option: "D", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'inflect' means to change the pitch or tone of the voice." +
                "<br><br>" +
                "(B) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(C) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
                "<br><br>" +
                "(D) 'assist' means to help someone.",
        chinese_explanation: "(A) '改变' 意味着改变声音的音高或音调。" +
                "<br><br>" +
                "(B) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(C) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。" +
                "<br><br>" +
                "(D) '帮助' 意味着帮助某人。"
    },
    {
        id: 2,
    question: "He would __________ ignorance of the rules to avoid responsibility when things went wrong.",
    chinese_question: "当事情出错时，他会 __________ 对规则的无知，以避免责任。",
    answers: [
        { option: "A", answer: "admit", chinese_answer: "承认", chinese_romanization: "chéngrèn" },
        { option: "B", answer: "feign", chinese_answer: "假装", chinese_romanization: "jiǎzhuāng" },
        { option: "C", answer: "clarify", chinese_answer: "澄清", chinese_romanization: "chéngqīng" },
        { option: "D", answer: "accept", chinese_answer: "接受", chinese_romanization: "jiēshòu" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'feign' used figuratively means to pretend to be unaware or ignorant." +
        "<br><br>" +
        "(A) 'admit' means to confess to be true or to be the case." +
        "<br><br>" +
        "(C) 'clarify' means to make a statement or situation less confused and more comprehensible." +
        "<br><br>" +
        "(D) 'accept' means to consent to receive or undertake something offered.",
    chinese_explanation: "(B) '假装' 在比喻意义上指假装不知或无知。" +
        "<br><br>" +
        "(A) '承认' 意味着承认某事属实或属实。" +
        "<br><br>" +
        "(C) '澄清' 意味着使声明或情况不那么混乱，更容易理解。" +
        "<br><br>" +
        "(D) '接受' 意味着同意接受或承担提供的某物。"
    },
    {
        id: 3,
    question: "Her sudden outburst at the meeting seemed to __________ the usually composed manager.",
    chinese_question: "她在会议上的突然爆发似乎让平时镇定的经理感到 __________。",
    answers: [
        { option: "A", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
        { option: "B", answer: "disconcert", chinese_answer: "使不安", chinese_romanization: "shǐ bù'ān" },
        { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "D", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'disconcert' used figuratively means to unsettle or disturb the composure of someone." +
        "<br><br>" +
        "(A) 'encourage' means to give support, confidence, or hope to someone." +
        "<br><br>" +
        "(C) 'support' means to bear all or part of the weight of something." +
        "<br><br>" +
        "(D) 'calm' means to make someone tranquil and quiet.",
    chinese_explanation: "(B) '使不安' 在比喻意义上指使某人感到不安或扰乱某人的镇定。" +
        "<br><br>" +
        "(A) '鼓励' 意味着给予某人支持、信心或希望。" +
        "<br><br>" +
        "(C) '支持' 意味着支撑某物的全部或部分重量。" +
        "<br><br>" +
        "(D) '平静' 意味着使某人安静和安宁。"
    },
    {
        id: 4,
    question: "The country's economic crisis was exacerbated by its __________ on international debts.",
    chinese_question: "该国的经济危机因其 __________ 国际债务而加剧。",
    answers: [
        { option: "A", answer: "payment", chinese_answer: "付款", chinese_romanization: "fùkuǎn" },
        { option: "B", answer: "management", chinese_answer: "管理", chinese_romanization: "guǎnlǐ" },
        { option: "C", answer: "default", chinese_answer: "违约", chinese_romanization: "wéiyuē" },
        { option: "D", answer: "increase", chinese_answer: "增加", chinese_romanization: "zēngjiā" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'default' means to fail to fulfill an obligation, especially to repay a loan." +
        "<br><br>" +
        "(A) 'payment' means the action or process of paying someone or something." +
        "<br><br>" +
        "(B) 'management' means the process of dealing with or controlling things or people." +
        "<br><br>" +
        "(D) 'increase' means to make or become larger or greater.",
    chinese_explanation: "(C) '违约' 意味着未能履行义务，尤其是未能偿还贷款。" +
        "<br><br>" +
        "(A) '付款' 意味着支付某人或某物的行为或过程。" +
        "<br><br>" +
        "(B) '管理' 意味着处理或控制事物或人的过程。" +
        "<br><br>" +
        "(D) '增加' 意味着使变大或增多。"
    },
    {
        id: 5,
    question: "Cultures __________ in the bustling city, creating a vibrant and diverse community.",
    chinese_question: "在繁忙的城市里，文化 __________ 在一起，形成了一个充满活力和多样化的社区。",
    answers: [
        { option: "A", answer: "separate", chinese_answer: "分开", chinese_romanization: "fēnkāi" },
        { option: "B", answer: "commingle", chinese_answer: "混合", chinese_romanization: "hùnhé" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'commingle' means to mix or blend different elements together." +
        "<br><br>" +
        "(A) 'separate' means to cause to move or be apart." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'avoid' means to keep away from or stop oneself from doing something.",
    chinese_explanation: "(B) '混合' 意味着将不同的元素混合在一起。" +
        "<br><br>" +
        "(A) '分开' 意味着使移动或分离。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '避免' 意味着远离或阻止自己做某事。"
    },
    {
        id: 6,
        question: "The critic did not hesitate to __________ the author for the numerous plot holes in the novel.",
        chinese_question: "评论家毫不犹豫地 __________ 作家小说中的许多情节漏洞。",
        answers: [
                { option: "A", answer: "castigate", chinese_answer: "严厉批评", chinese_romanization: "yánlì pīpíng" },
                { option: "B", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'castigate' means to reprimand someone severely." +
                "<br><br>" +
                "(B) 'praise' means to express warm approval or admiration." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'assist' means to help or support.",
        chinese_explanation: "(A) '严厉批评' 意味着严厉地斥责某人。" +
                "<br><br>" +
                "(B) '赞扬' 意味着表达热烈的赞同或钦佩。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '帮助' 意味着帮助或支持。"
    },
    {
        id: 7,
        question: "Social media users were quick to __________ the celebrity for their insensitive comments.",
        chinese_question: "社交媒体用户迅速 __________ 那位名人的无礼评论。",
        answers: [
                { option: "A", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" },
                { option: "B", answer: "chastise", chinese_answer: "责罚", chinese_romanization: "zéfá" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "reward", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'chastise' means to rebuke or reprimand severely." +
                "<br><br>" +
                "(A) 'praise' means to express warm approval or admiration." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'reward' means to give something to someone in recognition of their service, effort, or achievement.",
        chinese_explanation: "(B) '责罚' 意味着严厉地斥责或谴责。" +
                "<br><br>" +
                "(A) '赞美' 意味着表达热烈的赞同或钦佩。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '奖励' 意味着因服务、努力或成就给予某人某物。"
    },
    {
        id: 8,
        question: "She began to __________ the poem, her voice carrying a rhythmic quality.",
        chinese_question: "她开始 __________ 这首诗，她的声音带有一种韵律感。",
        answers: [
                { option: "A", answer: "intone", chinese_answer: "吟诵", chinese_romanization: "yínsòng" },
                { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "criticize", chinese_answer: "批评", chinese_romanization: "pīpíng" },
                { option: "D", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'intone' means to say or recite with little rise and fall of the pitch of the voice." +
                "<br><br>" +
                "(B) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(C) 'criticize' means to indicate the faults of someone or something in a disapproving way." +
                "<br><br>" +
                "(D) 'assist' means to help someone.",
        chinese_explanation: "(A) '吟诵' 意味着用平稳的声调说或背诵。" +
                "<br><br>" +
                "(B) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(C) '批评' 意味着以不赞成的方式指出某人或某物的错误。" +
                "<br><br>" +
                "(D) '帮助' 意味着帮助某人。"
    },
    {
        id: 9,
        question: "The clever lawyer managed to __________ a confession from the reluctant witness.",
        chinese_question: "聪明的律师设法从不情愿的证人那里 __________ 出了供词。",
        answers: [
                { option: "A", answer: "chisel", chinese_answer: "巧取", chinese_romanization: "qiǎo qǔ" },
                { option: "B", answer: "protect", chinese_answer: "保护", chinese_romanization: "bǎohù" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "clarify", chinese_answer: "澄清", chinese_romanization: "chéngqīng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'chisel' means to obtain something through clever or deceitful means, often used figuratively." +
                "<br><br>" +
                "(B) 'protect' means to keep safe from harm or injury." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'clarify' means to make a statement or situation less confused and more comprehensible.",
        chinese_explanation: "(A) '巧取' 意味着通过巧妙或欺骗性的方法获得某物，通常用作比喻。" +
                "<br><br>" +
                "(B) '保护' 意味着使免受伤害或损害。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '澄清' 意味着使声明或情况不再混乱并更容易理解。"
    },
    {
        id: 10,
        question: "The CEO tried to __________ the authority of the board, making unilateral decisions.",
        chinese_question: "CEO 试图 __________ 董事会的权力，做出单方面决定。",
        answers: [
                { option: "A", answer: "arrogate", chinese_answer: "冒领", chinese_romanization: "màolǐng" },
                { option: "B", answer: "respect", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" },
                { option: "C", answer: "follow", chinese_answer: "跟随", chinese_romanization: "gēnsuí" },
                { option: "D", answer: "heed", chinese_answer: "注意", chinese_romanization: "zhùyì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'arrogate' means to take or claim something without justification." +
                "<br><br>" +
                "(B) 'respect' means to admire someone or something deeply." +
                "<br><br>" +
                "(C) 'follow' means to go or come after a person or thing." +
                "<br><br>" +
                "(D) 'heed' means to pay attention to; take notice of.",
        chinese_explanation: "(A) '冒领' 意味着未经正当理由而占有或声称某物。" +
                "<br><br>" +
                "(B) '尊重' 意味着深深钦佩某人或某物。" +
                "<br><br>" +
                "(C) '跟随' 意味着跟随某人或某物之后。" +
                "<br><br>" +
                "(D) '注意' 意味着注意；注意到。"
    }
];


// Function to restart the quiz
function restartQuiz() {
    // Reload the page to restart the quiz
    location.reload();
}

// Variable to keep track of the current question index
var currentQuestionIndex = 0;

// Variable to keep track of the total score
var totalScore = 0;

// Array to store the selected answers for each question
var selectedAnswers = new Array(questions.length).fill(null);

// Variable to track the state of the Chinese translations checkbox
var chineseTranslationsChecked = false;

// Function to toggle Chinese translations
function toggleChineseTranslations() {
    var toggleChineseCheckbox = document.getElementById('toggleChinese');
    chineseTranslationsChecked = !chineseTranslationsChecked; // Toggle checkbox state
    // Call the displayQuestion() function to update the display based on the checkbox state
    displayQuestion(chineseTranslationsChecked);
}



// Function to toggle question shuffling
function toggleQuestionShuffle() {
    var shuffleCheckbox = document.getElementById('shuffleQuestions');
    var shuffleEnabled = shuffleCheckbox.checked;

    // Check if the current question has been answered
    var currentQuestionAnswered = selectedAnswers[currentQuestionIndex] !== null;

    // If the current question has been answered and shuffling is enabled
    if (currentQuestionAnswered && shuffleEnabled) {
        // Move to the next question automatically
        nextQuestion();
    }

    // Call the shuffleQuestions() function to update the questions based on the checkbox state
    shuffleQuestions(shuffleEnabled);
}


// Function to shuffle the remaining unanswered questions
function shuffleQuestions(shuffleEnabled) {
    // Clear the selected answer for the current question
    selectedAnswers[currentQuestionIndex] = null;

    // Copy the questions array
    var remainingQuestions = questions.slice(currentQuestionIndex);

    // Sort the remaining questions based on their IDs
    remainingQuestions.sort((a, b) => a.id - b.id);

    // If shuffling is enabled, shuffle the remaining questions
    if (shuffleEnabled) {
        // Shuffle the remaining questions array using Fisher-Yates algorithm
        for (var i = remainingQuestions.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = remainingQuestions[i];
            remainingQuestions[i] = remainingQuestions[j];
            remainingQuestions[j] = temp;
        }
    }

    // Update the questions array with the shuffled remaining questions
    questions.splice(currentQuestionIndex, remainingQuestions.length, ...remainingQuestions);

    // Clear the selected MCQ option buttons
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.classList.remove('option-selected', 'correct', 'wrong');
    });

    // Display the current question after shuffling
    displayQuestion(document.getElementById('toggleChinese').checked);

    // Update the progress bar
    updateProgressBar();
}


// Function to display the current question
function displayQuestion() {
    // Get the current question object
    var currentQuestion = questions[currentQuestionIndex];
    
    // Extract question texts and options
    var questionText = currentQuestion.question;
    var questionTextCN = currentQuestion.chinese_question;
    var options = currentQuestion.answers;

    // Display the question text in English without the question number
    document.getElementById('question').innerHTML = questionText;

    // Display the question text in Chinese if the checkbox is checked or if Chinese translations were manually toggled on
    if (document.getElementById('toggleChinese').checked || chineseTranslationsChecked) {
        document.getElementById('question_cn').innerHTML = questionTextCN;
    } else {
        document.getElementById('question_cn').innerHTML = ""; // Clear Chinese question
    }

    // Display the options as buttons with selected state
    var optionsHTML = "";
    for (var i = 0; i < options.length; i++) {
        var isSelected = selectedAnswers[currentQuestionIndex] === options[i].option;
        var optionClass = "option-btn";
        if (isSelected) {
            optionClass += ' option-selected'; // Add option-selected class if option is selected
            // Add correct or wrong class based on the correctness of the option
            if (options[i].option === currentQuestion.correctAnswer) {
                optionClass += ' correct';
            } else {
                optionClass += ' wrong';
            }
        }
        optionsHTML += '<button class="' + optionClass + '" onclick="selectAnswer(' + i + ')" value="' + options[i].option + '">' + options[i].option + '. ' + options[i].answer;
        
        // Append Chinese translation if the checkbox is checked or if Chinese translations were manually toggled on
        if (document.getElementById('toggleChinese').checked || chineseTranslationsChecked) {
            optionsHTML += ' (' + options[i].chinese_answer + ' ' + options[i].chinese_romanization + ')';
        }
        
        optionsHTML += '</button><br>'; // Modify this line to remove the "-"
    }
    document.getElementById('options').innerHTML = optionsHTML;

    // Update the progress bar
    updateProgressBar();
}




// Function to handle the answer selection
function selectAnswer(optionIndex) {
    // Update the selected answer for the current question
    selectedAnswers[currentQuestionIndex] = questions[currentQuestionIndex].answers[optionIndex].option;

    // Disable all option buttons to prevent further selection
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.disabled = true;
    });

    // Check if the selected answer is correct
    var isCorrect = selectedAnswers[currentQuestionIndex] === questions[currentQuestionIndex].correctAnswer;

    // Display the result
    checkAnswer(selectedAnswers[currentQuestionIndex], isCorrect);
}


// Function to check the answer and display the result
function checkAnswer(selectedOption, isCorrect) {
    // Extract correct answer and explanation
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;
    var correctAnswerEN = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer;
    var correctAnswerCN = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer;
    var correctAnswerRomanization = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_romanization; // Add this line to extract the romanization
    var explanation = questions[currentQuestionIndex].explanation;
    var chineseExplanation = questions[currentQuestionIndex].chinese_explanation;

    // Display result and score
    var resultHTML = "";
    if (isCorrect) {
        // Increase the total score
        totalScore++;

        // Play correct sound
        var audio = new Audio('correct.mp3');
        audio.play();

        // Display correct message and explanation
        resultHTML += "<span class='correct-explanation'>Correct</span><br>"; // Added class for correct explanation
    } else {
        // Play incorrect sound
        var audio = new Audio('incorrect.mp3');
        audio.play();

        // Display incorrect message and correct answer
        resultHTML += "<span class='wrong-explanation'>Incorrect</span><br>"; // Added class for wrong explanation
    }

    resultHTML += "The correct answer is: " + correctAnswer + ": " + correctAnswerEN + ", " + correctAnswerCN + " (" + correctAnswerRomanization + ")<br><br>"; // Modify this line to include the romanization
    resultHTML += "Explanation (English):<br>" + explanation + "<br><br>";
    resultHTML += "Explanation (Chinese):<br>" + chineseExplanation + "<br><br>";

    // Display total score
    resultHTML += "Total Score: " + totalScore + "/" + questions.length;
    document.getElementById('result').innerHTML = resultHTML;

    // Apply correct or incorrect styling to the selected MCQ option button
    var selectedOptionButton = document.querySelector('.option-btn[value="' + selectedOption + '"]');
    if (isCorrect) {
        selectedOptionButton.classList.add('correct');
    } else {
        selectedOptionButton.classList.add('wrong');
    }
}



// Function to update the progress bar
function updateProgressBar() {
    // Calculate the progress percentage
    var progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    
    // Update the width of the progress bar
    document.getElementById('progress-bar').style.width = progress + '%';
}


// Function to move to the previous question
function previousQuestion() {
    // Decrease the current question index
    currentQuestionIndex--;

    // Ensure the index does not go below 0
    if (currentQuestionIndex < 0) {
        currentQuestionIndex = 0;
    }

    // Check the state of the checkbox for Chinese translations
    var showChineseTranslations = document.getElementById('toggleChinese').checked;

    // Display the previous question with the appropriate translations
    displayQuestion(showChineseTranslations);

    // Disable all MCQ buttons
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.disabled = true;
    });

    // Enable the previously selected MCQ button
    var previousSelectedAnswer = selectedAnswers[currentQuestionIndex];
    buttons.forEach(function(btn) {
        if (btn.value === previousSelectedAnswer) {
            btn.disabled = false;
            // Check if the previously selected answer is correct or wrong and apply the appropriate class
            if (previousSelectedAnswer === questions[currentQuestionIndex].correctAnswer) {
                btn.classList.add('correct');
            } else {
                btn.classList.add('wrong');
            }
        }
    });

    // Show the selected answer and its correctness for the previous question
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;

    // Display the explanation for the previous question
    var explanationHTML = "";
    if (previousSelectedAnswer) {
        var answerColorClass = previousSelectedAnswer === correctAnswer ? 'correct' : 'wrong';
        explanationHTML += "<span class='" + answerColorClass + "-explanation'>Your Answer is: " + (previousSelectedAnswer === correctAnswer ? "Correct" : "Incorrect") + "</span><br>";
    }
    explanationHTML += "The correct answer is: " + correctAnswer + " (" + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer + ", " + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer + ")<br><br>";
    explanationHTML += "Explanation (English):<br>" + questions[currentQuestionIndex].explanation + "<br><br>";
    explanationHTML += "Explanation (Chinese):<br>" + questions[currentQuestionIndex].chinese_explanation + "<br><br>";
    document.getElementById('result').innerHTML = explanationHTML;
}




// Function to end the quiz and display the total score in a popup box
function endQuiz() {
    // Display a popup box with the quiz ended message and total score
    alert("Congratulations! You've reached the end.\n\nYour Total Score: " + totalScore + "/" + questions.length);
}



// Function to move to the next question
// Function to move to the next question
function nextQuestion() {
    // Ensure the "Turn on Chinese translations" checkbox remains unchecked
    chineseTranslationsChecked = false;

    // Check if the player has selected an answer for the current question
    if (selectedAnswers[currentQuestionIndex] === null) {
        // If no answer is selected, display an error message in a popup box
        alert("Please select an answer for Question " + (currentQuestionIndex + 1) + " before moving to the next question.");
        return; // Exit the function to prevent moving to the next question
    }

    // Increase the current question index
    currentQuestionIndex++;

    // Check if all questions have been answered
    if (currentQuestionIndex >= questions.length) {
        // If all questions have been answered, end the quiz
        endQuiz();
        // Reset the current question index to prevent accessing out of bounds
        currentQuestionIndex = questions.length - 1;
    } else {
        // Display the next question with both English and Chinese translations by default
        displayQuestion(chineseTranslationsChecked);

        // Show the selected answer and its correctness for the next question
        var selectedAnswer = selectedAnswers[currentQuestionIndex];
        var correctAnswer = questions[currentQuestionIndex].correctAnswer;

        // Find the button corresponding to the selected answer
        var buttons = document.querySelectorAll('.option-btn');
        buttons.forEach(function(btn) {
            if (btn.value === selectedAnswer) {
                if (selectedAnswer === correctAnswer) {
                    btn.classList.add('correct');
                } else {
                    btn.classList.add('wrong');
                }
            }
        });

        // Display the explanation for the next question
        var explanationHTML = "";
        if (selectedAnswer) {
            var answerColorClass = selectedAnswer === correctAnswer ? 'correct' : 'wrong';
            explanationHTML += "<span class='" + answerColorClass + "-explanation'>Your Answer is: " + (selectedAnswer === correctAnswer ? "Correct" : "Incorrect") + "</span><br>";
            explanationHTML += "The correct answer is: " + correctAnswer + " (" + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer + ", " + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer + ")<br><br>";
            explanationHTML += "Explanation (English):<br>" + questions[currentQuestionIndex].explanation + "<br><br>";
            explanationHTML += "Explanation (Chinese):<br>" + questions[currentQuestionIndex].chinese_explanation + "<br><br>";
        }
        document.getElementById('result').innerHTML = explanationHTML;
    }
}



function startOver() {
    // Reset the current question index to the first question
    currentQuestionIndex = 0;

    // Reset the total score and selected answers
    totalScore = 0;
    selectedAnswers.fill(null);

    // Uncheck the checkbox for Chinese translations
    document.getElementById('toggleChinese').checked = false;

    // Uncheck the checkbox for shuffling questions
    document.getElementById('shuffleQuestions').checked = false;

    // Reset the order of questions to the default state
    // Sort the questions array based on the 'id' property to revert to the original order
    questions.sort((a, b) => a.id - b.id);

    // Display the first question
    // Display only English translations by passing 'false' to the displayQuestion function
    displayQuestion(false);

    // Clear the result section
    document.getElementById('result').innerHTML = "";

    // Reset font size to default
    increaseFontSize = true; // Set the flag to true for increasing font size
    adjustFontSize(); // Adjust font size of all elements
    adjustChineseFontSize(); // Adjust font size of Chinese elements and explanations
}




// Function to adjust font size of all elements
function adjustFontSize() {
    var container = document.querySelector('.container');
    var elements = container.querySelectorAll('*');
    var scaleFactor = increaseFontSize ? 1.1 : 0.9; // Scale factor for increasing or decreasing font size

    elements.forEach(function(element) {
        var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize * scaleFactor;
        element.style.fontSize = newFontSize + 'px';
    });
}

// Function to adjust font size of Chinese elements and explanations
function adjustChineseFontSize() {
    var container = document.querySelector('.container');
    var chineseElements = container.querySelectorAll('[lang="zh"]');
    var explanations = document.querySelectorAll('.explanation');
    var allElements = [...chineseElements, ...explanations];
    var scaleFactor = increaseFontSize ? 1.1 : 0.9; // Use the same scale factor as other elements

    allElements.forEach(function(element) {
        var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize * scaleFactor;
        element.style.fontSize = newFontSize + 'px';
    });
}

// Display the first question when the page loads with both English and Chinese translations by default
window.onload = function() {
    toggleChineseTranslations();
    adjustFontSize(); // Initialize font size
    adjustChineseFontSize(); // Initialize Chinese font size
};


// + button event listener
document.getElementById('increase-font-size').addEventListener('click', function() {
    increaseFontSize = true;
    adjustFontSize();
    adjustChineseFontSize();
});

// - button event listener
document.getElementById('decrease-font-size').addEventListener('click', function() {
    increaseFontSize = false;
    adjustFontSize();
    adjustChineseFontSize();
});

// Chinese translation checkbox event listener
document.getElementById('toggleChinese').addEventListener('click', function() {
    adjustChineseFontSize();
});

// Shuffle checkbox event listener
document.getElementById('shuffleQuestions').addEventListener('click', function() {
    adjustFontSize();
    adjustChineseFontSize();
});


function goToHomePage() {
    // Redirect to the main index page
    window.location.href = "../index.html";
}
