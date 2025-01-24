// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The sudden change in the company's policy left many employees feeling __________, unsure of how to proceed.",
    chinese_question: "公司政策的突然变化让许多员工感到 __________，不确定该如何继续。",
    answers: [
        { option: "A", answer: "clear-headed", chinese_answer: "头脑清醒的", chinese_romanization: "tóunǎo qīngxǐng de" },
        { option: "B", answer: "confident", chinese_answer: "自信的", chinese_romanization: "zìxìn de" },
        { option: "C", answer: "befuddled", chinese_answer: "困惑的", chinese_romanization: "kùnhuò de" },
        { option: "D", answer: "certain", chinese_answer: "确信的", chinese_romanization: "quèxìn de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'befuddled' means unable to think clearly; confused." +
        "<br><br>" +
        "(A) 'clear-headed' means having a clear mind; able to think clearly." +
        "<br><br>" +
        "(B) 'confident' means feeling or showing confidence in oneself; self-assured." +
        "<br><br>" +
        "(D) 'certain' means sure; having no doubt.",
    chinese_explanation: "(C) '困惑的' 意味着无法清晰思考；感到困惑的。" +
        "<br><br>" +
        "(A) '头脑清醒的' 意味着头脑清晰的；能够清晰地思考。" +
        "<br><br>" +
        "(B) '自信的' 意味着对自己有信心的；自信的。" +
        "<br><br>" +
        "(D) '确信的' 意味着肯定的；没有怀疑的。"
    },
    {
        id: 2,
        question: "Being part of the inner circle, he was __________ to the strategic plans of the organization.",
        chinese_question: "作为核心圈的一部分，他 __________ 知道组织的战略计划。",
        answers: [
            { option: "A", answer: "excluded", chinese_answer: "排除在外的", chinese_romanization: "páichú zài wài de" },
            { option: "B", answer: "unaware", chinese_answer: "不知情的", chinese_romanization: "bù zhī qíng de" },
            { option: "C", answer: "privy", chinese_answer: "知情的", chinese_romanization: "zhī qíng de" },
            { option: "D", answer: "ignorant", chinese_answer: "无知的", chinese_romanization: "wú zhī de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'privy' means sharing in the knowledge of something secret or private." +
            "<br><br>" +
            "(A) 'excluded' means denied access to or barred from a place, group, or privilege." +
            "<br><br>" +
            "(B) 'unaware' means having no knowledge of a situation or fact." +
            "<br><br>" +
            "(D) 'ignorant' means lacking knowledge or awareness in general; uneducated or unsophisticated.",
        chinese_explanation: "(C) '知情的' 意味着分享某些秘密或私人知识。" +
            "<br><br>" +
            "(A) '排除在外的' 意味着被拒绝进入某个地方、群体或特权。" +
            "<br><br>" +
            "(B) '不知情的' 意味着不知道情况或事实。" +
            "<br><br>" +
            "(D) '无知的' 意味着缺乏一般知识或意识；未受教育的或不谙世事的。"
    },
    {
        id: 3,
        question: "Their discussion moved from general ideas to __________ solutions, outlining specific steps to address the issues at hand.",
        chinese_question: "他们的讨论从一般想法转向 __________ 的解决方案，列出了处理当前问题的具体步骤。",
        answers: [
            { option: "A", answer: "substantive", chinese_answer: "实质性的", chinese_romanization: "shízhì xìng de" },
            { option: "B", answer: "vague", chinese_answer: "模糊的", chinese_romanization: "móhu de" },
            { option: "C", answer: "irrelevant", chinese_answer: "无关的", chinese_romanization: "wúguān de" },
            { option: "D", answer: "ambiguous", chinese_answer: "含糊的", chinese_romanization: "hánhú de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'substantive' means having a firm basis in reality and therefore important, meaningful, or considerable." +
            "<br><br>" +
            "(B) 'vague' means of uncertain, indefinite, or unclear character or meaning." +
            "<br><br>" +
            "(C) 'irrelevant' means not connected with or relevant to something." +
            "<br><br>" +
            "(D) 'ambiguous' means open to more than one interpretation; not having one obvious meaning.",
        chinese_explanation: "(A) '实质性的' 意味着在现实中有坚实基础的，因此重要、有意义或相当可观的。" +
            "<br><br>" +
            "(B) '模糊的' 意味着性质或意义不确定、不明确的。" +
            "<br><br>" +
            "(C) '无关的' 意味着与某事无关或不相关的。" +
            "<br><br>" +
            "(D) '含糊的' 意味着有多种解释的；没有一个明显的意思。"
    },
    {
        id: 4,
    question: "Her __________ management style created a tense work environment, where employees felt constantly pressured and undervalued.",
    chinese_question: "她的 __________ 管理风格营造了一种紧张的工作环境，员工感到时刻被施压且不被重视。",
    answers: [
        { option: "A", answer: "overbearing", chinese_answer: "专横的", chinese_romanization: "zhuānhéng de" },
        { option: "B", answer: "lenient", chinese_answer: "宽容的", chinese_romanization: "kuānróng de" },
        { option: "C", answer: "empathetic", chinese_answer: "有同理心的", chinese_romanization: "yǒu tónglǐ xīn de" },
        { option: "D", answer: "flexible", chinese_answer: "灵活的", chinese_romanization: "línghuó de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'overbearing' means unpleasantly or arrogantly domineering." +
        "<br><br>" +
        "(B) 'lenient' means more merciful or tolerant than expected." +
        "<br><br>" +
        "(C) 'empathetic' means showing an ability to understand and share the feelings of another." +
        "<br><br>" +
        "(D) 'flexible' means capable of bending easily without breaking; adaptable.",
    chinese_explanation: "(A) '专横的' 意味着令人不快或傲慢地专横的。" +
        "<br><br>" +
        "(B) '宽容的' 意味着比预期更仁慈或宽容的。" +
        "<br><br>" +
        "(C) '有同理心的' 意味着表现出理解和分享他人感受的能力。" +
        "<br><br>" +
        "(D) '灵活的' 意味着能够轻松弯曲而不折断的；适应的。"
    },
    {
        id: 5,
    question: "The judge's __________ sentence was unexpected, given the severity of the crime.",
    chinese_question: "考虑到罪行的严重性，法官的__________判决出人意料。",
    answers: [
        { option: "A", answer: "strict", chinese_answer: "严格的", chinese_romanization: "yángé de" },
        { option: "B", answer: "harsh", chinese_answer: "严厉的", chinese_romanization: "yánlì de" },
        { option: "C", answer: "lenient", chinese_answer: "宽容的", chinese_romanization: "kuānróng de" },
        { option: "D", answer: "severe", chinese_answer: "严重的", chinese_romanization: "yánzhòng de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'lenient' means more merciful or tolerant than expected. Figuratively, it can mean being less severe or more forgiving than usual." +
        "<br><br>" +
        "(A) 'strict' means demanding that rules concerning behavior are obeyed and observed." +
        "<br><br>" +
        "(B) 'harsh' means unpleasantly rough or jarring to the senses." +
        "<br><br>" +
        "(D) 'severe' means very great; intense.",
    chinese_explanation: "(C) '宽容的'一词意味着比预期更仁慈或宽容。比喻地，它可以表示比平常更不严厉或更宽容。" +
        "<br><br>" +
        "(A) '严格的' 意味着要求遵守和观察行为的规则。" +
        "<br><br>" +
        "(B) '严厉的' 意味着对感官不愉快地粗糙或刺耳的。" +
        "<br><br>" +
        "(D) '严重的' 意味着非常大的；强烈的。"
    },
    {
        id: 6,
        question: "The editor removed all __________ words from the article to make it more concise and to the point.",
        chinese_question: "编辑删去了文章中所有 __________ 的词语，使其更加简洁明了。",
        answers: [
                { option: "A", answer: "necessary", chinese_answer: "必要的", chinese_romanization: "bìyào de" },
                { option: "B", answer: "essential", chinese_answer: "必需的", chinese_romanization: "bìxū de" },
                { option: "C", answer: "superfluous", chinese_answer: "多余的", chinese_romanization: "duōyú de" },
                { option: "D", answer: "critical", chinese_answer: "关键的", chinese_romanization: "guānjiàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'superfluous' means unnecessary, especially through being more than enough." +
            "<br><br>" +
            "(A) 'necessary' means required to be done, achieved, or present; needed." +
            "<br><br>" +
            "(B) 'essential' means absolutely necessary; extremely important." +
            "<br><br>" +
            "(D) 'critical' means expressing adverse or disapproving comments or judgments.",
        chinese_explanation: "(C) '多余的' 一词意味着不必要的，特别是因为多余的。" +
            "<br><br>" +
            "(A) '必要的' 意味着需要完成、实现或存在的；需要的。" +
            "<br><br>" +
            "(B) '必需的' 意味着绝对必要的；极其重要的。" +
            "<br><br>" +
            "(D) '关键的' 意味着表达不利或不赞成的评论或判断。"
    },
    {
        id: 7,
    question: "He has a __________ ear for music and can pick up even the slightest off-key note.",
    chinese_question: "他对音乐有着 __________ 的耳朵，甚至能听出最微小的跑调音符。",
    answers: [
        { option: "A", answer: "dull", chinese_answer: "迟钝的", chinese_romanization: "chídùn de" },
        { option: "B", answer: "sensitive", chinese_answer: "敏感的", chinese_romanization: "mǐngǎn de" },
        { option: "C", answer: "untrained", chinese_answer: "未训练的", chinese_romanization: "wèi xùnliàn de" },
        { option: "D", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'sensitive' means quick to detect or respond to slight changes, signals, or influences." +
        "<br><br>" +
        "(A) 'dull' means lacking interest or excitement." +
        "<br><br>" +
        "(C) 'untrained' means not having been trained." +
        "<br><br>" +
        "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
    chinese_explanation: "(B) '敏感的' 意味着对轻微的变化、信号或影响反应迅速。" +
        "<br><br>" +
        "(A) '迟钝的' 意味着缺乏兴趣或兴奋。" +
        "<br><br>" +
        "(C) '未训练的' 意味着没有经过训练。" +
        "<br><br>" +
        "(D) '冷漠的' 意味着没有特别的兴趣或同情心；不关心的。"
    },
    {
        id: 8,
        question: "Her __________ stance on education reform made her unpopular among the more liberal members of the board.",
        chinese_question: "她对教育改革的__________立场使她在董事会中较为自由的成员中不受欢迎。",
        answers: [
            { option: "A", answer: "progressive", chinese_answer: "进步的", chinese_romanization: "jìnbù de" },
            { option: "B", answer: "reactionary", chinese_answer: "反动的", chinese_romanization: "fǎndòng de" },
            { option: "C", answer: "forward-thinking", chinese_answer: "前瞻的", chinese_romanization: "qiánzhān de" },
            { option: "D", answer: "liberal", chinese_answer: "自由的", chinese_romanization: "zìyóu de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'reactionary' means opposing political or social progress or reform. Figuratively, it can mean being very conservative and resistant to change." +
            "<br><br>" +
            "(A) 'progressive' means favoring or advocating progress, change, improvement, or reform, as opposed to wishing to maintain things as they are, especially in political matters." +
            "<br><br>" +
            "(C) 'forward-thinking' means favoring innovation and development; progressive." +
            "<br><br>" +
            "(D) 'liberal' means open to new behavior or opinions and willing to discard traditional values.",
        chinese_explanation: "(B) '反动的'一词意味着反对政治或社会进步或改革的。比喻地，它可以表示非常保守和抵制变化的。" +
            "<br><br>" +
            "(A) '进步的' 意味着支持或提倡进步、变革、改善或改革的，而不是希望维持现状的，尤其在政治事务上。" +
            "<br><br>" +
            "(C) '前瞻的' 意味着支持创新和发展的；进步的。" +
            "<br><br>" +
            "(D) '自由的' 意味着愿意接受新的行为或观点并愿意抛弃传统价值观的。"
    },
    {
        id: 9,
        question: "The __________ professor, with over fifty years of teaching experience, was highly respected by all his students.",
        chinese_question: "这位 __________ 的教授拥有五十多年的教学经验，深受所有学生的尊敬。",
        answers: [
            { option: "A", answer: "young", chinese_answer: "年轻的", chinese_romanization: "niánqīng de" },
            { option: "B", answer: "inexperienced", chinese_answer: "无经验的", chinese_romanization: "wú jīngyàn de" },
            { option: "C", answer: "venerable", chinese_answer: "德高望重的", chinese_romanization: "dégāo wàngzhòng de" },
            { option: "D", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'venerable' means accorded a great deal of respect, especially because of age, wisdom, or character." +
            "<br><br>" +
            "(A) 'young' means having lived or existed for only a short time." +
            "<br><br>" +
            "(B) 'inexperienced' means having little knowledge or experience." +
            "<br><br>" +
            "(D) 'ordinary' means with no special or distinctive features; normal.",
        chinese_explanation: "(C) '德高望重的' 一词意味着由于年龄、智慧或品格而受到很大尊敬的。" +
            "<br><br>" +
            "(A) '年轻的' 意味着仅生活或存在很短时间的。" +
            "<br><br>" +
            "(B) '无经验的' 意味着缺乏知识或经验的。" +
            "<br><br>" +
            "(D) '普通的' 意味着没有特殊或独特的特征的；正常的。"
    },
    {
        id: 10,
        question: "The novel's __________ descriptions of the old town made the readers feel as if they were actually there.",
        chinese_question: "小说对老城区的 __________ 描述让读者感觉仿佛置身其中。",
        answers: [
            { option: "A", answer: "mundane", chinese_answer: "平凡的", chinese_romanization: "píngfán de" },
            { option: "B", answer: "atmospheric", chinese_answer: "有氛围的", chinese_romanization: "yǒu fēnwéi de" },
            { option: "C", answer: "uninspired", chinese_answer: "缺乏灵感的", chinese_romanization: "quēfá línggǎn de" },
            { option: "D", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'atmospheric' means creating a distinctive mood or feeling." +
            "<br><br>" +
            "(A) 'mundane' means lacking interest or excitement." +
            "<br><br>" +
            "(C) 'uninspired' means lacking in creativity or originality." +
            "<br><br>" +
            "(D) 'ordinary' means with no special or distinctive features.",
        chinese_explanation: "(B) '有氛围的' 意味着创造出独特的情绪或感觉的。" +
            "<br><br>" +
            "(A) '平凡的' 意味着缺乏兴趣或激动的。" +
            "<br><br>" +
            "(C) '缺乏灵感的' 意味着缺乏创造力或独创性的。" +
            "<br><br>" +
            "(D) '普通的' 意味着没有特别或独特特点的。"
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
