// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The movie's __________ portrayal of the historical event left out many crucial factors, giving viewers a skewed understanding.",
        chinese_question: "这部电影对历史事件的 __________ 描绘遗漏了许多关键因素，给观众带来了扭曲的理解。",
        answers: [
            { option: "A", answer: "reductive", chinese_answer: "简化的", chinese_romanization: "jiǎnhuà de" },
            { option: "B", answer: "nuanced", chinese_answer: "细腻的", chinese_romanization: "xìnì de" },
            { option: "C", answer: "accurate", chinese_answer: "准确的", chinese_romanization: "zhǔnquè de" },
            { option: "D", answer: "balanced", chinese_answer: "平衡的", chinese_romanization: "pínghéng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'reductive' means tending to present a subject or problem in a simplified form, especially one viewed as crude." +
            "<br><br>" +
            "(B) 'nuanced' means characterized by subtle shades of meaning or expression." +
            "<br><br>" +
            "(C) 'accurate' means correct in all details; exact." +
            "<br><br>" +
            "(D) 'balanced' means keeping or showing a balance; arranged in good proportions.",
        chinese_explanation: "(A) '简化的' 意味着倾向于以简化的形式呈现一个主题或问题，尤其是被视为粗糙的形式。" +
            "<br><br>" +
            "(B) '细腻的' 意味着具有微妙的意义或表达。" +
            "<br><br>" +
            "(C) '准确的' 意味着在所有细节上都是正确的；确切的。" +
            "<br><br>" +
            "(D) '平衡的' 意味着保持或显示平衡；安排得当的。"
    },
    {
        id: 2,
    question: "The love between them was __________ in their every gesture and glance.",
    chinese_question: "他们之间的爱在每一个动作和目光中都是 __________ 的。",
    answers: [
        { option: "A", answer: "invisible", chinese_answer: "看不见的", chinese_romanization: "kàn bùjiàn de" },
        { option: "B", answer: "apparent", chinese_answer: "显然的", chinese_romanization: "xiǎnrán de" },
        { option: "C", answer: "insignificant", chinese_answer: "无关紧要的", chinese_romanization: "wúguān jǐnyào de" },
        { option: "D", answer: "obscure", chinese_answer: "模糊的", chinese_romanization: "móhú de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'apparent' means clearly visible or understood; obvious." +
        "<br><br>" +
        "(A) 'invisible' means unable to be seen." +
        "<br><br>" +
        "(C) 'insignificant' means too small or unimportant to be worth consideration." +
        "<br><br>" +
        "(D) 'obscure' means not discovered or known about; uncertain.",
    chinese_explanation: "(B) '显然的' 意味着清晰可见或理解的；明显的。" +
        "<br><br>" +
        "(A) '看不见的' 意味着无法看到的。" +
        "<br><br>" +
        "(C) '无关紧要的' 意味着太小或不重要而不值得考虑的。" +
        "<br><br>" +
        "(D) '模糊的' 意味着未被发现或了解的；不确定的。"
    },
    {
        id: 3,
        question: "The company's disregard for safety regulations was an __________ error that led to a serious accident.",
        chinese_question: "公司对安全法规的无视是一个 __________ 的错误，导致了严重的事故。",
        answers: [
                { option: "A", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" },
                { option: "B", answer: "egregious", chinese_answer: "过分的", chinese_romanization: "guòfèn de" },
                { option: "C", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" },
                { option: "D", answer: "insignificant", chinese_answer: "无关紧要的", chinese_romanization: "wúguān jǐn yào de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'egregious' means outstandingly bad; shocking." +
            "<br><br>" +
            "(A) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(C) 'trivial' means of little value or importance." +
            "<br><br>" +
            "(D) 'insignificant' means too small or unimportant to be worth consideration.",
        chinese_explanation: "(B) '过分的' 一词意味着极其糟糕的；令人震惊的。" +
            "<br><br>" +
            "(A) '次要的' 意味着在重要性、严重性或意义上较低的。" +
            "<br><br>" +
            "(C) '琐碎的' 意味着价值或重要性很小的。" +
            "<br><br>" +
            "(D) '无关紧要的' 意味着太小或不重要而不值得考虑的。"
    },
    {
        id: 4,
    question: "Her __________ rise to fame was unexpected, as she went from an unknown singer to a global superstar in just a few months.",
    chinese_question: "她的成名之路 __________，在短短几个月内从一个无名歌手变成了全球超级明星，这让人出乎意料。",
    answers: [
        { option: "A", answer: "miraculous", chinese_answer: "奇迹般的", chinese_romanization: "qíjì bān de" },
        { option: "B", answer: "gradual", chinese_answer: "逐渐的", chinese_romanization: "zhújiàn de" },
        { option: "C", answer: "expected", chinese_answer: "预料中的", chinese_romanization: "yùliào zhōng de" },
        { option: "D", answer: "slow", chinese_answer: "缓慢的", chinese_romanization: "huǎnmàn de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'miraculous' means occurring through divine or supernatural intervention, or manifesting such power." +
        "<br><br>" +
        "(B) 'gradual' means taking place or progressing slowly or by degrees." +
        "<br><br>" +
        "(C) 'expected' means regarded as likely to happen." +
        "<br><br>" +
        "(D) 'slow' means moving or operating, or designed to do so, only at a low speed; not quick or fast.",
    chinese_explanation: "(A) '奇迹般的' 意味着通过神圣或超自然干预发生的，或表现出这种力量的。" +
        "<br><br>" +
        "(B) '逐渐的' 意味着缓慢地或逐步地发生或进展的。" +
        "<br><br>" +
        "(C) '预料中的' 意味着被认为可能会发生的。" +
        "<br><br>" +
        "(D) '缓慢的' 意味着以低速移动或操作，或设计为仅以低速移动或操作的；不快的。"
    },
    {
        id: 5,
        question: "The report's __________ analysis caused the meeting to drag on much longer than necessary.",
        chinese_question: "报告中 __________ 的分析使会议拖延了很久。",
        answers: [
            { option: "A", answer: "concise", chinese_answer: "简洁的", chinese_romanization: "jiǎnjié de" },
            { option: "B", answer: "brisk", chinese_answer: "轻快的", chinese_romanization: "qīngkuài de" },
            { option: "C", answer: "ponderous", chinese_answer: "沉闷的", chinese_romanization: "chénmèn de" },
            { option: "D", answer: "succinct", chinese_answer: "简明的", chinese_romanization: "jiǎnmíng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ponderous' means dull, laborious, or excessively solemn." +
            "<br><br>" +
            "(A) 'concise' means giving a lot of information clearly and in a few words; brief but comprehensive." +
            "<br><br>" +
            "(B) 'brisk' means active, fast, and energetic." +
            "<br><br>" +
            "(D) 'succinct' means briefly and clearly expressed.",
        chinese_explanation: "(C) '沉闷的' 意味着沉闷、费力或过于庄重的。" +
            "<br><br>" +
            "(A) '简洁的' 意味着清楚简明地提供大量信息；简短但全面的。" +
            "<br><br>" +
            "(B) '轻快的' 意味着积极、快速和充满活力的。" +
            "<br><br>" +
            "(D) '简明的' 意味着简洁明了地表达。"
    },
    {
        id: 6,
    question: "The teacher's __________ salary did not reflect the immense dedication and effort she put into her work.",
    chinese_question: "老师的 __________ 工资并没有反映出她对工作的巨大奉献和努力。",
    answers: [
        { option: "A", answer: "lavish", chinese_answer: "奢华的", chinese_romanization: "shēhuá de" },
        { option: "B", answer: "modest", chinese_answer: "适度的", chinese_romanization: "shìdù de" },
        { option: "C", answer: "excessive", chinese_answer: "过多的", chinese_romanization: "guòduō de" },
        { option: "D", answer: "luxurious", chinese_answer: "奢侈的", chinese_romanization: "shēchǐ de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'modest' means relatively moderate, limited, or small." +
        "<br><br>" +
        "(A) 'lavish' means sumptuously rich, elaborate, or luxurious." +
        "<br><br>" +
        "(C) 'excessive' means more than is necessary, normal, or desirable." +
        "<br><br>" +
        "(D) 'luxurious' means extremely comfortable, elegant, or enjoyable, especially in a way that involves great expense.",
    chinese_explanation: "(B) '适度的' 意味着相对适中的、有限的或小的。" +
        "<br><br>" +
        "(A) '奢华的' 意味着华丽的、精美的或奢侈的。" +
        "<br><br>" +
        "(C) '过多的' 意味着超过必要、正常或理想的。" +
        "<br><br>" +
        "(D) '奢侈的' 意味着非常舒适、优雅或愉快的，尤其是以极高的费用。"
    },
    {
        id: 7,
        question: "The company made a __________ decision to adopt new technology, allowing it to stay ahead of its competitors.",
        chinese_question: "公司迅速决定采用新技术，使其能够领先于竞争对手。",
        answers: [
            { option: "A", answer: "swift", chinese_answer: "迅速的", chinese_romanization: "xùnsù de" },
            { option: "B", answer: "delayed", chinese_answer: "延迟的", chinese_romanization: "yánchí de" },
            { option: "C", answer: "hesitant", chinese_answer: "犹豫的", chinese_romanization: "yóuyù de" },
            { option: "D", answer: "protracted", chinese_answer: "拖延的", chinese_romanization: "tuōyán de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'swift' means happening quickly or promptly." +
            "<br><br>" +
            "(B) 'delayed' means postponed or deferred." +
            "<br><br>" +
            "(C) 'hesitant' means tentative, unsure, or slow in acting or speaking." +
            "<br><br>" +
            "(D) 'protracted' means lasting for a long time or longer than expected or usual.",
        chinese_explanation: "(A) '迅速的' 意味着快速或及时发生的。" +
            "<br><br>" +
            "(B) '延迟的' 意味着推迟或延期的。" +
            "<br><br>" +
            "(C) '犹豫的' 意味着行动或说话时犹豫不决的。" +
            "<br><br>" +
            "(D) '拖延的' 意味着持续很长时间或比预期或通常的时间更长的。"
    },
    {
        id: 8,
    question: "The gardener was pleased with the __________ blooms in the garden, which created a vibrant and colorful display.",
    chinese_question: "园丁对花园中 __________ 的花感到满意，这些花创造了一个充满活力和色彩的展示。",
    answers: [
        { option: "A", answer: "profuse", chinese_answer: "丰富的", chinese_romanization: "fēngfù de" },
        { option: "B", answer: "sparse", chinese_answer: "稀疏的", chinese_romanization: "xīshū de" },
        { option: "C", answer: "scant", chinese_answer: "不足的", chinese_romanization: "bùzú de" },
        { option: "D", answer: "limited", chinese_answer: "有限的", chinese_romanization: "yǒuxiàn de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'profuse' means plentiful; abundant." +
        "<br><br>" +
        "(B) 'sparse' means thinly dispersed or scattered." +
        "<br><br>" +
        "(C) 'scant' means barely sufficient or adequate." +
        "<br><br>" +
        "(D) 'limited' means restricted in size, amount, or extent.",
    chinese_explanation: "(A) '丰富的' 意味着充足的；丰富的。" +
        "<br><br>" +
        "(B) '稀疏的' 意味着稀疏分布的或散开的。" +
        "<br><br>" +
        "(C) '不足的' 意味着几乎不够或不足够的。" +
        "<br><br>" +
        "(D) '有限的' 意味着在大小、数量或范围上受限制的。"
    },
    {
        id: 9,
        question: "His __________ decision to quit his job without a backup plan left him struggling to find new employment.",
        chinese_question: "他 __________ 决定辞职而没有备选计划，导致他难以找到新工作。",
        answers: [
                { option: "A", answer: "thoughtful", chinese_answer: "深思熟虑的", chinese_romanization: "shēnsī shúlǜ de" },
                { option: "B", answer: "impetuous", chinese_answer: "冲动的", chinese_romanization: "chōngdòng de" },
                { option: "C", answer: "cautious", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" },
                { option: "D", answer: "deliberate", chinese_answer: "故意的", chinese_romanization: "gùyì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'impetuous' means acting or done quickly and without thought or care." +
            "<br><br>" +
            "(A) 'thoughtful' means showing consideration for the needs of other people." +
            "<br><br>" +
            "(C) 'cautious' means (of a person) careful to avoid potential problems or dangers." +
            "<br><br>" +
            "(D) 'deliberate' means done consciously and intentionally.",
        chinese_explanation: "(B) '冲动的' 一词意味着快速且不加思考或关心地行动或完成的。" +
            "<br><br>" +
            "(A) '深思熟虑的' 意味着考虑他人需求的。" +
            "<br><br>" +
            "(C) '谨慎的' 意味着（人）小心避免潜在问题或危险的。" +
            "<br><br>" +
            "(D) '故意的' 意味着有意识和有意地完成的。"
    },
    {
        id: 10,
    question: "The __________ analysis failed to consider the underlying causes of the issue.",
    chinese_question: "这个 __________ 的分析未能考虑到问题的深层原因。",
    answers: [
        { option: "A", answer: "deep", chinese_answer: "深的", chinese_romanization: "shēn de" },
        { option: "B", answer: "insightful", chinese_answer: "有见地的", chinese_romanization: "yǒu jiàndì de" },
        { option: "C", answer: "shallow", chinese_answer: "浅薄的", chinese_romanization: "qiǎnbó de" },
        { option: "D", answer: "comprehensive", chinese_answer: "全面的", chinese_romanization: "quánmiàn de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'shallow' means not exhibiting, requiring, or capable of serious thought." +
        "<br><br>" +
        "(A) 'deep' means extending far down from the top or surface; profound." +
        "<br><br>" +
        "(B) 'insightful' means having or showing an accurate and deep understanding." +
        "<br><br>" +
        "(D) 'comprehensive' means complete; including all or nearly all elements or aspects.",
    chinese_explanation: "(C) “浅薄的” 意味着没有表现出、要求或能够进行认真思考。" +
        "<br><br>" +
        "(A) '深的' 意味着从顶部或表面向下延伸很远；深刻的。" +
        "<br><br>" +
        "(B) '有见地的' 意味着具有或表现出准确和深入的理解。" +
        "<br><br>" +
        "(D) '全面的' 意味着完整的；包括所有或几乎所有元素或方面。"
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
