// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The constant news about economic downturns can __________ people’s fears about job security.",
        chinese_question: "关于经济衰退的持续新闻会 __________ 人们对工作安全的恐惧。",
        answers: [
            { option: "A", answer: "reinforce", chinese_answer: "加强", chinese_romanization: "jiāqiáng" },
            { option: "B", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "suppress", chinese_answer: "抑制", chinese_romanization: "yìzhì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'reinforce' means to strengthen or support an idea, behavior, or feeling." +
            "<br><br>" +
            "(B) 'diminish' means to make or become less." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'suppress' means to forcibly put an end to.",
        chinese_explanation: "(A) '加强' 意味着加强或支持一个想法、行为或感觉。" +
            "<br><br>" +
            "(B) '减少' 意味着使或变得更少。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '抑制' 意味着强行终止。"
    },
    {
        id: 2,
        question: "The new regulations created an unexpected __________ for small businesses, complicating their operations.",
        chinese_question: "新法规为小企业创造了一个意外的 __________，使其运作变得复杂。",
        answers: [
                { option: "A", answer: "opportunity", chinese_answer: "机会", chinese_romanization: "jīhuì" },
                { option: "B", answer: "impediment", chinese_answer: "障碍", chinese_romanization: "zhàng'ài" },
                { option: "C", answer: "advantage", chinese_answer: "优势", chinese_romanization: "yōushì" },
                { option: "D", answer: "benefit", chinese_answer: "好处", chinese_romanization: "hǎochù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'impediment' means a hindrance or obstruction in doing something." +
            "<br><br>" +
            "(A) 'opportunity' means a set of circumstances that makes it possible to do something." +
            "<br><br>" +
            "(C) 'advantage' means a condition or circumstance that puts one in a favorable or superior position." +
            "<br><br>" +
            "(D) 'benefit' means an advantage or profit gained from something.",
        chinese_explanation: "(B) '障碍'一词意味着做某事的障碍或阻碍。" +
            "<br><br>" +
            "(A) '机会' 意味着使做某事成为可能的一系列情况。" +
            "<br><br>" +
            "(C) '优势' 意味着使某人处于有利或优越地位的条件或环境。" +
            "<br><br>" +
            "(D) '好处' 意味着从某事中获得的优势或利益。"
    },
    {
        id: 3,
        question: "Her __________ about the political climate helped her make strategic career moves.",
        chinese_question: "她对政治气候的 __________ 帮助她做出战略性的职业决策。",
        answers: [
                { option: "A", answer: "prescience", chinese_answer: "预见", chinese_romanization: "yùjiàn" },
                { option: "B", answer: "naivety", chinese_answer: "天真", chinese_romanization: "tiānzhēn" },
                { option: "C", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
                { option: "D", answer: "uncertainty", chinese_answer: "不确定", chinese_romanization: "bù quèdìng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'prescience' means the fact of knowing something before it takes place; foreknowledge." +
            "<br><br>" +
            "(B) 'naivety' means lack of experience, wisdom, or judgment." +
            "<br><br>" +
            "(C) 'hesitation' means the action of pausing or hesitating before saying or doing something." +
            "<br><br>" +
            "(D) 'uncertainty' means the state of being uncertain.",
        chinese_explanation: "(A) '预见' 意味着在事情发生之前知道某事的事实；预知。" +
            "<br><br>" +
            "(B) '天真' 意味着缺乏经验、智慧或判断力。" +
            "<br><br>" +
            "(C) '犹豫' 意味着在说或做某事之前的暂停或犹豫。" +
            "<br><br>" +
            "(D) '不确定' 意味着不确定的状态。"
    },
    {
        id: 4,
        question: "With __________ ease, she navigated the complex social dynamics at the event, impressing everyone with her charm and diplomacy.",
        chinese_question: "她以 __________ 的轻松驾驭了活动中复杂的社交动态，凭借她的魅力和外交手段给所有人留下了深刻印象。",
        answers: [
                { option: "A", answer: "hesitant", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
                { option: "B", answer: "consummate", chinese_answer: "完美", chinese_romanization: "wánměi" },
                { option: "C", answer: "amateurish", chinese_answer: "业余", chinese_romanization: "yèyú" },
                { option: "D", answer: "awkward", chinese_answer: "笨拙", chinese_romanization: "bènzhuō" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'consummate' means showing a high degree of skill and flair; complete or perfect." +
            "<br><br>" +
            "(A) 'hesitant' means tentative, unsure, or slow in acting or speaking." +
            "<br><br>" +
            "(C) 'amateurish' means engaging or engaged in without payment; non-professional." +
            "<br><br>" +
            "(D) 'awkward' means causing difficulty; hard to deal with.",
        chinese_explanation: "(B) '完美'一词意味着显示出高度的技能和天赋；完整或完美。" +
            "<br><br>" +
            "(A) '犹豫' 意味着在行动或说话上犹豫不决、不确定或缓慢。" +
            "<br><br>" +
            "(C) '业余' 意味着不支付报酬的；非专业的。" +
            "<br><br>" +
            "(D) '笨拙' 意味着造成困难；难以处理的。"
    },
    {
        id: 5,
        question: "The treaty required __________ by the governments of both countries before it could be implemented.",
        chinese_question: "该条约在实施之前需要两国政府的 __________。",
        answers: [
                { option: "A", answer: "rejection", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
                { option: "B", answer: "ratification", chinese_answer: "批准", chinese_romanization: "pīzhǔn" },
                { option: "C", answer: "annulment", chinese_answer: "废除", chinese_romanization: "fèichú" },
                { option: "D", answer: "criticism", chinese_answer: "批评", chinese_romanization: "pīpíng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'ratification' means the action of signing or giving formal consent to a treaty, contract, or agreement, making it officially valid." +
            "<br><br>" +
            "(A) 'rejection' means the dismissing or refusing of a proposal or idea." +
            "<br><br>" +
            "(C) 'annulment' means the declaration that something is invalid." +
            "<br><br>" +
            "(D) 'criticism' means the expression of disapproval based on perceived faults or mistakes.",
        chinese_explanation: "(B) '批准'一词意味着对条约、合同或协议进行签署或正式同意，使其正式有效。" +
            "<br><br>" +
            "(A) '拒绝' 意味着对提议或想法的驳回或拒绝。" +
            "<br><br>" +
            "(C) '废除' 意味着宣布某事无效。" +
            "<br><br>" +
            "(D) '批评' 意味着基于被认为的缺点或错误的表示不赞成。"
    },
    {
        id: 6,
        question: "Using __________, the student managed to get out of doing his homework by pretending to be sick.",
        chinese_question: "学生通过装病使用 __________ 逃避了做作业。",
        answers: [
                { option: "A", answer: "subterfuge", chinese_answer: "诡计", chinese_romanization: "guǐjì" },
                { option: "B", answer: "diligence", chinese_answer: "勤奋", chinese_romanization: "qínfèn" },
                { option: "C", answer: "forthrightness", chinese_answer: "直率", chinese_romanization: "zhíshuài" },
                { option: "D", answer: "dedication", chinese_answer: "奉献", chinese_romanization: "fèngxiàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'subterfuge' figuratively means deceit used in order to achieve one's goal." +
            "<br><br>" +
            "(B) 'diligence' means careful and persistent work or effort." +
            "<br><br>" +
            "(C) 'forthrightness' means directness in manner or speech." +
            "<br><br>" +
            "(D) 'dedication' means the quality of being committed to a task or purpose.",
        chinese_explanation: "(A) '诡计' 在此语境下意指为了达到目的而使用的欺骗。" +
            "<br><br>" +
            "(B) '勤奋' 意味着认真和持续的工作或努力。" +
            "<br><br>" +
            "(C) '直率' 意味着在方式或言语上的直接性。" +
            "<br><br>" +
            "(D) '奉献' 意味着致力于某个任务或目标的品质。"
    },
    {
        id: 7,
        question: "The __________ of her approach to budgeting ensured she saved enough money for her vacation.",
        chinese_question: "她在预算上的 __________ 确保了她存够钱去度假。",
        answers: [
            { option: "A", answer: "recklessness", chinese_answer: "鲁莽", chinese_romanization: "lǔmǎng" },
            { option: "B", answer: "sobriety", chinese_answer: "清醒", chinese_romanization: "qīngxǐng" },
            { option: "C", answer: "extravagance", chinese_answer: "奢侈", chinese_romanization: "shēchǐ" },
            { option: "D", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sobriety' means serious, sensible, and solemn behavior." +
            "<br><br>" +
            "(A) 'recklessness' means lack of regard for the danger or consequences of one's actions." +
            "<br><br>" +
            "(C) 'extravagance' means lack of restraint in spending money or using resources." +
            "<br><br>" +
            "(D) 'neglect' means failure to take proper care over something.",
        chinese_explanation: "(B) '清醒'一词意味着严肃、明智和庄重的行为。" +
            "<br><br>" +
            "(A) '鲁莽' 意味着对危险或后果的漠视。" +
            "<br><br>" +
            "(C) '奢侈' 意味着在花钱或使用资源方面缺乏节制。" +
            "<br><br>" +
            "(D) '忽视' 意味着未能妥善照顾某事。"
    },
    {
        id: 8,
        question: "His __________ led him to take items from his friends' houses even though he didn't need them.",
        chinese_question: "他的 __________ 导致他从朋友家中拿走物品，即使他不需要这些物品。",
        answers: [
            { option: "A", answer: "kleptomania", chinese_answer: "盗窃癖", chinese_romanization: "dàoqiè pǐ" },
            { option: "B", answer: "honesty", chinese_answer: "诚实", chinese_romanization: "chéngshí" },
            { option: "C", answer: "forthrightness", chinese_answer: "坦率", chinese_romanization: "tǎnshuài" },
            { option: "D", answer: "selflessness", chinese_answer: "无私", chinese_romanization: "wúsī" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'kleptomania' means a recurrent urge to steal, typically without regard for need or profit." +
            "<br><br>" +
            "(B) 'honesty' means the quality of being honest." +
            "<br><br>" +
            "(C) 'forthrightness' means the quality of being direct and outspoken." +
            "<br><br>" +
            "(D) 'selflessness' means the quality of caring more about the needs of others than one's own.",
        chinese_explanation: "(A) '盗窃癖' 意味着反复出现的偷窃冲动，通常不考虑需求或利润。" +
            "<br><br>" +
            "(B) '诚实' 意味着诚实的品质。" +
            "<br><br>" +
            "(C) '坦率' 意味着直接和坦率的品质。" +
            "<br><br>" +
            "(D) '无私' 意味着更多地关心他人需求而不是自己需求的品质。"
    },
    {
        id: 9,
    question: "She took a __________ by trusting him with the confidential information.",
    chinese_question: "她信任他，把机密信息告诉了他，这是一种 __________。",
    answers: [
        { option: "A", answer: "precaution", chinese_answer: "预防措施", chinese_romanization: "yùfáng cuòshī" },
        { option: "B", answer: "risk", chinese_answer: "风险", chinese_romanization: "fēngxiǎn" },
        { option: "C", answer: "guarantee", chinese_answer: "保证", chinese_romanization: "bǎozhèng" },
        { option: "D", answer: "certainty", chinese_answer: "确定性", chinese_romanization: "quèdìngxìng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'risk' means a situation involving exposure to danger." + 
        "<br><br>" + 
        "(A) 'precaution' means a measure taken in advance to prevent something dangerous, unpleasant, or inconvenient from happening." + 
        "<br><br>" + 
        "(C) 'guarantee' means a formal assurance that certain conditions will be fulfilled." + 
        "<br><br>" + 
        "(D) 'certainty' means the state of being sure or confident.",
    chinese_explanation: "(B) '风险' 意味着涉及暴露于危险的情况。" + 
        "<br><br>" + 
        "(A) '预防措施' 意味着事先采取的措施，以防止发生危险、不愉快或不便的事情。" + 
        "<br><br>" + 
        "(C) '保证' 意味着对某些条件将得到满足的正式保证。" + 
        "<br><br>" + 
        "(D) '确定性' 意味着确定或自信的状态。"
    },
    {
        id: 10,
    question: "He entered the political __________ with a determination to make a difference.",
    chinese_question: "他以改变现状的决心进入了政治 __________。",
    answers: [
        { option: "A", answer: "stage", chinese_answer: "舞台", chinese_romanization: "wǔtái" },
        { option: "B", answer: "field", chinese_answer: "领域", chinese_romanization: "lǐngyù" },
        { option: "C", answer: "arena", chinese_answer: "竞技场", chinese_romanization: "jìngjì chǎng" },
        { option: "D", answer: "room", chinese_answer: "房间", chinese_romanization: "fángjiān" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'arena' means a place or scene of activity, debate, or conflict." + 
        "<br><br>" + 
        "(A) 'stage' means a raised floor or platform, typically in a theater, on which actors, entertainers, or speakers perform." + 
        "<br><br>" + 
        "(B) 'field' means an area of open land, especially one planted with crops or pasture." + 
        "<br><br>" + 
        "(D) 'room' means a part or division of a building enclosed by walls, floor, and ceiling.",
    chinese_explanation: "(C) “竞技场” 意味着活动、辩论或冲突的场所或场景。" + 
        "<br><br>" + 
        "(A) '舞台' 意味着通常在剧院中的一个抬高的地板或平台，演员、娱乐者或演讲者在其上表演。" + 
        "<br><br>" + 
        "(B) '领域' 意味着一块开放的土地，尤其是种植农作物或牧草的土地。" + 
        "<br><br>" + 
        "(D) '房间' 意味着建筑物的一部分或分区，由墙壁、地板和天花板围起来。"
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
