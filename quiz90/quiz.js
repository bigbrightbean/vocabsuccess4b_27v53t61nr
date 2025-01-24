// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The famous lawyer was known as an __________ for civil liberties, defending those whose rights were violated.",
        chinese_question: "这位著名律师被称为民权的 __________，为那些权利受到侵犯的人辩护。",
        answers: [
            { option: "A", answer: "advocate", chinese_answer: "倡导者", chinese_romanization: "chàngdǎo zhě" },
            { option: "B", answer: "adversary", chinese_answer: "对手", chinese_romanization: "duìshǒu" },
            { option: "C", answer: "spectator", chinese_answer: "观众", chinese_romanization: "guānzhòng" },
            { option: "D", answer: "critic", chinese_answer: "批评者", chinese_romanization: "pīpíng zhě" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'advocate' means a person who publicly supports or recommends a particular cause or policy." +
            "<br><br>" +
            "(B) 'adversary' means one's opponent in a contest, conflict, or dispute." +
            "<br><br>" +
            "(C) 'spectator' means a person who watches at a show, game, or other event." +
            "<br><br>" +
            "(D) 'critic' means a person who expresses an unfavorable opinion of something.",
        chinese_explanation: "(A) '倡导者' 意味着公开支持或推荐特定事业或政策的人。" +
            "<br><br>" +
            "(B) '对手' 意味着在比赛、冲突或争论中的对手。" +
            "<br><br>" +
            "(C) '观众' 意味着观看演出、比赛或其他活动的人。" +
            "<br><br>" +
            "(D) '批评者' 意味着对某事物表达不利意见的人。"
    },
    {
        id: 2,
        question: "The new regulations put the __________ on their plans to open a late-night café in the neighborhood.",
        chinese_question: "新法规给他们在社区开设深夜咖啡馆的计划来了个 __________。",
        answers: [
            { option: "A", answer: "kibosh", chinese_answer: "停止", chinese_romanization: "tíngzhǐ" },
            { option: "B", answer: "promotion", chinese_answer: "促销", chinese_romanization: "cùxiāo" },
            { option: "C", answer: "impetus", chinese_answer: "动力", chinese_romanization: "dònglì" },
            { option: "D", answer: "boost", chinese_answer: "提振", chinese_romanization: "tízhèn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'kibosh' figuratively means to put an end to; dispose of decisively." +
            "<br><br>" +
            "(B) 'promotion' means activity that supports or provides active encouragement for the furtherance of a cause, venture, or aim." +
            "<br><br>" +
            "(C) 'impetus' means the force or energy with which a body moves." +
            "<br><br>" +
            "(D) 'boost' means to help or encourage (something) to increase or improve.",
        chinese_explanation: "(A) '停止' 在此语境下比喻结束；果断地处置。" +
            "<br><br>" +
            "(B) '促销' 意味着支持或积极鼓励某一事业、企业或目标的活动。" +
            "<br><br>" +
            "(C) '动力' 意味着物体运动的力或能量。" +
            "<br><br>" +
            "(D) '提振' 意味着帮助或鼓励（某事物）增加或改进。"
    },
    {
        id: 3,
        question: "Her __________ with her children's endless questions exemplified her patience and understanding.",
        chinese_question: "她对孩子们无休止的问题表现出的 __________ 彰显了她的耐心和理解。",
        answers: [
                { option: "A", answer: "irritation", chinese_answer: "恼怒", chinese_romanization: "nǎonù" },
                { option: "B", answer: "forbearance", chinese_answer: "忍耐", chinese_romanization: "rěnnài" },
                { option: "C", answer: "frustration", chinese_answer: "挫折", chinese_romanization: "cuòzhé" },
                { option: "D", answer: "intolerance", chinese_answer: "不宽容", chinese_romanization: "bù kuānróng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'forbearance' figuratively means patient self-control; restraint and tolerance." +
            "<br><br>" +
            "(A) 'irritation' means the state of feeling annoyed, impatient, or slightly angry." +
            "<br><br>" +
            "(C) 'frustration' means the feeling of being upset or annoyed, especially because of inability to change or achieve something." +
            "<br><br>" +
            "(D) 'intolerance' means unwillingness to accept views, beliefs, or behavior that differ from one's own.",
        chinese_explanation: "(B) '忍耐' 在此语境下意指有耐心的自我控制；克制和宽容。" +
            "<br><br>" +
            "(A) '恼怒' 意味着感到恼怒、不耐烦或稍微生气的状态。" +
            "<br><br>" +
            "(C) '挫折' 意味着沮丧或烦恼的感觉，特别是因为无法改变或实现某事。" +
            "<br><br>" +
            "(D) '不宽容' 意味着不愿接受与自己不同的观点、信仰或行为。"
    },
    {
        id: 4,
    question: "Education is seen as a key __________ to breaking the cycle of poverty.",
    chinese_question: "教育被视为打破贫困循环的关键 __________。",
    answers: [
        { option: "A", answer: "problem", chinese_answer: "问题", chinese_romanization: "wèntí" },
        { option: "B", answer: "solution", chinese_answer: "解决方案", chinese_romanization: "jiějué fāng'àn" },
        { option: "C", answer: "barrier", chinese_answer: "障碍", chinese_romanization: "zhàng'ài" },
        { option: "D", answer: "cause", chinese_answer: "原因", chinese_romanization: "yuányīn" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'solution' means a means of solving a problem or dealing with a difficult situation." + 
        "<br><br>" + 
        "(A) 'problem' means a matter or situation regarded as unwelcome or harmful and needing to be dealt with and overcome." + 
        "<br><br>" + 
        "(C) 'barrier' means an obstacle that prevents movement or access." + 
        "<br><br>" + 
        "(D) 'cause' means a person or thing that gives rise to an action, phenomenon, or condition.",
    chinese_explanation: "(B) “解决方案” 意味着解决问题或处理困难情况的方法。" + 
        "<br><br>" + 
        "(A) '问题' 意味着被认为是不受欢迎或有害且需要处理和克服的事项或情况。" + 
        "<br><br>" + 
        "(C) '障碍' 意味着阻碍移动或访问的障碍物。" + 
        "<br><br>" + 
        "(D) '原因' 意味着引起行动、现象或条件的人或事物。"
    },
    {
        id: 5,
    question: "Her father's __________ about her career choices left her feeling demoralized.",
    chinese_question: "她父亲关于她职业选择的 __________ 让她感到士气低落。",
    answers: [
        { option: "A", answer: "hectoring", chinese_answer: "威吓", chinese_romanization: "wēihè" },
        { option: "B", answer: "praising", chinese_answer: "赞美", chinese_romanization: "zànměi" },
        { option: "C", answer: "ignoring", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "supporting", chinese_answer: "支持", chinese_romanization: "zhīchí" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'hectoring' means to talk to someone in a bullying way, used figuratively here." + 
        "<br><br>" + 
        "(B) 'praising' means to express warm approval or admiration." + 
        "<br><br>" + 
        "(C) 'ignoring' means to refuse to take notice of or acknowledge." + 
        "<br><br>" + 
        "(D) 'supporting' means to give assistance to.",
    chinese_explanation: "(A) '威吓' 意味着以一种欺凌的方式对某人说话，这里是比喻用法。" + 
        "<br><br>" + 
        "(B) '赞美' 意味着表达热烈的赞同或钦佩。" + 
        "<br><br>" + 
        "(C) '忽视' 意味着拒绝注意或承认。" + 
        "<br><br>" + 
        "(D) '支持' 意味着给予帮助。"
    },
    {
        id: 6,
    question: "The project was completed ahead of __________.",
    chinese_question: "项目提前完成了 __________。",
    answers: [
        { option: "A", answer: "delay", chinese_answer: "延迟", chinese_romanization: "yánchí" },
        { option: "B", answer: "schedule", chinese_answer: "计划", chinese_romanization: "jìhuà" },
        { option: "C", answer: "accident", chinese_answer: "事故", chinese_romanization: "shìgù" },
        { option: "D", answer: "confusion", chinese_answer: "混乱", chinese_romanization: "hùnluàn" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'schedule' means a plan for carrying out a process or procedure, giving lists of intended events and times." + 
        "<br><br>" + 
        "(A) 'delay' means a period of time by which something is late or postponed." + 
        "<br><br>" + 
        "(C) 'accident' means an unfortunate incident that happens unexpectedly and unintentionally." + 
        "<br><br>" + 
        "(D) 'confusion' means lack of understanding; uncertainty.",
    chinese_explanation: "(B) '计划' 意味着执行过程或程序的计划，列出预定的事件和时间。" + 
        "<br><br>" + 
        "(A) '延迟' 意味着某事迟到或推迟的一段时间。" + 
        "<br><br>" + 
        "(C) '事故' 意味着意外且无意中发生的不幸事件。" + 
        "<br><br>" + 
        "(D) '混乱' 意味着缺乏理解；不确定性。"
    },
    {
        id: 7,
        question: "The unexpected budget cuts put the __________ on the company's plans to expand.",
        chinese_question: "意外的预算削减给公司的扩张计划来了个 __________。",
        answers: [
            { option: "A", answer: "kibosh", chinese_answer: "停止", chinese_romanization: "tíngzhǐ" },
            { option: "B", answer: "green light", chinese_answer: "绿灯", chinese_romanization: "lǜdēng" },
            { option: "C", answer: "push", chinese_answer: "推动", chinese_romanization: "tuīdòng" },
            { option: "D", answer: "hope", chinese_answer: "希望", chinese_romanization: "xīwàng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'kibosh' means to put an end to; dispose of decisively." +
            "<br><br>" +
            "(B) 'green light' means permission to proceed with a project." +
            "<br><br>" +
            "(C) 'push' means to exert force on (someone or something) in order to move them away from oneself." +
            "<br><br>" +
            "(D) 'hope' means a feeling of expectation and desire for a certain thing to happen.",
        chinese_explanation: "(A) '停止' 意味着结束；果断地处置。" +
            "<br><br>" +
            "(B) '绿灯' 意味着批准继续某个项目。" +
            "<br><br>" +
            "(C) '推动' 意味着用力推动（某人或某物）以将其移开自己。" +
            "<br><br>" +
            "(D) '希望' 意味着期望某事发生的感觉。"
    },
    {
        id: 8,
        question: "The __________ of their friendship was a gradual process, marked by growing misunderstandings and lack of communication.",
        chinese_question: "他们友谊的 __________ 是一个渐进的过程，标志着日益增多的误解和缺乏沟通。",
        answers: [
                { option: "A", answer: "formation", chinese_answer: "形成", chinese_romanization: "xíngchéng" },
                { option: "B", answer: "dissolution", chinese_answer: "解散", chinese_romanization: "jiěsàn" },
                { option: "C", answer: "strengthening", chinese_answer: "加强", chinese_romanization: "jiāqiáng" },
                { option: "D", answer: "beginning", chinese_answer: "开始", chinese_romanization: "kāishǐ" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'dissolution' means the closing down or dismissal of an assembly, partnership, or official body." +
            "<br><br>" +
            "(A) 'formation' means the action of forming or process of being formed." +
            "<br><br>" +
            "(C) 'strengthening' means the process of becoming stronger." +
            "<br><br>" +
            "(D) 'beginning' means the point in time or space at which something starts.",
        chinese_explanation: "(B) '解散'一词意味着关闭或解散一个集会、合伙或官方机构。" +
            "<br><br>" +
            "(A) '形成' 意味着形成的行动或过程。" +
            "<br><br>" +
            "(C) '加强' 意味着变得更强的过程。" +
            "<br><br>" +
            "(D) '开始' 意味着某事开始的时间点或空间点。"
    },
    {
        id: 9,
    question: "Her __________ to make peace with her estranged family was heartfelt but difficult.",
    chinese_question: "她 __________ 与疏远的家人和解的尝试是发自内心的，但很困难。",
    answers: [
        { option: "A", answer: "decision", chinese_answer: "决定", chinese_romanization: "juédìng" },
        { option: "B", answer: "attempt", chinese_answer: "尝试", chinese_romanization: "chángshì" },
        { option: "C", answer: "avoidance", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
        { option: "D", answer: "celebration", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'attempt' means an effort to achieve or complete a difficult task or action." + 
        "<br><br>" + 
        "(A) 'decision' means a conclusion or resolution reached after consideration." + 
        "<br><br>" + 
        "(C) 'avoidance' means the action of keeping away from or not doing something." + 
        "<br><br>" + 
        "(D) 'celebration' means the action of marking one's pleasure at an important event or occasion by engaging in enjoyable, typically social, activity.",
    chinese_explanation: "(B) “尝试” 意味着努力完成一项困难的任务或行动。" + 
        "<br><br>" + 
        "(A) '决定' 意味着经过考虑后得出的结论或决议。" + 
        "<br><br>" + 
        "(C) '避免' 意味着远离或不做某事的行为。" + 
        "<br><br>" + 
        "(D) '庆祝' 意味着通过从事愉快的、通常是社交的活动来标志着对重要事件或场合的快乐。"
    },
    {
        id: 10,
        question: "The mayor vowed to address the __________ in the city's poorest neighborhoods by improving housing and sanitation.",
        chinese_question: "市长誓言通过改善住房和卫生条件来解决城市最贫困社区的 __________ 问题。",
        answers: [
                { option: "A", answer: "prosperity", chinese_answer: "繁荣", chinese_romanization: "fánróng" },
                { option: "B", answer: "squalour", chinese_answer: "肮脏", chinese_romanization: "āngzāng" },
                { option: "C", answer: "affluence", chinese_answer: "富裕", chinese_romanization: "fùyù" },
                { option: "D", answer: "cleanliness", chinese_answer: "清洁", chinese_romanization: "qīngjié" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'squalour' means a state of being extremely dirty and unpleasant, especially as a result of poverty or neglect." +
            "<br><br>" +
            "(A) 'prosperity' means the state of being prosperous." +
            "<br><br>" +
            "(C) 'affluence' means the state of having a great deal of money; wealth." +
            "<br><br>" +
            "(D) 'cleanliness' means the state of being clean.",
        chinese_explanation: "(B) '肮脏'一词意味着极度肮脏和不愉快的状态，尤其是由于贫穷或忽视所致。" +
            "<br><br>" +
            "(A) '繁荣' 意味着繁荣的状态。" +
            "<br><br>" +
            "(C) '富裕' 意味着拥有大量金钱的状态；财富。" +
            "<br><br>" +
            "(D) '清洁' 意味着干净的状态。"
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
