// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The actor's __________ performance won over the audience, leaving them enchanted by his charisma.",
        chinese_question: "这位演员 __________ 的表演赢得了观众的喜爱，让他们被他的魅力所吸引。",
        answers: [
            { option: "A", answer: "dull", chinese_answer: "沉闷的", chinese_romanization: "chénmèn de" },
            { option: "B", answer: "winsome", chinese_answer: "迷人的", chinese_romanization: "mírén de" },
            { option: "C", answer: "tedious", chinese_answer: "乏味的", chinese_romanization: "fáwèi de" },
            { option: "D", answer: "awkward", chinese_answer: "尴尬的", chinese_romanization: "gāngà de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'winsome' means attractive or appealing in appearance or character." +
            "<br><br>" +
            "(A) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(C) 'tedious' means too long, slow, or dull; tiresome or monotonous." +
            "<br><br>" +
            "(D) 'awkward' means causing or feeling embarrassment or inconvenience.",
        chinese_explanation: "(B) '迷人的' 意味着在外表或性格上有吸引力或有魅力的。" +
            "<br><br>" +
            "(A) '沉闷的' 意味着缺乏兴趣或兴奋。" +
            "<br><br>" +
            "(C) '乏味的' 意味着太长、太慢或沉闷；令人厌倦或单调的。" +
            "<br><br>" +
            "(D) '尴尬的' 意味着引起或感到尴尬或不便。"
    },
    {
        id: 2,
        question: "The __________ tool can be used for a variety of tasks, making it an essential item in any toolbox.",
        chinese_question: "这款 __________ 的工具可以用于多种任务，使其成为任何工具箱中的必备品。",
        answers: [
            { option: "A", answer: "specialized", chinese_answer: "专业的", chinese_romanization: "zhuānyè de" },
            { option: "B", answer: "useless", chinese_answer: "无用的", chinese_romanization: "wúyòng de" },
            { option: "C", answer: "versatile", chinese_answer: "多功能的", chinese_romanization: "duō gōngnéng de" },
            { option: "D", answer: "single-purpose", chinese_answer: "单一用途的", chinese_romanization: "dānyī yòngtú de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'versatile' means able to adapt or be adapted to many different functions or activities." +
            "<br><br>" +
            "(A) 'specialized' means requiring or involving detailed and specific knowledge or training." +
            "<br><br>" +
            "(B) 'useless' means not fulfilling or not expected to achieve the intended purpose or desired outcome." +
            "<br><br>" +
            "(D) 'single-purpose' means designed or used for only one particular purpose.",
        chinese_explanation: "(C) '多功能的' 意味着能够适应或被适应于许多不同的功能或活动。" +
            "<br><br>" +
            "(A) '专业的' 意味着需要或涉及详细和具体的知识或培训。" +
            "<br><br>" +
            "(B) '无用的' 意味着没有实现预期目的或预期结果的。" +
            "<br><br>" +
            "(D) '单一用途的' 意味着仅设计或用于一个特定的目的。"
    },
    {
        id: 3,
        question: "The meaning of the ancient text was __________, making it difficult for scholars to interpret.",
        chinese_question: "古代文本的含义是 __________ 的，使得学者难以解释。",
        answers: [
                { option: "A", answer: "clear", chinese_answer: "清楚的", chinese_romanization: "qīngchǔ de" },
                { option: "B", answer: "obvious", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" },
                { option: "C", answer: "obscure", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
                { option: "D", answer: "evident", chinese_answer: "明白的", chinese_romanization: "míngbái de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'obscure' means not discovered or known about; uncertain." +
            "<br><br>" +
            "(A) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(B) 'obvious' means easily perceived or understood; clear, self-evident, or apparent." +
            "<br><br>" +
            "(D) 'evident' means plain or obvious; clearly seen or understood.",
        chinese_explanation: "(C) '模糊的' 一词意味着未被发现或未被知道的；不确定的。" +
            "<br><br>" +
            "(A) '清楚的' 意味着容易感知、理解或解释的。" +
            "<br><br>" +
            "(B) '明显的' 意味着容易感知或理解的；清晰，自明或明显的。" +
            "<br><br>" +
            "(D) '明白的' 意味着明了或明显的；清楚看到或理解的。"
    },
    {
        id: 4,
    question: "Her dreams of becoming a world-famous singer were __________, filled with visions of grandeur but lacking a concrete plan.",
    chinese_question: "她成为世界著名歌手的梦想是 __________ 的，充满了宏伟的愿景但缺乏具体的计划。",
    answers: [
        { option: "A", answer: "fanciful", chinese_answer: "幻想的", chinese_romanization: "huànxiǎng de" },
        { option: "B", answer: "pragmatic", chinese_answer: "务实的", chinese_romanization: "wùshí de" },
        { option: "C", answer: "grounded", chinese_answer: "脚踏实地的", chinese_romanization: "jiǎo tà shídì de" },
        { option: "D", answer: "reasonable", chinese_answer: "合理的", chinese_romanization: "hélǐ de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'fanciful' means over-imaginative and unrealistic." +
        "<br><br>" +
        "(B) 'pragmatic' means dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations." +
        "<br><br>" +
        "(C) 'grounded' means well balanced and sensible." +
        "<br><br>" +
        "(D) 'reasonable' means having sound judgment; fair and sensible.",
    chinese_explanation: "(A) '幻想的' 意味着过度想象和不现实的。" +
        "<br><br>" +
        "(B) '务实的' 意味着以实际而不是理论上的考虑处理事情。" +
        "<br><br>" +
        "(C) '脚踏实地的' 意味着平衡且明智的。" +
        "<br><br>" +
        "(D) '合理的' 意味着有合理判断力的；公平和明智的。"
    },
    {
        id: 5,
    question: "The __________ behavior of the puppy, always hiding behind its owner, was a clear sign of its shyness.",
    chinese_question: "这只小狗的 __________ 行为，总是躲在主人身后，是其害羞的明显标志。",
    answers: [
        { option: "A", answer: "confident", chinese_answer: "自信的", chinese_romanization: "zìxìn de" },
        { option: "B", answer: "assertive", chinese_answer: "坚定自信的", chinese_romanization: "jiāndìng zìxìn de" },
        { option: "C", answer: "timorous", chinese_answer: "胆怯的", chinese_romanization: "dǎnqiè de" },
        { option: "D", answer: "bold", chinese_answer: "大胆的", chinese_romanization: "dàdǎn de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'timorous' means showing or suffering from nervousness, fear, or a lack of confidence." +
        "<br><br>" +
        "(A) 'confident' means feeling or showing confidence in oneself; self-assured." +
        "<br><br>" +
        "(B) 'assertive' means having or showing a confident and forceful personality." +
        "<br><br>" +
        "(D) 'bold' means showing a willingness to take risks; confident and courageous.",
    chinese_explanation: "(C) '胆怯的' 意味着表现出或因紧张、恐惧或缺乏信心而受苦。" +
        "<br><br>" +
        "(A) '自信的' 意味着对自己有信心的；自信的。" +
        "<br><br>" +
        "(B) '坚定自信的' 意味着具有或表现出自信和强有力的个性。" +
        "<br><br>" +
        "(D) '大胆的' 意味着愿意冒险的；自信和勇敢的。"
    },
    {
        id: 6,
        question: "The mayor's __________ policies focused on reducing inequality and promoting community engagement.",
        chinese_question: "市长的 __________ 政策侧重于减少不平等并促进社区参与。",
        answers: [
            { option: "A", answer: "social", chinese_answer: "社会的", chinese_romanization: "shèhuì de" },
            { option: "B", answer: "environmental", chinese_answer: "环境的", chinese_romanization: "huánjìng de" },
            { option: "C", answer: "financial", chinese_answer: "财政的", chinese_romanization: "cáizhèng de" },
            { option: "D", answer: "cultural", chinese_answer: "文化的", chinese_romanization: "wénhuà de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'social' means relating to society or its organization." +
            "<br><br>" +
            "(B) 'environmental' means relating to the natural world and the impact of human activity on its condition." +
            "<br><br>" +
            "(C) 'financial' means relating to finance." +
            "<br><br>" +
            "(D) 'cultural' means relating to the ideas, customs, and social behavior of a society.",
        chinese_explanation: "(A) '社会的' 意味着与社会或其组织有关的。" +
            "<br><br>" +
            "(B) '环境的' 意味着与自然界和人类活动对其状况的影响有关的。" +
            "<br><br>" +
            "(C) '财政的' 意味着与金融有关的。" +
            "<br><br>" +
            "(D) '文化的' 意味着与社会的思想、习俗和社会行为有关的。"
    },
    {
        id: 7,
        question: "The __________ weather matched her mood perfectly as she walked alone under the gray sky.",
        chinese_question: " __________ 的天气完美地匹配了她的心情，她独自走在灰色的天空下。",
        answers: [
            { option: "A", answer: "bright", chinese_answer: "明亮的", chinese_romanization: "míngliàng de" },
            { option: "B", answer: "sunny", chinese_answer: "晴朗的", chinese_romanization: "qínglǎng de" },
            { option: "C", answer: "morose", chinese_answer: "忧郁的", chinese_romanization: "yōuyù de" },
            { option: "D", answer: "clear", chinese_answer: "晴朗的", chinese_romanization: "qínglǎng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'morose' means sullen and ill-tempered." +
            "<br><br>" +
            "(A) 'bright' means giving out or reflecting a lot of light; shining." +
            "<br><br>" +
            "(B) 'sunny' means bright with sunlight." +
            "<br><br>" +
            "(D) 'clear' means free of any cloud, mist, or haze.",
        chinese_explanation: "(C) '忧郁的' 意味着闷闷不乐的和脾气暴躁的。" +
            "<br><br>" +
            "(A) '明亮的' 意味着发出或反射大量光线的；闪亮的。" +
            "<br><br>" +
            "(B) '晴朗的' 意味着阳光明媚的。" +
            "<br><br>" +
            "(D) '晴朗的' 意味着没有任何云、雾或霾的。"
    },
    {
        id: 8,
    question: "The chef's new recipe was an __________ hit, with customers raving about it.",
    chinese_question: "这位厨师的新食谱 __________ 大受欢迎，顾客们对此赞不绝口。",
    answers: [
        { option: "A", answer: "instant", chinese_answer: "即时", chinese_romanization: "jíshí" },
        { option: "B", answer: "delayed", chinese_answer: "延迟", chinese_romanization: "yánchí" },
        { option: "C", answer: "unsure", chinese_answer: "不确定", chinese_romanization: "bù quèdìng" },
        { option: "D", answer: "hesitant", chinese_answer: "犹豫", chinese_romanization: "yóuyù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'instant' means happening or coming immediately." +
        "<br><br>" +
        "(B) 'delayed' means postponed or slowed down." +
        "<br><br>" +
        "(C) 'unsure' means not feeling, showing, or done with confidence and certainty." +
        "<br><br>" +
        "(D) 'hesitant' means unsure or slow in acting or speaking.",
    chinese_explanation: "(A) '即时' 意味着立即发生或来到。" +
        "<br><br>" +
        "(B) '延迟' 意味着推迟或减慢。" +
        "<br><br>" +
        "(C) '不确定' 意味着不自信和不确定。" +
        "<br><br>" +
        "(D) '犹豫' 意味着行动或说话不确定或缓慢。"
    },
    {
        id: 9,
        question: "The report was filled with __________ information, leading to a series of misunderstandings and mistakes.",
        chinese_question: "报告中充满了 __________ 的信息，导致了一系列的误解和错误。",
        answers: [
                { option: "A", answer: "accurate", chinese_answer: "准确的", chinese_romanization: "zhǔnquè de" },
                { option: "B", answer: "erroneous", chinese_answer: "错误的", chinese_romanization: "cuòwù de" },
                { option: "C", answer: "correct", chinese_answer: "正确的", chinese_romanization: "zhèngquè de" },
                { option: "D", answer: "precise", chinese_answer: "精确的", chinese_romanization: "jīngquè de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'erroneous' means wrong; incorrect." +
            "<br><br>" +
            "(A) 'accurate' means correct in all details; exact." +
            "<br><br>" +
            "(C) 'correct' means free from error; in accordance with fact or truth." +
            "<br><br>" +
            "(D) 'precise' means marked by exactness and accuracy of expression or detail.",
        chinese_explanation: "(B) '错误的' 一词意味着错误的；不正确的。" +
            "<br><br>" +
            "(A) '准确的' 意味着在所有细节上正确的；精确的。" +
            "<br><br>" +
            "(C) '正确的' 意味着没有错误的；符合事实或真相的。" +
            "<br><br>" +
            "(D) '精确的' 意味着表达或细节的准确性和精确性。"
    },
    {
        id: 10,
        question: "Despite their differences, the meeting ended on a __________ note, with harsh words and lingering resentment.",
        chinese_question: "尽管有分歧，会议以 __________ 的音调结束，充满了恶言和挥之不去的怨恨。",
        answers: [
                { option: "A", answer: "amicable", chinese_answer: "友好的", chinese_romanization: "yǒuhǎo de" },
                { option: "B", answer: "pleasant", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
                { option: "C", answer: "rancorous", chinese_answer: "怨恨的", chinese_romanization: "yuànhèn de" },
                { option: "D", answer: "harmonious", chinese_answer: "和谐的", chinese_romanization: "héxié de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'rancorous' means characterized by bitterness or resentment." +
            "<br><br>" +
            "(A) 'amicable' means having a spirit of friendliness; without serious disagreement or rancor." +
            "<br><br>" +
            "(B) 'pleasant' means giving a sense of happy satisfaction or enjoyment." +
            "<br><br>" +
            "(D) 'harmonious' means forming a pleasing or consistent whole.",
        chinese_explanation: "(C) '怨恨的' 一词意味着由苦涩或怨恨所特征的。" +
            "<br><br>" +
            "(A) '友好的' 意味着具有友好精神的；没有严重分歧或怨恨的。" +
            "<br><br>" +
            "(B) '愉快的' 意味着给人一种幸福满意或享受的感觉。" +
            "<br><br>" +
            "(D) '和谐的' 意味着形成一个令人愉悦或一致的整体。"
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
