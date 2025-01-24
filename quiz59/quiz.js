// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "Her contribution to the project was __________, hardly making any impact on the overall outcome.",
    chinese_question: "她对项目的贡献 __________，几乎对整体结果没有任何影响。",
    answers: [
        { option: "A", answer: "paltry", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" },
        { option: "B", answer: "significant", chinese_answer: "重要的", chinese_romanization: "zhòngyào de" },
        { option: "C", answer: "impactful", chinese_answer: "有影响的", chinese_romanization: "yǒu yǐngxiǎng de" },
        { option: "D", answer: "considerable", chinese_answer: "相当大的", chinese_romanization: "xiāngdāng dà de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'paltry' means very small or meager; insignificant." +
        "<br><br>" +
        "(B) 'significant' means sufficiently great or important to be worthy of attention." +
        "<br><br>" +
        "(C) 'impactful' means having a major impact or effect." +
        "<br><br>" +
        "(D) 'considerable' means notably large in size, amount, or extent.",
    chinese_explanation: "(A) '微不足道的' 意味着非常小或微不足道的；不重要的。" +
        "<br><br>" +
        "(B) '重要的' 意味着足够伟大或重要，值得注意的。" +
        "<br><br>" +
        "(C) '有影响的' 意味着有重大影响或效果的。" +
        "<br><br>" +
        "(D) '相当大的' 意味着在大小、数量或程度上显著的。"
    },
    {
        id: 2,
    question: "The __________ gratification from winning the game was exhilarating for the players.",
    chinese_question: "赢得比赛带来的 __________ 满足感让球员们感到兴奋。",
    answers: [
        { option: "A", answer: "instant", chinese_answer: "即时", chinese_romanization: "jíshí" },
        { option: "B", answer: "delayed", chinese_answer: "延迟", chinese_romanization: "yánchí" },
        { option: "C", answer: "reserved", chinese_answer: "保留", chinese_romanization: "bǎoliú" },
        { option: "D", answer: "postponed", chinese_answer: "推迟", chinese_romanization: "tuīchí" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'instant' means happening or coming immediately." +
        "<br><br>" +
        "(B) 'delayed' means postponed or slowed down." +
        "<br><br>" +
        "(C) 'reserved' means slow to reveal emotion or opinions." +
        "<br><br>" +
        "(D) 'postponed' means cause or arrange for something to take place at a time later than that first scheduled.",
    chinese_explanation: "(A) '即时' 意味着立即发生或来到。" +
        "<br><br>" +
        "(B) '延迟' 意味着推迟或减慢。" +
        "<br><br>" +
        "(C) '保留' 意味着慢于表达情感或意见。" +
        "<br><br>" +
        "(D) '推迟' 意味着使某事在比原计划时间更晚的时间发生或安排。"
    },
    {
        id: 3,
    question: "Despite having many tasks to complete, he remained __________ and preferred to lounge around all day.",
    chinese_question: "尽管有许多任务要完成，他仍然 __________，宁愿整天懒散地躺着。",
    answers: [
        { option: "A", answer: "active", chinese_answer: "活跃的", chinese_romanization: "huóyuè de" },
        { option: "B", answer: "industrious", chinese_answer: "勤奋的", chinese_romanization: "qínfèn de" },
        { option: "C", answer: "indolent", chinese_answer: "懒惰的", chinese_romanization: "lǎnduò de" },
        { option: "D", answer: "diligent", chinese_answer: "勤勉的", chinese_romanization: "qínmiǎn de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'indolent' means wanting to avoid activity or exertion; lazy." +
        "<br><br>" +
        "(A) 'active' means engaging or ready to engage in physically energetic pursuits." +
        "<br><br>" +
        "(B) 'industrious' means diligent and hard-working." +
        "<br><br>" +
        "(D) 'diligent' means having or showing care and conscientiousness in one's work or duties.",
    chinese_explanation: "(C) '懒惰的' 一词意味着想要避免活动或努力；懒惰的。" +
        "<br><br>" +
        "(A) '活跃的' 意味着从事或准备从事体力充沛的追求。" +
        "<br><br>" +
        "(B) '勤奋的' 意味着勤勉和努力工作的。" +
        "<br><br>" +
        "(D) '勤勉的' 意味着在工作或职责上表现出关心和认真的。"
    },
    {
        id: 4,
        question: "His __________ remarks during the meeting offended many of his colleagues and created a tense atmosphere.",
        chinese_question: "他在会议上的 __________ 言论冒犯了许多同事，造成了紧张的气氛。",
        answers: [
                { option: "A", answer: "gentle", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
                { option: "B", answer: "caustic", chinese_answer: "尖刻的", chinese_romanization: "jiānkè de" },
                { option: "C", answer: "soothing", chinese_answer: "抚慰的", chinese_romanization: "fǔwèi de" },
                { option: "D", answer: "kind", chinese_answer: "友善的", chinese_romanization: "yǒushàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'caustic' means sarcastic in a scathing and bitter way." +
            "<br><br>" +
            "(A) 'gentle' means mild in temperament or behavior; kind or tender." +
            "<br><br>" +
            "(C) 'soothing' means having a gently calming effect." +
            "<br><br>" +
            "(D) 'kind' means having or showing a friendly, generous, and considerate nature.",
        chinese_explanation: "(B) '尖刻的' 一词意味着以讽刺和刻薄的方式表达的。" +
            "<br><br>" +
            "(A) '温和的' 意味着性格或行为温和的；友好或温柔的。" +
            "<br><br>" +
            "(C) '抚慰的' 意味着具有轻柔的安抚效果的。" +
            "<br><br>" +
            "(D) '友善的' 意味着具有或表现出友好、慷慨和体贴的性格。"
    },
    {
        id: 5,
    question: "The success of her book was __________, surpassing all expectations.",
    chinese_question: "她的书的成功是__________的，超出了所有的预期。",
    answers: [
        { option: "A", answer: "imaginable", chinese_answer: "可想象的", chinese_romanization: "kě xiǎngxiàng de" },
        { option: "B", answer: "expected", chinese_answer: "预料的", chinese_romanization: "yùliào de" },
        { option: "C", answer: "unimaginable", chinese_answer: "难以想象的", chinese_romanization: "nányǐ xiǎngxiàng de" },
        { option: "D", answer: "foreseeable", chinese_answer: "可预见的", chinese_romanization: "kě yùjiàn de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'unimaginable' means difficult or impossible to imagine or comprehend. Figuratively, it can mean something that exceeds all expectations." +
        "<br><br>" +
        "(A) 'imaginable' means possible to be imagined or conceived." +
        "<br><br>" +
        "(B) 'expected' means regarded as likely to happen." +
        "<br><br>" +
        "(D) 'foreseeable' means able to be foreseen or predicted.",
    chinese_explanation: "(C) '难以想象的'一词意味着难以或无法想象或理解。比喻地，它可以表示超出了所有期望的事物。" +
        "<br><br>" +
        "(A) '可想象的' 意味着可能被想象或设想。" +
        "<br><br>" +
        "(B) '预料的' 意味着认为可能会发生。" +
        "<br><br>" +
        "(D) '可预见的' 意味着可以预见或预测的。"
    },
    {
        id: 6,
    question: "Her __________ approach to reforming the company's outdated policies often put her at odds with more conservative colleagues.",
    chinese_question: "她对改革公司过时政策的 __________ 方法经常使她与更保守的同事发生冲突。",
    answers: [
        { option: "A", answer: "militant", chinese_answer: "激进的", chinese_romanization: "jījìn de" },
        { option: "B", answer: "diplomatic", chinese_answer: "外交的", chinese_romanization: "wàijiāo de" },
        { option: "C", answer: "conciliatory", chinese_answer: "调解的", chinese_romanization: "tiáojiě de" },
        { option: "D", answer: "neutral", chinese_answer: "中立的", chinese_romanization: "zhōnglì de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'militant' means combative and aggressive in support of a political or social cause." +
        "<br><br>" +
        "(B) 'diplomatic' means having or showing an ability to deal with people in a sensitive and effective way." +
        "<br><br>" +
        "(C) 'conciliatory' means intended or likely to placate or pacify." +
        "<br><br>" +
        "(D) 'neutral' means not supporting or helping either side in a conflict or disagreement.",
    chinese_explanation: "(A) '激进的' 意味着以战斗性和攻击性的态度支持政治或社会事业。" +
        "<br><br>" +
        "(B) '外交的' 意味着表现出或展示出以敏感和有效的方式处理人际关系的能力。" +
        "<br><br>" +
        "(C) '调解的' 意味着旨在或可能安抚或平息的。" +
        "<br><br>" +
        "(D) '中立的' 意味着在冲突或争议中不支持或帮助任何一方的。"
    },
    {
        id: 7,
        question: "Her decision to leave her job and travel the world was a __________ choice that surprised everyone, as she had always been so organized and methodical.",
        chinese_question: "她决定辞职去环游世界，这是一个 __________ 的选择，令所有人感到惊讶，因为她一直都是那么有条不紊和有条理。",
        answers: [
            { option: "A", answer: "spur-of-the-moment", chinese_answer: "心血来潮的", chinese_romanization: "xīnxuè láicháo de" },
            { option: "B", answer: "calculated", chinese_answer: "经过深思熟虑的", chinese_romanization: "jīngguò shēnsī shúlǜ de" },
            { option: "C", answer: "strategic", chinese_answer: "战略性的", chinese_romanization: "zhànlüè xìng de" },
            { option: "D", answer: "methodical", chinese_answer: "有条理的", chinese_romanization: "yǒu tiáolǐ de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'spur-of-the-moment' means occurring or done without advance preparation or planning." +
            "<br><br>" +
            "(B) 'calculated' means done with full awareness of the likely consequences." +
            "<br><br>" +
            "(C) 'strategic' means relating to the identification of long-term or overall aims and interests and the means of achieving them." +
            "<br><br>" +
            "(D) 'methodical' means done according to a systematic or established form of procedure.",
        chinese_explanation: "(A) '心血来潮的' 意味着在没有提前准备或计划的情况下发生或完成的。" +
            "<br><br>" +
            "(B) '经过深思熟虑的' 意味着充分意识到可能的后果后做出的。" +
            "<br><br>" +
            "(C) '战略性的' 意味着与确定长期或总体目标和利益及实现它们的方法有关的。" +
            "<br><br>" +
            "(D) '有条理的' 意味着按照系统或既定程序进行的。"
    },
    {
        id: 8,
        question: "Growing up in a __________ area, she developed a deep appreciation for nature and a slower pace of life.",
        chinese_question: "在 __________ 地区长大，她对自然和较慢的生活节奏有了深深的欣赏。",
        answers: [
            { option: "A", answer: "suburban", chinese_answer: "郊区的", chinese_romanization: "jiāoqū de" },
            { option: "B", answer: "rural", chinese_answer: "乡村的", chinese_romanization: "xiāngcūn de" },
            { option: "C", answer: "cosmopolitan", chinese_answer: "世界性的", chinese_romanization: "shìjiè xìng de" },
            { option: "D", answer: "urban", chinese_answer: "城市的", chinese_romanization: "chéngshì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'rural' means in, relating to, or characteristic of the countryside rather than the town." +
            "<br><br>" +
            "(A) 'suburban' means of or characteristic of a suburb." +
            "<br><br>" +
            "(C) 'cosmopolitan' means familiar with and at ease in many different countries and cultures." +
            "<br><br>" +
            "(D) 'urban' means in, relating to, or characteristic of a city or town.",
        chinese_explanation: "(B) '乡村的' 意味着在乡村而不是城镇的。" +
            "<br><br>" +
            "(A) '郊区的' 意味着郊区的或具有郊区特征的。" +
            "<br><br>" +
            "(C) '世界性的' 意味着熟悉并适应许多不同国家和文化的。" +
            "<br><br>" +
            "(D) '城市的' 意味着在城镇的、与城镇有关的或具有城镇特征的。"
    },
    {
        id: 9,
    question: "A good leader is __________ to the feedback from their team and uses it to improve.",
    chinese_question: "一个好的领导者对团队的反馈非常 __________ 并利用它来改进。",
    answers: [
        { option: "A", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
        { option: "B", answer: "resistant", chinese_answer: "抵抗的", chinese_romanization: "dǐkàng de" },
        { option: "C", answer: "sensitive", chinese_answer: "敏感的", chinese_romanization: "mǐngǎn de" },
        { option: "D", answer: "dismissive", chinese_answer: "轻视的", chinese_romanization: "qīngshì de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'sensitive' means quick to detect or respond to slight changes, signals, or influences." +
        "<br><br>" +
        "(A) 'indifferent' means having no particular interest or sympathy; unconcerned." +
        "<br><br>" +
        "(B) 'resistant' means offering resistance to something or someone." +
        "<br><br>" +
        "(D) 'dismissive' means feeling or showing that something is unworthy of consideration.",
    chinese_explanation: "(C) '敏感的' 意味着对轻微的变化、信号或影响反应迅速。" +
        "<br><br>" +
        "(A) '冷漠的' 意味着没有特别的兴趣或同情心；不关心的。" +
        "<br><br>" +
        "(B) '抵抗的' 意味着对某事或某人提供抵抗。" +
        "<br><br>" +
        "(D) '轻视的' 意味着感觉或表现出某事不值得考虑。"
    },
    {
        id: 10,
    question: "The politician’s __________ remarks during the debate caused an uproar, highlighting his lack of experience and poor judgment.",
    chinese_question: "这位政客在辩论中的 __________ 言论引起了哗然，凸显了他缺乏经验和判断力差。",
    answers: [
        { option: "A", answer: "inept", chinese_answer: "无能的", chinese_romanization: "wúnéng de" },
        { option: "B", answer: "eloquent", chinese_answer: "雄辩的", chinese_romanization: "xióngbiàn de" },
        { option: "C", answer: "insightful", chinese_answer: "有见地的", chinese_romanization: "yǒu jiàndì de" },
        { option: "D", answer: "articulate", chinese_answer: "口齿清晰的", chinese_romanization: "kǒuchǐ qīngxī de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'inept' means having or showing no skill; clumsy." +
        "<br><br>" +
        "(B) 'eloquent' means fluent or persuasive in speaking or writing." +
        "<br><br>" +
        "(C) 'insightful' means having or showing an accurate and deep understanding; perceptive." +
        "<br><br>" +
        "(D) 'articulate' means having or showing the ability to speak fluently and coherently.",
    chinese_explanation: "(A) '无能的' 意味着没有技能的；笨拙的。" +
        "<br><br>" +
        "(B) '雄辩的' 意味着在说话或写作中流利或有说服力的。" +
        "<br><br>" +
        "(C) '有见地的' 意味着拥有或展示准确和深刻的理解的；有洞察力的。" +
        "<br><br>" +
        "(D) '口齿清晰的' 意味着拥有或展示流利和连贯的说话能力的。"
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
