// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His __________ work habits allowed him to focus deeply on his research, away from the interruptions of a bustling office.",
        chinese_question: "他 __________ 的工作习惯使他能够深入研究，远离喧闹办公室的打扰。",
        answers: [
            { option: "A", answer: "solitary", chinese_answer: "独自的", chinese_romanization: "dúzì de" },
            { option: "B", answer: "collaborative", chinese_answer: "合作的", chinese_romanization: "hézuò de" },
            { option: "C", answer: "noisy", chinese_answer: "嘈杂的", chinese_romanization: "cáozá de" },
            { option: "D", answer: "public", chinese_answer: "公共的", chinese_romanization: "gōnggòng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'solitary' means done or existing alone." +
            "<br><br>" +
            "(B) 'collaborative' means produced or conducted by two or more parties working together." +
            "<br><br>" +
            "(C) 'noisy' means making or given to making a lot of noise." +
            "<br><br>" +
            "(D) 'public' means open to or shared by all people.",
        chinese_explanation: "(A) '独自的' 意味着独自完成或存在的。" +
            "<br><br>" +
            "(B) '合作的' 意味着由两个或多个团队共同制作或进行的。" +
            "<br><br>" +
            "(C) '嘈杂的' 意味着制造或习惯制造很多噪音的。" +
            "<br><br>" +
            "(D) '公共的' 意味着对所有人开放或共享的。"
    },
    {
        id: 2,
    question: "The community's __________ stance on public displays of affection led to strict regulations and fines for those who violated the rules.",
    chinese_question: "社区对公共场合表达爱意的 __________ 态度导致了严格的规定和对违反规则者的罚款。",
    answers: [
        { option: "A", answer: "puritanical", chinese_answer: "清教徒式的", chinese_romanization: "qīngjiàotú shì de" },
        { option: "B", answer: "tolerant", chinese_answer: "宽容的", chinese_romanization: "kuānróng de" },
        { option: "C", answer: "relaxed", chinese_answer: "放松的", chinese_romanization: "fàngsōng de" },
        { option: "D", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mò bù guānxīn de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'puritanical' means practicing or affecting strict religious or moral behavior." +
        "<br><br>" +
        "(B) 'tolerant' means showing willingness to allow the existence of opinions or behavior that one does not necessarily agree with." +
        "<br><br>" +
        "(C) 'relaxed' means free from tension and anxiety; at ease." +
        "<br><br>" +
        "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
    chinese_explanation: "(A) '清教徒式的' 意味着践行或影响严格的宗教或道德行为的。" +
        "<br><br>" +
        "(B) '宽容的' 意味着显示愿意允许存在的观点或行为，不一定同意的。" +
        "<br><br>" +
        "(C) '放松的' 意味着没有紧张和焦虑的；放松的。" +
        "<br><br>" +
        "(D) '漠不关心的' 意味着没有特别的兴趣或同情的；冷漠的。"
    },
    {
        id: 3,
    question: "The company's financial situation became increasingly __________, making investors nervous.",
    chinese_question: "公司的财务状况变得越来越 __________，让投资者感到紧张。",
    answers: [
        { option: "A", answer: "secure", chinese_answer: "安全的", chinese_romanization: "ānquán de" },
        { option: "B", answer: "stable", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" },
        { option: "C", answer: "precarious", chinese_answer: "危险的", chinese_romanization: "wēixiǎn de" },
        { option: "D", answer: "steady", chinese_answer: "稳固的", chinese_romanization: "wěngù de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'precarious' means not securely held or in position; dangerously likely to fall or collapse." +
        "<br><br>" +
        "(A) 'secure' means fixed or fastened so as not to give way, become loose, or be lost." +
        "<br><br>" +
        "(B) 'stable' means not likely to change or fail; firmly established." +
        "<br><br>" +
        "(D) 'steady' means firmly fixed, supported, or balanced; not shaking or moving.",
    chinese_explanation: "(C) '危险的' 意味着未被牢固固定或定位的；极有可能掉落或倒塌的。" +
        "<br><br>" +
        "(A) '安全的' 意味着固定或牢固，以至于不会让步、变松或丢失的。" +
        "<br><br>" +
        "(B) '稳定的' 意味着不太可能改变或失败；牢固建立的。" +
        "<br><br>" +
        "(D) '稳固的' 意味着牢固固定、支撑或平衡的；不摇晃或不移动的。"
    },
    {
        id: 4,
    question: "Their __________ determination to achieve their goals inspired everyone around them.",
    chinese_question: "他们对实现目标的 __________ 决心激励了周围的每一个人。",
    answers: [
        { option: "A", answer: "weak", chinese_answer: "虚弱的", chinese_romanization: "xūruò de" },
        { option: "B", answer: "timid", chinese_answer: "胆小的", chinese_romanization: "dǎnxiǎo de" },
        { option: "C", answer: "indomitable", chinese_answer: "不屈不挠的", chinese_romanization: "bù qū bù náo de" },
        { option: "D", answer: "fragile", chinese_answer: "脆弱的", chinese_romanization: "cuìruò de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'indomitable' means impossible to subdue or defeat. Figuratively, it can mean having unwavering resolve." +
        "<br><br>" +
        "(A) 'weak' means lacking the power to perform physically demanding tasks; lacking physical strength and energy." +
        "<br><br>" +
        "(B) 'timid' means showing a lack of courage or confidence; easily frightened." +
        "<br><br>" +
        "(D) 'fragile' means easily broken or damaged.",
    chinese_explanation: "(C) '不屈不挠的' 意味着无法征服或打败的。比喻地，它可以表示具有坚定不移的决心。" +
        "<br><br>" +
        "(A) '虚弱的' 意味着缺乏执行体力活的能力；缺乏体力和能量的。" +
        "<br><br>" +
        "(B) '胆小的' 意味着缺乏勇气或信心的；容易受惊的。" +
        "<br><br>" +
        "(D) '脆弱的' 意味着容易破碎或损坏的。"
    },
    {
        id: 5,
    question: "Her contribution to the project was __________, significantly impacting its success and direction.",
    chinese_question: "她对项目的贡献是 __________ 的，对项目的成功和方向产生了重大影响。",
    answers: [
        { option: "A", answer: "immense", chinese_answer: "巨大的", chinese_romanization: "jùdà de" },
        { option: "B", answer: "negligible", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" },
        { option: "C", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" },
        { option: "D", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'immense' means extremely large or great, especially in scale or degree." +
        "<br><br>" +
        "(B) 'negligible' means so small or unimportant as to be not worth considering." +
        "<br><br>" +
        "(C) 'minor' means lesser in importance, seriousness, or significance." +
        "<br><br>" +
        "(D) 'trivial' means of little value or importance.",
    chinese_explanation: "(A) '巨大的' 意味着非常大或非常伟大的，尤其是在规模或程度上。" +
        "<br><br>" +
        "(B) '微不足道的' 意味着如此小或不重要以至于不值得考虑的。" +
        "<br><br>" +
        "(C) '次要的' 意味着在重要性、严重性或意义上较小的。" +
        "<br><br>" +
        "(D) '琐碎的' 意味着价值或重要性很小的。"
    },
    {
        id: 6,
    question: "The __________ atmosphere in the office made it a pleasure to come to work every day.",
    chinese_question: "办公室的 __________ 氛围让每天来上班都成了一种享受。",
    answers: [
        { option: "A", answer: "harmonious", chinese_answer: "和谐的", chinese_romanization: "héxié de" },
        { option: "B", answer: "toxic", chinese_answer: "有毒的", chinese_romanization: "yǒudú de" },
        { option: "C", answer: "hostile", chinese_answer: "敌对的", chinese_romanization: "díduì de" },
        { option: "D", answer: "stressful", chinese_answer: "有压力的", chinese_romanization: "yǒu yālì de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'harmonious' means free from disagreement or dissent." +
        "<br><br>" +
        "(B) 'toxic' means very harmful or unpleasant in a pervasive or insidious way." +
        "<br><br>" +
        "(C) 'hostile' means unfriendly; antagonistic." +
        "<br><br>" +
        "(D) 'stressful' means causing mental or emotional stress.",
    chinese_explanation: "(A) '和谐的' 意味着没有分歧或异议的。" +
        "<br><br>" +
        "(B) '有毒的' 意味着在广泛或潜在的方式上非常有害或令人不快的。" +
        "<br><br>" +
        "(C) '敌对的' 意味着不友好的；对抗的。" +
        "<br><br>" +
        "(D) '有压力的' 意味着造成精神或情感压力的。"
    },
    {
        id: 7,
    question: "His __________ glance at the report missed several critical errors that needed to be addressed.",
    chinese_question: "他 __________ 浏览报告时漏掉了几个需要解决的关键错误。",
    answers: [
        { option: "A", answer: "thorough", chinese_answer: "彻底的", chinese_romanization: "chèdǐ de" },
        { option: "B", answer: "detailed", chinese_answer: "详细的", chinese_romanization: "xiángxì de" },
        { option: "C", answer: "cursory", chinese_answer: "草率的", chinese_romanization: "cǎoshuài de" },
        { option: "D", answer: "meticulous", chinese_answer: "一丝不苟的", chinese_romanization: "yīsī bùgǒu de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'cursory' means hasty and therefore not thorough or detailed." +
        "<br><br>" +
        "(A) 'thorough' means complete with regard to every detail; not superficial or partial." +
        "<br><br>" +
        "(B) 'detailed' means having many details or facts; showing attention to detail." +
        "<br><br>" +
        "(D) 'meticulous' means showing great attention to detail; very careful and precise.",
    chinese_explanation: "(C) '草率的' 一词意味着匆忙的，因此不彻底或不详细的。" +
        "<br><br>" +
        "(A) '彻底的' 意味着在每个细节上都是完整的；不表面的或部分的。" +
        "<br><br>" +
        "(B) '详细的' 意味着有很多细节或事实；表现出对细节的关注。" +
        "<br><br>" +
        "(D) '一丝不苟的' 意味着对细节表现出极大的关注；非常仔细和精确的。"
    },
    {
        id: 8,
    question: "Implementing a new training program for all employees is __________ within the next quarter.",
    chinese_question: "在下一个季度内为所有员工实施一个新的培训计划是 __________ 的。",
    answers: [
        { option: "A", answer: "impractical", chinese_answer: "不切实际", chinese_romanization: "bù qiè shíjì" },
        { option: "B", answer: "practicable", chinese_answer: "可行", chinese_romanization: "kěxíng" },
        { option: "C", answer: "impossible", chinese_answer: "不可能", chinese_romanization: "bù kěnéng" },
        { option: "D", answer: "unnecessary", chinese_answer: "不必要", chinese_romanization: "bù bìyào" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'practicable' means capable of being done or put into practice successfully." +
        "<br><br>" +
        "(A) 'impractical' means not sensible or realistic." +
        "<br><br>" +
        "(C) 'impossible' means not able to occur or be done." +
        "<br><br>" +
        "(D) 'unnecessary' means not needed.",
    chinese_explanation: "(B) “可行” 意味着能够成功地完成或付诸实践。" +
        "<br><br>" +
        "(A) '不切实际' 意味着不合理或不现实。" +
        "<br><br>" +
        "(C) '不可能' 意味着不能发生或完成。" +
        "<br><br>" +
        "(D) '不必要' 意味着不需要。"
    },
    {
        id: 9,
        question: "The __________ atmosphere of the small café made it a popular spot for locals to gather and chat.",
        chinese_question: "小咖啡馆那 __________ 的氛围使它成为当地人聚会和聊天的热门地点。",
        answers: [
            { option: "A", answer: "hostile", chinese_answer: "敌对的", chinese_romanization: "díduì de" },
            { option: "B", answer: "tense", chinese_answer: "紧张的", chinese_romanization: "jǐnzhāng de" },
            { option: "C", answer: "genial", chinese_answer: "和蔼的", chinese_romanization: "hé'ǎi de" },
            { option: "D", answer: "intimidating", chinese_answer: "吓人的", chinese_romanization: "xiàrén de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'genial' means friendly and cheerful." +
            "<br><br>" +
            "(A) 'hostile' means unfriendly; antagonistic." +
            "<br><br>" +
            "(B) 'tense' means unable to relax because of nervousness, anxiety, or stimulation." +
            "<br><br>" +
            "(D) 'intimidating' means frightening or overawing someone, especially in order to make them do what one wants.",
        chinese_explanation: "(C) '和蔼的' 意味着友好和愉快的。" +
            "<br><br>" +
            "'敌对的' 意味着不友好的；敌对的。" +
            "<br><br>" +
            "'紧张的' 意味着由于紧张、焦虑或兴奋而无法放松的。" +
            "<br><br>" +
            "'吓人的' 意味着使人害怕或惊讶的，特别是为了使他们做某事。"
    },
    {
        id: 10,
        question: "During the economic recession, funding for new projects became __________, forcing many startups to close.",
        chinese_question: "在经济衰退期间，新项目的资金变得 __________，迫使许多初创企业关闭。",
        answers: [
            { option: "A", answer: "plentiful", chinese_answer: "丰富的", chinese_romanization: "fēngfù de" },
            { option: "B", answer: "scarce", chinese_answer: "稀缺的", chinese_romanization: "xīquē de" },
            { option: "C", answer: "adequate", chinese_answer: "充足的", chinese_romanization: "chōngzú de" },
            { option: "D", answer: "bountiful", chinese_answer: "大量的", chinese_romanization: "dàliàng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'scarce' means insufficient for the demand; rare." +
            "<br><br>" +
            "(A) 'plentiful' means existing in or yielding great quantities." +
            "<br><br>" +
            "(C) 'adequate' means satisfactory or acceptable in quality or quantity." +
            "<br><br>" +
            "(D) 'bountiful' means large in quantity; abundant.",
        chinese_explanation: "(B) '稀缺的' 意味着需求不足的；稀有的。" +
            "<br><br>" +
            "(A) '丰富的' 意味着存在或产量大的。" +
            "<br><br>" +
            "(C) '充足的' 意味着在质量或数量上令人满意或可接受的。" +
            "<br><br>" +
            "(D) '大量的' 意味着数量大的；丰富的。"
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
