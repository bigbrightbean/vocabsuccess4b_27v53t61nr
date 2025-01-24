// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Under pressure from the stakeholders, the CEO had to __________ some control over the company's operations.",
        chinese_question: "在利益相关者的压力下，首席执行官不得不 __________ 一些公司运营的控制权。",
        answers: [
                { option: "A", answer: "cede", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
                { option: "B", answer: "seize", chinese_answer: "抓住", chinese_romanization: "zhuāzhù" },
                { option: "C", answer: "expand", chinese_answer: "扩展", chinese_romanization: "kuòzhǎn" },
                { option: "D", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'cede' means to give up power or territory." +
                "<br><br>" +
                "(B) 'seize' means to take hold of suddenly and forcibly." +
                "<br><br>" +
                "(C) 'expand' means to become or make larger or more extensive." +
                "<br><br>" +
                "(D) 'neglect' means to fail to care for properly.",
        chinese_explanation: "(A) '放弃' 意味着放弃权力或领土。" +
                "<br><br>" +
                "(B) '抓住' 意味着突然和强行抓住。" +
                "<br><br>" +
                "(C) '扩展' 意味着变大或变得更广泛。" +
                "<br><br>" +
                "(D) '忽视' 意味着未能适当照顾。"
    },
    {
        id: 2,
    question: "Before docking, the crew had to __________ the flags.",
    chinese_question: "在靠岸之前，船员们必须 __________ 旗帜。",
    answers: [
        { option: "A", answer: "furl", chinese_answer: "收起", chinese_romanization: "shōuqǐ" },
        { option: "B", answer: "hoist", chinese_answer: "升起", chinese_romanization: "shēngqǐ" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "display", chinese_answer: "展示", chinese_romanization: "zhǎnshì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'furl' means to roll or fold up neatly and securely." +
        "<br><br>" +
        "(B) 'hoist' means to raise or lift something, typically with ropes or pulleys." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'display' means to show something in a prominent or noticeable way.",
    chinese_explanation: "(A) '收起' 意味着整齐地卷起或折叠起来。" +
        "<br><br>" +
        "(B) '升起' 意味着提升或移动到更高的位置。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '展示' 意味着以显眼的方式展示某物。"
    },
    {
        id: 3,
        question: "To stay competitive, the company decided to __________ outdated practices and adopt new technologies.",
        chinese_question: "为了保持竞争力，公司决定 __________ 过时的做法并采用新技术。",
        answers: [
                { option: "A", answer: "uphold", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "B", answer: "jettison", chinese_answer: "抛弃", chinese_romanization: "pāoqì" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "cherish", chinese_answer: "珍惜", chinese_romanization: "zhēnxī" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'jettison' used figuratively means to discard or get rid of something unnecessary or burdensome." +
                "<br><br>" +
                "(A) 'uphold' means to maintain or support something." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'cherish' means to hold something dear.",
        chinese_explanation: "(B) '抛弃' 在比喻意义上指丢弃或摆脱不必要或累赘的东西。" +
                "<br><br>" +
                "(A) '支持' 意味着保持或支持某事。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '珍惜' 意味着珍爱某物。"
    },
    {
        id: 4,
        question: "She didn’t want to __________ on their private conversation, so she stayed away.",
        chinese_question: "她不想 __________ 他们的私人谈话，所以她保持距离。",
        answers: [
                { option: "A", answer: "withdraw", chinese_answer: "撤退", chinese_romanization: "chètuì" },
                { option: "B", answer: "obtrude", chinese_answer: "打扰", chinese_romanization: "dǎrǎo" },
                { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "D", answer: "engage", chinese_answer: "参与", chinese_romanization: "cānyù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'obtrude' means to impose oneself or one's ideas on others in an unwelcome way." +
                "<br><br>" +
                "(A) 'withdraw' means to remove or take away." +
                "<br><br>" +
                "(C) 'support' means to bear all or part of the weight of." +
                "<br><br>" +
                "(D) 'engage' means to participate or become involved in.",
        chinese_explanation: "(B) '打扰' 意味着以不受欢迎的方式把自己或自己的想法强加给别人。" +
                "<br><br>" +
                "(A) '撤退' 意味着移除或拿走。" +
                "<br><br>" +
                "(C) '支持' 意味着承担全部或部分重量。" +
                "<br><br>" +
                "(D) '参与' 意味着参与或介入。"
    },
    {
        id: 5,
        question: "In order to finish her thesis, she decided to __________ herself in the library for a week.",
        chinese_question: "为了完成她的论文，她决定在图书馆里 __________ 一周。",
        answers: [
                { option: "A", answer: "cloister", chinese_answer: "隐居", chinese_romanization: "yǐnjū" },
                { option: "B", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "expose", chinese_answer: "暴露", chinese_romanization: "bàolù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'cloister' means to seclude or shut away, especially in a convent or monastery, used figuratively here." +
                "<br><br>" +
                "(B) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'expose' means to make something visible by uncovering it.",
        chinese_explanation: "(A) '隐居' 意味着隔离或关闭，尤其是在修道院中，这里是比喻用法。" +
                "<br><br>" +
                "(B) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '暴露' 意味着通过揭开某物使其可见。"
    },
    {
        id: 6,
        question: "The chef instructed us to __________ the fruit overnight to soften it for the cake.",
        chinese_question: "厨师指示我们将水果在夜间 __________，以使其变软适合做蛋糕。",
        answers: [
                { option: "A", answer: "preserve", chinese_answer: "保存", chinese_romanization: "bǎocún" },
                { option: "B", answer: "macerate", chinese_answer: "浸泡", chinese_romanization: "jìnpào" },
                { option: "C", answer: "dehydrate", chinese_answer: "脱水", chinese_romanization: "tuōshuǐ" },
                { option: "D", answer: "boil", chinese_answer: "煮沸", chinese_romanization: "zhǔfèi" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'macerate' means to soak something to soften it." +
                "<br><br>" +
                "(A) 'preserve' means to maintain in its original state." +
                "<br><br>" +
                "(C) 'dehydrate' means to remove moisture from." +
                "<br><br>" +
                "(D) 'boil' means to heat liquid until it bubbles.",
        chinese_explanation: "(B) '浸泡' 一词意味着浸泡某物以使其变软。" +
                "<br><br>" +
                "(A) '保存' 意味着保持原状。" +
                "<br><br>" +
                "(C) '脱水' 意味着去除水分。" +
                "<br><br>" +
                "(D) '煮沸' 意味着加热液体直至沸腾。"
    },
    {
        id: 7,
    question: "He became __________ with the idea of moving to a tropical island, imagining a life of endless relaxation.",
    chinese_question: "他 __________ 于搬到热带岛屿的想法，幻想着无尽放松的生活。",
    answers: [
        { option: A, answer: "disinterested", chinese_answer: "无兴趣", chinese_romanization: "wú xìngqù" },
        { option: B, answer: "infatuated", chinese_answer: "迷恋", chinese_romanization: "míliàn" },
        { option: C, answer: "repulsed", chinese_answer: "厌恶", chinese_romanization: "yànwù" },
        { option: D, answer: "bored", chinese_answer: "无聊", chinese_romanization: "wúliáo" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'infatuated' means to be inspired with an intense but short-lived passion or admiration." +
        "<br><br>" +
        "(A) 'disinterested' means having no interest in something." +
        "<br><br>" +
        "(C) 'repulsed' means to feel intense distaste." +
        "<br><br>" +
        "(D) 'bored' means to feel weary and uninterested.",
    chinese_explanation: "(B) '迷恋' 一词意味着受到强烈但短暂的激情或钦佩的激励。" +
        "<br><br>" +
        "(A) '无兴趣' 意味着对某事没有兴趣。" +
        "<br><br>" +
        "(C) '厌恶' 意味着感到强烈的不喜欢。" +
        "<br><br>" +
        "(D) '无聊' 意味着感到厌倦和没有兴趣。"
    },
    {
        id: 8,
        question: "The artist’s work __________ the public’s imagination, sparking widespread admiration.",
        chinese_question: "艺术家的作品 __________ 了公众的想象力，引发了广泛的钦佩。",
        answers: [
            { option: "A", answer: "arrested", chinese_answer: "吸引", chinese_romanization: "xīyǐn" },
            { option: "B", answer: "released", chinese_answer: "释放", chinese_romanization: "shìfàng" },
            { option: "C", answer: "questioned", chinese_answer: "询问", chinese_romanization: "xúnwèn" },
            { option: "D", answer: "avoided", chinese_answer: "避免", chinese_romanization: "bìmiǎn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'arrested' means to capture or hold someone's attention." +
            "<br><br>" +
            "(B) 'released' means to set free from confinement or restraint." +
            "<br><br>" +
            "(C) 'questioned' means to ask questions or interrogate." +
            "<br><br>" +
            "(D) 'avoided' means to keep away from or stop oneself from doing something.",
        chinese_explanation: "(A) '吸引' 意味着捕捉或吸引某人的注意力。" +
            "<br><br>" +
            "(B) '释放' 意味着从监禁或约束中释放。" +
            "<br><br>" +
            "(C) '询问' 意味着问问题或审问。" +
            "<br><br>" +
            "(D) '避免' 意味着远离或阻止自己做某事。"
    },
    {
        id: 9,
        question: "The journalist __________ the politician with tough questions, refusing to back down until she got a clear answer.",
        chinese_question: "记者用尖锐的问题 __________ 政客，拒绝退让，直到她得到明确的回答。",
        answers: [
            { option: "A", answer: "avoided", chinese_answer: "避开", chinese_romanization: "bìkāi" },
            { option: "B", answer: "badgered", chinese_answer: "纠缠", chinese_romanization: "jiūchán" },
            { option: "C", answer: "praised", chinese_answer: "赞美", chinese_romanization: "zànměi" },
            { option: "D", answer: "consoled", chinese_answer: "安慰", chinese_romanization: "ānwèi" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'badgered' means repeatedly and annoyingly asked (someone) to do something." +
            "<br><br>" +
            "(A) 'avoided' means kept away from or stopped oneself from doing (something)." +
            "<br><br>" +
            "(C) 'praised' means expressed warm approval or admiration of." +
            "<br><br>" +
            "(D) 'consoled' means comforted (someone) at a time of grief or disappointment.",
        chinese_explanation: "(B) '纠缠' 意味着反复且恼人地要求（某人）做某事。" +
            "<br><br>" +
            "(A) '避开' 意味着远离或阻止自己做（某事）。" +
            "<br><br>" +
            "(C) '赞美' 意味着表达热情的赞同或钦佩。" +
            "<br><br>" +
            "(D) '安慰' 意味着在悲痛或失望时安慰（某人）。"
    },
    {
        id: 10,
        question: "The CEO tended to __________ the board members, ensuring they were always comfortable and satisfied.",
        chinese_question: "首席执行官倾向于 __________ 董事会成员，确保他们总是舒适和满意。",
        answers: [
                { option: "A", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "B", answer: "coddle", chinese_answer: "溺爱", chinese_romanization: "nì'ài" },
                { option: "C", answer: "ignore", chinese_answer: "不理", chinese_romanization: "bùlǐ" },
                { option: "D", answer: "challenge", chinese_answer: "挑战", chinese_romanization: "tiǎozhàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'coddle' means to treat with excessive indulgence and care." +
                "<br><br>" +
                "(A) 'neglect' means to fail to care for properly." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'challenge' means to invite someone to engage in a contest.",
        chinese_explanation: "(B) '溺爱' 意味着过度宠爱和关怀。" +
                "<br><br>" +
                "(A) '忽视' 意味着未能适当照顾。" +
                "<br><br>" +
                "(C) '不理' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '挑战' 意味着邀请某人参与比赛。"
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
