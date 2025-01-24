// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ opinions on social issues, informed by her extensive reading and experiences, reflected a deep understanding and a broad perspective.",
        chinese_question: "她对社会问题的 __________ 见解，源于她广泛的阅读和经验，反映了深刻的理解和广阔的视角。",
        answers: [
            { option: "A", answer: "ignorant", chinese_answer: "无知的", chinese_romanization: "wúzhī de" },
            { option: "B", answer: "uninformed", chinese_answer: "不知情的", chinese_romanization: "bù zhīqíng de" },
            { option: "C", answer: "educated", chinese_answer: "受过教育的", chinese_romanization: "shòuguò jiàoyù de" },
            { option: "D", answer: "simplistic", chinese_answer: "简单化的", chinese_romanization: "jiǎndānhuà de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'educated' means having received education, especially to a high level." +
            "<br><br>" +
            "(A) 'ignorant' means lacking knowledge or awareness in general." +
            "<br><br>" +
            "(B) 'uninformed' means not having or showing knowledge or information about a particular subject." +
            "<br><br>" +
            "(D) 'simplistic' means treating complex issues and problems as if they were much simpler than they really are.",
        chinese_explanation: "(C) '受过教育的' 意味着接受过教育，尤其是高水平的教育。" +
            "<br><br>" +
            "'无知的' 意味着缺乏一般知识或意识。" +
            "<br><br>" +
            "'不知情的' 意味着没有或显示关于特定主题的知识或信息。" +
            "<br><br>" +
            "'简单化的' 意味着将复杂的问题和问题看作比实际简单得多。"
    },
    {
        id: 2,
    question: "His __________ ideas on education reform aimed to completely transform the traditional teaching methods and curriculum.",
    chinese_question: "他对教育改革的 __________ 想法旨在彻底改变传统的教学方法和课程。",
    answers: [
        { option: "A", answer: "radical", chinese_answer: "激进的", chinese_romanization: "jījìn de" },
        { option: "B", answer: "conventional", chinese_answer: "传统的", chinese_romanization: "chuántǒng de" },
        { option: "C", answer: "typical", chinese_answer: "典型的", chinese_romanization: "diǎnxíng de" },
        { option: "D", answer: "customary", chinese_answer: "惯常的", chinese_romanization: "guàncháng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'radical' means relating to or affecting the fundamental nature of something; far-reaching or thorough." +
        "<br><br>" +
        "(B) 'conventional' means based on or in accordance with what is generally done or believed." +
        "<br><br>" +
        "(C) 'typical' means having the distinctive qualities of a particular type of person or thing." +
        "<br><br>" +
        "(D) 'customary' means according to the customs or usual practices associated with a particular society, place, or set of circumstances.",
    chinese_explanation: "(A) '激进的' 意味着关系到或影响某事物的根本性质的；深远或彻底的。" +
        "<br><br>" +
        "(B) '传统的' 意味着基于或按照通常所做或所信的。" +
        "<br><br>" +
        "(C) '典型的' 意味着具有某种特定类型的人或事物的独特特质的。" +
        "<br><br>" +
        "(D) '惯常的' 意味着根据与特定社会、地方或情况相关的习俗或通常做法的。"
    },
    {
        id: 3,
    question: "Her emotions were as __________ as the peaks of a mountain range, sharp and intense.",
    chinese_question: "她的情感像山脉的峰顶一样__________，锋利而强烈。",
    answers: [
        { option: "A", answer: "smooth", chinese_answer: "光滑的", chinese_romanization: "guānghuá de" },
        { option: "B", answer: "rounded", chinese_answer: "圆形的", chinese_romanization: "yuánxíng de" },
        { option: "C", answer: "jagged", chinese_answer: "锯齿状的", chinese_romanization: "jùchǐ zhuàng de" },
        { option: "D", answer: "polished", chinese_answer: "抛光的", chinese_romanization: "pāoguāng de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'jagged' means having rough, sharp points protruding. Figuratively, it can mean being raw and intense." +
        "<br><br>" +
        "(A) 'smooth' means having an even and regular surface or consistency; free from perceptible projections, lumps, or indentations." +
        "<br><br>" +
        "(B) 'rounded' means having a smooth, curved surface." +
        "<br><br>" +
        "(D) 'polished' means shiny as a result of being rubbed.",
    chinese_explanation: "(C) '锯齿状的' 一词意味着有粗糙、尖锐的突起点。比喻地，它可以表示生动和强烈的。" +
        "<br><br>" +
        "(A) '光滑的' 意味着有均匀和规则的表面或一致性；没有明显的突起、凸块或凹痕。" +
        "<br><br>" +
        "(B) '圆形的' 意味着有光滑的、弯曲的表面。" +
        "<br><br>" +
        "(D) '抛光的' 意味着由于被摩擦而发亮。"
    },
    {
        id: 4,
        question: "The politician's __________ rhetoric alienated many people and promoted fear of outsiders.",
        chinese_question: "那位政客的 __________ 言论疏远了许多人，并促进了对外来者的恐惧。",
        answers: [
            { option: "A", answer: "inclusive", chinese_answer: "包容的", chinese_romanization: "bāoróng de" },
            { option: "B", answer: "welcoming", chinese_answer: "欢迎的", chinese_romanization: "huānyíng de" },
            { option: "C", answer: "xenophobic", chinese_answer: "仇外的", chinese_romanization: "chóuwài de" },
            { option: "D", answer: "tolerant", chinese_answer: "宽容的", chinese_romanization: "kuānróng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'xenophobic' means having or showing a dislike of or prejudice against people from other countries." +
            "<br><br>" +
            "(A) 'inclusive' means not excluding any of the parties or groups involved in something." +
            "<br><br>" +
            "(B) 'welcoming' means friendly or making someone feel welcome." +
            "<br><br>" +
            "(D) 'tolerant' means showing willingness to allow the existence of opinions or behavior that one does not necessarily agree with.",
        chinese_explanation: "(C) '仇外的' 意味着对外国人有或表现出不喜欢或偏见。" +
            "<br><br>" +
            "(A) '包容的' 意味着不排除参与其中的任何一方或群体。" +
            "<br><br>" +
            "(B) '欢迎的' 意味着友好的或让人感到受欢迎的。" +
            "<br><br>" +
            "(D) '宽容的' 意味着愿意允许存在自己不一定同意的意见或行为。"
    },
    {
        id: 5,
    question: "Her __________ determination to succeed made her work tirelessly, even when faced with significant challenges.",
    chinese_question: "她 __________ 的成功决心使她不知疲倦地工作，即使面对重大挑战也不退缩。",
    answers: [
        { option: "A", answer: "obstinate", chinese_answer: "顽强的", chinese_romanization: "wánqiáng de" },
        { option: "B", answer: "compliant", chinese_answer: "顺从的", chinese_romanization: "shùncóng de" },
        { option: "C", answer: "pliable", chinese_answer: "易弯的", chinese_romanization: "yìwān de" },
        { option: "D", answer: "submissive", chinese_answer: "服从的", chinese_romanization: "fúcóng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'obstinate' means stubbornly refusing to change one's opinion or chosen course of action, despite attempts to persuade one to do so." +
        "<br><br>" +
        "(B) 'compliant' means inclined to agree with others or obey rules, especially to an excessive degree." +
        "<br><br>" +
        "(C) 'pliable' means easily bent; flexible." +
        "<br><br>" +
        "(D) 'submissive' means ready to conform to the authority or will of others; meekly obedient or passive.",
    chinese_explanation: "(A) '顽强的' 意味着顽固地拒绝改变自己的观点或选择的行动路线，尽管有人试图说服其改变。" +
        "<br><br>" +
        "(B) '顺从的' 意味着倾向于同意他人或遵守规则，尤其是过度地。" +
        "<br><br>" +
        "(C) '易弯的' 意味着容易弯曲的；灵活的。" +
        "<br><br>" +
        "(D) '服从的' 意味着准备服从他人的权威或意愿；温顺地服从或被动的。"
    },
    {
        id: 6,
    question: "The __________ reason for the meeting was to discuss the budget for the next quarter.",
    chinese_question: "会议的 __________ 原因是讨论下个季度的预算。",
    answers: [
        { option: "A", answer: "primary", chinese_answer: "主要", chinese_romanization: "zhǔyào" },
        { option: "B", answer: "incidental", chinese_answer: "附带", chinese_romanization: "fùdài" },
        { option: "C", answer: "optional", chinese_answer: "可选", chinese_romanization: "kěxuǎn" },
        { option: "D", answer: "irrelevant", chinese_answer: "无关", chinese_romanization: "wúguān" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'primary' means of chief importance; principal." +
        "<br><br>" +
        "(B) 'incidental' means occurring as a minor accompaniment or by chance." +
        "<br><br>" +
        "(C) 'optional' means available to be chosen but not obligatory." +
        "<br><br>" +
        "(D) 'irrelevant' means not connected with or relevant to something.",
    chinese_explanation: "(A) '主要' 意味着最重要的；主要的。" +
        "<br><br>" +
        "(B) '附带' 意味着作为次要伴随发生或偶然发生的。" +
        "<br><br>" +
        "(C) '可选' 意味着可供选择但不是强制性的。" +
        "<br><br>" +
        "(D) '无关' 意味着与某事无关。"
    },
    {
        id: 7,
        question: "Although the project was approved, it received only __________ funding, barely enough to start the initial phase.",
        chinese_question: "尽管项目已获批准，但仅获得 __________ 的资金，勉强足以启动初始阶段。",
        answers: [
            { option: "A", answer: "ample", chinese_answer: "充足的", chinese_romanization: "chōngzú de" },
            { option: "B", answer: "generous", chinese_answer: "慷慨的", chinese_romanization: "kāngkǎi de" },
            { option: "C", answer: "nominal", chinese_answer: "象征性的", chinese_romanization: "xiàngzhēng xìng de" },
            { option: "D", answer: "sufficient", chinese_answer: "足够的", chinese_romanization: "zúgòu de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'nominal' means (of a price or amount of money) very small; far below the real value or cost." +
            "<br><br>" +
            "(A) 'ample' means enough or more than enough; plentiful." +
            "<br><br>" +
            "(B) 'generous' means showing a readiness to give more of something, as money or time, than is strictly necessary or expected." +
            "<br><br>" +
            "(D) 'sufficient' means enough; adequate.",
        chinese_explanation: "(C) '象征性的' 意味着（指价格或金额）非常小的；远低于实际价值或成本。" +
            "<br><br>" +
            "(A) '充足的' 意味着足够或超过足够的；丰富的。" +
            "<br><br>" +
            "(B) '慷慨的' 意味着准备多给一些东西，如金钱或时间，超过必要或预期的。" +
            "<br><br>" +
            "(D) '足够的' 意味着足够的；适当的。"
    },
    {
        id: 8,
        question: "His __________ behavior towards his colleagues, including constant belittling and harassment, made the workplace unbearable.",
        chinese_question: "他对同事的 __________ 行为，包括不断贬低和骚扰，使工作环境变得难以忍受。",
        answers: [
            { option: "A", answer: "kind", chinese_answer: "友善的", chinese_romanization: "yǒushàn de" },
            { option: "B", answer: "loathsome", chinese_answer: "令人厌恶的", chinese_romanization: "lìng rén yànwù de" },
            { option: "C", answer: "respectful", chinese_answer: "尊重的", chinese_romanization: "zūnzhòng de" },
            { option: "D", answer: "courteous", chinese_answer: "有礼貌的", chinese_romanization: "yǒu lǐmào de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'loathsome' means causing hatred or disgust; repulsive." +
            "<br><br>" +
            "(A) 'kind' means having or showing a friendly, generous, and considerate nature." +
            "<br><br>" +
            "(C) 'respectful' means feeling or showing deference and respect." +
            "<br><br>" +
            "(D) 'courteous' means polite, respectful, or considerate in manner.",
        chinese_explanation: "(B) '令人厌恶的' 意味着引起憎恨或厌恶的；令人反感的。" +
            "<br><br>" +
            "'友善的' 意味着具有或表现出友好、慷慨和体贴的性格。" +
            "<br><br>" +
            "'尊重的' 意味着感到或表现出敬意的。" +
            "<br><br>" +
            "'有礼貌的' 意味着举止礼貌、尊重或体贴的。"
    },
    {
        id: 9,
        question: "His __________ nature made him always ready to lend a hand to those in need.",
        chinese_question: "他 __________ 的本性使他总是准备好帮助有需要的人。",
        answers: [
            { option: "A", answer: "selfish", chinese_answer: "自私", chinese_romanization: "zìsī" },
            { option: "B", answer: "kindhearted", chinese_answer: "善良", chinese_romanization: "shànliáng" },
            { option: "C", answer: "uncaring", chinese_answer: "无情", chinese_romanization: "wúqíng" },
            { option: "D", answer: "indifferent", chinese_answer: "漠不关心", chinese_romanization: "mò bù guān xīn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'kindhearted' means having a kind and sympathetic nature." +
            "<br><br>" +
            "(A) 'selfish' means lacking consideration for others; concerned chiefly with one's own personal profit or pleasure." +
            "<br><br>" +
            "(C) 'uncaring' means not displaying sympathy or concern for others." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(B) '善良' 意味着具有善良和同情心的性格。" +
            "<br><br>" +
            "'自私' 意味着缺乏对他人的考虑；主要关心个人利益或快乐。" +
            "<br><br>" +
            "'无情' 意味着不表现出同情或关心他人。" +
            "<br><br>" +
            "'漠不关心' 意味着没有特别的兴趣或同情；不关心。"
    },
    {
        id: 10,
    question: "The changes in the company policy were __________ to most employees, as they improved work conditions.",
    chinese_question: "公司的政策变更对大多数员工来说是 __________ 的，因为它改善了工作条件。",
    answers: [
        { option: "A", answer: "palatable", chinese_answer: "可接受的", chinese_romanization: "kě jiēshòu de" },
        { option: "B", answer: "offensive", chinese_answer: "冒犯的", chinese_romanization: "màofàn de" },
        { option: "C", answer: "detrimental", chinese_answer: "有害的", chinese_romanization: "yǒuhài de" },
        { option: "D", answer: "unwelcome", chinese_answer: "不受欢迎的", chinese_romanization: "bù shòu huānyíng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'palatable' means acceptable or satisfactory; pleasant." +
        "<br><br>" +
        "(B) 'offensive' means causing someone to feel deeply hurt, upset, or angry." +
        "<br><br>" +
        "(C) 'detrimental' means tending to cause harm." +
        "<br><br>" +
        "(D) 'unwelcome' means not gladly received.",
    chinese_explanation: "(A) '可接受的' 意味着可以接受或令人满意的；令人愉快的。" +
        "<br><br>" +
        "(B) '冒犯的' 意味着使某人感到深深的伤害、难过或生气。" +
        "<br><br>" +
        "(C) '有害的' 意味着趋向于造成伤害的。" +
        "<br><br>" +
        "(D) '不受欢迎的' 意味着不乐意接待的。"
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
