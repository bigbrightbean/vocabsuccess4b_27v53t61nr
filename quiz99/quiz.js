// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "After realizing the error, the judge had no choice but to __________ the ruling.",
        chinese_question: "在意识到错误后，法官别无选择，只能 __________ 判决。",
        answers: [
                { option: "A", answer: "affirm", chinese_answer: "确认", chinese_romanization: "quèrèn" },
                { option: "B", answer: "rescind", chinese_answer: "撤销", chinese_romanization: "chèxiāo" },
                { option: "C", answer: "endorse", chinese_answer: "认可", chinese_romanization: "rènkě" },
                { option: "D", answer: "expedite", chinese_answer: "加快", chinese_romanization: "jiākuài" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'rescind' means to revoke, cancel, or repeal a law, order, or agreement." +
                "<br><br>" +
                "(A) 'affirm' means to state as a fact; assert strongly and publicly." +
                "<br><br>" +
                "(C) 'endorse' means to declare one's public approval or support of." +
                "<br><br>" +
                "(D) 'expedite' means to make an action or process happen sooner or be accomplished more quickly.",
        chinese_explanation: "(B) '撤销' 意味着撤销、取消或废除一项法律、命令或协议。" +
                "<br><br>" +
                "(A) '确认' 意味着作为事实陈述；强烈而公开地断言。" +
                "<br><br>" +
                "(C) '认可' 意味着公开表示赞同或支持。" +
                "<br><br>" +
                "(D) '加快' 意味着使某个行动或过程更快发生或完成。"
    },
    {
        id: 2,
        question: "He accidentally __________ his hand with a nail while working on the project.",
        chinese_question: "他在做项目时不小心用钉子 __________ 了手。",
        answers: [
                { option: "A", answer: "impaled", chinese_answer: "刺穿", chinese_romanization: "cìchuān" },
                { option: "B", answer: "healed", chinese_answer: "治愈", chinese_romanization: "zhìyù" },
                { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "assisted", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'impaled' means to pierce or transfix with a sharp instrument." +
                "<br><br>" +
                "(B) 'healed' means to make or become sound or healthy again." +
                "<br><br>" +
                "(C) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'assisted' means to help someone.",
        chinese_explanation: "(A) '刺穿' 意味着用锋利的工具刺穿或穿透。" +
                "<br><br>" +
                "(B) '治愈' 意味着使某物或某人恢复健康。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '帮助' 意味着帮助某人。"
    },
    {
        id: 3,
    question: "The noble family's crest was __________ on the grand entrance of their ancestral home.",
    chinese_question: "贵族家族的徽章 __________ 在祖宅的大门上。",
    answers: [
        { option: "A", answer: "emblazoned", chinese_answer: "醒目地展示", chinese_romanization: "xǐngmù dì zhǎnshì" },
        { option: "B", answer: "scratched", chinese_answer: "划伤", chinese_romanization: "huáshāng" },
        { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "concealed", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'emblazoned' means to display a design prominently or vividly." +
        "<br><br>" +
        "(B) 'scratched' means to make small cuts or marks on a surface." +
        "<br><br>" +
        "(C) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'concealed' means to keep something secret or hidden.",
    chinese_explanation: "(A) '醒目地展示' 意味着突出或生动地展示设计。" +
        "<br><br>" +
        "(B) '划伤' 意味着在表面上做出小的切割或标记。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '隐藏' 意味着保密或隐藏某物。"
    },
    {
        id: 4,
        question: "To protect confidential information, the company __________ the use of personal email accounts for business communication.",
        chinese_question: "为了保护机密信息，公司 __________ 使用个人电子邮件账户进行业务沟通。",
        answers: [
                { option: "A", answer: "endorsed", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "B", answer: "interdicted", chinese_answer: "禁止", chinese_romanization: "jìnzhǐ" },
                { option: "C", answer: "promoted", chinese_answer: "促进", chinese_romanization: "cùjìn" },
                { option: "D", answer: "dismissed", chinese_answer: "解雇", chinese_romanization: "jiěgù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'interdicted' used figuratively means to prohibit or forbid something officially." +
                "<br><br>" +
                "(A) 'endorsed' means to declare one's public approval or support of." +
                "<br><br>" +
                "(C) 'promoted' means to advance or raise to a higher position or rank." +
                "<br><br>" +
                "(D) 'dismissed' means to order or allow someone to leave.",
        chinese_explanation: "(B) '禁止' 在比喻意义上指官方禁止或禁止某事。" +
                "<br><br>" +
                "(A) '支持' 意味着公开表示赞同或支持。" +
                "<br><br>" +
                "(C) '促进' 意味着晋升到更高的位置或级别。" +
                "<br><br>" +
                "(D) '解雇' 意味着命令或允许某人离开。"
    },
    {
        id: 5,
        question: "Instead of __________ about his failures, he decided to learn from them and move forward.",
        chinese_question: "他没有对自己的失败 __________，而是决定从中吸取教训并继续前进。",
        answers: [
                { option: "A", answer: "praise", chinese_answer: "称赞", chinese_romanization: "chēngzàn" },
                { option: "B", answer: "whisper", chinese_answer: "低语", chinese_romanization: "dīyǔ" },
                { option: "C", answer: "mewl", chinese_answer: "抱怨", chinese_romanization: "bàoyuàn" },
                { option: "D", answer: "cheer", chinese_answer: "欢呼", chinese_romanization: "huānhū" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'mewl' means to cry feebly or querulously like a kitten." +
                "<br><br>" +
                "(A) 'praise' means to express admiration or approval." +
                "<br><br>" +
                "(B) 'whisper' means to speak very softly." +
                "<br><br>" +
                "(D) 'cheer' means to shout for joy or in encouragement.",
        chinese_explanation: "(C) '抱怨' 一词意味着像小猫一样微弱或抱怨地哭泣。" +
                "<br><br>" +
                "(A) '称赞' 意味着表达钦佩或赞同。" +
                "<br><br>" +
                "(B) '低语' 意味着非常轻声地说话。" +
                "<br><br>" +
                "(D) '欢呼' 意味着因高兴或鼓励而喊叫。"
    },
    {
        id: 6,
        question: "The teaser trailer for the new movie was designed to __________ the audience, leaving them eager for the full release.",
        chinese_question: "新电影的预告片旨在 __________ 观众，让他们渴望看到完整版。",
        answers: [
                { option: "A", answer: "bore", chinese_answer: "使无聊", chinese_romanization: "shǐ wúliáo" },
                { option: "B", answer: "titillate", chinese_answer: "刺激", chinese_romanization: "cìjī" },
                { option: "C", answer: "depress", chinese_answer: "使沮丧", chinese_romanization: "shǐ jǔsàng" },
                { option: "D", answer: "calm", chinese_answer: "使平静", chinese_romanization: "shǐ píngjìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'titillate' figuratively means to excite or arouse interest or enjoyment." +
                "<br><br>" +
                "(A) 'bore' means to cause someone to feel uninterested." +
                "<br><br>" +
                "(C) 'depress' means to make someone feel sad." +
                "<br><br>" +
                "(D) 'calm' means to make peaceful.",
        chinese_explanation: "(B) '刺激' 一词在比喻上意味着激发或引起兴趣或享受。" +
                "<br><br>" +
                "(A) '使无聊' 意味着使某人感到没有兴趣。" +
                "<br><br>" +
                "(C) '使沮丧' 意味着使某人感到悲伤。" +
                "<br><br>" +
                "(D) '使平静' 意味着使平静。"
    },
    {
        id: 7,
    question: "The frequent power outages __________ the residents, forcing them to find alternative sources of light and heat.",
    chinese_question: "频繁的停电 __________ 居民，迫使他们寻找替代的光源和热源。",
    answers: [
        { option: "A", answer: "please", chinese_answer: "取悦", chinese_romanization: "qǔyuè" },
        { option: "B", answer: "discommode", chinese_answer: "打扰", chinese_romanization: "dǎrǎo" },
        { option: "C", answer: "entertain", chinese_answer: "娱乐", chinese_romanization: "yúlè" },
        { option: "D", answer: "comfort", chinese_answer: "安慰", chinese_romanization: "ānwèi" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'discommode' means to cause inconvenience or trouble to someone." +
        "<br><br>" +
        "(A) 'please' means to cause to feel happy and satisfied." +
        "<br><br>" +
        "(C) 'entertain' means to provide someone with amusement or enjoyment." +
        "<br><br>" +
        "(D) 'comfort' means to ease the grief or distress of someone.",
    chinese_explanation: "(B) '打扰' 意味着给某人带来不便或麻烦。" +
        "<br><br>" +
        "(A) '取悦' 意味着使某人感到高兴和满足。" +
        "<br><br>" +
        "(C) '娱乐' 意味着提供某人娱乐或享受。" +
        "<br><br>" +
        "(D) '安慰' 意味着减轻某人的悲伤或痛苦。"
    },
    {
        id: 8,
    question: "The scandal managed to __________ the politician's career, leaving it in ruins.",
    chinese_question: "丑闻 __________ 了这位政治家的职业生涯，使其陷入毁灭。",
    answers: [
        { option: "A", answer: "enhance", chinese_answer: "增强", chinese_romanization: "zēngqiáng" },
        { option: "B", answer: "decimate", chinese_answer: "摧毁", chinese_romanization: "cuīhuǐ" },
        { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "D", answer: "nurture", chinese_answer: "培育", chinese_romanization: "péiyù" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'decimate' means to destroy a large percentage of something, used figuratively to mean severely damage or destroy." +
        "<br><br>" +
        "(A) 'enhance' means to intensify, increase, or further improve the quality or value of." +
        "<br><br>" +
        "(C) 'support' means to bear all or part of the weight; hold up." +
        "<br><br>" +
        "(D) 'nurture' means to care for and encourage the growth or development of.",
    chinese_explanation: "(B) '摧毁' 意味着摧毁大部分的某物，比喻意义上指严重损害或破坏。" +
        "<br><br>" +
        "(A) '增强' 意味着加强、增加或进一步改善质量或价值。" +
        "<br><br>" +
        "(C) '支持' 意味着支撑全部或部分重量。" +
        "<br><br>" +
        "(D) '培育' 意味着照料和促进生长或发展。"
    },
    {
        id: 9,
        question: "The various departments need to __________ their efforts to complete the project on time.",
        chinese_question: "各部门需要 __________ 努力，才能按时完成项目。",
        answers: [
                { option: "A", answer: "coalesce", chinese_answer: "合并", chinese_romanization: "hébìng" },
                { option: "B", answer: "divide", chinese_answer: "分裂", chinese_romanization: "fēnliè" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "hinder", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'coalesce' means to come together to form one mass or whole." +
                "<br><br>" +
                "(B) 'divide' means to separate or be separated into parts." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'hinder' means to create difficulties for someone or something, resulting in delay or obstruction.",
        chinese_explanation: "(A) '合并' 意味着聚集在一起形成一个整体。" +
                "<br><br>" +
                "(B) '分裂' 意味着分离或被分离成部分。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '阻碍' 意味着给某人或某事造成困难，从而导致延误或阻碍。"
    },
    {
        id: 10,
    question: "Many people __________ the dictator for his brutal regime and human rights abuses.",
    chinese_question: "许多人 __________ 这个独裁者，因为他的残暴政权和侵犯人权的行为。",
    answers: [
        { option: "A", answer: "revered", chinese_answer: "敬仰", chinese_romanization: "jìngyǎng" },
        { option: "B", answer: "execrated", chinese_answer: "憎恶", chinese_romanization: "zēngwù" },
        { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "respected", chinese_answer: "尊敬", chinese_romanization: "zūnjìng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'execrated' means to feel or express great loathing for." +
        "<br><br>" +
        "(A) 'revered' means to feel deep respect or admiration for something." +
        "<br><br>" +
        "(C) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'respected' means to admire someone or something deeply, as a result of their abilities, qualities, or achievements.",
    chinese_explanation: "(B) '憎恶' 意味着感到或表达极大的厌恶。" +
        "<br><br>" +
        "(A) '敬仰' 意味着对某物感到深深的尊敬或钦佩。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '尊敬' 意味着因为某人的能力、品质或成就而深深钦佩某人或某物。"
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
