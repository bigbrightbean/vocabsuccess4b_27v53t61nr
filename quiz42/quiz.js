// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The rumour was __________, having no basis in reality and spreading false information.",
    chinese_question: "这个谣言是 __________ 的，没有现实基础，传播虚假信息。",
    answers: [
        { option: "A", answer: "valid", chinese_answer: "合理的", chinese_romanization: "hélǐ de" },
        { option: "B", answer: "logical", chinese_answer: "逻辑的", chinese_romanization: "luójí de" },
        { option: "C", answer: "fallacious", chinese_answer: "谬误的", chinese_romanization: "miùwù de" },
        { option: "D", answer: "sound", chinese_answer: "正确的", chinese_romanization: "zhèngquè de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'fallacious' means based on a mistaken belief. Figuratively, it can mean being misleading or deceptive." +
        "<br><br>" +
        "(A) 'valid' means having a sound basis in logic or fact; reasonable." +
        "<br><br>" +
        "(B) 'logical' means of or according to the rules of logic or formal argument." +
        "<br><br>" +
        "(D) 'sound' means based on valid reason or good judgment.",
    chinese_explanation: "(C) '谬误的' 意味着基于错误的信念。比喻地，它可以表示具有误导性或欺骗性的。" +
        "<br><br>" +
        "(A) '合理的' 意味着在逻辑或事实上有合理依据的。" +
        "<br><br>" +
        "(B) '逻辑的' 意味着符合逻辑规则或形式论证的。" +
        "<br><br>" +
        "(D) '正确的' 意味着基于合理理由或良好判断的。"
    },
    {
        id: 2,
    question: "As a team leader, he is __________ for motivating his team members and ensuring everyone is working towards the common goal.",
    chinese_question: "作为团队领导，他 __________ 激励团队成员，并确保每个人都在为共同目标努力。",
    answers: [
        { option: "A", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbù guānxīn de" },
        { option: "B", answer: "responsible", chinese_answer: "负责的", chinese_romanization: "fùzé de" },
        { option: "C", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
        { option: "D", answer: "uninvolved", chinese_answer: "不参与的", chinese_romanization: "bù cānyù de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'responsible' means having an obligation to do something, or having control over or care for someone, as part of one's job or role." +
        "<br><br>" +
        "(A) 'indifferent' means having no particular interest or sympathy; unconcerned." +
        "<br><br>" +
        "(C) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
        "<br><br>" +
        "(D) 'uninvolved' means not taking part in something; not engaged.",
    chinese_explanation: "(B) “负责的” 意味着有义务做某事，或在工作或角色的一部分中控制或照顾某人。" +
        "<br><br>" +
        "(A) '漠不关心的' 意味着没有特别的兴趣或同情心；不关心的。" +
        "<br><br>" +
        "(C) '粗心的' 意味着没有充分注意或考虑避免伤害或错误。" +
        "<br><br>" +
        "(D) '不参与的' 意味着不参与某事；不参与。"
    },
    {
        id: 3,
    question: "Her efforts were __________ to the rewards she received, reflecting the hard work she put in.",
    chinese_question: "她的努力与她得到的回报是 __________ 的，反映了她所付出的辛勤劳动。",
    answers: [
        { option: "A", answer: "unequal", chinese_answer: "不平等的", chinese_romanization: "bù píngděng de" },
        { option: "B", answer: "unfair", chinese_answer: "不公平的", chinese_romanization: "bù gōngpíng de" },
        { option: "C", answer: "proportional", chinese_answer: "成比例的", chinese_romanization: "chéng bǐlì de" },
        { option: "D", answer: "insignificant", chinese_answer: "微不足道的", chinese_romanization: "wēi bùzú dào de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'proportional' means corresponding in size or amount to something else." +
        "<br><br>" +
        "(A) 'unequal' means not equal in quantity, size, or value." +
        "<br><br>" +
        "(B) 'unfair' means not based on or behaving according to the principles of equality and justice." +
        "<br><br>" +
        "(D) 'insignificant' means too small or unimportant to be worth considering.",
    chinese_explanation: "(C) '成比例的' 意味着在大小或数量上与其他事物相对应的。" +
        "<br><br>" +
        "(A) '不平等的' 意味着数量、大小或价值不相等的。" +
        "<br><br>" +
        "(B) '不公平的' 意味着不根据平等和正义原则的。" +
        "<br><br>" +
        "(D) '微不足道的' 意味着太小或不重要，不值得考虑的。"
    },
    {
        id: 4,
    question: "His __________ demeanour made him popular among his peers, always spreading joy and laughter wherever he went.",
    chinese_question: "他 __________ 的举止使他在同龄人中很受欢迎，总是无论走到哪里都带来欢乐和笑声。",
    answers: [
        { option: "A", answer: "jolly", chinese_answer: "快乐的", chinese_romanization: "kuàilè de" },
        { option: "B", answer: "irritable", chinese_answer: "易怒的", chinese_romanization: "yìnù de" },
        { option: "C", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
        { option: "D", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mò bù guānxīn de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'jolly' means happy and cheerful." +
        "<br><br>" +
        "(B) 'irritable' means having or showing a tendency to be easily annoyed or made angry." +
        "<br><br>" +
        "(C) 'apathetic' means showing or feeling no interest, enthusiasm, or concern." +
        "<br><br>" +
        "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
    chinese_explanation: "(A) '快乐的' 意味着幸福和愉快的。" +
        "<br><br>" +
        "(B) '易怒的' 意味着表现出或显示出容易被激怒或发怒的倾向。" +
        "<br><br>" +
        "(C) '冷漠的' 意味着表现出或感到没有兴趣、热情或关心的。" +
        "<br><br>" +
        "(D) '漠不关心的' 意味着没有特别的兴趣或同情；不关心的。"
    },
    {
        id: 5,
    question: "The company's __________ policies have not adapted well to the rapidly changing market.",
    chinese_question: "公司的 __________ 政策没有很好地适应快速变化的市场。",
    answers: [
        { option: "A", answer: "dynamic", chinese_answer: "动态的", chinese_romanization: "dòngtài de" },
        { option: "B", answer: "flexible", chinese_answer: "灵活的", chinese_romanization: "línghuó de" },
        { option: "C", answer: "static", chinese_answer: "静态的", chinese_romanization: "jìngtài de" },
        { option: "D", answer: "adaptable", chinese_answer: "适应的", chinese_romanization: "shìyìng de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'static' means lacking in movement, action, or change, especially in a way viewed as undesirable or uninteresting." +
        "<br><br>" +
        "(A) 'dynamic' means characterized by constant change, activity, or progress." +
        "<br><br>" +
        "(B) 'flexible' means capable of bending easily without breaking." +
        "<br><br>" +
        "(D) 'adaptable' means able to adjust to new conditions.",
    chinese_explanation: "(C) '静态的' 一词意味着缺乏运动、行动或变化，尤其是以一种被视为不理想或无趣的方式。" +
        "<br><br>" +
        "(A) '动态的' 意味着以不断变化、活动或进步为特征的。" +
        "<br><br>" +
        "(B) '灵活的' 意味着能够轻易弯曲而不折断的。" +
        "<br><br>" +
        "(D) '适应的' 意味着能够适应新条件的。"
    },
    {
        id: 6,
        question: "While the main purpose of the trip was business, they also enjoyed some __________ sightseeing in the evenings.",
        chinese_question: "虽然这次旅行的主要目的是商务，但他们晚上也享受了一些 __________ 的观光。",
        answers: [
                { option: "A", answer: "deliberate", chinese_answer: "故意的", chinese_romanization: "gùyì de" },
                { option: "B", answer: "primary", chinese_answer: "主要的", chinese_romanization: "zhǔyào de" },
                { option: "C", answer: "incidental", chinese_answer: "附带的", chinese_romanization: "fùdài de" },
                { option: "D", answer: "crucial", chinese_answer: "关键的", chinese_romanization: "guānjiàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'incidental' means occurring as a minor accompaniment or by chance in connection with something else." +
            "<br><br>" +
            "(A) 'deliberate' means done consciously and intentionally." +
            "<br><br>" +
            "(B) 'primary' means of chief importance; principal." +
            "<br><br>" +
            "(D) 'crucial' means decisive or critical, especially in the success or failure of something.",
        chinese_explanation: "(C) '附带的' 一词意味着作为次要伴随或偶然发生的，与其他事情有关的。" +
            "<br><br>" +
            "(A) '故意的' 意味着有意识和有意地完成的。" +
            "<br><br>" +
            "(B) '主要的' 意味着最重要的；首要的。" +
            "<br><br>" +
            "(D) '关键的' 意味着决定性的或至关重要的，尤其是在某事的成功或失败中。"
    },
    {
        id: 7,
    question: "He enjoyed the __________ right to make decisions for the family business.",
    chinese_question: "他享有为家族企业做决定的 __________ 权利。",
    answers: [
        { option: "A", answer: "sole", chinese_answer: "唯一", chinese_romanization: "wéiyī" },
        { option: "B", answer: "mutual", chinese_answer: "共同", chinese_romanization: "gòngtóng" },
        { option: "C", answer: "trivial", chinese_answer: "微不足道", chinese_romanization: "wēi bù zú dào" },
        { option: "D", answer: "secondary", chinese_answer: "次要", chinese_romanization: "cìyào" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'sole' means being the only one." +
        "<br><br>" +
        "(B) 'mutual' means held in common by two or more parties." +
        "<br><br>" +
        "(C) 'trivial' means of little value or importance." +
        "<br><br>" +
        "(D) 'secondary' means coming after, less important than, or resulting from someone or something else that is primary.",
    chinese_explanation: "(A) '唯一' 意味着是唯一的一个。" +
        "<br><br>" +
        "(B) '共同' 意味着由两方或多方共同持有。" +
        "<br><br>" +
        "(C) '微不足道' 意味着价值或重要性很小。" +
        "<br><br>" +
        "(D) '次要' 意味着排在后面的、不如主要的或由主要的某物引起的。"
    },
    {
        id: 8,
        question: "He had a __________ expression on his face during the entire meeting, indicating the gravity of the situation.",
        chinese_question: "在整个会议期间，他脸上都带着__________的表情，表明了情况的严重性。",
        answers: [
            { option: "A", answer: "playful", chinese_answer: "爱玩的", chinese_romanization: "àiwán de" },
            { option: "B", answer: "joking", chinese_answer: "开玩笑的", chinese_romanization: "kāi wánxiào de" },
            { option: "C", answer: "serious", chinese_answer: "严肃的", chinese_romanization: "yánsù de" },
            { option: "D", answer: "lighthearted", chinese_answer: "无忧无虑的", chinese_romanization: "wú yōu wúlǜ de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'serious' means solemn or thoughtful in character or manner." +
            "<br><br>" +
            "(A) 'playful' means fond of games and amusement; lighthearted." +
            "<br><br>" +
            "(B) 'joking' means making jokes; humorous or flippant." +
            "<br><br>" +
            "(D) 'lighthearted' means cheerful and carefree.",
        chinese_explanation: "(C) '严肃的'一词意味着性格或举止严肃或深思熟虑的。" +
            "<br><br>" +
            "(A) '爱玩的' 意味着喜欢游戏和娱乐的；无忧无虑的。" +
            "<br><br>" +
            "(B) '开玩笑的' 意味着开玩笑的；幽默或轻率的。" +
            "<br><br>" +
            "(D) '无忧无虑的' 意味着愉快和无忧无虑的。"
    },
    {
        id: 9,
    question: "His __________ glare made everyone in the room feel uneasy, as if he was silently warning them to stay away.",
    chinese_question: "他的 __________ 目光让房间里的每个人都感到不安，仿佛他在无声地警告他们远离。",
    answers: [
        { option: "A", answer: "menacing", chinese_answer: "威胁的", chinese_romanization: "wēixié de" },
        { option: "B", answer: "friendly", chinese_answer: "友好的", chinese_romanization: "yǒuhǎo de" },
        { option: "C", answer: "comforting", chinese_answer: "安慰的", chinese_romanization: "ānwèi de" },
        { option: "D", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'menacing' means suggesting the presence of danger; threatening." +
        "<br><br>" +
        "(B) 'friendly' means kind and pleasant." +
        "<br><br>" +
        "(C) 'comforting' means serving to alleviate a person's feelings of grief or distress." +
        "<br><br>" +
        "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
    chinese_explanation: "(A) '威胁的' 意味着暗示危险的存在；威胁的。" +
        "<br><br>" +
        "(B) '友好的' 意味着友善和愉快的。" +
        "<br><br>" +
        "(C) '安慰的' 意味着缓解一个人的悲伤或痛苦的。" +
        "<br><br>" +
        "(D) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。"
    },
    {
        id: 10,
    question: "The dictator's __________ actions led to widespread suffering and international condemnation.",
    chinese_question: "独裁者的__________行为导致了广泛的痛苦和国际上的谴责。",
    answers: [
        { option: "A", answer: "noble", chinese_answer: "高尚的", chinese_romanization: "gāoshàng de" },
        { option: "B", answer: "virtuous", chinese_answer: "道德高尚的", chinese_romanization: "dàodé gāoshàng de" },
        { option: "C", answer: "heinous", chinese_answer: "恶毒的", chinese_romanization: "èdú de" },
        { option: "D", answer: "commendable", chinese_answer: "值得称赞的", chinese_romanization: "zhíde chēngzàn de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'heinous' means utterly odious or wicked. Figuratively, it can mean being extremely evil or reprehensible." +
        "<br><br>" +
        "(A) 'noble' means having or showing fine personal qualities or high moral principles." +
        "<br><br>" +
        "(B) 'virtuous' means having or showing high moral standards." +
        "<br><br>" +
        "(D) 'commendable' means deserving praise.",
    chinese_explanation: "(C) '恶毒的' 意味着极其可憎的或邪恶的。比喻地，它可以表示极其邪恶或应受谴责的。" +
        "<br><br>" +
        "(A) '高尚的' 意味着拥有或表现出优秀的个人品质或高尚的道德原则。" +
        "<br><br>" +
        "(B) '道德高尚的' 意味着拥有或表现出高尚的道德标准。" +
        "<br><br>" +
        "(D) '值得称赞的' 意味着值得称赞的。"
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
