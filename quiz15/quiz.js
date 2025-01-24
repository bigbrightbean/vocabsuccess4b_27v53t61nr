// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ retorts often left her friends laughing and impressed by her sharp mind.",
        chinese_question: "她的 __________ 回应常常让朋友们笑个不停，并对她敏锐的头脑印象深刻。",
        answers: [
            { option: "A", answer: "dull", chinese_answer: "单调的", chinese_romanization: "dāndiào de" },
            { option: "B", answer: "witty", chinese_answer: "机智的", chinese_romanization: "jīzhì de" },
            { option: "C", answer: "slow", chinese_answer: "缓慢的", chinese_romanization: "huǎnmàn de" },
            { option: "D", answer: "tedious", chinese_answer: "乏味的", chinese_romanization: "fáwèi de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'witty' means showing or characterized by quick and inventive verbal humor." +
            "<br><br>" +
            "(A) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(C) 'slow' means moving or operating at a slow speed." +
            "<br><br>" +
            "(D) 'tedious' means too long, slow, or dull; tiresome or monotonous.",
        chinese_explanation: "(B) '机智的' 意味着表现出或以快速和有创造力的幽默为特征的。" +
            "<br><br>" +
            "(A) '单调的' 意味着缺乏兴趣或兴奋的。" +
            "<br><br>" +
            "(C) '缓慢的' 意味着以缓慢速度移动或操作的。" +
            "<br><br>" +
            "(D) '乏味的' 意味着太长、太慢或单调；乏味或单调的。"
    },
    {
        id: 2,
        question: "The politician's __________ attitude during the interview made it difficult for the viewers to relate to him.",
        chinese_question: "政治家在采访中的 __________ 态度让观众很难与他产生共鸣。",
        answers: [
            { option: "A", answer: "humble", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
            { option: "B", answer: "smug", chinese_answer: "自鸣得意的", chinese_romanization: "zìmíngdéyì de" },
            { option: "C", answer: "modest", chinese_answer: "谦逊的", chinese_romanization: "qiānxùn de" },
            { option: "D", answer: "approachable", chinese_answer: "平易近人的", chinese_romanization: "píngyìjìnrén de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'smug' means having or showing an excessive pride in oneself." +
            "<br><br>" +
            "(A) 'humble' means having or showing a modest or low estimate of one's importance." +
            "<br><br>" +
            "(C) 'modest' means unassuming in the estimation of one's abilities." +
            "<br><br>" +
            "(D) 'approachable' means friendly and easy to talk to.",
        chinese_explanation: "(B) '自鸣得意的' 意味着对自己有过度的自豪。" +
            "<br><br>" +
            "(A) '谦虚的' 意味着对自己的重要性有谦虚或低估。" +
            "<br><br>" +
            "(C) '谦逊的' 意味着对自己的能力不自夸。" +
            "<br><br>" +
            "(D) '平易近人的' 意味着友好且容易交谈的。"
    },
    {
        id: 3,
        question: "Her __________ attitude helped her make friends from diverse backgrounds.",
        chinese_question: "她的 __________ 态度帮助她结交了来自不同背景的朋友。",
        answers: [
            { option: "A", answer: "narrow-minded", chinese_answer: "心胸狭窄的", chinese_romanization: "xīnxiōng xiázhǎi de" },
            { option: "B", answer: "rigid", chinese_answer: "固执的", chinese_romanization: "gùzhí de" },
            { option: "C", answer: "tolerant", chinese_answer: "宽容的", chinese_romanization: "kuānróng de" },
            { option: "D", answer: "intolerant", chinese_answer: "不宽容的", chinese_romanization: "bù kuānróng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'tolerant' means showing willingness to allow the existence of opinions or behavior that one does not necessarily agree with." +
            "<br><br>" +
            "(A) 'narrow-minded' means not willing to listen to or tolerate other people's views." +
            "<br><br>" +
            "(B) 'rigid' means unable to bend or be forced out of shape." +
            "<br><br>" +
            "(D) 'intolerant' means not tolerant of views, beliefs, or behavior that differ from one's own.",
        chinese_explanation: "(C) '宽容的' 意味着愿意允许存在与自己不一定同意的意见或行为。" +
            "<br><br>" +
            "(A) '心胸狭窄的' 意味着不愿意听取或容忍他人观点的。" +
            "<br><br>" +
            "(B) '固执的' 意味着不能弯曲或被迫改变的。" +
            "<br><br>" +
            "(D) '不宽容的' 意味着不宽容与自己不同的观点、信仰或行为的。"
    },
    {
        id: 4,
    question: "Her __________ manner of speaking, reminiscent of olden times, fascinated her listeners.",
    chinese_question: "她 __________ 的说话方式，让人想起古老的时代，使听众着迷。",
    answers: [
        { option: "A", answer: "contemporary", chinese_answer: "当代的", chinese_romanization: "dāngdài de" },
        { option: "B", answer: "quaint", chinese_answer: "古雅的", chinese_romanization: "gǔyǎ de" },
        { option: "C", answer: "dull", chinese_answer: "乏味的", chinese_romanization: "fáwèi de" },
        { option: "D", answer: "mundane", chinese_answer: "平凡的", chinese_romanization: "píngfán de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'quaint' means attractively unusual or old-fashioned." +
        "<br><br>" +
        "(A) 'contemporary' means living or occurring at the same time." +
        "<br><br>" +
        "(C) 'dull' means lacking interest or excitement." +
        "<br><br>" +
        "(D) 'mundane' means lacking interest or excitement; dull.",
    chinese_explanation: "(B) '古雅的' 意味着吸引人的不寻常或老式的。" +
        "<br><br>" +
        "(A) '当代的' 意味着在同一时间生活或发生的。" +
        "<br><br>" +
        "(C) '乏味的' 意味着缺乏兴趣或兴奋的。" +
        "<br><br>" +
        "(D) '平凡的' 意味着缺乏兴趣或兴奋的；沉闷的。"
    },
    {
        id: 5,
    question: "The dictator's __________ acts of cruelty shocked the entire world.",
    chinese_question: "独裁者 __________ 的残忍行为震惊了整个世界。",
    answers: [
        { option: "A", answer: "humane", chinese_answer: "人道的", chinese_romanization: "réndào de" },
        { option: "B", answer: "kind", chinese_answer: "友善的", chinese_romanization: "yǒushàn de" },
        { option: "C", answer: "monstrous", chinese_answer: "残暴的", chinese_romanization: "cánbào de" },
        { option: "D", answer: "gentle", chinese_answer: "温和的", chinese_romanization: "wēnhé de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'monstrous' means having the ugly or frightening appearance of a monster; shockingly brutal or cruel." +
        "<br><br>" +
        "(A) 'humane' means having or showing compassion or benevolence." +
        "<br><br>" +
        "(B) 'kind' means having or showing a friendly, generous, and considerate nature." +
        "<br><br>" +
        "(D) 'gentle' means having or showing a mild, kind, or tender temperament or character.",
    chinese_explanation: "(C) '残暴的' 意味着具有怪物的丑陋或可怕的外观；令人震惊的残忍或残暴。" +
        "<br><br>" +
        "(A) '人道的' 意味着有或表现出同情或仁慈。" +
        "<br><br>" +
        "(B) '友善的' 意味着有或表现出友好、慷慨和体贴的性格。" +
        "<br><br>" +
        "(D) '温和的' 意味着有或表现出温和、善良或温柔的性情或性格。"
    },
    {
        id: 6,
    question: "The charity event fostered a __________ spirit among the community members.",
    chinese_question: "慈善活动在社区成员中培养了 __________ 精神。",
    answers: [
        { option: "A", answer: "divisive", chinese_answer: "分裂的", chinese_romanization: "fēnliè de" },
        { option: "B", answer: "fraternal", chinese_answer: "兄弟般的", chinese_romanization: "xiōngdì bān de" },
        { option: "C", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
        { option: "D", answer: "isolating", chinese_answer: "隔离的", chinese_romanization: "gélí de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'fraternal' means relating to or involving brothers; brotherly." +
        "<br><br>" +
        "(A) 'divisive' means tending to cause disagreement or hostility between people." +
        "<br><br>" +
        "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
        "<br><br>" +
        "(D) 'isolating' means causing one to feel alone or apart from others.",
    chinese_explanation: "(B) '兄弟般的' 意味着与兄弟有关的；兄弟般的。" +
        "<br><br>" +
        "(A) '分裂的' 意味着倾向于引起人们之间的分歧或敌意。" +
        "<br><br>" +
        "(C) '冷漠的' 意味着没有特别的兴趣或同情；不关心。" +
        "<br><br>" +
        "(D) '隔离的' 意味着使人感到孤独或与他人隔离。"
    },
    {
        id: 7,
    question: "The artist’s __________ style was evident in her playful and imaginative paintings, which enchanted viewers of all ages.",
    chinese_question: "这位艺术家的 __________ 风格在她充满玩味和想象力的画作中显而易见，迷住了各个年龄段的观众。",
    answers: [
        { option: "A", answer: "serious", chinese_answer: "严肃的", chinese_romanization: "yánsù de" },
        { option: "B", answer: "mundane", chinese_answer: "平凡的", chinese_romanization: "píngfán de" },
        { option: "C", answer: "whimsical", chinese_answer: "异想天开的", chinese_romanization: "yìxiǎng tiānkāi de" },
        { option: "D", answer: "practical", chinese_answer: "实际的", chinese_romanization: "shíjì de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'whimsical' means playfully quaint or fanciful, especially in an appealing and amusing way." +
        "<br><br>" +
        "(A) 'serious' means solemn or thoughtful in character or manner." +
        "<br><br>" +
        "(B) 'mundane' means lacking interest or excitement; dull." +
        "<br><br>" +
        "(D) 'practical' means of or concerned with the actual doing or use of something rather than with theory and ideas.",
    chinese_explanation: "(C) '异想天开的' 意味着以一种吸引人和有趣的方式玩味的或异想天开的。" +
        "<br><br>" +
        "(A) '严肃的' 意味着性格或态度严肃的。" +
        "<br><br>" +
        "(B) '平凡的' 意味着缺乏兴趣或兴奋；乏味的。" +
        "<br><br>" +
        "(D) '实际的' 意味着关注实际操作或使用而不是理论和想法的。"
    },
    {
        id: 8,
        question: "His __________ actions during the crisis were condemned by everyone.",
        chinese_question: "他在危机中的__________行为受到了所有人的谴责。",
        answers: [
            { option: "A", answer: "admirable", chinese_answer: "令人钦佩的", chinese_romanization: "lìng rén qīnpèi de" },
            { option: "B", answer: "loathsome", chinese_answer: "令人憎恶的", chinese_romanization: "lìng rén zēngwù de" },
            { option: "C", answer: "commendable", chinese_answer: "值得称赞的", chinese_romanization: "zhíde chēngzàn de" },
            { option: "D", answer: "likable", chinese_answer: "讨人喜欢的", chinese_romanization: "tǎo rén xǐhuān de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'loathsome' means causing hatred or disgust; repulsive. Figuratively, it can mean being morally reprehensible." +
            "<br><br>" +
            "(A) 'admirable' means arousing or deserving respect and approval." +
            "<br><br>" +
            "(C) 'commendable' means deserving praise." +
            "<br><br>" +
            "(D) 'likable' means (especially of a person) pleasant, friendly, and easy to like.",
        chinese_explanation: "(B) '令人憎恶的'一词意味着引起憎恨或厌恶的；令人厌恶的。比喻地，它可以表示在道德上令人谴责的。" +
            "<br><br>" +
            "(A) '令人钦佩的' 意味着引起或值得尊重和认可的。" +
            "<br><br>" +
            "(C) '值得称赞的' 意味着值得称赞的。" +
            "<br><br>" +
            "(D) '讨人喜欢的' 意味着（尤指人）令人愉快、友好和容易喜欢的。"
    },
    {
        id: 9,
    question: "He joined a __________ club to meet new people and expand his network.",
    chinese_question: "他加入了一个 __________ 俱乐部，以结识新朋友并扩大自己的人脉。",
    answers: [
        { option: "A", answer: "solitary", chinese_answer: "孤独的", chinese_romanization: "gūdú de" },
        { option: "B", answer: "social", chinese_answer: "社交的", chinese_romanization: "shèjiāo de" },
        { option: "C", answer: "isolated", chinese_answer: "隔离的", chinese_romanization: "gélí de" },
        { option: "D", answer: "private", chinese_answer: "私人的", chinese_romanization: "sīrén de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'social' means seeking or enjoying the companionship of others; friendly; sociable." +
        "<br><br>" +
        "(A) 'solitary' means done or existing alone." +
        "<br><br>" +
        "(C) 'isolated' means far away from other places, buildings, or people; remote." +
        "<br><br>" +
        "(D) 'private' means belonging to or for the use of one particular person or group of people only.",
    chinese_explanation: "(B) '社交的' 意味着寻求或享受他人陪伴的；友好的；善于交际的。" +
        "<br><br>" +
        "(A) '孤独的' 意味着单独完成或存在的。" +
        "<br><br>" +
        "(C) '隔离的' 意味着远离其他地方、建筑物或人的；偏远的。" +
        "<br><br>" +
        "(D) '私人的' 意味着仅属于或供一个特定的人或人群使用的。"
    },
    {
        id: 10,
    question: "His __________ expression showed that he couldn't accept the reality of his sudden promotion, thinking it was a joke.",
    chinese_question: "他的 __________ 表情表明他无法接受突然升职的现实，认为这是一场玩笑。",
    answers: [
        { option: "A", answer: "incredulous", chinese_answer: "怀疑的", chinese_romanization: "huáiyí de" },
        { option: "B", answer: "joyful", chinese_answer: "高兴的", chinese_romanization: "gāoxìng de" },
        { option: "C", answer: "calm", chinese_answer: "冷静的", chinese_romanization: "lěngjìng de" },
        { option: "D", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'incredulous' means unwilling or unable to believe something." +
        "<br><br>" +
        "(B) 'joyful' means feeling, expressing, or causing great pleasure and happiness." +
        "<br><br>" +
        "(C) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
        "<br><br>" +
        "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
    chinese_explanation: "(A) '怀疑的' 意味着不愿意或无法相信某事。" +
        "<br><br>" +
        "(B) '高兴的' 意味着感到、表达或引起极大的快乐和幸福的。" +
        "<br><br>" +
        "(C) '冷静的' 意味着没有表现出或感到紧张、愤怒或其他强烈情绪的。" +
        "<br><br>" +
        "(D) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。"
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
