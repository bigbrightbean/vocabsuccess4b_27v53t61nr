// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The writer __________ the loss of innocence in his latest novel.",
        chinese_question: "作家在他的新小说中 __________ 纯真的失落。",
        answers: [
                { option: "A", answer: "celebrated", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
                { option: "B", answer: "bemoaned", chinese_answer: "哀叹", chinese_romanization: "āitàn" },
                { option: "C", answer: "praised", chinese_answer: "赞美", chinese_romanization: "zànměi" },
                { option: "D", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'bemoaned' means to express sorrow or regret over something, often in a literary or expressive context." +
                "<br><br>" +
                "(A) 'celebrated' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
                "<br><br>" +
                "(C) 'praised' means to express warm approval or admiration." +
                "<br><br>" +
                "(D) 'ignored' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(B) '哀叹' 意味着对某事表示悲伤或遗憾，通常在文学或表达情感的背景下。" +
                "<br><br>" +
                "(A) '庆祝' 意味着通过社交聚会或愉快的活动来纪念一个重要或快乐的日子或事件。" +
                "<br><br>" +
                "(C) '赞美' 意味着表达热烈的赞同或钦佩。" +
                "<br><br>" +
                "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 2,
        question: "The politician __________ his accomplishments during the campaign to gain support.",
        chinese_question: "这位政治家在竞选期间 __________ 他的成就以赢得支持。",
        answers: [
            { option: "A", answer: "downplayed", chinese_answer: "贬低", chinese_romanization: "biǎndī" },
            { option: "B", answer: "paraded", chinese_answer: "炫耀", chinese_romanization: "xuànyào" },
            { option: "C", answer: "minimized", chinese_answer: "最小化", chinese_romanization: "zuìxiǎo huà" },
            { option: "D", answer: "denied", chinese_answer: "否认", chinese_romanization: "fǒurèn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'paraded' means to show something in a way that is intended to attract attention and admiration." +
            "<br><br>" +
            "(A) 'downplayed' means to make something appear less important than it really is." +
            "<br><br>" +
            "(C) 'minimized' means to reduce to the smallest possible amount or degree." +
            "<br><br>" +
            "(D) 'denied' means to state that something is not true.",
        chinese_explanation: "(B) '炫耀' 意味着以吸引注意和赞美的方式展示某物。" +
            "<br><br>" +
            "(A) '贬低' 意味着使某物显得不那么重要。" +
            "<br><br>" +
            "(C) '最小化' 意味着减少到可能的最小量或程度。" +
            "<br><br>" +
            "(D) '否认' 意味着声明某事不是真的。"
    },
    {
        id: 3,
    question: "The company's potential began to __________ after the successful launch of its new product.",
    chinese_question: "在新产品成功推出后，公司潜力开始 __________。",
    answers: [
        { option: "A", answer: "effloresce", chinese_answer: "绽放", chinese_romanization: "zhànfàng" },
        { option: "B", answer: "decline", chinese_answer: "下降", chinese_romanization: "xiàjiàng" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "obscure", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'effloresce' means to blossom or come into full bloom, used figuratively here." +
        "<br><br>" +
        "(B) 'decline' means to become smaller, fewer, or less." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'obscure' means to keep from being seen; conceal.",
    chinese_explanation: "(A) '绽放' 意味着开花或进入全盛期，这里是比喻用法。" +
        "<br><br>" +
        "(B) '下降' 意味着变得更小、更少或更少。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '隐藏' 意味着防止被看到；隐藏。"
    },
    {
        id: 4,
        question: "The journalist faced __________ from his peers for fabricating stories.",
        chinese_question: "这名记者因捏造故事而面临同行的 __________。",
        answers: [
                { option: "A", answer: "censure", chinese_answer: "谴责", chinese_romanization: "qiǎnzé" },
                { option: "B", answer: "admiration", chinese_answer: "钦佩", chinese_romanization: "qīnpèi" },
                { option: "C", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'censure' means to express severe disapproval of (someone or something), typically in a formal statement." +
                "<br><br>" +
                "(B) 'admiration' means respect and warm approval." +
                "<br><br>" +
                "(C) 'neglect' means to fail to care for properly." +
                "<br><br>" +
                "(D) 'praise' means to express warm approval or admiration of.",
        chinese_explanation: "(A) '谴责' 意味着通常在正式声明中表达对（某人或某事）的强烈不满。" +
                "<br><br>" +
                "(B) '钦佩' 意味着尊重和热烈赞同。" +
                "<br><br>" +
                "(C) '忽视' 意味着未能妥善照顾。" +
                "<br><br>" +
                "(D) '赞美' 意味着表达热烈的赞同或钦佩。"
    },
    {
        id: 5,
        question: "The villagers believed that the witch could __________ misfortune upon their crops.",
        chinese_question: "村民们相信那位女巫可以 __________ 他们的庄稼降祸。",
        answers: [
                { option: "A", answer: "imprecate", chinese_answer: "咒骂", chinese_romanization: "zhòumà" },
                { option: "B", answer: "bless", chinese_answer: "祝福", chinese_romanization: "zhùfú" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "protect", chinese_answer: "保护", chinese_romanization: "bǎohù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'imprecate' means to utter a curse or invoke evil against someone or something." +
                "<br><br>" +
                "(B) 'bless' means to invoke divine favor upon someone or something." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'protect' means to keep someone or something safe from harm or injury.",
        chinese_explanation: "(A) '咒骂' 意味着诅咒或祈求对某人或某物降祸。" +
                "<br><br>" +
                "(B) '祝福' 意味着祈求神的恩宠降临在某人或某物身上。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '保护' 意味着让某人或某物免受伤害或损害。"
    },
    {
        id: 6,
        question: "The artist was frustrated because no matter how much he improved, critics would always __________ about his work.",
        chinese_question: "艺术家感到沮丧，因为无论他如何改进，评论家总是会对他的作品 __________。",
        answers: [
                { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "B", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
                { option: "C", answer: "carp", chinese_answer: "吹毛求疵", chinese_romanization: "chuīmáoqiúcī" },
                { option: "D", answer: "admire", chinese_answer: "钦佩", chinese_romanization: "qīnpèi" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'carp' means to complain or find fault continually about trivial matters." +
                "<br><br>" +
                "(A) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(B) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
                "<br><br>" +
                "(D) 'admire' means to regard with respect or warm approval.",
        chinese_explanation: "(C) '吹毛求疵' 意味着对琐事不断地抱怨或挑剔。" +
                "<br><br>" +
                "(A) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(B) '庆祝' 意味着通过社交聚会或愉快的活动来纪念一个重要或快乐的日子或事件。" +
                "<br><br>" +
                "(D) '钦佩' 意味着以尊重或热烈的赞同态度对待。"
    },
    {
        id: 7,
        question: "The campaign aims to __________ the benefits of renewable energy sources.",
        chinese_question: "该活动旨在 __________ 可再生能源的好处。",
        answers: [
                { option: "A", answer: "promulgate", chinese_answer: "宣传", chinese_romanization: "xuānchuán" },
                { option: "B", answer: "undermine", chinese_answer: "破坏", chinese_romanization: "pòhuài" },
                { option: "C", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
                { option: "D", answer: "hide", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'promulgate' figuratively means to promote or make widely known (an idea or cause)." +
                "<br><br>" +
                "(B) 'undermine' means to damage or weaken someone or something, especially gradually." +
                "<br><br>" +
                "(C) 'reject' means to dismiss as inadequate, unacceptable, or faulty." +
                "<br><br>" +
                "(D) 'hide' means to keep something secret or hidden.",
        chinese_explanation: "(A) '宣传' 在此语境下比喻推广或广泛传播（一个想法或事业）。" +
                "<br><br>" +
                "(B) '破坏' 意味着损害或削弱某人或某物，尤其是逐渐地。" +
                "<br><br>" +
                "(C) '拒绝' 意味着认为不够好、不能接受或有缺陷而予以拒绝。" +
                "<br><br>" +
                "(D) '隐藏' 意味着将某事保密或隐藏。"
    },
    {
        id: 8,
        question: "The company's profits were __________ from several different business units.",
        chinese_question: "公司的利润是从几个不同的业务部门 __________ 起来的。",
        answers: [
                { option: "A", answer: "aggregated", chinese_answer: "汇总", chinese_romanization: "huìzǒng" },
                { option: "B", answer: "diminished", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
                { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "separated", chinese_answer: "分离", chinese_romanization: "fēnlí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'aggregated' means to collect and combine (several separate elements) into a whole." +
                "<br><br>" +
                "(B) 'diminished' means to make or become less." +
                "<br><br>" +
                "(C) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'separated' means to cause to move or be apart.",
        chinese_explanation: "(A) '汇总' 意味着收集和组合（几个独立元素）成一个整体。" +
                "<br><br>" +
                "(B) '减少' 意味着使或变得更少。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '分离' 意味着使移动或分开。"
    },
    {
        id: 9,
    question: "The marauding bandits continued to __________ villages, leaving destruction in their wake.",
    chinese_question: "掠夺成性的土匪继续 __________ 村庄，所到之处一片破坏。",
    answers: [
        { option: "A", answer: "depredate", chinese_answer: "掠夺", chinese_romanization: "lüèduó" },
        { option: "B", answer: "nurture", chinese_answer: "培育", chinese_romanization: "péiyù" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "build", chinese_answer: "建造", chinese_romanization: "jiànzào" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'depredate' means to plunder or lay waste to; to engage in predatory attacks." +
        "<br><br>" +
        "(B) 'nurture' means to care for and encourage the growth or development of." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'build' means to construct something by putting parts or materials together.",
    chinese_explanation: "(A) '掠夺' 意味着掠夺或摧毁；进行掠夺性攻击。" +
        "<br><br>" +
        "(B) '培育' 意味着照顾和鼓励生长或发展。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '建造' 意味着通过组装部件或材料来建造某物。"
    },
    {
        id: 10,
        question: "His once unwavering confidence had slowly __________ over the years due to repeated failures.",
        chinese_question: "由于多次失败，他曾经坚定的信心在多年中逐渐 __________。",
        answers: [
            { option: "A", answer: "strengthened", chinese_answer: "加强", chinese_romanization: "jiāqiáng" },
            { option: "B", answer: "flourished", chinese_answer: "兴旺", chinese_romanization: "xīngwàng" },
            { option: "C", answer: "corroded", chinese_answer: "腐蚀", chinese_romanization: "fǔshí" },
            { option: "D", answer: "emerged", chinese_answer: "出现", chinese_romanization: "chūxiàn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'corroded' means damaged or deteriorated, especially gradually." +
            "<br><br>" +
            "(A) 'strengthened' means made stronger." +
            "<br><br>" +
            "(B) 'flourished' means developed rapidly and successfully." +
            "<br><br>" +
            "(D) 'emerged' means come into view.",
        chinese_explanation: "(C) '腐蚀' 意味着被损坏或恶化，特别是逐渐地。" +
            "<br><br>" +
            "(A) '加强' 意味着变得更强。" +
            "<br><br>" +
            "(B) '兴旺' 意味着迅速发展并取得成功。" +
            "<br><br>" +
            "(D) '出现' 意味着进入视野。"
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
