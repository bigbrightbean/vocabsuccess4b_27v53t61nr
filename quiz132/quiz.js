// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The mentor sought to __________ his mentee of the illusion that success comes without effort.",
    chinese_question: "导师试图 __________ 门徒那种认为成功不需要努力的错觉。",
    answers: [
        { option: "A", answer: "disabuse", chinese_answer: "纠正", chinese_romanization: "jiūzhèng" },
        { option: "B", answer: "instill", chinese_answer: "灌输", chinese_romanization: "guànshū" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "confirm", chinese_answer: "确认", chinese_romanization: "quèrèn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'disabuse' means to persuade someone that an idea or belief is mistaken, used figuratively here." +
        "<br><br>" +
        "(B) 'instill' means to gradually but firmly establish an idea or attitude in a person's mind." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'confirm' means to establish the truth or correctness of something.",
    chinese_explanation: "(A) '纠正' 意味着让某人相信一个观点或信念是错误的，这里是比喻用法。" +
        "<br><br>" +
        "(B) '灌输' 意味着逐渐但坚定地在某人的脑海中建立一个想法或态度。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '确认' 意味着确定某事的真实性或正确性。"
    },
    {
        id: 2,
    question: "She wished she could __________ the painful memories from her mind.",
    chinese_question: "她希望能够 __________ 脑海中痛苦的回忆。",
    answers: [
        { option: "A", answer: "retain", chinese_answer: "保留", chinese_romanization: "bǎoliú" },
        { option: "B", answer: "efface", chinese_answer: "抹去", chinese_romanization: "mǒqù" },
        { option: "C", answer: "cherish", chinese_answer: "珍惜", chinese_romanization: "zhēnxī" },
        { option: "D", answer: "remember", chinese_answer: "记住", chinese_romanization: "jìzhù" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'efface' used figuratively means to erase or remove something from memory." +
        "<br><br>" +
        "(A) 'retain' means to keep possession of." +
        "<br><br>" +
        "(C) 'cherish' means to protect and care for someone or something lovingly." +
        "<br><br>" +
        "(D) 'remember' means to recall to the mind by an act or effort of memory.",
    chinese_explanation: "(B) “抹去” 在比喻意义上指从记忆中擦除或去除某物。" +
        "<br><br>" +
        "(A) '保留' 意味着保有。" +
        "<br><br>" +
        "(C) '珍惜' 意味着保护和关爱某人或某物。" +
        "<br><br>" +
        "(D) '记住' 意味着通过记忆行为或努力回忆起来。"
    },
    {
        id: 3,
        question: "His experiences in the field __________ him with a deep understanding of the subject.",
        chinese_question: "他在该领域的经验 __________ 他对该学科有深刻的理解。",
        answers: [
                { option: "A", answer: "endowed", chinese_answer: "赋予", chinese_romanization: "fùyǔ" },
                { option: "B", answer: "limited", chinese_answer: "限制", chinese_romanization: "xiànzhì" },
                { option: "C", answer: "confused", chinese_answer: "迷惑", chinese_romanization: "míhuò" },
                { option: "D", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'endowed' figuratively means to provide with a quality, ability, or asset." +
                "<br><br>" +
                "(B) 'limited' means to put a limit on; keep under control." +
                "<br><br>" +
                "(C) 'confused' means to make (someone) unable to think clearly." +
                "<br><br>" +
                "(D) 'ignored' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(A) '赋予' 在此语境下比喻提供一种品质、能力或资产。" +
                "<br><br>" +
                "(B) '限制' 意味着对某物进行限制；控制。" +
                "<br><br>" +
                "(C) '迷惑' 意味着使某人无法清晰思考。" +
                "<br><br>" +
                "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 4,
        question: "She was not afraid to __________ her ambitions, even if they seemed far-fetched.",
        chinese_question: "她不怕 __________ 自己的野心，即使它们看起来遥不可及。",
        answers: [
                { option: "A", answer: "avow", chinese_answer: "坦白", chinese_romanization: "tǎnbái" },
                { option: "B", answer: "deny", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "suppress", chinese_answer: "压制", chinese_romanization: "yāzhì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'avow' means to assert or confess openly." +
                "<br><br>" +
                "(B) 'deny' means to state that something is not true." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'suppress' means to prevent the development, action, or expression of something.",
        chinese_explanation: "(A) '坦白' 意味着公开断言或承认。" +
                "<br><br>" +
                "(B) '否认' 意味着声明某事不真实。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '压制' 意味着阻止某物的发展、行动或表达。"
    },
    {
        id: 5,
    question: "Some people believe that allowing commercial activities in the park would __________ its natural beauty.",
    chinese_question: "有些人认为允许在公园内进行商业活动会 __________ 它的自然美景。",
    answers: [
        { option: "A", answer: "desecrate", chinese_answer: "亵渎", chinese_romanization: "xièdú" },
        { option: "B", answer: "protect", chinese_answer: "保护", chinese_romanization: "bǎohù" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'desecrate' means to treat a sacred place or thing with violent disrespect; to violate, used figuratively here." +
        "<br><br>" +
        "(B) 'protect' means to keep safe from harm or injury." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'support' means to bear all or part of the weight of something; to hold up.",
    chinese_explanation: "(A) '亵渎' 意味着用暴力的不敬对待一个神圣的地方或事物；亵渎，这里是比喻用法。" +
        "<br><br>" +
        "(B) '保护' 意味着使免受伤害或伤害。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '支持' 意味着承担某物的全部或部分重量；支撑。"
    },
    {
        id: 6,
        question: "The company's new customer service policies were designed to __________ customer complaints more effectively.",
        chinese_question: "公司的新客户服务政策旨在更有效地 __________ 客户投诉。",
        answers: [
                { option: "A", answer: "assuage", chinese_answer: "缓解", chinese_romanization: "huǎnjiě" },
                { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "exacerbate", chinese_answer: "加剧", chinese_romanization: "jiājù" },
                { option: "D", answer: "dismiss", chinese_answer: "驳回", chinese_romanization: "bóhuí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'assuage' means to make an unpleasant feeling less intense." +
                "<br><br>" +
                "(B) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(C) 'exacerbate' means to make a problem, bad situation, or negative feeling worse." +
                "<br><br>" +
                "(D) 'dismiss' means to decide that something or someone is not important and not worth considering.",
        chinese_explanation: "(A) '缓解' 意味着使不愉快的感觉变得不那么强烈。" +
                "<br><br>" +
                "(B) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(C) '加剧' 意味着使问题、糟糕的情况或负面情绪变得更糟。" +
                "<br><br>" +
                "(D) '驳回' 意味着决定某事或某人不重要且不值得考虑。"
    },
    {
        id: 7,
        question: "His efforts to __________ the situation only made it worse, as he failed to address the root cause.",
        chinese_question: "他试图 __________ 情况的努力只让事情变得更糟，因为他没有解决根本原因。",
        answers: [
                { option: "A", answer: "palliate", chinese_answer: "缓解", chinese_romanization: "huǎnjiě" },
                { option: "B", answer: "exacerbate", chinese_answer: "加剧", chinese_romanization: "jiājù" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "intensify", chinese_answer: "强化", chinese_romanization: "qiánghuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'palliate' means to make less severe or unpleasant without removing the cause." +
                "<br><br>" +
                "(B) 'exacerbate' means to make a problem, bad situation, or negative feeling worse." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'intensify' means to become or make more intense.",
        chinese_explanation: "(A) '缓解'一词意味着在不消除原因的情况下减轻严重性或不愉快。" +
                "<br><br>" +
                "(B) '加剧' 意味着使问题、糟糕的情况或负面情绪变得更糟。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '强化' 意味着变得或使更强烈。"
    },
    {
        id: 8,
    question: "The intense competition between the two companies began to __________ their business relationship.",
    chinese_question: "两家公司之间的激烈竞争开始 __________ 他们的业务关系。",
    answers: [
        { option: "A", answer: "fray", chinese_answer: "紧张", chinese_romanization: "jǐnzhāng" },
        { option: "B", answer: "strengthen", chinese_answer: "加强", chinese_romanization: "jiāqiáng" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "protect", chinese_answer: "保护", chinese_romanization: "bǎohù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'fray' means to strain or cause stress, used figuratively here." +
        "<br><br>" +
        "(B) 'strengthen' means to make or become stronger." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'protect' means to keep safe from harm or injury.",
    chinese_explanation: "(A) '紧张' 意味着使关系变得紧张或有压力，这里是比喻用法。" +
        "<br><br>" +
        "(B) '加强' 意味着使某物更强。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '保护' 意味着保持安全免受伤害或损害。"
    },
    {
        id: 9,
        question: "The experience of failure can __________ even the most confident individuals, making them more humble.",
        chinese_question: "失败的经历可以 __________ 即使是最自信的人，使他们更加谦逊。",
        answers: [
                { option: "A", answer: "chasten", chinese_answer: "磨练", chinese_romanization: "móliàn" },
                { option: "B", answer: "embolden", chinese_answer: "鼓舞", chinese_romanization: "gǔwǔ" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'chasten' means to have a restraining or moderating effect on; to discipline or punish in order to correct." +
                "<br><br>" +
                "(B) 'embolden' means to give someone the courage or confidence to do something." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
        chinese_explanation: "(A) '磨练' 意味着有抑制或缓和的作用；为了纠正而惩戒或处罚。" +
                "<br><br>" +
                "(B) '鼓舞' 意味着给予某人勇气或信心去做某事。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。"
    },
    {
        id: 10,
    question: "To cultivate a positive mindset, she made a conscious effort to __________ pessimistic thoughts.",
    chinese_question: "为了培养积极的心态，她有意识地 __________ 悲观的想法。",
    answers: [
        { option: "A", answer: "eschew", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
        { option: "B", answer: "entertain", chinese_answer: "考虑", chinese_romanization: "kǎolǜ" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "foster", chinese_answer: "培养", chinese_romanization: "péiyǎng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'eschew' means to deliberately avoid or abstain from, used figuratively here." +
        "<br><br>" +
        "(B) 'entertain' means to consider or allow oneself to think about." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'foster' means to encourage the development of something.",
    chinese_explanation: "(A) '避免' 意味着故意避免或戒绝，这里是比喻用法。" +
        "<br><br>" +
        "(B) '考虑' 意味着思考或允许自己考虑。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '培养' 意味着鼓励某事的发展。"
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
