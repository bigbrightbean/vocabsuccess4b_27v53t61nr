// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "She would __________ on gossip, always eager to hear the latest rumors.",
    chinese_question: "她总是急切地听到最新的传闻， __________ 八卦。",
    answers: [
        { option: "A", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
        { option: "B", answer: "gormandize", chinese_answer: "狼吞虎咽", chinese_romanization: "lángtūnhǔyàn" },
        { option: "C", answer: "discredit", chinese_answer: "诋毁", chinese_romanization: "dǐhuǐ" },
        { option: "D", answer: "question", chinese_answer: "质疑", chinese_romanization: "zhíyí" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'gormandize' used figuratively means to consume something greedily or ravenously." +
        "<br><br>" +
        "(A) 'avoid' means to keep away from or stop oneself from doing something." +
        "<br><br>" +
        "(C) 'discredit' means to harm the good reputation of someone or something." +
        "<br><br>" +
        "(D) 'question' means to ask someone questions, especially in an official context.",
    chinese_explanation: "(B) '狼吞虎咽' 在比喻意义上指贪婪或狼吞虎咽地消耗某物。" +
        "<br><br>" +
        "(A) '避免' 意味着避开或阻止自己做某事。" +
        "<br><br>" +
        "(C) '诋毁' 意味着损害某人或某物的好名声。" +
        "<br><br>" +
        "(D) '质疑' 意味着询问某人问题，特别是在正式情况下。"
    },
    {
        id: 2,
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
        id: 3,
        question: "The lawyer's argument aimed to __________ the defendant for the mishap.",
        chinese_question: "律师的辩论旨在 __________ 被告对这次事故负责。",
        answers: [
                { option: "A", answer: "inculpate", chinese_answer: "归罪", chinese_romanization: "guīzuì" },
                { option: "B", answer: "exonerate", chinese_answer: "免罪", chinese_romanization: "miǎnzuì" },
                { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'inculpate' means to accuse or blame someone." +
                "<br><br>" +
                "(B) 'exonerate' means to clear someone from blame or fault." +
                "<br><br>" +
                "(C) 'support' means to give assistance to." +
                "<br><br>" +
                "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(A) '归罪' 意味着指责或归咎于某人。" +
                "<br><br>" +
                "(B) '免罪' 意味着使某人免于责备或罪责。" +
                "<br><br>" +
                "(C) '支持' 意味着给予帮助。" +
                "<br><br>" +
                "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 4,
    question: "The board of directors decided to __________ any proposals that did not align with the company's core values.",
    chinese_question: "董事会决定 __________ 任何与公司核心价值观不一致的提议。",
    answers: [
        { option: "A", answer: "accept", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
        { option: "B", answer: "discountenance", chinese_answer: "反对", chinese_romanization: "fǎnduì" },
        { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "D", answer: "consider", chinese_answer: "考虑", chinese_romanization: "kǎolǜ" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'discountenance' used figuratively means to disapprove of or discourage something." +
        "<br><br>" +
        "(A) 'accept' means to consent to receive or undertake something offered." +
        "<br><br>" +
        "(C) 'support' means to bear all or part of the weight of something." +
        "<br><br>" +
        "(D) 'consider' means to think carefully about something.",
    chinese_explanation: "(B) '反对' 在比喻意义上指不赞成或阻止某事。" +
        "<br><br>" +
        "(A) '接受' 意味着同意接受或承担提供的某事。" +
        "<br><br>" +
        "(C) '支持' 意味着支撑某物的全部或部分重量。" +
        "<br><br>" +
        "(D) '考虑' 意味着认真考虑某事。"
    },
    {
        id: 5,
    question: "The peace treaty __________ both sides to lay down their arms and negotiate.",
    chinese_question: "和平条约 __________ 双方放下武器，进行谈判。",
    answers: [
        { option: "A", answer: "entreated", chinese_answer: "恳求", chinese_romanization: "kěnqiú" },
        { option: "B", answer: "encouraged", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
        { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "dismissed", chinese_answer: "不理会", chinese_romanization: "bù lǐhuì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'entreated' means to ask someone earnestly or anxiously to do something, used figuratively here." +
        "<br><br>" +
        "(B) 'encouraged' means to give support, confidence, or hope to someone." +
        "<br><br>" +
        "(C) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'dismissed' means to treat as unworthy of serious consideration.",
    chinese_explanation: "(A) '恳求' 意味着诚恳或焦急地请求某人做某事，这里是比喻用法。" +
        "<br><br>" +
        "(B) '鼓励' 意味着给予支持、信心或希望。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '不理会' 意味着认为不值得认真考虑。"
    },
    {
        id: 6,
        question: "The rumour mill continued to __________ her character despite her many accomplishments.",
        chinese_question: "尽管她有很多成就，谣言仍然不断地 __________ 她的品格。",
        answers: [
                { option: "A", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "B", answer: "calumniate", chinese_answer: "诽谤", chinese_romanization: "fěibàng" },
                { option: "C", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" },
                { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'calumniate' means to make false and defamatory statements about someone." +
                "<br><br>" +
                "(A) 'support' means to bear all or part of the weight; hold up." +
                "<br><br>" +
                "(C) 'praise' means to express warm approval or admiration." +
                "<br><br>" +
                "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(B) '诽谤' 意味着对某人做出虚假和诽谤性的陈述。" +
                "<br><br>" +
                "(A) '支持' 意味着承受全部或部分重量；支撑。" +
                "<br><br>" +
                "(C) '赞美' 意味着表达热烈的赞同或钦佩。" +
                "<br><br>" +
                "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 7,
    question: "She began to __________ in her new role, unsure of how to handle the responsibilities.",
    chinese_question: "她在新角色中开始 __________，不确定如何处理这些责任。",
    answers: [
        { option: "A", answer: "excel", chinese_answer: "擅长", chinese_romanization: "shàncháng" },
        { option: "B", answer: "flounder", chinese_answer: "挣扎", chinese_romanization: "zhēngzhá" },
        { option: "C", answer: "succeed", chinese_answer: "成功", chinese_romanization: "chénggōng" },
        { option: "D", answer: "manage", chinese_answer: "管理", chinese_romanization: "guǎnlǐ" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'flounder' means to struggle or have difficulty." +
        "<br><br>" +
        "(A) 'excel' means to be exceptionally good at or proficient in an activity or subject." +
        "<br><br>" +
        "(C) 'succeed' means to achieve the desired aim or result." +
        "<br><br>" +
        "(D) 'manage' means to be in charge of, to run, or to oversee.",
    chinese_explanation: "(B) '挣扎' 意味着困难或挣扎。" +
        "<br><br>" +
        "(A) '擅长' 意味着在某一活动或学科上非常出色或熟练。" +
        "<br><br>" +
        "(C) '成功' 意味着实现预期的目标或结果。" +
        "<br><br>" +
        "(D) '管理' 意味着负责、经营或监督。"
    },
    {
        id: 8,
    question: "The constant barrage of advertisements can __________ consumers.",
    chinese_question: "不断轰炸的广告会让消费者感到 __________ 。",
    answers: [
        { option: "A", answer: "fuddle", chinese_answer: "困惑", chinese_romanization: "kùnhuò" },
        { option: "B", answer: "engage", chinese_answer: "吸引", chinese_romanization: "xīyǐn" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "delight", chinese_answer: "高兴", chinese_romanization: "gāoxìng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'fuddle' means to confuse or stupefy someone, used figuratively here." +
        "<br><br>" +
        "(B) 'engage' means to attract or involve someone's interest or attention." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'delight' means to cause someone to feel very happy or pleased.",
    chinese_explanation: "(A) '困惑' 意味着使某人迷惑或发呆，这里是比喻用法。" +
        "<br><br>" +
        "(B) '吸引' 意味着吸引或吸引某人的兴趣或注意力。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '高兴' 意味着让某人感到非常高兴或满意。"
    },
    {
        id: 9,
    question: "He had to __________ with his own fears before making the speech.",
    chinese_question: "在演讲之前，他不得不 __________ 自己的恐惧。",
    answers: [
        { option: "A", answer: "grapple", chinese_answer: "努力应对", chinese_romanization: "nǔlì yìngduì" },
        { option: "B", answer: "enjoy", chinese_answer: "享受", chinese_romanization: "xiǎngshòu" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'grapple' means to struggle or work hard to deal with or overcome something, used figuratively here." +
        "<br><br>" +
        "(B) 'enjoy' means to take delight or pleasure in something." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'simplify' means to make something simpler or easier to do or understand.",
    chinese_explanation: "(A) '努力应对' 意味着努力处理或克服某事，这里是比喻用法。" +
        "<br><br>" +
        "(B) '享受' 意味着对某事感到高兴或愉快。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '简化' 意味着使某事变得更简单或更容易做或理解。"
    },
    {
        id: 10,
    question: "The scandal forced the politician to __________ his façade of integrity.",
    chinese_question: "丑闻迫使政治家 __________ 他正直的表象。",
    answers: [
        { option: "A", answer: "disrobe", chinese_answer: "脱去", chinese_romanization: "tuōqù" },
        { option: "B", answer: "maintain", chinese_answer: "维持", chinese_romanization: "wéichí" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'disrobe' means to remove one's clothes, used figuratively to mean uncovering or exposing something hidden." +
        "<br><br>" +
        "(B) 'maintain' means to keep in an existing state." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
    chinese_explanation: "(A) '脱去' 意味着脱掉衣服，比喻用法指揭示或暴露隐藏的东西。" +
        "<br><br>" +
        "(B) '维持' 意味着保持现有状态。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。"
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
