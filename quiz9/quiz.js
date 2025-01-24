// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The team was __________ in their performance, lacking the usual enthusiasm and drive.",
        chinese_question: "团队在他们的表演中显得__________，缺乏平常的热情和动力。",
        answers: [
            { option: "A", answer: "energetic", chinese_answer: "精力充沛的", chinese_romanization: "jīnglì chōngpèi de" },
            { option: "B", answer: "alert", chinese_answer: "警觉的", chinese_romanization: "jǐngjué de" },
            { option: "C", answer: "lethargic", chinese_answer: "昏睡的", chinese_romanization: "hūnshuì de" },
            { option: "D", answer: "lively", chinese_answer: "活跃的", chinese_romanization: "huóyuè de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'lethargic' means affected by lethargy; sluggish and apathetic. Figuratively, it can mean lacking energy or enthusiasm." +
            "<br><br>" +
            "(A) 'energetic' means showing or involving great activity or vitality." +
            "<br><br>" +
            "(B) 'alert' means quick to notice any unusual and potentially dangerous or difficult circumstances; vigilant." +
            "<br><br>" +
            "(D) 'lively' means full of life and energy; active and outgoing.",
        chinese_explanation: "(C) '昏睡的'一词意味着受昏睡影响的；迟钝和冷漠的。比喻地，它可以表示缺乏能量或热情。" +
            "<br><br>" +
            "(A) '精力充沛的' 意味着表现出或涉及大量活动或活力的。" +
            "<br><br>" +
            "(B) '警觉的' 意味着迅速注意到任何异常和潜在危险或困难的情况；警惕的。" +
            "<br><br>" +
            "(D) '活跃的' 意味着充满活力和能量的；积极和外向的。"
    },
    {
        id: 2,
    question: "Despite numerous attempts, the detective found the criminal to be __________, always managing to stay one step ahead.",
    chinese_question: "尽管进行了多次尝试，侦探发现罪犯非常 __________，总能保持领先一步。",
    answers: [
        { option: "A", answer: "visible", chinese_answer: "可见的", chinese_romanization: "kějiàn de" },
        { option: "B", answer: "apparent", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" },
        { option: "C", answer: "elusive", chinese_answer: "难捉摸的", chinese_romanization: "nán zhuōmō de" },
        { option: "D", answer: "detectable", chinese_answer: "可检测的", chinese_romanization: "kě jiǎncè de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'elusive' means difficult to find, catch, or achieve." +
        "<br><br>" +
        "(A) 'visible' means able to be seen." +
        "<br><br>" +
        "(B) 'apparent' means clearly visible or understood; obvious." +
        "<br><br>" +
        "(D) 'detectable' means able to be discovered or identified.",
    chinese_explanation: "(C) '难捉摸的' 意味着难以找到、捕捉或实现的。" +
        "<br><br>" +
        "(A) '可见的' 意味着能够被看到的。" +
        "<br><br>" +
        "(B) '明显的' 意味着清楚可见或理解的；明显的。" +
        "<br><br>" +
        "(D) '可检测的' 意味着能够被发现或识别的。"
    },
    {
        id: 3,
        question: "Trust is __________ to any successful relationship, providing the foundation for mutual respect and cooperation.",
        chinese_question: "信任是任何成功关系的 __________，为相互尊重和合作提供了基础。",
        answers: [
            { option: "A", answer: "optional", chinese_answer: "可选的", chinese_romanization: "kěxuǎn de" },
            { option: "B", answer: "fundamental", chinese_answer: "基本的", chinese_romanization: "jīběn de" },
            { option: "C", answer: "secondary", chinese_answer: "次要的", chinese_romanization: "cìyào de" },
            { option: "D", answer: "irrelevant", chinese_answer: "不相关的", chinese_romanization: "bù xiāngguān de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'fundamental' means forming a necessary base or core; of central importance." +
            "<br><br>" +
            "(A) 'optional' means available to be chosen but not obligatory." +
            "<br><br>" +
            "(C) 'secondary' means coming after, less important than, or resulting from someone or something else that is primary." +
            "<br><br>" +
            "(D) 'irrelevant' means not connected with or relevant to something.",
        chinese_explanation: "(B) '基本的' 意味着构成必要的基础或核心；具有重要意义的。" +
            "<br><br>" +
            "(A) '可选的' 意味着可以选择但不是强制的。" +
            "<br><br>" +
            "(C) '次要的' 意味着在某人或某物之后的、不太重要的或源自其他主要的东西的。" +
            "<br><br>" +
            "(D) '不相关的' 意味着与某事物无关的。"
    },
    {
        id: 4,
        question: "The author's __________ standards for her writing kept her at the top of her field.",
        chinese_question: "作者对自己写作的__________标准使她在自己的领域保持领先。",
        answers: [
            { option: "A", answer: "lax", chinese_answer: "松懈的", chinese_romanization: "sōngxiè de" },
            { option: "B", answer: "stringent", chinese_answer: "严格的", chinese_romanization: "yángé de" },
            { option: "C", answer: "easygoing", chinese_answer: "随和的", chinese_romanization: "suíhé de" },
            { option: "D", answer: "permissive", chinese_answer: "放任的", chinese_romanization: "fàngrèn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'stringent' means strict, precise, and exacting." +
            "<br><br>" +
            "(A) 'lax' means not sufficiently strict, severe, or careful." +
            "<br><br>" +
            "(C) 'easygoing' means relaxed and tolerant in approach or manner." +
            "<br><br>" +
            "(D) 'permissive' means allowing or characterized by great or excessive freedom of behavior.",
        chinese_explanation: "(B) '严格的'一词意味着严格、精确和苛求。" +
            "<br><br>" +
            "(A) '松懈的' 意味着不够严格、严厉或仔细。" +
            "<br><br>" +
            "(C) '随和的' 意味着态度或行为上放松和宽容的。" +
            "<br><br>" +
            "(D) '放任的' 意味着允许或以极大或过度的行为自由为特征。"
    },
    {
        id: 5,
    question: "His __________ approach to the new project caused delays, as he constantly questioned each step before proceeding.",
    chinese_question: "他对新项目的 __________ 态度导致了延误，因为他在每一步前都不断质疑。",
    answers: [
        { option: "A", answer: "hesitant", chinese_answer: "犹豫的", chinese_romanization: "yóuyù de" },
        { option: "B", answer: "proactive", chinese_answer: "积极主动的", chinese_romanization: "jījí zhǔdòng de" },
        { option: "C", answer: "enthusiastic", chinese_answer: "热情的", chinese_romanization: "rèqíng de" },
        { option: "D", answer: "determined", chinese_answer: "坚定的", chinese_romanization: "jiāndìng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'hesitant' means tentative, unsure, or slow in acting or speaking." +
        "<br><br>" +
        "(B) 'proactive' means creating or controlling a situation rather than just responding to it after it has happened." +
        "<br><br>" +
        "(C) 'enthusiastic' means having or showing intense and eager enjoyment, interest, or approval." +
        "<br><br>" +
        "(D) 'determined' means having made a firm decision and being resolved not to change it.",
    chinese_explanation: "(A) '犹豫的' 意味着试探性的、不确定的或行动或说话缓慢的。" +
        "<br><br>" +
        "(B) '积极主动的' 意味着创建或控制一个情况，而不是在事情发生后才做出反应。" +
        "<br><br>" +
        "(C) '热情的' 意味着有或表现出强烈和渴望的享受、兴趣或认可。" +
        "<br><br>" +
        "(D) '坚定的' 意味着已经做出坚定的决定并决心不改变的。"
    },
    {
        id: 6,
        question: "The __________ measures implemented by the administration helped the city recover from its financial crisis.",
        chinese_question: "行政部门实施的 __________ 措施帮助城市从财务危机中恢复过来。",
        answers: [
            { option: "A", answer: "wasteful", chinese_answer: "浪费的", chinese_romanization: "làngfèi de" },
            { option: "B", answer: "extravagant", chinese_answer: "奢侈的", chinese_romanization: "shēchǐ de" },
            { option: "C", answer: "thrifty", chinese_answer: "节俭的", chinese_romanization: "jiéjiǎn de" },
            { option: "D", answer: "reckless", chinese_answer: "鲁莽的", chinese_romanization: "lǔmǎng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'thrifty' means using money and other resources carefully and not wastefully." +
            "<br><br>" +
            "(A) 'wasteful' means using or expending something of value carelessly, extravagantly, or to no purpose." +
            "<br><br>" +
            "(B) 'extravagant' means lacking restraint in spending money or using resources." +
            "<br><br>" +
            "(D) 'reckless' means without thinking or caring about the consequences of an action.",
        chinese_explanation: "(C) '节俭的' 意味着小心和不浪费地使用金钱和其他资源。" +
            "<br><br>" +
            "(A) '浪费的' 意味着不小心、奢侈地或无目的地使用或花费有价值的东西。" +
            "<br><br>" +
            "(B) '奢侈的' 意味着在花钱或使用资源方面缺乏节制。" +
            "<br><br>" +
            "(D) '鲁莽的' 意味着不考虑行动的后果的。"
    },
    {
        id: 7,
        question: "His __________ approach to leadership ensured that everyone knew exactly what was expected of them.",
        chinese_question: "他 __________ 的领导方式确保每个人都清楚知道对他们的期望。",
        answers: [
            { option: "A", answer: "indirect", chinese_answer: "间接的", chinese_romanization: "jiànjiē de" },
            { option: "B", answer: "ambiguous", chinese_answer: "模棱两可的", chinese_romanization: "móléng liǎng kě de" },
            { option: "C", answer: "forthright", chinese_answer: "直率的", chinese_romanization: "zhíshuài de" },
            { option: "D", answer: "hesitant", chinese_answer: "犹豫的", chinese_romanization: "yóuyù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'forthright' means direct and outspoken; straightforward and honest." +
            "<br><br>" +
            "(A) 'indirect' means not directly caused by or resulting from something." +
            "<br><br>" +
            "(B) 'ambiguous' means open to more than one interpretation; not having one obvious meaning." +
            "<br><br>" +
            "(D) 'hesitant' means tentative, unsure, or slow in acting or speaking.",
        chinese_explanation: "(C) '直率的' 意味着直接和坦率的；直截了当的。" +
            "<br><br>" +
            "(A) '间接的' 意味着不是直接引起或导致某事的。" +
            "<br><br>" +
            "(B) '模棱两可的' 意味着不止一种解释的；没有明显意义的。" +
            "<br><br>" +
            "(D) '犹豫的' 意味着试探性的、不确定的或行动或讲话缓慢的。"
    },
    {
        id: 8,
        question: "The impact of the new policy on small businesses was very __________ and felt immediately.",
        chinese_question: "新政策对小企业的影响是非常__________的，并且立即感受到。",
        answers: [
            { option: "A", answer: "imaginary", chinese_answer: "想象的", chinese_romanization: "xiǎngxiàng de" },
            { option: "B", answer: "fictitious", chinese_answer: "虚构的", chinese_romanization: "xūgòu de" },
            { option: "C", answer: "real", chinese_answer: "真实的", chinese_romanization: "zhēnshí de" },
            { option: "D", answer: "fake", chinese_answer: "假的", chinese_romanization: "jiǎ de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'real' means actually existing as a thing or occurring in fact; not imagined or supposed. Figuratively, it can mean having a tangible and noticeable effect." +
            "<br><br>" +
            "(A) 'imaginary' means existing only in the imagination." +
            "<br><br>" +
            "(B) 'fictitious' means not real or true; imaginary or fabricated." +
            "<br><br>" +
            "(D) 'fake' means not genuine; counterfeit.",
        chinese_explanation: "(C) '真实的'一词意味着实际存在的事物或发生的事情；不是想象的或假设的。比喻地，它可以表示具有实际和显著的影响。" +
            "<br><br>" +
            "(A) '想象的' 意味着只存在于想象中的。" +
            "<br><br>" +
            "(B) '虚构的' 意味着不真实或不正确的；想象的或虚构的。" +
            "<br><br>" +
            "(D) '假的' 意味着不真实的；伪造的。"
    },
    {
        id: 9,
    question: "Her instructions were so __________ that there was no room for misunderstanding, and everyone knew exactly what to do.",
    chinese_question: "她的指示非常 __________，没有任何误解的余地，每个人都确切地知道该怎么做。",
    answers: [
        { option: "A", answer: "precise", chinese_answer: "精确的", chinese_romanization: "jīngquè de" },
        { option: "B", answer: "ambiguous", chinese_answer: "模棱两可的", chinese_romanization: "móléng liǎng kě de" },
        { option: "C", answer: "unclear", chinese_answer: "不清楚的", chinese_romanization: "bù qīngchu de" },
        { option: "D", answer: "general", chinese_answer: "笼统的", chinese_romanization: "lǒngtǒng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'precise' means marked by exactness and accuracy of expression or detail." +
        "<br><br>" +
        "(B) 'ambiguous' means open to more than one interpretation; having a double meaning." +
        "<br><br>" +
        "(C) 'unclear' means not easy to see, hear, or understand." +
        "<br><br>" +
        "(D) 'general' means affecting or concerning all or most people, places, or things; widespread.",
    chinese_explanation: "(A) '精确的' 意味着以表达或细节的准确性为特征的。" +
        "<br><br>" +
        "(B) '模棱两可的' 意味着可以有不止一种解释的；有双重意义的。" +
        "<br><br>" +
        "(C) '不清楚的' 意味着不容易看到、听到或理解的。" +
        "<br><br>" +
        "(D) '笼统的' 意味着影响或涉及所有或大多数人、地方或事物的；广泛的。"
    },
    {
        id: 10,
    question: "He was __________ to the fact that his comments had hurt her feelings.",
    chinese_question: "他 __________ 到他的评论伤害了她的感情。",
    answers: [
        { option: "A", answer: "cognizant", chinese_answer: "知道的", chinese_romanization: "zhīdào de" },
        { option: "B", answer: "aware", chinese_answer: "意识到的", chinese_romanization: "yìshí dào de" },
        { option: "C", answer: "oblivious", chinese_answer: "无视的", chinese_romanization: "wúshì de" },
        { option: "D", answer: "conscious", chinese_answer: "清醒的", chinese_romanization: "qīngxǐng de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'oblivious' means not aware of or not concerned about what is happening around one." +
        "<br><br>" +
        "(A) 'cognizant' means having knowledge or being aware of." +
        "<br><br>" +
        "(B) 'aware' means having knowledge or perception of a situation or fact." +
        "<br><br>" +
        "(D) 'conscious' means aware of and responding to one's surroundings.",
    chinese_explanation: "(C) '无视的' 意味着没有意识到或不关心周围发生的事情。" +
        "<br><br>" +
        "(A) '知道的' 意味着对某事有知识或感知的。" +
        "<br><br>" +
        "(B) '意识到的' 意味着对情况或事实有知识或感知的。" +
        "<br><br>" +
        "(D) '清醒的' 意味着意识到并回应周围环境的。"
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
