// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "Her approach to solving the problem was highly __________, focusing on measurable results and data.",
    chinese_question: "她解决问题的方法高度 __________，专注于可测量的结果和数据。",
    answers: [
        { option: "A", answer: "theoretical", chinese_answer: "理论的", chinese_romanization: "lǐlùn de" },
        { option: "B", answer: "abstract", chinese_answer: "抽象的", chinese_romanization: "chōuxiàng de" },
        { option: "C", answer: "quantitative", chinese_answer: "定量的", chinese_romanization: "dìngliàng de" },
        { option: "D", answer: "speculative", chinese_answer: "推测的", chinese_romanization: "tuīcè de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'quantitative' means relating to, measuring, or measured by the quantity of something rather than its quality." +
        "<br><br>" +
        "(A) 'theoretical' means concerned with or involving the theory of a subject or area of study rather than its practical application." +
        "<br><br>" +
        "(B) 'abstract' means existing in thought or as an idea but not having a physical or concrete existence." +
        "<br><br>" +
        "(D) 'speculative' means engaged in, expressing, or based on conjecture rather than knowledge.",
    chinese_explanation: "(C) '定量的' 意味着与某物的数量有关、测量或以数量测量的，而不是质量的。" +
        "<br><br>" +
        "(A) '理论的' 意味着涉及某一学科或研究领域的理论，而不是其实际应用的。" +
        "<br><br>" +
        "(B) '抽象的' 意味着存在于思想或作为一种想法，但没有物理或具体存在的。" +
        "<br><br>" +
        "(D) '推测的' 意味着从事、表达或基于猜测而不是知识的。"
    },
    {
        id: 2,
    question: "The __________ character in the story won over the hearts of all readers.",
    chinese_question: "故事中 __________ 的角色赢得了所有读者的心。",
    answers: [
        { option: "A", answer: "endearing", chinese_answer: "讨人喜欢", chinese_romanization: "tǎo rén xǐhuān" },
        { option: "B", answer: "villainous", chinese_answer: "邪恶", chinese_romanization: "xié'è" },
        { option: "C", answer: "repulsive", chinese_answer: "令人厌恶", chinese_romanization: "lìng rén yànwù" },
        { option: "D", answer: "dull", chinese_answer: "无聊", chinese_romanization: "wúliáo" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'endearing' means inspiring affection." +
        "<br><br>" +
        "(B) 'villainous' means relating to, constituting, or guilty of wicked or criminal behavior." +
        "<br><br>" +
        "(C) 'repulsive' means arousing intense distaste or disgust." +
        "<br><br>" +
        "(D) 'dull' means lacking interest or excitement.",
    chinese_explanation: "(A) '讨人喜欢' 意味着激发喜爱的。" +
        "<br><br>" +
        "(B) '邪恶' 意味着与犯罪行为有关的。" +
        "<br><br>" +
        "(C) '令人厌恶' 意味着引起强烈的反感或厌恶。" +
        "<br><br>" +
        "(D) '无聊' 意味着缺乏兴趣或兴奋。"
    },
    {
        id: 3,
    question: "Her __________ words soothed everyone's nerves during the stressful meeting.",
    chinese_question: "在紧张的会议中，她__________的话语安抚了每个人的神经。",
    answers: [
        { option: "A", answer: "harsh", chinese_answer: "刺耳的", chinese_romanization: "cì'ěr de" },
        { option: "B", answer: "grating", chinese_answer: "难听的", chinese_romanization: "nántīng de" },
        { option: "C", answer: "mellifluous", chinese_answer: "甜美的", chinese_romanization: "tiánměi de" },
        { option: "D", answer: "jarring", chinese_answer: "令人震惊的", chinese_romanization: "lìng rén zhènjīng de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'mellifluous' means (of a voice or words) sweet or musical; pleasant to hear. Figuratively, it can mean being very soothing and pleasant." +
        "<br><br>" +
        "(A) 'harsh' means unpleasantly rough or jarring to the senses." +
        "<br><br>" +
        "(B) 'grating' means sounding harsh and unpleasant." +
        "<br><br>" +
        "(D) 'jarring' means incongruous in a striking or shocking way; clashing.",
    chinese_explanation: "(C) '甜美的'一词意味着（声音或话语）甜美或音乐的；令人愉悦的。比喻地，它可以表示非常安抚和愉快的。" +
        "<br><br>" +
        "(A) '刺耳的' 意味着感官上不愉快地粗糙或刺耳的。" +
        "<br><br>" +
        "(B) '难听的' 意味着声音刺耳和不愉快的。" +
        "<br><br>" +
        "(D) '令人震惊的' 意味着以显著或令人震惊的方式不协调的；冲突的。"
    },
    {
        id: 4,
        question: "Her __________ management style, characterized by grace and efficiency, won the admiration of her team.",
        chinese_question: "她的 __________ 管理风格，以优雅和高效为特征，赢得了团队的钦佩。",
        answers: [
            { option: "A", answer: "heavy-handed", chinese_answer: "笨拙的", chinese_romanization: "bènzhuō de" },
            { option: "B", answer: "svelte", chinese_answer: "优雅的", chinese_romanization: "yōuyǎ de" },
            { option: "C", answer: "rigid", chinese_answer: "僵硬的", chinese_romanization: "jiāngyìng de" },
            { option: "D", answer: "ungraceful", chinese_answer: "不优雅的", chinese_romanization: "bù yōuyǎ de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'svelte' means slender and elegant, often used figuratively to mean graceful or sophisticated." +
            "<br><br>" +
            "(A) 'heavy-handed' means clumsy or insensitive." +
            "<br><br>" +
            "(C) 'rigid' means unable to bend or be forced out of shape; not flexible." +
            "<br><br>" +
            "(D) 'ungraceful' means lacking grace.",
        chinese_explanation: "(B) '优雅的' 意味着苗条和优雅的，通常用于比喻意味优雅或复杂的。" +
            "<br><br>" +
            "(A) '笨拙的' 意味着笨拙或不敏感的。" +
            "<br><br>" +
            "(C) '僵硬的' 意味着不能弯曲或被迫变形；不灵活的。" +
            "<br><br>" +
            "(D) '不优雅的' 意味着缺乏优雅的。"
    },
    {
        id: 5,
        question: "Their __________ party was the talk of the town, featuring gourmet food, live music, and an extravagant setting that left everyone impressed.",
        chinese_question: "他们的 __________ 派对成了小镇的谈资，提供美食、现场音乐和奢华的布置，给所有人留下了深刻印象。",
        answers: [
            { option: "A", answer: "swanky", chinese_answer: "时髦奢华的", chinese_romanization: "shímáo shēhuá de" },
            { option: "B", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "C", answer: "understated", chinese_answer: "低调的", chinese_romanization: "dīdiào de" },
            { option: "D", answer: "humble", chinese_answer: "谦逊的", chinese_romanization: "qiānxùn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'swanky' means stylishly luxurious and expensive." +
            "<br><br>" +
            "(B) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(C) 'understated' means presented or expressed in a subtle and effective way." +
            "<br><br>" +
            "(D) 'humble' means having or showing a modest or low estimate of one's importance.",
        chinese_explanation: "(A) '时髦奢华的' 意味着风格豪华和昂贵的。" +
            "<br><br>" +
            "(B) '简单的' 意味着容易理解或完成的；没有困难的。" +
            "<br><br>" +
            "(C) '低调的' 意味着以微妙和有效的方式呈现或表达的。" +
            "<br><br>" +
            "(D) '谦逊的' 意味着对自己的重要性表现出谦虚或低估的。"
    },
    {
        id: 6,
        question: "His __________ advice has guided many through difficult times.",
        chinese_question: "他的__________建议引导许多人度过了困难时期。",
        answers: [
            { option: "A", answer: "unreliable", chinese_answer: "不可靠的", chinese_romanization: "bù kěkào de" },
            { option: "B", answer: "untrustworthy", chinese_answer: "不可信的", chinese_romanization: "bù kěxìn de" },
            { option: "C", answer: "reliable", chinese_answer: "可靠的", chinese_romanization: "kěkào de" },
            { option: "D", answer: "inconsistent", chinese_answer: "不一致的", chinese_romanization: "bù yīzhì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'reliable' means consistently good in quality or performance; able to be trusted. Figuratively, it can mean being dependable and trustworthy in various situations." +
            "<br><br>" +
            "(A) 'unreliable' means not able to be relied upon." +
            "<br><br>" +
            "(B) 'untrustworthy' means not able to be relied on as honest or truthful." +
            "<br><br>" +
            "(D) 'inconsistent' means not staying the same throughout.",
        chinese_explanation: "(C) '可靠的'一词意味着质量或性能始终如一；值得信赖的。比喻地，它可以表示在各种情况下值得依赖和信任的。" +
            "<br><br>" +
            "(A) '不可靠的' 意味着不能依赖的。" +
            "<br><br>" +
            "(B) '不可信的' 意味着不能依赖为诚实或真实的。" +
            "<br><br>" +
            "(D) '不一致的' 意味着没有始终如一的。"
    },
    {
        id: 7,
    question: "The politician's __________ speeches focused more on his own achievements than on the needs and concerns of his constituents.",
    chinese_question: "这位政治家的 __________ 演讲更多地集中在他自己的成就上，而不是选民的需求和关注点上。",
    answers: [
        { option: "A", answer: "narcissistic", chinese_answer: "自恋的", chinese_romanization: "zìliàn de" },
        { option: "B", answer: "altruistic", chinese_answer: "利他的", chinese_romanization: "lìtā de" },
        { option: "C", answer: "considerate", chinese_answer: "体贴的", chinese_romanization: "tǐtiē de" },
        { option: "D", answer: "empathetic", chinese_answer: "富有同情心的", chinese_romanization: "fùyǒu tóngqíng xīn de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'narcissistic' means having an excessive interest in or admiration of oneself and one's physical appearance." +
        "<br><br>" +
        "(B) 'altruistic' means showing a disinterested and selfless concern for the well-being of others." +
        "<br><br>" +
        "(C) 'considerate' means careful not to cause inconvenience or hurt to others." +
        "<br><br>" +
        "(D) 'empathetic' means showing an ability to understand and share the feelings of another.",
    chinese_explanation: "(A) '自恋的' 意味着对自己和自己的外表有过分的兴趣或钦佩。" +
        "<br><br>" +
        "(B) '利他的' 意味着表现出一种无私的关心他人福祉的态度。" +
        "<br><br>" +
        "(C) '体贴的' 意味着小心不引起不便或伤害他人的。" +
        "<br><br>" +
        "(D) '富有同情心的' 意味着表现出理解和分享他人感受的能力。"
    },
    {
        id: 8,
    question: "The __________ receptors in the nose are responsible for detecting different scents, allowing us to enjoy the smell of flowers or freshly baked bread.",
    chinese_question: "鼻子里的 __________ 感受器负责检测不同的气味，使我们能够享受花香或新烤面包的味道。",
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
        id: 9,
        question: "Her __________ attitude towards her boss was apparent in the way she always agreed with him, never daring to offer her own opinion.",
        chinese_question: "她对老板的 __________ 态度显而易见，她总是同意他，从不敢提出自己的意见。",
        answers: [
            { option: "A", answer: "obsequious", chinese_answer: "奉承的", chinese_romanization: "fèngchéng de" },
            { option: "B", answer: "rebellious", chinese_answer: "反叛的", chinese_romanization: "fǎnpàn de" },
            { option: "C", answer: "independent", chinese_answer: "独立的", chinese_romanization: "dúlì de" },
            { option: "D", answer: "aloof", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'obsequious' means obedient or attentive to an excessive or servile degree." +
            "<br><br>" +
            "(B) 'rebellious' means showing a desire to resist authority, control, or convention." +
            "<br><br>" +
            "(C) 'independent' means free from outside control; not depending on another's authority." +
            "<br><br>" +
            "(D) 'aloof' means not friendly or forthcoming; cool and distant.",
        chinese_explanation: "(A) '奉承的' 意味着顺从或过度的注意的程度。" +
            "<br><br>" +
            "(B) '反叛的' 意味着表现出抗拒权威、控制或传统的愿望的。" +
            "<br><br>" +
            "(C) '独立的' 意味着不受外界控制的；不依赖他人权威的。" +
            "<br><br>" +
            "(D) '冷漠的' 意味着不友好或不乐意接近的；冷淡和疏远的。"
    },
    {
        id: 10,
    question: "The board decided to take a __________ approach to the investment, carefully evaluating all potential risks before committing any funds.",
    chinese_question: "董事会决定采取 __________ 的投资方式，在承诺任何资金之前仔细评估所有潜在的风险。",
    answers: [
        { option: "A", answer: "prudent", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" },
        { option: "B", answer: "hasty", chinese_answer: "匆忙的", chinese_romanization: "cōngmáng de" },
        { option: "C", answer: "negligent", chinese_answer: "疏忽的", chinese_romanization: "shūhū de" },
        { option: "D", answer: "foolhardy", chinese_answer: "愚勇的", chinese_romanization: "yúyǒng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'prudent' means acting with or showing care and thought for the future." +
        "<br><br>" +
        "(B) 'hasty' means done or acting with excessive speed or urgency." +
        "<br><br>" +
        "(C) 'negligent' means failing to take proper care over something." +
        "<br><br>" +
        "(D) 'foolhardy' means recklessly bold or rash.",
    chinese_explanation: "(A) '谨慎的' 意味着为未来行动或表现出关心和考虑。" +
        "<br><br>" +
        "(B) '匆忙的' 意味着以过快或紧急的速度完成或行动的。" +
        "<br><br>" +
        "(C) '疏忽的' 意味着未能妥善照顾某事的。" +
        "<br><br>" +
        "(D) '愚勇的' 意味着鲁莽大胆的或轻率的。"
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
