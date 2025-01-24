// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The scientist's __________ approach to solving the problem was initially met with skepticism, but it eventually proved successful.",
        chinese_question: "科学家 __________ 的解决问题的方法最初遭到了怀疑，但最终证明是成功的。",
        answers: [
            { option: "A", answer: "conventional", chinese_answer: "传统的", chinese_romanization: "chuántǒng de" },
            { option: "B", answer: "traditional", chinese_answer: "惯例的", chinese_romanization: "guànlì de" },
            { option: "C", answer: "unorthodox", chinese_answer: "非正统的", chinese_romanization: "fēi zhèngtǒng de" },
            { option: "D", answer: "customary", chinese_answer: "习惯的", chinese_romanization: "xíguàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'unorthodox' means contrary to what is usual, traditional, or accepted; not orthodox." +
            "<br><br>" +
            "(A) 'conventional' means based on or in accordance with what is generally done or believed." +
            "<br><br>" +
            "(B) 'traditional' means existing in or as part of a tradition; long-established." +
            "<br><br>" +
            "(D) 'customary' means according to the customs or usual practices associated with a particular society, place, or set of circumstances.",
        chinese_explanation: "(C) '非正统的' 意味着与通常、传统或公认的相反；不正统的。" +
            "<br><br>" +
            "(A) '传统的' 意味着基于或符合普遍做法或信仰。" +
            "<br><br>" +
            "(B) '惯例的' 意味着作为传统的一部分存在或成为传统的一部分；长期存在的。" +
            "<br><br>" +
            "(D) '习惯的' 意味着根据与特定社会、地点或情况相关的习俗或通常做法。"
    },
    {
        id: 2,
    question: "The film's __________ ending left the audience in tears.",
    chinese_question: "这部电影的__________结局让观众流下了眼泪。",
    answers: [
        { option: "A", answer: "cheerful", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
        { option: "B", answer: "lighthearted", chinese_answer: "轻松的", chinese_romanization: "qīngsōng de" },
        { option: "C", answer: "poignant", chinese_answer: "感人的", chinese_romanization: "gǎnrén de" },
        { option: "D", answer: "uplifting", chinese_answer: "振奋人心的", chinese_romanization: "zhènfèn rénxīn de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'poignant' means evoking a keen sense of sadness or regret." +
        "<br><br>" +
        "(A) 'cheerful' means noticeably happy and optimistic." +
        "<br><br>" +
        "(B) 'lighthearted' means cheerful and carefree." +
        "<br><br>" +
        "(D) 'uplifting' means morally or spiritually elevating; inspiring happiness or hope.",
    chinese_explanation: "(C) '感人的' 意味着引起强烈的悲伤或遗憾的。" +
        "<br><br>" +
        "(A) '愉快的' 意味着明显快乐和乐观的。" +
        "<br><br>" +
        "(B) '轻松的' 意味着愉快和无忧无虑的。" +
        "<br><br>" +
        "(D) '振奋人心的' 意味着道德上或精神上提升的；激发幸福或希望的。"
    },
    {
        id: 3,
    question: "The concept of quantum mechanics can be quite __________ to those who are not familiar with advanced physics, often leading to misunderstandings.",
    chinese_question: "对于不熟悉高级物理学的人来说，量子力学的概念可能相当 __________，经常导致误解。",
    answers: [
        { option: "A", answer: "clear", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" },
        { option: "B", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
        { option: "C", answer: "nebulous", chinese_answer: "模糊的", chinese_romanization: "móhu de" },
        { option: "D", answer: "obvious", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'nebulous' means unclear, vague, or ill-defined." +
        "<br><br>" +
        "(A) 'clear' means easy to perceive, understand, or interpret." +
        "<br><br>" +
        "(B) 'simple' means easily understood or done; presenting no difficulty." +
        "<br><br>" +
        "(D) 'obvious' means easily perceived or understood; clear.",
    chinese_explanation: "(C) '模糊的' 意味着不清楚的，模糊的，或定义不明确的。" +
        "<br><br>" +
        "(A) '清晰的' 意味着容易感知、理解或解释的。" +
        "<br><br>" +
        "(B) '简单的' 意味着容易理解或完成的；没有困难的。" +
        "<br><br>" +
        "(D) '明显的' 意味着容易感知或理解的；清楚的。"
    },
    {
        id: 4,
    question: "The company made a __________ investment in new technology, hoping it would revolutionize their production process.",
    chinese_question: "公司在新技术上进行了 __________ 的投资，希望它能彻底改变他们的生产过程。",
    answers: [
        { option: "A", answer: "massive", chinese_answer: "大规模的", chinese_romanization: "dàguīmó de" },
        { option: "B", answer: "minimal", chinese_answer: "最小的", chinese_romanization: "zuìxiǎo de" },
        { option: "C", answer: "negligible", chinese_answer: "可忽略的", chinese_romanization: "kě hūlüè de" },
        { option: "D", answer: "slight", chinese_answer: "轻微的", chinese_romanization: "qīngwēi de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'massive' means large and heavy or solid; on a large scale." +
        "<br><br>" +
        "(B) 'minimal' means of a minimum amount, quantity, or degree." +
        "<br><br>" +
        "(C) 'negligible' means so small or unimportant as to be not worth considering; insignificant." +
        "<br><br>" +
        "(D) 'slight' means small in degree; inconsiderable.",
    chinese_explanation: "(A) '大规模的' 意味着大而重的或坚固的；大规模的。" +
        "<br><br>" +
        "(B) '最小的' 意味着最小的数量、数量或程度的。" +
        "<br><br>" +
        "(C) '可忽略的' 意味着如此之小或不重要以至于不值得考虑的；无关紧要的。" +
        "<br><br>" +
        "(D) '轻微的' 意味着程度小的；微不足道的。"
    },
    {
        id: 5,
    question: "His __________ record as a lawyer, with no losses in court, made him highly sought after by clients.",
    chinese_question: "他作为律师的 __________ 记录，在法庭上从未输过官司，使他深受客户追捧。",
    answers: [
        { option: "A", answer: "impeccable", chinese_answer: "无可挑剔的", chinese_romanization: "wú kě tiāo tī de" },
        { option: "B", answer: "dubious", chinese_answer: "可疑的", chinese_romanization: "kěyí de" },
        { option: "C", answer: "mediocre", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
        { option: "D", answer: "questionable", chinese_answer: "有问题的", chinese_romanization: "yǒu wèntí de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'impeccable' means in accordance with the highest standards; faultless." +
        "<br><br>" +
        "(B) 'dubious' means hesitating or doubting." +
        "<br><br>" +
        "(C) 'mediocre' means of only moderate quality; not very good." +
        "<br><br>" +
        "(D) 'questionable' means doubtful as regards truth or quality.",
    chinese_explanation: "(A) '无可挑剔的' 意味着符合最高标准的；无可指责的。" +
        "<br><br>" +
        "(B) '可疑的' 意味着犹豫或怀疑的。" +
        "<br><br>" +
        "(C) '普通的' 意味着质量一般的；不是很好的。" +
        "<br><br>" +
        "(D) '有问题的' 意味着在真相或质量方面值得怀疑的。"
    },
    {
        id: 6,
    question: "His __________ plan to sabotage the project was discovered just in time.",
    chinese_question: "他 __________ 破坏项目的计划及时被发现。",
    answers: [
        { option: "A", answer: "benign", chinese_answer: "良性", chinese_romanization: "liángxìng" },
        { option: "B", answer: "benevolent", chinese_answer: "仁慈", chinese_romanization: "réncí" },
        { option: "C", answer: "fiendish", chinese_answer: "邪恶", chinese_romanization: "xié'è" },
        { option: "D", answer: "kind", chinese_answer: "善良", chinese_romanization: "shànliáng" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'fiendish' means extremely cruel or unpleasant; devilish." +
        "<br><br>" +
        "(A) 'benign' means gentle and kindly." +
        "<br><br>" +
        "(B) 'benevolent' means well-meaning and kindly." +
        "<br><br>" +
        "(D) 'kind' means having or showing a friendly, generous, and considerate nature.",
    chinese_explanation: "(C) '邪恶' 意味着极其残酷或令人不快；邪恶的。" +
        "<br><br>" +
        "(A) '良性' 意味着温和和友善。" +
        "<br><br>" +
        "(B) '仁慈' 意味着好意和友善。" +
        "<br><br>" +
        "(D) '善良' 意味着有或表现出友好、慷慨和体贴的性格。"
    },
    {
        id: 7,
    question: "His __________ stance on technological advancements often hindered the company's ability to innovate and stay competitive in the market.",
    chinese_question: "他对技术进步的 __________ 立场经常阻碍公司创新和保持市场竞争力的能力。",
    answers: [
        { option: "A", answer: "reactionary", chinese_answer: "反动的", chinese_romanization: "fǎndòng de" },
        { option: "B", answer: "innovative", chinese_answer: "创新的", chinese_romanization: "chuàngxīn de" },
        { option: "C", answer: "forward-thinking", chinese_answer: "前瞻的", chinese_romanization: "qiánzhān de" },
        { option: "D", answer: "visionary", chinese_answer: "有远见的", chinese_romanization: "yǒu yuǎnjiàn de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'reactionary' means opposing political or social progress or reform." +
    "<br><br>" +
    "(B) 'innovative' means introducing new ideas; original and creative in thinking." +
    "<br><br>" +
    "(C) 'forward-thinking' means planning or thinking for the future." +
    "<br><br>" +
    "(D) 'visionary' means thinking about or planning the future with imagination or wisdom.",
    chinese_explanation: "(A) '反动的' 意味着反对政治或社会进步或改革的。" +
    "<br><br>" +
    "(B) '创新的' 意味着引入新想法的；思维原始和有创造性的。" +
    "<br><br>" +
    "(C) '前瞻的' 意味着为未来做计划或思考的。" +
    "<br><br>" +
    "(D) '有远见的' 意味着以想象力或智慧思考或计划未来的。"
    },
    {
        id: 8,
        question: "His __________ silence indicated he was deeply considering the implications of the decision.",
        chinese_question: "他的 __________ 沉默表明他在深思决定的影响。",
        answers: [
            { option: "A", answer: "hasty", chinese_answer: "匆忙的", chinese_romanization: "cōngmáng de" },
            { option: "B", answer: "impulsive", chinese_answer: "冲动的", chinese_romanization: "chōngdòng de" },
            { option: "C", answer: "thoughtful", chinese_answer: "深思熟虑的", chinese_romanization: "shēnsīshúlǜ de" },
            { option: "D", answer: "reckless", chinese_answer: "鲁莽的", chinese_romanization: "lǔmǎng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'thoughtful' means absorbed in or involving thought." +
            "<br><br>" +
            "(A) 'hasty' means done with excessive speed or urgency." +
            "<br><br>" +
            "(B) 'impulsive' means acting or done without forethought." +
            "<br><br>" +
            "(D) 'reckless' means without thinking or caring about the consequences.",
        chinese_explanation: "(C) '深思熟虑的' 意味着专心于或涉及思考的。" +
            "<br><br>" +
            "(A) '匆忙的' 意味着过快或紧急完成的。" +
            "<br><br>" +
            "(B) '冲动的' 意味着未经深思熟虑就行动或完成的。" +
            "<br><br>" +
            "(D) '鲁莽的' 意味着不考虑或不关心后果的。"
    },
    {
        id: 9,
        question: "She suspected there was an __________ motive behind his sudden generosity.",
        chinese_question: "她怀疑他的突然慷慨背后有__________动机。",
        answers: [
            { option: "A", answer: "overt", chinese_answer: "公开的", chinese_romanization: "gōngkāi de" },
            { option: "B", answer: "ulterior", chinese_answer: "隐秘的", chinese_romanization: "yǐnmì de" },
            { option: "C", answer: "honest", chinese_answer: "诚实的", chinese_romanization: "chéngshí de" },
            { option: "D", answer: "sincere", chinese_answer: "真诚的", chinese_romanization: "zhēnchéng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'ulterior' means existing beyond what is obvious or admitted; intentionally hidden." +
            "<br><br>" +
            "(A) 'overt' means done or shown openly; plainly apparent." +
            "<br><br>" +
            "(C) 'honest' means free of deceit; truthful and sincere." +
            "<br><br>" +
            "(D) 'sincere' means free from pretense or deceit; proceeding from genuine feelings.",
        chinese_explanation: "(B) '隐秘的' 一词意味着存在于明显或承认之外的；故意隐藏的。" +
            "<br><br>" +
            "(A) '公开的' 意味着公开或显然的。" +
            "<br><br>" +
            "(C) '诚实的' 意味着没有欺骗的；真实和真诚的。" +
            "<br><br>" +
            "(D) '真诚的' 意味着没有伪装或欺骗的；发自内心的。"
    },
    {
        id: 10,
        question: "During the meeting, his __________ nods and lack of engagement showed he wasn't really paying attention.",
        chinese_question: "在会议期间，他的 __________ 点头和缺乏参与表明他并没有真正注意。",
        answers: [
            { option: "A", answer: "attentive", chinese_answer: "专心", chinese_romanization: "zhuānxīn" },
            { option: "B", answer: "animated", chinese_answer: "生动", chinese_romanization: "shēngdòng" },
            { option: "C", answer: "perfunctory", chinese_answer: "敷衍", chinese_romanization: "fūyǎn" },
            { option: "D", answer: "enthusiastic", chinese_answer: "热情", chinese_romanization: "rèqíng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'perfunctory' means carried out with a minimum of effort or reflection." +
            "<br><br>" +
            "(A) 'attentive' means paying close attention to something." +
            "<br><br>" +
            "(B) 'animated' means full of life or excitement; lively." +
            "<br><br>" +
            "(D) 'enthusiastic' means having or showing intense and eager enjoyment, interest, or approval.",
        chinese_explanation: "(C) '敷衍' 意味着以最小的努力或反思进行的。" +
            "<br><br>" +
            "(A) '专心' 意味着密切注意某事。" +
            "<br><br>" +
            "(B) '生动' 意味着充满生机或兴奋；活泼的。" +
            "<br><br>" +
            "(D) '热情' 意味着表现出强烈的和热切的享受、兴趣或赞同。"
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
