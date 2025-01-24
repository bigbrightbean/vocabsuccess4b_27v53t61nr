// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The economic crisis __________ the company's finances, leading to massive layoffs.",
    chinese_question: "经济危机 __________ 了公司的财务状况，导致大规模裁员。",
    answers: [
        { option: "A", answer: "boosted", chinese_answer: "提高", chinese_romanization: "tígāo" },
        { option: "B", answer: "decimated", chinese_answer: "摧毁", chinese_romanization: "cuīhuǐ" },
        { option: "C", answer: "stabilized", chinese_answer: "稳定", chinese_romanization: "wěndìng" },
        { option: "D", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'decimated' means to destroy a large percentage of something, used figuratively to mean severely damage or destroy." +
        "<br><br>" +
        "(A) 'boosted' means to increase or improve." +
        "<br><br>" +
        "(C) 'stabilized' means to make or become unlikely to change, fail, or decline." +
        "<br><br>" +
        "(D) 'ignored' means to refuse to take notice of or acknowledge.",
    chinese_explanation: "(B) '摧毁' 意味着摧毁大部分的某物，比喻意义上指严重损害或破坏。" +
        "<br><br>" +
        "(A) '提高' 意味着增加或改善。" +
        "<br><br>" +
        "(C) '稳定' 意味着使不太可能改变、失败或下降。" +
        "<br><br>" +
        "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 2,
        question: "The artist decided to __________ herself in her studio until her masterpiece was complete.",
        chinese_question: "艺术家决定 __________ 在她的工作室中，直到她的杰作完成。",
        answers: [
                { option: "A", answer: "cloister", chinese_answer: "隐居", chinese_romanization: "yǐnjū" },
                { option: "B", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūlüè" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'cloister' means to seclude or shut away, especially in a convent or monastery." +
                "<br><br>" +
                "(B) 'neglect' means to fail to care for properly." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'simplify' means to make something simpler or easier to do or understand.",
        chinese_explanation: "(A) '隐居' 意味着隔离或关闭，尤其是在修道院中。" +
                "<br><br>" +
                "(B) '忽视' 意味着未能适当照顾。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '简化' 意味着使某事更简单或更容易做或理解。"
},
    {
        id: 3,
        question: "To __________ misunderstandings, clear communication is essential.",
        chinese_question: "为了 __________ 误解，清晰的沟通是必不可少的。",
        answers: [
                { option: "A", answer: "invite", chinese_answer: "邀请", chinese_romanization: "yāoqǐng" },
                { option: "B", answer: "prevent", chinese_answer: "防止", chinese_romanization: "fángzhǐ" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "worsen", chinese_answer: "恶化", chinese_romanization: "èhuà" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'prevent' means to stop something from happening or arising." +
                "<br><br>" +
                "(A) 'invite' means to make a polite, formal, or friendly request to someone to go somewhere or to do something." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge; disregard intentionally." +
                "<br><br>" +
                "(D) 'worsen' means to make or become worse.",
        chinese_explanation: "(B) '防止' 意味着阻止某事发生或出现。" +
                "<br><br>" +
                "(A) '邀请' 意味着礼貌、正式或友好地邀请某人去某个地方或做某事。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认；有意无视。" +
                "<br><br>" +
                "(D) '恶化' 意味着使某事变得更糟或变得更糟。"
    },
    {
        id: 4,
    question: "After much deliberation, he chose not to __________, allowing the project to move forward.",
    chinese_question: "经过多次考虑，他选择不再 __________，让项目继续推进。",
    answers: [
        { option: "A", answer: "protest", chinese_answer: "抗议", chinese_romanization: "kàngyì" },
        { option: "B", answer: "demur", chinese_answer: "反对", chinese_romanization: "fǎnduì" },
        { option: "C", answer: "approve", chinese_answer: "批准", chinese_romanization: "pīzhǔn" },
        { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'demur' used figuratively means to raise doubts or objections." +
        "<br><br>" +
        "(A) 'protest' means to express an objection to what someone has said or done." +
        "<br><br>" +
        "(C) 'approve' means to officially agree to or accept as satisfactory." +
        "<br><br>" +
        "(D) 'support' means to bear all or part of the weight of something.",
    chinese_explanation: "(B) '反对' 在比喻意义上指提出疑问或反对。" +
        "<br><br>" +
        "(A) '抗议' 意味着对某人所说或所做的表示异议。" +
        "<br><br>" +
        "(C) '批准' 意味着正式同意或接受为满意。" +
        "<br><br>" +
        "(D) '支持' 意味着支撑某物的全部或部分重量。"
    },
    {
        id: 5,
        question: "The president chose to __________ the controversial law, claiming it was unconstitutional.",
        chinese_question: "总统选择 __________ 这项有争议的法律，声称它是违宪的。",
        answers: [
                { option: "A", answer: "annul", chinese_answer: "废除", chinese_romanization: "fèichú" },
                { option: "B", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "endorse", chinese_answer: "认可", chinese_romanization: "rènkě" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'annul' means to declare invalid (an official agreement, decision, or result)." +
                "<br><br>" +
                "(B) 'support' means to bear all or part of the weight of; hold up." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'endorse' means to declare one's public approval or support of.",
        chinese_explanation: "(A) '废除' 意味着宣布无效（正式协议、决定或结果）。" +
                "<br><br>" +
                "(B) '支持' 意味着承担全部或部分重量；支撑。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '认可' 意味着公开宣布某人的支持。"
    },
    {
        id: 6,
    question: "Despite the provocations, he __________ from retaliating, showing great self-control.",
    chinese_question: "尽管受到挑衅，他还是 __________ 不报复，表现出极大的自制力。",
    answers: [
        { option: "A", answer: "succumbed", chinese_answer: "屈服", chinese_romanization: "qūfú" },
        { option: "B", answer: "forbear", chinese_answer: "克制", chinese_romanization: "kèzhì" },
        { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "acknowledged", chinese_answer: "承认", chinese_romanization: "chéngrèn" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'forbear' used figuratively means to restrain oneself from showing or expressing something." +
        "<br><br>" +
        "(A) 'succumbed' means to fail to resist pressure, temptation, or some other negative force." +
        "<br><br>" +
        "(C) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'acknowledged' means to accept or admit the existence or truth of something.",
    chinese_explanation: "(B) '克制' 在比喻意义上指抑制自己不去表现或表达某事。" +
        "<br><br>" +
        "(A) '屈服' 意味着未能抵抗压力、诱惑或其他负面力量。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '承认' 意味着接受或承认某事的存在或真实性。"
    },
    {
        id: 7,
        question: "The court decided to __________ the injunction after finding it was issued based on false information.",
        chinese_question: "法院在发现禁令是基于虚假信息发布后，决定 __________ 禁令。",
        answers: [
                { option: "A", answer: "maintain", chinese_answer: "维持", chinese_romanization: "wéichí" },
                { option: "B", answer: "quash", chinese_answer: "撤销", chinese_romanization: "chèxiāo" },
                { option: "C", answer: "enforce", chinese_answer: "执行", chinese_romanization: "zhíxíng" },
                { option: "D", answer: "uphold", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'quash' means to reject or void, especially by legal procedure." +
                "<br><br>" +
                "(A) 'maintain' means to keep in existence or continuance." +
                "<br><br>" +
                "(C) 'enforce' means to compel observance of or compliance with a law, rule, or obligation." +
                "<br><br>" +
                "(D) 'uphold' means to support or maintain.",
        chinese_explanation: "(B) '撤销' 意味着拒绝或使无效，特别是通过法律程序。" +
                "<br><br>" +
                "(A) '维持' 意味着保持存在或继续存在。" +
                "<br><br>" +
                "(C) '执行' 意味着强制遵守或遵循法律、规则或义务。" +
                "<br><br>" +
                "(D) '支持' 意味着支持或维持。"
    },
    {
        id: 8,
    question: "The new policy changes are likely to __________ more confusion among employees.",
    chinese_question: "新的政策变更可能会 __________ 更多的混乱。",
    answers: [
        { option: "A", answer: "engender", chinese_answer: "引起", chinese_romanization: "yǐnqǐ" },
        { option: "B", answer: "resolve", chinese_answer: "解决", chinese_romanization: "jiějué" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'engender' means to cause or give rise to a feeling, situation, or condition." +
        "<br><br>" +
        "(B) 'resolve' means to find a solution to a problem or contentious matter." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'simplify' means to make something simpler or easier to do or understand.",
    chinese_explanation: "(A) '引起' 意味着引起或产生一种感觉、情况或条件。" +
        "<br><br>" +
        "(B) '解决' 意味着找到问题或争议事项的解决方案。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '简化' 意味着使某事更简单或更容易做或理解。"
    },
    {
        id: 9,
        question: "The journalist was determined to __________ the issue of corruption in her article.",
        chinese_question: "记者决心在她的文章中 __________ 腐败问题。",
        answers: [
                { option: "A", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
                { option: "B", answer: "broach", chinese_answer: "提出", chinese_romanization: "tíchū" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'broach' means to raise a sensitive or difficult subject for discussion." +
                "<br><br>" +
                "(A) 'conceal' means to keep something secret or prevent it from being known." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'avoid' means to keep away from or stop oneself from doing something.",
        chinese_explanation: "(B) '提出' 意味着提出一个敏感或困难的话题进行讨论。" +
                "<br><br>" +
                "(A) '隐藏' 意味着保密或防止被知道。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '避免' 意味着远离或阻止自己做某事。"
    },
    {
        id: 10,
        question: "The government decided to __________ new regulations to improve air quality in the city.",
        chinese_question: "政府决定 __________ 新的法规，以改善城市空气质量。",
        answers: [
                { option: "A", answer: "promulgate", chinese_answer: "颁布", chinese_romanization: "bānbù" },
                { option: "B", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "retract", chinese_answer: "撤回", chinese_romanization: "chèhuí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'promulgate' means to promote or make widely known (an idea or cause); to put a law or decree into effect by official proclamation." +
                "<br><br>" +
                "(B) 'conceal' means to keep something secret or hidden." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'retract' means to draw back or withdraw.",
        chinese_explanation: "(A) '颁布' 意味着推广或广泛传播（一个想法或事业）；通过官方公告实施法律或法令。" +
                "<br><br>" +
                "(B) '隐藏' 意味着将某事保密或隐藏。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '撤回' 意味着收回或撤回。"
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
