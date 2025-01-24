// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The manager dismissed his concerns as __________, insisting that they had no impact on the overall success of the project.",
        chinese_question: "经理把他的担忧视为 __________，坚持认为这些担忧对项目的整体成功没有影响。",
        answers: [
                { option: "A", answer: "crucial", chinese_answer: "关键的", chinese_romanization: "guānjiàn de" },
                { option: "B", answer: "significant", chinese_answer: "重要的", chinese_romanization: "zhòngyào de" },
                { option: "C", answer: "inconsequential", chinese_answer: "不重要的", chinese_romanization: "bù zhòngyào de" },
                { option: "D", answer: "important", chinese_answer: "重要的", chinese_romanization: "zhòngyào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'inconsequential' means not important or significant." +
            "<br><br>" +
            "(A) 'crucial' means decisive or critical, especially in the success or failure of something." +
            "<br><br>" +
            "(B) 'significant' means sufficiently great or important to be worthy of attention; noteworthy." +
            "<br><br>" +
            "(D) 'important' means of great significance or value.",
        chinese_explanation: "(C) '不重要的' 一词意味着不重要或不显著的。" +
            "<br><br>" +
            "(A) '关键的' 意味着决定性的或至关重要的，尤其是在成功或失败方面。" +
            "<br><br>" +
            "(B) '重要的' 意味着足够伟大或重要，值得关注；值得注意的。" +
            "<br><br>" +
            "(D) '重要的' 意味着具有重大意义或价值的。"
    },
    {
        id: 2,
    question: "Her __________ determination to succeed drove her to overcome numerous obstacles and achieve her dreams.",
    chinese_question: "她 __________ 的决心促使她克服了许多障碍，实现了自己的梦想。",
    answers: [
        { option: "A", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
        { option: "B", answer: "lazy", chinese_answer: "懒惰的", chinese_romanization: "lǎnduò de" },
        { option: "C", answer: "tenacious", chinese_answer: "坚韧的", chinese_romanization: "jiānrèn de" },
        { option: "D", answer: "apathetic", chinese_answer: "无动于衷的", chinese_romanization: "wúdòngyúzhōng de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'tenacious' means tending to keep a firm hold of something; clinging or adhering closely." +
        "<br><br>" +
        "(A) 'indifferent' means having no particular interest or sympathy; unconcerned." +
        "<br><br>" +
        "(B) 'lazy' means unwilling to work or use energy." +
        "<br><br>" +
        "(D) 'apathetic' means showing or feeling no interest, enthusiasm, or concern.",
    chinese_explanation: "(C) '坚韧的' 意味着倾向于紧紧抓住某物；紧贴或紧紧依附。" +
        "<br><br>" +
        "(A) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。" +
        "<br><br>" +
        "(B) '懒惰的' 意味着不愿工作或使用能量的。" +
        "<br><br>" +
        "(D) '无动于衷的' 意味着没有表现出或感觉没有兴趣、热情或关心。"
    },
    {
        id: 3,
    question: "Her words were as __________ as the spring blossoms, leaving everyone feeling uplifted and happy.",
    chinese_question: "她的话语如春天的花朵般 __________，让每个人都感到振奋和快乐。",
    answers: [
        { option: "A", answer: "fragrant", chinese_answer: "芳香的", chinese_romanization: "fāngxiāng de" },
        { option: "B", answer: "harsh", chinese_answer: "刺耳的", chinese_romanization: "cì'ěr de" },
        { option: "C", answer: "dull", chinese_answer: "乏味的", chinese_romanization: "fáwèi de" },
        { option: "D", answer: "bitter", chinese_answer: "苦涩的", chinese_romanization: "kǔsè de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'fragrant' means pleasant and sweet-smelling, often used figuratively to describe something very pleasing." +
        "<br><br>" +
        "(B) 'harsh' means unpleasantly rough or jarring to the senses." +
        "<br><br>" +
        "(C) 'dull' means lacking interest or excitement." +
        "<br><br>" +
        "(D) 'bitter' means having a sharp, pungent taste or smell; not sweet.",
    chinese_explanation: "(A) '芳香的' 意味着愉快和甜美的气味，通常用来比喻描述非常令人愉快的事物。" +
        "<br><br>" +
        "(B) '刺耳的' 意味着令人不快的粗糙或刺耳的。" +
        "<br><br>" +
        "(C) '乏味的' 意味着缺乏兴趣或兴奋的。" +
        "<br><br>" +
        "(D) '苦涩的' 意味着有尖锐、辛辣的味道或气味；不甜的。"
    },
    {
        id: 4,
    question: "The news of her promotion brought a __________ glow to her face, reflecting her joy and excitement.",
    chinese_question: "她升职的消息让她的脸上露出 __________ 的光芒，反映出她的喜悦和兴奋。",
    answers: [
        { option: "A", answer: "radiant", chinese_answer: "光芒四射的", chinese_romanization: "guāngmáng sìshè de" },
        { option: "B", answer: "somber", chinese_answer: "阴沉的", chinese_romanization: "yīnchén de" },
        { option: "C", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mò bù guānxīn de" },
        { option: "D", answer: "pale", chinese_answer: "苍白的", chinese_romanization: "cāngbái de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'radiant' means expressing joy, love, health, etc., in a very noticeable way." +
        "<br><br>" +
        "(B) 'somber' means dark or dull in color or tone; gloomy." +
        "<br><br>" +
        "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
        "<br><br>" +
        "(D) 'pale' means light in color or having little color.",
    chinese_explanation: "(A) '光芒四射的' 意味着以非常明显的方式表达喜悦、爱、健康等。" +
        "<br><br>" +
        "(B) '阴沉的' 意味着颜色或色调暗淡或灰暗的；阴沉的。" +
        "<br><br>" +
        "(C) '漠不关心的' 意味着没有特别的兴趣或同情的；冷漠的。" +
        "<br><br>" +
        "(D) '苍白的' 意味着颜色浅或颜色很少的。"
    },
    {
        id: 5,
        question: "The stock market can be very __________, with prices fluctuating wildly in response to global events.",
        chinese_question: "股市可能非常 __________，价格因全球事件而大幅波动。",
        answers: [
            { option: "A", answer: "stable", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" },
            { option: "B", answer: "predictable", chinese_answer: "可预测的", chinese_romanization: "kě yùcè de" },
            { option: "C", answer: "volatile", chinese_answer: "易变的", chinese_romanization: "yìbiàn de" },
            { option: "D", answer: "consistent", chinese_answer: "一致的", chinese_romanization: "yīzhì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'volatile' means liable to change rapidly and unpredictably, especially for the worse." +
            "<br><br>" +
            "(A) 'stable' means not likely to change or fail; firmly established." +
            "<br><br>" +
            "(B) 'predictable' means able to be predicted." +
            "<br><br>" +
            "(D) 'consistent' means acting or done in the same way over time, especially so as to be fair or accurate.",
        chinese_explanation: "(C) '易变的' 意味着特别是朝着更坏的方向快速和不可预测地变化的。" +
            "<br><br>" +
            "(A) '稳定的' 意味着不太可能改变或失败；牢固建立的。" +
            "<br><br>" +
            "(B) '可预测的' 意味着能够被预测的。" +
            "<br><br>" +
            "(D) '一致的' 意味着随着时间的推移以同样的方式行动或完成，特别是为了公平或准确。"
    },
    {
        id: 6,
        question: "The __________ nature of their relationship became apparent as soon as they faced their first major challenge.",
        chinese_question: "他们关系的 __________ 性质在他们面对第一次重大挑战时就显现出来。",
        answers: [
            { option: "A", answer: "stable", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" },
            { option: "B", answer: "perishable", chinese_answer: "脆弱的", chinese_romanization: "cuìruò de" },
            { option: "C", answer: "strong", chinese_answer: "强壮的", chinese_romanization: "qiángzhuàng de" },
            { option: "D", answer: "enduring", chinese_answer: "持久的", chinese_romanization: "chíjiǔ de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'perishable' means likely to decay or go bad quickly." +
            "<br><br>" +
            "(A) 'stable' means not likely to change or fail; firmly established." +
            "<br><br>" +
            "(C) 'strong' means having the power to move heavy weights or perform other physically demanding tasks." +
            "<br><br>" +
            "(D) 'enduring' means lasting over a long period of time; durable.",
        chinese_explanation: "(B) '脆弱的' 意味着容易腐烂或很快变质。" +
            "<br><br>" +
            "(A) '稳定的' 意味着不太可能改变或失败；牢固建立的。" +
            "<br><br>" +
            "(C) '强壮的' 意味着有力量移动重物或执行其他体力要求高的任务。" +
            "<br><br>" +
            "(D) '持久的' 意味着持续很长时间的；耐用的。"
    },
    {
        id: 7,
        question: "After careful consideration, the committee concluded that the plan was __________ and worth pursuing.",
        chinese_question: "经过仔细考虑，委员会认为该计划是__________的，值得追求。",
        answers: [
            { option: "A", answer: "impossible", chinese_answer: "不可能的", chinese_romanization: "bù kěnéng de" },
            { option: "B", answer: "unworkable", chinese_answer: "不可行的", chinese_romanization: "bù kě xíng de" },
            { option: "C", answer: "feasible", chinese_answer: "可行的", chinese_romanization: "kěxíng de" },
            { option: "D", answer: "impractical", chinese_answer: "不切实际的", chinese_romanization: "bù qiè shíjì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'feasible' means possible to do easily or conveniently." +
            "<br><br>" +
            "(A) 'impossible' means not able to occur, exist, or be done." +
            "<br><br>" +
            "(B) 'unworkable' means not able to function or be carried out successfully." +
            "<br><br>" +
            "(D) 'impractical' means not adapted for use or action; not sensible or realistic.",
        chinese_explanation: "(C) '可行的'一词意味着容易或方便地做的。" +
            "<br><br>" +
            "'不可能的' 意味着不能发生、存在或完成的。" +
            "<br><br>" +
            "'不可行的' 意味着不能成功地运作或执行的。" +
            "<br><br>" +
            "'不切实际的' 意味着不适用于使用或行动的；不明智或不现实的。"
    },
    {
        id: 8,
    question: "Her __________ research in the field of renewable energy has significantly impacted global environmental policies.",
    chinese_question: "她在可再生能源领域的 __________ 研究对全球环境政策产生了重大影响。",
    answers: [
        { option: "A", answer: "inconsequential", chinese_answer: "无关紧要", chinese_romanization: "wúguān jǐnyào" },
        { option: "B", answer: "influential", chinese_answer: "有影响力", chinese_romanization: "yǒu yǐngxiǎng lì" },
        { option: "C", answer: "trivial", chinese_answer: "微不足道", chinese_romanization: "wēibùzúdào" },
        { option: "D", answer: "minor", chinese_answer: "次要", chinese_romanization: "cìyào" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'influential' means having the power to have an effect on people or events." +
        "<br><br>" +
        "(A) 'inconsequential' means not important or significant." +
        "<br><br>" +
        "(C) 'trivial' means of little value or importance." +
        "<br><br>" +
        "(D) 'minor' means lesser in importance, seriousness, or significance.",
    chinese_explanation: "(B) “有影响力” 意味着有能力对人或事件产生影响。" +
        "<br><br>" +
        "(A) '无关紧要' 意味着不重要或不显著。" +
        "<br><br>" +
        "(C) '微不足道' 意味着价值或重要性很小。" +
        "<br><br>" +
        "(D) '次要' 意味着在重要性、严重性或意义上较小。"
    },
    {
        id: 9,
        question: "In an effort to resolve the conflict, she adopted a __________ tone, hoping to soothe tempers and reach an agreement.",
        chinese_question: "为了化解冲突，她采用了 __________ 的语气，希望平息怒气并达成协议。",
        answers: [
                { option: "A", answer: "aggressive", chinese_answer: "侵略性的", chinese_romanization: "qīnlüè xìng de" },
                { option: "B", answer: "conciliatory", chinese_answer: "调解的", chinese_romanization: "tiáojiě de" },
                { option: "C", answer: "hostile", chinese_answer: "敌对的", chinese_romanization: "díduì de" },
                { option: "D", answer: "confrontational", chinese_answer: "对抗的", chinese_romanization: "duìkàng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'conciliatory' means intended or likely to placate or pacify." +
            "<br><br>" +
            "(A) 'aggressive' means ready or likely to attack or confront." +
            "<br><br>" +
            "(C) 'hostile' means unfriendly; antagonistic." +
            "<br><br>" +
            "(D) 'confrontational' means tending to deal with situations in an aggressive way; hostile or argumentative.",
        chinese_explanation: "(B) '调解的' 一词意味着旨在安抚或平息的。" +
            "<br><br>" +
            "(A) '侵略性的' 意味着准备或可能攻击或对抗的。" +
            "<br><br>" +
            "(C) '敌对的' 意味着不友好的；对抗的。" +
            "<br><br>" +
            "(D) '对抗的' 意味着倾向于以攻击性的方式处理情况；敌对或争论的。"
    },
    {
        id: 10,
        question: "In her __________ haste to leave the house, she forgot her keys and wallet, causing a whole day of inconvenience.",
        chinese_question: "她 __________ 地急着离开家，忘了带钥匙和钱包，导致整天不方便。",
        answers: [
                { option: "A", answer: "cautious", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" },
                { option: "B", answer: "thoughtful", chinese_answer: "深思熟虑的", chinese_romanization: "shēnsī shúlǜ de" },
                { option: "C", answer: "impetuous", chinese_answer: "冲动的", chinese_romanization: "chōngdòng de" },
                { option: "D", answer: "deliberate", chinese_answer: "故意的", chinese_romanization: "gùyì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'impetuous' means acting or done quickly and without thought or care." +
            "<br><br>" +
            "(A) 'cautious' means careful to avoid potential problems or dangers." +
            "<br><br>" +
            "(B) 'thoughtful' means showing consideration for the needs of other people." +
            "<br><br>" +
            "(D) 'deliberate' means done consciously and intentionally.",
        chinese_explanation: "(C) '冲动的' 一词意味着快速而没有思考或关心地行动或完成的。" +
            "<br><br>" +
            "(A) '谨慎的' 意味着小心避免潜在的问题或危险。" +
            "<br><br>" +
            "(B) '深思熟虑的' 意味着对他人需求的考虑。" +
            "<br><br>" +
            "(D) '故意的' 意味着有意识和有意地做的。"
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
