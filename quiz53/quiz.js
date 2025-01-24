// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The police discovered an __________ drug operation hidden in the abandoned warehouse.",
        chinese_question: "警方在废弃的仓库中发现了一个 __________ 的毒品操作。",
        answers: [
                { option: "A", answer: "legal", chinese_answer: "合法的", chinese_romanization: "héfǎ de" },
                { option: "B", answer: "illicit", chinese_answer: "非法的", chinese_romanization: "fēifǎ de" },
                { option: "C", answer: "authorized", chinese_answer: "授权的", chinese_romanization: "shòuquán de" },
                { option: "D", answer: "legitimate", chinese_answer: "合规的", chinese_romanization: "héguī de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'illicit' means forbidden by law, rules, or custom." +
            "<br><br>" +
            "(A) 'legal' means permitted by law." +
            "<br><br>" +
            "(C) 'authorized' means having official permission or approval." +
            "<br><br>" +
            "(D) 'legitimate' means conforming to the law or to rules.",
        chinese_explanation: "(B) '非法的' 一词意味着被法律、规则或习俗禁止的。" +
            "<br><br>" +
            "(A) '合法的' 意味着被法律允许的。" +
            "<br><br>" +
            "(C) '授权的' 意味着具有官方许可或批准的。" +
            "<br><br>" +
            "(D) '合规的' 意味着符合法律或规则的。"
    },
    {
        id: 2,
    question: "The __________ bureaucracy made it difficult to get any work done quickly.",
    chinese_question: "这个 __________ 的官僚机构使得任何工作都很难迅速完成。",
    answers: [
        { option: "A", answer: "efficient", chinese_answer: "高效", chinese_romanization: "gāoxiào" },
        { option: "B", answer: "streamlined", chinese_answer: "流线型", chinese_romanization: "liúxiànxíng" },
        { option: "C", answer: "bulky", chinese_answer: "笨重", chinese_romanization: "bènzhòng" },
        { option: "D", answer: "agile", chinese_answer: "敏捷", chinese_romanization: "mǐnjié" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'bulky' means large and unwieldy, suggesting something that is slow and cumbersome." +
        "<br><br>" +
        "(A) 'efficient' means achieving maximum productivity with minimum wasted effort." +
        "<br><br>" +
        "(B) 'streamlined' means designed to have little resistance to a flow of air or water." +
        "<br><br>" +
        "(D) 'agile' means able to move quickly and easily.",
    chinese_explanation: "(C) “笨重” 意味着大而笨拙，暗示着某物缓慢而累赘。" +
        "<br><br>" +
        "(A) '高效' 意味着以最小的浪费达到最大生产率。" +
        "<br><br>" +
        "(B) '流线型' 意味着设计成对空气或水的流动阻力小的。" +
        "<br><br>" +
        "(D) '敏捷' 意味着能够迅速轻松地移动。"
    },
    {
        id: 3,
        question: "The company's finances were __________, with unclear records and questionable transactions.",
        chinese_question: "公司的财务状况 __________，记录不清晰且交易可疑。",
        answers: [
            { option: "A", answer: "transparent", chinese_answer: "透明的", chinese_romanization: "tòumíng de" },
            { option: "B", answer: "straightforward", chinese_answer: "简单明了的", chinese_romanization: "jiǎndān míngliǎo de" },
            { option: "C", answer: "murky", chinese_answer: "模糊的", chinese_romanization: "móhu de" },
            { option: "D", answer: "pristine", chinese_answer: "原始的", chinese_romanization: "yuánshǐ de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'murky' means not fully explained or understood, especially with concealed dishonesty or immorality." +
            "<br><br>" +
            "(A) 'transparent' means allowing light to pass through so that objects behind can be distinctly seen." +
            "<br><br>" +
            "(B) 'straightforward' means uncomplicated and easy to do or understand." +
            "<br><br>" +
            "(D) 'pristine' means in its original condition; unspoiled.",
        chinese_explanation: "(C) '模糊的' 意味着没有完全解释或理解，尤其是带有隐瞒的不诚实或不道德。" +
            "<br><br>" +
            "(A) '透明的' 意味着允许光线通过，使得后面的物体可以清晰地看到。" +
            "<br><br>" +
            "(B) '简单明了的' 意味着不复杂且容易做或理解的。" +
            "<br><br>" +
            "(D) '原始的' 意味着处于其原始状态的；未受损的。"
    },
    {
        id: 4,
        question: "The president's visit to the war memorial was __________ of the nation's respect and gratitude for its fallen heroes.",
        chinese_question: "总统对战争纪念碑的访问是该国对其阵亡英雄的尊重和感激的 __________ 象征。",
        answers: [
            { option: "A", answer: "literal", chinese_answer: "字面的", chinese_romanization: "zìmiàn de" },
            { option: "B", answer: "symbolic", chinese_answer: "象征性的", chinese_romanization: "xiàngzhēng xìng de" },
            { option: "C", answer: "irrelevant", chinese_answer: "无关的", chinese_romanization: "wúguān de" },
            { option: "D", answer: "casual", chinese_answer: "随意的", chinese_romanization: "suíyì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'symbolic' means serving as a symbol." +
            "<br><br>" +
            "(A) 'literal' means taking words in their usual or most basic sense without metaphor or allegory." +
            "<br><br>" +
            "(C) 'irrelevant' means not connected with or relevant to something." +
            "<br><br>" +
            "(D) 'casual' means relaxed and unconcerned.",
        chinese_explanation: "(B) '象征性的' 意味着作为象征的。" +
            "<br><br>" +
            "(A) '字面的' 意味着以其通常或最基本的意义理解词语，没有隐喻或寓言的。" +
            "<br><br>" +
            "(C) '无关的' 意味着与某事无关的。" +
            "<br><br>" +
            "(D) '随意的' 意味着放松和不关心的。"
    },
    {
        id: 5,
        question: "After sharing her personal story, she felt __________, worried about how others would perceive her.",
        chinese_question: "在分享了她的个人故事后，她感到 __________，担心别人会如何看待她。",
        answers: [
            { option: "A", answer: "confident", chinese_answer: "自信的", chinese_romanization: "zìxìn de" },
            { option: "B", answer: "invincible", chinese_answer: "不可战胜的", chinese_romanization: "bùkě zhànshèng de" },
            { option: "C", answer: "vulnerable", chinese_answer: "脆弱的", chinese_romanization: "cuìruò de" },
            { option: "D", answer: "secure", chinese_answer: "安全的", chinese_romanization: "ānquán de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'vulnerable' means susceptible to physical or emotional attack or harm." +
            "<br><br>" +
            "(A) 'confident' means feeling or showing certainty about something." +
            "<br><br>" +
            "(B) 'invincible' means too powerful to be defeated or overcome." +
            "<br><br>" +
            "(D) 'secure' means fixed or fastened so as not to give way, become loose, or be lost.",
        chinese_explanation: "(C) '脆弱的' 意味着容易受到身体或情感上的攻击或伤害。" +
            "<br><br>" +
            "(A) '自信的' 意味着对某事感到或表现出确定性。" +
            "<br><br>" +
            "(B) '不可战胜的' 意味着太强大而无法被击败或克服。" +
            "<br><br>" +
            "(D) '安全的' 意味着固定或紧固，不会松动或丢失。"
    },
    {
        id: 6,
    question: "Her __________ efforts in the project, though small, were crucial to its success and greatly appreciated by the team.",
    chinese_question: "她在项目中的 __________ 努力虽然微小，但对成功至关重要，并受到团队的高度赞赏。",
    answers: [
        { option: "A", answer: "miniature", chinese_answer: "微小的", chinese_romanization: "wēixiǎo de" },
        { option: "B", answer: "insignificant", chinese_answer: "无关紧要的", chinese_romanization: "wúguān jìnyào de" },
        { option: "C", answer: "trivial", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" },
        { option: "D", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'miniature' means very small of its kind." +
        "<br><br>" +
        "(B) 'insignificant' means too small or unimportant to be worth consideration." +
        "<br><br>" +
        "(C) 'trivial' means of little value or importance." +
        "<br><br>" +
        "(D) 'minor' means lesser in importance, seriousness, or significance.",
    chinese_explanation: "(A) '微小的' 意味着非常小的。" +
        "<br><br>" +
        "(B) '无关紧要的' 意味着太小或不重要而不值得考虑的。" +
        "<br><br>" +
        "(C) '微不足道的' 意味着价值或重要性很小的。" +
        "<br><br>" +
        "(D) '次要的' 意味着在重要性、严重性或意义上较小的。"
    },
    {
        id: 7,
    question: "Their argument was based on __________ evidence, which did not hold up under scrutiny.",
    chinese_question: "他们的论点基于 __________ 的证据，在仔细审查下无法成立。",
    answers: [
        { option: "A", answer: "strong", chinese_answer: "强有力的", chinese_romanization: "qiáng yǒulì de" },
        { option: "B", answer: "solid", chinese_answer: "牢固的", chinese_romanization: "láogù de" },
        { option: "C", answer: "tenuous", chinese_answer: "脆弱的", chinese_romanization: "cuìruò de" },
        { option: "D", answer: "substantial", chinese_answer: "实质的", chinese_romanization: "shízhì de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'tenuous' means very weak or slight." +
        "<br><br>" +
        "(A) 'strong' means having the power to move heavy weights or perform other physically demanding tasks." +
        "<br><br>" +
        "(B) 'solid' means firm and stable in shape; not liquid or fluid." +
        "<br><br>" +
        "(D) 'substantial' means of considerable importance, size, or worth.",
    chinese_explanation: "(C) '脆弱的' 一词意味着非常弱或轻微的。" +
        "<br><br>" +
        "(A) '强有力的' 意味着有力量搬运重物或执行其他体力要求高的任务。" +
        "<br><br>" +
        "(B) '牢固的' 意味着形状坚固稳定的；不是液体或流体的。" +
        "<br><br>" +
        "(D) '实质的' 意味着相当重要、大小或价值的。"
    },
    {
        id: 8,
    question: "Arguing over small details in the meeting seemed __________ to everyone involved.",
    chinese_question: "在会议上争论小细节对所有参与者来说都显得很 __________。",
    answers: [
        { option: "A", answer: "crucial", chinese_answer: "关键的", chinese_romanization: "guānjiàn de" },
        { option: "B", answer: "beneficial", chinese_answer: "有益的", chinese_romanization: "yǒuyì de" },
        { option: "C", answer: "pointless", chinese_answer: "无意义的", chinese_romanization: "wú yìyì de" },
        { option: "D", answer: "necessary", chinese_answer: "必要的", chinese_romanization: "bìyào de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'pointless' means having no purpose or effect." +
        "<br><br>" +
        "(A) 'crucial' means decisive or critical, especially in the success or failure of something." +
        "<br><br>" +
        "(B) 'beneficial' means resulting in good; favorable or advantageous." +
        "<br><br>" +
        "(D) 'necessary' means required to be done, achieved, or present; needed; essential.",
    chinese_explanation: "(C) “无意义的” 意味着没有目的或效果。" +
        "<br><br>" +
        "(A) '关键的' 意味着决定性或关键的，尤其是在成功或失败方面。" +
        "<br><br>" +
        "(B) '有益的' 意味着结果是好的；有利或有优势的。" +
        "<br><br>" +
        "(D) '必要的' 意味着需要完成、实现或存在的；需要的；必不可少的。"
    },
    {
        id: 9,
    question: "The author's latest book deal was incredibly __________, securing her a multimillion-dollar advance.",
    chinese_question: "作者的最新书籍交易极其 __________，为她赢得了数百万美元的预付款。",
    answers: [
        { option: "A", answer: "lucrative", chinese_answer: "盈利的", chinese_romanization: "yínglì de" },
        { option: "B", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
        { option: "C", answer: "humble", chinese_answer: "谦卑的", chinese_romanization: "qiānbēi de" },
        { option: "D", answer: "insignificant", chinese_answer: "无关紧要的", chinese_romanization: "wúguān jìnyào de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'lucrative' means producing a great deal of profit." +
        "<br><br>" +
        "(B) 'modest' means unassuming in the estimation of one's abilities or achievements." +
        "<br><br>" +
        "(C) 'humble' means having or showing a modest or low estimate of one's importance." +
        "<br><br>" +
        "(D) 'insignificant' means too small or unimportant to be worth consideration.",
    chinese_explanation: "(A) '盈利的' 意味着产生大量利润的。" +
        "<br><br>" +
        "(B) '谦虚的' 意味着对自己的能力或成就持谦逊态度的。" +
        "<br><br>" +
        "(C) '谦卑的' 意味着对自己的重要性有或表现出谦虚或低估的态度。" +
        "<br><br>" +
        "(D) '无关紧要的' 意味着太小或不重要而不值得考虑的。"
    },
    {
        id: 10,
    question: "The company’s __________ objective is to achieve sustainable growth while minimizing environmental impact.",
    chinese_question: "公司的 __________ 目标是实现可持续增长，同时将环境影响降至最低。",
    answers: [
        { option: "A", answer: "primary", chinese_answer: "主要", chinese_romanization: "zhǔyào" },
        { option: "B", answer: "secondary", chinese_answer: "次要", chinese_romanization: "cìyào" },
        { option: "C", answer: "negligible", chinese_answer: "微不足道", chinese_romanization: "wēi bù zú dào" },
        { option: "D", answer: "peripheral", chinese_answer: "外围", chinese_romanization: "wàiwéi" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'primary' means of chief importance; principal." +
        "<br><br>" +
        "(B) 'secondary' means coming after, less important than, or resulting from someone or something else that is primary." +
        "<br><br>" +
        "(C) 'negligible' means so small or unimportant as to be not worth considering." +
        "<br><br>" +
        "(D) 'peripheral' means relating to or situated on the edge or periphery of something.",
    chinese_explanation: "(A) '主要' 意味着最重要的；主要的。" +
        "<br><br>" +
        "(B) '次要' 意味着排在后面的、不如主要的或由主要的某物引起的。" +
        "<br><br>" +
        "(C) '微不足道' 意味着太小或不重要而不值得考虑。" +
        "<br><br>" +
        "(D) '外围' 意味着与某事物的边缘或外围有关的。"
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
