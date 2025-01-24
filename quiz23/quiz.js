// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "Her __________ attitude towards traditional customs shocked the older generation, who valued these traditions deeply.",
    chinese_question: "她对传统习俗的 __________ 态度让老一辈感到震惊，他们对这些传统非常看重。",
    answers: [
        { option: "A", answer: "irreverent", chinese_answer: "不敬的", chinese_romanization: "bùjìng de" },
        { option: "B", answer: "reverent", chinese_answer: "虔诚的", chinese_romanization: "qiánchéng de" },
        { option: "C", answer: "conventional", chinese_answer: "传统的", chinese_romanization: "chuántǒng de" },
        { option: "D", answer: "orthodox", chinese_answer: "正统的", chinese_romanization: "zhèngtǒng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'irreverent' means showing a lack of respect for people or things that are generally taken seriously." +
        "<br><br>" +
        "(B) 'reverent' means feeling or showing deep and solemn respect." +
        "<br><br>" +
        "(C) 'conventional' means based on or in accordance with what is generally done or believed." +
        "<br><br>" +
        "(D) 'orthodox' means conforming to what is generally or traditionally accepted as right or true; established and approved.",
    chinese_explanation: "(A) '不敬的' 意味着对人或事物表现出缺乏应有的尊重，这些人或事物通常被认为是严肃的。" +
        "<br><br>" +
        "(B) '虔诚的' 意味着感到或表现出深深的和庄重的敬意。" +
        "<br><br>" +
        "(C) '传统的' 意味着基于或符合普遍做法或信仰的。" +
        "<br><br>" +
        "(D) '正统的' 意味着符合一般或传统上被认为正确或真实的；被认可和接受的。"
    },
    {
        id: 2,
        question: "Her __________ nature made her a favorite among friends, as she could easily carry a conversation and keep everyone entertained.",
        chinese_question: "她 __________ 的性格使她成为朋友中的最爱，因为她能够轻松地进行对话并让大家开心。",
        answers: [
            { option: "A", answer: "introverted", chinese_answer: "内向的", chinese_romanization: "nèixiàng de" },
            { option: "B", answer: "voluble", chinese_answer: "健谈的", chinese_romanization: "jiàntán de" },
            { option: "C", answer: "reserved", chinese_answer: "矜持的", chinese_romanization: "jīnchí de" },
            { option: "D", answer: "shy", chinese_answer: "害羞的", chinese_romanization: "hàixiū de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'voluble' means speaking or spoken incessantly and fluently." +
            "<br><br>" +
            "(A) 'introverted' means shy, reticent, and typically self-centered." +
            "<br><br>" +
            "(C) 'reserved' means slow to reveal emotion or opinions." +
            "<br><br>" +
            "(D) 'shy' means being reserved or having or showing nervousness or timidity in the company of other people.",
        chinese_explanation: "(B) '健谈的' 意味着不停地和流利地说话或讲话。" +
            "<br><br>" +
            "(A) '内向的' 意味着害羞、沉默寡言，通常以自我为中心。" +
            "<br><br>" +
            "(C) '矜持的' 意味着慢于表达情感或观点。" +
            "<br><br>" +
            "(D) '害羞的' 意味着在他人面前表现出保留或紧张、胆怯。"
    },
    {
        id: 3,
    question: "Her __________ interest in environmental issues led her to join several conservation groups.",
    chinese_question: "她对环境问题的 __________ 兴趣使她加入了几个保护团体。",
    answers: [
        { option: "A", answer: "waning", chinese_answer: "减弱的", chinese_romanization: "jiǎnruò de" },
        { option: "B", answer: "nascent", chinese_answer: "初期的", chinese_romanization: "chūqī de" },
        { option: "C", answer: "declining", chinese_answer: "下降的", chinese_romanization: "xiàjiàng de" },
        { option: "D", answer: "dwindling", chinese_answer: "逐渐减少的", chinese_romanization: "zhújiàn jiǎnshǎo de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'nascent' means just coming into existence and beginning to display signs of future potential." +
        "<br><br>" +
        "(A) 'waning' means decreasing in size, extent, or degree." +
        "<br><br>" +
        "(C) 'declining' means becoming smaller, fewer, or less; decreasing." +
        "<br><br>" +
        "(D) 'dwindling' means gradually diminishing in size, amount, or strength.",
    chinese_explanation: "(B) '初期的' 意味着刚刚出现并开始显示未来潜力的。" +
        "<br><br>" +
        "(A) '减弱的' 意味着在规模、范围或程度上减少的。" +
        "<br><br>" +
        "(C) '下降的' 意味着变得更小、更少或减少的。" +
        "<br><br>" +
        "(D) '逐渐减少的' 意味着在规模、数量或强度上逐渐减少的。"
    },
    {
        id: 4,
    question: "Her mind was a __________ ground for creative ideas, constantly coming up with new and innovative concepts.",
    chinese_question: "她的头脑是创造性想法的 __________ 土地，不断涌现出新的和创新的概念。",
    answers: [
        { option: "A", answer: "barren", chinese_answer: "贫瘠的", chinese_romanization: "pínjí de" },
        { option: "B", answer: "fertile", chinese_answer: "肥沃的", chinese_romanization: "féiwò de" },
        { option: "C", answer: "unproductive", chinese_answer: "无成果的", chinese_romanization: "wú chéngguǒ de" },
        { option: "D", answer: "sterile", chinese_answer: "不育的", chinese_romanization: "bù yù de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'fertile' means producing many new and inventive ideas." +
        "<br><br>" +
        "(A) 'barren' means unproductive or unfruitful." +
        "<br><br>" +
        "(C) 'unproductive' means not producing or able to produce large amounts of goods, crops, or other commodities." +
        "<br><br>" +
        "(D) 'sterile' means not able to produce children or young, or (of land) unable to produce crops.",
    chinese_explanation: "(B) '肥沃的' 意味着产生许多新的和有创造性的想法。" +
        "<br><br>" +
        "(A) '贫瘠的' 意味着无生产力的或无成果的。" +
        "<br><br>" +
        "(C) '无成果的' 意味着不能生产大量商品、作物或其他商品的。" +
        "<br><br>" +
        "(D) '不育的' 意味着不能生育孩子或年轻的，或（土地）不能生产作物的。"
    },
    {
        id: 5,
    question: "Her __________ refusal to apologize for her mistakes alienated her from her colleagues, who found her arrogance insufferable.",
    chinese_question: "她 __________ 地拒绝为自己的错误道歉，这使她与同事们疏远了，同事们觉得她的傲慢难以忍受。",
    answers: [
        { option: "A", answer: "impudent", chinese_answer: "无礼的", chinese_romanization: "wúlǐ de" },
        { option: "B", answer: "remorseful", chinese_answer: "懊悔的", chinese_romanization: "àohuǐ de" },
        { option: "C", answer: "contrite", chinese_answer: "悔罪的", chinese_romanization: "huǐzuì de" },
        { option: "D", answer: "apologetic", chinese_answer: "道歉的", chinese_romanization: "dàoqiàn de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'impudent' means not showing due respect for another person; impertinent." +
        "<br><br>" +
        "(B) 'remorseful' means filled with regret or guilt." +
        "<br><br>" +
        "(C) 'contrite' means feeling or expressing remorse or penitence; affected by guilt." +
        "<br><br>" +
        "(D) 'apologetic' means expressing regret for having done something wrong.",
    chinese_explanation: "(A) '无礼的' 意味着没有对他人表现出应有的尊重；无礼的。" +
        "<br><br>" +
        "(B) '懊悔的' 意味着充满遗憾或内疚的。" +
        "<br><br>" +
        "(C) '悔罪的' 意味着感到或表达悔恨或忏悔的；因内疚而受到影响的。" +
        "<br><br>" +
        "(D) '道歉的' 意味着表达对做错事的遗憾的。"
    },
    {
        id: 6,
    question: "Her __________ smile hid her true intentions, as she planned to deceive everyone at the meeting.",
    chinese_question: "她的 __________ 微笑隐藏了她的真实意图，因为她计划在会议上欺骗所有人。",
    answers: [
        { option: "A", answer: "fraudulent", chinese_answer: "欺诈的", chinese_romanization: "qīzhà de" },
        { option: "B", answer: "genuine", chinese_answer: "真实的", chinese_romanization: "zhēnshí de" },
        { option: "C", answer: "sincere", chinese_answer: "真诚的", chinese_romanization: "zhēnchéng de" },
        { option: "D", answer: "honest", chinese_answer: "诚实的", chinese_romanization: "chéngshí de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'fraudulent' means obtained, done by, or involving deception, especially criminal deception." +
        "<br><br>" +
        "(B) 'genuine' means truly what something is said to be; authentic." +
        "<br><br>" +
        "(C) 'sincere' means free from pretense or deceit; proceeding from genuine feelings." +
        "<br><br>" +
        "(D) 'honest' means free of deceit; truthful and sincere.",
    chinese_explanation: "(A) '欺诈的' 意味着通过欺骗获得的、进行的或涉及的，尤其是刑事欺骗。" +
        "<br><br>" +
        "(B) '真实的' 意味着真正的东西；真实的。" +
        "<br><br>" +
        "(C) '真诚的' 意味着没有虚伪或欺骗的；源于真实感情的。" +
        "<br><br>" +
        "(D) '诚实的' 意味着没有欺骗的；诚实和真诚的。"
    },
    {
        id: 7,
    question: "Despite the harsh criticism, he remained __________, showing no emotion and continuing with his work.",
    chinese_question: "尽管受到严厉批评，他仍然保持 __________，没有表现出任何情绪，继续工作。",
    answers: [
        { option: "A", answer: "emotional", chinese_answer: "情绪化的", chinese_romanization: "qíngxù huà de" },
        { option: "B", answer: "sensitive", chinese_answer: "敏感的", chinese_romanization: "mǐngǎn de" },
        { option: "C", answer: "stoic", chinese_answer: "坚忍的", chinese_romanization: "jiānrěn de" },
        { option: "D", answer: "reactive", chinese_answer: "反应的", chinese_romanization: "fǎnyìng de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'stoic' means enduring pain and hardship without showing feelings or complaining." +
        "<br><br>" +
        "(A) 'emotional' means relating to a person's emotions." +
        "<br><br>" +
        "(B) 'sensitive' means quick to detect or respond to slight changes, signals, or influences." +
        "<br><br>" +
        "(D) 'reactive' means showing a response to a stimulus.",
    chinese_explanation: "(C) '坚忍的' 意味着在痛苦和困难中不表现出感情或抱怨。" +
        "<br><br>" +
        "(A) '情绪化的' 意味着与人的情感有关的。" +
        "<br><br>" +
        "(B) '敏感的' 意味着对细微的变化、信号或影响快速作出反应。" +
        "<br><br>" +
        "(D) '反应的' 意味着对刺激表现出反应。"
    },
    {
        id: 8,
    question: "The lawyer asked the witness questions that were __________ to the case to gather useful information.",
    chinese_question: "律师向证人提出了与案件 __________ 的问题，以收集有用的信息。",
    answers: [
        { option: "A", answer: "irrelevant", chinese_answer: "无关的", chinese_romanization: "wúguān de" },
        { option: "B", answer: "pertinent", chinese_answer: "相关的", chinese_romanization: "xiāngguān de" },
        { option: "C", answer: "random", chinese_answer: "随意的", chinese_romanization: "suíyì de" },
        { option: "D", answer: "trivial", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'pertinent' means relevant or applicable to a particular matter; apposite." +
        "<br><br>" +
        "(A) 'irrelevant' means not connected with or relevant to something." +
        "<br><br>" +
        "(C) 'random' means made, done, happening, or chosen without method or conscious decision." +
        "<br><br>" +
        "(D) 'trivial' means of little value or importance.",
    chinese_explanation: "(B) '相关的' 一词意味着与特定事项相关或适用的；恰当的。" +
        "<br><br>" +
        "(A) '无关的' 意味着与某事无关或不相关的。" +
        "<br><br>" +
        "(C) '随意的' 意味着没有方法或有意识决定地做、发生或选择的。" +
        "<br><br>" +
        "(D) '微不足道的' 意味着价值或重要性很小的。"
    },
    {
        id: 9,
        question: "The CEO's __________ speech effectively communicated the company's goals and strategy without wasting time.",
        chinese_question: "首席执行官的 __________ 演讲有效地传达了公司的目标和战略，没有浪费时间。",
        answers: [
            { option: "A", answer: "verbose", chinese_answer: "啰嗦的", chinese_romanization: "luōsuo de" },
            { option: "B", answer: "succinct", chinese_answer: "简洁的", chinese_romanization: "jiǎnjié de" },
            { option: "C", answer: "drawn-out", chinese_answer: "拖长的", chinese_romanization: "tuōcháng de" },
            { option: "D", answer: "wordy", chinese_answer: "冗长的", chinese_romanization: "rǒngcháng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'succinct' means briefly and clearly expressed." +
            "<br><br>" +
            "(A) 'verbose' means using or expressed in more words than are needed." +
            "<br><br>" +
            "(C) 'drawn-out' means prolonged unnecessarily; lengthy." +
            "<br><br>" +
            "(D) 'wordy' means using or expressed in too many words.",
        chinese_explanation: "(B) '简洁的' 意味着简短而清楚地表达。" +
            "<br><br>" +
            "(A) '啰嗦的' 意味着使用或表达的词比需要的更多。" +
            "<br><br>" +
            "(C) '拖长的' 意味着不必要地延长的；冗长的。" +
            "<br><br>" +
            "(D) '冗长的' 意味着使用或表达的词比需要的更多。"
    },
    {
        id: 10,
        question: "Her __________ attitude towards criticism often led to heated arguments.",
        chinese_question: "她对批评的__________态度常常导致激烈的争论。",
        answers: [
            { option: "A", answer: "passive", chinese_answer: "被动的", chinese_romanization: "bèidòng de" },
            { option: "B", answer: "truculent", chinese_answer: "好斗的", chinese_romanization: "hàodòu de" },
            { option: "C", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbùguānxīn de" },
            { option: "D", answer: "accepting", chinese_answer: "接受的", chinese_romanization: "jiēshòu de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'truculent' means eager or quick to argue or fight; aggressively defiant." +
            "<br><br>" +
            "(A) 'passive' means accepting or allowing what happens or what others do, without active response or resistance." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'accepting' means consenting to receive or undertake something offered.",
        chinese_explanation: "(B) '好斗的'一词意味着急于或迅速争论或战斗；具有攻击性反抗的。" +
            "<br><br>" +
            "(A) '被动的' 意味着接受或允许发生的事情或别人所做的事情，没有积极的回应或反抗。" +
            "<br><br>" +
            "(C) '漠不关心的' 意味着没有特别的兴趣或同情；漠不关心的。" +
            "<br><br>" +
            "(D) '接受的' 意味着同意接受或承担提供的东西。"
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
