// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The article aims to __________ the benefits of regular exercise.",
        chinese_question: "这篇文章旨在 __________ 定期锻炼的好处。",
        answers: [
                { option: "A", answer: "enumerate", chinese_answer: "列举", chinese_romanization: "lièjǔ" },
                { option: "B", answer: "obscure", chinese_answer: "遮掩", chinese_romanization: "zhēyǎn" },
                { option: "C", answer: "dismiss", chinese_answer: "驳回", chinese_romanization: "bóhuí" },
                { option: "D", answer: "confuse", chinese_answer: "迷惑", chinese_romanization: "míhuò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'enumerate' figuratively means to mention (a number of things) one by one." +
                "<br><br>" +
                "(B) 'obscure' means to keep from being seen; conceal." +
                "<br><br>" +
                "(C) 'dismiss' means to order or allow to leave; send away." +
                "<br><br>" +
                "(D) 'confuse' means to make (someone) unable to think clearly.",
        chinese_explanation: "(A) '列举' 在此语境下比喻一一提到（若干事情）。" +
                "<br><br>" +
                "(B) '遮掩' 意味着使看不见；隐藏。" +
                "<br><br>" +
                "(C) '驳回' 意味着命令或允许离开；送走。" +
                "<br><br>" +
                "(D) '迷惑' 意味着使（某人）无法清晰思考。"
    },
    {
        id: 2,
        question: "The company always tried to __________ to the highest ethical standards in their operations.",
        chinese_question: "公司始终努力在运营中 __________ 最高的道德标准。",
        answers: [
                { option: "A", answer: "hew", chinese_answer: "遵守", chinese_romanization: "zūnshǒu" },
                { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "violate", chinese_answer: "违反", chinese_romanization: "wéifǎn" },
                { option: "D", answer: "undermine", chinese_answer: "破坏", chinese_romanization: "pòhuài" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'hew' means to conform or adhere to, used figuratively here." +
                "<br><br>" +
                "(B) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(C) 'violate' means to break or fail to comply with a rule or formal agreement." +
                "<br><br>" +
                "(D) 'undermine' means to weaken or damage something, especially gradually.",
        chinese_explanation: "(A) '遵守' 意味着符合或遵守，这里是比喻用法。" +
                "<br><br>" +
                "(B) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(C) '违反' 意味着违反或不遵守规则或正式协议。" +
                "<br><br>" +
                "(D) '破坏' 意味着削弱或损害某物，尤指逐渐地。"
    },
    {
        id: 3,
        question: "The story was __________ with clues that led to the surprising ending.",
        chinese_question: "这个故事 __________ 了引向意外结局的线索。",
        answers: [
                { option: "A", answer: "devoid", chinese_answer: "缺乏", chinese_romanization: "quēfá" },
                { option: "B", answer: "bestrewed", chinese_answer: "散布", chinese_romanization: "sànbù" },
                { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "hidden", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'bestrewed' means to scatter or spread things over a surface, used figuratively to mean filled or interspersed with." +
                "<br><br>" +
                "(A) 'devoid' means entirely lacking or free from." +
                "<br><br>" +
                "(C) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'hidden' means to put or keep out of sight; conceal.",
        chinese_explanation: "(B) '散布' 意味着将东西散布在表面上，喻义为充满或夹杂着。" +
                "<br><br>" +
                "(A) '缺乏' 意味着完全没有或不含有。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '隐藏' 意味着放置或保持在视线之外；隐瞒。"
    },
    {
        id: 4,
        question: "His leadership qualities have been __________ through years of challenging experiences.",
        chinese_question: "多年的挑战性经历 __________ 了他的领导品质。",
        answers: [
                { option: "A", answer: "chiselled", chinese_answer: "磨练", chinese_romanization: "móliàn" },
                { option: "B", answer: "weakened", chinese_answer: "削弱", chinese_romanization: "xiāoruò" },
                { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "disguised", chinese_answer: "伪装", chinese_romanization: "wèizhuāng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'chiselled' means to shape or define something with effort, used figuratively here." +
                "<br><br>" +
                "(B) 'weakened' means to make or become less strong." +
                "<br><br>" +
                "(C) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'disguised' means to give someone or something a different appearance in order to conceal their identity.",
        chinese_explanation: "(A) '磨练' 意味着用努力来塑造或定义某物，这里是比喻用法。" +
                "<br><br>" +
                "(B) '削弱' 意味着使变得不那么强。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '伪装' 意味着给某人或某物以不同的外观，以掩盖其身份。"
    },
    {
        id: 5,
        question: "To better teach the subject, the textbook was rewritten to __________ the key concepts.",
        chinese_question: "为了更好地教授该科目，教材被重写以 __________ 关键概念。",
        answers: [
                { option: "A", answer: "axiomatize", chinese_answer: "公理化", chinese_romanization: "gōnglǐ huà" },
                { option: "B", answer: "obscure", chinese_answer: "模糊", chinese_romanization: "móhú" },
                { option: "C", answer: "dismiss", chinese_answer: "驳回", chinese_romanization: "bóhuí" },
                { option: "D", answer: "neglect", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'axiomatize' means to establish a system of principles or rules as axioms." +
                "<br><br>" +
                "(B) 'obscure' means to make something difficult to see or understand." +
                "<br><br>" +
                "(C) 'dismiss' means to decide that something or someone is not important and not worth considering." +
                "<br><br>" +
                "(D) 'neglect' means to fail to care for properly.",
        chinese_explanation: "(A) '公理化' 意味着将一系列原则或规则确立为公理。" +
                "<br><br>" +
                "(B) '模糊' 意味着使某事难以看到或理解。" +
                "<br><br>" +
                "(C) '驳回' 意味着决定某事或某人不重要且不值得考虑。" +
                "<br><br>" +
                "(D) '忽略' 意味着未能适当照顾。"
    },
    {
        id: 6,
    question: "The spy had to __________ his identity while infiltrating the enemy base.",
    chinese_question: "间谍在渗透敌人基地时不得不 __________ 自己的身份。",
    answers: [
        { option: "A", answer: "disclose", chinese_answer: "透露", chinese_romanization: "tòulù" },
        { option: "B", answer: "dissemble", chinese_answer: "掩饰", chinese_romanization: "yǎnshì" },
        { option: "C", answer: "affirm", chinese_answer: "断言", chinese_romanization: "duànyán" },
        { option: "D", answer: "announce", chinese_answer: "宣布", chinese_romanization: "xuānbù" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'dissemble' used figuratively means to hide or conceal something." +
        "<br><br>" +
        "(A) 'disclose' means to make known." +
        "<br><br>" +
        "(C) 'affirm' means to state as a fact." +
        "<br><br>" +
        "(D) 'announce' means to make a formal public statement about a fact, occurrence, or intention.",
    chinese_explanation: "(B) '掩饰' 在比喻意义上指隐藏或隐瞒某事。" +
        "<br><br>" +
        "(A) '透露' 意味着公开。" +
        "<br><br>" +
        "(C) '断言' 意味着作为事实陈述。" +
        "<br><br>" +
        "(D) '宣布' 意味着对一个事实、事件或意图做正式的公开声明。"
    },
    {
        id: 7,
    question: "Unchecked industrialization threatens to __________ the rich biodiversity of the region.",
    chinese_question: "不加控制的工业化威胁 __________ 该地区丰富的生物多样性。",
    answers: [
        { option: "A", answer: "protect", chinese_answer: "保护", chinese_romanization: "bǎohù" },
        { option: "B", answer: "despoil", chinese_answer: "掠夺", chinese_romanization: "luèduó" },
        { option: "C", answer: "restore", chinese_answer: "恢复", chinese_romanization: "huīfù" },
        { option: "D", answer: "maintain", chinese_answer: "维持", chinese_romanization: "wéichí" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'despoil' used figuratively means to take away or ruin something valuable." +
        "<br><br>" +
        "(A) 'protect' means to keep safe from harm or injury." +
        "<br><br>" +
        "(C) 'restore' means to bring back to a former condition." +
        "<br><br>" +
        "(D) 'maintain' means to keep in an existing state.",
    chinese_explanation: "(B) '掠夺' 在比喻意义上指夺走或毁坏有价值的东西。" +
        "<br><br>" +
        "(A) '保护' 意味着保护免受伤害或损害。" +
        "<br><br>" +
        "(C) '恢复' 意味着恢复到以前的状态。" +
        "<br><br>" +
        "(D) '维持' 意味着保持现有状态。"
    },
    {
        id: 8,
        question: "Don't __________ with your studies; the exam is just around the corner.",
        chinese_question: "不要在学习上 __________，考试就在眼前。",
        answers: [
                { option: "A", answer: "delay", chinese_answer: "延迟", chinese_romanization: "yánchí" },
                { option: "B", answer: "tarry", chinese_answer: "拖延", chinese_romanization: "tuōyán" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'tarry' figuratively means to delay or linger." +
                "<br><br>" +
                "(A) 'delay' means to postpone." +
                "<br><br>" +
                "(C) 'ignore' means to pay no attention to." +
                "<br><br>" +
                "(D) 'simplify' means to make less complex.",
        chinese_explanation: "(B) '拖延' 一词在比喻上意味着延迟或停留。" +
                "<br><br>" +
                "(A) '延迟' 意味着推迟。" +
                "<br><br>" +
                "(C) '忽视' 意味着不注意。" +
                "<br><br>" +
                "(D) '简化' 意味着使变得不复杂。"
    },
    {
        id: 9,
        question: "The amount of information available on the internet can __________ the most seasoned researchers.",
        chinese_question: "互联网上可用的信息量可以让最有经验的研究人员都 __________ 。",
        answers: [
                { option: "A", answer: "boggle", chinese_answer: "困惑", chinese_romanization: "kùnhuò" },
                { option: "B", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "C", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūlüè" },
                { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'boggle' means to overwhelm or bewilder." +
                "<br><br>" +
                "(B) 'support' means to bear all or part of the weight of; hold up." +
                "<br><br>" +
                "(C) 'neglect' means to fail to care for properly." +
                "<br><br>" +
                "(D) 'simplify' means to make something simpler or easier to do or understand.",
        chinese_explanation: "(A) '困惑' 意味着使不知所措或迷惑。" +
                "<br><br>" +
                "(B) '支持' 意味着承担全部或部分重量；支撑。" +
                "<br><br>" +
                "(C) '忽视' 意味着未能适当照顾。" +
                "<br><br>" +
                "(D) '简化' 意味着使某事更简单或更容易做或理解。"
    },
    {
        id: 10,
        question: "The company chose to __________ to the new regulations to avoid legal issues.",
        chinese_question: "公司选择 __________ 新法规以避免法律问题。",
        answers: [
                { option: "A", answer: "accede", chinese_answer: "遵从", chinese_romanization: "zūncóng" },
                { option: "B", answer: "defy", chinese_answer: "违抗", chinese_romanization: "wéikàng" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "challenge", chinese_answer: "挑战", chinese_romanization: "tiǎozhàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'accede' means to agree to a request or demand." +
                "<br><br>" +
                "(B) 'defy' means to openly resist or refuse to obey." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'challenge' means to invite someone to engage in a contest.",
        chinese_explanation: "(A) '遵从' 意味着同意请求或要求。" +
                "<br><br>" +
                "(B) '违抗' 意味着公开抵抗或拒绝服从。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '挑战' 意味着邀请某人参加竞赛。"
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
