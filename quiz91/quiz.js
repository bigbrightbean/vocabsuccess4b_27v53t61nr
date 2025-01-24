// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Despite his calm demeanor, he was __________ about having completed the project on time, hoping to buy more time from his boss.",
        chinese_question: "尽管他表现得很镇定，但他在 __________ 地说按时完成了项目，希望能从老板那里争取到更多时间。",
        answers: [
            { option: "A", answer: "bluffing", chinese_answer: "虚张声势的", chinese_romanization: "xūzhāng shēngshì de" },
            { option: "B", answer: "sincere", chinese_answer: "真诚的", chinese_romanization: "zhēnchéng de" },
            { option: "C", answer: "candid", chinese_answer: "坦率的", chinese_romanization: "tǎnshuài de" },
            { option: "D", answer: "straightforward", chinese_answer: "直率的", chinese_romanization: "zhíshuài de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'bluffing' means trying to deceive someone as to one's abilities or intentions." +
            "<br><br>" +
            "(B) 'sincere' means free from pretense or deceit; proceeding from genuine feelings." +
            "<br><br>" +
            "(C) 'candid' means truthful and straightforward; frank." +
            "<br><br>" +
            "(D) 'straightforward' means uncomplicated and easy to do or understand.",
        chinese_explanation: "(A) '虚张声势的' 意味着试图欺骗某人关于自己的能力或意图。" +
            "<br><br>" +
            "(B) '真诚的' 意味着没有伪装或欺骗的；出于真挚的感情。" +
            "<br><br>" +
            "(C) '坦率的' 意味着诚实和直率的；坦白的。" +
            "<br><br>" +
            "(D) '直率的' 意味着简单易懂的；没有复杂的。"
    },
    {
        id: 2,
    question: "The council's arguments did not __________ the developer from building on the protected land.",
    chinese_question: "委员会的争论没有 __________ 开发商在保护地上建房。",
    answers: [
        { option: "A", answer: "dissuade", chinese_answer: "劝阻", chinese_romanization: "quànzǔ" },
        { option: "B", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "endorse", chinese_answer: "赞同", chinese_romanization: "zàntóng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'dissuade' means to persuade someone not to take a particular course of action, used figuratively here." +
        "<br><br>" +
        "(B) 'support' means to bear all or part of the weight of something; to hold up." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'endorse' means to declare one's public approval or support of.",
    chinese_explanation: "(A) '劝阻' 意味着说服某人不采取某一特定行动，这里是比喻用法。" +
        "<br><br>" +
        "(B) '支持' 意味着承担某物的全部或部分重量；支撑。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '赞同' 意味着公开赞同或支持。"
    },
    {
        id: 3,
    question: "The company aimed to __________ its flawed policies to better serve its customers.",
    chinese_question: "公司旨在 __________ 其有缺陷的政策，以更好地服务客户。",
    answers: [
        { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "B", answer: "emend", chinese_answer: "改善", chinese_romanization: "gǎishàn" },
        { option: "C", answer: "sustain", chinese_answer: "维持", chinese_romanization: "wéichí" },
        { option: "D", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'emend' used figuratively means to correct or improve policies or procedures." +
        "<br><br>" +
        "(A) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'sustain' means to support or maintain." +
        "<br><br>" +
        "(D) 'conceal' means to keep from sight; hide.",
    chinese_explanation: "(B) '改善' 在比喻意义上指纠正或改善政策或程序。" +
        "<br><br>" +
        "(A) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '维持' 意味着支持或维持。" +
        "<br><br>" +
        "(D) '隐藏' 意味着不让看到；隐藏。"
    },
    {
        id: 4,
    question: "She __________ hypocrisy, believing that honesty is the most important virtue.",
    chinese_question: "她 __________ 虚伪，认为诚实是最重要的美德。",
    answers: [
        { option: "A", answer: "appreciates", chinese_answer: "欣赏", chinese_romanization: "xīnshǎng" },
        { option: "B", answer: "accepts", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
        { option: "C", answer: "execrates", chinese_answer: "憎恶", chinese_romanization: "zēngwù" },
        { option: "D", answer: "overlooks", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'execrates' used figuratively means to feel or express great loathing for." +
        "<br><br>" +
        "(A) 'appreciates' means to recognize the full worth of." +
        "<br><br>" +
        "(B) 'accepts' means to consent to receive or undertake something offered." +
        "<br><br>" +
        "(D) 'overlooks' means to fail to notice something.",
    chinese_explanation: "(C) '憎恶' 在比喻意义上指感到或表达极大的厌恶。" +
        "<br><br>" +
        "(A) '欣赏' 意味着认知某物的全部价值。" +
        "<br><br>" +
        "(B) '接受' 意味着同意接受或承担提供的某物。" +
        "<br><br>" +
        "(D) '忽视' 意味着未能注意到某物。"
    },
    {
        id: 5,
    question: "Despite the setbacks, he would __________ his teeth and keep pushing forward.",
    chinese_question: "尽管遇到了挫折，他还是会 __________ 牙齿，坚持前进。",
    answers: [
        { option: "A", answer: "gnash", chinese_answer: "咬牙", chinese_romanization: "yǎoyá" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "laugh", chinese_answer: "大笑", chinese_romanization: "dàxiào" },
        { option: "D", answer: "relax", chinese_answer: "放松", chinese_romanization: "fàngsōng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'gnash' means to grind one's teeth together, used figuratively here to show determination in the face of difficulty." +
        "<br><br>" +
        "(B) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'laugh' means to make sounds and movements of the face and body that express amusement or happiness." +
        "<br><br>" +
        "(D) 'relax' means to make or become less tense or anxious.",
    chinese_explanation: "(A) '咬牙' 意味着磨牙，这里是比喻用法，表示在困难面前的决心。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '大笑' 意味着发出表示愉快或幸福的声音和面部和身体的动作。" +
        "<br><br>" +
        "(D) '放松' 意味着变得不那么紧张或焦虑。"
    },
    {
        id: 6,
        question: "The constant notifications on my phone __________ on my ability to focus on my work.",
        chinese_question: "手机上不断的通知 __________ 了我专注工作的能力。",
        answers: [
                { option: "A", answer: "impinge", chinese_answer: "影响", chinese_romanization: "yǐngxiǎng" },
                { option: "B", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "improve", chinese_answer: "改善", chinese_romanization: "gǎishàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'impinge' means to have an effect or impact, especially a negative one." +
                "<br><br>" +
                "(B) 'assist' means to help someone." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'improve' means to make or become better.",
        chinese_explanation: "(A) '影响' 意味着产生影响或作用，尤其是负面的影响。" +
                "<br><br>" +
                "(B) '帮助' 意味着帮助某人。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '改善' 意味着使变得更好或变得更好。"
    },
    {
        id: 7,
        question: "The columnist __________ against the government's handling of the crisis in his latest article.",
        chinese_question: "专栏作家在最新的文章中 __________ 抨击政府对危机的处理。",
        answers: [
                { option: "A", answer: "applauded", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
                { option: "B", answer: "inveighed", chinese_answer: "抨击", chinese_romanization: "pēngjí" },
                { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "endorsed", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'inveighed' means to speak or write about something with great hostility." +
                "<br><br>" +
                "(A) 'applauded' means to show approval or praise by clapping." +
                "<br><br>" +
                "(C) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'endorsed' means to declare one's public approval or support of.",
        chinese_explanation: "(B) '抨击' 意味着以强烈的敌意谈论或写作某事。" +
                "<br><br>" +
                "(A) '赞扬' 意味着通过鼓掌表示认可或赞美。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '支持' 意味着公开表示赞同或支持。"
    },
    {
        id: 8,
    question: "The toxic work environment began to __________ his moral compass, leading him to make unethical decisions.",
    chinese_question: "有毒的工作环境开始 __________ 他的道德准则，导致他做出不道德的决定。",
    answers: [
        { option: "A", answer: "reinforce", chinese_answer: "加强", chinese_romanization: "jiāqiáng" },
        { option: "B", answer: "deprave", chinese_answer: "腐化", chinese_romanization: "fǔhuà" },
        { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "D", answer: "guide", chinese_answer: "指导", chinese_romanization: "zhǐdǎo" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'deprave' used figuratively means to corrupt or damage someone's morals." +
        "<br><br>" +
        "(A) 'reinforce' means to strengthen or support." +
        "<br><br>" +
        "(C) 'support' means to bear all or part of the weight of something." +
        "<br><br>" +
        "(D) 'guide' means to show or indicate the way to someone.",
    chinese_explanation: "(B) '腐化' 在比喻意义上指腐蚀或损害某人的道德观。" +
        "<br><br>" +
        "(A) '加强' 意味着加强或支持。" +
        "<br><br>" +
        "(C) '支持' 意味着支撑某物的全部或部分重量。" +
        "<br><br>" +
        "(D) '指导' 意味着向某人展示或指示方向。"
    },
    {
        id: 9,
        question: "To ensure peace, the tribe decided to __________ some of their lands to the neighboring tribe.",
        chinese_question: "为了确保和平，部落决定 __________ 一些土地给邻近的部落。",
        answers: [
                { option: "A", answer: "cede", chinese_answer: "割让", chinese_romanization: "gēràng" },
                { option: "B", answer: "conquer", chinese_answer: "征服", chinese_romanization: "zhēngfú" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "exploit", chinese_answer: "利用", chinese_romanization: "lìyòng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'cede' means to give up power or territory." +
                "<br><br>" +
                "(B) 'conquer' means to overcome and take control of a place or people by use of military force." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'exploit' means to make full use of and derive benefit from a resource.",
        chinese_explanation: "(A) '割让' 意味着放弃权力或领土。" +
                "<br><br>" +
                "(B) '征服' 意味着通过军事力量克服和控制一个地方或人民。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '利用' 意味着充分利用和从资源中获益。"
    },
    {
        id: 10,
        question: "Their friendship managed to __________ all the challenges and changes over the years.",
        chinese_question: "他们的友谊经受住了多年来的所有挑战和变化。",
        answers: [
            { option: "A", answer: "falter", chinese_answer: "衰退", chinese_romanization: "shuāituì" },
            { option: "B", answer: "dissolve", chinese_answer: "解散", chinese_romanization: "jiěsàn" },
            { option: "C", answer: "outlast", chinese_answer: "持久", chinese_romanization: "chíjiǔ" },
            { option: "D", answer: "weaken", chinese_answer: "削弱", chinese_romanization: "xuēruò" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'outlast' means to endure or last longer than." +
            "<br><br>" +
            "(A) 'falter' means to start to lose strength or momentum." +
            "<br><br>" +
            "(B) 'dissolve' means to close down or dismiss." +
            "<br><br>" +
            "(D) 'weaken' means to make or become weaker.",
        chinese_explanation: "(C) '持久' 意味着比...持续时间更长。" +
            "<br><br>" +
            "(A) '衰退' 意味着开始失去力量或势头。" +
            "<br><br>" +
            "(B) '解散' 意味着关闭或解散。" +
            "<br><br>" +
            "(D) '削弱' 意味着使或变得更弱。"
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
