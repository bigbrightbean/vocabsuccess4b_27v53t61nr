// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The coach's __________ during practice demotivated the players.",
    chinese_question: "教练在训练中的 __________ 让队员们失去了动力。",
    answers: [
        { option: "A", answer: "hectoring", chinese_answer: "威吓", chinese_romanization: "wēihè" },
        { option: "B", answer: "encouraging", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
        { option: "C", answer: "ignoring", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "assisting", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'hectoring' means to talk to someone in a bullying way, used figuratively here." + 
        "<br><br>" + 
        "(B) 'encouraging' means to give support, confidence, or hope to someone." + 
        "<br><br>" + 
        "(C) 'ignoring' means to refuse to take notice of or acknowledge." + 
        "<br><br>" + 
        "(D) 'assisting' means to help someone.",
    chinese_explanation: "(A) '威吓' 意味着以一种欺凌的方式对某人说话，这里是比喻用法。" + 
        "<br><br>" + 
        "(B) '鼓励' 意味着给予支持、信心或希望。" + 
        "<br><br>" + 
        "(C) '忽视' 意味着拒绝注意或承认。" + 
        "<br><br>" + 
        "(D) '帮助' 意味着帮助某人。"
    },
    {
        id: 2,
    question: "The __________ of inflation has increased significantly over the past year.",
    chinese_question: "过去一年通货膨胀的 __________ 显著增加。",
    answers: [
        { option: "A", answer: "decrease", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
        { option: "B", answer: "rate", chinese_answer: "速度", chinese_romanization: "sùdù" },
        { option: "C", answer: "balance", chinese_answer: "平衡", chinese_romanization: "pínghéng" },
        { option: "D", answer: "mistake", chinese_answer: "错误", chinese_romanization: "cuòwù" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'rate' means a measure, quantity, or frequency, typically one measured against another quantity or measure." + 
        "<br><br>" + 
        "(A) 'decrease' means to become smaller or fewer in size, amount, intensity, or degree." + 
        "<br><br>" + 
        "(C) 'balance' means an even distribution of weight enabling someone or something to remain upright and steady." + 
        "<br><br>" + 
        "(D) 'mistake' means an action or judgment that is misguided or wrong.",
    chinese_explanation: "(B) '速度' 意味着一种度量、数量或频率，通常与另一数量或度量相比较。" + 
        "<br><br>" + 
        "(A) '减少' 意味着在大小、数量、强度或程度上变小或变少。" + 
        "<br><br>" + 
        "(C) '平衡' 意味着重量的均匀分布，使某人或某物保持直立和稳定。" + 
        "<br><br>" + 
        "(D) '错误' 意味着误导或错误的行为或判断。"
    },
    {
        id: 3,
    question: "His __________ was clear when he accidentally spilled his drink on his boss.",
    chinese_question: "当他不小心把饮料洒在老板身上时，他的 __________ 是显而易见的。",
    answers: [
        { option: "A", answer: "confidence", chinese_answer: "自信", chinese_romanization: "zìxìn" },
        { option: "B", answer: "discomfiture", chinese_answer: "尴尬", chinese_romanization: "gāngà" },
        { option: "C", answer: "curiosity", chinese_answer: "好奇", chinese_romanization: "hàoqí" },
        { option: "D", answer: "joy", chinese_answer: "快乐", chinese_romanization: "kuàilè" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'discomfiture' figuratively means feeling of unease or embarrassment due to an embarrassing or awkward situation." + 
        "<br><br>" + 
        "(A) 'confidence' means the feeling or belief that one can rely on someone or something." + 
        "<br><br>" + 
        "(C) 'curiosity' means a strong desire to know or learn something." + 
        "<br><br>" + 
        "(D) 'joy' means a feeling of great pleasure and happiness.",
    chinese_explanation: "(B) '尴尬' 在此语境下意指因尴尬或不合适的情况而感到不安或尴尬的感觉。" + 
        "<br><br>" + 
        "(A) '自信' 意味着可以依赖某人或某事的感觉或信念。" + 
        "<br><br>" + 
        "(C) '好奇' 意味着强烈的求知欲。" + 
        "<br><br>" + 
        "(D) '快乐' 意味着极大的愉悦和幸福感。"
    },
    {
        id: 4,
    question: "Navigating the bureaucratic system felt like trying to understand an incomprehensible __________.",
    chinese_question: "在官僚体制中导航感觉就像试图理解一个难以理解的 __________。",
    answers: [
        { option: "A", answer: "puzzle", chinese_answer: "谜题", chinese_romanization: "mítí" },
        { option: "B", answer: "contraption", chinese_answer: "奇妙装置", chinese_romanization: "qímiào zhuāngzhì" },
        { option: "C", answer: "labyrinth", chinese_answer: "迷宫", chinese_romanization: "mígōng" },
        { option: "D", answer: "riddle", chinese_answer: "谜语", chinese_romanization: "míyǔ" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'contraption' means a complex or baffling situation." + 
        "<br><br>" + 
        "(A) 'puzzle' means a game, toy, or problem designed to test ingenuity." + 
        "<br><br>" + 
        "(C) 'labyrinth' means a complicated irregular network of passages or paths." + 
        "<br><br>" + 
        "(D) 'riddle' means a question or statement intentionally phrased to require ingenuity in ascertaining its answer.",
    chinese_explanation: "(B) '奇妙装置'一词意味着复杂或令人困惑的情况。" + 
        "<br><br>" + 
        "(A) '谜题' 意味着设计用来测试创造力的游戏、玩具或问题。" + 
        "<br><br>" + 
        "(C) '迷宫' 意味着复杂不规则的通道或路径网络。" + 
        "<br><br>" + 
        "(D) '谜语' 意味着故意措辞的问题或陈述，要求用智慧来确定其答案。"
    },
    {
        id: 5,
    question: "Her success __________ in completing the project on time was remarkable.",
    chinese_question: "她按时完成项目的成功 __________ 非常显著。",
    answers: [
        { option: "A", answer: "rate", chinese_answer: "速度", chinese_romanization: "sùdù" },
        { option: "B", answer: "failure", chinese_answer: "失败", chinese_romanization: "shībài" },
        { option: "C", answer: "mistake", chinese_answer: "错误", chinese_romanization: "cuòwù" },
        { option: "D", answer: "delay", chinese_answer: "延迟", chinese_romanization: "yánchí" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'rate' means a measure, quantity, or frequency, typically one measured against another quantity or measure." + 
        "<br><br>" + 
        "(B) 'failure' means lack of success." + 
        "<br><br>" + 
        "(C) 'mistake' means an action or judgment that is misguided or wrong." + 
        "<br><br>" + 
        "(D) 'delay' means a period of time by which something is late or postponed.",
    chinese_explanation: "(A) '速度' 意味着一种度量、数量或频率，通常与另一数量或度量相比较。" + 
        "<br><br>" + 
        "(B) '失败' 意味着缺乏成功。" + 
        "<br><br>" + 
        "(C) '错误' 意味着误导或错误的行为或判断。" + 
        "<br><br>" + 
        "(D) '延迟' 意味着某事迟到或推迟的一段时间。"
    },
    {
        id: 6,
        question: "The new policy of __________ required all departments to reduce their budgets by 10%.",
        chinese_question: "新的 __________ 政策要求所有部门减少10%的预算。",
        answers: [
                { option: "A", answer: "generosity", chinese_answer: "慷慨", chinese_romanization: "kāngkǎi" },
                { option: "B", answer: "austerity", chinese_answer: "紧缩", chinese_romanization: "jǐnsuō" },
                { option: "C", answer: "luxury", chinese_answer: "豪华", chinese_romanization: "háohuá" },
                { option: "D", answer: "wastefulness", chinese_answer: "浪费", chinese_romanization: "làngfèi" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'austerity' means conditions characterized by severity, sternness, or asceticism." +
            "<br><br>" +
            "(A) 'generosity' means the quality of being kind and generous." +
            "<br><br>" +
            "(C) 'luxury' means the state of great comfort and extravagant living." +
            "<br><br>" +
            "(D) 'wastefulness' means the state of being wasteful.",
        chinese_explanation: "(B) '紧缩'一词意味着以严厉、严格或禁欲主义为特征的条件。" +
            "<br><br>" +
            "(A) '慷慨' 意味着善良和慷慨的品质。" +
            "<br><br>" +
            "(C) '豪华' 意味着极度舒适和奢华的生活状态。" +
            "<br><br>" +
            "(D) '浪费' 意味着浪费的状态。"
    },
    {
        id: 7,
        question: "His calm reaction to the emergency was an __________, as he usually panics in such situations.",
        chinese_question: "他对紧急情况的冷静反应是一种 __________，因为他通常在这种情况下会惊慌失措。",
        answers: [
                { option: "A", answer: "norm", chinese_answer: "常态", chinese_romanization: "chángtài" },
                { option: "B", answer: "aberration", chinese_answer: "反常", chinese_romanization: "fǎncháng" },
                { option: "C", answer: "habit", chinese_answer: "习惯", chinese_romanization: "xíguàn" },
                { option: "D", answer: "routine", chinese_answer: "常规", chinese_romanization: "chángguī" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'aberration' means a departure from what is normal, usual, or expected, typically one that is unwelcome." +
            "<br><br>" +
            "(A) 'norm' means something that is usual, typical, or standard." +
            "<br><br>" +
            "(C) 'habit' means a settled or regular tendency or practice, especially one that is hard to give up." +
            "<br><br>" +
            "(D) 'routine' means a sequence of actions regularly followed; a fixed program.",
        chinese_explanation: "(B) '反常' 意味着偏离正常、通常或预期的情况，通常是不受欢迎的。" +
            "<br><br>" +
            "(A) '常态' 意味着通常、典型或标准的东西。" +
            "<br><br>" +
            "(C) '习惯' 意味着一种固定或定期的倾向或做法，尤其是难以放弃的做法。" +
            "<br><br>" +
            "(D) '常规' 意味着定期遵循的一系列行动；一个固定的程序。"
    },
    {
        id: 8,
    question: "Labeling the outdated technology as 'state-of-the-art' is clearly a __________.",
    chinese_question: "将过时的技术称为“最先进”显然是一个 __________。",
    answers: [
        { option: "A", answer: "misnomer", chinese_answer: "用词不当", chinese_romanization: "yòngcí bùdàng" },
        { option: "B", answer: "compliment", chinese_answer: "赞美", chinese_romanization: "zànměi" },
        { option: "C", answer: "understatement", chinese_answer: "轻描淡写", chinese_romanization: "qīngmiáo-dànxiě" },
        { option: "D", answer: "revelation", chinese_answer: "揭示", chinese_romanization: "jiēshì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'misnomer' figuratively means a wrong or inaccurate use of a term." + 
        "<br><br>" + 
        "(B) 'compliment' means a polite expression of praise or admiration." + 
        "<br><br>" + 
        "(C) 'understatement' means the presentation of something as being smaller or less important than it actually is." + 
        "<br><br>" + 
        "(D) 'revelation' means a surprising and previously unknown fact.",
    chinese_explanation: "(A) '用词不当' 在此语境下意指一个错误或不准确的术语使用。" + 
        "<br><br>" + 
        "(B) '赞美' 意味着一种礼貌的赞扬或钦佩的表达。" + 
        "<br><br>" + 
        "(C) '轻描淡写' 意味着将某事物描述得比实际小或不重要。" + 
        "<br><br>" + 
        "(D) '揭示' 意味着一个惊人的和以前未知的事实。"
    },
    {
        id: 9,
    question: "The __________ of the book was so profound that it changed how I view the world.",
    chinese_question: "这本书的 __________ 是如此深远，以至于它改变了我看待世界的方式。",
    answers: [
        { option: "A", answer: "irrelevance", chinese_answer: "无关", chinese_romanization: "wúguān" },
        { option: "B", answer: "boredom", chinese_answer: "无聊", chinese_romanization: "wúliáo" },
        { option: "C", answer: "impact", chinese_answer: "影响", chinese_romanization: "yǐngxiǎng" },
        { option: "D", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'impact' means the strong effect or influence that something has on a situation or person." + 
        "<br><br>" + 
        "(A) 'irrelevance' means the quality or state of being unrelated to the matter at hand." + 
        "<br><br>" + 
        "(B) 'boredom' means the state of feeling bored." + 
        "<br><br>" + 
        "(D) 'neglect' means the state of being uncared for.",
    chinese_explanation: "(C) '影响' 意味着某事对某种情况或某人的强烈影响。" + 
        "<br><br>" + 
        "(A) '无关' 意味着与眼前的事情无关的性质或状态。" + 
        "<br><br>" + 
        "(B) '无聊' 意味着感到无聊的状态。" + 
        "<br><br>" + 
        "(D) '忽视' 意味着无人照管的状态。"
    },
    {
        id: 10,
    question: "Her dedication to her work was __________ of her commitment to excellence.",
    chinese_question: "她对工作的奉献是她追求卓越的 __________。",
    answers: [
        { option: "A", answer: "evidence", chinese_answer: "证据", chinese_romanization: "zhèngjù" },
        { option: "B", answer: "proof", chinese_answer: "证明", chinese_romanization: "zhèngmíng" },
        { option: "C", answer: "speculation", chinese_answer: "猜测", chinese_romanization: "cāicè" },
        { option: "D", answer: "guess", chinese_answer: "猜测", chinese_romanization: "cāicè" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'proof' means something that demonstrates the truth or existence of something." + 
        "<br><br>" + 
        "(A) 'evidence' means the available body of facts or information indicating whether a belief or proposition is true or valid." + 
        "<br><br>" + 
        "(C) 'speculation' means the forming of a theory or conjecture without firm evidence." + 
        "<br><br>" + 
        "(D) 'guess' means an estimate or conjecture without sufficient information.",
    chinese_explanation: "(B) “证明” 意味着证明某事真实性或存在的事物。" + 
        "<br><br>" + 
        "(A) '证据' 意味着表明某个信仰或命题是否真实或有效的现有事实或信息。" + 
        "<br><br>" + 
        "(C) '猜测' 意味着在没有确凿证据的情况下形成理论或推测。" + 
        "<br><br>" + 
        "(D) '猜测' 意味着在信息不足的情况下进行估计或推测。"
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
