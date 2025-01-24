// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The defendant decided to __________ not guilty in court, hoping to prove his innocence.",
        chinese_question: "被告决定在法庭上 __________ 无罪，希望证明自己的清白。",
        answers: [
                { option: "A", answer: "plead", chinese_answer: "申辩", chinese_romanization: "shēnbiàn" },
                { option: "B", answer: "declare", chinese_answer: "宣布", chinese_romanization: "xuānbù" },
                { option: "C", answer: "accept", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
                { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'plead' means to make an emotional appeal or to state formally in court whether one is guilty or not guilty." +
                "<br><br>" +
                "(B) 'declare' means to announce something clearly, firmly, publicly, or officially." +
                "<br><br>" +
                "(C) 'accept' means to consent to receive or undertake something offered." +
                "<br><br>" +
                "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(A) '申辩' 意味着提出情感上的请求或在法庭上正式声明自己是否有罪。" +
                "<br><br>" +
                "(B) '宣布' 意味着清楚、坚定、公开或正式地宣布某事。" +
                "<br><br>" +
                "(C) '接受' 意味着同意接受或承担所提供的东西。" +
                "<br><br>" +
                "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 2,
        question: "His carefree attitude made him feel as if he could __________ through life without a worry.",
        chinese_question: "他无忧无虑的态度让他觉得自己可以 __________ 无忧无虑地生活。",
        answers: [
                { option: "A", answer: "caper", chinese_answer: "欢跃", chinese_romanization: "huānyuè" },
                { option: "B", answer: "struggle", chinese_answer: "奋斗", chinese_romanization: "fèndòu" },
                { option: "C", answer: "stagnate", chinese_answer: "停滞", chinese_romanization: "tíngzhì" },
                { option: "D", answer: "fail", chinese_answer: "失败", chinese_romanization: "shībài" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'caper' means to skip or dance about in a lively or playful way." +
                "<br><br>" +
                "(B) 'struggle' means to make forceful or violent efforts to get free of restraint or constriction." +
                "<br><br>" +
                "(C) 'stagnate' means to cease developing; become inactive or dull." +
                "<br><br>" +
                "(D) 'fail' means to be unsuccessful in achieving one's goal.",
        chinese_explanation: "(A) '欢跃' 意味着以活泼或嬉戏的方式跳跃或舞动。" +
                "<br><br>" +
                "(B) '奋斗' 意味着努力摆脱约束或限制。" +
                "<br><br>" +
                "(C) '停滞' 意味着停止发展；变得不活跃或迟钝。" +
                "<br><br>" +
                "(D) '失败' 意味着未能实现目标。"
    },
    {
        id: 3,
    question: "After brewing, he needed to __________ the coffee to avoid getting grounds in the cup.",
    chinese_question: "煮好后，他需要将咖啡 __________ 出来，以免杯中出现咖啡渣。",
    answers: [
        { option: "A", answer: "stir", chinese_answer: "搅拌", chinese_romanization: "jiǎobàn" },
        { option: "B", answer: "decant", chinese_answer: "倒出", chinese_romanization: "dàochū" },
        { option: "C", answer: "shake", chinese_answer: "摇动", chinese_romanization: "yáodòng" },
        { option: "D", answer: "mix", chinese_answer: "混合", chinese_romanization: "hùnhé" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'decant' means to gradually pour liquid from one container into another, especially without disturbing the sediment." +
        "<br><br>" +
        "(A) 'stir' means to move a liquid or other substance with an implement." +
        "<br><br>" +
        "(C) 'shake' means to move something up and down or from side to side with rapid, forceful movements." +
        "<br><br>" +
        "(D) 'mix' means to combine or blend.",
    chinese_explanation: "(B) '倒出' 意味着将液体从一个容器逐渐倒入另一个容器，特别是不打扰沉淀物。" +
        "<br><br>" +
        "(A) '搅拌' 意味着用工具移动液体或其他物质。" +
        "<br><br>" +
        "(C) '摇动' 意味着快速、有力地上下或左右移动某物。" +
        "<br><br>" +
        "(D) '混合' 意味着结合或混合。"
    },
    {
        id: 4,
    question: "His thoughts would often __________ during meditation, making it hard for him to concentrate.",
    chinese_question: "在冥想期间，他的思想经常会 __________ ，使他难以集中注意力。",
    answers: [
        { option: "A", answer: "divagate", chinese_answer: "偏离", chinese_romanization: "piānlí" },
        { option: "B", answer: "focus", chinese_answer: "专注", chinese_romanization: "zhuānzhù" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'divagate' means to stray or wander from a course or subject, used figuratively here." +
        "<br><br>" +
        "(B) 'focus' means to concentrate on a particular subject or task." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'simplify' means to make something simpler or easier to do or understand.",
    chinese_explanation: "(A) '偏离' 意味着偏离或游离于一个过程或主题，这里是比喻用法。" +
        "<br><br>" +
        "(B) '专注' 意味着集中于特定的主题或任务。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '简化' 意味着使某事更简单或更容易做或理解。"
    },
    {
        id: 5,
    question: "She vowed to __________ her previous lifestyle and start anew.",
    chinese_question: "她发誓要 __________ 以前的生活方式，重新开始。",
    answers: [
        { option: "A", answer: "forswear", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
        { option: "B", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "cherish", chinese_answer: "珍惜", chinese_romanization: "zhēnxī" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'forswear' means to agree to give up or do without something, used figuratively here." +
        "<br><br>" +
        "(B) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'cherish' means to protect and care for someone lovingly.",
    chinese_explanation: "(A) '放弃' 意味着同意放弃或不做某事，这里是比喻用法。" +
        "<br><br>" +
        "(B) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '珍惜' 意味着爱护和关心某人。"
    },
    {
        id: 6,
        question: "Despite his questionable ethics, the media continued to __________ the tech entrepreneur.",
        chinese_question: "尽管他的道德观令人质疑，媒体仍然继续 __________ 这位科技企业家。",
        answers: [
                { option: "A", answer: "criticize", chinese_answer: "批评", chinese_romanization: "pīpíng" },
                { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "lionize", chinese_answer: "崇拜", chinese_romanization: "chóngbài" },
                { option: "D", answer: "ridicule", chinese_answer: "嘲笑", chinese_romanization: "cháoxiào" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'lionize' means to give a lot of public attention and approval to someone; to treat someone as a celebrity." +
                "<br><br>" +
                "(A) 'criticize' means to express disapproval of someone or something." +
                "<br><br>" +
                "(B) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'ridicule' means to make fun of someone or something in a cruel or harsh way.",
        chinese_explanation: "(C) '崇拜' 一词意味着给予某人很多公众的关注和认可；把某人视为名人。" +
                "<br><br>" +
                "(A) '批评' 意味着对某人或某事表示不满。" +
                "<br><br>" +
                "(B) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '嘲笑' 意味着以残酷或严厉的方式取笑某人或某事。"
    },
    {
        id: 7,
        question: "She had to __________ through her emotions to find clarity about her decision.",
        chinese_question: "她不得不 __________ 穿越自己的情感以找到对决定的清晰认识。",
        answers: [
                { option: "A", answer: "stroll", chinese_answer: "漫步", chinese_romanization: "mànbù" },
                { option: "B", answer: "clamber", chinese_answer: "费力前行", chinese_romanization: "fèilì qiánxíng" },
                { option: "C", answer: "slide", chinese_answer: "滑动", chinese_romanization: "huádòng" },
                { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'clamber' figuratively means to move with difficulty or effort through a challenging environment." +
                "<br><br>" +
                "(A) 'stroll' means to walk in a leisurely way." +
                "<br><br>" +
                "(C) 'slide' means to move smoothly along a surface." +
                "<br><br>" +
                "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(B) '费力前行' 在比喻意义上意味着通过具有挑战性的环境艰难或费力地移动。" +
                "<br><br>" +
                "(A) '漫步' 意味着悠闲地走。" +
                "<br><br>" +
                "(C) '滑动' 意味着沿着表面平滑移动。" +
                "<br><br>" +
                "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 8,
    question: "The company's shareholders decided to __________ the current management in hopes of improving performance.",
    chinese_question: "公司的股东决定 __________ 现任管理层，以期改善业绩。",
    answers: [
        { option: "A", answer: "depose", chinese_answer: "罢免", chinese_romanization: "bàmiǎn" },
        { option: "B", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'depose' means to remove from office suddenly and forcefully, used figuratively here." +
        "<br><br>" +
        "(B) 'support' means to bear all or part of the weight of something; to hold up." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'praise' means to express warm approval or admiration.",
    chinese_explanation: "(A) '罢免' 意味着突然且强制地将其免职，这里是比喻用法。" +
        "<br><br>" +
        "(B) '支持' 意味着承担某物的全部或部分重量；支撑。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '赞扬' 意味着表达热烈的赞同或钦佩。"
    },
    {
        id: 9,
        question: "After much debate, they finally __________ their differences and moved forward.",
        chinese_question: "经过许多辩论，他们终于 __________ 了分歧并继续前进。",
        answers: [
            { option: "A", answer: "settled", chinese_answer: "解决", chinese_romanization: "jiějué" },
            { option: "B", answer: "ignited", chinese_answer: "点燃", chinese_romanization: "diǎnrán" },
            { option: "C", answer: "escalated", chinese_answer: "升级", chinese_romanization: "shēngjí" },
            { option: "D", answer: "provoked", chinese_answer: "激起", chinese_romanization: "jīqǐ" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'settled' metaphorically means resolved or reached an agreement on a dispute or conflict." +
            "<br><br>" +
            "(B) 'ignited' means catch fire or cause to catch fire." +
            "<br><br>" +
            "(C) 'escalated' means increase rapidly." +
            "<br><br>" +
            "(D) 'provoked' means stimulate or give rise to (a reaction or emotion, typically a strong or unwelcome one) in someone.",
        chinese_explanation: "(A) '解决' 比喻解决或达成协议来解决争端或冲突。" +
            "<br><br>" +
            "(B) '点燃' 意味着点火或引起火灾。" +
            "<br><br>" +
            "(C) '升级' 意味着迅速增加。" +
            "<br><br>" +
            "(D) '激起' 意味着刺激或引起（某人的反应或情绪，通常是强烈或不受欢迎的情绪）。"
    },
    {
        id: 10,
    question: "The hikers stopped to __________ their backpacks of unnecessary items before continuing up the mountain.",
    chinese_question: "登山者停下来将背包中的不必要物品 __________ 之后继续上山。",
    answers: [
        { option: "A", answer: "burden", chinese_answer: "负担", chinese_romanization: "fùdān" },
        { option: "B", answer: "disencumber", chinese_answer: "解脱", chinese_romanization: "jiětuō" },
        { option: "C", answer: "fill", chinese_answer: "装满", chinese_romanization: "zhuāngmǎn" },
        { option: "D", answer: "pack", chinese_answer: "打包", chinese_romanization: "dǎbāo" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'disencumber' means to free from a burden or impediment." +
        "<br><br>" +
        "(A) 'burden' means to load heavily." +
        "<br><br>" +
        "(C) 'fill' means to make full." +
        "<br><br>" +
        "(D) 'pack' means to place items into a container or bag for transport.",
    chinese_explanation: "(B) '解脱' 意味着从负担或障碍中解脱。" +
        "<br><br>" +
        "(A) '负担' 意味着重重地装载。" +
        "<br><br>" +
        "(C) '装满' 意味着使充满。" +
        "<br><br>" +
        "(D) '打包' 意味着将物品放入容器或包中以便运输。"
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
