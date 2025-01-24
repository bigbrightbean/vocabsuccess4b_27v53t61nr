// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "Her __________ nature drove her to explore new cultures and experiences, always seeking to expand her horizons.",
    chinese_question: "她 __________ 的天性驱使她探索新的文化和经历，总是寻求扩展自己的视野。",
    answers: [
        { option: "A", answer: "inquisitive", chinese_answer: "好奇的", chinese_romanization: "hàoqí de" },
        { option: "B", answer: "passive", chinese_answer: "被动的", chinese_romanization: "bèidòng de" },
        { option: "C", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
        { option: "D", answer: "complacent", chinese_answer: "自满的", chinese_romanization: "zìmǎn de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'inquisitive' means having or showing an interest in learning things; curious." +
        "<br><br>" +
        "(B) 'passive' means accepting or allowing what happens or what others do, without active response or resistance." +
        "<br><br>" +
        "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
        "<br><br>" +
        "(D) 'complacent' means showing smug or uncritical satisfaction with oneself or one's achievements.",
    chinese_explanation: "(A) '好奇的' 意味着有兴趣学习事物的；好奇的。" +
        "<br><br>" +
        "(B) '被动的' 意味着接受或允许发生的事情或别人做的事情，而没有积极的反应或抵抗。" +
        "<br><br>" +
        "(C) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。" +
        "<br><br>" +
        "(D) '自满的' 意味着对自己或自己的成就表现出沾沾自喜或不加批判的满足感。"
    },
    {
        id: 2,
    question: "Gossip often stems from __________ motives, aiming to hurt others' reputations.",
    chinese_question: "流言蜚语往往源于 __________ 的动机，目的是伤害他人的名誉。",
    answers: [
        { option: "A", answer: "generous", chinese_answer: "慷慨", chinese_romanization: "kāngkǎi" },
        { option: "B", answer: "kindhearted", chinese_answer: "善良", chinese_romanization: "shànliáng" },
        { option: "C", answer: "malevolent", chinese_answer: "恶毒", chinese_romanization: "èdú" },
        { option: "D", answer: "friendly", chinese_answer: "友好", chinese_romanization: "yǒuhǎo" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'malevolent' means having or showing a wish to do evil to others." +
        "<br><br>" +
        "(A) 'generous' means showing a readiness to give more of something, especially money, than is strictly necessary or expected." +
        "<br><br>" +
        "(B) 'kindhearted' means having a kind and sympathetic nature." +
        "<br><br>" +
        "(D) 'friendly' means kind and pleasant.",
    chinese_explanation: "(C) '恶毒' 意味着有或表现出对他人的恶意。" +
        "<br><br>" +
        "(A) '慷慨' 意味着愿意给予比严格必要或预期更多的东西，尤其是钱。" +
        "<br><br>" +
        "(B) '善良' 意味着具有善良和同情心的性格。" +
        "<br><br>" +
        "(D) '友好' 意味着友善和愉快。"
    },
    {
        id: 3,
    question: "The __________ experience of walking through the flower garden was overwhelming, with the scent of roses and jasmine filling the air.",
    chinese_question: "漫步花园的 __________ 体验令人难以忘怀，空气中弥漫着玫瑰和茉莉花的香气。",
    answers: [
        { option: "A", answer: "auditory", chinese_answer: "听觉的", chinese_romanization: "tīngjué de" },
        { option: "B", answer: "visual", chinese_answer: "视觉的", chinese_romanization: "shìjué de" },
        { option: "C", answer: "olfactory", chinese_answer: "嗅觉的", chinese_romanization: "xiùjué de" },
        { option: "D", answer: "tactile", chinese_answer: "触觉的", chinese_romanization: "chùjué de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'olfactory' relates to the sense of smell." +
        "<br><br>" +
        "(A) 'auditory' relates to the sense of hearing." +
        "<br><br>" +
        "(B) 'visual' relates to the sense of sight." +
        "<br><br>" +
        "(D) 'tactile' relates to the sense of touch.",
    chinese_explanation: "(C) '嗅觉的'一词意味着与嗅觉有关。" +
        "<br><br>" +
        "(A) '听觉的' 意味着与听觉有关。" +
        "<br><br>" +
        "(B) '视觉的' 意味着与视觉有关。" +
        "<br><br>" +
        "(D) '触觉的' 意味着与触觉有关。"
    },
    {
        id: 4,
    question: "The scale of their ambition was __________, aiming to reach beyond the stars.",
    chinese_question: "他们的野心规模是 __________ 的，目标是超越星辰。",
    answers: [
        { option: "A", answer: "modest", chinese_answer: "谦虚", chinese_romanization: "qiānxū" },
        { option: "B", answer: "unimaginable", chinese_answer: "难以想象", chinese_romanization: "nányǐ xiǎngxiàng" },
        { option: "C", answer: "realistic", chinese_answer: "现实", chinese_romanization: "xiànshí" },
        { option: "D", answer: "feasible", chinese_answer: "可行", chinese_romanization: "kěxíng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'unimaginable' means difficult or impossible to comprehend." +
        "<br><br>" +
        "(A) 'modest' means unassuming in the estimation of one's abilities or achievements." +
        "<br><br>" +
        "(C) 'realistic' means having or showing a sensible and practical idea of what can be achieved." +
        "<br><br>" +
        "(D) 'feasible' means possible to do easily or conveniently.",
    chinese_explanation: "(B) “难以想象” 意味着难以或不可能理解。" +
        "<br><br>" +
        "(A) '谦虚' 意味着对自己的能力或成就估计不高。" +
        "<br><br>" +
        "(C) '现实' 意味着具有或显示出可实现的合理和实际的想法。" +
        "<br><br>" +
        "(D) '可行' 意味着容易或方便地完成。"
    },
    {
        id: 5,
        question: "The journalist's __________ analysis of the political situation helped readers understand the underlying issues.",
        chinese_question: "记者对政治局势的 __________ 分析帮助读者了解潜在的问题。",
        answers: [
            { option: "A", answer: "simplistic", chinese_answer: "简单化的", chinese_romanization: "jiǎndānhuà de" },
            { option: "B", answer: "nuanced", chinese_answer: "微妙的", chinese_romanization: "wēimiào de" },
            { option: "C", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" },
            { option: "D", answer: "obvious", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'nuanced' means characterized by subtle shades of meaning or expression." +
            "<br><br>" +
            "(A) 'simplistic' means treating complex issues and problems as if they were much simpler than they really are." +
            "<br><br>" +
            "(C) 'superficial' means existing or occurring at or on the surface." +
            "<br><br>" +
            "(D) 'obvious' means easily perceived or understood; clear.",
        chinese_explanation: "(B) '微妙的' 意味着以细微的意义或表达为特征的。" +
            "<br><br>" +
            "(A) '简单化的' 意味着将复杂问题和问题视为比实际简单得多。" +
            "<br><br>" +
            "(C) '表面的' 意味着存在或发生在表面上的。" +
            "<br><br>" +
            "(D) '明显的' 意味着容易感知或理解的；清楚的。"
    },
    {
        id: 6,
        question: "The __________ rift between the two political parties made it difficult to reach any consensus on important issues.",
        chinese_question: "两大政党之间的 __________ 裂痕使得在重要问题上达成共识变得困难。",
        answers: [
            { option: "A", answer: "narrowing", chinese_answer: "缩小的", chinese_romanization: "suōxiǎo de" },
            { option: "B", answer: "widening", chinese_answer: "扩大的", chinese_romanization: "kuòdà de" },
            { option: "C", answer: "resolving", chinese_answer: "解决的", chinese_romanization: "jiějué de" },
            { option: "D", answer: "closing", chinese_answer: "关闭的", chinese_romanization: "guānbì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'widening' means increasing the extent, scope, or range of something." +
            "<br><br>" +
            "(A) 'narrowing' means becoming less wide." +
            "<br><br>" +
            "(C) 'resolving' means finding a solution to a problem." +
            "<br><br>" +
            "(D) 'closing' means bringing something to an end or conclusion.",
        chinese_explanation: "(B) '扩大的' 意味着增加某事物的范围、范围或程度。" +
            "<br><br>" +
            "(A) '缩小的' 意味着变得不那么宽的。" +
            "<br><br>" +
            "(C) '解决的' 意味着找到问题的解决方案。" +
            "<br><br>" +
            "(D) '关闭的' 意味着将某事物带到结束或结论。"
    },
    {
        id: 7,
        question: "His __________ in believing every sales pitch he heard made him an easy target for scams.",
        chinese_question: "他在相信每一个销售推销词方面的 __________ 使他成为诈骗的容易目标。",
        answers: [
            { option: "A", answer: "sophistication", chinese_answer: "老练", chinese_romanization: "lǎoliàn" },
            { option: "B", answer: "skepticism", chinese_answer: "怀疑", chinese_romanization: "huáiyí" },
            { option: "C", answer: "naïveté", chinese_answer: "天真", chinese_romanization: "tiānzhēn" },
            { option: "D", answer: "shrewdness", chinese_answer: "精明", chinese_romanization: "jīngmíng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'naïveté' means lack of experience, wisdom, or judgment." +
            "<br><br>" +
            "(A) 'sophistication' means having, revealing, or proceeding from a great deal of worldly experience and knowledge." +
            "<br><br>" +
            "(B) 'skepticism' means doubt as to the truth of something." +
            "<br><br>" +
            "(D) 'shrewdness' means having or showing sharp powers of judgment.",
        chinese_explanation: "(C) '天真' 意味着缺乏经验、智慧或判断。" +
            "<br><br>" +
            "(A) '老练' 意味着具有、展示或来自大量世俗经验和知识的。" +
            "<br><br>" +
            "(B) '怀疑' 意味着对某事的真实性表示怀疑。" +
            "<br><br>" +
            "(D) '精明' 意味着具有或展示出敏锐判断力的。"
    },
    {
        id: 8,
        question: "Her __________ interest in painting faded quickly as she moved on to other hobbies.",
        chinese_question: "她对绘画的 __________ 兴趣很快消失了，因为她转向了其他爱好。",
        answers: [
            { option: "A", answer: "enduring", chinese_answer: "持久", chinese_romanization: "chíjiǔ" },
            { option: "B", answer: "permanent", chinese_answer: "永久", chinese_romanization: "yǒngjiǔ" },
            { option: "C", answer: "transient", chinese_answer: "短暂", chinese_romanization: "duǎnzàn" },
            { option: "D", answer: "perpetual", chinese_answer: "永恒", chinese_romanization: "yǒnghéng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'transient' means lasting only for a short time; impermanent." +
            "<br><br>" +
            "(A) 'enduring' means lasting over a long period." +
            "<br><br>" +
            "(B) 'permanent' means lasting or intended to last or remain unchanged indefinitely." +
            "<br><br>" +
            "(D) 'perpetual' means never ending or changing.",
        chinese_explanation: "(C) '短暂' 意味着只持续很短的时间；不永久的。" +
            "<br><br>" +
            "(A) '持久' 意味着持续很长时间。" +
            "<br><br>" +
            "(B) '永久' 意味着持续或打算无限期保持不变。" +
            "<br><br>" +
            "(D) '永恒' 意味着永不结束或改变。"
    },
    {
        id: 9,
        question: "The __________ risks of skydiving include equipment failure and adverse weather conditions.",
        chinese_question: "跳伞的 __________ 风险包括设备故障和恶劣天气条件。",
        answers: [
                { option: "A", answer: "accidental", chinese_answer: "偶然的", chinese_romanization: "ǒurán de" },
                { option: "B", answer: "inherent", chinese_answer: "内在的", chinese_romanization: "nèizài de" },
                { option: "C", answer: "external", chinese_answer: "外在的", chinese_romanization: "wàizài de" },
                { option: "D", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'inherent' means existing in something as a permanent, essential, or characteristic attribute." +
            "<br><br>" +
            "(A) 'accidental' means happening by chance, unintentionally, or unexpectedly." +
            "<br><br>" +
            "(C) 'external' means belonging to or forming the outer surface or structure of something." +
            "<br><br>" +
            "(D) 'superficial' means existing or occurring at or on the surface.",
        chinese_explanation: "(B) '内在的' 一词意味着作为永久、基本或特征属性存在于某物中的。" +
            "<br><br>" +
            "(A) '偶然的' 意味着偶然发生的、无意的或意外的。" +
            "<br><br>" +
            "(C) '外在的' 意味着属于或形成某物的外表面或结构的。" +
            "<br><br>" +
            "(D) '表面的' 意味着存在于或发生在表面上的。"
    },
    {
        id: 10,
    question: "The company's __________ approach to handling customer complaints has significantly improved its reputation and customer satisfaction.",
    chinese_question: "公司处理客户投诉的 __________ 方法显著改善了其声誉和客户满意度。",
    answers: [
        { option: "A", answer: "mature", chinese_answer: "成熟的", chinese_romanization: "chéngshú de" },
        { option: "B", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
        { option: "C", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mò bù guānxīn de" },
        { option: "D", answer: "inadequate", chinese_answer: "不充分的", chinese_romanization: "bù chōngfèn de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'mature' means fully developed physically; full-grown; having or showing the mental and emotional qualities of an adult." +
        "<br><br>" +
        "(B) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
        "<br><br>" +
        "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
        "<br><br>" +
        "(D) 'inadequate' means lacking the quality or quantity required; insufficient for a purpose.",
    chinese_explanation: "(A) '成熟的' 意味着身体发育完全的；成年；具有或表现出成年人的精神和情感素质。" +
        "<br><br>" +
        "(B) '粗心的' 意味着没有给予足够的注意或思考以避免伤害或错误的。" +
        "<br><br>" +
        "(C) '漠不关心的' 意味着没有特别的兴趣或同情；不关心的。" +
        "<br><br>" +
        "(D) '不充分的' 意味着缺乏所需的质量或数量的；不足以达到目的的。"
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
