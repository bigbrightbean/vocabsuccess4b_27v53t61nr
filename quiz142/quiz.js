// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The prospect of a promotion __________ her, motivating her to work even harder.",
        chinese_question: "晋升的前景 __________ 她，激励她更加努力工作。",
        answers: [
                { option: "A", answer: "discouraged", chinese_answer: "劝阻", chinese_romanization: "quànzǔ" },
                { option: "B", answer: "tantalized", chinese_answer: "诱惑", chinese_romanization: "yòuhuò" },
                { option: "C", answer: "bored", chinese_answer: "使厌倦", chinese_romanization: "shǐ yànjuàn" },
                { option: "D", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'tantalized' means to torment or tease someone with the sight or promise of something that is unobtainable." +
                "<br><br>" +
                "(A) 'discouraged' means to cause someone to lose confidence or enthusiasm." +
                "<br><br>" +
                "(C) 'bored' means to make someone feel weary and uninterested." +
                "<br><br>" +
                "(D) 'ignored' means to refuse to take notice of.",
        chinese_explanation: "(B) '诱惑' 意味着用无法得到的东西的景象或承诺来折磨或戏弄某人。" +
                "<br><br>" +
                "(A) '劝阻' 意味着使某人失去信心或热情。" +
                "<br><br>" +
                "(C) '使厌倦' 意味着使某人感到疲倦和无趣。" +
                "<br><br>" +
                "(D) '忽视' 意味着拒绝注意。"
    },
    {
        id: 2,
    question: "The event was designed to __________ the best minds in the industry for a day of innovation.",
    chinese_question: "该活动旨在 __________ 行业中最优秀的人才，共度创新的一天。",
    answers: [
        { option: "A", answer: "dismiss", chinese_answer: "解散", chinese_romanization: "jiěsàn" },
        { option: "B", answer: "convoke", chinese_answer: "召集", chinese_romanization: "zhàojí" },
        { option: "C", answer: "disband", chinese_answer: "解散", chinese_romanization: "jiěsàn" },
        { option: "D", answer: "scatter", chinese_answer: "分散", chinese_romanization: "fēnsàn" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'convoke' figuratively means to summon or bring together." +
        "<br><br>" +
        "(A) 'dismiss' means to order or allow to leave; send away." +
        "<br><br>" +
        "(C) 'disband' means to break up or cause to break up and stop functioning." +
        "<br><br>" +
        "(D) 'scatter' means to throw in various random directions.",
    chinese_explanation: "(B) '召集' 比喻意义上指召唤或召集在一起。" +
        "<br><br>" +
        "(A) '解散' 意味着命令或允许离开；遣散。" +
        "<br><br>" +
        "(C) '解散' 意味着解散或导致解散并停止运作。" +
        "<br><br>" +
        "(D) '分散' 意味着向各个随机方向抛撒。"
    },
    {
        id: 3,
        question: "New technologies continue to __________ older practices in various industries.",
        chinese_question: "新技术不断在各个行业中 __________ 旧的做法。",
        answers: [
                { option: "A", answer: "supplant", chinese_answer: "取代", chinese_romanization: "qǔdài" },
                { option: "B", answer: "reinforce", chinese_answer: "加强", chinese_romanization: "jiāqiáng" },
                { option: "C", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
                { option: "D", answer: "obscure", chinese_answer: "掩盖", chinese_romanization: "yǎngài" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'supplant' means to replace or take the place of." +
                "<br><br>" +
                "(B) 'reinforce' means to strengthen or support (an object or substance), especially with additional material." +
                "<br><br>" +
                "(C) 'simplify' means to make something simpler or easier to do or understand." +
                "<br><br>" +
                "(D) 'obscure' means to keep from being seen; conceal.",
        chinese_explanation: "(A) '取代' 意味着替换或取代。" +
                "<br><br>" +
                "(B) '加强' 意味着用额外的材料加强或支持（物体或物质）。" +
                "<br><br>" +
                "(C) '简化' 意味着使某事物更简单或更容易做或理解。" +
                "<br><br>" +
                "(D) '掩盖' 意味着使看不见；隐藏。"
    },
    {
        id: 4,
        question: "The new mentorship program aims to __________ young professionals in their career development.",
        chinese_question: "新的指导计划旨在 __________ 年轻专业人士的职业发展。",
        answers: [
            { option: "A", answer: "assist", chinese_answer: "协助", chinese_romanization: "xiézhù" },
            { option: "B", answer: "confuse", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" },
            { option: "C", answer: "deter", chinese_answer: "阻止", chinese_romanization: "zǔzhǐ" },
            { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'assist' means to help someone by doing a share of the work." +
            "<br><br>" +
            "(B) 'confuse' means to make someone bewildered or perplexed." +
            "<br><br>" +
            "(C) 'deter' means to discourage someone from doing something." +
            "<br><br>" +
            "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(A) '协助' 意味着通过分担工作来帮助某人。" +
            "<br><br>" +
            "(B) '使困惑' 意味着使某人困惑或迷惑。" +
            "<br><br>" +
            "(C) '阻止' 意味着阻止某人做某事。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 5,
        question: "The investigator needed to __________ the suspect's whereabouts using phone records and witness statements.",
        chinese_question: "调查员需要使用电话记录和目击者的陈述来 __________ 嫌疑人的下落。",
        answers: [
            { option: "A", answer: "triangulate", chinese_answer: "三角测量", chinese_romanization: "sānjiǎo cèliáng" },
            { option: "B", answer: "forget", chinese_answer: "忘记", chinese_romanization: "wàngjì" },
            { option: "C", answer: "ignore", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
            { option: "D", answer: "guess", chinese_answer: "猜测", chinese_romanization: "cāicè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'triangulate' means to determine something by using multiple points of reference." +
            "<br><br>" +
            "(B) 'forget' means to fail to remember." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'guess' means to estimate or suppose (something) without sufficient information.",
        chinese_explanation: "(A) '三角测量' 意味着通过使用多个参考点来确定某事。" +
            "<br><br>" +
            "(B) '忘记' 意味着未能记住。" +
            "<br><br>" +
            "(C) '忽略' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '猜测' 意味着在没有足够信息的情况下估计或假设（某事）。"
    },
    {
        id: 6,
    question: "The different aspects of his life began to __________, creating a clearer picture of his true self.",
    chinese_question: "他生活的不同方面开始 __________，形成了一个更清晰的自我形象。",
    answers: [
        { option: "A", answer: "separate", chinese_answer: "分开", chinese_romanization: "fēnkāi" },
        { option: "B", answer: "concatenate", chinese_answer: "连接", chinese_romanization: "liánjiē" },
        { option: "C", answer: "fragment", chinese_answer: "分裂", chinese_romanization: "fēnliè" },
        { option: "D", answer: "obscure", chinese_answer: "模糊", chinese_romanization: "móhu" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'concatenate' means to link things together in a series or chain." +
        "<br><br>" +
        "(A) 'separate' means to cause to move or be apart." +
        "<br><br>" +
        "(C) 'fragment' means to break into pieces." +
        "<br><br>" +
        "(D) 'obscure' means to make unclear or difficult to understand.",
    chinese_explanation: "(B) '连接' 意味着将事物按顺序或链条连接在一起。" +
        "<br><br>" +
        "(A) '分开' 意味着使移动或分离。" +
        "<br><br>" +
        "(C) '分裂' 意味着分成碎片。" +
        "<br><br>" +
        "(D) '模糊' 意味着使不清晰或难以理解。"
    },
    {
        id: 7,
    question: "The entrepreneur would __________ in the challenge of building new businesses from scratch.",
    chinese_question: "企业家会在从零开始建立新业务的挑战中 __________ 。",
    answers: [
        { option: "A", answer: "disport", chinese_answer: "娱乐", chinese_romanization: "yúlè" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
        { option: "D", answer: "fear", chinese_answer: "害怕", chinese_romanization: "hàipà" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'disport' means to amuse oneself in a lively and energetic way, used figuratively here." +
        "<br><br>" +
        "(B) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'abandon' means to give up completely." +
        "<br><br>" +
        "(D) 'fear' means to be afraid of someone or something.",
    chinese_explanation: "(A) '娱乐' 意味着以生动和充满活力的方式娱乐自己，这里是比喻用法。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '放弃' 意味着完全放弃。" +
        "<br><br>" +
        "(D) '害怕' 意味着害怕某人或某物。"
    },
    {
        id: 8,
        question: "The CEO attempted to __________ concerns about the company's future with promises of new investments.",
        chinese_question: "首席执行官试图通过承诺新投资来 __________ 对公司未来的担忧。",
        answers: [
                { option: "A", answer: "exacerbate", chinese_answer: "加剧", chinese_romanization: "jiājù" },
                { option: "B", answer: "palliate", chinese_answer: "缓解", chinese_romanization: "huǎnjiě" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "intensify", chinese_answer: "强化", chinese_romanization: "qiánghuà" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'palliate' means to make less severe or unpleasant without removing the cause." +
                "<br><br>" +
                "(A) 'exacerbate' means to make a problem, bad situation, or negative feeling worse." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'intensify' means to become or make more intense.",
        chinese_explanation: "(B) '缓解'一词意味着在不消除原因的情况下减轻严重性或不愉快。" +
                "<br><br>" +
                "(A) '加剧' 意味着使问题、糟糕的情况或负面情绪变得更糟。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '强化' 意味着变得或使更强烈。"
    },
    {
        id: 9,
        question: "Many businesses did not __________ the recession and had to close down.",
        chinese_question: "许多企业没有 __________ 经济衰退，不得不关闭。",
        answers: [
                { option: "A", answer: "survive", chinese_answer: "生存", chinese_romanization: "shēngcún" },
                { option: "B", answer: "increase", chinese_answer: "增加", chinese_romanization: "zēngjiā" },
                { option: "C", answer: "build", chinese_answer: "建立", chinese_romanization: "jiànlì" },
                { option: "D", answer: "improve", chinese_answer: "改善", chinese_romanization: "gǎishàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'survive' means to continue to live or exist, especially in spite of danger or hardship." +
                "<br><br>" +
                "(B) 'increase' means to become or make greater in size, amount, intensity, or degree." +
                "<br><br>" +
                "(C) 'build' means to construct something by putting parts or material together." +
                "<br><br>" +
                "(D) 'improve' means to make or become better.",
        chinese_explanation: "(A) '生存' 意味着继续活着或存在，尤其是尽管有危险或困难。" +
                "<br><br>" +
                "(B) '增加' 意味着在规模、数量、强度或程度上变得更大或更大。" +
                "<br><br>" +
                "(C) '建立' 意味着通过将部分或材料组合在一起来建造某物。" +
                "<br><br>" +
                "(D) '改善' 意味着使或变得更好。"
    },
    {
        id: 10,
        question: "To improve their campaign, the team had to __________ feedback from different demographics.",
        chinese_question: "为了改进他们的活动，团队必须 __________ 不同人口统计的反馈。",
        answers: [
            { option: "A", answer: "triangulate", chinese_answer: "三角测量", chinese_romanization: "sānjiǎo cèliáng" },
            { option: "B", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
            { option: "D", answer: "ignore", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'triangulate' means to determine something by using multiple points of reference." +
            "<br><br>" +
            "(B) 'neglect' means fail to care for properly." +
            "<br><br>" +
            "(C) 'abandon' means to give up completely." +
            "<br><br>" +
            "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(A) '三角测量' 意味着通过使用多个参考点来确定某事。" +
            "<br><br>" +
            "(B) '忽视' 意味着未能妥善照顾。" +
            "<br><br>" +
            "(C) '放弃' 意味着完全放弃。" +
            "<br><br>" +
            "(D) '忽略' 意味着拒绝注意或承认。"
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
