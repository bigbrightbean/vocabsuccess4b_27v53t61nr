// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Their business partnership was born out of sheer __________; they met during a delayed flight and discovered their shared interests.",
        chinese_question: "他们的商业伙伴关系纯属 __________ 的产物；他们在一次航班延误期间相遇，发现了共同的兴趣。",
        answers: [
            { option: "A", answer: "calculation", chinese_answer: "计算", chinese_romanization: "jìsuàn" },
            { option: "B", answer: "serendipity", chinese_answer: "机缘巧合", chinese_romanization: "jīyuán qiǎohé" },
            { option: "C", answer: "struggle", chinese_answer: "挣扎", chinese_romanization: "zhēngzhá" },
            { option: "D", answer: "planning", chinese_answer: "计划", chinese_romanization: "jìhuà" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'serendipity' means the occurrence and development of events by chance in a happy or beneficial way." +
            "<br><br>" +
            "(A) 'calculation' means the process of using mathematics; careful planning." +
            "<br><br>" +
            "(C) 'struggle' means a forceful or violent effort to get free of restraint or resist attack." +
            "<br><br>" +
            "(D) 'planning' means the process of making plans for something.",
        chinese_explanation: "(B) '机缘巧合'一词意味着事情偶然发生并以幸福或有益的方式发展。" +
            "<br><br>" +
            "(A) '计算' 意味着使用数学的过程；精心策划。" +
            "<br><br>" +
            "(C) '挣扎' 意味着强力或暴力地努力摆脱束缚或抵抗攻击。" +
            "<br><br>" +
            "(D) '计划' 意味着为某事制定计划的过程。"
    },
    {
        id: 2,
        question: "His personal life reached its __________ during the difficult divorce proceedings.",
        chinese_question: "在艰难的离婚诉讼期间，他的个人生活达到了 __________。",
        answers: [
            { option: "A", answer: "nadir", chinese_answer: "最低点", chinese_romanization: "zuìdī diǎn" },
            { option: "B", answer: "height", chinese_answer: "高度", chinese_romanization: "gāodù" },
            { option: "C", answer: "recovery", chinese_answer: "恢复", chinese_romanization: "huīfù" },
            { option: "D", answer: "zenith", chinese_answer: "顶点", chinese_romanization: "dǐngdiǎn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'nadir' figuratively means the lowest point in the fortunes of a person or organization." +
            "<br><br>" +
            "(B) 'height' means the measurement from base to top or (of a standing person) from head to foot." +
            "<br><br>" +
            "(C) 'recovery' means a return to a normal state of health, mind, or strength." +
            "<br><br>" +
            "(D) 'zenith' means the time at which something is most powerful or successful.",
        chinese_explanation: "(A) '最低点' 在此语境下意指一个人或组织财富的最低点。" +
            "<br><br>" +
            "(B) '高度' 意味着从底部到顶部或（站立的人）从头到脚的测量。" +
            "<br><br>" +
            "(C) '恢复' 意味着恢复到正常的健康、心态或力量状态。" +
            "<br><br>" +
            "(D) '顶点' 意味着某物最强大或最成功的时间。"
    },
    {
        id: 3,
    question: "The CEO's resignation was seen as a __________ of major changes within the company.",
    chinese_question: "CEO的辞职被视为公司内部重大变化的 __________ 。",
    answers: [
        { option: "A", answer: "harbinger", chinese_answer: "预兆", chinese_romanization: "yùzhào" },
        { option: "B", answer: "result", chinese_answer: "结果", chinese_romanization: "jiéguǒ" },
        { option: "C", answer: "aftermath", chinese_answer: "后果", chinese_romanization: "hòuguǒ" },
        { option: "D", answer: "conclusion", chinese_answer: "结论", chinese_romanization: "jiélùn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'harbinger' means a person or thing that announces or signals the approach of another, used figuratively here." + 
        "<br><br>" + 
        "(B) 'result' means a consequence, effect, or outcome of something." + 
        "<br><br>" + 
        "(C) 'aftermath' means the consequences or aftereffects of a significant unpleasant event." + 
        "<br><br>" + 
        "(D) 'conclusion' means the end or finish of an event, process, or text.",
    chinese_explanation: "(A) '预兆' 意味着预示或信号另一件事情即将来临的人或事物，这里是比喻用法。" + 
        "<br><br>" + 
        "(B) '结果' 意味着某事的后果、效果或结果。" + 
        "<br><br>" + 
        "(C) '后果' 意味着重要的不愉快事件的后果或余波。" + 
        "<br><br>" + 
        "(D) '结论' 意味着事件、过程或文本的结束或完结。"
    },
    {
        id: 4,
        question: "The government implemented measures of __________ to reduce the national debt, leading to significant budget cuts in various sectors.",
        chinese_question: "政府实施了 __________ 措施以减少国家债务，导致各个部门的预算大幅削减。",
        answers: [
                { option: "A", answer: "extravagance", chinese_answer: "奢侈", chinese_romanization: "shēchǐ" },
                { option: "B", answer: "austerity", chinese_answer: "紧缩", chinese_romanization: "jǐnsuō" },
                { option: "C", answer: "luxury", chinese_answer: "豪华", chinese_romanization: "háohuá" },
                { option: "D", answer: "opulence", chinese_answer: "富裕", chinese_romanization: "fùyù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'austerity' means sternness or severity of manner or attitude; extreme plainness and simplicity of style or appearance; conditions characterized by severity, sternness, or asceticism." +
            "<br><br>" +
            "(A) 'extravagance' means lack of restraint in spending money or using resources." +
            "<br><br>" +
            "(C) 'luxury' means the state of great comfort and extravagant living." +
            "<br><br>" +
            "(D) 'opulence' means great wealth or luxuriousness.",
        chinese_explanation: "(B) '紧缩'一词意味着态度或方式的严格或严厉；极度朴素的风格或外观；以严厉、严格或禁欲主义为特征的条件。" +
            "<br><br>" +
            "(A) '奢侈' 意味着在花钱或使用资源时缺乏节制。" +
            "<br><br>" +
            "(C) '豪华' 意味着极度舒适和奢华的生活状态。" +
            "<br><br>" +
            "(D) '富裕' 意味着极大的财富或奢侈。"
    },
    {
        id: 5,
    question: "Their __________ on the mission was unwavering, leading to its successful completion.",
    chinese_question: "他们对任务的 __________ 坚定不移，导致任务成功完成。",
    answers: [
        { option: "A", answer: "neglect", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
        { option: "B", answer: "distraction", chinese_answer: "分心", chinese_romanization: "fēnxīn" },
        { option: "C", answer: "focus", chinese_answer: "专注", chinese_romanization: "zhuānzhù" },
        { option: "D", answer: "ignorance", chinese_answer: "无知", chinese_romanization: "wúzhī" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'focus' means to pay particular attention to something." + 
        "<br><br>" + 
        "(A) 'neglect' means to fail to care for properly." + 
        "<br><br>" + 
        "(B) 'distraction' means a thing that prevents someone from giving full attention to something else." + 
        "<br><br>" + 
        "(D) 'ignorance' means lack of knowledge or information.",
    chinese_explanation: "(C) '专注' 意味着特别注意某事。" + 
        "<br><br>" + 
        "(A) '忽略' 意味着未能适当照顾。" + 
        "<br><br>" + 
        "(B) '分心' 意味着阻止某人全神贯注于某事。" + 
        "<br><br>" + 
        "(D) '无知' 意味着缺乏知识或信息。"
    },
    {
        id: 6,
        question: "The philosopher's embrace of __________ was reflected in his writings, which often depicted a world devoid of purpose or meaning.",
        chinese_question: "这位哲学家对 __________ 的接受反映在他的著作中，这些著作常常描绘一个无目标或意义的世界。",
        answers: [
                { option: "A", answer: "nihilism", chinese_answer: "虚无主义", chinese_romanization: "xūwú zhǔyì" },
                { option: "B", answer: "pragmatism", chinese_answer: "实用主义", chinese_romanization: "shíyòng zhǔyì" },
                { option: "C", answer: "realism", chinese_answer: "现实主义", chinese_romanization: "xiànshí zhǔyì" },
                { option: "D", answer: "existentialism", chinese_answer: "存在主义", chinese_romanization: "cúnzài zhǔyì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'nihilism' means the rejection of all religious and moral principles, often in the belief that life is meaningless." +
            "<br><br>" +
            "(B) 'pragmatism' means a practical approach to problems and affairs." +
            "<br><br>" +
            "(C) 'realism' means the attitude or practice of accepting a situation as it is and being prepared to deal with it accordingly." +
            "<br><br>" +
            "(D) 'existentialism' means a philosophical theory or approach that emphasizes the existence of the individual person as a free and responsible agent determining their own development through acts of the will.",
        chinese_explanation: "(A) '虚无主义' 意味着拒绝所有宗教和道德原则，通常相信生活是没有意义的。" +
            "<br><br>" +
            "(B) '实用主义' 意味着对问题和事务的实际方法。" +
            "<br><br>" +
            "(C) '现实主义' 意味着接受现实情况并准备相应处理的态度或做法。" +
            "<br><br>" +
            "(D) '存在主义' 意味着一种哲学理论或方法，强调个人作为自由和负责的主体，通过意志行为决定自己的发展。"
    },
    {
        id: 7,
        question: "The teacher's innovative methods gained __________ from the school administration, leading to their adoption across the district.",
        chinese_question: "老师的创新方法得到了校方的 __________，导致这些方法在整个学区内被采纳。",
        answers: [
            { option: "A", answer: "sanction", chinese_answer: "认可", chinese_romanization: "rènkě" },
            { option: "B", answer: "rejection", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "C", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "D", answer: "resistance", chinese_answer: "抵抗", chinese_romanization: "dǐkàng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'sanction' figuratively means approval or encouragement for an action." +
            "<br><br>" +
            "(B) 'rejection' means the dismissing or refusing of a proposal, idea, etc." +
            "<br><br>" +
            "(C) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(D) 'resistance' means the refusal to accept or comply with something; the attempt to prevent something by action or argument.",
        chinese_explanation: "(A) '认可' 在此语境下意指对某一行动的批准或鼓励。" +
            "<br><br>" +
            "(B) '拒绝' 意味着对提议、想法等的驳回或拒绝。" +
            "<br><br>" +
            "(C) '冷漠' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(D) '抵抗' 意味着拒绝接受或遵从某事；试图通过行动或辩论来阻止某事。"
    },
    {
        id: 8,
    question: "Her __________ was evident when she tripped on stage during the performance.",
    chinese_question: "她在表演过程中在舞台上绊倒时，显然感到非常 __________。",
    answers: [
        { option: "A", answer: "delight", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
        { option: "B", answer: "chagrin", chinese_answer: "懊恼", chinese_romanization: "àonǎo" },
        { option: "C", answer: "curiosity", chinese_answer: "好奇", chinese_romanization: "hàoqí" },
        { option: "D", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'chagrin' figuratively means feeling distressed or humiliated because of an embarrassing situation." + 
        "<br><br>" + 
        "(A) 'delight' means great pleasure." + 
        "<br><br>" + 
        "(C) 'curiosity' means a strong desire to know or learn something." + 
        "<br><br>" + 
        "(D) 'excitement' means a feeling of great enthusiasm and eagerness.",
    chinese_explanation: "(B) '懊恼' 在此语境下意指因为尴尬的情况而感到苦恼或羞辱。" + 
        "<br><br>" + 
        "(A) '高兴' 意味着极大的愉悦。" + 
        "<br><br>" + 
        "(C) '好奇' 意味着强烈的求知欲。" + 
        "<br><br>" + 
        "(D) '兴奋' 意味着极大的热情和渴望的感觉。"
    },
    {
        id: 9,
        question: "The __________ that simmered beneath the surface finally erupted during the heated argument.",
        chinese_question: "表面下潜伏的 __________ 最终在激烈的争论中爆发。",
        answers: [
                { option: "A", answer: "peace", chinese_answer: "和平", chinese_romanization: "hépíng" },
                { option: "B", answer: "rancour", chinese_answer: "怨恨", chinese_romanization: "yuànhèn" },
                { option: "C", answer: "calm", chinese_answer: "冷静", chinese_romanization: "lěngjìng" },
                { option: "D", answer: "serenity", chinese_answer: "宁静", chinese_romanization: "níngjìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'rancour' means a feeling of deep and bitter anger and ill-will." +
            "<br><br>" +
            "(A) 'peace' means freedom from disturbance; tranquility." +
            "<br><br>" +
            "(C) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
            "<br><br>" +
            "(D) 'serenity' means the state of being calm, peaceful, and untroubled.",
        chinese_explanation: "(B) '怨恨'一词意味着深刻而苦涩的愤怒和恶意。" +
            "<br><br>" +
            "(A) '和平' 意味着没有干扰；安宁。" +
            "<br><br>" +
            "(C) '冷静' 意味着不表现或感到紧张、愤怒或其他强烈情绪。" +
            "<br><br>" +
            "(D) '宁静' 意味着平静、安宁和无忧无虑的状态。"
    },
    {
        id: 10,
    question: "The company's decision to expand internationally was a __________ of its confidence in future growth.",
    chinese_question: "公司决定向国际扩展是其对未来增长信心的 __________。",
    answers: [
        { option: "A", answer: "signal", chinese_answer: "信号", chinese_romanization: "xìnhào" },
        { option: "B", answer: "error", chinese_answer: "错误", chinese_romanization: "cuòwù" },
        { option: "C", answer: "secret", chinese_answer: "秘密", chinese_romanization: "mìmì" },
        { option: "D", answer: "distraction", chinese_answer: "分心", chinese_romanization: "fēn xīn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'signal' means a gesture, action, or sound that is used to convey information or instructions." + 
        "<br><br>" + 
        "(B) 'error' means a mistake." + 
        "<br><br>" + 
        "(C) 'secret' means something that is kept or meant to be kept unknown or unseen by others." + 
        "<br><br>" + 
        "(D) 'distraction' means a thing that prevents someone from giving full attention to something else.",
    chinese_explanation: "(A) “信号” 意味着用来传达信息或指示的手势、动作或声音。" + 
        "<br><br>" + 
        "(B) '错误' 意味着一个错误。" + 
        "<br><br>" + 
        "(C) '秘密' 意味着被隐瞒或意图隐瞒他人的事情。" + 
        "<br><br>" + 
        "(D) '分心' 意味着阻止某人全神贯注于其他事情的事情。"
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
