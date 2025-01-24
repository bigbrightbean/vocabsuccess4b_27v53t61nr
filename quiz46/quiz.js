// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "Her __________ performance in the play brought the house down, leaving the audience in stitches.",
    chinese_question: "她在戏剧中的 __________ 表演让全场轰动，观众笑得合不拢嘴。",
    answers: [
        { option: "A", answer: "hilarious", chinese_answer: "滑稽的", chinese_romanization: "huájī de" },
        { option: "B", answer: "mediocre", chinese_answer: "平庸的", chinese_romanization: "píngyōng de" },
        { option: "C", answer: "dull", chinese_answer: "乏味的", chinese_romanization: "fáwèi de" },
        { option: "D", answer: "solemn", chinese_answer: "庄重的", chinese_romanization: "zhuāngzhòng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'hilarious' means extremely amusing." +
        "<br><br>" +
        "(B) 'mediocre' means of only moderate quality; not very good." +
        "<br><br>" +
        "(C) 'dull' means lacking interest or excitement." +
        "<br><br>" +
        "(D) 'solemn' means formal and dignified.",
    chinese_explanation: "(A) '滑稽的' 意味着极其有趣的。" +
        "<br><br>" +
        "(B) '平庸的' 意味着质量一般的；不是很好的。" +
        "<br><br>" +
        "(C) '乏味的' 意味着缺乏兴趣或兴奋的。" +
        "<br><br>" +
        "(D) '庄重的' 意味着正式和有尊严的。"
    },
    {
        id: 2,
        question: "Her __________ loyalty to her friends was admirable, as she stood by them through thick and thin.",
        chinese_question: "她对朋友的 __________ 忠诚是值得钦佩的，因为她在任何情况下都支持他们。",
        answers: [
            { option: "A", answer: "wavering", chinese_answer: "动摇的", chinese_romanization: "dòngyáo de" },
            { option: "B", answer: "uncertain", chinese_answer: "不确定的", chinese_romanization: "bù quèdìng de" },
            { option: "C", answer: "tenacious", chinese_answer: "顽强的", chinese_romanization: "wánqiáng de" },
            { option: "D", answer: "fickle", chinese_answer: "多变的", chinese_romanization: "duōbiàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'tenacious' means tending to keep a firm hold of something; clinging or adhering closely; persistent." +
            "<br><br>" +
            "(A) 'wavering' means moving in a quivering way; flickering." +
            "<br><br>" +
            "(B) 'uncertain' means not able to be relied on; not known or definite." +
            "<br><br>" +
            "(D) 'fickle' means changing frequently, especially as regards one's loyalties or affections.",
        chinese_explanation: "(C) '顽强的' 意味着倾向于牢牢抓住某物；紧贴或紧紧依附；坚持不懈。" +
            "<br><br>" +
            "(A) '动摇的' 意味着以颤抖的方式移动；闪烁。" +
            "<br><br>" +
            "(B) '不确定的' 意味着不能依赖的；不确定的或不明确的。" +
            "<br><br>" +
            "(D) '多变的' 意味着经常变化的，尤其是指一个人的忠诚或感情。"
    },
    {
        id: 3,
    question: "The startup was __________ for funding to bring their innovative product to market.",
    chinese_question: "这家初创公司急需资金将其创新产品推向市场。",
    answers: [
        { option: "A", answer: "thriving", chinese_answer: "繁荣", chinese_romanization: "fánróng" },
        { option: "B", answer: "starved", chinese_answer: "挨饿", chinese_romanization: "ái'è" },
        { option: "C", answer: "nourished", chinese_answer: "营养充足", chinese_romanization: "yíngyǎng chōngzú" },
        { option: "D", answer: "flourishing", chinese_answer: "兴旺", chinese_romanization: "xīngwàng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'starved' means to suffer from a severe lack of something necessary." +
        "<br><br>" +
        "(A) 'thriving' means growing or developing well or vigorously." +
        "<br><br>" +
        "(C) 'nourished' means provided with the food or other substances necessary for growth, health, and good condition." +
        "<br><br>" +
        "(D) 'flourishing' means developing rapidly and successfully; thriving.",
    chinese_explanation: "(B) '挨饿' 意味着严重缺乏某些必要的东西。" +
        "<br><br>" +
        "(A) '繁荣' 意味着良好或旺盛地生长或发展。" +
        "<br><br>" +
        "(C) '营养充足' 意味着提供生长、健康和良好状况所需的食物或其他物质。" +
        "<br><br>" +
        "(D) '兴旺' 意味着快速发展并取得成功；繁荣的。"
    },
    {
        id: 4,
        question: "His __________ outlook on life inspired his friends to stay positive even in challenging times.",
        chinese_question: "他对生活的 __________ 观点激励了他的朋友们，即使在挑战时期也保持积极。",
        answers: [
            { option: "A", answer: "negative", chinese_answer: "消极的", chinese_romanization: "xiāojí de" },
            { option: "B", answer: "dreary", chinese_answer: "沉闷的", chinese_romanization: "chénmèn de" },
            { option: "C", answer: "upbeat", chinese_answer: "乐观的", chinese_romanization: "lèguān de" },
            { option: "D", answer: "sorrowful", chinese_answer: "悲伤的", chinese_romanization: "bēishāng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'upbeat' means cheerful and optimistic." +
            "<br><br>" +
            "(A) 'negative' means consisting in or characterized by the absence rather than the presence of distinguishing features." +
            "<br><br>" +
            "(B) 'dreary' means dull, bleak, and lifeless; depressing." +
            "<br><br>" +
            "(D) 'sorrowful' means feeling or showing grief.",
        chinese_explanation: "(C) '乐观的' 意味着开朗和乐观的。" +
            "<br><br>" +
            "(A) '消极的' 意味着表现为缺乏特征而不是存在特征。" +
            "<br><br>" +
            "(B) '沉闷的' 意味着乏味、荒凉和没有生气的；令人沮丧的。" +
            "<br><br>" +
            "(D) '悲伤的' 意味着感到或表现出悲伤。"
    },
    {
        id: 5,
    question: "The long and stressful negotiations left the diplomat looking __________, as if he had aged several years in just a few days.",
    chinese_question: "漫长而紧张的谈判使这位外交官看起来 __________，仿佛在短短几天内老了好几岁。",
    answers: [
        { option: "A", answer: "haggard", chinese_answer: "憔悴的", chinese_romanization: "qiáocuì de" },
        { option: "B", answer: "invigorated", chinese_answer: "精力充沛的", chinese_romanization: "jīnglì chōngpèi de" },
        { option: "C", answer: "energized", chinese_answer: "充满活力的", chinese_romanization: "chōngmǎn huólì de" },
        { option: "D", answer: "youthful", chinese_answer: "年轻的", chinese_romanization: "niánqīng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'haggard' means looking exhausted and unwell, especially from fatigue, worry, or suffering." +
        "<br><br>" +
        "(B) 'invigorated' means filled with energy or vitality." +
        "<br><br>" +
        "(C) 'energized' means given vitality and enthusiasm." +
        "<br><br>" +
        "(D) 'youthful' means having the qualities of a young person.",
    chinese_explanation: "(A) '憔悴的' 意味着看起来筋疲力尽、不健康，尤其是由于疲劳、担忧或痛苦。" +
        "<br><br>" +
        "(B) '精力充沛的' 意味着充满能量或活力的。" +
        "<br><br>" +
        "(C) '充满活力的' 意味着充满活力和热情的。" +
        "<br><br>" +
        "(D) '年轻的' 意味着具有年轻人的品质的。"
    },
    {
        id: 6,
        question: "His __________ background gave him a unique perspective on how to address the challenges of city living.",
        chinese_question: "他的 __________ 背景使他对如何解决城市生活的挑战有了独特的见解。",
        answers: [
            { option: "A", answer: "pastoral", chinese_answer: "田园的", chinese_romanization: "tiányuán de" },
            { option: "B", answer: "urban", chinese_answer: "城市的", chinese_romanization: "chéngshì de" },
            { option: "C", answer: "provincial", chinese_answer: "省的", chinese_romanization: "shěng de" },
            { option: "D", answer: "idyllic", chinese_answer: "田园诗般的", chinese_romanization: "tiányuán shī bān de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'urban' means relating to, or characteristic of a city or town." +
            "<br><br>" +
            "(A) 'pastoral' means associated with country life, typically relating to the pleasant aspects of the countryside and farming." +
            "<br><br>" +
            "(C) 'provincial' means of or concerning a province of a country or empire." +
            "<br><br>" +
            "(D) 'idyllic' means like an idyll; extremely happy, peaceful, or picturesque.",
        chinese_explanation: "(B) '城市的' 意味着与城市或城镇相关或具有城市特点的。" +
            "<br><br>" +
            "(A) '田园的' 意味着与乡村生活有关的，通常与乡村和农业的愉快方面有关。" +
            "<br><br>" +
            "(C) '省的' 意味着与国家或帝国的一个省有关的。" +
            "<br><br>" +
            "(D) '田园诗般的' 意味着像田园诗一样；极其快乐、宁静或风景如画的。"
    },
    {
        id: 7,
    question: "Being __________ in his work earned him the respect and trust of his colleagues.",
    chinese_question: "在工作中__________使他赢得了同事们的尊重和信任。",
    answers: [
        { option: "A", answer: "late", chinese_answer: "迟到的", chinese_romanization: "chídào de" },
        { option: "B", answer: "delayed", chinese_answer: "延迟的", chinese_romanization: "yánchí de" },
        { option: "C", answer: "punctual", chinese_answer: "准时的", chinese_romanization: "zhǔnshí de" },
        { option: "D", answer: "tardy", chinese_answer: "缓慢的", chinese_romanization: "huǎnmàn de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'punctual' means happening or doing something at the agreed or proper time; on time. Figuratively, it can mean being reliable and prompt in duties." +
        "<br><br>" +
        "(A) 'late' means doing something or taking place after the expected, proper, or usual time." +
        "<br><br>" +
        "(B) 'delayed' means to make someone or something late or slow." +
        "<br><br>" +
        "(D) 'tardy' means delaying or delayed beyond the right or expected time; late.",
    chinese_explanation: "(C) '准时的'一词意味着在约定或适当的时间发生或做某事；准时的。比喻地，它可以表示在职责上可靠和及时的。" +
        "<br><br>" +
        "(A) '迟到的' 意味着在预期、适当或通常的时间之后做某事或发生。" +
        "<br><br>" +
        "(B) '延迟的' 意味着使某人或某事迟到或缓慢。" +
        "<br><br>" +
        "(D) '缓慢的' 意味着超出正确或预期时间的延迟或延误的；迟到的。"
    },
    {
        id: 8,
    question: "Her role as the project manager is __________ to the success of the new product launch, coordinating all the different teams involved.",
    chinese_question: "她作为项目经理的角色对新产品发布的成功是 __________ 的，协调所有参与的不同团队。",
    answers: [
        { option: "A", answer: "integral", chinese_answer: "必不可少的", chinese_romanization: "bì bùkě shǎo de" },
        { option: "B", answer: "supplementary", chinese_answer: "补充的", chinese_romanization: "bǔchōng de" },
        { option: "C", answer: "dispensable", chinese_answer: "可有可无的", chinese_romanization: "kě yǒu kě wú de" },
        { option: "D", answer: "peripheral", chinese_answer: "周边的", chinese_romanization: "zhōubiān de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'integral' means necessary to make a whole complete; essential or fundamental." +
        "<br><br>" +
        "(B) 'supplementary' means completing or enhancing something." +
        "<br><br>" +
        "(C) 'dispensable' means able to be replaced or done without; superfluous." +
        "<br><br>" +
        "(D) 'peripheral' means relating to or situated on the edge or periphery of something.",
    chinese_explanation: "(A) '必不可少的' 意味着使整体完整所必需的；基本的。" +
        "<br><br>" +
        "(B) '补充的' 意味着完成或增强某事的。" +
        "<br><br>" +
        "(C) '可有可无的' 意味着可以被替代或无需的；多余的。" +
        "<br><br>" +
        "(D) '周边的' 意味着与某物的边缘或外围相关的。"
    },
    {
        id: 9,
    question: "The __________ child refused to follow any of the rules, causing constant trouble in the classroom.",
    chinese_question: "这个 __________ 的孩子拒绝遵守任何规则，在课堂上不断惹麻烦。",
    answers: [
        { option: "A", answer: "obedient", chinese_answer: "顺从的", chinese_romanization: "shùncóng de" },
        { option: "B", answer: "compliant", chinese_answer: "合作的", chinese_romanization: "hézuò de" },
        { option: "C", answer: "recalcitrant", chinese_answer: "顽固的", chinese_romanization: "wángù de" },
        { option: "D", answer: "cooperative", chinese_answer: "配合的", chinese_romanization: "pèihé de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'recalcitrant' means having an obstinately uncooperative attitude toward authority or discipline." +
        "<br><br>" +
        "(A) 'obedient' means complying or willing to comply with orders or requests; submissive to another's will." +
        "<br><br>" +
        "(B) 'compliant' means inclined to agree with others or obey rules, especially to an excessive degree; acquiescent." +
        "<br><br>" +
        "(D) 'cooperative' means involving mutual assistance in working toward a common goal.",
    chinese_explanation: "(C) '顽固的' 一词意味着对权威或纪律顽固不合作的态度。" +
        "<br><br>" +
        "(A) '顺从的' 意味着遵从或愿意遵从命令或要求；服从他人意愿的。" +
        "<br><br>" +
        "(B) '合作的' 意味着倾向于与他人或遵守规则，尤其是过度程度的。" +
        "<br><br>" +
        "(D) '配合的' 意味着涉及互助以实现共同目标的。"
    },
    {
        id: 10,
    question: "His __________ nature made him a great listener, always fully engaged in conversations.",
    chinese_question: "他的 __________ 性格使他成为一个很好的倾听者，总是全身心投入到对话中。",
    answers: [
        { option: "A", answer: "distracted", chinese_answer: "分心的", chinese_romanization: "fēnxīn de" },
        { option: "B", answer: "attentive", chinese_answer: "注意的", chinese_romanization: "zhùyì de" },
        { option: "C", answer: "disinterested", chinese_answer: "不感兴趣的", chinese_romanization: "bù gǎn xìngqù de" },
        { option: "D", answer: "negligent", chinese_answer: "疏忽的", chinese_romanization: "shūhū de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'attentive' means paying close attention to something." +
        "<br><br>" +
        "(A) 'distracted' means unable to concentrate because one's mind is preoccupied." +
        "<br><br>" +
        "(C) 'disinterested' means not influenced by considerations of personal advantage." +
        "<br><br>" +
        "(D) 'negligent' means failing to take proper care in doing something.",
    chinese_explanation: "(B) '注意的' 意味着密切注意某事。" +
        "<br><br>" +
        "(A) '分心的' 意味着无法集中注意力，因为心思被其他事情占据。" +
        "<br><br>" +
        "(C) '不感兴趣的' 意味着不受个人利益考虑的影响。" +
        "<br><br>" +
        "(D) '疏忽的' 意味着未能妥善处理某事。"
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
