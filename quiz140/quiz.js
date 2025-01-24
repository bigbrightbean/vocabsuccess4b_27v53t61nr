// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His interests tend to __________ wildly, from one hobby to another.",
        chinese_question: "他的兴趣倾向于在不同的爱好之间 __________ 。",
        answers: [
                { option: "A", answer: "brachiate", chinese_answer: "摆荡", chinese_romanization: "bǎidàng" },
                { option: "B", answer: "stabilize", chinese_answer: "稳定", chinese_romanization: "wěndìng" },
                { option: "C", answer: "focus", chinese_answer: "聚焦", chinese_romanization: "jùjiāo" },
                { option: "D", answer: "settle", chinese_answer: "固定", chinese_romanization: "gùdìng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'brachiate' means to move or swing from one place to another." +
                "<br><br>" +
                "(B) 'stabilize' means to make or become unlikely to change." +
                "<br><br>" +
                "(C) 'focus' means to concentrate on one thing." +
                "<br><br>" +
                "(D) 'settle' means to resolve or reach an agreement about something.",
        chinese_explanation: "(A) '摆荡' 意味着从一个地方移动或摆动到另一个地方。" +
                "<br><br>" +
                "(B) '稳定' 意味着使某物不太可能改变。" +
                "<br><br>" +
                "(C) '聚焦' 意味着专注于一件事。" +
                "<br><br>" +
                "(D) '固定' 意味着解决或达成协议。"
    },
    {
        id: 2,
        question: "He felt emotionally __________ by his controlling partner, unable to make decisions on his own.",
        chinese_question: "他觉得被控制欲强的伴侣 __________，无法自己做决定。",
        answers: [
                { option: "A", answer: "freed", chinese_answer: "释放", chinese_romanization: "shìfàng" },
                { option: "B", answer: "incarcerated", chinese_answer: "困住", chinese_romanization: "kùn zhù" },
                { option: "C", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "D", answer: "encouraged", chinese_answer: "鼓励", chinese_romanization: "gǔlì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'incarcerated' used figuratively means to feel confined or trapped by someone or something." +
                "<br><br>" +
                "(A) 'freed' means to release someone from imprisonment or confinement." +
                "<br><br>" +
                "(C) 'supported' means to bear all or part of the weight of something." +
                "<br><br>" +
                "(D) 'encouraged' means to give support, confidence, or hope to someone.",
        chinese_explanation: "(B) '困住' 在比喻意义上指被某人或某事感到限制或困住。" +
                "<br><br>" +
                "(A) '释放' 意味着让某人自由。" +
                "<br><br>" +
                "(C) '支持' 意味着支撑某物的全部或部分重量。" +
                "<br><br>" +
                "(D) '鼓励' 意味着给予某人支持、信心或希望。"
    },
    {
        id: 3,
    question: "The writer's personal experiences __________ with her fiction, adding depth and authenticity to her stories.",
    chinese_question: "作家的个人经历与她的小说 __________ 在一起，为她的故事增添了深度和真实性。",
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
        id: 4,
    question: "She always managed to __________ out the hidden talents in her students, encouraging them to reach their full potential.",
    chinese_question: "她总是设法 __________ 出学生们隐藏的才能，鼓励他们发挥全部潜力。",
    answers: [
        { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "B", answer: "ferret", chinese_answer: "发掘", chinese_romanization: "fājué" },
        { option: "C", answer: "suppress", chinese_answer: "压制", chinese_romanization: "yāzhì" },
        { option: "D", answer: "overlook", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'ferret' used figuratively means to search tenaciously for and discover something hidden." +
        "<br><br>" +
        "(A) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'suppress' means to forcibly put an end to something." +
        "<br><br>" +
        "(D) 'overlook' means to fail to notice something.",
    chinese_explanation: "(B) '发掘' 在比喻意义上指坚韧地寻找并发现隐藏的东西。" +
        "<br><br>" +
        "(A) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '压制' 意味着强行终止某事。" +
        "<br><br>" +
        "(D) '忽略' 意味着未能注意到某物。"
    },
    {
        id: 5,
    question: "She wished she could __________ the painful memories of her past and start anew.",
    chinese_question: "她希望自己能够 __________ 过去痛苦的记忆，重新开始。",
    answers: [
        { option: A, answer: "cherish", chinese_answer: "珍爱", chinese_romanization: "zhēn'ài" },
        { option: B, answer: "expunge", chinese_answer: "抹去", chinese_romanization: "mǒqù" },
        { option: C, answer: "relive", chinese_answer: "重温", chinese_romanization: "chóngwēn" },
        { option: D, answer: "treasure", chinese_answer: "珍惜", chinese_romanization: "zhēnxī" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'expunge' figuratively means to erase or remove completely from the mind or memory." +
        "<br><br>" +
        "(A) 'cherish' means to hold dear." +
        "<br><br>" +
        "(C) 'relive' means to experience again." +
        "<br><br>" +
        "(D) 'treasure' means to value highly.",
    chinese_explanation: "(B) '抹去' 一词在比喻上意味着从思想或记忆中完全抹去或移除。" +
        "<br><br>" +
        "(A) '珍爱' 意味着珍惜。" +
        "<br><br>" +
        "(C) '重温' 意味着再次体验。" +
        "<br><br>" +
        "(D) '珍惜' 意味着高度重视。"
    },
    {
        id: 6,
        question: "She decided to __________ on her baking skills to start a home bakery.",
        chinese_question: "她决定 __________ 她的烘焙技能来开一家家庭烘焙店。",
        answers: [
                { option: "A", answer: "capitalize", chinese_answer: "利用", chinese_romanization: "lìyòng" },
                { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "delay", chinese_answer: "延迟", chinese_romanization: "yánchí" },
                { option: "D", answer: "neglect", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'capitalize' means to take advantage of (a situation); make the most of." +
                "<br><br>" +
                "(B) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(C) 'delay' means to make (someone or something) late or slow." +
                "<br><br>" +
                "(D) 'neglect' means to fail to care for properly.",
        chinese_explanation: "(A) '利用' 意味着利用（情况）；充分利用。" +
                "<br><br>" +
                "(B) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(C) '延迟' 意味着使（某人或某事）变迟或变慢。" +
                "<br><br>" +
                "(D) '忽略' 意味着未能妥善照顾。"
    },
    {
        id: 7,
    question: "Despite their loss, the players gathered to __________ and encourage each other for future games.",
    chinese_question: "尽管失利，球员们聚在一起 __________ 并互相鼓励，为未来的比赛做好准备。",
    answers: [
        { option: "A", answer: "commiserate", chinese_answer: "同情", chinese_romanization: "tóngqíng" },
        { option: "B", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "argue", chinese_answer: "争论", chinese_romanization: "zhēnglùn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'commiserate' means to express or feel sympathy or pity, used figuratively here." +
        "<br><br>" +
        "(B) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'argue' means to exchange or express diverging or opposite views, typically in a heated or angry way.",
    chinese_explanation: "(A) '同情' 意味着表达或感受到同情或怜悯，这里是比喻用法。" +
        "<br><br>" +
        "(B) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '争论' 意味着交换或表达不同或相反的观点，通常是激烈或愤怒的方式。"
    },
    {
        id: 8,
        question: "Neglecting proper maintenance can __________ the equipment and shorten its lifespan.",
        chinese_question: "忽视适当的维护会 __________ 设备并缩短其使用寿命。",
        answers: [
            { option: "A", answer: "repair", chinese_answer: "修理", chinese_romanization: "xiūlǐ" },
            { option: "B", answer: "spoil", chinese_answer: "损坏", chinese_romanization: "sǔnhuài" },
            { option: "C", answer: "clean", chinese_answer: "清洁", chinese_romanization: "qīngjié" },
            { option: "D", answer: "enhance", chinese_answer: "增强", chinese_romanization: "zēngqiáng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'spoil' means to diminish or destroy the value or quality of something." +
            "<br><br>" +
            "(A) 'repair' means to restore something damaged, faulty, or worn to a good condition." +
            "<br><br>" +
            "(C) 'clean' means to make something free of dirt, marks, or mess." +
            "<br><br>" +
            "(D) 'enhance' means to intensify, increase, or further improve the quality, value, or extent of something.",
        chinese_explanation: "(B) '损坏' 意味着减少或破坏某物的价值或质量。" +
            "<br><br>" +
            "(A) '修理' 意味着恢复损坏、有故障或磨损的物品的良好状态。" +
            "<br><br>" +
            "(C) '清洁' 意味着使某物没有污垢、痕迹或混乱。" +
            "<br><br>" +
            "(D) '增强' 意味着增强、增加或进一步提高某物的质量、价值或程度。"
    },
    {
        id: 9,
        question: "The charismatic leader __________ his followers to take action against the oppressive regime.",
        chinese_question: "这位有魅力的领导人 __________ 他的追随者采取行动反对压迫政权。",
        answers: [
            { option: "A", answer: "incited", chinese_answer: "煽动", chinese_romanization: "shāndòng" },
            { option: "B", answer: "pacified", chinese_answer: "安抚", chinese_romanization: "ānfǔ" },
            { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "soothed", chinese_answer: "抚慰", chinese_romanization: "fǔwèi" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'incited' means encouraged or stirred up (violent or unlawful behavior)." +
            "<br><br>" +
            "(B) 'pacified' means brought peace to; calmed." +
            "<br><br>" +
            "(C) 'ignored' means refused to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'soothed' means gently calmed or comforted.",
        chinese_explanation: "(A) '煽动' 意味着鼓励或煽动（暴力或非法行为）。" +
            "<br><br>" +
            "(B) '安抚' 意味着带来和平；使平静。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '抚慰' 意味着轻柔地安抚或安慰。"
    },
    {
        id: 10,
        question: "She __________ her voice with sadness as she recounted the story of her lost pet.",
        chinese_question: "她在讲述她失去宠物的故事时，声音中充满了 __________ 。",
        answers: [
                { option: "A", answer: "inflected", chinese_answer: "变化", chinese_romanization: "biànhuà" },
                { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "D", answer: "assisted", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'inflected' means to change the pitch or tone of the voice." +
                "<br><br>" +
                "(B) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(C) 'supported' means to give assistance to." +
                "<br><br>" +
                "(D) 'assisted' means to help someone.",
        chinese_explanation: "(A) '变化' 意味着改变声音的音高或音调。" +
                "<br><br>" +
                "(B) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(C) '支持' 意味着给予帮助。" +
                "<br><br>" +
                "(D) '帮助' 意味着帮助某人。"
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
