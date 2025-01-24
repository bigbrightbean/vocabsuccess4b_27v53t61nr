// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Despite the excellent performance, some critics continued to __________ about minor aspects of the production.",
        chinese_question: "尽管表演非常出色，一些评论家仍然对制作中的细枝末节 __________。",
        answers: [
                { option: "A", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" },
                { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "carp", chinese_answer: "吹毛求疵", chinese_romanization: "chuīmáoqiúcī" },
                { option: "D", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'carp' means to complain or find fault continually about trivial matters." +
                "<br><br>" +
                "(A) 'praise' means to express warm approval or admiration." +
                "<br><br>" +
                "(B) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
        chinese_explanation: "(C) '吹毛求疵' 意味着对琐事不断地抱怨或挑剔。" +
                "<br><br>" +
                "(A) '赞美' 意味着表达热烈的赞同或钦佩。" +
                "<br><br>" +
                "(B) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '庆祝' 意味着通过社交聚会或愉快的活动来纪念一个重要或快乐的日子或事件。"
    },
    {
        id: 2,
        question: "Realizing they were outnumbered, the rebels decided to __________ to avoid further bloodshed.",
        chinese_question: "意识到他们寡不敌众，叛军决定 __________ 以避免进一步的流血。",
        answers: [
                { option: "A", answer: "capitulate", chinese_answer: "投降", chinese_romanization: "tóuxiáng" },
                { option: "B", answer: "resist", chinese_answer: "抵抗", chinese_romanization: "dǐkàng" },
                { option: "C", answer: "retreat", chinese_answer: "撤退", chinese_romanization: "chètuì" },
                { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'capitulate' means to cease to resist an opponent or an unwelcome demand; surrender." +
                "<br><br>" +
                "(B) 'resist' means to withstand the action or effect of." +
                "<br><br>" +
                "(C) 'retreat' means to withdraw from enemy forces as a result of their superior power or after a defeat." +
                "<br><br>" +
                "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(A) '投降' 意味着停止抵抗对手或不受欢迎的要求；投降。" +
                "<br><br>" +
                "(B) '抵抗' 意味着承受住行动或效果。" +
                "<br><br>" +
                "(C) '撤退' 意味着由于对方的强大力量或战败而从敌军撤退。" +
                "<br><br>" +
                "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 3,
    question: "He carried out the plan with no __________ , confident that the end justified the means.",
    chinese_question: "他毫无 __________ 地执行了这个计划，确信最终目标能证明手段的正当性。",
    answers: [
        { option: "A", answer: "compunction", chinese_answer: "内疚", chinese_romanization: "nèijiù" },
        { option: "B", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
        { option: "C", answer: "joy", chinese_answer: "喜悦", chinese_romanization: "xǐyuè" },
        { option: "D", answer: "pride", chinese_answer: "自豪", chinese_romanization: "zìháo" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'compunction' means a feeling of guilt or moral scruple that prevents or follows the doing of something bad, used figuratively here." +
        "<br><br>" +
        "(B) 'hesitation' means the action of pausing or hesitating before saying or doing something." +
        "<br><br>" +
        "(C) 'joy' means a feeling of great pleasure and happiness." +
        "<br><br>" +
        "(D) 'pride' means a feeling of deep pleasure or satisfaction derived from one's own achievements.",
    chinese_explanation: "(A) '内疚' 意味着一种内疚感或道德上的不安，阻止或跟随做坏事之后，这里是比喻用法。" +
        "<br><br>" +
        "(B) '犹豫' 意味着在说或做某事前暂停或犹豫的行为。" +
        "<br><br>" +
        "(C) '喜悦' 意味着极大的快乐和幸福。" +
        "<br><br>" +
        "(D) '自豪' 意味着源于自己成就的深深的喜悦或满足感。"
    },
    {
        id: 4,
    question: "To avoid conflicts, it's important to __________ personal and professional relationships.",
    chinese_question: "为了避免冲突，重要的是要 __________ 个人和职业关系。",
    answers: [
        { option: "A", answer: "blend", chinese_answer: "混合", chinese_romanization: "hùnhé" },
        { option: "B", answer: "demarcate", chinese_answer: "划定", chinese_romanization: "huàdìng" },
        { option: "C", answer: "confuse", chinese_answer: "迷惑", chinese_romanization: "míhuò" },
        { option: "D", answer: "obscure", chinese_answer: "模糊", chinese_romanization: "móhu" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'demarcate' used figuratively means to set the boundaries or limits of something." +
        "<br><br>" +
        "(A) 'blend' means to mix together." +
        "<br><br>" +
        "(C) 'confuse' means to make someone unable to think clearly." +
        "<br><br>" +
        "(D) 'obscure' means to make unclear or difficult to understand.",
    chinese_explanation: "(B) '划定' 在比喻意义上指设置某物的边界或限制。" +
        "<br><br>" +
        "(A) '混合' 意味着混合在一起。" +
        "<br><br>" +
        "(C) '迷惑' 意味着使某人无法清晰思考。" +
        "<br><br>" +
        "(D) '模糊' 意味着使不清楚或难以理解。"
    },
    {
        id: 5,
    question: "The meeting tended to __________ when participants brought up unrelated issues.",
    chinese_question: "当参与者提出无关问题时，会议往往会 __________ 。",
    answers: [
        { option: "A", answer: "divagate", chinese_answer: "偏离", chinese_romanization: "piānlí" },
        { option: "B", answer: "focus", chinese_answer: "专注", chinese_romanization: "zhuānzhù" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'divagate' means to stray or wander from a course or subject, used figuratively here." +
        "<br><br>" +
        "(B) 'focus' means to concentrate on a particular subject or task." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'simplify' means to make something simpler or easier to do or understand.",
    chinese_explanation: "(A) '偏离' 意味着偏离或游离于一个过程或主题，这里是比喻用法。" +
        "<br><br>" +
        "(B) '专注' 意味着集中于特定的主题或任务。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '简化' 意味着使某事更简单或更容易做或理解。"
    },
    {
        id: 6,
    question: "The contract __________ both parties to adhere to the agreed terms.",
    chinese_question: "合同 __________ 双方遵守约定的条款。",
    answers: [
        { option: "A", answer: "enjoins", chinese_answer: "要求", chinese_romanization: "yāoqiú" },
        { option: "B", answer: "permits", chinese_answer: "允许", chinese_romanization: "yǔnxǔ" },
        { option: "C", answer: "ignores", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "modifies", chinese_answer: "修改", chinese_romanization: "xiūgǎi" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'enjoins' means to instruct or urge someone to do something, used figuratively here." +
        "<br><br>" +
        "(B) 'permits' means to allow." +
        "<br><br>" +
        "(C) 'ignores' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'modifies' means to make partial or minor changes to something.",
    chinese_explanation: "(A) '要求' 意味着指示或敦促某人做某事，这里是比喻用法。" +
        "<br><br>" +
        "(B) '允许' 意味着允许。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '修改' 意味着对某物进行部分或小的更改。"
    },
    {
        id: 7,
    question: "She would mentally __________ herself for every small error she made.",
    chinese_question: "她会因为每一个小错误而在心里 __________ 自己。",
    answers: [
        { option: "A", answer: "flagellate", chinese_answer: "自责", chinese_romanization: "zìzé" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "reward", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" },
        { option: "D", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'flagellate' means to whip or beat someone, used figuratively here to mean punishing oneself mentally." +
        "<br><br>" +
        "(B) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'reward' means to give something in recognition of one's service, effort, or achievement." +
        "<br><br>" +
        "(D) 'praise' means to express warm approval or admiration.",
    chinese_explanation: "(A) '自责' 意味着鞭打或击打某人，这里是比喻用法，意思是情感上惩罚自己。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '奖励' 意味着对某人的服务、努力或成就给予认可。" +
        "<br><br>" +
        "(D) '赞扬' 意味着表达热烈的赞同或钦佩。"
    },
    {
        id: 8,
    question: "The documentary about climate change __________ many viewers to become more environmentally conscious.",
    chinese_question: "关于气候变化的纪录片让许多观众 __________ 变得更加有环境意识。",
    answers: [
        { option: "A", answer: "discouraged", chinese_answer: "灰心", chinese_romanization: "huīxīn" },
        { option: "B", answer: "galvanized", chinese_answer: "激励", chinese_romanization: "jīlì" },
        { option: "C", answer: "distracted", chinese_answer: "分心", chinese_romanization: "fēnxīn" },
        { option: "D", answer: "relaxed", chinese_answer: "放松", chinese_romanization: "fàngsōng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'galvanized' means to shock or excite someone into taking action." +
        "<br><br>" +
        "(A) 'discouraged' means to cause someone to lose confidence or enthusiasm." +
        "<br><br>" +
        "(C) 'distracted' means to prevent someone from giving full attention to something." +
        "<br><br>" +
        "(D) 'relaxed' means to make or become less tense or anxious.",
    chinese_explanation: "(B) '激励' 意味着激励或激发某人采取行动。" +
        "<br><br>" +
        "(A) '灰心' 意味着使某人失去信心或热情。" +
        "<br><br>" +
        "(C) '分心' 意味着阻止某人全神贯注于某事。" +
        "<br><br>" +
        "(D) '放松' 意味着使或变得不那么紧张或焦虑。"
    },
    {
        id: 9,
        question: "Even in a beautiful location, he found something to __________ about, ruining the mood for others.",
        chinese_question: "即使在美丽的地方，他也能找到 __________ 的事情，破坏了别人的心情。",
        answers: [
                { option: "A", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
                { option: "B", answer: "kvetch", chinese_answer: "抱怨", chinese_romanization: "bàoyuàn" },
                { option: "C", answer: "admire", chinese_answer: "钦佩", chinese_romanization: "qīnpèi" },
                { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'kvetch' used figuratively means to complain persistently." +
                "<br><br>" +
                "(A) 'praise' means to express warm approval or admiration." +
                "<br><br>" +
                "(C) 'admire' means to regard with respect or warm approval." +
                "<br><br>" +
                "(D) 'support' means to bear all or part of the weight of something.",
        chinese_explanation: "(B) '抱怨' 在比喻意义上指不断抱怨。" +
                "<br><br>" +
                "(A) '赞扬' 意味着表达热烈的认可或钦佩。" +
                "<br><br>" +
                "(C) '钦佩' 意味着以尊重或热烈的认可看待。" +
                "<br><br>" +
                "(D) '支持' 意味着支撑某物的全部或部分重量。"
    },
    {
        id: 10,
        question: "Even after his death, some tried to __________ his legacy with baseless accusations.",
        chinese_question: "即使在他去世后，有些人仍试图用毫无根据的指控 __________ 他的遗产。",
        answers: [
                { option: "A", answer: "honor", chinese_answer: "尊敬", chinese_romanization: "zūnjìng" },
                { option: "B", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "C", answer: "calumniate", chinese_answer: "诽谤", chinese_romanization: "fěibàng" },
                { option: "D", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'calumniate' means to make false and defamatory statements about someone." +
                "<br><br>" +
                "(A) 'honor' means to regard with great respect." +
                "<br><br>" +
                "(B) 'support' means to bear all or part of the weight; hold up." +
                "<br><br>" +
                "(D) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
        chinese_explanation: "(C) '诽谤' 意味着对某人做出虚假和诽谤性的陈述。" +
                "<br><br>" +
                "(A) '尊敬' 意味着深深地钦佩某人，因为他们的能力、品质或成就。" +
                "<br><br>" +
                "(B) '支持' 意味着承受全部或部分重量；支撑。" +
                "<br><br>" +
                "(D) '庆祝' 意味着通过社交聚会或愉快的活动来纪念一个重要或快乐的日子或事件。"
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
