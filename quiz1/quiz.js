// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The historian's __________ account of the events provided a skewed perspective that favored one side over the other.",
    chinese_question: "历史学家 __________ 的叙述提供了一个偏颇的视角，偏袒一方。",
    answers: [
        { option: "A", answer: "partisan", chinese_answer: "偏袒", chinese_romanization: "piāntǎn" },
        { option: "B", answer: "thorough", chinese_answer: "彻底", chinese_romanization: "chèdǐ" },
        { option: "C", answer: "balanced", chinese_answer: "平衡", chinese_romanization: "pínghéng" },
        { option: "D", answer: "comprehensive", chinese_answer: "全面", chinese_romanization: "quánmiàn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'partisan' figuratively means showing strong, and sometimes blind, adherence to a particular party, faction, cause, or person." +
        "<br><br>" +
        "(B) 'thorough' means complete with regard to every detail; not superficial or partial." +
        "<br><br>" +
        "(C) 'balanced' means keeping or showing a balance; arranged in good proportions." +
        "<br><br>" +
        "(D) 'comprehensive' means complete and including all or nearly all elements or aspects of something.",
    chinese_explanation: "(A) '偏袒' 在此语境下意指对某个党派、派系、事业或个人表现出强烈的（有时是盲目的）支持。" +
        "<br><br>" +
        "(B) '彻底' 意味着每个细节都完成；不肤浅或不偏不倚。" +
        "<br><br>" +
        "(C) '平衡' 意味着保持或显示平衡；安排得当。" +
        "<br><br>" +
        "(D) '全面' 意味着完整并包括所有或几乎所有元素或方面。"
    },
    {
        id: 2,
        question: "Her __________ pursuit of justice led her to uncover the truth, no matter the obstacles she faced along the way.",
        chinese_question: "她对正义的 __________ 追求让她揭开了真相，无论她在途中遇到什么障碍。",
        answers: [
            { option: "A", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "B", answer: "unrelenting", chinese_answer: "不屈不挠的", chinese_romanization: "bùqū bù náo de" },
            { option: "C", answer: "half-hearted", chinese_answer: "半心半意的", chinese_romanization: "bàn xīn bàn yì de" },
            { option: "D", answer: "sporadic", chinese_answer: "零星的", chinese_romanization: "língxīng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'unrelenting' means not yielding in strength, severity, or determination." +
            "<br><br>" +
            "(A) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(C) 'half-hearted' means without enthusiasm or energy." +
            "<br><br>" +
            "(D) 'sporadic' means occurring at irregular intervals or only in a few places; scattered or isolated.",
        chinese_explanation: "(B) '不屈不挠的' 意味着在强度、严重性或决心上不屈服的。" +
            "<br><br>" +
            "(A) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(C) '半心半意的' 意味着没有热情或能量的。" +
            "<br><br>" +
            "(D) '零星的' 意味着不定期发生的或仅在少数地方发生的；分散的或孤立的。"
    },
    {
        id: 3,
    question: "The debate turned __________ as both sides started to exchange personal insults and grudges rather than discussing the issues at hand.",
    chinese_question: "辩论变得 __________，双方开始互相进行人身攻击和积怨，而不是讨论眼前的问题。",
    answers: [
        { option: "A", answer: "rancorous", chinese_answer: "怨恨的", chinese_romanization: "yuànhèn de" },
        { option: "B", answer: "constructive", chinese_answer: "建设性的", chinese_romanization: "jiànshè xìng de" },
        { option: "C", answer: "peaceful", chinese_answer: "和平的", chinese_romanization: "hépíng de" },
        { option: "D", answer: "respectful", chinese_answer: "尊重的", chinese_romanization: "zūnzhòng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'rancorous' means characterized by bitterness or resentment." +
        "<br><br>" +
        "(B) 'constructive' means serving a useful purpose; tending to build up." +
        "<br><br>" +
        "(C) 'peaceful' means free from disturbance; tranquil." +
        "<br><br>" +
        "(D) 'respectful' means feeling or showing deference and respect.",
    chinese_explanation: "(A) '怨恨的' 意味着由痛苦或怨恨的情感特征的。" +
        "<br><br>" +
        "(B) '建设性的' 意味着起有用的目的；倾向于建立的。" +
        "<br><br>" +
        "(C) '和平的' 意味着没有干扰的；宁静的。" +
        "<br><br>" +
        "(D) '尊重的' 意味着感到或表现出敬意和尊重的。"
    },
    {
        id: 4,
        question: "Her __________ decision to invest in the new technology early on paid off significantly as the market grew.",
        chinese_question: "她 __________ 的决定在市场增长时获得了丰厚的回报。",
        answers: [
                { option: "A", answer: "foolish", chinese_answer: "愚蠢的", chinese_romanization: "yúchǔn de" },
                { option: "B", answer: "hasty", chinese_answer: "匆忙的", chinese_romanization: "cōngmáng de" },
                { option: "C", answer: "judicious", chinese_answer: "明智的", chinese_romanization: "míngzhì de" },
                { option: "D", answer: "reckless", chinese_answer: "鲁莽的", chinese_romanization: "lǔmǎng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'judicious' means having, showing, or done with good judgment or sense." +
            "<br><br>" +
            "(A) 'foolish' means lacking good sense or judgment; unwise." +
            "<br><br>" +
            "(B) 'hasty' means done or acting with excessive speed or urgency; hurried." +
            "<br><br>" +
            "(D) 'reckless' means without thinking or caring about the consequences of an action.",
        chinese_explanation: "(C) '明智的' 一词意味着有、表现出或具有良好判断力或常识的。" +
            "<br><br>" +
            "(A) '愚蠢的' 意味着缺乏良好判断力的；不明智的。" +
            "<br><br>" +
            "(B) '匆忙的' 意味着以过快的速度或紧迫感完成或行动的；匆促的。" +
            "<br><br>" +
            "(D) '鲁莽的' 意味着不考虑或不在乎行动的后果的。"
    },
    {
        id: 5,
        question: "Her writing style is __________, with unexpected changes in tone and pacing that keep readers on their toes.",
        chinese_question: "她的写作风格是 __________ 的，语气和节奏的意外变化让读者保持警觉。",
        answers: [
            { option: "A", answer: "linear", chinese_answer: "线性的", chinese_romanization: "xiànxìng de" },
            { option: "B", answer: "syncopated", chinese_answer: "切分的", chinese_romanization: "qiēfēn de" },
            { option: "C", answer: "dull", chinese_answer: "乏味的", chinese_romanization: "fáwèi de" },
            { option: "D", answer: "straightforward", chinese_answer: "直截了当的", chinese_romanization: "zhíjiéle dàng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'syncopated' means characterized by displaced beats or accents in music, creating unexpected rhythms, often used figuratively to describe writing with dynamic and surprising elements." +
            "<br><br>" +
            "(A) 'linear' means arranged in or extending along a straight or nearly straight line." +
            "<br><br>" +
            "(C) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(D) 'straightforward' means uncomplicated and easy to do or understand.",
        chinese_explanation: "(B) '切分的' 意味着音乐中的节拍或重音被移位，创造出意外的节奏，通常用作比喻来描述具有动态和令人惊讶元素的写作。" +
            "<br><br>" +
            "(A) '线性的' 意味着排列在或延伸在一条直线或几乎直线上的。" +
            "<br><br>" +
            "(C) '乏味的' 意味着缺乏兴趣或兴奋的。" +
            "<br><br>" +
            "(D) '直截了当的' 意味着简单和容易做或理解的。"
    },
    {
        id: 6,
        question: "Her __________ approach to learning, preferring books over outdoor activities, was evident.",
        chinese_question: "她那更喜欢书本而不是户外活动的__________学习方法是显而易见的。",
        answers: [
            { option: "A", answer: "active", chinese_answer: "活跃的", chinese_romanization: "huóyuè de" },
            { option: "B", answer: "energetic", chinese_answer: "精力充沛的", chinese_romanization: "jīnglì chōngpèi de" },
            { option: "C", answer: "sedentary", chinese_answer: "久坐的", chinese_romanization: "jiǔ zuò de" },
            { option: "D", answer: "dynamic", chinese_answer: "动态的", chinese_romanization: "dòngtài de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sedentary' means tending to spend much time seated; somewhat inactive. Figuratively, it can mean being intellectually inactive or less engaged in physical activities." +
            "<br><br>" +
            "(A) 'active' means engaging or ready to engage in physically energetic pursuits." +
            "<br><br>" +
            "(B) 'energetic' means showing or involving great activity or vitality." +
            "<br><br>" +
            "(D) 'dynamic' means characterized by constant change, activity, or progress.",
        chinese_explanation: "(C) '久坐的'一词意味着花费大量时间坐着的；有些不活跃的。比喻地，它可以表示在智力上不活跃或较少参与体力活动的。" +
            "<br><br>" +
            "(A) '活跃的' 意味着参与或准备参与体力活动的。" +
            "<br><br>" +
            "(B) '精力充沛的' 意味着表现出或涉及大量活动或活力的。" +
            "<br><br>" +
            "(D) '动态的' 意味着不断变化、活动或进步的特征。"
    },
    {
        id: 7,
    question: "His __________ view of the world made him believe that everyone he met had good intentions.",
    chinese_question: "他对世界的 __________ 观点使他相信他遇到的每个人都有好的意图。",
    answers: [
        { option: "A", answer: "innocent", chinese_answer: "天真的", chinese_romanization: "tiānzhēn de" },
        { option: "B", answer: "jaded", chinese_answer: "厌倦的", chinese_romanization: "yànjuàn de" },
        { option: "C", answer: "skeptical", chinese_answer: "怀疑的", chinese_romanization: "huáiyí de" },
        { option: "D", answer: "mistrustful", chinese_answer: "不信任的", chinese_romanization: "bù xìnrèn de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'innocent' means free from moral wrong; without corruption; naive." +
        "<br><br>" +
        "(B) 'jaded' means tired, bored, or lacking enthusiasm, typically after having had too much of something." +
        "<br><br>" +
        "(C) 'skeptical' means not easily convinced; having doubts or reservations." +
        "<br><br>" +
        "(D) 'mistrustful' means lacking trust; suspicious.",
    chinese_explanation: "(A) '天真的' 意味着没有道德上的错误；没有腐败的；天真的。" +
        "<br><br>" +
        "(B) '厌倦的' 意味着疲倦的、无聊的或缺乏热情的，通常是在经历太多之后。" +
        "<br><br>" +
        "(C) '怀疑的' 意味着不容易被说服的；有怀疑或保留的。" +
        "<br><br>" +
        "(D) '不信任的' 意味着缺乏信任的；怀疑的。"
    },
    {
        id: 8,
    question: "She felt a __________ hope that things would get better, despite the many setbacks she had faced.",
    chinese_question: "尽管遇到了许多挫折，她仍感到 __________ 的希望，认为事情会好转。",
    answers: [
        { option: "A", answer: "faint", chinese_answer: "微弱的", chinese_romanization: "wēiruò de" },
        { option: "B", answer: "strong", chinese_answer: "强烈的", chinese_romanization: "qiángliè de" },
        { option: "C", answer: "overwhelming", chinese_answer: "压倒性的", chinese_romanization: "yādǎo xìng de" },
        { option: "D", answer: "powerful", chinese_answer: "强大的", chinese_romanization: "qiángdà de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'faint' means barely perceptible; lacking strength or intensity." +
        "<br><br>" +
        "(B) 'strong' means having great physical power or strength." +
        "<br><br>" +
        "(C) 'overwhelming' means very great in amount." +
        "<br><br>" +
        "(D) 'powerful' means having great power or strength.",
    chinese_explanation: "(A) '微弱的' 意味着几乎察觉不到的；缺乏强度或强度的。" +
        "<br><br>" +
        "(B) '强烈的' 意味着具有很大的力量或强度的。" +
        "<br><br>" +
        "(C) '压倒性的' 意味着数量非常大的。" +
        "<br><br>" +
        "(D) '强大的' 意味着具有很大的力量或强度的。"
    },
    {
        id: 9,
    question: "Despite being __________ in resources, the community was rich in spirit and solidarity, always helping one another in times of need.",
    chinese_question: "尽管资源 __________，社区在精神和团结方面却非常富有，总是在需要时互相帮助。",
    answers: [
        { option: "A", answer: "impoverished", chinese_answer: "贫乏的", chinese_romanization: "pínfá de" },
        { option: "B", answer: "abundant", chinese_answer: "丰富的", chinese_romanization: "fēngfù de" },
        { option: "C", answer: "plentiful", chinese_answer: "大量的", chinese_romanization: "dàliàng de" },
        { option: "D", answer: "sufficient", chinese_answer: "足够的", chinese_romanization: "zúgòu de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'impoverished' means reduced to poverty." +
        "<br><br>" +
        "(B) 'abundant' means existing or available in large quantities; plentiful." +
        "<br><br>" +
        "(C) 'plentiful' means existing in or yielding great quantities; abundant." +
        "<br><br>" +
        "(D) 'sufficient' means enough; adequate.",
    chinese_explanation: "(A) '贫乏的' 意味着沦为贫困的。" +
        "<br><br>" +
        "(B) '丰富的' 意味着存在或可获得的大量的；丰富的。" +
        "<br><br>" +
        "(C) '大量的' 意味着存在或产生大量的；丰富的。" +
        "<br><br>" +
        "(D) '足够的' 意味着足够的；充分的。"
    },
    {
        id: 10,
        question: "His __________ methods of negotiation often left his business rivals feeling outsmarted and frustrated.",
        chinese_question: "他 __________ 的谈判方法经常让他的商业对手感到被智胜和沮丧。",
        answers: [
            { option: "A", answer: "clumsy", chinese_answer: "笨拙的", chinese_romanization: "bènzhuō de" },
            { option: "B", answer: "wily", chinese_answer: "狡猾的", chinese_romanization: "jiǎohuá de" },
            { option: "C", answer: "honest", chinese_answer: "诚实的", chinese_romanization: "chéngshí de" },
            { option: "D", answer: "forthright", chinese_answer: "直率的", chinese_romanization: "zhíshuài de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'wily' means skilled at gaining an advantage, especially deceitfully." +
            "<br><br>" +
            "(A) 'clumsy' means awkward in movement or in handling things." +
            "<br><br>" +
            "(C) 'honest' means free of deceit and untruthfulness; sincere." +
            "<br><br>" +
            "(D) 'forthright' means direct and outspoken; straightforward and honest.",
        chinese_explanation: "(B) '狡猾的' 意味着擅长获得优势，特别是通过欺骗手段。" +
            "<br><br>" +
            "(A) '笨拙的' 意味着动作或处理事情时笨拙的。" +
            "<br><br>" +
            "(C) '诚实的' 意味着没有欺骗和虚伪；真诚的。" +
            "<br><br>" +
            "(D) '直率的' 意味着直接和坦率；直截了当的。"
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
