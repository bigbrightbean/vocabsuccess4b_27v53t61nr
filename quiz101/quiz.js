// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The ex-smoker had to constantly remind himself to __________ cigarettes.",
    chinese_question: "这位戒烟者必须时刻提醒自己 __________ 香烟。",
    answers: [
        { option: "A", answer: "forswear", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
        { option: "B", answer: "crave", chinese_answer: "渴望", chinese_romanization: "kěwàng" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "purchase", chinese_answer: "购买", chinese_romanization: "gòumǎi" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'forswear' means to agree to give up or do without something." +
        "<br><br>" +
        "(B) 'crave' means to feel a powerful desire for something." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'purchase' means to buy something.",
    chinese_explanation: "(A) '放弃' 意味着同意放弃或不做某事。" +
        "<br><br>" +
        "(B) '渴望' 意味着对某物有强烈的欲望。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '购买' 意味着买某物。"
    },
    {
        id: 2,
    question: "During the crisis, the citizens rallied to __________ the corrupt officials from their positions.",
    chinese_question: "在危机期间，市民们集会以 __________ 腐败官员的职位。",
    answers: [
        { option: "A", answer: "depose", chinese_answer: "罢免", chinese_romanization: "bàmiǎn" },
        { option: "B", answer: "uphold", chinese_answer: "维护", chinese_romanization: "wéihù" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "endorse", chinese_answer: "支持", chinese_romanization: "zhīchí" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'depose' means to remove from office suddenly and forcefully, used figuratively here." +
        "<br><br>" +
        "(B) 'uphold' means to support or maintain." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'endorse' means to declare one's public approval or support of.",
    chinese_explanation: "(A) '罢免' 意味着突然且强制地将其免职，这里是比喻用法。" +
        "<br><br>" +
        "(B) '维护' 意味着支持或保持。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '支持' 意味着公开表明赞同或支持。"
    },
    {
        id: 3,
{
        question: "He managed to __________ his way into the meeting despite not being invited.",
        chinese_question: "尽管没有被邀请，他还是设法 __________ 进入了会议。",
        answers: [
                { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "B", answer: "demand", chinese_answer: "要求", chinese_romanization: "yāoqiú" },
                { option: "C", answer: "cajole", chinese_answer: "劝诱", chinese_romanization: "quànyòu" },
                { option: "D", answer: "insult", chinese_answer: "侮辱", chinese_romanization: "wǔrǔ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'cajole' means to persuade someone to do something by sustained coaxing or flattery." +
                "<br><br>" +
                "(A) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(B) 'demand' means to ask authoritatively or brusquely." +
                "<br><br>" +
                "(D) 'insult' means to speak to or treat with disrespect or scornful abuse.",
        chinese_explanation: "(C) '劝诱' 意味着通过持续的劝说或奉承来让某人做某事。" +
                "<br><br>" +
                "(A) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(B) '要求' 意味着以权威或粗鲁的方式要求。" +
                "<br><br>" +
                "(D) '侮辱' 意味着用不尊重或轻蔑的态度说话或对待。"
    },
    {
        id: 4,
        question: "In his speech, he began to __________ the same point, losing the audience’s interest.",
        chinese_question: "在演讲中，他开始 __________ 同样的观点，失去了观众的兴趣。",
        answers: [
                { option: "A", answer: "belabor", chinese_answer: "反复强调", chinese_romanization: "fǎnfù qiángdiào" },
                { option: "B", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'belabour' means to argue or elaborate on a subject excessively." +
                "<br><br>" +
                "(B) 'simplify' means to make something simpler or easier to do or understand." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
        chinese_explanation: "(A) '反复强调' 意味着过度地争论或阐述某个主题。" +
                "<br><br>" +
                "(B) '简化' 意味着使某事更简单或更容易做或理解。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。"
    },
    {
        id: 5,
    question: "The complex legal jargon __________ the jury, making the case hard to understand.",
    chinese_question: "复杂的法律术语让陪审团 __________，使案件难以理解。",
    answers: [
        { option: "A", answer: "enlightened", chinese_answer: "启发", chinese_romanization: "qǐfā" },
        { option: "B", answer: "flummoxed", chinese_answer: "困惑", chinese_romanization: "kùnhuò" },
        { option: "C", answer: "clarified", chinese_answer: "澄清", chinese_romanization: "chéngqīng" },
        { option: "D", answer: "pleased", chinese_answer: "高兴", chinese_romanization: "gāoxìng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'flummoxed' used figuratively means to confuse or bewilder someone." +
        "<br><br>" +
        "(A) 'enlightened' means to give someone greater knowledge and understanding about a subject or situation." +
        "<br><br>" +
        "(C) 'clarified' means to make a statement or situation less confused and more comprehensible." +
        "<br><br>" +
        "(D) 'pleased' means to cause someone to feel happy and satisfied.",
    chinese_explanation: "(B) '困惑' 在比喻意义上指使某人困惑或迷惑。" +
        "<br><br>" +
        "(A) '启发' 意味着给予某人关于某个主题或情况的更大知识和理解。" +
        "<br><br>" +
        "(C) '澄清' 意味着使声明或情况不那么混乱，更容易理解。" +
        "<br><br>" +
        "(D) '高兴' 意味着使某人感到快乐和满意。"
    },
    {
        id: 6,
    question: "The novel concept took time to __________ into a fully-fledged theory.",
    chinese_question: "这个新颖的概念需要时间 __________ 成为一个成熟的理论。",
    answers: [
        { option: "A", answer: "gestate", chinese_answer: "酝酿", chinese_romanization: "yùnniàng" },
        { option: "B", answer: "dismiss", chinese_answer: "驳回", chinese_romanization: "bóhuí" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "dismantle", chinese_answer: "拆解", chinese_romanization: "chāijiě" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'gestate' means to develop over a long period, used figuratively here." +
        "<br><br>" +
        "(B) 'dismiss' means to decide that something or someone is not worth considering." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'dismantle' means to take a machine or structure to pieces.",
    chinese_explanation: "(A) '酝酿' 意味着长时间发展，这里是比喻用法。" +
        "<br><br>" +
        "(B) '驳回' 意味着认为某事或某人不值得考虑。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '拆解' 意味着把机器或结构拆开。"
    },
    {
        id: 7,
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
        id: 8,
        question: "The judge decided to __________ the subpoena after finding it was issued without proper legal grounds.",
        chinese_question: "法官在发现传票没有合法依据后，决定 __________ 传票。",
        answers: [
                { option: "A", answer: "uphold", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "B", answer: "quash", chinese_answer: "撤销", chinese_romanization: "chèxiāo" },
                { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'quash' means to reject or void, especially by legal procedure." +
                "<br><br>" +
                "(A) 'uphold' means to support or maintain." +
                "<br><br>" +
                "(C) 'support' means to bear all or part of the weight of something." +
                "<br><br>" +
                "(D) 'ignore' means to refuse to take notice of.",
        chinese_explanation: "(B) '撤销' 意味着拒绝或使无效，特别是通过法律程序。" +
                "<br><br>" +
                "(A) '支持' 意味着支持或维持。" +
                "<br><br>" +
                "(C) '支持' 意味着承担某物的全部或部分重量。" +
                "<br><br>" +
                "(D) '忽视' 意味着拒绝注意。"
    },
    {
        id: 9,
        question: "Her speech was __________ with references to famous literary works, showing her deep knowledge of literature.",
        chinese_question: "她的演讲 __________ 了对著名文学作品的引用，显示了她对文学的深厚知识。",
        answers: [
                { option: "A", answer: "devoid", chinese_answer: "缺乏", chinese_romanization: "quēfá" },
                { option: "B", answer: "bestrewed", chinese_answer: "散布", chinese_romanization: "sànbù" },
                { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "hidden", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'bestrewed' means to scatter or spread things over a surface, used figuratively to mean filled or interspersed with." +
                "<br><br>" +
                "(A) 'devoid' means entirely lacking or free from." +
                "<br><br>" +
                "(C) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'hidden' means to put or keep out of sight; conceal.",
        chinese_explanation: "(B) '散布' 意味着将东西散布在表面上，喻义为充满或夹杂着。" +
                "<br><br>" +
                "(A) '缺乏' 意味着完全没有或不含有。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '隐藏' 意味着放置或保持在视线之外；隐瞒。"
    },
    {
        id: 10,
        question: "The chef aimed to __________ his culinary techniques to win the cooking competition.",
        chinese_question: "厨师旨在 __________ 他的烹饪技巧以赢得烹饪比赛。",
        answers: [
                { option: "A", answer: "burnish", chinese_answer: "提升", chinese_romanization: "tíshēng" },
                { option: "B", answer: "forget", chinese_answer: "忘记", chinese_romanization: "wàngjì" },
                { option: "C", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
                { option: "D", answer: "confuse", chinese_answer: "混淆", chinese_romanization: "hùnxiáo" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'burnish' means to enhance or improve something, often through effort." +
                "<br><br>" +
                "(B) 'forget' means to fail to remember." +
                "<br><br>" +
                "(C) 'simplify' means to make something simpler or easier to do or understand." +
                "<br><br>" +
                "(D) 'confuse' means to make someone unable to think clearly.",
        chinese_explanation: "(A) '提升' 意味着通过努力增强或改善某物。" +
                "<br><br>" +
                "(B) '忘记' 意味着未能记住。" +
                "<br><br>" +
                "(C) '简化' 意味着使某事更简单或更容易做或理解。" +
                "<br><br>" +
                "(D) '混淆' 意味着使某人无法清晰思考。"
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
