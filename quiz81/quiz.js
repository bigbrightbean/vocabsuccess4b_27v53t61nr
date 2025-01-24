// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
question: "She spoke with such __________ that her words seemed to dance through the room, enchanting everyone present.",
chinese_question: "她的讲话充满了 __________，她的话语似乎在房间里舞动，迷住了在场的每一个人。",
answers: [
    { option: "A", answer: "monotony", chinese_answer: "单调", chinese_romanization: "dāndiào" },
    { option: "B", answer: "cadences", chinese_answer: "韵律", chinese_romanization: "yùnlǜ" },
    { option: "C", answer: "interruptions", chinese_answer: "打断", chinese_romanization: "dǎduàn" },
    { option: "D", answer: "dissonance", chinese_answer: "不和谐", chinese_romanization: "bù héxié" }
],
correctAnswer: "B",
explanation: "(B) 'cadences' means rhythmic flows of a sequence of sounds or words." +
    "<br><br>" +
    "(A) 'monotony' means lack of variety and interest." +
    "<br><br>" +
    "(C) 'interruptions' means breaking the continuity of something." +
    "<br><br>" +
    "(D) 'dissonance' means lack of harmony among musical notes.",
chinese_explanation: "(B) '韵律' 意味着一系列声音或词语的节奏流动。" +
    "<br><br>" +
    "(A) '单调' 意味着缺乏多样性和趣味。" +
    "<br><br>" +
    "(C) '打断' 意味着打破连续性。" +
    "<br><br>" +
    "(D) '不和谐' 意味着音乐音符之间缺乏和谐。"
    },
    {
        id: 2,
        question: "The __________ of new ideas in the company led to stagnation and a lack of innovation.",
        chinese_question: "公司新想法的 __________ 导致了停滞和缺乏创新。",
        answers: [
            { option: "A", answer: "abundance", chinese_answer: "丰富", chinese_romanization: "fēngfù" },
            { option: "B", answer: "paucity", chinese_answer: "缺乏", chinese_romanization: "quēfá" },
            { option: "C", answer: "surplus", chinese_answer: "过剩", chinese_romanization: "guòshèng" },
            { option: "D", answer: "wealth", chinese_answer: "财富", chinese_romanization: "cáifù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'paucity' means the presence of something in only small or insufficient quantities or amounts; scarcity." +
            "<br><br>" +
            "(A) 'abundance' means a very large quantity of something." +
            "<br><br>" +
            "(C) 'surplus' means an amount of something left over when requirements have been met; an excess of production or supply." +
            "<br><br>" +
            "(D) 'wealth' means an abundance of valuable possessions or money.",
        chinese_explanation: "(B) '缺乏'一词意味着只有少量或不足数量的东西的存在；稀缺。" +
            "<br><br>" +
            "(A) '丰富' 意味着非常大量的东西。" +
            "<br><br>" +
            "(C) '过剩' 意味着在满足要求后剩余的东西；生产或供应过剩。" +
            "<br><br>" +
            "(D) '财富' 意味着大量有价值的财产或金钱。"
    },
    {
        id: 3,
    question: "The endless __________ of his complaints made everyone in the office weary.",
    chinese_question: "他不断 __________ 的抱怨使办公室的每个人都感到疲惫。",
    answers: [
        { option: "A", answer: "cheer", chinese_answer: "欢呼", chinese_romanization: "huānhū" },
        { option: "B", answer: "drone", chinese_answer: "单调", chinese_romanization: "dāndiào" },
        { option: "C", answer: "laughter", chinese_answer: "笑声", chinese_romanization: "xiàoshēng" },
        { option: "D", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'drone' used figuratively means to talk in a monotonous tone, making it boring or repetitive." + 
        "<br><br>" + 
        "(A) 'cheer' means a shout of encouragement, praise, or joy." + 
        "<br><br>" + 
        "(C) 'laughter' means the action or sound of laughing." + 
        "<br><br>" + 
        "(D) 'excitement' means a feeling of great enthusiasm and eagerness.",
    chinese_explanation: "(B) '单调' 在比喻意义上指以单调的语调说话，使其变得无聊或重复。" + 
        "<br><br>" + 
        "(A) '欢呼' 意味着鼓励、赞扬或喜悦的喊叫。" + 
        "<br><br>" + 
        "(C) '笑声' 意味着笑的动作或声音。" + 
        "<br><br>" + 
        "(D) '兴奋' 意味着极大的热情和渴望。"
    },
    {
        id: 4,
    question: "The __________ of his once-sharp mind was painfully clear as he struggled to remember basic details.",
    chinese_question: "当他努力记住基本细节时，他曾经敏锐的头脑的 __________ 显得格外痛苦。",
    answers: [
        { option: "A", answer: "sharpness", chinese_answer: "锐利", chinese_romanization: "ruìlì" },
        { option: "B", answer: "senescence", chinese_answer: "衰老", chinese_romanization: "shuāilǎo" },
        { option: "C", answer: "acuity", chinese_answer: "敏锐", chinese_romanization: "mǐnruì" },
        { option: "D", answer: "clarity", chinese_answer: "清晰", chinese_romanization: "qīngxī" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'senescence' means the condition or process of deterioration with age." +
        "<br><br>" +
        "(A)'sharpness' means the quality of having an edge or point that can cut something." +
        "<br><br>" +
        "(C)'acuity' means sharpness or keenness of thought, vision, or hearing." +
        "<br><br>" +
        "(D)'clarity' means the quality of being clear, in particular.",
    chinese_explanation: "(B) '衰老'一词意味着随着年龄的增长而恶化的状态或过程。" +
        "<br><br>" +
        "(A)'锐利' 意味着具有可以切割某物的边缘或点的质量。" +
        "<br><br>" +
        "(C)'敏锐' 意味着思想、视力或听力的敏锐。" +
        "<br><br>" +
        "(D)'清晰' 意味着清晰的质量，特别是。"
    },
    {
        id: 5,
    question: "Even during the tense meeting, his __________ made him stand out, as if he was completely unfazed by the situation.",
    chinese_question: "即使在紧张的会议中，他的 __________ 使他与众不同，仿佛对局势完全不以为然。",
    answers: [
        { option: "A", answer: "anxiety", chinese_answer: "焦虑", chinese_romanization: "jiāolǜ" },
        { option: "B", answer: "insouciance", chinese_answer: "漫不经心", chinese_romanization: "mànbùjīngxīn" },
        { option: "C", answer: "focus", chinese_answer: "专注", chinese_romanization: "zhuānzhù" },
        { option: "D", answer: "agitation", chinese_answer: "激动", chinese_romanization: "jīdòng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'insouciance' means casual lack of concern; indifference." + 
        "<br><br>" + 
        "(A) 'anxiety' means a feeling of worry, nervousness, or unease." + 
        "<br><br>" + 
        "(C) 'focus' means the center of interest or activity." + 
        "<br><br>" + 
        "(D) 'agitation' means a state of anxiety or nervous excitement.",
    chinese_explanation: "(B) '漫不经心'一词意味着随意缺乏关心；冷漠。" + 
        "<br><br>" + 
        "(A) '焦虑' 意味着担心、紧张或不安的感觉。" + 
        "<br><br>" + 
        "(C) '专注' 意味着兴趣或活动的中心。" + 
        "<br><br>" + 
        "(D) '激动' 意味着焦虑或紧张兴奋的状态。"
    },
    {
        id: 6,
    question: "The company is in the __________ of restructuring to improve efficiency.",
    chinese_question: "公司正在 __________ 重组以提高效率。",
    answers: [
        { option: "A", answer: "process", chinese_answer: "过程", chinese_romanization: "guòchéng" },
        { option: "B", answer: "accident", chinese_answer: "事故", chinese_romanization: "shìgù" },
        { option: "C", answer: "delay", chinese_answer: "延迟", chinese_romanization: "yánchí" },
        { option: "D", answer: "failure", chinese_answer: "失败", chinese_romanization: "shībài" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'process' means a series of actions or steps taken in order to achieve a particular end." + 
        "<br><br>" + 
        "(B) 'accident' means an unfortunate incident that happens unexpectedly and unintentionally." + 
        "<br><br>" + 
        "(C) 'delay' means a period of time by which something is late or postponed." + 
        "<br><br>" + 
        "(D) 'failure' means lack of success in doing or achieving something.",
    chinese_explanation: "(A) '过程' 意味着为了实现特定目标而采取的一系列行动或步骤。" + 
        "<br><br>" + 
        "(B) '事故' 意味着意外且无意中发生的不幸事件。" + 
        "<br><br>" + 
        "(C) '延迟' 意味着某事迟到或推迟的一段时间。" + 
        "<br><br>" + 
        "(D) '失败' 意味着在做或实现某事上的失败。"
    },
    {
        id: 7,
        question: "His __________ was exposed when it was revealed that he had been falsifying documents to gain an advantage in the competition.",
        chinese_question: "当他通过伪造文件来获得竞争优势的事实被揭露出来时，他的 __________ 也暴露无遗。",
        answers: [
                { option: "A", answer: "integrity", chinese_answer: "正直", chinese_romanization: "zhèngzhí" },
                { option: "B", answer: "subterfuge", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" },
                { option: "C", answer: "transparency", chinese_answer: "透明", chinese_romanization: "tòumíng" },
                { option: "D", answer: "honesty", chinese_answer: "诚实", chinese_romanization: "chéngshí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'subterfuge' means deceit used in order to achieve one's goal." +
            "<br><br>" +
            "(A) 'integrity' means the quality of being honest and having strong moral principles." +
            "<br><br>" +
            "(C) 'transparency' means the condition of being transparent." +
            "<br><br>" +
            "(D) 'honesty' means the quality of being honest.",
        chinese_explanation: "(B) '欺骗'一词意味着为了实现某人的目标而使用的欺骗手段。" +
            "<br><br>" +
            "(A) '正直' 意味着诚实并具有强烈道德原则的品质。" +
            "<br><br>" +
            "(C) '透明' 意味着透明的条件。" +
            "<br><br>" +
            "(D) '诚实' 意味着诚实的品质。"
    },
    {
        id: 8,
        question: "The old city walls are a __________ of its historical significance and former strength.",
        chinese_question: "古城墙是其历史意义和昔日强盛的 __________。",
        answers: [
            { option: "A", answer: "vestige", chinese_answer: "遗迹", chinese_romanization: "yíjì" },
            { option: "B", answer: "symbol", chinese_answer: "象征", chinese_romanization: "xiàngzhēng" },
            { option: "C", answer: "creation", chinese_answer: "创造", chinese_romanization: "chuàngzào" },
            { option: "D", answer: "anticipation", chinese_answer: "预期", chinese_romanization: "yùqī" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'vestige' figuratively means a trace or remnant of something that is disappearing or no longer exists." +
            "<br><br>" +
            "(B) 'symbol' means a thing that represents or stands for something else, especially a material object representing something abstract." +
            "<br><br>" +
            "(C) 'creation' means the action or process of bringing something into existence." +
            "<br><br>" +
            "(D) 'anticipation' means the action of anticipating something; expectation or prediction.",
        chinese_explanation: "(A) '遗迹' 在此语境下意指某物正在消失或不再存在的痕迹或遗迹。" +
            "<br><br>" +
            "(B) '象征' 意味着代表或象征其他事物的东西，尤其是代表某些抽象事物的物质对象。" +
            "<br><br>" +
            "(C) '创造' 意味着使某物存在的行动或过程。" +
            "<br><br>" +
            "(D) '预期' 意味着预料某事的行为；期望或预测。"
    },
    {
        id: 9,
    question: "Instant __________ from junk food can lead to long-term health issues.",
    chinese_question: "垃圾食品带来的即时 __________ 可能导致长期的健康问题。",
    answers: [
        { option: "A", answer: "gratification", chinese_answer: "满足", chinese_romanization: "mǎnzú" },
        { option: "B", answer: "denial", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
        { option: "C", answer: "regret", chinese_answer: "后悔", chinese_romanization: "hòuhuǐ" },
        { option: "D", answer: "patience", chinese_answer: "耐心", chinese_romanization: "nàixīn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'gratification' means pleasure, especially when gained from the satisfaction of a desire." + 
        "<br><br>" + 
        "(B) 'denial' means the action of declaring something to be untrue." + 
        "<br><br>" + 
        "(C) 'regret' means a feeling of sadness, repentance, or disappointment over something that has happened or been done." + 
        "<br><br>" + 
        "(D) 'patience' means the capacity to accept or tolerate delay, trouble, or suffering without getting angry or upset.",
    chinese_explanation: "(A) '满足' 意味着快乐，尤其是从实现愿望中获得的快乐。" + 
        "<br><br>" + 
        "(B) '否认' 意味着宣称某事不真实的行为。" + 
        "<br><br>" + 
        "(C) '后悔' 意味着对发生的或做过的事情感到悲伤、悔恨或失望。" + 
        "<br><br>" + 
        "(D) '耐心' 意味着在不生气或不难过的情况下接受或容忍延迟、麻烦或痛苦的能力。"
    },
    {
        id: 10,
        question: "His use of __________ was apparent when he twisted the facts to suit his narrative, confusing many people in the process.",
        chinese_question: "当他歪曲事实以符合自己的叙述时，他的 __________ 很明显，这让许多人感到困惑。",
        answers: [
                { option: "A", answer: "integrity", chinese_answer: "正直", chinese_romanization: "zhèngzhí" },
                { option: "B", answer: "sophistry", chinese_answer: "诡辩", chinese_romanization: "guǐbiàn" },
                { option: "C", answer: "transparency", chinese_answer: "透明", chinese_romanization: "tòumíng" },
                { option: "D", answer: "sincerity", chinese_answer: "真诚", chinese_romanization: "zhēnchéng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sophistry' means the use of clever but false arguments, especially with the intention of deceiving." +
            "<br><br>" +
            "(A) 'integrity' means the quality of being honest and having strong moral principles." +
            "<br><br>" +
            "(C) 'transparency' means the condition of being transparent." +
            "<br><br>" +
            "(D) 'sincerity' means the quality of being free from pretense, deceit, or hypocrisy.",
        chinese_explanation: "(B) '诡辩'一词意味着使用巧妙但虚假的论点，尤其是为了欺骗。" +
            "<br><br>" +
            "(A) '正直' 意味着诚实并具有强烈道德原则的品质。" +
            "<br><br>" +
            "(C) '透明' 意味着透明的条件。" +
            "<br><br>" +
            "(D) '真诚' 意味着没有虚伪、欺骗或伪善的品质。"
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
