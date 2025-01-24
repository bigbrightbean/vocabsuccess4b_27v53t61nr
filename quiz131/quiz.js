// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "To preserve the flowers, she decided to __________ them and use them in her artwork.",
    chinese_question: "为了保存这些花，她决定将它们 __________ 并在她的艺术作品中使用。",
    answers: [
        { option: "A", answer: "water", chinese_answer: "浇水", chinese_romanization: "jiāoshuǐ" },
        { option: "B", answer: "desiccate", chinese_answer: "干燥", chinese_romanization: "gānzào" },
        { option: "C", answer: "grow", chinese_answer: "种植", chinese_romanization: "zhòngzhí" },
        { option: "D", answer: "plant", chinese_answer: "栽种", chinese_romanization: "zāizhòng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'desiccate' means to remove the moisture from something, typically in order to preserve it." +
        "<br><br>" +
        "(A) 'water' means to pour or sprinkle water over." +
        "<br><br>" +
        "(C) 'grow' means to undergo natural development by increasing in size." +
        "<br><br>" +
        "(D) 'plant' means to put a seed, bulb, or plant in the ground so that it can grow.",
    chinese_explanation: "(B) '干燥' 意味着除去某物的水分，通常是为了保存它。" +
        "<br><br>" +
        "(A) '浇水' 意味着倒水或洒水。" +
        "<br><br>" +
        "(C) '种植' 意味着通过增加大小进行自然发展。" +
        "<br><br>" +
        "(D) '栽种' 意味着将种子、球茎或植物放入土壤中，使其生长。"
    },
    {
        id: 2,
        question: "To combat the spread of the disease, officials __________ the sale of contaminated food.",
        chinese_question: "为了遏制疾病的传播，官员们 __________ 了受污染食品的销售。",
        answers: [
                { option: "A", answer: "promoted", chinese_answer: "促进", chinese_romanization: "cùjìn" },
                { option: "B", answer: "interdict", chinese_answer: "禁止", chinese_romanization: "jìnzhǐ" },
                { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "D", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'interdict' means to prohibit or forbid something officially." +
                "<br><br>" +
                "(A) 'promote' means to advance or raise to a higher position or rank." +
                "<br><br>" +
                "(C) 'support' means to bear all or part of the weight of something." +
                "<br><br>" +
                "(D) 'neglect' means to fail to care for properly.",
        chinese_explanation: "(B) '禁止' 意味着官方禁止或禁止某事。" +
                "<br><br>" +
                "(A) '促进' 意味着晋升到更高的位置或级别。" +
                "<br><br>" +
                "(C) '支持' 意味着支撑某物的全部或部分重量。" +
                "<br><br>" +
                "(D) '忽视' 意味着未能妥善照顾。"
    },
    {
        id: 3,
        question: "The innovative technology was __________ as a game-changer in the industry.",
        chinese_question: "这项创新技术被 __________ 为行业的变革者。",
        answers: [
                { option: "A", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "B", answer: "dismissed", chinese_answer: "解雇", chinese_romanization: "jiěgù" },
                { option: "C", answer: "hailed", chinese_answer: "欢呼", chinese_romanization: "huānhū" },
                { option: "D", answer: "doubted", chinese_answer: "怀疑", chinese_romanization: "huáiyí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'hailed' means to acclaim enthusiastically." +
                "<br><br>" +
                "(A) 'ignored' means to refuse to take notice of or acknowledge; disregard intentionally." +
                "<br><br>" +
                "(B) 'dismissed' means to order or allow someone to leave." +
                "<br><br>" +
                "(D) 'doubted' means to feel uncertain about.",
        chinese_explanation: "(C) '欢呼' 意味着热情地欢呼。" +
                "<br><br>" +
                "(A) '忽视' 意味着拒绝注意或承认；有意无视。" +
                "<br><br>" +
                "(B) '解雇' 意味着命令或允许某人离开。" +
                "<br><br>" +
                "(D) '怀疑' 意味着感到不确定。"
    },
    {
        id: 4,
    question: "His unexplained absences from work __________ deeper personal issues.",
    chinese_question: "他无故缺勤 __________ 更深层的个人问题。",
    answers: [
        { option: "A", answer: "concealed", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
        { option: "B", answer: "foreshadowed", chinese_answer: "预示", chinese_romanization: "yùshì" },
        { option: "C", answer: "resolved", chinese_answer: "解决", chinese_romanization: "jiějué" },
        { option: "D", answer: "alleviated", chinese_answer: "缓解", chinese_romanization: "huǎnjiě" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'foreshadowed' used figuratively means to indicate or hint at a future event." +
        "<br><br>" +
        "(A) 'concealed' means to hide or keep something secret." +
        "<br><br>" +
        "(C) 'resolved' means to settle or find a solution to a problem." +
        "<br><br>" +
        "(D) 'alleviated' means to make less severe.",
    chinese_explanation: "(B) '预示' 在比喻意义上指暗示或预示未来的事件。" +
        "<br><br>" +
        "(A) '隐藏' 意味着隐藏或保守秘密。" +
        "<br><br>" +
        "(C) '解决' 意味着解决或找到问题的解决方案。" +
        "<br><br>" +
        "(D) '缓解' 意味着使不那么严重。"
    },
    {
        id: 5,
        question: "The scientist's groundbreaking research helped to __________ hope for a cure.",
        chinese_question: "科学家的开创性研究帮助 __________ 了治愈的希望。",
        answers: [
                { option: "A", answer: "revive", chinese_answer: "恢复", chinese_romanization: "huīfù" },
                { option: "B", answer: "eradicate", chinese_answer: "根除", chinese_romanization: "gēnchú" },
                { option: "C", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
                { option: "D", answer: "hinder", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'revive' means to restore to life or consciousness." +
                "<br><br>" +
                "(B) 'eradicate' means to destroy completely; put an end to." +
                "<br><br>" +
                "(C) 'conceal' means to keep from sight; hide." +
                "<br><br>" +
                "(D) 'hinder' means to create difficulties for someone or something, resulting in delay or obstruction.",
        chinese_explanation: "(A) '恢复' 意味着恢复生机或意识。" +
                "<br><br>" +
                "(B) '根除' 意味着彻底摧毁；结束。" +
                "<br><br>" +
                "(C) '隐藏' 意味着不让被看到；隐藏。" +
                "<br><br>" +
                "(D) '阻碍' 意味着为某人或某事制造困难，导致延迟或阻碍。"
    },
    {
        id: 6,
    question: "They managed to __________ the company from the outdated practices that were holding back progress.",
    chinese_question: "他们设法将公司从阻碍进步的过时做法中 __________ 出来。",
    answers: [
        { option: "A", answer: "extricate", chinese_answer: "摆脱", chinese_romanization: "bǎituō" },
        { option: "B", answer: "integrate", chinese_answer: "整合", chinese_romanization: "zhěnghé" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "sustain", chinese_answer: "支持", chinese_romanization: "zhīchí" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'extricate' means to free someone or something from a constraint or difficulty, used figuratively here." +
        "<br><br>" +
        "(B) 'integrate' means to combine one thing with another so that they become a whole." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'sustain' means to support physically or mentally.",
    chinese_explanation: "(A) '摆脱' 意味着从约束或困难中解放某人或某物，这里是比喻用法。" +
        "<br><br>" +
        "(B) '整合' 意味着将一个事物与另一个事物结合使其成为一个整体。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '支持' 意味着在物质或精神上支持。"
    },
    {
        id: 7,
    question: "The sudden shift in company policy seemed to __________ the employees, who were used to a stable environment.",
    chinese_question: "公司政策的突然变化让习惯于稳定环境的员工感到 __________。",
    answers: [
        { option: "A", answer: "stabilize", chinese_answer: "稳定", chinese_romanization: "wěndìng" },
        { option: "B", answer: "disconcert", chinese_answer: "使不安", chinese_romanization: "shǐ bù'ān" },
        { option: "C", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
        { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'disconcert' used figuratively means to unsettle or disturb the composure of someone." +
        "<br><br>" +
        "(A) 'stabilize' means to make or become unlikely to change, fail, or decline." +
        "<br><br>" +
        "(C) 'encourage' means to give support, confidence, or hope to someone." +
        "<br><br>" +
        "(D) 'support' means to bear all or part of the weight of something.",
    chinese_explanation: "(B) '使不安' 在比喻意义上指使某人感到不安或扰乱某人的镇定。" +
        "<br><br>" +
        "(A) '稳定' 意味着使变得不太可能改变、失败或下降。" +
        "<br><br>" +
        "(C) '鼓励' 意味着给予某人支持、信心或希望。" +
        "<br><br>" +
        "(D) '支持' 意味着支撑某物的全部或部分重量。"
    },
    {
        id: 8,
        question: "Without new experiences and challenges, a person's thinking can __________, leading to a narrow mindset.",
        chinese_question: "没有新的经历和挑战，一个人的思维会 __________ ，导致心态狭隘。",
        answers: [
                { option: "A", answer: "broaden", chinese_answer: "拓宽", chinese_romanization: "tuòkuān" },
                { option: "B", answer: "ossify", chinese_answer: "僵化", chinese_romanization: "jiānghuà" },
                { option: "C", answer: "diversify", chinese_answer: "多样化", chinese_romanization: "duōyànghuà" },
                { option: "D", answer: "inspire", chinese_answer: "激发", chinese_romanization: "jīfā" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'ossify' means to become rigid or inflexible in habits or attitudes." +
                "<br><br>" +
                "(A) 'broaden' means to expand in scope." +
                "<br><br>" +
                "(C) 'diversify' means to make or become more diverse." +
                "<br><br>" +
                "(D) 'inspire' means to fill someone with the urge or ability to do something.",
        chinese_explanation: "(B) '僵化' 意味着在习惯或态度上变得僵硬或不灵活。" +
                "<br><br>" +
                "(A) '拓宽' 意味着扩大范围。" +
                "<br><br>" +
                "(C) '多样化' 意味着使某物变得更加多样化。" +
                "<br><br>" +
                "(D) '激发' 意味着激发某人做某事的冲动或能力。"
    },
    {
        id: 9,
        question: "The financial crisis of 2008 __________ the vulnerabilities in the global banking system.",
        chinese_question: "2008年的金融危机 __________ 了全球银行系统的脆弱性。",
        answers: [
                { option: "A", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "B", answer: "underscored", chinese_answer: "强调", chinese_romanization: "qiángdiào" },
                { option: "C", answer: "minimized", chinese_answer: "最小化", chinese_romanization: "zuìxiǎo huà" },
                { option: "D", answer: "hid", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'underscored' means to emphasize or highlight the importance of something." +
                "<br><br>" +
                "(A) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(C) 'minimized' means to reduce to the smallest possible amount or degree." +
                "<br><br>" +
                "(D) 'hid' means to put or keep out of sight; conceal.",
        chinese_explanation: "(B) '强调'一词意味着强调或突出某事的重要性。" +
                "<br><br>" +
                "(A) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(C) '最小化' 意味着减少到最小可能的数量或程度。" +
                "<br><br>" +
                "(D) '隐藏' 意味着放置或保持在视线之外；隐藏。"
    },
    {
        id: 10,
    question: "The prolonged conflict __________ the nation, leaving its people weary and disheartened.",
    chinese_question: "长期的冲突 __________ 了这个国家，使人民疲惫不堪且心灰意冷。",
    answers: [
        { option: "A", answer: "energized", chinese_answer: "使振奋", chinese_romanization: "shǐ zhènfèn" },
        { option: "B", answer: "enervated", chinese_answer: "使衰弱", chinese_romanization: "shǐ shuāiruò" },
        { option: "C", answer: "uplifted", chinese_answer: "提升", chinese_romanization: "tíshēng" },
        { option: "D", answer: "fortified", chinese_answer: "强化", chinese_romanization: "qiánghuà" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'enervated' used figuratively means to weaken or drain the energy or spirit." +
        "<br><br>" +
        "(A) 'energized' means to give energy or enthusiasm." +
        "<br><br>" +
        "(C) 'uplifted' means to raise the level of; improve." +
        "<br><br>" +
        "(D) 'fortified' means to strengthen or support.",
    chinese_explanation: "(B) '使衰弱' 在比喻意义上指削弱或耗尽能量或精神。" +
        "<br><br>" +
        "(A) '使振奋' 意味着给予能量或热情。" +
        "<br><br>" +
        "(C) '提升' 意味着提高水平；改善。" +
        "<br><br>" +
        "(D) '强化' 意味着加强或支持。"
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
