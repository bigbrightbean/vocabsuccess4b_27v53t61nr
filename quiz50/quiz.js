// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The CEO's __________ authority in the company allowed him to make unilateral decisions that affected all departments.",
    chinese_question: "首席执行官在公司中的 __________ 权威使他能够做出影响所有部门的单方面决定。",
    answers: [
        { option: "A", answer: "omnipotent", chinese_answer: "全能的", chinese_romanization: "quánnéng de" },
        { option: "B", answer: "restricted", chinese_answer: "受限制的", chinese_romanization: "shòu xiànzhì de" },
        { option: "C", answer: "moderate", chinese_answer: "适度的", chinese_romanization: "shìdù de" },
        { option: "D", answer: "constrained", chinese_answer: "受约束的", chinese_romanization: "shòu yuēshù de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'omnipotent' means having unlimited power; able to do anything." +
        "<br><br>" +
        "(B) 'restricted' means limited in extent, number, scope, or action." +
        "<br><br>" +
        "(C) 'moderate' means average in amount, intensity, quality, or degree." +
        "<br><br>" +
        "(D) 'constrained' means severely restricted in scope, extent, or activity.",
    chinese_explanation: "(A) '全能的' 意味着拥有无限的力量；能够做任何事。" +
        "<br><br>" +
        "(B) '受限制的' 意味着在范围、数量、范围或行动上有限的。" +
        "<br><br>" +
        "(C) '适度的' 意味着在数量、强度、质量或程度上是平均的。" +
        "<br><br>" +
        "(D) '受约束的' 意味着在范围、程度或活动上受到严格限制的。"
    },
    {
        id: 2,
        question: "The __________ child astonished everyone with her ability to solve complex math problems at such a young age.",
        chinese_question: "这个 __________ 的孩子在如此年轻的年龄就能解决复杂的数学问题，让所有人都感到惊讶。",
        answers: [
                { option: "A", answer: "slow", chinese_answer: "缓慢的", chinese_romanization: "huǎnmàn de" },
                { option: "B", answer: "delayed", chinese_answer: "延迟的", chinese_romanization: "yánchí de" },
                { option: "C", answer: "precocious", chinese_answer: "早熟的", chinese_romanization: "zǎoshú de" },
                { option: "D", answer: "immature", chinese_answer: "不成熟的", chinese_romanization: "bù chéngshú de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'precocious' means having developed certain abilities or proclivities at an earlier age than usual." +
            "<br><br>" +
            "(A) 'slow' means moving or operating, or designed to do so, only at a low speed; not quick or fast." +
            "<br><br>" +
            "(B) 'delayed' means occurring or done late." +
            "<br><br>" +
            "(D) 'immature' means not fully developed.",
        chinese_explanation: "(C) '早熟的' 一词意味着在比通常年龄更早的发展某些能力或倾向。" +
            "<br><br>" +
            "(A) '缓慢的' 意味着移动或操作速度低；不快或不迅速。" +
            "<br><br>" +
            "(B) '延迟的' 意味着发生或完成较晚的。" +
            "<br><br>" +
            "(D) '不成熟的' 意味着未完全发育的。"
    },
    {
        id: 3,
        question: "The politician's __________ rhetoric alienated many voters.",
        chinese_question: "政客的__________言辞疏远了许多选民。",
        answers: [
            { option: "A", answer: "mild", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
            { option: "B", answer: "strident", chinese_answer: "强硬的", chinese_romanization: "qiángyìng de" },
            { option: "C", answer: "soothing", chinese_answer: "安抚的", chinese_romanization: "ānfǔ de" },
            { option: "D", answer: "understated", chinese_answer: "低调的", chinese_romanization: "dīdiào de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'strident' means presenting a point of view, especially a controversial one, in an excessively and unpleasantly forceful way." +
            "<br><br>" +
            "(A) 'mild' means gentle and not easily provoked." +
            "<br><br>" +
            "(C) 'soothing' means having a gently calming effect." +
            "<br><br>" +
            "(D) 'understated' means presented or expressed in a subtle and effective way.",
        chinese_explanation: "(B) '强硬的'一词意味着以过分和令人不愉快的强硬方式表达观点，尤其是争议观点。" +
            "<br><br>" +
            "(A) '温和的' 意味着温柔且不易被激怒。" +
            "<br><br>" +
            "(C) '安抚的' 意味着具有轻柔的镇静效果。" +
            "<br><br>" +
            "(D) '低调的' 意味着以微妙和有效的方式呈现或表达。"
    },
    {
        id: 4,
        question: "The disease remained __________ in his body for years, showing no symptoms until it suddenly became active.",
        chinese_question: "这种疾病在他的体内 __________ 了多年，没有任何症状，直到它突然变得活跃起来。",
        answers: [
            { option: "A", answer: "latent", chinese_answer: "潜伏的", chinese_romanization: "qiánfú de" },
            { option: "B", answer: "active", chinese_answer: "活跃的", chinese_romanization: "huóyuè de" },
            { option: "C", answer: "manifest", chinese_answer: "显现的", chinese_romanization: "xiǎnxiàn de" },
            { option: "D", answer: "prominent", chinese_answer: "突出的", chinese_romanization: "tūchū de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'latent' means existing but not yet developed or manifest; hidden or concealed." +
            "<br><br>" +
            "(B) 'active' means engaging or ready to engage in physically energetic pursuits." +
            "<br><br>" +
            "(C) 'manifest' means clear or obvious to the eye or mind." +
            "<br><br>" +
            "(D) 'prominent' means important; famous.",
        chinese_explanation: "(A) '潜伏的' 意味着存在但尚未开发或显现的；隐藏的。" +
            "<br><br>" +
            "(B) '活跃的' 意味着从事或准备从事体力活动的。" +
            "<br><br>" +
            "(C) '显现的' 意味着清楚或明显的。" +
            "<br><br>" +
            "(D) '突出的' 意味着重要的；著名的。"
    },
    {
        id: 5,
    question: "It is __________ to find someone with such a kind heart and generous spirit.",
    chinese_question: "找到一个如此善良和慷慨的人是很 __________ 的。",
    answers: [
        { option: "A", answer: "rare", chinese_answer: "稀有", chinese_romanization: "xīyǒu" },
        { option: "B", answer: "usual", chinese_answer: "通常", chinese_romanization: "tōngcháng" },
        { option: "C", answer: "ordinary", chinese_answer: "普通", chinese_romanization: "pǔtōng" },
        { option: "D", answer: "typical", chinese_answer: "典型", chinese_romanization: "diǎnxíng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'rare' means not occurring very often." +
        "<br><br>" +
        "(B) 'usual' means habitually or typically occurring or done." +
        "<br><br>" +
        "(C) 'ordinary' means with no special or distinctive features; normal." +
        "<br><br>" +
        "(D) 'typical' means having the distinctive qualities of a particular type of person or thing.",
    chinese_explanation: "(A) '稀有' 意味着不常发生。" +
        "<br><br>" +
        "(B) '通常' 意味着习惯性或典型地发生或完成的。" +
        "<br><br>" +
        "(C) '普通' 意味着没有特殊或独特的特点；正常的。" +
        "<br><br>" +
        "(D) '典型' 意味着具有某种类型的人的或物的独特品质。"
    },
    {
        id: 6,
        question: "Climbing Mount Everest is a __________ challenge, demanding not only physical strength but also mental endurance.",
        chinese_question: "攀登珠穆朗玛峰是一项 __________ 的挑战，不仅需要体力，还需要精神耐力。",
        answers: [
            { option: "A", answer: "mammoth", chinese_answer: "巨大的", chinese_romanization: "jùdà de" },
            { option: "B", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "C", answer: "easy", chinese_answer: "容易的", chinese_romanization: "róngyì de" },
            { option: "D", answer: "slight", chinese_answer: "轻微的", chinese_romanization: "qīngwēi de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'mammoth' means huge; gigantic." +
            "<br><br>" +
            "(B) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(C) 'easy' means achieved without great effort; presenting few difficulties." +
            "<br><br>" +
            "(D) 'slight' means small in degree; inconsiderable.",
        chinese_explanation: "(A) '巨大的' 意味着巨大的；庞大的。" +
            "<br><br>" +
            "'简单的' 意味着容易理解或完成的；没有困难的。" +
            "<br><br>" +
            "'容易的' 意味着无需很大努力就能完成的；呈现出很少困难的。" +
            "<br><br>" +
            "'轻微的' 意味着程度小的；微不足道的。"
    },
    {
        id: 7,
    question: "The peace treaty between the two nations was __________, threatened by ongoing conflicts.",
    chinese_question: "两国之间的和平条约非常 __________ ，受到持续冲突的威胁。",
    answers: [
        { option: "A", answer: "fragile", chinese_answer: "脆弱", chinese_romanization: "cuìruò" },
        { option: "B", answer: "durable", chinese_answer: "耐用", chinese_romanization: "nàiyòng" },
        { option: "C", answer: "resilient", chinese_answer: "有韧性", chinese_romanization: "yǒu rènxìng" },
        { option: "D", answer: "stable", chinese_answer: "稳定", chinese_romanization: "wěndìng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'fragile' means easily broken or damaged." +
        "<br><br>" +
        "(B) 'durable' means able to withstand wear, pressure, or damage." +
        "<br><br>" +
        "(C) 'resilient' means able to withstand or recover quickly from difficult conditions." +
        "<br><br>" +
        "(D) 'stable' means not likely to give way or overturn; firmly fixed.",
    chinese_explanation: "(A) '脆弱' 意味着容易破碎或损坏。" +
        "<br><br>" +
        "(B) '耐用' 意味着能够承受磨损、压力或损坏。" +
        "<br><br>" +
        "(C) '有韧性' 意味着能够承受或迅速从困境中恢复。" +
        "<br><br>" +
        "(D) '稳定' 意味着不容易倒塌或翻倒；牢固固定。"
    },
    {
        id: 8,
        question: "The __________ look in his eyes made it clear that he hadn't understood a word of the explanation.",
        chinese_question: "他眼中 __________ 的神情清楚地表明他没有听懂解释中的一个字。",
        answers: [
            { option: "A", answer: "perceptive", chinese_answer: "敏锐的", chinese_romanization: "mǐnruì de" },
            { option: "B", answer: "aware", chinese_answer: "知道的", chinese_romanization: "zhīdào de" },
            { option: "C", answer: "vacuous", chinese_answer: "空洞的", chinese_romanization: "kōngdòng de" },
            { option: "D", answer: "alert", chinese_answer: "警觉的", chinese_romanization: "jǐngjué de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'vacuous' means having or showing a lack of thought or intelligence." +
            "<br><br>" +
            "(A) 'perceptive' means having or showing sensitive insight." +
            "<br><br>" +
            "(B) 'aware' means having knowledge or perception of a situation or fact." +
            "<br><br>" +
            "(D) 'alert' means quick to notice any unusual and potentially dangerous or difficult circumstances.",
        chinese_explanation: "(C) '空洞的' 意味着缺乏思想或智慧的。" +
            "<br><br>" +
            "(A) '敏锐的' 意味着有或显示出敏锐洞察力的。" +
            "<br><br>" +
            "(B) '知道的' 意味着对情况或事实有知识或感知的。" +
            "<br><br>" +
            "(D) '警觉的' 意味着迅速注意到任何不寻常和潜在危险或困难情况的。"
    },
    {
        id: 9,
    question: "The decision to change the schedule seemed completely __________, with no clear reason or explanation.",
    chinese_question: "改变时间表的决定看起来完全是 __________ 的，没有明确的原因或解释。",
    answers: [
        { option: "A", answer: "logical", chinese_answer: "合理的", chinese_romanization: "hélǐ de" },
        { option: "B", answer: "justified", chinese_answer: "有理的", chinese_romanization: "yǒu lǐ de" },
        { option: "C", answer: "arbitrary", chinese_answer: "武断的", chinese_romanization: "wǔduàn de" },
        { option: "D", answer: "reasoned", chinese_answer: "理性的", chinese_romanization: "lǐxìng de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'arbitrary' means based on random choice or personal whim, rather than any reason or system." +
        "<br><br>" +
        "(A) 'logical' means of or according to the rules of logic or formal argument." +
        "<br><br>" +
        "(B) 'justified' means having, done for, or marked by a good or legitimate reason." +
        "<br><br>" +
        "(D) 'reasoned' means underpinned by logic or good sense.",
    chinese_explanation: "(C) '武断的' 一词意味着基于随机选择或个人的突发奇想，而不是任何原因或系统。" +
        "<br><br>" +
        "(A) '合理的' 意味着符合逻辑规则或正式论证的。" +
        "<br><br>" +
        "(B) '有理的' 意味着有、为了或具有正当理由的。" +
        "<br><br>" +
        "(D) '理性的' 意味着以逻辑或良好感知为基础的。"
    },
    {
        id: 10,
        question: "The journalist uncovered the __________ details of the politician's scandal, shocking the public with tales of corruption.",
        chinese_question: "记者揭露了政客丑闻的 __________ 细节，用腐败的故事震惊了公众。",
        answers: [
            { option: "A", answer: "honorable", chinese_answer: "荣誉的", chinese_romanization: "róngyù de" },
            { option: "B", answer: "noble", chinese_answer: "高尚的", chinese_romanization: "gāoshàng de" },
            { option: "C", answer: "sordid", chinese_answer: "卑鄙的", chinese_romanization: "bēibǐ de" },
            { option: "D", answer: "virtuous", chinese_answer: "有道德的", chinese_romanization: "yǒu dàodé de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sordid' means involving immoral or dishonorable actions and motives; arousing moral distaste and contempt." +
            "<br><br>" +
            "(A) 'honorable' means bringing or worthy of honor." +
            "<br><br>" +
            "(B) 'noble' means having or showing fine personal qualities or high moral principles." +
            "<br><br>" +
            "(D) 'virtuous' means having or showing high moral standards.",
        chinese_explanation: "(C) '卑鄙的' 意味着涉及不道德或不光彩的行为和动机；引起道德上的厌恶和蔑视。" +
            "<br><br>" +
            "(A) '荣誉的' 意味着带来或值得荣誉的。" +
            "<br><br>" +
            "(B) '高尚的' 意味着具有或显示出良好的个人品质或高尚的道德原则的。" +
            "<br><br>" +
            "(D) '有道德的' 意味着具有或表现出高尚的道德标准的。"
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
