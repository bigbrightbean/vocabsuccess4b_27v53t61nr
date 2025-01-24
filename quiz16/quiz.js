// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The environmental damage caused by the oil spill was deemed __________, impacting the ecosystem for decades.",
    chinese_question: "石油泄漏造成的环境破坏被认为是 __________ 的，对生态系统的影响将持续数十年。",
    answers: [
        { option: "A", answer: "reversible", chinese_answer: "可逆的", chinese_romanization: "kě nì de" },
        { option: "B", answer: "irreparable", chinese_answer: "无法修复的", chinese_romanization: "wúfǎ xiūfù de" },
        { option: "C", answer: "fixable", chinese_answer: "可修复的", chinese_romanization: "kě xiūfù de" },
        { option: "D", answer: "slight", chinese_answer: "轻微的", chinese_romanization: "qīngwēi de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'irreparable' means (of an injury or loss) impossible to rectify or repair." +
        "<br><br>" +
        "(A) 'reversible' means able to be turned the other way around or restored to the original condition." +
        "<br><br>" +
        "(C) 'fixable' means able to be fixed or repaired." +
        "<br><br>" +
        "(D) 'slight' means small in degree; inconsiderable.",
    chinese_explanation: "(B) '无法修复的' 意味着（受伤或损失）无法修复或弥补的。" +
        "<br><br>" +
        "(A) '可逆的' 意味着能够被反转或恢复到原始状态的。" +
        "<br><br>" +
        "(C) '可修复的' 意味着能够修理或修复的。" +
        "<br><br>" +
        "(D) '轻微的' 意味着程度小的；不重要的。"
    },
    {
        id: 2,
    question: "His speech was __________, inspiring the crowd and igniting a sense of unity and purpose among them.",
    chinese_question: "他的演讲非常 __________，激励了人群，并在他们之间点燃了团结和目标感。",
    answers: [
        { option: "A", answer: "potent", chinese_answer: "强有力的", chinese_romanization: "qiángyǒulì de" },
        { option: "B", answer: "dull", chinese_answer: "沉闷的", chinese_romanization: "chénmèn de" },
        { option: "C", answer: "uninspiring", chinese_answer: "无启发性的", chinese_romanization: "wú qǐfā xìng de" },
        { option: "D", answer: "weak", chinese_answer: "无力的", chinese_romanization: "wúlì de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'potent' means having great power, influence, or effect." +
        "<br><br>" +
        "(B) 'dull' means lacking interest or excitement." +
        "<br><br>" +
        "(C) 'uninspiring' means not producing excitement or interest." +
        "<br><br>" +
        "(D) 'weak' means lacking the force or ability to inspire.",
    chinese_explanation: "(A) '强有力的' 意味着具有强大力量、影响力或效果的。" +
        "<br><br>" +
        "(B) '沉闷的' 意味着缺乏兴趣或兴奋的。" +
        "<br><br>" +
        "(C) '无启发性的' 意味着不产生兴奋或兴趣的。" +
        "<br><br>" +
        "(D) '无力的' 意味着缺乏激励能力的。"
    },
    {
        id: 3,
    question: "He had grown __________ with the endless social events, finding them repetitive and uninteresting.",
    chinese_question: "他对无休止的社交活动感到 __________，觉得它们重复而无趣。",
    answers: [
        { option: "A", answer: "jaded", chinese_answer: "厌倦的", chinese_romanization: "yànjuàn de" },
        { option: "B", answer: "intrigued", chinese_answer: "感兴趣的", chinese_romanization: "gǎn xìngqù de" },
        { option: "C", answer: "fascinated", chinese_answer: "入迷的", chinese_romanization: "rùmí de" },
        { option: "D", answer: "captivated", chinese_answer: "被迷住的", chinese_romanization: "bèi mízhù de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'jaded' means tired, bored, or lacking enthusiasm, typically after having had too much of something." +
        "<br><br>" +
        "(B) 'intrigued' means aroused the curiosity or interest of; fascinated." +
        "<br><br>" +
        "(C) 'fascinated' means intensely interested in or attracted by." +
        "<br><br>" +
        "(D) 'captivated' means attracted and held the interest and attention of; charmed.",
    chinese_explanation: "(A) '厌倦的' 意味着疲倦的、无聊的或缺乏热情的，通常是在经历过多之后。" +
        "<br><br>" +
        "(B) '感兴趣的' 意味着引起好奇心或兴趣；着迷的。" +
        "<br><br>" +
        "(C) '入迷的' 意味着非常感兴趣的或被吸引的。" +
        "<br><br>" +
        "(D) '被迷住的' 意味着吸引并保持了兴趣和注意力的；着迷的。"
    },
    {
        id: 4,
        question: "The novel's __________ tone perfectly captured the despair and hopelessness of the characters.",
        chinese_question: "小说的 __________ 基调完美地捕捉到了角色们的绝望和无助。",
        answers: [
            { option: "A", answer: "optimistic", chinese_answer: "乐观的", chinese_romanization: "lèguān de" },
            { option: "B", answer: "humorous", chinese_answer: "幽默的", chinese_romanization: "yōumò de" },
            { option: "C", answer: "mournful", chinese_answer: "悲伤的", chinese_romanization: "bēishāng de" },
            { option: "D", answer: "lighthearted", chinese_answer: "轻松的", chinese_romanization: "qīngsōng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'mournful' means feeling, expressing, or inducing sadness, regret, or grief." +
            "<br><br>" +
            "(A) 'optimistic' means hopeful and confident about the future." +
            "<br><br>" +
            "(B) 'humorous' means causing laughter and amusement." +
            "<br><br>" +
            "(D) 'lighthearted' means cheerful and carefree.",
        chinese_explanation: "(C) '悲伤的' 意味着感到、表达或引起悲伤、遗憾或悲痛的。" +
            "<br><br>" +
            "(A) '乐观的' 意味着对未来充满希望和信心的。" +
            "<br><br>" +
            "(B) '幽默的' 意味着引起笑声和娱乐的。" +
            "<br><br>" +
            "(D) '轻松的' 意味着愉快的和无忧无虑的。"
    },
    {
        id: 5,
        question: "His __________ attitude after losing the competition alienated him from his peers, who found his behavior petty and mean-spirited.",
        chinese_question: "他在比赛失败后的 __________ 态度使他与同龄人疏远了，他们觉得他的行为小气且心胸狭窄。",
        answers: [
            { option: "A", answer: "gracious", chinese_answer: "亲切的", chinese_romanization: "qīnqiè de" },
            { option: "B", answer: "humble", chinese_answer: "谦逊的", chinese_romanization: "qiānxùn de" },
            { option: "C", answer: "vindictive", chinese_answer: "报复的", chinese_romanization: "bàofù de" },
            { option: "D", answer: "magnanimous", chinese_answer: "宽宏大量的", chinese_romanization: "kuānhóngdàliàng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'vindictive' means having or showing a strong or unreasoning desire for revenge." +
            "<br><br>" +
            "(A) 'gracious' means courteous, kind, and pleasant." +
            "<br><br>" +
            "(B) 'humble' means having or showing a modest or low estimate of one's importance." +
            "<br><br>" +
            "(D) 'magnanimous' means very generous or forgiving, especially toward a rival or someone less powerful than oneself.",
        chinese_explanation: "(C) '报复的' 意味着有或表现出强烈或不理智的复仇欲望。" +
            "<br><br>" +
            "(A) '亲切的' 意味着彬彬有礼、友善和愉快的。" +
            "<br><br>" +
            "(B) '谦逊的' 意味着有或表现出对自己重要性的谦虚或低估。" +
            "<br><br>" +
            "(D) '宽宏大量的' 意味着非常慷慨或宽容，尤其是对竞争对手或比自己弱的人。"
    },
    {
        id: 6,
        question: "Despite the __________ gesture of bringing flowers, it was clear he hadn't put much thought into the gift.",
        chinese_question: "尽管带了花的 __________ 手势，但显然他并没有对这份礼物投入太多心思。",
        answers: [
            { option: "A", answer: "thoughtful", chinese_answer: "体贴", chinese_romanization: "tǐtiē" },
            { option: "B", answer: "perfunctory", chinese_answer: "敷衍", chinese_romanization: "fūyǎn" },
            { option: "C", answer: "sincere", chinese_answer: "真诚", chinese_romanization: "zhēnchéng" },
            { option: "D", answer: "heartfelt", chinese_answer: "真挚", chinese_romanization: "zhēnzhì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'perfunctory' means carried out with a minimum of effort or reflection." +
            "<br><br>" +
            "(A) 'thoughtful' means showing consideration for the needs of other people." +
            "<br><br>" +
            "(C) 'sincere' means free from pretense or deceit; genuine." +
            "<br><br>" +
            "(D) 'heartfelt' means showing strong feelings that are sincere.",
        chinese_explanation: "(B) '敷衍' 意味着以最小的努力或反思进行的。" +
            "<br><br>" +
            "(A) '体贴' 意味着为他人的需求着想。" +
            "<br><br>" +
            "(C) '真诚' 意味着没有虚伪或欺骗；真实的。" +
            "<br><br>" +
            "(D) '真挚' 意味着表现出强烈的真诚情感。"
    },
    {
        id: 7,
    question: "The hacker's __________ actions compromised the security of the company's data, leading to significant financial losses.",
    chinese_question: "黑客的 __________ 行为破坏了公司数据的安全，导致了重大财务损失。",
    answers: [
        { option: "A", answer: "malicious", chinese_answer: "恶意的", chinese_romanization: "èyì de" },
        { option: "B", answer: "benign", chinese_answer: "善意的", chinese_romanization: "shànyì de" },
        { option: "C", answer: "harmless", chinese_answer: "无害的", chinese_romanization: "wúhài de" },
        { option: "D", answer: "helpful", chinese_answer: "有帮助的", chinese_romanization: "yǒu bāngzhù de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'malicious' means characterized by malice; intending or intended to do harm." +
        "<br><br>" +
        "(B) 'benign' means gentle and kind." +
        "<br><br>" +
        "(C) 'harmless' means not able or likely to cause harm." +
        "<br><br>" +
        "(D) 'helpful' means giving or ready to give help.",
    chinese_explanation: "(A) '恶意的' 意味着充满恶意的；意图或旨在造成伤害的。" +
        "<br><br>" +
        "(B) '善意的' 意味着温和和善良的。" +
        "<br><br>" +
        "(C) '无害的' 意味着不能或不太可能造成伤害的。" +
        "<br><br>" +
        "(D) '有帮助的' 意味着给予或准备给予帮助的。"
    },
    {
        id: 8,
    question: "The CEO faced __________ backlash after the scandal was revealed, damaging the company's reputation.",
    chinese_question: "丑闻曝光后，首席执行官面临 __________ 的强烈反对，损害了公司的声誉。",
    answers: [
        { option: "A", answer: "mild", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
        { option: "B", answer: "gentle", chinese_answer: "温柔的", chinese_romanization: "wēnróu de" },
        { option: "C", answer: "horrendous", chinese_answer: "可怕的", chinese_romanization: "kěpà de" },
        { option: "D", answer: "moderate", chinese_answer: "适度的", chinese_romanization: "shìdù de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'horrendous' means extremely unpleasant, horrifying, or terrible." +
        "<br><br>" +
        "(A) 'mild' means not severe, serious, or harsh." +
        "<br><br>" +
        "(B) 'gentle' means having or showing a mild, kind, or tender temperament or character." +
        "<br><br>" +
        "(D) 'moderate' means average in amount, intensity, quality, or degree.",
    chinese_explanation: "(C) '可怕的' 意味着极其令人不快、恐怖或糟糕。" +
        "<br><br>" +
        "(A) '温和的' 意味着不严重、严肃或严厉。" +
        "<br><br>" +
        "(B) '温柔的' 意味着具有或表现出温和、善良或温柔的性情或性格。" +
        "<br><br>" +
        "(D) '适度的' 意味着在数量、强度、质量或程度上是平均的。"
    },
    {
        id: 9,
    question: "The __________ approach to solving the problem ignored the more complex issues involved.",
    chinese_question: "解决问题的 __________ 方法忽略了涉及的更复杂的问题。",
    answers: [
        { option: "A", answer: "thorough", chinese_answer: "彻底的", chinese_romanization: "chèdǐ de" },
        { option: "B", answer: "detailed", chinese_answer: "详细的", chinese_romanization: "xiángxì de" },
        { option: "C", answer: "shallow", chinese_answer: "浅薄的", chinese_romanization: "qiǎnbó de" },
        { option: "D", answer: "comprehensive", chinese_answer: "全面的", chinese_romanization: "quánmiàn de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'shallow' means not exhibiting, requiring, or capable of serious thought." +
        "<br><br>" +
        "(A) 'thorough' means complete with regard to every detail; not superficial or partial." +
        "<br><br>" +
        "(B) 'detailed' means having many details or facts; showing attention to detail." +
        "<br><br>" +
        "(D) 'comprehensive' means complete; including all or nearly all elements or aspects.",
    chinese_explanation: "(C) “浅薄的” 意味着没有表现出、要求或能够进行认真思考。" +
        "<br><br>" +
        "(A) '彻底的' 意味着在每一个细节上都很完整；不是表面或部分的。" +
        "<br><br>" +
        "(B) '详细的' 意味着有很多细节或事实；显示出对细节的关注。" +
        "<br><br>" +
        "(D) '全面的' 意味着完整的；包括所有或几乎所有元素或方面。"
    },
    {
        id: 10,
    question: "His success was __________, as he quickly returned to his previous struggles after a brief period of prosperity.",
    chinese_question: "他的成功是 __________ 的，因为在短暂的繁荣之后，他很快又回到了之前的挣扎。",
    answers: [
        { option: "A", answer: "enduring", chinese_answer: "持久的", chinese_romanization: "chíjiǔ de" },
        { option: "B", answer: "fleeting", chinese_answer: "短暂的", chinese_romanization: "duǎnzàn de" },
        { option: "C", answer: "lasting", chinese_answer: "长久的", chinese_romanization: "chángjiǔ de" },
        { option: "D", answer: "constant", chinese_answer: "持续的", chinese_romanization: "chíxù de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'fleeting' means lasting for a very short time." +
        "<br><br>" +
        "(A) 'enduring' means lasting over a period of time; durable." +
        "<br><br>" +
        "(C) 'lasting' means continuing for a long time." +
        "<br><br>" +
        "(D) 'constant' means occurring continuously over a period of time.",
    chinese_explanation: "(B) '短暂的' 意味着持续时间很短的。" +
        "<br><br>" +
        "(A) '持久的' 意味着持续一段时间的；耐用的。" +
        "<br><br>" +
        "(C) '长久的' 意味着持续很长时间的。" +
        "<br><br>" +
        "(D) '持续的' 意味着在一段时间内连续发生的。"
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
