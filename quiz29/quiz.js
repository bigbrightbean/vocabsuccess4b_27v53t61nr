// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The sudden change in plans left everyone __________, not knowing what to do next.",
    chinese_question: "计划的突然变化让每个人都__________，不知道接下来该怎么办。",
    answers: [
        { option: "A", answer: "confident", chinese_answer: "自信的", chinese_romanization: "zìxìn de" },
        { option: "B", answer: "composed", chinese_answer: "镇定的", chinese_romanization: "zhèndìng de" },
        { option: "C", answer: "nonplussed", chinese_answer: "困惑的", chinese_romanization: "kùnhuò de" },
        { option: "D", answer: "certain", chinese_answer: "确定的", chinese_romanization: "quèdìng de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'nonplussed' means surprised and confused so much that one is unsure how to react. Figuratively, it can mean being bewildered or unsure." +
        "<br><br>" +
        "(A) 'confident' means feeling or showing confidence in oneself; self-assured." +
        "<br><br>" +
        "(B) 'composed' means having one's feelings and expression under control; calm." +
        "<br><br>" +
        "(D) 'certain' means known for sure; established beyond doubt.",
    chinese_explanation: "(C) '困惑的'一词意味着非常惊讶和困惑，以至于不知道如何反应。比喻地，它可以表示感到迷惑或不确定。" +
        "<br><br>" +
        "(A) '自信的' 意味着对自己有信心的；自信的。" +
        "<br><br>" +
        "(B) '镇定的' 意味着控制住自己的感情和表情的；冷静的。" +
        "<br><br>" +
        "(D) '确定的' 意味着确信的；超出怀疑的。"
    },
    {
        id: 2,
        question: "He was __________ of the politician's promises, having been disappointed by similar claims in the past.",
        chinese_question: "他对这位政治家的承诺持 __________ 态度，因为过去曾对类似的说法感到失望。",
        answers: [
            { option: "A", answer: "skeptical", chinese_answer: "怀疑的", chinese_romanization: "huáiyí de" },
            { option: "B", answer: "assured", chinese_answer: "确定的", chinese_romanization: "quèdìng de" },
            { option: "C", answer: "hopeful", chinese_answer: "抱有希望的", chinese_romanization: "bàoyǒu xīwàng de" },
            { option: "D", answer: "accepting", chinese_answer: "接受的", chinese_romanization: "jiēshòu de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'skeptical' means not easily convinced; having doubts or reservations." +
            "<br><br>" +
            "(B) 'assured' means confident and not worried." +
            "<br><br>" +
            "(C) 'hopeful' means feeling or inspiring optimism about a future event." +
            "<br><br>" +
            "(D) 'accepting' means tolerant or open-minded.",
        chinese_explanation: "(A) '怀疑的' 意味着不容易被说服；有怀疑或保留态度的。" +
            "<br><br>" +
            "(B) '确定的' 意味着自信且不担忧的。" +
            "<br><br>" +
            "(C) '抱有希望的' 意味着对未来事件感到或激发乐观的。" +
            "<br><br>" +
            "(D) '接受的' 意味着宽容或开放的。"
    },
    {
        id: 3,
        question: "Her chances of winning the competition were __________, given the number of talented participants.",
        chinese_question: "鉴于有这么多才华横溢的参赛者，她获胜的机会非常 __________。",
        answers: [
            { option: "A", answer: "remote", chinese_answer: "渺茫的", chinese_romanization: "miǎománg de" },
            { option: "B", answer: "high", chinese_answer: "高的", chinese_romanization: "gāo de" },
            { option: "C", answer: "certain", chinese_answer: "确定的", chinese_romanization: "quèdìng de" },
            { option: "D", answer: "likely", chinese_answer: "可能的", chinese_romanization: "kěnéng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'remote' means unlikely to occur." +
            "<br><br>" +
            "(B) 'high' means of great importance or quantity." +
            "<br><br>" +
            "(C) 'certain' means known for sure; established beyond doubt." +
            "<br><br>" +
            "(D) 'likely' means such as well might happen or be true; probable.",
        chinese_explanation: "(A) '渺茫的' 意味着不太可能发生的。" +
            "<br><br>" +
            "(B) '高的' 意味着重要性或数量很大的。" +
            "<br><br>" +
            "(C) '确定的' 意味着确定的；毫无疑问的。" +
            "<br><br>" +
            "(D) '可能的' 意味着很有可能发生或是真的。"
    },
    {
        id: 4,
        question: "Starting a new business can feel like navigating __________ waters, full of unknown challenges and opportunities.",
        chinese_question: "创业感觉就像是在航行 __________ 的水域，充满了未知的挑战和机遇。",
        answers: [
            { option: "A", answer: "familiar", chinese_answer: "熟悉的", chinese_romanization: "shúxī de" },
            { option: "B", answer: "charted", chinese_answer: "已绘制的", chinese_romanization: "yǐ huìzhì de" },
            { option: "C", answer: "uncharted", chinese_answer: "未知的", chinese_romanization: "wèizhī de" },
            { option: "D", answer: "calm", chinese_answer: "平静的", chinese_romanization: "píngjìng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'uncharted' means not mapped or surveyed." +
            "<br><br>" +
            "(A) 'familiar' means well known from long or close association." +
            "<br><br>" +
            "(B) 'charted' means mapped or surveyed." +
            "<br><br>" +
            "(D) 'calm' means not showing or feeling nervousness, anger, or other strong emotions.",
        chinese_explanation: "(C) '未知的' 意味着没有被绘制或勘测的。" +
            "<br><br>" +
            "(A) '熟悉的' 意味着因长期或密切联系而众所周知。" +
            "<br><br>" +
            "(B) '已绘制的' 意味着已绘制或勘测的。" +
            "<br><br>" +
            "(D) '平静的' 意味着不显示或感到紧张、愤怒或其他强烈的情感。"
    },
    {
        id: 5,
    question: "The company enjoyed a __________ era in the 1990s, marked by innovation, growth, and record profits.",
    chinese_question: "该公司在1990年代享受了一个 __________ 的时代，以创新、增长和创纪录的利润为标志。",
    answers: [
        { option: "A", answer: "halcyon", chinese_answer: "平静的", chinese_romanization: "píngjìng de" },
        { option: "B", answer: "turbulent", chinese_answer: "动荡的", chinese_romanization: "dòngdàng de" },
        { option: "C", answer: "stressful", chinese_answer: "紧张的", chinese_romanization: "jǐnzhāng de" },
        { option: "D", answer: "chaotic", chinese_answer: "混乱的", chinese_romanization: "hùnluàn de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'halcyon' means denoting a period of time in the past that was idyllically happy and peaceful." +
        "<br><br>" +
        "(B) 'turbulent' means characterized by conflict, disorder, or confusion; not stable or calm." +
        "<br><br>" +
        "(C) 'stressful' means causing mental or emotional stress." +
        "<br><br>" +
        "(D) 'chaotic' means in a state of complete confusion and disorder.",
    chinese_explanation: "(A) '平静的'一词指过去一段时间，理想地快乐和平静。" +
        "<br><br>" +
        "(B) '动荡的' 意味着以冲突、混乱或困惑为特征；不稳定或不平静。" +
        "<br><br>" +
        "(C) '紧张的' 意味着引起精神或情绪压力。" +
        "<br><br>" +
        "(D) '混乱的' 意味着完全混乱和无序的状态。"
    },
    {
        id: 6,
        question: "Her __________ belief in justice drove her to become a lawyer and fight for the rights of the oppressed.",
        chinese_question: "她对正义的 __________ 信念驱使她成为一名律师，为被压迫者争取权利。",
        answers: [
            { option: "A", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbùguānxīn de" },
            { option: "B", answer: "fervent", chinese_answer: "热情的", chinese_romanization: "rèqíng de" },
            { option: "C", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "D", answer: "dispassionate", chinese_answer: "不动感情的", chinese_romanization: "bù dòng gǎnqíng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'fervent' means having or displaying a passionate intensity." +
            "<br><br>" +
            "(A) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(C) 'apathetic' means showing or feeling no interest, enthusiasm, or concern." +
            "<br><br>" +
            "(D) 'dispassionate' means not influenced by strong emotion, and so able to be rational and impartial.",
        chinese_explanation: "(B) '热情的' 意味着有或表现出强烈的激情。" +
            "<br><br>" +
            "'漠不关心的' 意味着没有特别兴趣或同情的；不关心的。" +
            "<br><br>" +
            "'冷漠的' 意味着表现出或感到没有兴趣、热情或关心的。" +
            "<br><br>" +
            "'不动感情的' 意味着不受强烈情感影响的，因此能够理性和公正的。"
    },
    {
        id: 7,
        question: "His decision to invest all his savings in the new startup was a __________ move that worried his family.",
        chinese_question: "他决定将所有积蓄投资于新创企业，这是一个 __________ 的举动，让家人担心。",
        answers: [
            { option: "A", answer: "cautious", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" },
            { option: "B", answer: "calculated", chinese_answer: "经过深思熟虑的", chinese_romanization: "jīngguò shēnsī shúlǜ de" },
            { option: "C", answer: "perilous", chinese_answer: "危险的", chinese_romanization: "wēixiǎn de" },
            { option: "D", answer: "prudent", chinese_answer: "审慎的", chinese_romanization: "shěnshèn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'perilous' means full of danger or risk." +
            "<br><br>" +
            "(A) 'cautious' means careful to avoid potential problems or dangers." +
            "<br><br>" +
            "(B) 'calculated' means done with full awareness of the likely consequences." +
            "<br><br>" +
            "(D) 'prudent' means acting with or showing care and thought for the future.",
        chinese_explanation: "(C) '危险的' 意味着充满危险或风险的。" +
            "<br><br>" +
            "(A) '谨慎的' 意味着小心避免潜在的问题或危险的。" +
            "<br><br>" +
            "(B) '经过深思熟虑的' 意味着充分意识到可能的后果而做出的。" +
            "<br><br>" +
            "(D) '审慎的' 意味着表现出关心和对未来的考虑。"
    },
    {
        id: 8,
        question: "The __________ culture at the firm emphasizes teamwork, innovation, and employee well-being.",
        chinese_question: "公司的 __________ 文化强调团队合作、创新和员工福利。",
        answers: [
            { option: "A", answer: "casual", chinese_answer: "休闲的", chinese_romanization: "xiūxián de" },
            { option: "B", answer: "corporate", chinese_answer: "公司的", chinese_romanization: "gōngsī de" },
            { option: "C", answer: "individualistic", chinese_answer: "个人主义的", chinese_romanization: "gèrén zhǔyì de" },
            { option: "D", answer: "informal", chinese_answer: "非正式的", chinese_romanization: "fēizhèngshì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'corporate' means relating to a large company or group." +
            "<br><br>" +
            "(A) 'casual' means relaxed and unconcerned." +
            "<br><br>" +
            "(C) 'individualistic' means characterized by individualism; independent and self-reliant." +
            "<br><br>" +
            "(D) 'informal' means having a relaxed, friendly, or unofficial style, manner, or nature.",
        chinese_explanation: "(B) '公司的' 意味着与大公司或集团有关的。" +
            "<br><br>" +
            "(A) '休闲的' 意味着放松和不关心的。" +
            "<br><br>" +
            "(C) '个人主义的' 意味着以个人主义为特征的；独立和自力更生的。" +
            "<br><br>" +
            "(D) '非正式的' 意味着具有轻松、友好或非正式的风格、方式或性质的。"
    },
    {
        id: 9,
        question: "His __________ stance on the issue earned him respect from his peers.",
        chinese_question: "他在这个问题上的__________立场赢得了同事们的尊重。",
        answers: [
            { option: "A", answer: "uncertain", chinese_answer: "不确定的", chinese_romanization: "bù quèdìng de" },
            { option: "B", answer: "wavering", chinese_answer: "动摇的", chinese_romanization: "dòngyáo de" },
            { option: "C", answer: "resolute", chinese_answer: "坚定的", chinese_romanization: "jiāndìng de" },
            { option: "D", answer: "hesitant", chinese_answer: "犹豫的", chinese_romanization: "yóuyù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'resolute' means admirably purposeful, determined, and unwavering. Figuratively, it can mean being firm and strong in one's beliefs and decisions." +
            "<br><br>" +
            "(A) 'uncertain' means not able to be relied on; not known or definite." +
            "<br><br>" +
            "(B) 'wavering' means moving in a quivering way; flickering." +
            "<br><br>" +
            "(D) 'hesitant' means tentative, unsure, or slow in acting or speaking.",
        chinese_explanation: "(C) '坚定的'一词意味着令人钦佩的有目的性、决心和不动摇的。比喻地，它可以表示在信仰和决定上坚定和强大的。" +
            "<br><br>" +
            "(A) '不确定的' 意味着不能依靠的；未知或不确定的。" +
            "<br><br>" +
            "(B) '动摇的' 意味着以颤抖的方式移动；闪烁的。" +
            "<br><br>" +
            "(D) '犹豫的' 意味着试探性的、不确定的或行动或说话缓慢的。"
    },
    {
        id: 10,
    question: "His explanation for the missing funds seemed __________, but further investigation proved it false.",
    chinese_question: "他对资金丢失的解释看起来很__________，但进一步调查证明是假的。",
    answers: [
        { option: "A", answer: "implausible", chinese_answer: "不合理的", chinese_romanization: "bù hélǐ de" },
        { option: "B", answer: "ridiculous", chinese_answer: "可笑的", chinese_romanization: "kěxiào de" },
        { option: "C", answer: "plausible", chinese_answer: "合理的", chinese_romanization: "hélǐ de" },
        { option: "D", answer: "absurd", chinese_answer: "荒谬的", chinese_romanization: "huāngmiù de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'plausible' means seeming reasonable or probable." +
        "<br><br>" +
        "(A) 'implausible' means not seeming reasonable or probable; failing to convince." +
        "<br><br>" +
        "(B) 'ridiculous' means deserving or inviting derision or mockery; absurd." +
        "<br><br>" +
        "(D) 'absurd' means wildly unreasonable, illogical, or inappropriate.",
    chinese_explanation: "(C) '合理的'一词意味着看起来合理或可能的。" +
        "<br><br>" +
        "(A) '不合理的' 意味着看起来不合理或不可能的；不能令人信服的。" +
        "<br><br>" +
        "(B) '可笑的' 意味着值得或邀请嘲笑或嘲弄的；荒谬的。" +
        "<br><br>" +
        "(D) '荒谬的' 意味着非常不合理的，荒谬的或不合适的。"
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
