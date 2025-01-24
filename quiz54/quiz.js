// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The conference welcomed __________ speakers to provide diverse perspectives and promote cross-cultural dialogue.",
        chinese_question: "会议欢迎 __________ 演讲者提供多样的观点，促进跨文化对话。",
        answers: [
            { option: "A", answer: "monolingual", chinese_answer: "单语的", chinese_romanization: "dānyǔ de" },
            { option: "B", answer: "unilingual", chinese_answer: "单语言的", chinese_romanization: "dān yǔyán de" },
            { option: "C", answer: "bilingual", chinese_answer: "双语的", chinese_romanization: "shuāngyǔ de" },
            { option: "D", answer: "linguistically-challenged", chinese_answer: "语言能力受限的", chinese_romanization: "yǔyán nénglì shòuxiàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'bilingual' means able to speak two languages fluently." +
            "<br><br>" +
            "(A) 'monolingual' means speaking only one language." +
            "<br><br>" +
            "(B) 'unilingual' means of, relating to, or involving only one language." +
            "<br><br>" +
            "(D) 'linguistically-challenged' means having difficulty with language skills.",
        chinese_explanation: "(C) '双语的' 意味着能够流利地说两种语言。" +
            "<br><br>" +
            "'单语的' 意味着只说一种语言。" +
            "<br><br>" +
            "'单语言的' 意味着与仅涉及一种语言有关的。" +
            "<br><br>" +
            "'语言能力受限的' 意味着在语言技能上有困难的。"
    },
    {
        id: 2,
        question: "The manager implemented __________ policies to ensure that promotions were based on merit rather than favoritism.",
        chinese_question: "经理实施了 __________ 的政策，以确保晋升是基于功绩而不是偏袒。",
        answers: [
            { option: "A", answer: "arbitrary", chinese_answer: "随意的", chinese_romanization: "suíyì de" },
            { option: "B", answer: "discriminatory", chinese_answer: "歧视的", chinese_romanization: "qíshì de" },
            { option: "C", answer: "equitable", chinese_answer: "公平的", chinese_romanization: "gōngpíng de" },
            { option: "D", answer: "partial", chinese_answer: "偏袒的", chinese_romanization: "piāntǎn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'equitable' means fair and impartial." +
            "<br><br>" +
            "(A) 'arbitrary' means based on random choice or personal whim, rather than any reason or system." +
            "<br><br>" +
            "(B) 'discriminatory' means making or showing an unfair or prejudicial distinction between different categories of people or things." +
            "<br><br>" +
            "(D) 'partial' means favoring one side in a dispute above the other; biased.",
        chinese_explanation: "(C) '公平的' 意味着公正和不偏不倚的。" +
            "<br><br>" +
            "(A) '随意的' 意味着基于随机选择或个人喜好，而不是任何理由或系统。" +
            "<br><br>" +
            "(B) '歧视的' 意味着在不同类别的人或事物之间做出不公平或有偏见的区分的。" +
            "<br><br>" +
            "(D) '偏袒的' 意味着在争端中偏向一方的；有偏见的。"
    },
    {
        id: 3,
    question: "Her __________ criticism left no room for misunderstanding, as she bluntly pointed out the flaws in the plan.",
    chinese_question: "她的 __________ 批评毫不含糊地指出了计划中的缺陷。",
    answers: [
        { option: "A", answer: "pungent", chinese_answer: "尖锐的", chinese_romanization: "jiānruì de" },
        { option: "B", answer: "vague", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
        { option: "C", answer: "ambiguous", chinese_answer: "含糊的", chinese_romanization: "hánhú de" },
        { option: "D", answer: "gentle", chinese_answer: "温和的", chinese_romanization: "wēnhé de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'pungent' means having a sharply strong taste or smell; also can mean being sharp and caustic in manner or style." +
        "<br><br>" +
        "(B) 'vague' means of uncertain, indefinite, or unclear character or meaning." +
        "<br><br>" +
        "(C) 'ambiguous' means open to more than one interpretation; having a double meaning." +
        "<br><br>" +
        "(D) 'gentle' means having or showing a mild, kind, or tender temperament or character.",
    chinese_explanation: "(A) '尖锐的' 意味着具有非常强烈的味道或气味；也可以意味着风格或态度尖锐和尖刻的。" +
        "<br><br>" +
        "(B) '模糊的' 意味着性质不确定、模糊或不清晰的。" +
        "<br><br>" +
        "(C) '含糊的' 意味着可以有不止一种解释的；有双重意义的。" +
        "<br><br>" +
        "(D) '温和的' 意味着具有或表现出温和、善良或温柔的性格或品格的。"
    },
    {
        id: 4,
        question: "Despite their best efforts, the team found the solution to the problem to be __________, always just out of reach.",
        chinese_question: "尽管他们尽了最大的努力，团队发现问题的解决方案 __________，总是难以捉摸。",
        answers: [
                { option: "A", answer: "obvious", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" },
                { option: "B", answer: "clear", chinese_answer: "清楚的", chinese_romanization: "qīngchǔ de" },
                { option: "C", answer: "elusive", chinese_answer: "难以捉摸的", chinese_romanization: "nányǐ zhuōmō de" },
                { option: "D", answer: "straightforward", chinese_answer: "直截了当的", chinese_romanization: "zhíjié liǎodàng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'elusive' means difficult to find, catch, or achieve." +
            "<br><br>" +
            "(A) 'obvious' means easily perceived or understood; clear, self-evident, or apparent." +
            "<br><br>" +
            "(B) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(D) 'straightforward' means uncomplicated and easy to do or understand.",
        chinese_explanation: "(C) '难以捉摸的' 一词意味着难以找到、捕捉或实现的。" +
            "<br><br>" +
            "(A) '明显的' 意味着容易感知或理解；清晰，自明或明显的。" +
            "<br><br>" +
            "(B) '清楚的' 意味着容易感知、理解或解释的。" +
            "<br><br>" +
            "(D) '直截了当的' 意味着不复杂且易于做或理解的。"
    },
    {
        id: 5,
        question: "The philanthropist's __________ donation helped build a new hospital in the community.",
        chinese_question: "慈善家的__________捐款帮助在社区建立了一家新医院。",
        answers: [
            { option: "A", answer: "stingy", chinese_answer: "吝啬的", chinese_romanization: "lìnsè de" },
            { option: "B", answer: "munificent", chinese_answer: "慷慨的", chinese_romanization: "kāngkǎi de" },
            { option: "C", answer: "meager", chinese_answer: "贫乏的", chinese_romanization: "pínfá de" },
            { option: "D", answer: "scanty", chinese_answer: "稀少的", chinese_romanization: "xīshǎo de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'munificent' means larger or more generous than is usual or necessary." +
            "<br><br>" +
            "(A) 'stingy' means unwilling to give or spend; ungenerous." +
            "<br><br>" +
            "(C) 'meager' means (of something provided or available) lacking in quantity or quality." +
            "<br><br>" +
            "(D) 'scanty' means small or insufficient in quantity or amount.",
        chinese_explanation: "(B) '慷慨的'一词意味着比通常或必要的更大或更慷慨的。" +
            "<br><br>" +
            "(A) '吝啬的' 意味着不愿意给予或花费；不慷慨的。" +
            "<br><br>" +
            "(C) '贫乏的' 意味着（提供的或可用的东西）在数量或质量上不足的。" +
            "<br><br>" +
            "(D) '稀少的' 意味着数量或数量不足的。"
    },
    {
        id: 6,
    question: "The __________ nature of the software allows users to customize it to their needs.",
    chinese_question: "软件的 __________ 特性使用户能够根据自己的需求进行定制。",
    answers: [
        { option: "A", answer: "flexible", chinese_answer: "灵活", chinese_romanization: "línghuó" },
        { option: "B", answer: "static", chinese_answer: "静态", chinese_romanization: "jìngtài" },
        { option: "C", answer: "fixed", chinese_answer: "固定", chinese_romanization: "gùdìng" },
        { option: "D", answer: "unchangeable", chinese_answer: "不可改变", chinese_romanization: "bùkě gǎibiàn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'flexible' means able to be easily modified to respond to altered circumstances or conditions." +
        "<br><br>" +
        "(B) 'static' means lacking in movement, action, or change." +
        "<br><br>" +
        "(C) 'fixed' means fastened securely in position." +
        "<br><br>" +
        "(D) 'unchangeable' means not able to be changed.",
    chinese_explanation: "(A) '灵活' 意味着能够轻松地修改以应对变化的情况或条件。" +
        "<br><br>" +
        "(B) '静态' 意味着缺乏运动、行动或变化。" +
        "<br><br>" +
        "(C) '固定' 意味着牢固地固定在位置上。" +
        "<br><br>" +
        "(D) '不可改变' 意味着无法改变。"
    },
    {
        id: 7,
    question: "The audience was __________ for new content, eagerly awaiting the release of the next book in the series.",
    chinese_question: "观众 __________ 地期待着新内容的发布，急切地等待着系列中下一本书的发行。",
    answers: [
        { option: "A", answer: "ravenous", chinese_answer: "渴望的", chinese_romanization: "kěwàng de" },
        { option: "B", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
        { option: "C", answer: "uninterested", chinese_answer: "不感兴趣的", chinese_romanization: "bù gǎn xìngqù de" },
        { option: "D", answer: "passive", chinese_answer: "被动的", chinese_romanization: "bèidòng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'ravenous' means having a very eager approach to something." +
    "<br><br>" +
    "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
    "<br><br>" +
    "(C) 'uninterested' means not interested in or concerned about something or someone." +
    "<br><br>" +
    "(D) 'passive' means accepting or allowing what happens or what others do, without active response or resistance.",
    chinese_explanation: "(A) '渴望的' 意味着对某事有非常渴望的态度。" +
    "<br><br>" +
    "(B) '冷漠的' 意味着没有特别的兴趣或同情的；不关心的。" +
    "<br><br>" +
    "(C) '不感兴趣的' 意味着对某事或某人不感兴趣的。" +
    "<br><br>" +
    "(D) '被动的' 意味着接受或允许发生的事情或他人的行为，而没有积极反应或抵抗的。"
    },
    {
        id: 8,
    question: "His __________ attitude towards work-life balance did not sit well with his colleagues.",
    chinese_question: "他对工作与生活平衡的__________态度不受同事的欢迎。",
    answers: [
        { option: "A", answer: "liberal", chinese_answer: "自由的", chinese_romanization: "zìyóu de" },
        { option: "B", answer: "permissive", chinese_answer: "放任的", chinese_romanization: "fàngrèn de" },
        { option: "C", answer: "puritanical", chinese_answer: "清教徒式的", chinese_romanization: "qīngjiàotú shì de" },
        { option: "D", answer: "lenient", chinese_answer: "宽大的", chinese_romanization: "kuāndà de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'puritanical' means practicing or affecting strict religious or moral behavior. Figuratively, it can mean being very strict and austere in behavior and attitudes." +
        "<br><br>" +
        "(A) 'liberal' means open to new behavior or opinions and willing to discard traditional values." +
        "<br><br>" +
        "(B) 'permissive' means allowing or characterized by great or excessive freedom of behavior." +
        "<br><br>" +
        "(D) 'lenient' means more merciful or tolerant than expected.",
    chinese_explanation: "(C) '清教徒式的'一词意味着实践或影响严格的宗教或道德行为的。比喻地，它可以表示在行为和态度上非常严格和严肃的。" +
        "<br><br>" +
        "(A) '自由的' 意味着愿意接受新的行为或观点并愿意抛弃传统价值观的。" +
        "<br><br>" +
        "(B) '放任的' 意味着允许或具有很大或过度行为自由的。" +
        "<br><br>" +
        "(D) '宽大的' 意味着比预期更仁慈或宽容的。"

    },
    {
        id: 9,
    question: "Her __________ investments yielded significant returns, much to the envy of her peers.",
    chinese_question: "她 __________ 的投资带来了显著的回报，让她的同行们非常羡慕。",
    answers: [
        { option: "A", answer: "shrewd", chinese_answer: "精明", chinese_romanization: "jīngmíng" },
        { option: "B", answer: "careless", chinese_answer: "粗心", chinese_romanization: "cūxīn" },
        { option: "C", answer: "thoughtless", chinese_answer: "欠考虑", chinese_romanization: "qiàn kǎolǜ" },
        { option: "D", answer: "spontaneous", chinese_answer: "自发", chinese_romanization: "zìfā" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'shrewd' means having or showing sharp powers of judgment; astute." +
        "<br><br>" +
        "(B) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
        "<br><br>" +
        "(C) 'thoughtless' means without consideration of the possible consequences." +
        "<br><br>" +
        "(D) 'spontaneous' means performed or occurring as a result of a sudden inner impulse.",
    chinese_explanation: "(A) '精明' 意味着拥有或表现出敏锐的判断力；精明。" +
        "<br><br>" +
        "(B) '粗心' 意味着没有足够的关注或考虑避免伤害或错误。" +
        "<br><br>" +
        "(C) '欠考虑' 意味着没有考虑到可能的后果。" +
        "<br><br>" +
        "(D) '自发' 意味着由于突然的内心冲动而进行或发生的。"
    },
    {
        id: 10,
    question: "The __________ framework of the business plan ensured it could adapt to market changes.",
    chinese_question: "商业计划的 __________ 框架确保它能适应市场变化。",
    answers: [
        { option: "A", answer: "fragile", chinese_answer: "脆弱的", chinese_romanization: "cuìruò de" },
        { option: "B", answer: "weak", chinese_answer: "虚弱的", chinese_romanization: "xūruò de" },
        { option: "C", answer: "sturdy", chinese_answer: "坚实的", chinese_romanization: "jiānshí de" },
        { option: "D", answer: "delicate", chinese_answer: "精致的", chinese_romanization: "jīngzhì de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'sturdy' means strongly and solidly built." +
        "<br><br>" +
        "(A) 'fragile' means easily broken or damaged." +
        "<br><br>" +
        "(B) 'weak' means lacking physical strength or vigor." +
        "<br><br>" +
        "(D) 'delicate' means easily broken or damaged; fragile.",
    chinese_explanation: "(C) “坚实的” 意味着坚固和牢固地建造。" +
        "<br><br>" +
        "(A) '脆弱的' 意味着容易破碎或损坏。" +
        "<br><br>" +
        "(B) '虚弱的' 意味着缺乏体力或活力。" +
        "<br><br>" +
        "(D) '精致的' 意味着容易破碎或损坏；脆弱的。"
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
