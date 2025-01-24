// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "He made a __________ comment about his colleague, which caused a lot of tension in the office.",
        chinese_question: "他对同事发表了 __________ 评论，这在办公室引起了很大的紧张。",
        answers: [
                { option: "A", answer: "complimentary", chinese_answer: "赞美的", chinese_romanization: "zànměi de" },
                { option: "B", answer: "supportive", chinese_answer: "支持的", chinese_romanization: "zhīchí de" },
                { option: "C", answer: "derogatory", chinese_answer: "贬损的", chinese_romanization: "biǎnsǔn de" },
                { option: "D", answer: "positive", chinese_answer: "积极的", chinese_romanization: "jījí de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'derogatory' means showing a critical or disrespectful attitude." +
            "<br><br>" +
            "(A) 'complimentary' means expressing a compliment; praising or approving." +
            "<br><br>" +
            "(B) 'supportive' means providing encouragement or emotional help." +
            "<br><br>" +
            "(D) 'positive' means consisting in or characterized by the presence or possession of features or qualities rather than their absence.",
        chinese_explanation: "(C) '贬损的' 一词意味着表现出批评或不尊重的态度。" +
            "<br><br>" +
            "(A) '赞美的' 意味着表达赞美的；赞许或认可的。" +
            "<br><br>" +
            "(B) '支持的' 意味着提供鼓励或情感支持的。" +
            "<br><br>" +
            "(D) '积极的' 意味着由存在或具有特征或品质而非缺乏它们组成或表征的。"
    },
    {
        id: 2,
    question: "Opportunities for advancement were __________ within the company, motivating employees to work hard.",
    chinese_question: "公司内部晋升的机会 __________ ，这激励了员工努力工作。",
    answers: [
        { option: "A", answer: "plentiful", chinese_answer: "丰富", chinese_romanization: "fēngfù" },
        { option: "B", answer: "nonexistent", chinese_answer: "不存在", chinese_romanization: "bù cúnzài" },
        { option: "C", answer: "minimal", chinese_answer: "最少", chinese_romanization: "zuìshǎo" },
        { option: "D", answer: "limited", chinese_answer: "有限", chinese_romanization: "yǒuxiàn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'plentiful' means existing in or yielding great quantities; abundant." +
        "<br><br>" +
        "(B) 'nonexistent' means not existing or not real or present." +
        "<br><br>" +
        "(C) 'minimal' means of a minimum amount, quantity, or degree." +
        "<br><br>" +
        "(D) 'limited' means restricted in size, amount, or extent.",
    chinese_explanation: "(A) '丰富' 意味着存在或产生大量的；丰富的。" +
        "<br><br>" +
        "(B) '不存在' 意味着不存在或不真实或不存在的。" +
        "<br><br>" +
        "(C) '最少' 意味着最少量、数量或程度的。" +
        "<br><br>" +
        "(D) '有限' 意味着在大小、数量或范围上受限制的。"
    },
    {
        id: 3,
    question: "His __________ view of the world led him to make several unwise decisions, as he underestimated the complexities of real-life situations.",
    chinese_question: "他对世界的 __________ 看法导致他做出了一些不明智的决定，因为他低估了现实生活中情况的复杂性。",
    answers: [
        { option: "A", answer: "naive", chinese_answer: "天真的", chinese_romanization: "tiānzhēn de" },
        { option: "B", answer: "realistic", chinese_answer: "现实的", chinese_romanization: "xiànshí de" },
        { option: "C", answer: "experienced", chinese_answer: "有经验的", chinese_romanization: "yǒu jīngyàn de" },
        { option: "D", answer: "pragmatic", chinese_answer: "实际的", chinese_romanization: "shíjì de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'naive' means showing a lack of experience, wisdom, or judgment; innocent." +
        "<br><br>" +
        "(B) 'realistic' means having or showing a sensible and practical idea of what can be achieved or expected." +
        "<br><br>" +
        "(C) 'experienced' means having knowledge or skill in a particular field, especially a profession or job, gained over a period of time." +
        "<br><br>" +
        "(D) 'pragmatic' means dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations.",
    chinese_explanation: "(A) '天真的' 意味着缺乏经验、智慧或判断力；无辜的。" +
        "<br><br>" +
        "(B) '现实的' 意味着具有或表现出一种可以实现或期望的合理和实际的想法。" +
        "<br><br>" +
        "(C) '有经验的' 意味着在特定领域，尤其是职业或工作中，通过一段时间获得知识或技能的。" +
        "<br><br>" +
        "(D) '实际的' 意味着以合理和现实的方式处理事情，而不是基于理论考虑的。"
    },
    {
        id: 4,
    question: "The book's __________ language brought the characters to life, making the dialogues sound natural and engaging.",
    chinese_question: "这本书的 __________ 语言让角色栩栩如生，使对话听起来自然且引人入胜。",
    answers: [
        { option: "A", answer: "idiomatic", chinese_answer: "惯用的", chinese_romanization: "guànyòng de" },
        { option: "B", answer: "formal", chinese_answer: "正式的", chinese_romanization: "zhèngshì de" },
        { option: "C", answer: "technical", chinese_answer: "技术性的", chinese_romanization: "jìshù xìng de" },
        { option: "D", answer: "obscure", chinese_answer: "晦涩的", chinese_romanization: "huìsè de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'idiomatic' means using, containing, or denoting expressions that are natural to a native speaker." +
        "<br><br>" +
        "(B) 'formal' means done in accordance with rules of convention or etiquette; suitable for or constituting an official or important situation or occasion." +
        "<br><br>" +
        "(C) 'technical' means relating to a particular subject, art, or craft, or its techniques." +
        "<br><br>" +
        "(D) 'obscure' means not discovered or known about; uncertain.",
    chinese_explanation: "(A) '惯用的' 意味着使用、包含或表示对母语者来说自然的表达。" +
        "<br><br>" +
        "(B) '正式的' 意味着按照惯例或礼节的规则进行的；适合或构成正式或重要的情况或场合的。" +
        "<br><br>" +
        "(C) '技术性的' 意味着与某个特定学科、艺术或工艺或其技术相关的。" +
        "<br><br>" +
        "(D) '晦涩的' 意味着未被发现或已知的；不确定的。"
    },
    {
        id: 5,
    question: "The company faced an __________ crisis as their major client threatened to cancel the contract.",
    chinese_question: "公司面临 __________ 的危机，因为他们的主要客户威胁要取消合同。",
    answers: [
        { option: "A", answer: "imminent", chinese_answer: "即将发生的", chinese_romanization: "jíjiāng fāshēng de" },
        { option: "B", answer: "hypothetical", chinese_answer: "假设的", chinese_romanization: "jiǎshè de" },
        { option: "C", answer: "resolved", chinese_answer: "解决了的", chinese_romanization: "jiějué le de" },
        { option: "D", answer: "past", chinese_answer: "过去的", chinese_romanization: "guòqù de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'imminent' means about to happen." +
        "<br><br>" +
        "(B) 'hypothetical' means based on or serving as a hypothesis." +
        "<br><br>" +
        "(C) 'resolved' means settled or found a solution to." +
        "<br><br>" +
        "(D) 'past' means gone by in time and no longer existing.",
    chinese_explanation: "(A) '即将发生的' 意味着即将发生的。" +
        "<br><br>" +
        "(B) '假设的' 意味着基于或作为假设的。" +
        "<br><br>" +
        "(C) '解决了的' 意味着已解决或找到了解决办法的。" +
        "<br><br>" +
        "(D) '过去的' 意味着在时间上已经过去且不再存在的。"
    },
    {
        id: 6,
    question: "The company's __________ strategy includes considering environmental, social, and economic impacts of its operations.",
    chinese_question: "公司的 __________ 战略包括考虑其运营的环境、社会和经济影响。",
    answers: [
        { option: "A", answer: "holistic", chinese_answer: "整体的", chinese_romanization: "zhěngtǐ de" },
        { option: "B", answer: "fragmented", chinese_answer: "分散的", chinese_romanization: "fēnsàn de" },
        { option: "C", answer: "isolated", chinese_answer: "孤立的", chinese_romanization: "gūlì de" },
        { option: "D", answer: "disjointed", chinese_answer: "支离破碎的", chinese_romanization: "zhīlí pòsuì de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'holistic' means relating to or concerned with complete systems rather than with individual parts." +
        "<br><br>" +
        "(B) 'fragmented' means broken into pieces." +
        "<br><br>" +
        "(C) 'isolated' means far away from other places, buildings, or people; remote." +
        "<br><br>" +
        "(D) 'disjointed' means lacking a coherent sequence or connection.",
    chinese_explanation: "(A) '整体的' 意味着与完整系统有关或关注完整系统的，而不是个别部分的。" +
        "<br><br>" +
        "(B) '分散的' 意味着破碎成碎片的。" +
        "<br><br>" +
        "(C) '孤立的' 意味着远离其他地方、建筑物或人的；偏远的。" +
        "<br><br>" +
        "(D) '支离破碎的' 意味着缺乏连贯的顺序或联系的。"
    },
    {
        id: 7,
    question: "Looking back, she realized that her college years were a __________ period of growth, learning, and lasting friendships.",
    chinese_question: "回首往事，她意识到她的大学时光是一个 __________ 的成长、学习和持久友谊的时期。",
    answers: [
        { option: "A", answer: "stressful", chinese_answer: "紧张的", chinese_romanization: "jǐnzhāng de" },
        { option: "B", answer: "chaotic", chinese_answer: "混乱的", chinese_romanization: "hùnluàn de" },
        { option: "C", answer: "halcyon", chinese_answer: "平静的", chinese_romanization: "píngjìng de" },
        { option: "D", answer: "tumultuous", chinese_answer: "骚动的", chinese_romanization: "sāodòng de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'halcyon' means denoting a period of time in the past that was idyllically happy and peaceful." +
        "<br><br>" +
        "(A) 'stressful' means causing mental or emotional stress." +
        "<br><br>" +
        "(B) 'chaotic' means in a state of complete confusion and disorder." +
        "<br><br>" +
        "(D) 'tumultuous' means making a loud, confused noise; uproarious.",
    chinese_explanation: "(C) '平静的'一词指过去一段时间，理想地快乐和平静。" +
        "<br><br>" +
        "(A) '紧张的' 意味着引起精神或情绪压力。" +
        "<br><br>" +
        "(B) '混乱的' 意味着完全混乱和无序的状态。" +
        "<br><br>" +
        "(D) '骚动的' 意味着发出很大、混乱的声音；喧闹的。"
    },
    {
        id: 8,
    question: "The director’s __________ support for the new policy encouraged its acceptance.",
    chinese_question: "主管对新政策的 __________ 支持鼓励了它的接受。",
    answers: [
        { option: "A", answer: "enthusiastic", chinese_answer: "热情", chinese_romanization: "rèqíng" },
        { option: "B", answer: "passive", chinese_answer: "被动", chinese_romanization: "bèidòng" },
        { option: "C", answer: "grudging", chinese_answer: "勉强", chinese_romanization: "miǎnqiáng" },
        { option: "D", answer: "reluctant", chinese_answer: "不情愿", chinese_romanization: "bù qíngyuàn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'enthusiastic' means having or showing intense and eager enjoyment, interest, or approval." +
        "<br><br>" +
        "(B) 'passive' means accepting or allowing what happens without active response." +
        "<br><br>" +
        "(C) 'grudging' means given or allowed only reluctantly or resentfully." +
        "<br><br>" +
        "(D) 'reluctant' means unwilling and hesitant.",
    chinese_explanation: "(A) '热情' 意味着表现出强烈和热切的享受、兴趣或认可。" +
        "<br><br>" +
        "(B) '被动' 意味着接受或允许发生的事情而没有积极的反应。" +
        "<br><br>" +
        "(C) '勉强' 意味着只是勉强或不情愿地给予或允许。" +
        "<br><br>" +
        "(D) '不情愿' 意味着不情愿和犹豫。"
    },
    {
        id: 9,
        question: "The news outlet aimed to present information in a __________ manner, avoiding any political bias.",
        chinese_question: "该新闻机构旨在以 __________ 的方式呈现信息，避免任何政治偏见。",
        answers: [
            { option: "A", answer: "neutral", chinese_answer: "中立的", chinese_romanization: "zhōnglì de" },
            { option: "B", answer: "partisan", chinese_answer: "党派的", chinese_romanization: "dǎngpài de" },
            { option: "C", answer: "slanted", chinese_answer: "有偏见的", chinese_romanization: "yǒu piānjiàn de" },
            { option: "D", answer: "prejudiced", chinese_answer: "偏见的", chinese_romanization: "piānjiàn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'neutral' means not supporting or helping either side in a conflict or disagreement; impartial." +
            "<br><br>" +
            "(B) 'partisan' means prejudiced in favor of a particular cause." +
            "<br><br>" +
            "(C) 'slanted' means presented in a way that is biased or unfair." +
            "<br><br>" +
            "(D) 'prejudiced' means having or showing a dislike or distrust that is derived from prejudice.",
        chinese_explanation: "(A) '中立的' 意味着不支持或帮助冲突或争执中的任何一方；公正的。" +
            "<br><br>" +
            "(B) '党派的' 意味着偏袒某一特定原因的。" +
            "<br><br>" +
            "(C) '有偏见的' 意味着以有偏见或不公平的方式呈现的。" +
            "<br><br>" +
            "(D) '偏见的' 意味着有或表现出源于偏见的不喜欢或不信任。"
    },
    {
        id: 10,
        question: "The __________ living conditions in the slums contributed to the spread of infectious diseases.",
        chinese_question: "贫民窟的 __________ 生活条件导致了传染病的传播。",
        answers: [
            { option: "A", answer: "immaculate", chinese_answer: "完美无瑕的", chinese_romanization: "wánměi wú xiá de" },
            { option: "B", answer: "unsanitary", chinese_answer: "不卫生的", chinese_romanization: "bù wèishēng de" },
            { option: "C", answer: "hygienic", chinese_answer: "卫生的", chinese_romanization: "wèishēng de" },
            { option: "D", answer: "clean", chinese_answer: "干净的", chinese_romanization: "gānjìng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'unsanitary' means not clean or sterile; likely to cause disease." +
            "<br><br>" +
            "(A) 'immaculate' means perfectly clean, neat, or tidy." +
            "<br><br>" +
            "(C) 'hygienic' means conducive to maintaining health and preventing disease, especially by being clean." +
            "<br><br>" +
            "(D) 'clean' means free from dirt, marks, or stains.",
        chinese_explanation: "(B) '不卫生的' 意味着不干净或无菌；可能导致疾病的。" +
            "<br><br>" +
            "(A) '完美无瑕的' 意味着完美清洁、整洁或整齐的。" +
            "<br><br>" +
            "(C) '卫生的' 意味着有助于保持健康和预防疾病的，特别是通过保持清洁。" +
            "<br><br>" +
            "(D) '干净的' 意味着没有污垢、痕迹或污渍的。"
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
