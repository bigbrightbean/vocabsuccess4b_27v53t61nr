// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "In __________ to the wishes of the community leaders, the event was postponed to a later date.",
    chinese_question: "出于对社区领导者意愿的 __________，活动被推迟到了一个更晚的日期。",
    answers: [
        { option: "A", answer: "defiance", chinese_answer: "反抗", chinese_romanization: "fǎnkàng" },
        { option: "B", answer: "deference", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" },
        { option: "C", answer: "rebellion", chinese_answer: "叛乱", chinese_romanization: "pànluàn" },
        { option: "D", answer: "negligence", chinese_answer: "疏忽", chinese_romanization: "shūhū" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'deference' means humble submission and respect." + 
        "<br><br>" + 
        "(A) 'defiance' means open resistance; bold disobedience." + 
        "<br><br>" + 
        "(C) 'rebellion' means an act of violent or open resistance to an established government or ruler." + 
        "<br><br>" + 
        "(D) 'negligence' means failure to take proper care in doing something.",
    chinese_explanation: "(B) '尊重'一词意味着谦卑的服从和尊敬。" + 
        "<br><br>" + 
        "(A) '反抗' 意味着公开抵抗；大胆的不服从。" + 
        "<br><br>" + 
        "(C) '叛乱' 意味着对已建立的政府或统治者的暴力或公开抵抗行为。" + 
        "<br><br>" + 
        "(D) '疏忽' 意味着未能妥善照顾。"
    },
    {
        id: 2,
    question: "Starting a new business always involves a certain amount of __________.",
    chinese_question: "创办新企业总是涉及一定程度的 __________。",
    answers: [
        { option: "A", answer: "predictability", chinese_answer: "可预测性", chinese_romanization: "kě yùcè xìng" },
        { option: "B", answer: "risk", chinese_answer: "风险", chinese_romanization: "fēngxiǎn" },
        { option: "C", answer: "security", chinese_answer: "安全性", chinese_romanization: "ānquánxìng" },
        { option: "D", answer: "comfort", chinese_answer: "舒适性", chinese_romanization: "shūshì xìng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'risk' means a situation involving exposure to danger." + 
        "<br><br>" + 
        "(A) 'predictability' means the ability to be predicted." + 
        "<br><br>" + 
        "(C) 'security' means the state of being free from danger or threat." + 
        "<br><br>" + 
        "(D) 'comfort' means a state of physical ease and freedom from pain or constraint.",
    chinese_explanation: "(B) '风险' 意味着涉及暴露于危险的情况。" + 
        "<br><br>" + 
        "(A) '可预测性' 意味着可以被预测的能力。" + 
        "<br><br>" + 
        "(C) '安全性' 意味着没有危险或威胁的状态。" + 
        "<br><br>" + 
        "(D) '舒适性' 意味着身体轻松自在，无痛苦或约束的状态。"
    },
    {
        id: 3,
        question: "The __________ in the media coverage during the conflict led to a surge in nationalistic fervour and anti-foreign sentiment.",
        chinese_question: "冲突期间媒体报道中的 __________ 导致了民族主义热情和反外情绪的高涨。",
        answers: [
                { option: "A", answer: "jingoism", chinese_answer: "沙文主义", chinese_romanization: "shāwén zhǔyì" },
                { option: "B", answer: "objectivity", chinese_answer: "客观性", chinese_romanization: "kèguān xìng" },
                { option: "C", answer: "impartiality", chinese_answer: "公正性", chinese_romanization: "gōngzhèng xìng" },
                { option: "D", answer: "moderation", chinese_answer: "适度", chinese_romanization: "shìdù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'jingoism' means extreme patriotism, especially in the form of aggressive or warlike foreign policy." +
            "<br><br>" +
            "(B) 'objectivity' means the quality of being objective." +
            "<br><br>" +
            "(C) 'impartiality' means equal treatment of all rivals or disputants; fairness." +
            "<br><br>" +
            "(D) 'moderation' means the avoidance of excess or extremes.",
        chinese_explanation: "(A) '沙文主义' 意味着极端爱国主义，特别是以好战或好斗的外交政策为表现形式。" +
            "<br><br>" +
            "(B) '客观性' 意味着客观的质量。" +
            "<br><br>" +
            "(C) '公正性' 意味着对所有竞争对手或争论者的平等对待；公平。" +
            "<br><br>" +
            "(D) '适度' 意味着避免过度或极端。"
    },
    {
        id: 4,
        question: "The __________ investor was careful to diversify his portfolio and seek advice from seasoned professionals.",
        chinese_question: "这位 __________ 投资者小心翼翼地分散投资组合，并寻求有经验的专业人士的建议。",
        answers: [
            { option: "A", answer: "neophyte", chinese_answer: "新手", chinese_romanization: "xīnshǒu" },
            { option: "B", answer: "tycoon", chinese_answer: "大亨", chinese_romanization: "dàhēng" },
            { option: "C", answer: "authority", chinese_answer: "权威", chinese_romanization: "quánwēi" },
            { option: "D", answer: "magnate", chinese_answer: "巨头", chinese_romanization: "jùtóu" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'neophyte' figuratively means a person who is new to a subject, skill, or belief." +
            "<br><br>" +
            "(B) 'tycoon' means a wealthy, powerful person in business or industry." +
            "<br><br>" +
            "(C) 'authority' means a person with extensive or specialized knowledge about a subject; an expert." +
            "<br><br>" +
            "(D) 'magnate' means a wealthy and influential person, especially in business.",
        chinese_explanation: "(A) '新手' 在此语境下意指在某一学科、技能或信仰方面的新手。" +
            "<br><br>" +
            "(B) '大亨' 意味着商业或工业中富有且有权势的人。" +
            "<br><br>" +
            "(C) '权威' 意味着在某一学科拥有广泛或专业知识的人；专家。" +
            "<br><br>" +
            "(D) '巨头' 意味着富有和有影响力的人，尤其是在商业方面。"
    },
    {
        id: 5,
    question: "They decided to leave the __________ behind and focus on building a new future together.",
    chinese_question: "他们决定把 __________ 抛在脑后，专注于共同建设一个新的未来。",
    answers: [
        { option: "A", answer: "past", chinese_answer: "过去", chinese_romanization: "guòqù" },
        { option: "B", answer: "present", chinese_answer: "现在", chinese_romanization: "xiànzài" },
        { option: "C", answer: "future", chinese_answer: "未来", chinese_romanization: "wèilái" },
        { option: "D", answer: "imminent", chinese_answer: "即将发生", chinese_romanization: "jíjiāng fāshēng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'past' means having happened or existed before now." + 
        "<br><br>" + 
        "(B) 'present' means the period of time now occurring." + 
        "<br><br>" + 
        "(C) 'future' means the time or a period of time following the moment of speaking or writing." + 
        "<br><br>" + 
        "(D) 'imminent' means about to happen.",
    chinese_explanation: "(A) '过去' 意味着在现在之前发生或存在。" + 
        "<br><br>" + 
        "(B) '现在' 意味着现在发生的时间段。" + 
        "<br><br>" + 
        "(C) '未来' 意味着在说话或写作时之后的时间或一段时间。" + 
        "<br><br>" + 
        "(D) '即将发生' 意味着即将发生。"
    },
    {
        id: 6,
    question: "She was devastated by the __________ that circulated about her personal life, none of which were true.",
    chinese_question: "关于她私人生活的 __________ 让她感到非常难过，这些传闻都不是真的。",
    answers: [
        { option: "A", answer: "flattery", chinese_answer: "奉承", chinese_romanization: "fèngchéng" },
        { option: "B", answer: "calumny", chinese_answer: "诽谤", chinese_romanization: "fěibàng" },
        { option: "C", answer: "acknowledgment", chinese_answer: "承认", chinese_romanization: "chéngrèn" },
        { option: "D", answer: "recognition", chinese_answer: "认可", chinese_romanization: "rènkě" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'calumny' means the making of false and defamatory statements about someone in order to damage their reputation; slander." + 
        "<br><br>" + 
        "(A)'flattery' means excessive and insincere praise, given especially to further one's own interests." + 
        "<br><br>" + 
        "(C)'acknowledgment' means acceptance of the truth or existence of something." + 
        "<br><br>" + 
        "(D)'recognition' means the action or process of recognizing or being recognized, in particular.",
    chinese_explanation: "(B) '诽谤'一词意味着为了损害某人的名誉而进行的虚假和诽谤性陈述；诋毁。" + 
        "<br><br>" + 
        "(A)'奉承' 意味着过度和虚伪的赞美，尤其是为了自己的利益。" + 
        "<br><br>" + 
        "(C)'承认' 意味着接受某事的真实性或存在。" + 
        "<br><br>" + 
        "(D)'认可' 意味着识别或被识别的行为或过程。"
    },
    {
        id: 7,
    question: "A __________ started about a new product launch, but the company neither confirmed nor denied it.",
    chinese_question: "关于新产品发布的 __________ 传开了，但公司既没有确认也没有否认。",
    answers: [
        { option: "A", answer: "rumour", chinese_answer: "谣言", chinese_romanization: "yáoyán" },
        { option: "B", answer: "statement", chinese_answer: "声明", chinese_romanization: "shēngmíng" },
        { option: "C", answer: "confirmation", chinese_answer: "确认", chinese_romanization: "quèrèn" },
        { option: "D", answer: "declaration", chinese_answer: "宣布", chinese_romanization: "xuānbù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'rumour' means a currently circulating story or report of uncertain or doubtful truth." + 
        "<br><br>" + 
        "(B) 'statement' means a definite or clear expression of something in speech or writing." + 
        "<br><br>" + 
        "(C) 'confirmation' means the action of confirming something or the state of being confirmed." + 
        "<br><br>" + 
        "(D) 'declaration' means a formal or explicit statement or announcement.",
    chinese_explanation: "(A) '谣言' 意味着目前流传的关于不确定或可疑真相的故事或报告。" + 
        "<br><br>" + 
        "(B) '声明' 意味着口头或书面表达的明确表达。" + 
        "<br><br>" + 
        "(C) '确认' 意味着确认某事的行为或被确认的状态。" + 
        "<br><br>" + 
        "(D) '宣布' 意味着正式或明确的声明或公告。"
    },
    {
        id: 8,
    question: "In the historical novel, the peasants' daily __________ was vividly described, highlighting their relentless efforts.",
    chinese_question: "在历史小说中，农民们每天的辛苦 __________ 被生动地描绘出来，突出了他们不懈的努力。",
    answers: [
        { option: "A", answer: "celebration", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
        { option: "B", answer: "moil", chinese_answer: "辛劳", chinese_romanization: "xīnláo" },
        { option: "C", answer: "leisure", chinese_answer: "闲暇", chinese_romanization: "xiánxiá" },
        { option: "D", answer: "tranquility", chinese_answer: "宁静", chinese_romanization: "níngjìng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'moil' means to work hard or drudge." + 
        "<br><br>" + 
        "(A) 'celebration' means a joyful occasion." + 
        "<br><br>" + 
        "(C) 'leisure' means free time." + 
        "<br><br>" + 
        "(D) 'tranquility' means peacefulness.",
    chinese_explanation: "(B) '辛劳' 一词意味着努力工作或做苦工。" + 
        "<br><br>" + 
        "(A) '庆祝' 意味着一个欢乐的场合。" + 
        "<br><br>" + 
        "(C) '闲暇' 意味着空闲时间。" + 
        "<br><br>" + 
        "(D) '宁静' 意味着平静。"
}
    ,
    {
        id: 9,
        question: "To maintain __________, the panel included members from diverse backgrounds to evaluate the proposals.",
        chinese_question: "为了保持 __________，小组包括来自不同背景的成员来评估提案。",
        answers: [
            { option: "A", answer: "bias", chinese_answer: "偏见", chinese_romanization: "piānjiàn" },
            { option: "B", answer: "subjectivity", chinese_answer: "主观性", chinese_romanization: "zhǔguān xìng" },
            { option: "C", answer: "objectivity", chinese_answer: "客观性", chinese_romanization: "kèguān xìng" },
            { option: "D", answer: "partiality", chinese_answer: "偏袒", chinese_romanization: "piāntǎn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'objectivity' means the quality of being objective, unbiased, and not influenced by personal feelings or opinions." +
            "<br><br>" +
            "(A) 'bias' means inclination or prejudice for or against one person or group, especially in a way considered to be unfair." +
            "<br><br>" +
            "(B) 'subjectivity' means based on or influenced by personal feelings, tastes, or opinions." +
            "<br><br>" +
            "(D) 'partiality' means unfair bias in favor of one thing or person compared with another; favoritism.",
        chinese_explanation: "(C) '客观性'一词意味着客观、公正、不受个人感情或意见影响的品质。" +
            "<br><br>" +
            "(A) '偏见' 意味着对一个人或一群人的倾向或偏见，尤其是被认为不公平的方式。" +
            "<br><br>" +
            "(B) '主观性' 意味着基于或受个人感情、兴趣或意见影响的。" +
            "<br><br>" +
            "(D) '偏袒' 意味着偏向某一事物或某人；偏爱。"
    },
    {
        id: 10,
question: "Amidst the __________ of conflicting opinions, it was hard to find a clear path forward.",
chinese_question: "在矛盾意见的 __________ 中，很难找到一条明确的前进道路。",
answers: [
    { option: "A", answer: "clarity", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
    { option: "B", answer: "hubbub", chinese_answer: "喧闹", chinese_romanization: "xuānnào" },
    { option: "C", answer: "silence", chinese_answer: "安静", chinese_romanization: "ānjìng" },
    { option: "D", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" }
],
correctAnswer: "B",
explanation: "(B) 'hubbub' means a chaotic noise caused by a crowd of people or confusion." +
    "<br><br>" +
    "(A) 'clarity' means the quality of being clear." +
    "<br><br>" +
    "(C) 'silence' means complete absence of sound." +
    "<br><br>" +
    "(D) 'harmony' means agreement or concord.",
chinese_explanation: "(B) '喧闹' 意味着由一群人或混乱引起的混乱噪音。" +
    "<br><br>" +
    "(A) '清晰' 意味着清晰的质量。" +
    "<br><br>" +
    "(C) '安静' 意味着完全没有声音。" +
    "<br><br>" +
    "(D) '和谐' 意味着一致或和睦。"
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
