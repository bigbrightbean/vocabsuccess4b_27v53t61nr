// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "To __________ the impact of the economic downturn, the government introduced several relief measures.",
        chinese_question: "为了 __________ 经济衰退的影响，政府推出了几项救济措施。",
        answers: [
                { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "B", answer: "mitigate", chinese_answer: "缓解", chinese_romanization: "huǎnjiě" },
                { option: "C", answer: "amplify", chinese_answer: "放大", chinese_romanization: "fàngdà" },
                { option: "D", answer: "overlook", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'mitigate' means to make less severe or intense." +
                "<br><br>" +
                "(A) 'ignore' means to refuse to take notice of." +
                "<br><br>" +
                "(C) 'amplify' means to increase in extent or intensity." +
                "<br><br>" +
                "(D) 'overlook' means to fail to notice something.",
        chinese_explanation: "(B) '缓解' 意味着使某事物不那么严重或强烈。" +
                "<br><br>" +
                "(A) '忽视' 意味着拒绝注意。" +
                "<br><br>" +
                "(C) '放大' 意味着在范围或强度上增加。" +
                "<br><br>" +
                "(D) '忽略' 意味着未能注意到某事物。"
    },
    {
        id: 2,
        question: "It __________ that the cause of the fire was a faulty electrical wire.",
        chinese_question: "__________ 火灾的原因是一根有故障的电线。",
        answers: [
                { option: "A", answer: "intensified", chinese_answer: "加剧", chinese_romanization: "jiājù" },
                { option: "B", answer: "transpired", chinese_answer: "发生", chinese_romanization: "fāshēng" },
                { option: "C", answer: "overlooked", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "disappeared", chinese_answer: "消失", chinese_romanization: "xiāoshī" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'transpired' means to become known or to happen." +
                "<br><br>" +
                "(A) 'intensified' means made or become stronger or more extreme." +
                "<br><br>" +
                "(C) 'overlooked' means failed to notice something." +
                "<br><br>" +
                "(D) 'disappeared' means ceased to be visible.",
        chinese_explanation: "(B) '发生' 意味着变得已知或发生。" +
                "<br><br>" +
                "(A) '加剧' 意味着变得更强或更极端。" +
                "<br><br>" +
                "(C) '忽视' 意味着未能注意到某事。" +
                "<br><br>" +
                "(D) '消失' 意味着不再可见。"
    },
    {
        id: 3,
        question: "The company implemented a new strategy to __________ the financial losses incurred during the pandemic.",
        chinese_question: "公司实施了新策略来 __________ 在疫情期间遭受的财务损失。",
        answers: [
                { option: "A", answer: "sustain", chinese_answer: "维持", chinese_romanization: "wéichí" },
                { option: "B", answer: "recuperate", chinese_answer: "弥补", chinese_romanization: "míbǔ" },
                { option: "C", answer: "worsen", chinese_answer: "恶化", chinese_romanization: "èhuà" },
                { option: "D", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'recuperate' means to recover from illness or exertion, used figuratively here to mean recovering financial losses." +
                "<br><br>" +
                "(A) 'sustain' means to support or maintain." +
                "<br><br>" +
                "(C) 'worsen' means to make or become worse." +
                "<br><br>" +
                "(D) 'neglect' means to fail to care for properly.",
        chinese_explanation: "(B) '弥补' 在这里是比喻意义，指恢复财务损失。" +
                "<br><br>" +
                "(A) '维持' 意味着支持或维持。" +
                "<br><br>" +
                "(C) '恶化' 意味着变得更糟。" +
                "<br><br>" +
                "(D) '忽视' 意味着未能妥善照顾。"
    },
    {
        id: 4,
        question: "The actors __________ on stage during the musical, bringing the story to life with their energy.",
        chinese_question: "在音乐剧中，演员们在舞台上 __________，用他们的能量使故事栩栩如生。",
        answers: [
                { option: "A", answer: "sulked", chinese_answer: "生闷气", chinese_romanization: "shēng mèn qì" },
                { option: "B", answer: "cavorted", chinese_answer: "欢跃", chinese_romanization: "huānyuè" },
                { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "criticized", chinese_answer: "批评", chinese_romanization: "pīpíng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'cavorted' means to jump or dance around excitedly." +
                "<br><br>" +
                "(A) 'sulked' means to be silent, morose, and bad-tempered out of annoyance or disappointment." +
                "<br><br>" +
                "(C) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'criticized' means to indicate the faults of someone or something in a disapproving way.",
        chinese_explanation: "(B) '欢跃' 意味着兴奋地跳跃或舞蹈。" +
                "<br><br>" +
                "(A) '生闷气' 意味着因为恼怒或失望而沉默、阴郁和坏脾气。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '批评' 意味着以不赞成的方式指出某人或某事的缺点。"
    },
    {
        id: 5,
        question: "Despite his efforts, he __________ the negotiations, leaving both parties dissatisfied.",
        chinese_question: "尽管他努力了，他还是把谈判 __________ 了，导致双方都不满意。",
        answers: [
                { option: "A", answer: "bungled", chinese_answer: "搞砸", chinese_romanization: "gǎo zá" },
                { option: "B", answer: "simplified", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
                { option: "C", answer: "mastered", chinese_answer: "掌握", chinese_romanization: "zhǎngwò" },
                { option: "D", answer: "expedited", chinese_answer: "加快", chinese_romanization: "jiākuài" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'bungled' means to carry out a task clumsily or incompetently." +
                "<br><br>" +
                "(B) 'simplified' means to make something simpler or easier to do or understand." +
                "<br><br>" +
                "(C) 'mastered' means to acquire complete knowledge or skill in an area." +
                "<br><br>" +
                "(D) 'expedited' means to make an action or process happen sooner or be accomplished more quickly.",
        chinese_explanation: "(A) '搞砸' 意味着笨拙或无能地完成一项任务。" +
                "<br><br>" +
                "(B) '简化' 意味着使某事更简单或更容易做或理解。" +
                "<br><br>" +
                "(C) '掌握' 意味着在某一领域获得完全的知识或技能。" +
                "<br><br>" +
                "(D) '加快' 意味着使某行动或过程更快发生或完成。"
    },
    {
        id: 6,
        question: "The con artist managed to __________ several people before being caught.",
        chinese_question: "骗子在被抓住之前设法 __________ 了几个人。",
        answers: [
                { option: "A", answer: "bilk", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" },
                { option: "B", answer: "aid", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "assist", chinese_answer: "协助", chinese_romanization: "xiézhù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'bilk' means to cheat or defraud someone." +
                "<br><br>" +
                "(B) 'aid' means to help or support." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'assist' means to help or support.",
        chinese_explanation: "(A) '欺骗' 意味着欺骗或诈骗某人。" +
                "<br><br>" +
                "(B) '帮助' 意味着帮助或支持。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '协助' 意味着帮助或支持。"
    },
    {
        id: 7,
        question: "They aimed to __________ all fears of failure from their minds before starting the project.",
        chinese_question: "他们在开始项目之前，力求将对失败的所有恐惧 __________ 出脑海。",
        answers: [
                { option: "A", answer: "banish", chinese_answer: "驱除", chinese_romanization: "qūchú" },
                { option: "B", answer: "invite", chinese_answer: "邀请", chinese_romanization: "yāoqǐng" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "embrace", chinese_answer: "接受", chinese_romanization: "jiēshòu" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'banish' means to get rid of something unwanted." +
                "<br><br>" +
                "(B) 'invite' means to make a polite, formal, or friendly request to someone to go somewhere or to do something." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'embrace' means to accept or support willingly and enthusiastically.",
        chinese_explanation: "(A) '驱除' 意味着摆脱不想要的东西。" +
                "<br><br>" +
                "(B) '邀请' 意味着礼貌地、正式地或友好地请求某人去某地或做某事。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '接受' 意味着愿意并热情地接受或支持。"
    },
    {
        id: 8,
        question: "Before launching the new drug, the company conducted a thorough __________ of its safety and effectiveness.",
        chinese_question: "在推出新药之前，公司进行了彻底的 __________ ，以确定其安全性和有效性。",
        answers: [
                { option: "A", answer: "assay", chinese_answer: "化验", chinese_romanization: "huàyàn" },
                { option: "B", answer: "overlook", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "ignore", chinese_answer: "无视", chinese_romanization: "wúshì" },
                { option: "D", answer: "dismiss", chinese_answer: "驳回", chinese_romanization: "bóhuí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'assay' means to analyze a substance to determine its composition or quality." +
                "<br><br>" +
                "(B) 'overlook' means to fail to notice something." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'dismiss' means to decide that something or someone is not important and not worth considering.",
        chinese_explanation: "(A) '化验' 意味着分析物质以确定其成分或质量。" +
                "<br><br>" +
                "(B) '忽视' 意味着未能注意到某事。" +
                "<br><br>" +
                "(C) '无视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '驳回' 意味着决定某事或某人不重要且不值得考虑。"
    },
    {
        id: 9,
        question: "Despite the difficulties, he chose to __________ to his principles and not compromise.",
        chinese_question: "尽管困难重重，他还是选择 __________ 自己的原则，不妥协。",
        answers: [
                { option: "A", answer: "cleave", chinese_answer: "坚持", chinese_romanization: "jiānchí" },
                { option: "B", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'cleave' also means to adhere strongly to a particular pursuit or belief." +
                "<br><br>" +
                "(B) 'abandon' means to give up completely." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'simplify' means to make something simpler or easier to do or understand.",
        chinese_explanation: "(A) '坚持' 也意味着坚决追求或信奉某个信念。" +
                "<br><br>" +
                "(B) '放弃' 意味着完全放弃。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '简化' 意味着使某事更简单或更容易做或理解。"
    },
    {
        id: 10,
    question: "To address the growing concerns, the town council decided to __________ a public forum.",
    chinese_question: "为了解决日益增加的担忧，市议会决定 __________ 一次公开论坛。",
    answers: [
        { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "B", answer: "convoke", chinese_answer: "召集", chinese_romanization: "zhàojí" },
        { option: "C", answer: "cancel", chinese_answer: "取消", chinese_romanization: "qǔxiāo" },
        { option: "D", answer: "postpone", chinese_answer: "推迟", chinese_romanization: "tuīchí" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'convoke' means to call together or summon a meeting or assembly." +
        "<br><br>" +
        "(A) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'cancel' means to decide or announce that an event will not take place." +
        "<br><br>" +
        "(D) 'postpone' means to cause or arrange for something to take place at a time later than that first scheduled.",
    chinese_explanation: "(B) '召集' 意味着召集或召唤会议或集会。" +
        "<br><br>" +
        "(A) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '取消' 意味着决定或宣布某个事件将不会发生。" +
        "<br><br>" +
        "(D) '推迟' 意味着安排或安排某事在原定时间之后进行。"
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
