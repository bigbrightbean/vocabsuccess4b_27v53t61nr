// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The political debate was filled with __________ as the candidates attacked each other's policies.",
    chinese_question: "政治辩论充满了 __________，因为候选人互相攻击对方的政策。",
    answers: [
        { option: "A", answer: "agreements", chinese_answer: "协议", chinese_romanization: "xiéyì" },
        { option: "B", answer: "jibes", chinese_answer: "嘲讽", chinese_romanization: "cháofèng" },
        { option: "C", answer: "praises", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
        { option: "D", answer: "reconciliations", chinese_answer: "和解", chinese_romanization: "héjiě" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'jibes' used figuratively means mocking or sarcastic remarks." + 
        "<br><br>" + 
        "(A) 'agreements' means arrangements or understandings between parties as to a course of action." + 
        "<br><br>" + 
        "(C) 'praises' means expressions of warm approval or admiration." + 
        "<br><br>" + 
        "(D) 'reconciliations' means the restoration of friendly relations.",
    chinese_explanation: "(B) '嘲讽' 在比喻意义上指嘲弄或讽刺的言辞。" + 
        "<br><br>" + 
        "(A) '协议' 意味着各方对行动方案的安排或理解。" + 
        "<br><br>" + 
        "(C) '赞扬' 意味着表达热烈的认可或钦佩。" + 
        "<br><br>" + 
        "(D) '和解' 意味着恢复友好关系。"
    },
    {
        id: 2,
    question: "In the midst of the heated negotiations, a brief __________ allowed both parties to cool down and reconsider their positions.",
    chinese_question: "在激烈的谈判中，一个简短的 __________ 使双方能够冷静下来，重新考虑他们的立场。",
    answers: [
        { option: "A", answer: "truce", chinese_answer: "停战", chinese_romanization: "tíngzhàn" },
        { option: "B", answer: "interlude", chinese_answer: "间奏", chinese_romanization: "jiānzòu" },
        { option: "C", answer: "argument", chinese_answer: "争论", chinese_romanization: "zhēnglùn" },
        { option: "D", answer: "dispute", chinese_answer: "纠纷", chinese_romanization: "jiūfēn" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'interlude' means a temporary pause in an ongoing activity." + 
        "<br><br>" + 
        "(A) 'truce' means an agreement between enemies or opponents to stop fighting for a certain time." + 
        "<br><br>" + 
        "(C) 'argument' means an exchange of diverging or opposite views, typically heated or angry." + 
        "<br><br>" + 
        "(D) 'dispute' means a disagreement or argument.",
    chinese_explanation: "(B) '间奏'一词意味着正在进行的活动中的暂时暂停。" + 
        "<br><br>" + 
        "(A) '停战' 意味着敌人或对手之间同意在某段时间内停止战斗。" + 
        "<br><br>" + 
        "(C) '争论' 意味着分歧或相反观点的交流，通常是激烈或愤怒的。" + 
        "<br><br>" + 
        "(D) '纠纷' 意味着分歧或争论。"
    },
    {
        id: 3,
    question: "The __________ between the host and the guest added a delightful humour to the talk show.",
    chinese_question: "主持人和嘉宾之间的 __________ 为脱口秀增添了令人愉快的幽默感。",
    answers: [
        { option: "A", answer: "animosity", chinese_answer: "敌意", chinese_romanization: "díyì" },
        { option: "B", answer: "persiflage", chinese_answer: "打趣", chinese_romanization: "dǎqù" },
        { option: "C", answer: "agreement", chinese_answer: "同意", chinese_romanization: "tóngyì" },
        { option: "D", answer: "solemnity", chinese_answer: "严肃", chinese_romanization: "yánsù" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'persiflage' means light and slightly contemptuous mockery or banter." + 
        "<br><br>" + 
        "(A) 'animosity' means strong hostility." + 
        "<br><br>" + 
        "(C) 'agreement' means harmony or accordance in opinion or feeling." + 
        "<br><br>" + 
        "(D) 'solemnity' means the state or quality of being serious and dignified.",
    chinese_explanation: "(B) '打趣'一词意味着轻松且略带轻蔑的嘲弄或玩笑。" + 
        "<br><br>" + 
        "(A) '敌意' 意味着强烈的敌对情绪。" + 
        "<br><br>" + 
        "(C) '同意' 意味着意见或感觉上的和谐或一致。" + 
        "<br><br>" + 
        "(D) '严肃' 意味着严肃和庄重的状态或质量。"
    },
    {
        id: 4,
    question: "The tribute concert was an __________ to the legendary musician, celebrating his life and contributions to the industry.",
    chinese_question: "这场致敬音乐会是向这位传奇音乐家致以 __________，庆祝他的生活和对行业的贡献。",
    answers: [
        { option: "A", answer: "insult", chinese_answer: "侮辱", chinese_romanization: "wǔrǔ" },
        { option: "B", answer: "homage", chinese_answer: "致敬", chinese_romanization: "zhìjìng" },
        { option: "C", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
        { option: "D", answer: "critique", chinese_answer: "批评", chinese_romanization: "pīpíng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'homage' figuratively means showing respect or honor to someone, often by commemorating their work or life." + 
        "<br><br>" + 
        "(A) 'insult' means a disrespectful or scornfully abusive remark or action." + 
        "<br><br>" + 
        "(C) 'indifference' means lack of interest, concern, or sympathy." + 
        "<br><br>" + 
        "(D) 'critique' means a detailed analysis and assessment of something.",
    chinese_explanation: "(B) '致敬' 在此语境下意指通过纪念他们的作品或生活来表示尊敬或荣誉。" + 
        "<br><br>" + 
        "(A) '侮辱' 意味着不尊重或轻蔑的言语或行为。" + 
        "<br><br>" + 
        "(C) '冷漠' 意味着缺乏兴趣、关心或同情。" + 
        "<br><br>" + 
        "(D) '批评' 意味着对某事进行详细分析和评估。"
    },
    {
        id: 5,
    question: "He manipulated his colleagues without a hint of __________, aiming solely for personal gain.",
    chinese_question: "他毫无 __________ 地操纵同事，只为了个人利益。",
    answers: [
        { option: "A", answer: "satisfaction", chinese_answer: "满足", chinese_romanization: "mǎnzú" },
        { option: "B", answer: "compunction", chinese_answer: "内疚", chinese_romanization: "nèijiù" },
        { option: "C", answer: "ambition", chinese_answer: "野心", chinese_romanization: "yěxīn" },
        { option: "D", answer: "confidence", chinese_answer: "自信", chinese_romanization: "zìxìn" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'compunction' means a feeling of guilt or moral scruple that prevents or follows the doing of something bad." +
        "<br><br>" +
        "(A)'satisfaction' means fulfillment of one's wishes, expectations, or needs." +
        "<br><br>" +
        "(C)'ambition' means a strong desire to do or achieve something." +
        "<br><br>" +
        "(D)'confidence' means the feeling or belief that one can rely on someone or something; firm trust.",
    chinese_explanation: "(B) '内疚'一词意味着一种罪恶感或道德上的顾忌，它阻止或伴随做坏事。" +
        "<br><br>" +
        "(A)'满足' 意味着实现一个人的愿望、期望或需要。" +
        "<br><br>" +
        "(C)'野心' 意味着强烈的做某事或实现某事的愿望。" +
        "<br><br>" +
        "(D)'自信' 意味着相信可以依赖某人或某事的感觉或信念；坚定的信任。"
    },
    {
        id: 6,
        question: "She has a __________ for classical music, often spending her weekends attending symphony concerts.",
        chinese_question: "她对古典音乐有一种 __________，经常在周末去听交响音乐会。",
        answers: [
                { option: "A", answer: "aversion", chinese_answer: "厌恶", chinese_romanization: "yànwù" },
                { option: "B", answer: "predilection", chinese_answer: "偏爱", chinese_romanization: "piān'ài" },
                { option: "C", answer: "indifference", chinese_answer: "漠不关心", chinese_romanization: "mòbù guānxīn" },
                { option: "D", answer: "disdain", chinese_answer: "轻蔑", chinese_romanization: "qīngmiè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'predilection' means a preference or special liking for something; a bias in favor of something." +
            "<br><br>" +
            "(A) 'aversion' means a strong dislike or disinclination." +
            "<br><br>" +
            "(C) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(D) 'disdain' means the feeling that someone or something is unworthy of one's consideration or respect.",
        chinese_explanation: "(B) '偏爱'一词意味着对某事物的偏好或特别喜欢；对某事物的偏见。" +
            "<br><br>" +
            "(A) '厌恶' 意味着强烈的厌恶或不喜欢。" +
            "<br><br>" +
            "(C) '漠不关心' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(D) '轻蔑' 意味着认为某人或某物不值得考虑或尊重的感觉。"
    },
    {
        id: 7,
        question: "The scientist’s __________ towards the new theory reflected his uncertainty about its validity despite recognizing its innovative approach.",
        chinese_question: "尽管认识到新理论的创新方法，这位科学家对其 __________ 反映了他对其有效性的怀疑。",
        answers: [
            { option: "A", answer: "ambivalence", chinese_answer: "矛盾心理", chinese_romanization: "máodùn xīnlǐ" },
            { option: "B", answer: "conviction", chinese_answer: "信念", chinese_romanization: "xìnniàn" },
            { option: "C", answer: "determination", chinese_answer: "决心", chinese_romanization: "juéxīn" },
            { option: "D", answer: "trust", chinese_answer: "信任", chinese_romanization: "xìnrèn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'ambivalence' figuratively means the state of having mixed feelings or contradictory ideas about something or someone." +
            "<br><br>" +
            "(B) 'conviction' means a firmly held belief or opinion." +
            "<br><br>" +
            "(C) 'determination' means firmness of purpose; resoluteness." +
            "<br><br>" +
            "(D) 'trust' means firm belief in the reliability, truth, ability, or strength of someone or something.",
        chinese_explanation: "(A) '矛盾心理' 在此语境下意指对某事或某人有混合的感觉或矛盾的想法的状态。" +
            "<br><br>" +
            "(B) '信念' 意味着坚定的信仰或意见。" +
            "<br><br>" +
            "(C) '决心' 意味着坚定的目标；果断。" +
            "<br><br>" +
            "(D) '信任' 意味着对某人或某事的可靠性、真实性、能力或力量的坚定信念。"
    },
    {
        id: 8,
        question: "The traditions observed during the festival are a __________ of ancient customs that have been passed down through generations.",
        chinese_question: "节日期间遵循的传统是古老习俗的 __________，这些习俗代代相传。",
        answers: [
            { option: "A", answer: "vestige", chinese_answer: "遗迹", chinese_romanization: "yíjì" },
            { option: "B", answer: "beginning", chinese_answer: "开端", chinese_romanization: "kāiduān" },
            { option: "C", answer: "innovation", chinese_answer: "创新", chinese_romanization: "chuàngxīn" },
            { option: "D", answer: "revolution", chinese_answer: "革命", chinese_romanization: "gémìng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'vestige' figuratively means a trace or remnant of something that is disappearing or no longer exists." +
            "<br><br>" +
            "(B) 'beginning' means the point in time or space at which something starts." +
            "<br><br>" +
            "(C) 'innovation' means the action or process of innovating." +
            "<br><br>" +
            "(D) 'revolution' means a forcible overthrow of a government or social order, in favor of a new system.",
        chinese_explanation: "(A) '遗迹' 在此语境下意指某物正在消失或不再存在的痕迹或遗迹。" +
            "<br><br>" +
            "(B) '开端' 意味着某事物开始的时间或空间点。" +
            "<br><br>" +
            "(C) '创新' 意味着创新的行为或过程。" +
            "<br><br>" +
            "(D) '革命' 意味着为了新的体制而强行推翻政府或社会秩序。"
    },
    {
        id: 9,
        question: "The lawyer's __________ in court, consistently challenging the judge's authority, led to multiple fines.",
        chinese_question: "律师在法庭上的 __________，不断挑战法官的权威，导致了多次罚款。",
        answers: [
                { option: "A", answer: "compliance", chinese_answer: "服从", chinese_romanization: "fúcóng" },
                { option: "B", answer: "contumacy", chinese_answer: "违抗", chinese_romanization: "wéikàng" },
                { option: "C", answer: "deference", chinese_answer: "顺从", chinese_romanization: "shùncóng" },
                { option: "D", answer: "obedience", chinese_answer: "服从", chinese_romanization: "fúcóng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'contumacy' figuratively means stubborn refusal to obey or comply with authority." +
            "<br><br>" +
            "(A) 'compliance' means the action or fact of complying with a wish or command." +
            "<br><br>" +
            "(C) 'deference' means humble submission and respect." +
            "<br><br>" +
            "(D) 'obedience' means compliance with an order, request, or law or submission to another's authority.",
        chinese_explanation: "(B) '违抗' 在此语境下意指顽固拒绝服从或遵守权威。" +
            "<br><br>" +
            "(A) '服从' 意味着遵守意愿或命令的行动或事实。" +
            "<br><br>" +
            "(C) '顺从' 意味着谦卑的顺从和尊重。" +
            "<br><br>" +
            "(D) '服从' 意味着遵守命令、要求或法律或服从他人权威。"
    },
    {
        id: 10,
        question: "His __________ for spicy food led him to travel across countries, sampling the hottest dishes from different cultures.",
        chinese_question: "他对辣味食物的 __________ 使他游历各国，品尝不同文化中最辣的菜肴。",
        answers: [
                { option: "A", answer: "dislike", chinese_answer: "不喜欢", chinese_romanization: "bù xǐhuān" },
                { option: "B", answer: "predilection", chinese_answer: "偏爱", chinese_romanization: "piān'ài" },
                { option: "C", answer: "aversion", chinese_answer: "厌恶", chinese_romanization: "yànwù" },
                { option: "D", answer: "neutrality", chinese_answer: "中立", chinese_romanization: "zhōnglì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'predilection' means a preference or special liking for something; a bias in favor of something." +
            "<br><br>" +
            "(A) 'dislike' means a feeling of distaste or hostility." +
            "<br><br>" +
            "(C) 'aversion' means a strong dislike or disinclination." +
            "<br><br>" +
            "(D) 'neutrality' means the state of not supporting or helping either side in a conflict or disagreement.",
        chinese_explanation: "(B) '偏爱'一词意味着对某事物的偏好或特别喜欢；对某事物的偏见。" +
            "<br><br>" +
            "(A) '不喜欢' 意味着一种厌恶或敌意的感觉。" +
            "<br><br>" +
            "(C) '厌恶' 意味着强烈的厌恶或不喜欢。" +
            "<br><br>" +
            "(D) '中立' 意味着不支持或帮助冲突或争执中任何一方的状态。"
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
