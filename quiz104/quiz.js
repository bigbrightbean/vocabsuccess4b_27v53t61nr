// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "His habit of overthinking tends to __________ simple decisions.",
    chinese_question: "他过度思考的习惯往往会 __________ 简单的决定。",
    answers: [
        { option: "A", answer: "complicate", chinese_answer: "复杂化", chinese_romanization: "fùzá huà" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "streamline", chinese_answer: "精简", chinese_romanization: "jīngjiǎn" },
        { option: "D", answer: "explain", chinese_answer: "解释", chinese_romanization: "jiěshì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'complicate' means to make something more difficult or confusing, used figuratively here." +
        "<br><br>" +
        "(B) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'streamline' means to make an organization or system more efficient and effective by employing faster or simpler working methods." +
        "<br><br>" +
        "(D) 'explain' means to make an idea, situation, or problem clear to someone by describing it in more detail.",
    chinese_explanation: "(A) '复杂化' 意味着使某事更加困难或令人困惑，这里是比喻用法。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '精简' 意味着通过采用更快或更简单的工作方法使组织或系统更高效和有效。" +
        "<br><br>" +
        "(D) '解释' 意味着通过更详细地描述某个想法、情况或问题使其变得清楚。"
    },
    {
        id: 2,
    question: "In her speech, she would sometimes __________ into personal anecdotes that had little to do with her main message.",
    chinese_question: "在她的演讲中，她有时会 __________ 个人轶事，这些轶事与她的主要信息关系不大。",
    answers: [
        { option: "A", answer: "divagate", chinese_answer: "偏离", chinese_romanization: "piānlí" },
        { option: "B", answer: "focus", chinese_answer: "专注", chinese_romanization: "zhuānzhù" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "summarize", chinese_answer: "总结", chinese_romanization: "zǒngjié" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'divagate' means to stray or wander from a course or subject." +
        "<br><br>" +
        "(B) 'focus' means to concentrate on a particular subject or task." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'summarize' means to give a brief statement of the main points.",
    chinese_explanation: "(A) '偏离' 意味着偏离或游离于一个过程或主题。" +
        "<br><br>" +
        "(B) '专注' 意味着集中于特定的主题或任务。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '总结' 意味着简要陈述要点。"
    },
    {
        id: 3,
        question: "His leadership qualities have been __________ through years of challenging experiences.",
        chinese_question: "多年的挑战性经历 __________ 了他的领导品质。",
        answers: [
                { option: "A", answer: "chiselled", chinese_answer: "磨练", chinese_romanization: "móliàn" },
                { option: "B", answer: "weakened", chinese_answer: "削弱", chinese_romanization: "xiāoruò" },
                { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "disguised", chinese_answer: "伪装", chinese_romanization: "wèizhuāng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'chiselled' means to shape or define something with effort, used figuratively here." +
                "<br><br>" +
                "(B) 'weakened' means to make or become less strong." +
                "<br><br>" +
                "(C) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'disguised' means to give someone or something a different appearance in order to conceal their identity.",
        chinese_explanation: "(A) '磨练' 意味着用努力来塑造或定义某物，这里是比喻用法。" +
                "<br><br>" +
                "(B) '削弱' 意味着使变得不那么强。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '伪装' 意味着给某人或某物以不同的外观，以掩盖其身份。"
    },
    {
        id: 4,
    question: "The innovative idea began to __________ in her mind over several months.",
    chinese_question: "这个创新的想法在她的脑海中 __________ 了几个月。",
    answers: [
        { option: "A", answer: "gestate", chinese_answer: "酝酿", chinese_romanization: "yùnniàng" },
        { option: "B", answer: "disappear", chinese_answer: "消失", chinese_romanization: "xiāoshī" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'gestate' means to develop over a long period, used figuratively here." +
        "<br><br>" +
        "(B) 'disappear' means to cease to be visible." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'simplify' means to make something simpler or easier to do or understand.",
    chinese_explanation: "(A) '酝酿' 意味着长时间发展，这里是比喻用法。" +
        "<br><br>" +
        "(B) '消失' 意味着不再可见。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '简化' 意味着使某事变得更简单或更容易做或理解。"
    },
    {
        id: 5,
        question: "The activist __________ the politician with questions about the controversial policy.",
        chinese_question: "活动家 __________ 政治家，问了许多关于争议政策的问题。",
        answers: [
                { option: "A", answer: "accosted", chinese_answer: "搭讪", chinese_romanization: "dāshàn" },
                { option: "B", answer: "praised", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
                { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "assisted", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'accosted' means to approach and address someone boldly or aggressively." +
                "<br><br>" +
                "(B) 'praised' means to express warm approval or admiration of." +
                "<br><br>" +
                "(C) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'assisted' means to help someone.",
        chinese_explanation: "(A) '搭讪' 意味着大胆或攻击性地接近并与某人交谈。" +
                "<br><br>" +
                "(B) '赞扬' 意味着表达热烈的赞同或钦佩。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '帮助' 意味着帮助某人。"
    },
    {
        id: 6,
    question: "She worked hard to __________ the fine line between being firm and being aggressive in her leadership style.",
    chinese_question: "她努力在她的领导风格中 __________ 坚定和咄咄逼人之间的细微差别。",
    answers: [
        { option: "A", answer: "blend", chinese_answer: "混合", chinese_romanization: "hùnhé" },
        { option: "B", answer: "demarcate", chinese_answer: "划定", chinese_romanization: "huàdìng" },
        { option: "C", answer: "obscure", chinese_answer: "模糊", chinese_romanization: "móhu" },
        { option: "D", answer: "confuse", chinese_answer: "迷惑", chinese_romanization: "míhuò" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'demarcate' used figuratively means to set the boundaries or limits of something." +
        "<br><br>" +
        "(A) 'blend' means to mix together." +
        "<br><br>" +
        "(C) 'obscure' means to make unclear or difficult to understand." +
        "<br><br>" +
        "(D) 'confuse' means to make someone unable to think clearly.",
    chinese_explanation: "(B) '划定' 在比喻意义上指设置某物的边界或限制。" +
        "<br><br>" +
        "(A) '混合' 意味着混合在一起。" +
        "<br><br>" +
        "(C) '模糊' 意味着使不清楚或难以理解。" +
        "<br><br>" +
        "(D) '迷惑' 意味着使某人无法清晰思考。"
    },
    {
        id: 7,
        question: "The actress chose to __________ her appearance with excessive jewelry for the awards ceremony.",
        chinese_question: "这位女演员选择用过多的珠宝来 __________ 自己的外表以参加颁奖典礼。",
        answers: [
                { option: "A", answer: "bedizen", chinese_answer: "穿戴华丽", chinese_romanization: "chuāndài huálì" },
                { option: "B", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "moderate", chinese_answer: "节制", chinese_romanization: "jiézhì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'bedizen' means to dress or decorate in a gaudy or showy manner." +
                "<br><br>" +
                "(B) 'simplify' means to make something simpler or easier to do or understand." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'moderate' means to make or become less extreme or intense.",
        chinese_explanation: "(A) '穿戴华丽' 意味着以艳丽或炫耀的方式打扮或装饰。" +
                "<br><br>" +
                "(B) '简化' 意味着使某事更简单或更容易做或理解。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '节制' 意味着使某事变得不那么极端或强烈。"
    },
    {
        id: 8,
        question: "The complexity of the new software might __________ users who are not tech-savvy.",
        chinese_question: "新软件的复杂性可能会让不熟悉技术的用户 __________ 。",
        answers: [
                { option: "A", answer: "boggle", chinese_answer: "困惑", chinese_romanization: "kùnhuò" },
                { option: "B", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
                { option: "C", answer: "entertain", chinese_answer: "娱乐", chinese_romanization: "yúlè" },
                { option: "D", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'boggle' means to overwhelm or bewilder." +
                "<br><br>" +
                "(B) 'simplify' means to make something simpler or easier to do or understand." +
                "<br><br>" +
                "(C) 'entertain' means to provide someone with amusement or enjoyment." +
                "<br><br>" +
                "(D) 'assist' means to help or support.",
        chinese_explanation: "(A) '困惑' 意味着使不知所措或迷惑。" +
                "<br><br>" +
                "(B) '简化' 意味着使某事更简单或更容易做或理解。" +
                "<br><br>" +
                "(C) '娱乐' 意味着为某人提供娱乐或享受。" +
                "<br><br>" +
                "(D) '帮助' 意味着帮助或支持。"
    },
    {
        id: 9,
        question: "She found a clever way to __________ the bureaucracy and get her project approved quickly.",
        chinese_question: "她找到了一种巧妙的方法来 __________ 官僚作风，使她的项目快速获得批准。",
        answers: [
                { option: "A", answer: "circumvent", chinese_answer: "绕过", chinese_romanization: "ràoguò" },
                { option: "B", answer: "follow", chinese_answer: "遵循", chinese_romanization: "zūnxún" },
                { option: "C", answer: "enforce", chinese_answer: "执行", chinese_romanization: "zhíxíng" },
                { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'circumvent' means to find a way around (an obstacle)." +
                "<br><br>" +
                "(B) 'follow' means to go or come after (a person or thing proceeding ahead); move or travel behind." +
                "<br><br>" +
                "(C) 'enforce' means to compel observance of or compliance with (a law, rule, or obligation)." +
                "<br><br>" +
                "(D) 'simplify' means to make (something) simpler or easier to do or understand.",
        chinese_explanation: "(A) '绕过' 意味着找到绕过（障碍物）的办法。" +
                "<br><br>" +
                "(B) '遵循' 意味着在（前面行进的人或事物）之后走或来；移动或旅行在后面。" +
                "<br><br>" +
                "(C) '执行' 意味着强制遵守或遵守（法律、规则或义务）。" +
                "<br><br>" +
                "(D) '简化' 意味着使（某事物）更简单或更容易做或理解。"
    },
    {
        id: 10,
        question: "She __________ to her previous job experience during the interview without going into specifics.",
        chinese_question: "在面试中，她 __________ 了以前的工作经验，但没有具体说明。",
        answers: [
                { option: "A", answer: "explained", chinese_answer: "解释", chinese_romanization: "jiěshì" },
                { option: "B", answer: "alluded", chinese_answer: "暗示", chinese_romanization: "ànshì" },
                { option: "C", answer: "detailed", chinese_answer: "详细描述", chinese_romanization: "xiángxì miáoshù" },
                { option: "D", answer: "avoided", chinese_answer: "避免", chinese_romanization: "bìmiǎn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'alluded' means to hint at or mention indirectly." +
                "<br><br>" +
                "(A) 'explained' means to make something clear by describing it in detail." +
                "<br><br>" +
                "(C) 'detailed' means to describe item by item." +
                "<br><br>" +
                "(D) 'avoided' means to keep away from or stop oneself from doing something.",
        chinese_explanation: "(B) '暗示'一词意味着间接提及或提到。" +
                "<br><br>" +
                "(A) '解释' 意味着通过详细描述使某事清楚。" +
                "<br><br>" +
                "(C) '详细描述' 意味着逐项描述。" +
                "<br><br>" +
                "(D) '避免' 意味着远离或阻止自己做某事。"
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
