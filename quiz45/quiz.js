// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "He made an __________ decision to resign rather than compromise his principles.",
    chinese_question: "他做出了 __________ 的决定，辞职而不是妥协他的原则。",
    answers: [
        { option: "A", answer: "dishonorable", chinese_answer: "不光彩的", chinese_romanization: "bù guāngcǎi de" },
        { option: "B", answer: "honourable", chinese_answer: "光荣的", chinese_romanization: "guāngróng de" },
        { option: "C", answer: "corrupt", chinese_answer: "腐败的", chinese_romanization: "fǔbài de" },
        { option: "D", answer: "deceitful", chinese_answer: "欺骗的", chinese_romanization: "qīpiàn de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'honourable' means bringing or worthy of honor." +
        "<br><br>" +
        "(A) 'dishonorable' means bringing shame or disgrace." +
        "<br><br>" +
        "(C) 'corrupt' means having or showing a willingness to act dishonestly in return for money or personal gain." +
        "<br><br>" +
        "(D) 'deceitful' means guilty of or involving deceit; deceiving or misleading others.",
    chinese_explanation: "(B) '光荣的' 意味着带来或值得荣誉的。" +
        "<br><br>" +
        "(A) '不光彩的' 意味着带来羞耻或耻辱。" +
        "<br><br>" +
        "(C) '腐败的' 意味着显示出愿意以不诚实的方式行事以换取金钱或个人利益。" +
        "<br><br>" +
        "(D) '欺骗的' 意味着有罪的或涉及欺骗；欺骗或误导他人。"
    },
    {
        id: 2,
        question: "The two countries reached an __________ agreement on trade, avoiding any further conflict.",
        chinese_question: "两国就贸易达成 __________ 协议，避免了进一步的冲突。",
        answers: [
                { option: "A", answer: "hostile", chinese_answer: "敌对的", chinese_romanization: "díduì de" },
                { option: "B", answer: "tense", chinese_answer: "紧张的", chinese_romanization: "jǐnzhāng de" },
                { option: "C", answer: "amicable", chinese_answer: "友好的", chinese_romanization: "yǒuhǎo de" },
                { option: "D", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'amicable' means having a spirit of friendliness; without serious disagreement or rancor." +
            "<br><br>" +
            "(A) 'hostile' means unfriendly; antagonistic." +
            "<br><br>" +
            "(B) 'tense' means unable to relax because of nervousness, anxiety, or stimulation." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(C) '友好的' 一词意味着有友好的精神；没有严重的分歧或怨恨。" +
            "<br><br>" +
            "(A) '敌对的' 意味着不友好的；对抗的。" +
            "<br><br>" +
            "(B) '紧张的' 意味着由于紧张、焦虑或刺激而无法放松的。" +
            "<br><br>" +
            "(D) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。"
    },
    {
        id: 3,
        question: "The report's __________ findings highlighted significant disparities in income across different regions.",
        chinese_question: "报告的 __________ 发现突显了不同地区收入的显著差异。",
        answers: [
            { option: "A", answer: "obscure", chinese_answer: "模糊的", chinese_romanization: "móhu de" },
            { option: "B", answer: "hidden", chinese_answer: "隐藏的", chinese_romanization: "yǐncáng de" },
            { option: "C", answer: "salient", chinese_answer: "显著的", chinese_romanization: "xiǎnzhù de" },
            { option: "D", answer: "irrelevant", chinese_answer: "无关的", chinese_romanization: "wúguān de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'salient' means most noticeable or important." +
            "<br><br>" +
            "(A) 'obscure' means not discovered or known about; uncertain." +
            "<br><br>" +
            "(B) 'hidden' means kept out of sight; concealed." +
            "<br><br>" +
            "(D) 'irrelevant' means not connected with or relevant to something.",
        chinese_explanation: "(C) '显著的' 意味着最显眼或最重要的。" +
            "<br><br>" +
            "(A) '模糊的' 意味着未被发现或未被了解的；不确定的。" +
            "<br><br>" +
            "(B) '隐藏的' 意味着隐藏的；隐藏的。" +
            "<br><br>" +
            "(D) '无关的' 意味着与某事不相关或无关的。"
    },
    {
        id: 4,
    question: "He was __________ by the company's decision to downsize, as he feared for his job security.",
    chinese_question: "公司决定缩减规模，他感到非常 __________，因为他担心自己的工作安全。",
    answers: [
        { option: "A", answer: "reassured", chinese_answer: "安心的", chinese_romanization: "ānxīn de" },
        { option: "B", answer: "elated", chinese_answer: "兴高采烈的", chinese_romanization: "xìnggāo cǎiliè de" },
        { option: "C", answer: "dismayed", chinese_answer: "沮丧的", chinese_romanization: "jǔsàng de" },
        { option: "D", answer: "content", chinese_answer: "满足的", chinese_romanization: "mǎnzú de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'dismayed' means feeling distress or alarm." +
        "<br><br>" +
        "(A) 'reassured' means say or do something to remove the doubts and fears of someone." +
        "<br><br>" +
        "(B) 'elated' means make (someone) ecstatically happy." +
        "<br><br>" +
        "(D) 'content' means in a state of peaceful happiness.",
    chinese_explanation: "(C) '沮丧的' 意味着感到困扰或惊慌。" +
        "<br><br>" +
        "(A) '安心的' 意味着说或做某事以消除某人的疑虑和恐惧。" +
        "<br><br>" +
        "(B) '兴高采烈的' 意味着使（某人）欣喜若狂。" +
        "<br><br>" +
        "(D) '满足的' 意味着处于平静的幸福状态。"
    },
    {
        id: 5,
    question: "He had a __________ way of thinking that often led to creative solutions.",
    chinese_question: "他有一种 __________ 的思维方式，经常能带来创造性的解决方案。",
    answers: [
        { option: "A", answer: "typical", chinese_answer: "典型的", chinese_romanization: "diǎnxíng de" },
        { option: "B", answer: "common", chinese_answer: "常见的", chinese_romanization: "chángjiàn de" },
        { option: "C", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
        { option: "D", answer: "peculiar", chinese_answer: "奇怪的", chinese_romanization: "qíguài de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'peculiar' means strange or unusual." +
        "<br><br>" +
        "(A) 'typical' means having the distinctive qualities of a particular type of person or thing." +
        "<br><br>" +
        "(B) 'common' means occurring, found, or done often; prevalent." +
        "<br><br>" +
        "(C) 'ordinary' means with no special or distinctive features; normal.",
    chinese_explanation: "(D) “奇怪的” 意味着奇怪或不寻常。" +
        "<br><br>" +
        "(A) '典型的' 意味着具有某种特定类型的人或物的独特品质。" +
        "<br><br>" +
        "(B) '常见的' 意味着经常发生、发现或完成的；普遍的。" +
        "<br><br>" +
        "(C) '普通的' 意味着没有特殊或独特的特征；正常的。"
    },
    {
        id: 6,
    question: "His __________ instincts kicked in whenever his friends were in trouble, making him the one they always turned to for help.",
    chinese_question: "每当他的朋友遇到麻烦时，他的 __________ 本能就会启动，使他成为他们总是寻求帮助的人。",
    answers: [
        { option: "A", answer: "protective", chinese_answer: "保护的", chinese_romanization: "bǎohù de" },
        { option: "B", answer: "passive", chinese_answer: "被动的", chinese_romanization: "bèidòng de" },
        { option: "C", answer: "detached", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
        { option: "D", answer: "uninterested", chinese_answer: "无兴趣的", chinese_romanization: "wú xìngqù de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'protective' means intended to protect someone or something." +
        "<br><br>" +
        "(B) 'passive' means accepting or allowing what happens or what others do, without active response or resistance." +
        "<br><br>" +
        "(C) 'detached' means aloof and objective." +
        "<br><br>" +
        "(D) 'uninterested' means not interested in or concerned about something or someone.",
    chinese_explanation: "(A) '保护的' 意味着旨在保护某人或某物的。" +
        "<br><br>" +
        "(B) '被动的' 意味着接受或允许发生的事情或他人的行为，而没有积极的反应或抵抗。" +
        "<br><br>" +
        "(C) '冷漠的' 意味着超然客观的。" +
        "<br><br>" +
        "(D) '无兴趣的' 意味着对某事或某人不感兴趣的或不关心的。"
    },
    {
        id: 7,
    question: "The journalist's __________ questions during the interview revealed truths that the politician had been trying to hide.",
    chinese_question: "记者在采访中提出的 __________ 问题揭示了政治家一直试图隐瞒的真相。",
    answers: [
        { option: "A", answer: "incisive", chinese_answer: "深刻的", chinese_romanization: "shēnkè de" },
        { option: "B", answer: "dull", chinese_answer: "沉闷的", chinese_romanization: "chénmèn de" },
        { option: "C", answer: "irrelevant", chinese_answer: "无关的", chinese_romanization: "wúguān de" },
        { option: "D", answer: "confusing", chinese_answer: "令人困惑的", chinese_romanization: "lìng rén kùnhuò de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'incisive' means intelligently analytical and clear-thinking." +
        "<br><br>" +
        "(B) 'dull' means lacking interest or excitement." +
        "<br><br>" +
        "(C) 'irrelevant' means not connected with or relevant to something." +
        "<br><br>" +
        "(D) 'confusing' means bewildering or perplexing.",
    chinese_explanation: "(A) '深刻的' 意味着聪明的分析和清晰的思维。" +
        "<br><br>" +
        "(B) '沉闷的' 意味着缺乏兴趣或兴奋的。" +
        "<br><br>" +
        "(C) '无关的' 意味着与某事无关的。" +
        "<br><br>" +
        "(D) '令人困惑的' 意味着令人迷惑或困惑的。"
    },
    {
        id: 8,
        question: "The judge must remain __________ and not show any bias towards either party.",
        chinese_question: "法官必须保持 __________，不对任何一方表现出偏见。",
        answers: [
                { option: "A", answer: "biased", chinese_answer: "有偏见的", chinese_romanization: "yǒu piānjiàn de" },
                { option: "B", answer: "partial", chinese_answer: "偏袒的", chinese_romanization: "piāntǎn de" },
                { option: "C", answer: "impartial", chinese_answer: "公正的", chinese_romanization: "gōngzhèng de" },
                { option: "D", answer: "subjective", chinese_answer: "主观的", chinese_romanization: "zhǔguān de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'impartial' means treating all rivals or disputants equally; fair and just." +
            "<br><br>" +
            "(A) 'biased' means unfairly prejudiced for or against someone or something." +
            "<br><br>" +
            "(B) 'partial' means favoring one side in a dispute above the other; biased." +
            "<br><br>" +
            "(D) 'subjective' means based on or influenced by personal feelings, tastes, or opinions.",
        chinese_explanation: "(C) '公正的' 一词意味着平等对待所有对手或争论者；公平和公正的。" +
            "<br><br>" +
            "(A) '有偏见的' 意味着对某人或某事不公平地持有偏见。" +
            "<br><br>" +
            "(B) '偏袒的' 意味着在争论中偏袒一方的；有偏见的。" +
            "<br><br>" +
            "(D) '主观的' 意味着基于或受个人感情、喜好或意见影响的。"
    },
    {
        id: 9,
        question: "The judge's __________ attention to fairness ensured that justice was served in every case.",
        chinese_question: "法官对公平的 __________ 关注确保了每个案件都能得到公正的处理。",
        answers: [
            { option: "A", answer: "partial", chinese_answer: "偏袒的", chinese_romanization: "piāntǎn de" },
            { option: "B", answer: "biased", chinese_answer: "有偏见的", chinese_romanization: "yǒu piānjiàn de" },
            { option: "C", answer: "scrupulous", chinese_answer: "细心的", chinese_romanization: "xìxīn de" },
            { option: "D", answer: "negligent", chinese_answer: "疏忽的", chinese_romanization: "shūhū de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'scrupulous' means having moral integrity; acting in strict regard for what is considered right or proper." +
            "<br><br>" +
            "(A) 'partial' means favoring one side in a dispute above the other; biased." +
            "<br><br>" +
            "(B) 'biased' means unfairly prejudiced for or against someone or something." +
            "<br><br>" +
            "(D) 'negligent' means failing to take proper care in doing something.",
        chinese_explanation: "(C) '细心的' 意味着有道德诚信；严格遵守被认为是正确或适当的事情。" +
            "<br><br>" +
            "(A) '偏袒的' 意味着在争议中偏袒一方；有偏见的。" +
            "<br><br>" +
            "(B) '有偏见的' 意味着对某人或某事不公平地持有成见的。" +
            "<br><br>" +
            "(D) '疏忽的' 意味着未能妥善照顾某事的。"
    },
    {
        id: 10,
        question: "The __________ mood in the office was palpable after the announcement of the company's closure.",
        chinese_question: "在宣布公司关闭后，办公室的 __________ 气氛是显而易见的。",
        answers: [
            { option: "A", answer: "vibrant", chinese_answer: "充满活力的", chinese_romanization: "chōngmǎn huólì de" },
            { option: "B", answer: "glum", chinese_answer: "闷闷不乐的", chinese_romanization: "mènmènbùlè de" },
            { option: "C", answer: "exuberant", chinese_answer: "生气勃勃的", chinese_romanization: "shēngqì bóbó de" },
            { option: "D", answer: "lively", chinese_answer: "活跃的", chinese_romanization: "huóyuè de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'glum' means looking or feeling dejected; morose." +
            "<br><br>" +
            "(A) 'vibrant' means full of energy and enthusiasm." +
            "<br><br>" +
            "(C) 'exuberant' means filled with or characterized by a lively energy and excitement." +
            "<br><br>" +
            "(D) 'lively' means full of life and energy; active and outgoing.",
        chinese_explanation: "(B) '闷闷不乐的' 意味着看起来或感觉沮丧；郁郁寡欢的。" +
            "<br><br>" +
            "'充满活力的' 意味着充满活力和热情的。" +
            "<br><br>" +
            "'生气勃勃的' 意味着充满或具有活力和兴奋的特征。" +
            "<br><br>" +
            "'活跃的' 意味着充满生命和活力的；活跃和外向的。"
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
