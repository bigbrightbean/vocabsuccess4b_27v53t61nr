// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The judge made an __________ decision that was fair to both parties involved in the dispute.",
        chinese_question: "法官做出了一个 __________ 的决定，对争端双方都公平。",
        answers: [
                { option: "A", answer: "biased", chinese_answer: "偏袒的", chinese_romanization: "piāntǎn de" },
                { option: "B", answer: "unfair", chinese_answer: "不公平的", chinese_romanization: "bù gōngpíng de" },
                { option: "C", answer: "equitable", chinese_answer: "公平的", chinese_romanization: "gōngpíng de" },
                { option: "D", answer: "prejudiced", chinese_answer: "有偏见的", chinese_romanization: "yǒu piānjiàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'equitable' means fair and impartial." +
            "<br><br>" +
            "(A) 'biased' means unfairly prejudiced for or against someone or something." +
            "<br><br>" +
            "(B) 'unfair' means not based on or behaving according to the principles of equality and justice." +
            "<br><br>" +
            "(D) 'prejudiced' means having or showing a dislike or distrust that is derived from prejudice; bigoted.",
        chinese_explanation: "(C) '公平的' 一词意味着公正和不偏不倚的。" +
            "<br><br>" +
            "(A) '偏袒的' 意味着对某人或某事不公平地有偏见。" +
            "<br><br>" +
            "(B) '不公平的' 意味着不根据平等和正义的原则行事或表现的。" +
            "<br><br>" +
            "(D) '有偏见的' 意味着具有或表现出源于偏见的厌恶或不信任的；偏执的。"
    },
    {
        id: 2,
        question: "The politician's __________ strategies during the campaign helped him outmaneuver his opponents and win the election.",
        chinese_question: "这位政客在竞选期间的 __________ 策略帮助他巧妙地超越对手，赢得了选举。",
        answers: [
            { option: "A", answer: "honest", chinese_answer: "诚实的", chinese_romanization: "chéngshí de" },
            { option: "B", answer: "naive", chinese_answer: "天真的", chinese_romanization: "tiānzhēn de" },
            { option: "C", answer: "wily", chinese_answer: "狡猾的", chinese_romanization: "jiǎohuá de" },
            { option: "D", answer: "straightforward", chinese_answer: "直接的", chinese_romanization: "zhíjiē de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'wily' means skilled at gaining an advantage, especially deceitfully." +
            "<br><br>" +
            "(A) 'honest' means free of deceit and untruthfulness; sincere." +
            "<br><br>" +
            "(B) 'naive' means showing a lack of experience, wisdom, or judgment." +
            "<br><br>" +
            "(D) 'straightforward' means uncomplicated and easy to do or understand.",
        chinese_explanation: "(C) '狡猾的' 意味着擅长获得优势，特别是通过欺骗手段。" +
            "<br><br>" +
            "(A) '诚实的' 意味着没有欺骗和虚伪；真诚的。" +
            "<br><br>" +
            "(B) '天真的' 意味着缺乏经验、智慧或判断力的。" +
            "<br><br>" +
            "(D) '直接的' 意味着简单易懂的。"
    },
    {
        id: 3,
        question: "The project required a __________ amount of resources, far exceeding the initial estimates.",
        chinese_question: "该项目需要 __________ 的资源，远远超过了最初的估计。",
        answers: [
            { option: "A", answer: "negligible", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" },
            { option: "B", answer: "modest", chinese_answer: "适度的", chinese_romanization: "shìdù de" },
            { option: "C", answer: "prodigious", chinese_answer: "巨大的", chinese_romanization: "jùdà de" },
            { option: "D", answer: "minimal", chinese_answer: "最小的", chinese_romanization: "zuìxiǎo de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'prodigious' means remarkably or impressively great in extent, size, or degree." +
            "<br><br>" +
            "(A) 'negligible' means so small or unimportant as to be not worth considering." +
            "<br><br>" +
            "(B) 'modest' means unassuming in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(D) 'minimal' means of a minimum amount, quantity, or degree.",
        chinese_explanation: "(C) '巨大的' 意味着在范围、大小或程度上令人惊讶或令人印象深刻的。" +
            "<br><br>" +
            "(A) '微不足道的' 意味着太小或不重要，不值得考虑的。" +
            "<br><br>" +
            "(B) '适度的' 意味着对自己的能力或成就不自以为是的。" +
            "<br><br>" +
            "(D) '最小的' 意味着数量、数量或程度的最低限度。"
    },
    {
        id: 4,
        question: "The detective faced a __________ puzzle that took days to solve.",
        chinese_question: "侦探面对一个 __________ 的谜题，花了几天时间才解决。",
        answers: [
            { option: "A", answer: "simple", chinese_answer: "简单", chinese_romanization: "jiǎndān" },
            { option: "B", answer: "easy", chinese_answer: "容易", chinese_romanization: "róngyì" },
            { option: "C", answer: "fiendish", chinese_answer: "恶毒", chinese_romanization: "èdú" },
            { option: "D", answer: "straightforward", chinese_answer: "直截了当", chinese_romanization: "zhíjiéle dāng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'fiendish' means extremely cruel or unpleasant; devilish." +
            "<br><br>" +
            "(A) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(B) 'easy' means achieved without great effort; presenting few difficulties." +
            "<br><br>" +
            "(D) 'straightforward' means uncomplicated and easy to do or understand.",
        chinese_explanation: "(C) '恶毒' 意味着极其残酷或令人不快；邪恶的。" +
            "<br><br>" +
            "'简单' 意味着容易理解或完成；没有困难。" +
            "<br><br>" +
            "'容易' 意味着没有付出很大努力就能实现；难度不大。" +
            "<br><br>" +
            "'直截了当' 意味着简单易做或理解。"
    },
    {
        id: 5,
        question: "In a __________ display of integrity, he refused to participate in the fraudulent scheme.",
        chinese_question: "在一次 __________ 的正直表现中，他拒绝参与欺诈计划。",
        answers: [
            { option: "A", answer: "corrupt", chinese_answer: "腐败的", chinese_romanization: "fǔbài de" },
            { option: "B", answer: "virtuous", chinese_answer: "高尚的", chinese_romanization: "gāoshàng de" },
            { option: "C", answer: "deceitful", chinese_answer: "欺骗的", chinese_romanization: "qīpiàn de" },
            { option: "D", answer: "unethical", chinese_answer: "不道德的", chinese_romanization: "bù dàodé de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'virtuous' means having or showing high moral standards." +
            "<br><br>" +
            "(A) 'corrupt' means having or showing a willingness to act dishonestly in return for money or personal gain." +
            "<br><br>" +
            "(C) 'deceitful' means guilty of or involving deceit; deceiving or misleading others." +
            "<br><br>" +
            "(D) 'unethical' means not morally correct.",
        chinese_explanation: "(B) '高尚的' 意味着有或表现出高道德标准的。" +
            "<br><br>" +
            "(A) '腐败的' 意味着愿意为了金钱或个人利益而表现出不诚实的行为。" +
            "<br><br>" +
            "(C) '欺骗的' 意味着有罪的或涉及欺骗的；欺骗或误导他人的。" +
            "<br><br>" +
            "(D) '不道德的' 意味着不道德的。"
    },
    {
        id: 6,
    question: "Her __________ praise for her team's hard work made them feel unappreciated and demotivated.",
    chinese_question: "她对团队辛勤工作的 __________ 表扬让他们感到不被赏识和缺乏动力。",
    answers: [
        { option: "A", answer: "miserly", chinese_answer: "吝啬的", chinese_romanization: "lìnsè de" },
        { option: "B", answer: "abundant", chinese_answer: "丰富的", chinese_romanization: "fēngfù de" },
        { option: "C", answer: "heartfelt", chinese_answer: "真诚的", chinese_romanization: "zhēnchéng de" },
        { option: "D", answer: "effusive", chinese_answer: "热情洋溢的", chinese_romanization: "rèqíng yángyì de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'miserly' means relating to or characteristic of a miser; excessively cheap with praise or resources." +
        "<br><br>" +
        "(B) 'abundant' means existing or available in large quantities; plentiful." +
        "<br><br>" +
        "(C) 'heartfelt' means showing or expressing sincere feelings." +
        "<br><br>" +
        "(D) 'effusive' means expressing feelings of gratitude, pleasure, or approval in an unrestrained or heartfelt manner.",
    chinese_explanation: "(A) '吝啬的' 意味着与吝啬鬼有关的或具有吝啬鬼特征的；在赞扬或资源方面过于节俭的。" +
        "<br><br>" +
        "(B) '丰富的' 意味着大量存在或可用的；充足的。" +
        "<br><br>" +
        "(C) '真诚的' 意味着展示或表达真挚感情的。" +
        "<br><br>" +
        "(D) '热情洋溢的' 意味着以无保留或真挚的方式表达感激、愉悦或赞许的。"
    },
    {
        id: 7,
    question: "The detective found the suspect's story __________ and continued to investigate further.",
    chinese_question: "侦探觉得嫌疑人的故事 __________，继续进行进一步调查。",
    answers: [
        { option: "A", answer: "believable", chinese_answer: "可信的", chinese_romanization: "kěxìn de" },
        { option: "B", answer: "plausible", chinese_answer: "合理的", chinese_romanization: "hélǐ de" },
        { option: "C", answer: "implausible", chinese_answer: "不合理的", chinese_romanization: "bù hélǐ de" },
        { option: "D", answer: "probable", chinese_answer: "可能的", chinese_romanization: "kěnéng de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'implausible' means not seeming reasonable or probable; failing to convince." +
        "<br><br>" +
        "(A) 'believable' means able to be believed; credible." +
        "<br><br>" +
        "(B) 'plausible' means (of an argument or statement) seeming reasonable or probable." +
        "<br><br>" +
        "(D) 'probable' means likely to be the case or to happen.",
    chinese_explanation: "(C) '不合理的' 一词意味着看起来不合理或不可能；不能令人信服。" +
        "<br><br>" +
        "(A) '可信的' 意味着可以相信的；可信的。" +
        "<br><br>" +
        "(B) '合理的' 意味着（论点或陈述）看起来合理或可能的。" +
        "<br><br>" +
        "(D) '可能的' 意味着可能是这种情况或发生。"
    },
    {
        id: 8,
        question: "His __________ mannerisms, such as constantly quoting obscure philosophers, made it difficult for others to take him seriously.",
        chinese_question: "他的 __________ 举止，例如不断引用晦涩的哲学家，使别人难以认真对待他。",
        answers: [
                { option: "A", answer: "humble", chinese_answer: "谦逊的", chinese_romanization: "qiānxùn de" },
                { option: "B", answer: "genuine", chinese_answer: "真诚的", chinese_romanization: "zhēnchéng de" },
                { option: "C", answer: "pretentious", chinese_answer: "自命不凡的", chinese_romanization: "zìmìng bùfán de" },
                { option: "D", answer: "sincere", chinese_answer: "真挚的", chinese_romanization: "zhēnzhì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'pretentious' means attempting to impress by affecting greater importance, talent, culture, etc., than is actually possessed." +
            "<br><br>" +
            "(A) 'humble' means having or showing a modest or low estimate of one's own importance." +
            "<br><br>" +
            "(B) 'genuine' means truly what something is said to be; authentic." +
            "<br><br>" +
            "(D) 'sincere' means free from pretense or deceit; proceeding from genuine feelings.",
        chinese_explanation: "(C) '自命不凡的' 一词意味着试图通过影响比实际拥有的更大的重要性、才能、文化等来给人留下深刻印象。" +
            "<br><br>" +
            "(A) '谦逊的' 意味着对自己重要性的谦虚或低估。" +
            "<br><br>" +
            "(B) '真诚的' 意味着真正的，真实的。" +
            "<br><br>" +
            "(D) '真挚的' 意味着没有虚伪或欺骗；源于真情的。"
    },
    {
        id: 9,
        question: "It would be __________ of me to make decisions on behalf of the entire team without consulting them first.",
        chinese_question: "如果我未经先咨询整个团队就代表他们做决定，那将是 __________ 的。",
        answers: [
            { option: "A", answer: "considerate", chinese_answer: "体贴的", chinese_romanization: "tǐtiē de" },
            { option: "B", answer: "presumptuous", chinese_answer: "放肆的", chinese_romanization: "fàngsì de" },
            { option: "C", answer: "humble", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
            { option: "D", answer: "respectful", chinese_answer: "尊重的", chinese_romanization: "zūnzhòng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'presumptuous' means failing to observe the limits of what is permitted or appropriate; overconfident or arrogant." +
            "<br><br>" +
            "(A) 'considerate' means careful not to cause inconvenience or hurt to others." +
            "<br><br>" +
            "(C) 'humble' means having or showing a modest or low estimate of one's own importance." +
            "<br><br>" +
            "(D) 'respectful' means feeling or showing deference and respect.",
        chinese_explanation: "(B) '放肆的' 意味着未能遵守许可或适当的限度；过于自信或傲慢的。" +
            "<br><br>" +
            "(A) '体贴的' 意味着小心不引起别人不便或伤害的。" +
            "<br><br>" +
            "(C) '谦虚的' 意味着对自己重要性的估计谦逊或较低。" +
            "<br><br>" +
            "(D) '尊重的' 意味着感到或表现出敬意的。"
    },
    {
        id: 10,
        question: "Her __________ vision for the community center included facilities that would rival those of a major city's.",
        chinese_question: "她对社区中心的 __________ 设想包括可与大城市设施媲美的设施。",
        answers: [
            { option: "A", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
            { option: "B", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "C", answer: "grandiose", chinese_answer: "宏伟的", chinese_romanization: "hóngwěi de" },
            { option: "D", answer: "humble", chinese_answer: "卑微的", chinese_romanization: "bēiwēi de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'grandiose' means impressive or magnificent in appearance or style, especially pretentiously so." +
            "<br><br>" +
            "(A) 'modest' means unassuming in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(B) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(D) 'humble' means having or showing a modest or low estimate of one's importance.",
        chinese_explanation: "(C) '宏伟的' 意味着外观或风格上令人印象深刻或壮丽，特别是自命不凡的。" +
            "<br><br>" +
            "'谦虚的' 意味着对自己能力或成就的估计不过高的。" +
            "<br><br>" +
            "'简单的' 意味着容易理解或完成的；没有难度的。" +
            "<br><br>" +
            "'卑微的' 意味着对自己重要性的估计或表现较低的。"
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
