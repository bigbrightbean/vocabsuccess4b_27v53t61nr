// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The old tree managed to __________ the storm, standing tall despite the fierce winds.",
        chinese_question: "这棵老树设法 __________ 风暴，尽管有猛烈的风仍然挺立着。",
        answers: [
                { option: "A", answer: "resist", chinese_answer: "抵抗", chinese_romanization: "dǐkàng" },
                { option: "B", answer: "collapse", chinese_answer: "倒塌", chinese_romanization: "dǎotā" },
                { option: "C", answer: "sway", chinese_answer: "摇摆", chinese_romanization: "yáobǎi" },
                { option: "D", answer: "bend", chinese_answer: "弯曲", chinese_romanization: "wānqū" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'resist' means to withstand the action or effect of." +
                "<br><br>" +
                "(B) 'collapse' means to fall down or in; give way." +
                "<br><br>" +
                "(C) 'sway' means to move or cause to move slowly or rhythmically backward and forward or from side to side." +
                "<br><br>" +
                "(D) 'bend' means to shape or force something straight into a curve or angle.",
        chinese_explanation: "(A) '抵抗' 意味着经受住某事的作用或影响。" +
                "<br><br>" +
                "(B) '倒塌' 意味着倒下或向内倒下；让步。" +
                "<br><br>" +
                "(C) '摇摆' 意味着慢慢或有节奏地前后或左右移动或引起移动。" +
                "<br><br>" +
                "(D) '弯曲' 意味着将直的东西变成弯曲或角度。"
    },
    {
        id: 2,
        question: "The clever marketing campaign managed to __________ consumers into buying the product.",
        chinese_question: "聪明的营销活动成功地 __________ 了消费者购买该产品。",
        answers: [
                { option: "A", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
                { option: "B", answer: "inform", chinese_answer: "告知", chinese_romanization: "gàozhī" },
                { option: "C", answer: "bamboozle", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" },
                { option: "D", answer: "honor", chinese_answer: "尊敬", chinese_romanization: "zūnjìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'bamboozle' means to trick or deceive someone." +
                "<br><br>" +
                "(A) 'assist' means to help someone." +
                "<br><br>" +
                "(B) 'inform' means to give someone facts or information." +
                "<br><br>" +
                "(D) 'honor' means to regard with great respect.",
        chinese_explanation: "(C) '欺骗' 意味着欺骗或蒙骗某人。" +
                "<br><br>" +
                "(A) '帮助' 意味着帮助某人。" +
                "<br><br>" +
                "(B) '告知' 意味着给某人提供事实或信息。" +
                "<br><br>" +
                "(D) '尊敬' 意味着对某人表示尊敬。"
    },
    {
        id: 3,
    question: "The politician used the speech to __________ the government's failure to address the rising unemployment rate.",
    chinese_question: "这位政治家在演讲中 __________ 政府未能解决不断上升的失业率问题。",
    answers: [
        { option: "A", answer: "decry", chinese_answer: "谴责", chinese_romanization: "qiǎnzé" },
        { option: "B", answer: "endorse", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'decry' means to publicly denounce or criticize." +
        "<br><br>" +
        "(B) 'endorse' means to declare one's public approval or support of." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'support' means to bear all or part of the weight of something; to hold up.",
    chinese_explanation: "(A) '谴责' 意味着公开谴责或批评。" +
        "<br><br>" +
        "(B) '支持' 意味着公开表明赞同或支持。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '支持' 意味着承担某物的全部或部分重量；支撑。"
    },
    {
        id: 4,
        question: "In a surprising move, the local official attempted to __________ powers that were not granted to him by the law.",
        chinese_question: "令人惊讶的是，当地官员试图 __________ 法律未授予他的权力。",
        answers: [
                { option: "A", answer: "arrogate", chinese_answer: "冒领", chinese_romanization: "màolǐng" },
                { option: "B", answer: "cede", chinese_answer: "割让", chinese_romanization: "gēràng" },
                { option: "C", answer: "grant", chinese_answer: "授予", chinese_romanization: "shòuyǔ" },
                { option: "D", answer: "share", chinese_answer: "分享", chinese_romanization: "fēnxiǎng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'arrogate' means to take or claim something without justification." +
                "<br><br>" +
                "(B) 'cede' means to give up power or territory." +
                "<br><br>" +
                "(C) 'grant' means to agree to give or allow something." +
                "<br><br>" +
                "(D) 'share' means to have a portion of something with others.",
        chinese_explanation: "(A) '冒领' 意味着未经正当理由而占有或声称某物。" +
                "<br><br>" +
                "(B) '割让' 意味着放弃权力或领土。" +
                "<br><br>" +
                "(C) '授予' 意味着同意给予或允许某事。" +
                "<br><br>" +
                "(D) '分享' 意味着与他人共同拥有某物的一部分。"
    },
    {
        id: 5,
        question: "She likes to __________ on philosophical questions during her free time.",
        chinese_question: "她喜欢在空闲时间 __________ 哲学问题。",
        answers: [
                { option: "A", answer: "cogitate", chinese_answer: "深思", chinese_romanization: "shēnsī" },
                { option: "B", answer: "laugh", chinese_answer: "笑", chinese_romanization: "xiào" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "dismiss", chinese_answer: "不理会", chinese_romanization: "bù lǐhuì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'cogitate' means to think deeply about something." +
                "<br><br>" +
                "(B) 'laugh' means to make sounds and movements of the face and body that show amusement." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'dismiss' means to treat as unworthy of serious consideration.",
        chinese_explanation: "(A) '深思' 意味着对某事进行深入思考。" +
                "<br><br>" +
                "(B) '笑' 意味着发出显示愉悦的声音和面部、身体的动作。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '不理会' 意味着认为不值得认真考虑。"
    },
    {
        id: 6,
        question: "He felt the need to __________ himself from the busy world to find inner peace.",
        chinese_question: "他觉得有必要 __________ 自己，以从忙碌的世界中找到内心的平静。",
        answers: [
                { option: "A", answer: "cloister", chinese_answer: "隐居", chinese_romanization: "yǐnjū" },
                { option: "B", answer: "involve", chinese_answer: "涉及", chinese_romanization: "shèjí" },
                { option: "C", answer: "expose", chinese_answer: "暴露", chinese_romanization: "bàolù" },
                { option: "D", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'cloister' means to seclude or shut away, especially in a convent or monastery." +
                "<br><br>" +
                "(B) 'involve' means to include as a necessary part or result." +
                "<br><br>" +
                "(C) 'expose' means to make something visible by uncovering it." +
                "<br><br>" +
                "(D) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
        chinese_explanation: "(A) '隐居' 意味着隔离或关闭，尤其是在修道院中。" +
                "<br><br>" +
                "(B) '涉及' 意味着作为必要部分或结果包括在内。" +
                "<br><br>" +
                "(C) '暴露' 意味着通过揭开某物使其可见。" +
                "<br><br>" +
                "(D) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。"
    },
    {
        id: 7,
        question: "The frequent praise and rewards from the teacher __________ the students’ positive behaviors in class.",
        chinese_question: "老师频繁的表扬和奖励 __________ 了学生们在课堂上的积极行为。",
        answers: [
                { option: "A", answer: "reinforce", chinese_answer: "加强", chinese_romanization: "jiāqiáng" },
                { option: "B", answer: "undermine", chinese_answer: "破坏", chinese_romanization: "pòhuài" },
                { option: "C", answer: "discourage", chinese_answer: "劝阻", chinese_romanization: "quànzǔ" },
                { option: "D", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'reinforce' means to strengthen or support an idea, behavior, or feeling." +
                "<br><br>" +
                "(B) 'undermine' means to damage or weaken someone or something, especially gradually." +
                "<br><br>" +
                "(C) 'discourage' means to cause someone to lose confidence or enthusiasm." +
                "<br><br>" +
                "(D) 'neglect' means to fail to care for properly.",
        chinese_explanation: "(A) '加强' 意味着加强或支持一个想法、行为或感觉。" +
                "<br><br>" +
                "(B) '破坏' 意味着损害或削弱某人或某物，尤其是逐渐地。" +
                "<br><br>" +
                "(C) '劝阻' 意味着使某人失去信心或热情。" +
                "<br><br>" +
                "(D) '忽视' 意味着未能妥善照顾。"
    },
    {
        id: 8,
        question: "She feared that her advice would be __________ and cause more harm than good.",
        chinese_question: "她担心自己的建议会被 __________ ，结果弊大于利。",
        answers: [
                { option: "A", answer: "followed", chinese_answer: "遵循", chinese_romanization: "zūnxún" },
                { option: "B", answer: "cherished", chinese_answer: "珍惜", chinese_romanization: "zhēnxī" },
                { option: "C", answer: "misapplied", chinese_answer: "误用", chinese_romanization: "wùyòng" },
                { option: "D", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'misapplied' means to use something in a way that is not intended or appropriate." +
                "<br><br>" +
                "(A) 'followed' means to act according to advice or instruction." +
                "<br><br>" +
                "(B) 'cherished' means to hold dear." +
                "<br><br>" +
                "(D) 'ignored' means to refuse to take notice of.",
        chinese_explanation: "(C) '误用' 意味着以非预期或不适当的方式使用某物。" +
                "<br><br>" +
                "(A) '遵循' 意味着根据建议或指示行事。" +
                "<br><br>" +
                "(B) '珍惜' 意味着珍爱。" +
                "<br><br>" +
                "(D) '忽视' 意味着拒绝注意。"
    },
    {
        id: 9,
    question: "His sudden silence during the conversation seemed to __________ bad news.",
    chinese_question: "谈话中他突然的沉默似乎 __________ 坏消息。",
    answers: [
        { option: "A", answer: "forebode", chinese_answer: "预示", chinese_romanization: "yùshì" },
        { option: "B", answer: "enjoy", chinese_answer: "享受", chinese_romanization: "xiǎngshòu" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'forebode' means to act as a warning or indication of a future event, used figuratively here." +
        "<br><br>" +
        "(B) 'enjoy' means to take delight or pleasure in something." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
    chinese_explanation: "(A) '预示' 意味着作为未来事件的警告或指示，这里是比喻用法。" +
        "<br><br>" +
        "(B) '享受' 意味着对某事感到高兴或愉快。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。"
    },
    {
        id: 10,
    question: "Her achievements were __________ in the company's newsletter, celebrating her contributions.",
    chinese_question: "她的成就在公司的通讯中被 __________ ，以庆祝她的贡献。",
    answers: [
        { option: "A", answer: "emblazoned", chinese_answer: "突出展示", chinese_romanization: "tūchū zhǎnshì" },
        { option: "B", answer: "hidden", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
        { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "criticized", chinese_answer: "批评", chinese_romanization: "pīpíng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'emblazoned' means to display a design prominently or vividly, used figuratively here." +
        "<br><br>" +
        "(B) 'hidden' means to keep something out of sight." +
        "<br><br>" +
        "(C) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'criticized' means to indicate the faults of someone or something in a disapproving way.",
    chinese_explanation: "(A) '突出展示' 意味着突出或生动地展示设计，这里是比喻用法。" +
        "<br><br>" +
        "(B) '隐藏' 意味着保密或隐藏某物。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '批评' 意味着以不赞成的方式指出某人或某事的缺点。"
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
