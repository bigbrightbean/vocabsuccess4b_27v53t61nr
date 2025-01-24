// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The __________ between his public persona and private life caused many to question his integrity.",
    chinese_question: "他的公众形象和私生活之间的 __________ 使许多人质疑他的诚信。",
    answers: [
        { option: "A", answer: "consistency", chinese_answer: "一致性", chinese_romanization: "yīzhìxìng" },
        { option: "B", answer: "dissonance", chinese_answer: "不和谐", chinese_romanization: "bù héxié" },
        { option: "C", answer: "alignment", chinese_answer: "对齐", chinese_romanization: "duìqí" },
        { option: "D", answer: "consonance", chinese_answer: "一致", chinese_romanization: "yīzhì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'dissonance' means a lack of harmony or agreement." + 
        "<br><br>" + 
        "(A) 'consistency' means conformity in the application of something, typically that which is necessary for the sake of logic, accuracy, or fairness." + 
        "<br><br>" + 
        "(C) 'alignment' means arrangement in a straight line, or in correct or appropriate relative positions." + 
        "<br><br>" + 
        "(D) 'consonance' means agreement or compatibility between opinions or actions.",
    chinese_explanation: "(B) '不和谐'一词意味着缺乏和谐或一致。" + 
        "<br><br>" + 
        "(A) '一致性' 意味着在应用某事物时的符合性，通常是为了逻辑、准确或公平。" + 
        "<br><br>" + 
        "(C) '对齐' 意味着排列成一条直线，或在正确或适当的相对位置。" + 
        "<br><br>" + 
        "(D) '一致' 意味着意见或行动之间的协议或兼容性。"
    },
    {
        id: 2,
    question: "The writer described the creative __________ as both challenging and rewarding.",
    chinese_question: "作家描述了创作 __________ 是既具有挑战性又有回报的。",
    answers: [
        { option: "A", answer: "error", chinese_answer: "错误", chinese_romanization: "cuòwù" },
        { option: "B", answer: "process", chinese_answer: "过程", chinese_romanization: "guòchéng" },
        { option: "C", answer: "mistake", chinese_answer: "错误", chinese_romanization: "cuòwù" },
        { option: "D", answer: "accident", chinese_answer: "事故", chinese_romanization: "shìgù" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'process' means a series of actions or steps taken in order to achieve a particular end." + 
        "<br><br>" + 
        "(A) 'error' means a mistake." + 
        "<br><br>" + 
        "(C) 'mistake' means an action or judgment that is misguided or wrong." + 
        "<br><br>" + 
        "(D) 'accident' means an unfortunate incident that happens unexpectedly and unintentionally.",
    chinese_explanation: "(B) '过程' 意味着为了实现特定目标而采取的一系列行动或步骤。" + 
        "<br><br>" + 
        "(A) '错误' 意味着错误。" + 
        "<br><br>" + 
        "(C) '错误' 意味着误导或错误的行为或判断。" + 
        "<br><br>" + 
        "(D) '事故' 意味着意外且无意中发生的不幸事件。"
    },
    {
        id: 3,
    question: "The __________ between mind and body has been a topic of philosophical inquiry for centuries.",
    chinese_question: "心灵与身体之间的 __________ 几个世纪以来一直是哲学探究的主题。",
    answers: [
        { option: "A", answer: "unity", chinese_answer: "统一", chinese_romanization: "tǒngyī" },
        { option: "B", answer: "dichotomy", chinese_answer: "二分法", chinese_romanization: "èrfēnfǎ" },
        { option: "C", answer: "similarity", chinese_answer: "相似", chinese_romanization: "xiāngsì" },
        { option: "D", answer: "coherence", chinese_answer: "连贯性", chinese_romanization: "liánguànxìng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'dichotomy' means a division or contrast between two things that are represented as being opposed or entirely different." + 
        "<br><br>" + 
        "(A) 'unity' means the state of being united or joined as a whole." + 
        "<br><br>" + 
        "(C) 'similarity' means the state or fact of being similar." + 
        "<br><br>" + 
        "(D) 'coherence' means the quality of being logical and consistent.",
    chinese_explanation: "(B) '二分法'一词意味着两个事物之间的分裂或对比，这两个事物被描述为对立或完全不同。" + 
        "<br><br>" + 
        "(A) '统一' 意味着团结或联合为一个整体的状态。" + 
        "<br><br>" + 
        "(C) '相似' 意味着相似的状态或事实。" + 
        "<br><br>" + 
        "(D) '连贯性' 意味着逻辑和一致性的质量。"
    },
    {
        id: 4,
        question: "The __________ from his friends was hard to bear after he let them down.",
        chinese_question: "在让朋友们失望后，他们的 __________ 让他难以承受。",
        answers: [
            { option: "A", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" },
            { option: "B", answer: "reproach", chinese_answer: "责备", chinese_romanization: "zébèi" },
            { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "D", answer: "celebration", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'reproach' means expressing disapproval or disappointment." +
            "<br><br>" +
            "(A) 'praise' means the expression of approval or admiration for someone or something." +
            "<br><br>" +
            "(C) 'support' means to bear all or part of the weight of; hold up." +
            "<br><br>" +
            "(D) 'celebration' means the action of marking one's pleasure at an important event or occasion by engaging in enjoyable, typically social, activity.",
        chinese_explanation: "(B) '责备'一词意味着表示不赞成或失望。" +
            "<br><br>" +
            "(A) '赞美' 意味着对某人或某事表示赞同或钦佩。" +
            "<br><br>" +
            "(C) '支持' 意味着承受全部或部分重量；支撑。" +
            "<br><br>" +
            "(D) '庆祝' 意味着通过进行愉快的、通常是社交的活动来标志一个重要事件或场合的愉快行为。"
    },
    {
        id: 5,
    question: "The jewels sparkled with a dazzling __________ that caught everyone’s attention.",
    chinese_question: "珠宝闪耀着炫目的 __________，吸引了所有人的注意。",
    answers: [
        { option: "A", answer: "dullness", chinese_answer: "暗淡", chinese_romanization: "àndàn" },
        { option: "B", answer: "effulgence", chinese_answer: "光辉", chinese_romanization: "guānghuī" },
        { option: "C", answer: "darkness", chinese_answer: "黑暗", chinese_romanization: "hēi'àn" },
        { option: "D", answer: "gloom", chinese_answer: "阴暗", chinese_romanization: "yīn'àn" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'effulgence' means brilliant radiance or shining brightness." +
        "<br><br>" +
        "(A)'dullness' means lack of brightness, vividness, or sheen." +
        "<br><br>" +
        "(C)'darkness' means the partial or total absence of light." +
        "<br><br>" +
        "(D)'gloom' means partial or total darkness.",
    chinese_explanation: "(B) '光辉'一词意味着辉煌的光辉或明亮的光芒。" +
        "<br><br>" +
        "(A)'暗淡' 意味着缺乏亮度、鲜艳或光泽。" +
        "<br><br>" +
        "(C)'黑暗' 意味着部分或完全没有光。" +
        "<br><br>" +
        "(D)'阴暗' 意味着部分或完全的黑暗。"
    },
    {
        id: 6,
    question: "With great __________, she managed to turn the heated debate into a productive discussion.",
    chinese_question: "她巧妙地将激烈的辩论变成了一场富有成效的讨论，表现出极大的 __________。",
    answers: [
        { option: "A", answer: "finesse", chinese_answer: "技巧", chinese_romanization: "jìqiǎo" },
        { option: "B", answer: "recklessness", chinese_answer: "鲁莽", chinese_romanization: "lǔmǎng" },
        { option: "C", answer: "stubbornness", chinese_answer: "顽固", chinese_romanization: "wángù" },
        { option: "D", answer: "negligence", chinese_answer: "疏忽", chinese_romanization: "shūhū" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'finesse' means intricate and refined delicacy; skillful handling of a situation." + 
        "<br><br>" + 
        "(B) 'recklessness' means lack of regard for the danger or consequences of one's actions." + 
        "<br><br>" + 
        "(C) 'stubbornness' means dogged determination not to change one's attitude or position on something." + 
        "<br><br>" + 
        "(D) 'negligence' means failure to take proper care in doing something.",
    chinese_explanation: "(A) '技巧'一词意味着复杂而精细的技巧；巧妙处理情况。" + 
        "<br><br>" + 
        "(B) '鲁莽' 意味着对自己行为的危险或后果缺乏考虑。" + 
        "<br><br>" + 
        "(C) '顽固' 意味着坚决不改变某人的态度或立场。" + 
        "<br><br>" + 
        "(D) '疏忽' 意味着未能妥善处理某事。"
    },
    {
        id: 7,
        question: "The university received a significant __________ from an anonymous donor, enabling it to build a new library.",
        chinese_question: "大学收到了一位匿名捐赠者的巨额 __________，使其能够建造一座新图书馆。",
        answers: [
            { option: "A", answer: "largesse", chinese_answer: "慷慨捐赠", chinese_romanization: "kāngkǎi juānzèng" },
            { option: "B", answer: "debt", chinese_answer: "债务", chinese_romanization: "zhàiwù" },
            { option: "C", answer: "obligation", chinese_answer: "义务", chinese_romanization: "yìwù" },
            { option: "D", answer: "expense", chinese_answer: "费用", chinese_romanization: "fèiyòng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'largesse' means generosity in bestowing money or gifts upon others." +
            "<br><br>" +
            "(B) 'debt' means something, typically money, that is owed or due." +
            "<br><br>" +
            "(C) 'obligation' means an act or course of action to which a person is morally or legally bound." +
            "<br><br>" +
            "(D) 'expense' means the cost required for something; the money spent on something.",
        chinese_explanation: "(A) '慷慨捐赠' 意味着慷慨地赠送金钱或礼物给他人。" +
            "<br><br>" +
            "(B) '债务' 意味着某物，通常是钱，是欠下或应付的。" +
            "<br><br>" +
            "(C) '义务' 意味着一个人道德或法律上必须履行的行为或行为过程。" +
            "<br><br>" +
            "(D) '费用' 意味着某事所需的成本；花费在某事上的钱。"
    },
    {
        id: 8,
    question: "In the business world, a corporate __________ is known for aggressively taking over other companies.",
    chinese_question: "在商业世界中，公司 __________ 以积极收购其他公司而闻名。",
    answers: [
        { option: "A", answer: "predator", chinese_answer: "掠夺者", chinese_romanization: "lüèduó zhě" },
        { option: "B", answer: "investor", chinese_answer: "投资者", chinese_romanization: "tóuzī zhě" },
        { option: "C", answer: "partner", chinese_answer: "合伙人", chinese_romanization: "héhuǒ rén" },
        { option: "D", answer: "ally", chinese_answer: "盟友", chinese_romanization: "méngyǒu" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'predator' means a person or group that ruthlessly exploits others." + 
        "<br><br>" + 
        "(B) 'investor' means a person who allocates capital with the expectation of a financial return." + 
        "<br><br>" + 
        "(C) 'partner' means a person who takes part in an undertaking with another or others." + 
        "<br><br>" + 
        "(D) 'ally' means a person or group that cooperates with another.",
    chinese_explanation: "(A) '掠夺者' 意味着无情地剥削他人的人或团体。" + 
        "<br><br>" + 
        "(B) '投资者' 意味着一个期望有金融回报的资本分配者。" + 
        "<br><br>" + 
        "(C) '合伙人' 意味着与另一人或他人一起参与某项事业的人。" + 
        "<br><br>" + 
        "(D) '盟友' 意味着与另一人合作的人或团体。"
    },
    {
        id: 9,
        question: "The monastery was like an __________ for those seeking spiritual refuge and a break from their daily lives.",
        chinese_question: "修道院就像是那些寻求精神避难和从日常生活中解脱的人们的 __________。",
        answers: [
            { option: "A", answer: "asylum", chinese_answer: "避难所", chinese_romanization: "bìnàn suǒ" },
            { option: "B", answer: "entertainment", chinese_answer: "娱乐", chinese_romanization: "yúlè" },
            { option: "C", answer: "distraction", chinese_answer: "分心", chinese_romanization: "fēnxīn" },
            { option: "D", answer: "business", chinese_answer: "生意", chinese_romanization: "shēngyì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'asylum' figuratively means a place of retreat and security." +
            "<br><br>" +
            "(B) 'entertainment' means the action of providing or being provided with amusement or enjoyment." +
            "<br><br>" +
            "(C) 'distraction' means a thing that prevents someone from giving full attention to something else." +
            "<br><br>" +
            "(D) 'business' means a person's regular occupation, profession, or trade.",
        chinese_explanation: "(A) '避难所' 在此语境下意指一个避难和安全的地方。" +
            "<br><br>" +
            "(B) '娱乐' 意味着提供或获得娱乐或享受的行为。" +
            "<br><br>" +
            "(C) '分心' 意味着使某人无法全神贯注于其他事情的事物。" +
            "<br><br>" +
            "(D) '生意' 意味着一个人的常规职业、专业或贸易。"
    },
    {
        id: 10,
    question: "His frequent __________ on morality tired his friends.",
    chinese_question: "他频繁的关于道德的 __________ 让朋友们感到厌倦。",
    answers: [
        { option: "A", answer: "harangue", chinese_answer: "训斥", chinese_romanization: "xùnchì" },
        { option: "B", answer: "compliment", chinese_answer: "赞美", chinese_romanization: "zànměi" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "entertain", chinese_answer: "娱乐", chinese_romanization: "yúlè" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'harangue' means a lengthy and aggressive speech, used figuratively here." + 
        "<br><br>" + 
        "(B) 'compliment' means a polite expression of praise or admiration." + 
        "<br><br>" + 
        "(C) 'ignore' means to refuse to take notice of or acknowledge." + 
        "<br><br>" + 
        "(D) 'entertain' means to provide someone with amusement or enjoyment.",
    chinese_explanation: "(A) '训斥' 意味着冗长而激烈的讲话，这里是比喻用法。" + 
        "<br><br>" + 
        "(B) '赞美' 意味着礼貌的赞扬或钦佩。" + 
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
