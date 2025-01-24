// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The chef's dish was ruined by the __________ of spices, which overwhelmed the natural flavors of the ingredients.",
        chinese_question: "厨师的菜因 __________ 的香料而毁了，这些香料掩盖了食材的天然味道。",
        answers: [
                { option: "A", answer: "balance", chinese_answer: "平衡", chinese_romanization: "pínghéng" },
                { option: "B", answer: "nimiety", chinese_answer: "过多", chinese_romanization: "guòduō" },
                { option: "C", answer: "paucity", chinese_answer: "缺乏", chinese_romanization: "quēfá" },
                { option: "D", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'nimiety' means excess or overabundance." +
            "<br><br>" +
            "(A) 'balance' means an even distribution of weight enabling someone or something to remain upright and steady." +
            "<br><br>" +
            "(C) 'paucity' means the presence of something in only small or insufficient quantities or amounts." +
            "<br><br>" +
            "(D) 'harmony' means the combination of simultaneously sounded musical notes to produce chords and chord progressions having a pleasing effect.",
        chinese_explanation: "(B) '过多' 意味着过多或过剩。" +
            "<br><br>" +
            "(A) '平衡' 意味着重量均匀分布，使某人或某物保持直立和稳定。" +
            "<br><br>" +
            "(C) '缺乏' 意味着某物的存在仅为少量或不足量。" +
            "<br><br>" +
            "(D) '和谐' 意味着同时发声的音乐音符的组合，以产生和弦和和弦进行，具有令人愉悦的效果。"
    },
    {
        id: 2,
    question: "The company's profits reached their __________ last year but have since declined.",
    chinese_question: "去年的公司利润达到了 __________，但自那以后有所下降。",
    answers: [
        { option: "A", answer: "peak", chinese_answer: "顶峰", chinese_romanization: "dǐngfēng" },
        { option: "B", answer: "base", chinese_answer: "底部", chinese_romanization: "dǐbù" },
        { option: "C", answer: "average", chinese_answer: "平均", chinese_romanization: "píngjūn" },
        { option: "D", answer: "minimum", chinese_answer: "最低", chinese_romanization: "zuìdī" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'peak' means the highest point." + 
        "<br><br>" + 
        "(B) 'base' means the bottom or lowest part of something." + 
        "<br><br>" + 
        "(C) 'average' means a number expressing the central or typical value in a set of data." + 
        "<br><br>" + 
        "(D) 'minimum' means the least or smallest amount or quantity possible, attainable, or required.",
    chinese_explanation: "(A) '顶峰' 意味着最高点。" + 
        "<br><br>" + 
        "(B) '底部' 意味着某物的底部或最低部分。" + 
        "<br><br>" + 
        "(C) '平均' 意味着表示一组数据中的中心值或典型值的数字。" + 
        "<br><br>" + 
        "(D) '最低' 意味着可能的、可获得的或需要的最少或最小数量。"
    },
    {
        id: 3,
    question: "Her offhand __________ was taken more seriously than she intended.",
    chinese_question: "她漫不经心的 __________ 被比她预期的更加认真对待。",
    answers: [
        { option: "A", answer: "remark", chinese_answer: "评论", chinese_romanization: "pínglùn" },
        { option: "B", answer: "demand", chinese_answer: "要求", chinese_romanization: "yāoqiú" },
        { option: "C", answer: "command", chinese_answer: "命令", chinese_romanization: "mìnglìng" },
        { option: "D", answer: "plea", chinese_answer: "请求", chinese_romanization: "qǐngqiú" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'remark' means a spoken statement or comment." + 
        "<br><br>" + 
        "(B) 'demand' means an insistent and peremptory request, made as if by right." + 
        "<br><br>" + 
        "(C) 'command' means an authoritative order." + 
        "<br><br>" + 
        "(D) 'plea' means a request made in an urgent and emotional manner.",
    chinese_explanation: "(A) '评论' 意味着口头的陈述或评论。" + 
        "<br><br>" + 
        "(B) '要求' 意味着坚持和强硬地请求，好像理所当然。" + 
        "<br><br>" + 
        "(C) '命令' 意味着权威的指令。" + 
        "<br><br>" + 
        "(D) '请求' 意味着以紧急和情绪化的方式提出的请求。"
    },
    {
        id: 4,
        question: "The company's stock prices fell to their __________ amid the financial crisis.",
        chinese_question: "在金融危机期间，该公司的股价跌至 __________。",
        answers: [
            { option: "A", answer: "nadir", chinese_answer: "最低点", chinese_romanization: "zuìdī diǎn" },
            { option: "B", answer: "apex", chinese_answer: "顶点", chinese_romanization: "dǐngdiǎn" },
            { option: "C", answer: "surge", chinese_answer: "激增", chinese_romanization: "jīzēng" },
            { option: "D", answer: "ascend", chinese_answer: "上升", chinese_romanization: "shàngshēng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'nadir' figuratively means the lowest point in the fortunes of a person or organization." +
            "<br><br>" +
            "(B) 'apex' means the top or highest part of something, especially one forming a point." +
            "<br><br>" +
            "(C) 'surge' means a sudden powerful forward or upward movement." +
            "<br><br>" +
            "(D) 'ascend' means to go up or climb.",
        chinese_explanation: "(A) '最低点' 在此语境下意指一个人或组织财富的最低点。" +
            "<br><br>" +
            "(B) '顶点' 意味着某物的顶部或最高部分，尤其是形成一个点的部分。" +
            "<br><br>" +
            "(C) '激增' 意味着突然强劲的前进或上升运动。" +
            "<br><br>" +
            "(D) '上升' 意味着向上或攀登。"
    },
    {
        id: 5,
        question: "The __________ he felt towards his rival was rooted in years of bitter competition and personal clashes.",
        chinese_question: "他对竞争对手的 __________ 源于多年激烈的竞争和个人冲突。",
        answers: [
            { option: "A", answer: "antipathy", chinese_answer: "反感", chinese_romanization: "fǎngǎn" },
            { option: "B", answer: "friendship", chinese_answer: "友谊", chinese_romanization: "yǒuyì" },
            { option: "C", answer: "admiration", chinese_answer: "钦佩", chinese_romanization: "qīnpèi" },
            { option: "D", answer: "respect", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'antipathy' means a deep-seated feeling of dislike; aversion." +
            "<br><br>" +
            "(B) 'friendship' means the emotions or conduct of friends; the state of being friends." +
            "<br><br>" +
            "(C) 'admiration' means respect and warm approval." +
            "<br><br>" +
            "(D) 'respect' means a feeling of deep admiration for someone or something elicited by their abilities, qualities, or achievements.",
        chinese_explanation: "(A) '反感' 意味着深深的厌恶感；反感。" +
            "<br><br>" +
            "(B) '友谊' 意味着朋友的情感或行为；朋友的状态。" +
            "<br><br>" +
            "(C) '钦佩' 意味着尊敬和热烈的赞同。" +
            "<br><br>" +
            "(D) '尊重' 意味着由于某人的能力、品质或成就而产生的深深的钦佩感。"
    },
    {
        id: 6,
    question: "The __________ within the team became apparent when members started openly criticizing each other’s ideas.",
    chinese_question: "当团队成员开始公开批评彼此的想法时，团队内部的 __________ 变得明显。",
    answers: [
        { option: "A", answer: "schism", chinese_answer: "分裂", chinese_romanization: "fēnliè" },
        { option: "B", answer: "unity", chinese_answer: "团结", chinese_romanization: "tuánjié" },
        { option: "C", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" },
        { option: "D", answer: "consensus", chinese_answer: "共识", chinese_romanization: "gòngshí" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'schism' means a split or division between strongly opposed sections or parties, caused by differences in opinion or belief." + 
        "<br><br>" + 
        "(B) 'unity' means the state of being united or joined as a whole." + 
        "<br><br>" + 
        "(C) 'harmony' means agreement or concord." + 
        "<br><br>" + 
        "(D) 'consensus' means general agreement.",
    chinese_explanation: "(A) '分裂'一词意味着由于意见或信仰的分歧而在强烈反对的部分或政党之间的分裂或分裂。" + 
        "<br><br>" + 
        "(B) '团结' 意味着联合或作为一个整体的状态。" + 
        "<br><br>" + 
        "(C) '和谐' 意味着协议或一致。" + 
        "<br><br>" + 
        "(D) '共识' 意味着普遍的协议。"
    },
    {
        id: 7,
question: "For years, the environmental organization fought against pollution, which they viewed as their __________.",
chinese_question: "多年来，环保组织一直在与污染作斗争，他们视其为 __________。",
answers: [
    { option: "A", answer: "ally", chinese_answer: "同盟", chinese_romanization: "tóngméng" },
    { option: "B", answer: "nemesis", chinese_answer: "主要敌人", chinese_romanization: "zhǔyào dírén" },
    { option: "C", answer: "supporter", chinese_answer: "支持者", chinese_romanization: "zhīchí zhě" },
    { option: "D", answer: "friend", chinese_answer: "朋友", chinese_romanization: "péngyǒu" }
],
correctAnswer: "B",
explanation: "(B) 'nemesis' means a long-standing rival; an archenemy." +
    "<br><br>" +
    "(A) 'ally' means a state formally cooperating with another for a military or other purpose." +
    "<br><br>" +
    "(C) 'supporter' means a person who approves of and encourages someone or something." +
    "<br><br>" +
    "(D) 'friend' means a person whom one knows and with whom one has a bond of mutual affection.",
chinese_explanation: "(B) '主要敌人' 意味着长期存在的对手；主要敌人。" +
    "<br><br>" +
    "(A) '同盟' 意味着正式与另一方合作的国家，目的是军事或其他。" +
    "<br><br>" +
    "(C) '支持者' 意味着一个人赞成并鼓励某人或某事。" +
    "<br><br>" +
    "(D) '朋友' 意味着一个人认识并与之有相互感情纽带的人。"
    },
    {
        id: 8,
        question: "The old photograph was a __________ of their friendship, reminding her of the good times they had shared.",
        chinese_question: "这张旧照片是他们友谊的 __________，让她想起他们曾经共享的美好时光。",
        answers: [
            { option: "A", answer: "vestige", chinese_answer: "遗迹", chinese_romanization: "yíjì" },
            { option: "B", answer: "centerpiece", chinese_answer: "中心装饰", chinese_romanization: "zhōngxīn zhuāngshì" },
            { option: "C", answer: "creation", chinese_answer: "创造", chinese_romanization: "chuàngzào" },
            { option: "D", answer: "destruction", chinese_answer: "破坏", chinese_romanization: "pòhuài" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'vestige' means a trace or remnant of something that is disappearing or no longer exists." +
            "<br><br>" +
            "(B) 'centerpiece' means a decorative piece or display placed in the center of a dining or serving table." +
            "<br><br>" +
            "(C) 'creation' means the action or process of bringing something into existence." +
            "<br><br>" +
            "(D) 'destruction' means the action or process of causing so much damage to something that it no longer exists or cannot be repaired.",
        chinese_explanation: "(A) '遗迹' 意味着某物正在消失或不再存在的痕迹或遗迹。" +
            "<br><br>" +
            "(B) '中心装饰' 意味着放在餐桌或服务台中央的装饰品或展示品。" +
            "<br><br>" +
            "(C) '创造' 意味着使某物存在的行动或过程。" +
            "<br><br>" +
            "(D) '破坏' 意味着造成如此多的损害，以至于某物不再存在或无法修复的行为或过程。"
    },
    {
        id: 9,
        question: "The __________ was amazed by the tall buildings and bright lights when he first visited the city.",
        chinese_question: "当这个 __________ 第一次访问城市时，他被高楼大厦和明亮的灯光所惊叹。",
        answers: [
            { option: "A", answer: "yokel", chinese_answer: "乡巴佬", chinese_romanization: "xiāngbālǎo" },
            { option: "B", answer: "tourist", chinese_answer: "游客", chinese_romanization: "yóukè" },
            { option: "C", answer: "professional", chinese_answer: "专业人士", chinese_romanization: "zhuānyè rénshì" },
            { option: "D", answer: "guide", chinese_answer: "导游", chinese_romanization: "dǎoyóu" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'yokel' means an uneducated and unsophisticated person from the countryside." +
            "<br><br>" +
            "(B) 'tourist' means a person who is traveling or visiting a place for pleasure." +
            "<br><br>" +
            "(C) 'professional' means a person engaged or qualified in a profession." +
            "<br><br>" +
            "(D) 'guide' means a person who advises or shows the way to others.",
        chinese_explanation: "(A) '乡巴佬' 意味着来自乡村的未受教育和不懂世故的人。" +
            "<br><br>" +
            "(B) '游客' 意味着为了娱乐而旅行或访问某地的人。" +
            "<br><br>" +
            "(C) '专业人士' 意味着从事或有资格从事某职业的人。" +
            "<br><br>" +
            "(D) '导游' 意味着给他人提供建议或指引方向的人。"
    },
    {
        id: 10,
    question: "Her smile had an __________ that brightened everyone’s day and lifted their spirits.",
    chinese_question: "她的笑容有一种 __________，使每个人的日子都变得明亮，精神振奋。",
    answers: [
        { option: "A", answer: "effulgence", chinese_answer: "光辉", chinese_romanization: "guānghuī" },
        { option: "B", answer: "dullness", chinese_answer: "暗淡", chinese_romanization: "àndàn" },
        { option: "C", answer: "darkness", chinese_answer: "黑暗", chinese_romanization: "hēi'àn" },
        { option: "D", answer: "obscurity", chinese_answer: "模糊", chinese_romanization: "móhú" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'effulgence' means brilliant radiance or shining brightness." +
        "<br><br>" +
        "(B)'dullness' means lack of brightness, vividness, or sheen." +
        "<br><br>" +
        "(C)'darkness' means the partial or total absence of light." +
        "<br><br>" +
        "(D)'obscurity' means the state of being unknown, inconspicuous, or unimportant.",
    chinese_explanation: "(A) '光辉'一词意味着辉煌的光辉或明亮的光芒。" +
        "<br><br>" +
        "(B)'暗淡' 意味着缺乏亮度、鲜艳或光泽。" +
        "<br><br>" +
        "(C)'黑暗' 意味着部分或完全没有光。" +
        "<br><br>" +
        "(D)'模糊' 意味着不知名、不起眼或不重要的状态。"
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
