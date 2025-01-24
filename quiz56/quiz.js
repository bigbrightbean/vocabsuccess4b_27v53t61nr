// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The author's __________ analysis of social issues resonated with readers, offering profound perspectives on contemporary challenges.",
    chinese_question: "作者对社会问题的 __________ 分析引起了读者的共鸣，提供了对当代挑战的深刻见解。",
    answers: [
        { option: "A", answer: "insightful", chinese_answer: "有见地的", chinese_romanization: "yǒu jiàndì de" },
        { option: "B", answer: "shallow", chinese_answer: "肤浅的", chinese_romanization: "fūqiǎn de" },
        { option: "C", answer: "biased", chinese_answer: "有偏见的", chinese_romanization: "yǒu piānjiàn de" },
        { option: "D", answer: "incomplete", chinese_answer: "不完整的", chinese_romanization: "bù wánzhěng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'insightful' means having or showing an accurate and deep understanding." +
        "<br><br>" +
        "(B) 'shallow' means of little depth; superficial." +
        "<br><br>" +
        "(C) 'biased' means unfairly prejudiced for or against someone or something." +
        "<br><br>" +
        "(D) 'incomplete' means not having all the necessary or appropriate parts.",
    chinese_explanation: "(A) '有见地的' 意味着具有或表现出准确和深刻的理解。" +
        "<br><br>" +
        "(B) '肤浅的' 意味着深度很小的；表面的。" +
        "<br><br>" +
        "(C) '有偏见的' 意味着对某人或某事有不公平的偏见的。" +
        "<br><br>" +
        "(D) '不完整的' 意味着没有所有必要或适当部分的。"
    },
    {
        id: 2,
        question: "The director's __________ control over the project ensured that every detail was meticulously managed.",
        chinese_question: "导演对项目的 __________ 控制确保了每个细节都得到了精心管理。",
        answers: [
            { option: "A", answer: "lax", chinese_answer: "松懈的", chinese_romanization: "sōngxiè de" },
            { option: "B", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
            { option: "C", answer: "taut", chinese_answer: "严格的", chinese_romanization: "yángé de" },
            { option: "D", answer: "negligent", chinese_answer: "疏忽的", chinese_romanization: "shūhū de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'taut' means characterized by a high level of discipline and control; not lax." +
            "<br><br>" +
            "(A) 'lax' means not sufficiently strict or severe." +
            "<br><br>" +
            "(B) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
            "<br><br>" +
            "(D) 'negligent' means failing to take proper care in doing something.",
        chinese_explanation: "(C) '严格的' 意味着高水平的纪律和控制；不松懈的。" +
            "<br><br>" +
            "(A) '松懈的' 意味着不够严格或严厉的。" +
            "<br><br>" +
            "(B) '粗心的' 意味着没有给予足够的关注或思考以避免伤害或错误的。" +
            "<br><br>" +
            "(D) '疏忽的' 意味着未能正确地照顾某事。"
    },
    {
        id: 3,
        question: "Corruption was __________ in the government, with officials at every level involved in bribery and embezzlement.",
        chinese_question: "政府中的腐败现象非常 __________，各级官员都涉及贿赂和挪用公款。",
        answers: [
            { option: "A", answer: "rampant", chinese_answer: "猖獗的", chinese_romanization: "chāngjué de" },
            { option: "B", answer: "minimal", chinese_answer: "最小的", chinese_romanization: "zuìxiǎo de" },
            { option: "C", answer: "negligible", chinese_answer: "可忽略的", chinese_romanization: "kě hūlüè de" },
            { option: "D", answer: "contained", chinese_answer: "受控的", chinese_romanization: "shòukòng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'rampant' means (especially of something unwelcome or unpleasant) flourishing or spreading unchecked." +
            "<br><br>" +
            "(B) 'minimal' means of a minimum amount, quantity, or degree." +
            "<br><br>" +
            "(C) 'negligible' means so small or unimportant as to be not worth considering; insignificant." +
            "<br><br>" +
            "(D) 'contained' means kept under control; restrained.",
        chinese_explanation: "(A) '猖獗的' 意味着（尤指不受欢迎或不愉快的事物）不受控制地繁茂或蔓延的。" +
            "<br><br>" +
            "(B) '最小的' 意味着数量、数量或程度的最小。" +
            "<br><br>" +
            "(C) '可忽略的' 意味着小到或不重要到不值得考虑的；微不足道的。" +
            "<br><br>" +
            "(D) '受控的' 意味着被控制住的；受约束的。"
    },
    {
        id: 4,
    question: "His comments during the debate were always __________, adding significant value to the discussion.",
    chinese_question: "他在辩论中的评论总是 __________ 的，为讨论增添了重要的价值。",
    answers: [
        { option: "A", answer: "pertinent", chinese_answer: "相关的", chinese_romanization: "xiāngguān de" },
        { option: "B", answer: "random", chinese_answer: "随意的", chinese_romanization: "suíyì de" },
        { option: "C", answer: "distracting", chinese_answer: "分散注意力的", chinese_romanization: "fēnsàn zhùyì lì de" },
        { option: "D", answer: "off-topic", chinese_answer: "离题的", chinese_romanization: "lítí de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'pertinent' means relevant or applicable to a particular matter; apposite." +
        "<br><br>" +
        "(B) 'random' means made, done, happening, or chosen without method or conscious decision." +
        "<br><br>" +
        "(C) 'distracting' means preventing someone from concentrating on something." +
        "<br><br>" +
        "(D) 'off-topic' means not relevant to the subject under discussion.",
    chinese_explanation: "(A) '相关的' 意味着与特定事物有关的；恰当的。" +
        "<br><br>" +
        "(B) '随意的' 意味着没有方法或有意识决定的。" +
        "<br><br>" +
        "(C) '分散注意力的' 意味着防止某人集中注意力的。" +
        "<br><br>" +
        "(D) '离题的' 意味着与讨论中的主题无关的。"
    },
    {
        id: 5,
    question: "The issue became more __________ in the media, prompting a public outcry for action.",
    chinese_question: "这个问题在媒体上变得更加 __________，引发了公众的强烈要求采取行动。",
    answers: [
        { option: "A", answer: "insignificant", chinese_answer: "无关紧要的", chinese_romanization: "wúguān jǐnyào de" },
        { option: "B", answer: "obscure", chinese_answer: "默默无闻的", chinese_romanization: "mòmòwúwén de" },
        { option: "C", answer: "prominent", chinese_answer: "突出的", chinese_romanization: "tūchū de" },
        { option: "D", answer: "irrelevant", chinese_answer: "不相关的", chinese_romanization: "bù xiāngguān de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'prominent' means important; famous." +
        "<br><br>" +
        "(A) 'insignificant' means too small or unimportant to be worth considering." +
        "<br><br>" +
        "(B) 'obscure' means not discovered or known about; uncertain." +
        "<br><br>" +
        "(D) 'irrelevant' means not connected with or relevant to something.",
    chinese_explanation: "(C) '突出的' 意味着重要的；著名的。" +
        "<br><br>" +
        "(A) '无关紧要的' 意味着太小或不重要，不值得考虑的。" +
        "<br><br>" +
        "(B) '默默无闻的' 意味着没有被发现或不知道的；不确定的。" +
        "<br><br>" +
        "(D) '不相关的' 意味着与某事无关的。"
    },
    {
        id: 6,
        question: "The scientist faced criticism for using __________ methods to obtain research data, undermining the credibility of his findings.",
        chinese_question: "这位科学家因使用 __________ 的方法获取研究数据而受到批评，破坏了他研究结果的可信性。",
        answers: [
            { option: "A", answer: "ethical", chinese_answer: "合乎道德的", chinese_romanization: "hé hū dàodé de" },
            { option: "B", answer: "scientific", chinese_answer: "科学的", chinese_romanization: "kēxué de" },
            { option: "C", answer: "honest", chinese_answer: "诚实的", chinese_romanization: "chéngshí de" },
            { option: "D", answer: "unethical", chinese_answer: "不道德的", chinese_romanization: "bù dàodé de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'unethical' means not morally correct." +
            "<br><br>" +
            "(A) 'ethical' means relating to moral principles or the branch of knowledge dealing with these." +
            "<br><br>" +
            "(B) 'scientific' means based on or characterized by the methods and principles of science." +
            "<br><br>" +
            "(C) 'honest' means free of deceit; truthful and sincere.",
        chinese_explanation: "(D) '不道德的' 意味着在道德上不正确的。" +
            "<br><br>" +
            "(A) '合乎道德的' 意味着与道德原则或处理这些知识的分支有关的。" +
            "<br><br>" +
            "(B) '科学的' 意味着基于或以科学的方法和原则为特征的。" +
            "<br><br>" +
            "(C) '诚实的' 意味着没有欺骗；真实和真诚的。"
    },
    {
        id: 7,
    question: "A good leader is always __________ to the needs and concerns of their team.",
    chinese_question: "一个好的领导者总是 __________ 于团队的需求和关心。",
    answers: [
        { option: "A", answer: "negligent", chinese_answer: "疏忽的", chinese_romanization: "shūhū de" },
        { option: "B", answer: "attentive", chinese_answer: "注意的", chinese_romanization: "zhùyì de" },
        { option: "C", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbù guānxīn de" },
        { option: "D", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'attentive' means paying close attention to something." +
        "<br><br>" +
        "(A) 'negligent' means failing to take proper care in doing something." +
        "<br><br>" +
        "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
        "<br><br>" +
        "(D) 'careless' means not giving sufficient attention or thought to avoiding harm or errors.",
    chinese_explanation: "(B) '注意的' 意味着密切注意某事。" +
        "<br><br>" +
        "(A) '疏忽的' 意味着未能妥善处理某事。" +
        "<br><br>" +
        "(C) '漠不关心的' 意味着没有特别的兴趣或同情心；不关心的。" +
        "<br><br>" +
        "(D) '粗心的' 意味着没有给予足够的注意或思考以避免伤害或错误。"
    },
    {
        id: 8,
    question: "The __________ legacy of the great leader continues to inspire future generations.",
    chinese_question: "伟大领袖的 __________ 遗产继续激励着未来的几代人。",
    answers: [
        { option: "A", answer: "fleeting", chinese_answer: "短暂的", chinese_romanization: "duǎnzàn de" },
        { option: "B", answer: "enduring", chinese_answer: "持久的", chinese_romanization: "chíjiǔ de" },
        { option: "C", answer: "temporary", chinese_answer: "暂时的", chinese_romanization: "zànshí de" },
        { option: "D", answer: "fragile", chinese_answer: "脆弱的", chinese_romanization: "cuìruò de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'enduring' means lasting over a long period of time; durable." +
        "<br><br>" +
        "(A) 'fleeting' means lasting for a very short time." +
        "<br><br>" +
        "(C) 'temporary' means lasting for only a limited period of time; not permanent." +
        "<br><br>" +
        "(D) 'fragile' means easily broken or damaged.",
    chinese_explanation: "(B) “持久的” 意味着持续很长时间的；耐用的。" +
        "<br><br>" +
        "(A) '短暂的' 意味着持续时间非常短。" +
        "<br><br>" +
        "(C) '暂时的' 意味着只持续有限的时间；非永久的。" +
        "<br><br>" +
        "(D) '脆弱的' 意味着容易破碎或损坏。"
    },
    {
        id: 9,
    question: "Her __________ smile lit up the room, bringing joy to everyone present.",
    chinese_question: "她 __________ 的笑容点亮了整个房间，给在场的每个人带来了欢乐。",
    answers: [
        { option: "A", answer: "gloomy", chinese_answer: "阴沉", chinese_romanization: "yīnchén" },
        { option: "B", answer: "sullen", chinese_answer: "闷闷不乐", chinese_romanization: "mèn mèn bù lè" },
        { option: "C", answer: "luminous", chinese_answer: "明亮", chinese_romanization: "míngliàng" },
        { option: "D", answer: "somber", chinese_answer: "忧郁", chinese_romanization: "yōuyù" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'luminous' means very bright; shining." +
        "<br><br>" +
        "(A) 'gloomy' means dark or poorly lit, especially so as to appear depressing or frightening." +
        "<br><br>" +
        "(B) 'sullen' means bad-tempered and sulky; gloomy." +
        "<br><br>" +
        "(D) 'somber' means dark or dull in color or tone; gloomy.",
    chinese_explanation: "(C) '明亮' 意味着非常明亮；闪耀的。" +
        "<br><br>" +
        "(A) '阴沉' 意味着黑暗或光线不足，特别是看起来令人沮丧或可怕。" +
        "<br><br>" +
        "(B) '闷闷不乐' 意味着脾气不好和郁郁寡欢；阴郁的。" +
        "<br><br>" +
        "(D) '忧郁' 意味着颜色或色调暗淡；阴沉的。"
    },
    {
        id: 10,
        question: "The project's __________ scope required a massive team of experts to manage all aspects effectively.",
        chinese_question: "项目的 __________ 范围需要庞大的专家团队来有效管理各个方面。",
        answers: [
            { option: "A", answer: "limited", chinese_answer: "有限的", chinese_romanization: "yǒuxiàn de" },
            { option: "B", answer: "small", chinese_answer: "小的", chinese_romanization: "xiǎo de" },
            { option: "C", answer: "gargantuan", chinese_answer: "巨大的", chinese_romanization: "jùdà de" },
            { option: "D", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'gargantuan' means enormous." +
            "<br><br>" +
            "(A) 'limited' means restricted in size, amount, or extent." +
            "<br><br>" +
            "(B) 'small' means of a size that is less than normal or usual." +
            "<br><br>" +
            "(D) 'minor' means lesser in importance, seriousness, or significance.",
        chinese_explanation: "(C) '巨大的' 意味着非常大的。" +
            "<br><br>" +
            "'有限的' 意味着在大小、数量或范围上受到限制的。" +
            "<br><br>" +
            "'小的' 意味着尺寸小于正常或通常的。" +
            "<br><br>" +
            "'次要的' 意味着在重要性、严重性或意义上较小的。"
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
