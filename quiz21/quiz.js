// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "Despite the team's efforts, the company faced __________ financial difficulties that hindered its growth.",
    chinese_question: "尽管团队付出了努力，公司仍然面临 __________ 的财务困难，阻碍了其发展。",
    answers: [
        { option: "A", answer: "momentary", chinese_answer: "短暂的", chinese_romanization: "duǎnzàn de" },
        { option: "B", answer: "transient", chinese_answer: "瞬间的", chinese_romanization: "shùnjiān de" },
        { option: "C", answer: "perennial", chinese_answer: "长期存在的", chinese_romanization: "chángqī cúnzài de" },
        { option: "D", answer: "brief", chinese_answer: "短时间的", chinese_romanization: "duǎn shíjiān de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'perennial' means lasting or existing for a long or apparently infinite time; enduring or continually recurring." +
        "<br><br>" +
        "(A) 'momentary' means lasting for a very short time; brief." +
        "<br><br>" +
        "(B) 'transient' means lasting only for a short time; impermanent." +
        "<br><br>" +
        "(D) 'brief' means of short duration.",
    chinese_explanation: "(C) '长期存在的' 意味着持续或存在很长时间或看似无限时间的；持久的或不断重复的。" +
        "<br><br>" +
        "(A) '短暂的' 意味着持续时间很短的。" +
        "<br><br>" +
        "(B) '瞬间的' 意味着持续时间非常短的；短暂的。" +
        "<br><br>" +
        "(D) '短时间的' 意味着持续时间短的。"
    },
    {
        id: 2,
    question: "Her __________ stand on the issue made her a controversial figure in the community.",
    chinese_question: "她在这个问题上的 __________ 立场使她成为社区中的一个有争议的人物。",
    answers: [
        { option: "A", answer: "joint", chinese_answer: "联合", chinese_romanization: "liánhé" },
        { option: "B", answer: "lone", chinese_answer: "独自", chinese_romanization: "dúzì" },
        { option: "C", answer: "communal", chinese_answer: "共有", chinese_romanization: "gòngyǒu" },
        { option: "D", answer: "collective", chinese_answer: "集体", chinese_romanization: "jítǐ" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'lone' means standing alone or being the only one." +
        "<br><br>" +
        "(A) 'joint' means shared, held, or made by two or more people together." +
        "<br><br>" +
        "(C) 'communal' means shared by all members of a community." +
        "<br><br>" +
        "(D) 'collective' means done by people acting as a group.",
    chinese_explanation: "(B) “独自” 意味着独立或唯一的一个。" +
        "<br><br>" +
        "(A) '联合' 意味着由两个人或更多人共同分享、持有或做出的。" +
        "<br><br>" +
        "(C) '共有' 意味着由社区的所有成员共享。" +
        "<br><br>" +
        "(D) '集体' 意味着由一群人一起做的。"
    },
    {
        id: 3,
    question: "The company is __________ to rapid changes in the market, often struggling to adapt to new trends and consumer demands.",
    chinese_question: "公司容易 __________ 市场的快速变化，常常难以适应新的趋势和消费者需求。",
    answers: [
        { option: "A", answer: "prone", chinese_answer: "容易", chinese_romanization: "róngyì" },
        { option: "B", answer: "adaptable", chinese_answer: "适应的", chinese_romanization: "shìyìng de" },
        { option: "C", answer: "flexible", chinese_answer: "灵活的", chinese_romanization: "línghuó de" },
        { option: "D", answer: "stable", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'prone' means likely to suffer from, do, or experience something, typically something regrettable or unwelcome." +
        "<br><br>" +
        "(B) 'adaptable' means able to adjust to new conditions." +
        "<br><br>" +
        "(C) 'flexible' means capable of bending easily without breaking; adaptable." +
        "<br><br>" +
        "(D) 'stable' means not likely to change or fail; firmly established.",
    chinese_explanation: "(A) '容易' 意味着可能遭受、做或经历某事，通常是令人遗憾或不愉快的事情。" +
        "<br><br>" +
        "(B) '适应的' 意味着能够适应新条件的。" +
        "<br><br>" +
        "(C) '灵活的' 意味着能够轻松弯曲而不折断的；适应的。" +
        "<br><br>" +
        "(D) '稳定的' 意味着不太可能改变或失败的；牢固建立的。"
    },
    {
        id: 4,
    question: "Her __________ manner of speaking, filled with grandiose statements and elaborate gestures, often overshadowed the actual content of her message.",
    chinese_question: "她 __________ 的说话方式，充满了夸张的言辞和精心的手势，常常掩盖了她信息的实际内容。",
    answers: [
        { option: "A", answer: "ostentatious", chinese_answer: "炫耀的", chinese_romanization: "xuànyào de" },
        { option: "B", answer: "understated", chinese_answer: "低调的", chinese_romanization: "dīdiào de" },
        { option: "C", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
        { option: "D", answer: "subtle", chinese_answer: "微妙的", chinese_romanization: "wéimiào de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'ostentatious' means characterized by vulgar or pretentious display; designed to impress or attract notice." +
        "<br><br>" +
        "(B) 'understated' means presented or expressed in a subtle and effective way." +
        "<br><br>" +
        "(C) 'simple' means easily understood or done; presenting no difficulty." +
        "<br><br>" +
        "(D) 'subtle' means so delicate or precise as to be difficult to analyze or describe.",
    chinese_explanation: "(A) '炫耀的' 意味着以庸俗或自命不凡的展示为特征；旨在给人留下深刻印象或引起注意。" +
        "<br><br>" +
        "(B) '低调的' 意味着以微妙和有效的方式呈现或表达的。" +
        "<br><br>" +
        "(C) '简单的' 意味着容易理解或完成的；没有困难的。" +
        "<br><br>" +
        "(D) '微妙的' 意味着如此精细或精确，以至于难以分析或描述的。"
    },
    {
        id: 5,
    question: "The idea of traveling to Mars once seemed __________, but now it is becoming a reality.",
    chinese_question: "曾几何时，前往火星的想法似乎 __________，但现在它正在成为现实。",
    answers: [
        { option: "A", answer: "feasible", chinese_answer: "可行", chinese_romanization: "kěxíng" },
        { option: "B", answer: "improbable", chinese_answer: "不太可能", chinese_romanization: "bù tài kěnéng" },
        { option: "C", answer: "realistic", chinese_answer: "现实", chinese_romanization: "xiànshí" },
        { option: "D", answer: "achievable", chinese_answer: "可实现", chinese_romanization: "kě shíxiàn" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'improbable' means not likely to be true or to happen." +
        "<br><br>" +
        "(A) 'feasible' means possible to do easily or conveniently." +
        "<br><br>" +
        "(C) 'realistic' means having or showing a sensible and practical idea of what can be achieved or expected." +
        "<br><br>" +
        "(D) 'achievable' means able to be brought about or reached successfully.",
    chinese_explanation: "(B) '不太可能' 意味着不太可能是真的或发生。" +
        "<br><br>" +
        "(A) '可行' 意味着容易或方便地做到的。" +
        "<br><br>" +
        "(C) '现实' 意味着对能实现或预期的事物有或表现出合理和实际的想法。" +
        "<br><br>" +
        "(D) '可实现' 意味着能够成功地实现或达到。"
    },
    {
        id: 6,
        question: "The modern sculpture looked __________ in the middle of the historic village square.",
        chinese_question: "这座现代雕塑在历史悠久的村庄广场中央显得 __________。",
        answers: [
                { option: "A", answer: "harmonious", chinese_answer: "和谐的", chinese_romanization: "héxié de" },
                { option: "B", answer: "incongruous", chinese_answer: "不协调的", chinese_romanization: "bù xiétiáo de" },
                { option: "C", answer: "fitting", chinese_answer: "适合的", chinese_romanization: "shìhé de" },
                { option: "D", answer: "appropriate", chinese_answer: "恰当的", chinese_romanization: "qiàdàng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'incongruous' means not in harmony or keeping with the surroundings or other aspects of something." +
            "<br><br>" +
            "(A) 'harmonious' means forming a pleasing or consistent whole." +
            "<br><br>" +
            "(C) 'fitting' means suitable or appropriate under the circumstances." +
            "<br><br>" +
            "(D) 'appropriate' means suitable or proper in the circumstances.",
        chinese_explanation: "(B) '不协调的' 一词意味着与环境或其他方面不和谐或不一致的。" +
            "<br><br>" +
            "(A) '和谐的' 意味着形成令人愉快或一致的整体的。" +
            "<br><br>" +
            "(C) '适合的' 意味着在这种情况下是适当的或合适的。" +
            "<br><br>" +
            "(D) '恰当的' 意味着在这种情况下是合适的或适当的。"
    },
    {
        id: 7,
    question: "Many people were __________ by the company's decision to lay off workers without proper notice.",
    chinese_question: "许多人对公司在没有适当通知的情况下裁员的决定感到 __________ 。",
    answers: [
        { option: "A", answer: "aggrieved", chinese_answer: "感到痛苦", chinese_romanization: "gǎndào tòngkǔ" },
        { option: "B", answer: "pleased", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
        { option: "C", answer: "indifferent", chinese_answer: "无动于衷", chinese_romanization: "wúdòngyúzhōng" },
        { option: "D", answer: "elated", chinese_answer: "兴高采烈", chinese_romanization: "xīnggāo-cǎiliè" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'aggrieved' means feeling resentment at having been unfairly treated." +
        "<br><br>" +
        "(B) 'pleased' means feeling or showing pleasure and satisfaction." +
        "<br><br>" +
        "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
        "<br><br>" +
        "(D) 'elated' means ecstatically happy.",
    chinese_explanation: "(A) '感到痛苦' 意味着感到被不公平对待的怨恨。" +
        "<br><br>" +
        "(B) '高兴' 意味着感到或表现出快乐和满足。" +
        "<br><br>" +
        "(C) '无动于衷' 意味着没有特别的兴趣或同情；不关心。" +
        "<br><br>" +
        "(D) '兴高采烈' 意味着欣喜若狂。"
    },
    {
        id: 8,
        question: "Her path to success was __________, full of unexpected turns and challenges that tested her resilience and determination.",
        chinese_question: "她的成功之路非常 __________，充满了意想不到的转折和挑战，考验了她的韧性和决心。",
        answers: [
            { option: "A", answer: "serpentine", chinese_answer: "曲折的", chinese_romanization: "qūzhé de" },
            { option: "B", answer: "straightforward", chinese_answer: "直截了当的", chinese_romanization: "zhíjié liǎodàng de" },
            { option: "C", answer: "predictable", chinese_answer: "可预测的", chinese_romanization: "kě yùcè de" },
            { option: "D", answer: "smooth", chinese_answer: "顺利的", chinese_romanization: "shùnlì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'serpentine' means complex, cunning, or intricate; having many bends and turns." +
            "<br><br>" +
            "(B) 'straightforward' means uncomplicated and easy to do or understand." +
            "<br><br>" +
            "(C) 'predictable' means able to be predicted; expected." +
            "<br><br>" +
            "(D) 'smooth' means having an even and regular surface or consistency; free from perceptible projections, lumps, or indentations.",
        chinese_explanation: "(A) '曲折的' 意味着复杂的、狡猾的或错综复杂的；有很多弯曲和转折的。" +
            "<br><br>" +
            "(B) '直截了当的' 意味着不复杂且易于做或理解的。" +
            "<br><br>" +
            "(C) '可预测的' 意味着能够预测的；预期的。" +
            "<br><br>" +
            "(D) '顺利的' 意味着表面或一致性平滑且均匀的；没有可察觉的突起、块状物或凹痕的。"
    },
    {
        id: 9,
    question: "Her __________ maneuvers in the boardroom ensured she always stayed one step ahead of her rivals.",
    chinese_question: "她在会议室里的 __________ 操作确保了她总是领先于她的对手一步。",
    answers: [
        { option: "A", answer: "clumsy", chinese_answer: "笨拙的", chinese_romanization: "bènzhuō de" },
        { option: "B", answer: "wily", chinese_answer: "狡猾的", chinese_romanization: "jiǎohuá de" },
        { option: "C", answer: "honest", chinese_answer: "诚实的", chinese_romanization: "chéngshí de" },
        { option: "D", answer: "forthright", chinese_answer: "直率的", chinese_romanization: "zhíshuài de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'wily' means skilled at gaining an advantage, especially deceitfully." +
        "<br><br>" +
        "(A) 'clumsy' means awkward in movement or in handling things." +
        "<br><br>" +
        "(C) 'honest' means free of deceit and untruthfulness; sincere." +
        "<br><br>" +
        "(D) 'forthright' means direct and outspoken; straightforward and honest.",
    chinese_explanation: "(B) '狡猾的' 意味着擅长获得优势，特别是通过欺骗手段。" +
        "<br><br>" +
        "(A) '笨拙的' 意味着动作或处理事情时笨拙的。" +
        "<br><br>" +
        "(C) '诚实的' 意味着没有欺骗和虚伪；真诚的。" +
        "<br><br>" +
        "(D) '直率的' 意味着直接和坦率；直截了当的。"
    },
    {
        id: 10,
    question: "The company's latest product launch was __________, failing to excite consumers and falling short of expectations.",
    chinese_question: "公司的最新产品发布会 __________，未能激发消费者的兴趣，未达到预期。",
    answers: [
        { option: "A", answer: "lusterless", chinese_answer: "毫无光彩的", chinese_romanization: "háo wú guāngcǎi de" },
        { option: "B", answer: "spectacular", chinese_answer: "壮观的", chinese_romanization: "zhuàngguān de" },
        { option: "C", answer: "captivating", chinese_answer: "迷人的", chinese_romanization: "mírén de" },
        { option: "D", answer: "impressive", chinese_answer: "令人印象深刻的", chinese_romanization: "lìng rén yìnxiàng shēnkè de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'lusterless' means lacking in brightness, shine, or vitality." +
        "<br><br>" +
        "(B) 'spectacular' means beautiful in a dramatic and eye-catching way." +
        "<br><br>" +
        "(C) 'captivating' means capable of attracting and holding interest; charming." +
        "<br><br>" +
        "(D) 'impressive' means evoking admiration through size, quality, or skill.",
    chinese_explanation: "(A) '毫无光彩的' 意味着缺乏亮度、光泽或活力的。" +
        "<br><br>" +
        "(B) '壮观的' 意味着以引人注目的方式美丽的。" +
        "<br><br>" +
        "(C) '迷人的' 意味着能够吸引和保持兴趣的；迷人的。" +
        "<br><br>" +
        "(D) '令人印象深刻的' 意味着通过尺寸、质量或技能引起钦佩的。"
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
