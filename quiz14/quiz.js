// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The financial loss from the failed investment was __________, forcing the company to declare bankruptcy.",
    chinese_question: "失败投资导致的财务损失是 __________ 的，迫使公司宣布破产。",
    answers: [
        { option: "A", answer: "recoverable", chinese_answer: "可恢复的", chinese_romanization: "kě huīfù de" },
        { option: "B", answer: "irreparable", chinese_answer: "无法修复的", chinese_romanization: "wúfǎ xiūfù de" },
        { option: "C", answer: "temporary", chinese_answer: "临时的", chinese_romanization: "línshí de" },
        { option: "D", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'irreparable' means (of an injury or loss) impossible to rectify or repair." +
        "<br><br>" +
        "(A) 'recoverable' means able to be recovered or regained." +
        "<br><br>" +
        "(C) 'temporary' means lasting for only a limited period of time; not permanent." +
        "<br><br>" +
        "(D) 'minor' means lesser in importance, seriousness, or significance.",
    chinese_explanation: "(B) '无法修复的' 意味着（受伤或损失）无法修复或弥补的。" +
        "<br><br>" +
        "(A) '可恢复的' 意味着能够恢复或重新获得的。" +
        "<br><br>" +
        "(C) '临时的' 意味着仅持续有限的一段时间；不是永久的。" +
        "<br><br>" +
        "(D) '次要的' 意味着在重要性、严重性或意义上较小的。"
    },
    {
        id: 2,
        question: "Her __________ attitude after the argument showed that she genuinely regretted the hurtful things she had said.",
        chinese_question: "争吵后的她表现出 __________ 的态度，表明她真的后悔自己说过的伤人的话。",
        answers: [
            { option: "A", answer: "remorseful", chinese_answer: "懊悔的", chinese_romanization: "àohuǐ de" },
            { option: "B", answer: "dismissive", chinese_answer: "轻视的", chinese_romanization: "qīngshì de" },
            { option: "C", answer: "unrepentant", chinese_answer: "不悔改的", chinese_romanization: "bù huǐgǎi de" },
            { option: "D", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'remorseful' means filled with regret or guilt." +
            "<br><br>" +
            "(B) 'dismissive' means feeling or showing that something is unworthy of consideration." +
            "<br><br>" +
            "(C) 'unrepentant' means showing no regret for one's wrongdoings." +
            "<br><br>" +
            "(D) 'careless' means not giving sufficient attention or thought to avoiding harm or errors.",
        chinese_explanation: "(A) '懊悔的' 意味着充满悔恨或内疚的。" +
            "<br><br>" +
            "(B) '轻视的' 意味着感到或表明某事不值得考虑的。" +
            "<br><br>" +
            "(C) '不悔改的' 意味着对自己的过错没有表现出任何悔意的。" +
            "<br><br>" +
            "(D) '粗心的' 意味着没有给予足够的注意或思考以避免伤害或错误的。"
    },
    {
        id: 3,
        question: "His name has become __________ with innovation and cutting-edge technology in the industry.",
        chinese_question: "他的名字已经成为该行业创新和尖端技术的 __________ 。",
        answers: [
            { option: "A", answer: "disconnected", chinese_answer: "断开的", chinese_romanization: "duànkāi de" },
            { option: "B", answer: "synonymous", chinese_answer: "同义的", chinese_romanization: "tóngyì de" },
            { option: "C", answer: "irrelevant", chinese_answer: "无关的", chinese_romanization: "wúguān de" },
            { option: "D", answer: "unrelated", chinese_answer: "无关联的", chinese_romanization: "wú guānlián de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'synonymous' means having the same or nearly the same meaning as another word or phrase." +
            "<br><br>" +
            "(A) 'disconnected' means having a connection broken; separated." +
            "<br><br>" +
            "(C) 'irrelevant' means not connected with or relevant to something." +
            "<br><br>" +
            "(D) 'unrelated' means not related or connected.",
        chinese_explanation: "(B) '同义的' 意味着与另一个词或短语具有相同或几乎相同的意思。" +
            "<br><br>" +
            "(A) '断开的' 意味着连接断开的；分开的。" +
            "<br><br>" +
            "(C) '无关的' 意味着与某事无关的。" +
            "<br><br>" +
            "(D) '无关联的' 意味着不相关的或不连接的。"
    },
    {
        id: 4,
    question: "The speaker's __________ ideas on sustainable living were easy to adapt and implement in various settings.",
    chinese_question: "这位演讲者关于可持续生活的 __________ 想法很容易在各种环境中适应和实施。",
    answers: [
        { option: "A", answer: "portable", chinese_answer: "易于推广的", chinese_romanization: "yìyú tuīguǎng de" },
        { option: "B", answer: "complex", chinese_answer: "复杂的", chinese_romanization: "fùzá de" },
        { option: "C", answer: "intricate", chinese_answer: "错综复杂的", chinese_romanization: "cuòzōng fùzá de" },
        { option: "D", answer: "convoluted", chinese_answer: "费解的", chinese_romanization: "fèijiě de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'portable' means easily adapted or transferred to different situations or uses." +
        "<br><br>" +
        "(B) 'complex' means consisting of many different and connected parts." +
        "<br><br>" +
        "(C) 'intricate' means very complicated or detailed." +
        "<br><br>" +
        "(D) 'convoluted' means extremely complex and difficult to follow.",
    chinese_explanation: "(A) '易于推广的' 意味着容易适应或转移到不同情况或用途的。" +
        "<br><br>" +
        "(B) '复杂的' 意味着由许多不同和相连的部分组成的。" +
        "<br><br>" +
        "(C) '错综复杂的' 意味着非常复杂或详细的。" +
        "<br><br>" +
        "(D) '费解的' 意味着极其复杂和难以理解的。"
    },
    {
        id: 5,
    question: "She was always __________ of her surroundings, making sure to keep an eye out for any potential hazards.",
    chinese_question: "她总是 __________ 她的周围环境，确保留意任何潜在的危险。",
    answers: [
        { option: "A", answer: "mindful", chinese_answer: "留心的", chinese_romanization: "liúxīn de" },
        { option: "B", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
        { option: "C", answer: "oblivious", chinese_answer: "无视的", chinese_romanization: "wúshì de" },
        { option: "D", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'mindful' means conscious or aware of something." +
        "<br><br>" +
        "(B) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
        "<br><br>" +
        "(C) 'oblivious' means not aware of or not concerned about what is happening around one." +
        "<br><br>" +
        "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
    chinese_explanation: "(A) '留心的' 意味着意识到或注意到某事。" +
        "<br><br>" +
        "(B) '粗心的' 意味着没有给予足够的注意或思考以避免伤害或错误的。" +
        "<br><br>" +
        "(C) '无视的' 意味着没有意识到或不关心周围发生的事情的。" +
        "<br><br>" +
        "(D) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。"
    },
    {
        id: 6,
    question: "He had __________ ambitions, dreaming of changing the world with his inventions.",
    chinese_question: "他有 __________ 的雄心，梦想用他的发明改变世界。",
    answers: [
        { option: "A", answer: "modest", chinese_answer: "谦虚", chinese_romanization: "qiānxū" },
        { option: "B", answer: "lowly", chinese_answer: "低微", chinese_romanization: "dīwēi" },
        { option: "C", answer: "lofty", chinese_answer: "崇高", chinese_romanization: "chónggāo" },
        { option: "D", answer: "humble", chinese_answer: "谦逊", chinese_romanization: "qiānxùn" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'lofty' means noble or exalted in nature." +
        "<br><br>" +
        "(A) 'modest' means unassuming in the estimation of one's abilities or achievements." +
        "<br><br>" +
        "(B) 'lowly' means low in status or importance; humble." +
        "<br><br>" +
        "(D) 'humble' means having or showing a modest or low estimate of one's own importance.",
    chinese_explanation: "(C) '崇高' 意味着高贵或崇高的本质。" +
        "<br><br>" +
        "(A) '谦虚' 意味着对自己的能力或成就不自夸。" +
        "<br><br>" +
        "(B) '低微' 意味着地位或重要性低；谦逊。" +
        "<br><br>" +
        "(D) '谦逊' 意味着对自己的重要性有或表现出谦虚的估计。"
    },
    {
        id: 7,
    question: "His __________ attitude at the meeting offended many of the attendees.",
    chinese_question: "他在会议上的 __________ 态度冒犯了许多与会者。",
    answers: [
        { option: "A", answer: "humble", chinese_answer: "谦虚", chinese_romanization: "qiānxū" },
        { option: "B", answer: "insolent", chinese_answer: "无礼", chinese_romanization: "wúlǐ" },
        { option: "C", answer: "modest", chinese_answer: "谦逊", chinese_romanization: "qiānxùn" },
        { option: "D", answer: "deferential", chinese_answer: "恭敬", chinese_romanization: "gōngjìng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'insolent' means showing a rude and arrogant lack of respect." +
        "<br><br>" +
        "(A) 'humble' means having or showing a modest or low estimate of one's own importance." +
        "<br><br>" +
        "(C) 'modest' means unassuming in the estimation of one's abilities or achievements." +
        "<br><br>" +
        "(D) 'deferential' means showing deference; respectful.",
    chinese_explanation: "(B) '无礼' 意味着表现出粗鲁和傲慢的缺乏尊重。" +
        "<br><br>" +
        "(A) '谦虚' 意味着对自己的重要性有或表现出谦虚或低估。" +
        "<br><br>" +
        "(C) '谦逊' 意味着对自己的能力或成就谦虚。" +
        "<br><br>" +
        "(D) '恭敬' 意味着表现出敬意；尊重的。"
    },
    {
        id: 8,
        question: "They cherished their __________ years together, filled with love and happiness.",
        chinese_question: "他们珍惜在一起的 __________ 岁月，充满了爱和幸福。",
        answers: [
            { option: "A", answer: "sorrowful", chinese_answer: "悲伤的", chinese_romanization: "bēishāng de" },
            { option: "B", answer: "golden", chinese_answer: "黄金的", chinese_romanization: "huángjīn de" },
            { option: "C", answer: "distressing", chinese_answer: "令人痛苦的", chinese_romanization: "lìngrén tòngkǔ de" },
            { option: "D", answer: "dull", chinese_answer: "枯燥的", chinese_romanization: "kūzào de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'golden' means highly valuable, excellent, or prosperous." +
            "<br><br>" +
            "(A) 'sorrowful' means feeling or showing grief." +
            "<br><br>" +
            "(C) 'distressing' means causing anxiety, sorrow, or pain." +
            "<br><br>" +
            "(D) 'dull' means lacking interest or excitement.",
        chinese_explanation: "(B) '黄金的' 意味着高度有价值的、优秀的或繁荣的。" +
            "<br><br>" +
            "'悲伤的' 意味着感到或表现出悲痛的。" +
            "<br><br>" +
            "'令人痛苦的' 意味着引起焦虑、悲伤或痛苦的。" +
            "<br><br>" +
            "'枯燥的' 意味着缺乏兴趣或兴奋的。"
    },
    {
        id: 9,
        question: "The sense of his own __________ weakness was overwhelming after his near-death experience.",
        chinese_question: "在经历了濒死体验后，对自身__________弱点的感觉是压倒性的。",
        answers: [
            { option: "A", answer: "immortal", chinese_answer: "不朽的", chinese_romanization: "bùxiǔ de" },
            { option: "B", answer: "divine", chinese_answer: "神圣的", chinese_romanization: "shénshèng de" },
            { option: "C", answer: "mortal", chinese_answer: "凡人的", chinese_romanization: "fánrén de" },
            { option: "D", answer: "eternal", chinese_answer: "永恒的", chinese_romanization: "yǒnghéng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'mortal' means subject to death. Figuratively, it can mean being very aware of one's own vulnerability and human limitations." +
            "<br><br>" +
            "(A) 'immortal' means living forever; never dying or decaying." +
            "<br><br>" +
            "(B) 'divine' means of, from, or like God or a god." +
            "<br><br>" +
            "(D) 'eternal' means lasting or existing forever; without end.",
        chinese_explanation: "(C) '凡人的'一词意味着会死亡的。比喻地，它可以表示非常意识到自己的脆弱性和人类的局限性。" +
            "<br><br>" +
            "'不朽的' 意味着永远活着的；永不死或腐烂的。" +
            "<br><br>" +
            "'神圣的' 意味着像上帝或神的。" +
            "<br><br>" +
            "'永恒的' 意味着永远存在的；没有尽头的。"
    },
    {
        id: 10,
        question: "Her __________ motives left everyone guessing about her true intentions, as she rarely shared her thoughts openly.",
        chinese_question: "她的 __________ 动机让每个人都猜测她的真正意图，因为她很少公开分享自己的想法。",
        answers: [
            { option: "A", answer: "inscrutable", chinese_answer: "高深莫测的", chinese_romanization: "gāoshēn mòcè de" },
            { option: "B", answer: "plain", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "C", answer: "evident", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" },
            { option: "D", answer: "straightforward", chinese_answer: "直截了当的", chinese_romanization: "zhíjié le dāng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'inscrutable' means impossible to understand or interpret." +
            "<br><br>" +
            "(B) 'plain' means not decorated or elaborate; simple or ordinary in character." +
            "<br><br>" +
            "(C) 'evident' means clearly seen or understood; obvious." +
            "<br><br>" +
            "(D) 'straightforward' means uncomplicated and easy to understand.",
        chinese_explanation: "(A) '高深莫测的' 意味着难以理解或解释的。" +
            "<br><br>" +
            "(B) '简单的' 意味着没有装饰或复杂的；性格简单或普通的。" +
            "<br><br>" +
            "(C) '明显的' 意味着清楚地看见或理解的；显而易见的。" +
            "<br><br>" +
            "(D) '直截了当的' 意味着简单和容易理解的。"
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
