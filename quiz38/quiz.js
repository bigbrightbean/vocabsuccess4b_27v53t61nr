// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "After achieving fame, the writer became __________, rarely making public appearances or interacting with fans.",
        chinese_question: "成名后，这位作家变得 __________，很少公开露面或与粉丝互动。",
        answers: [
                { option: "A", answer: "sociable", chinese_answer: "好交际的", chinese_romanization: "hǎo jiāojì de" },
                { option: "B", answer: "reclusive", chinese_answer: "隐居的", chinese_romanization: "yǐnjū de" },
                { option: "C", answer: "outgoing", chinese_answer: "外向的", chinese_romanization: "wàixiàng de" },
                { option: "D", answer: "friendly", chinese_answer: "友好的", chinese_romanization: "yǒuhǎo de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'reclusive' means avoiding the company of other people; solitary." +
            "<br><br>" +
            "(A) 'sociable' means willing to talk and engage in activities with other people; friendly." +
            "<br><br>" +
            "(C) 'outgoing' means friendly and socially confident." +
            "<br><br>" +
            "(D) 'friendly' means kind and pleasant.",
        chinese_explanation: "(B) '隐居的' 一词意味着避免与他人相处的；孤独的。" +
            "<br><br>" +
            "(A) '好交际的' 意味着愿意与他人交谈和参与活动的；友好的。" +
            "<br><br>" +
            "(C) '外向的' 意味着友好和社交自信的。" +
            "<br><br>" +
            "(D) '友好的' 意味着友好和愉快的。"
    },
    {
        id: 2,
    question: "His __________ attitude often led him to contemplate the meaning of life.",
    chinese_question: "他__________的态度常常使他思考生命的意义。",
    answers: [
        { option: "A", answer: "joyful", chinese_answer: "快乐的", chinese_romanization: "kuàilè de" },
        { option: "B", answer: "pensive", chinese_answer: "沉思的", chinese_romanization: "chénsī de" },
        { option: "C", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbùguānxīn de" },
        { option: "D", answer: "carefree", chinese_answer: "无忧无虑的", chinese_romanization: "wúyōuwúlǜ de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'pensive' means engaged in, involving, or reflecting deep or serious thought. Figuratively, it can mean being thoughtful and reflective." +
        "<br><br>" +
        "(A) 'joyful' means feeling, expressing, or causing great pleasure and happiness." +
        "<br><br>" +
        "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
        "<br><br>" +
        "(D) 'carefree' means free from anxiety or responsibility.",
    chinese_explanation: "(B) '沉思的'一词意味着从事、涉及或反映深刻或严肃的思考。比喻地，它可以表示深思和反思的。" +
        "<br><br>" +
        "(A) '快乐的' 意味着感到、表达或引起极大的愉快和幸福的。" +
        "<br><br>" +
        "(C) '漠不关心的' 意味着没有特别的兴趣或同情；不关心的。" +
        "<br><br>" +
        "(D) '无忧无虑的' 意味着没有焦虑或责任的。"
    },
    {
        id: 3,
        question: "The __________ professor was known for his engaging lectures, often speaking for hours with great enthusiasm.",
        chinese_question: "这位 __________ 的教授以其引人入胜的讲座而闻名，经常热情洋溢地讲上几个小时。",
        answers: [
            { option: "A", answer: "taciturn", chinese_answer: "沉默寡言的", chinese_romanization: "chénmò guǎyán de" },
            { option: "B", answer: "reticent", chinese_answer: "沉默的", chinese_romanization: "chénmò de" },
            { option: "C", answer: "voluble", chinese_answer: "健谈的", chinese_romanization: "jiàntán de" },
            { option: "D", answer: "silent", chinese_answer: "无声的", chinese_romanization: "wúshēng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'voluble' means speaking or spoken incessantly and fluently." +
            "<br><br>" +
            "(A) 'taciturn' means reserved or uncommunicative in speech; saying little." +
            "<br><br>" +
            "(B) 'reticent' means not revealing one's thoughts or feelings readily." +
            "<br><br>" +
            "(D) 'silent' means not making or accompanied by any sound.",
        chinese_explanation: "(C) '健谈的' 意味着不停地和流利地说话或讲话。" +
            "<br><br>" +
            "(A) '沉默寡言的' 意味着言语保守或不爱说话。" +
            "<br><br>" +
            "(B) '沉默的' 意味着不轻易透露自己的想法或感受。" +
            "<br><br>" +
            "(D) '无声的' 意味着不发出任何声音或伴随任何声音。"
    },
    {
        id: 4,
        question: "Her __________ comments made it clear she was uncomfortable with foreigners.",
        chinese_question: "她的 __________ 评论表明她对外国人感到不自在。",
        answers: [
            { option: "A", answer: "welcoming", chinese_answer: "欢迎的", chinese_romanization: "huānyíng de" },
            { option: "B", answer: "xenophobic", chinese_answer: "排外的", chinese_romanization: "páiwài de" },
            { option: "C", answer: "friendly", chinese_answer: "友好的", chinese_romanization: "yǒuhǎo de" },
            { option: "D", answer: "accepting", chinese_answer: "接受的", chinese_romanization: "jiēshòu de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'xenophobic' means having or showing a dislike of or prejudice against people from other countries." +
            "<br><br>" +
            "(A) 'welcoming' means behaving in a polite or friendly way to a guest or new arrival." +
            "<br><br>" +
            "(C) 'friendly' means kind and pleasant." +
            "<br><br>" +
            "(D) 'accepting' means willing to tolerate or accept people or situations.",
        chinese_explanation: "(B) '排外的' 意味着对来自其他国家的人有或表现出不喜欢或偏见。" +
            "<br><br>" +
            "(A) '欢迎的' 意味着对客人或新来的人的行为礼貌或友好。" +
            "<br><br>" +
            "(C) '友好的' 意味着善良和愉快的。" +
            "<br><br>" +
            "(D) '接受的' 意味着愿意容忍或接受人或情况的。"
    },
    {
        id: 5,
        question: "His __________ attitude towards literature, acting as if his taste was superior to everyone else's, annoyed his friends.",
        chinese_question: "他对文学 __________ 的态度，表现出他的品味优于其他所有人，惹恼了他的朋友们。",
        answers: [
            { option: "A", answer: "humble", chinese_answer: "谦逊的", chinese_romanization: "qiānxùn de" },
            { option: "B", answer: "pretentious", chinese_answer: "自命不凡的", chinese_romanization: "zìmìng bùfán de" },
            { option: "C", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
            { option: "D", answer: "genuine", chinese_answer: "真诚的", chinese_romanization: "zhēnchéng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pretentious' means attempting to impress by affecting greater importance, talent, culture, etc., than is actually possessed." +
            "<br><br>" +
            "(A) 'humble' means having or showing a modest or low estimate of one's own importance." +
            "<br><br>" +
            "(C) 'modest' means unassuming in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(D) 'genuine' means truly what something is said to be; authentic.",
        chinese_explanation: "(B) '自命不凡的' 意味着试图通过表现出比实际拥有的更大的重要性、才能、文化等来给人留下深刻印象。" +
            "<br><br>" +
            "(A) '谦逊的' 意味着对自己的重要性有或表现出谦逊或低估。" +
            "<br><br>" +
            "(C) '谦虚的' 意味着对自己的能力或成就不自以为是的。" +
            "<br><br>" +
            "(D) '真诚的' 意味着真正的，所说的就是其所是的；真实的。"
    },
    {
        id: 6,
        question: "The company's __________ policy changes created an unstable work environment, making employees anxious.",
        chinese_question: "公司的 __________ 政策变化造成了不稳定的工作环境，让员工感到焦虑。",
        answers: [
            { option: "A", answer: "stable", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" },
            { option: "B", answer: "predictable", chinese_answer: "可预测的", chinese_romanization: "kě yùcè de" },
            { option: "C", answer: "arbitrary", chinese_answer: "随意的", chinese_romanization: "suíyì de" },
            { option: "D", answer: "consistent", chinese_answer: "一致的", chinese_romanization: "yīzhì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'arbitrary' means based on random choice or personal whim, rather than any reason or system." +
            "<br><br>" +
            "(A) 'stable' means not likely to change or fail; firmly established." +
            "<br><br>" +
            "(B) 'predictable' means able to be predicted." +
            "<br><br>" +
            "(D) 'consistent' means acting or done in the same way over time, especially so as to be fair or accurate.",
        chinese_explanation: "(C) '随意的' 意味着基于随机选择或个人随意，而不是任何理由或系统。" +
            "<br><br>" +
            "'稳定的' 意味着不太可能改变或失败的；牢固建立的。" +
            "<br><br>" +
            "'可预测的' 意味着能够被预测的。" +
            "<br><br>" +
            "'一致的' 意味着一段时间内以同样的方式进行，尤其是为了公平或准确。"
    },
    {
        id: 7,
    question: "The painting's style is __________ of the Renaissance period, with its detailed realism and use of light and shadow.",
    chinese_question: "这幅画的风格 __________ 文艺复兴时期，具有细致的写实主义和光影的运用。",
    answers: [
        { option: "A", answer: "modern", chinese_answer: "现代的", chinese_romanization: "xiàndài de" },
        { option: "B", answer: "reminiscent", chinese_answer: "使人想起的", chinese_romanization: "shǐ rén xiǎngqǐ de" },
        { option: "C", answer: "futuristic", chinese_answer: "未来的", chinese_romanization: "wèilái de" },
        { option: "D", answer: "contemporary", chinese_answer: "当代的", chinese_romanization: "dāngdài de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'reminiscent' means tending to remind one of something." +
        "<br><br>" +
        "(A) 'modern' means relating to the present or recent times." +
        "<br><br>" +
        "(C) 'futuristic' means having or involving very modern technology or design." +
        "<br><br>" +
        "(D) 'contemporary' means living or occurring at the same time; modern.",
    chinese_explanation: "(B) '使人想起的' 意味着让人想起某事。" +
        "<br><br>" +
        "(A) '现代的' 意味着与现在或最近的时间有关的。" +
        "<br><br>" +
        "(C) '未来的' 意味着具有或涉及非常现代的技术或设计。" +
        "<br><br>" +
        "(D) '当代的' 意味着在同一时间生活或发生的；现代的。"
    },
    {
        id: 8,
    question: "The job offer was __________ because of the opportunities for growth and development.",
    chinese_question: "由于有成长和发展的机会，这个工作机会很有 __________。",
    answers: [
        { option: "A", answer: "unattractive", chinese_answer: "不吸引人的", chinese_romanization: "bù xīyǐn rén de" },
        { option: "B", answer: "dull", chinese_answer: "无趣的", chinese_romanization: "wúqù de" },
        { option: "C", answer: "boring", chinese_answer: "无聊的", chinese_romanization: "wúliáo de" },
        { option: "D", answer: "attractive", chinese_answer: "吸引人的", chinese_romanization: "xīyǐn rén de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'attractive' means pleasing or appealing to the senses." +
        "<br><br>" +
        "(A) 'unattractive' means not pleasing or appealing to look at." +
        "<br><br>" +
        "(B) 'dull' means lacking interest or excitement." +
        "<br><br>" +
        "(C) 'boring' means not interesting; tedious.",
    chinese_explanation: "(D) '吸引人的' 意味着让感官愉悦或吸引人的。" +
        "<br><br>" +
        "(A) '不吸引人的' 意味着看起来不悦目或没有吸引力。" +
        "<br><br>" +
        "(B) '无趣的' 意味着没有兴趣或兴奋。" +
        "<br><br>" +
        "(C) '无聊的' 意味着没有趣的；乏味的。"
    },
    {
        id: 9,
    question: "His refusal to cooperate was __________ to the team's success.",
    chinese_question: "他拒绝合作对团队的成功 __________ 。",
    answers: [
        { option: "A", answer: "inimical", chinese_answer: "有害", chinese_romanization: "yǒuhài" },
        { option: "B", answer: "beneficial", chinese_answer: "有益", chinese_romanization: "yǒuyì" },
        { option: "C", answer: "supportive", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "D", answer: "negligible", chinese_answer: "微不足道", chinese_romanization: "wēibùzúdào" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'inimical' means harmful or hostile, used figuratively here." +
        "<br><br>" +
        "(B) 'beneficial' means resulting in good; favorable or advantageous." +
        "<br><br>" +
        "(C) 'supportive' means providing encouragement or emotional help." +
        "<br><br>" +
        "(D) 'negligible' means so small or unimportant as to be not worth considering.",
    chinese_explanation: "(A) '有害' 意味着有害或敌对的，这里是比喻用法。" +
        "<br><br>" +
        "(B) '有益' 意味着带来好处；有利或有优势的。" +
        "<br><br>" +
        "(C) '支持' 意味着提供鼓励或情感上的帮助。" +
        "<br><br>" +
        "(D) '微不足道' 意味着小到或不重要到不值得考虑的。"
    },
    {
        id: 10,
        question: "His __________ was evident in his thoughtful advice, which helped many people navigate difficult situations.",
        chinese_question: "他的 __________ 体现在他深思熟虑的建议中，帮助许多人应对困难的情况。",
        answers: [
                { option: "A", answer: "ignorance", chinese_answer: "无知", chinese_romanization: "wúzhī" },
                { option: "B", answer: "foolishness", chinese_answer: "愚蠢", chinese_romanization: "yúchǔn" },
                { option: "C", answer: "sagacity", chinese_answer: "智慧", chinese_romanization: "zhìhuì" },
                { option: "D", answer: "naivety", chinese_answer: "天真", chinese_romanization: "tiānzhēn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sagacity' means the quality of being sagacious; having or showing keen mental discernment and good judgment; wise." +
            "<br><br>" +
            "(A) 'ignorance' means lack of knowledge or information." +
            "<br><br>" +
            "(B) 'foolishness' means lack of good sense or judgment; stupidity." +
            "<br><br>" +
            "(D) 'naivety' means lack of experience, wisdom, or judgment.",
        chinese_explanation: "(C) '智慧' 一词意味着明智；具有或表现出敏锐的判断力和良好的判断力。" +
            "<br><br>" +
            "(A) '无知' 意味着缺乏知识或信息。" +
            "<br><br>" +
            "(B) '愚蠢' 意味着缺乏良好的判断力；愚蠢。" +
            "<br><br>" +
            "(D) '天真' 意味着缺乏经验、智慧或判断力。"
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
