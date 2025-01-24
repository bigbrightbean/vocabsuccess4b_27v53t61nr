// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Community programs aimed to __________ social inequality in the neighborhood.",
        chinese_question: "社区项目旨在 __________ 社区内的社会不平等现象。",
        answers: [
                { option: "A", answer: "ameliorate", chinese_answer: "改善", chinese_romanization: "gǎishàn" },
                { option: "B", answer: "worsen", chinese_answer: "恶化", chinese_romanization: "èhuà" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "dismiss", chinese_answer: "驳回", chinese_romanization: "bóhuí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'ameliorate' means to make something better or improve." +
                "<br><br>" +
                "(B) 'worsen' means to make or become worse." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'dismiss' means to decide that something or someone is not important and not worth considering.",
        chinese_explanation: "(A) '改善' 意味着使某事变得更好或改进。" +
                "<br><br>" +
                "(B) '恶化' 意味着使或变得更糟。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '驳回' 意味着决定某事或某人不重要且不值得考虑。"
    },
    {
        id: 2,
        question: "He tried to __________ his way out of paying taxes by hiding his income.",
        chinese_question: "他试图通过隐藏收入来 __________ 逃税。",
        answers: [
                { option: "A", answer: "bilk", chinese_answer: "逃避", chinese_romanization: "táobì" },
                { option: "B", answer: "declare", chinese_answer: "宣布", chinese_romanization: "xuānbù" },
                { option: "C", answer: "donate", chinese_answer: "捐赠", chinese_romanization: "juānzèng" },
                { option: "D", answer: "reveal", chinese_answer: "揭露", chinese_romanization: "jiēlù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'bilk' means to cheat or defraud someone." +
                "<br><br>" +
                "(B) 'declare' means to make known formally or officially." +
                "<br><br>" +
                "(C) 'donate' means to give money or goods for a good cause." +
                "<br><br>" +
                "(D) 'reveal' means to make known to others.",
        chinese_explanation: "(A) '逃避' 意味着欺骗或诈骗某人。" +
                "<br><br>" +
                "(B) '宣布' 意味着正式或官方地宣布。" +
                "<br><br>" +
                "(C) '捐赠' 意味着为慈善事业捐钱或物品。" +
                "<br><br>" +
                "(D) '揭露' 意味着让别人知道。"
    },
    {
        id: 3,
    question: "The community leader chose to __________ gossip and rumours, focusing instead on constructive dialogue.",
    chinese_question: "社区领袖选择 __________ 八卦和谣言，而是专注于建设性的对话。",
    answers: [
        { option: "A", answer: "foster", chinese_answer: "培育", chinese_romanization: "péiyù" },
        { option: "B", answer: "discountenance", chinese_answer: "反对", chinese_romanization: "fǎnduì" },
        { option: "C", answer: "spread", chinese_answer: "传播", chinese_romanization: "chuánbō" },
        { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'discountenance' used figuratively means to disapprove of or discourage something." +
        "<br><br>" +
        "(A) 'foster' means to encourage the development of something." +
        "<br><br>" +
        "(C) 'spread' means to extend over a large or increasing area." +
        "<br><br>" +
        "(D) 'ignore' means to refuse to take notice of or acknowledge.",
    chinese_explanation: "(B) '反对' 在比喻意义上指不赞成或阻止某事。" +
        "<br><br>" +
        "(A) '培育' 意味着鼓励某事物的发展。" +
        "<br><br>" +
        "(C) '传播' 意味着扩展到大或不断增加的区域。" +
        "<br><br>" +
        "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 4,
    question: "When unsure, he would always __________ to seeking advice from his mentor.",
    chinese_question: "在不确定的时候，他总是 __________ 于向他的导师寻求建议。",
    answers: [
        { option: "A", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
        { option: "B", answer: "default", chinese_answer: "默认", chinese_romanization: "mòrèn" },
        { option: "C", answer: "initiate", chinese_answer: "发起", chinese_romanization: "fāqǐ" },
        { option: "D", answer: "conclude", chinese_answer: "结束", chinese_romanization: "jiéshù" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'default' used figuratively means to revert to a usual or expected pattern of behavior." +
        "<br><br>" +
        "(A) 'avoid' means to keep away from or stop oneself from doing something." +
        "<br><br>" +
        "(C) 'initiate' means to cause a process or action to begin." +
        "<br><br>" +
        "(D) 'conclude' means to bring something to an end.",
    chinese_explanation: "(B) '默认' 在比喻意义上指恢复到通常或预期的行为模式。" +
        "<br><br>" +
        "(A) '避免' 意味着远离或阻止自己做某事。" +
        "<br><br>" +
        "(C) '发起' 意味着使一个过程或行动开始。" +
        "<br><br>" +
        "(D) '结束' 意味着将某事物结束。"
    },
    {
        id: 5,
        question: "He felt overwhelmed by his responsibilities and decided to __________ himself from social activities.",
        chinese_question: "他感到责任重重，决定 __________ 自己，远离社交活动。",
        answers: [
                { option: "A", answer: "cloister", chinese_answer: "隐居", chinese_romanization: "yǐnjū" },
                { option: "B", answer: "enhance", chinese_answer: "增强", chinese_romanization: "zēngqiáng" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'cloister' means to seclude or shut away, especially in a convent or monastery, used figuratively here." +
                "<br><br>" +
                "(B) 'enhance' means to intensify, increase, or further improve the quality, value, or extent of." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'simplify' means to make something simpler or easier to do or understand.",
        chinese_explanation: "(A) '隐居' 意味着隔离或关闭，尤其是在修道院中，这里是比喻用法。" +
                "<br><br>" +
                "(B) '增强' 意味着加强、增加或进一步改善质量、价值或程度。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '简化' 意味着使某事更简单或更容易做或理解。"
    },
    {
        id: 6,
    question: "During the festival, people from all around came to __________ in the joyful activities.",
    chinese_question: "在节日期间，来自各地的人们前来参加 __________ 的欢乐活动。",
    answers: [
        { option: "A", answer: "disport", chinese_answer: "娱乐", chinese_romanization: "yúlè" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "criticize", chinese_answer: "批评", chinese_romanization: "pīpíng" },
        { option: "D", answer: "work", chinese_answer: "工作", chinese_romanization: "gōngzuò" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'disport' means to amuse oneself in a lively and energetic way." +
        "<br><br>" +
        "(B) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'criticize' means to indicate the faults of someone or something in a disapproving way." +
        "<br><br>" +
        "(D) 'work' means to engage in physical or mental activity to achieve a purpose.",
    chinese_explanation: "(A) '娱乐' 意味着以生动和充满活力的方式娱乐自己。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '批评' 意味着以不赞成的方式指出某人或某事的缺点。" +
        "<br><br>" +
        "(D) '工作' 意味着从事体力或脑力活动以实现目的。"
    },
    {
        id: 7,
    question: "He was __________ in a cycle of negative thinking, which affected his overall well-being.",
    chinese_question: "他陷入了消极思维的循环，这影响了他的整体健康。",
    answers: [
        { option: "A", answer: "freed", chinese_answer: "解放", chinese_romanization: "jiěfàng" },
        { option: "B", answer: "enmeshed", chinese_answer: "卷入", chinese_romanization: "juǎnrù" },
        { option: "C", answer: "inspired", chinese_answer: "启发", chinese_romanization: "qǐfā" },
        { option: "D", answer: "motivated", chinese_answer: "激励", chinese_romanization: "jīlì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'enmeshed' used figuratively means to be entangled or deeply involved in a situation." +
        "<br><br>" +
        "(A) 'freed' means to release from captivity or confinement." +
        "<br><br>" +
        "(C) 'inspired' means to fill someone with the urge or ability to do or feel something." +
        "<br><br>" +
        "(D) 'motivated' means to provide someone with a reason for doing something.",
    chinese_explanation: "(B) '卷入' 在比喻意义上指被缠住或深陷于某种情况中。" +
        "<br><br>" +
        "(A) '解放' 意味着放开。" +
        "<br><br>" +
        "(C) '启发' 意味着使某人有做某事的冲动或能力。" +
        "<br><br>" +
        "(D) '激励' 意味着给某人提供做某事的理由。"
    },
    {
        id: 8,
        question: "The environmentalists __________ the destruction of the rainforest, emphasizing the loss of biodiversity.",
        chinese_question: "环保主义者 __________ 雨林的破坏，强调生物多样性的丧失。",
        answers: [
                { option: "A", answer: "lamented", chinese_answer: "哀叹", chinese_romanization: "āitàn" },
                { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "celebrated", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
                { option: "D", answer: "assisted", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'lamented' means to express sorrow, mourning, or regret, used figuratively here." +
                "<br><br>" +
                "(B) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(C) 'celebrated' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
                "<br><br>" +
                "(D) 'assisted' means to help someone.",
        chinese_explanation: "(A) '哀叹' 意味着表达悲伤、哀悼或遗憾，这里是比喻用法。" +
                "<br><br>" +
                "(B) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(C) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。" +
                "<br><br>" +
                "(D) '帮助' 意味着帮助某人。"
    },
    {
        id: 9,
    question: "The marathon left the runners completely __________, needing hours to recover their strength.",
    chinese_question: "马拉松比赛让跑步者们完全 __________，需要几个小时才能恢复体力。",
    answers: [
        { option: "A", answer: "invigorated", chinese_answer: "振奋", chinese_romanization: "zhènfèn" },
        { option: "B", answer: "enervated", chinese_answer: "疲惫", chinese_romanization: "píbèi" },
        { option: "C", answer: "refreshed", chinese_answer: "恢复", chinese_romanization: "huīfù" },
        { option: "D", answer: "strengthened", chinese_answer: "加强", chinese_romanization: "jiāqiáng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'enervated' means to feel drained of energy or vitality." +
        "<br><br>" +
        "(A) 'invigorated' means to give strength or energy to." +
        "<br><br>" +
        "(C) 'refreshed' means to give new strength or energy to; reinvigorate." +
        "<br><br>" +
        "(D) 'strengthened' means to make or become stronger.",
    chinese_explanation: "(B) '疲惫' 意味着感到精力或活力耗尽。" +
        "<br><br>" +
        "(A) '振奋' 意味着给予力量或能量。" +
        "<br><br>" +
        "(C) '恢复' 意味着给予新的力量或能量；重新振作。" +
        "<br><br>" +
        "(D) '加强' 意味着使更强或变得更强。"
    },
    {
        id: 10,
        question: "They accused her of __________ the child, saying he would never learn to be independent.",
        chinese_question: "他们指责她 __________ 孩子，说他永远学不会独立。",
        answers: [
                { option: "A", answer: "ignoring", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "B", answer: "coddling", chinese_answer: "溺爱", chinese_romanization: "nì'ài" },
                { option: "C", answer: "abandoning", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
                { option: "D", answer: "punishing", chinese_answer: "惩罚", chinese_romanization: "chéngfá" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'coddling' means to treat with excessive indulgence and care." +
                "<br><br>" +
                "(A) 'ignoring' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(C) 'abandoning' means to give up completely." +
                "<br><br>" +
                "(D) 'punishing' means to impose a penalty on someone as retribution for an offense.",
        chinese_explanation: "(B) '溺爱' 意味着过度宠爱和关怀。" +
                "<br><br>" +
                "(A) '忽视' 意味着未能适当照顾。" +
                "<br><br>" +
                "(C) '放弃' 意味着完全放弃。" +
                "<br><br>" +
                "(D) '惩罚' 意味着因犯罪而对某人施加惩罚。"
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
