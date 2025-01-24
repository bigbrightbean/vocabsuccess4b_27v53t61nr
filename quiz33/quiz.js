// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "She saw his __________ intent in the way he looked at her, filled with malice and deceit.",
    chinese_question: "她从他的眼神中看出了他的 __________ 意图，充满了恶意和欺骗。",
    answers: [
        { option: "A", answer: "benevolent", chinese_answer: "善意的", chinese_romanization: "shànyì de" },
        { option: "B", answer: "malign", chinese_answer: "恶意的", chinese_romanization: "èyì de" },
        { option: "C", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbùguānxīn de" },
        { option: "D", answer: "respectful", chinese_answer: "尊重的", chinese_romanization: "zūnzhòng de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'malign' means having or showing a desire to cause harm." +
        "<br><br>" +
        "(A) 'benevolent' means well-meaning and kindly." +
        "<br><br>" +
        "(C) 'indifferent' means having no particular interest or sympathy." +
        "<br><br>" +
        "(D) 'respectful' means showing deference and respect.",
    chinese_explanation: "(B) '恶意的' 意味着有或表现出造成伤害的愿望。" +
        "<br><br>" +
        "(A) '善意的' 意味着好意的和亲切的。" +
        "<br><br>" +
        "(C) '漠不关心的' 意味着没有特别的兴趣或同情。" +
        "<br><br>" +
        "(D) '尊重的' 意味着表现出尊敬和尊重。"
    },
    {
        id: 2,
    question: "The company’s success in launching the new product was __________, breaking all previous sales records.",
    chinese_question: "公司在推出新产品方面的成功是 __________ 的，打破了所有以前的销售记录。",
    answers: [
        { option: "A", answer: "common", chinese_answer: "常见的", chinese_romanization: "chángjiàn de" },
        { option: "B", answer: "traditional", chinese_answer: "传统的", chinese_romanization: "chuántǒng de" },
        { option: "C", answer: "unprecedented", chinese_answer: "前所未有的", chinese_romanization: "qián suǒ wèi yǒu de" },
        { option: "D", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'unprecedented' means never done or known before." +
        "<br><br>" +
        "(A) 'common' means occurring, found, or done often; prevalent." +
        "<br><br>" +
        "(B) 'traditional' means existing in or as part of a tradition; long-established." +
        "<br><br>" +
        "(D) 'ordinary' means with no special or distinctive features; normal.",
    chinese_explanation: "(C) '前所未有的' 意味着前所未有的或以前不知道的。" +
        "<br><br>" +
        "(A) '常见的' 意味着经常发生、发现或完成的；流行的。" +
        "<br><br>" +
        "(B) '传统的' 意味着作为传统的一部分存在的；长期建立的。" +
        "<br><br>" +
        "(D) '普通的' 意味着没有特别或独特的特征；正常的。"
    },
    {
        id: 3,
        question: "The report provided a __________ overview of the company's financial performance over the past year.",
        chinese_question: "报告提供了公司过去一年财务表现的 __________ 概述。",
        answers: [
                { option: "A", answer: "partial", chinese_answer: "部分的", chinese_romanization: "bùfèn de" },
                { option: "B", answer: "incomplete", chinese_answer: "不完整的", chinese_romanization: "bù wánzhěng de" },
                { option: "C", answer: "comprehensive", chinese_answer: "全面的", chinese_romanization: "quánmiàn de" },
                { option: "D", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'comprehensive' means complete and including all or nearly all elements or aspects of something." +
            "<br><br>" +
            "(A) 'partial' means existing only in part; incomplete." +
            "<br><br>" +
            "(B) 'incomplete' means not having all the necessary or appropriate parts." +
            "<br><br>" +
            "(D) 'superficial' means existing or occurring at or on the surface.",
        chinese_explanation: "(C) '全面的' 一词意味着完整的，包括所有或几乎所有元素或方面的。" +
            "<br><br>" +
            "(A) '部分的' 意味着仅部分存在的；不完整的。" +
            "<br><br>" +
            "(B) '不完整的' 意味着没有所有必要或适当部分的。" +
            "<br><br>" +
            "(D) '表面的' 意味着存在或发生在表面上的。"
    },
    {
        id: 4,
        question: "His criticism was __________, leaving no room for ambiguity about his dissatisfaction with the project's outcome.",
        chinese_question: "他的批评非常 __________，毫不含糊地表达了他对项目结果的不满。",
        answers: [
            { option: "A", answer: "severe", chinese_answer: "严厉的", chinese_romanization: "yánlì de" },
            { option: "B", answer: "lenient", chinese_answer: "宽容的", chinese_romanization: "kuānróng de" },
            { option: "C", answer: "forgiving", chinese_answer: "容易原谅的", chinese_romanization: "róngyì yuánliàng de" },
            { option: "D", answer: "soft", chinese_answer: "温和的", chinese_romanization: "wēnhé de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'severe' means strict or harsh." +
            "<br><br>" +
            "(B) 'lenient' means more merciful or tolerant than expected." +
            "<br><br>" +
            "(C) 'forgiving' means ready and willing to forgive." +
            "<br><br>" +
            "(D) 'soft' means gentle and not harsh or severe.",
        chinese_explanation: "(A) '严厉的' 意味着严格或严厉的。" +
            "<br><br>" +
            "(B) '宽容的' 意味着比预期的更仁慈或宽容的。" +
            "<br><br>" +
            "(C) '容易原谅的' 意味着准备好并愿意原谅的。" +
            "<br><br>" +
            "(D) '温和的' 意味着温柔的，不严厉或不苛刻的。"
    },
    {
        id: 5,
    question: "Her parents provided her with a __________ education, enrolling her in the best schools and hiring private tutors for every subject.",
    chinese_question: "她的父母为她提供了 __________ 的教育，把她送进最好的学校，并为每门科目请了私人家教。",
    answers: [
        { option: "A", answer: "lavish", chinese_answer: "奢华的", chinese_romanization: "shēhuá de" },
        { option: "B", answer: "minimal", chinese_answer: "最小的", chinese_romanization: "zuìxiǎo de" },
        { option: "C", answer: "basic", chinese_answer: "基本的", chinese_romanization: "jīběn de" },
        { option: "D", answer: "limited", chinese_answer: "有限的", chinese_romanization: "yǒuxiàn de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'lavish' means sumptuously rich, elaborate, or luxurious." +
        "<br><br>" +
        "(B) 'minimal' means of a minimum amount, quantity, or degree." +
        "<br><br>" +
        "(C) 'basic' means forming an essential foundation or starting point; fundamental." +
        "<br><br>" +
        "(D) 'limited' means restricted in size, amount, or extent.",
    chinese_explanation: "(A) '奢华的' 意味着极其富裕、精致或豪华的。" +
        "<br><br>" +
        "(B) '最小的' 意味着最小的数量、数量或程度的。" +
        "<br><br>" +
        "(C) '基本的' 意味着构成基本基础或起点的；基本的。" +
        "<br><br>" +
        "(D) '有限的' 意味着在大小、数量或程度上受限制的。"
    },
    {
        id: 6,
    question: "Her __________ attention to detail ensured that every aspect of the project was executed flawlessly, from start to finish.",
    chinese_question: "她对细节的 __________ 关注确保了项目从头到尾都被完美地执行。",
    answers: [
        { option: "A", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
        { option: "B", answer: "sloppy", chinese_answer: "马虎的", chinese_romanization: "mǎhu de" },
        { option: "C", answer: "meticulous", chinese_answer: "一丝不苟的", chinese_romanization: "yīsī bùgǒu de" },
        { option: "D", answer: "hasty", chinese_answer: "匆忙的", chinese_romanization: "cōngmáng de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'meticulous' means showing great attention to detail; very careful and precise." +
        "<br><br>" +
        "(A) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
        "<br><br>" +
        "(B) 'sloppy' means carelessly done or arranged." +
        "<br><br>" +
        "(D) 'hasty' means done or acting with excessive speed or urgency; hurried.",
    chinese_explanation: "(C) '一丝不苟的' 意味着非常注重细节；非常仔细和精确。" +
        "<br><br>" +
        "(A) '粗心的' 意味着没有给予足够的注意或考虑以避免伤害或错误。" +
        "<br><br>" +
        "(B) '马虎的' 意味着随意完成或安排的。" +
        "<br><br>" +
        "(D) '匆忙的' 意味着以过快或紧急的速度完成或行动的。"
    },
    {
        id: 7,
        question: "His __________ actions, such as betraying his closest friends for personal gain, earned him a reputation for being untrustworthy.",
        chinese_question: "他的 __________ 行为，比如为了个人利益背叛最亲密的朋友，使他获得了不可信的名声。",
        answers: [
                { option: "A", answer: "loyal", chinese_answer: "忠诚的", chinese_romanization: "zhōngchéng de" },
                { option: "B", answer: "faithful", chinese_answer: "忠实的", chinese_romanization: "zhōngshí de" },
                { option: "C", answer: "perfidious", chinese_answer: "背信弃义的", chinese_romanization: "bèixìn qìyì de" },
                { option: "D", answer: "dependable", chinese_answer: "可靠的", chinese_romanization: "kěkào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'perfidious' means deceitful and untrustworthy." +
            "<br><br>" +
            "(A) 'loyal' means giving or showing firm and constant support or allegiance to a person or institution." +
            "<br><br>" +
            "(B) 'faithful' means loyal, constant, and steadfast." +
            "<br><br>" +
            "(D) 'dependable' means trustworthy and reliable.",
        chinese_explanation: "(C) '背信弃义的' 一词意味着欺骗和不可信的。" +
            "<br><br>" +
            "(A) '忠诚的' 意味着给予或表现出对某人或机构的坚定和持续的支持或忠诚。" +
            "<br><br>" +
            "(B) '忠实的' 意味着忠诚、始终如一和坚定不移的。" +
            "<br><br>" +
            "(D) '可靠的' 意味着值得信赖和可靠的。"
    },
    {
        id: 8,
    question: "The competitive atmosphere in the office became __________ to open communication.",
    chinese_question: "办公室的竞争氛围对公开交流 __________ 。",
    answers: [
        { option: "A", answer: "inimical", chinese_answer: "有害", chinese_romanization: "yǒuhài" },
        { option: "B", answer: "supportive", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "C", answer: "negligible", chinese_answer: "微不足道", chinese_romanization: "wēibùzúdào" },
        { option: "D", answer: "beneficial", chinese_answer: "有益", chinese_romanization: "yǒuyì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'inimical' means harmful or hostile, used figuratively here." +
        "<br><br>" +
        "(B) 'supportive' means providing encouragement or emotional help." +
        "<br><br>" +
        "(C) 'negligible' means so small or unimportant as to be not worth considering." +
        "<br><br>" +
        "(D) 'beneficial' means resulting in good; favorable or advantageous.",
    chinese_explanation: "(A) '有害' 意味着有害或敌对的，这里是比喻用法。" +
        "<br><br>" +
        "(B) '支持' 意味着提供鼓励或情感上的帮助。" +
        "<br><br>" +
        "(C) '微不足道' 意味着小到或不重要到不值得考虑的。" +
        "<br><br>" +
        "(D) '有益' 意味着带来好处；有利或有优势的。"
    },
    {
        id: 9,
    question: "The __________ array of opinions on the matter left him unsure of what to believe.",
    chinese_question: "对这个问题的 __________ 各种意见让他不确定该相信什么。",
    answers: [
        { option: "A", answer: "consistent", chinese_answer: "一致", chinese_romanization: "yīzhì" },
        { option: "B", answer: "bewildering", chinese_answer: "令人困惑", chinese_romanization: "lìng rén kùnhuò" },
        { option: "C", answer: "harmonious", chinese_answer: "和谐", chinese_romanization: "héxié" },
        { option: "D", answer: "clear", chinese_answer: "清晰", chinese_romanization: "qīngxī" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'bewildering' means extremely confusing." +
        "<br><br>" +
        "(A) 'consistent' means acting or done in the same way over time." +
        "<br><br>" +
        "(C) 'harmonious' means forming a pleasing or consistent whole." +
        "<br><br>" +
        "(D) 'clear' means easy to perceive, understand, or interpret.",
    chinese_explanation: "(B) “令人困惑” 意味着极其令人困惑。" +
        "<br><br>" +
        "(A) '一致' 意味着以相同的方式行事或完成。" +
        "<br><br>" +
        "(C) '和谐' 意味着形成一个令人愉快或一致的整体。" +
        "<br><br>" +
        "(D) '清晰' 意味着容易察觉、理解或解释。"
    },
    {
        id: 10,
    question: "The company's strict policies were __________ to employee morale, leading to high turnover rates.",
    chinese_question: "公司的严格政策对员工士气 __________ ，导致高流动率。",
    answers: [
        { option: "A", answer: "inimical", chinese_answer: "有害", chinese_romanization: "yǒuhài" },
        { option: "B", answer: "supportive", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "C", answer: "negligible", chinese_answer: "微不足道", chinese_romanization: "wēibùzúdào" },
        { option: "D", answer: "beneficial", chinese_answer: "有益", chinese_romanization: "yǒuyì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'inimical' means harmful or hostile." +
        "<br><br>" +
        "(B) 'supportive' means providing encouragement or emotional help." +
        "<br><br>" +
        "(C) 'negligible' means so small or unimportant as to be not worth considering." +
        "<br><br>" +
        "(D) 'beneficial' means resulting in good; favorable or advantageous.",
    chinese_explanation: "(A) '有害' 意味着有害或敌对的。" +
        "<br><br>" +
        "(B) '支持' 意味着提供鼓励或情感上的帮助。" +
        "<br><br>" +
        "(C) '微不足道' 意味着小到或不重要到不值得考虑的。" +
        "<br><br>" +
        "(D) '有益' 意味着带来好处；有利或有优势的。"
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
