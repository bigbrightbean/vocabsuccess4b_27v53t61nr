// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ leadership qualities made her the natural choice for CEO, as she consistently demonstrated vision and excellence.",
        chinese_question: "她的 __________ 领导才能使她成为首席执行官的自然选择，因为她始终展现出远见和卓越。",
        answers: [
            { option: "A", answer: "preeminent", chinese_answer: "杰出的", chinese_romanization: "jiéchū de" },
            { option: "B", answer: "average", chinese_answer: "平均的", chinese_romanization: "píngjūn de" },
            { option: "C", answer: "ineffective", chinese_answer: "无效的", chinese_romanization: "wúxiào de" },
            { option: "D", answer: "subordinate", chinese_answer: "下属的", chinese_romanization: "xiàshǔ de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'preeminent' means surpassing all others; very distinguished in some way." +
            "<br><br>" +
            "(B) 'average' means typical or common." +
            "<br><br>" +
            "(C) 'ineffective' means not producing any significant or desired effect." +
            "<br><br>" +
            "(D) 'subordinate' means lower in rank or position.",
        chinese_explanation: "(A) '杰出的' 意味着超越所有其他的；在某方面非常杰出的。" +
            "<br><br>" +
            "(B) '平均的' 意味着典型的或普通的。" +
            "<br><br>" +
            "(C) '无效的' 意味着不产生任何显著或预期效果的。" +
            "<br><br>" +
            "(D) '下属的' 意味着级别或职位较低的。"
    },
    {
        id: 2,
    question: "His __________ decision to change careers proved to be the right one, as he found great success and fulfillment in his new field.",
    chinese_question: "他 __________ 转换职业的决定被证明是正确的，因为他在新领域中找到了巨大的成功和满足感。",
    answers: [
        { option: "A", answer: "intuitive", chinese_answer: "直觉的", chinese_romanization: "zhíjué de" },
        { option: "B", answer: "calculated", chinese_answer: "深思熟虑的", chinese_romanization: "shēnsī shúlǜ de" },
        { option: "C", answer: "hesitant", chinese_answer: "犹豫的", chinese_romanization: "yóuyù de" },
        { option: "D", answer: "forced", chinese_answer: "强迫的", chinese_romanization: "qiǎngpò de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'intuitive' means using or based on what one feels to be true even without conscious reasoning; instinctive." +
        "<br><br>" +
        "(B) 'calculated' means done with full awareness of the likely consequences." +
        "<br><br>" +
        "(C) 'hesitant' means tentative, unsure, or slow in acting or speaking." +
        "<br><br>" +
        "(D) 'forced' means obtained or imposed by coercion or physical power.",
    chinese_explanation: "(A) '直觉的' 意味着基于或使用自己认为真实的东西，即使没有意识的推理；本能的。" +
        "<br><br>" +
        "(B) '深思熟虑的' 意味着完全意识到可能的后果。" +
        "<br><br>" +
        "(C) '犹豫的' 意味着试探性的，不确定的，或行动或说话缓慢的。" +
        "<br><br>" +
        "(D) '强迫的' 意味着通过胁迫或武力获得或施加的。"
    },
    {
        id: 3,
    question: "The manager's proposal was __________ to everyone in the meeting due to its simplicity and efficiency.",
    chinese_question: "由于其简单和高效，经理的提议在会议上对每个人来说都是 __________ 的。",
    answers: [
        { option: "A", answer: "palatable", chinese_answer: "可接受的", chinese_romanization: "kě jiēshòu de" },
        { option: "B", answer: "controversial", chinese_answer: "有争议的", chinese_romanization: "yǒu zhēngyì de" },
        { option: "C", answer: "flawed", chinese_answer: "有缺陷的", chinese_romanization: "yǒu quēxiàn de" },
        { option: "D", answer: "impractical", chinese_answer: "不切实际的", chinese_romanization: "bù qiè shíjì de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'palatable' means acceptable or satisfactory; pleasant." +
        "<br><br>" +
        "(B) 'controversial' means giving rise or likely to give rise to public disagreement." +
        "<br><br>" +
        "(C) 'flawed' means having imperfections." +
        "<br><br>" +
        "(D) 'impractical' means not adapted for use or action; not sensible or realistic.",
    chinese_explanation: "(A) '可接受的' 意味着可以接受或令人满意的；令人愉快的。" +
        "<br><br>" +
        "(B) '有争议的' 意味着引起或可能引起公众争议的。" +
        "<br><br>" +
        "(C) '有缺陷的' 意味着有缺陷的。" +
        "<br><br>" +
        "(D) '不切实际的' 意味着不适合使用或行动的；不明智或不现实的。"
    },
    {
        id: 4,
    question: "His __________ treatment of the subject showed a lack of respect and seriousness.",
    chinese_question: "他对这个问题的 __________ 处理表现出缺乏尊重和严肃。",
    answers: [
        { option: "A", answer: "shabby", chinese_answer: "粗劣", chinese_romanization: "cūliè" },
        { option: "B", answer: "thorough", chinese_answer: "彻底", chinese_romanization: "chèdǐ" },
        { option: "C", answer: "meticulous", chinese_answer: "一丝不苟", chinese_romanization: "yīsī bùgǒu" },
        { option: "D", answer: "careful", chinese_answer: "小心", chinese_romanization: "xiǎoxīn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'shabby' means in poor condition through long use or lack of care." +
        "<br><br>" +
        "(B) 'thorough' means complete with regard to every detail; not superficial or partial." +
        "<br><br>" +
        "(C) 'meticulous' means showing great attention to detail; very careful and precise." +
        "<br><br>" +
        "(D) 'careful' means making sure of avoiding potential danger, mishap, or harm; cautious.",
    chinese_explanation: "(A) '粗劣' 意味着由于长期使用或缺乏维护而处于糟糕的状态。" +
        "<br><br>" +
        "(B) '彻底' 意味着完全的；不肤浅或部分的。" +
        "<br><br>" +
        "(C) '一丝不苟' 意味着非常注意细节；非常小心和精确。" +
        "<br><br>" +
        "(D) '小心' 意味着确保避免潜在的危险、意外或伤害；谨慎的。"
    },
    {
        id: 5,
    question: "The __________ criticism from her boss left her feeling hurt and demoralized.",
    chinese_question: "老板的 __________ 批评让她感到受伤和士气低落。",
    answers: [
        { option: "A", answer: "jagged", chinese_answer: "尖锐", chinese_romanization: "jiānruì" },
        { option: "B", answer: "constructive", chinese_answer: "建设性", chinese_romanization: "jiànshè xìng" },
        { option: "C", answer: "gentle", chinese_answer: "温和", chinese_romanization: "wēnhé" },
        { option: "D", answer: "mild", chinese_answer: "轻微", chinese_romanization: "qīngwēi" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'jagged' means harsh or severe in effect." +
        "<br><br>" +
        "(B) 'constructive' means serving a useful purpose; tending to build up." +
        "<br><br>" +
        "(C) 'gentle' means mild in action or effect." +
        "<br><br>" +
        "(D) 'mild' means not severe, serious, or harsh.",
    chinese_explanation: "(A) '尖锐' 意味着效果严厉或苛刻。" +
        "<br><br>" +
        "(B) '建设性' 意味着有用的目的；倾向于建设。" +
        "<br><br>" +
        "(C) '温和' 意味着动作或效果温和。" +
        "<br><br>" +
        "(D) '轻微' 意味着不严重、不重要或不苛刻。"
    },
    {
        id: 6,
        question: "He found himself feeling __________ in his new job, as his skills were underutilized and his tasks were often repetitive.",
        chinese_question: "他发现自己在新工作中感到 __________，因为他的技能没有得到充分利用，他的任务常常是重复的。",
        answers: [
            { option: "A", answer: "redundant", chinese_answer: "多余的", chinese_romanization: "duōyú de" },
            { option: "B", answer: "indispensable", chinese_answer: "不可或缺的", chinese_romanization: "bùkě huòquē de" },
            { option: "C", answer: "valued", chinese_answer: "有价值的", chinese_romanization: "yǒu jiàzhí de" },
            { option: "D", answer: "essential", chinese_answer: "必要的", chinese_romanization: "bìyào de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'redundant' means not or no longer needed or useful; superfluous." +
            "<br><br>" +
            "(B) 'indispensable' means absolutely necessary." +
            "<br><br>" +
            "(C) 'valued' means considered to be important or beneficial; cherished." +
            "<br><br>" +
            "(D) 'essential' means absolutely necessary; extremely important.",
        chinese_explanation: "(A) '多余的' 意味着不再需要的或无用的；多余的。" +
            "<br><br>" +
            "(B) '不可或缺的' 意味着绝对必要的。" +
            "<br><br>" +
            "(C) '有价值的' 意味着被认为重要或有益的；珍视的。" +
            "<br><br>" +
            "(D) '必要的' 意味着绝对必要的；极其重要的。"
    },
    {
        id: 7,
        question: "Her __________ remarks during the meeting made it clear she was not willing to compromise.",
        chinese_question: "她在会议上的 __________ 言论表明她不愿意妥协。",
        answers: [
            { option: "A", answer: "cooperative", chinese_answer: "合作的", chinese_romanization: "hézuò de" },
            { option: "B", answer: "truculent", chinese_answer: "好斗的", chinese_romanization: "hàodòu de" },
            { option: "C", answer: "diplomatic", chinese_answer: "圆滑的", chinese_romanization: "yuánhuá de" },
            { option: "D", answer: "compliant", chinese_answer: "顺从的", chinese_romanization: "shùncóng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'truculent' means eager or quick to argue or fight; aggressively defiant." +
            "<br><br>" +
            "(A) 'cooperative' means involving mutual assistance in working toward a common goal." +
            "<br><br>" +
            "(C) 'diplomatic' means having or showing an ability to deal with people in a sensitive and effective way." +
            "<br><br>" +
            "(D) 'compliant' means inclined to agree with others or obey rules, especially to an excessive degree.",
        chinese_explanation: "(B) '好斗的' 意味着急于或快速争论或战斗；具有攻击性和挑衅性。" +
            "<br><br>" +
            "(A) '合作的' 意味着在实现共同目标方面的相互帮助。" +
            "<br><br>" +
            "(C) '圆滑的' 意味着表现出能够以敏感和有效的方式处理人与人之间关系的能力。" +
            "<br><br>" +
            "(D) '顺从的' 意味着倾向于同意他人或遵守规则，尤其是过度的。"
    },
    {
        id: 8,
    question: "He felt like he was __________ for affection after months of being alone.",
    chinese_question: "在独处了几个月后，他感觉自己 __________ 于渴望关爱。",
    answers: [
        { option: "A", answer: "thriving", chinese_answer: "繁荣", chinese_romanization: "fánróng" },
        { option: "B", answer: "starved", chinese_answer: "挨饿", chinese_romanization: "ái'è" },
        { option: "C", answer: "nourished", chinese_answer: "营养充足", chinese_romanization: "yíngyǎng chōngzú" },
        { option: "D", answer: "flourishing", chinese_answer: "兴旺", chinese_romanization: "xīngwàng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'starved' means to suffer from a severe lack of something necessary." +
        "<br><br>" +
        "(A) 'thriving' means growing or developing well or vigorously." +
        "<br><br>" +
        "(C) 'nourished' means provided with the food or other substances necessary for growth, health, and good condition." +
        "<br><br>" +
        "(D) 'flourishing' means developing rapidly and successfully; thriving.",
    chinese_explanation: "(B) '挨饿' 意味着严重缺乏某些必要的东西。" +
        "<br><br>" +
        "(A) '繁荣' 意味着良好或旺盛地生长或发展。" +
        "<br><br>" +
        "(C) '营养充足' 意味着提供生长、健康和良好状况所需的食物或其他物质。" +
        "<br><br>" +
        "(D) '兴旺' 意味着快速发展并取得成功；繁荣的。"
    },
    {
        id: 9,
    question: "The __________ barriers to success, such as self-doubt and fear, can be the hardest to overcome.",
    chinese_question: "通向成功的 __________ 障碍，如自我怀疑和恐惧，可能是最难克服的。",
    answers: [
        { option: "A", answer: "invisible", chinese_answer: "无形", chinese_romanization: "wúxíng" },
        { option: "B", answer: "visible", chinese_answer: "可见", chinese_romanization: "kějiàn" },
        { option: "C", answer: "physical", chinese_answer: "物理", chinese_romanization: "wùlǐ" },
        { option: "D", answer: "tangible", chinese_answer: "有形", chinese_romanization: "yǒuxíng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'invisible' means unable to be seen; not visible to the eye." +
        "<br><br>" +
        "(B) 'visible' means able to be seen." +
        "<br><br>" +
        "(C) 'physical' means relating to the body as opposed to the mind." +
        "<br><br>" +
        "(D) 'tangible' means perceptible by touch.",
    chinese_explanation: "(A) '无形' 意味着无法被看到；肉眼看不见。" +
        "<br><br>" +
        "(B) '可见' 意味着可以被看到。" +
        "<br><br>" +
        "(C) '物理' 意味着与身体有关的，而不是与心灵有关的。" +
        "<br><br>" +
        "(D) '有形' 意味着可触知的。"
    },
    {
        id: 10,
        question: "His __________ apology seemed insincere, as if he didn't really care about the issue.",
        chinese_question: "他的 __________ 道歉显得不真诚，仿佛他并不真的在乎这个问题。",
        answers: [
                { option: "A", answer: "heartfelt", chinese_answer: "真诚的", chinese_romanization: "zhēnchéng de" },
                { option: "B", answer: "thorough", chinese_answer: "彻底的", chinese_romanization: "chèdǐ de" },
                { option: "C", answer: "perfunctory", chinese_answer: "草率的", chinese_romanization: "cǎoshuài de" },
                { option: "D", answer: "genuine", chinese_answer: "真实的", chinese_romanization: "zhēnshí de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'perfunctory' means (of an action or gesture) carried out with a minimum of effort or reflection." +
            "<br><br>" +
            "(A) 'heartfelt' means (of a feeling or its expression) sincere; deeply and strongly felt." +
            "<br><br>" +
            "(B) 'thorough' means complete with regard to every detail; not superficial or partial." +
            "<br><br>" +
            "(D) 'genuine' means truly what something is said to be; authentic.",
        chinese_explanation: "(C) '草率的' 一词意味着（动作或手势）以最少的努力或反思完成的。" +
            "<br><br>" +
            "(A) '真诚的' 意味着（感觉或其表达）真诚的；深深感受到的。" +
            "<br><br>" +
            "(B) '彻底的' 意味着在每个细节上都是完整的；不表面的或部分的。" +
            "<br><br>" +
            "(D) '真实的' 意味着确实是所说的那样；真实的。"
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
