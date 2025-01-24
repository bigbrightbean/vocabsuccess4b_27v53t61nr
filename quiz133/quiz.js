// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Despite the excellent performance, some critics continued to __________ about minor aspects of the production.",
        chinese_question: "尽管表演非常出色，一些评论家仍然对制作中的细枝末节 __________。",
        answers: [
                { option: "A", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" },
                { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "carp", chinese_answer: "吹毛求疵", chinese_romanization: "chuīmáoqiúcī" },
                { option: "D", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'carp' means to complain or find fault continually about trivial matters." +
                "<br><br>" +
                "(A) 'praise' means to express warm approval or admiration." +
                "<br><br>" +
                "(B) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
        chinese_explanation: "(C) '吹毛求疵' 意味着对琐事不断地抱怨或挑剔。" +
                "<br><br>" +
                "(A) '赞美' 意味着表达热烈的赞同或钦佩。" +
                "<br><br>" +
                "(B) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '庆祝' 意味着通过社交聚会或愉快的活动来纪念一个重要或快乐的日子或事件。"
    },
    {
        id: 2,
    question: "She often finds herself __________ on the mysteries of the universe.",
    chinese_question: "她经常发现自己在 __________ 宇宙的奥秘。",
    answers: [
        { option: "A", answer: "cogitating", chinese_answer: "深思", chinese_romanization: "shēnsī" },
        { option: "B", answer: "ignoring", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "dismissing", chinese_answer: "不理会", chinese_romanization: "bù lǐhuì" },
        { option: "D", answer: "simplifying", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'cogitating' means to think deeply about something." +
        "<br><br>" +
        "(B) 'ignoring' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'dismissing' means to treat as unworthy of serious consideration." +
        "<br><br>" +
        "(D) 'simplifying' means to make something simpler or easier to do or understand.",
    chinese_explanation: "(A) '深思' 意味着对某事进行深入思考。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '不理会' 意味着认为不值得认真考虑。" +
        "<br><br>" +
        "(D) '简化' 意味着使某事更简单或更容易做或理解。"
    },
    {
        id: 3,
    question: "The lack of proper nutrition had __________ the young children, leaving them susceptible to disease.",
    chinese_question: "缺乏适当的营养使幼儿 __________ ，使他们易患疾病。",
    answers: [
        { option: "A", answer: "enfeebled", chinese_answer: "使虚弱", chinese_romanization: "shǐ xūruò" },
        { option: "B", answer: "nourished", chinese_answer: "滋养", chinese_romanization: "zīyǎng" },
        { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "enhanced", chinese_answer: "增强", chinese_romanization: "zēngqiáng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'enfeebled' means to make someone very weak." +
        "<br><br>" +
        "(B) 'nourished' means to provide with food or other substances necessary for growth, health, and good condition." +
        "<br><br>" +
        "(C) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'enhanced' means to intensify, increase, or further improve the quality, value, or extent of.",
    chinese_explanation: "(A) '使虚弱' 意味着使某人非常虚弱。" +
        "<br><br>" +
        "(B) '滋养' 意味着提供生长、健康和良好状态所需的食物或其他物质。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '增强' 意味着加强、增加或进一步改善质量、价值或程度。"
    },
    {
        id: 4,
        question: "The investigation sought to __________ several employees in the embezzlement scandal.",
        chinese_question: "调查试图 __________ 几名员工卷入贪污丑闻。",
        answers: [
                { option: "A", answer: "inculpate", chinese_answer: "归罪", chinese_romanization: "guīzuì" },
                { option: "B", answer: "vindicate", chinese_answer: "澄清", chinese_romanization: "chéngqīng" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'inculpate' means to accuse or blame someone." +
                "<br><br>" +
                "(B) 'vindicate' means to clear someone of blame or suspicion." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'assist' means to help someone.",
        chinese_explanation: "(A) '归罪' 意味着指责或归咎于某人。" +
                "<br><br>" +
                "(B) '澄清' 意味着使某人免于责备或怀疑。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '帮助' 意味着帮助某人。"
    },
    {
        id: 5,
        question: "Years of rigid routine had caused her lifestyle to __________, making it difficult to adapt to change.",
        chinese_question: "多年的固定模式导致她的生活方式 __________ ，难以适应变化。",
        answers: [
                { option: "A", answer: "flourish", chinese_answer: "繁荣", chinese_romanization: "fánróng" },
                { option: "B", answer: "ossify", chinese_answer: "僵化", chinese_romanization: "jiānghuà" },
                { option: "C", answer: "energize", chinese_answer: "充电", chinese_romanization: "chōngdiàn" },
                { option: "D", answer: "liberate", chinese_answer: "解放", chinese_romanization: "jiěfàng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'ossify' means to become rigid or inflexible in habits or attitudes." +
                "<br><br>" +
                "(A) 'flourish' means to grow or develop in a healthy way." +
                "<br><br>" +
                "(C) 'energize' means to give vitality and enthusiasm to." +
                "<br><br>" +
                "(D) 'liberate' means to set free.",
        chinese_explanation: "(B) '僵化' 意味着在习惯或态度上变得僵硬或不灵活。" +
                "<br><br>" +
                "(A) '繁荣' 意味着以健康的方式成长或发展。" +
                "<br><br>" +
                "(C) '充电' 意味着给某人带来活力和热情。" +
                "<br><br>" +
                "(D) '解放' 意味着解放。"
    },
    {
        id: 6,
        question: "At the end of her presentation, she took a moment to __________ the main points.",
        chinese_question: "在演讲结束时，她花了一点时间 __________ 主要观点。",
        answers: [
                { option: "A", answer: "recapitulate", chinese_answer: "概述", chinese_romanization: "gàishù" },
                { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "extend", chinese_answer: "延长", chinese_romanization: "yáncháng" },
                { option: "D", answer: "confuse", chinese_answer: "迷惑", chinese_romanization: "míhuò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'recapitulate' means to summarize and restate the main points." +
                "<br><br>" +
                "(B) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(C) 'extend' means to cause to cover a larger area; make longer or wider." +
                "<br><br>" +
                "(D) 'confuse' means to make (someone) unable to think clearly.",
        chinese_explanation: "(A) '概述' 意味着总结并重述主要观点。" +
                "<br><br>" +
                "(B) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(C) '延长' 意味着使覆盖更大的区域；变长或变宽。" +
                "<br><br>" +
                "(D) '迷惑' 意味着使（某人）无法清晰思考。"
    },
    {
        id: 7,
        question: "The sound of the cheering crowd began to __________ as the concert came to an end.",
        chinese_question: "随着音乐会的结束，欢呼的人群的声音开始 __________。",
        answers: [
                { option: "A", answer: "increase", chinese_answer: "增加", chinese_romanization: "zēngjiā" },
                { option: "B", answer: "recede", chinese_answer: "退去", chinese_romanization: "tuìqù" },
                { option: "C", answer: "amplify", chinese_answer: "扩大", chinese_romanization: "kuòdà" },
                { option: "D", answer: "echo", chinese_answer: "回响", chinese_romanization: "huíxiǎng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'recede' means to move back or withdraw." +
                "<br><br>" +
                "(A) 'increase' means to become or make greater in size, amount, or degree." +
                "<br><br>" +
                "(C) 'amplify' means to increase the volume of sound." +
                "<br><br>" +
                "(D) 'echo' means a sound or series of sounds caused by the reflection of sound waves.",
        chinese_explanation: "(B) '退去'一词意味着向后移动或撤退。" +
                "<br><br>" +
                "(A) '增加' 意味着在规模、数量或程度上增加。" +
                "<br><br>" +
                "(C) '扩大' 意味着增加声音的音量。" +
                "<br><br>" +
                "(D) '回响' 意味着由声波反射引起的声音或一系列声音。"
    },
    {
        id: 8,
    question: "The company's outdated policies __________ innovation, preventing growth and development.",
    chinese_question: "公司的过时政策 __________ 创新，阻碍了成长和发展。",
    answers: [
        { option: "A", answer: "enhanced", chinese_answer: "增强", chinese_romanization: "zēngqiáng" },
        { option: "B", answer: "fettered", chinese_answer: "束缚", chinese_romanization: "shùfù" },
        { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'fettered' used figuratively means to be held back or restrained by something." +
        "<br><br>" +
        "(A) 'enhanced' means to intensify, increase, or further improve the quality, value, or extent of." +
        "<br><br>" +
        "(C) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'supported' means to bear all or part of the weight of something.",
    chinese_explanation: "(B) '束缚' 在比喻意义上指被某事牵制或限制。" +
        "<br><br>" +
        "(A) '增强' 意味着加强、增加或进一步提高质量、价值或范围。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '支持' 意味着支撑某物的全部或部分重量。"
    },
    {
        id: 9,
    question: "The letter __________ his gratitude for the support he received.",
    chinese_question: "这封信 __________ 了他对所受支持的感激之情。",
    answers: [
        { option: "A", answer: "evinced", chinese_answer: "表现出", chinese_romanization: "biǎoxiàn chū" },
        { option: "B", answer: "contradicted", chinese_answer: "矛盾", chinese_romanization: "máodùn" },
        { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "diminished", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'evinced' means to show or express clearly, used figuratively here." +
        "<br><br>" +
        "(B) 'contradicted' means to assert the opposite of." +
        "<br><br>" +
        "(C) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'diminished' means to make or become less.",
    chinese_explanation: "(A) '表现出' 意味着清楚地显示或表达，这里是比喻用法。" +
        "<br><br>" +
        "(B) '矛盾' 意味着断言相反的。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '减少' 意味着使或变得更少。"
    },
    {
        id: 10,
        question: "She didn't hesitate to __________ her credentials when applying for the job.",
        chinese_question: "她在申请工作时毫不犹豫地 __________ 她的资历。",
        answers: [
                { option: "A", answer: "brandish", chinese_answer: "展示", chinese_romanization: "zhǎnshì" },
                { option: "B", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "minimize", chinese_answer: "最小化", chinese_romanization: "zuìxiǎo huà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'brandish' means to display something ostentatiously, especially in order to gain attention." +
                "<br><br>" +
                "(B) 'conceal' means to keep something secret." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'minimize' means to reduce something to the smallest possible amount or degree.",
        chinese_explanation: "(A) '展示' 意味着夸耀地展示某物，特别是为了吸引注意。" +
                "<br><br>" +
                "(B) '隐藏' 意味着保密某事。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '最小化' 意味着将某物减少到最小可能数量或程度。"
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
