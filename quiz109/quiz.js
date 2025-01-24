// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The sudden influx of orders seemed to __________ the small business, leading to mistakes and delays.",
    chinese_question: "突然的大量订单似乎让小企业 __________ ，导致了错误和延误。",
    answers: [
        { option: "A", answer: "discombobulate", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" },
        { option: "B", answer: "enhance", chinese_answer: "提高", chinese_romanization: "tígāo" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "streamline", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'discombobulate' means to confuse or disconcert; to upset, used figuratively here." +
        "<br><br>" +
        "(B) 'enhance' means to improve the quality, value, or extent of." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'streamline' means to make an organization or system more efficient and effective by employing faster or simpler working methods.",
    chinese_explanation: "(A) '使困惑' 意味着使困惑或不安；使心烦意乱，这里是比喻用法。" +
        "<br><br>" +
        "(B) '提高' 意味着改善某物的质量、价值或程度。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '简化' 意味着通过采用更快或更简单的工作方法使组织或系统更高效和更有效。"
    },
    {
        id: 2,
    question: "The contradictory statements by the witness __________ the jury.",
    chinese_question: "证人的矛盾陈述让陪审团感到 __________。",
    answers: [
        { option: "A", answer: "flummoxed", chinese_answer: "困惑", chinese_romanization: "kùnhuò" },
        { option: "B", answer: "reassured", chinese_answer: "安慰", chinese_romanization: "ānwèi" },
        { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'flummoxed' means to confuse or perplex someone greatly, used figuratively here." +
        "<br><br>" +
        "(B) 'reassured' means to say or do something to remove the doubts and fears of someone." +
        "<br><br>" +
        "(C) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'supported' means to give assistance to.",
    chinese_explanation: "(A) '困惑' 意味着使某人大感困惑，这里是比喻用法。" +
        "<br><br>" +
        "(B) '安慰' 意味着说或做某事以消除某人的疑虑和恐惧。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '支持' 意味着给予帮助。"
    },
    {
        id: 3,
    question: "After the scandal, the company sought to __________ itself from the disgraced CEO.",
    chinese_question: "丑闻之后，公司试图 __________ 自己与被解职的首席执行官的关系。",
    answers: [
        { option: "A", answer: "connect", chinese_answer: "连接", chinese_romanization: "liánjiē" },
        { option: "B", answer: "dissociate", chinese_answer: "脱离", chinese_romanization: "tuōlí" },
        { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "D", answer: "integrate", chinese_answer: "整合", chinese_romanization: "zhěnghé" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'dissociate' means to separate oneself from a group or activity." +
        "<br><br>" +
        "(A) 'connect' means to join or link together." +
        "<br><br>" +
        "(C) 'support' means to bear all or part of the weight of something." +
        "<br><br>" +
        "(D) 'integrate' means to combine one thing with another so that they become a whole.",
    chinese_explanation: "(B) '脱离' 意味着将自己与某个团体或活动分离。" +
        "<br><br>" +
        "(A) '连接' 意味着连接在一起。" +
        "<br><br>" +
        "(C) '支持' 意味着支撑某物的全部或部分重量。" +
        "<br><br>" +
        "(D) '整合' 意味着将一件事与另一件事结合起来，使其成为一个整体。"
    },
    {
        id: 4,
        question: "It took a while for the true reasons for his decision to __________.",
        chinese_question: "他做出决定的真正原因过了一段时间才 __________ 。",
        answers: [
                { option: "A", answer: "surface", chinese_answer: "浮现", chinese_romanization: "fúxiàn" },
                { option: "B", answer: "sink", chinese_answer: "下沉", chinese_romanization: "xiàchén" },
                { option: "C", answer: "disappear", chinese_answer: "消失", chinese_romanization: "xiāoshī" },
                { option: "D", answer: "dissolve", chinese_answer: "溶解", chinese_romanization: "róngjiě" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'surface' means to become apparent or emerge." +
                "<br><br>" +
                "(B) 'sink' means to go down below the surface of something, especially of a liquid." +
                "<br><br>" +
                "(C) 'disappear' means to cease to be visible." +
                "<br><br>" +
                "(D) 'dissolve' means to become incorporated into a liquid so as to form a solution.",
        chinese_explanation: "(A) '浮现' 意味着变得显而易见或浮现。" +
                "<br><br>" +
                "(B) '下沉' 意味着下沉到某物的表面以下，特别是液体。" +
                "<br><br>" +
                "(C) '消失' 意味着停止可见。" +
                "<br><br>" +
                "(D) '溶解' 意味着溶入液体中形成溶液。"
    },
    {
        id: 5,
        question: "In tough times, we must __________ on our inner strength to carry us through.",
        chinese_question: "在艰难时期，我们必须 __________ 我们的内在力量来支撑我们度过难关。",
        answers: [
                { option: "A", answer: "question", chinese_answer: "质问", chinese_romanization: "zhìwèn" },
                { option: "B", answer: "rely", chinese_answer: "依赖", chinese_romanization: "yīlài" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "doubt", chinese_answer: "怀疑", chinese_romanization: "huáiyí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'rely' means to depend on with full trust or confidence." +
                "<br><br>" +
                "(A) 'question' means to ask questions of someone, especially in an official context." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge; disregard intentionally." +
                "<br><br>" +
                "(D) 'doubt' means to feel uncertain about something.",
        chinese_explanation: "(B) '依赖' 意味着完全信任或依赖。" +
                "<br><br>" +
                "(A) '质问' 意味着在正式场合向某人提问。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认；有意无视。" +
                "<br><br>" +
                "(D) '怀疑' 意味着对某事感到不确定。"
    },
    {
        id: 6,
    question: "Years of corruption and mismanagement had __________ the company, leaving it on the brink of collapse.",
    chinese_question: "多年的腐败和管理不善使公司 __________ ，使其濒临崩溃。",
    answers: [
        { option: "A", answer: "enfeebled", chinese_answer: "使虚弱", chinese_romanization: "shǐ xūruò" },
        { option: "B", answer: "strengthened", chinese_answer: "增强", chinese_romanization: "zēngqiáng" },
        { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "revitalized", chinese_answer: "恢复活力", chinese_romanization: "huīfù huólì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'enfeebled' means to make very weak, used figuratively here." +
        "<br><br>" +
        "(B) 'strengthened' means to make something stronger." +
        "<br><br>" +
        "(C) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'revitalized' means to give new life or energy to.",
    chinese_explanation: "(A) '使虚弱' 意味着使非常虚弱，这里是比喻用法。" +
        "<br><br>" +
        "(B) '增强' 意味着使某物更强。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '恢复活力' 意味着给某人新的生命或能量。"
    },
    {
        id: 7,
    question: "Her performance was __________ by the judges, who pointed out every minor error.",
    chinese_question: "她的表现被评委 __________，他们指出了每一个小错误。",
    answers: [
        { option: "A", answer: "celebrated", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
        { option: "B", answer: "flayed", chinese_answer: "严厉批评", chinese_romanization: "yánlì pīpíng" },
        { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "praised", chinese_answer: "赞美", chinese_romanization: "zànměi" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'flayed' used figuratively means to criticize harshly." +
        "<br><br>" +
        "(A) 'celebrated' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
        "<br><br>" +
        "(C) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'praised' means to express warm approval or admiration of.",
    chinese_explanation: "(B) '严厉批评' 在比喻意义上指严厉地批评。" +
        "<br><br>" +
        "(A) '庆祝' 意味着通过社交聚会或愉快的活动来纪念重要或快乐的一天或事件。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '赞美' 意味着表达热烈的认可或钦佩。"
    },
    {
        id: 8,
    question: "They must __________ with the reality of the situation and adapt their plans.",
    chinese_question: "他们必须 __________ 现实情况，并调整他们的计划。",
    answers: [
        { option: "A", answer: "grapple", chinese_answer: "努力应对", chinese_romanization: "nǔlì yìngduì" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
        { option: "D", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'grapple' means to struggle or work hard to deal with or overcome something, used figuratively here." +
        "<br><br>" +
        "(B) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
        "<br><br>" +
        "(D) 'reject' means to dismiss or refuse something.",
    chinese_explanation: "(A) '努力应对' 意味着努力处理或克服某事，这里是比喻用法。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。" +
        "<br><br>" +
        "(D) '拒绝' 意味着驳回或拒绝某事物。"
    },
    {
        id: 9,
        question: "His voice __________ with authority, making everyone in the room listen attentively.",
        chinese_question: "他的声音充满权威，令房间里的每个人都认真听。",
        answers: [
                { option: "A", answer: "intoned", chinese_answer: "吟诵", chinese_romanization: "yínsòng" },
                { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "D", answer: "criticized", chinese_answer: "批评", chinese_romanization: "pīpíng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'intoned' means to say or recite with little rise and fall of the pitch of the voice, used figuratively here." +
                "<br><br>" +
                "(B) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(C) 'supported' means to give assistance to." +
                "<br><br>" +
                "(D) 'criticized' means to indicate the faults of someone or something in a disapproving way.",
        chinese_explanation: "(A) '吟诵' 意味着用平稳的声调说或背诵，这里是比喻用法。" +
                "<br><br>" +
                "(B) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(C) '支持' 意味着给予帮助。" +
                "<br><br>" +
                "(D) '批评' 意味着以不赞成的方式指出某人或某物的错误。"
    },
    {
        id: 10,
    question: "The coach aimed to __________ the team of the idea that talent alone would win games.",
    chinese_question: "教练的目标是 __________ 团队那种认为单凭天赋就能赢得比赛的想法。",
    answers: [
        { option: "A", answer: "disabuse", chinese_answer: "纠正", chinese_romanization: "jiūzhèng" },
        { option: "B", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'disabuse' means to persuade someone that an idea or belief is mistaken, used figuratively here." +
        "<br><br>" +
        "(B) 'encourage' means to give support, confidence, or hope to someone." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'support' means to bear all or part of the weight of something; to hold up.",
    chinese_explanation: "(A) '纠正' 意味着让某人相信一个观点或信念是错误的，这里是比喻用法。" +
        "<br><br>" +
        "(B) '鼓励' 意味着给予支持、信心或希望。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '支持' 意味着承担某物的全部或部分重量；支撑。"
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
