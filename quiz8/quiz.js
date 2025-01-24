// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "Her decision to move to a new city was made in an __________, driven by a sudden job offer she couldn't refuse.",
    chinese_question: "她决定搬到新城市是在 __________ 做出的，因为她突然接到一个无法拒绝的工作邀请。",
    answers: [
        { option: "A", answer: "instant", chinese_answer: "瞬间", chinese_romanization: "shùnjiān" },
        { option: "B", answer: "premeditated", chinese_answer: "预谋的", chinese_romanization: "yùmóu de" },
        { option: "C", answer: "prolonged", chinese_answer: "长时间的", chinese_romanization: "chángshíjiān de" },
        { option: "D", answer: "calculated", chinese_answer: "深思熟虑的", chinese_romanization: "shēnsī shúlǜ de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'instant' means happening or coming immediately." +
        "<br><br>" +
        "(B) 'premeditated' means planned or thought out beforehand." +
        "<br><br>" +
        "(C) 'prolonged' means continuing for a long time or longer than usual; lengthy." +
        "<br><br>" +
        "(D) 'calculated' means done with full awareness of the likely consequences.",
    chinese_explanation: "(A) '瞬间' 意味着立即发生或到来的。" +
        "<br><br>" +
        "(B) '预谋的' 意味着事先计划或考虑过的。" +
        "<br><br>" +
        "(C) '长时间的' 意味着持续很长时间或比平时更长的。" +
        "<br><br>" +
        "(D) '深思熟虑的' 意味着完全意识到可能的后果。"
    },
    {
        id: 2,
        question: "Her __________ prowess allowed her to learn new languages quickly.",
        chinese_question: "她的__________才能让她能够快速学习新语言。",
        answers: [
            { option: "A", answer: "artistic", chinese_answer: "艺术的", chinese_romanization: "yìshù de" },
            { option: "B", answer: "linguistic", chinese_answer: "语言的", chinese_romanization: "yǔyán de" },
            { option: "C", answer: "mechanical", chinese_answer: "机械的", chinese_romanization: "jīxiè de" },
            { option: "D", answer: "scientific", chinese_answer: "科学的", chinese_romanization: "kēxué de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'linguistic' means relating to language or linguistics." +
            "<br><br>" +
            "(A) 'artistic' means having or revealing natural creative skill." +
            "<br><br>" +
            "(C) 'mechanical' means working or produced by machines or machinery." +
            "<br><br>" +
            "(D) 'scientific' means based on or characterized by the methods and principles of science.",
        chinese_explanation: "(B) '语言的'一词意味着与语言或语言学有关的。" +
            "<br><br>" +
            "'艺术的' 意味着具有或展示自然创造技能的。" +
            "<br><br>" +
            "'机械的' 意味着由机器或机械工作或生产的。" +
            "<br><br>" +
            "'科学的' 意味着基于或以科学的方法和原则为特征的。"
    },
    {
        id: 3,
    question: "Remaining __________ about financial matters can lead to poor decision-making and loss of money.",
    chinese_question: "对财务问题保持__________可能会导致决策失误和金钱损失。",
    answers: [
        { option: "A", answer: "knowledgeable", chinese_answer: "知识渊博的", chinese_romanization: "zhīshì yuānbó de" },
        { option: "B", answer: "aware", chinese_answer: "了解的", chinese_romanization: "liǎojiě de" },
        { option: "C", answer: "ignorant", chinese_answer: "无知的", chinese_romanization: "wúzhī de" },
        { option: "D", answer: "informed", chinese_answer: "有见识的", chinese_romanization: "yǒu jiànshí de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'ignorant' means lacking knowledge or awareness in general; uneducated or unsophisticated. Figuratively, it can mean being uninformed or unaware about important matters." +
        "<br><br>" +
        "(A) 'knowledgeable' means intelligent and well-informed." +
        "<br><br>" +
        "(B) 'aware' means having knowledge or perception of a situation or fact." +
        "<br><br>" +
        "(D) 'informed' means having or showing knowledge of a particular subject or situation.",
    chinese_explanation: "(C) '无知的'一词意味着缺乏一般知识或意识的；未受教育或不成熟的。比喻地，它可以表示对重要事项不知情或不了解的。" +
        "<br><br>" +
        "(A) '知识渊博的' 意味着聪明和见多识广的。" +
        "<br><br>" +
        "(B) '了解的' 意味着对情况或事实有认识的。" +
        "<br><br>" +
        "(D) '有见识的' 意味着对特定主题或情况有或表现出知识的。"
    },
    {
        id: 4,
        question: "The manager's __________ behavior made it hard for employees to approach him with their concerns.",
        chinese_question: "经理的 __________ 行为使员工很难带着他们的担忧去找他。",
        answers: [
            { option: "A", answer: "accessible", chinese_answer: "平易近人的", chinese_romanization: "píngyìjìnrén de" },
            { option: "B", answer: "pompous", chinese_answer: "自负的", chinese_romanization: "zìfù de" },
            { option: "C", answer: "considerate", chinese_answer: "体贴的", chinese_romanization: "tǐtiē de" },
            { option: "D", answer: "respectful", chinese_answer: "尊重的", chinese_romanization: "zūnzhòng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pompous' means affectedly and irritatingly grand, solemn, or self-important." +
            "<br><br>" +
            "(A) 'accessible' means able to be reached or easily obtained." +
            "<br><br>" +
            "(C) 'considerate' means careful not to cause inconvenience or hurt to others." +
            "<br><br>" +
            "(D) 'respectful' means feeling or showing deference and respect.",
        chinese_explanation: "(B) '自负的' 意味着做作的和令人恼火的庄严或自以为是。" +
            "<br><br>" +
            "(A) '平易近人的' 意味着能够被接近或容易获得的。" +
            "<br><br>" +
            "(C) '体贴的' 意味着小心不引起不便或伤害他人的。" +
            "<br><br>" +
            "(D) '尊重的' 意味着感到或表现出敬意和尊重的。"
    },
    {
        id: 5,
    question: "Her __________ dreams of becoming a famous artist were inspiring but not grounded in reality.",
    chinese_question: "她成为著名艺术家的__________梦想是鼓舞人心的，但不现实。",
    answers: [
        { option: "A", answer: "practical", chinese_answer: "实际的", chinese_romanization: "shíjì de" },
        { option: "B", answer: "realistic", chinese_answer: "现实的", chinese_romanization: "xiànshí de" },
        { option: "C", answer: "quixotic", chinese_answer: "不切实际的", chinese_romanization: "bùqiè shíjì de" },
        { option: "D", answer: "pragmatic", chinese_answer: "务实的", chinese_romanization: "wùshí de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'quixotic' means exceedingly idealistic; unrealistic and impractical. Figuratively, it can mean being very romantic and visionary." +
        "<br><br>" +
        "(A) 'practical' means concerned with the actual doing or use of something rather than with theory and ideas." +
        "<br><br>" +
        "(B) 'realistic' means having or showing a sensible and practical idea of what can be achieved or expected." +
        "<br><br>" +
        "(D) 'pragmatic' means dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations.",
    chinese_explanation: "(C) '不切实际的'一词意味着极其理想主义的；不现实的和不切实际的。比喻地，它可以表示非常浪漫和有远见的。" +
        "<br><br>" +
        "(A) '实际的' 意味着关注实际操作或使用的，而不是理论和想法的。" +
        "<br><br>" +
        "(B) '现实的' 意味着对可以实现或期望的事情有或表现出明智和实际的想法。" +
        "<br><br>" +
        "(D) '务实的' 意味着以务实的方式处理事情，而不是基于理论考虑的。"
    },
    {
        id: 6,
        question: "The __________ silence in the room made everyone uneasy, as if something terrible was about to happen.",
        chinese_question: "房间里的__________沉默让每个人都感到不安，仿佛有什么可怕的事情即将发生。",
        answers: [
            { option: "A", answer: "reassuring", chinese_answer: "令人放心的", chinese_romanization: "lìng rén fàngxīn de" },
            { option: "B", answer: "comforting", chinese_answer: "令人安慰的", chinese_romanization: "lìng rén ānwèi de" },
            { option: "C", answer: "ominous", chinese_answer: "不祥的", chinese_romanization: "bùxiáng de" },
            { option: "D", answer: "promising", chinese_answer: "有希望的", chinese_romanization: "yǒu xīwàng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ominous' means giving the impression that something bad or unpleasant is going to happen; threatening; inauspicious. Figuratively, it can mean creating a feeling of dread or apprehension." +
            "<br><br>" +
            "(A) 'reassuring' means serving or intended to remove someone's doubts or fears." +
            "<br><br>" +
            "(B) 'comforting' means serving to alleviate a person's feelings of grief or distress." +
            "<br><br>" +
            "(D) 'promising' means showing signs of future success.",
        chinese_explanation: "(C) '不祥的'一词意味着给人一种不好的或不愉快的事情即将发生的印象；威胁的；不吉利的。比喻地，它可以表示创造一种恐惧或不安的感觉。" +
            "<br><br>" +
            "(A) '令人放心的' 意味着旨在或意在消除某人的疑虑或恐惧的。" +
            "<br><br>" +
            "(B) '令人安慰的' 意味着用于减轻一个人的悲伤或痛苦的感情的。" +
            "<br><br>" +
            "(D) '有希望的' 意味着显示未来成功的迹象的。"
    },
    {
        id: 7,
    question: "Balancing work and family life can be challenging, but with good time management, it is quite __________.",
    chinese_question: "平衡工作和家庭生活可能是个挑战，但通过良好的时间管理，它是相当 __________ 的。",
    answers: [
        { option: "A", answer: "manageable", chinese_answer: "可管理的", chinese_romanization: "kě guǎnlǐ de" },
        { option: "B", answer: "insurmountable", chinese_answer: "不可克服的", chinese_romanization: "bù kě kèfú de" },
        { option: "C", answer: "complicated", chinese_answer: "复杂的", chinese_romanization: "fùzá de" },
        { option: "D", answer: "unfeasible", chinese_answer: "不可行的", chinese_romanization: "bù kěxíng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'manageable' means able to be managed, controlled, or accomplished without great difficulty." +
        "<br><br>" +
        "(B) 'insurmountable' means too great to be overcome." +
        "<br><br>" +
        "(C) 'complicated' means consisting of many interconnecting parts or elements; intricate." +
        "<br><br>" +
        "(D) 'unfeasible' means not possible to do easily or conveniently.",
    chinese_explanation: "(A) '可管理的' 意味着能够被管理、控制或完成而没有太大困难。" +
        "<br><br>" +
        "(B) '不可克服的' 意味着难以克服的。" +
        "<br><br>" +
        "(C) '复杂的' 意味着由许多相互连接的部分或元素组成的；错综复杂的。" +
        "<br><br>" +
        "(D) '不可行的' 意味着不容易或方便完成的。"
    },
    {
        id: 8,
    question: "The speaker's __________ presentation failed to capture the audience's attention, leaving many people bored and uninterested.",
    chinese_question: "演讲者的 __________ 演讲未能吸引观众的注意力，让许多人感到无聊和不感兴趣。",
    answers: [
        { option: "A", answer: "insipid", chinese_answer: "枯燥乏味的", chinese_romanization: "kūzào fáwèi de" },
        { option: "B", answer: "engaging", chinese_answer: "吸引人的", chinese_romanization: "xīyǐn rén de" },
        { option: "C", answer: "captivating", chinese_answer: "迷人的", chinese_romanization: "mírén de" },
        { option: "D", answer: "stimulating", chinese_answer: "激动人心的", chinese_romanization: "jīdòng rénxīn de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'insipid' means lacking vigor or interest; dull." +
        "<br><br>" +
        "(B) 'engaging' means charming and attractive." +
        "<br><br>" +
        "(C) 'captivating' means capable of attracting and holding interest." +
        "<br><br>" +
        "(D) 'stimulating' means encouraging or arousing interest or enthusiasm.",
    chinese_explanation: "(A) '枯燥乏味的' 意味着缺乏活力或兴趣的；乏味的。" +
        "<br><br>" +
        "(B) '吸引人的' 意味着有魅力和吸引力的。" +
        "<br><br>" +
        "(C) '迷人的' 意味着能够吸引和保持兴趣的。" +
        "<br><br>" +
        "(D) '激动人心的' 意味着鼓励或激发兴趣或热情的。"
    },
    {
        id: 9,
        question: "His decisions were often __________, leaving his team confused and frustrated.",
        chinese_question: "他的决定经常是__________的，使他的团队感到困惑和沮丧。",
        answers: [
            { option: "A", answer: "consistent", chinese_answer: "一致的", chinese_romanization: "yīzhì de" },
            { option: "B", answer: "fair", chinese_answer: "公平的", chinese_romanization: "gōngpíng de" },
            { option: "C", answer: "arbitrary", chinese_answer: "随意的", chinese_romanization: "suíyì de" },
            { option: "D", answer: "logical", chinese_answer: "合逻辑的", chinese_romanization: "hé luójí de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'arbitrary' means based on random choice or personal whim, rather than any reason or system. Figuratively, it can mean acting without clear reasoning or consistency." +
            "<br><br>" +
            "(A) 'consistent' means acting or done in the same way over time, especially so as to be fair or accurate." +
            "<br><br>" +
            "(B) 'fair' means in accordance with the rules or standards; legitimate." +
            "<br><br>" +
            "(D) 'logical' means of or according to the rules of logic or formal argument.",
        chinese_explanation: "(C) '随意的'一词意味着基于随机选择或个人心血来潮，而不是任何理由或系统。比喻地，它可以表示在没有明确理由或一致性的情况下行事。" +
            "<br><br>" +
            "'一致的' 意味着随着时间的推移以相同的方式行事或完成，尤其是为了公平或准确。" +
            "<br><br>" +
            "'公平的' 意味着符合规则或标准；合法的。" +
            "<br><br>" +
            "'合逻辑的' 意味着根据逻辑或正式论证的规则。"
    },
    {
        id: 10,
        question: "The __________ manager refused to approve any expenses that were not absolutely necessary.",
        chinese_question: "这位 __________ 的经理拒绝批准任何非绝对必要的费用。",
        answers: [
            { option: "A", answer: "lavish", chinese_answer: "奢华的", chinese_romanization: "shēhuá de" },
            { option: "B", answer: "parsimonious", chinese_answer: "吝啬的", chinese_romanization: "lìnsè de" },
            { option: "C", answer: "generous", chinese_answer: "慷慨的", chinese_romanization: "kāngkǎi de" },
            { option: "D", answer: "liberal", chinese_answer: "自由的", chinese_romanization: "zìyóu de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'parsimonious' means unwilling to spend money or use resources; stingy or frugal." +
            "<br><br>" +
            "(A) 'lavish' means sumptuously rich, elaborate, or luxurious." +
            "<br><br>" +
            "(C) 'generous' means showing a readiness to give more of something, as money or time, than is strictly necessary or expected." +
            "<br><br>" +
            "(D) 'liberal' means open to new behavior or opinions and willing to discard traditional values.",
        chinese_explanation: "(B) '吝啬的' 意味着不愿花钱或使用资源；吝啬或节俭的。" +
            "<br><br>" +
            "(A) '奢华的' 意味着富丽堂皇、精致或豪华的。" +
            "<br><br>" +
            "(C) '慷慨的' 意味着准备给予比严格必要或预期更多的东西，如金钱或时间。" +
            "<br><br>" +
            "(D) '自由的' 意味着对新的行为或观点持开放态度，愿意抛弃传统价值观的。"
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
