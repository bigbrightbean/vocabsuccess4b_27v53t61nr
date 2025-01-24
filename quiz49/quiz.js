// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Despite the __________ nature of her job, she found joy in small moments.",
        chinese_question: "尽管她的工作很__________，但她在细小的时刻中找到了乐趣。",
        answers: [
            { option: "A", answer: "extraordinary", chinese_answer: "非凡的", chinese_romanization: "fēifán de" },
            { option: "B", answer: "thrilling", chinese_answer: "激动人心的", chinese_romanization: "jīdòng rén xīn de" },
            { option: "C", answer: "mundane", chinese_answer: "平凡的", chinese_romanization: "píngfán de" },
            { option: "D", answer: "unique", chinese_answer: "独特的", chinese_romanization: "dútè de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'mundane' means lacking interest or excitement; dull. Figuratively, it can mean something that is ordinary or routine." +
            "<br><br>" +
            "(A) 'extraordinary' means very unusual or remarkable." +
            "<br><br>" +
            "(B) 'thrilling' means causing excitement and pleasure; exhilarating." +
            "<br><br>" +
            "(D) 'unique' means being the only one of its kind; unlike anything else.",
        chinese_explanation: "(C) '平凡的'一词意味着缺乏兴趣或兴奋的；无聊的。比喻地，它可以表示普通或日常的事物。" +
            "<br><br>" +
            "(A) '非凡的' 意味着非常不寻常或非凡的。" +
            "<br><br>" +
            "(B) '激动人心的' 意味着引起兴奋和愉快的；令人振奋的。" +
            "<br><br>" +
            "(D) '独特的' 意味着独一无二的；与其他任何事物不同的。"
    },
    {
        id: 2,
    question: "Their first date was filled with __________ silences and nervous laughter.",
    chinese_question: "他们的第一次约会充满了 __________ 的沉默和紧张的笑声。",
    answers: [
        { option: "A", answer: "natural", chinese_answer: "自然的", chinese_romanization: "zìrán de" },
        { option: "B", answer: "confident", chinese_answer: "自信的", chinese_romanization: "zìxìn de" },
        { option: "C", answer: "awkward", chinese_answer: "尴尬的", chinese_romanization: "gāngà de" },
        { option: "D", answer: "relaxed", chinese_answer: "放松的", chinese_romanization: "fàngsōng de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'awkward' means causing difficulty; hard to deal with; uncomfortable." +
        "<br><br>" +
        "(A) 'natural' means existing in or derived from nature; not made or caused by humankind." +
        "<br><br>" +
        "(B) 'confident' means feeling or showing confidence in oneself; self-assured." +
        "<br><br>" +
        "(D) 'relaxed' means free from tension and anxiety.",
    chinese_explanation: "(C) '尴尬的' 意味着造成困难；难以处理；不舒服的。" +
        "<br><br>" +
        "(A) '自然的' 意味着存在于自然界或源自自然；不是人类制造或引起的。" +
        "<br><br>" +
        "(B) '自信的' 意味着对自己有信心或表现出自信；自信的。" +
        "<br><br>" +
        "(D) '放松的' 意味着没有紧张和焦虑。"
}
    ,
    {
        id: 3,
    question: "The company's security system was so __________ that hackers easily breached their defenses and stole sensitive information.",
    chinese_question: "公司的安全系统如此 __________，以至于黑客轻松突破他们的防御并窃取了敏感信息。",
    answers: [
        { option: "A", answer: "porous", chinese_answer: "漏洞百出的", chinese_romanization: "lòudòng bǎi chū de" },
        { option: "B", answer: "robust", chinese_answer: "强健的", chinese_romanization: "qiángjiàn de" },
        { option: "C", answer: "secure", chinese_answer: "安全的", chinese_romanization: "ānquán de" },
        { option: "D", answer: "impenetrable", chinese_answer: "无法渗透的", chinese_romanization: "wúfǎ shèntòu de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'porous' means not secure and allowing things to pass through easily." +
        "<br><br>" +
        "(B) 'robust' means strong and healthy; vigorous." +
        "<br><br>" +
        "(C) 'secure' means fixed or fastened so as not to give way, become loose, or be lost." +
        "<br><br>" +
        "(D) 'impenetrable' means impossible to pass through or enter.",
    chinese_explanation: "(A) '漏洞百出的' 意味着不安全，容易让东西通过的。" +
        "<br><br>" +
        "(B) '强健的' 意味着强壮和健康的；充满活力的。" +
        "<br><br>" +
        "(C) '安全的' 意味着固定或牢固的，不会松动或丢失的。" +
        "<br><br>" +
        "(D) '无法渗透的' 意味着无法通过或进入的。"
    },
    {
        id: 4,
    question: "Her __________ manner often offended her colleagues, making it difficult for her to work in a team.",
    chinese_question: "她的 __________ 态度经常冒犯同事，使她难以在团队中工作。",
    answers: [
        { option: "A", answer: "gentle", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
        { option: "B", answer: "pleasant", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
        { option: "C", answer: "abrasive", chinese_answer: "粗暴的", chinese_romanization: "cūbào de"
        { option: "D", answer: "soothing", chinese_answer: "安抚的", chinese_romanization: "ānfǔ de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'abrasive' means showing little concern for the feelings of others; harsh." +
        "<br><br>" +
        "(A) 'gentle' means having or showing a mild, kind, or tender temperament or character." +
        "<br><br>" +
        "(B) 'pleasant' means giving a sense of happy satisfaction or enjoyment." +
        "<br><br>" +
        "(D) 'soothing' means having a gently calming effect.",
    chinese_explanation: "(C) '粗暴的' 意味着对他人的感受表现出很少关心；严厉的。" +
        "<br><br>" +
        "(A) '温和的' 意味着表现出或具有温和、善良或温柔的性格或品性。" +
        "<br><br>" +
        "(B) '愉快的' 意味着给予愉快满足感或享受。" +
        "<br><br>" +
        "(D) '安抚的' 意味着具有温和的平静效果。"
    },
    {
        id: 5,
        question: "The security guard maintained an __________ presence, blending into the background while keeping a close watch on the crowd.",
        chinese_question: "保安保持 __________ 的存在，融入背景的同时密切关注人群。",
        answers: [
                { option: "A", answer: "conspicuous", chinese_answer: "显眼的", chinese_romanization: "xiǎnyǎn de" },
                { option: "B", answer: "noticeable", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" },
                { option: "C", answer: "unobtrusive", chinese_answer: "不引人注目的", chinese_romanization: "bù yǐnrén zhùmù de" },
                { option: "D", answer: "obvious", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'unobtrusive' means not conspicuous or attracting attention." +
            "<br><br>" +
            "(A) 'conspicuous' means standing out so as to be clearly visible." +
            "<br><br>" +
            "(B) 'noticeable' means easily seen or noticed; clear or apparent." +
            "<br><br>" +
            "(D) 'obvious' means easily perceived or understood; clear, self-evident, or apparent.",
        chinese_explanation: "(C) '不引人注目的' 一词意味着不显眼或不吸引注意力的。" +
            "<br><br>" +
            "(A) '显眼的' 意味着显得明显以至于清晰可见。" +
            "<br><br>" +
            "(B) '明显的' 意味着容易看到或注意到的；清晰或明显的。" +
            "<br><br>" +
            "(D) '明显的' 意味着容易感知或理解；清晰，自明或明显的。"
    },
    {
        id: 6,
        question: "He remained __________ throughout the interview, answering questions with a calm and relaxed demeanor.",
        chinese_question: "他在整个面试过程中保持 __________，以平静和放松的态度回答问题。",
        answers: [
                { option: "A", answer: "anxious", chinese_answer: "焦虑的", chinese_romanization: "jiāolǜ de" },
                { option: "B", answer: "nervous", chinese_answer: "紧张的", chinese_romanization: "jǐnzhāng de" },
                { option: "C", answer: "nonchalant", chinese_answer: "漠不关心的", chinese_romanization: "mò bù guānxīn de" },
                { option: "D", answer: "agitated", chinese_answer: "激动的", chinese_romanization: "jīdòng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'nonchalant' means feeling or appearing casually calm and relaxed; not displaying anxiety, interest, or enthusiasm." +
            "<br><br>" +
            "(A) 'anxious' means experiencing worry, unease, or nervousness, typically about an imminent event or something with an uncertain outcome." +
            "<br><br>" +
            "(B) 'nervous' means easily agitated or alarmed; tending to be anxious; highly strung." +
            "<br><br>" +
            "(D) 'agitated' means feeling or appearing troubled or nervous.",
        chinese_explanation: "(C) '漠不关心的' 一词意味着感觉或表现得悠闲平静；没有表现出焦虑、兴趣或热情。" +
            "<br><br>" +
            "(A) '焦虑的' 意味着经历担忧、不安或紧张，通常是关于即将发生的事件或具有不确定结果的事情。" +
            "<br><br>" +
            "(B) '紧张的' 意味着容易激动或惊慌；倾向于焦虑；高度紧张的。" +
            "<br><br>" +
            "(D) '激动的' 意味着感觉或表现得烦恼或紧张的。"
    },
    {
        id: 7,
    question: "The __________ nature of his job meant he was constantly traveling from one city to another, never staying in one place for too long.",
    chinese_question: "他工作的 __________ 性质意味着他不断地从一个城市到另一个城市旅行，从不在一个地方待太久。",
    answers: [
        { option: "A", answer: "migratory", chinese_answer: "迁徙的", chinese_romanization: "qiānxǐ de" },
        { option: "B", answer: "stable", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" },
        { option: "C", answer: "fixed", chinese_answer: "固定的", chinese_romanization: "gùdìng de" },
        { option: "D", answer: "permanent", chinese_answer: "永久的", chinese_romanization: "yǒngjiǔ de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'migratory' means relating to, or characterized by migration." +
        "<br><br>" +
        "(B) 'stable' means not likely to change or fail; firmly established." +
        "<br><br>" +
        "(C) 'fixed' means securely placed or fastened." +
        "<br><br>" +
        "(D) 'permanent' means lasting or intended to last or remain unchanged indefinitely.",
    chinese_explanation: "(A) '迁徙的' 意味着与迁徙有关的或以迁徙为特征的。" +
        "<br><br>" +
        "(B) '稳定的' 意味着不太可能改变或失败的；牢固建立的。" +
        "<br><br>" +
        "(C) '固定的' 意味着牢固地放置或固定的。" +
        "<br><br>" +
        "(D) '永久的' 意味着持续或打算无限期地保持不变的。"
    },
    {
        id: 8,
        question: "She became __________ with the fact that she couldn't change the past and focused on improving her future.",
        chinese_question: "她 __________ 了自己无法改变过去的事实，并专注于改善自己的未来。",
        answers: [
            { option: "A", answer: "angry", chinese_answer: "生气", chinese_romanization: "shēngqì" },
            { option: "B", answer: "reconciled", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
            { option: "C", answer: "bitter", chinese_answer: "苦涩", chinese_romanization: "kǔsè" },
            { option: "D", answer: "resentful", chinese_answer: "愤恨", chinese_romanization: "fèn hèn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'reconciled' means made peace with or accepted something undesirable." +
            "<br><br>" +
            "(A) 'angry' means feeling or showing strong annoyance, displeasure, or hostility." +
            "<br><br>" +
            "(C) 'bitter' means feeling or showing anger, hurt, or resentment because of bad experiences or a sense of unjust treatment." +
            "<br><br>" +
            "(D) 'resentful' means feeling or expressing bitterness or indignation at having been treated unfairly.",
        chinese_explanation: "(B) '接受' 意味着与某种不理想的情况和解或接受。" +
            "<br><br>" +
            "(A) '生气' 意味着感到或表现出强烈的恼怒、不悦或敌意。" +
            "<br><br>" +
            "(C) '苦涩' 意味着由于糟糕的经历或不公正待遇感到或表现出愤怒、伤害或怨恨。" +
            "<br><br>" +
            "(D) '愤恨' 意味着对不公平待遇感到或表达愤怒或愤慨。"
    },
    {
        id: 9,
    question: "His __________ analysis of the market trends gave the company a competitive edge.",
    chinese_question: "他对市场趋势的 __________ 分析给公司带来了竞争优势。",
    answers: [
        { option: "A", answer: "shrewd", chinese_answer: "精明", chinese_romanization: "jīngmíng" },
        { option: "B", answer: "superficial", chinese_answer: "肤浅", chinese_romanization: "fūqiǎn" },
        { option: "C", answer: "vague", chinese_answer: "模糊", chinese_romanization: "móhú" },
        { option: "D", answer: "inaccurate", chinese_answer: "不准确", chinese_romanization: "bù zhǔnquè" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'shrewd' means having or showing sharp powers of judgment; astute." +
        "<br><br>" +
        "(B) 'superficial' means existing or occurring at or on the surface." +
        "<br><br>" +
        "(C) 'vague' means of uncertain, indefinite, or unclear character or meaning." +
        "<br><br>" +
        "(D) 'inaccurate' means not accurate or correct.",
    chinese_explanation: "(A) '精明' 意味着拥有或表现出敏锐的判断力；精明。" +
        "<br><br>" +
        "(B) '肤浅' 意味着存在或发生在表面。" +
        "<br><br>" +
        "(C) '模糊' 意味着性质或含义不确定、不明确。" +
        "<br><br>" +
        "(D) '不准确' 意味着不准确或不正确。"
    },
    {
        id: 10,
        question: "His response to the question was __________, leaving everyone unsure of his true opinion on the matter.",
        chinese_question: "他对问题的回答是 __________ 的，让每个人都不确定他对这件事的真实看法。",
        answers: [
                { option: "A", answer: "clear", chinese_answer: "清楚的", chinese_romanization: "qīngchǔ de" },
                { option: "B", answer: "equivocal", chinese_answer: "模棱两可的", chinese_romanization: "móléng liǎng kě de" },
                { option: "C", answer: "straightforward", chinese_answer: "直率的", chinese_romanization: "zhíshuài de" },
                { option: "D", answer: "direct", chinese_answer: "直接的", chinese_romanization: "zhíjiē de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'equivocal' means open to more than one interpretation; ambiguous." +
            "<br><br>" +
            "(A) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(C) 'straightforward' means uncomplicated and easy to do or understand." +
            "<br><br>" +
            "(D) 'direct' means extending or moving from one place to another by the shortest way without changing direction or stopping.",
        chinese_explanation: "(B) '模棱两可的' 一词意味着开放多种解释的；模糊的。" +
            "<br><br>" +
            "(A) '清楚的' 意味着容易感知、理解或解释的。" +
            "<br><br>" +
            "(C) '直率的' 意味着不复杂且易于做或理解的。" +
            "<br><br>" +
            "(D) '直接的' 意味着从一个地方到另一个地方延伸或移动的最短路径，没有改变方向或停止。"
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
