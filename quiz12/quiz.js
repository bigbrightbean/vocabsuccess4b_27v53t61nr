// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ librarian rarely spoke, preferring to communicate through written notes and gestures.",
        chinese_question: "这位 __________ 的图书管理员很少说话，更喜欢通过书面笔记和手势进行交流。",
        answers: [
            { option: "A", answer: "talkative", chinese_answer: "健谈的", chinese_romanization: "jiàntán de" },
            { option: "B", answer: "expressive", chinese_answer: "表达丰富的", chinese_romanization: "biǎodá fēngfù de" },
            { option: "C", answer: "taciturn", chinese_answer: "沉默寡言的", chinese_romanization: "chénmò guǎyán de" },
            { option: "D", answer: "verbose", chinese_answer: "冗长的", chinese_romanization: "rǒngcháng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'taciturn' means reserved or uncommunicative in speech; saying little." +
            "<br><br>" +
            "(A) 'talkative' means fond of or given to talking." +
            "<br><br>" +
            "(B) 'expressive' means effectively conveying thought or feeling." +
            "<br><br>" +
            "(D) 'verbose' means using or expressed in more words than are needed.",
        chinese_explanation: "(C) '沉默寡言的' 意味着言语上保守或不爱说话；说得很少。" +
            "<br><br>" +
            "(A) '健谈的' 意味着喜欢或习惯于说话的。" +
            "<br><br>" +
            "(B) '表达丰富的' 意味着有效地传达思想或感情的。" +
            "<br><br>" +
            "(D) '冗长的' 意味着使用或表达的词比需要的更多的。"
    },
    {
        id: 2,
        question: "Their friendship was __________, as they both supported and helped each other through tough times.",
        chinese_question: "他们的友谊是 __________ 的，因为他们都在困难时期互相支持和帮助。",
        answers: [
            { option: "A", answer: "reciprocal", chinese_answer: "互惠的", chinese_romanization: "hùhuì de" },
            { option: "B", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" },
            { option: "C", answer: "one-sided", chinese_answer: "单方面的", chinese_romanization: "dānfāngmiàn de" },
            { option: "D", answer: "detached", chinese_answer: "分离的", chinese_romanization: "fēnlí de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'reciprocal' means given, felt, or done in return; mutual." +
            "<br><br>" +
            "(B) 'superficial' means existing or occurring at or on the surface." +
            "<br><br>" +
            "(C) 'one-sided' means unfairly prejudiced for or against someone or something." +
            "<br><br>" +
            "(D) 'detached' means separate or disconnected.",
        chinese_explanation: "(A) '互惠的' 意味着给予、感觉到或作为回报的；相互的。" +
            "<br><br>" +
            "(B) '表面的' 意味着存在或发生在表面的。" +
            "<br><br>" +
            "(C) '单方面的' 意味着对某人或某事物有不公平的偏见的。" +
            "<br><br>" +
            "(D) '分离的' 意味着分开的或断开的。"
    },
    {
        id: 3,
        question: "The joy he felt was __________, quickly replaced by anxiety about the future.",
        chinese_question: "他感到的快乐是 __________ 的，很快就被对未来的焦虑所取代。",
        answers: [
            { option: "A", answer: "permanent", chinese_answer: "永久的", chinese_romanization: "yǒngjiǔ de" },
            { option: "B", answer: "fleeting", chinese_answer: "短暂的", chinese_romanization: "duǎnzàn de" },
            { option: "C", answer: "enduring", chinese_answer: "持久的", chinese_romanization: "chíjiǔ de" },
            { option: "D", answer: "everlasting", chinese_answer: "永恒的", chinese_romanization: "yǒnghéng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'fleeting' means lasting for a very short time." +
            "<br><br>" +
            "(A) 'permanent' means lasting or intended to last or remain unchanged indefinitely." +
            "<br><br>" +
            "(C) 'enduring' means lasting over a period of time; durable." +
            "<br><br>" +
            "(D) 'everlasting' means lasting forever or for a very long time.",
        chinese_explanation: "(B) '短暂的' 意味着持续时间很短的。" +
            "<br><br>" +
            "'永久的' 意味着持续或打算无限期保持不变的。" +
            "<br><br>" +
            "'持久的' 意味着持续一段时间的；耐用的。" +
            "<br><br>" +
            "'永恒的' 意味着永远或很长时间的。"
    },
    {
        id: 4,
        question: "He took a __________ oath to serve his country, fully aware of the responsibilities and sacrifices it entailed.",
        chinese_question: "他郑重地宣誓为国家服务，完全意识到其中的责任和牺牲。",
        answers: [
            { option: "A", answer: "solemn", chinese_answer: "庄严的", chinese_romanization: "zhuāngyán de" },
            { option: "B", answer: "frivolous", chinese_answer: "轻浮的", chinese_romanization: "qīngfú de" },
            { option: "C", answer: "lighthearted", chinese_answer: "无忧无虑的", chinese_romanization: "wú yōu wú lǜ de" },
            { option: "D", answer: "playful", chinese_answer: "玩笑的", chinese_romanization: "wánxiào de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'solemn' means formal and dignified; serious." +
            "<br><br>" +
            "(B) 'frivolous' means not having any serious purpose or value." +
            "<br><br>" +
            "(C) 'lighthearted' means cheerful and carefree." +
            "<br><br>" +
            "(D) 'playful' means fond of games and amusement; lighthearted.",
        chinese_explanation: "(A) '庄严的' 意味着正式和庄重的；严肃的。" +
            "<br><br>" +
            "(B) '轻浮的' 意味着没有任何严肃的目的或价值的。" +
            "<br><br>" +
            "(C) '无忧无虑的' 意味着快乐和无忧无虑的。" +
            "<br><br>" +
            "(D) '玩笑的' 意味着喜欢游戏和娱乐的；轻松愉快的。"
    },
    {
        id: 5,
    question: "The proposal was __________ for the current economic climate, offering practical solutions.",
    chinese_question: "该提议 __________ 当前的经济环境，提供了切实可行的解决方案。",
    answers: [
        { option: "A", answer: "suitable", chinese_answer: "合适", chinese_romanization: "héshì" },
        { option: "B", answer: "unrealistic", chinese_answer: "不切实际", chinese_romanization: "bù qiè shíjì" },
        { option: "C", answer: "impractical", chinese_answer: "不实用", chinese_romanization: "bù shíyòng" },
        { option: "D", answer: "irrelevant", chinese_answer: "无关", chinese_romanization: "wúguān" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'suitable' means right or appropriate for a particular person, purpose, or situation." +
        "<br><br>" +
        "(B) 'unrealistic' means not realistic." +
        "<br><br>" +
        "(C) 'impractical' means not adapted for use or action; not sensible or realistic." +
        "<br><br>" +
        "(D) 'irrelevant' means not connected with or relevant to something.",
    chinese_explanation: "(A) '合适' 意味着对特定的人、目的或情况是合适的。" +
        "<br><br>" +
        "(B) '不切实际' 意味着不现实。" +
        "<br><br>" +
        "(C) '不实用' 意味着不适合使用或行动的；不明智或不现实的。" +
        "<br><br>" +
        "(D) '无关' 意味着与某事无关。"
    },
    {
        id: 6,
        question: "Her __________ approach to learning ensured that she understood the material deeply.",
        chinese_question: "她对学习的 __________ 方法确保了她对材料的深刻理解。",
        answers: [
            { option: "A", answer: "shallow", chinese_answer: "浅薄的", chinese_romanization: "qiǎnbó de" },
            { option: "B", answer: "thorough", chinese_answer: "彻底的", chinese_romanization: "chèdǐ de" },
            { option: "C", answer: "hasty", chinese_answer: "匆忙的", chinese_romanization: "cōngmáng de" },
            { option: "D", answer: "perfunctory", chinese_answer: "敷衍的", chinese_romanization: "fūyǎn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'thorough' means complete with regard to every detail." +
            "<br><br>" +
            "(A) 'shallow' means of little depth." +
            "<br><br>" +
            "(C) 'hasty' means done with excessive speed or urgency." +
            "<br><br>" +
            "(D) 'perfunctory' means carried out with a minimum of effort or reflection.",
        chinese_explanation: "(B) '彻底的' 意味着在每个细节上都完成的。" +
            "<br><br>" +
            "(A) '浅薄的' 意味着深度很小的。" +
            "<br><br>" +
            "(C) '匆忙的' 意味着过快或紧急完成的。" +
            "<br><br>" +
            "(D) '敷衍的' 意味着以最少的努力或反思进行的。"
    },
    {
        id: 7,
    question: "Her patience was __________ after dealing with the difficult situation all day.",
    chinese_question: "在处理了一整天的困难局面后，她的耐心已__________。",
    answers: [
        { option: "A", answer: "abundant", chinese_answer: "丰富的", chinese_romanization: "fēngfù de" },
        { option: "B", answer: "plentiful", chinese_answer: "充足的", chinese_romanization: "chōngzú de" },
        { option: "C", answer: "nonexistent", chinese_answer: "不存在的", chinese_romanization: "bù cúnzài de" },
        { option: "D", answer: "copious", chinese_answer: "大量的", chinese_romanization: "dàliàng de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'nonexistent' means not existing or not real. Figuratively, it can mean completely gone or used up." +
        "<br><br>" +
        "(A) 'abundant' means existing or available in large quantities; plentiful." +
        "<br><br>" +
        "(B) 'plentiful' means existing in or yielding great quantities; abundant." +
        "<br><br>" +
        "(D) 'copious' means abundant in supply or quantity.",
    chinese_explanation: "(C) '不存在的'一词意味着不存在或不真实的。比喻地，它可以表示完全消失或用尽。" +
        "<br><br>" +
        "(A) '丰富的' 意味着存在或可用的大量；丰富的。" +
        "<br><br>" +
        "(B) '充足的' 意味着存在或产出的大量；丰富的。" +
        "<br><br>" +
        "(D) '大量的' 意味着供应或数量充足的。"
    },
    {
        id: 8,
        question: "After years of supporting the cause, he felt __________ when the organization’s leaders were exposed as frauds.",
        chinese_question: "在支持该事业多年后，当组织的领导人被揭露为骗子时，他感到 __________。",
        answers: [
                { option: "A", answer: "inspired", chinese_answer: "受启发的", chinese_romanization: "shòu qǐfā de" },
                { option: "B", answer: "disillusioned", chinese_answer: "幻灭的", chinese_romanization: "huànmiè de" },
                { option: "C", answer: "hopeful", chinese_answer: "有希望的", chinese_romanization: "yǒu xīwàng de" },
                { option: "D", answer: "jubilant", chinese_answer: "欢腾的", chinese_romanization: "huānténg de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'disillusioned' means disappointed in someone or something that one discovers to be less good than one had believed." +
            "<br><br>" +
            "(A) 'inspired' means filled with the urge or ability to do or feel something, especially to do something creative." +
            "<br><br>" +
            "(C) 'hopeful' means feeling or inspiring optimism about a future event." +
            "<br><br>" +
            "(D) 'jubilant' means feeling or expressing great happiness and triumph.",
        chinese_explanation: "(B) '幻灭的' 意味着对发现某人或某事物不如自己所信的那样好而感到失望的。" +
            "<br><br>" +
            "(A) '受启发的' 意味着充满冲动或能力去做或感觉某事，尤其是做某些创造性的事情。" +
            "<br><br>" +
            "(C) '有希望的' 意味着对未来事件感到乐观的或激发乐观的。" +
            "<br><br>" +
            "(D) '欢腾的' 意味着感到或表达极大的幸福和胜利。"
    },
    {
        id: 9,
    question: "She was known for her __________ listening skills, which made her friends feel truly heard.",
    chinese_question: "她以其 __________ 的倾听技巧而闻名，这让她的朋友们感到真正被倾听。",
    answers: [
        { option: "A", answer: "indifferent", chinese_answer: "无动于衷的", chinese_romanization: "wúdòngyúzhōng de" },
        { option: "B", answer: "empathetic", chinese_answer: "有同理心的", chinese_romanization: "yǒu tónglǐxīn de" },
        { option: "C", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" },
        { option: "D", answer: "critical", chinese_answer: "批评的", chinese_romanization: "pīpíng de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'empathetic' means showing an ability to understand and share the feelings of others." +
        "<br><br>" +
        "(A) 'indifferent' means having no particular interest or sympathy; unconcerned." +
        "<br><br>" +
        "(C) 'superficial' means existing or occurring at or on the surface." +
        "<br><br>" +
        "(D) 'critical' means expressing adverse or disapproving comments or judgments.",
    chinese_explanation: "(B) “有同理心的” 意味着表现出理解和分享他人感受的能力。" +
        "<br><br>" +
        "(A) '无动于衷的' 意味着没有特别的兴趣或同情；不关心。" +
        "<br><br>" +
        "(C) '表面的' 意味着存在或发生在表面上。" +
        "<br><br>" +
        "(D) '批评的' 意味着表达不赞成的或不满的评论或判断。"
    },
    {
        id: 10,
    question: "The audience was __________ to the comedian's jokes, laughing and clapping throughout the performance.",
    chinese_question: "观众对喜剧演员的笑话非常 __________，在整个表演过程中都在笑和鼓掌。",
    answers: [
        { option: "A", answer: "uninterested", chinese_answer: "无兴趣的", chinese_romanization: "wú xìngqù de" },
        { option: "B", answer: "resistant", chinese_answer: "抵抗的", chinese_romanization: "dǐkàng de" },
        { option: "C", answer: "receptive", chinese_answer: "乐于接受的", chinese_romanization: "lè yú jiēshòu de" },
        { option: "D", answer: "bored", chinese_answer: "感到厌倦的", chinese_romanization: "gǎndào yànjuàn de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'receptive' means willing to consider or accept new suggestions and ideas." +
        "<br><br>" +
        "(A) 'uninterested' means not interested; indifferent." +
        "<br><br>" +
        "(B) 'resistant' means opposed to or defending against." +
        "<br><br>" +
        "(D) 'bored' means feeling weary and impatient because one is unoccupied or lacks interest in one's current activity.",
    chinese_explanation: "(C) '乐于接受的' 意味着愿意考虑或接受新的建议和想法。" +
        "<br><br>" +
        "(A) '无兴趣的' 意味着没有兴趣；冷漠的。" +
        "<br><br>" +
        "(B) '抵抗的' 意味着反对或防御。" +
        "<br><br>" +
        "(D) '感到厌倦的' 意味着感到厌倦和不耐烦，因为没有被占用或对当前活动缺乏兴趣。"
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
