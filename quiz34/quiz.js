// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The intern's __________ attitude was obvious, as he constantly sought to do extra tasks and please his supervisors.",
    chinese_question: "实习生的 __________ 态度显而易见，他总是寻求完成额外的任务以取悦上司。",
    answers: [
        { option: "A", answer: "aloof", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
        { option: "B", answer: "diligent", chinese_answer: "勤奋", chinese_romanization: "qínfèn" },
        { option: "C", answer: "obsequious", chinese_answer: "谄媚", chinese_romanization: "chǎnmèi" },
        { option: "D", answer: "disrespectful", chinese_answer: "无礼", chinese_romanization: "wúlǐ" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'obsequious' means excessively eager to please or obey." +
        "<br><br>" +
        "(A) 'aloof' means not friendly or forthcoming; cool and distant." +
        "<br><br>" +
        "(B) 'diligent' means showing care and conscientiousness in one's work." +
        "<br><br>" +
        "(D) 'disrespectful' means showing a lack of respect or courtesy.",
    chinese_explanation: "(C) '谄媚' 意味着过度渴望取悦或服从。" +
        "<br><br>" +
        "(A) '冷漠' 意味着不友好或疏远。" +
        "<br><br>" +
        "(B) '勤奋' 意味着在工作中表现出关心和勤勉。" +
        "<br><br>" +
        "(D) '无礼' 意味着缺乏尊重或礼貌。"
    },
    {
        id: 2,
        question: "Her __________ speech inspired the audience, motivating them to take action and make a difference in their community.",
        chinese_question: "她的 __________ 演讲激励了观众，促使他们采取行动，在社区中做出改变。",
        answers: [
            { option: "A", answer: "influential", chinese_answer: "有影响力的", chinese_romanization: "yǒu yǐngxiǎng lì de" },
            { option: "B", answer: "uninspiring", chinese_answer: "毫无启发的", chinese_romanization: "háo wú qǐfā de" },
            { option: "C", answer: "ineffective", chinese_answer: "无效的", chinese_romanization: "wúxiào de" },
            { option: "D", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'influential' means having great influence on someone or something." +
            "<br><br>" +
            "(B) 'uninspiring' means not producing excitement or interest." +
            "<br><br>" +
            "(C) 'ineffective' means not producing any significant or desired effect." +
            "<br><br>" +
            "(D) 'trivial' means of little value or importance.",
        chinese_explanation: "(A) '有影响力的' 意味着对某人或某事有巨大影响的。" +
            "<br><br>" +
            "'毫无启发的' 意味着不能产生兴奋或兴趣的。" +
            "<br><br>" +
            "'无效的' 意味着没有产生任何显著或预期效果的。" +
            "<br><br>" +
            "'琐碎的' 意味着价值或重要性很小的。"
    },
    {
        id: 3,
    question: "His __________ sacrifice for his family was a testament to his character.",
    chinese_question: "他为家人作出的 __________ 牺牲是他品格的证明。",
    answers: [
        { option: "A", answer: "noble", chinese_answer: "高尚的", chinese_romanization: "gāoshàng de" },
        { option: "B", answer: "deceitful", chinese_answer: "欺骗的", chinese_romanization: "qīpiàn de" },
        { option: "C", answer: "petty", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" },
        { option: "D", answer: "selfish", chinese_answer: "自私的", chinese_romanization: "zìsī de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'noble' means having or showing fine personal qualities or high moral principles." +
        "<br><br>" +
        "(B) 'deceitful' means guilty of or involving deceit; deceiving or misleading others." +
        "<br><br>" +
        "(C) 'petty' means of little importance; trivial." +
        "<br><br>" +
        "(D) 'selfish' means lacking consideration for others; concerned chiefly with one's own personal profit or pleasure.",
    chinese_explanation: "(A) '高尚的' 意味着拥有或表现出优秀的个人品质或高尚的道德原则。" +
        "<br><br>" +
        "(B) '欺骗的' 意味着欺骗或误导他人。" +
        "<br><br>" +
        "(C) '琐碎的' 意味着不重要的；微不足道的。" +
        "<br><br>" +
        "(D) '自私的' 意味着缺乏对他人的考虑；主要关心自己的个人利益或快乐。"
    },
    {
        id: 4,
        question: "Engaging in such __________ behavior could jeopardize your career and reputation.",
        chinese_question: "从事这种__________行为可能会危及你的职业和声誉。",
        answers: [
            { option: "A", answer: "safe", chinese_answer: "安全的", chinese_romanization: "ānquán de" },
            { option: "B", answer: "benign", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
            { option: "C", answer: "hazardous", chinese_answer: "危险的", chinese_romanization: "wēixiǎn de" },
            { option: "D", answer: "harmless", chinese_answer: "无害的", chinese_romanization: "wúhài de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'hazardous' means risky; dangerous. Figuratively, it can mean being potentially harmful or damaging." +
            "<br><br>" +
            "(A) 'safe' means protected from or not exposed to danger or risk; not likely to be harmed or lost." +
            "<br><br>" +
            "(B) 'benign' means gentle and kind." +
            "<br><br>" +
            "(D) 'harmless' means not able or likely to cause harm.",
        chinese_explanation: "(C) '危险的'一词意味着有风险的；危险的。比喻地，它可以表示潜在有害或损害的。" +
            "<br><br>" +
            "(A) '安全的' 意味着受到保护或没有暴露在危险或风险中；不太可能受到伤害或损失的。" +
            "<br><br>" +
            "(B) '温和的' 意味着温柔和善良的。" +
            "<br><br>" +
            "(D) '无害的' 意味着不能或不太可能造成伤害的。"
    },
    {
        id: 5,
        question: "The company's __________ safety standards were criticized after several accidents occurred at the factory.",
        chinese_question: "在工厂发生了几起事故后，公司 __________ 的安全标准受到了批评。",
        answers: [
            { option: "A", answer: "strict", chinese_answer: "严格的", chinese_romanization: "yángé de" },
            { option: "B", answer: "lax", chinese_answer: "松懈的", chinese_romanization: "sōngxiè de" },
            { option: "C", answer: "rigorous", chinese_answer: "严密的", chinese_romanization: "yánmì de" },
            { option: "D", answer: "thorough", chinese_answer: "彻底的", chinese_romanization: "chèdǐ de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'lax' means not sufficiently strict, severe, or careful." +
            "<br><br>" +
            "(A) 'strict' means demanding that rules concerning behavior are obeyed and observed." +
            "<br><br>" +
            "(C) 'rigorous' means extremely thorough, exhaustive, or accurate." +
            "<br><br>" +
            "(D) 'thorough' means complete with regard to every detail; not superficial or partial.",
        chinese_explanation: "(B) '松懈的' 意味着不够严格、严厉或仔细的。" +
            "<br><br>" +
            "(A) '严格的' 意味着要求遵守和遵循行为规范。" +
            "<br><br>" +
            "(C) '严密的' 意味着极其彻底、详尽或准确的。" +
            "<br><br>" +
            "(D) '彻底的' 意味着在每个细节上都是完整的；不表面的或部分的。"
    },
    {
        id: 6,
            question: "In the animal kingdom, the alpha male is often the __________ member of the group, leading and protecting the others.",
            chinese_question: "在动物王国中，首领雄性通常是群体中 __________ 的成员，领导并保护其他成员。",
            answers: [
                { option: "A", answer: "submissive", chinese_answer: "顺从的", chinese_romanization: "shùncóng de" },
                { option: "B", answer: "dominant", chinese_answer: "主导的", chinese_romanization: "zhǔdǎo de" },
                { option: "C", answer: "passive", chinese_answer: "被动的", chinese_romanization: "bèidòng de" },
                { option: "D", answer: "secondary", chinese_answer: "次要的", chinese_romanization: "cìyào de" }
            ],
            correctAnswer: "B",
            explanation: "(B) 'dominant' means having power and influence over others." +
                "<br><br>" +
                "(A) 'submissive' means ready to conform to the authority or will of others; meekly obedient or passive." +
                "<br><br>" +
                "(C) 'passive' means accepting or allowing what happens or what others do, without active response or resistance." +
                "<br><br>" +
                "(D) 'secondary' means coming after, less important than, or resulting from someone or something else that is primary.",
            chinese_explanation: "(B) '主导的' 意味着对他人有权力和影响力的。" +
                "<br><br>" +
                "(A) '顺从的' 意味着准备遵从他人权威或意愿的；温顺的。" +
                "<br><br>" +
                "(C) '被动的' 意味着接受或允许发生的事情或他人所做的事，而没有主动的回应或抵抗。" +
                "<br><br>" +
                "(D) '次要的' 意味着在主要的之后或不如主要的那么重要的。"
    },
    {
        id: 7,
        question: "The politician's promises were __________, lacking specific details on how they would be implemented.",
        chinese_question: "这位政治家的承诺 __________，缺乏具体细节说明如何实施。",
        answers: [
            { option: "A", answer: "detailed", chinese_answer: "详细的", chinese_romanization: "xiángxì de" },
            { option: "B", answer: "nebulous", chinese_answer: "模糊的", chinese_romanization: "móhu de" },
            { option: "C", answer: "precise", chinese_answer: "精确的", chinese_romanization: "jīngquè de" },
            { option: "D", answer: "exact", chinese_answer: "准确的", chinese_romanization: "zhǔnquè de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'nebulous' means unclear, vague, or ill-defined." +
            "<br><br>" +
            "(A) 'detailed' means having many details or facts; showing attention to detail." +
            "<br><br>" +
            "(C) 'precise' means marked by exactness and accuracy of expression or detail." +
            "<br><br>" +
            "(D) 'exact' means not approximated in any way; precise.",
        chinese_explanation: "(B) '模糊的' 意味着不清楚的，模糊的，或定义不明确的。" +
            "<br><br>" +
            "(A) '详细的' 意味着有许多细节或事实；注意细节的。" +
            "<br><br>" +
            "(C) '精确的' 意味着表达或细节的准确性。" +
            "<br><br>" +
            "(D) '准确的' 意味着在任何方面都没有近似的；精确的。"
    },
    {
        id: 8,
    question: "Given the current market conditions, expanding the business overseas is not only __________ but also potentially profitable.",
    chinese_question: "鉴于当前的市场状况，扩展业务到海外不仅是 __________ 的，而且可能是有利可图的。",
    answers: [
        { option: "A", answer: "impractical", chinese_answer: "不切实际", chinese_romanization: "bù qiè shíjì" },
        { option: "B", answer: "practicable", chinese_answer: "可行", chinese_romanization: "kěxíng" },
        { option: "C", answer: "unlikely", chinese_answer: "不太可能", chinese_romanization: "bù tài kěnéng" },
        { option: "D", answer: "difficult", chinese_answer: "困难", chinese_romanization: "kùnnán" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'practicable' means capable of being done or put into practice successfully." +
        "<br><br>" +
        "(A) 'impractical' means not sensible or realistic." +
        "<br><br>" +
        "(C) 'unlikely' means not likely to happen." +
        "<br><br>" +
        "(D) 'difficult' means needing much effort or skill to accomplish.",
    chinese_explanation: "(B) “可行” 意味着能够成功地完成或付诸实践。" +
        "<br><br>" +
        "(A) '不切实际' 意味着不合理或不现实。" +
        "<br><br>" +
        "(C) '不太可能' 意味着不太可能发生。" +
        "<br><br>" +
        "(D) '困难' 意味着需要很大努力或技能才能完成。"
    },
    {
        id: 9,
    question: "Her __________ remarks during the meeting offended many of her colleagues, as she spoke without considering the consequences.",
    chinese_question: "她在会议上的 __________ 言论冒犯了许多同事，因为她说话时没有考虑后果。",
    answers: [
        { option: "A", answer: "impetuous", chinese_answer: "冲动的", chinese_romanization: "chōngdòng de" },
        { option: "B", answer: "thoughtful", chinese_answer: "体贴的", chinese_romanization: "tǐtiē de" },
        { option: "C", answer: "measured", chinese_answer: "慎重的", chinese_romanization: "shènzhòng de" },
        { option: "D", answer: "careful", chinese_answer: "小心的", chinese_romanization: "xiǎoxīn de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'impetuous' means acting or done quickly and without thought or care." +
        "<br><br>" +
        "(B) 'thoughtful' means showing consideration for the needs of other people." +
        "<br><br>" +
        "(C) 'measured' means carefully considered and deliberate." +
        "<br><br>" +
        "(D) 'careful' means making sure of avoiding potential danger, mishap, or harm.",
    chinese_explanation: "(A) '冲动的' 意味着快速完成且没有思考或关心的。" +
        "<br><br>" +
        "(B) '体贴的' 意味着考虑他人需求的。" +
        "<br><br>" +
        "(C) '慎重的' 意味着仔细考虑和深思熟虑的。" +
        "<br><br>" +
        "(D) '小心的' 意味着确保避免潜在危险、事故或伤害的。"
    },
    {
        id: 10,
    question: "His support for the proposal was __________, acknowledging its benefits but also pointing out potential risks.",
    chinese_question: "他对提案的支持是 __________ 的，承认其优点，但也指出了潜在的风险。",
    answers: [
        { option: "A", answer: "qualified", chinese_answer: "有保留的", chinese_romanization: "yǒu bǎoliú de" },
        { option: "B", answer: "absolute", chinese_answer: "绝对的", chinese_romanization: "juéduì de" },
        { option: "C", answer: "unconditional", chinese_answer: "无条件的", chinese_romanization: "wú tiáojiàn de" },
        { option: "D", answer: "unequivocal", chinese_answer: "明确的", chinese_romanization: "míngquè de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'qualified' means not complete or absolute; limited." +
        "<br><br>" +
        "(B) 'absolute' means not qualified or diminished in any way; total." +
        "<br><br>" +
        "(C) 'unconditional' means not subject to any conditions." +
        "<br><br>" +
        "(D) 'unequivocal' means leaving no doubt; unambiguous.",
    chinese_explanation: "(A) '有保留的' 意味着不完全或绝对的；有限的。" +
        "<br><br>" +
        "(B) '绝对的' 意味着不以任何方式被限定或减弱的；完全的。" +
        "<br><br>" +
        "(C) '无条件的' 意味着不受任何条件限制的。" +
        "<br><br>" +
        "(D) '明确的' 意味着毫无疑问的；明确的。"
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
