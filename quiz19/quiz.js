// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The politician's __________ response to the journalist's question was widely criticized as unprofessional and rude.",
    chinese_question: "这位政客对记者提问的 __________ 回应被广泛批评为不专业和粗鲁。",
    answers: [
        { option: "A", answer: "respectful", chinese_answer: "尊重的", chinese_romanization: "zūnzhòng de" },
        { option: "B", answer: "insolent", chinese_answer: "无礼的", chinese_romanization: "wúlǐ de" },
        { option: "C", answer: "diplomatic", chinese_answer: "圆滑的", chinese_romanization: "yuánhuá de" },
        { option: "D", answer: "tactful", chinese_answer: "机智的", chinese_romanization: "jīzhì de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'insolent' means showing a rude and arrogant lack of respect." +
        "<br><br>" +
        "(A) 'respectful' means feeling or showing deference and respect." +
        "<br><br>" +
        "(C) 'diplomatic' means having or showing an ability to deal with people in a sensitive and effective way." +
        "<br><br>" +
        "(D) 'tactful' means having or showing skill and sensitivity in dealing with others or with difficult issues.",
    chinese_explanation: "(B) '无礼的' 意味着表现出粗鲁和傲慢的缺乏尊重。" +
        "<br><br>" +
        "(A) '尊重的' 意味着感到或表现出敬意和尊重。" +
        "<br><br>" +
        "(C) '圆滑的' 意味着能够敏感和有效地处理人与人之间关系的。" +
        "<br><br>" +
        "(D) '机智的' 意味着在处理他人或困难问题时表现出技巧和敏感的。"
    },
    {
        id: 2,
    question: "Misconceptions about the safety of vaccines are unfortunately still __________, causing unnecessary fear and resistance among the public.",
    chinese_question: "关于疫苗安全性的误解不幸仍然很 __________，在公众中引起不必要的恐惧和抵抗。",
    answers: [
        { option: "A", answer: "prevalent", chinese_answer: "普遍的", chinese_romanization: "pǔbiàn de" },
        { option: "B", answer: "minimal", chinese_answer: "最小的", chinese_romanization: "zuìxiǎo de" },
        { option: "C", answer: "negligible", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" },
        { option: "D", answer: "uncommon", chinese_answer: "罕见的", chinese_romanization: "hǎnjiàn de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'prevalent' means widespread in a particular area or at a particular time." +
        "<br><br>" +
        "(B) 'minimal' means of a minimum amount, quantity, or degree." +
        "<br><br>" +
        "(C) 'negligible' means so small or unimportant as to be not worth considering; insignificant." +
        "<br><br>" +
        "(D) 'uncommon' means not often found, seen, or experienced.",
    chinese_explanation: "(A) '普遍的' 意味着在特定区域或特定时间内广泛存在的。" +
        "<br><br>" +
        "(B) '最小的' 意味着数量、数量或程度的最小。" +
        "<br><br>" +
        "(C) '微不足道的' 意味着小到或不重要到不值得考虑的；微不足道的。" +
        "<br><br>" +
        "(D) '罕见的' 意味着不经常发现、看到或经历的。"
    },
    {
        id: 3,
        question: "Only the ripest and juiciest fruits were deemed __________ by the chef for the dessert.",
        chinese_question: "只有最成熟和最多汁的水果才被厨师认为适合制作甜点。",
        answers: [
            { option: "A", answer: "poisonous", chinese_answer: "有毒的", chinese_romanization: "yǒudú de" },
            { option: "B", answer: "decorative", chinese_answer: "装饰性的", chinese_romanization: "zhuāngshìxìng de" },
            { option: "C", answer: "edible", chinese_answer: "可食用的", chinese_romanization: "kě shíyòng de" },
            { option: "D", answer: "toxic", chinese_answer: "有毒的", chinese_romanization: "yǒudú de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'edible' means fit to be eaten. Figuratively, it can mean suitable for use or consumption in a particular context." +
            "<br><br>" +
            "(A) 'poisonous' means containing poison that is dangerous." +
            "<br><br>" +
            "(B) 'decorative' means serving to make something look more attractive; ornamental." +
            "<br><br>" +
            "(D) 'toxic' means poisonous.",
        chinese_explanation: "(C) '可食用的'一词意味着适合食用的。比喻地，它可以表示在特定上下文中适合使用或消费的。" +
            "<br><br>" +
            "'有毒的' 意味着含有危险的毒素。" +
            "<br><br>" +
            "'装饰性的' 意味着用来使某物看起来更具吸引力的；装饰的。" +
            "<br><br>" +
            "'有毒的' 意味着有毒的。"
    },
    {
        id: 4,
    question: "Her __________ devotion to her work was evident in the long hours she spent at the office, often sacrificing personal time to ensure everything was perfect.",
    chinese_question: "她对工作的 __________ 奉献体现在她在办公室度过的长时间，常常牺牲个人时间以确保一切都完美无缺。",
    answers: [
        { option: "A", answer: "pious", chinese_answer: "虔诚的", chinese_romanization: "qiánchéng de" },
        { option: "B", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
        { option: "C", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mò bù guānxīn de" },
        { option: "D", answer: "lackadaisical", chinese_answer: "无精打采的", chinese_romanization: "wú jīng dǎ cǎi de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'pious' means showing a dutiful spirit of reverence for God or an earnest wish to fulfill religious obligations, often extended figuratively to show devotion to a particular duty or work." +
        "<br><br>" +
        "(B) 'apathetic' means showing or feeling no interest, enthusiasm, or concern." +
        "<br><br>" +
        "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
        "<br><br>" +
        "(D) 'lackadaisical' means lacking enthusiasm and determination; carelessly lazy.",
    chinese_explanation: "(A) '虔诚的' 意味着显示对上帝的虔诚精神或热切希望履行宗教义务的，通常引申表示对特定职责或工作的奉献。" +
        "<br><br>" +
        "(B) '冷漠的' 意味着显示或感到没有兴趣、热情或关心的。" +
        "<br><br>" +
        "(C) '漠不关心的' 意味着没有特别兴趣或同情的；冷漠的。" +
        "<br><br>" +
        "(D) '无精打采的' 意味着缺乏热情和决心的；懒散的。"
    },
    {
        id: 5,
    question: "Her __________ remarks during the meeting caused confusion and disrupted the discussion.",
    chinese_question: "她在会议上的 __________ 言论引起了混乱并打断了讨论。",
    answers: [
        { option: "A", answer: "hasty", chinese_answer: "草率的", chinese_romanization: "cǎoshuài de" },
        { option: "B", answer: "measured", chinese_answer: "深思熟虑的", chinese_romanization: "shēnsī shúlǜ de" },
        { option: "C", answer: "considered", chinese_answer: "考虑周到的", chinese_romanization: "kǎolǜ zhōudào de" },
        { option: "D", answer: "prudent", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'hasty' means done with excessive speed or urgency; hurried." +
        "<br><br>" +
        "(B) 'measured' means carefully considered and deliberate." +
        "<br><br>" +
        "(C) 'considered' means thought about carefully before making a decision." +
        "<br><br>" +
        "(D) 'prudent' means acting with or showing care and thought for the future.",
    chinese_explanation: "(A) '草率的' 意味着过于迅速或紧急地完成的；匆忙的。" +
        "<br><br>" +
        "(B) '深思熟虑的' 意味着经过仔细考虑的和故意的。" +
        "<br><br>" +
        "(C) '考虑周到的' 意味着在做出决定前仔细考虑过的。" +
        "<br><br>" +
        "(D) '谨慎的' 意味着表现出对未来的关心和思考的。"
    },
    {
        id: 6,
    question: "The new policies have created a __________ environment for innovation and economic growth in the region.",
    chinese_question: "新政策为该地区的创新和经济增长创造了一个 __________ 的环境。",
    answers: [
        { option: "A", answer: "prosperous", chinese_answer: "繁荣的", chinese_romanization: "fánróng de" },
        { option: "B", answer: "stagnant", chinese_answer: "停滞的", chinese_romanization: "tíngzhì de" },
        { option: "C", answer: "adverse", chinese_answer: "不利的", chinese_romanization: "bùlì de" },
        { option: "D", answer: "restrictive", chinese_answer: "限制性的", chinese_romanization: "xiànzhì xìng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'prosperous' means successful in material terms; flourishing financially." +
        "<br><br>" +
        "(B) 'stagnant' means showing no activity; dull and sluggish." +
        "<br><br>" +
        "(C) 'adverse' means preventing success or development; harmful; unfavorable." +
        "<br><br>" +
        "(D) 'restrictive' means imposing restrictions or limitations.",
    chinese_explanation: "(A) '繁荣的' 意味着在物质上成功的；在经济上蓬勃发展的。" +
        "<br><br>" +
        "(B) '停滞的' 意味着没有活动的；沉闷和迟钝的。" +
        "<br><br>" +
        "(C) '不利的' 意味着阻碍成功或发展的；有害的；不利的。" +
        "<br><br>" +
        "(D) '限制性的' 意味着施加限制或限制的。"
    },
    {
        id: 7,
    question: "His personal opinions were __________ to the facts presented in the report.",
    chinese_question: "他的个人意见与报告中呈现的事实 __________。",
    answers: [
        { option: "A", answer: "essential", chinese_answer: "必要", chinese_romanization: "bìyào" },
        { option: "B", answer: "irrelevant", chinese_answer: "无关", chinese_romanization: "wúguān" },
        { option: "C", answer: "crucial", chinese_answer: "关键", chinese_romanization: "guānjiàn" },
        { option: "D", answer: "important", chinese_answer: "重要", chinese_romanization: "zhòngyào" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'irrelevant' means not connected with or relevant to something." +
        "<br><br>" +
        "(A) 'essential' means absolutely necessary; extremely important." +
        "<br><br>" +
        "(C) 'crucial' means decisive or critical, especially in the success or failure of something." +
        "<br><br>" +
        "(D) 'important' means of great significance or value.",
    chinese_explanation: "(B) '无关' 意味着与某事无关或不相关。" +
        "<br><br>" +
        "(A) '必要' 意味着绝对必要的；极其重要的。" +
        "<br><br>" +
        "(C) '关键' 意味着决定性的或至关重要的，尤其是对某事的成功或失败而言。" +
        "<br><br>" +
        "(D) '重要' 意味着具有重大意义或价值的。"
    },
    {
        id: 8,
    question: "His __________ attitude towards the new policy made collaboration difficult.",
    chinese_question: "他对新政策的 __________ 态度使得合作变得困难。",
    answers: [
        { option: "A", answer: "cooperative", chinese_answer: "合作的", chinese_romanization: "hézuò de" },
        { option: "B", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
        { option: "C", answer: "supportive", chinese_answer: "支持的", chinese_romanization: "zhīchí de" },
        { option: "D", answer: "hostile", chinese_answer: "敌对的", chinese_romanization: "díduì de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'hostile' means unfriendly; antagonistic." +
        "<br><br>" +
        "(A) 'cooperative' means involving mutual assistance in working toward a common goal." +
        "<br><br>" +
        "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
        "<br><br>" +
        "(C) 'supportive' means providing encouragement or emotional help.",
    chinese_explanation: "(D) '敌对的' 意味着不友好的；对抗性。" +
        "<br><br>" +
        "(A) '合作的' 意味着在朝着共同目标努力时提供相互帮助。" +
        "<br><br>" +
        "(B) '冷漠的' 意味着没有特别的兴趣或同情；不关心。" +
        "<br><br>" +
        "(C) '支持的' 意味着提供鼓励或情感帮助。"
    },
    {
        id: 9,
        question: "His __________ nature made it difficult for him to speak up during meetings, even when he had good ideas to share.",
        chinese_question: "他的 __________ 性格使他在会议上很难发言，即使他有好主意要分享。",
        answers: [
                { option: "A", answer: "assertive", chinese_answer: "自信的", chinese_romanization: "zìxìn de" },
                { option: "B", answer: "timorous", chinese_answer: "胆怯的", chinese_romanization: "dǎnqiè de" },
                { option: "C", answer: "commanding", chinese_answer: "威严的", chinese_romanization: "wēiyán de" },
                { option: "D", answer: "forthright", chinese_answer: "直率的", chinese_romanization: "zhíshuài de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'timorous' means showing or suffering from nervousness, fear, or a lack of confidence." +
            "<br><br>" +
            "(A) 'assertive' means having or showing a confident and forceful personality." +
            "<br><br>" +
            "(C) 'commanding' means indicating or expressing authority; having a position of authority." +
            "<br><br>" +
            "(D) 'forthright' means direct and outspoken; straightforward and honest.",
        chinese_explanation: "(B) '胆怯的' 意味着表现出或因紧张、恐惧或缺乏信心而受苦。" +
            "<br><br>" +
            "(A) '自信的' 意味着具有或表现出自信和强有力的个性。" +
            "<br><br>" +
            "(C) '威严的' 意味着表明或表达权威；拥有权威地位的。" +
            "<br><br>" +
            "(D) '直率的' 意味着直接和坦率的；直截了当的。"
    },
    {
        id: 10,
        question: "The CEO's __________ in business strategies helped the company navigate through tough economic times.",
        chinese_question: "首席执行官在商业策略方面的 __________ 帮助公司渡过了经济困难时期。",
        answers: [
            { option: "A", answer: "ignorance", chinese_answer: "无知", chinese_romanization: "wúzhī" },
            { option: "B", answer: "erudition", chinese_answer: "博学", chinese_romanization: "bóxué" },
            { option: "C", answer: "naivety", chinese_answer: "天真", chinese_romanization: "tiānzhēn" },
            { option: "D", answer: "confusion", chinese_answer: "混乱", chinese_romanization: "hǔnluàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'erudition' means the quality of having or showing great knowledge or learning; scholarship." +
            "<br><br>" +
            "(A) 'ignorance' means lack of knowledge or information." +
            "<br><br>" +
            "(C) 'naivety' means lack of experience, wisdom, or judgment." +
            "<br><br>" +
            "(D) 'confusion' means lack of understanding; uncertainty.",
        chinese_explanation: "(B) '博学' 意味着具有或显示出渊博知识或学问的质量；学术。" +
            "<br><br>" +
            "(A) '无知' 意味着缺乏知识或信息。" +
            "<br><br>" +
            "(C) '天真' 意味着缺乏经验、智慧或判断力。" +
            "<br><br>" +
            "(D) '混乱' 意味着缺乏理解；不确定。"
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
