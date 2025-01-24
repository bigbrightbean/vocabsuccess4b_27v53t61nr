// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The critic’s review was filled with __________, nitpicking every small detail of the performance.",
        chinese_question: "评论家的评论充满了 __________，对表演的每一个细节都吹毛求疵。",
        answers: [
                { option: "A", answer: "appreciation", chinese_answer: "欣赏", chinese_romanization: "xīnshǎng" },
                { option: "B", answer: "pedantry", chinese_answer: "卖弄学问", chinese_romanization: "màinòng xuéwèn" },
                { option: "C", answer: "enthusiasm", chinese_answer: "热情", chinese_romanization: "rèqíng" },
                { option: "D", answer: "admiration", chinese_answer: "钦佩", chinese_romanization: "qīnpèi" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pedantry' means excessive concern with minor details and rules." +
            "<br><br>" +
            "(A) 'appreciation' means recognition and enjoyment of the good qualities of someone or something." +
            "<br><br>" +
            "(C) 'enthusiasm' means intense and eager enjoyment, interest, or approval." +
            "<br><br>" +
            "(D) 'admiration' means respect and warm approval.",
        chinese_explanation: "(B) '卖弄学问'一词意味着过分关注细枝末节和规则。" +
            "<br><br>" +
            "(A) '欣赏' 意味着认可和享受某人或某物的优点。" +
            "<br><br>" +
            "(C) '热情' 意味着强烈和热切的享受、兴趣或赞同。" +
            "<br><br>" +
            "(D) '钦佩' 意味着尊重和热情的赞同。"
    },
    {
        id: 2,
    question: "The politician's __________ was evident in his refusal to accept bribes or engage in corrupt practices.",
    chinese_question: "这位政治家的 __________ 体现在他拒绝接受贿赂或参与腐败行为中。",
    answers: [
        { option: "A", answer: "corruption", chinese_answer: "腐败", chinese_romanization: "fǔbài" },
        { option: "B", answer: "rectitude", chinese_answer: "正直", chinese_romanization: "zhèngzhí" },
        { option: "C", answer: "greed", chinese_answer: "贪婪", chinese_romanization: "tānlán" },
        { option: "D", answer: "manipulation", chinese_answer: "操纵", chinese_romanization: "cāozòng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'rectitude' means morally correct behavior or thinking; righteousness." + 
        "<br><br>" + 
        "(A) 'corruption' means dishonest or fraudulent conduct by those in power." + 
        "<br><br>" + 
        "(C) 'greed' means intense and selfish desire for something, especially wealth, power, or food." + 
        "<br><br>" + 
        "(D) 'manipulation' means controlling or influencing someone or something cleverly, unfairly, or unscrupulously.",
    chinese_explanation: "(B) '正直'一词意味着道德上正确的行为或思想；正义。" + 
        "<br><br>" + 
        "(A) '腐败' 意味着掌权者的不诚实或欺诈行为。" + 
        "<br><br>" + 
        "(C) '贪婪' 意味着对某物，特别是财富、权力或食物的强烈和自私的渴望。" + 
        "<br><br>" + 
        "(D) '操纵' 意味着巧妙、不公平或不择手段地控制或影响某人或某事。"
    },
    {
        id: 3,
    question: "To succeed, you need to lead the __________, not follow it.",
    chinese_question: "要想成功，你需要带领 __________，而不是跟随它。",
    answers: [
        { option: "A", answer: "assembly", chinese_answer: "集会", chinese_romanization: "jíhuì" },
        { option: "B", answer: "crowd", chinese_answer: "人群", chinese_romanization: "rénqún" },
        { option: "C", answer: "pack", chinese_answer: "群", chinese_romanization: "qún" },
        { option: "D", answer: "multitude", chinese_answer: "众多", chinese_romanization: "zhòngduō" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'pack' means a group of people or animals moving together, often used figuratively to describe leading or being ahead in a competitive field." + 
        "<br><br>" + 
        "(A) 'assembly' means a group of people gathered together for a common purpose." + 
        "<br><br>" + 
        "(B) 'crowd' means a large number of people gathered together." + 
        "<br><br>" + 
        "(D) 'multitude' means a large number of people or things.",
    chinese_explanation: "(C) “群” 意味着一群一起移动的人或动物，通常比喻用来描述在竞争领域中领先或处于领先地位。" + 
        "<br><br>" + 
        "(A) '集会' 意味着为共同目的聚集在一起的一群人。" + 
        "<br><br>" + 
        "(B) '人群' 意味着聚集在一起的大量人。" + 
        "<br><br>" + 
        "(D) '众多' 意味着大量的人或事物。"
    },
    {
        id: 4,
        question: "The celebrity endured a great deal of __________ after making insensitive remarks on social media.",
        chinese_question: "这位名人在社交媒体上发表不敏感言论后，忍受了大量的 __________。",
        answers: [
                { option: "A", answer: "opprobrium", chinese_answer: "谴责", chinese_romanization: "qiǎnzé" },
                { option: "B", answer: "acclaim", chinese_answer: "赞誉", chinese_romanization: "zànyù" },
                { option: "C", answer: "approval", chinese_answer: "赞同", chinese_romanization: "zàntóng" },
                { option: "D", answer: "veneration", chinese_answer: "敬仰", chinese_romanization: "jìngyǎng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'opprobrium' means harsh criticism or censure." +
            "<br><br>" +
            "(B) 'acclaim' means enthusiastic and public praise." +
            "<br><br>" +
            "(C) 'approval' means the belief that something or someone is good or acceptable." +
            "<br><br>" +
            "(D) 'veneration' means great respect; reverence.",
        chinese_explanation: "(A) '谴责' 意味着严厉的批评或责难。" +
            "<br><br>" +
            "(B) '赞誉' 意味着热情和公开的赞美。" +
            "<br><br>" +
            "(C) '赞同' 意味着相信某事或某人是好的或可接受的。" +
            "<br><br>" +
            "(D) '敬仰' 意味着极大的尊敬；崇敬。"
    },
    {
        id: 5,
        question: "The __________ of conflicting advice from friends and family made it hard for her to make a decision.",
        chinese_question: "来自朋友和家人的相互矛盾的建议 __________ 使她难以做出决定。",
        answers: [
                { option: "A", answer: "peace", chinese_answer: "和平", chinese_romanization: "hépíng" },
                { option: "B", answer: "din", chinese_answer: "喧闹", chinese_romanization: "xuānnào" },
                { option: "C", answer: "clarity", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
                { option: "D", answer: "stillness", chinese_answer: "寂静", chinese_romanization: "jìjìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'din' means a loud, unpleasant, and prolonged noise; used figuratively to describe a confusing mixture of noises or voices." +
            "<br><br>" +
            "(A) 'peace' means freedom from disturbance; tranquility." +
            "<br><br>" +
            "(C) 'clarity' means the quality of being clear, in particular." +
            "<br><br>" +
            "(D) 'stillness' means the absence of movement or sound.",
        chinese_explanation: "(B) '喧闹'一词意味着嘈杂、令人不愉快且持续的噪音；用作比喻来形容嘈杂的混合声音或声音。" +
            "<br><br>" +
            "(A) '和平' 意味着没有干扰；宁静。" +
            "<br><br>" +
            "(C) '清晰' 意味着清楚的品质，特别是。" +
            "<br><br>" +
            "(D) '寂静' 意味着没有运动或声音。"
    },
    {
        id: 6,
        question: "The __________ of English as the global language of business and diplomacy reflects the historical influence of English-speaking countries.",
        chinese_question: "英语作为全球商业和外交语言的 __________ 反映了讲英语国家的历史影响。",
        answers: [
            { option: "A", answer: "hegemony", chinese_answer: "霸权", chinese_romanization: "bàquán" },
            { option: "B", answer: "decline", chinese_answer: "衰退", chinese_romanization: "shuāituì" },
            { option: "C", answer: "resistance", chinese_answer: "抵抗", chinese_romanization: "dǐkàng" },
            { option: "D", answer: "neutrality", chinese_answer: "中立", chinese_romanization: "zhōnglì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'hegemony' figuratively means leadership or dominance, especially by one country or social group over others." +
            "<br><br>" +
            "(B) 'decline' means a gradual and continuous loss of strength, numbers, quality, or value." +
            "<br><br>" +
            "(C) 'resistance' means the refusal to accept or comply with something." +
            "<br><br>" +
            "(D) 'neutrality' means the state of not supporting or helping either side in a conflict or disagreement.",
        chinese_explanation: "(A) '霸权' 在此语境下意指领导或支配，特别是一个国家或社会团体对他人的领导或支配。" +
            "<br><br>" +
            "(B) '衰退' 意味着力量、数量、质量或价值的逐渐和持续的损失。" +
            "<br><br>" +
            "(C) '抵抗' 意味着拒绝接受或遵守某事。" +
            "<br><br>" +
            "(D) '中立' 意味着在冲突或争执中不支持或帮助任何一方的状态。"
    },
    {
        id: 7,
        question: "The stock market reached its __________ for the year in December, peaking before experiencing a sharp drop in January.",
        chinese_question: "股市在12月达到全年 __________，在1月经历大幅下跌前达到顶峰。",
        answers: [
            { option: "A", answer: "apex", chinese_answer: "顶点", chinese_romanization: "dǐngdiǎn" },
            { option: "B", answer: "trough", chinese_answer: "低谷", chinese_romanization: "dīgǔ" },
            { option: "C", answer: "recession", chinese_answer: "经济衰退", chinese_romanization: "jīngjì shuāituì" },
            { option: "D", answer: "base", chinese_answer: "底部", chinese_romanization: "dǐbù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'apex' means the top or highest part of something, especially one forming a point." +
            "<br><br>" +
            "(B) 'trough' means a long, narrow container for animals to eat or drink out of; also used to describe a low point in economic activity." +
            "<br><br>" +
            "(C) 'recession' means a period of temporary economic decline during which trade and industrial activity are reduced." +
            "<br><br>" +
            "(D) 'base' means the lowest part or edge of something.",
        chinese_explanation: "(A) '顶点' 意味着某物的顶部或最高部分，尤其是形成一个点的部分。" +
            "<br><br>" +
            "(B) '低谷' 意味着动物吃喝用的长而窄的容器；也用来描述经济活动的低点。" +
            "<br><br>" +
            "(C) '经济衰退' 意味着贸易和工业活动减少的暂时性经济衰退时期。" +
            "<br><br>" +
            "(D) '底部' 意味着某物的最低部分或边缘。"
    },
    {
        id: 8,
    question: "She has an __________ for adventure, always seeking new and exciting experiences.",
    chinese_question: "她对冒险有 __________，总是在寻找新的和令人兴奋的经历。",
    answers: [
        { option: "A", answer: "aversion", chinese_answer: "厌恶", chinese_romanization: "yànwù" },
        { option: "B", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
        { option: "C", answer: "inclination", chinese_answer: "倾向", chinese_romanization: "qīngxiàng" },
        { option: "D", answer: "reluctance", chinese_answer: "不情愿", chinese_romanization: "bùqíngyuàn" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'inclination' means a natural tendency to act in a particular way." + 
        "<br><br>" + 
        "(A) 'aversion' means a strong dislike or disinclination." + 
        "<br><br>" + 
        "(B) 'indifference' means lack of interest, concern, or sympathy." + 
        "<br><br>" + 
        "(D) 'reluctance' means unwillingness or disinclination to do something.",
    chinese_explanation: "(C) '倾向'一词意味着自然的倾向去以某种方式行动。" + 
        "<br><br>" + 
        "(A) '厌恶' 意味着强烈的反感或不情愿。" + 
        "<br><br>" + 
        "(B) '冷漠' 意味着缺乏兴趣、关注或同情。" + 
        "<br><br>" + 
        "(D) '不情愿' 意味着不愿意或不情愿做某事。"
    },
    {
        id: 9,
        question: "The __________ with which she approached her volunteer work showed her genuine dedication to helping others.",
        chinese_question: "她以 __________ 态度对待志愿工作，显示了她对帮助他人的真诚奉献。",
        answers: [
            { option: "A", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "B", answer: "sobriety", chinese_answer: "严肃", chinese_romanization: "yánsù" },
            { option: "C", answer: "neglect", chinese_answer: "疏忽", chinese_romanization: "shūhū" },
            { option: "D", answer: "apathy", chinese_answer: "无动于衷", chinese_romanization: "wúdòngyúzhōng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sobriety' means serious, sensible, and solemn behavior." +
            "<br><br>" +
            "(A) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(C) 'neglect' means failure to take proper care over something." +
            "<br><br>" +
            "(D) 'apathy' means lack of interest, enthusiasm, or concern.",
        chinese_explanation: "(B) '严肃'一词意味着严肃、明智和庄重的行为。" +
            "<br><br>" +
            "(A) '冷漠' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(C) '疏忽' 意味着未能妥善照顾某事。" +
            "<br><br>" +
            "(D) '无动于衷' 意味着缺乏兴趣、热情或关心。"
    },
    {
        id: 10,
        question: "The filmmaker's latest movie is a __________ of the entertainment industry, exposing its flaws through satire.",
        chinese_question: "这位电影制作人的最新电影是一部对娱乐业的 __________，通过讽刺揭露了其缺陷。",
        answers: [
                { option: "A", answer: "documentary", chinese_answer: "纪录片", chinese_romanization: "jìlùpiàn" },
                { option: "B", answer: "pasquinade", chinese_answer: "讽刺", chinese_romanization: "fěngcì" },
                { option: "C", answer: "tribute", chinese_answer: "致敬", chinese_romanization: "zhìjìng" },
                { option: "D", answer: "homage", chinese_answer: "崇敬", chinese_romanization: "chóngjìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pasquinade' figuratively means a satire or lampoon." +
            "<br><br>" +
            "(A) 'documentary' means a movie or a television or radio program that provides a factual record or report." +
            "<br><br>" +
            "(C) 'tribute' means an act, statement, or gift that is intended to show gratitude, respect, or admiration." +
            "<br><br>" +
            "(D) 'homage' means special honor or respect shown publicly.",
        chinese_explanation: "(B) '讽刺' 在此语境下意指讽刺或讽刺作品。" +
            "<br><br>" +
            "(A) '纪录片' 意味着提供事实记录或报告的电影或电视或广播节目。" +
            "<br><br>" +
            "(C) '致敬' 意味着表示感激、尊敬或钦佩的行为、声明或礼物。" +
            "<br><br>" +
            "(D) '崇敬' 意味着公开表示的特别荣誉或尊敬。"
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
