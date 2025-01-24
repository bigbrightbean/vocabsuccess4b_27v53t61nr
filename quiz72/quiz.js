// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ of traditional values is often emphasized in conservative cultures to maintain societal stability.",
        chinese_question: "保守文化中常强调传统价值观的 __________，以维持社会稳定。",
        answers: [
            { option: "A", answer: "retention", chinese_answer: "保留", chinese_romanization: "bǎoliú" },
            { option: "B", answer: "rejection", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "C", answer: "abandonment", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
            { option: "D", answer: "erosion", chinese_answer: "侵蚀", chinese_romanization: "qīnshí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'retention' figuratively means the continued possession, use, or control of something." +
            "<br><br>" +
            "(B) 'rejection' means the dismissing or refusing of a proposal, idea, etc." +
            "<br><br>" +
            "(C) 'abandonment' means the action or fact of abandoning or being abandoned." +
            "<br><br>" +
            "(D) 'erosion' means the process of eroding or being eroded by wind, water, or other natural agents.",
        chinese_explanation: "(A) '保留' 在此语境下意指继续持有、使用或控制某物。" +
            "<br><br>" +
            "(B) '拒绝' 意味着对提议、想法等的驳回或拒绝。" +
            "<br><br>" +
            "(C) '放弃' 意味着放弃或被放弃的行为或事实。" +
            "<br><br>" +
            "(D) '侵蚀' 意味着被风、水或其他自然因素侵蚀或被侵蚀的过程。"
    },
    {
        id: 2,
        question: "Her __________ was evident when she refused to accept bribes, insisting on following the rules and doing what was right.",
        chinese_question: "她的 __________ 很明显，因为她拒绝接受贿赂，坚持遵守规则，做正确的事情。",
        answers: [
                { option: "A", answer: "probity", chinese_answer: "正直", chinese_romanization: "zhèngzhí" },
                { option: "B", answer: "hypocrisy", chinese_answer: "虚伪", chinese_romanization: "xūwěi" },
                { option: "C", answer: "duplicity", chinese_answer: "口是心非", chinese_romanization: "kǒushìxīnfēi" },
                { option: "D", answer: "guile", chinese_answer: "狡诈", chinese_romanization: "jiǎozhà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'probity' means the quality of having strong moral principles; honesty and decency." +
            "<br><br>" +
            "(B) 'hypocrisy' means the practice of claiming to have moral standards or beliefs to which one's own behavior does not conform; pretense." +
            "<br><br>" +
            "(C) 'duplicity' means deceitfulness; double-dealing." +
            "<br><br>" +
            "(D) 'guile' means sly or cunning intelligence.",
        chinese_explanation: "(A) '正直'一词意味着具有强烈道德原则的品质；诚实和正派。" +
            "<br><br>" +
            "(B) '虚伪' 意味着声称具有道德标准或信仰，而自己的行为不符合这些标准或信仰；伪装。" +
            "<br><br>" +
            "(C) '口是心非' 意味着欺骗性；两面派。" +
            "<br><br>" +
            "(D) '狡诈' 意味着狡猾或狡猾的智慧。"
    },
    {
        id: 3,
        question: "Her __________ towards modern art stemmed from her preference for classical styles and traditional techniques.",
        chinese_question: "她对现代艺术的 __________ 源于她对古典风格和传统技法的偏爱。",
        answers: [
            { option: "A", answer: "antipathy", chinese_answer: "反感", chinese_romanization: "fǎngǎn" },
            { option: "B", answer: "affection", chinese_answer: "喜爱", chinese_romanization: "xǐ'ài" },
            { option: "C", answer: "enthusiasm", chinese_answer: "热情", chinese_romanization: "rèqíng" },
            { option: "D", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'antipathy' figuratively means a deep-seated feeling of dislike or opposition." +
            "<br><br>" +
            "(B) 'affection' means a gentle feeling of fondness or liking." +
            "<br><br>" +
            "(C) 'enthusiasm' means intense and eager enjoyment, interest, or approval." +
            "<br><br>" +
            "(D) 'indifference' means lack of interest, concern, or sympathy.",
        chinese_explanation: "(A) '反感' 在此语境下意指深深的厌恶或反对。" +
            "<br><br>" +
            "(B) '喜爱' 意味着温柔的喜欢或喜欢的感觉。" +
            "<br><br>" +
            "(C) '热情' 意味着强烈和热切的享受、兴趣或赞同。" +
            "<br><br>" +
            "(D) '冷漠' 意味着缺乏兴趣、关心或同情。"
    },
    {
        id: 4,
        question: "The team's __________ on the field was clear as they won every match of the season.",
        chinese_question: "球队在球场上的 __________ 很明显，因为他们赢得了整个赛季的每一场比赛。",
        answers: [
            { option: "A", answer: "hegemony", chinese_answer: "霸权", chinese_romanization: "bàquán" },
            { option: "B", answer: "struggle", chinese_answer: "挣扎", chinese_romanization: "zhēngzhá" },
            { option: "C", answer: "equality", chinese_answer: "平等", chinese_romanization: "píngděng" },
            { option: "D", answer: "confusion", chinese_answer: "混乱", chinese_romanization: "hùnluàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'hegemony' means leadership or dominance, especially by one country or social group over others." +
            "<br><br>" +
            "(B) 'struggle' means make forceful or violent efforts to get free of restraint or constriction." +
            "<br><br>" +
            "(C) 'equality' means the state of being equal, especially in status, rights, or opportunities." +
            "<br><br>" +
            "(D) 'confusion' means lack of understanding; uncertainty.",
        chinese_explanation: "(A) '霸权' 意味着领导或支配，尤其是一个国家或社会团体对他人的领导或支配。" +
            "<br><br>" +
            "(B) '挣扎' 意味着努力摆脱约束或限制。" +
            "<br><br>" +
            "(C) '平等' 意味着特别是地位、权利或机会上的平等状态。" +
            "<br><br>" +
            "(D) '混乱' 意味着缺乏理解；不确定性。"
    },
    {
        id: 5,
        question: "The __________ offered by the company were sufficient to attract top talent from around the industry.",
        chinese_question: "公司提供的 __________ 足以吸引业界顶尖人才。",
        answers: [
                { option: "A", answer: "inconveniences", chinese_answer: "不便", chinese_romanization: "bùbiàn" },
                { option: "B", answer: "emoluments", chinese_answer: "薪酬", chinese_romanization: "xīnchóu" },
                { option: "C", answer: "reprimands", chinese_answer: "训斥", chinese_romanization: "xùnchì" },
                { option: "D", answer: "deficiencies", chinese_answer: "缺陷", chinese_romanization: "quēxiàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'emoluments' means salaries, fees, or profits from employment or office." +
            "<br><br>" +
            "(A) 'inconveniences' means troubles or difficulties caused to one's personal requirements or comfort." +
            "<br><br>" +
            "(C) 'reprimands' means formal expressions of disapproval." +
            "<br><br>" +
            "(D) 'deficiencies' means lack or shortages.",
        chinese_explanation: "(B) '薪酬'一词意味着来自就业或职务的薪水、费用或利润。" +
            "<br><br>" +
            "(A) '不便' 意味着给个人要求或舒适带来的麻烦或困难。" +
            "<br><br>" +
            "(C) '训斥' 意味着正式的不赞成表达。" +
            "<br><br>" +
            "(D) '缺陷' 意味着缺乏或短缺。"
    },
    {
        id: 6,
        question: "The salesman’s __________ were persuasive, but she decided to take her time before making a purchase.",
        chinese_question: "销售员的 __________ 很有说服力，但她决定在购买之前仔细考虑。",
        answers: [
            { option: "A", answer: "blandishments", chinese_answer: "奉承话", chinese_romanization: "fèngchēng huà" },
            { option: "B", answer: "complaints", chinese_answer: "投诉", chinese_romanization: "tóusù" },
            { option: "C", answer: "accusations", chinese_answer: "指控", chinese_romanization: "zhǐkòng" },
            { option: "D", answer: "promises", chinese_answer: "承诺", chinese_romanization: "chéngnuò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'blandishments' figuratively means flattering or pleasing statements or actions used to persuade someone gently to do something." +
            "<br><br>" +
            "(B) 'complaints' means expressions of dissatisfaction or annoyance about something." +
            "<br><br>" +
            "(C) 'accusations' means claims that someone has done something illegal or wrong." +
            "<br><br>" +
            "(D) 'promises' means declarations or assurances that one will do something or that a particular thing will happen.",
        chinese_explanation: "(A) '奉承话' 在此语境下意指用来温和地劝说某人的恭维或令人愉快的陈述或行动。" +
            "<br><br>" +
            "(B) '投诉' 意味着对某事物的不满或恼怒的表达。" +
            "<br><br>" +
            "(C) '指控' 意味着声称某人做了非法或错误的事情。" +
            "<br><br>" +
            "(D) '承诺' 意味着保证某人会做某事或某件事会发生的声明或保证。"
    },
    {
        id: 7,
    question: "The musician's outspoken political beliefs resulted in an __________ on his music being played on several radio stations.",
    chinese_question: "由于音乐家直言不讳的政治信仰，他的音乐在几个电台上被 __________。",
    answers: [
        { option: "A", answer: "endorsement", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "B", answer: "embargo", chinese_answer: "禁播", chinese_romanization: "jìnbō" },
        { option: "C", answer: "embrace", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
        { option: "D", answer: "encouragement", chinese_answer: "鼓励", chinese_romanization: "gǔlì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'embargo' figuratively means a ban or restriction on broadcasting his music." + 
        "<br><br>" + 
        "(A) 'endorsement' means an act of giving one's public approval or support to someone or something." + 
        "<br><br>" + 
        "(C) 'embrace' means an act of accepting or supporting something willingly or enthusiastically." + 
        "<br><br>" + 
        "(D) 'encouragement' means the action of giving someone support, confidence, or hope.",
    chinese_explanation: "(B) '禁播' 在此语境下意指对播放他音乐的禁令或限制。" + 
        "<br><br>" + 
        "(A) '支持' 意味着公开表示赞同或支持某人或某事的行为。" + 
        "<br><br>" + 
        "(C) '接受' 意味着愿意或热情地接受或支持某事的行为。" + 
        "<br><br>" + 
        "(D) '鼓励' 意味着给予某人支持、信心或希望的行为。"
    },
    {
        id: 8,
        question: "The artist thrived in a creative __________ that encouraged experimentation and collaboration.",
        chinese_question: "这位艺术家在一个鼓励实验和合作的创意 __________ 中茁壮成长。",
        answers: [
                { option: "A", answer: "solitude", chinese_answer: "孤独", chinese_romanization: "gūdú" },
                { option: "B", answer: "milieu", chinese_answer: "环境", chinese_romanization: "huánjìng" },
                { option: "C", answer: "wilderness", chinese_answer: "荒野", chinese_romanization: "huāngyě" },
                { option: "D", answer: "vacuum", chinese_answer: "真空", chinese_romanization: "zhēnkōng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'milieu' means a person's social environment." +
            "<br><br>" +
            "(A) 'solitude' means the state of being alone." +
            "<br><br>" +
            "(C) 'wilderness' means an uncultivated, uninhabited, and inhospitable region." +
            "<br><br>" +
            "(D) 'vacuum' means a space entirely devoid of matter.",
        chinese_explanation: "(B) '环境'一词意味着一个人的社会环境。" +
            "<br><br>" +
            "(A) '孤独' 意味着独处的状态。" +
            "<br><br>" +
            "(C) '荒野' 意味着未开垦、无人居住和不适宜居住的地区。" +
            "<br><br>" +
            "(D) '真空' 意味着完全没有物质的空间。"
    },
    {
        id: 9,
        question: "The artist's __________ with a paintbrush was evident in her stunningly detailed and lifelike portraits.",
        chinese_question: "这位艺术家用画笔的 __________ 体现在她惊人细致和逼真的肖像画中。",
        answers: [
                { option: "A", answer: "prowess", chinese_answer: "英勇", chinese_romanization: "yīngyǒng" },
                { option: "B", answer: "confusion", chinese_answer: "困惑", chinese_romanization: "kùnhuò" },
                { option: "C", answer: "ineptitude", chinese_answer: "无能", chinese_romanization: "wúnéng" },
                { option: "D", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'prowess' means skill or expertise in a particular activity or field; bravery in battle." +
            "<br><br>" +
            "(B) 'confusion' means lack of understanding; uncertainty." +
            "<br><br>" +
            "(C) 'ineptitude' means lack of skill or ability." +
            "<br><br>" +
            "(D) 'hesitation' means the action of pausing or hesitating before saying or doing something.",
        chinese_explanation: "(A) '英勇'一词意味着在特定活动或领域的技能或专长；战斗中的勇敢。" +
            "<br><br>" +
            "(B) '困惑' 意味着缺乏理解；不确定。" +
            "<br><br>" +
            "(C) '无能' 意味着缺乏技能或能力。" +
            "<br><br>" +
            "(D) '犹豫' 意味着在说或做某事前暂停或犹豫的动作。"
    },
    {
        id: 10,
        question: "The corporation's market __________ enabled it to set prices that smaller companies had to follow.",
        chinese_question: "该公司的市场 __________ 使其能够制定价格，其他小公司不得不遵循。",
        answers: [
            { option: "A", answer: "hegemony", chinese_answer: "霸权", chinese_romanization: "bàquán" },
            { option: "B", answer: "vulnerability", chinese_answer: "脆弱性", chinese_romanization: "cuìruò xìng" },
            { option: "C", answer: "humility", chinese_answer: "谦逊", chinese_romanization: "qiānxùn" },
            { option: "D", answer: "equality", chinese_answer: "平等", chinese_romanization: "píngděng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'hegemony' means leadership or dominance, especially by one country or social group over others." +
            "<br><br>" +
            "(B) 'vulnerability' means the quality or state of being exposed to the possibility of being attacked or harmed." +
            "<br><br>" +
            "(C) 'humility' means a modest or low view of one's own importance; humbleness." +
            "<br><br>" +
            "(D) 'equality' means the state of being equal, especially in status, rights, or opportunities.",
        chinese_explanation: "(A) '霸权' 意味着领导或支配，尤其是一个国家或社会团体对他人的领导或支配。" +
            "<br><br>" +
            "(B) '脆弱性' 意味着暴露于可能受到攻击或伤害的状态或质量。" +
            "<br><br>" +
            "(C) '谦逊' 意味着对自己重要性的谦逊或低调看法；谦逊。" +
            "<br><br>" +
            "(D) '平等' 意味着特别是地位、权利或机会上的平等状态。"
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
