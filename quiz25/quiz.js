// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Despite the economic downturn, the company remained __________, managing to stay profitable and optimistic about the future.",
        chinese_question: "尽管经济衰退，公司仍然保持 __________，设法保持盈利并对未来充满乐观。",
        answers: [
            { option: "A", answer: "pessimistic", chinese_answer: "悲观的", chinese_romanization: "bēiguān de" },
            { option: "B", answer: "buoyant", chinese_answer: "乐观的", chinese_romanization: "lèguān de" },
            { option: "C", answer: "despondent", chinese_answer: "沮丧的", chinese_romanization: "jǔsàng de" },
            { option: "D", answer: "stagnant", chinese_answer: "停滞的", chinese_romanization: "tíngzhì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'buoyant' means cheerful and optimistic." +
            "<br><br>" +
            "(A) 'pessimistic' means tending to see the worst aspect of things." +
            "<br><br>" +
            "(C) 'despondent' means in low spirits from loss of hope." +
            "<br><br>" +
            "(D) 'stagnant' means showing no activity or development.",
        chinese_explanation: "(B) '乐观的' 意味着愉快和乐观的。" +
            "<br><br>" +
            "(A) '悲观的' 意味着倾向于看到事物的最坏方面。" +
            "<br><br>" +
            "(C) '沮丧的' 意味着因失去希望而情绪低落的。" +
            "<br><br>" +
            "(D) '停滞的' 意味着没有活动或发展的。"
    },
    {
        id: 2,
    question: "The training program was found to be __________ in practical exercises, making it less effective for skill development.",
    chinese_question: "培训项目被发现 __________ 实际练习，使其在技能发展方面效果较差。",
    answers: [
        { option: "A", answer: "sufficient", chinese_answer: "足够的", chinese_romanization: "zúgòu de" },
        { option: "B", answer: "adequate", chinese_answer: "适当的", chinese_romanization: "shìdàng de" },
        { option: "C", answer: "deficient", chinese_answer: "缺乏的", chinese_romanization: "quēfá de" },
        { option: "D", answer: "complete", chinese_answer: "完整的", chinese_romanization: "wánzhěng de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'deficient' means lacking in some necessary quality or element." +
        "<br><br>" +
        "(A) 'sufficient' means enough; adequate." +
        "<br><br>" +
        "(B) 'adequate' means satisfactory or acceptable in quality or quantity." +
        "<br><br>" +
        "(D) 'complete' means having all the necessary or appropriate parts.",
    chinese_explanation: "(C) '缺乏的' 意味着缺乏某些必要的质量或要素。" +
        "<br><br>" +
        "(A) '足够的' 意味着足够的；充足的。" +
        "<br><br>" +
        "(B) '适当的' 意味着质量或数量令人满意或可以接受的。" +
        "<br><br>" +
        "(D) '完整的' 意味着拥有所有必要或适当的部分。"
    },
    {
        id: 3,
        question: "Her explanation of the theory was so __________ that only a few people in the audience could follow it.",
        chinese_question: "她对理论的解释如此 __________，以至于只有少数观众能理解。",
        answers: [
                { option: "A", answer: "concrete", chinese_answer: "具体的", chinese_romanization: "jùtǐ de" },
                { option: "B", answer: "detailed", chinese_answer: "详细的", chinese_romanization: "xiángxì de" },
                { option: "C", answer: "abstract", chinese_answer: "抽象的", chinese_romanization: "chōuxiàng de" },
                { option: "D", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'abstract' means existing in thought or as an idea but not having a physical or concrete existence." +
            "<br><br>" +
            "(A) 'concrete' means existing in a material or physical form; real or solid." +
            "<br><br>" +
            "(B) 'detailed' means having many details or facts; showing attention to detail." +
            "<br><br>" +
            "(D) 'simple' means easily understood or done; presenting no difficulty.",
        chinese_explanation: "(C) '抽象的' 一词意味着存在于思想中或作为一个概念而没有物质或具体的存在。" +
            "<br><br>" +
            "(A) '具体的' 意味着存在于物质或物理形式中的；真实的或坚固的。" +
            "<br><br>" +
            "(B) '详细的' 意味着有很多细节或事实的；显示出对细节的关注。" +
            "<br><br>" +
            "(D) '简单的' 意味着容易理解或完成；没有难度的。"
    },
    {
        id: 4,
    question: "The mediator's __________ approach helped to resolve the conflict peacefully, addressing both parties' concerns with care.",
    chinese_question: "调解员 __________ 的方法有助于和平解决冲突，细心地解决双方的关切。",
    answers: [
        { option: "A", answer: "abrasive", chinese_answer: "粗暴", chinese_romanization: "cūbào" },
        { option: "B", answer: "emollient", chinese_answer: "润肤剂", chinese_romanization: "rùnfū jì" },
        { option: "C", answer: "confrontational", chinese_answer: "对抗性", chinese_romanization: "duìkàng xìng" },
        { option: "D", answer: "aggressive", chinese_answer: "侵略性", chinese_romanization: "qīnlüè xìng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'emollient' means having the quality of softening or soothing." +
        "<br><br>" +
        "(A) 'abrasive' means showing little concern for the feelings of others; harsh." +
        "<br><br>" +
        "(C) 'confrontational' means tending to deal with situations in an aggressive way; hostile or argumentative." +
        "<br><br>" +
        "(D) 'aggressive' means ready or likely to attack or confront; characterized by or resulting from aggression.",
    chinese_explanation: "(B) '润肤剂'一词意味着具有软化或舒缓品质的物质。" +
        "<br><br>" +
        "(A) '粗暴' 意味着对他人的感受不太关心；粗糙的。" +
        "<br><br>" +
        "(C) '对抗性' 意味着倾向于以攻击性方式处理情况；敌对或争论的。" +
        "<br><br>" +
        "(D) '侵略性' 意味着准备或可能攻击或对抗的；由侵略引起的或表现出的。"
    },
    {
        id: 5,
    question: "The athlete's __________ performance was a clear sign of his recent illness.",
    chinese_question: "这位运动员的 __________ 表现清楚地表明了他最近的病情。",
    answers: [
        { option: "A", answer: "energetic", chinese_answer: "充满活力的", chinese_romanization: "chōngmǎn huólì de" },
        { option: "B", answer: "limp", chinese_answer: "无力的", chinese_romanization: "wúlì de" },
        { option: "C", answer: "vigorous", chinese_answer: "精力充沛的", chinese_romanization: "jīnglì chōngpèi de" },
        { option: "D", answer: "dynamic", chinese_answer: "动态的", chinese_romanization: "dòngtài de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'limp' means lacking strength or energy; weak." +
        "<br><br>" +
        "(A) 'energetic' means showing or involving great activity or vitality." +
        "<br><br>" +
        "(C) 'vigorous' means strong, healthy, and full of energy." +
        "<br><br>" +
        "(D) 'dynamic' means characterized by constant change, activity, or progress.",
    chinese_explanation: "(B) “无力的” 意味着缺乏力量或能量；虚弱的。" +
        "<br><br>" +
        "(A) '充满活力的' 意味着显示或涉及很大的活动或活力。" +
        "<br><br>" +
        "(C) '精力充沛的' 意味着强壮、健康且充满活力的。" +
        "<br><br>" +
        "(D) '动态的' 意味着具有不断变化、活动或进步的特点。"
    },
    {
        id: 6,
    question: "Her __________ enthusiasm for the project faded after a few weeks.",
    chinese_question: "她对这个项目的 __________ 热情在几周后消退了。",
    answers: [
        { option: "A", answer: "lasting", chinese_answer: "持久", chinese_romanization: "chíjiǔ" },
        { option: "B", answer: "temporary", chinese_answer: "暂时", chinese_romanization: "zànshí" },
        { option: "C", answer: "unwavering", chinese_answer: "坚定不移", chinese_romanization: "jiāndìng bù yí" },
        { option: "D", answer: "perpetual", chinese_answer: "永恒", chinese_romanization: "yǒnghéng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'temporary' means lasting for only a limited period of time." +
        "<br><br>" +
        "(A) 'lasting' means enduring over a long period of time." +
        "<br><br>" +
        "(C) 'unwavering' means steady or resolute." +
        "<br><br>" +
        "(D) 'perpetual' means never ending or changing.",
    chinese_explanation: "(B) “暂时” 意味着只持续一段有限的时间。" +
        "<br><br>" +
        "(A) '持久' 意味着能够在长时间内持续。" +
        "<br><br>" +
        "(C) '坚定不移' 意味着稳固或坚定。" +
        "<br><br>" +
        "(D) '永恒' 意味着永不结束或改变。"
    },
    {
        id: 7,
        question: "The artist's __________ talent became evident when her first exhibition received critical acclaim.",
        chinese_question: "这位艺术家的 __________ 才华在她的首次展览获得好评时变得显而易见。",
        answers: [
            { option: "A", answer: "hidden", chinese_answer: "隐藏的", chinese_romanization: "yǐncáng de" },
            { option: "B", answer: "nascent", chinese_answer: "初露头角的", chinese_romanization: "chūlù tóujiǎo de" },
            { option: "C", answer: "diminishing", chinese_answer: "减少的", chinese_romanization: "jiǎnshǎo de" },
            { option: "D", answer: "fading", chinese_answer: "逐渐消失的", chinese_romanization: "zhújiàn xiāoshī de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'nascent' means just coming into existence and beginning to display signs of future potential." +
            "<br><br>" +
            "(A) 'hidden' means kept out of sight; concealed." +
            "<br><br>" +
            "(C) 'diminishing' means becoming less." +
            "<br><br>" +
            "(D) 'fading' means gradually growing faint and disappearing.",
        chinese_explanation: "(B) '初露头角的' 意味着刚刚出现并开始显示未来潜力的。" +
            "<br><br>" +
            "(A) '隐藏的' 意味着隐藏的；隐蔽的。" +
            "<br><br>" +
            "(C) '减少的' 意味着变少的。" +
            "<br><br>" +
            "(D) '逐渐消失的' 意味着逐渐变得模糊并消失的。"
    },
    {
        id: 8,
        question: "Her __________ laughter filled the room with joy.",
        chinese_question: "她的__________笑声充满了整个房间，带来了欢乐。",
        answers: [
            { option: "A", answer: "forced", chinese_answer: "强迫的", chinese_romanization: "qiǎngpò de" },
            { option: "B", answer: "spontaneous", chinese_answer: "自发的", chinese_romanization: "zìfā de" },
            { option: "C", answer: "rehearsed", chinese_answer: "排练过的", chinese_romanization: "páiliàn guò de" },
            { option: "D", answer: "controlled", chinese_answer: "克制的", chinese_romanization: "kèzhì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'spontaneous' means performed or occurring as a result of a sudden inner impulse or inclination and without premeditation." +
            "<br><br>" +
            "(A) 'forced' means obtained or imposed by coercion or physical power." +
            "<br><br>" +
            "(C) 'rehearsed' means practiced or prepared in advance." +
            "<br><br>" +
            "(D) 'controlled' means not showing excessive emotion; having one's feelings under control.",
        chinese_explanation: "(B) '自发的'一词意味着由于突然的内心冲动或倾向而发生或表现出来，没有预先计划。" +
            "<br><br>" +
            "(A) '强迫的' 意味着通过强制或体力获得或施加的。" +
            "<br><br>" +
            "(C) '排练过的' 意味着提前练习或准备的。" +
            "<br><br>" +
            "(D) '克制的' 意味着不表现出过度的情感；控制自己的感情。"
    },
    {
        id: 9,
    question: "The project's budget was __________, requiring massive amounts of resources and time.",
    chinese_question: "这个项目的预算__________，需要大量的资源和时间。",
    answers: [
        { option: "A", answer: "tiny", chinese_answer: "微小的", chinese_romanization: "wēixiǎo de" },
        { option: "B", answer: "small", chinese_answer: "小的", chinese_romanization: "xiǎo de" },
        { option: "C", answer: "humongous", chinese_answer: "巨大的", chinese_romanization: "jùdà de" },
        { option: "D", answer: "minuscule", chinese_answer: "极小的", chinese_romanization: "jí xiǎo de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'humongous' means extremely large. Figuratively, it can mean requiring a lot of resources or effort." +
        "<br><br>" +
        "(A) 'tiny' means very small." +
        "<br><br>" +
        "(B) 'small' means of a size that is less than normal or usual." +
        "<br><br>" +
        "(D) 'minuscule' means extremely small.",
    chinese_explanation: "(C) '巨大的' 意味着非常大的。比喻地，它可以表示需要大量资源或努力的。" +
        "<br><br>" +
        "(A) '微小的' 意味着非常小的。" +
        "<br><br>" +
        "(B) '小的' 意味着尺寸小于正常或通常的。" +
        "<br><br>" +
        "(D) '极小的' 意味着极小的。"
    },
    {
        id: 10,
    question: "Her __________ claims about her qualifications were exposed when she couldn't perform the job duties she was hired for.",
    chinese_question: "她关于自己资历的 __________ 声称在她无法履行被聘用的工作职责时被揭穿了。",
    answers: [
        { option: "A", answer: "fraudulent", chinese_answer: "欺诈的", chinese_romanization: "qīzhà de" },
        { option: "B", answer: "credible", chinese_answer: "可信的", chinese_romanization: "kěxìn de" },
        { option: "C", answer: "trustworthy", chinese_answer: "可靠的", chinese_romanization: "kěkào de" },
        { option: "D", answer: "verifiable", chinese_answer: "可验证的", chinese_romanization: "kě yànzhèng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'fraudulent' means obtained, done by, or involving deception, especially criminal deception." +
        "<br><br>" +
        "(B) 'credible' means able to be believed; convincing." +
        "<br><br>" +
        "(C) 'trustworthy' means able to be relied on as honest or truthful." +
        "<br><br>" +
        "(D) 'verifiable' means able to be checked or demonstrated to be true, accurate, or justified.",
    chinese_explanation: "(A) '欺诈的' 意味着通过欺骗获得的、进行的或涉及的，尤其是刑事欺骗。" +
        "<br><br>" +
        "(B) '可信的' 意味着可以相信的；令人信服的。" +
        "<br><br>" +
        "(C) '可靠的' 意味着可以依赖的；诚实或真实的。" +
        "<br><br>" +
        "(D) '可验证的' 意味着可以检查或证明是真实、准确或合理的。"
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
