// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The board meeting turned into __________ when the controversial proposal was introduced.",
    chinese_question: "当有争议的提案被提出时，董事会会议变成了 __________。",
    answers: [
        { option: "A", answer: "peace", chinese_answer: "和平", chinese_romanization: "hépíng" },
        { option: "B", answer: "pandemonium", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
        { option: "C", answer: "quiet", chinese_answer: "安静", chinese_romanization: "ānjìng" },
        { option: "D", answer: "unity", chinese_answer: "团结", chinese_romanization: "tuánjié" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'pandemonium' means wild and noisy disorder or confusion; uproar." + 
        "<br><br>" + 
        "(A) 'peace' means freedom from disturbance." + 
        "<br><br>" + 
        "(C) 'quiet' means making little or no noise." + 
        "<br><br>" + 
        "(D) 'unity' means the state of being united or joined as a whole.",
    chinese_explanation: "(B) “混乱” 意味着狂野和嘈杂的混乱或骚动。" + 
        "<br><br>" + 
        "(A) '和平' 意味着没有干扰。" + 
        "<br><br>" + 
        "(C) '安静' 意味着几乎没有噪音。" + 
        "<br><br>" + 
        "(D) '团结' 意味着联合或结合成一个整体的状态。"
    },
    {
        id: 2,
    question: "Her __________ for additional resources was approved by the committee.",
    chinese_question: "她对额外资源的 __________ 得到了委员会的批准。",
    answers: [
        { option: "A", answer: "request", chinese_answer: "请求", chinese_romanization: "qǐngqiú" },
        { option: "B", answer: "refusal", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
        { option: "C", answer: "denial", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
        { option: "D", answer: "suggestion", chinese_answer: "建议", chinese_romanization: "jiànyì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'request' means an act of asking politely or formally for something." + 
        "<br><br>" + 
        "(B) 'refusal' means an act of denying or rejecting something offered or requested." + 
        "<br><br>" + 
        "(C) 'denial' means the action of declaring something to be untrue." + 
        "<br><br>" + 
        "(D) 'suggestion' means an idea or plan put forward for consideration.",
    chinese_explanation: "(A) '请求' 意味着礼貌或正式地要求某事。" + 
        "<br><br>" + 
        "(B) '拒绝' 意味着否认或拒绝所提供或要求的东西。" + 
        "<br><br>" + 
        "(C) '否认' 意味着宣称某事不真实的行为。" + 
        "<br><br>" + 
        "(D) '建议' 意味着提出供考虑的想法或计划。"
    },
    {
        id: 3,
    question: "Despite her best __________, she couldn't convince them to change their minds.",
    chinese_question: "尽管她尽了最大努力，她还是无法说服他们改变主意。",
    answers: [
        { option: "A", answer: "distractions", chinese_answer: "分心", chinese_romanization: "fēn xīn" },
        { option: "B", answer: "attempts", chinese_answer: "尝试", chinese_romanization: "chángshì" },
        { option: "C", answer: "failures", chinese_answer: "失败", chinese_romanization: "shībài" },
        { option: "D", answer: "plans", chinese_answer: "计划", chinese_romanization: "jìhuà" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'attempts' means efforts to achieve or complete a difficult task or action." + 
        "<br><br>" + 
        "(A) 'distractions' means things that prevent someone from giving full attention to something else." + 
        "<br><br>" + 
        "(C) 'failures' means lack of success in achieving or accomplishing something." + 
        "<br><br>" + 
        "(D) 'plans' means detailed proposals for doing or achieving something.",
    chinese_explanation: "(B) “尝试” 意味着努力完成一项困难的任务或行动。" + 
        "<br><br>" + 
        "(A) '分心' 意味着阻止某人全神贯注于其他事情的事情。" + 
        "<br><br>" + 
        "(C) '失败' 意味着未能成功实现或完成某事。" + 
        "<br><br>" + 
        "(D) '计划' 意味着做某事或实现某事的详细提议。"
    },
    {
        id: 4,
question: "He knew the __________ of speaking out against the company's unethical practices.",
chinese_question: "他知道对公司不道德行为发表意见的 __________。",
answers: [
    { option: "A", answer: "benefits", chinese_answer: "好处", chinese_romanization: "hǎochù" },
    { option: "B", answer: "hazards", chinese_answer: "风险", chinese_romanization: "fēngxiǎn" },
    { option: "C", answer: "pleasures", chinese_answer: "乐趣", chinese_romanization: "lèqù" },
    { option: "D", answer: "comforts", chinese_answer: "舒适", chinese_romanization: "shūshì" }
],
correctAnswer: "B",
explanation: "(B) 'hazards' means dangers or risks. Figuratively, it can mean potential negative consequences or risks." +
    "<br><br>" +
    "(A) 'benefits' means advantages or profits gained from something." +
    "<br><br>" +
    "(C) 'pleasures' means feelings of happy satisfaction and enjoyment." +
    "<br><br>" +
    "(D) 'comforts' means things that contribute to physical ease and well-being.",
chinese_explanation: "(B) '风险'一词意味着危险或风险。比喻地，它可以表示潜在的负面后果或风险。" +
    "<br><br>" +
    "(A) '好处' 意味着从某事中获得的好处或利益。" +
    "<br><br>" +
    "(C) '乐趣' 意味着快乐满意和享受的感觉。" +
    "<br><br>" +
    "(D) '舒适' 意味着有助于身体舒适和幸福的东西。"
    },
    {
        id: 5,
    question: "Their conversation was filled with __________, as they exchanged witty remarks and laughed together.",
    chinese_question: "他们的谈话充满了 __________，互相交换机智的评论并一起笑。",
    answers: [
        { option: "A", answer: "anger", chinese_answer: "愤怒", chinese_romanization: "fènnù" },
        { option: "B", answer: "persiflage", chinese_answer: "打趣", chinese_romanization: "dǎqù" },
        { option: "C", answer: "silence", chinese_answer: "沉默", chinese_romanization: "chénmò" },
        { option: "D", answer: "confusion", chinese_answer: "混乱", chinese_romanization: "hùnluàn" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'persiflage' means light and slightly contemptuous mockery or banter." + 
        "<br><br>" + 
        "(A) 'anger' means a strong feeling of annoyance, displeasure, or hostility." + 
        "<br><br>" + 
        "(C) 'silence' means the complete absence of sound." + 
        "<br><br>" + 
        "(D) 'confusion' means lack of understanding; uncertainty.",
    chinese_explanation: "(B) '打趣'一词意味着轻松且略带轻蔑的嘲弄或玩笑。" + 
        "<br><br>" + 
        "(A) '愤怒' 意味着一种强烈的恼怒、不快或敌对的感觉。" + 
        "<br><br>" + 
        "(C) '沉默' 意味着完全没有声音。" + 
        "<br><br>" + 
        "(D) '混乱' 意味着缺乏理解；不确定性。"
    },
    {
        id: 6,
        question: "Her __________ for environmental conservation drove her to volunteer for numerous clean-up projects.",
        chinese_question: "她对环境保护的 __________ 驱使她自愿参加了许多清理项目。",
        answers: [
                { option: "A", answer: "fervour", chinese_answer: "热情", chinese_romanization: "rèqíng" },
                { option: "B", answer: "apathy", chinese_answer: "冷淡", chinese_romanization: "lěngdàn" },
                { option: "C", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
                { option: "D", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'fervour' means intense and passionate feeling." +
            "<br><br>" +
            "(B) 'apathy' means lack of interest, enthusiasm, or concern." +
            "<br><br>" +
            "(C) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(D) 'neglect' means the state or fact of being uncared for.",
        chinese_explanation: "(A) '热情' 意味着强烈而热情的感情。" +
            "<br><br>" +
            "(B) '冷淡' 意味着缺乏兴趣、热情或关心。" +
            "<br><br>" +
            "(C) '冷漠' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(D) '忽视' 意味着无人照顾的状态或事实。"
    },
    {
        id: 7,
        question: "The team’s morale was at its __________ after losing three consecutive games.",
        chinese_question: "连续输掉三场比赛后，团队的士气达到了 __________。",
        answers: [
            { option: "A", answer: "nadir", chinese_answer: "最低点", chinese_romanization: "zuìdī diǎn" },
            { option: "B", answer: "summit", chinese_answer: "顶峰", chinese_romanization: "dǐngfēng" },
            { option: "C", answer: "resurgence", chinese_answer: "复兴", chinese_romanization: "fùxīng" },
            { option: "D", answer: "elevation", chinese_answer: "提升", chinese_romanization: "tíshēng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'nadir' figuratively means the lowest point in the fortunes of a person or organization." +
            "<br><br>" +
            "(B) 'summit' means the highest point of a hill or mountain." +
            "<br><br>" +
            "(C) 'resurgence' means an increase or revival after a period of little activity, popularity, or occurrence." +
            "<br><br>" +
            "(D) 'elevation' means the action or fact of raising or being raised to a higher or more important level, state, or position.",
        chinese_explanation: "(A) '最低点' 在此语境下意指一个人或组织财富的最低点。" +
            "<br><br>" +
            "(B) '顶峰' 意味着山丘或山的最高点。" +
            "<br><br>" +
            "(C) '复兴' 意味着经过一段时间的低活动、流行或发生后的增加或复兴。" +
            "<br><br>" +
            "(D) '提升' 意味着提升到更高或更重要的水平、状态或位置的行为或事实。"
    },
    {
        id: 8,
    question: "The __________ he received from his colleagues made him feel valued at work.",
    chinese_question: "他从同事那里获得的 __________ 让他在工作中感到被重视。",
    answers: [
        { option: "A", answer: "respect", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" },
        { option: "B", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "hostility", chinese_answer: "敌意", chinese_romanization: "díyì" },
        { option: "D", answer: "apathy", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'respect' means a feeling of deep admiration for someone or something elicited by their abilities, qualities, or achievements." + 
        "<br><br>" + 
        "(B) 'neglect' means failure to care for properly." + 
        "<br><br>" + 
        "(C) 'hostility' means hostile behavior; unfriendliness or opposition." + 
        "<br><br>" + 
        "(D) 'apathy' means lack of interest, enthusiasm, or concern.",
    chinese_explanation: "(A) '尊重' 意味着对某人的能力、品质或成就的深深钦佩之情。" + 
        "<br><br>" + 
        "(B) '忽视' 意味着未能妥善照顾。" + 
        "<br><br>" + 
        "(C) '敌意' 意味着敌对行为；不友好或反对。" + 
        "<br><br>" + 
        "(D) '冷漠' 意味着缺乏兴趣、热情或关心。"
    },
    {
        id: 9,
    question: "The government declared an __________ for all political prisoners.",
    chinese_question: "政府宣布对所有政治犯实行 __________。",
    answers: [
        { option: "A", answer: "punishment", chinese_answer: "惩罚", chinese_romanization: "chéngfá" },
        { option: "B", answer: "reward", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" },
        { option: "C", answer: "amnesty", chinese_answer: "大赦", chinese_romanization: "dàshè" },
        { option: "D", answer: "exile", chinese_answer: "流放", chinese_romanization: "liúfàng" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'amnesty' means an official pardon for people who have been convicted of political offenses." + 
        "<br><br>" + 
        "(A) 'punishment' means the infliction or imposition of a penalty as retribution for an offense." + 
        "<br><br>" + 
        "(B) 'reward' means a thing given in recognition of one's service, effort, or achievement." + 
        "<br><br>" + 
        "(D) 'exile' means the state of being barred from one's native country, typically for political or punitive reasons.",
    chinese_explanation: "(C) '大赦' 意味着对被判有政治罪的人进行官方赦免。" + 
        "<br><br>" + 
        "(A) '惩罚' 意味着作为对犯罪行为的报复而施加的处罚。" + 
        "<br><br>" + 
        "(B) '奖励' 意味着对某人服务、努力或成就的认可。" + 
        "<br><br>" + 
        "(D) '流放' 意味着因政治或惩罚原因被禁止回到自己的祖国的状态。"
    },
    {
        id: 10,
 question: "She found a new __________ of inspiration for her paintings in the beauty of the natural world.",
    chinese_question: "她在大自然的美丽中找到了新的 __________ 灵感来源。",
    answers: [
        { option: "A", answer: "source", chinese_answer: "来源", chinese_romanization: "láiyuán" },
        { option: "B", answer: "product", chinese_answer: "产品", chinese_romanization: "chǎnpǐn" },
        { option: "C", answer: "tool", chinese_answer: "工具", chinese_romanization: "gōngjù" },
        { option: "D", answer: "distraction", chinese_answer: "干扰", chinese_romanization: "gānrǎo" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'source' means a place, person, or thing from which something comes or can be obtained." + 
        "<br><br>" + 
        "(B) 'product' means an article or substance that is manufactured or refined for sale." + 
        "<br><br>" + 
        "(C) 'tool' means a device or implement used to carry out a particular function." + 
        "<br><br>" + 
        "(D) 'distraction' means a thing that prevents someone from giving full attention to something else.",
    chinese_explanation: "(A) '来源' 意味着某物来自或可以从中获得的地方、人物或事物。" + 
        "<br><br>" + 
        "(B) '产品' 意味着制造或提炼出售的物品或物质。" + 
        "<br><br>" + 
        "(C) '工具' 意味着用于执行特定功能的设备或器具。" + 
        "<br><br>" + 
        "(D) '干扰' 意味着阻止某人全神贯注于某事的事物。"
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
