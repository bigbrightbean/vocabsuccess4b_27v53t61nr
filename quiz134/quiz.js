// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The activist __________ against social injustice during the rally, drawing a large crowd.",
    chinese_question: "在集会上，这位活动家对社会不公 __________，吸引了大量人群。",
    answers: [
        { option: "A", answer: "whispered", chinese_answer: "低声说", chinese_romanization: "dīshēng shuō" },
        { option: "B", answer: "fulminated", chinese_answer: "强烈抗议", chinese_romanization: "qiángliè kàngyì" },
        { option: "C", answer: "murmured", chinese_answer: "喃喃", chinese_romanization: "nánnán" },
        { option: "D", answer: "laughed", chinese_answer: "笑", chinese_romanization: "xiào" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'fulminated' used figuratively means to express vehement protest or to speak out angrily and passionately." +
        "<br><br>" +
        "(A) 'whispered' means to speak very softly using one's breath without one's vocal cords, especially for the sake of secrecy." +
        "<br><br>" +
        "(C) 'murmured' means to say something in a low, soft, or indistinct voice." +
        "<br><br>" +
        "(D) 'laughed' means to make the spontaneous sounds and movements of the face and body that are the instinctive expressions of lively amusement.",
    chinese_explanation: "(B) '强烈抗议' 在比喻意义上指强烈抗议或愤怒和热情地发声。" +
        "<br><br>" +
        "(A) '低声说' 意味着用气音非常轻声地说话，尤其是为了保密。" +
        "<br><br>" +
        "(C) '喃喃' 意味着用低沉、柔和或模糊的声音说话。" +
        "<br><br>" +
        "(D) '笑' 意味着做出自发的声音和面部和身体的动作，这些是生动娱乐的本能表达。"
    },
    {
        id: 2,
    question: "In the heat of the moment, she __________ a reason to leave the party early.",
    chinese_question: "在激动的时刻，她 __________ 一个提前离开聚会的理由。",
    answers: [
        { option: "A", answer: "fabricated", chinese_answer: "编造", chinese_romanization: "biānzào" },
        { option: "B", answer: "celebrated", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
        { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "clarified", chinese_answer: "澄清", chinese_romanization: "chéngqīng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'fabricated' means to invent or concoct something, typically with deceitful intent, used figuratively here." +
        "<br><br>" +
        "(B) 'celebrated' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
        "<br><br>" +
        "(C) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'clarified' means to make a statement or situation less confused and more comprehensible.",
    chinese_explanation: "(A) '编造' 意味着发明或编造某物，通常是出于欺骗目的，这里是比喻用法。" +
        "<br><br>" +
        "(B) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '澄清' 意味着使陈述或情况不那么混乱和更易理解。"
    },
    {
        id: 3,
        question: "The artist began to __________ under the constraints of the commission, longing for creative freedom.",
        chinese_question: "艺术家在委托的限制下开始感到 __________，渴望创作自由。",
        answers: [
                { option: "A", answer: "thrive", chinese_answer: "茁壮成长", chinese_romanization: "zhuózhuàng chéngzhǎng" },
                { option: "B", answer: "chafe", chinese_answer: "感到烦恼", chinese_romanization: "gǎndào fánnǎo" },
                { option: "C", answer: "enjoy", chinese_answer: "享受", chinese_romanization: "xiǎngshòu" },
                { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'chafe' means to feel irritation or impatience under restrictive conditions." +
                "<br><br>" +
                "(A) 'thrive' means to grow or develop well." +
                "<br><br>" +
                "(C) 'enjoy' means to take delight or pleasure in something." +
                "<br><br>" +
                "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(B) '感到烦恼' 意味着在限制性条件下感到烦恼或不耐烦。" +
                "<br><br>" +
                "(A) '茁壮成长' 意味着生长或发展得很好。" +
                "<br><br>" +
                "(C) '享受' 意味着从某事中获得乐趣或快乐。" +
                "<br><br>" +
                "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 4,
        question: "The once dynamic team began to __________ under the new, rigid management style.",
        chinese_question: "曾经充满活力的团队在新的、严格的管理风格下开始 __________ 。",
        answers: [
                { option: "A", answer: "calcify", chinese_answer: "僵化", chinese_romanization: "jiānghuà" },
                { option: "B", answer: "flourish", chinese_answer: "繁荣", chinese_romanization: "fánróng" },
                { option: "C", answer: "diversify", chinese_answer: "多样化", chinese_romanization: "duōyàng huà" },
                { option: "D", answer: "innovate", chinese_answer: "创新", chinese_romanization: "chuàngxīn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'calcify' means to become rigid or fixed, often used figuratively to describe processes that become inflexible." +
                "<br><br>" +
                "(B) 'flourish' means to grow or develop in a healthy or vigorous way." +
                "<br><br>" +
                "(C) 'diversify' means to make or become more varied." +
                "<br><br>" +
                "(D) 'innovate' means to make changes in something established, especially by introducing new methods, ideas, or products.",
        chinese_explanation: "(A) '僵化' 意味着变得僵硬或固定，通常用于形容变得不灵活的过程。" +
                "<br><br>" +
                "(B) '繁荣' 意味着以健康或有力的方式成长或发展。" +
                "<br><br>" +
                "(C) '多样化' 意味着使变得更加多样。" +
                "<br><br>" +
                "(D) '创新' 意味着在现有事物中引入新的方法、理念或产品。"
    },
    {
        id: 5,
        question: "Instead of trying to understand her point of view, he chose to __________ her in front of their friends.",
        chinese_question: "他没有试图理解她的观点，而是选择在他们的朋友面前 __________ 她。",
        answers: [
                { option: "A", answer: "admire", chinese_answer: "钦佩", chinese_romanization: "qīnpèi" },
                { option: "B", answer: "vilify", chinese_answer: "诋毁", chinese_romanization: "dǐhuǐ" },
                { option: "C", answer: "respect", chinese_answer: "尊重", chinese_romanization: "zūnjìng" },
                { option: "D", answer: "uphold", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'vilify' means to speak or write about in an abusively disparaging manner." +
                "<br><br>" +
                "(A) 'admire' means to regard with respect or warm approval." +
                "<br><br>" +
                "(C) 'respect' means to admire deeply, as a result of their abilities, qualities, or achievements." +
                "<br><br>" +
                "(D) 'uphold' means to support or maintain.",
        chinese_explanation: "(B) '诋毁' 意味着以辱骂性的贬低方式谈论或写作。" +
                "<br><br>" +
                "(A) '钦佩' 意味着以尊重或热情的赞同对待。" +
                "<br><br>" +
                "(C) '尊重' 意味着深深钦佩某人的能力、品质或成就。" +
                "<br><br>" +
                "(D) '支持' 意味着承担某物的全部或部分重量。"
    },
    {
        id: 6,
        question: "The artist began to __________ under the constraints of the commission, longing for creative freedom.",
        chinese_question: "艺术家在委托的限制下开始感到 __________，渴望创作自由。",
        answers: [
                { option: "A", answer: "thrive", chinese_answer: "茁壮成长", chinese_romanization: "zhuózhuàng chéngzhǎng" },
                { option: "B", answer: "chafe", chinese_answer: "感到烦恼", chinese_romanization: "gǎndào fánnǎo" },
                { option: "C", answer: "enjoy", chinese_answer: "享受", chinese_romanization: "xiǎngshòu" },
                { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'chafe' means to feel irritation or impatience under restrictive conditions." +
                "<br><br>" +
                "(A) 'thrive' means to grow or develop well." +
                "<br><br>" +
                "(C) 'enjoy' means to take delight or pleasure in something." +
                "<br><br>" +
                "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(B) '感到烦恼' 意味着在限制性条件下感到烦恼或不耐烦。" +
                "<br><br>" +
                "(A) '茁壮成长' 意味着生长或发展得很好。" +
                "<br><br>" +
                "(C) '享受' 意味着从某事中获得乐趣或快乐。" +
                "<br><br>" +
                "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 7,
    question: "He had a tendency to __________ the traditions of the old world, viewing them as outdated and irrelevant.",
    chinese_question: "他倾向于 __________ 旧世界的传统，认为它们过时且无关紧要。",
    answers: [
        { option: "A", answer: "follow", chinese_answer: "遵循", chinese_romanization: "zūnxún" },
        { option: "B", answer: "contemn", chinese_answer: "蔑视", chinese_romanization: "mièshì" },
        { option: "C", answer: "appreciate", chinese_answer: "感激", chinese_romanization: "gǎnjī" },
        { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'contemn' means to treat or regard with contempt." +
        "<br><br>" +
        "(A) 'follow' means to go or come after a person or thing." +
        "<br><br>" +
        "(C) 'appreciate' means to recognize the full worth of something." +
        "<br><br>" +
        "(D) 'ignore' means to refuse to take notice of or acknowledge.",
    chinese_explanation: "(B) '蔑视' 意味着以轻蔑的态度对待或看待。" +
        "<br><br>" +
        "(A) '遵循' 意味着跟随某人或某物。" +
        "<br><br>" +
        "(C) '感激' 意味着认识到某物的全部价值。" +
        "<br><br>" +
        "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 8,
        question: "An excess of luxury can __________ a person's appreciation for simple pleasures.",
        chinese_question: "过多的奢侈品会 __________ 一个人对简单乐趣的欣赏。",
        answers: [
            { option: "A", answer: "enhance", chinese_answer: "增强", chinese_romanization: "zēngqiáng" },
            { option: "B", answer: "spoil", chinese_answer: "破坏", chinese_romanization: "pòhuài" },
            { option: "C", answer: "improve", chinese_answer: "改善", chinese_romanization: "gǎishàn" },
            { option: "D", answer: "deepen", chinese_answer: "加深", chinese_romanization: "jiāshēn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'spoil' means to diminish or destroy the value or quality of something." +
            "<br><br>" +
            "(A) 'enhance' means to intensify, increase, or further improve the quality, value, or extent of something." +
            "<br><br>" +
            "(C) 'improve' means to make or become better." +
            "<br><br>" +
            "(D) 'deepen' means to make or become deep or deeper.",
        chinese_explanation: "(B) '破坏' 意味着减少或破坏某物的价值或质量。" +
            "<br><br>" +
            "(A) '增强' 意味着增强、增加或进一步提高某物的质量、价值或程度。" +
            "<br><br>" +
            "(C) '改善' 意味着使或变得更好。" +
            "<br><br>" +
            "(D) '加深' 意味着使或变得深或更深。"
    },
    {
        id: 9,
    question: "The new regulations seemed to __________ the employees, limiting their creativity and flexibility.",
    chinese_question: "新规定似乎 __________ 了员工，限制了他们的创造力和灵活性。",
    answers: [
        { option: "A", answer: "liberate", chinese_answer: "解放", chinese_romanization: "jiěfàng" },
        { option: "B", answer: "enfetter", chinese_answer: "束缚", chinese_romanization: "shùfù" },
        { option: "C", answer: "inspire", chinese_answer: "启发", chinese_romanization: "qǐfā" },
        { option: "D", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'enfetter' means to restrain or restrict someone in a way that limits their freedom." +
        "<br><br>" +
        "(A) 'liberate' means to set someone free from a situation." +
        "<br><br>" +
        "(C) 'inspire' means to fill someone with the urge or ability to do or feel something." +
        "<br><br>" +
        "(D) 'encourage' means to give support, confidence, or hope to someone.",
    chinese_explanation: "(B) '束缚' 意味着以限制某人自由的方式约束或限制某人。" +
        "<br><br>" +
        "(A) '解放' 意味着使某人从某种情况下解脱出来。" +
        "<br><br>" +
        "(C) '启发' 意味着使某人有做某事的冲动或能力。" +
        "<br><br>" +
        "(D) '鼓励' 意味着给予某人支持、信心或希望。"
    },
    {
        id: 10,
        question: "In times of crisis, it's important to __________ to your family and support one another.",
        chinese_question: "在危机时刻，坚持团结并互相支持非常重要。",
        answers: [
                { option: "A", answer: "cleave", chinese_answer: "坚守", chinese_romanization: "jiānshǒu" },
                { option: "B", answer: "separate", chinese_answer: "分离", chinese_romanization: "fēnlí" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "weaken", chinese_answer: "削弱", chinese_romanization: "xiāoruò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'cleave' means to adhere strongly to a particular pursuit or belief, or to stick closely to something." +
                "<br><br>" +
                "(B) 'separate' means to cause to move or be apart." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'weaken' means to make or become less strong.",
        chinese_explanation: "(A) '坚守' 意味着坚决追求或信奉某个信念，或紧密依附于某物。" +
                "<br><br>" +
                "(B) '分离' 意味着使某物移动或分开。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '削弱' 意味着使某物变得不那么强。"
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
