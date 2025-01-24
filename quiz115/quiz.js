// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "A touch of optimism can __________ even the most difficult situations.",
        chinese_question: "一丝乐观可以 __________ 最困难的情况。",
        answers: [
                { option: "A", answer: "leaven", chinese_answer: "改善", chinese_romanization: "gǎishàn" },
                { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
                { option: "D", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'leaven' means to permeate and modify or transform something for the better." +
                "<br><br>" +
                "(B) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(C) 'diminish' means to make or become less." +
                "<br><br>" +
                "(D) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
        chinese_explanation: "(A) '改善' 意味着渗透和改变或改善某事物。" +
                "<br><br>" +
                "(B) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(C) '减少' 意味着使变少或变少。" +
                "<br><br>" +
                "(D) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。"
    },
    {
        id: 2,
        question: "Employees were instructed not to __________ with members of rival companies to protect proprietary information.",
        chinese_question: "员工被指示不要与竞争对手公司的成员 __________ 以保护专有信息。",
        answers: [
                { option: "A", answer: "fraternize", chinese_answer: "交往", chinese_romanization: "jiāowǎng" },
                { option: "B", answer: "assist", chinese_answer: "协助", chinese_romanization: "xiézhù" },
                { option: "C", answer: "monitor", chinese_answer: "监控", chinese_romanization: "jiānkòng" },
                { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'fraternize' means to associate or form a friendship with someone, especially when one is not supposed to." +
                "<br><br>" +
                "(B) 'assist' means to help someone." +
                "<br><br>" +
                "(C) 'monitor' means to observe and check the progress or quality of something over a period of time." +
                "<br><br>" +
                "(D) 'ignore' means to refuse to take notice of.",
        chinese_explanation: "(A) '交往' 意味着与某人交往或形成友谊，尤其是在不应该这样做的时候。" +
                "<br><br>" +
                "(B) '协助' 意味着帮助某人。" +
                "<br><br>" +
                "(C) '监控' 意味着观察和检查某事物在一段时间内的进展或质量。" +
                "<br><br>" +
                "(D) '忽视' 意味着拒绝注意。"
    },
    {
        id: 3,
    question: "She __________ her team to think outside the box and come up with innovative solutions.",
    chinese_question: "她 __________ 她的团队跳出框架思考，提出创新的解决方案。",
    answers: [
        { option: "A", answer: "discouraged", chinese_answer: "阻止", chinese_romanization: "zǔzhǐ" },
        { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "exhorted", chinese_answer: "力劝", chinese_romanization: "lìquàn" },
        { option: "D", answer: "dismissed", chinese_answer: "否定", chinese_romanization: "fǒudìng" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'exhorted' used figuratively means to strongly encourage or urge someone to think or act in a certain way." +
        "<br><br>" +
        "(A) 'discouraged' means to cause someone to lose confidence or enthusiasm." +
        "<br><br>" +
        "(B) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'dismissed' means to treat as unworthy of serious consideration.",
    chinese_explanation: "(C) '力劝' 在比喻意义上指强烈鼓励或敦促某人以某种方式思考或行动。" +
        "<br><br>" +
        "(A) '阻止' 意味着使某人失去信心或热情。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '否定' 意味着认为不值得认真考虑。"
    },
    {
        id: 4,
        question: "The effects of the new law quickly __________ throughout the entire country, influencing various sectors.",
        chinese_question: "新法律的影响迅速在整个国家 __________，影响各个行业。",
        answers: [
                { option: "A", answer: "ramified", chinese_answer: "分支", chinese_romanization: "fēnzhī" },
                { option: "B", answer: "diminished", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
                { option: "C", answer: "stagnated", chinese_answer: "停滞", chinese_romanization: "tíngzhì" },
                { option: "D", answer: "declined", chinese_answer: "下降", chinese_romanization: "xiàjiàng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'ramified' means to spread or branch out into different parts." +
                "<br><br>" +
                "(B) 'diminished' means to make or become less." +
                "<br><br>" +
                "(C) 'stagnated' means to cease developing; become inactive or dull." +
                "<br><br>" +
                "(D) 'declined' means to become smaller, fewer, or less; decrease.",
        chinese_explanation: "(A) '分支' 意味着扩展或分支到不同的部分。" +
                "<br><br>" +
                "(B) '减少' 意味着使或变得更少。" +
                "<br><br>" +
                "(C) '停滞' 意味着停止发展；变得不活跃或迟钝。" +
                "<br><br>" +
                "(D) '下降' 意味着变得更小、减少或减少。"
    },
    {
        id: 5,
    question: "To fit the word into the meter of the poem, the poet decided to __________ one syllable.",
    chinese_question: "为了使词语符合诗的韵律，诗人决定 __________ 一个音节。",
    answers: [
        { option: "A", answer: "elide", chinese_answer: "省略", chinese_romanization: "shěnglüè" },
        { option: "B", answer: "add", chinese_answer: "添加", chinese_romanization: "tiānjiā" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "highlight", chinese_answer: "突出", chinese_romanization: "tūchū" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'elide' means to omit or leave out, particularly in writing or speech." +
        "<br><br>" +
        "(B) 'add' means to put something in or increase." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'highlight' means to emphasize or make prominent.",
    chinese_explanation: "(A) '省略' 意味着省略或遗漏，特别是在写作或言语中。" +
        "<br><br>" +
        "(B) '添加' 意味着放入或增加某物。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '突出' 意味着强调或使显著。"
    },
    {
        id: 6,
        question: "During the festival, people __________ in the streets, enjoying the lively music and dancing.",
        chinese_question: "在节日期间，人们在街上 __________，享受着热闹的音乐和舞蹈。",
        answers: [
                { option: "A", answer: "criticized", chinese_answer: "批评", chinese_romanization: "pīpíng" },
                { option: "B", answer: "cavorted", chinese_answer: "欢跃", chinese_romanization: "huānyuè" },
                { option: "C", answer: "sulked", chinese_answer: "生闷气", chinese_romanization: "shēng mèn qì" },
                { option: "D", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'cavorted' means to jump or dance around excitedly." +
                "<br><br>" +
                "(A) 'criticized' means to indicate the faults of someone or something in a disapproving way." +
                "<br><br>" +
                "(C) 'sulked' means to be silent, morose, and bad-tempered out of annoyance or disappointment." +
                "<br><br>" +
                "(D) 'ignored' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(B) '欢跃' 意味着兴奋地跳跃或舞蹈。" +
                "<br><br>" +
                "(A) '批评' 意味着以不赞成的方式指出某人或某事的缺点。" +
                "<br><br>" +
                "(C) '生闷气' 意味着因为恼怒或失望而沉默、阴郁和坏脾气。" +
                "<br><br>" +
                "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 7,
    question: "The media tends to __________ successful entrepreneurs, portraying them as infallible visionaries.",
    chinese_question: "媒体倾向于 __________ 成功的企业家，将他们描绘成不可错误的梦想家。",
    answers: [
        { option: "A", answer: "deify", chinese_answer: "神化", chinese_romanization: "shénhuà" },
        { option: "B", answer: "criticize", chinese_answer: "批评", chinese_romanization: "pīpíng" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "ridicule", chinese_answer: "嘲笑", chinese_romanization: "cháoxiào" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'deify' means to worship or regard someone as a god, used figuratively here." +
        "<br><br>" +
        "(B) 'criticize' means to indicate the faults of someone or something in a disapproving way." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'ridicule' means to subject someone or something to contemptuous and dismissive language or behavior.",
    chinese_explanation: "(A) '神化' 意味着把某人当作神来崇拜或视为神，这里是比喻用法。" +
        "<br><br>" +
        "(B) '批评' 意味着以不赞成的方式指出某人或某物的缺点。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '嘲笑' 意味着以轻蔑和蔑视的语言或行为对待某人或某事。"
    },
    {
        id: 8,
    question: "The tragic event served to __________ the community into organizing relief efforts.",
    chinese_question: "这场悲剧事件促使社区 __________ 组织救援工作。",
    answers: [
        { option: "A", answer: "divide", chinese_answer: "分裂", chinese_romanization: "fēnliè" },
        { option: "B", answer: "galvanize", chinese_answer: "激励", chinese_romanization: "jīlì" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'galvanize' used figuratively means to shock or excite someone into taking action." +
        "<br><br>" +
        "(A) 'divide' means to separate or be separated into parts." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'calm' means to make someone peaceful or quiet.",
    chinese_explanation: "(B) '激励' 在比喻意义上指激励或激发某人采取行动。" +
        "<br><br>" +
        "(A) '分裂' 意味着分离或被分成几部分。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '平静' 意味着使某人安静或平和。"
    },
    {
        id: 9,
        question: "Her constant worrying and anxiety began to __________ her mental health.",
        chinese_question: "她的持续担忧和焦虑开始 __________ 她的心理健康。",
        answers: [
                { option: "A", answer: "improve", chinese_answer: "改善", chinese_romanization: "gǎishàn" },
                { option: "B", answer: "macerate", chinese_answer: "消耗", chinese_romanization: "xiāohào" },
                { option: "C", answer: "bolster", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "D", answer: "nurture", chinese_answer: "培育", chinese_romanization: "péiyù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'macerate' figuratively means to wear down or weaken." +
                "<br><br>" +
                "(A) 'improve' means to make better." +
                "<br><br>" +
                "(C) 'bolster' means to support or strengthen." +
                "<br><br>" +
                "(D) 'nurture' means to care for and encourage growth.",
        chinese_explanation: "(B) '消耗' 一词在比喻上意味着削弱或削减。" +
                "<br><br>" +
                "(A) '改善' 意味着使之变得更好。" +
                "<br><br>" +
                "(C) '支持' 意味着支持或加强。" +
                "<br><br>" +
                "(D) '培育' 意味着照顾和鼓励成长。"
    },
    {
        id: 10,
        question: "The lawyer used aggressive tactics to __________ the witness into giving the desired testimony.",
        chinese_question: "律师用激进的策略 __________ 证人提供所需的证词。",
        answers: [
                { option: "A", answer: "bludgeon", chinese_answer: "强迫", chinese_romanization: "qiǎngpò" },
                { option: "B", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "C", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
                { option: "D", answer: "assist", chinese_answer: "协助", chinese_romanization: "xiézhù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'bludgeon' means to bully someone into doing something or to hit someone repeatedly with a heavy object." +
                "<br><br>" +
                "(B) 'support' means to bear all or part of the weight of; hold up." +
                "<br><br>" +
                "(C) 'encourage' means to give support, confidence, or hope to someone." +
                "<br><br>" +
                "(D) 'assist' means to help or support.",
        chinese_explanation: "(A) '强迫' 意味着威胁某人做某事或用重物反复打击某人。" +
                "<br><br>" +
                "(B) '支持' 意味着承担全部或部分重量；支撑。" +
                "<br><br>" +
                "(C) '鼓励' 意味着给某人支持、信心或希望。" +
                "<br><br>" +
                "(D) '协助' 意味着帮助或支持。"
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
