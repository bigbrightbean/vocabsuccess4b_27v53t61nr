// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The novel explored the consequences of a __________ lifestyle, highlighting the emotional and social turmoil faced by the protagonist.",
        chinese_question: "这部小说探讨了一种 __________ 的生活方式的后果，突出了主人公面临的情感和社会动荡。",
        answers: [
            { option: "A", answer: "promiscuous", chinese_answer: "滥交的", chinese_romanization: "lànjiāo de" },
            { option: "B", answer: "monogamous", chinese_answer: "一夫一妻的", chinese_romanization: "yī fū yī qī de" },
            { option: "C", answer: "abstinent", chinese_answer: "禁欲的", chinese_romanization: "jìnyù de" },
            { option: "D", answer: "chaste", chinese_answer: "贞洁的", chinese_romanization: "zhēnjié de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'promiscuous' means having or characterized by many transient sexual relationships." +
            "<br><br>" +
            "(B) 'monogamous' means involving marriage to one person at a time." +
            "<br><br>" +
            "(C) 'abstinent' means refraining from an activity or from consumption of something, especially alcohol." +
            "<br><br>" +
            "(D) 'chaste' means abstaining from extramarital, or from all, sexual intercourse.",
        chinese_explanation: "(A) '滥交的' 意味着有或以许多短暂的性关系为特征的。" +
            "<br><br>" +
            "(B) '一夫一妻的' 意味着涉及一次与一个人结婚的。" +
            "<br><br>" +
            "(C) '禁欲的' 意味着戒除某种活动或消费某物，特别是酒精。" +
            "<br><br>" +
            "(D) '贞洁的' 意味着禁欲的，尤其是婚外性行为。"
    },
    {
        id: 2,
    question: "The __________ boxer was always ready for a fight, often starting brawls in and out of the ring.",
    chinese_question: "这位 __________ 的拳击手总是准备好打架，经常在场内外挑起争斗。",
    answers: [
        { option: "A", answer: "peaceful", chinese_answer: "和平", chinese_romanization: "hépíng" },
        { option: "B", answer: "timid", chinese_answer: "胆小", chinese_romanization: "dǎnxiǎo" },
        { option: "C", answer: "pugnacious", chinese_answer: "好斗", chinese_romanization: "hàodòu" },
        { option: "D", answer: "passive", chinese_answer: "被动", chinese_romanization: "bèidòng" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'pugnacious' means eager or quick to argue, quarrel, or fight." +
        "<br><br>" +
        "(A) 'peaceful' means free from disturbance; tranquil." +
        "<br><br>" +
        "(B) 'timid' means showing a lack of courage or confidence; easily frightened." +
        "<br><br>" +
        "(D) 'passive' means accepting or allowing what happens or what others do, without active response or resistance.",
    chinese_explanation: "(C) '好斗' 一词意味着急于或迅速争论、争吵或打架。" +
        "<br><br>" +
        "(A) '和平' 意味着没有干扰；宁静。" +
        "<br><br>" +
        "(B) '胆小' 意味着缺乏勇气或信心；容易受惊。" +
        "<br><br>" +
        "(D) '被动' 意味着接受或允许发生的事情或他人所做的事情，没有积极的回应或抵抗。"
    },
    {
        id: 3,
        question: "In mythology, gods are often depicted as __________ beings who can control everything.",
        chinese_question: "在神话中，神通常被描绘成能够控制一切的 __________ 存在。",
        answers: [
                { option: "A", answer: "weak", chinese_answer: "虚弱的", chinese_romanization: "xūruò de" },
                { option: "B", answer: "powerless", chinese_answer: "无力的", chinese_romanization: "wúlì de" },
                { option: "C", answer: "omnipotent", chinese_answer: "全能的", chinese_romanization: "quánnéng de" },
                { option: "D", answer: "limited", chinese_answer: "有限的", chinese_romanization: "yǒuxiàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'omnipotent' means having unlimited power; able to do anything." +
            "<br><br>" +
            "(A) 'weak' means lacking the power to perform physically demanding tasks; lacking physical strength and energy." +
            "<br><br>" +
            "(B) 'powerless' means without ability, influence, or power." +
            "<br><br>" +
            "(D) 'limited' means restricted in size, amount, or extent; few, small, or short.",
        chinese_explanation: "(C) '全能的' 一词意味着具有无限的力量；能够做任何事。" +
            "<br><br>" +
            "(A) '虚弱的' 意味着缺乏执行体力任务的能力；缺乏体力和精力的。" +
            "<br><br>" +
            "(B) '无力的' 意味着没有能力、影响力或权力的。" +
            "<br><br>" +
            "(D) '有限的' 意味着在大小、数量或程度上受到限制的；少的、小的或短的。"
    },
    {
        id: 4,
    question: "The town experienced a __________ period of prosperity and growth in the early 20th century.",
    chinese_question: "这个小镇在20世纪初经历了一个 __________ 的繁荣和增长时期。",
    answers: [
        { option: "A", answer: "halcyon", chinese_answer: "平静的", chinese_romanization: "píngjìng de" },
        { option: "B", answer: "turbulent", chinese_answer: "动荡的", chinese_romanization: "dòngdàng de" },
        { option: "C", answer: "difficult", chinese_answer: "困难的", chinese_romanization: "kùnnán de" },
        { option: "D", answer: "depressed", chinese_answer: "萧条的", chinese_romanization: "xiāotiáo de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'halcyon' means denoting a period of time in the past that was idyllically happy and peaceful." +
        "<br><br>" +
        "(B) 'turbulent' means characterized by conflict, disorder, or confusion; not stable or calm." +
        "<br><br>" +
        "(C) 'difficult' means needing much effort or skill to accomplish, deal with, or understand." +
        "<br><br>" +
        "(D) 'depressed' means in a state of general unhappiness or despondency.",
    chinese_explanation: "(A) '平静的'一词指过去一段时间，理想地快乐和平静。" +
        "<br><br>" +
        "(B) '动荡的' 意味着以冲突、混乱或困惑为特征；不稳定或不平静。" +
        "<br><br>" +
        "(C) '困难的' 意味着需要很多努力或技能来完成、处理或理解。" +
        "<br><br>" +
        "(D) '萧条的' 意味着处于普遍不快乐或沮丧的状态。"
    },
    {
        id: 5,
        question: "Her __________ response to criticism helped her remain professional.",
        chinese_question: "她对批评的__________反应帮助她保持专业。",
        answers: [
            { option: "A", answer: "sensitive", chinese_answer: "敏感的", chinese_romanization: "mǐngǎn de" },
            { option: "B", answer: "stoic", chinese_answer: "坚忍的", chinese_romanization: "jiānrěn de" },
            { option: "C", answer: "defensive", chinese_answer: "防御的", chinese_romanization: "fángyù de" },
            { option: "D", answer: "reactive", chinese_answer: "反应的", chinese_romanization: "fǎnyìng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'stoic' means enduring pain and hardship without showing one's feelings or complaining." +
            "<br><br>" +
            "(A) 'sensitive' means quick to detect or respond to slight changes, signals, or influences." +
            "<br><br>" +
            "(C) 'defensive' means very anxious to challenge or avoid criticism." +
            "<br><br>" +
            "(D) 'reactive' means showing a response to a stimulus.",
        chinese_explanation: "(B) '坚忍的'一词意味着在忍受痛苦和困难时不表现自己的情感或不抱怨。" +
            "<br><br>" +
            "(A) '敏感的' 意味着迅速察觉或回应细微的变化、信号或影响。" +
            "<br><br>" +
            "(C) '防御的' 意味着非常渴望挑战或避免批评。" +
            "<br><br>" +
            "(D) '反应的' 意味着对刺激表现出反应。"
    },
    {
        id: 6,
        question: "Critics argued that the film's __________ scenes were gratuitous and added nothing to the storyline.",
        chinese_question: "评论家认为电影中的 __________ 场景是多余的，对情节没有任何贡献。",
        answers: [
            { option: "A", answer: "licentious", chinese_answer: "放荡的", chinese_romanization: "fàngdàng de" },
            { option: "B", answer: "wholesome", chinese_answer: "有益健康的", chinese_romanization: "yǒuyì jiànkāng de" },
            { option: "C", answer: "tasteful", chinese_answer: "有品味的", chinese_romanization: "yǒu pǐnwèi de" },
            { option: "D", answer: "proper", chinese_answer: "合适的", chinese_romanization: "héshì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'licentious' means promiscuous and unprincipled in sexual matters." +
            "<br><br>" +
            "(B) 'wholesome' means conducive to or suggestive of good health and physical well-being." +
            "<br><br>" +
            "(C) 'tasteful' means showing good aesthetic judgment or appropriate behavior." +
            "<br><br>" +
            "(D) 'proper' means conforming to accepted standards of behavior or morals.",
        chinese_explanation: "(A) '放荡的' 意味着在性方面放纵和没有原则的。" +
            "<br><br>" +
            "(B) '有益健康的' 意味着有利于或暗示良好的健康和身体健康的。" +
            "<br><br>" +
            "(C) '有品味的' 意味着表现出良好的审美判断或适当的行为。" +
            "<br><br>" +
            "(D) '合适的' 意味着符合接受的行为或道德标准的。"
    },
    {
        id: 7,
    question: "Her influence in the decision-making process was __________, as she was rarely consulted.",
    chinese_question: "她在决策过程中的影响是 __________ 的，因为很少有人征求她的意见。",
    answers: [
        { option: "A", answer: "central", chinese_answer: "中心", chinese_romanization: "zhōngxīn" },
        { option: "B", answer: "dominant", chinese_answer: "主要", chinese_romanization: "zhǔyào" },
        { option: "C", answer: "marginal", chinese_answer: "边缘", chinese_romanization: "biānyuán" },
        { option: "D", answer: "pivotal", chinese_answer: "关键", chinese_romanization: "guānjiàn" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'marginal' means of secondary or minor importance; not central." +
        "<br><br>" +
        "(A) 'central' means of the greatest importance; principal or essential." +
        "<br><br>" +
        "(B) 'dominant' means most important, powerful, or influential." +
        "<br><br>" +
        "(D) 'pivotal' means of crucial importance in relation to the development or success of something else.",
    chinese_explanation: "(C) '边缘' 意味着次要或不重要的；非中心的。" +
        "<br><br>" +
        "(A) '中心' 意味着最重要的；主要的或必不可少的。" +
        "<br><br>" +
        "(B) '主要' 意味着最重要的，有影响力的。" +
        "<br><br>" +
        "(D) '关键' 意味着对某事的发展或成功至关重要的。"
    },
    {
        id: 8,
    question: "His __________ response to the exciting news left everyone surprised by his lack of enthusiasm.",
    chinese_question: "他对激动人心的消息的 __________ 反应让大家对他的缺乏热情感到惊讶。",
    answers: [
        { option: "A", answer: "enthusiastic", chinese_answer: "热情", chinese_romanization: "rèqíng" },
        { option: "B", answer: "lackluster", chinese_answer: "平淡无奇", chinese_romanization: "píngdàn wúqí" },
        { option: "C", answer: "fervent", chinese_answer: "热烈", chinese_romanization: "rèliè" },
        { option: "D", answer: "passionate", chinese_answer: "充满激情", chinese_romanization: "chōngmǎn jīqíng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'lackluster' means lacking in vitality, force, or conviction; uninspired or uninspiring." +
        "<br><br>" +
        "(A) 'enthusiastic' means having or showing intense and eager enjoyment, interest, or approval." +
        "<br><br>" +
        "(C) 'fervent' means having or displaying a passionate intensity." +
        "<br><br>" +
        "(D) 'passionate' means showing or caused by strong feelings or a strong belief.",
    chinese_explanation: "(B) '平淡无奇' 意味着缺乏活力、力量或信念；毫无灵感或感染力。" +
        "<br><br>" +
        "(A) '热情' 意味着表现出强烈和急切的享受、兴趣或认可。" +
        "<br><br>" +
        "(C) '热烈' 意味着表现出或表现出激情强度的。" +
        "<br><br>" +
        "(D) '充满激情' 意味着表现出或由强烈的感情或信念引起的。"
    },
    {
        id: 9,
    question: "Her kindness made an __________ impact on everyone she met, changing their lives forever.",
    chinese_question: "她的善良对每个遇到她的人都产生了__________的影响，永远改变了他们的生活。",
    answers: [
        { option: "A", answer: "erasable", chinese_answer: "可擦除的", chinese_romanization: "kě cāchú de" },
        { option: "B", answer: "temporary", chinese_answer: "暂时的", chinese_romanization: "zànshí de" },
        { option: "C", answer: "indelible", chinese_answer: "难以磨灭的", chinese_romanization: "nányǐ mómiè de" },
        { option: "D", answer: "fleeting", chinese_answer: "短暂的", chinese_romanization: "duǎnzàn de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'indelible' means making marks that cannot be removed. Figuratively, it can mean having a lasting effect." +
        "<br><br>" +
        "(A) 'erasable' means able to be erased." +
        "<br><br>" +
        "(B) 'temporary' means lasting for only a limited period of time." +
        "<br><br>" +
        "(D) 'fleeting' means lasting for a very short time.",
    chinese_explanation: "(C) '难以磨灭的' 意味着留下无法去除的痕迹。比喻地，它可以表示有持久的影响。" +
        "<br><br>" +
        "(A) '可擦除的' 意味着可以擦除的。" +
        "<br><br>" +
        "(B) '暂时的' 意味着仅持续有限时间的。" +
        "<br><br>" +
        "(D) '短暂的' 意味着持续时间非常短的。"
    },
    {
        id: 10,
    question: "The __________ opportunity slipped through his fingers.",
    chinese_question: "那次 __________ 机会从他指间溜走了。",
    answers: [
        { option: "A", answer: "palm-sized", chinese_answer: "手掌大小", chinese_romanization: "shǒuzhǎng dàxiǎo" },
        { option: "B", answer: "fleeting", chinese_answer: "短暂的", chinese_romanization: "duǎnzàn de" },
        { option: "C", answer: "immense", chinese_answer: "巨大的", chinese_romanization: "jùdà de" },
        { option: "D", answer: "trivial", chinese_answer: "微不足道的", chinese_romanization: "wēi bù zú dào de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'fleeting' means lasting for a very short time." +
        "<br><br>" +
        "(A) 'palm-sized' means small enough to fit in the palm of one's hand." +
        "<br><br>" +
        "(C) 'immense' means extremely large or great." +
        "<br><br>" +
        "(D) 'trivial' means of little value or importance.",
    chinese_explanation: "(B) '短暂的' 意味着持续时间很短。" +
        "<br><br>" +
        "(A) '手掌大小' 意味着小到可以放在手掌中。" +
        "<br><br>" +
        "(C) '巨大的' 意味着非常大或伟大。" +
        "<br><br>" +
        "(D) '微不足道的' 意味着价值或重要性很小。"
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
