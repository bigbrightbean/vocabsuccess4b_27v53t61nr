// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The manager tried to __________ the company's losses to the economic downturn.",
        chinese_question: "经理试图将公司的损失 __________ 给经济衰退。",
        answers: [
                { option: "A", answer: "impute", chinese_answer: "归因于", chinese_romanization: "guī yīn yú" },
                { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" },
                { option: "D", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'impute' means to attribute or ascribe something, especially a fault or misconduct, to someone or something." +
                "<br><br>" +
                "(B) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(C) 'praise' means to express warm approval or admiration." +
                "<br><br>" +
                "(D) 'assist' means to help someone.",
        chinese_explanation: "(A) '归因于' 意味着将某事，特别是过错或不当行为，归咎于某人或某物。" +
                "<br><br>" +
                "(B) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(C) '赞美' 意味着表达热烈的赞同或钦佩。" +
                "<br><br>" +
                "(D) '帮助' 意味着帮助某人。"
    },
    {
        id: 2,
    question: "His creativity was __________ by the constant demands of his day job, leaving little time for his art.",
    chinese_question: "他的创造力被日常工作的不断需求 __________，几乎没有时间创作艺术。",
    answers: [
        { option: "A", answer: "enhanced", chinese_answer: "增强", chinese_romanization: "zēngqiáng" },
        { option: "B", answer: "fettered", chinese_answer: "束缚", chinese_romanization: "shùfù" },
        { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "promoted", chinese_answer: "促进", chinese_romanization: "cùjìn" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'fettered' used figuratively means to be held back or restrained by something." +
        "<br><br>" +
        "(A) 'enhanced' means to intensify, increase, or further improve the quality, value, or extent of." +
        "<br><br>" +
        "(C) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'promoted' means to further the progress of something.",
    chinese_explanation: "(B) '束缚' 在比喻意义上指被某事牵制或限制。" +
        "<br><br>" +
        "(A) '增强' 意味着加强、增加或进一步提高质量、价值或范围。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '促进' 意味着推动某事的进展。"
    },
    {
        id: 3,
    question: "Her harsh words __________ his character, leaving him deeply hurt.",
    chinese_question: "她的严厉话语 __________ 了他的性格，使他深受伤害。",
    answers: [
        { option: "A", answer: "excoriated", chinese_answer: "严厉批评", chinese_romanization: "yánlì pīpíng" },
        { option: "B", answer: "protected", chinese_answer: "保护", chinese_romanization: "bǎohù" },
        { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "praised", chinese_answer: "表扬", chinese_romanization: "biǎoyáng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'excoriated' means to criticize severely, used figuratively here." +
        "<br><br>" +
        "(B) 'protected' means to keep safe from harm or injury." +
        "<br><br>" +
        "(C) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'praised' means to express warm approval or admiration.",
    chinese_explanation: "(A) '严厉批评' 意味着严厉批评，这里是比喻用法。" +
        "<br><br>" +
        "(B) '保护' 意味着保护免受伤害。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '表扬' 意味着表达热烈的赞同或钦佩。"
    },
    {
        id: 4,
    question: "The company continued to __________ financially, unable to regain stability after the market crash.",
    chinese_question: "公司继续在财务上 __________，在市场崩溃后无法恢复稳定。",
    answers: [
        { option: "A", answer: "thrive", chinese_answer: "兴旺", chinese_romanization: "xīngwàng" },
        { option: "B", answer: "flounder", chinese_answer: "挣扎", chinese_romanization: "zhēngzhá" },
        { option: "C", answer: "prosper", chinese_answer: "繁荣", chinese_romanization: "fánróng" },
        { option: "D", answer: "grow", chinese_answer: "增长", chinese_romanization: "zēngzhǎng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'flounder' means to struggle or have difficulty." +
        "<br><br>" +
        "(A) 'thrive' means to grow or develop well or vigorously." +
        "<br><br>" +
        "(C) 'prosper' means to succeed in material terms; be financially successful." +
        "<br><br>" +
        "(D) 'grow' means to increase in size, number, or significance.",
    chinese_explanation: "(B) '挣扎' 意味着困难或挣扎。" +
        "<br><br>" +
        "(A) '兴旺' 意味着生长或发展良好或蓬勃发展。" +
        "<br><br>" +
        "(C) '繁荣' 意味着在物质方面成功；在财务上成功。" +
        "<br><br>" +
        "(D) '增长' 意味着在规模、数量或重要性上增加。"
    },
    {
        id: 5,
    question: "The book has managed to __________ a lot of praise from critics.",
    chinese_question: "这本书成功 __________ 了许多评论家的赞誉。",
    answers: [
        { option: "A", answer: "garner", chinese_answer: "获得", chinese_romanization: "huòdé" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "spread", chinese_answer: "传播", chinese_romanization: "chuánbō" },
        { option: "D", answer: "lose", chinese_answer: "失去", chinese_romanization: "shīqù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'garner' means to gather or collect something, especially information or approval." +
        "<br><br>" +
        "(B) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'spread' means to extend over a large or increasing area." +
        "<br><br>" +
        "(D) 'lose' means to be deprived of or cease to have something.",
    chinese_explanation: "(A) '获得' 意味着收集或获取某物，尤其是信息或支持。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '传播' 意味着扩展到一个大或增加的区域。" +
        "<br><br>" +
        "(D) '失去' 意味着被剥夺或不再拥有某物。"
    },
    {
        id: 6,
    question: "The book has managed to __________ a lot of praise from critics.",
    chinese_question: "这本书成功 __________ 了许多评论家的赞誉。",
    answers: [
        { option: "A", answer: "garner", chinese_answer: "获得", chinese_romanization: "huòdé" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "spread", chinese_answer: "传播", chinese_romanization: "chuánbō" },
        { option: "D", answer: "lose", chinese_answer: "失去", chinese_romanization: "shīqù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'garner' means to gather or collect something, especially information or approval." +
        "<br><br>" +
        "(B) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'spread' means to extend over a large or increasing area." +
        "<br><br>" +
        "(D) 'lose' means to be deprived of or cease to have something.",
    chinese_explanation: "(A) '获得' 意味着收集或获取某物，尤其是信息或支持。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '传播' 意味着扩展到一个大或增加的区域。" +
        "<br><br>" +
        "(D) '失去' 意味着被剥夺或不再拥有某物。"
    },
    {
        id: 7,
        question: "The movie was __________ to remove scenes of violence before its release.",
        chinese_question: "电影在上映前被 __________ 以删除暴力场景。",
        answers: [
                { option: "A", answer: "praised", chinese_answer: "赞美", chinese_romanization: "zànměi" },
                { option: "B", answer: "bowdlerized", chinese_answer: "删减", chinese_romanization: "shānjiǎn" },
                { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "celebrated", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'bowdlerized' means to remove material that is considered offensive or inappropriate from a text." +
                "<br><br>" +
                "(A) 'praised' means to express warm approval or admiration." +
                "<br><br>" +
                "(C) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'celebrated' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
        chinese_explanation: "(B) '删减' 意味着从文本中删除被认为有冒犯性或不合适的内容。" +
                "<br><br>" +
                "(A) '赞美' 意味着表达热烈的赞同或钦佩。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '庆祝' 意味着通过社交聚会或愉快的活动来纪念一个重要或快乐的日子或事件。"
    },
    {
        id: 8,
    question: "The scandal could __________ from the politician's achievements and undermine public trust.",
    chinese_question: "丑闻可能会 __________ 政治家的成就，并削弱公众的信任。",
    answers: [
        { option: "A", answer: "detract", chinese_answer: "贬低", chinese_romanization: "bǎndī" },
        { option: "B", answer: "emphasize", chinese_answer: "强调", chinese_romanization: "qiángdiào" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'detract' means to reduce or take away the worth or value of something, used figuratively here." +
        "<br><br>" +
        "(B) 'emphasize' means to give special importance or prominence to something in speaking or writing." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
    chinese_explanation: "(A) '贬低' 意味着减少或降低某物的价值或价值，这里是比喻用法。" +
        "<br><br>" +
        "(B) '强调' 意味着在说话或写作时特别重要或突出某事。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。"
    },
    {
        id: 9,
    question: "He tried to __________ his professional life from his personal life to maintain a work-life balance.",
    chinese_question: "他试图将自己的职业生活与个人生活 __________ 开来，以保持工作与生活的平衡。",
    answers: [
        { option: "A", answer: "combine", chinese_answer: "结合", chinese_romanization: "jiéhé" },
        { option: "B", answer: "dissociate", chinese_answer: "脱离", chinese_romanization: "tuōlí" },
        { option: "C", answer: "merge", chinese_answer: "合并", chinese_romanization: "hébìng" },
        { option: "D", answer: "blend", chinese_answer: "混合", chinese_romanization: "hùnhé" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'dissociate' means to separate oneself from a group or activity." +
        "<br><br>" +
        "(A) 'combine' means to unite or merge with something else." +
        "<br><br>" +
        "(C) 'merge' means to combine or cause to combine to form a single entity." +
        "<br><br>" +
        "(D) 'blend' means to mix together different elements.",
    chinese_explanation: "(B) '脱离' 意味着将自己与某个团体或活动分离。" +
        "<br><br>" +
        "(A) '结合' 意味着与某物结合或融合。" +
        "<br><br>" +
        "(C) '合并' 意味着结合或使结合形成一个实体。" +
        "<br><br>" +
        "(D) '混合' 意味着混合不同的元素。"
    },
    {
        id: 10,
    question: "She felt __________ by societal norms, unable to express her true self.",
    chinese_question: "她感到被社会规范所 __________，无法表达真正的自我。",
    answers: [
        { option: "A", answer: "liberated", chinese_answer: "解放", chinese_romanization: "jiěfàng" },
        { option: "B", answer: "enfettered", chinese_answer: "束缚", chinese_romanization: "shùfù" },
        { option: "C", answer: "encouraged", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
        { option: "D", answer: "celebrated", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'enfettered' used figuratively means to be held back or restrained by something." +
        "<br><br>" +
        "(A) 'liberated' means to set someone free from a situation." +
        "<br><br>" +
        "(C) 'encouraged' means to give support, confidence, or hope to someone." +
        "<br><br>" +
        "(D) 'celebrated' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
    chinese_explanation: "(B) '束缚' 在比喻意义上指被某事牵制或限制。" +
        "<br><br>" +
        "(A) '解放' 意味着使某人从某种情况下解脱出来。" +
        "<br><br>" +
        "(C) '鼓励' 意味着给予某人支持、信心或希望。" +
        "<br><br>" +
        "(D) '庆祝' 意味着通过社交聚会或愉快的活动来纪念重要或快乐的一天或事件。"
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
