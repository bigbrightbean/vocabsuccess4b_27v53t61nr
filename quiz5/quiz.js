// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ demeanour during the crisis helped calm everyone around her.",
        chinese_question: "在危机期间，她的__________举止帮助安抚了周围的所有人。",
        answers: [
            { option: "A", answer: "chaotic", chinese_answer: "混乱的", chinese_romanization: "hǔnluàn de" },
            { option: "B", answer: "turbulent", chinese_answer: "动荡的", chinese_romanization: "dòngdàng de" },
            { option: "C", answer: "serene", chinese_answer: "宁静的", chinese_romanization: "níngjìng de" },
            { option: "D", answer: "noisy", chinese_answer: "吵闹的", chinese_romanization: "chǎonào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'serene' means calm, peaceful, and untroubled; tranquil. Figuratively, it can mean being composed and unruffled even in difficult situations." +
            "<br><br>" +
            "(A) 'chaotic' means in a state of complete confusion and disorder." +
            "<br><br>" +
            "(B) 'turbulent' means characterized by conflict, disorder, or confusion; not controlled or calm." +
            "<br><br>" +
            "(D) 'noisy' means making or given to making a lot of noise.",
        chinese_explanation: "(C) '宁静的'一词意味着平静、和平、不受干扰的；宁静的。比喻地，它可以表示在困难情况下镇定和不慌张的。" +
            "<br><br>" +
            "(A) '混乱的' 意味着处于完全混乱和无序的状态。" +
            "<br><br>" +
            "(B) '动荡的' 意味着以冲突、无序或混乱为特征的；不受控制或不平静的。" +
            "<br><br>" +
            "(D) '吵闹的' 意味着制造或喜欢制造很多噪音的。"
    },
    {
        id: 2,
        question: "The __________ heat of the summer afternoon left everyone feeling exhausted and lethargic.",
        chinese_question: "夏日下午 __________ 的炎热使每个人都感到筋疲力尽和无精打采。",
        answers: [
                { option: "A", answer: "refreshing", chinese_answer: "提神的", chinese_romanization: "tíshén de" },
                { option: "B", answer: "invigorating", chinese_answer: "振奋的", chinese_romanization: "zhènfèn de" },
                { option: "C", answer: "enervating", chinese_answer: "使人疲惫的", chinese_romanization: "shǐ rén píbèi de" },
                { option: "D", answer: "soothing", chinese_answer: "舒缓的", chinese_romanization: "shūhuǎn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'enervating' means causing one to feel drained of energy or vitality." +
            "<br><br>" +
            "(A) 'refreshing' means serving to refresh or reinvigorate someone." +
            "<br><br>" +
            "(B) 'invigorating' means making one feel strong, healthy, and full of energy." +
            "<br><br>" +
            "(D) 'soothing' means having a gently calming effect.",
        chinese_explanation: "(C) '使人疲惫的' 一词意味着使人感到精力或活力耗尽的。" +
            "<br><br>" +
            "(A) '提神的' 意味着使人清新或恢复活力的。" +
            "<br><br>" +
            "(B) '振奋的' 意味着使人感到强壮、健康和充满活力的。" +
            "<br><br>" +
            "(D) '舒缓的' 意味着具有轻柔的镇静效果的。"
    },
    {
        id: 3,
        question: "His __________ attitude towards the project made it difficult for the team to stay motivated and positive.",
        chinese_question: "他对项目的 __________ 态度使团队难以保持动力和积极性。",
        answers: [
            { option: "A", answer: "querulous", chinese_answer: "爱发牢骚的", chinese_romanization: "ài fā láosāo de" },
            { option: "B", answer: "supportive", chinese_answer: "支持的", chinese_romanization: "zhīchí de" },
            { option: "C", answer: "enthusiastic", chinese_answer: "热情的", chinese_romanization: "rèqíng de" },
            { option: "D", answer: "cooperative", chinese_answer: "合作的", chinese_romanization: "hézuò de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'querulous' means complaining in a petulant or whining manner." +
            "<br><br>" +
            "(B) 'supportive' means providing encouragement or emotional help." +
            "<br><br>" +
            "(C) 'enthusiastic' means having or showing intense and eager enjoyment, interest, or approval." +
            "<br><br>" +
            "(D) 'cooperative' means involving mutual assistance in working towards a common goal.",
        chinese_explanation: "(A) '爱发牢骚的' 意味着以任性或抱怨的方式抱怨的。" +
            "<br><br>" +
            "(B) '支持的' 意味着提供鼓励或情感上的帮助的。" +
            "<br><br>" +
            "(C) '热情的' 意味着表现出强烈和热切的享受、兴趣或赞同的。" +
            "<br><br>" +
            "(D) '合作的' 意味着在共同目标上相互帮助的。"
    },
    {
        id: 4,
    question: "The protesters' __________ chants echoed through the streets, drawing the attention of everyone nearby.",
    chinese_question: "抗议者的 __________ 口号在街道上回荡，吸引了附近所有人的注意。",
    answers: [
        { option: "A", answer: "raucous", chinese_answer: "喧闹的", chinese_romanization: "xuānnào de" },
        { option: "B", answer: "silent", chinese_answer: "沉默的", chinese_romanization: "chénmò de" },
        { option: "C", answer: "muffled", chinese_answer: "低沉的", chinese_romanization: "dīchén de" },
        { option: "D", answer: "subdued", chinese_answer: "压抑的", chinese_romanization: "yāyì de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'raucous' means making or constituting a disturbingly harsh and loud noise." +
    "<br><br>" +
    "(B) 'silent' means not making or accompanied by any sound." +
    "<br><br>" +
    "(C) 'muffled' means not loud because of being obstructed in some way; muted." +
    "<br><br>" +
    "(D) 'subdued' means quiet and rather reflective or depressed.",
    chinese_explanation: "(A) '喧闹的' 意味着制造或构成令人不安的刺耳和响亮的噪音。" +
    "<br><br>" +
    "(B) '沉默的' 意味着没有发出或伴随任何声音的。" +
    "<br><br>" +
    "(C) '低沉的' 意味着因为某种方式被阻挡而不响亮的；静音的。" +
    "<br><br>" +
    "(D) '压抑的' 意味着安静的，相当深思熟虑的或情绪低落的。"
    },
    {
        id: 5,
    question: "Her __________ sense of empathy allowed her to connect with people on a deep emotional level, making her an excellent counselor.",
    chinese_question: "她 __________ 的同理心使她能够在情感上与人深刻地联系，使她成为一名出色的辅导员。",
    answers: [
        { option: "A", answer: "profound", chinese_answer: "深刻的", chinese_romanization: "shēnkè de" },
        { option: "B", answer: "negligible", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" },
        { option: "C", answer: "slight", chinese_answer: "轻微的", chinese_romanization: "qīngwēi de" },
        { option: "D", answer: "moderate", chinese_answer: "适度的", chinese_romanization: "shìdù de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'profound' means having deep insight or understanding." +
        "<br><br>" +
        "(B) 'negligible' means so small or unimportant as to be not worth considering; insignificant." +
        "<br><br>" +
        "(C) 'slight' means small in degree; inconsiderable." +
        "<br><br>" +
        "(D) 'moderate' means average in amount, intensity, quality, or degree.",
    chinese_explanation: "(A) '深刻的' 意味着具有深刻的见解或理解的。" +
        "<br><br>" +
        "(B) '微不足道的' 意味着小到或不重要到不值得考虑的；微不足道的。" +
        "<br><br>" +
        "(C) '轻微的' 意味着程度小的；微不足道的。" +
        "<br><br>" +
        "(D) '适度的' 意味着数量、强度、质量或程度上的平均。"
    },
    {
        id: 6,
    question: "Her comments were __________, hinting at problems without addressing them directly.",
    chinese_question: "她的评论是 __________ 的，暗示了问题但没有直接提及。",
    answers: [
        { option: "A", answer: "oblique", chinese_answer: "间接的", chinese_romanization: "jiànjiē de" },
        { option: "B", answer: "transparent", chinese_answer: "透明的", chinese_romanization: "tòumíng de" },
        { option: "C", answer: "clear", chinese_answer: "清楚的", chinese_romanization: "qīngchǔ de" },
        { option: "D", answer: "overt", chinese_answer: "公开的", chinese_romanization: "gōngkāi de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'oblique' means not explicit or done in a direct way." +
        "<br><br>" +
        "(B) 'transparent' means easy to perceive or detect." +
        "<br><br>" +
        "(C) 'clear' means easy to understand, hear, or see." +
        "<br><br>" +
        "(D) 'overt' means done or shown openly; plainly apparent.",
    chinese_explanation: "(A) '间接的' 意味着不明确或不直接进行的。" +
        "<br><br>" +
        "(B) '透明的' 意味着容易察觉或检测的。" +
        "<br><br>" +
        "(C) '清楚的' 意味着容易理解、听到或看到的。" +
        "<br><br>" +
        "(D) '公开的' 意味着公开做或展示的；明显的。"
    },
    {
        id: 7,
    question: "The company's __________ bonus scheme rewarded employees handsomely for their hard work and dedication.",
    chinese_question: "公司的 __________ 奖金计划慷慨地奖励了员工的辛勤工作和奉献精神。",
    answers: [
        { option: "A", answer: "meager", chinese_answer: "微薄的", chinese_romanization: "wēibó de" },
        { option: "B", answer: "minimal", chinese_answer: "最低限度的", chinese_romanization: "zuìdī xiàndù de" },
        { option: "C", answer: "munificent", chinese_answer: "慷慨的", chinese_romanization: "kāngkǎi de" },
        { option: "D", answer: "insufficient", chinese_answer: "不足的", chinese_romanization: "bùzú de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'munificent' means larger or more generous than is usual or necessary." +
        "<br><br>" +
        "(A) 'meager' means lacking in quantity or quality." +
        "<br><br>" +
        "(B) 'minimal' means of a minimum amount, quantity, or degree." +
        "<br><br>" +
        "(D) 'insufficient' means not enough; inadequate.",
    chinese_explanation: "(C) '慷慨的' 意味着比平常或必要的大或更慷慨的。" +
        "<br><br>" +
        "(A) '微薄的' 意味着数量或质量不足的。" +
        "<br><br>" +
        "(B) '最低限度的' 意味着最低数量、数量或程度的。" +
        "<br><br>" +
        "(D) '不足的' 意味着不够的；不充分的。"
    },
    {
        id: 8,
    question: "The company's __________ ambition to dominate the market drove them to constantly innovate and outpace their competitors.",
    chinese_question: "公司对主导市场的 __________ 野心驱使他们不断创新并超越竞争对手。",
    answers: [
        { option: "A", answer: "insatiable", chinese_answer: "无法满足的", chinese_romanization: "wúfǎ mǎnzú de" },
        { option: "B", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
        { option: "C", answer: "content", chinese_answer: "满足的", chinese_romanization: "mǎnzú de" },
        { option: "D", answer: "complacent", chinese_answer: "自满的", chinese_romanization: "zìmǎn de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'insatiable' means impossible to satisfy." +
        "<br><br>" +
        "(B) 'modest' means unassuming or moderate in the estimation of one's abilities or achievements." +
        "<br><br>" +
        "(C) 'content' means in a state of peaceful happiness." +
        "<br><br>" +
        "(D) 'complacent' means showing smug or uncritical satisfaction with oneself or one's achievements.",
    chinese_explanation: "(A) '无法满足的' 意味着无法满足的。" +
        "<br><br>" +
        "(B) '谦虚的' 意味着对自己的能力或成就的评价谦逊或适中的。" +
        "<br><br>" +
        "(C) '满足的' 意味着处于平静的幸福状态。" +
        "<br><br>" +
        "(D) '自满的' 意味着对自己或自己的成就表现出沾沾自喜或不加批判的满足感。"
    },
    {
        id: 9,
        question: "The lecturer's __________ style of speaking made it difficult for the audience to stay engaged and attentive.",
        chinese_question: "讲师 __________ 的演讲风格使观众难以保持专注和注意力。",
        answers: [
                { option: "A", answer: "lively", chinese_answer: "生动的", chinese_romanization: "shēngdòng de" },
                { option: "B", answer: "ponderous", chinese_answer: "沉重的", chinese_romanization: "chénzhòng de" },
                { option: "C", answer: "engaging", chinese_answer: "吸引人的", chinese_romanization: "xīyǐn rén de" },
                { option: "D", answer: "dynamic", chinese_answer: "动态的", chinese_romanization: "dòngtài de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'ponderous' means slow and clumsy because of great weight." +
            "<br><br>" +
            "(A) 'lively' means full of life and energy; active and outgoing." +
            "<br><br>" +
            "(C) 'engaging' means charming and attractive." +
            "<br><br>" +
            "(D) 'dynamic' means (of a process or system) characterized by constant change, activity, or progress.",
        chinese_explanation: "(B) '沉重的' 一词意味着因为重量大而缓慢和笨拙的。" +
            "<br><br>" +
            "(A) '生动的' 意味着充满生气和能量的；活跃的和外向的。" +
            "<br><br>" +
            "(C) '吸引人的' 意味着迷人和有吸引力的。" +
            "<br><br>" +
            "(D) '动态的' 意味着（过程或系统）具有不断变化、活动或进展的特征。"
    },
    {
        id: 10,
        question: "Her __________ responses during the debate impressed everyone.",
        chinese_question: "她在辩论中的 __________ 回应给每个人留下了深刻的印象。",
        answers: [
            { option: "A", answer: "sluggish", chinese_answer: "迟缓的", chinese_romanization: "chíhuǎn de" },
            { option: "B", answer: "zippy", chinese_answer: "迅捷的", chinese_romanization: "xùnjié de" },
            { option: "C", answer: "slow", chinese_answer: "慢的", chinese_romanization: "màn de" },
            { option: "D", answer: "lethargic", chinese_answer: "昏昏欲睡的", chinese_romanization: "hūnhūnyùshuì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'zippy' means bright, fresh, or lively; fast." +
            "<br><br>" +
            "(A) 'sluggish' means slow-moving or inactive." +
            "<br><br>" +
            "(C) 'slow' means moving or operating, or designed to do so, only at a low speed; not quick or fast." +
            "<br><br>" +
            "(D) 'lethargic' means affected by lethargy; sluggish and apathetic.",
        chinese_explanation: "(B) '迅捷的' 意味着明亮、新鲜或活泼的；快速的。" +
            "<br><br>" +
            "(A) '迟缓的' 意味着动作缓慢或不活跃的。" +
            "<br><br>" +
            "(C) '慢的' 意味着动作或操作缓慢，或设计成这样，速度不快。" +
            "<br><br>" +
            "(D) '昏昏欲睡的' 意味着受嗜睡影响的；迟缓和冷漠的。"
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
