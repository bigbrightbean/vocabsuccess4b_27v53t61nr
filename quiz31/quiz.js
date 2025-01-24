// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "In the face of chaos, her __________ mindset allowed her to make clear-headed decisions that helped guide the team to safety.",
    chinese_question: "在混乱面前，她的 __________ 思维方式使她能够做出冷静的决定，帮助团队走向安全。",
    answers: [
        { option: "A", answer: "rational", chinese_answer: "理性的", chinese_romanization: "lǐxìng de" },
        { option: "B", answer: "panicked", chinese_answer: "惊慌的", chinese_romanization: "jīnghuāng de" },
        { option: "C", answer: "confused", chinese_answer: "困惑的", chinese_romanization: "kùnhuò de" },
        { option: "D", answer: "reckless", chinese_answer: "鲁莽的", chinese_romanization: "lǔmǎng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'rational' means based on or in accordance with reason or logic." +
        "<br><br>" +
        "(B) 'panicked' means feeling or characterized by uncontrollable fear or anxiety." +
        "<br><br>" +
        "(C) 'confused' means unable to think clearly; bewildered." +
        "<br><br>" +
        "(D) 'reckless' means without thinking or caring about the consequences of an action.",
    chinese_explanation: "(A) '理性的' 意味着基于或符合理性或逻辑的。" +
        "<br><br>" +
        "(B) '惊慌的' 意味着感到或表现出不可控制的恐惧或焦虑的。" +
        "<br><br>" +
        "(C) '困惑的' 意味着不能清晰思考的；困惑的。" +
        "<br><br>" +
        "(D) '鲁莽的' 意味着不考虑行为后果的。"
    },
    {
        id: 2,
        question: "His attendance at the meetings was __________, making it hard for the team to rely on his input for important decisions.",
        chinese_question: "他参加会议的次数 __________，使得团队很难依赖他的意见来做出重要决定。",
        answers: [
            { option: "A", answer: "sporadic", chinese_answer: "零星的", chinese_romanization: "língxīng de" },
            { option: "B", answer: "consistent", chinese_answer: "一贯的", chinese_romanization: "yīguàn de" },
            { option: "C", answer: "dependable", chinese_answer: "可靠的", chinese_romanization: "kěkào de" },
            { option: "D", answer: "unwavering", chinese_answer: "坚定的", chinese_romanization: "jiāndìng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'sporadic' means occurring at irregular intervals or only in a few places; scattered or isolated." +
            "<br><br>" +
            "(B) 'consistent' means acting or done in the same way over time, especially so as to be fair or accurate." +
            "<br><br>" +
            "(C) 'dependable' means trustworthy and reliable." +
            "<br><br>" +
            "(D) 'unwavering' means steady or resolute; not wavering.",
        chinese_explanation: "(A) '零星的' 意味着在不规则的间隔或仅在几个地方发生的；分散或孤立的。" +
            "<br><br>" +
            "(B) '一贯的' 意味着在一段时间内以同样的方式行事或完成的，尤其是为了公平或准确。" +
            "<br><br>" +
            "(C) '可靠的' 意味着值得信赖的和可靠的。" +
            "<br><br>" +
            "(D) '坚定的' 意味着稳定或坚定的；不动摇的。"
    },
    {
        id: 3,
        question: "His confidence was __________ after the harsh criticism, leaving him uncertain about his abilities.",
        chinese_question: "在遭受严厉批评后，他的信心变得 __________，对自己的能力产生了怀疑。",
        answers: [
            { option: "A", answer: "strong", chinese_answer: "强壮的", chinese_romanization: "qiángzhuàng de" },
            { option: "B", answer: "unwavering", chinese_answer: "坚定的", chinese_romanization: "jiāndìng de" },
            { option: "C", answer: "wobbly", chinese_answer: "摇晃的", chinese_romanization: "yáohuàng de" },
            { option: "D", answer: "firm", chinese_answer: "牢固的", chinese_romanization: "láogù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'wobbly' means tending to move unsteadily from side to side." +
            "<br><br>" +
            "(A) 'strong' means having the power to move heavy weights or perform other physically demanding tasks." +
            "<br><br>" +
            "(B) 'unwavering' means steady or resolute; not wavering." +
            "<br><br>" +
            "(D) 'firm' means having a solid, almost unyielding surface or structure.",
        chinese_explanation: "(C) '摇晃的' 意味着倾向于从一侧到另一侧不稳地移动。" +
            "<br><br>" +
            "(A) '强壮的' 意味着有力量搬动重物或进行其他体力要求高的任务的。" +
            "<br><br>" +
            "(B) '坚定的' 意味着稳固或坚定；不动摇的。" +
            "<br><br>" +
            "(D) '牢固的' 意味着具有坚固、几乎不屈不挠的表面或结构的。"
    },
    {
        id: 4,
    question: "Her eyes grew __________ with tears as she remembered the joyful moments from her childhood.",
    chinese_question: "当她想起童年快乐的时光时，她的眼睛变得 __________，充满了泪水。",
    answers: [
        { option: "A", answer: "misty", chinese_answer: "朦胧的", chinese_romanization: "ménglóng de" },
        { option: "B", answer: "dry", chinese_answer: "干燥的", chinese_romanization: "gānzào de" },
        { option: "C", answer: "clear", chinese_answer: "清澈的", chinese_romanization: "qīngchè de" },
        { option: "D", answer: "sharp", chinese_answer: "锐利的", chinese_romanization: "ruìlì de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'misty' means full of or accompanied by mist; in this context, it means blurred or filled with tears." +
        "<br><br>" +
        "(B) 'dry' means free from moisture or liquid; not wet or moist." +
        "<br><br>" +
        "(C) 'clear' means free of cloud, mist, or dust; unclouded." +
        "<br><br>" +
        "(D) 'sharp' means having an edge or point that is able to cut or pierce something.",
    chinese_explanation: "(A) '朦胧的' 意味着充满或伴有薄雾的；在这个上下文中，意味着因泪水而模糊的。" +
        "<br><br>" +
        "(B) '干燥的' 意味着没有水分或液体的；不湿的或不潮湿的。" +
        "<br><br>" +
        "(C) '清澈的' 意味着没有云、雾或灰尘的；清澈的。" +
        "<br><br>" +
        "(D) '锐利的' 意味着有能够切割或刺穿东西的边缘或尖端的。"
    },
    {
        id: 5,
    question: "Her decision to quit her job without having another one lined up seemed __________ to her friends.",
    chinese_question: "她在没有找到另一份工作的情况下辞职的决定在她的朋友们看来是__________的。",
    answers: [
        { option: "A", answer: "rational", chinese_answer: "合理的", chinese_romanization: "hélǐ de" },
        { option: "B", answer: "logical", chinese_answer: "符合逻辑的", chinese_romanization: "fúhé luójí de" },
        { option: "C", answer: "reasonable", chinese_answer: "明智的", chinese_romanization: "míngzhì de" },
        { option: "D", answer: "irrational", chinese_answer: "不合理的", chinese_romanization: "bù hélǐ de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'irrational' means not logical or reasonable. Figuratively, it can mean being impulsive or lacking good judgment." +
        "<br><br>" +
        "(A) 'rational' means based on or in accordance with reason or logic." +
        "<br><br>" +
        "(B) 'logical' means of or according to the rules of logic or formal argument." +
        "<br><br>" +
        "(C) 'reasonable' means having sound judgment; fair and sensible.",
    chinese_explanation: "(D) '不合理的' 一词意味着不符合逻辑或不合理的。比喻地，它可以表示冲动或缺乏良好的判断力。" +
        "<br><br>" +
        "(A) '合理的' 意味着基于或符合理性或逻辑的。" +
        "<br><br>" +
        "(B) '符合逻辑的' 意味着符合逻辑规则或正式论证的。" +
        "<br><br>" +
        "(C) '明智的' 意味着具有良好的判断力；公平和明智的。"
    },
    {
        id: 6,
    question: "The scientist's __________ efforts in researching the cure for the disease eventually led to a groundbreaking discovery.",
    chinese_question: "科学家在研究这种疾病的治疗方法时 __________ 的努力最终导致了一个突破性的发现。",
    answers: [
        { option: "A", answer: "persistent", chinese_answer: "坚持不懈的", chinese_romanization: "jiānchí bùxiè de" },
        { option: "B", answer: "intermittent", chinese_answer: "间歇的", chinese_romanization: "jiànxiē de" },
        { option: "C", answer: "half-hearted", chinese_answer: "半心半意的", chinese_romanization: "bànxīn bànyì de" },
        { option: "D", answer: "temporary", chinese_answer: "暂时的", chinese_romanization: "zànshí de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'persistent' means continuing firmly or obstinately in a course of action in spite of difficulty or opposition." +
        "<br><br>" +
        "(B) 'intermittent' means occurring at irregular intervals; not continuous or steady." +
        "<br><br>" +
        "(C) 'half-hearted' means without enthusiasm or energy." +
        "<br><br>" +
        "(D) 'temporary' means lasting for only a limited period of time; not permanent.",
    chinese_explanation: "(A) '坚持不懈的' 意味着在困难或反对面前坚定不移地继续行动的。" +
        "<br><br>" +
        "(B) '间歇的' 意味着在不规则间隔发生的；不连续或不稳定的。" +
        "<br><br>" +
        "(C) '半心半意的' 意味着没有热情或精力的。" +
        "<br><br>" +
        "(D) '暂时的' 意味着只持续有限时间的；非永久的。"
    },
    {
        id: 7,
    question: "He gave a __________ speech, attributing his success to his team's hard work.",
    chinese_question: "他发表了一篇 __________ 的演讲，将他的成功归功于团队的辛勤工作。",
    answers: [
        { option: "A", answer: "self-centered", chinese_answer: "以自我为中心", chinese_romanization: "yǐ zìwǒ wéi zhōngxīn" },
        { option: "B", answer: "humble", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
        { option: "C", answer: "pretentious", chinese_answer: "自命不凡的", chinese_romanization: "zìmìng bùfán de" },
        { option: "D", answer: "conceited", chinese_answer: "自负的", chinese_romanization: "zìfù de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'humble' means having or showing a modest or low estimate of one's own importance." +
        "<br><br>" +
        "(A) 'self-centered' means preoccupied with oneself and one's affairs." +
        "<br><br>" +
        "(C) 'pretentious' means attempting to impress by affecting greater importance, talent, culture, etc., than is actually possessed." +
        "<br><br>" +
        "(D) 'conceited' means excessively proud of oneself; vain.",
    chinese_explanation: "(B) '谦虚的' 意味着对自己的重要性有或表现出谦虚或低估。" +
        "<br><br>" +
        "(A) '以自我为中心' 意味着专注于自己和自己的事务。" +
        "<br><br>" +
        "(C) '自命不凡的' 意味着试图通过表现出比实际拥有的更大重要性、才能、文化等来给人留下深刻印象。" +
        "<br><br>" +
        "(D) '自负的' 意味着对自己过分自豪；虚荣的。"
    },
    {
        id: 8,
    question: "Her __________ nature led her to travel extensively and embrace different cultures with an open heart and mind.",
    chinese_question: "她的 __________ 性格使她广泛旅行，并以开放的心态和思维接受不同的文化。",
    answers: [
        { option: "A", answer: "xenophobic", chinese_answer: "排外的", chinese_romanization: "pái wài de" },
        { option: "B", answer: "insular", chinese_answer: "狭隘的", chinese_romanization: "xiá'ài de" },
        { option: "C", answer: "xenophile", chinese_answer: "喜爱外国的", chinese_romanization: "xǐ'ài wàiguó de" },
        { option: "D", answer: "parochial", chinese_answer: "地方性的", chinese_romanization: "dìfāng xìng de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'xenophile' means an individual who is attracted to foreign peoples, cultures, or customs." +
        "<br><br>" +
        "(A) 'xenophobic' means having or showing a dislike of or prejudice against people from other countries." +
        "<br><br>" +
        "(B) 'insular' means ignorant of or uninterested in cultures, ideas, or peoples outside one's own experience." +
        "<br><br>" +
        "(D) 'parochial' means having a limited or narrow outlook or scope.",
    chinese_explanation: "(C) '喜爱外国的' 意味着被外国人、文化或习俗吸引的个人。" +
        "<br><br>" +
        "(A) '排外的' 意味着对外国人表现出厌恶或偏见。" +
        "<br><br>" +
        "(B) '狭隘的' 意味着对自己经验之外的文化、想法或人们无知或不感兴趣的。" +
        "<br><br>" +
        "(D) '地方性的' 意味着视野或范围有限或狭窄的。"
    },
    {
        id: 9,
    question: "Their friendship was a __________ harbour in the stormy sea of life.",
    chinese_question: "他们的友谊是生活风暴中的一个 __________ 的港湾。",
    answers: [
        { option: "A", answer: "dangerous", chinese_answer: "危险的", chinese_romanization: "wēixiǎn de" },
        { option: "B", answer: "distant", chinese_answer: "遥远的", chinese_romanization: "yáoyuǎn de" },
        { option: "C", answer: "safe", chinese_answer: "安全的", chinese_romanization: "ānquán de" },
        { option: "D", answer: "temporary", chinese_answer: "临时的", chinese_romanization: "línshí de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'safe' means providing protection and comfort." +
        "<br><br>" +
        "(A) 'dangerous' means able or likely to cause harm or injury." +
        "<br><br>" +
        "(B) 'distant' means far away in space or time." +
        "<br><br>" +
        "(D) 'temporary' means lasting for only a limited period of time.",
    chinese_explanation: "(C) '安全的' 意味着提供保护和安慰的。" +
        "<br><br>" +
        "(A) '危险的' 意味着可能会导致伤害或损害的。" +
        "<br><br>" +
        "(B) '遥远的' 意味着在空间或时间上很远的。" +
        "<br><br>" +
        "(D) '临时的' 意味着只持续有限时间的。"
    },
    {
        id: 10,
        question: "His speech was __________, lacking a clear point and often going off on tangents.",
        chinese_question: "他的演讲 __________，缺乏明确的重点，经常跑题。",
        answers: [
            { option: "A", answer: "focused", chinese_answer: "集中的", chinese_romanization: "jízhōng de" },
            { option: "B", answer: "concise", chinese_answer: "简洁的", chinese_romanization: "jiǎnjié de" },
            { option: "C", answer: "meandering", chinese_answer: "蜿蜒的", chinese_romanization: "wānyán de" },
            { option: "D", answer: "succinct", chinese_answer: "简明的", chinese_romanization: "jiǎnmíng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'meandering' means proceeding in a convoluted or undirected fashion." +
            "<br><br>" +
            "(A) 'focused' means directed toward a particular point or purpose." +
            "<br><br>" +
            "(B) 'concise' means giving a lot of information clearly and in a few words; brief but comprehensive." +
            "<br><br>" +
            "(D) 'succinct' means briefly and clearly expressed.",
        chinese_explanation: "(C) '蜿蜒的' 意味着以复杂或无方向的方式进行。" +
            "<br><br>" +
            "(A) '集中的' 意味着朝向特定的点或目的。" +
            "<br><br>" +
            "(B) '简洁的' 意味着以简洁但全面的方式清楚地传达大量信息。" +
            "<br><br>" +
            "(D) '简明的' 意味着简短而清晰地表达。"
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
