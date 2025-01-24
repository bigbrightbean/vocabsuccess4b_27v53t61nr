// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The artist __________ glitter over the canvas to add a sparkling effect.",
        chinese_question: "艺术家在画布上 __________ 了闪光粉，以增加闪光效果。",
        answers: [
                { option: "A", answer: "removed", chinese_answer: "移除", chinese_romanization: "yíchú" },
                { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "bestrewed", chinese_answer: "散布", chinese_romanization: "sànbù" },
                { option: "D", answer: "hid", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'bestrewed' means to scatter or spread things over a surface." +
                "<br><br>" +
                "(A) 'removed' means to take something away or off from the position occupied." +
                "<br><br>" +
                "(B) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'hid' means to put or keep out of sight; conceal.",
        chinese_explanation: "(C) '散布' 意味着将东西散布在表面上。" +
                "<br><br>" +
                "(A) '移除' 意味着将某物从占据的位置拿走或拿下。" +
                "<br><br>" +
                "(B) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '隐藏' 意味着放置或保持在视线之外；隐瞒。"
    },
    {
        id: 2,
    question: "His kind actions towards the community __________ a feeling of goodwill among the residents.",
    chinese_question: "他对社区的善举 __________ 了居民们的善意。",
    answers: [
        { option: "A", answer: "engendered", chinese_answer: "引发了", chinese_romanization: "yǐnfāle" },
        { option: "B", answer: "concealed", chinese_answer: "隐藏了", chinese_romanization: "yǐncángle" },
        { option: "C", answer: "ignored", chinese_answer: "忽视了", chinese_romanization: "hūshìle" },
        { option: "D", answer: "eroded", chinese_answer: "侵蚀了", chinese_romanization: "qīnshíle" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'engendered' means to cause or give rise to a feeling, situation, or condition." +
        "<br><br>" +
        "(B) 'concealed' means to keep something secret or hidden." +
        "<br><br>" +
        "(C) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'eroded' means to gradually wear away.",
    chinese_explanation: "(A) '引发了' 意味着引起或产生一种感觉、情况或条件。" +
        "<br><br>" +
        "(B) '隐藏了' 意味着保密或隐藏某物。" +
        "<br><br>" +
        "(C) '忽视了' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '侵蚀了' 意味着逐渐磨损。"
    },
    {
        id: 3,
    question: "The passion he once had for music began to __________ after years of inactivity.",
    chinese_question: "在多年没有活动之后，他曾经对音乐的热情开始 __________ 。",
    answers: [
        { option: "A", answer: "evanesce", chinese_answer: "消退", chinese_romanization: "xiāotuì" },
        { option: "B", answer: "flourish", chinese_answer: "繁荣", chinese_romanization: "fánróng" },
        { option: "C", answer: "persist", chinese_answer: "坚持", chinese_romanization: "jiānchí" },
        { option: "D", answer: "multiply", chinese_answer: "增加", chinese_romanization: "zēngjiā" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'evanesce' means to pass out of sight, memory, or existence; to disappear gradually, used figuratively here." +
        "<br><br>" +
        "(B) 'flourish' means to grow or develop in a healthy or vigorous way." +
        "<br><br>" +
        "(C) 'persist' means to continue firmly or obstinately." +
        "<br><br>" +
        "(D) 'multiply' means to increase in number.",
    chinese_explanation: "(A) '消退' 意味着从视线、记忆或存在中消失；逐渐消失，这里是比喻用法。" +
        "<br><br>" +
        "(B) '繁荣' 意味着健康或旺盛地生长或发展。" +
        "<br><br>" +
        "(C) '坚持' 意味着坚定或顽固地继续。" +
        "<br><br>" +
        "(D) '增加' 意味着数量增加。"
    },
    {
        id: 4,
    question: "The investigation revealed that the manager had been __________ company funds for years.",
    chinese_question: "调查显示，这位经理多年来一直在 __________ 公司资金。",
    answers: [
        { option: "A", answer: "safeguarding", chinese_answer: "保护", chinese_romanization: "bǎohù" },
        { option: "B", answer: "defalcating", chinese_answer: "挪用", chinese_romanization: "nuóyòng" },
        { option: "C", answer: "distributing", chinese_answer: "分配", chinese_romanization: "fēnpèi" },
        { option: "D", answer: "generating", chinese_answer: "产生", chinese_romanization: "chǎnshēng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'defalcating' means to embezzle or misappropriate funds." +
        "<br><br>" +
        "(A) 'safeguarding' means to protect from harm or damage." +
        "<br><br>" +
        "(C) 'distributing' means to give out or share." +
        "<br><br>" +
        "(D) 'generating' means to produce or create.",
    chinese_explanation: "(B) '挪用' 意味着贪污或挪用资金。" +
        "<br><br>" +
        "(A) '保护' 意味着保护免受伤害或损害。" +
        "<br><br>" +
        "(C) '分配' 意味着分发或分享。" +
        "<br><br>" +
        "(D) '产生' 意味着生产或创造。"
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
        question: "The new office policies will __________ on our personal time, making it difficult to maintain a work-life balance.",
        chinese_question: "新的办公室政策将 __________ 我们的个人时间，使得维持工作与生活的平衡变得困难。",
        answers: [
                { option: "A", answer: "impinge", chinese_answer: "影响", chinese_romanization: "yǐngxiǎng" },
                { option: "B", answer: "improve", chinese_answer: "改善", chinese_romanization: "gǎishàn" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'impinge' means to have an effect or impact, especially a negative one." +
                "<br><br>" +
                "(B) 'improve' means to make or become better." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'support' means to give assistance to.",
        chinese_explanation: "(A) '影响' 意味着产生影响或作用，尤其是负面的影响。" +
                "<br><br>" +
                "(B) '改善' 意味着使变得更好或变得更好。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '支持' 意味着给予帮助。"
    },
    {
        id: 7,
        question: "The educational system should aim to inspire students rather than __________ their enthusiasm with rote memorization.",
        chinese_question: "教育系统应致力于激发学生的热情，而不是通过死记硬背来 __________ 他们的积极性。",
        answers: [
                { option: "A", answer: "invigorate", chinese_answer: "激励", chinese_romanization: "jīlì" },
                { option: "B", answer: "stultify", chinese_answer: "抑制", chinese_romanization: "yìzhì" },
                { option: "C", answer: "stimulate", chinese_answer: "刺激", chinese_romanization: "cìjī" },
                { option: "D", answer: "excite", chinese_answer: "激发", chinese_romanization: "jīfā" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'stultify' figuratively means to cause to lose enthusiasm and initiative." +
                "<br><br>" +
                "(A) 'invigorate' means to give energy or strength." +
                "<br><br>" +
                "(C) 'stimulate' means to encourage interest or activity." +
                "<br><br>" +
                "(D) 'excite' means to arouse emotions or enthusiasm.",
        chinese_explanation: "(B) '抑制' 一词在比喻上意味着导致失去热情和主动性。" +
                "<br><br>" +
                "(A) '激励' 意味着给予能量或力量。" +
                "<br><br>" +
                "(C) '刺激' 意味着鼓励兴趣或活动。" +
                "<br><br>" +
                "(D) '激发' 意味着激发情感或热情。"
    },
    {
        id: 8,
        question: "They would often __________ until the early hours of the morning at the annual festival.",
        chinese_question: "在一年一度的节日上，他们常常狂欢到凌晨。",
        answers: [
                { option: "A", answer: "sleep", chinese_answer: "睡觉", chinese_romanization: "shuìjiào" },
                { option: "B", answer: "carouse", chinese_answer: "狂欢", chinese_romanization: "kuánghuān" },
                { option: "C", answer: "exercise", chinese_answer: "锻炼", chinese_romanization: "duànliàn" },
                { option: "D", answer: "work", chinese_answer: "工作", chinese_romanization: "gōngzuò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'carouse' means to drink plentiful amounts of alcohol and enjoy oneself with others in a noisy, lively way." +
                "<br><br>" +
                "(A) 'sleep' means to rest by sleeping." +
                "<br><br>" +
                "(C) 'exercise' means to engage in physical activity to sustain or improve health and fitness." +
                "<br><br>" +
                "(D) 'work' means to be engaged in physical or mental activity in order to achieve a purpose or result.",
        chinese_explanation: "(B) '狂欢'一词意味着与他人一起大量饮酒和享受喧闹、热闹的方式。" +
                "<br><br>" +
                "(A) '睡觉' 意味着通过睡眠来休息。" +
                "<br><br>" +
                "(C) '锻炼' 意味着进行体育活动以维持或改善健康和体能。" +
                "<br><br>" +
                "(D) '工作' 意味着为了达到某个目的或结果而从事体力或脑力活动。"
    },
    {
        id: 9,
    question: "The movie was so thrilling that he would __________ on every scene, not wanting to miss a single moment.",
    chinese_question: "电影如此令人激动，他 __________ 每一个场景，不想错过任何一个瞬间。",
    answers: [
        { option: "A", answer: "skim", chinese_answer: "浏览", chinese_romanization: "liúlǎn" },
        { option: "B", answer: "gormandize", chinese_answer: "狼吞虎咽", chinese_romanization: "lángtūnhǔyàn" },
        { option: "C", answer: "critique", chinese_answer: "批评", chinese_romanization: "pīpíng" },
        { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'gormandize' used figuratively means to consume something greedily or ravenously." +
        "<br><br>" +
        "(A) 'skim' means to read something quickly or superficially." +
        "<br><br>" +
        "(C) 'critique' means to evaluate in a detailed and analytical way." +
        "<br><br>" +
        "(D) 'ignore' means to refuse to take notice of or acknowledge.",
    chinese_explanation: "(B) '狼吞虎咽' 在比喻意义上指贪婪或狼吞虎咽地消耗某物。" +
        "<br><br>" +
        "(A) '浏览' 意味着快速或肤浅地阅读某物。" +
        "<br><br>" +
        "(C) '批评' 意味着以详细和分析的方式评价。" +
        "<br><br>" +
        "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 10,
        question: "The government had to __________ its policy after realizing its negative impact on the economy.",
        chinese_question: "政府在意识到其对经济的负面影响后不得不 __________ 政策。",
        answers: [
                { option: "A", answer: "reverse", chinese_answer: "撤销", chinese_romanization: "chèxiāo" },
                { option: "B", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "C", answer: "enforce", chinese_answer: "执行", chinese_romanization: "zhíxíng" },
                { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'reverse' means to change to the opposite direction, position, or course of action." +
                "<br><br>" +
                "(B) 'support' means to bear all or part of the weight of; hold up." +
                "<br><br>" +
                "(C) 'enforce' means to compel observance of or compliance with." +
                "<br><br>" +
                "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(A) '撤销' 意味着改变到相反的方向、位置或行动方案。" +
                "<br><br>" +
                "(B) '支持' 意味着承受全部或部分重量；支撑。" +
                "<br><br>" +
                "(C) '执行' 意味着强制遵守或遵守。" +
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
