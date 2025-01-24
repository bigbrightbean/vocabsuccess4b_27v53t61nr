// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her fears began to __________ after she talked to her friend about her worries.",
        chinese_question: "在和朋友谈了她的担忧后，她的恐惧开始 __________。",
        answers: [
                { option: "A", answer: "increase", chinese_answer: "增加", chinese_romanization: "zēngjiā" },
                { option: "B", answer: "recede", chinese_answer: "减退", chinese_romanization: "jiǎntuì" },
                { option: "C", answer: "solidify", chinese_answer: "固化", chinese_romanization: "gùhuà" },
                { option: "D", answer: "appear", chinese_answer: "出现", chinese_romanization: "chūxiàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'recede' means to move back or withdraw." +
                "<br><br>" +
                "(A) 'increase' means to become or make greater in size, amount, or degree." +
                "<br><br>" +
                "(C) 'solidify' means to make or become hard or solid." +
                "<br><br>" +
                "(D) 'appear' means to come into sight; become visible or noticeable.",
        chinese_explanation: "(B) '减退'一词意味着向后移动或撤退。" +
                "<br><br>" +
                "(A) '增加' 意味着在规模、数量或程度上增加。" +
                "<br><br>" +
                "(C) '固化' 意味着使变硬或变固。" +
                "<br><br>" +
                "(D) '出现' 意味着进入视野；变得可见或引人注目。"
    },
    {
        id: 2,
        question: "The scientist cautioned that the new formula could be dangerous if __________.",
        chinese_question: "科学家警告说，如果新公式被 __________ ，可能会很危险。",
        answers: [
                { option: "A", answer: "perfected", chinese_answer: "完善", chinese_romanization: "wánshàn" },
                { option: "B", answer: "applied", chinese_answer: "应用", chinese_romanization: "yìngyòng" },
                { option: "C", answer: "misapplied", chinese_answer: "误用", chinese_romanization: "wùyòng" },
                { option: "D", answer: "refined", chinese_answer: "改进", chinese_romanization: "gǎijìn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'misapplied' means to use in an incorrect way, potentially causing harm." +
                "<br><br>" +
                "(A) 'perfected' means to make something completely free from faults." +
                "<br><br>" +
                "(B) 'applied' means to put to use." +
                "<br><br>" +
                "(D) 'refined' means to improve by making small changes.",
        chinese_explanation: "(C) '误用' 意味着以不正确的方式使用，可能会造成伤害。" +
                "<br><br>" +
                "(A) '完善' 意味着使某物完全没有缺陷。" +
                "<br><br>" +
                "(B) '应用' 意味着投入使用。" +
                "<br><br>" +
                "(D) '改进' 意味着通过小的改变来改进。"
    },
    {
        id: 3,
        question: "The manager had to __________ the company through tough economic times.",
        chinese_question: "经理必须 __________ 公司度过经济困难时期。",
        answers: [
            { option: "A", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
            { option: "B", answer: "steer", chinese_answer: "引导", chinese_romanization: "yǐndǎo" },
            { option: "C", answer: "halt", chinese_answer: "停止", chinese_romanization: "tíngzhǐ" },
            { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'steer' means to guide or control the movement or course of something." +
            "<br><br>" +
            "(A) 'abandon' means to leave someone or something behind." +
            "<br><br>" +
            "(C) 'halt' means to bring or come to an abrupt stop." +
            "<br><br>" +
            "(D) 'ignore' means to refuse to take notice of or acknowledge; disregard intentionally.",
        chinese_explanation: "(B) '引导' 意味着引导或控制某物的运动或进程。" +
            "<br><br>" +
            "(A) '放弃' 意味着离开某人或某物。" +
            "<br><br>" +
            "(C) '停止' 意味着突然停止。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认；有意无视。"
    },
    {
        id: 4,
    question: "The artist had to __________ a new design when the client changed their requirements.",
    chinese_question: "当客户更改要求时，艺术家不得不 __________ 一个新设计。",
    answers: [
        { option: "A", answer: "extemporize", chinese_answer: "即兴创作", chinese_romanization: "jíxìng chuàngzuò" },
        { option: "B", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "copy", chinese_answer: "复制", chinese_romanization: "fùzhì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'extemporize' means to compose, perform, or produce something such as music or a speech without preparation; improvise, used figuratively here." +
        "<br><br>" +
        "(B) 'reject' means to dismiss as inadequate or unacceptable." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'copy' means to make a similar or identical version of.",
    chinese_explanation: "(A) '即兴创作' 意味着在没有准备的情况下创作、表演或制作某物，如音乐或演讲；即兴发挥，这里是比喻用法。" +
        "<br><br>" +
        "(B) '拒绝' 意味着认为不够好或不可接受而予以拒绝。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '复制' 意味着制作相似或相同版本的。"
    },
    {
        id: 5,
        question: "The writer's mind seemed to constantly __________ with ideas, never finding a moment's peace.",
        chinese_question: "作家的思绪似乎总是不断地 __________，从未有片刻安宁。",
        answers: [
                { option: "A", answer: "rest", chinese_answer: "休息", chinese_romanization: "xiūxí" },
                { option: "B", answer: "moil", chinese_answer: "翻腾", chinese_romanization: "fānténg" },
                { option: "C", answer: "silence", chinese_answer: "安静", chinese_romanization: "ānjìng" },
                { option: "D", answer: "clear", chinese_answer: "清晰", chinese_romanization: "qīngxī" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'moil' figuratively means to be in a state of continuous activity or agitation." +
                "<br><br>" +
                "(A) 'rest' means to relax." +
                "<br><br>" +
                "(C) 'silence' means complete quiet." +
                "<br><br>" +
                "(D) 'clear' means free from confusion.",
        chinese_explanation: "(B) '翻腾' 一词在比喻上意味着处于持续活动或骚动状态。" +
                "<br><br>" +
                "(A) '休息' 意味着放松。" +
                "<br><br>" +
                "(C) '安静' 意味着完全安静。" +
                "<br><br>" +
                "(D) '清晰' 意味着没有困惑。"
    },
    {
        id: 6,
        question: "Life’s hardships often __________ individuals, teaching them resilience and strength.",
        chinese_question: "生活中的艰难困苦经常 __________ 人们，教他们坚韧和力量。",
        answers: [
                { option: "A", answer: "chasten", chinese_answer: "磨练", chinese_romanization: "móliàn" },
                { option: "B", answer: "weaken", chinese_answer: "削弱", chinese_romanization: "xiāoruò" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "pamper", chinese_answer: "娇惯", chinese_romanization: "jiāoguàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'chasten' means to have a restraining or moderating effect on; to discipline or punish in order to correct." +
                "<br><br>" +
                "(B) 'weaken' means to make or become less strong." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'pamper' means to indulge with every attention, comfort, and kindness; spoil.",
        chinese_explanation: "(A) '磨练' 意味着有抑制或缓和的作用；为了纠正而惩戒或处罚。" +
                "<br><br>" +
                "(B) '削弱' 意味着使变得不那么强。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '娇惯' 意味着以每一种关心、舒适和善意来纵容；宠坏。"
    },
    {
        id: 7,
        question: "Her thoughts seemed to __________ from one idea to another without settling on anything.",
        chinese_question: "她的想法似乎在不同的想法间 __________ ，没有固定在任何事情上。",
        answers: [
                { option: "A", answer: "brachiate", chinese_answer: "摆荡", chinese_romanization: "bǎidàng" },
                { option: "B", answer: "focus", chinese_answer: "聚焦", chinese_romanization: "jùjiāo" },
                { option: "C", answer: "settle", chinese_answer: "固定", chinese_romanization: "gùdìng" },
                { option: "D", answer: "conclude", chinese_answer: "结束", chinese_romanization: "jiéshù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'brachiate' means to move or swing from one place to another." +
                "<br><br>" +
                "(B) 'focus' means to concentrate on one thing." +
                "<br><br>" +
                "(C) 'settle' means to resolve or reach an agreement about something." +
                "<br><br>" +
                "(D) 'conclude' means to bring to an end.",
        chinese_explanation: "(A) '摆荡' 意味着从一个地方移动或摆动到另一个地方。" +
                "<br><br>" +
                "(B) '聚焦' 意味着专注于一件事。" +
                "<br><br>" +
                "(C) '固定' 意味着解决或达成协议。" +
                "<br><br>" +
                "(D) '结束' 意味着结束。"
    },
    {
        id: 8,
    question: "Her boss was annoyed that she spent her work hours __________ instead of completing her tasks.",
    chinese_question: "她的老板对她在工作时间 __________ 而不是完成任务感到恼火。",
    answers: [
        { option: "A", answer: "gallivanting", chinese_answer: "闲逛", chinese_romanization: "xiánguàng" },
        { option: "B", answer: "working", chinese_answer: "工作", chinese_romanization: "gōngzuò" },
        { option: "C", answer: "ignoring", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "relaxing", chinese_answer: "放松", chinese_romanization: "fàngsōng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'gallivanting' means to go around from one place to another in the pursuit of pleasure or entertainment, used figuratively here." +
        "<br><br>" +
        "(B) 'working' means to be engaged in physical or mental activity in order to achieve a purpose or result." +
        "<br><br>" +
        "(C) 'ignoring' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'relaxing' means to make or become less tense or anxious.",
    chinese_explanation: "(A) '闲逛' 意味着为了追求娱乐或享受而到处闲逛，这里是比喻用法。" +
        "<br><br>" +
        "(B) '工作' 意味着从事体力或脑力活动以达到目的或结果。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '放松' 意味着使变得不那么紧张或焦虑。"
    },
    {
        id: 9,
        question: "The children __________ their teacher into giving them more playtime by behaving exceptionally well.",
        chinese_question: "孩子们通过表现得异常好 __________ 老师给他们更多的玩耍时间。",
        answers: [
                { option: "A", answer: "avoided", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
                { option: "B", answer: "inveigled", chinese_answer: "哄骗", chinese_romanization: "hǒngpiàn" },
                { option: "C", answer: "disrespected", chinese_answer: "不尊重", chinese_romanization: "bù zūnzhòng" },
                { option: "D", answer: "hindered", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'inveigled' used figuratively means to persuade someone to do something by means of deception or flattery." +
                "<br><br>" +
                "(A) 'avoided' means to keep away from or stop oneself from doing something." +
                "<br><br>" +
                "(C) 'disrespected' means to show a lack of respect or courtesy." +
                "<br><br>" +
                "(D) 'hindered' means to make it difficult for someone to do something or for something to happen.",
        chinese_explanation: "(B) '哄骗' 在比喻意义上指通过欺骗或奉承来劝说某人做某事。" +
                "<br><br>" +
                "(A) '避免' 意味着避开或阻止自己做某事。" +
                "<br><br>" +
                "(C) '不尊重' 意味着表现出缺乏尊重或礼貌。" +
                "<br><br>" +
                "(D) '阻碍' 意味着使某人做某事或某事发生变得困难。"
    },
    {
        id: 10,
        question: "The company's image was __________ by the reports of unethical practices.",
        chinese_question: "公司的形象因不道德行为的报道而被 __________ 了。",
        answers: [
                { option: "A", answer: "restored", chinese_answer: "恢复", chinese_romanization: "huīfù" },
                { option: "B", answer: "sullied", chinese_answer: "玷污", chinese_romanization: "diànwū" },
                { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "promoted", chinese_answer: "推广", chinese_romanization: "tuīguǎng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sullied' means to damage the purity or integrity of; defile." +
                "<br><br>" +
                "(A) 'restored' means to bring back to a former condition." +
                "<br><br>" +
                "(C) 'ignored' means to refuse to take notice of." +
                "<br><br>" +
                "(D) 'promoted' means to further the progress of something.",
        chinese_explanation: "(B) '玷污' 意味着损害纯洁性或完整性；玷污。" +
                "<br><br>" +
                "(A) '恢复' 意味着恢复到以前的状态。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意。" +
                "<br><br>" +
                "(D) '推广' 意味着促进某事的进展。"
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
