// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The politician's __________ statements made it difficult to determine his stance on the issue.",
        chinese_question: "这位政治家的 __________ 陈述使得很难确定他对这个问题的立场。",
        answers: [
            { option: "A", answer: "direct", chinese_answer: "直接的", chinese_romanization: "zhíjiē de" },
            { option: "B", answer: "transparent", chinese_answer: "透明的", chinese_romanization: "tòumíng de" },
            { option: "C", answer: "opaque", chinese_answer: "不透明的", chinese_romanization: "bù tòumíng de" },
            { option: "D", answer: "unequivocal", chinese_answer: "毫不含糊的", chinese_romanization: "háo bù hánhu de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'opaque' means not transparent; hard to understand or explain." +
            "<br><br>" +
            "(A) 'direct' means straightforward and honest." +
            "<br><br>" +
            "(B) 'transparent' means easy to perceive or detect." +
            "<br><br>" +
            "(D) 'unequivocal' means leaving no doubt; unambiguous.",
        chinese_explanation: "(C) '不透明的' 意味着不透明的；难以理解或解释的。" +
            "<br><br>" +
            "(A) '直接的' 意味着直截了当和诚实的。" +
            "<br><br>" +
            "(B) '透明的' 意味着容易感知或检测的。" +
            "<br><br>" +
            "(D) '毫不含糊的' 意味着毫无疑问的；明确的。"
    },
    {
        id: 2,
        question: "His __________ excuse for being late did not convince his boss, who expected a more valid reason.",
        chinese_question: "他 __________ 的迟到借口没有说服他的老板，老板期望一个更合理的理由。",
        answers: [
            { option: "A", answer: "compelling", chinese_answer: "令人信服的", chinese_romanization: "lìng rén xìnfú de" },
            { option: "B", answer: "feeble", chinese_answer: "无力的", chinese_romanization: "wúlì de" },
            { option: "C", answer: "persuasive", chinese_answer: "有说服力的", chinese_romanization: "yǒu shuōfúlì de" },
            { option: "D", answer: "credible", chinese_answer: "可信的", chinese_romanization: "kěxìn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'feeble' means lacking strength of character or effectiveness." +
            "<br><br>" +
            "(A) 'compelling' means evoking interest, attention, or admiration in a powerfully irresistible way." +
            "<br><br>" +
            "(C) 'persuasive' means good at persuading someone to do or believe something through reasoning or the use of temptation." +
            "<br><br>" +
            "(D) 'credible' means able to be believed; convincing.",
        chinese_explanation: "(B) '无力的' 意味着缺乏性格力量或有效性。" +
            "<br><br>" +
            "'令人信服的' 意味着以一种强烈不可抗拒的方式引起兴趣、注意或钦佩的。" +
            "<br><br>" +
            "'有说服力的' 意味着通过推理或使用诱惑使某人做某事或相信某事的能力。" +
            "<br><br>" +
            "'可信的' 意味着能够被相信的；令人信服的。"
    },
    {
        id: 3,
    question: "She felt __________ when she received the news of her promotion, her joy evident to everyone around her.",
    chinese_question: "她收到晋升消息时感到 __________，她的喜悦对周围的每个人都显而易见。",
    answers: [
        { option: "A", answer: "gleeful", chinese_answer: "快乐的", chinese_romanization: "kuàilè de" },
        { option: "B", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mò bù guānxīn de" },
        { option: "C", answer: "unenthusiastic", chinese_answer: "缺乏热情的", chinese_romanization: "quēfá rèqíng de" },
        { option: "D", answer: "disinterested", chinese_answer: "不感兴趣的", chinese_romanization: "bù gǎn xìngqù de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'gleeful' means exuberantly or triumphantly joyful." +
        "<br><br>" +
        "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
        "<br><br>" +
        "(C) 'unenthusiastic' means not having or showing enthusiasm." +
        "<br><br>" +
        "(D) 'disinterested' means not influenced by considerations of personal advantage.",
    chinese_explanation: "(A) '快乐的' 意味着兴高采烈或胜利地快乐。" +
        "<br><br>" +
        "(B) '漠不关心的' 意味着没有特别的兴趣或同情；不关心的。" +
        "<br><br>" +
        "(C) '缺乏热情的' 意味着没有表现出热情的。" +
        "<br><br>" +
        "(D) '不感兴趣的' 意味着不受个人利益考虑影响的。"
    },
    {
        id: 4,
    question: "The farewell speech was __________, leaving everyone in the room moved by his genuine gratitude and fond memories.",
    chinese_question: "告别演讲 __________，让房间里的每个人都被他的真挚感激和美好回忆所感动。",
    answers: [
        { option: "A", answer: "heartfelt", chinese_answer: "真诚的", chinese_romanization: "zhēnchéng de" },
        { option: "B", answer: "perfunctory", chinese_answer: "敷衍的", chinese_romanization: "fūyǎn de" },
        { option: "C", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" },
        { option: "D", answer: "detached", chinese_answer: "超然的", chinese_romanization: "chāorán de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'heartfelt' means deeply and sincerely felt." +
        "<br><br>" +
        "(B) 'perfunctory' means carried out with a minimum of effort or reflection." +
        "<br><br>" +
        "(C) 'superficial' means existing or occurring at or on the surface." +
        "<br><br>" +
        "(D) 'detached' means separate or disconnected.",
    chinese_explanation: "(A) '真诚的' 意味着深切且真挚的感受。" +
        "<br><br>" +
        "(B) '敷衍的' 意味着以最小的努力或反思进行的。" +
        "<br><br>" +
        "(C) '表面的' 意味着存在或发生在表面上的。" +
        "<br><br>" +
        "(D) '超然的' 意味着分离或断开的。"
    },
    {
        id: 5,
        question: "Her __________ display of wealth, including diamond-studded accessories and designer clothes, often made others uncomfortable.",
        chinese_question: "她 __________ 地炫耀财富，包括镶满钻石的配饰和名牌服装，常常让别人感到不舒服。",
        answers: [
                { option: "A", answer: "humble", chinese_answer: "谦逊的", chinese_romanization: "qiānxùn de" },
                { option: "B", answer: "modest", chinese_answer: "朴素的", chinese_romanization: "pǔsù de" },
                { option: "C", answer: "ostentatious", chinese_answer: "炫耀的", chinese_romanization: "xuànyào de" },
                { option: "D", answer: "understated", chinese_answer: "低调的", chinese_romanization: "dīdiào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ostentatious' means characterized by vulgar or pretentious display; designed to impress or attract notice." +
            "<br><br>" +
            "(A) 'humble' means having or showing a modest or low estimate of one's own importance." +
            "<br><br>" +
            "(B) 'modest' means unassuming or moderate in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(D) 'understated' means presented or expressed in a subtle and effective way.",
        chinese_explanation: "(C) '炫耀的' 一词意味着以粗俗或虚荣的展示为特征；旨在给人留下深刻印象或引起注意。" +
            "<br><br>" +
            "(A) '谦逊的' 意味着对自己重要性的谦虚或低估。" +
            "<br><br>" +
            "(B) '朴素的' 意味着对自己能力或成就持谦虚或适度估计的。" +
            "<br><br>" +
            "(D) '低调的' 意味着以微妙而有效的方式呈现或表达的。"
    },
    {
        id: 6,
    question: "The speaker offered __________ praise for the team’s hard work, highlighting their dedication and achievements.",
    chinese_question: "演讲者对团队的辛勤工作给予了 __________ 的赞扬，突出了他们的奉献精神和成就。",
    answers: [
        { option: "A", answer: "profuse", chinese_answer: "丰富的", chinese_romanization: "fēngfù de" },
        { option: "B", answer: "minimal", chinese_answer: "最少的", chinese_romanization: "zuìshǎo de" },
        { option: "C", answer: "reserved", chinese_answer: "保留的", chinese_romanization: "bǎoliú de" },
        { option: "D", answer: "moderate", chinese_answer: "适度的", chinese_romanization: "shìdù de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'profuse' means plentiful; abundant." +
        "<br><br>" +
        "(B) 'minimal' means of a minimum amount, quantity, or degree." +
        "<br><br>" +
        "(C) 'reserved' means slow to reveal emotion or opinions." +
        "<br><br>" +
        "(D) 'moderate' means average in amount, intensity, quality, or degree.",
    chinese_explanation: "(A) '丰富的' 意味着充足的；丰富的。" +
        "<br><br>" +
        "(B) '最少的' 意味着数量、数量或程度的最小。" +
        "<br><br>" +
        "(C) '保留的' 意味着慢于表达情感或意见的。" +
        "<br><br>" +
        "(D) '适度的' 意味着数量、强度、质量或程度上的平均。"
    },
    {
        id: 7,
    question: "Her __________ attempts to join the conversation were met with polite but firm resistance.",
    chinese_question: "她 __________ 想加入谈话的尝试得到了礼貌但坚定的抵制。",
    answers: [
        { option: "A", answer: "reluctant", chinese_answer: "不情愿的", chinese_romanization: "bù qíngyuàn de" },
        { option: "B", answer: "importunate", chinese_answer: "纠缠不休的", chinese_romanization: "jiūchán bùxiū de" },
        { option: "C", answer: "enthusiastic", chinese_answer: "热情的", chinese_romanization: "rèqíng de" },
        { option: "D", answer: "dismissive", chinese_answer: "不屑一顾的", chinese_romanization: "bùxiè yīgù de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'importunate' used figuratively means persistently demanding or annoying." +
        "<br><br>" +
        "(A) 'reluctant' means unwilling and hesitant." +
        "<br><br>" +
        "(C) 'enthusiastic' means having or showing intense and eager enjoyment, interest, or approval." +
        "<br><br>" +
        "(D) 'dismissive' means feeling or showing that something is unworthy of consideration.",
    chinese_explanation: "(B) '纠缠不休的' 在比喻意义上指坚持不断地要求或令人恼火。" +
        "<br><br>" +
        "(A) '不情愿的' 意味着不愿意和犹豫。" +
        "<br><br>" +
        "(C) '热情的' 意味着表现出强烈且急切的享受、兴趣或赞同。" +
        "<br><br>" +
        "(D) '不屑一顾的' 意味着认为某事不值得考虑。"
    },
    {
        id: 8,
    question: "The peace agreement brought a __________ respite from the violence, but tensions remained high.",
    chinese_question: "和平协议带来了 __________ 的暴力喘息，但紧张局势依然存在。",
    answers: [
        { option: "A", answer: "lasting", chinese_answer: "持久", chinese_romanization: "chíjiǔ" },
        { option: "B", answer: "permanent", chinese_answer: "永久", chinese_romanization: "yǒngjiǔ" },
        { option: "C", answer: "temporary", chinese_answer: "暂时", chinese_romanization: "zànshí" },
        { option: "D", answer: "durable", chinese_answer: "耐用", chinese_romanization: "nàiyòng" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'temporary' means lasting for only a limited period of time." +
        "<br><br>" +
        "(A) 'lasting' means enduring over a long period of time." +
        "<br><br>" +
        "(B) 'permanent' means lasting or intended to last indefinitely." +
        "<br><br>" +
        "(D) 'durable' means able to withstand wear, pressure, or damage.",
    chinese_explanation: "(C) “暂时” 意味着只持续一段有限的时间。" +
        "<br><br>" +
        "(A) '持久' 意味着能够在长时间内持续。" +
        "<br><br>" +
        "(B) '永久' 意味着持久或打算无限期持续。" +
        "<br><br>" +
        "(D) '耐用' 意味着能够承受磨损、压力或损害。"
    },
    {
        id: 9,
        question: "The traditions passed down through generations are __________ to the cultural heritage of the tribe.",
        chinese_question: "代代相传的传统对部落的文化遗产来说是 __________ 的。",
        answers: [
            { option: "A", answer: "unimportant", chinese_answer: "不重要的", chinese_romanization: "bù zhòngyào de" },
            { option: "B", answer: "sacred", chinese_answer: "神圣的", chinese_romanization: "shénshèng de" },
            { option: "C", answer: "negligible", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" },
            { option: "D", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sacred' means regarded with great respect and reverence." +
            "<br><br>" +
            "(A) 'unimportant' means not important." +
            "<br><br>" +
            "(C) 'negligible' means so small or unimportant as to be not worth considering." +
            "<br><br>" +
            "(D) 'ordinary' means with no special or distinctive features; normal.",
        chinese_explanation: "(B) '神圣的' 意味着被视为极为尊重和崇敬的。" +
            "<br><br>" +
            "(A) '不重要的' 意味着不重要的。" +
            "<br><br>" +
            "(C) '微不足道的' 意味着太小或不重要，不值得考虑的。" +
            "<br><br>" +
            "(D) '普通的' 意味着没有特别或独特的特征；正常的。"
    },
    {
        id: 10,
        question: "His __________ confidence made him seem more approachable.",
        chinese_question: "他__________的自信使他看起来更平易近人。",
        answers: [
            { option: "A", answer: "overwhelming", chinese_answer: "压倒性的", chinese_romanization: "yādǎo xìng de" },
            { option: "B", answer: "understated", chinese_answer: "低调的", chinese_romanization: "dīdiào de" },
            { option: "C", answer: "obvious", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" },
            { option: "D", answer: "showy", chinese_answer: "显眼的", chinese_romanization: "xiǎnyǎn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'understated' means presented or expressed in a subtle and effective way." +
            "<br><br>" +
            "(A) 'overwhelming' means very great in amount." +
            "<br><br>" +
            "(C) 'obvious' means easily perceived or understood; clear, self-evident, or apparent." +
            "<br><br>" +
            "(D) 'showy' means having a striking appearance or style, typically by being excessively bright, colourful, or ostentatious.",
        chinese_explanation: "(B) '低调的'一词意味着以微妙和有效的方式呈现或表达的。" +
            "<br><br>" +
            "(A) '压倒性的' 意味着数量非常大。" +
            "<br><br>" +
            "(C) '明显的' 意味着容易察觉或理解的；清楚的、自明的或明显的。" +
            "<br><br>" +
            "(D) '显眼的' 意味着具有引人注目的外观或风格，通常是因为过于明亮、颜色鲜艳或炫耀的。"
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
