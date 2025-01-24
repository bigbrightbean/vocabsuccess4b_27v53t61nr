// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Despite repeated attempts, she successfully __________ all efforts to trap her into making a controversial statement.",
        chinese_question: "尽管有多次尝试，她成功地 __________ 了所有让她说出有争议言论的努力。",
        answers: [
            { option: "A", answer: "welcomed", chinese_answer: "欢迎", chinese_romanization: "huānyíng" },
            { option: "B", answer: "confronted", chinese_answer: "面对", chinese_romanization: "miànduì" },
            { option: "C", answer: "dodged", chinese_answer: "躲避", chinese_romanization: "duǒbì" },
            { option: "D", answer: "endorsed", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'dodged' means avoided something, often in a skillful or cunning manner." +
            "<br><br>" +
            "(A) 'welcomed' means greeted someone in a friendly and polite way." +
            "<br><br>" +
            "(B) 'confronted' means faced up to and dealt with a problem or difficult situation." +
            "<br><br>" +
            "(D) 'endorsed' means declared one's public approval or support of something.",
        chinese_explanation: "(C) '躲避' 意味着避开某事，通常是巧妙或狡猾的方式。" +
            "<br><br>" +
            "(A) '欢迎' 意味着以友好和礼貌的方式迎接某人。" +
            "<br><br>" +
            "(B) '面对' 意味着面对和处理问题或困难的情况。" +
            "<br><br>" +
            "(D) '支持' 意味着公开表明对某事的支持。"
    },
    {
        id: 2,
    question: "The tension in the room seemed to __________ an impending argument.",
    chinese_question: "房间里的紧张气氛似乎 __________ 一场即将到来的争论。",
    answers: [
        { option: "A", answer: "forebode", chinese_answer: "预示", chinese_romanization: "yùshì" },
        { option: "B", answer: "lighten", chinese_answer: "减轻", chinese_romanization: "jiǎnqīng" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'forebode' means to act as a warning or indication of a future event, used figuratively here." +
        "<br><br>" +
        "(B) 'lighten' means to make or become lighter or brighter." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'calm' means to make someone peaceful and free from disturbance.",
    chinese_explanation: "(A) '预示' 意味着作为未来事件的警告或指示，这里是比喻用法。" +
        "<br><br>" +
        "(B) '减轻' 意味着使某物变轻或变亮。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '平静' 意味着使某人平静和远离干扰。"
    },
    {
        id: 3,
    question: "Implementing these changes without consulting the stakeholders may __________ the agreement we had.",
    chinese_question: "在未咨询利益相关者的情况下实施这些变更可能会 __________ 我们达成的协议。",
    answers: [
        { option: "A", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "B", answer: "contravene", chinese_answer: "违反", chinese_romanization: "wéifǎn" },
        { option: "C", answer: "reinforce", chinese_answer: "加强", chinese_romanization: "jiāqiáng" },
        { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'contravene' means to violate or conflict with a rule or law." +
        "<br><br>" +
        "(A) 'support' means to uphold or defend." +
        "<br><br>" +
        "(C) 'reinforce' means to strengthen or support." +
        "<br><br>" +
        "(D) 'ignore' means to refuse to take notice of or acknowledge.",
    chinese_explanation: "(B) '违反' 意味着违反或与规则或法律相冲突。" +
        "<br><br>" +
        "(A) '支持' 意味着维护或捍卫。" +
        "<br><br>" +
        "(C) '加强' 意味着加强或支持。" +
        "<br><br>" +
        "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 4,
    question: "When the founder passed away, the organization struggled and eventually had to __________.",
    chinese_question: "当创始人去世后，组织陷入困境，最终不得不 __________ 。",
    answers: [
        { option: "A", answer: "disband", chinese_answer: "解散", chinese_romanization: "jiěsàn" },
        { option: "B", answer: "flourish", chinese_answer: "繁荣", chinese_romanization: "fánróng" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "expand", chinese_answer: "扩展", chinese_romanization: "kuòzhǎn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'disband' means to break up or cause to break up and stop functioning, used figuratively here." +
        "<br><br>" +
        "(B) 'flourish' means to grow or develop in a healthy or vigorous way." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'expand' means to become or make larger or more extensive.",
    chinese_explanation: "(A) '解散' 意味着分开或导致分开并停止运作，这里是比喻用法。" +
        "<br><br>" +
        "(B) '繁荣' 意味着以健康或旺盛的方式生长或发展。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '扩展' 意味着变大或使更广泛。"
    },
    {
        id: 5,
        question: "During the meeting, she __________ against the proposed budget cuts, citing their negative impact on education.",
        chinese_question: "在会议上，她 __________ 反对提议的预算削减，指出其对教育的负面影响。",
        answers: [
                { option: "A", answer: "agreed", chinese_answer: "同意", chinese_romanization: "tóngyì" },
                { option: "B", answer: "inveighed", chinese_answer: "抨击", chinese_romanization: "pēngjí" },
                { option: "C", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "D", answer: "admired", chinese_answer: "钦佩", chinese_romanization: "qīnpèi" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'inveighed' means to speak or write about something with great hostility." +
                "<br><br>" +
                "(A) 'agreed' means to have the same opinion about something; concur." +
                "<br><br>" +
                "(C) 'supported' means to bear all or part of the weight of something." +
                "<br><br>" +
                "(D) 'admired' means to regard with respect or warm approval.",
        chinese_explanation: "(B) '抨击' 意味着以强烈的敌意谈论或写作某事。" +
                "<br><br>" +
                "(A) '同意' 意味着对某事持相同意见；同意。" +
                "<br><br>" +
                "(C) '支持' 意味着支撑某物的全部或部分重量。" +
                "<br><br>" +
                "(D) '钦佩' 意味着以尊重或热烈的认可看待。"
    },
    {
        id: 6,
        question: "The implementation of new safety measures will __________ the risk of workplace accidents.",
        chinese_question: "实施新的安全措施将 __________ 工作场所事故的风险。",
        answers: [
                { option: "A", answer: "increase", chinese_answer: "增加", chinese_romanization: "zēngjiā" },
                { option: "B", answer: "obviate", chinese_answer: "消除", chinese_romanization: "xiāochú" },
                { option: "C", answer: "aggravate", chinese_answer: "加重", chinese_romanization: "jiāzhòng" },
                { option: "D", answer: "worsen", chinese_answer: "恶化", chinese_romanization: "èhuà" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'obviate' means to remove a need or difficulty." +
                "<br><br>" +
                "(A) 'increase' means to make greater." +
                "<br><br>" +
                "(C) 'aggravate' means to make worse." +
                "<br><br>" +
                "(D) 'worsen' means to make worse.",
        chinese_explanation: "(B) '消除' 一词意味着去除需要或困难。" +
                "<br><br>" +
                "(A) '增加' 意味着变得更大。" +
                "<br><br>" +
                "(C) '加重' 意味着使变得更糟。" +
                "<br><br>" +
                "(D) '恶化' 意味着使变得更糟。"
    },
    {
        id: 7,
        question: "In order to finish her thesis, she decided to __________ herself in the library for a week.",
        chinese_question: "为了完成她的论文，她决定在图书馆里 __________ 一周。",
        answers: [
                { option: "A", answer: "cloister", chinese_answer: "隐居", chinese_romanization: "yǐnjū" },
                { option: "B", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "expose", chinese_answer: "暴露", chinese_romanization: "bàolù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'cloister' means to seclude or shut away, especially in a convent or monastery, used figuratively here." +
                "<br><br>" +
                "(B) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'expose' means to make something visible by uncovering it.",
        chinese_explanation: "(A) '隐居' 意味着隔离或关闭，尤其是在修道院中，这里是比喻用法。" +
                "<br><br>" +
                "(B) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '暴露' 意味着通过揭开某物使其可见。"
    },
    {
        id: 8,
        question: "To impress the clients, the company worked hard to __________ its public image.",
        chinese_question: "为了给客户留下深刻印象，公司努力 __________ 其公众形象。",
        answers: [
                { option: "A", answer: "burnish", chinese_answer: "提升", chinese_romanization: "tíshēng" },
                { option: "B", answer: "damage", chinese_answer: "损害", chinese_romanization: "sǔnhài" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "obscure", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'burnish' means to enhance or improve something, often through effort." +
                "<br><br>" +
                "(B) 'damage' means to cause physical harm to something." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'obscure' means to keep from being seen; conceal.",
        chinese_explanation: "(A) '提升' 意味着通过努力增强或改善某物。" +
                "<br><br>" +
                "(B) '损害' 意味着对某物造成物理伤害。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '隐藏' 意味着使某物不被看到；隐藏。"
    },
    {
        id: 9,
        question: "Politicians sometimes __________ voters with false promises during campaigns.",
        chinese_question: "政客有时会在竞选期间用虚假的承诺 __________ 选民。",
        answers: [
                { option: "A", answer: "enlighten", chinese_answer: "启发", chinese_romanization: "qǐfā" },
                { option: "B", answer: "aid", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
                { option: "C", answer: "bamboozle", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" },
                { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'bamboozle' means to trick or deceive someone." +
                "<br><br>" +
                "(A) 'enlighten' means to give someone greater knowledge and understanding about a subject or situation." +
                "<br><br>" +
                "(B) 'aid' means to provide support or help." +
                "<br><br>" +
                "(D) 'support' means to bear all or part of the weight; hold up.",
        chinese_explanation: "(C) '欺骗' 意味着欺骗或蒙骗某人。" +
                "<br><br>" +
                "(A) '启发' 意味着给某人更大的知识和理解关于一个主题或情况。" +
                "<br><br>" +
                "(B) '帮助' 意味着提供支持或帮助。" +
                "<br><br>" +
                "(D) '支持' 意味着承受全部或部分重量；支撑。"
    },
    {
        id: 10,
        question: "She had to __________ through her emotions to find clarity about her decision.",
        chinese_question: "她不得不 __________ 穿越自己的情感以找到对决定的清晰认识。",
        answers: [
                { option: "A", answer: "stroll", chinese_answer: "漫步", chinese_romanization: "mànbù" },
                { option: "B", answer: "clamber", chinese_answer: "费力前行", chinese_romanization: "fèilì qiánxíng" },
                { option: "C", answer: "slide", chinese_answer: "滑动", chinese_romanization: "huádòng" },
                { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'clamber' figuratively means to move with difficulty or effort through a challenging environment." +
                "<br><br>" +
                "(A) 'stroll' means to walk in a leisurely way." +
                "<br><br>" +
                "(C) 'slide' means to move smoothly along a surface." +
                "<br><br>" +
                "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(B) '费力前行' 在比喻意义上意味着通过具有挑战性的环境艰难或费力地移动。" +
                "<br><br>" +
                "(A) '漫步' 意味着悠闲地走。" +
                "<br><br>" +
                "(C) '滑动' 意味着沿着表面平滑移动。" +
                "<br><br>" +
                "(D) '忽视' 意味着拒绝注意或承认。"
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
