// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "In his quest for power, he was willing to __________ his friendships and moral values.",
        chinese_question: "在追求权力的过程中，他愿意 __________ 他的友谊和道德价值观。",
        answers: [
                { option: "A", answer: "cherish", chinese_answer: "珍惜", chinese_romanization: "zhēnxī" },
                { option: "B", answer: "immolate", chinese_answer: "牺牲", chinese_romanization: "xīshēng" },
                { option: "C", answer: "respect", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" },
                { option: "D", answer: "enhance", chinese_answer: "提升", chinese_romanization: "tíshēng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'immolate' used figuratively means to sacrifice something of great value." +
                "<br><br>" +
                "(A) 'cherish' means to protect and care for someone lovingly." +
                "<br><br>" +
                "(C) 'respect' means to admire someone or something deeply, as a result of their abilities, qualities, or achievements." +
                "<br><br>" +
                "(D) 'enhance' means to intensify, increase, or further improve the quality, value, or extent of.",
        chinese_explanation: "(B) '牺牲' 在比喻意义上指牺牲某些非常有价值的东西。" +
                "<br><br>" +
                "(A) '珍惜' 意味着爱护和关心某人。" +
                "<br><br>" +
                "(C) '尊重' 意味着深深钦佩某人或某物，因为他们的能力、品质或成就。" +
                "<br><br>" +
                "(D) '提升' 意味着加强、增加或进一步提高质量、价值或范围。"
    },
    {
        id: 2,
        question: "The court found him guilty of attempting to __________ the company through false billing practices.",
        chinese_question: "法庭认定他试图通过虚假账单做法 __________ 公司。",
        answers: [
                { option: "A", answer: "manage", chinese_answer: "管理", chinese_romanization: "guǎnlǐ" },
                { option: "B", answer: "mulct", chinese_answer: "诈骗", chinese_romanization: "zhàpiàn" },
                { option: "C", answer: "honor", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" },
                { option: "D", answer: "audit", chinese_answer: "审计", chinese_romanization: "shěnjì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'mulct' means to defraud or swindle." +
                "<br><br>" +
                "(A) 'manage' means to be in charge of." +
                "<br><br>" +
                "(C) 'honor' means to regard with great respect." +
                "<br><br>" +
                "(D) 'audit' means to conduct an official financial examination.",
        chinese_explanation: "(B) '诈骗' 意味着欺诈或诈骗。" +
                "<br><br>" +
                "(A) '管理' 意味着负责。" +
                "<br><br>" +
                "(C) '尊重' 意味着给予极大的尊敬。" +
                "<br><br>" +
                "(D) '审计' 意味着进行官方的财务审查。"
    },
    {
        id: 3,
        question: "The survey results were __________ to provide a comprehensive overview of public opinion.",
        chinese_question: "调查结果被 __________ 起来，以提供公众意见的全面概述。",
        answers: [
                { option: "A", answer: "aggregated", chinese_answer: "汇总", chinese_romanization: "huìzǒng" },
                { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "simplified", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
                { option: "D", answer: "dismissed", chinese_answer: "驳回", chinese_romanization: "bóhuí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'aggregated' means to collect and combine (several separate elements) into a whole." +
                "<br><br>" +
                "(B) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(C) 'simplified' means to make (something) simpler or easier to do or understand." +
                "<br><br>" +
                "(D) 'dismissed' means to order or allow to leave; send away.",
        chinese_explanation: "(A) '汇总' 意味着收集和组合（几个独立元素）成一个整体。" +
                "<br><br>" +
                "(B) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(C) '简化' 意味着使（某事物）更简单或更容易做或理解。" +
                "<br><br>" +
                "(D) '驳回' 意味着命令或允许离开；送走。"
    },
    {
        id: 4,
        question: "Despite all odds, they __________ to keep their hopes alive.",
        chinese_question: "尽管困难重重，他们还是 __________ 保持希望。",
        answers: [
            { option: "A", answer: "thrived", chinese_answer: "繁荣", chinese_romanization: "fánróng" },
            { option: "B", answer: "struggled", chinese_answer: "挣扎", chinese_romanization: "zhēngzhá" },
            { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "relaxed", chinese_answer: "放松", chinese_romanization: "fàngsōng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'struggled' means to make forceful or violent efforts to get free of restraint or constriction." +
            "<br><br>" +
            "(A) 'thrived' means to grow or develop well or vigorously." +
            "<br><br>" +
            "(C) 'ignored' means to refuse to take notice of or acknowledge; disregard intentionally." +
            "<br><br>" +
            "(D) 'relaxed' means to make or become less tense or anxious.",
        chinese_explanation: "(B) '挣扎' 意味着做出强烈或激烈的努力以摆脱束缚或限制。" +
            "<br><br>" +
            "(A) '繁荣' 意味着良好或旺盛地生长或发展。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认；有意无视。" +
            "<br><br>" +
            "(D) '放松' 意味着使或变得不那么紧张或焦虑。"
    },
    {
        id: 5,
        question: "In her speech, she __________ her future plans without going into too much detail.",
        chinese_question: "在她的演讲中，她 __________ 了未来的计划，但没有过多地详述。",
        answers: [
                { option: "A", answer: "adumbrated", chinese_answer: "概述", chinese_romanization: "gàishù" },
                { option: "B", answer: "explained", chinese_answer: "解释", chinese_romanization: "jiěshì" },
                { option: "C", answer: "elaborated", chinese_answer: "详细说明", chinese_romanization: "xiángxì shuōmíng" },
                { option: "D", answer: "ignored", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'adumbrated' means to outline or sketch broadly; to foreshadow or prefigure." +
                "<br><br>" +
                "(B) 'explained' means to make an idea, situation, or problem clear to someone by describing it in more detail." +
                "<br><br>" +
                "(C) 'elaborated' means to develop or present a theory, policy, or system in further detail." +
                "<br><br>" +
                "(D) 'ignored' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(A) '概述' 意味着大致勾勒或概述；预示或预示。" +
                "<br><br>" +
                "(B) '解释' 意味着通过更详细地描述某个想法、情况或问题，使其对某人清楚。" +
                "<br><br>" +
                "(C) '详细说明' 意味着进一步详细地发展或提出一个理论、政策或系统。" +
                "<br><br>" +
                "(D) '忽略' 意味着拒绝注意或承认。"
    },
    {
        id: 6,
        question: "The thoroughness of his report __________ his commitment to the project.",
        chinese_question: "他报告的详尽程度 __________ 他对项目的承诺。",
        answers: [
                { option: "A", answer: "bespeaks", chinese_answer: "表明", chinese_romanization: "biǎomíng" },
                { option: "B", answer: "questions", chinese_answer: "质疑", chinese_romanization: "zhíyí" },
                { option: "C", answer: "undermines", chinese_answer: "削弱", chinese_romanization: "xuēruò" },
                { option: "D", answer: "neglects", chinese_answer: "忽视", chinese_romanization: "hūlüè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'bespeaks' means to indicate or be evidence of something." +
                "<br><br>" +
                "(B) 'questions' means to ask questions about something." +
                "<br><br>" +
                "(C) 'undermines' means to weaken or damage something." +
                "<br><br>" +
                "(D) 'neglects' means to fail to care for properly.",
        chinese_explanation: "(A) '表明' 意味着表明或作为某事的证据。" +
                "<br><br>" +
                "(B) '质疑' 意味着对某事提出问题。" +
                "<br><br>" +
                "(C) '削弱' 意味着削弱或损害某事。" +
                "<br><br>" +
                "(D) '忽视' 意味着未能适当照顾。"
    },
    {
        id: 7,
    question: "The treasurer was arrested for attempting to __________ charity funds for personal use.",
    chinese_question: "财务主管因试图将慈善基金 __________ 用于个人用途而被捕。",
    answers: [
        { option: "A", answer: "donate", chinese_answer: "捐赠", chinese_romanization: "juānzèng" },
        { option: "B", answer: "defalcate", chinese_answer: "挪用", chinese_romanization: "nuóyòng" },
        { option: "C", answer: "collect", chinese_answer: "收集", chinese_romanization: "shōují" },
        { option: "D", answer: "save", chinese_answer: "储存", chinese_romanization: "chúcún" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'defalcate' means to embezzle or misappropriate funds." +
        "<br><br>" +
        "(A) 'donate' means to give money or goods for a good cause." +
        "<br><br>" +
        "(C) 'collect' means to bring or gather together." +
        "<br><br>" +
        "(D) 'save' means to keep safe or store up.",
    chinese_explanation: "(B) '挪用' 意味着贪污或挪用资金。" +
        "<br><br>" +
        "(A) '捐赠' 意味着为公益事业捐赠金钱或物品。" +
        "<br><br>" +
        "(C) '收集' 意味着聚集或集合在一起。" +
        "<br><br>" +
        "(D) '储存' 意味着保存或储存。"
    },
    {
        id: 8,
        question: "The company tried to __________ its financial troubles from the public, but eventually the truth came out.",
        chinese_question: "公司试图 __________ 其财务问题，但最终真相被揭露了。",
        answers: [
                { option: "A", answer: "secrete", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
                { option: "B", answer: "absorb", chinese_answer: "吸收", chinese_romanization: "xīshōu" },
                { option: "C", answer: "reveal", chinese_answer: "揭示", chinese_romanization: "jiēshì" },
                { option: "D", answer: "disclose", chinese_answer: "透露", chinese_romanization: "tòulù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'secrete' means to conceal or hide." +
                "<br><br>" +
                "(B) 'absorb' means to take in or soak up." +
                "<br><br>" +
                "(C) 'reveal' means to make known to others." +
                "<br><br>" +
                "(D) 'disclose' means to make a secret known.",
        chinese_explanation: "(A) '隐藏'一词意味着隐藏或掩藏。" +
                "<br><br>" +
                "(B) '吸收' 意味着吸收或吸收。" +
                "<br><br>" +
                "(C) '揭示' 意味着让他人知道。" +
                "<br><br>" +
                "(D) '透露' 意味着透露秘密。"
    },
    {
        id: 9,
        question: "Her presence __________ the gloomy atmosphere of the room.",
        chinese_question: "她的存在 __________ 了房间里的阴郁气氛。",
        answers: [
                { option: "A", answer: "leavened", chinese_answer: "改善", chinese_romanization: "gǎishàn" },
                { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "diminished", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
                { option: "D", answer: "celebrated", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'leavened' means to permeate and modify or transform something for the better, used figuratively here." +
                "<br><br>" +
                "(B) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(C) 'diminished' means to make or become less." +
                "<br><br>" +
                "(D) 'celebrated' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
        chinese_explanation: "(A) '改善' 意味着渗透和改变或改善某事物，这里是比喻用法。" +
                "<br><br>" +
                "(B) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(C) '减少' 意味着使变少或变少。" +
                "<br><br>" +
                "(D) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。"
    },
    {
        id: 10,
        question: "The politician tried to __________ his opponent's success to luck rather than skill.",
        chinese_question: "那位政治家试图将对手的成功 __________ 于运气而非能力。",
        answers: [
                { option: "A", answer: "impute", chinese_answer: "归因于", chinese_romanization: "guī yīn yú" },
                { option: "B", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'impute' means to attribute or ascribe something, especially a fault or misconduct, to someone or something, used figuratively here." +
                "<br><br>" +
                "(B) 'praise' means to express warm approval or admiration." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'support' means to give assistance to.",
        chinese_explanation: "(A) '归因于' 意味着将某事，特别是过错或不当行为，归咎于某人或某物，这里是比喻用法。" +
                "<br><br>" +
                "(B) '赞美' 意味着表达热烈的赞同或钦佩。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '支持' 意味着给予帮助。"
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
