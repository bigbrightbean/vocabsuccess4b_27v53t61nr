// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The politician sought to __________ the divided public by addressing their concerns and promising reforms.",
    chinese_question: "这位政治家试图通过解决公众的担忧并承诺改革来 __________ 分裂的公众。",
    answers: [
        { option: "A", answer: "conciliate", chinese_answer: "安抚", chinese_romanization: "ānfǔ" },
        { option: "B", answer: "aggravate", chinese_answer: "加剧", chinese_romanization: "jiājù" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "deceive", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'conciliate' means to stop someone from being angry or discontented; to placate or pacify, used figuratively here." +
        "<br><br>" +
        "(B) 'aggravate' means to make a problem, injury, or offense worse or more serious." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'deceive' means to cause someone to believe something that is not true.",
    chinese_explanation: "(A) '安抚' 意味着使某人不再生气或不满；安抚或平息，这里是比喻用法。" +
        "<br><br>" +
        "(B) '加剧' 意味着使问题、伤害或冒犯变得更糟或更严重。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '欺骗' 意味着让某人相信不真实的事情。"
    },
    {
        id: 2,
    question: "The artist's unique style has helped him __________ a loyal following.",
    chinese_question: "艺术家的独特风格帮助他 __________ 了一批忠实的追随者。",
    answers: [
        { option: "A", answer: "garner", chinese_answer: "获得", chinese_romanization: "huòdé" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "dismiss", chinese_answer: "驳回", chinese_romanization: "bóhuí" },
        { option: "D", answer: "alienate", chinese_answer: "疏远", chinese_romanization: "shūyuǎn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'garner' means to gather or collect something, especially information or approval, used figuratively here." +
        "<br><br>" +
        "(B) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'dismiss' means to decide that something or someone is not worth considering." +
        "<br><br>" +
        "(D) 'alienate' means to cause someone to feel isolated or estranged.",
    chinese_explanation: "(A) '获得' 意味着收集或获取某物，尤其是信息或支持，这里是比喻用法。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '驳回' 意味着认为某事或某人不值得考虑。" +
        "<br><br>" +
        "(D) '疏远' 意味着使某人感到孤立或疏远。"
    },
    {
        id: 3,
        question: "The community center was renovated to __________ local engagement and activities.",
        chinese_question: "社区中心经过翻新，以 __________ 当地的参与和活动。",
        answers: [
                { option: "A", answer: "revive", chinese_answer: "振兴", chinese_romanization: "zhènxīng" },
                { option: "B", answer: "decrease", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
                { option: "C", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
                { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'revive' means to restore to life or consciousness." +
                "<br><br>" +
                "(B) 'decrease' means to make or become smaller or fewer in size, amount, intensity, or degree." +
                "<br><br>" +
                "(C) 'abandon' means to give up completely." +
                "<br><br>" +
                "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(A) '振兴' 意味着恢复生机或意识。" +
                "<br><br>" +
                "(B) '减少' 意味着使变小或变少。" +
                "<br><br>" +
                "(C) '放弃' 意味着完全放弃。" +
                "<br><br>" +
                "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 4,
        question: "The younger generation is beginning to __________ the older one in the workforce.",
        chinese_question: "年轻一代正在职场中逐渐 __________ 年长的一代。",
        answers: [
                { option: "A", answer: "supplant", chinese_answer: "取代", chinese_romanization: "qǔdài" },
                { option: "B", answer: "follow", chinese_answer: "跟随", chinese_romanization: "gēnsuí" },
                { option: "C", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'supplant' means to replace or take the place of." +
                "<br><br>" +
                "(B) 'follow' means to go or come after (a person or thing proceeding ahead); move or travel behind." +
                "<br><br>" +
                "(C) 'neglect' means to fail to care for properly." +
                "<br><br>" +
                "(D) 'support' means to give assistance to.",
        chinese_explanation: "(A) '取代' 意味着替换或取代。" +
                "<br><br>" +
                "(B) '跟随' 意味着在（前面行进的人或事物）之后走或来；移动或旅行在后面。" +
                "<br><br>" +
                "(C) '忽视' 意味着未能妥善照顾。" +
                "<br><br>" +
                "(D) '支持' 意味着给予帮助。"
    },
    {
        id: 5,
        question: "It is hard to __________ the allure of chocolate for those with a sweet tooth.",
        chinese_question: "对于嗜甜者来说，很难 __________ 巧克力的诱惑。",
        answers: [
                { option: "A", answer: "resist", chinese_answer: "抵抗", chinese_romanization: "dǐkàng" },
                { option: "B", answer: "desire", chinese_answer: "渴望", chinese_romanization: "kěwàng" },
                { option: "C", answer: "seek", chinese_answer: "寻找", chinese_romanization: "xúnzhǎo" },
                { option: "D", answer: "indulge", chinese_answer: "放纵", chinese_romanization: "fàngzòng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'resist' means to withstand the action or effect of." +
                "<br><br>" +
                "(B) 'desire' means a strong feeling of wanting to have something or wishing for something to happen." +
                "<br><br>" +
                "(C) 'seek' means to attempt to find something." +
                "<br><br>" +
                "(D) 'indulge' means to allow oneself to enjoy the pleasure of.",
        chinese_explanation: "(A) '抵抗' 意味着经受住某事的作用或影响。" +
                "<br><br>" +
                "(B) '渴望' 意味着强烈希望拥有某物或希望某事发生。" +
                "<br><br>" +
                "(C) '寻找' 意味着试图找到某物。" +
                "<br><br>" +
                "(D) '放纵' 意味着允许自己享受某种快乐。"
    },
    {
        id: 6,
    question: "Her leadership skills began to __________ as she took on more responsibilities at work.",
    chinese_question: "随着她承担更多的工作责任，她的领导才能开始 __________。",
    answers: [
        { option: "A", answer: "effloresce", chinese_answer: "绽放", chinese_romanization: "zhànfàng" },
        { option: "B", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "decline", chinese_answer: "下降", chinese_romanization: "xiàjiàng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'effloresce' means to blossom or come into full bloom, used figuratively here." +
        "<br><br>" +
        "(B) 'diminish' means to make or become less." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'decline' means to become smaller, fewer, or less.",
    chinese_explanation: "(A) '绽放' 意味着开花或进入全盛期，这里是比喻用法。" +
        "<br><br>" +
        "(B) '减少' 意味着使某物减少或变少。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '下降' 意味着变得更小、更少或更少。"
    },
    {
        id: 7,
    question: "He worked hard to __________ his bad reputation by proving his integrity and dedication.",
    chinese_question: "他努力工作以通过证明自己的正直和奉献来 __________ 自己的坏名声。",
    answers: [
        { option: "A", answer: "enhance", chinese_answer: "提高", chinese_romanization: "tígāo" },
        { option: "B", answer: "efface", chinese_answer: "抹去", chinese_romanization: "mǒqù" },
        { option: "C", answer: "highlight", chinese_answer: "突出", chinese_romanization: "tūchū" },
        { option: "D", answer: "announce", chinese_answer: "宣布", chinese_romanization: "xuānbù" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'efface' used figuratively means to erase or remove something from memory or recognition." +
        "<br><br>" +
        "(A) 'enhance' means to intensify, increase, or further improve the quality, value, or extent of." +
        "<br><br>" +
        "(C) 'highlight' means to emphasize or make prominent." +
        "<br><br>" +
        "(D) 'announce' means to make a formal public statement about a fact, occurrence, or intention.",
    chinese_explanation: "(B) “抹去” 在比喻意义上指从记忆或认可中擦除或去除某物。" +
        "<br><br>" +
        "(A) '提高' 意味着加强、增加或进一步改善质量、价值或范围。" +
        "<br><br>" +
        "(C) '突出' 意味着强调或使显眼。" +
        "<br><br>" +
        "(D) '宣布' 意味着对一个事实、事件或意图做正式的公开声明。"
    },
    {
        id: 8,
        question: "The new policy changes began to __________ through all departments, affecting everyone in the company.",
        chinese_question: "新政策变化开始在各部门 __________，影响公司里的每个人。",
        answers: [
                { option: "A", answer: "ramify", chinese_answer: "分支", chinese_romanization: "fēnzhī" },
                { option: "B", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "resolve", chinese_answer: "解决", chinese_romanization: "jiějué" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'ramify' means to spread or branch out into different parts." +
                "<br><br>" +
                "(B) 'simplify' means to make something simpler or easier to do or understand." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'resolve' means to find a solution to a problem.",
        chinese_explanation: "(A) '分支' 意味着扩展或分支到不同的部分。" +
                "<br><br>" +
                "(B) '简化' 意味着使某事物更简单或更容易做或理解。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '解决' 意味着找到问题的解决方案。"
    },
    {
        id: 9,
        question: "The council voted to __________ the mayor for his misuse of public funds.",
        chinese_question: "议会投票 __________ 市长挪用公款的行为。",
        answers: [
                { option: "A", answer: "censure", chinese_answer: "谴责", chinese_romanization: "qiǎnzé" },
                { option: "B", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'censure' means to express severe disapproval of (someone or something), typically in a formal statement." +
                "<br><br>" +
                "(B) 'praise' means to express warm approval or admiration of." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'support' means to give assistance to.",
        chinese_explanation: "(A) '谴责' 意味着通常在正式声明中表达对（某人或某事）的强烈不满。" +
                "<br><br>" +
                "(B) '赞美' 意味着表达热烈的赞同或钦佩。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '支持' 意味着给予帮助。"
    },
    {
        id: 10,
        question: "The company feared that the lawsuit would __________ its good name.",
        chinese_question: "公司担心这场诉讼会 __________ 它的良好声誉。",
        answers: [
                { option: "A", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" },
                { option: "B", answer: "uplift", chinese_answer: "提升", chinese_romanization: "tíshēng" },
                { option: "C", answer: "besmirch", chinese_answer: "玷污", chinese_romanization: "diànwū" },
                { option: "D", answer: "protect", chinese_answer: "保护", chinese_romanization: "bǎohù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'besmirch' means to damage someone's reputation or honor." +
                "<br><br>" +
                "(A) 'praise' means to express warm approval or admiration." +
                "<br><br>" +
                "(B) 'uplift' means to raise the spirits or hopes of someone." +
                "<br><br>" +
                "(D) 'protect' means to keep safe from harm or injury.",
        chinese_explanation: "(C) '玷污' 意味着损害某人的声誉或荣誉。" +
                "<br><br>" +
                "(A) '赞美' 意味着表达热烈的赞同或钦佩。" +
                "<br><br>" +
                "(B) '提升' 意味着提升某人的精神或希望。" +
                "<br><br>" +
                "(D) '保护' 意味着使其免受伤害或损害。"
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
