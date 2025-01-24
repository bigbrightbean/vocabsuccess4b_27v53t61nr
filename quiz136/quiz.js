// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The company issued a __________ for the defective product to ensure customer safety.",
        chinese_question: "公司对有缺陷的产品发出了 __________ ，以确保客户安全。",
        answers: [
                { option: "A", answer: "recall", chinese_answer: "召回", chinese_romanization: "zhàohuí" },
                { option: "B", answer: "release", chinese_answer: "发布", chinese_romanization: "fābù" },
                { option: "C", answer: "promotion", chinese_answer: "促销", chinese_romanization: "cùxiāo" },
                { option: "D", answer: "advertisement", chinese_answer: "广告", chinese_romanization: "guǎnggào" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'recall' means an official order to return a product to the manufacturer due to the discovery of safety issues or product defects." +
                "<br><br>" +
                "(B) 'release' means to make something available to the public." +
                "<br><br>" +
                "(C) 'promotion' means activities that encourage the sale of a product." +
                "<br><br>" +
                "(D) 'advertisement' means a public notice promoting a product, service, or event.",
        chinese_explanation: "(A) '召回' 意味着由于发现安全问题或产品缺陷而发布的将产品退回制造商的正式命令。" +
                "<br><br>" +
                "(B) '发布' 意味着将某物公开。" +
                "<br><br>" +
                "(C) '促销' 意味着鼓励产品销售的活动。" +
                "<br><br>" +
                "(D) '广告' 意味着宣传产品、服务或活动的公共通知。"
    },
    {
        id: 2,
    question: "The legal issues __________ the company in a complicated lawsuit that lasted for years.",
    chinese_question: "法律问题将公司 __________ 在一场持续多年的复杂诉讼中。",
    answers: [
        { option: "A", answer: "freed", chinese_answer: "解放", chinese_romanization: "jiěfàng" },
        { option: "B", answer: "enmeshed", chinese_answer: "卷入", chinese_romanization: "juǎnrù" },
        { option: "C", answer: "avoided", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
        { option: "D", answer: "resolved", chinese_answer: "解决", chinese_romanization: "jiějué" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'enmeshed' means to be entangled or involved in something difficult to escape." +
        "<br><br>" +
        "(A) 'freed' means to release from captivity or confinement." +
        "<br><br>" +
        "(C) 'avoided' means to keep away from." +
        "<br><br>" +
        "(D) 'resolved' means to find a solution to a problem.",
    chinese_explanation: "(B) '卷入' 意味着被缠住或牵涉在某件难以逃脱的事情中。" +
        "<br><br>" +
        "(A) '解放' 意味着放开。" +
        "<br><br>" +
        "(C) '避免' 意味着远离。" +
        "<br><br>" +
        "(D) '解决' 意味着找到问题的解决方案。"
    },
    {
        id: 3,
        question: "His sarcastic comment didn't __________ with the serious tone of the meeting.",
        chinese_question: "他的讽刺评论与会议的严肃基调不 __________ 。",
        answers: [
                { option: "A", answer: "jibe", chinese_answer: "一致", chinese_romanization: "yīzhì" },
                { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "D", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'jibe' means to be in accord or agreement with." +
                "<br><br>" +
                "(B) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(C) 'support' means to give assistance to." +
                "<br><br>" +
                "(D) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
        chinese_explanation: "(A) '一致' 意味着与某事物一致或和谐。" +
                "<br><br>" +
                "(B) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(C) '支持' 意味着给予帮助。" +
                "<br><br>" +
                "(D) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。"
    },
    {
        id: 4,
        question: "The constant news about economic downturns can __________ people’s fears about job security.",
        chinese_question: "关于经济衰退的持续新闻会 __________ 人们对工作安全的恐惧。",
        answers: [
                { option: "A", answer: "reinforce", chinese_answer: "加强", chinese_romanization: "jiāqiáng" },
                { option: "B", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "suppress", chinese_answer: "抑制", chinese_romanization: "yìzhì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'reinforce' means to strengthen or support an idea, behavior, or feeling." +
                "<br><br>" +
                "(B) 'diminish' means to make or become less." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'suppress' means to forcibly put an end to.",
        chinese_explanation: "(A) '加强' 意味着加强或支持一个想法、行为或感觉。" +
                "<br><br>" +
                "(B) '减少' 意味着使或变得更少。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '抑制' 意味着强行终止。"
    },
    {
        id: 5,
        question: "The luxurious furnishings __________ the owner’s wealth and taste.",
        chinese_question: "奢华的家具 __________ 了主人财富和品味。",
        answers: [
                { option: "A", answer: "bespeak", chinese_answer: "显示", chinese_romanization: "xiǎnshì" },
                { option: "B", answer: "hide", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "contradict", chinese_answer: "反驳", chinese_romanization: "fǎnbó" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'bespeak' means to indicate or be evidence of something." +
                "<br><br>" +
                "(B) 'hide' means to put or keep out of sight." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'contradict' means to deny the truth of a statement by asserting the opposite.",
        chinese_explanation: "(A) '显示' 意味着表明或作为某事的证据。" +
                "<br><br>" +
                "(B) '隐藏' 意味着使某物不被看到。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '反驳' 意味着通过断言相反的观点来否认某声明的真实性。"
    },
    {
        id: 6,
        question: "The __________ relationship between the two countries led to increasing tension and conflict.",
        chinese_question: "两国之间的 __________ 关系导致了紧张和冲突的加剧。",
        answers: [
            { option: "A", answer: "harmonious", chinese_answer: "和谐", chinese_romanization: "héxié" },
            { option: "B", answer: "flourishing", chinese_answer: "兴旺", chinese_romanization: "xīngwàng" },
            { option: "C", answer: "corroded", chinese_answer: "腐蚀", chinese_romanization: "fǔshí" },
            { option: "D", answer: "renewed", chinese_answer: "恢复", chinese_romanization: "huīfù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'corroded' means damaged or deteriorated, especially gradually." +
            "<br><br>" +
            "(A) 'harmonious' means free from disagreement or conflict." +
            "<br><br>" +
            "(B) 'flourishing' means developing rapidly and successfully." +
            "<br><br>" +
            "(D) 'renewed' means restored to a good state.",
        chinese_explanation: "(C) '腐蚀' 意味着被损坏或恶化，特别是逐渐地。" +
            "<br><br>" +
            "(A) '和谐' 意味着没有分歧或冲突。" +
            "<br><br>" +
            "(B) '兴旺' 意味着迅速发展并取得成功。" +
            "<br><br>" +
            "(D) '恢复' 意味着恢复到良好的状态。"
    },
    {
        id: 7,
        question: "His views on the subject have __________ over the years, becoming more rigid and less open to discussion.",
        chinese_question: "多年来，他对这个问题的看法已经 __________ ，变得更加僵硬且不愿讨论。",
        answers: [
                { option: "A", answer: "calcified", chinese_answer: "僵化", chinese_romanization: "jiānghuà" },
                { option: "B", answer: "broadened", chinese_answer: "扩大", chinese_romanization: "kuòdà" },
                { option: "C", answer: "simplified", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
                { option: "D", answer: "clarified", chinese_answer: "澄清", chinese_romanization: "chéngqīng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'calcified' means to become rigid or fixed, often used figuratively to describe processes that become inflexible." +
                "<br><br>" +
                "(B) 'broadened' means to become wider or more inclusive." +
                "<br><br>" +
                "(C) 'simplified' means to make something simpler or easier to do or understand." +
                "<br><br>" +
                "(D) 'clarified' means to make a statement or situation less confused and more comprehensible.",
        chinese_explanation: "(A) '僵化' 意味着变得僵硬或固定，通常用于形容变得不灵活的过程。" +
                "<br><br>" +
                "(B) '扩大' 意味着变得更广或更具包容性。" +
                "<br><br>" +
                "(C) '简化' 意味着使某事更简单或更容易做或理解。" +
                "<br><br>" +
                "(D) '澄清' 意味着使声明或情况不再混乱并更容易理解。"
    },
    {
        id: 8,
        question: "The bishop chose to __________ the rebellious priest, cutting him off from the church community.",
        chinese_question: "主教决定 __________ 那位反叛的牧师，将他从教会社区中驱逐出去。",
        answers: [
                { option: "A", answer: "anathematize", chinese_answer: "诅咒", chinese_romanization: "zǔzhòu" },
                { option: "B", answer: "embrace", chinese_answer: "拥抱", chinese_romanization: "yǒngbào" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "reconcile", chinese_answer: "和解", chinese_romanization: "héjiě" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'anathematize' means to curse or declare to be evil or anathema." +
                "<br><br>" +
                "(B) 'embrace' means to hold closely in one's arms, especially as a sign of affection." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'reconcile' means to restore friendly relations between.",
        chinese_explanation: "(A) '诅咒' 意味着诅咒或宣布某人为邪恶或应受诅咒。" +
                "<br><br>" +
                "(B) '拥抱' 意味着紧紧抱住，特别是作为表示爱意的标志。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '和解' 意味着恢复友好关系。"
    },
    {
        id: 9,
        question: "The new evidence made the previous theories __________ in significance.",
        chinese_question: "新的证据使之前的理论显得 __________。",
        answers: [
            { option: "A", answer: "enhance", chinese_answer: "增强", chinese_romanization: "zēngqiáng" },
            { option: "B", answer: "pale", chinese_answer: "相形见绌", chinese_romanization: "xiāngxíngjiànchù" },
            { option: "C", answer: "highlight", chinese_answer: "突出", chinese_romanization: "túchū" },
            { option: "D", answer: "intensify", chinese_answer: "加强", chinese_romanization: "jiāqiáng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pale' means to seem less impressive or important when compared to something else." +
            "<br><br>" +
            "(A) 'enhance' means to intensify, increase, or further improve the quality, value, or extent of." +
            "<br><br>" +
            "(C) 'highlight' means to make something stand out." +
            "<br><br>" +
            "(D) 'intensify' means to become or make more intense.",
        chinese_explanation: "(B) '相形见绌' 意味着与某事相比显得不那么令人印象深刻或重要。" +
            "<br><br>" +
            "(A) '增强' 意味着加强、增加或进一步提高质量、价值或范围。" +
            "<br><br>" +
            "(C) '突出' 意味着使某物突出。" +
            "<br><br>" +
            "(D) '加强' 意味着变得或使更强烈。"
    },
    {
        id: 10,
        question: "The environmental group announced plans to __________ the corporation for polluting the river.",
        chinese_question: "环保组织宣布计划 __________ 那家公司污染河流的行为。",
        answers: [
                { option: "A", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
                { option: "B", answer: "prosecute", chinese_answer: "起诉", chinese_romanization: "qǐsù" },
                { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'prosecute' means to institute legal proceedings against someone." +
                "<br><br>" +
                "(A) 'abandon' means to give up completely." +
                "<br><br>" +
                "(C) 'support' means to bear all or part of the weight of; hold up." +
                "<br><br>" +
                "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(B) '起诉'一词意味着对某人提起法律诉讼。" +
                "<br><br>" +
                "(A) '放弃' 意味着完全放弃。" +
                "<br><br>" +
                "(C) '支持' 意味着承受全部或部分重量；支撑。" +
                "<br><br>" +
                "(D) '忽视' 意味着拒绝注意或承认。"
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
