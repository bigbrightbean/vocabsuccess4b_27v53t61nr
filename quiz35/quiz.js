// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The proposal was __________ to the committee, who appreciated its thorough research and practical recommendations.",
    chinese_question: "这个提议对委员会来说是 __________ 的，他们欣赏其详尽的研究和实用的建议。",
    answers: [
        { option: "A", answer: "palatable", chinese_answer: "可接受的", chinese_romanization: "kě jiēshòu de" },
        { option: "B", answer: "disagreeable", chinese_answer: "令人不快的", chinese_romanization: "lìng rén bùkuài de" },
        { option: "C", answer: "problematic", chinese_answer: "有问题的", chinese_romanization: "yǒu wèntí de" },
        { option: "D", answer: "contentious", chinese_answer: "有争议的", chinese_romanization: "yǒu zhēngyì de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'palatable' means acceptable or satisfactory." +
        "<br><br>" +
        "(B) 'disagreeable' means not pleasant or enjoyable." +
        "<br><br>" +
        "(C) 'problematic' means constituting or presenting a problem or difficulty." +
        "<br><br>" +
        "(D) 'contentious' means causing or likely to cause an argument; controversial.",
    chinese_explanation: "(A) '可接受的' 意味着可以接受或令人满意的。" +
        "<br><br>" +
        "(B) '令人不快的' 意味着不愉快或不享受的。" +
        "<br><br>" +
        "(C) '有问题的' 意味着构成或提出问题或困难的。" +
        "<br><br>" +
        "(D) '有争议的' 意味着引起或可能引起争论的；有争议的。"
    },
    {
        id: 2,
    question: "Their relationship status remained __________, with both parties unwilling to define what they were to each other.",
    chinese_question: "他们的关系状态仍然 __________，双方都不愿意定义他们彼此的关系。",
    answers: [
        { option: "A", answer: "indefinite", chinese_answer: "不明确的", chinese_romanization: "bù míngquè de" },
        { option: "B", answer: "certain", chinese_answer: "确定的", chinese_romanization: "quèdìng de" },
        { option: "C", answer: "explicit", chinese_answer: "明确的", chinese_romanization: "míngquè de" },
        { option: "D", answer: "unambiguous", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'indefinite' means not certain, not clear, or without fixed limits." +
        "<br><br>" +
        "(B) 'certain' means known for sure; established beyond doubt." +
        "<br><br>" +
        "(C) 'explicit' means stated clearly and in detail, leaving no room for confusion or doubt." +
        "<br><br>" +
        "(D) 'unambiguous' means not open to more than one interpretation.",
    chinese_explanation: "(A) '不明确的' 意味着不确定、不清楚或没有固定限制的。" +
        "<br><br>" +
        "(B) '确定的' 意味着确定无疑的。" +
        "<br><br>" +
        "(C) '明确的' 意味着清晰而详细地陈述，没有混淆或怀疑的余地。" +
        "<br><br>" +
        "(D) '清晰的' 意味着没有超过一种解释的。"
    },
    {
        id: 3,
    question: "The committee made a __________ decision to allocate funds to the most promising projects, ensuring the best use of their resources.",
    chinese_question: "委员会做出了 __________ 的决定，将资金分配给最有前途的项目，确保资源的最佳使用。",
    answers: [
        { option: "A", answer: "judicious", chinese_answer: "明智的", chinese_romanization: "míngzhì de" },
        { option: "B", answer: "hasty", chinese_answer: "匆忙的", chinese_romanization: "cōngmáng de" },
        { option: "C", answer: "arbitrary", chinese_answer: "任意的", chinese_romanization: "rènyì de" },
        { option: "D", answer: "capricious", chinese_answer: "反复无常的", chinese_romanization: "fǎnfù wúcháng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'judicious' means having, showing, or done with good judgment or sense." +
        "<br><br>" +
        "(B) 'hasty' means done with excessive speed or urgency; hurried." +
        "<br><br>" +
        "(C) 'arbitrary' means based on random choice or personal whim, rather than any reason or system." +
        "<br><br>" +
        "(D) 'capricious' means given to sudden and unaccountable changes of mood or behavior.",
    chinese_explanation: "(A) '明智的' 意味着具有、表现出或做出良好的判断或见识。" +
        "<br><br>" +
        "(B) '匆忙的' 意味着以过快的速度或紧迫感完成的；匆忙的。" +
        "<br><br>" +
        "(C) '任意的' 意味着基于随机选择或个人的突发奇想，而不是任何理由或系统的。" +
        "<br><br>" +
        "(D) '反复无常的' 意味着情绪或行为突然且无缘无故地变化的。"
    },
    {
        id: 4,
        question: "The __________ novel provided an in-depth look at life in the medieval period, complete with accurate depictions of the era's customs and traditions.",
        chinese_question: "这部 __________ 小说深入描绘了中世纪时期的生活，准确展现了那个时代的风俗和传统。",
        answers: [
            { option: "A", answer: "fictional", chinese_answer: "虚构的", chinese_romanization: "xūgòu de" },
            { option: "B", answer: "modern", chinese_answer: "现代的", chinese_romanization: "xiàndài de" },
            { option: "C", answer: "historical", chinese_answer: "历史的", chinese_romanization: "lìshǐ de" },
            { option: "D", answer: "speculative", chinese_answer: "推测的", chinese_romanization: "tuīcè de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'historical' means relating to the study or representation of past events." +
            "<br><br>" +
            "(A) 'fictional' means relating to fiction; not real." +
            "<br><br>" +
            "(B) 'modern' means relating to the present or recent times as opposed to the remote past." +
            "<br><br>" +
            "(D) 'speculative' means engaged in, expressing, or based on conjecture rather than knowledge.",
        chinese_explanation: "(C) '历史的' 意味着与过去事件的研究或表现有关的。" +
            "<br><br>" +
            "(A) '虚构的' 意味着与虚构有关的；不真实的。" +
            "<br><br>" +
            "(B) '现代的' 意味着与现在或最近的时间有关，而不是遥远的过去。" +
            "<br><br>" +
            "(D) '推测的' 意味着从事、表达或基于猜测而不是知识的。"
    },
    {
        id: 5,
        question: "Her __________ remarks during the meeting made it clear she didn't believe in the project's potential, undermining the team's morale.",
        chinese_question: "她在会议上的 __________ 言论表明她不相信项目的潜力，削弱了团队的士气。",
        answers: [
            { option: "A", answer: "snide", chinese_answer: "挖苦的", chinese_romanization: "wākǔ de" },
            { option: "B", answer: "supportive", chinese_answer: "支持的", chinese_romanization: "zhīchí de" },
            { option: "C", answer: "encouraging", chinese_answer: "鼓励的", chinese_romanization: "gǔlì de" },
            { option: "D", answer: "constructive", chinese_answer: "建设性的", chinese_romanization: "jiànshè xìng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'snide' means derogatory or mocking in an indirect way." +
            "<br><br>" +
            "(B) 'supportive' means providing encouragement or emotional help." +
            "<br><br>" +
            "(C) 'encouraging' means giving someone support or confidence; supportive." +
            "<br><br>" +
            "(D) 'constructive' means serving a useful purpose; tending to build up.",
        chinese_explanation: "(A) '挖苦的' 意味着以间接方式贬低或嘲讽的。" +
            "<br><br>" +
            "(B) '支持的' 意味着提供鼓励或情感帮助的。" +
            "<br><br>" +
            "(C) '鼓励的' 意味着给予某人支持或信心的；支持的。" +
            "<br><br>" +
            "(D) '建设性的' 意味着起到有用的作用的；倾向于建设的。"
    },
    {
        id: 6,
    question: "The author's __________ descriptions of the countryside made readers feel as if they were walking through the fields and forests themselves.",
    chinese_question: "作者对乡村的 __________ 描述让读者感到仿佛自己正在田野和森林中漫步。",
    answers: [
        { option: "A", answer: "picturesque", chinese_answer: "如画的", chinese_romanization: "rúhuà de" },
        { option: "B", answer: "vague", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
        { option: "C", answer: "dull", chinese_answer: "枯燥的", chinese_romanization: "kūzào de" },
        { option: "D", answer: "uninspired", chinese_answer: "无灵感的", chinese_romanization: "wú línggǎn de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'picturesque' means visually attractive, especially in a quaint or charming way." +
        "<br><br>" +
        "(B) 'vague' means of uncertain, indefinite, or unclear character or meaning." +
        "<br><br>" +
        "(C) 'dull' means lacking interest or excitement." +
        "<br><br>" +
        "(D) 'uninspired' means lacking in imagination or originality.",
    chinese_explanation: "(A) '如画的' 意味着视觉上有吸引力的，尤其是以一种古雅或迷人的方式。" +
        "<br><br>" +
        "(B) '模糊的' 意味着特征或意义不确定、不明确的。" +
        "<br><br>" +
        "(C) '枯燥的' 意味着缺乏兴趣或兴奋的。" +
        "<br><br>" +
        "(D) '无灵感的' 意味着缺乏想象力或独创性的。"
    },
    {
        id: 7,
    question: "The meeting was __________, allowing everyone to speak freely without strict protocols.",
    chinese_question: "会议是 __________ 的，允许每个人在没有严格礼节的情况下自由发言。",
    answers: [
        { option: "A", answer: "formal", chinese_answer: "正式", chinese_romanization: "zhèngshì" },
        { option: "B", answer: "stiff", chinese_answer: "生硬", chinese_romanization: "shēngyìng" },
        { option: "C", answer: "informal", chinese_answer: "非正式", chinese_romanization: "fēi zhèngshì" },
        { option: "D", answer: "rigid", chinese_answer: "僵硬", chinese_romanization: "jiāngyìng" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'informal' means having a relaxed, friendly, or unofficial style, manner, or nature." +
        "<br><br>" +
        "(A) 'formal' means done in accordance with rules of convention or etiquette." +
        "<br><br>" +
        "(B) 'stiff' means not easily bent or changed in shape; rigid." +
        "<br><br>" +
        "(D) 'rigid' means unable to bend or be forced out of shape; not flexible.",
    chinese_explanation: "(C) '非正式' 意味着有一种放松、友好或非官方的风格、方式或性质。" +
        "<br><br>" +
        "(A) '正式' 意味着按照惯例或礼节的规则进行。" +
        "<br><br>" +
        "(B) '生硬' 意味着不容易弯曲或改变形状；僵硬的。" +
        "<br><br>" +
        "(D) '僵硬' 意味着不能弯曲或被迫变形；不灵活的。"
    },
    {
        id: 8,
        question: "Despite the harsh criticism, the artist's skill was __________, as evidenced by the intricate details and perfect proportions in her sculptures.",
        chinese_question: "尽管受到严厉的批评，这位艺术家的技艺是 __________ 的，因为她的雕塑中体现了复杂的细节和完美的比例。",
        answers: [
            { option: "A", answer: "questionable", chinese_answer: "有疑问的", chinese_romanization: "yǒu yíwèn de" },
            { option: "B", answer: "disputable", chinese_answer: "可争辩的", chinese_romanization: "kě zhēngbiàn de" },
            { option: "C", answer: "undeniable", chinese_answer: "不可否认的", chinese_romanization: "bùkě fǒurèn de" },
            { option: "D", answer: "ambiguous", chinese_answer: "模糊的", chinese_romanization: "móhú de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'undeniable' means unable to be denied or disputed." +
            "<br><br>" +
            "(A) 'questionable' means doubtful as regards truth or validity." +
            "<br><br>" +
            "(B) 'disputable' means open to question or debate." +
            "<br><br>" +
            "(D) 'ambiguous' means open to more than one interpretation; not having one obvious meaning.",
        chinese_explanation: "(C) '不可否认的' 意味着无法被否认或质疑。" +
            "<br><br>" +
            "(A) '有疑问的' 意味着在真相或有效性方面值得怀疑。" +
            "<br><br>" +
            "(B) '可争辩的' 意味着可以质疑或争论。" +
            "<br><br>" +
            "(D) '模糊的' 意味着可以有多种解释；没有明显的意义。"
    },
    {
        id: 9,
        question: "Her __________ complaints about the service made it difficult for everyone to enjoy the meal.",
        chinese_question: "她对服务的 __________ 抱怨让大家难以享受这顿饭。",
        answers: [
            { option: "A", answer: "cheerful", chinese_answer: "愉快", chinese_romanization: "yúkuài" },
            { option: "B", answer: "querulous", chinese_answer: "爱抱怨", chinese_romanization: "ài bàoyuàn" },
            { option: "C", answer: "silent", chinese_answer: "沉默", chinese_romanization: "chénmò" },
            { option: "D", answer: "satisfied", chinese_answer: "满意", chinese_romanization: "mǎnyì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'querulous' means complaining in a petulant or whining manner." +
            "<br><br>" +
            "(A) 'cheerful' means noticeably happy and optimistic." +
            "<br><br>" +
            "(C) 'silent' means not making or accompanied by any sound." +
            "<br><br>" +
            "(D) 'satisfied' means contented; pleased.",
        chinese_explanation: "(B) '爱抱怨' 一词意味着以任性或哀怨的方式抱怨。" +
            "<br><br>" +
            "(A) '愉快' 意味着显得快乐和乐观。" +
            "<br><br>" +
            "(C) '沉默' 意味着不发出任何声音或没有声音陪伴的。" +
            "<br><br>" +
            "(D) '满意' 意味着满足；愉快。"
    },
    {
        id: 10,
        question: "The debate highlighted the __________ differences in their approaches to the issue.",
        chinese_question: "辩论突显了他们在处理问题上的__________差异。",
        answers: [
            { option: "A", answer: "similar", chinese_answer: "相似的", chinese_romanization: "xiāngsì de" },
            { option: "B", answer: "polar", chinese_answer: "极端的", chinese_romanization: "jíduān de" },
            { option: "C", answer: "aligned", chinese_answer: "一致的", chinese_romanization: "yīzhì de" },
            { option: "D", answer: "congruent", chinese_answer: "和谐的", chinese_romanization: "héxié de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'polar' means relating to the North or South Pole; characterized by complete or almost complete opposition. Figuratively, it can mean being extremely different or opposite." +
            "<br><br>" +
            "(A) 'similar' means resembling without being identical." +
            "<br><br>" +
            "(C) 'aligned' means arranged in a straight line or in correct relative positions." +
            "<br><br>" +
            "(D) 'congruent' means in agreement or harmony.",
        chinese_explanation: "(B) '极端的'一词意味着与北极或南极有关的；具有完全或几乎完全的对立性。比喻地，它可以表示极为不同或相反的。" +
            "<br><br>" +
            "(A) '相似的' 意味着相似但不完全相同。" +
            "<br><br>" +
            "(C) '一致的' 意味着排列成一条直线或在正确的相对位置上。" +
            "<br><br>" +
            "(D) '和谐的' 意味着一致或和谐。"
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
