// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "In many countries, education for children is __________ until a certain age, ensuring that all young citizens receive basic schooling.",
        chinese_question: "在许多国家，儿童的教育是 __________ 的，直到一定年龄，确保所有年轻公民接受基础教育。",
        answers: [
            { option: "A", answer: "mandatory", chinese_answer: "强制性的", chinese_romanization: "qiángzhì xìng de" },
            { option: "B", answer: "elective", chinese_answer: "选举的", chinese_romanization: "xuǎnjǔ de" },
            { option: "C", answer: "optional", chinese_answer: "可选的", chinese_romanization: "kěxuǎn de" },
            { option: "D", answer: "voluntary", chinese_answer: "自愿的", chinese_romanization: "zìyuàn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'mandatory' means required by law or rules; compulsory." +
            "<br><br>" +
            "(B) 'elective' means related to or working by means of election." +
            "<br><br>" +
            "(C) 'optional' means available to be chosen but not obligatory." +
            "<br><br>" +
            "(D) 'voluntary' means done, given, or acting of one's own free will.",
        chinese_explanation: "(A) '强制性的' 意味着法律或规则要求的；强制的。" +
            "<br><br>" +
            "'选举的' 意味着通过选举的或与选举有关的。" +
            "<br><br>" +
            "'可选的' 意味着可以选择但不是强制的。" +
            "<br><br>" +
            "'自愿的' 意味着出于自愿的。"
    },
    {
        id: 2,
        question: "The __________ notes he took during the lecture made studying for the exam much easier.",
        chinese_question: "他在讲座期间做的 __________ 笔记使复习考试变得容易多了。",
        answers: [
            { option: "A", answer: "illegible", chinese_answer: "难以辨认的", chinese_romanization: "nányǐ biànrèn de" },
            { option: "B", answer: "disorganized", chinese_answer: "杂乱的", chinese_romanization: "záluàn de" },
            { option: "C", answer: "limpid", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" },
            { option: "D", answer: "messy", chinese_answer: "凌乱的", chinese_romanization: "língluàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'limpid' means clear and easy to understand." +
            "<br><br>" +
            "(A) 'illegible' means not clear enough to be read." +
            "<br><br>" +
            "(B) 'disorganized' means not properly planned and controlled." +
            "<br><br>" +
            "(D) 'messy' means untidy or dirty.",
        chinese_explanation: "(C) '清晰的' 意味着清楚易懂的。" +
            "<br><br>" +
            "(A) '难以辨认的' 意味着不够清晰而无法阅读的。" +
            "<br><br>" +
            "(B) '杂乱的' 意味着未得到妥善计划和控制的。" +
            "<br><br>" +
            "(D) '凌乱的' 意味着不整洁或肮脏的。"
    },
    {
        id: 3,
                question: "Her __________ support for the new policy made it clear to everyone where she stood on the issue.",
                chinese_question: "她对新政策的 __________ 支持使每个人都清楚她在这个问题上的立场。",
                answers: [
                    { option: "A", answer: "hesitant", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
                    { option: "B", answer: "wavering", chinese_answer: "动摇", chinese_romanization: "dòngyáo" },
                    { option: "C", answer: "unequivocal", chinese_answer: "明确", chinese_romanization: "míngquè" },
                    { option: "D", answer: "doubtful", chinese_answer: "怀疑", chinese_romanization: "huáiyí" }
                ],
                correctAnswer: "C",
                explanation: "(C) 'unequivocal' means leaving no doubt; unambiguous." +
                "<br><br>" +
                "(A) 'hesitant' means tentative, unsure, or slow in acting or speaking." +
                "<br><br>" +
                "(B) 'wavering' means moving in a quivering way; flickering." +
                "<br><br>" +
                "(D) 'doubtful' means feeling uncertain about something.",
                chinese_explanation: "(C) '明确' 意味着毫无疑问的；不模糊的。" +
                "<br><br>" +
                "(A) '犹豫' 意味着试探性的、不确定的或行动或讲话缓慢的。" +
                "<br><br>" +
                "(B) '动摇' 意味着以颤抖的方式移动；闪烁。" +
                "<br><br>" +
                "(D) '怀疑' 意味着对某事感到不确定。"
    },
    {
        id: 4,
        question: "The dictator's __________ policies led to widespread suffering and unrest among the populace.",
        chinese_question: "这位独裁者的 __________ 政策导致了民众的广泛痛苦和动荡。",
        answers: [
            { option: "A", answer: "odious", chinese_answer: "可憎的", chinese_romanization: "kězēng de" },
            { option: "B", answer: "beneficial", chinese_answer: "有益的", chinese_romanization: "yǒuyì de" },
            { option: "C", answer: "admirable", chinese_answer: "令人钦佩的", chinese_romanization: "lìng rén qīnpèi de" },
            { option: "D", answer: "commendable", chinese_answer: "值得称赞的", chinese_romanization: "zhídé chēngzàn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'odious' means extremely unpleasant; repulsive." +
            "<br><br>" +
            "(B) 'beneficial' means favorable or advantageous; resulting in good." +
            "<br><br>" +
            "(C) 'admirable' means arousing or deserving respect and approval." +
            "<br><br>" +
            "(D) 'commendable' means deserving praise.",
        chinese_explanation: "(A) '可憎的' 意味着极其令人不快的；令人反感的。" +
            "<br><br>" +
            "(B) '有益的' 意味着有利的或有好处的；产生好结果的。" +
            "<br><br>" +
            "(C) '令人钦佩的' 意味着引起或值得尊重和认可的。" +
            "<br><br>" +
            "(D) '值得称赞的' 意味着值得称赞的。"
    },
    {
        id: 5,
        question: "His __________ presentation impressed the board of directors.",
        chinese_question: "他 __________ 的演讲给董事会留下了深刻的印象。",
        answers: [
            { option: "A", answer: "disorganized", chinese_answer: "杂乱无章", chinese_romanization: "záluànwúzhāng" },
            { option: "B", answer: "sleek", chinese_answer: "流畅", chinese_romanization: "liúchàng" },
            { option: "C", answer: "mundane", chinese_answer: "平凡", chinese_romanization: "píngfán" },
            { option: "D", answer: "lengthy", chinese_answer: "冗长", chinese_romanization: "rǒngcháng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sleek' means smooth and efficient." +
            "<br><br>" +
            "(A) 'disorganized' means not properly planned and controlled." +
            "<br><br>" +
            "(C) 'mundane' means lacking interest or excitement; dull." +
            "<br><br>" +
            "(D) 'lengthy' means (especially in reference to time) of considerable or unusual length.",
        chinese_explanation: "(B) '流畅' 一词意味着光滑且高效。" +
            "<br><br>" +
            "(A) '杂乱无章' 意味着没有适当的计划和控制。" +
            "<br><br>" +
            "(C) '平凡' 意味着缺乏兴趣或兴奋；沉闷。" +
            "<br><br>" +
            "(D) '冗长' 意味着（尤指时间）相当长或不寻常的长度。"
    },
    {
        id: 6,
        question: "It was __________ to think that they could finish the entire project in just one week, considering its complexity and the limited resources.",
        chinese_question: "考虑到项目的复杂性和资源的有限，认为他们可以在短短一周内完成整个项目是 __________ 的。",
        answers: [
            { option: "A", answer: "ridiculous", chinese_answer: "荒谬的", chinese_romanization: "huāngmiù de" },
            { option: "B", answer: "feasible", chinese_answer: "可行的", chinese_romanization: "kěxíng de" },
            { option: "C", answer: "achievable", chinese_answer: "可实现的", chinese_romanization: "kě shíxiàn de" },
            { option: "D", answer: "plausible", chinese_answer: "合理的", chinese_romanization: "hélǐ de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'ridiculous' means deserving or inviting derision or mockery; absurd." +
            "<br><br>" +
            "(B) 'feasible' means possible to do easily or conveniently." +
            "<br><br>" +
            "(C) 'achievable' means able to be brought about or reached successfully." +
            "<br><br>" +
            "(D) 'plausible' means seeming reasonable or probable.",
        chinese_explanation: "(A) '荒谬的' 意味着值得嘲笑或嘲讽的；荒谬的。" +
            "<br><br>" +
            "(B) '可行的' 意味着可以轻松或方便地完成的。" +
            "<br><br>" +
            "(C) '可实现的' 意味着能够成功地实现或到达的。" +
            "<br><br>" +
            "(D) '合理的' 意味着看起来合理或可能的。"
    },
    {
        id: 7,
        question: "The __________ loyalties of the political supporters made it difficult for the candidate to build a stable base.",
        chinese_question: "政治支持者的 __________ 忠诚使候选人难以建立稳定的基础。",
        answers: [
            { option: "A", answer: "steadfast", chinese_answer: "坚定的", chinese_romanization: "jiāndìng de" },
            { option: "B", answer: "reliable", chinese_answer: "可靠的", chinese_romanization: "kěkào de" },
            { option: "C", answer: "fickle", chinese_answer: "变化无常的", chinese_romanization: "biànhuà wúcháng de" },
            { option: "D", answer: "consistent", chinese_answer: "一致的", chinese_romanization: "yīzhì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'fickle' means changing frequently, especially as regards one's loyalties or affections." +
            "<br><br>" +
            "(A) 'steadfast' means resolutely or dutifully firm and unwavering." +
            "<br><br>" +
            "(B) 'reliable' means consistently good in quality or performance; able to be trusted." +
            "<br><br>" +
            "(D) 'consistent' means acting or done in the same way over time, especially so as to be fair or accurate.",
        chinese_explanation: "(C) '变化无常的' 意味着经常变化，尤其是指忠诚或感情的变化。" +
            "<br><br>" +
            "'坚定的' 意味着坚决或尽职尽责地坚定不移的。" +
            "<br><br>" +
            "'可靠的' 意味着质量或性能始终如一的；值得信赖的。" +
            "<br><br>" +
            "'一致的' 意味着以同样的方式进行的，尤其是为了公平或准确。"
    },
    {
        id: 8,
        question: "Many considered his criticism of the revered author to be __________.",
        chinese_question: "许多人认为他对那位受尊敬的作家的批评是 __________ 的。",
        answers: [
            { option: "A", answer: "respectful", chinese_answer: "尊敬的", chinese_romanization: "zūnjìng de" },
            { option: "B", answer: "sacrilegious", chinese_answer: "亵渎的", chinese_romanization: "xièdú de" },
            { option: "C", answer: "complimentary", chinese_answer: "赞美的", chinese_romanization: "zànměi de" },
            { option: "D", answer: "admiring", chinese_answer: "钦佩的", chinese_romanization: "qīnpèi de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sacrilegious' means showing disrespect or violation of something considered sacred." +
            "<br><br>" +
            "(A) 'respectful' means feeling or showing deference and respect." +
            "<br><br>" +
            "(C) 'complimentary' means expressing a compliment; praising or approving." +
            "<br><br>" +
            "(D) 'admiring' means regarding with respect or warm approval.",
        chinese_explanation: "(B) '亵渎的' 意味着对被视为神圣的事物表现出不尊重或侵犯。" +
            "<br><br>" +
            "(A) '尊敬的' 意味着感到或表现出敬意和尊重的。" +
            "<br><br>" +
            "(C) '赞美的' 意味着表达赞美的；赞扬或批准的。" +
            "<br><br>" +
            "(D) '钦佩的' 意味着以尊敬或热情的批准看待。"
    },
    {
        id: 9,
        question: "Her __________ approach to leadership made everyone feel part of the team.",
        chinese_question: "她 __________ 的领导方法让每个人都感到是团队的一部分。",
        answers: [
            { option: "A", answer: "narrow", chinese_answer: "狭窄的", chinese_romanization: "xiázhǎi de" },
            { option: "B", answer: "inclusive", chinese_answer: "包容的", chinese_romanization: "bāoróng de" },
            { option: "C", answer: "restricted", chinese_answer: "受限的", chinese_romanization: "shòuxiàn de" },
            { option: "D", answer: "selective", chinese_answer: "选择性的", chinese_romanization: "xuǎnzé xìng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'inclusive' means not excluding any of the parties or groups involved in something." +
            "<br><br>" +
            "(A) 'narrow' means limited in extent, amount, or scope." +
            "<br><br>" +
            "(C) 'restricted' means limited in extent, number, scope, or action." +
            "<br><br>" +
            "(D) 'selective' means relating to or involving the selection of the most suitable or best qualified.",
        chinese_explanation: "(B) '包容的' 一词意味着不排除任何参与某事的方或群体的。" +
            "<br><br>" +
            "(A) '狭窄的' 意味着在程度、数量或范围上受到限制的。" +
            "<br><br>" +
            "(C) '受限的' 意味着在程度、数量、范围或行动上受到限制的。" +
            "<br><br>" +
            "(D) '选择性的' 意味着涉及或涉及选择最合适或最有资格的。"
    },
    {
        id: 10,
        question: "The movie director's __________ approach to filmmaking resulted in a series of highly original and unexpected scenes that captivated audiences.",
        chinese_question: "这位电影导演的 __________ 拍摄方法创作了一系列极具原创性和意想不到的场景，吸引了观众的注意。",
        answers: [
            { option: "A", answer: "quirky", chinese_answer: "古怪的", chinese_romanization: "gǔguài de" },
            { option: "B", answer: "standard", chinese_answer: "标准的", chinese_romanization: "biāozhǔn de" },
            { option: "C", answer: "unremarkable", chinese_answer: "平凡的", chinese_romanization: "píngfán de" },
            { option: "D", answer: "typical", chinese_answer: "典型的", chinese_romanization: "diǎnxíng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'quirky' means characterized by peculiar or unexpected traits or aspects." +
            "<br><br>" +
            "(B) 'standard' means used or accepted as normal or average." +
            "<br><br>" +
            "(C) 'unremarkable' means not particularly interesting or surprising." +
            "<br><br>" +
            "(D) 'typical' means having the distinctive qualities of a particular type of person or thing.",
        chinese_explanation: "(A) '古怪的' 意味着具有奇特或意想不到的特征或方面的。" +
            "<br><br>" +
            "(B) '标准的' 意味着用作或接受为正常或平均的。" +
            "<br><br>" +
            "(C) '平凡的' 意味着不特别有趣或令人惊讶的。" +
            "<br><br>" +
            "(D) '典型的' 意味着具有某一类型人或事物的独特品质的。"
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
