// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The government launched a campaign to __________ corruption from the political system.",
    chinese_question: "政府发起了一项运动，以 __________ 政治系统中的腐败。",
    answers: [
        { option: "A", answer: "cultivate", chinese_answer: "培养", chinese_romanization: "péiyǎng" },
        { option: "B", answer: "extirpate", chinese_answer: "根除", chinese_romanization: "gēnchú" },
        { option: "C", answer: "tolerate", chinese_answer: "容忍", chinese_romanization: "róngrěn" },
        { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'extirpate' means to root out and destroy completely." +
        "<br><br>" +
        "(A) 'cultivate' means to try to acquire or develop." +
        "<br><br>" +
        "(C) 'tolerate' means to allow the existence, occurrence, or practice of something without interference." +
        "<br><br>" +
        "(D) 'ignore' means to refuse to take notice of or acknowledge.",
    chinese_explanation: "(B) '根除' 意味着彻底根除和消灭。" +
        "<br><br>" +
        "(A) '培养' 意味着试图获得或发展。" +
        "<br><br>" +
        "(C) '容忍' 意味着允许某事物的存在、发生或实践，而不进行干预。" +
        "<br><br>" +
        "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 2,
    question: "The historian attempted to __________ various historical accounts to form a cohesive narrative.",
    chinese_question: "历史学家试图将各种历史记载 __________ 成一个连贯的叙述。",
    answers: [
        { option: "A", answer: "separate", chinese_answer: "分开", chinese_romanization: "fēnkāi" },
        { option: "B", answer: "concatenate", chinese_answer: "连接", chinese_romanization: "liánjiē" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "obscure", chinese_answer: "模糊", chinese_romanization: "móhu" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'concatenate' means to link things together in a series or chain." +
        "<br><br>" +
        "(A) 'separate' means to cause to move or be apart." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'obscure' means to make unclear or difficult to understand.",
    chinese_explanation: "(B) '连接' 意味着将事物按顺序或链条连接在一起。" +
        "<br><br>" +
        "(A) '分开' 意味着使移动或分离。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '模糊' 意味着使不清晰或难以理解。"
    },
    {
        id: 3,
    question: "The long wait and constant delays began to __________ on the travelers' nerves.",
    chinese_question: "长时间的等待和不断的延误开始 __________ 旅客们的神经。",
    answers: [
        { option: "A", answer: "grate", chinese_answer: "刺激", chinese_romanization: "cìjī" },
        { option: "B", answer: "relax", chinese_answer: "放松", chinese_romanization: "fàngsōng" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'grate' means to irritate or annoy someone, used figuratively here." +
        "<br><br>" +
        "(B) 'relax' means to make or become less tense or anxious." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
    chinese_explanation: "(A) '刺激' 意味着使某人烦躁或恼火，这里是比喻用法。" +
        "<br><br>" +
        "(B) '放松' 意味着变得不那么紧张或焦虑。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。"
    },
    {
        id: 4,
        question: "The board of directors decided to __________ the proposal, citing numerous flaws in the plan.",
        chinese_question: "董事会决定 __________ 该提案，指出计划中存在许多缺陷。",
        answers: [
                { option: "A", answer: "repudiate", chinese_answer: "否定", chinese_romanization: "fǒudìng" },
                { option: "B", answer: "endorse", chinese_answer: "认可", chinese_romanization: "rènkě" },
                { option: "C", answer: "approve", chinese_answer: "批准", chinese_romanization: "pīzhǔn" },
                { option: "D", answer: "implement", chinese_answer: "实施", chinese_romanization: "shíshī" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'repudiate' figuratively means to reject or refuse to accept." +
                "<br><br>" +
                "(B) 'endorse' means to declare one's public approval or support of." +
                "<br><br>" +
                "(C) 'approve' means to officially agree to or accept as satisfactory." +
                "<br><br>" +
                "(D) 'implement' means to put (a decision, plan, agreement, etc.) into effect.",
        chinese_explanation: "(A) '否定' 在此语境下比喻拒绝或拒绝接受。" +
                "<br><br>" +
                "(B) '认可' 意味着公开表示支持或认可。" +
                "<br><br>" +
                "(C) '批准' 意味着正式同意或接受为满意。" +
                "<br><br>" +
                "(D) '实施' 意味着将（决定、计划、协议等）付诸实施。"
    },
    {
        id: 5,
        question: "The team was __________ to the innovative marketing strategies, which significantly boosted their sales.",
        chinese_question: "团队对创新的营销策略 __________，这显著提高了他们的销售额。",
        answers: [
            { option: "A", answer: "resistant", chinese_answer: "抵制", chinese_romanization: "dǐzhì" },
            { option: "B", answer: "receptive", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
            { option: "C", answer: "unaware", chinese_answer: "不知道", chinese_romanization: "bù zhīdào" },
            { option: "D", answer: "passive", chinese_answer: "被动", chinese_romanization: "bèidòng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'receptive' means open and responsive to ideas, impressions, or suggestions." +
            "<br><br>" +
            "(A) 'resistant' means opposed to or defending against something." +
            "<br><br>" +
            "(C) 'unaware' means having no knowledge of a situation or fact." +
            "<br><br>" +
            "(D) 'passive' means accepting or allowing what happens without active response.",
        chinese_explanation: "(B) '接受' 意味着对想法、印象或建议开放和响应。" +
            "<br><br>" +
            "(A) '抵制' 意味着反对或防御某事。" +
            "<br><br>" +
            "(C) '不知道' 意味着没有知识或情况的了解。" +
            "<br><br>" +
            "(D) '被动' 意味着接受或允许发生的事情而没有积极响应。"
    },
    {
        id: 6,
        question: "The researchers __________ public opinion on climate change to inform their study.",
        chinese_question: "研究人员 __________ 了公众对气候变化的看法，以便为他们的研究提供信息。",
        answers: [
                { option: "A", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "B", answer: "surveyed", chinese_answer: "调查", chinese_romanization: "diàochá" },
                { option: "C", answer: "dismissed", chinese_answer: "驳回", chinese_romanization: "bóhuí" },
                { option: "D", answer: "confused", chinese_answer: "迷惑", chinese_romanization: "míhuò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'surveyed' means to examine and record the opinions or experiences of individuals." +
                "<br><br>" +
                "(A) 'ignored' means to refuse to take notice of or acknowledge; disregard intentionally." +
                "<br><br>" +
                "(C) 'dismissed' means to decide that something or someone is not important and not worth considering." +
                "<br><br>" +
                "(D) 'confused' means unable to think clearly; bewildered.",
        chinese_explanation: "(B) '调查' 意味着检查和记录个人的意见或经历。" +
                "<br><br>" +
                "(A) '忽视' 意味着拒绝注意或承认；有意无视。" +
                "<br><br>" +
                "(C) '驳回' 意味着决定某事或某人不重要且不值得考虑。" +
                "<br><br>" +
                "(D) '迷惑' 意味着无法清楚地思考；困惑的。"
    },
    {
        id: 7,
        question: "After receiving the good news, she felt like she could __________ through the rest of the day.",
        chinese_question: "在收到好消息后，她觉得自己可以 __________ 度过余下的一天。",
        answers: [
                { option: "A", answer: "caper", chinese_answer: "欢跃", chinese_romanization: "huānyuè" },
                { option: "B", answer: "dread", chinese_answer: "恐惧", chinese_romanization: "kǒngjù" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "resent", chinese_answer: "怨恨", chinese_romanization: "yuànhèn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'caper' means to skip or dance about in a lively or playful way." +
                "<br><br>" +
                "(B) 'dread' means to anticipate with great apprehension or fear." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'resent' means to feel bitterness or indignation at a circumstance, action, or person.",
        chinese_explanation: "(A) '欢跃' 意味着以活泼或嬉戏的方式跳跃或舞动。" +
                "<br><br>" +
                "(B) '恐惧' 意味着带着极大的担忧或恐惧去期待。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '怨恨' 意味着对情况、行为或人感到苦涩或愤怒。"
    },
    {
        id: 8,
        question: "She tried to __________ humour into her presentation to keep the audience engaged.",
        chinese_question: "她试图在她的演讲中 __________ 幽默感，以保持观众的兴趣。",
        answers: [
                { option: "A", answer: "interpolate", chinese_answer: "插入", chinese_romanization: "chārù" },
                { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "delete", chinese_answer: "删除", chinese_romanization: "shānchú" },
                { option: "D", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'interpolate' means to insert something, often words, into a text or conversation, used figuratively here." +
                "<br><br>" +
                "(B) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(C) 'delete' means to remove something." +
                "<br><br>" +
                "(D) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
        chinese_explanation: "(A) '插入' 意味着将某物插入文本或对话中，这里是比喻用法。" +
                "<br><br>" +
                "(B) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(C) '删除' 意味着去除某物。" +
                "<br><br>" +
                "(D) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。"
    },
    {
        id: 9,
        question: "He began to __________ himself for missing the opportunity to apply for the scholarship.",
        chinese_question: "他开始 __________ 自己错过申请奖学金的机会。",
        answers: [
                { option: "A", answer: "berate", chinese_answer: "责备", chinese_romanization: "zébèi" },
                { option: "B", answer: "congratulate", chinese_answer: "祝贺", chinese_romanization: "zhùhè" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "forgive", chinese_answer: "原谅", chinese_romanization: "yuánliàng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'berate' means to scold or criticize someone angrily." +
                "<br><br>" +
                "(B) 'congratulate' means to give someone good wishes when something special or pleasant has happened to them." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'forgive' means to stop feeling angry or resentful toward someone for an offense, flaw, or mistake.",
        chinese_explanation: "(A) '责备' 意味着愤怒地责备或批评某人。" +
                "<br><br>" +
                "(B) '祝贺' 意味着当某人发生特别或愉快的事情时，给他们送上祝福。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '原谅' 意味着停止对某人因冒犯、缺陷或错误而感到生气或怨恨。"
    },
    {
        id: 10,
    question: "The organization aims to __________ poverty through education and job training programs.",
    chinese_question: "该组织旨在通过教育和职业培训项目 __________ 贫困。",
    answers: [
        { option: "A", answer: "foster", chinese_answer: "促进", chinese_romanization: "cùjìn" },
        { option: "B", answer: "extirpate", chinese_answer: "根除", chinese_romanization: "gēnchú" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "increase", chinese_answer: "增加", chinese_romanization: "zēngjiā" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'extirpate' used figuratively means to completely remove or destroy something undesirable." +
        "<br><br>" +
        "(A) 'foster' means to encourage the development of something, especially something desirable." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'increase' means to make or become greater in size, amount, or degree.",
    chinese_explanation: "(B) '根除' 在比喻意义上指彻底消除或摧毁某些不良事物。" +
        "<br><br>" +
        "(A) '促进' 意味着鼓励某物的发展，尤其是某些令人满意的事物的发展。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '增加' 意味着使大小、数量或程度变得更大。"
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
