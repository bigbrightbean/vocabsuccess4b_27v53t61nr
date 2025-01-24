// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The financial jargon in the report will likely __________ most readers.",
    chinese_question: "报告中的金融术语可能会让大多数读者感到 __________ 。",
    answers: [
        { option: "A", answer: "fuddle", chinese_answer: "困惑", chinese_romanization: "kùnhuò" },
        { option: "B", answer: "inform", chinese_answer: "告知", chinese_romanization: "gàozhī" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "excite", chinese_answer: "激动", chinese_romanization: "jīdòng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'fuddle' means to confuse or stupefy someone, used figuratively here." +
        "<br><br>" +
        "(B) 'inform' means to give someone facts or information." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'excite' means to cause someone to feel very enthusiastic and eager.",
    chinese_explanation: "(A) '困惑' 意味着使某人迷惑或发呆，这里是比喻用法。" +
        "<br><br>" +
        "(B) '告知' 意味着向某人提供事实或信息。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '激动' 意味着使某人感到非常热情和兴奋。"
    },
    {
        id: 2,
        question: "His colleagues tried to __________ him for the failed project, even though it was a team effort.",
        chinese_question: "他的同事试图将项目失败 __________ 给他，尽管这是团队的努力。",
        answers: [
                { option: "A", answer: "inculpate", chinese_answer: "归罪", chinese_romanization: "guīzuì" },
                { option: "B", answer: "exonerate", chinese_answer: "免罪", chinese_romanization: "miǎnzuì" },
                { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'inculpate' means to accuse or blame someone, used figuratively here." +
                "<br><br>" +
                "(B) 'exonerate' means to clear someone from blame or fault." +
                "<br><br>" +
                "(C) 'support' means to give assistance to." +
                "<br><br>" +
                "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(A) '归罪' 意味着指责或归咎于某人，这里是比喻用法。" +
                "<br><br>" +
                "(B) '免罪' 意味着使某人免于责备或罪责。" +
                "<br><br>" +
                "(C) '支持' 意味着给予帮助。" +
                "<br><br>" +
                "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 3,
        question: "They discovered the scheme to __________ investors through a series of fake business deals.",
        chinese_question: "他们发现了一系列虚假商业交易中 __________ 投资者的计划。",
        answers: [
                { option: "A", answer: "bilk", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" },
                { option: "B", answer: "reward", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" },
                { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "D", answer: "entertain", chinese_answer: "娱乐", chinese_romanization: "yúlè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'bilk' means to cheat or defraud someone." +
                "<br><br>" +
                "(B) 'reward' means to give something to someone in recognition of their services, efforts, or achievements." +
                "<br><br>" +
                "(C) 'support' means to bear all or part of the weight of; hold up." +
                "<br><br>" +
                "(D) 'entertain' means to provide someone with amusement or enjoyment.",
        chinese_explanation: "(A) '欺骗' 意味着欺骗或诈骗某人。" +
                "<br><br>" +
                "(B) '奖励' 意味着因其服务、努力或成就而给予某人某物。" +
                "<br><br>" +
                "(C) '支持' 意味着承担全部或部分重量；支撑。" +
                "<br><br>" +
                "(D) '娱乐' 意味着为某人提供娱乐或享受。"
    },
    {
        id: 4,
        question: "She tried to __________ her presentation with flashy animations, hoping to impress the audience.",
        chinese_question: "她试图用华丽的动画来 __________ 她的演讲，希望给观众留下深刻印象。",
        answers: [
                { option: "A", answer: "bedizen", chinese_answer: "装饰华丽", chinese_romanization: "zhuāngshì huálì" },
                { option: "B", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'bedizen' means to dress or decorate in a gaudy or showy manner." +
                "<br><br>" +
                "(B) 'simplify' means to make something simpler or easier to do or understand." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'diminish' means to make or become less.",
        chinese_explanation: "(A) '装饰华丽' 意味着以艳丽或炫耀的方式装饰。" +
                "<br><br>" +
                "(B) '简化' 意味着使某事更简单或更容易做或理解。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '减少' 意味着使变少或变少。"
    },
    {
        id: 5,
        question: "They were determined to __________ to the principles of fairness and equality in their policies.",
        chinese_question: "他们决心在政策中 __________ 公平和平等的原则。",
        answers: [
                { option: "A", answer: "hew", chinese_answer: "遵守", chinese_romanization: "zūnshǒu" },
                { option: "B", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
                { option: "C", answer: "defy", chinese_answer: "违抗", chinese_romanization: "wéikàng" },
                { option: "D", answer: "modify", chinese_answer: "修改", chinese_romanization: "xiūgǎi" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'hew' means to conform or adhere to, used figuratively here." +
                "<br><br>" +
                "(B) 'reject' means to dismiss or refuse something." +
                "<br><br>" +
                "(C) 'defy' means to openly resist or refuse to obey." +
                "<br><br>" +
                "(D) 'modify' means to make partial or minor changes to something.",
        chinese_explanation: "(A) '遵守' 意味着符合或遵守，这里是比喻用法。" +
                "<br><br>" +
                "(B) '拒绝' 意味着驳回或拒绝某事物。" +
                "<br><br>" +
                "(C) '违抗' 意味着公开抵抗或拒绝服从。" +
                "<br><br>" +
                "(D) '修改' 意味着对某事进行部分或小的改动。"
    },
    {
        id: 6,
    question: "Her actions were found to __________ the ethical guidelines set by the committee.",
    chinese_question: "她的行为被发现违反了委员会制定的道德准则。",
    answers: [
        { option: "A", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "B", answer: "contravene", chinese_answer: "违反", chinese_romanization: "wéifǎn" },
        { option: "C", answer: "follow", chinese_answer: "遵循", chinese_romanization: "zūnxún" },
        { option: "D", answer: "uphold", chinese_answer: "维护", chinese_romanization: "wéihù" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'contravene' means to violate or conflict with a rule or law." +
        "<br><br>" +
        "(A) 'support' means to uphold or defend." +
        "<br><br>" +
        "(C) 'follow' means to act according to an instruction or rule." +
        "<br><br>" +
        "(D) 'uphold' means to maintain or support.",
    chinese_explanation: "(B) '违反' 意味着违反或与规则或法律相冲突。" +
        "<br><br>" +
        "(A) '支持' 意味着维护或捍卫。" +
        "<br><br>" +
        "(C) '遵循' 意味着按照指示或规则行事。" +
        "<br><br>" +
        "(D) '维护' 意味着维持或支持。"
    },
    {
        id: 7,
        question: "New technologies have the potential to __________ healthcare delivery significantly.",
        chinese_question: "新技术有可能显著 __________ 医疗服务。",
        answers: [
                { option: "A", answer: "ameliorate", chinese_answer: "改善", chinese_romanization: "gǎishàn" },
                { option: "B", answer: "obstruct", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
                { option: "C", answer: "complicate", chinese_answer: "复杂化", chinese_romanization: "fùzá huà" },
                { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'ameliorate' means to make something better or improve." +
                "<br><br>" +
                "(B) 'obstruct' means to block or get in the way of something." +
                "<br><br>" +
                "(C) 'complicate' means to make something more difficult or complex." +
                "<br><br>" +
                "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(A) '改善' 意味着使某事变得更好或改进。" +
                "<br><br>" +
                "(B) '阻碍' 意味着阻挡或妨碍某事。" +
                "<br><br>" +
                "(C) '复杂化' 意味着使某事变得更困难或更复杂。" +
                "<br><br>" +
                "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 8,
    question: "In order to start fresh, he decided to __________ his life of toxic relationships.",
    chinese_question: "为了重新开始，他决定将生活中的有害关系 __________。",
    answers: [
        { option: "A", answer: "complicate", chinese_answer: "复杂化", chinese_romanization: "fùzáhuà" },
        { option: "B", answer: "disencumber", chinese_answer: "解脱", chinese_romanization: "jiětuō" },
        { option: "C", answer: "enrich", chinese_answer: "丰富", chinese_romanization: "fēngfù" },
        { option: "D", answer: "maintain", chinese_answer: "维持", chinese_romanization: "wéichí" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'disencumber' used figuratively means to free from burdensome or problematic elements." +
        "<br><br>" +
        "(A) 'complicate' means to make something more difficult or confusing." +
        "<br><br>" +
        "(C) 'enrich' means to improve or enhance the quality or value of." +
        "<br><br>" +
        "(D) 'maintain' means to keep in an existing state.",
    chinese_explanation: "(B) '解脱' 在比喻意义上指从负担或有问题的元素中解脱。" +
        "<br><br>" +
        "(A) '复杂化' 意味着使某事变得更困难或更混乱。" +
        "<br><br>" +
        "(C) '丰富' 意味着提高或增强质量或价值。" +
        "<br><br>" +
        "(D) '维持' 意味着保持现有状态。"
    },
    {
        id: 9,
    question: "The sudden need for more troops led the government to __________ additional recruits.",
    chinese_question: "对更多部队的突然需求导致政府 __________ 额外的征兵。",
    answers: [
        { option: "A", answer: "conscribe", chinese_answer: "征召", chinese_romanization: "zhēngzhào" },
        { option: "B", answer: "discharge", chinese_answer: "退役", chinese_romanization: "tuìyì" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "compensate", chinese_answer: "补偿", chinese_romanization: "bǔcháng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'conscribe' means to enlist someone compulsorily, typically into the armed forces." +
        "<br><br>" +
        "(B) 'discharge' means to tell someone officially that they can or must leave a place or situation." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'compensate' means to give someone something, typically money, in recognition of loss, suffering, or injury incurred.",
    chinese_explanation: "(A) '征召' 意味着强制征募某人，通常是入伍。" +
        "<br><br>" +
        "(B) '退役' 意味着正式告诉某人他们可以或必须离开某个地方或情况。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '补偿' 意味着给予某人某物，通常是金钱，以承认所遭受的损失、痛苦或伤害。"
    },
    {
        id: 10,
        question: "He tried to __________ his behavior by suggesting that everyone else was doing the same thing.",
        chinese_question: "他试图通过暗示其他人也在做同样的事情来 __________ 他的行为。",
        answers: [
                { option: "A", answer: "rationalize", chinese_answer: "合理化", chinese_romanization: "hélǐhuà" },
                { option: "B", answer: "condemn", chinese_answer: "谴责", chinese_romanization: "qiǎnzé" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "invalidate", chinese_answer: "否定", chinese_romanization: "fǒudìng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'rationalize' means to attempt to explain or justify behavior or an attitude with logical reasons, even if these are not appropriate." +
                "<br><br>" +
                "(B) 'condemn' means to express complete disapproval of something." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of." +
                "<br><br>" +
                "(D) 'invalidate' means to make an argument, statement, or theory unsound or erroneous.",
        chinese_explanation: "(A) '合理化' 意味着试图用合理的理由解释或证明行为或态度，即使这些理由并不合适。" +
                "<br><br>" +
                "(B) '谴责' 意味着完全不赞成某事。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意。" +
                "<br><br>" +
                "(D) '否定' 意味着使论点、陈述或理论不健全或错误。"
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
