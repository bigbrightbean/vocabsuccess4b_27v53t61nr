// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The critic did not hesitate to __________ the author for the numerous plot holes in the novel.",
        chinese_question: "评论家毫不犹豫地 __________ 作家小说中的许多情节漏洞。",
        answers: [
                { option: "A", answer: "castigate", chinese_answer: "严厉批评", chinese_romanization: "yánlì pīpíng" },
                { option: "B", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'castigate' means to reprimand someone severely." +
                "<br><br>" +
                "(B) 'praise' means to express warm approval or admiration." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'assist' means to help or support.",
        chinese_explanation: "(A) '严厉批评' 意味着严厉地斥责某人。" +
                "<br><br>" +
                "(B) '赞扬' 意味着表达热烈的赞同或钦佩。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '帮助' 意味着帮助或支持。"
    },
    {
        id: 2,
        question: "The dark clouds on the horizon __________ the storm that was to come.",
        chinese_question: "地平线上的乌云 __________ 了即将到来的暴风雨。",
        answers: [
                { option: "A", answer: "illuminated", chinese_answer: "照亮", chinese_romanization: "zhàoliàng" },
                { option: "B", answer: "adumbrated", chinese_answer: "预示", chinese_romanization: "yùshì" },
                { option: "C", answer: "concealed", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
                { option: "D", answer: "ignored", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'adumbrated' means to outline or sketch broadly; to foreshadow or prefigure." +
                "<br><br>" +
                "(A) 'illuminated' means to light up." +
                "<br><br>" +
                "(C) 'concealed' means to keep something secret; prevent from being known or noticed." +
                "<br><br>" +
                "(D) 'ignored' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(B) '预示' 意味着大致勾勒或概述；预示或预示。" +
                "<br><br>" +
                "(A) '照亮' 意味着点亮。" +
                "<br><br>" +
                "(C) '隐藏' 意味着保密；防止被知道或注意。" +
                "<br><br>" +
                "(D) '忽略' 意味着拒绝注意或承认。"
    },
    {
        id: 3,
    question: "The author decided to __________ several short stories into a single novel.",
    chinese_question: "作者决定将几篇短篇小说 __________ 成一本小说。",
    answers: [
        { option: "A", answer: "separate", chinese_answer: "分开", chinese_romanization: "fēnkāi" },
        { option: "B", answer: "concatenate", chinese_answer: "连接", chinese_romanization: "liánjiē" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "remove", chinese_answer: "移除", chinese_romanization: "yíchú" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'concatenate' means to link things together in a series or chain." +
        "<br><br>" +
        "(A) 'separate' means to cause to move or be apart." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'remove' means to take away or eliminate.",
    chinese_explanation: "(B) '连接' 意味着将事物按顺序或链条连接在一起。" +
        "<br><br>" +
        "(A) '分开' 意味着使移动或分离。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '移除' 意味着拿走或消除。"
    },
    {
        id: 4,
        question: "The author used humour to __________ difficult topics in his book.",
        chinese_question: "作者用幽默来 __________ 书中的难题。",
        answers: [
                { option: "A", answer: "circumvent", chinese_answer: "绕过", chinese_romanization: "ràoguò" },
                { option: "B", answer: "address", chinese_answer: "解决", chinese_romanization: "jiějué" },
                { option: "C", answer: "complicate", chinese_answer: "复杂化", chinese_romanization: "fùzáhuà" },
                { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'circumvent' means to find a way around (an obstacle)." +
                "<br><br>" +
                "(B) 'follow' means to go or come after (a person or thing proceeding ahead); move or travel behind." +
                "<br><br>" +
                "(C) 'enforce' means to compel observance of or compliance with (a law, rule, or obligation)." +
                "<br><br>" +
                "(D) 'simplify' means to make (something) simpler or easier to do or understand.",
        chinese_explanation: "(A) '绕过' 意味着找到绕过（障碍物）的办法。" +
                "<br><br>" +
                "(B) '遵循' 意味着在（前面行进的人或事物）之后走或来；移动或旅行在后面。" +
                "<br><br>" +
                "(C) '执行' 意味着强制遵守或遵守（法律、规则或义务）。" +
                "<br><br>" +
                "(D) '简化' 意味着使（某事物）更简单或更容易做或理解。"
    },
    {
        id: 5,
        question: "He had to __________ through a mountain of paperwork to find the document he needed.",
        chinese_question: "他不得不 __________ 穿过一大堆文件以找到他需要的文件。",
        answers: [
                { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "B", answer: "clamber", chinese_answer: "费力前行", chinese_romanization: "fèilì qiánxíng" },
                { option: "C", answer: "destroy", chinese_answer: "破坏", chinese_romanization: "pòhuài" },
                { option: "D", answer: "slide", chinese_answer: "滑动", chinese_romanization: "huádòng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'clamber' figuratively means to move with difficulty or effort through a challenging environment." +
                "<br><br>" +
                "(A) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(C) 'destroy' means to put an end to the existence of something by damaging or attacking it." +
                "<br><br>" +
                "(D) 'slide' means to move smoothly along a surface.",
        chinese_explanation: "(B) '费力前行' 在比喻意义上意味着通过具有挑战性的环境艰难或费力地移动。" +
                "<br><br>" +
                "(A) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(C) '破坏' 意味着通过损坏或攻击来终止某物的存在。" +
                "<br><br>" +
                "(D) '滑动' 意味着沿着表面平滑移动。"
    },
    {
        id: 6,
    question: "The article seeks to __________ the myths surrounding dieting and weight loss.",
    chinese_question: "这篇文章旨在 __________ 关于节食和减肥的神话。",
    answers: [
        { option: "A", answer: "spread", chinese_answer: "传播", chinese_romanization: "chuánbō" },
        { option: "B", answer: "debunk", chinese_answer: "揭穿", chinese_romanization: "jiēchuān" },
        { option: "C", answer: "uphold", chinese_answer: "维护", chinese_romanization: "wéihù" },
        { option: "D", answer: "validate", chinese_answer: "验证", chinese_romanization: "yànzhèng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'debunk' means to expose the falseness or hollowness of a myth, idea, or belief." +
        "<br><br>" +
        "(A) 'spread' means to open out something so as to extend its surface area, width, or length." +
        "<br><br>" +
        "(C) 'uphold' means to maintain or support in the face of possible opposition." +
        "<br><br>" +
        "(D) 'validate' means to check or prove the validity or accuracy of something.",
    chinese_explanation: "(B) '揭穿' 意味着揭露神话、想法或信仰的虚假性或空洞性。" +
        "<br><br>" +
        "(A) '传播' 意味着展开某物以扩大其表面积、宽度或长度。" +
        "<br><br>" +
        "(C) '维护' 意味着在可能的反对面前维持或支持。" +
        "<br><br>" +
        "(D) '验证' 意味着检查或证明某事的有效性或准确性。"
    },
    {
        id: 7,
    question: "She felt __________ in a toxic relationship, unable to see a way out.",
    chinese_question: "她感到被困在一段有毒的关系中，看不到出路。",
    answers: [
        { option: "A", answer: "liberated", chinese_answer: "解放", chinese_romanization: "jiěfàng" },
        { option: "B", answer: "enmeshed", chinese_answer: "卷入", chinese_romanization: "juǎnrù" },
        { option: "C", answer: "uplifted", chinese_answer: "振奋", chinese_romanization: "zhènfèn" },
        { option: "D", answer: "inspired", chinese_answer: "启发", chinese_romanization: "qǐfā" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'enmeshed' used figuratively means to be entangled or deeply involved in a situation." +
        "<br><br>" +
        "(A) 'liberated' means to set free." +
        "<br><br>" +
        "(C) 'uplifted' means to raise the level of; improve." +
        "<br><br>" +
        "(D) 'inspired' means to fill someone with the urge or ability to do or feel something.",
    chinese_explanation: "(B) '卷入' 在比喻意义上指被缠住或深陷于某种情况中。" +
        "<br><br>" +
        "(A) '解放' 意味着放开。" +
        "<br><br>" +
        "(C) '振奋' 意味着提高水平；改善。" +
        "<br><br>" +
        "(D) '启发' 意味着使某人有做某事的冲动或能力。"
    },
    {
        id: 8,
    question: "The long hours and lack of sleep started to __________ his patience.",
    chinese_question: "长时间工作和缺乏睡眠开始 __________ 他的耐心。",
    answers: [
        { option: "A", answer: "fray", chinese_answer: "磨损", chinese_romanization: "mósǔn" },
        { option: "B", answer: "restore", chinese_answer: "恢复", chinese_romanization: "huīfù" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "enhance", chinese_answer: "提高", chinese_romanization: "tígāo" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'fray' means to strain or cause stress, used figuratively here." +
        "<br><br>" +
        "(B) 'restore' means to bring back to a former condition." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'enhance' means to improve the quality, value, or extent of something.",
    chinese_explanation: "(A) '磨损' 意味着使某人变得紧张或有压力，这里是比喻用法。" +
        "<br><br>" +
        "(B) '恢复' 意味着恢复到以前的状态。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '提高' 意味着改善某物的质量、价值或程度。"
    },
    {
        id: 9,
        question: "Analysts __________ that the company's profits will increase significantly next quarter.",
        chinese_question: "分析师 __________ 该公司的利润将在下个季度大幅增加。",
        answers: [
                { option: "A", answer: "predict", chinese_answer: "预测", chinese_romanization: "yùcè" },
                { option: "B", answer: "deny", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
                { option: "C", answer: "oppose", chinese_answer: "反对", chinese_romanization: "fǎnduì" },
                { option: "D", answer: "mislead", chinese_answer: "误导", chinese_romanization: "wùdǎo" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'predict' means to say what will happen in the future." +
                "<br><br>" +
                "(B) 'deny' means to state that something is not true." +
                "<br><br>" +
                "(C) 'oppose' means to disapprove of and attempt to prevent, especially by argument." +
                "<br><br>" +
                "(D) 'mislead' means to cause someone to have a wrong idea or impression about someone or something.",
        chinese_explanation: "(A) '预测' 意味着说出将来会发生什么。" +
                "<br><br>" +
                "(B) '否认' 意味着声明某事不是真的。" +
                "<br><br>" +
                "(C) '反对' 意味着不赞成并试图阻止，特别是通过争论。" +
                "<br><br>" +
                "(D) '误导' 意味着使某人对某人或某事有错误的看法或印象。"
    },
    {
        id: 10,
        question: "Under pressure from the stakeholders, the CEO had to __________ some control over the company's operations.",
        chinese_question: "在利益相关者的压力下，首席执行官不得不 __________ 一些公司运营的控制权。",
        answers: [
                { option: "A", answer: "cede", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
                { option: "B", answer: "seize", chinese_answer: "抓住", chinese_romanization: "zhuāzhù" },
                { option: "C", answer: "expand", chinese_answer: "扩展", chinese_romanization: "kuòzhǎn" },
                { option: "D", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'cede' means to give up power or territory." +
                "<br><br>" +
                "(B) 'seize' means to take hold of suddenly and forcibly." +
                "<br><br>" +
                "(C) 'expand' means to become or make larger or more extensive." +
                "<br><br>" +
                "(D) 'neglect' means to fail to care for properly.",
        chinese_explanation: "(A) '放弃' 意味着放弃权力或领土。" +
                "<br><br>" +
                "(B) '抓住' 意味着突然和强行抓住。" +
                "<br><br>" +
                "(C) '扩展' 意味着变大或变得更广泛。" +
                "<br><br>" +
                "(D) '忽视' 意味着未能适当照顾。"
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
