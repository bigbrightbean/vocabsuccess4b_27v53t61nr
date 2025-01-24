// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The documentary was broadcast with the network’s __________, ensuring it met all content guidelines.",
    chinese_question: "该纪录片在获得电视台的 __________ 后播出，确保其符合所有内容指南。",
    answers: [
        { option: "A", answer: "scrutiny", chinese_answer: "审查", chinese_romanization: "shěnchá" },
        { option: "B", answer: "imprimatur", chinese_answer: "认可", chinese_romanization: "rènkě" },
        { option: "C", answer: "revision", chinese_answer: "修改", chinese_romanization: "xiūgǎi" },
        { option: "D", answer: "delay", chinese_answer: "延迟", chinese_romanization: "yánchí" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'imprimatur' means an official license to print or publish a book, indicating approval." + 
        "<br><br>" + 
        "(A)'scrutiny' means critical observation or examination." + 
        "<br><br>" + 
        "(C)'revision' means the action of revising." + 
        "<br><br>" + 
        "(D)'delay' means the action of delaying or postponing something.",
    chinese_explanation: "(B) '认可'一词意味着印刷或出版书籍的官方许可，表示批准。" + 
        "<br><br>" + 
        "(A)'审查' 意味着批判性的观察或检查。" + 
        "<br><br>" + 
        "(C)'修改' 意味着修改的行动。" + 
        "<br><br>" + 
        "(D)'延迟' 意味着延迟或推迟某事的行为。"
    },
    {
        id: 2,
        question: "The __________ of their personalities made their friendship natural and easy, as they rarely disagreed on important matters.",
        chinese_question: "他们个性的 __________ 使他们的友谊自然和轻松，因为他们很少在重要事情上意见不合。",
        answers: [
            { option: "A", answer: "congruity", chinese_answer: "一致性", chinese_romanization: "yīzhì xìng" },
            { option: "B", answer: "inconsistency", chinese_answer: "不一致", chinese_romanization: "bù yīzhì" },
            { option: "C", answer: "contradiction", chinese_answer: "矛盾", chinese_romanization: "máodùn" },
            { option: "D", answer: "opposition", chinese_answer: "反对", chinese_romanization: "fǎnduì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'congruity' figuratively means the quality of being in agreement or harmony." +
            "<br><br>" +
            "(B) 'inconsistency' means the fact or state of being inconsistent." +
            "<br><br>" +
            "(C) 'contradiction' means a combination of statements, ideas, or features that are opposed to one another." +
            "<br><br>" +
            "(D) 'opposition' means resistance or dissent, expressed in action or argument.",
        chinese_explanation: "(A) '一致性' 在此语境下意指协议或和谐的质量。" +
            "<br><br>" +
            "(B) '不一致' 意味着不一致的事实或状态。" +
            "<br><br>" +
            "(C) '矛盾' 意味着相互对立的一系列陈述、想法或特征的组合。" +
            "<br><br>" +
            "(D) '反对' 意味着在行动或争论中表达的抵抗或异议。"
    },
    {
        id: 3,
        question: "The student's __________ in the classroom disrupted the lesson and led to disciplinary action.",
        chinese_question: "学生在课堂上的 __________ 扰乱了课程，导致了纪律处分。",
        answers: [
                { option: "A", answer: "attentiveness", chinese_answer: "专心", chinese_romanization: "zhuānxīn" },
                { option: "B", answer: "contumacy", chinese_answer: "违抗", chinese_romanization: "wéikàng" },
                { option: "C", answer: "participation", chinese_answer: "参与", chinese_romanization: "cānyù" },
                { option: "D", answer: "respect", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'contumacy' means stubborn refusal to obey or comply with authority." +
            "<br><br>" +
            "(A) 'attentiveness' means the action of paying close attention to something." +
            "<br><br>" +
            "(C) 'participation' means the action of taking part in something." +
            "<br><br>" +
            "(D) 'respect' means a feeling of deep admiration for someone or something elicited by their abilities, qualities, or achievements.",
        chinese_explanation: "(B) '违抗' 意味着顽固拒绝服从或遵守权威。" +
            "<br><br>" +
            "(A) '专心' 意味着密切关注某事的行为。" +
            "<br><br>" +
            "(C) '参与' 意味着参与某事的行为。" +
            "<br><br>" +
            "(D) '尊重' 意味着对某人或某物由其能力、品质或成就引起的深深钦佩。"
    },
    {
        id: 4,
        question: "The political scandal created a __________ of controversy and debate among the public.",
        chinese_question: "政治丑闻引发了公众之间的 __________ 和辩论。",
        answers: [
            { option: "A", answer: "maelstrom", chinese_answer: "漩涡", chinese_romanization: "xuánwō" },
            { option: "B", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" },
            { option: "C", answer: "silence", chinese_answer: "沉默", chinese_romanization: "chénmò" },
            { option: "D", answer: "tranquility", chinese_answer: "宁静", chinese_romanization: "níngjìng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'maelstrom' figuratively means a situation or state of confused movement or violent turmoil." +
            "<br><br>" +
            "(B) 'harmony' means the state of being in agreement or concord." +
            "<br><br>" +
            "(C) 'silence' means complete absence of sound." +
            "<br><br>" +
            "(D) 'tranquility' means the quality or state of being tranquil; calm.",
        chinese_explanation: "(A) '漩涡' 在此语境下比喻一种混乱的运动或暴力动荡状态。" +
            "<br><br>" +
            "(B) '和谐' 意味着一致或和谐的状态。" +
            "<br><br>" +
            "(C) '沉默' 意味着完全没有声音。" +
            "<br><br>" +
            "(D) '宁静' 意味着安静的质量或状态。"
    },
    {
        id: 5,
    question: "The uncertainty surrounding the new policy changes led to __________ within the organization.",
    chinese_question: "围绕新政策变化的不确定性在组织内部引起了 __________ 。",
    answers: [
        { option: "A", answer: "disquiet", chinese_answer: "不安", chinese_romanization: "bùān" },
        { option: "B", answer: "assurance", chinese_answer: "保证", chinese_romanization: "bǎozhèng" },
        { option: "C", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" },
        { option: "D", answer: "contentment", chinese_answer: "满足", chinese_romanization: "mǎnzú" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'disquiet' means a feeling of anxiety or worry, used figuratively here." + 
        "<br><br>" + 
        "(B) 'assurance' means a positive declaration intended to give confidence." + 
        "<br><br>" + 
        "(C) 'excitement' means a feeling of great enthusiasm and eagerness." + 
        "<br><br>" + 
        "(D) 'contentment' means a state of happiness and satisfaction.",
    chinese_explanation: "(A) '不安' 意味着焦虑或担忧的感觉，这里是比喻用法。" + 
        "<br><br>" + 
        "(B) '保证' 意味着给予信心的积极声明。" + 
        "<br><br>" + 
        "(C) '兴奋' 意味着极大的热情和渴望。" + 
        "<br><br>" + 
        "(D) '满足' 意味着幸福和满意的状态。"
    },
    {
        id: 6,
        question: "Her __________ in dealing with the ongoing technical issues impressed her colleagues, as she consistently found solutions without getting flustered.",
        chinese_question: "她在处理持续的技术问题时表现出的 __________ 给同事们留下了深刻印象，因为她始终在不慌乱的情况下找到解决方案。",
        answers: [
                { option: "A", answer: "panic", chinese_answer: "恐慌", chinese_romanization: "kǒnghuāng" },
                { option: "B", answer: "forbearance", chinese_answer: "忍耐", chinese_romanization: "rěnnài" },
                { option: "C", answer: "irritation", chinese_answer: "恼怒", chinese_romanization: "nǎonù" },
                { option: "D", answer: "haste", chinese_answer: "匆忙", chinese_romanization: "cōngmáng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'forbearance' means patient self-control; restraint and tolerance." +
            "<br><br>" +
            "(A) 'panic' means sudden uncontrollable fear or anxiety, often causing wildly unthinking behavior." +
            "<br><br>" +
            "(C) 'irritation' means the state of feeling annoyed, impatient, or slightly angry." +
            "<br><br>" +
            "(D) 'haste' means excessive speed or urgency of movement or action.",
        chinese_explanation: "(B) '忍耐'一词意味着有耐心的自我控制；克制和宽容。" +
            "<br><br>" +
            "(A) '恐慌' 意味着突然的不可控制的恐惧或焦虑，通常导致狂乱的无思想行为。" +
            "<br><br>" +
            "(C) '恼怒' 意味着感到恼火、不耐烦或稍微生气的状态。" +
            "<br><br>" +
            "(D) '匆忙' 意味着过度的速度或行动的紧迫性。"
    },
    {
        id: 7,
        question: "The __________ in his heart prevented him from forgiving those who had wronged him.",
        chinese_question: "他心中的 __________ 使他无法原谅那些伤害过他的人。",
        answers: [
                { option: "A", answer: "compassion", chinese_answer: "同情", chinese_romanization: "tóngqíng" },
                { option: "B", answer: "rancour", chinese_answer: "怨恨", chinese_romanization: "yuànhèn" },
                { option: "C", answer: "empathy", chinese_answer: "同理心", chinese_romanization: "tónglǐ xīn" },
                { option: "D", answer: "kindness", chinese_answer: "善良", chinese_romanization: "shànliáng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'rancour' means a feeling of deep and bitter anger and ill-will." +
            "<br><br>" +
            "(A) 'compassion' means sympathetic pity and concern for the sufferings or misfortunes of others." +
            "<br><br>" +
            "(C) 'empathy' means the ability to understand and share the feelings of another." +
            "<br><br>" +
            "(D) 'kindness' means the quality of being friendly, generous, and considerate.",
        chinese_explanation: "(B) '怨恨'一词意味着深刻而苦涩的愤怒和恶意。" +
            "<br><br>" +
            "(A) '同情' 意味着对他人的痛苦或不幸的同情怜悯。" +
            "<br><br>" +
            "(C) '同理心' 意味着理解和分享他人感受的能力。" +
            "<br><br>" +
            "(D) '善良' 意味着友好、慷慨和体贴的品质。"
    },
    {
        id: 8,
        question: "The scientist was skeptical about the new drug being hailed as a __________, as no single medicine can cure all ailments.",
        chinese_question: "这位科学家对被誉为 __________ 的新药持怀疑态度，因为没有一种药物能治愈所有疾病。",
        answers: [
                { option: "A", answer: "panacea", chinese_answer: "万能药", chinese_romanization: "wànnéng yào" },
                { option: "B", answer: "placebo", chinese_answer: "安慰剂", chinese_romanization: "ānwèijì" },
                { option: "C", answer: "toxin", chinese_answer: "毒素", chinese_romanization: "dúsù" },
                { option: "D", answer: "hazard", chinese_answer: "危险", chinese_romanization: "wēixiǎn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'panacea' means a solution or remedy for all difficulties or diseases." +
            "<br><br>" +
            "(B) 'placebo' means a substance with no therapeutic effect, used as a control in testing new drugs." +
            "<br><br>" +
            "(C) 'toxin' means a poisonous substance produced within living cells or organisms." +
            "<br><br>" +
            "(D) 'hazard' means a danger or risk.",
        chinese_explanation: "(A) '万能药' 意味着解决所有困难或疾病的解决方案或补救措施。" +
            "<br><br>" +
            "(B) '安慰剂' 意味着没有治疗效果的物质，用作测试新药的对照。" +
            "<br><br>" +
            "(C) '毒素' 意味着在活细胞或生物体内产生的有毒物质。" +
            "<br><br>" +
            "(D) '危险' 意味着危险或风险。"
    },
    {
        id: 9,
    question: "The politician's __________ for making controversial statements often landed him in hot water.",
    chinese_question: "这位政治家发表争议性言论的 __________ 经常让他陷入困境。",
    answers: [
        { option: "A", answer: "tendency", chinese_answer: "倾向", chinese_romanization: "qīngxiàng" },
        { option: "B", answer: "propensity", chinese_answer: "倾向", chinese_romanization: "qīngxiàng" },
        { option: "C", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
        { option: "D", answer: "reluctance", chinese_answer: "不情愿", chinese_romanization: "bù qíngyuàn" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'propensity' figuratively means an inclination or natural tendency to behave in a particular way." + 
        "<br><br>" + 
        "(A) 'tendency' means an inclination toward a particular characteristic or type of behavior." + 
        "<br><br>" + 
        "(C) 'indifference' means lack of interest, concern, or sympathy." + 
        "<br><br>" + 
        "(D) 'reluctance' means unwillingness or disinclination to do something.",
    chinese_explanation: "(B) '倾向' 在此语境下意指行为上的倾向或自然倾向。" + 
        "<br><br>" + 
        "(A) '倾向' 意味着对某一特征或行为类型的倾向。" + 
        "<br><br>" + 
        "(C) '冷漠' 意味着缺乏兴趣、关心或同情。" + 
        "<br><br>" + 
        "(D) '不情愿' 意味着不愿意或不情愿做某事。"
    },
    {
        id: 10,
        question: "The garden's __________ in the early morning made it a perfect spot for meditation.",
        chinese_question: "清晨花园的 __________ 使它成为冥想的理想场所。",
        answers: [
            { option: "A", answer: "quiescence", chinese_answer: "宁静", chinese_romanization: "níngjìng" },
            { option: "B", answer: "disturbance", chinese_answer: "干扰", chinese_romanization: "gānrǎo" },
            { option: "C", answer: "activity", chinese_answer: "活动", chinese_romanization: "huódòng" },
            { option: "D", answer: "chaos", chinese_answer: "混乱", chinese_romanization: "hùnluàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'quiescence' means the state of being quiet or inactive." +
            "<br><br>" +
            "(B) 'disturbance' means the interruption of a settled and peaceful condition." +
            "<br><br>" +
            "(C) 'activity' means the condition in which things are happening or being done." +
            "<br><br>" +
            "(D) 'chaos' means complete disorder and confusion.",
        chinese_explanation: "(A) '宁静' 意味着安静或不活动的状态。" +
            "<br><br>" +
            "(B) '干扰' 意味着打断了安定和平的状态。" +
            "<br><br>" +
            "(C) '活动' 意味着事情正在发生或正在做的状态。" +
            "<br><br>" +
            "(D) '混乱' 意味着完全的混乱和混淆。"
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
