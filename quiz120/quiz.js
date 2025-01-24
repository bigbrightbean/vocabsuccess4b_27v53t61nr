// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "In times of crisis, it's important to __________ to your family and support one another.",
        chinese_question: "在危机时刻，坚持团结并互相支持非常重要。",
        answers: [
                { option: "A", answer: "cleave", chinese_answer: "坚守", chinese_romanization: "jiānshǒu" },
                { option: "B", answer: "separate", chinese_answer: "分离", chinese_romanization: "fēnlí" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "weaken", chinese_answer: "削弱", chinese_romanization: "xiāoruò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'cleave' means to adhere strongly to a particular pursuit or belief, or to stick closely to something." +
                "<br><br>" +
                "(B) 'separate' means to cause to move or be apart." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'weaken' means to make or become less strong.",
        chinese_explanation: "(A) '坚守' 意味着坚决追求或信奉某个信念，或紧密依附于某物。" +
                "<br><br>" +
                "(B) '分离' 意味着使某物移动或分开。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '削弱' 意味着使某物变得不那么强。"
    },
    {
        id: 2,
        question: "The politician began to __________ his achievements during the campaign speech.",
        chinese_question: "政治家在竞选演讲中开始 __________ 他的成就。",
        answers: [
                { option: "A", answer: "brandish", chinese_answer: "炫耀", chinese_romanization: "xuànyào" },
                { option: "B", answer: "hide", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "minimize", chinese_answer: "最小化", chinese_romanization: "zuìxiǎo huà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'brandish' means to display something ostentatiously, especially in order to gain attention." +
                "<br><br>" +
                "(B) 'hide' means to put or keep out of sight." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'minimize' means to reduce something to the smallest possible amount or degree.",
        chinese_explanation: "(A) '炫耀' 意味着夸耀地展示某物，特别是为了吸引注意。" +
                "<br><br>" +
                "(B) '隐藏' 意味着使某物不被看到。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '最小化' 意味着将某物减少到最小可能数量或程度。"
    },
    {
        id: 3,
    question: "He used his column to __________ against corruption in the government, calling for transparency and accountability.",
    chinese_question: "他利用自己的专栏 __________ 政府中的腐败，呼吁透明和问责。",
    answers: [
        { option: A, answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zānyáng" },
        { option: B, answer: "inveigh", chinese_answer: "抨击", chinese_romanization: "pēngjī" },
        { option: C, answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
        { option: D, answer: "dismiss", chinese_answer: "驳回", chinese_romanization: "bóhuí" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'inveigh' means to speak or write about something with great hostility." +
        "<br><br>" +
        "(A) 'praise' means to express warm approval or admiration." +
        "<br><br>" +
        "(C) 'celebrate' means to acknowledge a significant or happy event." +
        "<br><br>" +
        "(D) 'dismiss' means to order or allow to leave; send away.",
    chinese_explanation: "(B) '抨击' 意味着对某事物进行强烈的批评。" +
        "<br><br>" +
        "(A) '赞扬' 意味着表达热情的赞同或钦佩。" +
        "<br><br>" +
        "(C) '庆祝' 意味着承认重要或愉快的事件。" +
        "<br><br>" +
        "(D) '驳回' 意味着命令或允许离开；送走。"
    },
    {
        id: 4,
        question: "She made every effort to __________ herself with the influential members of the community.",
        chinese_question: "她竭尽全力 __________ 自己与社区有影响力的成员的关系。",
        answers: [
                { option: "A", answer: "offend", chinese_answer: "冒犯", chinese_romanization: "màofàn" },
                { option: "B", answer: "ingratiate", chinese_answer: "讨好", chinese_romanization: "tǎohǎo" },
                { option: "C", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
                { option: "D", answer: "oppose", chinese_answer: "反对", chinese_romanization: "fǎnduì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'ingratiate' used figuratively means to gain favor or approval by deliberate efforts." +
                "<br><br>" +
                "(A) 'offend' means to cause someone to feel upset, annoyed, or resentful." +
                "<br><br>" +
                "(C) 'avoid' means to keep away from or stop oneself from doing something." +
                "<br><br>" +
                "(D) 'oppose' means to disapprove of and attempt to prevent, especially by argument.",
        chinese_explanation: "(B) '讨好' 在比喻意义上指通过刻意的努力获得某人的喜欢或认可。" +
                "<br><br>" +
                "(A) '冒犯' 意味着使某人感到不安、恼怒或怨恨。" +
                "<br><br>" +
                "(C) '避免' 意味着避开或阻止自己做某事。" +
                "<br><br>" +
                "(D) '反对' 意味着不赞成并试图阻止，尤其是通过争论。"
    },
    {
        id: 5,
    question: "After realizing the harm he had caused, he was filled with __________.",
    chinese_question: "意识到自己造成的伤害后，他充满了 __________。",
    answers: [
        { option: "A", answer: "compunction", chinese_answer: "内疚", chinese_romanization: "nèijiù" },
        { option: "B", answer: "joy", chinese_answer: "喜悦", chinese_romanization: "xǐyuè" },
        { option: "C", answer: "ignorance", chinese_answer: "无知", chinese_romanization: "wúzhī" },
        { option: "D", answer: "pride", chinese_answer: "自豪", chinese_romanization: "zìháo" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'compunction' means a feeling of guilt or moral scruple that prevents or follows the doing of something bad." +
        "<br><br>" +
        "(B) 'joy' means a feeling of great pleasure and happiness." +
        "<br><br>" +
        "(C) 'ignorance' means lack of knowledge or information." +
        "<br><br>" +
        "(D) 'pride' means a feeling of deep pleasure or satisfaction derived from one's own achievements.",
    chinese_explanation: "(A) '内疚' 意味着一种内疚感或道德上的不安，阻止或跟随做坏事之后。" +
        "<br><br>" +
        "(B) '喜悦' 意味着极大的快乐和幸福。" +
        "<br><br>" +
        "(C) '无知' 意味着缺乏知识或信息。" +
        "<br><br>" +
        "(D) '自豪' 意味着源于自己成就的深深的喜悦或满足感。"
    },
    {
        id: 6,
        question: "He managed to __________ his way into the exclusive party by complimenting the host excessively.",
        chinese_question: "他通过过分恭维主人 __________ 进入了这个高级聚会。",
        answers: [
                { option: "A", answer: "offend", chinese_answer: "冒犯", chinese_romanization: "màofàn" },
                { option: "B", answer: "inveigle", chinese_answer: "哄骗", chinese_romanization: "hǒngpiàn" },
                { option: "C", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
                { option: "D", answer: "hinder", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'inveigle' means to persuade someone to do something by means of deception or flattery." +
                "<br><br>" +
                "(A) 'offend' means to cause someone to feel upset, annoyed, or resentful." +
                "<br><br>" +
                "(C) 'avoid' means to keep away from or stop oneself from doing something." +
                "<br><br>" +
                "(D) 'hinder' means to make it difficult for someone to do something or for something to happen.",
        chinese_explanation: "(B) '哄骗' 意味着通过欺骗或奉承来劝说某人做某事。" +
                "<br><br>" +
                "(A) '冒犯' 意味着使某人感到不安、恼怒或怨恨。" +
                "<br><br>" +
                "(C) '避免' 意味着避开或阻止自己做某事。" +
                "<br><br>" +
                "(D) '阻碍' 意味着使某人做某事或某事发生变得困难。"
    },
    {
        id: 7,
        question: "Years of difficult experiences had begun to __________ his once optimistic outlook on life.",
        chinese_question: "多年的艰难经历开始 __________ 他曾经乐观的生活观。",
        answers: [
                { option: "A", answer: "abrade", chinese_answer: "磨损", chinese_romanization: "mósǔn" },
                { option: "B", answer: "restore", chinese_answer: "恢复", chinese_romanization: "huīfù" },
                { option: "C", answer: "brighten", chinese_answer: "使明亮", chinese_romanization: "shǐ míngliàng" },
                { option: "D", answer: "enhance", chinese_answer: "增强", chinese_romanization: "zēngqiáng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'abrade' means to gradually wear down through sustained friction." +
                "<br><br>" +
                "(B) 'restore' means to bring back or re-establish." +
                "<br><br>" +
                "(C) 'brighten' means to make or become more cheerful or lively." +
                "<br><br>" +
                "(D) 'enhance' means to intensify, increase, or further improve the quality, value, or extent of.",
        chinese_explanation: "(A) '磨损' 意味着通过持续摩擦逐渐磨损。" +
                "<br><br>" +
                "(B) '恢复' 意味着带回或重新建立。" +
                "<br><br>" +
                "(C) '使明亮' 意味着使变得更快乐或更活泼。" +
                "<br><br>" +
                "(D) '增强' 意味着加强、增加或进一步提高质量、价值或程度。"
    },
    {
        id: 8,
    question: "Her frequent absences from work began to __________ from her overall performance.",
    chinese_question: "她频繁缺勤开始 __________ 她的整体表现。",
    answers: [
        { option: "A", answer: "detract", chinese_answer: "贬低", chinese_romanization: "bǎndī" },
        { option: "B", answer: "enhance", chinese_answer: "提高", chinese_romanization: "tígāo" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'detract' means to reduce or take away the worth or value of something, used figuratively here." +
        "<br><br>" +
        "(B) 'enhance' means to improve the quality, value, or extent of." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'support' means to bear all or part of the weight of something; to hold up.",
    chinese_explanation: "(A) '贬低' 意味着减少或降低某物的价值或价值，这里是比喻用法。" +
        "<br><br>" +
        "(B) '提高' 意味着改善某物的质量、价值或程度。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '支持' 意味着承担某物的全部或部分重量；支撑。"
    },
    {
        id: 9,
    question: "The excitement of the crowd began to __________ after the initial announcement.",
    chinese_question: "在初次宣布后，人群的兴奋开始 __________ 。",
    answers: [
        { option: "A", answer: "evanesce", chinese_answer: "消散", chinese_romanization: "xiāosàn" },
        { option: "B", answer: "build", chinese_answer: "增加", chinese_romanization: "zēngjiā" },
        { option: "C", answer: "linger", chinese_answer: "徘徊", chinese_romanization: "páihuái" },
        { option: "D", answer: "erupt", chinese_answer: "爆发", chinese_romanization: "bàofā" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'evanesce' means to pass out of sight, memory, or existence; to disappear gradually, used figuratively here." +
        "<br><br>" +
        "(B) 'build' means to increase or develop gradually." +
        "<br><br>" +
        "(C) 'linger' means to stay in a place longer than necessary." +
        "<br><br>" +
        "(D) 'erupt' means to burst forth suddenly and violently.",
    chinese_explanation: "(A) '消散' 意味着从视线、记忆或存在中消失；逐渐消失，这里是比喻用法。" +
        "<br><br>" +
        "(B) '增加' 意味着逐渐增加或发展。" +
        "<br><br>" +
        "(C) '徘徊' 意味着在一个地方停留比必要的时间更长。" +
        "<br><br>" +
        "(D) '爆发' 意味着突然猛烈地迸发。"
    },
    {
        id: 10,
        question: "The marketing team felt pressured to __________ customers into buying unnecessary products.",
        chinese_question: "营销团队觉得被迫 __________ 顾客购买不必要的产品。",
        answers: [
                { option: "A", answer: "coerce", chinese_answer: "强迫", chinese_romanization: "qiángpò" },
                { option: "B", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "entertain", chinese_answer: "娱乐", chinese_romanization: "yúlè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'coerce' means to persuade an unwilling person to do something by using force or threats, used figuratively here." +
                "<br><br>" +
                "(B) 'assist' means to help or support." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'entertain' means to provide someone with amusement or enjoyment.",
        chinese_explanation: "(A) '强迫' 意味着通过使用武力或威胁说服一个不愿意的人做某事，这里是比喻用法。" +
                "<br><br>" +
                "(B) '帮助' 意味着帮助或支持。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '娱乐' 意味着为某人提供娱乐或享受。"
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
