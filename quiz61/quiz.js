// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "His __________ in the email led to confusion among the recipients, who found it hard to discern the main points.",
    chinese_question: "他在邮件中的 __________ 导致收件人困惑，难以分辨主要内容。",
    answers: [
        { option: "A", answer: "succinctness", chinese_answer: "简洁", chinese_romanization: "jiǎnjié" },
        { option: "B", answer: "verbosity", chinese_answer: "冗长", chinese_romanization: "rǒngcháng" },
        { option: "C", answer: "silence", chinese_answer: "沉默", chinese_romanization: "chénmò" },
        { option: "D", answer: "conciseness", chinese_answer: "简洁", chinese_romanization: "jiǎnjié" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'verbosity' means the quality of using more words than needed; wordiness." + 
        "<br><br>" + 
        "(A)'succinctness' means the quality of being brief and clearly expressed." + 
        "<br><br>" + 
        "(C)'silence' means complete absence of sound." + 
        "<br><br>" + 
        "(D)'conciseness' means the quality of being brief and to the point.",
    chinese_explanation: "(B) '冗长'一词意味着使用比需要更多的词；多话。" + 
        "<br><br>" + 
        "(A)'简洁' 意味着简明扼要的品质。" + 
        "<br><br>" + 
        "(C)'沉默' 意味着完全没有声音。" + 
        "<br><br>" + 
        "(D)'简洁' 意味着简明扼要的品质。"
    },
    {
        id: 2,
    question: "The company's culture of __________ and complacency hindered its growth and innovation potential.",
    chinese_question: "公司的 __________ 和自满文化阻碍了其成长和创新潜力。",
    answers: [
        { option: "A", answer: "innovation", chinese_answer: "创新", chinese_romanization: "chuàngxīn" },
        { option: "B", answer: "indolence", chinese_answer: "懒惰", chinese_romanization: "lǎnduò" },
        { option: "C", answer: "ambition", chinese_answer: "野心", chinese_romanization: "yěxīn" },
        { option: "D", answer: "drive", chinese_answer: "动力", chinese_romanization: "dònglì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'indolence' means avoidance of activity or exertion; laziness." + 
        "<br><br>" + 
        "(A) 'innovation' means the action or process of innovating." + 
        "<br><br>" + 
        "(C) 'ambition' means a strong desire to do or achieve something." + 
        "<br><br>" + 
        "(D) 'drive' means the determination and ambition to achieve something.",
    chinese_explanation: "(B) '懒惰'一词意味着避免活动或努力；懒惰。" + 
        "<br><br>" + 
        "(A) '创新' 意味着创新的行动或过程。" + 
        "<br><br>" + 
        "(C) '野心' 意味着强烈的愿望去做或实现某事。" + 
        "<br><br>" + 
        "(D) '动力' 意味着实现某事的决心和雄心。"
    },
    {
        id: 3,
    question: "Her __________ for fashion was evident in her always stylish and well-coordinated outfits.",
    chinese_question: "她对时尚的 __________ 表现在她总是时尚且搭配得体的服装中。",
    answers: [
        { option: "A", answer: "disregard", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "B", answer: "penchant", chinese_answer: "嗜好", chinese_romanization: "shìhào" },
        { option: "C", answer: "neglect", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
        { option: "D", answer: "reluctance", chinese_answer: "不情愿", chinese_romanization: "bùqíngyuàn" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'penchant' means a strong or habitual liking for something or tendency to do something." + 
        "<br><br>" + 
        "(A) 'disregard' means lack of consideration or attention." + 
        "<br><br>" + 
        "(C) 'neglect' means failure to care for properly." + 
        "<br><br>" + 
        "(D) 'reluctance' means unwillingness or disinclination to do something.",
    chinese_explanation: "(B) '嗜好'一词意味着对某事的强烈或习惯性喜好或倾向于做某事。" + 
        "<br><br>" + 
        "(A) '忽视' 意味着缺乏考虑或注意。" + 
        "<br><br>" + 
        "(C) '忽略' 意味着未能适当照顾。" + 
        "<br><br>" + 
        "(D) '不情愿' 意味着不愿意或不愿做某事。"
    },
    {
        id: 4,
        question: "The athlete’s poor performance was an __________ in his career, which was otherwise filled with victories.",
        chinese_question: "这位运动员的糟糕表现是他职业生涯中的一次 __________，他的职业生涯中充满了胜利。",
        answers: [
                { option: "A", answer: "norm", chinese_answer: "常态", chinese_romanization: "chángtài" },
                { option: "B", answer: "aberration", chinese_answer: "反常", chinese_romanization: "fǎncháng" },
                { option: "C", answer: "expectation", chinese_answer: "期望", chinese_romanization: "qīwàng" },
                { option: "D", answer: "regularity", chinese_answer: "规律性", chinese_romanization: "guīlǜ xìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'aberration' figuratively means a departure from what is normal, usual, or expected, typically one that is unwelcome." +
            "<br><br>" +
            "(A) 'norm' means something that is usual, typical, or standard." +
            "<br><br>" +
            "(C) 'expectation' means a strong belief that something will happen or be the case in the future." +
            "<br><br>" +
            "(D) 'regularity' means the state or quality of being regular.",
        chinese_explanation: "(B) '反常' 在此语境下意指偏离正常、通常或预期的情况，通常是不受欢迎的。" +
            "<br><br>" +
            "(A) '常态' 意味着通常、典型或标准的东西。" +
            "<br><br>" +
            "(C) '期望' 意味着对未来某事会发生或某种情况会发生的强烈信念。" +
            "<br><br>" +
            "(D) '规律性' 意味着规律的状态或质量。"
    },
    {
        id: 5,
        question: "Despite the excitement of the trip, a wave of __________ washed over him as the long flight took its toll.",
        chinese_question: "尽管旅行令人兴奋，但随着长途飞行的消耗，一阵 __________ 向他袭来。",
        answers: [
                { option: "A", answer: "exhilaration", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" },
                { option: "B", answer: "lassitude", chinese_answer: "疲倦", chinese_romanization: "píjuàn" },
                { option: "C", answer: "anticipation", chinese_answer: "期待", chinese_romanization: "qídài" },
                { option: "D", answer: "joy", chinese_answer: "快乐", chinese_romanization: "kuàilè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'lassitude' means a state of physical or mental weariness; lack of energy." +
            "<br><br>" +
            "(A) 'exhilaration' means a feeling of excitement, happiness, or elation." +
            "<br><br>" +
            "(C) 'anticipation' means the action of anticipating something; expectation or prediction." +
            "<br><br>" +
            "(D) 'joy' means a feeling of great pleasure and happiness.",
        chinese_explanation: "(B) '疲倦'一词意味着身体或精神上的疲劳状态；缺乏精力。" +
            "<br><br>" +
            "(A) '兴奋' 意味着兴奋、快乐或兴高采烈的感觉。" +
            "<br><br>" +
            "(C) '期待' 意味着预料某事的行动；期望或预测。" +
            "<br><br>" +
            "(D) '快乐' 意味着极大的愉快和幸福。"
    },
    {
        id: 6,
        question: "The bustling city provided a stimulating __________ for the young entrepreneur, full of opportunities and challenges.",
        chinese_question: "繁忙的城市为这位年轻的企业家提供了一个充满机会和挑战的刺激性 __________。",
        answers: [
                { option: "A", answer: "obstacle", chinese_answer: "障碍", chinese_romanization: "zhàng'ài" },
                { option: "B", answer: "milieu", chinese_answer: "环境", chinese_romanization: "huánjìng" },
                { option: "C", answer: "barrier", chinese_answer: "屏障", chinese_romanization: "píngzhàng" },
                { option: "D", answer: "isolation", chinese_answer: "孤立", chinese_romanization: "gūlì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'milieu' means a person's social environment." +
            "<br><br>" +
            "(A) 'obstacle' means a thing that blocks one's way or prevents or hinders progress." +
            "<br><br>" +
            "(C) 'barrier' means a fence or other obstacle that prevents movement or access." +
            "<br><br>" +
            "(D) 'isolation' means the process or fact of isolating or being isolated.",
        chinese_explanation: "(B) '环境'一词意味着一个人的社会环境。" +
            "<br><br>" +
            "(A) '障碍' 意味着阻挡一个人前进或阻止或妨碍进展的事物。" +
            "<br><br>" +
            "(C) '屏障' 意味着防止移动或进入的围栏或其他障碍物。" +
            "<br><br>" +
            "(D) '孤立' 意味着孤立或被孤立的过程或事实。"
    },
    {
        id: 7,
        question: "Her Instagram feed was a testament to her life as a __________, filled with photos of luxury vacations, designer clothes, and gourmet meals.",
        chinese_question: "她的 Instagram 动态证明了她作为一个 __________ 的生活，充满了奢华假期、名牌服装和美食的照片。",
        answers: [
                { option: "A", answer: "stoic", chinese_answer: "坚忍者", chinese_romanization: "jiānrěn zhě" },
                { option: "B", answer: "sybarite", chinese_answer: "享乐主义者", chinese_romanization: "xiǎnglè zhǔyì zhě" },
                { option: "C", answer: "minimalist", chinese_answer: "极简主义者", chinese_romanization: "jíjiǎn zhǔyì zhě" },
                { option: "D", answer: "frugal", chinese_answer: "节俭者", chinese_romanization: "jiéjiǎn zhě" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sybarite' means a person who is self-indulgent in their fondness for sensuous luxury." +
            "<br><br>" +
            "(A) 'stoic' means a person who can endure pain or hardship without showing their feelings or complaining." +
            "<br><br>" +
            "(C) 'minimalist' means a person who advocates or practices minimalism in art or music." +
            "<br><br>" +
            "(D) 'frugal' means sparing or economical with regard to money or food.",
        chinese_explanation: "(B) '享乐主义者'一词意味着一个沉溺于感官奢华的人。" +
            "<br><br>" +
            "(A) '坚忍者' 意味着一个能在不表现出他们的感受或抱怨的情况下忍受痛苦或艰难的人。" +
            "<br><br>" +
            "(C) '极简主义者' 意味着一个在艺术或音乐上倡导或实践极简主义的人。" +
            "<br><br>" +
            "(D) '节俭者' 意味着在涉及钱或食物方面节俭或经济的人。"
    },
    {
        id: 8,
        question: "In the countryside market, locals sold fresh __________, including vegetables, bread, and homemade jams.",
        chinese_question: "在乡村市场，当地人出售新鲜的 __________，包括蔬菜、面包和自制的果酱。",
        answers: [
                { option: "A", answer: "utensils", chinese_answer: "餐具", chinese_romanization: "cānjù" },
                { option: "B", answer: "victuals", chinese_answer: "食物", chinese_romanization: "shíwù" },
                { option: "C", answer: "gadgets", chinese_answer: "小工具", chinese_romanization: "xiǎo gōngjù" },
                { option: "D", answer: "furniture", chinese_answer: "家具", chinese_romanization: "jiājù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'victuals' means food or provisions." +
            "<br><br>" +
            "(A) 'utensils' means tools or implements, especially for eating or cooking." +
            "<br><br>" +
            "(C) 'gadgets' means small mechanical or electronic devices or tools." +
            "<br><br>" +
            "(D) 'furniture' means large movable equipment used to make a house, office, or other space suitable for living or working.",
        chinese_explanation: "(B) '食物'一词意味着食物或粮食。" +
            "<br><br>" +
            "(A) '餐具' 意味着工具或器具，尤其是用于饮食或烹饪的。" +
            "<br><br>" +
            "(C) '小工具' 意味着小型机械或电子设备或工具。" +
            "<br><br>" +
            "(D) '家具' 意味着用于使房子、办公室或其他空间适合居住或工作的可移动的大型设备。"
    },
    {
        id: 9,
        question: "Amid the __________ of modern life, she found solace in her quiet garden, where she could escape the noise and chaos.",
        chinese_question: "在现代生活的 __________ 中，她在安静的花园里找到了安慰，在那里她可以远离喧嚣和混乱。",
        answers: [
                { option: "A", answer: "serenity", chinese_answer: "宁静", chinese_romanization: "níngjìng" },
                { option: "B", answer: "din", chinese_answer: "喧闹", chinese_romanization: "xuānnào" },
                { option: "C", answer: "silence", chinese_answer: "寂静", chinese_romanization: "jìjìng" },
                { option: "D", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'din' means a loud, unpleasant, and prolonged noise; used figuratively to describe a confusing mixture of noises or voices." +
            "<br><br>" +
            "(A) 'serenity' means the state of being calm, peaceful, and untroubled." +
            "<br><br>" +
            "(C) 'silence' means the absence of sound." +
            "<br><br>" +
            "(D) 'calm' means the absence of violent or confrontational activity within a place or group.",
        chinese_explanation: "(B) '喧闹'一词意味着嘈杂、令人不愉快且持续的噪音；用作比喻来形容嘈杂的混合声音或声音。" +
            "<br><br>" +
            "(A) '宁静' 意味着平静、安宁和无忧的状态。" +
            "<br><br>" +
            "(C) '寂静' 意味着没有声音。" +
            "<br><br>" +
            "(D) '平静' 意味着一个地方或团体内部没有暴力或对抗活动。"
    },
    {
        id: 10,
        question: "The scientist's research was questioned due to perceived __________, as she had financial ties to the company funding the study.",
        chinese_question: "由于被认为存在 __________，科学家的研究受到质疑，因为她与资助该研究的公司有财务联系。",
        answers: [
            { option: "A", answer: "bias", chinese_answer: "偏见", chinese_romanization: "piānjiàn" },
            { option: "B", answer: "objectivity", chinese_answer: "客观性", chinese_romanization: "kèguān xìng" },
            { option: "C", answer: "precision", chinese_answer: "精确", chinese_romanization: "jīngquè" },
            { option: "D", answer: "scrutiny", chinese_answer: "审查", chinese_romanization: "shěnchá" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'bias' figuratively means inclination or prejudice for or against one person or group, especially in a way considered to be unfair." +
            "<br><br>" +
            "(B) 'objectivity' means the quality of being objective." +
            "<br><br>" +
            "(C) 'precision' means the quality, condition, or fact of being exact and accurate." +
            "<br><br>" +
            "(D) 'scrutiny' means critical observation or examination.",
        chinese_explanation: "(A) '偏见' 在此语境下意指对一个人或一个群体的倾向或偏见，尤其是被认为不公平的方式。" +
            "<br><br>" +
            "(B) '客观性' 意味着客观的质量。" +
            "<br><br>" +
            "(C) '精确' 意味着准确和精确的质量、条件或事实。" +
            "<br><br>" +
            "(D) '审查' 意味着批判性的观察或检查。"
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
