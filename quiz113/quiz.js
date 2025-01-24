// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "They __________ to undermine the new policies implemented by the administration.",
        chinese_question: "他们__________破坏政府实施的新政策。",
        answers: [
            { option: "A", answer: "opposed", chinese_answer: "反对", chinese_romanization: "fǎnduì" },
            { option: "B", answer: "admired", chinese_answer: "钦佩", chinese_romanization: "qīnpèi" },
            { option: "C", answer: "connived", chinese_answer: "密谋", chinese_romanization: "mìmóu" },
            { option: "D", answer: "revealed", chinese_answer: "揭示", chinese_romanization: "jiēshì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'connived' means secretly allowed (something considered immoral, illegal, wrong, or harmful) to occur. Figuratively, it can mean secretly planning or scheming." +
            "<br><br>" +
            "(A) 'opposed' means actively resisted or refused to comply with." +
            "<br><br>" +
            "(B) 'admired' means regarded (an object, quality, or person) with respect or warm approval." +
            "<br><br>" +
            "(D) 'revealed' means made (previously unknown or secret information) known to others.",
        chinese_explanation: "(C) '密谋'一词意味着秘密允许（被认为是不道德、非法、错误或有害的事情）发生。比喻地，它可以表示秘密计划或阴谋。" +
            "<br><br>" +
            "(A) '反对' 意味着积极抵制或拒绝遵守。" +
            "<br><br>" +
            "(B) '钦佩' 意味着以尊敬或温暖的赞许看待（物品、品质或人）。" +
            "<br><br>" +
            "(D) '揭示' 意味着将（先前未知或秘密的信息）公之于众。"
    },
    {
        id: 2,
        question: "The doctor's tone __________ that the news was not good.",
        chinese_question: "医生的语气 __________ 消息不太好。",
        answers: [
                { option: "A", answer: "ignores", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "B", answer: "denies", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
                { option: "C", answer: "indicates", chinese_answer: "表明", chinese_romanization: "biǎomíng" },
                { option: "D", answer: "suggests", chinese_answer: "建议", chinese_romanization: "jiànyì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'indicates' means to show or point out." +
                "<br><br>" +
                "(A) 'ignores' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(B) 'denies' means to refuse to admit the truth or existence of something." +
                "<br><br>" +
                "(D) 'suggests' means to state or express indirectly.",
        chinese_explanation: "(C) '表明' 意味着显示或指出。" +
                "<br><br>" +
                "(A) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(B) '否认' 意味着拒绝承认某事的真实性或存在。" +
                "<br><br>" +
                "(D) '建议' 意味着间接地表达或陈述。"
    },
    {
        id: 3,
        question: "Despite their initial resistance, the company had to __________ to the new regulations imposed by the government.",
        chinese_question: "尽管起初反对，公司不得不 __________ 政府施加的新法规。",
        answers: [
                { option: "A", answer: "capitulate", chinese_answer: "屈服", chinese_romanization: "qūfú" },
                { option: "B", answer: "protest", chinese_answer: "抗议", chinese_romanization: "kàngyì" },
                { option: "C", answer: "negotiate", chinese_answer: "谈判", chinese_romanization: "tánpàn" },
                { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'capitulate' means to cease to resist an opponent or an unwelcome demand; surrender." +
                "<br><br>" +
                "(B) 'protest' means to express an objection to what someone has said or done." +
                "<br><br>" +
                "(C) 'negotiate' means to try to reach an agreement or compromise by discussion with others." +
                "<br><br>" +
                "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(A) '屈服' 意味着停止抵抗对手或不受欢迎的要求；投降。" +
                "<br><br>" +
                "(B) '抗议' 意味着对某人所说或所做的表示反对。" +
                "<br><br>" +
                "(C) '谈判' 意味着通过与他人讨论试图达成协议或妥协。" +
                "<br><br>" +
                "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 4,
    question: "During the protest, some demonstrators threatened to __________ the politician's effigy from the office window.",
    chinese_question: "在抗议期间，一些示威者威胁要把政治家的雕像 __________ 出办公室窗外。",
    answers: [
        { option: "A", answer: "protect", chinese_answer: "保护", chinese_romanization: "bǎohù" },
        { option: "B", answer: "defenestrate", chinese_answer: "扔出窗外", chinese_romanization: "rēng chū chuāngwài" },
        { option: "C", answer: "venerate", chinese_answer: "尊敬", chinese_romanization: "zūnjìng" },
        { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'defenestrate' means to throw someone or something out of a window." +
        "<br><br>" +
        "(A) 'protect' means to keep safe from harm or injury." +
        "<br><br>" +
        "(C) 'venerate' means to regard with great respect." +
        "<br><br>" +
        "(D) 'ignore' means to refuse to take notice of or acknowledge.",
    chinese_explanation: "(B) '扔出窗外' 意味着将某人或某物从窗户扔出去。" +
        "<br><br>" +
        "(A) '保护' 意味着保护免受伤害或损害。" +
        "<br><br>" +
        "(C) '尊敬' 意味着对某人非常尊敬。" +
        "<br><br>" +
        "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 5,
    question: "His ability to __________ from voicing his frustrations in public showed his maturity.",
    chinese_question: "他能够 __________ 在公众场合表达他的挫败感，显示了他的成熟。",
    answers: [
        { option: "A", answer: "express", chinese_answer: "表达", chinese_romanization: "biǎodá" },
        { option: "B", answer: "forbear", chinese_answer: "克制", chinese_romanization: "kèzhì" },
        { option: "C", answer: "amplify", chinese_answer: "放大", chinese_romanization: "fàngdà" },
        { option: "D", answer: "dismiss", chinese_answer: "驳回", chinese_romanization: "bóhuí" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'forbear' used figuratively means to restrain oneself from showing or expressing something." +
        "<br><br>" +
        "(A) 'express' means to convey a thought or feeling in words or by gestures and conduct." +
        "<br><br>" +
        "(C) 'amplify' means to increase the volume of sound or the intensity of an action or effect." +
        "<br><br>" +
        "(D) 'dismiss' means to treat as unworthy of serious consideration.",
    chinese_explanation: "(B) '克制' 在比喻意义上指抑制自己不去表现或表达某事。" +
        "<br><br>" +
        "(A) '表达' 意味着通过言语或手势和行为传达思想或感情。" +
        "<br><br>" +
        "(C) '放大' 意味着增加声音的音量或行动或效果的强度。" +
        "<br><br>" +
        "(D) '驳回' 意味着认为不值得认真考虑。"
    },
    {
        id: 6,
    question: "After the allegations were made public, the company CEO chose to __________ any claims of wrongdoing.",
    chinese_question: "指控公开后，公司CEO选择 __________ 任何不当行为的指控。",
    answers: [
        { option: A, answer: "admit", chinese_answer: "承认", chinese_romanization: "chéngrèn" },
        { option: B, answer: "repudiate", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
        { option: C, answer: "consider", chinese_answer: "考虑", chinese_romanization: "kǎolǜ" },
        { option: D, answer: "promote", chinese_answer: "促进", chinese_romanization: "cùjìn" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'repudiate' means to refuse to accept or be associated with." +
        "<br><br>" +
        "(A) 'admit' means to confess to be true or to be the case." +
        "<br><br>" +
        "(C) 'consider' means to think carefully about something." +
        "<br><br>" +
        "(D) 'promote' means to further the progress of something.",
    chinese_explanation: "(B) '否认' 意味着拒绝接受或与之相关。" +
        "<br><br>" +
        "(A) '承认' 意味着承认某事是真实的或事实。" +
        "<br><br>" +
        "(C) '考虑' 意味着仔细考虑某事。" +
        "<br><br>" +
        "(D) '促进' 意味着促进某事的进展。"
    },
    {
        id: 7,
        question: "The auditor was hired to __________ the financial records for any discrepancies or errors.",
        chinese_question: "审计师受聘来 __________ 财务记录，以查找任何差异或错误。",
        answers: [
                { option: "A", answer: "scrutinize", chinese_answer: "仔细检查", chinese_romanization: "zǐxì jiǎnchá" },
                { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "approve", chinese_answer: "批准", chinese_romanization: "pīzhǔn" },
                { option: "D", answer: "hide", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'scrutinize' means to examine or inspect closely and thoroughly." +
                "<br><br>" +
                "(B) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(C) 'approve' means to officially agree to or accept as satisfactory." +
                "<br><br>" +
                "(D) 'hide' means to keep out of sight.",
        chinese_explanation: "(A) '仔细检查' 意味着仔细地检查或察看。" +
                "<br><br>" +
                "(B) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(C) '批准' 意味着正式同意或接受为满意。" +
                "<br><br>" +
                "(D) '隐藏' 意味着隐藏视线。"
    },
    {
        id: 8,
        question: "Realizing they were outnumbered, the rebels decided to __________ to avoid further bloodshed.",
        chinese_question: "意识到他们寡不敌众，叛军决定 __________ 以避免进一步的流血。",
        answers: [
                { option: "A", answer: "capitulate", chinese_answer: "投降", chinese_romanization: "tóuxiáng" },
                { option: "B", answer: "resist", chinese_answer: "抵抗", chinese_romanization: "dǐkàng" },
                { option: "C", answer: "retreat", chinese_answer: "撤退", chinese_romanization: "chètuì" },
                { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'capitulate' means to cease to resist an opponent or an unwelcome demand; surrender." +
                "<br><br>" +
                "(B) 'resist' means to withstand the action or effect of." +
                "<br><br>" +
                "(C) 'retreat' means to withdraw from enemy forces as a result of their superior power or after a defeat." +
                "<br><br>" +
                "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(A) '投降' 意味着停止抵抗对手或不受欢迎的要求；投降。" +
                "<br><br>" +
                "(B) '抵抗' 意味着承受住行动或效果。" +
                "<br><br>" +
                "(C) '撤退' 意味着由于对方的强大力量或战败而从敌军撤退。" +
                "<br><br>" +
                "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 9,
    question: "During the speech, some members of the crowd started to __________ the politician.",
    chinese_question: "在演讲期间，一些人群开始 __________ 那位政治家。",
    answers: [
        { option: "A", answer: "heckle", chinese_answer: "起哄", chinese_romanization: "qǐhòng" },
        { option: "B", answer: "applaud", chinese_answer: "鼓掌", chinese_romanization: "gǔzhǎng" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "compliment", chinese_answer: "赞美", chinese_romanization: "zànměi" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'heckle' means to interrupt a public speaker with derisive or aggressive comments or abuse." +
        "<br><br>" +
        "(B) 'applaud' means to show approval or praise by clapping." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'compliment' means a polite expression of praise or admiration.",
    chinese_explanation: "(A) '起哄' 意味着用嘲弄或攻击性的评论或谩骂打断公众演讲者。" +
        "<br><br>" +
        "(B) '鼓掌' 意味着通过拍手表示赞同或称赞。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '赞美' 意味着礼貌的赞扬或钦佩。"
    },
    {
        id: 10,
        question: "The new policy is expected to __________ economic growth in the region.",
        chinese_question: "新政策预计将 __________ 该地区的经济增长。",
        answers: [
                { option: "A", answer: "catalyze", chinese_answer: "催化", chinese_romanization: "cuīhuà" },
                { option: "B", answer: "hinder", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "prevent", chinese_answer: "阻止", chinese_romanization: "zǔzhǐ" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'catalyze' means to cause or accelerate a reaction or process." +
                "<br><br>" +
                "(B) 'hinder' means to create difficulties for someone or something, resulting in delay or obstruction." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'prevent' means to stop something from happening or arising.",
        chinese_explanation: "(A) '催化'一词意味着引起或加速反应或过程。" +
                "<br><br>" +
                "(B) '阻碍' 意味着为某人或某事制造困难，导致延迟或障碍。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '阻止' 意味着阻止某事发生或出现。"
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
