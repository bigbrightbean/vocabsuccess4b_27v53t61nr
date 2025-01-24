// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "She felt like her boss was trying to __________ her into working extra hours.",
        chinese_question: "她觉得她的老板在试图 __________ 她加班。",
        answers: [
                { option: "A", answer: "bludgeon", chinese_answer: "强迫", chinese_romanization: "qiǎngpò" },
                { option: "B", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
                { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'bludgeon' means to bully someone into doing something or to hit someone repeatedly with a heavy object." +
                "<br><br>" +
                "(B) 'encourage' means to give support, confidence, or hope to someone." +
                "<br><br>" +
                "(C) 'support' means to bear all or part of the weight of; hold up." +
                "<br><br>" +
                "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(A) '强迫' 意味着威胁某人做某事或用重物反复打击某人。" +
                "<br><br>" +
                "(B) '鼓励' 意味着给某人支持、信心或希望。" +
                "<br><br>" +
                "(C) '支持' 意味着承担全部或部分重量；支撑。" +
                "<br><br>" +
                "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 2,
    question: "The principal will __________ any attempts to cheat during exams.",
    chinese_question: "校长将 __________ 任何在考试中作弊的行为。",
    answers: [
        { option: "A", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "B", answer: "discountenance", chinese_answer: "反对", chinese_romanization: "fǎnduì" },
        { option: "C", answer: "promote", chinese_answer: "促进", chinese_romanization: "cùjìn" },
        { option: "D", answer: "overlook", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'discountenance' means to refuse to approve of something." +
        "<br><br>" +
        "(A) 'support' means to bear all or part of the weight of something." +
        "<br><br>" +
        "(C) 'promote' means to further the progress of something." +
        "<br><br>" +
        "(D) 'overlook' means to fail to notice or consider something.",
    chinese_explanation: "(B) '反对' 意味着拒绝批准某事。" +
        "<br><br>" +
        "(A) '支持' 意味着支撑某物的全部或部分重量。" +
        "<br><br>" +
        "(C) '促进' 意味着推进某事的进展。" +
        "<br><br>" +
        "(D) '忽视' 意味着未能注意或考虑某事。"
    },
    {
        id: 3,
        question: "Her friendly behavior could easily be __________ as flirtation.",
        chinese_question: "她友好的行为很容易被 __________ 为调情。",
        answers: [
                { option: "A", answer: "construed", chinese_answer: "解释", chinese_romanization: "jiěshì" },
                { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "dismissed", chinese_answer: "驳回", chinese_romanization: "bóhuí" },
                { option: "D", answer: "avoided", chinese_answer: "避免", chinese_romanization: "bìmiǎn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'construed' means to interpret (a word or action) in a particular way." +
                "<br><br>" +
                "(B) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(C) 'dismissed' means to order or allow to leave; send away." +
                "<br><br>" +
                "(D) 'avoided' means to keep away from or stop oneself from doing (something).",
        chinese_explanation: "(A) '解释' 意味着以特定方式解释（一个词或一个行为）。" +
                "<br><br>" +
                "(B) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(C) '驳回' 意味着命令或允许离开；送走。" +
                "<br><br>" +
                "(D) '避免' 意味着远离或阻止自己做（某事）。"
    },
    {
        id: 4,
        question: "The smartphone has largely __________ the need for traditional cameras among casual users.",
        chinese_question: "智能手机在很大程度上 __________ 了普通用户对传统相机的需求。",
        answers: [
                { option: "A", answer: "supplanted", chinese_answer: "取代", chinese_romanization: "qǔdài" },
                { option: "B", answer: "complemented", chinese_answer: "补充", chinese_romanization: "bǔchōng" },
                { option: "C", answer: "neglected", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "enhanced", chinese_answer: "增强", chinese_romanization: "zēngqiáng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'supplanted' means to replace or take the place of." +
                "<br><br>" +
                "(B) 'complemented' means to add to (something) in a way that enhances or improves it; make perfect." +
                "<br><br>" +
                "(C) 'neglected' means to fail to care for properly." +
                "<br><br>" +
                "(D) 'enhanced' means to intensify, increase, or further improve the quality, value, or extent of.",
        chinese_explanation: "(A) '取代' 意味着替换或取代。" +
                "<br><br>" +
                "(B) '补充' 意味着以一种增强或改善的方式添加（某物）；使完美。" +
                "<br><br>" +
                "(C) '忽视' 意味着未能妥善照顾。" +
                "<br><br>" +
                "(D) '增强' 意味着加强、增加或进一步改善质量、价值或程度。"
    },
    {
        id: 5,
    question: "The team's strategies began to __________ under the pressure of the championship game.",
    chinese_question: "在冠军赛的压力下，球队的策略开始 __________。",
    answers: [
        { option: "A", answer: "solidify", chinese_answer: "固化", chinese_romanization: "gùhuà" },
        { option: "B", answer: "frizzle", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
        { option: "C", answer: "strengthen", chinese_answer: "加强", chinese_romanization: "jiāqiáng" },
        { option: "D", answer: "coalesce", chinese_answer: "合并", chinese_romanization: "hébìng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'frizzle' used figuratively means to become agitated or confused." +
        "<br><br>" +
        "(A) 'solidify' means to make or become hard or solid." +
        "<br><br>" +
        "(C) 'strengthen' means to make or become stronger." +
        "<br><br>" +
        "(D) 'coalesce' means to come together to form one mass or whole.",
    chinese_explanation: "(B) '混乱' 在比喻意义上指变得激动或困惑。" +
        "<br><br>" +
        "(A) '固化' 意味着使变硬或变固体。" +
        "<br><br>" +
        "(C) '加强' 意味着使变得更强。" +
        "<br><br>" +
        "(D) '合并' 意味着聚集在一起形成一个整体。"
    },
    {
        id: 6,
    question: "To preserve historical sites, the council decided to __________ the buildings from private owners.",
    chinese_question: "为了保护历史遗址，市议会决定从私人业主手中 __________ 这些建筑物。",
    answers: [
        { option: "A", answer: "expropriate", chinese_answer: "征用", chinese_romanization: "zhēngyòng" },
        { option: "B", answer: "lease", chinese_answer: "租赁", chinese_romanization: "zūlìn" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "decorate", chinese_answer: "装饰", chinese_romanization: "zhuāngshì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'expropriate' means to take away property from its owner for public use." +
        "<br><br>" +
        "(B) 'lease' means to grant someone the use of land or property in return for rent." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'decorate' means to make something look more attractive by adding items.",
    chinese_explanation: "(A) '征用' 意味着为了公共用途而从其所有者手中夺走财产。" +
        "<br><br>" +
        "(B) '租赁' 意味着以租金换取某人使用土地或财产。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '装饰' 意味着通过添加物品使某物看起来更有吸引力。"
    },
    {
        id: 7,
        question: "Despite the difficulties, he chose to __________ to his principles and not compromise.",
        chinese_question: "尽管困难重重，他还是选择 __________ 自己的原则，不妥协。",
        answers: [
                { option: "A", answer: "cleave", chinese_answer: "坚持", chinese_romanization: "jiānchí" },
                { option: "B", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'cleave' also means to adhere strongly to a particular pursuit or belief." +
                "<br><br>" +
                "(B) 'abandon' means to give up completely." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'simplify' means to make something simpler or easier to do or understand.",
        chinese_explanation: "(A) '坚持' 也意味着坚决追求或信奉某个信念。" +
                "<br><br>" +
                "(B) '放弃' 意味着完全放弃。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '简化' 意味着使某事更简单或更容易做或理解。"
    },
    {
        id: 8,
        question: "He felt the need to __________ himself from the busy world to find inner peace.",
        chinese_question: "他觉得有必要 __________ 自己，以从忙碌的世界中找到内心的平静。",
        answers: [
                { option: "A", answer: "cloister", chinese_answer: "隐居", chinese_romanization: "yǐnjū" },
                { option: "B", answer: "involve", chinese_answer: "涉及", chinese_romanization: "shèjí" },
                { option: "C", answer: "expose", chinese_answer: "暴露", chinese_romanization: "bàolù" },
                { option: "D", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'cloister' means to seclude or shut away, especially in a convent or monastery." +
                "<br><br>" +
                "(B) 'involve' means to include as a necessary part or result." +
                "<br><br>" +
                "(C) 'expose' means to make something visible by uncovering it." +
                "<br><br>" +
                "(D) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
        chinese_explanation: "(A) '隐居' 意味着隔离或关闭，尤其是在修道院中。" +
                "<br><br>" +
                "(B) '涉及' 意味着作为必要部分或结果包括在内。" +
                "<br><br>" +
                "(C) '暴露' 意味着通过揭开某物使其可见。" +
                "<br><br>" +
                "(D) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。"
    },
    {
        id: 9,
    question: "Environmentalists protested the company’s plans to __________ the forest for its timber.",
    chinese_question: "环保人士抗议公司计划 __________ 森林以获取木材。",
    answers: [
        { option: "A", answer: "preserve", chinese_answer: "保护", chinese_romanization: "bǎohù" },
        { option: "B", answer: "despoil", chinese_answer: "掠夺", chinese_romanization: "luèduó" },
        { option: "C", answer: "cultivate", chinese_answer: "耕作", chinese_romanization: "gēngzuò" },
        { option: "D", answer: "protect", chinese_answer: "维护", chinese_romanization: "wéihù" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'despoil' means to steal or violently remove valuable or attractive possessions from; plunder." +
        "<br><br>" +
        "(A) 'preserve' means to maintain something in its original or existing state." +
        "<br><br>" +
        "(C) 'cultivate' means to prepare and use land for crops or gardening." +
        "<br><br>" +
        "(D) 'protect' means to keep safe from harm or injury.",
    chinese_explanation: "(B) '掠夺' 意味着偷窃或暴力移除有价值或吸引人的财物；掠夺。" +
        "<br><br>" +
        "(A) '保护' 意味着维持某物的原始或现有状态。" +
        "<br><br>" +
        "(C) '耕作' 意味着准备和利用土地进行种植或园艺。" +
        "<br><br>" +
        "(D) '维护' 意味着保护免受伤害或损害。"
    },
    {
        id: 10,
    question: "The leader's inspirational speech __________ hope and determination in the hearts of the listeners.",
    chinese_question: "领导的鼓舞人心的演讲在听众心中 __________ 了希望和决心。",
    answers: [
        { option: "A", answer: "engendered", chinese_answer: "激发了", chinese_romanization: "jīfāle" },
        { option: "B", answer: "weakened", chinese_answer: "削弱了", chinese_romanization: "xuēruòle" },
        { option: "C", answer: "ignored", chinese_answer: "忽视了", chinese_romanization: "hūshìle" },
        { option: "D", answer: "obscured", chinese_answer: "遮掩了", chinese_romanization: "zhēyǎnle" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'engendered' means to cause or give rise to a feeling, situation, or condition, used figuratively here." +
        "<br><br>" +
        "(B) 'weakened' means to make or become weaker." +
        "<br><br>" +
        "(C) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'obscured' means to keep from being seen; conceal.",
    chinese_explanation: "(A) '激发了' 意味着引起或产生一种感觉、情况或条件，这里是比喻用法。" +
        "<br><br>" +
        "(B) '削弱了' 意味着使或变得更弱。" +
        "<br><br>" +
        "(C) '忽视了' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '遮掩了' 意味着防止被看到；隐藏。"
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
