// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The prolonged conflict began to __________ the country's economy, leading to widespread poverty.",
    chinese_question: "长期的冲突开始 __________ 该国的经济，导致了广泛的贫困。",
    answers: [
        { option: "A", answer: "bolster", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "B", answer: "debilitate", chinese_answer: "削弱", chinese_romanization: "xuēruò" },
        { option: "C", answer: "strengthen", chinese_answer: "增强", chinese_romanization: "zēngqiáng" },
        { option: "D", answer: "invigorate", chinese_answer: "激励", chinese_romanization: "jīlì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'debilitate' means to make someone weak and infirm, used figuratively to mean undermine or weaken." +
        "<br><br>" +
        "(A) 'bolster' means to support or strengthen." +
        "<br><br>" +
        "(C) 'strengthen' means to make or become stronger." +
        "<br><br>" +
        "(D) 'invigorate' means to give strength or energy to.",
    chinese_explanation: "(B) '削弱' 意味着使某人虚弱和衰弱，比喻意义上指削弱或削弱。" +
        "<br><br>" +
        "(A) '支持' 意味着支持或加强。" +
        "<br><br>" +
        "(C) '增强' 意味着使或变得更强。" +
        "<br><br>" +
        "(D) '激励' 意味着给予力量或能量。"
    },
    {
        id: 2,
    question: "To understand the root of the problem, they needed to __________ past grievances and misunderstandings.",
    chinese_question: "为了了解问题的根源，他们需要 __________ 过去的怨恨和误解。",
    answers: [
        { option: "A", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐn cáng" },
        { option: "B", answer: "disinter", chinese_answer: "发掘", chinese_romanization: "fā jué" },
        { option: "C", answer: "bury", chinese_answer: "埋葬", chinese_romanization: "mái zàng" },
        { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hū shì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'disinter' used figuratively means to bring to light something that has been forgotten or hidden." +
        "<br><br>" +
        "(A) 'conceal' means to keep from sight or hide." +
        "<br><br>" +
        "(C) 'bury' means to place something in the ground and cover it." +
        "<br><br>" +
        "(D) 'ignore' means to refuse to take notice of or acknowledge.",
    chinese_explanation: "(B) '发掘' 在比喻意义上指将已经遗忘或隐藏的东西揭露出来。" +
        "<br><br>" +
        "(A) '隐藏' 意味着隐瞒或隐藏。" +
        "<br><br>" +
        "(C) '埋葬' 意味着将某物放入地下并覆盖。" +
        "<br><br>" +
        "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 3,
    question: "In her determination to become healthier, she chose to __________ processed foods.",
    chinese_question: "为了变得更健康，她选择 __________ 加工食品。",
    answers: [
        { option: "A", answer: "forswear", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
        { option: "B", answer: "indulge", chinese_answer: "沉迷", chinese_romanization: "chénmí" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "savor", chinese_answer: "享受", chinese_romanization: "xiǎngshòu" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'forswear' means to agree to give up or do without something, used figuratively here." +
        "<br><br>" +
        "(B) 'indulge' means to allow oneself to enjoy the pleasure of." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'savor' means to enjoy something completely.",
    chinese_explanation: "(A) '放弃' 意味着同意放弃或不做某事，这里是比喻用法。" +
        "<br><br>" +
        "(B) '沉迷' 意味着允许自己享受乐趣。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '享受' 意味着完全享受某物。"
    },
    {
        id: 4,
    question: "His ideas were constantly __________ by his colleagues during meetings.",
    chinese_question: "他的想法在会议期间不断被同事 __________。",
    answers: [
        { option: "A", answer: "heckled", chinese_answer: "抨击", chinese_romanization: "pēngjí" },
        { option: "B", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "celebrated", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'heckled' means to be criticized aggressively, used figuratively here." +
        "<br><br>" +
        "(B) 'supported' means to give assistance to." +
        "<br><br>" +
        "(C) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'celebrated' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
    chinese_explanation: "(A) '抨击' 意味着受到激烈的批评，这里是比喻用法。" +
        "<br><br>" +
        "(B) '支持' 意味着给予帮助。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。"
    },
    {
        id: 5,
        question: "During the discussion, he often __________ his own opinions, making it difficult to follow the original topic.",
        chinese_question: "在讨论中，他经常 __________ 自己的意见，使得难以跟随原来的话题。",
        answers: [
                { option: "A", answer: "interpolated", chinese_answer: "插入", chinese_romanization: "chārù" },
                { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "D", answer: "celebrated", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'interpolated' means to insert something, often words, into a text or conversation." +
                "<br><br>" +
                "(B) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(C) 'supported' means to give assistance to." +
                "<br><br>" +
                "(D) 'celebrated' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
        chinese_explanation: "(A) '插入' 意味着将某物插入文本或对话中。" +
                "<br><br>" +
                "(B) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(C) '支持' 意味着给予帮助。" +
                "<br><br>" +
                "(D) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。"
    },
    {
        id: 6,
        question: "No matter how good the service was, he always had something to __________ about at the restaurant.",
        chinese_question: "无论服务有多好，他总是有 __________ 的东西在餐馆抱怨。",
        answers: [
                { option: "A", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
                { option: "B", answer: "kvetch", chinese_answer: "抱怨", chinese_romanization: "bàoyuàn" },
                { option: "C", answer: "enjoy", chinese_answer: "享受", chinese_romanization: "xiǎngshòu" },
                { option: "D", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'kvetch' used figuratively means to complain persistently." +
                "<br><br>" +
                "(A) 'praise' means to express warm approval or admiration." +
                "<br><br>" +
                "(C) 'enjoy' means to take delight or pleasure in something." +
                "<br><br>" +
                "(D) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
        chinese_explanation: "(B) '抱怨' 在比喻意义上指不断抱怨。" +
                "<br><br>" +
                "(A) '赞扬' 意味着表达热烈的认可或钦佩。" +
                "<br><br>" +
                "(C) '享受' 意味着在某事中获得乐趣或喜悦。" +
                "<br><br>" +
                "(D) '庆祝' 意味着通过社交聚会或愉快的活动来纪念重要或快乐的一天或事件。"
    },
    {
        id: 7,
        question: "The company's efforts to improve working conditions were intended to __________ employee dissatisfaction.",
        chinese_question: "公司改善工作条件的努力旨在 __________ 员工的不满情绪。",
        answers: [
                { option: "A", answer: "exacerbate", chinese_answer: "加剧", chinese_romanization: "jiājù" },
                { option: "B", answer: "mollify", chinese_answer: "缓解", chinese_romanization: "huǎnjiě" },
                { option: "C", answer: "prolong", chinese_answer: "延长", chinese_romanization: "yáncháng" },
                { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'mollify' means to reduce the severity of someone's feelings or dissatisfaction." +
                "<br><br>" +
                "(A) 'exacerbate' means to make something worse." +
                "<br><br>" +
                "(C) 'prolong' means to extend the duration of." +
                "<br><br>" +
                "(D) 'ignore' means to refuse to take notice of.",
        chinese_explanation: "(B) '缓解' 意味着减轻某人的感受或不满的严重性。" +
                "<br><br>" +
                "(A) '加剧' 意味着使某事变得更糟。" +
                "<br><br>" +
                "(C) '延长' 意味着延长持续时间。" +
                "<br><br>" +
                "(D) '忽视' 意味着拒绝注意。"

    },
    {
        id: 8,
        question: "The company's reluctance to adopt new technologies has caused its processes to __________.",
        chinese_question: "公司不愿采用新技术，导致其流程 __________ 。",
        answers: [
                { option: "A", answer: "modernize", chinese_answer: "现代化", chinese_romanization: "xiàndàihuà" },
                { option: "B", answer: "ossify", chinese_answer: "僵化", chinese_romanization: "jiānghuà" },
                { option: "C", answer: "streamline", chinese_answer: "流线化", chinese_romanization: "liúxiànhuà" },
                { option: "D", answer: "update", chinese_answer: "更新", chinese_romanization: "gēngxīn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'ossify' means to become rigid or inflexible in habits or attitudes." +
                "<br><br>" +
                "(A) 'modernize' means to make something more current or suitable for use." +
                "<br><br>" +
                "(C) 'streamline' means to make more efficient." +
                "<br><br>" +
                "(D) 'update' means to bring something up to date.",
        chinese_explanation: "(B) '僵化' 意味着在习惯或态度上变得僵硬或不灵活。" +
                "<br><br>" +
                "(A) '现代化' 意味着使某物更现代或更适合使用。" +
                "<br><br>" +
                "(C) '流线化' 意味着使更高效。" +
                "<br><br>" +
                "(D) '更新' 意味着使某物变得最新。"
    },
    {
        id: 9,
        question: "They hoped to __________ their financial losses by cutting unnecessary expenses and increasing revenue streams.",
        chinese_question: "他们希望通过削减不必要的开支和增加收入来源来 __________ 他们的财务损失。",
        answers: [
                { option: "A", answer: "magnify", chinese_answer: "放大", chinese_romanization: "fàngdà" },
                { option: "B", answer: "recuperate", chinese_answer: "弥补", chinese_romanization: "míbǔ" },
                { option: "C", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "exacerbate", chinese_answer: "加剧", chinese_romanization: "jiājù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'recuperate' means to recover from illness or exertion, here used figuratively to mean recovering losses." +
                "<br><br>" +
                "(A) 'magnify' means to make something appear larger than it is, especially with a lens or microscope." +
                "<br><br>" +
                "(C) 'neglect' means to fail to care for properly." +
                "<br><br>" +
                "(D) 'exacerbate' means to make a problem, bad situation, or negative feeling worse.",
        chinese_explanation: "(B) '弥补' 在这里是比喻意义，指恢复损失。" +
                "<br><br>" +
                "(A) '放大' 意味着使某物看起来比实际更大，尤其是通过镜头或显微镜。" +
                "<br><br>" +
                "(C) '忽视' 意味着未能妥善照顾。" +
                "<br><br>" +
                "(D) '加剧' 意味着使问题、糟糕的情况或负面情绪变得更糟。"
    },
    {
        id: 10,
    question: "As a visionary leader, she could __________ a more inclusive society where everyone has equal opportunities.",
    chinese_question: "作为一个有远见的领导者，她可以 __________ 一个更包容的社会，在那里每个人都有平等的机会。",
    answers: [
        { option: A, answer: "undermine", chinese_answer: "破坏", chinese_romanization: "pòhuài" },
        { option: B, answer: "envisage", chinese_answer: "设想", chinese_romanization: "shèxiǎng" },
        { option: C, answer: "overlook", chinese_answer: "忽视", chinese_romanization: "hūlüè" },
        { option: D, answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'envisage' figuratively means to imagine or visualize." +
        "<br><br>" +
        "(A) 'undermine' means to weaken." +
        "<br><br>" +
        "(C) 'overlook' means to fail to notice." +
        "<br><br>" +
        "(D) 'reject' means to dismiss as inadequate or inappropriate.",
    chinese_explanation: "(B) '设想' 一词在比喻上意味着想象或可视化。" +
        "<br><br>" +
        "(A) '破坏' 意味着削弱。" +
        "<br><br>" +
        "(C) '忽视' 意味着未能注意到。" +
        "<br><br>" +
        "(D) '拒绝' 意味着认为不充分或不合适而驳回。"
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
