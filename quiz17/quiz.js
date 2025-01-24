// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "Her kindness is __________, always shining through in her interactions with others, no matter the circumstances.",
    chinese_question: "她的善良是 __________ 的，无论在任何情况下，她与他人的互动中总是显现出来。",
    answers: [
        { option: "A", answer: "inherent", chinese_answer: "固有的", chinese_romanization: "gùyǒu de" },
        { option: "B", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" },
        { option: "C", answer: "occasional", chinese_answer: "偶尔的", chinese_romanization: "ǒu'ěr de" },
        { option: "D", answer: "rare", chinese_answer: "稀有的", chinese_romanization: "xīyǒu de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'inherent' means existing in something as a permanent, essential, or characteristic attribute." +
        "<br><br>" +
        "(B) 'superficial' means existing or occurring at or on the surface." +
        "<br><br>" +
        "(C) 'occasional' means at infrequent or irregular intervals; now and then." +
        "<br><br>" +
        "(D) 'rare' means not occurring very often.",
    chinese_explanation: "(A) '固有的' 意味着作为某物的永久、基本或特征属性存在的。" +
        "<br><br>" +
        "(B) '表面的' 意味着存在或发生在表面上的。" +
        "<br><br>" +
        "(C) '偶尔的' 意味着在不频繁或不规则的间隔发生的；偶尔的。" +
        "<br><br>" +
        "(D) '稀有的' 意味着不经常发生的。"
    },
    {
        id: 2,
        question: "The crime scene was __________, with evidence of violence and chaos everywhere.",
        chinese_question: "犯罪现场非常 __________，到处都是暴力和混乱的证据。",
        answers: [
            { option: "A", answer: "beautiful", chinese_answer: "美丽的", chinese_romanization: "měilì de" },
            { option: "B", answer: "charming", chinese_answer: "迷人的", chinese_romanization: "mírén de" },
            { option: "C", answer: "hideous", chinese_answer: "丑陋的", chinese_romanization: "chǒulòu de" },
            { option: "D", answer: "attractive", chinese_answer: "吸引人的", chinese_romanization: "xīyǐn rén de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'hideous' means extremely ugly or unpleasant. Figuratively, it can mean extremely disturbing or shocking." +
            "<br><br>" +
            "(A) 'beautiful' means pleasing the senses or mind aesthetically." +
            "<br><br>" +
            "(B) 'charming' means very pleasant or attractive." +
            "<br><br>" +
            "(D) 'attractive' means pleasing or appealing to the senses.",
        chinese_explanation: "(C) '丑陋的' 一词意味着极其丑陋或令人不悦的。比喻地，它可以表示极其令人不安或震惊的。" +
            "<br><br>" +
            "(A) '美丽的' 意味着美学上愉悦感官或心灵的。" +
            "<br><br>" +
            "(B) '迷人的' 意味着非常愉快或有吸引力的。" +
            "<br><br>" +
            "(D) '吸引人的' 意味着愉悦或吸引感官的。"
    },
    {
        id: 3,
    question: "The company experienced a __________ decline in sales after the scandal, losing a significant portion of its market share almost overnight.",
    chinese_question: "公司在丑闻后经历了 __________ 的销售下滑，几乎一夜之间失去了大量的市场份额。",
    answers: [
        { option: "A", answer: "precipitous", chinese_answer: "突然的", chinese_romanization: "tūrán de" },
        { option: "B", answer: "moderate", chinese_answer: "适度的", chinese_romanization: "shìdù de" },
        { option: "C", answer: "steady", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" },
        { option: "D", answer: "slow", chinese_answer: "缓慢的", chinese_romanization: "huǎnmàn de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'precipitous' means sudden and dramatic." +
        "<br><br>" +
        "(B) 'moderate' means average in amount, intensity, quality, or degree." +
        "<br><br>" +
        "(C) 'steady' means firmly fixed, supported, or balanced; not shaking or moving." +
        "<br><br>" +
        "(D) 'slow' means moving or operating, or designed to do so, only at a low speed; not quick or fast.",
    chinese_explanation: "(A) '突然的' 意味着突然而剧烈的。" +
        "<br><br>" +
        "(B) '适度的' 意味着数量、强度、质量或程度上的平均。" +
        "<br><br>" +
        "(C) '稳定的' 意味着牢固固定、支持或平衡的；不摇晃或移动的。" +
        "<br><br>" +
        "(D) '缓慢的' 意味着移动或操作速度低的；不快的。"
    },
    {
        id: 4,
    question: "Her __________ remarks during the meeting showed she had little understanding of the issues being discussed.",
    chinese_question: "她在会议上的 __________ 言论表明她对讨论的问题几乎没有理解。",
    answers: [
        { option: "A", answer: "obtuse", chinese_answer: "迟钝的", chinese_romanization: "chídùn de" },
        { option: "B", answer: "sharp", chinese_answer: "敏锐的", chinese_romanization: "mǐnruì de" },
        { option: "C", answer: "clever", chinese_answer: "聪明的", chinese_romanization: "cōngmíng de" },
        { option: "D", answer: "discerning", chinese_answer: "有洞察力的", chinese_romanization: "yǒu dòngchá lì de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'obtuse' means annoyingly insensitive or slow to understand." +
        "<br><br>" +
        "(B) 'sharp' means having or showing a quick and decisive quality." +
        "<br><br>" +
        "(C) 'clever' means quick to understand, learn, and devise or apply ideas; intelligent." +
        "<br><br>" +
        "(D) 'discerning' means having or showing good judgment.",
    chinese_explanation: "(A) '迟钝的' 意味着令人恼火地缺乏敏感或理解迟缓的。" +
        "<br><br>" +
        "(B) '敏锐的' 意味着有或表现出快速和果断的品质。" +
        "<br><br>" +
        "(C) '聪明的' 意味着快速理解、学习和设计或应用想法的；智能的。" +
        "<br><br>" +
        "(D) '有洞察力的' 意味着具有或表现出良好判断力的。"
    },
    {
        id: 5,
        question: "The __________ amount of waste generated by the factory polluted the nearby river, harming the local wildlife.",
        chinese_question: "工厂产生的 __________ 废物污染了附近的河流，危害了当地的野生动物。",
        answers: [
            { option: "A", answer: "negligible", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" },
            { option: "B", answer: "minimal", chinese_answer: "最小的", chinese_romanization: "zuìxiǎo de" },
            { option: "C", answer: "nauseating", chinese_answer: "令人作呕的", chinese_romanization: "lìngrén zuò'ǒu de" },
            { option: "D", answer: "insignificant", chinese_answer: "不重要的", chinese_romanization: "bù zhòngyào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'nauseating' means causing a feeling of nausea or disgust." +
            "<br><br>" +
            "(A) 'negligible' means so small or unimportant as to be not worth considering; insignificant." +
            "<br><br>" +
            "(B) 'minimal' means of a minimum amount, quantity, or degree." +
            "<br><br>" +
            "(D) 'insignificant' means too small or unimportant to be worth considering.",
        chinese_explanation: "(C) '令人作呕的' 意味着引起恶心或厌恶的。" +
            "<br><br>" +
            "(A) '微不足道的' 意味着小到或不重要，不值得考虑的。" +
            "<br><br>" +
            "(B) '最小的' 意味着最小的数量、数量或程度。" +
            "<br><br>" +
            "(D) '不重要的' 意味着太小或不重要，不值得考虑的。"
    },
    {
        id: 6,
        question: "She navigated the complexities of international business with an __________ grace that impressed her colleagues.",
        chinese_question: "她以 __________ 的优雅处理国际商务的复杂性，令同事们印象深刻。",
        answers: [
            { option: "A", answer: "unrefined", chinese_answer: "不文雅的", chinese_romanization: "bù wényǎ de" },
            { option: "B", answer: "crude", chinese_answer: "粗糙的", chinese_romanization: "cūcāo de" },
            { option: "C", answer: "urbane", chinese_answer: "文雅的", chinese_romanization: "wényǎ de" },
            { option: "D", answer: "inelegant", chinese_answer: "不优雅的", chinese_romanization: "bù yōuyǎ de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'urbane' means suave, courteous, and refined in manner." +
            "<br><br>" +
            "(A) 'unrefined' means not elegant or cultured." +
            "<br><br>" +
            "(B) 'crude' means in a natural or raw state; not yet processed or refined." +
            "<br><br>" +
            "(D) 'inelegant' means lacking grace in movement or posture.",
        chinese_explanation: "(C) '文雅的' 意味着举止文雅、彬彬有礼的。" +
            "<br><br>" +
            "(A) '不文雅的' 意味着不优雅或不高雅的。" +
            "<br><br>" +
            "(B) '粗糙的' 意味着处于自然或未加工状态的。" +
            "<br><br>" +
            "(D) '不优雅的' 意味着缺乏动作或姿势的优雅。"
    },
    {
        id: 7,
        question: "The __________ nature of his job made it difficult for him to plan for the future.",
        chinese_question: "他工作的 __________ 性质使他难以为未来做计划。",
        answers: [
            { option: "A", answer: "stable", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" },
            { option: "B", answer: "permanent", chinese_answer: "永久的", chinese_romanization: "yǒngjiǔ de" },
            { option: "C", answer: "transient", chinese_answer: "短暂的", chinese_romanization: "duǎnzàn de" },
            { option: "D", answer: "secure", chinese_answer: "安全的", chinese_romanization: "ānquán de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'transient' means lasting only for a short time." +
            "<br><br>" +
            "(A) 'stable' means not likely to change or fail." +
            "<br><br>" +
            "(B) 'permanent' means lasting or intended to last or remain unchanged indefinitely." +
            "<br><br>" +
            "(D) 'secure' means fixed or fastened so as not to give way, become loose, or be lost.",
        chinese_explanation: "(C) '短暂的' 意味着只持续很短的时间。" +
            "<br><br>" +
            "(A) '稳定的' 意味着不太可能改变或失败的。" +
            "<br><br>" +
            "(B) '永久的' 意味着持续或打算无限期持续或保持不变的。" +
            "<br><br>" +
            "(D) '安全的' 意味着固定或系牢，不会松动、丢失或丧失的。"
    },
    {
        id: 8,
    question: "The company's financial difficulties began to __________ after several years of declining sales and increasing debt.",
    chinese_question: "在销售额持续下降和债务增加的几年后，公司财务困难开始 __________ 出来。",
    answers: [
        { option: "A", answer: "manifest", chinese_answer: "显现", chinese_romanization: "xiǎnxiàn" },
        { option: "B", answer: "dissipate", chinese_answer: "消散", chinese_romanization: "xiāosàn" },
        { option: "C", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
        { option: "D", answer: "vanish", chinese_answer: "消失", chinese_romanization: "xiāoshī" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'manifest' means clear or obvious to the eye or mind." +
        "<br><br>" +
        "(B) 'dissipate' means to disappear or cause to disappear." +
        "<br><br>" +
        "(C) 'diminish' means to make or become less." +
        "<br><br>" +
        "(D) 'vanish' means to disappear suddenly and completely.",
    chinese_explanation: "(A) '显现' 意味着清楚或明显的。" +
        "<br><br>" +
        "(B) '消散' 意味着消失或使消失。" +
        "<br><br>" +
        "(C) '减少' 意味着使变小或变少。" +
        "<br><br>" +
        "(D) '消失' 意味着突然完全消失。"
    },
    {
        id: 9,
    question: "Her __________ decision to leave her job was a result of careful consideration of her future goals and aspirations.",
    chinese_question: "她 __________ 离职的决定是经过对未来目标和抱负的仔细考虑后做出的。",
    answers: [
        { option: "A", answer: "intentional", chinese_answer: "故意的", chinese_romanization: "gùyì de" },
        { option: "B", answer: "hasty", chinese_answer: "匆忙的", chinese_romanization: "cōngmáng de" },
        { option: "C", answer: "impulsive", chinese_answer: "冲动的", chinese_romanization: "chōngdòng de" },
        { option: "D", answer: "spontaneous", chinese_answer: "自发的", chinese_romanization: "zìfā de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'intentional' means done on purpose; deliberate." +
        "<br><br>" +
        "(B) 'hasty' means done with excessive speed or urgency; hurried." +
        "<br><br>" +
        "(C) 'impulsive' means acting or done without forethought." +
        "<br><br>" +
        "(D) 'spontaneous' means performed or occurring as a result of a sudden inner impulse or inclination and without premeditation or external stimulus.",
    chinese_explanation: "(A) '故意的' 意味着有意地做的；故意的。" +
        "<br><br>" +
        "(B) '匆忙的' 意味着以过快的速度或紧迫感完成的；匆忙的。" +
        "<br><br>" +
        "(C) '冲动的' 意味着在没有深思熟虑的情况下行动或完成的。" +
        "<br><br>" +
        "(D) '自发的' 意味着由于突然的内在冲动或倾向而不经过深思熟虑或外部刺激完成的。"
    },
    {
        id: 10,
    question: "Her __________ trust in his abilities was evident, even though she never explicitly stated her confidence in him.",
    chinese_question: "她对他的能力的 __________ 信任是显而易见的，尽管她从未明确表示对他的信心。",
    answers: [
        { option: "A", answer: "implicit", chinese_answer: "暗示的", chinese_romanization: "ànshì de" },
        { option: "B", answer: "obvious", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" },
        { option: "C", answer: "stated", chinese_answer: "陈述的", chinese_romanization: "chénshù de" },
        { option: "D", answer: "declared", chinese_answer: "宣布的", chinese_romanization: "xuānbù de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'implicit' means implied though not plainly expressed." +
        "<br><br>" +
        "(B) 'obvious' means easily perceived or understood; clear." +
        "<br><br>" +
        "(C) 'stated' means clearly expressed or identified." +
        "<br><br>" +
        "(D) 'declared' means openly asserted or announced.",
    chinese_explanation: "(A) '暗示的' 意味着虽然没有明说但已被暗示的。" +
        "<br><br>" +
        "(B) '明显的' 意味着容易感知或理解的；清楚的。" +
        "<br><br>" +
        "(C) '陈述的' 意味着清楚地表达或确定的。" +
        "<br><br>" +
        "(D) '宣布的' 意味着公开声明或宣布的。"
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
