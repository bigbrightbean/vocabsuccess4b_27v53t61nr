// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her determination and hard work helped her __________ a successful career.",
        chinese_question: "她的决心和努力帮助她 __________ 了一条成功的职业道路。",
        answers: [
                { option: "A", answer: "chisel", chinese_answer: "开创", chinese_romanization: "kāichuàng" },
                { option: "B", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
                { option: "C", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'chisel' means to shape or carve out a path or career through effort, often used figuratively." +
                "<br><br>" +
                "(B) 'avoid' means to keep away from or stop oneself from doing something." +
                "<br><br>" +
                "(C) 'neglect' means to fail to care for properly." +
                "<br><br>" +
                "(D) 'simplify' means to make something simpler or easier to do or understand.",
        chinese_explanation: "(A) '开创' 意味着通过努力塑造或开创一条道路或职业，通常用作比喻。" +
                "<br><br>" +
                "(B) '避免' 意味着远离或阻止自己做某事。" +
                "<br><br>" +
                "(C) '忽视' 意味着未能适当照顾。" +
                "<br><br>" +
                "(D) '简化' 意味着使某事更简单或更容易做或理解。"
    },
    {
        id: 2,
    question: "The politician's words would __________ the truth, making it hard to understand his real intentions.",
    chinese_question: "这位政治家的言辞会 __________ 事实，使人难以理解他的真实意图。",
    answers: [
        { option: "A", answer: "clarify", chinese_answer: "澄清", chinese_romanization: "chéngqīng" },
        { option: "B", answer: "contort", chinese_answer: "扭曲", chinese_romanization: "niǔqū" },
        { option: "C", answer: "reveal", chinese_answer: "揭示", chinese_romanization: "jiēshì" },
        { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'contort' means to twist or bend out of its normal shape, used figuratively to mean misrepresent or distort." +
        "<br><br>" +
        "(A) 'clarify' means to make a statement or situation less confused and more comprehensible." +
        "<br><br>" +
        "(C) 'reveal' means to make known to others." +
        "<br><br>" +
        "(D) 'ignore' means to refuse to take notice of or acknowledge.",
    chinese_explanation: "(B) '扭曲' 意味着将某物扭曲或弯曲至其正常形状之外，比喻意义上指歪曲或扭曲事实。" +
        "<br><br>" +
        "(A) '澄清' 意味着使陈述或情况变得不那么混乱、更易理解。" +
        "<br><br>" +
        "(C) '揭示' 意味着让别人知道。" +
        "<br><br>" +
        "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 3,
    question: "Authorities had to __________ the body to conduct a thorough autopsy.",
    chinese_question: "当局不得不 __________ 尸体以进行彻底的验尸。",
    answers: [
        { option: "A", answer: "bury", chinese_answer: "埋葬", chinese_romanization: "mái zàng" },
        { option: "B", answer: "disinter", chinese_answer: "发掘", chinese_romanization: "fā jué" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hū shì" },
        { option: "D", answer: "preserve", chinese_answer: "保存", chinese_romanization: "bǎo cún" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'disinter' means to dig up something that has been buried, especially a body." +
        "<br><br>" +
        "(A) 'bury' means to place something in the ground and cover it." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'preserve' means to maintain something in its original or existing state.",
    chinese_explanation: "(B) '发掘' 意味着挖出已经埋葬的东西，尤其是尸体。" +
        "<br><br>" +
        "(A) '埋葬' 意味着将某物放入地下并覆盖。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '保存' 意味着维持某物的原始或现有状态。"
    },
    {
        id: 4,
    question: "She chose to __________ the values of honesty and integrity in her personal and professional life.",
    chinese_question: "她选择在个人和职业生活中 __________ 诚实和正直的价值观。",
    answers: [
        { option: "A", answer: "undermine", chinese_answer: "破坏", chinese_romanization: "pòhuài" },
        { option: "B", answer: "espouse", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "C", answer: "contradict", chinese_answer: "反驳", chinese_romanization: "fǎnbó" },
        { option: "D", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'espouse' means to adopt or support a cause, belief, or way of life." +
        "<br><br>" +
        "(A) 'undermine' means to damage or weaken someone or something gradually." +
        "<br><br>" +
        "(C) 'contradict' means to assert the opposite of a statement made by someone." +
        "<br><br>" +
        "(D) 'conceal' means to hide or keep something secret.",
    chinese_explanation: "(B) '支持' 意味着采用或支持某个事业、信仰或生活方式。" +
        "<br><br>" +
        "(A) '破坏' 意味着逐渐损害或削弱某人或某事。" +
        "<br><br>" +
        "(C) '反驳' 意味着断言与某人的陈述相反的内容。" +
        "<br><br>" +
        "(D) '隐藏' 意味着隐藏或保守秘密。"
    },
    {
        id: 5,
        question: "The artist felt __________ by societal expectations and longed to express himself freely.",
        chinese_question: "这位艺术家感到被社会期望 __________ ，渴望自由表达自己。",
        answers: [
                { option: "A", answer: "immured", chinese_answer: "囚禁", chinese_romanization: "qiújìn" },
                { option: "B", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "celebrated", chinese_answer: "受人赞赏", chinese_romanization: "shòu rén zànshǎng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'immured' means to be enclosed or confined, often against one's will." +
                "<br><br>" +
                "(B) 'supported' means to give assistance to." +
                "<br><br>" +
                "(C) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'celebrated' means greatly admired; renowned.",
        chinese_explanation: "(A) '囚禁' 意味着被关押或禁闭，通常是违背个人意愿的。" +
                "<br><br>" +
                "(B) '支持' 意味着给予帮助。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '受人赞赏' 意味着被高度钦佩；著名。"
    },
    {
        id: 6,
    question: "To avoid controversy, the author decided to __________ certain contentious points from the article.",
    chinese_question: "为了避免争议，作者决定从文章中 __________ 某些有争议的点。",
    answers: [
        { option: "A", answer: "elide", chinese_answer: "省略", chinese_romanization: "shěnglüè" },
        { option: "B", answer: "highlight", chinese_answer: "突出", chinese_romanization: "tūchū" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "clarify", chinese_answer: "澄清", chinese_romanization: "chéngqīng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'elide' means to omit or leave out, used figuratively here." +
        "<br><br>" +
        "(B) 'highlight' means to emphasize or make prominent." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'clarify' means to make a statement or situation less confused and more comprehensible.",
    chinese_explanation: "(A) '省略' 意味着省略或遗漏，这里是比喻用法。" +
        "<br><br>" +
        "(B) '突出' 意味着强调或使显著。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '澄清' 意味着使陈述或情况变得更少困惑，更容易理解。"
    },
    {
        id: 7,
        question: "The clever lawyer managed to __________ a confession from the reluctant witness.",
        chinese_question: "聪明的律师设法从不情愿的证人那里 __________ 出了供词。",
        answers: [
                { option: "A", answer: "chisel", chinese_answer: "巧取", chinese_romanization: "qiǎo qǔ" },
                { option: "B", answer: "protect", chinese_answer: "保护", chinese_romanization: "bǎohù" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "clarify", chinese_answer: "澄清", chinese_romanization: "chéngqīng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'chisel' means to obtain something through clever or deceitful means, often used figuratively." +
                "<br><br>" +
                "(B) 'protect' means to keep safe from harm or injury." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'clarify' means to make a statement or situation less confused and more comprehensible.",
        chinese_explanation: "(A) '巧取' 意味着通过巧妙或欺骗性的方法获得某物，通常用作比喻。" +
                "<br><br>" +
                "(B) '保护' 意味着使免受伤害或损害。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '澄清' 意味着使声明或情况不再混乱并更容易理解。"
    },
    {
        id: 8,
        question: "Over time, the group’s shared experiences began to __________ into a strong bond of friendship.",
        chinese_question: "随着时间的推移，团队的共同经历开始 __________ 成为牢固的友谊纽带。",
        answers: [
                { option: "A", answer: "dissolve", chinese_answer: "溶解", chinese_romanization: "róngjiě" },
                { option: "B", answer: "coagulate", chinese_answer: "凝聚", chinese_romanization: "níngjù" },
                { option: "C", answer: "evaporate", chinese_answer: "蒸发", chinese_romanization: "zhēngfā" },
                { option: "D", answer: "dilute", chinese_answer: "稀释", chinese_romanization: "xīshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'coagulate' figuratively means to come together to form a whole or a unified mass." +
                "<br><br>" +
                "(A) 'dissolve' means to disappear or cause to disappear." +
                "<br><br>" +
                "(C) 'evaporate' means to cease to exist." +
                "<br><br>" +
                "(D) 'dilute' means to weaken by adding something else.",
        chinese_explanation: "(B) '凝聚' 在比喻意义上意味着结合在一起形成一个整体或一个统一的整体。" +
                "<br><br>" +
                "(A) '溶解' 意味着消失或使消失。" +
                "<br><br>" +
                "(C) '蒸发' 意味着不再存在。" +
                "<br><br>" +
                "(D) '稀释' 意味着通过添加其他东西来减弱。"
    },
    {
        id: 9,
        question: "The artist decided to __________ herself in her studio until her masterpiece was complete.",
        chinese_question: "艺术家决定 __________ 在她的工作室中，直到她的杰作完成。",
        answers: [
                { option: "A", answer: "cloister", chinese_answer: "隐居", chinese_romanization: "yǐnjū" },
                { option: "B", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūlüè" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'cloister' means to seclude or shut away, especially in a convent or monastery." +
                "<br><br>" +
                "(B) 'neglect' means to fail to care for properly." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'simplify' means to make something simpler or easier to do or understand.",
        chinese_explanation: "(A) '隐居' 意味着隔离或关闭，尤其是在修道院中。" +
                "<br><br>" +
                "(B) '忽视' 意味着未能适当照顾。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '简化' 意味着使某事更简单或更容易做或理解。"
    },
    {
        id: 10,
        question: "The betrayal by his closest friend __________ his soul with anguish.",
        chinese_question: "他最亲密朋友的背叛让他的灵魂充满了痛苦，仿佛被 __________ 。",
        answers: [
                { option: "A", answer: "impaled", chinese_answer: "刺穿", chinese_romanization: "cìchuān" },
                { option: "B", answer: "healed", chinese_answer: "治愈", chinese_romanization: "zhìyù" },
                { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'impaled' means to pierce or transfix with a sharp instrument, used figuratively here." +
                "<br><br>" +
                "(B) 'healed' means to make or become sound or healthy again." +
                "<br><br>" +
                "(C) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'supported' means to give assistance to.",
        chinese_explanation: "(A) '刺穿' 意味着用锋利的工具刺穿或穿透，这里是比喻用法。" +
                "<br><br>" +
                "(B) '治愈' 意味着使某物或某人恢复健康。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '支持' 意味着给予帮助。"
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
