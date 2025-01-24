// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The house they bought was __________, not overly large or luxurious, but comfortable and cozy for their small family.",
    chinese_question: "他们买的房子很 __________，不太大也不奢华，但对他们的小家庭来说很舒适和温馨。",
    answers: [
        { option: "A", answer: "modest", chinese_answer: "适中的", chinese_romanization: "shìzhōng de" },
        { option: "B", answer: "extravagant", chinese_answer: "奢侈的", chinese_romanization: "shēchǐ de" },
        { option: "C", answer: "lavish", chinese_answer: "豪华的", chinese_romanization: "háohuá de" },
        { option: "D", answer: "opulent", chinese_answer: "富丽堂皇的", chinese_romanization: "fùlì tánghuáng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'modest' means moderate in size, amount, or extent; not too large or extravagant." +
        "<br><br>" +
        "(B) 'extravagant' means lacking restraint in spending money or using resources." +
        "<br><br>" +
        "(C) 'lavish' means sumptuously rich, elaborate, or luxurious." +
        "<br><br>" +
        "(D) 'opulent' means ostentatiously rich and luxurious or lavish.",
    chinese_explanation: "(A) '适中的' 意味着在大小、数量或程度上适中的；不太大或奢华的。" +
        "<br><br>" +
        "(B) '奢侈的' 意味着在花钱或使用资源方面缺乏克制的。" +
        "<br><br>" +
        "(C) '豪华的' 意味着极其富裕、精致或豪华的。" +
        "<br><br>" +
        "(D) '富丽堂皇的' 意味着极其富裕和奢华的。"
    },
    {
        id: 2,
    question: "His __________ abilities made him an expert in deciphering ancient scripts.",
    chinese_question: "他的__________能力使他成为破解古代文书的专家。",
    answers: [
        { option: "A", answer: "artistic", chinese_answer: "艺术的", chinese_romanization: "yìshù de" },
        { option: "B", answer: "linguistic", chinese_answer: "语言的", chinese_romanization: "yǔyán de" },
        { option: "C", answer: "technical", chinese_answer: "技术的", chinese_romanization: "jìshù de" },
        { option: "D", answer: "mechanical", chinese_answer: "机械的", chinese_romanization: "jīxiè de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'linguistic' means relating to language or linguistics." +
        "<br><br>" +
        "(A) 'artistic' means having or revealing natural creative skill." +
        "<br><br>" +
        "(C) 'technical' means relating to a particular subject, art, or craft, or its techniques." +
        "<br><br>" +
        "(D) 'mechanical' means working or produced by machines or machinery.",
    chinese_explanation: "(B) '语言的'一词意味着与语言或语言学有关的。" +
        "<br><br>" +
        "(A) '艺术的' 意味着具有或展示自然创造技能的。" +
        "<br><br>" +
        "(C) '技术的' 意味着与特定学科、艺术或工艺或其技术有关的。" +
        "<br><br>" +
        "(D) '机械的' 意味着由机器或机械工作或生产的。"
    },
    {
        id: 3,
    question: "Her __________ demeanour in meetings often helped to diffuse tense situations and keep discussions on track.",
    chinese_question: "她在会议中的 __________ 举止经常有助于缓和紧张局势并保持讨论的进展。",
    answers: [
        { option: "A", answer: "phlegmatic", chinese_answer: "冷静的", chinese_romanization: "lěngjìng de" },
        { option: "B", answer: "volatile", chinese_answer: "易变的", chinese_romanization: "yìbiàn de" },
        { option: "C", answer: "excitable", chinese_answer: "易激动的", chinese_romanization: "yì jīdòng de" },
        { option: "D", answer: "passionate", chinese_answer: "充满激情的", chinese_romanization: "chōngmǎn jīqíng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'phlegmatic' means having an unemotional and stolidly calm disposition." +
        "<br><br>" +
        "(B) 'volatile' means liable to change rapidly and unpredictably, especially for the worse." +
        "<br><br>" +
        "(C) 'excitable' means responding too readily to something new or stimulating; easily excited." +
        "<br><br>" +
        "(D) 'passionate' means showing or caused by strong feelings or a strong belief.",
    chinese_explanation: "(A) '冷静的' 意味着有一种不动感情和冷静的性格。" +
        "<br><br>" +
        "(B) '易变的' 意味着特别是向坏的方向快速和不可预测地变化的。" +
        "<br><br>" +
        "(C) '易激动的' 意味着对新事物或刺激反应过度；容易兴奋的。" +
        "<br><br>" +
        "(D) '充满激情的' 意味着表现出或由强烈情感或强烈信念引起的。"
    },
    {
        id: 4,
        question: "Her __________ steps into the new job reflected her uncertainty.",
        chinese_question: "她在新工作中的 __________ 步伐反映了她的不确定性。",
        answers: [
            { option: "A", answer: "bold", chinese_answer: "大胆的", chinese_romanization: "dàdǎn de" },
            { option: "B", answer: "tentative", chinese_answer: "试探性的", chinese_romanization: "shìtàn xìng de" },
            { option: "C", answer: "decisive", chinese_answer: "果断的", chinese_romanization: "guǒduàn de" },
            { option: "D", answer: "assertive", chinese_answer: "自信的", chinese_romanization: "zìxìn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'tentative' means done without confidence; hesitant." +
            "<br><br>" +
            "(A) 'bold' means showing a willingness to take risks; confident and courageous." +
            "<br><br>" +
            "(C) 'decisive' means settling an issue; producing a definite result." +
            "<br><br>" +
            "(D) 'assertive' means having or showing a confident and forceful personality.",
        chinese_explanation: "(B) '试探性的' 一词意味着没有信心地做的；犹豫的。" +
            "<br><br>" +
            "(A) '大胆的' 意味着表现出愿意冒险；自信和勇敢的。" +
            "<br><br>" +
            "(C) '果断的' 意味着解决问题；产生明确结果的。" +
            "<br><br>" +
            "(D) '自信的' 意味着表现出自信和有力的个性。"
    },
    {
        id: 5,
        question: "His __________ speech about morality was off-putting to the audience.",
        chinese_question: "他那充满__________的道德演讲让观众感到反感。",
        answers: [
            { option: "A", answer: "humble", chinese_answer: "谦逊的", chinese_romanization: "qiānxùn de" },
            { option: "B", answer: "sanctimonious", chinese_answer: "假装虔诚的", chinese_romanization: "jiǎzhuāng qiánchéng de" },
            { option: "C", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
            { option: "D", answer: "sincere", chinese_answer: "真诚的", chinese_romanization: "zhēnchéng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sanctimonious' means making a show of being morally superior to other people." +
            "<br><br>" +
            "(A) 'humble' means having or showing a modest or low estimate of one's importance." +
            "<br><br>" +
            "(C) 'modest' means unassuming in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(D) 'sincere' means free from pretense or deceit; proceeding from genuine feelings.",
        chinese_explanation: "(B) '假装虔诚的'一词意味着表现出在道德上优于他人的。" +
            "<br><br>" +
            "(A) '谦逊的' 意味着对自己的重要性有或表现出谦虚的看法。" +
            "<br><br>" +
            "(C) '谦虚的' 意味着对自己的能力或成就不自负的。" +
            "<br><br>" +
            "(D) '真诚的' 意味着没有虚伪或欺骗的；出于真实感情的。"
    },
    {
        id: 6,
        question: "The difference in performance between the two software versions was __________, barely noticeable to the users.",
        chinese_question: "两个软件版本之间的性能差异是 __________ 的，用户几乎察觉不到。",
        answers: [
            { option: "A", answer: "noticeable", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" },
            { option: "B", answer: "negligible", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" },
            { option: "C", answer: "substantial", chinese_answer: "大量的", chinese_romanization: "dàliàng de" },
            { option: "D", answer: "dramatic", chinese_answer: "戏剧性的", chinese_romanization: "xìjù xìng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'negligible' means so small or unimportant as to be not worth considering; insignificant." +
            "<br><br>" +
            "(A) 'noticeable' means easily seen or noticed." +
            "<br><br>" +
            "(C) 'substantial' means of considerable importance, size, or worth." +
            "<br><br>" +
            "(D) 'dramatic' means sudden and striking.",
        chinese_explanation: "(B) '微不足道的' 意味着小到或不重要，不值得考虑；无足轻重的。" +
            "<br><br>" +
            "(A) '明显的' 意味着容易看到或注意到的。" +
            "<br><br>" +
            "(C) '大量的' 意味着相当重要、规模或价值的。" +
            "<br><br>" +
            "(D) '戏剧性的' 意味着突然和引人注目的。"
    },
    {
        id: 7,
    question: "Her __________ approach to disciplining her children was criticized by other parents.",
    chinese_question: "她对孩子的__________管教方式受到了其他家长的批评。",
    answers: [
        { option: "A", answer: "rewarding", chinese_answer: "奖励的", chinese_romanization: "jiǎnglì de" },
        { option: "B", answer: "lenient", chinese_answer: "宽大的", chinese_romanization: "kuāndà de" },
        { option: "C", answer: "punitive", chinese_answer: "惩罚的", chinese_romanization: "chéngfá de" },
        { option: "D", answer: "forgiving", chinese_answer: "宽容的", chinese_romanization: "kuānróng de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'punitive' means inflicting or intended as punishment. Figuratively, it can mean being very strict and harsh in discipline." +
        "<br><br>" +
        "(A) 'rewarding' means providing satisfaction or gratification." +
        "<br><br>" +
        "(B) 'lenient' means more merciful or tolerant than expected." +
        "<br><br>" +
        "(D) 'forgiving' means ready and willing to forgive.",
    chinese_explanation: "(C) '惩罚的'一词意味着实施或打算作为惩罚的。比喻地，它可以表示在纪律方面非常严格和苛刻的。" +
        "<br><br>" +
        "(A) '奖励的' 意味着提供满足或满足感的。" +
        "<br><br>" +
        "(B) '宽大的' 意味着比预期更仁慈或宽容的。" +
        "<br><br>" +
        "(D) '宽容的' 意味着准备和愿意原谅的。"
    },
    {
        id: 8,
    question: "His __________ understanding of human nature made him an excellent psychologist.",
    chinese_question: "他对人性 __________ 的理解使他成为一名优秀的心理学家。",
    answers: [
        { option: "A", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" },
        { option: "B", answer: "perceptive", chinese_answer: "敏锐的", chinese_romanization: "mǐnruì de" },
        { option: "C", answer: "shallow", chinese_answer: "肤浅的", chinese_romanization: "fūqiǎn de" },
        { option: "D", answer: "naive", chinese_answer: "天真的", chinese_romanization: "tiānzhēn de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'perceptive' means having or showing sensitive insight." +
        "<br><br>" +
        "(A) 'superficial' means existing or occurring at or on the surface." +
        "<br><br>" +
        "(C) 'shallow' means of little depth." +
        "<br><br>" +
        "(D) 'naive' means showing a lack of experience, wisdom, or judgment.",
    chinese_explanation: "(B) '敏锐的' 意味着具有或表现出敏感的洞察力。" +
        "<br><br>" +
        "(A) '表面的' 意味着存在或发生在表面上的。" +
        "<br><br>" +
        "(C) '肤浅的' 意味着深度很小的。" +
        "<br><br>" +
        "(D) '天真的' 意味着缺乏经验、智慧或判断力的。"
    },
    {
        id: 9,
    question: "Her __________ spirit was evident in her determination to train hard and compete fiercely in martial arts tournaments.",
    chinese_question: "她的 __________ 精神在她努力训练和在武术比赛中激烈竞争的决心中表现得很明显。",
    answers: [
        { option: "A", answer: "martial", chinese_answer: "尚武的", chinese_romanization: "shàngwǔ de" },
        { option: "B", answer: "passive", chinese_answer: "被动的", chinese_romanization: "bèidòng de" },
        { option: "C", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
        { option: "D", answer: "submissive", chinese_answer: "顺从的", chinese_romanization: "shùncóng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'martial' means relating to war, soldiers, or the military; or being aggressive and combative." +
        "<br><br>" +
        "(B) 'passive' means accepting or allowing what happens or what others do, without active response or resistance." +
        "<br><br>" +
        "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
        "<br><br>" +
        "(D) 'submissive' means ready to conform to the authority or will of others; meekly obedient or passive.",
    chinese_explanation: "(A) '尚武的' 意味着与战争、士兵或军队有关的；或具有攻击性和好斗的。" +
        "<br><br>" +
        "(B) '被动的' 意味着接受或允许发生的事情或他人的行为，而没有积极的反应或抵抗。" +
        "<br><br>" +
        "(C) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。" +
        "<br><br>" +
        "(D) '顺从的' 意味着准备服从他人的权威或意志；温顺地服从或被动的。"
    },
    {
        id: 10,
    question: "Her __________ reaction to the news left everyone wondering what she truly felt, as her expression revealed nothing.",
    chinese_question: "她对这个消息的 __________ 反应让每个人都在猜测她的真实感受，因为她的表情没有透露任何信息。",
    answers: [
        { option: "A", answer: "puzzling", chinese_answer: "令人困惑的", chinese_romanization: "lìng rén kùnhuò de" },
        { option: "B", answer: "transparent", chinese_answer: "透明的", chinese_romanization: "tòumíng de" },
        { option: "C", answer: "predictable", chinese_answer: "可预测的", chinese_romanization: "kě yùcè de" },
        { option: "D", answer: "expressive", chinese_answer: "富有表现力的", chinese_romanization: "fù yǒu biǎoxiàn lì de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'puzzling' means causing one to be perplexed or confused." +
        "<br><br>" +
        "(B) 'transparent' means easy to perceive or detect; obvious." +
        "<br><br>" +
        "(C) 'predictable' means able to be predicted." +
        "<br><br>" +
        "(D) 'expressive' means effectively conveying thought or feeling.",
    chinese_explanation: "(A) '令人困惑的' 意味着使人困惑或迷惑的。" +
        "<br><br>" +
        "(B) '透明的' 意味着容易察觉或检测的；明显的。" +
        "<br><br>" +
        "(C) '可预测的' 意味着可以预测的。" +
        "<br><br>" +
        "(D) '富有表现力的' 意味着有效地传达思想或感情的。"
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
