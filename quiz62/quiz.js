// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The startup is considering various __________ to secure funding, including venture capital and crowdfunding.",
        chinese_question: "初创公司正在考虑各种 __________ 来获得资金，包括风险投资和众筹。",
        answers: [
            { option: "A", answer: "avenues", chinese_answer: "途径", chinese_romanization: "tújìng" },
            { option: "B", answer: "setbacks", chinese_answer: "挫折", chinese_romanization: "cuòzhé" },
            { option: "C", answer: "limitations", chinese_answer: "限制", chinese_romanization: "xiànzhì" },
            { option: "D", answer: "disruptions", chinese_answer: "干扰", chinese_romanization: "gānrǎo" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'avenues' figuratively means ways of approaching a problem or making progress toward something." +
            "<br><br>" +
            "(B) 'setbacks' means reversals or checks in progress." +
            "<br><br>" +
            "(C) 'limitations' means restricting conditions." +
            "<br><br>" +
            "(D) 'disruptions' means disturbances or problems that interrupt an event, activity, or process.",
        chinese_explanation: "(A) '途径' 在此语境下意指解决问题或取得进展的方法。" +
            "<br><br>" +
            "(B) '挫折' 意味着进展中的逆转或检查。" +
            "<br><br>" +
            "(C) '限制' 意味着限制条件。" +
            "<br><br>" +
            "(D) '干扰' 意味着中断事件、活动或过程的干扰或问题。"
    },
    {
        id: 2,
        question: "Her wedding __________ was a stunning white gown that shimmered in the sunlight, drawing everyone's admiration.",
        chinese_question: "她的婚礼 __________ 是一件在阳光下闪闪发光的白色礼服，引起了所有人的赞叹。",
        answers: [
                { option: "A", answer: "raiment", chinese_answer: "衣服", chinese_romanization: "yīfu" },
                { option: "B", answer: "bouquet", chinese_answer: "花束", chinese_romanization: "huāshù" },
                { option: "C", answer: "venue", chinese_answer: "场地", chinese_romanization: "chǎngdì" },
                { option: "D", answer: "makeup", chinese_answer: "化妆", chinese_romanization: "huàzhuāng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'raiment' means clothing, especially fine or formal wear." +
            "<br><br>" +
            "(B) 'bouquet' means an attractively arranged bunch of flowers." +
            "<br><br>" +
            "(C) 'venue' means the place where something happens, especially an organized event such as a concert, conference, or sports event." +
            "<br><br>" +
            "(D) 'makeup' means cosmetics such as lipstick or powder applied to the face, used to enhance or alter the appearance.",
        chinese_explanation: "(A) '衣服' 意味着服装，特别是精美或正式的服装。" +
            "<br><br>" +
            "(B) '花束' 意味着精美排列的一束花。" +
            "<br><br>" +
            "(C) '场地' 意味着某事发生的地方，特别是有组织的活动，如音乐会、会议或体育赛事。" +
            "<br><br>" +
            "(D) '化妆' 意味着用于增强或改变外貌的化妆品，如口红或粉末。"
    },
    {
        id: 3,
        question: "Her __________ at the dinner party was well-received, earning her many smiles and laughs from the guests.",
        chinese_question: "她在晚宴上的 __________ 受到了大家的欢迎，让宾客们笑声不断。",
        answers: [
                { option: "A", answer: "witticism", chinese_answer: "妙语", chinese_romanization: "miàoyǔ" },
                { option: "B", answer: "insult", chinese_answer: "侮辱", chinese_romanization: "wǔrǔ" },
                { option: "C", answer: "critique", chinese_answer: "评论", chinese_romanization: "pínglùn" },
                { option: "D", answer: "reprimand", chinese_answer: "训斥", chinese_romanization: "xùnchì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'witticism' means a clever or witty remark." +
            "<br><br>" +
            "(B) 'insult' means a disrespectful or scornfully abusive remark or action." +
            "<br><br>" +
            "(C) 'critique' means a detailed analysis and assessment of something, especially a literary, philosophical, or political theory." +
            "<br><br>" +
            "(D) 'reprimand' means a rebuke, especially an official one.",
        chinese_explanation: "(A) '妙语' 意味着聪明或机智的话语。" +
            "<br><br>" +
            "(B) '侮辱' 意味着不尊重或轻蔑的侮辱性言论或行动。" +
            "<br><br>" +
            "(C) '评论' 意味着对某事的详细分析和评估，尤其是文学、哲学或政治理论。" +
            "<br><br>" +
            "(D) '训斥' 意味着特别是官方的谴责。"
    },
    {
        id: 4,
        question: "The CEO's __________ in pursuing profits led to the exploitation of workers and environmental degradation.",
        chinese_question: "CEO在追求利润时的 __________ 导致了工人的剥削和环境的退化。",
        answers: [
                { option: "A", answer: "generosity", chinese_answer: "慷慨", chinese_romanization: "kāngkǎi" },
                { option: "B", answer: "rapacity", chinese_answer: "贪婪", chinese_romanization: "tānlán" },
                { option: "C", answer: "fairness", chinese_answer: "公平", chinese_romanization: "gōngpíng" },
                { option: "D", answer: "honesty", chinese_answer: "诚实", chinese_romanization: "chéngshí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'rapacity' means aggressive greed." +
            "<br><br>" +
            "(A) 'generosity' means the quality of being kind and generous." +
            "<br><br>" +
            "(C) 'fairness' means the quality of making judgments that are free from discrimination." +
            "<br><br>" +
            "(D) 'honesty' means the quality of being honest.",
        chinese_explanation: "(B) '贪婪'一词意味着侵略性的贪婪。" +
            "<br><br>" +
            "(A) '慷慨' 意味着友好和慷慨的品质。" +
            "<br><br>" +
            "(C) '公平' 意味着做出不带歧视的判断的品质。" +
            "<br><br>" +
            "(D) '诚实' 意味着诚实的品质。"
    },
    {
        id: 5,
question: "His __________ for power and success sometimes led him to take risks.",
chinese_question: "他对权力和成功的 __________ 有时会使他冒险。",
answers: [
    { option: "A", answer: "laziness", chinese_answer: "懒惰", chinese_romanization: "lǎnduò" },
    { option: "B", answer: "ambition", chinese_answer: "野心", chinese_romanization: "yěxīn" },
    { option: "C", answer: "apathy", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
    { option: "D", answer: "indifference", chinese_answer: "无动于衷", chinese_romanization: "wúdòngyúzhōng" }
],
correctAnswer: "B",
explanation: "(B) 'ambition' means a strong desire to do or achieve something, typically requiring determination and hard work. Figuratively, it can mean having a strong drive for success or power." +
    "<br><br>" +
    "(A) 'laziness' means the quality of being unwilling to work or use energy; idleness." +
    "<br><br>" +
    "(C) 'apathy' means lack of interest, enthusiasm, or concern." +
    "<br><br>" +
    "(D) 'indifference' means lack of interest, concern, or sympathy.",
chinese_explanation: "(B) '野心'一词意味着强烈的愿望去做或实现某事，通常需要决心和努力。比喻地，它可以表示对成功或权力有强烈的追求。" +
    "<br><br>" +
    "(A) '懒惰' 意味着不愿工作或使用能量的品质；懒惰。" +
    "<br><br>" +
    "(C) '冷漠' 意味着缺乏兴趣、热情或关心。" +
    "<br><br>" +
    "(D) '无动于衷' 意味着缺乏兴趣、关心或同情。"
    },
    {
        id: 6,
question: "Corruption is a __________ that affects many organizations around the world.",
chinese_question: "腐败是一种影响世界许多组织的 __________。",
answers: [
    { option: "A", answer: "disease", chinese_answer: "病症", chinese_romanization: "bìngzhèng" },
    { option: "B", answer: "remedy", chinese_answer: "治疗", chinese_romanization: "zhìliáo" },
    { option: "C", answer: "treatment", chinese_answer: "治疗方法", chinese_romanization: "zhìliáo fāngfǎ" },
    { option: "D", answer: "solution", chinese_answer: "解决方案", chinese_romanization: "jiějué fāng'àn" }
],
correctAnswer: "A",
explanation: "(A) 'disease' metaphorically means a harmful development or condition." +
    "<br><br>" +
    "(B) 'remedy' means a means of counteracting or eliminating something undesirable." +
    "<br><br>" +
    "(C) 'treatment' means medical care given to a patient for an illness or injury." +
    "<br><br>" +
    "(D) 'solution' means a means of solving a problem or dealing with a difficult situation.",
chinese_explanation: "(A) '病症' 比喻有害的发展或状况。" +
    "<br><br>" +
    "(B) '治疗' 意味着对不良事物的对策或消除手段。" +
    "<br><br>" +
    "(C) '治疗方法' 意味着对患者的疾病或受伤的医疗护理。" +
    "<br><br>" +
    "(D) '解决方案' 意味着解决问题或处理困难情况的手段。"
    },
    {
        id: 7,
    question: "The politician’s __________ to the allegations was defensive and evasive.",
    chinese_question: "政客对指控的 __________ 是防御性的和回避的。",
    answers: [
        { option: "A", answer: "response", chinese_answer: "反应", chinese_romanization: "fǎnyìng" },
        { option: "B", answer: "silence", chinese_answer: "沉默", chinese_romanization: "chénmò" },
        { option: "C", answer: "acceptance", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
        { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'response' means a reaction to something." + 
        "<br><br>" + 
        "(B) 'silence' means complete absence of sound." + 
        "<br><br>" + 
        "(C) 'acceptance' means the action of consenting to receive or undertake something offered." + 
        "<br><br>" + 
        "(D) 'support' means to bear all or part of the weight; hold up.",
    chinese_explanation: "(A) '反应' 意味着对某事的反应。" + 
        "<br><br>" + 
        "(B) '沉默' 意味着完全没有声音。" + 
        "<br><br>" + 
        "(C) '接受' 意味着同意接受或承担所提供的东西。" + 
        "<br><br>" + 
        "(D) '支持' 意味着承担所有或部分重量；支撑。"
    },
    {
        id: 8,
    question: "The agreement was a mere __________ of cooperation, with both sides still harboring deep-seated grievances.",
    chinese_question: "该协议只是合作的表面 __________，双方仍然心存深仇大恨。",
    answers: [
        { option: "A", answer: "illusion", chinese_answer: "幻觉", chinese_romanization: "huànjué" },
        { option: "B", answer: "semblance", chinese_answer: "表象", chinese_romanization: "biǎoxiàng" },
        { option: "C", answer: "reality", chinese_answer: "现实", chinese_romanization: "xiànshí" },
        { option: "D", answer: "sign", chinese_answer: "标志", chinese_romanization: "biāozhì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'semblance' means the outward appearance or apparent form of something, especially when the reality is different." + 
        "<br><br>" + 
        "(A) 'illusion' means a deceptive appearance or impression." + 
        "<br><br>" + 
        "(C) 'reality' means the state of things as they actually exist." + 
        "<br><br>" + 
        "(D) 'sign' means an object, quality, or event whose presence or occurrence indicates the probable presence or occurrence of something else.",
    chinese_explanation: "(B) '表象'一词意味着某物的外在外观或表面形式，尤其是当现实不同的时候。" + 
        "<br><br>" + 
        "(A) '幻觉' 意味着一种欺骗性的外观或印象。" + 
        "<br><br>" + 
        "(C) '现实' 意味着事物实际存在的状态。" + 
        "<br><br>" + 
        "(D) '标志' 意味着存在或发生某物的可能性。"
    },
    {
        id: 9,
        question: "The filmmaker's commitment to __________ was evident in the realistic settings and accurate historical details.",
        chinese_question: "电影制片人对 __________ 的承诺体现在现实的环境和准确的历史细节中。",
        answers: [
                { option: "A", answer: "verisimilitude", chinese_answer: "逼真", chinese_romanization: "bīzhēn" },
                { option: "B", answer: "fantasy", chinese_answer: "幻想", chinese_romanization: "huànxiǎng" },
                { option: "C", answer: "distortion", chinese_answer: "扭曲", chinese_romanization: "niǔqū" },
                { option: "D", answer: "surrealism", chinese_answer: "超现实主义", chinese_romanization: "chāo xiànshí zhǔyì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'verisimilitude' figuratively means the appearance of being true or real." +
            "<br><br>" +
            "(B) 'fantasy' means the faculty or activity of imagining things, especially things that are impossible or improbable." +
            "<br><br>" +
            "(C) 'distortion' means the action of distorting or the state of being distorted." +
            "<br><br>" +
            "(D) 'surrealism' means a 20th-century avant-garde movement in art and literature that sought to release the creative potential of the unconscious mind.",
        chinese_explanation: "(A) '逼真' 在此语境下意指看起来真实。" +
            "<br><br>" +
            "(B) '幻想' 意味着想象事物的能力或活动，特别是那些不可能或不大可能发生的事物。" +
            "<br><br>" +
            "(C) '扭曲' 意味着扭曲的行为或扭曲的状态。" +
            "<br><br>" +
            "(D) '超现实主义' 意味着20世纪的先锋派艺术和文学运动，旨在释放无意识的创造潜力。"
    },
    {
        id: 10,
        question: "The __________ in his colleague's eyes was hard to miss when he failed to complete the project on time.",
        chinese_question: "当他未能按时完成项目时，同事眼中的 __________ 很难忽视。",
        answers: [
            { option: "A", answer: "approval", chinese_answer: "赞同", chinese_romanization: "zàntóng" },
            { option: "B", answer: "reproach", chinese_answer: "责备", chinese_romanization: "zébèi" },
            { option: "C", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" },
            { option: "D", answer: "celebration", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'reproach' means expressing disapproval or disappointment." +
            "<br><br>" +
            "(A) 'approval' means the belief that someone or something is good or acceptable." +
            "<br><br>" +
            "(C) 'excitement' means a feeling of great enthusiasm and eagerness." +
            "<br><br>" +
            "(D) 'celebration' means the action of marking one's pleasure at an important event or occasion by engaging in enjoyable, typically social, activity.",
        chinese_explanation: "(B) '责备'一词意味着表示不赞成或失望。" +
            "<br><br>" +
            "(A) '赞同' 意味着相信某人或某事物是好的或可接受的。" +
            "<br><br>" +
            "(C) '兴奋' 意味着极大的热情和渴望。" +
            "<br><br>" +
            "(D) '庆祝' 意味着通过进行愉快的、通常是社交的活动来标志一个重要事件或场合的愉快行为。"
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
