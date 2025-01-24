// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The artist's work __________ a deep understanding of human emotions.",
    chinese_question: "艺术家的作品 __________ 了对人类情感的深刻理解。",
    answers: [
        { option: "A", answer: "evinced", chinese_answer: "表现出", chinese_romanization: "biǎoxiàn chū" },
        { option: "B", answer: "obscured", chinese_answer: "遮掩", chinese_romanization: "zhēyǎn" },
        { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "diminished", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'evinced' means to show or express clearly, used figuratively here." +
        "<br><br>" +
        "(B) 'obscured' means to keep from being seen; conceal." +
        "<br><br>" +
        "(C) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'diminished' means to make or become less.",
    chinese_explanation: "(A) '表现出' 意味着清楚地显示或表达，这里是比喻用法。" +
        "<br><br>" +
        "(B) '遮掩' 意味着防止被看到；隐藏。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '减少' 意味着使或变得更少。"
    },
    {
        id: 2,
    question: "The author needed to __________ deeply before crafting the next chapter of his novel.",
    chinese_question: "作者需要深入 __________ 才能写出他小说的下一章。",
    answers: [
        { option: "A", answer: "cogitate", chinese_answer: "深思", chinese_romanization: "shēnsī" },
        { option: "B", answer: "rush", chinese_answer: "匆忙", chinese_romanization: "cōngmáng" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'cogitate' means to think deeply about something." +
        "<br><br>" +
        "(B) 'rush' means to move with urgent haste." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'simplify' means to make something simpler or easier to do or understand.",
    chinese_explanation: "(A) '深思' 意味着对某事进行深入思考。" +
        "<br><br>" +
        "(B) '匆忙' 意味着紧急快速地移动。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '简化' 意味着使某事更简单或更容易做或理解。"
    },
    {
        id: 3,
    question: "The technical difficulties during the presentation __________ the team and disrupted their flow.",
    chinese_question: "演示期间的技术故障让团队 __________ ，打断了他们的流程。",
    answers: [
        { option: "A", answer: "discombobulated", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" },
        { option: "B", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "improved", chinese_answer: "改善", chinese_romanization: "gǎishàn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'discombobulated' means to confuse or disconcert; to upset, used figuratively here." +
        "<br><br>" +
        "(B) 'supported' means to bear all or part of the weight of something; to hold up." +
        "<br><br>" +
        "(C) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'improved' means to make something better.",
    chinese_explanation: "(A) '使困惑' 意味着使困惑或不安；使心烦意乱，这里是比喻用法。" +
        "<br><br>" +
        "(B) '支持' 意味着承担某物的全部或部分重量；支撑。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '改善' 意味着使某物变得更好。"
    },
    {
        id: 4,
    question: "He learned to __________ his personal feelings from his professional decisions to maintain objectivity.",
    chinese_question: "他学会了将个人情感与职业决定 __________ ，以保持客观性。",
    answers: [
        { option: "A", answer: "integrate", chinese_answer: "整合", chinese_romanization: "zhěnghé" },
        { option: "B", answer: "dissociate", chinese_answer: "脱离", chinese_romanization: "tuōlí" },
        { option: "C", answer: "merge", chinese_answer: "合并", chinese_romanization: "hébìng" },
        { option: "D", answer: "connect", chinese_answer: "连接", chinese_romanization: "liánjiē" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'dissociate' used figuratively means to separate oneself from a group or activity." +
        "<br><br>" +
        "(A) 'integrate' means to combine one thing with another so that they become a whole." +
        "<br><br>" +
        "(C) 'merge' means to combine or cause to combine to form a single entity." +
        "<br><br>" +
        "(D) 'connect' means to join or link together.",
    chinese_explanation: "(B) '脱离' 在比喻意义上指将自己与某个团体或活动分离。" +
        "<br><br>" +
        "(A) '整合' 意味着将一件事与另一件事结合起来，使其成为一个整体。" +
        "<br><br>" +
        "(C) '合并' 意味着结合或使结合形成一个实体。" +
        "<br><br>" +
        "(D) '连接' 意味着连接在一起。"
    },
    {
        id: 5,
    question: "To write the report, he had to __________ out the most relevant data from the extensive research.",
    chinese_question: "为了写报告，他必须从大量研究中 __________ 出最相关的数据。",
    answers: [
        { option: "A", answer: "ferret", chinese_answer: "搜寻", chinese_romanization: "sōuxún" },
        { option: "B", answer: "delete", chinese_answer: "删除", chinese_romanization: "shānchú" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "expand", chinese_answer: "扩展", chinese_romanization: "kuòzhǎn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'ferret' means to search tenaciously for and find something, used figuratively here." +
        "<br><br>" +
        "(B) 'delete' means to remove or obliterate." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'expand' means to become or make larger or more extensive.",
    chinese_explanation: "(A) '搜寻' 意味着坚韧地搜索并找到某物，这里是比喻用法。" +
        "<br><br>" +
        "(B) '删除' 意味着移除或抹去。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '扩展' 意味着变得更大或更广泛。"
    },
    {
        id: 6,
        question: "The city council voted to __________ the construction of the new park.",
        chinese_question: "市议会投票 __________ 新公园的建设。",
        answers: [
                { option: "A", answer: "deny", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
                { option: "B", answer: "delay", chinese_answer: "推迟", chinese_romanization: "tuīchí" },
                { option: "C", answer: "permit", chinese_answer: "允许", chinese_romanization: "yǔnxǔ" },
                { option: "D", answer: "halt", chinese_answer: "停止", chinese_romanization: "tíngzhǐ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'permit' means to allow someone to do something." +
                "<br><br>" +
                "(A) 'deny' means to refuse to give or grant something to someone." +
                "<br><br>" +
                "(B) 'delay' means to make something late or slow." +
                "<br><br>" +
                "(D) 'halt' means to bring or come to an abrupt stop.",
        chinese_explanation: "(C) '允许' 意味着允许某人做某事。" +
                "<br><br>" +
                "(A) '拒绝' 意味着拒绝给予或授予某人某事。" +
                "<br><br>" +
                "(B) '推迟' 意味着使某事变晚或变慢。" +
                "<br><br>" +
                "(D) '停止' 意味着突然停止或使其停止。"
    },
    {
        id: 7,
    question: "The ominous warning from the fortune teller seemed to __________ disaster.",
    chinese_question: "占卜师的不祥警告似乎 __________ 灾难。",
    answers: [
        { option: "A", answer: "forebode", chinese_answer: "预示", chinese_romanization: "yùshì" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
        { option: "D", answer: "enjoy", chinese_answer: "享受", chinese_romanization: "xiǎngshòu" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'forebode' means to act as a warning or indication of a future event, used figuratively here." +
        "<br><br>" +
        "(B) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
        "<br><br>" +
        "(D) 'enjoy' means to take delight or pleasure in something.",
    chinese_explanation: "(A) '预示' 意味着作为未来事件的警告或指示，这里是比喻用法。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。" +
        "<br><br>" +
        "(D) '享受' 意味着对某事感到高兴或愉快。"
    },
    {
        id: 8,
    question: "Every holiday, the family would gather and __________ on a feast of traditional dishes.",
    chinese_question: "每逢节日，家人们都会聚在一起 __________ 一顿传统菜肴的盛宴。",
    answers: [
        { option: "A", answer: "snack", chinese_answer: "吃零食", chinese_romanization: "chī língshí" },
        { option: "B", answer: "gormandize", chinese_answer: "狼吞虎咽", chinese_romanization: "lángtūnhǔyàn" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "prepare", chinese_answer: "准备", chinese_romanization: "zhǔnbèi" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'gormandize' means to eat greedily or ravenously." +
        "<br><br>" +
        "(A) 'snack' means to eat small amounts of food between meals." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'prepare' means to make something ready for use or consideration.",
    chinese_explanation: "(B) '狼吞虎咽' 意味着贪婪或狼吞虎咽地吃。" +
        "<br><br>" +
        "(A) '吃零食' 意味着在正餐之间吃少量的食物。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '准备' 意味着使某物准备好供使用或考虑。"
    },
    {
        id: 9,
    question: "Even though the majority was in favor, she felt compelled to __________ on ethical grounds.",
    chinese_question: "尽管大多数人都赞成，但她觉得有必要出于道德原因 __________。",
    answers: [
        { option: "A", answer: "agree", chinese_answer: "同意", chinese_romanization: "tóngyì" },
        { option: "B", answer: "demur", chinese_answer: "反对", chinese_romanization: "fǎnduì" },
        { option: "C", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
        { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'demur' used figuratively means to raise doubts or objections." +
        "<br><br>" +
        "(A) 'agree' means to have the same opinion about something." +
        "<br><br>" +
        "(C) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
        "<br><br>" +
        "(D) 'support' means to bear all or part of the weight of something.",
    chinese_explanation: "(B) '反对' 在比喻意义上指提出疑问或反对。" +
        "<br><br>" +
        "(A) '同意' 意味着对某事持相同意见。" +
        "<br><br>" +
        "(C) '庆祝' 意味着通过社交聚会或愉快的活动来纪念重要或快乐的一天或事件。" +
        "<br><br>" +
        "(D) '支持' 意味着支撑某物的全部或部分重量。"
    },
    {
        id: 10,
    question: "The law __________ citizens to report any suspicious activities to the authorities.",
    chinese_question: "法律 __________ 公民向当局报告任何可疑活动。",
    answers: [
        { option: "A", answer: "enjoins", chinese_answer: "要求", chinese_romanization: "yāoqiú" },
        { option: "B", answer: "permits", chinese_answer: "允许", chinese_romanization: "yǔnxǔ" },
        { option: "C", answer: "ignores", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "hides", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'enjoins' means to instruct or urge someone to do something." +
        "<br><br>" +
        "(B) 'permits' means to allow." +
        "<br><br>" +
        "(C) 'ignores' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'hides' means to put or keep out of sight.",
    chinese_explanation: "(A) '要求' 意味着指示或敦促某人做某事。" +
        "<br><br>" +
        "(B) '允许' 意味着允许。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '隐藏' 意味着放置或保持在视线之外。"
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
