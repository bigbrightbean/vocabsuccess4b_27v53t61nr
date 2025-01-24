// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Continuous criticism from his peers started to __________ his confidence.",
        chinese_question: "同伴们不断的批评开始 __________ 他的自信心。",
        answers: [
                { option: "A", answer: "abrade", chinese_answer: "磨损", chinese_romanization: "mósǔn" },
                { option: "B", answer: "boost", chinese_answer: "提升", chinese_romanization: "tíshēng" },
                { option: "C", answer: "protect", chinese_answer: "保护", chinese_romanization: "bǎohù" },
                { option: "D", answer: "shield", chinese_answer: "遮挡", chinese_romanization: "zhēdǎng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'abrade' means to gradually wear down through sustained friction." +
                "<br><br>" +
                "(B) 'boost' means to increase or improve." +
                "<br><br>" +
                "(C) 'protect' means to keep safe from harm or injury." +
                "<br><br>" +
                "(D) 'shield' means to protect from a danger, risk, or unpleasant experience.",
        chinese_explanation: "(A) '磨损' 意味着通过持续摩擦逐渐磨损。" +
                "<br><br>" +
                "(B) '提升' 意味着增加或改善。" +
                "<br><br>" +
                "(C) '保护' 意味着保护免受伤害或损害。" +
                "<br><br>" +
                "(D) '遮挡' 意味着保护免受危险、风险或不愉快的经历。"
    },
    {
        id: 2,
    question: "To __________ the upset customers, the company issued a public apology and offered refunds.",
    chinese_question: "为了 __________ 生气的顾客，公司发表了公开道歉并提供退款。",
    answers: [
        { option: "A", answer: "conciliate", chinese_answer: "安抚", chinese_romanization: "ānfǔ" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "escalate", chinese_answer: "升级", chinese_romanization: "shēngjí" },
        { option: "D", answer: "mock", chinese_answer: "嘲笑", chinese_romanization: "cháoxiào" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'conciliate' means to stop someone from being angry or discontented; to placate or pacify." +
        "<br><br>" +
        "(B) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'escalate' means to increase rapidly." +
        "<br><br>" +
        "(D) 'mock' means to tease or laugh at in a scornful or contemptuous manner.",
    chinese_explanation: "(A) '安抚' 意味着使某人不再生气或不满；安抚或平息。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '升级' 意味着快速增加。" +
        "<br><br>" +
        "(D) '嘲笑' 意味着以轻蔑或蔑视的方式取笑或嘲笑。"
    },
    {
        id: 3,
        question: "The speaker began to __________ the key points of his argument to ensure the audience understood.",
        chinese_question: "演讲者开始 __________ 他论点的要点，以确保观众理解。",
        answers: [
                { option: "A", answer: "enumerate", chinese_answer: "列举", chinese_romanization: "lièjǔ" },
                { option: "B", answer: "confuse", chinese_answer: "迷惑", chinese_romanization: "míhuò" },
                { option: "C", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
                { option: "D", answer: "dismiss", chinese_answer: "驳回", chinese_romanization: "bóhuí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'enumerate' figuratively means to mention (a number of things) one by one." +
                "<br><br>" +
                "(B) 'confuse' means to make (someone) unable to think clearly." +
                "<br><br>" +
                "(C) 'simplify' means to make something simpler or easier to do or understand." +
                "<br><br>" +
                "(D) 'dismiss' means to order or allow to leave; send away.",
        chinese_explanation: "(A) '列举' 在此语境下比喻一一提到（若干事情）。" +
                "<br><br>" +
                "(B) '迷惑' 意味着使（某人）无法清晰思考。" +
                "<br><br>" +
                "(C) '简化' 意味着使某事物更简单或更容易做或理解。" +
                "<br><br>" +
                "(D) '驳回' 意味着命令或允许离开；送走。"
    },
    {
        id: 4,
        question: "They loved to __________ at the local pub on weekends, enjoying each other's company.",
        chinese_question: "他们喜欢在周末在当地的酒吧里 __________，享受彼此的陪伴。",
        answers: [
                { option: "A", answer: "argue", chinese_answer: "争论", chinese_romanization: "zhēnglùn" },
                { option: "B", answer: "carouse", chinese_answer: "狂欢", chinese_romanization: "kuánghuān" },
                { option: "C", answer: "study", chinese_answer: "学习", chinese_romanization: "xuéxí" },
                { option: "D", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'carouse' means to drink plentiful amounts of alcohol and enjoy oneself with others in a noisy, lively way." +
                "<br><br>" +
                "(A) 'argue' means to exchange or express diverging or opposite views, typically in a heated or angry way." +
                "<br><br>" +
                "(C) 'study' means to devote time and attention to acquiring knowledge on an academic subject." +
                "<br><br>" +
                "(D) 'avoid' means to keep away from or stop oneself from doing something.",
        chinese_explanation: "(B) '狂欢'一词意味着与他人一起大量饮酒和享受喧闹、热闹的方式。" +
                "<br><br>" +
                "(A) '争论' 意味着交换或表达不同或相反的观点，通常以激烈或愤怒的方式。" +
                "<br><br>" +
                "(C) '学习' 意味着花时间和精力在学术科目上获取知识。" +
                "<br><br>" +
                "(D) '避免' 意味着远离或阻止自己做某事。"
    },
    {
        id: 5,
    question: "To achieve a peaceful mind, she learned to __________ herself of past regrets and worries.",
    chinese_question: "为了实现心灵平静，她学会了将过去的遗憾和担忧 __________。",
    answers: [
        { option: "A", answer: "embrace", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
        { option: "B", answer: "disencumber", chinese_answer: "解脱", chinese_romanization: "jiětuō" },
        { option: "C", answer: "accept", chinese_answer: "认同", chinese_romanization: "rèntóng" },
        { option: "D", answer: "intensify", chinese_answer: "强化", chinese_romanization: "qiánghuà" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'disencumber' used figuratively means to free from burdensome thoughts or feelings." +
        "<br><br>" +
        "(A) 'embrace' means to accept or support willingly and enthusiastically." +
        "<br><br>" +
        "(C) 'accept' means to consent to receive or undertake something offered." +
        "<br><br>" +
        "(D) 'intensify' means to become or make more intense.",
    chinese_explanation: "(B) '解脱' 在比喻意义上指从负担的思想或感情中解脱。" +
        "<br><br>" +
        "(A) '接受' 意味着愿意并热情地接受或支持。" +
        "<br><br>" +
        "(C) '认同' 意味着同意接受或承担提供的某事。" +
        "<br><br>" +
        "(D) '强化' 意味着变得或使更强烈。"
    },
    {
        id: 6,
        question: "He felt overwhelmed by his responsibilities and decided to __________ himself from social activities.",
        chinese_question: "他感到责任重重，决定 __________ 自己，远离社交活动。",
        answers: [
                { option: "A", answer: "cloister", chinese_answer: "隐居", chinese_romanization: "yǐnjū" },
                { option: "B", answer: "enhance", chinese_answer: "增强", chinese_romanization: "zēngqiáng" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'cloister' means to seclude or shut away, especially in a convent or monastery, used figuratively here." +
                "<br><br>" +
                "(B) 'enhance' means to intensify, increase, or further improve the quality, value, or extent of." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'simplify' means to make something simpler or easier to do or understand.",
        chinese_explanation: "(A) '隐居' 意味着隔离或关闭，尤其是在修道院中，这里是比喻用法。" +
                "<br><br>" +
                "(B) '增强' 意味着加强、增加或进一步改善质量、价值或程度。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '简化' 意味着使某事更简单或更容易做或理解。"
    },
    {
        id: 7,
        question: "He felt it was not his place to __________ his views during the family argument.",
        chinese_question: "他觉得在家庭争吵中 __________ 自己的观点是不合适的。",
        answers: [
                { option: "A", answer: "hide", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
                { option: "B", answer: "obtrude", chinese_answer: "强加", chinese_romanization: "qiángjiā" },
                { option: "C", answer: "validate", chinese_answer: "验证", chinese_romanization: "yànzhèng" },
                { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'obtrude' means to impose or force oneself or one's ideas on others in an unwelcome way." +
                "<br><br>" +
                "(A) 'hide' means to put or keep out of sight." +
                "<br><br>" +
                "(C) 'validate' means to check or prove the validity of something." +
                "<br><br>" +
                "(D) 'ignore' means to refuse to take notice of.",
        chinese_explanation: "(B) '强加' 意味着以不受欢迎的方式把自己或自己的想法强加给别人。" +
                "<br><br>" +
                "(A) '隐藏' 意味着把某物藏起来或隐藏。" +
                "<br><br>" +
                "(C) '验证' 意味着检查或证明某物的有效性。" +
                "<br><br>" +
                "(D) '忽视' 意味着拒绝注意。"
    },
    {
        id: 8,
        question: "The politician's apology did little to __________ the public's anger over the scandal.",
        chinese_question: "这位政客的道歉对缓解公众对丑闻的愤怒几乎没有起到任何作用。",
        answers: [
                { option: "A", answer: "exacerbate", chinese_answer: "加剧", chinese_romanization: "jiājù" },
                { option: "B", answer: "palliate", chinese_answer: "缓解", chinese_romanization: "huǎnjiě" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "intensify", chinese_answer: "强化", chinese_romanization: "qiánghuà" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'palliate' means to make less severe or unpleasant without removing the cause." +
                "<br><br>" +
                "(A) 'exacerbate' means to make a problem, bad situation, or negative feeling worse." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'intensify' means to become or make more intense.",
        chinese_explanation: "(B) '缓解'一词意味着在不消除原因的情况下减轻严重性或不愉快。" +
                "<br><br>" +
                "(A) '加剧' 意味着使问题、糟糕的情况或负面情绪变得更糟。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '强化' 意味着变得或使更强烈。"
    },
    {
        id: 9,
    question: "Critics argued that the movie could __________ the morals of impressionable teenagers.",
    chinese_question: "评论家认为这部电影可能会 __________易受影响的青少年的道德观。",
    answers: [
        { option: "A", answer: "uplift", chinese_answer: "提升", chinese_romanization: "tíshēng" },
        { option: "B", answer: "deprave", chinese_answer: "腐化", chinese_romanization: "fǔhuà" },
        { option: "C", answer: "strengthen", chinese_answer: "增强", chinese_romanization: "zēngqiáng" },
        { option: "D", answer: "improve", chinese_answer: "改善", chinese_romanization: "gǎishàn" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'deprave' means to make someone morally corrupt or wicked." +
        "<br><br>" +
        "(A) 'uplift' means to raise or elevate emotionally or spiritually." +
        "<br><br>" +
        "(C) 'strengthen' means to make or become stronger." +
        "<br><br>" +
        "(D) 'improve' means to make or become better.",
    chinese_explanation: "(B) '腐化' 意味着使某人道德堕落或邪恶。" +
        "<br><br>" +
        "(A) '提升' 意味着情感或精神上的提高。" +
        "<br><br>" +
        "(C) '增强' 意味着使变得更强。" +
        "<br><br>" +
        "(D) '改善' 意味着使或变得更好。"
    },
    {
        id: 10,
        question: "The engineer noted that debris could __________ the drainage system, leading to flooding.",
        chinese_question: "工程师指出，碎片可能会 __________ 排水系统，导致洪水泛滥。",
        answers: [
                { option: "A", answer: "improve", chinese_answer: "改善", chinese_romanization: "gǎishàn" },
                { option: "B", answer: "occlude", chinese_answer: "阻塞", chinese_romanization: "zǔsè" },
                { option: "C", answer: "repair", chinese_answer: "修理", chinese_romanization: "xiūlǐ" },
                { option: "D", answer: "maintain", chinese_answer: "维护", chinese_romanization: "wéihù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'occlude' means to block or obstruct." +
                "<br><br>" +
                "(A) 'improve' means to make something better." +
                "<br><br>" +
                "(C) 'repair' means to fix or mend." +
                "<br><br>" +
                "(D) 'maintain' means to keep something in good condition.",
        chinese_explanation: "(B) '阻塞' 意味着阻挡或阻碍。" +
                "<br><br>" +
                "(A) '改善' 意味着使某物变得更好。" +
                "<br><br>" +
                "(C) '修理' 意味着修复或修补。" +
                "<br><br>" +
                "(D) '维护' 意味着保持某物处于良好状态。"
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
