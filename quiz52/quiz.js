// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The artist's __________ paintings, which challenged social norms and sparked controversy, attracted both praise and criticism.",
        chinese_question: "艺术家的 __________ 画作挑战了社会规范，引发了争议，吸引了赞扬和批评。",
        answers: [
                { option: "A", answer: "dull", chinese_answer: "枯燥的", chinese_romanization: "kūzào de" },
                { option: "B", answer: "bland", chinese_answer: "平淡的", chinese_romanization: "píngdàn de" },
                { option: "C", answer: "provocative", chinese_answer: "挑衅的", chinese_romanization: "tiǎoxìn de" },
                { option: "D", answer: "mundane", chinese_answer: "平凡的", chinese_romanization: "píngfán de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'provocative' means causing annoyance, anger, or another strong reaction, especially deliberately." +
            "<br><br>" +
            "(A) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(B) 'bland' means lacking strong features or characteristics and therefore uninteresting." +
            "<br><br>" +
            "(D) 'mundane' means lacking interest or excitement; dull.",
        chinese_explanation: "(C) '挑衅的' 一词意味着引起恼怒、愤怒或其他强烈反应，尤其是故意的。" +
            "<br><br>" +
            "(A) '枯燥的' 意味着缺乏兴趣或兴奋。" +
            "<br><br>" +
            "(B) '平淡的' 意味着缺乏强烈特征或特点，因此没有趣的。" +
            "<br><br>" +
            "(D) '平凡的' 意味着缺乏兴趣或兴奋；乏味的。"
    },
    {
        id: 2,
    question: "The salesperson was __________, refusing to take no for an answer.",
    chinese_question: "销售人员非常 __________，拒绝接受任何否定的回答。",
    answers: [
        { option: "A", answer: "relaxed", chinese_answer: "放松的", chinese_romanization: "fàngsōng de" },
        { option: "B", answer: "importunate", chinese_answer: "纠缠不休的", chinese_romanization: "jiūchán bùxiū de" },
        { option: "C", answer: "respectful", chinese_answer: "尊重的", chinese_romanization: "zūnzhòng de" },
        { option: "D", answer: "passive", chinese_answer: "被动的", chinese_romanization: "bèidòng de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'importunate' means persistently requesting or demanding, often to the point of annoyance." +
        "<br><br>" +
        "(A) 'relaxed' means free from tension and anxiety." +
        "<br><br>" +
        "(C) 'respectful' means showing deference and respect." +
        "<br><br>" +
        "(D) 'passive' means accepting or allowing what happens without active response or resistance.",
    chinese_explanation: "(B) '纠缠不休的' 意味着坚持不断地请求或要求，通常达到令人恼火的地步。" +
        "<br><br>" +
        "(A) '放松的' 意味着没有紧张和焦虑。" +
        "<br><br>" +
        "(C) '尊重的' 意味着表现出尊重和敬意。" +
        "<br><br>" +
        "(D) '被动的' 意味着接受或允许发生的事情，而没有积极的回应或抵抗。"
    },
    {
        id: 3,
        question: "Her __________ imagination was the source of many creative stories and ideas.",
        chinese_question: "她 __________ 的想象力是许多创造性故事和想法的源泉。",
        answers: [
            { option: "A", answer: "barren", chinese_answer: "贫瘠", chinese_romanization: "pínjí" },
            { option: "B", answer: "limited", chinese_answer: "有限", chinese_romanization: "yǒuxiàn" },
            { option: "C", answer: "fertile", chinese_answer: "丰富", chinese_romanization: "fēngfù" },
            { option: "D", answer: "unproductive", chinese_answer: "无成果", chinese_romanization: "wú chéngguǒ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'fertile' means producing many new and inventive ideas." +
            "<br><br>" +
            "(A) 'barren' means not productive." +
            "<br><br>" +
            "(B) 'limited' means restricted in size, amount, or extent." +
            "<br><br>" +
            "(D) 'unproductive' means not producing or able to produce large amounts of goods, crops, or other commodities.",
        chinese_explanation: "(C) '丰富' 意味着产生许多新的和创造性的想法。" +
            "<br><br>" +
            "'贫瘠' 意味着不生产的。" +
            "<br><br>" +
            "'有限' 意味着在大小、数量或范围上受到限制。" +
            "<br><br>" +
            "'无成果' 意味着不生产或不能生产大量商品、作物或其他商品。"
    },
    {
        id: 4,
        question: "Her __________ pursuit of success left little room for personal relationships or leisure activities.",
        chinese_question: "她对成功的 __________ 追求几乎没有留下个人关系或休闲活动的空间。",
        answers: [
            { option: "A", answer: "balanced", chinese_answer: "平衡的", chinese_romanization: "pínghéng de" },
            { option: "B", answer: "laid-back", chinese_answer: "随和的", chinese_romanization: "suíhé de" },
            { option: "C", answer: "ruthless", chinese_answer: "无情的", chinese_romanization: "wúqíng de" },
            { option: "D", answer: "relaxed", chinese_answer: "放松的", chinese_romanization: "fàngsōng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ruthless' means having or showing no pity or compassion for others, often used figuratively to describe a relentless and uncompromising pursuit." +
            "<br><br>" +
            "(A) 'balanced' means keeping or showing a balance; arranged in good proportions." +
            "<br><br>" +
            "(B) 'laid-back' means relaxed and easy-going." +
            "<br><br>" +
            "(D) 'relaxed' means free from tension and anxiety.",
        chinese_explanation: "(C) '无情的' 意味着对他人没有怜悯或同情心的，通常用作比喻来描述一种毫不留情和毫不妥协的追求。" +
            "<br><br>" +
            "(A) '平衡的' 意味着保持或显示平衡的；安排得当的。" +
            "<br><br>" +
            "(B) '随和的' 意味着放松和随意的。" +
            "<br><br>" +
            "(D) '放松的' 意味着没有紧张和焦虑的。"
    },
    {
        id: 5,
    question: "Her __________ praise boosted the morale of the entire team.",
    chinese_question: "她的__________赞美提升了整个团队的士气。",
    answers: [
        { option: "A", answer: "stingy", chinese_answer: "吝啬的", chinese_romanization: "lìnsè de" },
        { option: "B", answer: "munificent", chinese_answer: "慷慨的", chinese_romanization: "kāngkǎi de" },
        { option: "C", answer: "meager", chinese_answer: "贫乏的", chinese_romanization: "pínfá de" },
        { option: "D", answer: "scanty", chinese_answer: "稀少的", chinese_romanization: "xīshǎo de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'munificent' means larger or more generous than is usual or necessary. Figuratively, it can mean being very generous or lavish in giving praise." +
    "<br><br>" +
    "(A) 'stingy' means unwilling to give or spend; ungenerous." +
    "<br><br>" +
    "(C) 'meager' means (of something provided or available) lacking in quantity or quality." +
    "<br><br>" +
    "(D) 'scanty' means small or insufficient in quantity or amount.",
    chinese_explanation: "(B) '慷慨的'一词意味着比通常或必要的更大或更慷慨的。比喻地，它可以表示在给予赞美时非常慷慨或奢侈的。" +
    "<br><br>" +
    "(A) '吝啬的' 意味着不愿意给予或花费；不慷慨的。" +
    "<br><br>" +
    "(C) '贫乏的' 意味着（提供的或可用的东西）在数量或质量上不足的。" +
    "<br><br>" +
    "(D) '稀少的' 意味着数量或数量不足的。"
    },
    {
        id: 6,
    question: "The report provided __________ evidence to support their claims, making it difficult to refute.",
    chinese_question: "报告提供了 __________ 的证据支持他们的主张，使其难以反驳。",
    answers: [
        { option: "A", answer: "vague", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
        { option: "B", answer: "intangible", chinese_answer: "无形的", chinese_romanization: "wúxíng de" },
        { option: "C", answer: "tangible", chinese_answer: "有形的", chinese_romanization: "yǒuxíng de" },
        { option: "D", answer: "abstract", chinese_answer: "抽象的", chinese_romanization: "chōuxiàng de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'tangible' means perceptible by touch." +
        "<br><br>" +
        "(A) 'vague' means of uncertain, indefinite, or unclear character or meaning." +
        "<br><br>" +
        "(B) 'intangible' means unable to be touched or grasped; not having physical presence." +
        "<br><br>" +
        "(D) 'abstract' means existing in thought or as an idea but not having a physical or concrete existence.",
    chinese_explanation: "(C) '有形的' 一词意味着可触摸的。" +
        "<br><br>" +
        "(A) '模糊的' 意味着不确定、不明确或不清楚的性质或意义。" +
        "<br><br>" +
        "(B) '无形的' 意味着无法触摸或抓住的；没有物理存在的。" +
        "<br><br>" +
        "(D) '抽象的' 意味着存在于思想中或作为一个想法，但没有物理或具体存在的。"
    },
    {
        id: 7,
        question: "While the solution was __________, it was not necessarily the most ethical or long-term answer to the problem.",
        chinese_question: "尽管这个解决方案是 __________ 的，但它不一定是对问题最道德或长期的答案。",
        answers: [
                { option: "A", answer: "ideal", chinese_answer: "理想的", chinese_romanization: "lǐxiǎng de" },
                { option: "B", answer: "expedient", chinese_answer: "权宜的", chinese_romanization: "quányí de" },
                { option: "C", answer: "inappropriate", chinese_answer: "不适当的", chinese_romanization: "bù shìdàng de" },
                { option: "D", answer: "detrimental", chinese_answer: "有害的", chinese_romanization: "yǒuhài de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'expedient' means (of an action) convenient and practical although possibly improper or immoral." +
            "<br><br>" +
            "(A) 'ideal' means satisfying one's conception of what is perfect; most suitable." +
            "<br><br>" +
            "(C) 'inappropriate' means not suitable or proper in the circumstances." +
            "<br><br>" +
            "(D) 'detrimental' means tending to cause harm.",
        chinese_explanation: "(B) '权宜的' 一词意味着（行动）方便和实际的，尽管可能是不正当或不道德的。" +
            "<br><br>" +
            "(A) '理想的' 意味着满足人们对完美的概念；最合适的。" +
            "<br><br>" +
            "(C) '不适当的' 意味着在情况下不适合或不恰当的。" +
            "<br><br>" +
            "(D) '有害的' 意味着倾向于造成伤害的。"
    },
    {
        id: 8,
        question: "It was __________ that the more he tried to please everyone, the more he seemed to upset them.",
        chinese_question: "他越是努力取悦每个人，就越让他们感到不安，这真是 __________。",
        answers: [
            { option: "A", answer: "expected", chinese_answer: "预期的", chinese_romanization: "yùqī de" },
            { option: "B", answer: "straightforward", chinese_answer: "直截了当的", chinese_romanization: "zhíjié liǎo dàng de" },
            { option: "C", answer: "paradoxical", chinese_answer: "矛盾的", chinese_romanization: "máodùn de" },
            { option: "D", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'paradoxical' means seemingly absurd or self-contradictory." +
            "<br><br>" +
            "(A) 'expected' means regarded as likely to happen." +
            "<br><br>" +
            "(B) 'straightforward' means uncomplicated and easy to do or understand." +
            "<br><br>" +
            "(D) 'simple' means easily understood or done; presenting no difficulty.",
        chinese_explanation: "(C) '矛盾的' 意味着看似荒谬或自相矛盾的。" +
            "<br><br>" +
            "(A) '预期的' 意味着被认为可能发生的。" +
            "<br><br>" +
            "(B) '直截了当的' 意味着不复杂的，容易做或理解的。" +
            "<br><br>" +
            "(D) '简单的' 意味着容易理解或完成的；没有困难的。"
    },
    {
        id: 9,
    question: "She made a __________ effort to complete the marathon despite her injury.",
    chinese_question: "尽管受伤，她仍然做出了 __________ 的努力完成马拉松。",
    answers: [
        { option: "A", answer: "weak", chinese_answer: "虚弱的", chinese_romanization: "xūruò de" },
        { option: "B", answer: "cowardly", chinese_answer: "胆小的", chinese_romanization: "dǎnxiǎo de" },
        { option: "C", answer: "heroic", chinese_answer: "英勇的", chinese_romanization: "yīngyǒng de" },
        { option: "D", answer: "lazy", chinese_answer: "懒惰的", chinese_romanization: "lǎnduò de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'heroic' means showing great bravery." +
        "<br><br>" +
        "(A) 'weak' means lacking physical strength or vigor." +
        "<br><br>" +
        "(B) 'cowardly' means lacking courage." +
        "<br><br>" +
        "(D) 'lazy' means unwilling to work or use energy.",
    chinese_explanation: "(C) “英勇的” 意味着表现出极大的勇敢。" +
        "<br><br>" +
        "(A) '虚弱的' 意味着缺乏体力或活力。" +
        "<br><br>" +
        "(B) '胆小的' 意味着缺乏勇气。" +
        "<br><br>" +
        "(D) '懒惰的' 意味着不愿工作或使用能量。"
    },
    {
        id: 10,
    question: "The community felt __________ by the government's decision to cut funding for local projects.",
    chinese_question: "社区对政府削减地方项目资金的决定感到 __________ 。",
    answers: [
        { option: "A", answer: "aggrieved", chinese_answer: "感到痛苦", chinese_romanization: "gǎndào tòngkǔ" },
        { option: "B", answer: "content", chinese_answer: "满足", chinese_romanization: "mǎnzú" },
        { option: "C", answer: "happy", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
        { option: "D", answer: "indifferent", chinese_answer: "无动于衷", chinese_romanization: "wúdòngyúzhōng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'aggrieved' means feeling resentment at having been unfairly treated." +
        "<br><br>" +
        "(B) 'content' means in a state of peaceful happiness." +
        "<br><br>" +
        "(C) 'happy' means feeling or showing pleasure or contentment." +
        "<br><br>" +
        "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
    chinese_explanation: "(A) '感到痛苦' 意味着感到被不公平对待的怨恨。" +
        "<br><br>" +
        "(B) '满足' 意味着处于平静的幸福状态。" +
        "<br><br>" +
        "(C) '高兴' 意味着感到或表现出快乐或满足。" +
        "<br><br>" +
        "(D) '无动于衷' 意味着没有特别的兴趣或同情；不关心。"
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
