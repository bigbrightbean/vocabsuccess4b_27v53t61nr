// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "It was __________ that he was lying, as he couldn't maintain eye contact and kept fidgeting nervously.",
    chinese_question: "他在撒谎是 __________ 的，因为他无法保持眼神接触并且一直紧张地动来动去。",
    answers: [
        { option: "A", answer: "obvious", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" },
        { option: "B", answer: "subtle", chinese_answer: "微妙的", chinese_romanization: "wéimiào de" },
        { option: "C", answer: "hidden", chinese_answer: "隐藏的", chinese_romanization: "yǐncáng de" },
        { option: "D", answer: "obscure", chinese_answer: "模糊的", chinese_romanization: "móhú de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'obvious' means easily perceived or understood; clear, self-evident, or apparent." +
        "<br><br>" +
        "(B) 'subtle' means so delicate or precise as to be difficult to analyze or describe." +
        "<br><br>" +
        "(C) 'hidden' means kept out of sight; concealed." +
        "<br><br>" +
        "(D) 'obscure' means not discovered or known about; uncertain.",
    chinese_explanation: "(A) '明显的' 意味着容易察觉或理解的；清晰的、不言自明的或显然的。" +
        "<br><br>" +
        "(B) '微妙的' 意味着如此精细或精确，以至于难以分析或描述的。" +
        "<br><br>" +
        "(C) '隐藏的' 意味着保持不在视线内；隐蔽的。" +
        "<br><br>" +
        "(D) '模糊的' 意味着未被发现或已知的；不确定的。"
    },
    {
        id: 2,
    question: "The teacher's __________ impact on her students' lives was evident in the many letters of gratitude she received years later.",
    chinese_question: "老师对学生们生活的 __________ 影响在多年后她收到的许多感谢信中显而易见。",
    answers: [
        { option: "A", answer: "indelible", chinese_answer: "难以磨灭的", chinese_romanization: "nányǐ mómiè de" },
        { option: "B", answer: "minimal", chinese_answer: "最小的", chinese_romanization: "zuìxiǎo de" },
        { option: "C", answer: "slight", chinese_answer: "轻微的", chinese_romanization: "qīngwēi de" },
        { option: "D", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'indelible' means making marks that cannot be removed or forgotten." +
        "<br><br>" +
        "(B) 'minimal' means of a minimum amount, quantity, or degree." +
        "<br><br>" +
        "(C) 'slight' means small in degree; inconsiderable." +
        "<br><br>" +
        "(D) 'trivial' means of little value or importance.",
    chinese_explanation: "(A) '难以磨灭的' 意味着留下无法消除或遗忘的痕迹。" +
        "<br><br>" +
        "(B) '最小的' 意味着最低量、数量或程度的。" +
        "<br><br>" +
        "(C) '轻微的' 意味着程度很小的；微不足道的。" +
        "<br><br>" +
        "(D) '琐碎的' 意味着价值或重要性很小的。"
    },
    {
        id: 3,
        question: "Her __________ personality always made parties more lively and fun, ensuring everyone had a good time.",
        chinese_question: "她 __________ 的个性总是让聚会更加热闹和有趣，确保每个人都过得愉快。",
        answers: [
            { option: "A", answer: "dull", chinese_answer: "沉闷的", chinese_romanization: "chénmèn de" },
            { option: "B", answer: "zesty", chinese_answer: "热情的", chinese_romanization: "rèqíng de" },
            { option: "C", answer: "boring", chinese_answer: "无聊的", chinese_romanization: "wúliáo de" },
            { option: "D", answer: "tedious", chinese_answer: "单调的", chinese_romanization: "dāndiào de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'zesty' means lively and full of energy." +
            "<br><br>" +
            "(A) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(C) 'boring' means not interesting; tedious." +
            "<br><br>" +
            "(D) 'tedious' means too long, slow, or dull; tiresome or monotonous.",
        chinese_explanation: "(B) '热情的' 意味着充满活力和精力。" +
            "<br><br>" +
            "(A) '沉闷的' 意味着缺乏兴趣或兴奋。" +
            "<br><br>" +
            "(C) '无聊的' 意味着不有趣的；乏味的。" +
            "<br><br>" +
            "(D) '单调的' 意味着太长、太慢或沉闷；令人厌倦或单调的。"
    },
    {
        id: 4,
    question: "She was always __________ to her parents' wishes, never questioning their decisions.",
    chinese_question: "她总是 __________ 地听从父母的意愿，从不质疑他们的决定。",
    answers: [
        { option: "A", answer: "rebellious", chinese_answer: "反叛的", chinese_romanization: "fǎnpàn de" },
        { option: "B", answer: "obedient", chinese_answer: "听话的", chinese_romanization: "tīnghuà de" },
        { option: "C", answer: "defiant", chinese_answer: "挑衅的", chinese_romanization: "tiǎoxìn de" },
        { option: "D", answer: "insubordinate", chinese_answer: "不服从的", chinese_romanization: "bù fúcóng de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'obedient' means complying or willing to comply with orders or requests; submissive to another's will." +
        "<br><br>" +
        "(A) 'rebellious' means showing a desire to resist authority, control, or convention." +
        "<br><br>" +
        "(C) 'defiant' means showing defiance." +
        "<br><br>" +
        "(D) 'insubordinate' means defiant of authority; disobedient to orders.",
    chinese_explanation: "(B) '听话的' 意味着服从或愿意服从命令或请求；顺从他人的意愿。" +
        "<br><br>" +
        "(A) '反叛的' 意味着显示出抵抗权威、控制或习俗的愿望。" +
        "<br><br>" +
        "(C) '挑衅的' 意味着表现出挑衅。" +
        "<br><br>" +
        "(D) '不服从的' 意味着对权威的蔑视；不服从命令的。"
    },
    {
        id: 5,
    question: "Her __________ decision to donate a portion of her winnings to charity showed her compassion for those in need.",
    chinese_question: "她将部分奖金捐给慈善机构的 __________ 决定展示了她对有需要的人的同情心。",
    answers: [
        { option: "A", answer: "humane", chinese_answer: "人道的", chinese_romanization: "réndào de" },
        { option: "B", answer: "selfish", chinese_answer: "自私的", chinese_romanization: "zìsī de" },
        { option: "C", answer: "ruthless", chinese_answer: "无情的", chinese_romanization: "wúqíng de" },
        { option: "D", answer: "inconsiderate", chinese_answer: "不顾他人的", chinese_romanization: "bù gù tārén de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'humane' means having or showing compassion or benevolence." +
        "<br><br>" +
        "(B) 'selfish' means lacking consideration for others; concerned chiefly with one's own personal profit or pleasure." +
        "<br><br>" +
        "(C) 'ruthless' means having or showing no pity or compassion for others." +
        "<br><br>" +
        "(D) 'inconsiderate' means thoughtlessly causing hurt or inconvenience to others.",
    chinese_explanation: "(A) '人道的' 意味着有或表现出同情或仁慈的。" +
        "<br><br>" +
        "(B) '自私的' 意味着缺乏对他人的考虑；主要关心自己的个人利益或快乐的。" +
        "<br><br>" +
        "(C) '无情的' 意味着没有或表现出对他人的怜悯或同情的。" +
        "<br><br>" +
        "(D) '不顾他人的' 意味着无意中造成他人伤害或不便的。"
    },
    {
        id: 6,
        question: "The plan to build a new park is financially __________ and has the support of the community.",
        chinese_question: "建造新公园的计划在财政上是 __________ 的，并得到了社区的支持。",
        answers: [
                { option: "A", answer: "impossible", chinese_answer: "不可能的", chinese_romanization: "bù kěnéng de" },
                { option: "B", answer: "feasible", chinese_answer: "可行的", chinese_romanization: "kěxíng de" },
                { option: "C", answer: "impractical", chinese_answer: "不切实际的", chinese_romanization: "bù qiè shíjì de" },
                { option: "D", answer: "unrealistic", chinese_answer: "不现实的", chinese_romanization: "bù xiànshí de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'feasible' means possible to do easily or conveniently." +
            "<br><br>" +
            "(A) 'impossible' means not able to occur, exist, or be done." +
            "<br><br>" +
            "(C) 'impractical' means not adapted for use or action; not sensible or realistic." +
            "<br><br>" +
            "(D) 'unrealistic' means not having or showing a sensible and practical idea of what can be achieved or expected.",
        chinese_explanation: "(B) '可行的' 一词意味着容易或方便地做到的。" +
            "<br><br>" +
            "(A) '不可能的' 意味着不能发生、存在或完成的。" +
            "<br><br>" +
            "(C) '不切实际的' 意味着不适合使用或行动；不明智或不现实的。" +
            "<br><br>" +
            "(D) '不现实的' 意味着没有或没有显示出对可以实现或期望的事情的明智和实际的想法。"
    },
    {
        id: 7,
    question: "Excessive social media use can be __________ to teenagers' mental health.",
    chinese_question: "过度使用社交媒体对青少年的心理健康 __________ 。",
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
    },
    {
        id: 8,
            question: "After conducting several tests, the engineers concluded that the new material was __________ for construction.",
            chinese_question: "经过多次测试，工程师们得出结论认为这种新材料适合用于建筑。",
            answers: [
                { option: "A", answer: "impractical", chinese_answer: "不切实际的", chinese_romanization: "bù qiè shíjì de" },
                { option: "B", answer: "viable", chinese_answer: "可行的", chinese_romanization: "kěxíng de" },
                { option: "C", answer: "unrealistic", chinese_answer: "不现实的", chinese_romanization: "bù xiànshí de" },
                { option: "D", answer: "infeasible", chinese_answer: "不可行的", chinese_romanization: "bù kěxíng de" }
            ],
            correctAnswer: "B",
            explanation: "(B) 'viable' means capable of working successfully; feasible." +
                "<br><br>" +
                "(A) 'impractical' means not adapted for use or action; not sensible or realistic." +
                "<br><br>" +
                "(C) 'unrealistic' means not having or showing a sensible and practical idea of what can be achieved or expected." +
                "<br><br>" +
                "(D) 'infeasible' means not possible to do easily or conveniently.",
            chinese_explanation: "(B) '可行的' 意味着能够成功地工作；可行的。" +
                "<br><br>" +
                "(A) '不切实际的' 意味着不适合使用或行动；不明智或不现实的。" +
                "<br><br>" +
                "(C) '不现实的' 意味着没有或没有显示出对可以实现或期望的事情的明智和实际的想法。" +
                "<br><br>" +
                "(D) '不可行的' 意味着不容易或方便地做到的。"
    },
    {
        id: 9,
        question: "Investors became __________ after the sudden drop in the stock market.",
        chinese_question: "在股市突然下跌后，投资者变得__________。",
        answers: [
            { option: "A", answer: "confident", chinese_answer: "自信", chinese_romanization: "zìxìn" },
            { option: "B", answer: "skittish", chinese_answer: "胆小", chinese_romanization: "dǎnxiǎo" },
            { option: "C", answer: "patient", chinese_answer: "耐心", chinese_romanization: "nàixīn" },
            { option: "D", answer: "indifferent", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'skittish' means excitable or easily scared." +
            "<br><br>" +
            "(A) 'confident' means feeling or showing confidence in oneself; self-assured." +
            "<br><br>" +
            "(C) 'patient' means able to accept or tolerate delays, problems, or suffering without becoming annoyed or anxious." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(B) '胆小'一词意味着容易兴奋或受惊。" +
            "<br><br>" +
            "(A) '自信' 意味着对自己感到或表现出信心；自信。" +
            "<br><br>" +
            "(C) '耐心' 意味着能够接受或忍受延误、问题或痛苦而不变得恼怒或焦虑。" +
            "<br><br>" +
            "(D) '冷漠' 意味着没有特别的兴趣或同情；漠不关心。"
    },
    {
        id: 10,
    question: "After a good night's sleep, her mind felt __________, ready to tackle the day's challenges.",
    chinese_question: "一夜好眠之后，她的头脑感到 __________，准备好迎接一天的挑战。",
    answers: [
        { option: "A", answer: "foggy", chinese_answer: "迷糊", chinese_romanization: "míhú" },
        { option: "B", answer: "sluggish", chinese_answer: "迟缓", chinese_romanization: "chíhuǎn" },
        { option: "C", answer: "lucid", chinese_answer: "清醒", chinese_romanization: "qīngxǐng" },
        { option: "D", answer: "drowsy", chinese_answer: "昏昏欲睡", chinese_romanization: "hūn hūn yù shuì" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'lucid' means showing ability to think clearly, especially in the intervals between periods of confusion or insanity." +
        "<br><br>" +
        "(A) 'foggy' means confused and not clear." +
        "<br><br>" +
        "(B) 'sluggish' means slow-moving or inactive." +
        "<br><br>" +
        "(D) 'drowsy' means sleepy and lethargic.",
    chinese_explanation: "(C) '清醒' 意味着表现出清晰思考的能力，尤其是在混乱或疯狂时期之间的间歇。" +
        "<br><br>" +
        "(A) '迷糊' 意味着困惑和不清晰。" +
        "<br><br>" +
        "(B) '迟缓' 意味着行动缓慢或不活跃。" +
        "<br><br>" +
        "(D) '昏昏欲睡' 意味着困倦和无精打采。"
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
