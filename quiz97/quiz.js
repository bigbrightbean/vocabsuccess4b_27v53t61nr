// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "To keep the peace, she would __________ ignorance of the gossip circulating around the office.",
    chinese_question: "为了保持和平，她会 __________ 对办公室流言的无知。",
    answers: [
        { option: "A", answer: "embrace", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
        { option: "B", answer: "feign", chinese_answer: "假装", chinese_romanization: "jiǎzhuāng" },
        { option: "C", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
        { option: "D", answer: "expose", chinese_answer: "揭露", chinese_romanization: "jiēlù" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'feign' used figuratively means to pretend to be unaware or ignorant." +
        "<br><br>" +
        "(A) 'embrace' means to accept or support willingly and enthusiastically." +
        "<br><br>" +
        "(C) 'encourage' means to give support, confidence, or hope to someone." +
        "<br><br>" +
        "(D) 'expose' means to make something visible by uncovering it.",
    chinese_explanation: "(B) '假装' 在比喻意义上指假装不知或无知。" +
        "<br><br>" +
        "(A) '接受' 意味着愿意并热情地接受或支持。" +
        "<br><br>" +
        "(C) '鼓励' 意味着给予某人支持、信心或希望。" +
        "<br><br>" +
        "(D) '揭露' 意味着通过揭开使某物可见。"
    },
    {
        id: 2,
        question: "The church plans to __________ several saints next year for their remarkable deeds.",
        chinese_question: "教会计划在明年 __________ 几位圣徒，以表彰他们的卓越事迹。",
        answers: [
                { option: "A", answer: "criticize", chinese_answer: "批评", chinese_romanization: "pīpíng" },
                { option: "B", answer: "beatify", chinese_answer: "宣福", chinese_romanization: "xuānfú" },
                { option: "C", answer: "overlook", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "disparage", chinese_answer: "贬低", chinese_romanization: "biǎndī" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'beatify' means to declare a deceased person to be among the blessed and thus worthy of public veneration in a particular region or religious congregation." +
                "<br><br>" +
                "(A) 'criticize' means to indicate the faults of someone or something in a disapproving way." +
                "<br><br>" +
                "(C) 'overlook' means to fail to notice something." +
                "<br><br>" +
                "(D) 'disparage' means to regard or represent as being of little worth.",
        chinese_explanation: "(B) '宣福' 意味着宣布某已故人士为圣徒，并因此值得在特定地区或宗教团体中受到公众尊敬。" +
                "<br><br>" +
                "(A) '批评' 意味着以不赞成的方式指出某人或某事的缺点。" +
                "<br><br>" +
                "(C) '忽视' 意味着未能注意到某事。" +
                "<br><br>" +
                "(D) '贬低' 意味着认为或表现出某事物的价值很低。"
    },
    {
        id: 3,
        question: "Under public pressure, the government had to __________ the controversial policy.",
        chinese_question: "在公众压力下，政府不得不 __________ 这项有争议的政策。",
        answers: [
                { option: "A", answer: "enforce", chinese_answer: "执行", chinese_romanization: "zhíxíng" },
                { option: "B", answer: "rescind", chinese_answer: "撤销", chinese_romanization: "chèxiāo" },
                { option: "C", answer: "promote", chinese_answer: "推动", chinese_romanization: "tuīdòng" },
                { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'rescind' means to revoke, cancel, or repeal a law, order, or agreement." +
                "<br><br>" +
                "(A) 'enforce' means to compel observance of or compliance with a law, rule, or obligation." +
                "<br><br>" +
                "(C) 'promote' means to further the progress of something." +
                "<br><br>" +
                "(D) 'ignore' means to refuse to take notice of.",
        chinese_explanation: "(B) '撤销' 意味着撤销、取消或废除一项法律、命令或协议。" +
                "<br><br>" +
                "(A) '执行' 意味着强制遵守或遵循法律、规则或义务。" +
                "<br><br>" +
                "(C) '推动' 意味着推进某事的进展。" +
                "<br><br>" +
                "(D) '忽视' 意味着拒绝注意。"
    },
    {
        id: 4,
        question: "Her movements were __________ by the tight space, making it difficult for her to maneuver.",
        chinese_question: "她的动作受到狭小空间的 __________，使得她很难移动。",
        answers: [
                { option: "A", answer: "circumscribed", chinese_answer: "限制", chinese_romanization: "xiànzhì" },
                { option: "B", answer: "expanded", chinese_answer: "扩展", chinese_romanization: "kuòzhǎn" },
                { option: "C", answer: "facilitated", chinese_answer: "促进", chinese_romanization: "cùjìn" },
                { option: "D", answer: "enhanced", chinese_answer: "增强", chinese_romanization: "zēngqiáng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'circumscribed' means restricted or limited." +
                "<br><br>" +
                "(B) 'expanded' means made larger or more extensive." +
                "<br><br>" +
                "(C) 'facilitated' means made easier." +
                "<br><br>" +
                "(D) 'enhanced' means improved or increased in quality.",
        chinese_explanation: "(A) '限制' 意味着受到限制或约束。" +
                "<br><br>" +
                "(B) '扩展' 意味着变大或更广泛。" +
                "<br><br>" +
                "(C) '促进' 意味着变得更容易。" +
                "<br><br>" +
                "(D) '增强' 意味着在质量上改善或增加。"
    },
    {
        id: 5,
        question: "The actors __________ on stage during the musical, bringing the story to life with their energy.",
        chinese_question: "在音乐剧中，演员们在舞台上 __________，用他们的能量使故事栩栩如生。",
        answers: [
                { option: "A", answer: "sulked", chinese_answer: "生闷气", chinese_romanization: "shēng mèn qì" },
                { option: "B", answer: "cavorted", chinese_answer: "欢跃", chinese_romanization: "huānyuè" },
                { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "criticized", chinese_answer: "批评", chinese_romanization: "pīpíng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'cavorted' means to jump or dance around excitedly." +
                "<br><br>" +
                "(A) 'sulked' means to be silent, morose, and bad-tempered out of annoyance or disappointment." +
                "<br><br>" +
                "(C) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'criticized' means to indicate the faults of someone or something in a disapproving way.",
        chinese_explanation: "(B) '欢跃' 意味着兴奋地跳跃或舞蹈。" +
                "<br><br>" +
                "(A) '生闷气' 意味着因为恼怒或失望而沉默、阴郁和坏脾气。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '批评' 意味着以不赞成的方式指出某人或某事的缺点。"
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
        question: "The board members __________ to oust the CEO, holding secret meetings to discuss their strategy.",
        chinese_question: "董事会成员 __________ 以推翻 CEO，举行秘密会议讨论他们的策略。",
        answers: [
            { option: "A", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "B", answer: "opposed", chinese_answer: "反对", chinese_romanization: "fǎnduì" },
            { option: "C", answer: "connived", chinese_answer: "共谋", chinese_romanization: "gòngmóu" },
            { option: "D", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'connived' means secretly allow (something considered immoral, illegal, wrong, or harmful) to occur." +
            "<br><br>" +
            "(A) 'supported' means bear all or part of the weight of; hold up." +
            "<br><br>" +
            "(B) 'opposed' means disapprove of and attempt to prevent, especially by argument." +
            "<br><br>" +
            "(D) 'ignored' means refuse to take notice of or acknowledge; disregard intentionally.",
        chinese_explanation: "(C) '共谋' 意味着秘密允许（某些被认为不道德、非法、错误或有害的事情）发生。" +
            "<br><br>" +
            "(A) '支持' 意味着承受全部或部分重量；支撑。" +
            "<br><br>" +
            "(B) '反对' 意味着不赞成并试图阻止，尤其是通过争论。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认；故意忽视。"
    },
    {
        id: 8,
        question: "The unexpected news caused his thoughts to __________, making it hard to focus.",
        chinese_question: "突如其来的消息使他的思绪 __________ ，难以集中注意力。",
        answers: [
                { option: "A", answer: "scatter", chinese_answer: "分散", chinese_romanization: "fēnsàn" },
                { option: "B", answer: "concentrate", chinese_answer: "集中", chinese_romanization: "jízhōng" },
                { option: "C", answer: "align", chinese_answer: "对齐", chinese_romanization: "duìqí" },
                { option: "D", answer: "settle", chinese_answer: "平静", chinese_romanization: "píngjìng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'scatter' means to throw in various random directions." +
                "<br><br>" +
                "(B) 'concentrate' means to focus one's attention or mental effort on a particular object or activity." +
                "<br><br>" +
                "(C) 'align' means to place or arrange things in a straight line." +
                "<br><br>" +
                "(D) 'settle' means to become or make someone become calm or composed.",
        chinese_explanation: "(A) '分散' 意味着朝各个不同方向散开。" +
                "<br><br>" +
                "(B) '集中' 意味着将注意力或精神努力集中在特定物体或活动上。" +
                "<br><br>" +
                "(C) '对齐' 意味着将东西排成一条直线。" +
                "<br><br>" +
                "(D) '平静' 意味着使某人平静或镇定。"
}
    ,
    {
        id: 9,
        question: "The community project aims to __________ positive changes in the neighborhood.",
        chinese_question: "社区项目旨在 __________ 社区的积极变化。",
        answers: [
                { option: "A", answer: "prevent", chinese_answer: "阻止", chinese_romanization: "zǔzhǐ" },
                { option: "B", answer: "catalyze", chinese_answer: "催化", chinese_romanization: "cuīhuà" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "hinder", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'catalyze' means to cause or accelerate a reaction or process." +
                "<br><br>" +
                "(A) 'prevent' means to stop something from happening or arising." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'hinder' means to create difficulties for someone or something, resulting in delay or obstruction.",
        chinese_explanation: "(B) '催化'一词意味着引起或加速反应或过程。" +
                "<br><br>" +
                "(A) '阻止' 意味着阻止某事发生或出现。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '阻碍' 意味着为某人或某事制造困难，导致延迟或障碍。"
    },
    {
        id: 10,
        question: "No matter how much praise he received, it never seemed to __________ his need for validation.",
        chinese_question: "无论他得到多少赞扬，似乎都无法 __________ 他对认可的需求。",
        answers: [
                { option: "A", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "B", answer: "satiate", chinese_answer: "满足", chinese_romanization: "mǎnzú" },
                { option: "C", answer: "ignore", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
                { option: "D", answer: "deplete", chinese_answer: "耗尽", chinese_romanization: "hàojìn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'satiate' means to satisfy fully." +
                "<br><br>" +
                "(A) 'neglect' means to fail to care for properly." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of." +
                "<br><br>" +
                "(D) 'deplete' means to use up the supply of something.",
        chinese_explanation: "(B) '满足' 意味着完全满足。" +
                "<br><br>" +
                "(A) '忽视' 意味着未能妥善照顾。" +
                "<br><br>" +
                "(C) '忽略' 意味着拒绝注意。" +
                "<br><br>" +
                "(D) '耗尽' 意味着用尽某物的供应。"
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
