// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His __________ stand for justice inspired others to speak out against inequality.",
        chinese_question: "他对正义的 __________ 立场激励了其他人对不平等现象发声。",
        answers: [
            { option: "A", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "B", answer: "gallant", chinese_answer: "勇敢的", chinese_romanization: "yǒnggǎn de" },
            { option: "C", answer: "passive", chinese_answer: "被动的", chinese_romanization: "bèidòng de" },
            { option: "D", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbùguānxīn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'gallant' means showing special courtesy or respect, often used figuratively to describe noble and selfless actions." +
            "<br><br>" +
            "(A) 'apathetic' means showing or feeling no interest, enthusiasm, or concern." +
            "<br><br>" +
            "(C) 'passive' means accepting or allowing what happens or what others do, without active response or resistance." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(B) '勇敢的' 意味着表现出特别的礼貌或尊重，通常用作比喻来描述高尚和无私的行为。" +
            "<br><br>" +
            "(A) '冷漠的' 意味着表现出或感受到没有兴趣、热情或关注的。" +
            "<br><br>" +
            "(C) '被动的' 意味着接受或允许发生的事情或他人的行为，而没有积极的反应或抵抗。" +
            "<br><br>" +
            "(D) '漠不关心的' 意味着没有特别的兴趣或同情；不关心的。"
    },
    {
        id: 2,
    question: "Her __________ approach to problem-solving allowed her to see solutions that others missed, using knowledge from various fields.",
    chinese_question: "她 __________ 的问题解决方法使她能够看到别人忽略的解决方案，使用来自各个领域的知识。",
    answers: [
        { option: "A", answer: "ignorant", chinese_answer: "无知的", chinese_romanization: "wúzhī de" },
        { option: "B", answer: "simplistic", chinese_answer: "简单化的", chinese_romanization: "jiǎndānhuà de" },
        { option: "C", answer: "educated", chinese_answer: "受过教育的", chinese_romanization: "shòuguò jiàoyù de" },
        { option: "D", answer: "uninformed", chinese_answer: "不知情的", chinese_romanization: "bù zhīqíng de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'educated' means having received education, especially to a high level." +
        "<br><br>" +
        "(A) 'ignorant' means lacking knowledge or awareness in general." +
        "<br><br>" +
        "(B) 'simplistic' means treating complex issues and problems as if they were much simpler than they really are." +
        "<br><br>" +
        "(D) 'uninformed' means not having or showing knowledge or information about a particular subject.",
    chinese_explanation: "(C) '受过教育的' 意味着接受过教育，尤其是高水平的教育。" +
        "<br><br>" +
        "(A) '无知的' 意味着缺乏一般知识或意识。" +
        "<br><br>" +
        "(B) '简单化的' 意味着将复杂的问题和问题看作比实际简单得多。" +
        "<br><br>" +
        "(D) '不知情的' 意味着没有或显示关于特定主题的知识或信息。"
    },
    {
        id: 3,
        question: "Her experience in digital marketing was highly __________ to the new role she was applying for, making her a strong candidate.",
        chinese_question: "她在数字营销方面的经验与她申请的新职位高度 __________，使她成为一个有力的候选人。",
        answers: [
            { option: "A", answer: "relevant", chinese_answer: "相关的", chinese_romanization: "xiāngguān de" },
            { option: "B", answer: "extraneous", chinese_answer: "无关的", chinese_romanization: "wúguān de" },
            { option: "C", answer: "peripheral", chinese_answer: "边缘的", chinese_romanization: "biānyuán de" },
            { option: "D", answer: "unrelated", chinese_answer: "不相关的", chinese_romanization: "bù xiāngguān de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'relevant' means closely connected or appropriate to what is being done or considered." +
            "<br><br>" +
            "(B) 'extraneous' means irrelevant or unrelated to the subject being dealt with." +
            "<br><br>" +
            "(C) 'peripheral' means relating to or situated on the edge or periphery of something." +
            "<br><br>" +
            "(D) 'unrelated' means not related or linked.",
        chinese_explanation: "(A) '相关的' 意味着与正在做或考虑的事情紧密相关或适当的。" +
            "<br><br>" +
            "(B) '无关的' 意味着与处理的主题无关的。" +
            "<br><br>" +
            "(C) '边缘的' 意味着与某物的边缘或周边有关的。" +
            "<br><br>" +
            "(D) '不相关的' 意味着不相关或不链接的。"
    },
    {
        id: 4,
    question: "Her __________ career as a lawyer allowed her to travel the world and enjoy a luxurious lifestyle.",
    chinese_question: "她作为律师的 __________ 职业使她能够环游世界并享受奢华的生活方式。",
    answers: [
        { option: "A", answer: "unsuccessful", chinese_answer: "不成功的", chinese_romanization: "bù chénggōng de" },
        { option: "B", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
        { option: "C", answer: "prosperous", chinese_answer: "繁荣的", chinese_romanization: "fánróng de" },
        { option: "D", answer: "mediocre", chinese_answer: "平庸的", chinese_romanization: "píngyōng de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'prosperous' means successful in material terms; flourishing financially." +
        "<br><br>" +
        "(A) 'unsuccessful' means not successful." +
        "<br><br>" +
        "(B) 'ordinary' means with no special or distinctive features; normal." +
        "<br><br>" +
        "(D) 'mediocre' means of only moderate quality; not very good.",
    chinese_explanation: "(C) '繁荣的' 意味着在物质方面成功；经济上蓬勃发展的。" +
        "<br><br>" +
        "(A) '不成功的' 意味着不成功的。" +
        "<br><br>" +
        "(B) '普通的' 意味着没有特别或独特的特征的；正常的。" +
        "<br><br>" +
        "(D) '平庸的' 意味着质量一般；不太好的。"
    },
    {
        id: 5,
    question: "His mind was never __________, always filled with creative ideas and plans for new projects.",
    chinese_question: "他的头脑从未 __________，总是充满了创意和新项目的计划。",
    answers: [
        { option: "A", answer: "idle", chinese_answer: "空闲的", chinese_romanization: "kōngxián de" },
        { option: "B", answer: "focused", chinese_answer: "专注的", chinese_romanization: "zhuānzhù de" },
        { option: "C", answer: "occupied", chinese_answer: "忙碌的", chinese_romanization: "mánglù de" },
        { option: "D", answer: "engaged", chinese_answer: "投入的", chinese_romanization: "tóurù de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'idle' means not active or in use; without purpose or effect; pointless." +
        "<br><br>" +
        "(B) 'focused' means directing a great deal of attention, interest, or activity towards a particular aim." +
        "<br><br>" +
        "(C) 'occupied' means busy and active." +
        "<br><br>" +
        "(D) 'engaged' means busy; occupied.",
    chinese_explanation: "(A) '空闲的' 意味着不活动或不使用的；没有目的或效果的；无意义的。" +
        "<br><br>" +
        "(B) '专注的' 意味着将大量注意力、兴趣或活动集中在一个特定目标上。" +
        "<br><br>" +
        "(C) '忙碌的' 意味着忙碌和活跃的。" +
        "<br><br>" +
        "(D) '投入的' 意味着忙碌的；忙碌的。"
    },
    {
        id: 6,
        question: "Her constant interruptions during the meeting were __________ to everyone present.",
        chinese_question: "她在会议中的不断打断让在场的每个人都感到 __________。",
        answers: [
            { option: "A", answer: "delightful", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
            { option: "B", answer: "galling", chinese_answer: "恼火的", chinese_romanization: "nǎohuǒ de" },
            { option: "C", answer: "enjoyable", chinese_answer: "令人愉快的", chinese_romanization: "lìngrén yúkuài de" },
            { option: "D", answer: "satisfying", chinese_answer: "满意的", chinese_romanization: "mǎnyì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'galling' means causing annoyance or resentment; annoying." +
            "<br><br>" +
            "(A) 'delightful' means causing delight; charming." +
            "<br><br>" +
            "(C) 'enjoyable' means giving delight or pleasure." +
            "<br><br>" +
            "(D) 'satisfying' means giving fulfillment or pleasure.",
        chinese_explanation: "(B) '恼火的' 意味着引起烦恼或怨恨的；恼人的。" +
            "<br><br>" +
            "'愉快的' 意味着带来快乐或满足的。" +
            "<br><br>" +
            "'令人愉快的' 意味着带来愉悦或快乐的。" +
            "<br><br>" +
            "'满意的' 意味着带来满足或快乐的。"
    },
    {
        id: 7,
    question: "Her __________ attire at the formal event reflected her appreciation for tradition and propriety.",
    chinese_question: "她在正式活动上的 __________ 穿着反映了她对传统和礼仪的重视。",
    answers: [
        { option: "A", answer: "casual", chinese_answer: "随便的", chinese_romanization: "suíbiàn de" },
        { option: "B", answer: "extravagant", chinese_answer: "奢华的", chinese_romanization: "shēhuá de" },
        { option: "C", answer: "decorous", chinese_answer: "端庄的", chinese_romanization: "duānzhuāng de" },
        { option: "D", answer: "sloppy", chinese_answer: "邋遢的", chinese_romanization: "lāta de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'decorous' means in keeping with good taste and propriety; polite and restrained." +
        "<br><br>" +
        "(A) 'casual' means relaxed and unconcerned." +
        "<br><br>" +
        "(B) 'extravagant' means lacking restraint in spending money or using resources." +
        "<br><br>" +
        "(D) 'sloppy' means carelessly dressed or disheveled.",
    chinese_explanation: "(C) “端庄的” 意味着符合良好的品味和礼仪；礼貌和克制的。" +
        "<br><br>" +
        "(A) '随便的' 意味着放松和不关心的。" +
        "<br><br>" +
        "(B) '奢华的' 意味着在花钱或使用资源方面缺乏节制。" +
        "<br><br>" +
        "(D) '邋遢的' 意味着穿着马虎或不整洁。"
    },
    {
        id: 8,
        question: "The new policy was crafted with a __________ precision, reflecting extensive research and analysis.",
        chinese_question: "新政策以 __________ 的精确性制定，反映了广泛的研究和分析。",
        answers: [
            { option: "A", answer: "haphazard", chinese_answer: "杂乱无章的", chinese_romanization: "záluàn wúzhāng de" },
            { option: "B", answer: "sloppy", chinese_answer: "草率的", chinese_romanization: "cǎoshuài de" },
            { option: "C", answer: "scholarly", chinese_answer: "学术的", chinese_romanization: "xuéshù de" },
            { option: "D", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'scholarly' means involving or relating to serious academic study, often used figuratively to describe something done with great care and thoroughness." +
            "<br><br>" +
            "(A) 'haphazard' means lacking any obvious principle of organization." +
            "<br><br>" +
            "(B) 'sloppy' means careless and unsystematic; excessively casual." +
            "<br><br>" +
            "(D) 'careless' means not giving sufficient attention or thought to avoiding harm or errors.",
        chinese_explanation: "(C) '学术的' 意味着涉及或与严肃的学术研究相关的，通常用作比喻来描述以极大的关心和彻底性完成的事情。" +
            "<br><br>" +
            "(A) '杂乱无章的' 意味着缺乏任何明显的组织原则。" +
            "<br><br>" +
            "(B) '草率的' 意味着粗心和不系统的；过于随意的。" +
            "<br><br>" +
            "(D) '粗心的' 意味着没有给予足够的关注或思考以避免伤害或错误的。"
    },
    {
        id: 9,
        question: "Her __________ dedication to her work earned her great respect.",
        chinese_question: "她对工作的 __________ 奉献赢得了极大的尊敬。",
        answers: [
            { option: "A", answer: "sporadic", chinese_answer: "零星的", chinese_romanization: "língxīng de" },
            { option: "B", answer: "steadfast", chinese_answer: "坚定的", chinese_romanization: "jiāndìng de" },
            { option: "C", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "D", answer: "reluctant", chinese_answer: "不情愿的", chinese_romanization: "bù qíngyuàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'steadfast' means resolutely or dutifully firm and unwavering." +
            "<br><br>" +
            "(A) 'sporadic' means occurring at irregular intervals or only in a few places; scattered or isolated." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'reluctant' means unwilling and hesitant; disinclined.",
        chinese_explanation: "(B) '坚定的' 一词意味着坚决或尽职地坚定不移。" +
            "<br><br>" +
            "(A) '零星的' 意味着在不规则的间隔或只有在少数地方发生；分散或孤立的。" +
            "<br><br>" +
            "(C) '冷漠的' 意味着没有特别的兴趣或同情；漠不关心。" +
            "<br><br>" +
            "(D) '不情愿的' 意味着不愿和犹豫的；不乐意的。"
    },
    {
        id: 10,
    question: "The economist's __________ insights into the market trends saved many investors from significant losses during the recession.",
    chinese_question: "经济学家对市场趋势的 __________ 洞察力在经济衰退期间拯救了许多投资者免受重大损失。",
    answers: [
        { option: "A", answer: "prophetic", chinese_answer: "预言的", chinese_romanization: "yùyán de" },
        { option: "B", answer: "misguided", chinese_answer: "误导的", chinese_romanization: "wùdǎo de" },
        { option: "C", answer: "uncertain", chinese_answer: "不确定的", chinese_romanization: "bù quèdìng de" },
        { option: "D", answer: "delayed", chinese_answer: "推迟的", chinese_romanization: "tuīchí de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'prophetic' means accurately describing or predicting what will happen in the future." +
        "<br><br>" +
        "(B) 'misguided' means having or showing faulty judgment or reasoning." +
        "<br><br>" +
        "(C) 'uncertain' means not able to be relied on; not known or definite." +
        "<br><br>" +
        "(D) 'delayed' means late or postponed.",
    chinese_explanation: "(A) '预言的' 意味着准确地描述或预测将要发生的事情。" +
        "<br><br>" +
        "(B) '误导的' 意味着有或表现出错误的判断或推理。" +
        "<br><br>" +
        "(C) '不确定的' 意味着不能依赖的；未知或不确定的。" +
        "<br><br>" +
        "(D) '推迟的' 意味着迟到或推迟的。"
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
