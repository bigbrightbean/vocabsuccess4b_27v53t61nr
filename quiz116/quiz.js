// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "He had to __________ on very little money after losing his job.",
        chinese_question: "失业后，他不得不靠很少的钱 __________ 。",
        answers: [
                { option: "A", answer: "survive", chinese_answer: "生存", chinese_romanization: "shēngcún" },
                { option: "B", answer: "prosper", chinese_answer: "繁荣", chinese_romanization: "fánróng" },
                { option: "C", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
                { option: "D", answer: "decline", chinese_answer: "下降", chinese_romanization: "xiàjiàng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'survive' means to continue to live or exist, especially in spite of danger or hardship." +
                "<br><br>" +
                "(B) 'prosper' means to succeed in material terms; be financially successful." +
                "<br><br>" +
                "(C) 'abandon' means to give up completely." +
                "<br><br>" +
                "(D) 'decline' means to become smaller, fewer, or less; decrease.",
        chinese_explanation: "(A) '生存' 意味着继续活着或存在，尤其是尽管有危险或困难。" +
                "<br><br>" +
                "(B) '繁荣' 意味着在物质方面成功；在经济上成功。" +
                "<br><br>" +
                "(C) '放弃' 意味着完全放弃。" +
                "<br><br>" +
                "(D) '下降' 意味着变小、减少或减少。"
    },
    {
        id: 2,
        question: "The scientists observed how the molecules began to __________ under the microscope, forming complex structures.",
        chinese_question: "科学家观察到分子在显微镜下开始 __________ ，形成复杂的结构。",
        answers: [
                { option: "A", answer: "agglomerate", chinese_answer: "凝聚", chinese_romanization: "níngjù" },
                { option: "B", answer: "scatter", chinese_answer: "分散", chinese_romanization: "fēnsàn" },
                { option: "C", answer: "disband", chinese_answer: "解散", chinese_romanization: "jiěsàn" },
                { option: "D", answer: "isolate", chinese_answer: "隔离", chinese_romanization: "gélí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'agglomerate' means to collect or form into a mass or group." +
                "<br><br>" +
                "(B) 'scatter' means to throw in various random directions." +
                "<br><br>" +
                "(C) 'disband' means to break up or cause to break up and stop functioning." +
                "<br><br>" +
                "(D) 'isolate' means to cause a person or place to be or remain alone or apart from others.",
        chinese_explanation: "(A) '凝聚' 意味着收集或形成一个团块或群体。" +
                "<br><br>" +
                "(B) '分散' 意味着以各种随机方向抛撒。" +
                "<br><br>" +
                "(C) '解散' 意味着解散或导致解散并停止运作。" +
                "<br><br>" +
                "(D) '隔离' 意味着使一个人或地方单独存在或保持与他人分开。"
    },
    {
        id: 3,
        question: "Her constant micromanaging tended to __________ her team's efforts, making them feel incapable of working independently.",
        chinese_question: "她不断的微观管理倾向于 __________ 她团队的努力，使他们觉得无法独立工作。",
        answers: [
                { option: "A", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
                { option: "B", answer: "stultify", chinese_answer: "抑制", chinese_romanization: "yìzhì" },
                { option: "C", answer: "facilitate", chinese_answer: "促进", chinese_romanization: "cùjìn" },
                { option: "D", answer: "liberate", chinese_answer: "解放", chinese_romanization: "jiěfàng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'stultify' figuratively means to cause to lose enthusiasm and initiative." +
                "<br><br>" +
                "(A) 'encourage' means to give support." +
                "<br><br>" +
                "(C) 'facilitate' means to make easier." +
                "<br><br>" +
                "(D) 'liberate' means to set free.",
        chinese_explanation: "(B) '抑制' 一词在比喻上意味着导致失去热情和主动性。" +
                "<br><br>" +
                "(A) '鼓励' 意味着给予支持。" +
                "<br><br>" +
                "(C) '促进' 意味着使变得更容易。" +
                "<br><br>" +
                "(D) '解放' 意味着释放。"
    },
    {
        id: 4,
        question: "He has a tendency to __________ about minor inconveniences as if they were major problems.",
        chinese_question: "他倾向于 __________ 一些小麻烦，好像它们是大问题一样。",
        answers: [
                { option: "A", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
                { option: "B", answer: "kvetch", chinese_answer: "抱怨", chinese_romanization: "bàoyuàn" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'kvetch' used figuratively means to complain persistently." +
                "<br><br>" +
                "(A) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'praise' means to express warm approval or admiration.",
        chinese_explanation: "(B) '抱怨' 在比喻意义上指不断抱怨。" +
                "<br><br>" +
                "(A) '庆祝' 意味着通过社交聚会或愉快的活动来纪念重要或快乐的一天或事件。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '赞扬' 意味着表达热烈的认可或钦佩。"
    },
    {
        id: 5,
    question: "The CEO decided to __________ a culture of transparency and open communication within the company.",
    chinese_question: "首席执行官决定在公司内部 __________ 透明和开放沟通的文化。",
    answers: [
        { option: "A", answer: "hide", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
        { option: "B", answer: "espouse", chinese_answer: "倡导", chinese_romanization: "chàngdǎo" },
        { option: "C", answer: "complicate", chinese_answer: "复杂化", chinese_romanization: "fùzáhuà" },
        { option: "D", answer: "obscure", chinese_answer: "模糊", chinese_romanization: "móhú" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'espouse' used figuratively means to adopt or embrace a new way of living or thinking." +
        "<br><br>" +
        "(A) 'hide' means to put or keep out of sight." +
        "<br><br>" +
        "(C) 'complicate' means to make something more difficult or complex." +
        "<br><br>" +
        "(D) 'obscure' means to keep from being seen or to make unclear.",
    chinese_explanation: "(B) '倡导' 在比喻意义上指采用或接受一种新的生活或思维方式。" +
        "<br><br>" +
        "(A) '隐藏' 意味着隐藏或保守秘密。" +
        "<br><br>" +
        "(C) '复杂化' 意味着使某事变得更困难或复杂。" +
        "<br><br>" +
        "(D) '模糊' 意味着使看不见或使不清楚。"
    },
    {
        id: 6,
    question: "He __________ that the company's recent success was not just a coincidence but the result of strategic planning.",
    chinese_question: "他 __________ 公司的近期成功不仅仅是巧合，而是战略规划的结果。",
    answers: [
        { option: A, answer: "denied", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
        { option: B, answer: "postulated", chinese_answer: "假设", chinese_romanization: "jiǎshè" },
        { option: C, answer: "overlooked", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: D, answer: "dismissed", chinese_answer: "驳回", chinese_romanization: "bóhuí" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'postulated' means to suggest or assume the existence, fact, or truth of something as a basis for reasoning, discussion, or belief." +
        "<br><br>" +
        "(A) 'denied' means to refuse to admit the truth or existence of something." +
        "<br><br>" +
        "(C) 'overlooked' means to fail to notice something." +
        "<br><br>" +
        "(D) 'dismissed' means to treat something as unworthy of serious consideration.",
    chinese_explanation: "(B) '假设' 意味着建议或假定某事物的存在、事实或真实性作为推理、讨论或信仰的基础。" +
        "<br><br>" +
        "(A) '否认' 意味着拒绝承认某事的真实性或存在。" +
        "<br><br>" +
        "(C) '忽视' 意味着未能注意到某事。" +
        "<br><br>" +
        "(D) '驳回' 意味着认为某事不值得认真考虑。"
    },
    {
        id: 7,
        question: "Her overprotective parenting style tends to __________ her children’s fears of the outside world.",
        chinese_question: "她过度保护的养育方式往往会 __________ 孩子们对外界的恐惧。",
        answers: [
                { option: "A", answer: "reinforce", chinese_answer: "加强", chinese_romanization: "jiāqiáng" },
                { option: "B", answer: "eliminate", chinese_answer: "消除", chinese_romanization: "xiāochú" },
                { option: "C", answer: "alleviate", chinese_answer: "减轻", chinese_romanization: "jiǎnqīng" },
                { option: "D", answer: "overlook", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'reinforce' means to strengthen or support an idea, behavior, or feeling." +
                "<br><br>" +
                "(B) 'eliminate' means to completely remove or get rid of something." +
                "<br><br>" +
                "(C) 'alleviate' means to make suffering, deficiency, or a problem less severe." +
                "<br><br>" +
                "(D) 'overlook' means to fail to notice something.",
        chinese_explanation: "(A) '加强' 意味着加强或支持一个想法、行为或感觉。" +
                "<br><br>" +
                "(B) '消除' 意味着完全移除或摆脱某物。" +
                "<br><br>" +
                "(C) '减轻' 意味着使痛苦、缺陷或问题减轻。" +
                "<br><br>" +
                "(D) '忽视' 意味着未能注意到某事。"
    },
    {
        id: 8,
        question: "The speaker's tone was __________ with frustration as he discussed the ongoing issues.",
        chinese_question: "在讨论当前问题时，演讲者的语气中充满了 __________ 。",
        answers: [
                { option: "A", answer: "inflected", chinese_answer: "变化", chinese_romanization: "biànhuà" },
                { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "D", answer: "celebrated", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'inflected' means to change the pitch or tone of the voice." +
                "<br><br>" +
                "(B) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(C) 'supported' means to give assistance to." +
                "<br><br>" +
                "(D) 'celebrated' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
        chinese_explanation: "(A) '变化' 意味着改变声音的音高或音调。" +
                "<br><br>" +
                "(B) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(C) '支持' 意味着给予帮助。" +
                "<br><br>" +
                "(D) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。"
    },
    {
        id: 9,
    question: "When asked an unexpected question, the politician had to __________ his response on the spot.",
    chinese_question: "在被问到一个意外的问题时，这位政治家不得不当场 __________ 他的回答。",
    answers: [
        { option: "A", answer: "extemporize", chinese_answer: "即兴发挥", chinese_romanization: "jíxìng fāhuī" },
        { option: "B", answer: "plan", chinese_answer: "计划", chinese_romanization: "jìhuà" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "recite", chinese_answer: "背诵", chinese_romanization: "bèisòng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'extemporize' means to compose, perform, or produce something such as music or a speech without preparation; improvise." +
        "<br><br>" +
        "(B) 'plan' means to decide on and arrange in advance." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'recite' means to repeat aloud from memory.",
    chinese_explanation: "(A) '即兴发挥' 意味着在没有准备的情况下创作、表演或制作某物，如音乐或演讲；即兴发挥。" +
        "<br><br>" +
        "(B) '计划' 意味着事先决定和安排。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '背诵' 意味着从记忆中大声重复。"
    },
    {
        id: 10,
        question: "The council voted to __________ the corrupt official, condemning his actions publicly.",
        chinese_question: "议会投票决定 __________ 这名腐败官员，公开谴责他的行为。",
        answers: [
                { option: "A", answer: "anathematize", chinese_answer: "诅咒", chinese_romanization: "zǔzhòu" },
                { option: "B", answer: "commend", chinese_answer: "表扬", chinese_romanization: "biǎoyáng" },
                { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "D", answer: "tolerate", chinese_answer: "容忍", chinese_romanization: "róngrěn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'anathematize' means to curse or declare to be evil or anathema." +
                "<br><br>" +
                "(B) 'commend' means to praise formally or officially." +
                "<br><br>" +
                "(C) 'support' means to bear all or part of the weight of; hold up." +
                "<br><br>" +
                "(D) 'tolerate' means to allow the existence, occurrence, or practice of something that one does not necessarily like or agree with without interference.",
        chinese_explanation: "(A) '诅咒' 意味着诅咒或宣布某人为邪恶或应受诅咒。" +
                "<br><br>" +
                "(B) '表扬' 意味着正式或官方地赞美。" +
                "<br><br>" +
                "(C) '支持' 意味着承担全部或部分重量；支撑。" +
                "<br><br>" +
                "(D) '容忍' 意味着允许某物存在、发生或实践，而不一定喜欢或同意，而不加干涉。"
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
