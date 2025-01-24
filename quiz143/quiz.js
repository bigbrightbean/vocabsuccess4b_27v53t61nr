// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "To get the funding, they had to __________ a proposal that impressed the investors.",
    chinese_question: "为了获得资金，他们必须 __________ 出一个让投资者印象深刻的提案。",
    answers: [
        { option: "A", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "B", answer: "contrive", chinese_answer: "设计", chinese_romanization: "shèjì" },
        { option: "C", answer: "ruin", chinese_answer: "毁坏", chinese_romanization: "huǐhuài" },
        { option: "D", answer: "overlook", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'contrive' means to create or bring about by deliberate use of skill and artifice." +
        "<br><br>" +
        "(A) 'neglect' means to fail to care for properly." +
        "<br><br>" +
        "(C) 'ruin' means to cause great and usually irreparable damage or harm to." +
        "<br><br>" +
        "(D) 'overlook' means to fail to notice or consider.",
    chinese_explanation: "(B) '设计' 意味着通过有意识地使用技巧和诡计来创造或实现。" +
        "<br><br>" +
        "(A) '忽视' 意味着未能适当照顾。" +
        "<br><br>" +
        "(C) '毁坏' 意味着造成巨大且通常是无法修复的损害。" +
        "<br><br>" +
        "(D) '忽略' 意味着未能注意到或考虑。"
    },
    {
        id: 2,
    question: "He tended to __________ himself with guilt over past mistakes.",
    chinese_question: "他倾向于用过去的错误 __________ 自己。",
    answers: [
        { option: "A", answer: "flagellate", chinese_answer: "自责", chinese_romanization: "zìzé" },
        { option: "B", answer: "forgive", chinese_answer: "原谅", chinese_romanization: "yuánliàng" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "cherish", chinese_answer: "珍惜", chinese_romanization: "zhēnxī" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'flagellate' means to whip or beat someone, used figuratively here to mean punishing oneself emotionally." +
        "<br><br>" +
        "(B) 'forgive' means to stop feeling angry or resentful toward someone for an offense, flaw, or mistake." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'cherish' means to protect and care for someone lovingly.",
    chinese_explanation: "(A) '自责' 意味着鞭打或击打某人，这里是比喻用法，意思是情感上惩罚自己。" +
        "<br><br>" +
        "(B) '原谅' 意味着不再对某人的过错、缺点或错误感到生气或怨恨。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '珍惜' 意味着爱护和关心某人。"
    },
    {
        id: 3,
        question: "Her career continued to __________ as she gained more recognition for her work.",
        chinese_question: "随着她的工作获得更多认可，她的职业生涯继续 __________。",
        answers: [
            { option: "A", answer: "ascend", chinese_answer: "上升", chinese_romanization: "shàngshēng" },
            { option: "B", answer: "decline", chinese_answer: "下降", chinese_romanization: "xiàjiàng" },
            { option: "C", answer: "stagnate", chinese_answer: "停滞", chinese_romanization: "tíngzhì" },
            { option: "D", answer: "falter", chinese_answer: "衰退", chinese_romanization: "shuāituì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'ascend' means to rise to a higher level or position." +
            "<br><br>" +
            "(B) 'decline' means to become smaller, fewer, or less; decrease." +
            "<br><br>" +
            "(C) 'stagnate' means to cease to flow or move." +
            "<br><br>" +
            "(D) 'falter' means to start to lose strength or momentum.",
        chinese_explanation: "(A) '上升' 意味着上升到更高的水平或职位。" +
            "<br><br>" +
            "(B) '下降' 意味着变小、变少或减少；减少。" +
            "<br><br>" +
            "(C) '停滞' 意味着停止流动或移动。" +
            "<br><br>" +
            "(D) '衰退' 意味着开始失去力量或势头。"
    },
    {
        id: 4,
    question: "New DNA evidence served to __________ the man who had been wrongly imprisoned for years.",
    chinese_question: "新的DNA证据帮助 __________ 那个被错误监禁多年的男子。",
    answers: [
        { option: "A", answer: "exonerate", chinese_answer: "免除", chinese_romanization: "miǎnchú" },
        { option: "B", answer: "condemn", chinese_answer: "谴责", chinese_romanization: "qiǎnzé" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "implicate", chinese_answer: "牵连", chinese_romanization: "qiānlián" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'exonerate' means to absolve someone from blame for a fault or wrongdoing." +
        "<br><br>" +
        "(B) 'condemn' means to express complete disapproval of, typically in public." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'implicate' means to show someone to be involved in a crime.",
    chinese_explanation: "(A) '免除' 意味着使某人免于承担过错或错误的责任。" +
        "<br><br>" +
        "(B) '谴责' 意味着公开表示完全反对。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '牵连' 意味着显示某人参与了犯罪。"
    },
    {
        id: 5,
    question: "His peers __________ his cautious approach to investing, preferring riskier strategies themselves.",
    chinese_question: "他的同龄人 __________ 他谨慎的投资方法，而他们自己更喜欢冒险策略。",
    answers: [
        { option: "A", answer: "praised", chinese_answer: "赞美", chinese_romanization: "zànměi" },
        { option: "B", answer: "contemned", chinese_answer: "蔑视", chinese_romanization: "mièshì" },
        { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "followed", chinese_answer: "遵循", chinese_romanization: "zūnxún" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'contemned' means to treat or regard with contempt." +
        "<br><br>" +
        "(A) 'praised' means to express warm approval or admiration." +
        "<br><br>" +
        "(C) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'followed' means to go or come after a person or thing.",
    chinese_explanation: "(B) '蔑视' 意味着以轻蔑的态度对待或看待。" +
        "<br><br>" +
        "(A) '赞美' 意味着表达热烈的赞同或钦佩。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '遵循' 意味着跟随某人或某物。"
    },
    {
        id: 6,
        question: "Life’s hardships often __________ individuals, teaching them resilience and strength.",
        chinese_question: "生活中的艰难困苦经常 __________ 人们，教他们坚韧和力量。",
        answers: [
                { option: "A", answer: "chasten", chinese_answer: "磨练", chinese_romanization: "móliàn" },
                { option: "B", answer: "weaken", chinese_answer: "削弱", chinese_romanization: "xiāoruò" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "pamper", chinese_answer: "娇惯", chinese_romanization: "jiāoguàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'chasten' means to have a restraining or moderating effect on; to discipline or punish in order to correct." +
                "<br><br>" +
                "(B) 'weaken' means to make or become less strong." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'pamper' means to indulge with every attention, comfort, and kindness; spoil.",
        chinese_explanation: "(A) '磨练' 意味着有抑制或缓和的作用；为了纠正而惩戒或处罚。" +
                "<br><br>" +
                "(B) '削弱' 意味着使变得不那么强。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '娇惯' 意味着以每一种关心、舒适和善意来纵容；宠坏。"
    },
    {
        id: 7,
    question: "He had to __________ himself from the web of lies he had created.",
    chinese_question: "他不得不 __________ 自己编造的谎言网。",
    answers: [
        { option: "A", answer: "disentangle", chinese_answer: "解开", chinese_romanization: "jiěkāi" },
        { option: "B", answer: "weave", chinese_answer: "编织", chinese_romanization: "biānzhī" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "embellish", chinese_answer: "装饰", chinese_romanization: "zhuāngshì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'disentangle' means to free something or someone from an entanglement, used figuratively here." +
        "<br><br>" +
        "(B) 'weave' means to form fabric by interlacing long threads." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'embellish' means to make something more attractive by the addition of decorative details or features.",
    chinese_explanation: "(A) '解开' 意味着将某物或某人从纠缠中解脱出来，这里是比喻用法。" +
        "<br><br>" +
        "(B) '编织' 意味着通过编织长线形成织物。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '装饰' 意味着通过添加装饰细节或特征使某物更有吸引力。"
    },
    {
        id: 8,
    question: "Introducing too many variables can __________ an otherwise straightforward experiment.",
    chinese_question: "引入太多变量会 __________ 原本简单的实验。",
    answers: [
        { option: "A", answer: "complicate", chinese_answer: "复杂化", chinese_romanization: "fùzá huà" },
        { option: "B", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "enhance", chinese_answer: "增强", chinese_romanization: "zēngqiáng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'complicate' means to make something more difficult or confusing, used figuratively here." +
        "<br><br>" +
        "(B) 'simplify' means to make something simpler or easier to do or understand." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'enhance' means to improve the quality, value, or extent of something.",
    chinese_explanation: "(A) '复杂化' 意味着使某事更加困难或令人困惑，这里是比喻用法。" +
        "<br><br>" +
        "(B) '简化' 意味着使某事更简单或更容易做或理解。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '增强' 意味着改善某物的质量、价值或程度。"
    },
    {
        id: 9,
        question: "Despite their initial resistance, the company had to __________ to the new regulations imposed by the government.",
        chinese_question: "尽管起初反对，公司不得不 __________ 政府施加的新法规。",
        answers: [
                { option: "A", answer: "capitulate", chinese_answer: "屈服", chinese_romanization: "qūfú" },
                { option: "B", answer: "protest", chinese_answer: "抗议", chinese_romanization: "kàngyì" },
                { option: "C", answer: "negotiate", chinese_answer: "谈判", chinese_romanization: "tánpàn" },
                { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'capitulate' means to cease to resist an opponent or an unwelcome demand; surrender." +
                "<br><br>" +
                "(B) 'protest' means to express an objection to what someone has said or done." +
                "<br><br>" +
                "(C) 'negotiate' means to try to reach an agreement or compromise by discussion with others." +
                "<br><br>" +
                "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(A) '屈服' 意味着停止抵抗对手或不受欢迎的要求；投降。" +
                "<br><br>" +
                "(B) '抗议' 意味着对某人所说或所做的表示反对。" +
                "<br><br>" +
                "(C) '谈判' 意味着通过与他人讨论试图达成协议或妥协。" +
                "<br><br>" +
                "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 10,
    question: "The company was accused of trying to __________ its competitors through false claims and unethical practices.",
    chinese_question: "该公司被指控试图通过虚假声明和不道德的做法 __________ 其竞争对手。",
    answers: [
        { option: "A", answer: "defame", chinese_answer: "诽谤", chinese_romanization: "fěibàng" },
        { option: "B", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'defame' means to damage the good reputation of someone; to slander or libel, used figuratively here." +
        "<br><br>" +
        "(B) 'assist' means to help or support." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'praise' means to express warm approval or admiration.",
    chinese_explanation: "(A) '诽谤' 意味着损害某人的好名声；诽谤或中伤，这里是比喻用法。" +
        "<br><br>" +
        "(B) '帮助' 意味着提供帮助或支持。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '赞扬' 意味着表达热烈的赞同或钦佩。"
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
