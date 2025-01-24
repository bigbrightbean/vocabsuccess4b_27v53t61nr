// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "During the heated debate, it was clear that the politician's __________ remarks were intended to undermine his opponent.",
        chinese_question: "在激烈的辩论中，显然政治家的 __________ 言论旨在削弱对手。",
        answers: [
                { option: "A", answer: "anonymous", chinese_answer: "匿名", chinese_romanization: "nìmíng" },
                { option: "B", answer: "antagonistic", chinese_answer: "对立", chinese_romanization: "duìlì" },
                { option: "C", answer: "amicable", chinese_answer: "友好", chinese_romanization: "yǒuhǎo" },
                { option: "D", answer: "anecdotal", chinese_answer: "轶事", chinese_romanization: "yìshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'antagonistic' means showing opposition or hostility." +
            "<br><br>" +
            "(A) 'anonymous' means not identified by name." +
            "<br><br>" +
            "(C) 'amicable' means friendly." +
            "<br><br>" +
            "(D) 'anecdotal' means based on personal accounts rather than facts or research.",
        chinese_explanation: "(B) '对立' 意味着表现出反对或敌意。" +
            "<br><br>" +
            "(A) '匿名' 意味着未透露姓名。" +
            "<br><br>" +
            "(C) '友好' 意味着友善的。" +
            "<br><br>" +
            "(D) '轶事' 意味着基于个人陈述而非事实或研究的。"
    },
    {
        id: 2,
        question: "The technology sector is particularly __________, with new advancements and innovations emerging every year.",
        chinese_question: "科技领域特别 __________，每年都有新的进步和创新出现。",
        answers: [
            { option: "A", answer: "immutable", chinese_answer: "不变的", chinese_romanization: "bù biàn de" },
            { option: "B", answer: "mutable", chinese_answer: "易变的", chinese_romanization: "yìbiàn de" },
            { option: "C", answer: "static", chinese_answer: "静态的", chinese_romanization: "jìngtài de" },
            { option: "D", answer: "constant", chinese_answer: "恒定的", chinese_romanization: "héngdìng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'mutable' means liable to change." +
            "<br><br>" +
            "(A) 'immutable' means unchanging over time or unable to be changed." +
            "<br><br>" +
            "(C) 'static' means lacking in movement, action, or change, especially in a way viewed as undesirable or uninteresting." +
            "<br><br>" +
            "(D) 'constant' means occurring continuously over a period of time.",
        chinese_explanation: "(B) '易变的' 意味着容易改变的。" +
            "<br><br>" +
            "(A) '不变的' 意味着随着时间的推移或无法改变的。" +
            "<br><br>" +
            "(C) '静态的' 意味着缺乏运动、行动或变化的，尤其是以一种被视为不受欢迎或无趣的方式。" +
            "<br><br>" +
            "(D) '恒定的' 意味着在一段时间内持续发生的。"
    },
    {
        id: 3,
        question: "The company's __________ progress on the project worried the investors.",
        chinese_question: "公司在项目上的 __________ 进展让投资者感到担忧。",
        answers: [
            { option: "A", answer: "brisk", chinese_answer: "轻快", chinese_romanization: "qīngkuài" },
            { option: "B", answer: "sluggish", chinese_answer: "缓慢", chinese_romanization: "huǎnmàn" },
            { option: "C", answer: "efficient", chinese_answer: "高效", chinese_romanization: "gāoxiào" },
            { option: "D", answer: "steady", chinese_answer: "稳定", chinese_romanization: "wěndìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sluggish' means slow-moving or inactive." +
            "<br><br>" +
            "(A) 'brisk' means active, fast, and energetic." +
            "<br><br>" +
            "(C) 'efficient' means achieving maximum productivity with minimum wasted effort or expense." +
            "<br><br>" +
            "(D) 'steady' means firmly fixed, supported, or balanced; not shaking or moving.",
        chinese_explanation: "(B) '缓慢' 一词意味着移动缓慢或不活跃。" +
            "<br><br>" +
            "(A) '轻快' 意味着活跃、快速且充满活力。" +
            "<br><br>" +
            "(C) '高效' 意味着以最少的浪费努力或费用实现最大生产力。" +
            "<br><br>" +
            "(D) '稳定' 意味着牢固固定、支撑或平衡；不摇晃或移动。"
    },
    {
        id: 4,
    question: "The startup's growth has been __________, doubling its revenue every quarter since its inception.",
    chinese_question: "这家初创公司的增长非常 __________，自成立以来每季度的收入都翻了一番。",
    answers: [
        { option: "A", answer: "phenomenal", chinese_answer: "了不起的", chinese_romanization: "liǎobuqǐ de" },
        { option: "B", answer: "stagnant", chinese_answer: "停滞的", chinese_romanization: "tíngzhì de" },
        { option: "C", answer: "minimal", chinese_answer: "最小的", chinese_romanization: "zuìxiǎo de" },
        { option: "D", answer: "slow", chinese_answer: "缓慢的", chinese_romanization: "huǎnmàn de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'phenomenal' means very remarkable; extraordinary." +
        "<br><br>" +
        "(B) 'stagnant' means showing no activity; dull and sluggish." +
        "<br><br>" +
        "(C) 'minimal' means of a minimum amount, quantity, or degree." +
        "<br><br>" +
        "(D) 'slow' means moving or operating, or designed to do so, only at a low speed; not quick or fast.",
    chinese_explanation: "(A) '了不起的' 意味着非常显著的；非凡的。" +
        "<br><br>" +
        "(B) '停滞的' 意味着没有活动的；迟钝和懒散的。" +
        "<br><br>" +
        "(C) '最小的' 意味着数量、数量或程度的最小。" +
        "<br><br>" +
        "(D) '缓慢的' 意味着移动或操作速度低的；不快的。"
    },
    {
        id: 5,
    question: "Her __________ response to the child's mistake showed her understanding and patience, helping the child learn from the error without feeling ashamed.",
    chinese_question: "她对孩子错误的 __________ 反应表现了她的理解和耐心，帮助孩子从错误中吸取教训而不感到羞愧。",
    answers: [
        { option: "A", answer: "merciful", chinese_answer: "仁慈的", chinese_romanization: "réncí de" },
        { option: "B", answer: "unforgiving", chinese_answer: "不宽恕的", chinese_romanization: "bù kuānshù de" },
        { option: "C", answer: "critical", chinese_answer: "批评的", chinese_romanization: "pīpíng de" },
        { option: "D", answer: "punitive", chinese_answer: "惩罚的", chinese_romanization: "chéngfá de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'merciful' means showing or exercising mercy." +
        "<br><br>" +
        "(B) 'unforgiving' means not willing to forgive or excuse people's faults or wrongdoings." +
        "<br><br>" +
        "(C) 'critical' means expressing adverse or disapproving comments or judgments." +
        "<br><br>" +
        "(D) 'punitive' means inflicting or intended as punishment.",
    chinese_explanation: "(A) '仁慈的' 意味着表现出或行使仁慈。" +
        "<br><br>" +
        "(B) '不宽恕的' 意味着不愿原谅或原谅他人的过错或错误行为。" +
        "<br><br>" +
        "(C) '批评的' 意味着表达反对或不赞成的评论或判断。" +
        "<br><br>" +
        "(D) '惩罚的' 意味着施加或打算作为惩罚的。"
    },
    {
        id: 6,
    question: "The __________ student hesitated before raising her hand to answer the question, afraid of making a mistake.",
    chinese_question: "这位 __________ 的学生在举手回答问题之前犹豫了，害怕出错。",
    answers: [
        { option: "A", answer: "bold", chinese_answer: "大胆的", chinese_romanization: "dàdǎn de" },
        { option: "B", answer: "daring", chinese_answer: "勇敢的", chinese_romanization: "yǒnggǎn de" },
        { option: "C", answer: "timorous", chinese_answer: "胆怯的", chinese_romanization: "dǎnqiè de" },
        { option: "D", answer: "audacious", chinese_answer: "无畏的", chinese_romanization: "wúwèi de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'timorous' means showing or suffering from nervousness, fear, or a lack of confidence." +
        "<br><br>" +
        "(A) 'bold' means showing a willingness to take risks; confident and courageous." +
        "<br><br>" +
        "(B) 'daring' means adventurous or audaciously bold." +
        "<br><br>" +
        "(D) 'audacious' means showing a willingness to take surprisingly bold risks.",
    chinese_explanation: "(C) '胆怯的' 意味着表现出或因紧张、恐惧或缺乏信心而受苦。" +
        "<br><br>" +
        "(A) '大胆的' 意味着愿意冒险的；自信和勇敢的。" +
        "<br><br>" +
        "(B) '勇敢的' 意味着冒险或大胆无畏的。" +
        "<br><br>" +
        "(D) '无畏的' 意味着表现出愿意采取惊人大胆的风险。"
    },
    {
        id: 7,
    question: "The __________ value of art lies not just in its aesthetic appeal, but in the emotions and thoughts it evokes.",
    chinese_question: "艺术的 __________ 价值不仅在于它的美学吸引力，还在于它唤起的情感和思考。",
    answers: [
        { option: "A", answer: "intrinsic", chinese_answer: "内在的", chinese_romanization: "nèizài de" },
        { option: "B", answer: "extrinsic", chinese_answer: "外在的", chinese_romanization: "wàizài de" },
        { option: "C", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" },
        { option: "D", answer: "peripheral", chinese_answer: "周边的", chinese_romanization: "zhōubiān de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'intrinsic' means belonging naturally; essential." +
        "<br><br>" +
        "(B) 'extrinsic' means not part of the essential nature of someone or something; coming or operating from outside." +
        "<br><br>" +
        "(C) 'superficial' means existing or occurring at or on the surface." +
        "<br><br>" +
        "(D) 'peripheral' means relating to or situated on the edge or periphery of something.",
    chinese_explanation: "(A) '内在的' 意味着本质上属于的；必要的。" +
        "<br><br>" +
        "(B) '外在的' 意味着不是某人或某物本质的一部分；来自或在外部运作的。" +
        "<br><br>" +
        "(C) '表面的' 意味着存在或发生在表面上的。" +
        "<br><br>" +
        "(D) '周边的' 意味着与某物的边缘或外围相关的。"
    },
    {
        id: 8,
        question: "His __________ fascination with the details of the crime scene made everyone uncomfortable.",
        chinese_question: "他对犯罪现场细节的 __________ 迷恋让所有人都感到不安。",
        answers: [
            { option: "A", answer: "healthy", chinese_answer: "健康的", chinese_romanization: "jiànkāng de" },
            { option: "B", answer: "ghoulish", chinese_answer: "恐怖的", chinese_romanization: "kǒngbù de" },
            { option: "C", answer: "casual", chinese_answer: "随意的", chinese_romanization: "suíyì de" },
            { option: "D", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbùguānxīn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'ghoulish' means morbidly interested in death or disaster; gruesome." +
            "<br><br>" +
            "(A) 'healthy' means in good health." +
            "<br><br>" +
            "(C) 'casual' means relaxed and unconcerned." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(B) '恐怖的' 意味着对死亡或灾难有病态兴趣的；可怕的。" +
            "<br><br>" +
            "'健康的' 意味着身体健康的。" +
            "<br><br>" +
            "'随意的' 意味着放松和不担忧的。" +
            "<br><br>" +
            "'漠不关心的' 意味着没有特别兴趣或同情；不关心的。"
    },
    {
        id: 9,
        question: "The __________ competition between the two companies led to aggressive marketing strategies.",
        chinese_question: "两家公司之间的 __________ 竞争导致了激进的营销策略。",
        answers: [
            { option: "A", answer: "friendly", chinese_answer: "友好的", chinese_romanization: "yǒuhǎo de" },
            { option: "B", answer: "cooperative", chinese_answer: "合作的", chinese_romanization: "hézuò de" },
            { option: "C", answer: "ferocious", chinese_answer: "凶猛的", chinese_romanization: "xiōngměng de" },
            { option: "D", answer: "mild", chinese_answer: "温和的", chinese_romanization: "wēnhé de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ferocious' means savagely fierce, cruel, or violent." +
            "<br><br>" +
            "(A) 'friendly' means kind and pleasant." +
            "<br><br>" +
            "(B) 'cooperative' means involving mutual assistance in working toward a common goal." +
            "<br><br>" +
            "(D) 'mild' means not severe, serious, or harsh.",
        chinese_explanation: "(C) '凶猛的' 意味着非常凶猛、残忍或暴力的。" +
            "<br><br>" +
            "'友好的' 意味着友好和愉快的。" +
            "<br><br>" +
            "'合作的' 意味着在共同目标上相互协助的。" +
            "<br><br>" +
            "'温和的' 意味着不严厉、严重或苛刻的。"
    },
    {
        id: 10,
    question: "Her __________ reputation made her the ideal candidate for the top position of the organization.",
    chinese_question: "她 __________ 的声誉使她成为该组织最高职位的理想候选人。",
    answers: [
        { option: "A", answer: "tarnished", chinese_answer: "玷污的", chinese_romanization: "diànwū de" },
        { option: "B", answer: "immaculate", chinese_answer: "完美无瑕的", chinese_romanization: "wánměi wúxiá de" },
        { option: "C", answer: "questionable", chinese_answer: "可疑的", chinese_romanization: "kěyí de" },
        { option: "D", answer: "flawed", chinese_answer: "有缺陷的", chinese_romanization: "yǒu quēxiàn de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'immaculate' means free from flaws or mistakes; perfect." +
        "<br><br>" +
        "(A) 'tarnished' means having lost its luster, especially as a result of exposure to air or moisture." +
        "<br><br>" +
        "(C) 'questionable' means doubtful as regards truth or quality." +
        "<br><br>" +
        "(D) 'flawed' means blemished, damaged, or imperfect in some way.",
    chinese_explanation: "(B) '完美无瑕的' 意味着没有缺陷或错误；完美的。" +
        "<br><br>" +
        "(A) '玷污的' 意味着失去光泽，特别是由于暴露在空气或潮湿中。" +
        "<br><br>" +
        "(C) '可疑的' 意味着对真相或质量有怀疑。" +
        "<br><br>" +
        "(D) '有缺陷的' 意味着在某种程度上有瑕疵、损坏或不完美。"
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
