// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "He made a __________ mistake that cost the company millions of dollars.",
        chinese_question: "他犯了一个 __________ 的错误，给公司造成了数百万美元的损失。",
        answers: [
            { option: "A", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" },
            { option: "B", answer: "insignificant", chinese_answer: "不重要的", chinese_romanization: "bù zhòngyào de" },
            { option: "C", answer: "mortal", chinese_answer: "致命的", chinese_romanization: "zhìmìng de" },
            { option: "D", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'mortal' means causing or liable to cause death; very serious." +
            "<br><br>" +
            "(A) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(B) 'insignificant' means too small or unimportant to be worth considering." +
            "<br><br>" +
            "(D) 'trivial' means of little value or importance.",
        chinese_explanation: "(C) '致命的' 意味着引起或可能引起死亡的；非常严重的。" +
            "<br><br>" +
            "(A) '次要的' 意味着在重要性、严重性或意义上较小的。" +
            "<br><br>" +
            "(B) '不重要的' 意味着太小或不重要，不值得考虑的。" +
            "<br><br>" +
            "(D) '琐碎的' 意味着价值或重要性很小的。"
    },
    {
        id: 2,
    question: "Her __________ approach to politics inspired many young people, even though some criticized her for being out of touch with reality.",
    chinese_question: "她对政治的 __________ 态度激励了许多年轻人，尽管有人批评她脱离现实。",
    answers: [
        { option: "A", answer: "idealistic", chinese_answer: "理想主义的", chinese_romanization: "lǐxiǎng zhǔyì de" },
        { option: "B", answer: "pragmatic", chinese_answer: "务实的", chinese_romanization: "wùshí de" },
        { option: "C", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
        { option: "D", answer: "apathetic", chinese_answer: "无动于衷的", chinese_romanization: "wúdòng yú zhōng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'idealistic' means characterized by idealism; unrealistically aiming for perfection." +
        "<br><br>" +
        "(B) 'pragmatic' means dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations." +
        "<br><br>" +
        "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
        "<br><br>" +
        "(D) 'apathetic' means showing or feeling no interest, enthusiasm, or concern.",
    chinese_explanation: "(A) '理想主义的' 意味着以理想主义为特征的；不切实际地追求完美。" +
        "<br><br>" +
        "(B) '务实的' 意味着以明智和实际的方式处理事情，基于实际而非理论考虑。" +
        "<br><br>" +
        "(C) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。" +
        "<br><br>" +
        "(D) '无动于衷的' 意味着没有兴趣、热情或关心的。"
    },
    {
        id: 3,
        question: "Their __________ meetings were held in secret to avoid detection by the authorities.",
        chinese_question: "他们的 __________ 会议是秘密举行的，以避免被当局发现。",
        answers: [
            { option: "A", answer: "public", chinese_answer: "公开的", chinese_romanization: "gōngkāi de" },
            { option: "B", answer: "transparent", chinese_answer: "透明的", chinese_romanization: "tòumíng de" },
            { option: "C", answer: "surreptitious", chinese_answer: "秘密的", chinese_romanization: "mìmì de" },
            { option: "D", answer: "open", chinese_answer: "开放的", chinese_romanization: "kāifàng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'surreptitious' means kept secret, especially because it would not be approved of." +
            "<br><br>" +
            "(A) 'public' means open to or shared by all the people of an area or country." +
            "<br><br>" +
            "(B) 'transparent' means allowing light to pass through so that objects behind can be distinctly seen." +
            "<br><br>" +
            "(D) 'open' means allowing access, passage, or a view through an empty space; not closed or blocked up.",
        chinese_explanation: "(C) '秘密的' 一词意味着保密的，特别是因为不被批准。" +
            "<br><br>" +
            "(A) '公开的' 意味着对某个地区或国家的所有人开放或共享的。" +
            "<br><br>" +
            "(B) '透明的' 意味着允许光线通过以便可以清晰地看到后面的物体。" +
            "<br><br>" +
            "(D) '开放的' 意味着允许通过空地的通道或视野；未关闭或未堵塞。"
    },
    {
        id: 4,
    question: "As the __________ heir, he inherited the entire estate without any disputes.",
    chinese_question: "作为 __________ 继承人，他毫无争议地继承了整个遗产。",
    answers: [
        { option: "A", answer: "sole", chinese_answer: "唯一", chinese_romanization: "wéiyī" },
        { option: "B", answer: "collective", chinese_answer: "集体", chinese_romanization: "jítǐ" },
        { option: "C", answer: "partial", chinese_answer: "部分", chinese_romanization: "bùfèn" },
        { option: "D", answer: "minor", chinese_answer: "次要", chinese_romanization: "cìyào" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'sole' means being the only one." +
        "<br><br>" +
        "(B) 'collective' means done by people acting as a group." +
        "<br><br>" +
        "(C) 'partial' means existing only in part; incomplete." +
        "<br><br>" +
        "(D) 'minor' means lesser in importance, seriousness, or significance.",
    chinese_explanation: "(A) '唯一' 意味着是唯一的一个。" +
        "<br><br>" +
        "(B) '集体' 意味着由人们集体行动完成的。" +
        "<br><br>" +
        "(C) '部分' 意味着仅部分存在的；不完整的。" +
        "<br><br>" +
        "(D) '次要' 意味着重要性、严重性或意义较小。"
    },
    {
        id: 5,
    question: "Despite his __________ role in the company, he was well-respected by all employees.",
    chinese_question: "尽管他在公司中的角色 __________，但他仍受到所有员工的尊敬。",
    answers: [
        { option: "A", answer: "insignificant", chinese_answer: "无关紧要", chinese_romanization: "wúguān jǐnyào" },
        { option: "B", answer: "inconsiderable", chinese_answer: "微不足道", chinese_romanization: "wēibùzúdào" },
        { option: "C", answer: "pivotal", chinese_answer: "关键", chinese_romanization: "guānjiàn" },
        { option: "D", answer: "crucial", chinese_answer: "至关重要", chinese_romanization: "zhìguān zhòngyào" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'inconsiderable' means too small or unimportant to be worth consideration." +
        "<br><br>" +
        "(A) 'insignificant' means too small or unimportant to be worth consideration." +
        "<br><br>" +
        "(C) 'pivotal' means of crucial importance." +
        "<br><br>" +
        "(D) 'crucial' means decisive or critical, especially in the success or failure of something.",
    chinese_explanation: "(B) “微不足道” 意味着小到不值得考虑。" +
        "<br><br>" +
        "(A) '无关紧要' 意味着小到不值得考虑。" +
        "<br><br>" +
        "(C) '关键' 意味着至关重要。" +
        "<br><br>" +
        "(D) '至关重要' 意味着决定性的或关键的，特别是在某事的成功或失败中。"
    },
    {
        id: 6,
        question: "He felt __________ after losing his job, struggling to find a sense of purpose and direction.",
        chinese_question: "失业后，他感到 __________，难以找到目标和方向。",
        answers: [
            { option: "A", answer: "elated", chinese_answer: "兴高采烈的", chinese_romanization: "xìnggāocǎiliè de" },
            { option: "B", answer: "joyous", chinese_answer: "快乐的", chinese_romanization: "kuàilè de" },
            { option: "C", answer: "wretched", chinese_answer: "悲惨的", chinese_romanization: "bēicǎn de" },
            { option: "D", answer: "ecstatic", chinese_answer: "狂喜的", chinese_romanization: "kuángxǐ de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'wretched' means in a very unhappy or unfortunate state." +
            "<br><br>" +
            "(A) 'elated' means ecstatically happy." +
            "<br><br>" +
            "(B) 'joyous' means full of happiness and joy." +
            "<br><br>" +
            "(D) 'ecstatic' means feeling or expressing overwhelming happiness or joyful excitement.",
        chinese_explanation: "(C) '悲惨的' 意味着处于非常不幸福或不幸的状态。" +
            "<br><br>" +
            "(A) '兴高采烈的' 意味着狂喜的。" +
            "<br><br>" +
            "(B) '快乐的' 意味着充满幸福和快乐的。" +
            "<br><br>" +
            "(D) '狂喜的' 意味着感到或表现出极度的幸福或愉快的兴奋。"
    },
    {
        id: 7,
        question: "Her __________ remarks during the debate kept the audience engaged and entertained, showcasing her quick thinking and lively personality.",
        chinese_question: "她在辩论中的 __________ 言论使观众保持了兴趣和娱乐性，展现了她的快速思维和活泼个性。",
        answers: [
            { option: "A", answer: "dull", chinese_answer: "沉闷的", chinese_romanization: "chénmèn de" },
            { option: "B", answer: "zippy", chinese_answer: "机敏的", chinese_romanization: "jīmǐn de" },
            { option: "C", answer: "monotonous", chinese_answer: "单调的", chinese_romanization: "dāndiào de" },
            { option: "D", answer: "boring", chinese_answer: "无聊的", chinese_romanization: "wúliáo de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'zippy' means bright, fresh, or lively; energetic and fast-moving." +
            "<br><br>" +
            "(A) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(C) 'monotonous' means dull, tedious, and repetitious; lacking in variety and interest." +
            "<br><br>" +
            "(D) 'boring' means not interesting; tedious.",
        chinese_explanation: "(B) '机敏的' 意味着明亮、新鲜或活泼；精力充沛且快速移动的。" +
            "<br><br>" +
            "(A) '沉闷的' 意味着缺乏兴趣或兴奋。" +
            "<br><br>" +
            "(C) '单调的' 意味着沉闷、乏味和重复；缺乏变化和兴趣。" +
            "<br><br>" +
            "(D) '无聊的' 意味着不有趣的；乏味的。"
    },
    {
        id: 8,
        question: "His __________ behavior made it difficult for anyone to trust him, as he often betrayed his friends.",
        chinese_question: "他的 __________ 行为使得任何人都难以信任他，因为他经常背叛朋友。",
        answers: [
            { option: "A", answer: "trustworthy", chinese_answer: "可信", chinese_romanization: "kěxìn" },
            { option: "B", answer: "honest", chinese_answer: "诚实", chinese_romanization: "chéngshí" },
            { option: "C", answer: "reliable", chinese_answer: "可靠", chinese_romanization: "kěkào" },
            { option: "D", answer: "treacherous", chinese_answer: "背信弃义", chinese_romanization: "bèixìn qìyì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'treacherous' means guilty of or involving betrayal or deception." +
            "<br><br>" +
            "(A) 'trustworthy' means able to be relied on as honest or truthful." +
            "<br><br>" +
            "(B) 'honest' means free of deceit; truthful and sincere." +
            "<br><br>" +
            "(C) 'reliable' means consistently good in quality or performance; able to be trusted.",
        chinese_explanation: "(D) '背信弃义' 意味着有罪或涉及背叛或欺骗。" +
            "<br><br>" +
            "(A) '可信' 意味着能够被依赖为诚实或真实。" +
            "<br><br>" +
            "(B) '诚实' 意味着没有欺骗；诚实和真诚。" +
            "<br><br>" +
            "(C) '可靠' 意味着质量或性能始终如一；能够被信任。"
    },
    {
        id: 9,
    question: "The company's __________ strategy has led to its steady growth over the years.",
    chinese_question: "公司的 __________ 策略使其多年来稳步增长。",
    answers: [
        { option: "A", answer: "mature", chinese_answer: "成熟", chinese_romanization: "chéngshú" },
        { option: "B", answer: "reckless", chinese_answer: "鲁莽", chinese_romanization: "lǔmǎng" },
        { option: "C", answer: "short-sighted", chinese_answer: "目光短浅", chinese_romanization: "mùguāng duǎnqiǎn" },
        { option: "D", answer: "naive", chinese_answer: "天真", chinese_romanization: "tiānzhēn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'mature' means based on careful thought and showing good judgment." +
        "<br><br>" +
        "(B) 'reckless' means heedless of danger or the consequences of one's actions." +
        "<br><br>" +
        "(C) 'short-sighted' means lacking imagination or foresight." +
        "<br><br>" +
        "(D) 'naive' means showing a lack of experience, wisdom, or judgment.",
    chinese_explanation: "(A) '成熟' 意味着基于深思熟虑并表现出良好的判断力。" +
        "<br><br>" +
        "(B) '鲁莽' 意味着不顾危险或行为后果。" +
        "<br><br>" +
        "(C) '目光短浅' 意味着缺乏想象力或远见。" +
        "<br><br>" +
        "(D) '天真' 意味着缺乏经验、智慧或判断力。"
    },
    {
        id: 10,
        question: "The __________ activities of the criminal organization were finally exposed by the police.",
        chinese_question: "犯罪组织的 __________ 活动终于被警方揭露了。",
        answers: [
            { option: "A", answer: "honorable", chinese_answer: "光荣的", chinese_romanization: "guāngróng de" },
            { option: "B", answer: "virtuous", chinese_answer: "有道德的", chinese_romanization: "yǒu dàodé de" },
            { option: "C", answer: "nefarious", chinese_answer: "邪恶的", chinese_romanization: "xié'è de" },
            { option: "D", answer: "ethical", chinese_answer: "伦理的", chinese_romanization: "lúnlǐ de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'nefarious' means (typically of an action or activity) wicked or criminal." +
            "<br><br>" +
            "(A) 'honorable' means bringing or worthy of honor." +
            "<br><br>" +
            "(B) 'virtuous' means having or showing high moral standards." +
            "<br><br>" +
            "(D) 'ethical' means relating to moral principles or the branch of knowledge dealing with these.",
        chinese_explanation: "(C) '邪恶的' 意味着（通常指行为或活动）邪恶或犯罪的。" +
            "<br><br>" +
            "(A) '光荣的' 意味着带来或值得荣誉的。" +
            "<br><br>" +
            "(B) '有道德的' 意味着有或表现出高道德标准的。" +
            "<br><br>" +
            "(D) '伦理的' 意味着与道德原则或与这些有关的知识分支有关的。"
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
