// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "Her __________ was obvious when she realized her mistake in the middle of the presentation.",
    chinese_question: "当她在演讲中途意识到自己的错误时，她的 __________ 是显而易见的。",
    answers: [
        { option: "A", answer: "satisfaction", chinese_answer: "满足", chinese_romanization: "mǎnzú" },
        { option: "B", answer: "discomfiture", chinese_answer: "尴尬", chinese_romanization: "gāngà" },
        { option: "C", answer: "eagerness", chinese_answer: "渴望", chinese_romanization: "kěwàng" },
        { option: "D", answer: "relief", chinese_answer: "轻松", chinese_romanization: "qīngsōng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'discomfiture' figuratively means feeling of unease or embarrassment due to a mistake or awkward situation." + 
        "<br><br>" + 
        "(A) 'satisfaction' means fulfillment of one's wishes, expectations, or needs." + 
        "<br><br>" + 
        "(C) 'eagerness' means enthusiasm to do or to have something." + 
        "<br><br>" + 
        "(D) 'relief' means a feeling of reassurance and relaxation following release from anxiety or distress.",
    chinese_explanation: "(B) '尴尬' 在此语境下意指因错误或尴尬情况而感到不安或尴尬的感觉。" + 
        "<br><br>" + 
        "(A) '满足' 意味着实现自己的愿望、期望或需要的状态。" + 
        "<br><br>" + 
        "(C) '渴望' 意味着做或拥有某事的热情。" + 
        "<br><br>" + 
        "(D) '轻松' 意味着在解除焦虑或痛苦后的放心和放松感觉。"
    },
    {
        id: 2,
    question: "Her __________ that she could manage the entire project alone resulted in failure.",
    chinese_question: "她认为自己可以独自管理整个项目，这是她的 __________，结果失败了。",
    answers: [
        { option: "A", answer: "awareness", chinese_answer: "意识", chinese_romanization: "yìshí" },
        { option: "B", answer: "delusion", chinese_answer: "错觉", chinese_romanization: "cuòjué" },
        { option: "C", answer: "reality", chinese_answer: "现实", chinese_romanization: "xiànshí" },
        { option: "D", answer: "understanding", chinese_answer: "理解", chinese_romanization: "lǐjiě" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'delusion' means a false belief or judgment about external reality." + 
        "<br><br>" + 
        "(A) 'awareness' means knowledge or perception of a situation or fact." + 
        "<br><br>" + 
        "(C) 'reality' means the state of things as they actually exist." + 
        "<br><br>" + 
        "(D) 'understanding' means the ability to understand something; comprehension.",
    chinese_explanation: "(B) '错觉'一词意味着对外部现实的错误信念或判断。" + 
        "<br><br>" + 
        "(A) '意识' 意味着对情况或事实的了解或认识。" + 
        "<br><br>" + 
        "(C) '现实' 意味着事物实际存在的状态。" + 
        "<br><br>" + 
        "(D) '理解' 意味着理解某事的能力；理解。"
    },
    {
        id: 3,
question: "The new policy aims to reduce environmental __________ by enforcing stricter regulations on industrial waste disposal.",
chinese_question: "新政策旨在通过对工业废物处理实行更严格的规定来减少环境 __________。",
answers: [
    { option: "A", answer: "benefits", chinese_answer: "好处", chinese_romanization: "hǎochù" },
    { option: "B", answer: "hazards", chinese_answer: "危险", chinese_romanization: "wēixiǎn" },
    { option: "C", answer: "incentives", chinese_answer: "激励", chinese_romanization: "jīlì" },
    { option: "D", answer: "bonuses", chinese_answer: "奖金", chinese_romanization: "jiǎngjīn" }
],
correctAnswer: "B",
explanation: "(B) 'hazards' means dangers or risks." +
    "<br><br>" +
    "(A) 'benefits' means an advantage or profit gained from something." +
    "<br><br>" +
    "(C) 'incentives' means things that motivate or encourage someone to do something." +
    "<br><br>" +
    "(D) 'bonuses' means additional amounts of money added to wages as a reward.",
chinese_explanation: "(B) '危险' 意味着危险或风险。" +
    "<br><br>" +
    "(A) '好处' 意味着从某事中获得的优势或利益。" +
    "<br><br>" +
    "(C) '激励' 意味着激励或鼓励某人做某事的东西。" +
    "<br><br>" +
    "(D) '奖金' 意味着作为奖励添加到工资中的额外金额。"
    },
    {
        id: 4,
        question: "The king's __________ was evident in his lavish gifts to the people during the festival.",
        chinese_question: "国王在节日期间慷慨赠送礼物给人民，体现了他的 __________。",
        answers: [
            { option: "A", answer: "largesse", chinese_answer: "慷慨", chinese_romanization: "kāngkǎi" },
            { option: "B", answer: "miserliness", chinese_answer: "吝啬", chinese_romanization: "lìnsè" },
            { option: "C", answer: "negligence", chinese_answer: "疏忽", chinese_romanization: "shūhū" },
            { option: "D", answer: "selfishness", chinese_answer: "自私", chinese_romanization: "zìsī" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'largesse' figuratively means generosity in bestowing money or gifts upon others, often used to describe generosity in giving resources or aid." +
            "<br><br>" +
            "(B) 'miserliness' means excessive desire to save money; extreme meanness." +
            "<br><br>" +
            "(C) 'negligence' means failure to take proper care in doing something." +
            "<br><br>" +
            "(D) 'selfishness' means lack of consideration for other people.",
        chinese_explanation: "(A) '慷慨' 在此语境下比喻慷慨地赠送金钱或礼物给他人，通常用来描述在给予资源或援助方面的慷慨。" +
            "<br><br>" +
            "(B) '吝啬' 意味着过度节省钱财；极端吝啬。" +
            "<br><br>" +
            "(C) '疏忽' 意味着未能妥善照顾。" +
            "<br><br>" +
            "(D) '自私' 意味着缺乏对他人的考虑。"
    },
    {
        id: 5,
        question: "The board of directors was shocked by the level of __________ involved in the fraudulent scheme.",
        chinese_question: "董事会对欺诈计划中涉及的 __________ 程度感到震惊。",
        answers: [
                { option: "A", answer: "transparency", chinese_answer: "透明", chinese_romanization: "tòumíng" },
                { option: "B", answer: "chicanery", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" },
                { option: "C", answer: "diligence", chinese_answer: "勤奋", chinese_romanization: "qínfèn" },
                { option: "D", answer: "professionalism", chinese_answer: "专业", chinese_romanization: "zhuānyè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'chicanery' means the use of trickery to achieve a political, financial, or legal purpose." +
            "<br><br>" +
            "(A) 'transparency' means the condition of being transparent." +
            "<br><br>" +
            "(C) 'diligence' means careful and persistent work or effort." +
            "<br><br>" +
            "(D) 'professionalism' means the competence or skill expected of a professional.",
        chinese_explanation: "(B) '欺骗'一词意味着使用诡计来实现政治、经济或法律目的。" +
            "<br><br>" +
            "(A) '透明' 意味着透明的状态。" +
            "<br><br>" +
            "(C) '勤奋' 意味着认真和持久的工作或努力。" +
            "<br><br>" +
            "(D) '专业' 意味着对专业人士的期望的能力或技能。"
    },
    {
        id: 6,
    question: "Having the __________ to travel the world has broadened her perspectives on life.",
    chinese_question: "有 __________ 环游世界让她对生活的看法更宽广。",
    answers: [
        { option: "A", answer: "privilege", chinese_answer: "特权", chinese_romanization: "tèquán" },
        { option: "B", answer: "obligation", chinese_answer: "义务", chinese_romanization: "yìwù" },
        { option: "C", answer: "hindrance", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
        { option: "D", answer: "constraint", chinese_answer: "限制", chinese_romanization: "xiànzhì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'privilege' means a special right, advantage, or immunity granted or available only to a particular person or group." + 
        "<br><br>" + 
        "(B) 'obligation' means an act or course of action to which a person is morally or legally bound; a duty or commitment." + 
        "<br><br>" + 
        "(C) 'hindrance' means a thing that provides resistance, delay, or obstruction to something or someone." + 
        "<br><br>" + 
        "(D) 'constraint' means a limitation or restriction.",
    chinese_explanation: "(A) '特权' 意味着仅特定人或群体拥有的特殊权利、优势或豁免。" + 
        "<br><br>" + 
        "(B) '义务' 意味着一个人道德上或法律上必须履行的行为或行动；责任或承诺。" + 
        "<br><br>" + 
        "(C) '阻碍' 意味着对某事或某人的抵抗、延迟或阻碍的事物。" + 
        "<br><br>" + 
        "(D) '限制' 意味着限制或限制。"
    },
    {
        id: 7,
question: "Amidst the political __________, it was hard to discern the truth from the noise.",
chinese_question: "在政治 __________ 中，很难从噪音中辨别真相。",
answers: [
    { option: "A", answer: "clarity", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
    { option: "B", answer: "hubbub", chinese_answer: "喧闹", chinese_romanization: "xuānnào" },
    { option: "C", answer: "consensus", chinese_answer: "共识", chinese_romanization: "gòngshí" },
    { option: "D", answer: "tranquility", chinese_answer: "宁静", chinese_romanization: "níngjìng" }
],
correctAnswer: "B",
explanation: "(B) 'hubbub' means a busy, noisy situation." +
    "<br><br>" +
    "(A) 'clarity' means the quality of being clear." +
    "<br><br>" +
    "(C) 'consensus' means general agreement." +
    "<br><br>" +
    "(D) 'tranquility' means the quality or state of being calm.",
chinese_explanation: "(B) '喧闹' 意味着一个繁忙、吵闹的情况。" +
    "<br><br>" +
    "(A) '清晰' 意味着清楚的质量。" +
    "<br><br>" +
    "(C) '共识' 意味着普遍的意见。" +
    "<br><br>" +
    "(D) '宁静' 意味着平静的质量或状态。"
    },
    {
        id: 8,
    question: "Her __________ to her parents' wishes was evident in her career choices, always aligning with their expectations.",
    chinese_question: "她对父母意愿的 __________ 体现在她的职业选择中，总是与他们的期望一致。",
    answers: [
        { option: "A", answer: "defiance", chinese_answer: "反抗", chinese_romanization: "fǎnkàng" },
        { option: "B", answer: "deference", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" },
        { option: "C", answer: "indifference", chinese_answer: "漠不关心", chinese_romanization: "mòbùguānxīn" },
        { option: "D", answer: "rejection", chinese_answer: "拒绝", chinese_romanization: "jùjué" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'deference' means humble submission and respect." + 
        "<br><br>" + 
        "(A) 'defiance' means open resistance; bold disobedience." + 
        "<br><br>" + 
        "(C) 'indifference' means lack of interest, concern, or sympathy." + 
        "<br><br>" + 
        "(D) 'rejection' means the dismissing or refusing of a proposal, idea, etc.",
    chinese_explanation: "(B) '尊重'一词意味着谦卑的服从和尊敬。" + 
        "<br><br>" + 
        "(A) '反抗' 意味着公开抵抗；大胆的不服从。" + 
        "<br><br>" + 
        "(C) '漠不关心' 意味着缺乏兴趣、关心或同情。" + 
        "<br><br>" + 
        "(D) '拒绝' 意味着对提议、想法等的拒绝或拒绝。"
    },
    {
        id: 9,
        question: "The customer's __________ about the new product was apparent; she liked its features but was unsure about its price.",
        chinese_question: "顾客对新产品的 __________ 很明显；她喜欢它的功能，但不确定它的价格。",
        answers: [
            { option: "A", answer: "ambivalence", chinese_answer: "矛盾心理", chinese_romanization: "máodùn xīnlǐ" },
            { option: "B", answer: "satisfaction", chinese_answer: "满意", chinese_romanization: "mǎnyì" },
            { option: "C", answer: "eagerness", chinese_answer: "渴望", chinese_romanization: "kěwàng" },
            { option: "D", answer: "certainty", chinese_answer: "确信", chinese_romanization: "quèxìn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'ambivalence' means having mixed feelings or contradictory ideas about something or someone." +
            "<br><br>" +
            "(B) 'satisfaction' means fulfillment of one's wishes, expectations, or needs, or the pleasure derived from this." +
            "<br><br>" +
            "(C) 'eagerness' means keen or enthusiastic interest." +
            "<br><br>" +
            "(D) 'certainty' means firm conviction that something is the case.",
        chinese_explanation: "(A) '矛盾心理' 意味着对某事或某人有混合的感觉或矛盾的想法。" +
            "<br><br>" +
            "(B) '满意' 意味着实现一个人的愿望、期望或需求，或从中获得的快乐。" +
            "<br><br>" +
            "(C) '渴望' 意味着强烈或热切的兴趣。" +
            "<br><br>" +
            "(D) '确信' 意味着坚信某事是事实。"
    },
    {
        id: 10,
    question: "The languid melody of the music brought on a sense of __________ in the listeners.",
    chinese_question: "音乐的悠扬旋律让听众感到一阵 __________ 。",
    answers: [
        { option: "A", answer: "languor", chinese_answer: "倦怠", chinese_romanization: "juàndài" },
        { option: "B", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" },
        { option: "C", answer: "energy", chinese_answer: "能量", chinese_romanization: "néngliàng" },
        { option: "D", answer: "alertness", chinese_answer: "警觉", chinese_romanization: "jǐngjué" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'languor' means a state of tiredness or inertia." + 
        "<br><br>" + 
        "(B) 'excitement' means a feeling of great enthusiasm and eagerness." + 
        "<br><br>" + 
        "(C) 'energy' means the strength and vitality required for sustained physical or mental activity." + 
        "<br><br>" + 
        "(D) 'alertness' means the quality of being quick to notice things.",
    chinese_explanation: "(A) '倦怠' 意味着疲倦或无力的状态。" + 
        "<br><br>" + 
        "(B) '兴奋' 意味着极大的热情和渴望。" + 
        "<br><br>" + 
        "(C) '能量' 意味着持续进行体力或脑力活动所需的力量和活力。" + 
        "<br><br>" + 
        "(D) '警觉' 意味着迅速注意事物的品质。"
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
