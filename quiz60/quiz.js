// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her sudden change in behaviour was __________ to her friends, who couldn't understand why she was acting so differently.",
        chinese_question: "她突然的行为变化让她的朋友们感到 __________，他们无法理解她为何如此不同。",
        answers: [
            { option: "A", answer: "unsettling", chinese_answer: "令人不安的", chinese_romanization: "lìng rén bù'ān de" },
            { option: "B", answer: "predictable", chinese_answer: "可预测的", chinese_romanization: "kě yùcè de" },
            { option: "C", answer: "reassuring", chinese_answer: "令人安心的", chinese_romanization: "lìng rén ānxīn de" },
            { option: "D", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'unsettling' means causing anxiety or uneasiness; disturbing." +
            "<br><br>" +
            "(B) 'predictable' means able to be predicted; expected." +
            "<br><br>" +
            "(C) 'reassuring' means serving or intended to remove someone's doubts or fears." +
            "<br><br>" +
            "(D) 'ordinary' means with no special or distinctive features; normal.",
        chinese_explanation: "(A) '令人不安的' 意味着引起焦虑或不安的；令人不安的。" +
            "<br><br>" +
            "(B) '可预测的' 意味着能够预测的；预期的。" +
            "<br><br>" +
            "(C) '令人安心的' 意味着服务于或意在消除某人的疑虑或恐惧的。" +
            "<br><br>" +
            "(D) '普通的' 意味着没有特别或独特的特征的；正常的。"
    },
    {
        id: 2,
    question: "The work of a good leader is often __________, but its effects are felt by everyone.",
    chinese_question: "一位好领导的工作往往是 __________ 的，但其影响却为每个人所感受到。",
    answers: [
        { option: "A", answer: "invisible", chinese_answer: "隐形", chinese_romanization: "yǐnxíng" },
        { option: "B", answer: "apparent", chinese_answer: "显然", chinese_romanization: "xiǎnrán" },
        { option: "C", answer: "evident", chinese_answer: "明显", chinese_romanization: "míngxiǎn" },
        { option: "D", answer: "recognized", chinese_answer: "公认", chinese_romanization: "gōngrèn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'invisible' means unable to be seen; not visible to the eye." +
        "<br><br>" +
        "(B) 'apparent' means clearly visible or understood; obvious." +
        "<br><br>" +
        "(C) 'evident' means clearly seen or understood; obvious." +
        "<br><br>" +
        "(D) 'recognized' means acknowledged as being good, important, or correct.",
    chinese_explanation: "(A) '隐形' 意味着无法被看到；肉眼看不见。" +
        "<br><br>" +
        "(B) '显然' 意味着清楚地可见或理解；明显。" +
        "<br><br>" +
        "(C) '明显' 意味着清楚地看到或理解；显然。" +
        "<br><br>" +
        "(D) '公认' 意味着被承认为好的、重要的或正确的。"
    },
    {
        id: 3,
        question: "Her __________ integrity made her the ideal candidate for the position of judge, as she was trusted by everyone.",
        chinese_question: "她 __________ 的正直使她成为法官职位的理想人选，因为每个人都信任她。",
        answers: [
                { option: "A", answer: "questionable", chinese_answer: "可疑的", chinese_romanization: "kěyí de" },
                { option: "B", answer: "unimpeachable", chinese_answer: "无可指责的", chinese_romanization: "wúkě zhǐzé de" },
                { option: "C", answer: "doubtful", chinese_answer: "不确定的", chinese_romanization: "bù quèdìng de" },
                { option: "D", answer: "suspect", chinese_answer: "怀疑的", chinese_romanization: "huáiyí de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'unimpeachable' means not able to be doubted, questioned, or criticized; entirely trustworthy." +
            "<br><br>" +
            "(A) 'questionable' means doubtful as regards truth or quality." +
            "<br><br>" +
            "(C) 'doubtful' means feeling uncertain about something." +
            "<br><br>" +
            "(D) 'suspect' means not to be relied on or trusted; possibly dangerous or false.",
        chinese_explanation: "(B) '无可指责的' 一词意味着不能被怀疑、质疑或批评；完全值得信赖的。" +
            "<br><br>" +
            "(A) '可疑的' 意味着对真实性或质量存疑。" +
            "<br><br>" +
            "(C) '不确定的' 意味着对某事感到不确定。" +
            "<br><br>" +
            "(D) '怀疑的' 意味着不可靠或不可信；可能危险或虚假的。"
    },
    {
        id: 4,
    question: "Time is __________, and wasting it on unimportant tasks can lead to missed opportunities and regrets.",
    chinese_question: "时间是 __________ 的，浪费在不重要的任务上会导致错失机会和遗憾。",
    answers: [
        { option: "A", answer: "precious", chinese_answer: "珍贵的", chinese_romanization: "zhēnguì de" },
        { option: "B", answer: "abundant", chinese_answer: "丰富的", chinese_romanization: "fēngfù de" },
        { option: "C", answer: "plentiful", chinese_answer: "大量的", chinese_romanization: "dàliàng de" },
        { option: "D", answer: "insignificant", chinese_answer: "无关紧要的", chinese_romanization: "wúguān jìnyào de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'precious' means of great value; not to be wasted or treated carelessly." +
        "<br><br>" +
        "(B) 'abundant' means existing or available in large quantities; plentiful." +
        "<br><br>" +
        "(C) 'plentiful' means existing in or yielding great quantities; abundant." +
        "<br><br>" +
        "(D) 'insignificant' means too small or unimportant to be worth consideration.",
    chinese_explanation: "(A) '珍贵的' 意味着非常有价值的；不应被浪费或粗心对待的。" +
        "<br><br>" +
        "(B) '丰富的' 意味着存在或可用数量大的；充裕的。" +
        "<br><br>" +
        "(C) '大量的' 意味着存在或产量大的；丰富的。" +
        "<br><br>" +
        "(D) '无关紧要的' 意味着价值或重要性太小而不值得考虑的。"
    },
    {
        id: 5,
        question: "The novel depicted a __________ society where traditional morals were disregarded, and people pursued their desires without restraint.",
        chinese_question: "这部小说描绘了一个 __________ 的社会，传统道德被抛弃，人们无拘无束地追求自己的欲望。",
        answers: [
            { option: "A", answer: "virtuous", chinese_answer: "有德的", chinese_romanization: "yǒu dé de" },
            { option: "B", answer: "licentious", chinese_answer: "放荡的", chinese_romanization: "fàngdàng de" },
            { option: "C", answer: "ethical", chinese_answer: "道德的", chinese_romanization: "dàodé de" },
            { option: "D", answer: "righteous", chinese_answer: "正义的", chinese_romanization: "zhèngyì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'licentious' means promiscuous and unprincipled in sexual matters." +
            "<br><br>" +
            "(A) 'virtuous' means having or showing high moral standards." +
            "<br><br>" +
            "(C) 'ethical' means relating to moral principles or the branch of knowledge dealing with these." +
            "<br><br>" +
            "(D) 'righteous' means morally right or justifiable; virtuous.",
        chinese_explanation: "(B) '放荡的' 意味着在性方面放纵和没有原则的。" +
            "<br><br>" +
            "(A) '有德的' 意味着具有或表现出高道德标准的。" +
            "<br><br>" +
            "(C) '道德的' 意味着与道德原则或处理这些原则的知识分支有关的。" +
            "<br><br>" +
            "(D) '正义的' 意味着在道德上正确或正当的；有德的。"
    },
    {
        id: 6,
    question: "The judge gave a __________ sentence to the convicted criminal to set an example.",
    chinese_question: "法官对被判有罪的罪犯判了 __________ 的刑罚，以儆效尤。",
    answers: [
        { option: "A", answer: "lenient", chinese_answer: "宽容的", chinese_romanization: "kuānróng de" },
        { option: "B", answer: "mild", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
        { option: "C", answer: "severe", chinese_answer: "严厉的", chinese_romanization: "yánlì de" },
        { option: "D", answer: "forgiving", chinese_answer: "宽恕的", chinese_romanization: "kuānshù de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'severe' means very great; intense." +
        "<br><br>" +
        "(A) 'lenient' means more merciful or tolerant than expected." +
        "<br><br>" +
        "(B) 'mild' means not severe, serious, or harsh." +
        "<br><br>" +
        "(D) 'forgiving' means ready and willing to forgive.",
    chinese_explanation: "(C) “严厉的” 意味着非常大的；强烈的。" +
        "<br><br>" +
        "(A) '宽容的' 意味着比预期更仁慈或更宽容。" +
        "<br><br>" +
        "(B) '温和的' 意味着不严重、严厉或苛刻。" +
        "<br><br>" +
        "(D) '宽恕的' 意味着准备好并愿意原谅。"
    },
    {
        id: 7,
    question: "In her __________ opinion, she didn't deserve the award, believing others were more worthy.",
    chinese_question: "在她 __________ 的看法中，她不配得奖，相信其他人更值得。",
    answers: [
        { option: "A", answer: "humble", chinese_answer: "谦虚", chinese_romanization: "qiānxū" },
        { option: "B", answer: "proud", chinese_answer: "自豪", chinese_romanization: "zìháo" },
        { option: "C", answer: "vain", chinese_answer: "虚荣", chinese_romanization: "xūróng" },
        { option: "D", answer: "haughty", chinese_answer: "傲慢", chinese_romanization: "àomàn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'humble' means having or showing a modest or low estimate of one's importance." +
        "<br><br>" +
        "(B) 'proud' means feeling deep pleasure or satisfaction as a result of one's own achievements, qualities, or possessions." +
        "<br><br>" +
        "(C) 'vain' means having or showing an excessively high opinion of one's appearance, abilities, or worth." +
        "<br><br>" +
        "(D) 'haughty' means arrogantly superior and disdainful.",
    chinese_explanation: "(A) '谦虚' 意味着对自己的重要性有或表现出适度或低估。" +
        "<br><br>" +
        "(B) '自豪' 意味着因自己的成就、品质或财产感到深深的愉悦或满足。" +
        "<br><br>" +
        "(C) '虚荣' 意味着对自己的外表、能力或价值有或表现出过高的评价。" +
        "<br><br>" +
        "(D) '傲慢' 意味着傲慢的优越和轻蔑。"
    },
    {
        id: 8,
    question: "His __________ demeanour made it difficult for others to know what he was thinking or feeling.",
    chinese_question: "他的 __________ 举止使得他人很难知道他在想什么或感觉如何。",
    answers: [
        { option: "A", answer: "gregarious", chinese_answer: "合群的", chinese_romanization: "héqún de" },
        { option: "B", answer: "outgoing", chinese_answer: "外向的", chinese_romanization: "wàixiàng de" },
        { option: "C", answer: "taciturn", chinese_answer: "沉默寡言的", chinese_romanization: "chénmò guǎyán de" },
        { option: "D", answer: "sociable", chinese_answer: "好交际的", chinese_romanization: "hǎo jiāojì de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'taciturn' means reserved or uncommunicative in speech; saying little." +
        "<br><br>" +
        "(A) 'gregarious' means fond of company; sociable." +
        "<br><br>" +
        "(B) 'outgoing' means friendly and socially confident." +
        "<br><br>" +
        "(D) 'sociable' means willing to talk and engage in activities with other people; friendly.",
    chinese_explanation: "(C) '沉默寡言的' 意味着言语上保守或不爱说话；说得很少。" +
        "<br><br>" +
        "(A) '合群的' 意味着喜欢结交朋友的；善于交际的。" +
        "<br><br>" +
        "(B) '外向的' 意味着友好和社交自信的。" +
        "<br><br>" +
        "(D) '好交际的' 意味着愿意与他人交谈和参加活动的；友好的。"
    },
    {
        id: 9,
    question: "Trying to change his mind once he has decided is __________.",
    chinese_question: "一旦他决定了，再试图改变他的想法是 __________ 的。",
    answers: [
        { option: "A", answer: "fruitful", chinese_answer: "富有成果的", chinese_romanization: "fùyǒu chéngguǒ de" },
        { option: "B", answer: "essential", chinese_answer: "必要的", chinese_romanization: "bìyào de" },
        { option: "C", answer: "pointless", chinese_answer: "无意义的", chinese_romanization: "wú yìyì de" },
        { option: "D", answer: "crucial", chinese_answer: "关键的", chinese_romanization: "guānjiàn de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'pointless' means having no purpose or effect." +
        "<br><br>" +
        "(A) 'fruitful' means producing good or helpful results; productive." +
        "<br><br>" +
        "(B) 'essential' means absolutely necessary; extremely important." +
        "<br><br>" +
        "(D) 'crucial' means decisive or critical, especially in the success or failure of something.",
    chinese_explanation: "(C) “无意义的” 意味着没有目的或效果。" +
        "<br><br>" +
        "(A) '富有成果的' 意味着产生好的或有帮助的结果；富有成效的。" +
        "<br><br>" +
        "(B) '必要的' 意味着绝对必要的；极其重要的。" +
        "<br><br>" +
        "(D) '关键的' 意味着决定性或关键的，尤其是在成功或失败方面。"
    },
    {
        id: 10,
        question: "His __________ pursuit of success often led him to work late into the night, sacrificing personal time for professional achievements.",
        chinese_question: "他 __________ 地追求成功，常常工作到深夜，为了职业成就牺牲了个人时间。",
        answers: [
            { option: "A", answer: "driven", chinese_answer: "有动力的", chinese_romanization: "yǒu dònglì de" },
            { option: "B", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
            { option: "C", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "D", answer: "uninterested", chinese_answer: "不感兴趣的", chinese_romanization: "bù gǎn xìngqù de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'driven' means being highly motivated to achieve something." +
            "<br><br>" +
            "(B) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'uninterested' means not interested in or concerned about something or someone.",
        chinese_explanation: "(A) '有动力的' 意味着高度积极主动去实现某事。" +
            "<br><br>" +
            "(B) '粗心的' 意味着没有给予足够的注意或思考以避免伤害或错误的。" +
            "<br><br>" +
            "(C) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
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
