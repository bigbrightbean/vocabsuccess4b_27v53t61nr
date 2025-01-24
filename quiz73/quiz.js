// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "His __________ betrayed his inner turmoil, despite his attempts to remain composed.",
    chinese_question: "尽管他试图保持镇静，他的 __________ 还是暴露了他内心的动荡。",
    answers: [
        { option: "A", answer: "countenance", chinese_answer: "面容", chinese_romanization: "miànróng" },
        { option: "B", answer: "calmness", chinese_answer: "平静", chinese_romanization: "píngjìng" },
        { option: "C", answer: "mask", chinese_answer: "面具", chinese_romanization: "miànjù" },
        { option: "D", answer: "facade", chinese_answer: "外表", chinese_romanization: "wàibiǎo" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'countenance' means a person's face or facial expression, especially as an indicator of mood or emotion." + 
        "<br><br>" + 
        "(B) 'calmness' means the state or quality of being free from agitation or strong emotion." + 
        "<br><br>" + 
        "(C) 'mask' means a covering for all or part of the face." + 
        "<br><br>" + 
        "(D) 'facade' means the face of a building, especially the principal front that looks onto a street or open space.",
    chinese_explanation: "(A) “面容” 意味着一个人的脸或面部表情，特别是作为情绪或心情的指示。" + 
        "<br><br>" + 
        "(B) '平静' 意味着没有骚动或强烈情感的状态或质量。" + 
        "<br><br>" + 
        "(C) '面具' 意味着覆盖整个或部分脸部的东西。" + 
        "<br><br>" + 
        "(D) '外表' 意味着建筑物的正面，特别是面向街道或开放空间的主要正面。"
    },
    {
        id: 2,
        question: "Her emotions were a __________ after hearing the unexpected news, leaving her feeling overwhelmed and confused.",
        chinese_question: "听到意外消息后，她的情绪变成了 __________，让她感到不知所措和困惑。",
        answers: [
            { option: "A", answer: "maelstrom", chinese_answer: "漩涡", chinese_romanization: "xuánwō" },
            { option: "B", answer: "peace", chinese_answer: "平静", chinese_romanization: "píngjìng" },
            { option: "C", answer: "clarity", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
            { option: "D", answer: "certainty", chinese_answer: "确定性", chinese_romanization: "quèdìngxìng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'maelstrom' figuratively means a situation or state of confused movement or violent turmoil." +
            "<br><br>" +
            "(B) 'peace' means freedom from disturbance; tranquility." +
            "<br><br>" +
            "(C) 'clarity' means the quality of being clear, in particular." +
            "<br><br>" +
            "(D) 'certainty' means firm conviction that something is the case.",
        chinese_explanation: "(A) '漩涡' 在此语境下比喻一种混乱的运动或暴力动荡状态。" +
            "<br><br>" +
            "(B) '平静' 意味着没有干扰的自由；宁静。" +
            "<br><br>" +
            "(C) '清晰' 意味着清晰的质量，尤其是。" +
            "<br><br>" +
            "(D) '确定性' 意味着对某事是如此的坚定信念。"
    },
    {
        id: 3,
        question: "The hikers packed enough __________ to last them through their week-long trek in the mountains.",
        chinese_question: "徒步旅行者准备了足够的 __________，以便在山中的一周旅程中维持生计。",
        answers: [
                { option: "A", answer: "equipment", chinese_answer: "设备", chinese_romanization: "shèbèi" },
                { option: "B", answer: "clothing", chinese_answer: "衣服", chinese_romanization: "yīfú" },
                { option: "C", answer: "victuals", chinese_answer: "食物", chinese_romanization: "shíwù" },
                { option: "D", answer: "tools", chinese_answer: "工具", chinese_romanization: "gōngjù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'victuals' means food or provisions." +
            "<br><br>" +
            "(A) 'equipment' means the necessary items for a particular purpose." +
            "<br><br>" +
            "(B) 'clothing' means items worn to cover the body." +
            "<br><br>" +
            "(D) 'tools' means devices or implements used to carry out a particular function.",
        chinese_explanation: "(C) '食物'一词意味着食物或粮食。" +
            "<br><br>" +
            "(A) '设备' 意味着用于特定目的的必要物品。" +
            "<br><br>" +
            "(B) '衣服' 意味着覆盖身体的物品。" +
            "<br><br>" +
            "(D) '工具' 意味着用于执行特定功能的设备或器具。"
    },
    {
        id: 4,
        question: "The __________ of knowledge is a lifelong journey that requires curiosity and dedication.",
        chinese_question: "知识的 __________ 是一段需要好奇心和奉献精神的终生旅程。",
        answers: [
            { option: "A", answer: "acquisition", chinese_answer: "获得", chinese_romanization: "huòdé" },
            { option: "B", answer: "decline", chinese_answer: "衰退", chinese_romanization: "shuāituì" },
            { option: "C", answer: "ignorance", chinese_answer: "无知", chinese_romanization: "wúzhī" },
            { option: "D", answer: "avoidance", chinese_answer: "避免", chinese_romanization: "bìmiǎn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'acquisition' figuratively means the act of obtaining or gaining possession, especially knowledge or skills." +
            "<br><br>" +
            "(B) 'decline' means a gradual and continuous loss of strength, numbers, quality, or value." +
            "<br><br>" +
            "(C) 'ignorance' means lack of knowledge or information." +
            "<br><br>" +
            "(D) 'avoidance' means the action of keeping away from or not doing something.",
        chinese_explanation: "(A) '获得' 在此语境下意指获取或获得所有权的行为，特别是知识或技能。" +
            "<br><br>" +
            "(B) '衰退' 意味着力量、数量、质量或价值的逐渐和持续的损失。" +
            "<br><br>" +
            "(C) '无知' 意味着缺乏知识或信息。" +
            "<br><br>" +
            "(D) '避免' 意味着远离或不做某事的行为。"
    },
    {
        id: 5,
    question: "He sought __________ from his past mistakes by volunteering in his community.",
    chinese_question: "他通过在社区做志愿者寻求对过去错误的 __________。",
    answers: [
        { option: "A", answer: "punishment", chinese_answer: "惩罚", chinese_romanization: "chéngfá" },
        { option: "B", answer: "reward", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" },
        { option: "C", answer: "amnesty", chinese_answer: "大赦", chinese_romanization: "dàshè" },
        { option: "D", answer: "exile", chinese_answer: "流放", chinese_romanization: "liúfàng" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'amnesty' figuratively means seeking forgiveness or a pardon for one's actions." + 
        "<br><br>" + 
        "(A) 'punishment' means the infliction or imposition of a penalty as retribution for an offense." + 
        "<br><br>" + 
        "(B) 'reward' means a thing given in recognition of one's service, effort, or achievement." + 
        "<br><br>" + 
        "(D) 'exile' means the state of being barred from one's native country, typically for political or punitive reasons.",
    chinese_explanation: "(C) '大赦' 在比喻意义上意味着寻求对某人行为的原谅或赦免。" + 
        "<br><br>" + 
        "(A) '惩罚' 意味着作为对犯罪行为的报复而施加的处罚。" + 
        "<br><br>" + 
        "(B) '奖励' 意味着对某人服务、努力或成就的认可。" + 
        "<br><br>" + 
        "(D) '流放' 意味着因政治或惩罚原因被禁止回到自己的祖国的状态。"
    },
    {
        id: 6,
        question: "The __________ of applicants for the new position surprised the hiring manager, who expected more interest.",
        chinese_question: "新职位申请人的 __________ 令招聘经理感到惊讶，他原本预期会有更多人感兴趣。",
        answers: [
            { option: "A", answer: "surplus", chinese_answer: "过剩", chinese_romanization: "guòshèng" },
            { option: "B", answer: "paucity", chinese_answer: "缺乏", chinese_romanization: "quēfá" },
            { option: "C", answer: "abundance", chinese_answer: "丰富", chinese_romanization: "fēngfù" },
            { option: "D", answer: "excess", chinese_answer: "过多", chinese_romanization: "guòduō" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'paucity' means the presence of something in only small or insufficient quantities or amounts; scarcity." +
            "<br><br>" +
            "(A) 'surplus' means an amount of something left over when requirements have been met; an excess of production or supply." +
            "<br><br>" +
            "(C) 'abundance' means a very large quantity of something." +
            "<br><br>" +
            "(D) 'excess' means an amount of something that is more than necessary, permitted, or desirable.",
        chinese_explanation: "(B) '缺乏'一词意味着只有少量或不足数量的东西的存在；稀缺。" +
            "<br><br>" +
            "(A) '过剩' 意味着在满足要求后剩余的东西；生产或供应过剩。" +
            "<br><br>" +
            "(C) '丰富' 意味着非常大量的东西。" +
            "<br><br>" +
            "(D) '过多' 意味着比必要、允许或期望的数量更多的东西。"
    },
    {
        id: 7,
        question: "In the tight-knit community, the local doctor was the __________, providing essential services and support to everyone.",
        chinese_question: "在紧密的社区中，当地医生是 __________，为每个人提供基本服务和支持。",
        answers: [
            { option: "A", answer: "linchpin", chinese_answer: "关键人物", chinese_romanization: "guānjiàn rénwù" },
            { option: "B", answer: "stranger", chinese_answer: "陌生人", chinese_romanization: "mòshēng rén" },
            { option: "C", answer: "observer", chinese_answer: "观察者", chinese_romanization: "guānchá zhě" },
            { option: "D", answer: "rival", chinese_answer: "对手", chinese_romanization: "duìshǒu" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'linchpin' figuratively means a person or thing vital to an enterprise or organization." +
            "<br><br>" +
            "(B) 'stranger' means a person whom one does not know or with whom one is not familiar." +
            "<br><br>" +
            "(C) 'observer' means a person who watches or notices something." +
            "<br><br>" +
            "(D) 'rival' means a person or thing competing with another for the same objective or for superiority in the same field of activity.",
        chinese_explanation: "(A) '关键人物' 在此语境下意指对企业或组织至关重要的人或事物。" +
            "<br><br>" +
            "(B) '陌生人' 意味着一个人不知道或不熟悉的人。" +
            "<br><br>" +
            "(C) '观察者' 意味着观察或注意某事的人。" +
            "<br><br>" +
            "(D) '对手' 意味着与另一个人为同一目标或在同一活动领域竞争的人或事物。"
    },
    {
        id: 8,
        question: "Her sudden success served as an __________ for others to pursue their goals with renewed vigour.",
        chinese_question: "她的突然成功成为了他人以重新的活力追求目标的 __________。",
        answers: [
                { option: "A", answer: "impediment", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
                { option: "B", answer: "impetus", chinese_answer: "动力", chinese_romanization: "dònglì" },
                { option: "C", answer: "apathy", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
                { option: "D", answer: "disinterest", chinese_answer: "不感兴趣", chinese_romanization: "bù gǎn xìngqù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'impetus' means the force or energy with which a body moves, or something that makes a process or activity happen or happen more quickly." +
            "<br><br>" +
            "(A) 'impediment' means a hindrance or obstruction in doing something." +
            "<br><br>" +
            "(C) 'apathy' means lack of interest, enthusiasm, or concern." +
            "<br><br>" +
            "(D) 'disinterest' means lack of interest in something.",
        chinese_explanation: "(B) '动力'一词意味着使身体移动的力量或能量，或使过程或活动发生或更快发生的东西。" +
            "<br><br>" +
            "(A) '阻碍' 意味着做某事的障碍或阻碍。" +
            "<br><br>" +
            "(C) '冷漠' 意味着缺乏兴趣、热情或关心。" +
            "<br><br>" +
            "(D) '不感兴趣' 意味着对某事缺乏兴趣。"
    },
    {
        id: 9,
        question: "The movie's ending, filled with clichés and __________, left the audience rolling their eyes rather than feeling moved.",
        chinese_question: "电影的结尾充满了陈词滥调和 __________，让观众翻白眼而不是感动。",
        answers: [
                { option: "A", answer: "treacle", chinese_answer: "甜腻", chinese_romanization: "tián nì" },
                { option: "B", answer: "realism", chinese_answer: "现实主义", chinese_romanization: "xiànshí zhǔyì" },
                { option: "C", answer: "suspense", chinese_answer: "悬念", chinese_romanization: "xuánniàn" },
                { option: "D", answer: "confusion", chinese_answer: "困惑", chinese_romanization: "kùnhuò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'treacle' figuratively means cloying sentimentality or flattery." +
            "<br><br>" +
            "(B) 'realism' means the attitude or practice of accepting a situation as it is and being prepared to deal with it accordingly." +
            "<br><br>" +
            "(C) 'suspense' means a state or feeling of excited or anxious uncertainty about what may happen." +
            "<br><br>" +
            "(D) 'confusion' means lack of understanding; uncertainty.",
        chinese_explanation: "(A) '甜腻' 在此语境下意指令人厌腻的多愁善感或奉承。" +
            "<br><br>" +
            "(B) '现实主义' 意味着接受现实并准备相应处理的态度或做法。" +
            "<br><br>" +
            "(C) '悬念' 意味着对可能发生的事情感到兴奋或焦虑的不确定状态或感觉。" +
            "<br><br>" +
            "(D) '困惑' 意味着缺乏理解；不确定性。"

    },
    {
        id: 10,
    question: "His promotion at work stirred up __________ among his colleagues.",
    chinese_question: "他在工作中的晋升引起了同事们的 __________。",
    answers: [
        { option: "A", answer: "envy", chinese_answer: "嫉妒", chinese_romanization: "jídù" },
        { option: "B", answer: "joy", chinese_answer: "喜悦", chinese_romanization: "xǐyuè" },
        { option: "C", answer: "pity", chinese_answer: "同情", chinese_romanization: "tóngqíng" },
        { option: "D", answer: "confusion", chinese_answer: "困惑", chinese_romanization: "kùnhuò" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'envy' means a feeling of discontented or resentful longing aroused by someone else's possessions, qualities, or luck." + 
        "<br><br>" + 
        "(B) 'joy' means a feeling of great pleasure and happiness." + 
        "<br><br>" + 
        "(C) 'pity' means the feeling of sorrow and compassion caused by the suffering and misfortunes of others." + 
        "<br><br>" + 
        "(D) 'confusion' means lack of understanding; uncertainty.",
    chinese_explanation: "(A) '嫉妒' 意味着对他人的财产、品质或运气产生不满或怨恨的感觉。" + 
        "<br><br>" + 
        "(B) '喜悦' 意味着极大的快乐和幸福。" + 
        "<br><br>" + 
        "(C) '同情' 意味着因他人的痛苦和不幸而产生的悲伤和怜悯。" + 
        "<br><br>" + 
        "(D) '困惑' 意味着缺乏理解；不确定。"
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
