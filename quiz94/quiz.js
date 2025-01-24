// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "To discredit the whistleblower, the organization attempted to __________ him with fabricated stories.",
    chinese_question: "为了抹黑告密者，该组织试图通过捏造的故事 __________ 他。",
    answers: [
        { option: "A", answer: "defame", chinese_answer: "诽谤", chinese_romanization: "fěibàng" },
        { option: "B", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'defame' means to damage the good reputation of someone; to slander or libel, used figuratively here." +
        "<br><br>" +
        "(B) 'praise' means to express warm approval or admiration." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'support' means to bear all or part of the weight of something; to hold up.",
    chinese_explanation: "(A) '诽谤' 意味着损害某人的好名声；诽谤或中伤，这里是比喻用法。" +
        "<br><br>" +
        "(B) '赞扬' 意味着表达热烈的赞同或钦佩。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '支持' 意味着承担某物的全部或部分重量；支撑。"
    },
    {
        id: 2,
    question: "The chef likes to __________ various spices to create complex flavors in his dishes.",
    chinese_question: "这位厨师喜欢 __________ 各种香料，以在他的菜肴中创造复杂的风味。",
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
        id: 3,
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
        id: 4,
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
        id: 5,
        question: "She felt it was unfair for her manager to __________ her for a mistake that was not her fault.",
        chinese_question: "她觉得经理因为一个不是她的错的错误而 __________ 她是不公平的。",
        answers: [
                { option: "A", answer: "castigate", chinese_answer: "严厉批评", chinese_romanization: "yánlì pīpíng" },
                { option: "B", answer: "forgive", chinese_answer: "原谅", chinese_romanization: "yuánliàng" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'castigate' means to reprimand someone severely." +
                "<br><br>" +
                "(B) 'forgive' means to stop feeling angry or resentful toward someone for an offense, flaw, or mistake." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'praise' means to express warm approval or admiration.",
        chinese_explanation: "(A) '严厉批评' 意味着严厉地斥责某人。" +
                "<br><br>" +
                "(B) '原谅' 意味着停止对某人因冒犯、缺陷或错误而感到生气或怨恨。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '赞扬' 意味着表达热烈的赞同或钦佩。"
    },
    {
        id: 6,
        question: "She __________ the loss of her carefree childhood in her memoirs.",
        chinese_question: "她在回忆录中 __________ 她无忧无虑的童年的失去。",
        answers: [
                { option: "A", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "B", answer: "celebrated", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
                { option: "C", answer: "bemoaned", chinese_answer: "哀叹", chinese_romanization: "āitàn" },
                { option: "D", answer: "welcomed", chinese_answer: "欢迎", chinese_romanization: "huānyíng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'bemoaned' means to express sorrow or regret over something." +
                "<br><br>" +
                "(A) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(B) 'celebrated' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
                "<br><br>" +
                "(D) 'welcomed' means to greet someone in a friendly and polite way.",
        chinese_explanation: "(C) '哀叹' 意味着对某事表示悲伤或遗憾。" +
                "<br><br>" +
                "(A) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(B) '庆祝' 意味着通过社交聚会或愉快的活动来纪念一个重要或快乐的日子或事件。" +
                "<br><br>" +
                "(D) '欢迎' 意味着以友好和礼貌的方式迎接某人。"
    },
    {
        id: 7,
    question: "His charm and persuasive skills __________ many into believing his lies.",
    chinese_question: "他的魅力和说服技巧让很多人 __________ ，相信了他的谎言。",
    answers: [
        { option: "A", answer: "duped", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" },
        { option: "B", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "praised", chinese_answer: "赞扬", chinese_romanization: "zànyáng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'duped' means to be deceived or tricked, used figuratively here." +
        "<br><br>" +
        "(B) 'supported' means to give assistance to." +
        "<br><br>" +
        "(C) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'praised' means to express warm approval or admiration.",
    chinese_explanation: "(A) '欺骗' 意味着被欺骗或捉弄，这里是比喻用法。" +
        "<br><br>" +
        "(B) '支持' 意味着给予帮助。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '赞扬' 意味着表达热烈的赞同或钦佩。"
    },
    {
        id: 8,
        question: "The patient's condition continued to __________, causing concern among the doctors.",
        chinese_question: "病人的病情继续 __________，引起医生们的担忧。",
        answers: [
                { option: "A", answer: "improve", chinese_answer: "改善", chinese_romanization: "gǎishàn" },
                { option: "B", answer: "oscillate", chinese_answer: "波动", chinese_romanization: "bōdòng" },
                { option: "C", answer: "stabilize", chinese_answer: "稳定", chinese_romanization: "wěndìng" },
                { option: "D", answer: "cure", chinese_answer: "治愈", chinese_romanization: "zhìyù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'oscillate' figuratively means to swing back and forth between different states or conditions." +
                "<br><br>" +
                "(A) 'improve' means to get better." +
                "<br><br>" +
                "(C) 'stabilize' means to make or become steady." +
                "<br><br>" +
                "(D) 'cure' means to restore health.",
        chinese_explanation: "(B) '波动' 一词在比喻上意味着在不同状态或条件之间来回波动。" +
                "<br><br>" +
                "(A) '改善' 意味着变得更好。" +
                "<br><br>" +
                "(C) '稳定' 意味着使稳定。" +
                "<br><br>" +
                "(D) '治愈' 意味着恢复健康。"
    },
    {
        id: 9,
        question: "The beautiful landscape was __________ by the construction of large industrial buildings.",
        chinese_question: "美丽的风景被大型工业建筑的建设 __________ 了。",
        answers: [
                { option: "A", answer: "preserved", chinese_answer: "保持", chinese_romanization: "bǎochí" },
                { option: "B", answer: "sullied", chinese_answer: "玷污", chinese_romanization: "diànwū" },
                { option: "C", answer: "protected", chinese_answer: "保护", chinese_romanization: "bǎohù" },
                { option: "D", answer: "enhanced", chinese_answer: "提升", chinese_romanization: "tíshēng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sullied' means to damage the purity or integrity of; defile." +
                "<br><br>" +
                "(A) 'preserved' means to maintain something in its original or existing state." +
                "<br><br>" +
                "(C) 'protected' means to keep safe from harm or injury." +
                "<br><br>" +
                "(D) 'enhanced' means to intensify or increase in quality, value, or extent.",
        chinese_explanation: "(B) '玷污' 意味着损害纯洁性或完整性；玷污。" +
                "<br><br>" +
                "(A) '保持' 意味着保持某物的原始或现有状态。" +
                "<br><br>" +
                "(C) '保护' 意味着使免受伤害或伤害。" +
                "<br><br>" +
                "(D) '提升' 意味着加强或增加质量、价值或程度。"
    },
    {
        id: 10,
        question: "She felt __________ in her small town, dreaming of adventures far away.",
        chinese_question: "她感到被 __________ 在她的小镇里，梦想着远方的冒险。",
        answers: [
                { option: "A", answer: "immured", chinese_answer: "囚禁", chinese_romanization: "qiújìn" },
                { option: "B", answer: "free", chinese_answer: "自由", chinese_romanization: "zìyóu" },
                { option: "C", answer: "celebrated", chinese_answer: "受人赞赏", chinese_romanization: "shòu rén zànshǎng" },
                { option: "D", answer: "assisted", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'immured' means to be enclosed or confined, often against one's will." +
                "<br><br>" +
                "(B) 'free' means not under the control or in the power of another." +
                "<br><br>" +
                "(C) 'celebrated' means greatly admired; renowned." +
                "<br><br>" +
                "(D) 'assisted' means to help someone.",
        chinese_explanation: "(A) '囚禁' 意味着被关押或禁闭，通常是违背个人意愿的。" +
                "<br><br>" +
                "(B) '自由' 意味着不受他人控制或掌控。" +
                "<br><br>" +
                "(C) '受人赞赏' 意味着被高度钦佩；著名。" +
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
