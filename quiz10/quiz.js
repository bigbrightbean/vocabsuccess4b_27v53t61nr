// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "His approach to problem-solving was __________, often leading to inconsistent and unpredictable results.",
    chinese_question: "他解决问题的方法是 __________ 的，常常导致不一致和不可预测的结果。",
    answers: [
        { option: "A", answer: "haphazard", chinese_answer: "随意的", chinese_romanization: "suíyì de" },
        { option: "B", answer: "strategic", chinese_answer: "战略性的", chinese_romanization: "zhànlüè xìng de" },
        { option: "C", answer: "calculated", chinese_answer: "深思熟虑的", chinese_romanization: "shēnsī shúlǜ de" },
        { option: "D", answer: "deliberate", chinese_answer: "故意的", chinese_romanization: "gùyì de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'haphazard' means lacking any obvious principle of organization." +
        "<br><br>" +
        "(B) 'strategic' means relating to the identification of long-term or overall aims and interests and the means of achieving them." +
        "<br><br>" +
        "(C) 'calculated' means done with full awareness of the likely consequences." +
        "<br><br>" +
        "(D) 'deliberate' means done consciously and intentionally.",
    chinese_explanation: "(A) '随意的' 意味着缺乏任何明显的组织原则。" +
        "<br><br>" +
        "(B) '战略性的' 意味着涉及确定长期或总体目标和利益以及实现这些目标和利益的方法。" +
        "<br><br>" +
        "(C) '深思熟虑的' 意味着完全意识到可能的后果的。" +
        "<br><br>" +
        "(D) '故意的' 意味着有意识地和有意地做的。"
    },
    {
        id: 2,
        question: "The success of the new marketing campaign was evident in the __________ increase in sales.",
        chinese_question: "新营销活动的成功在销售额的 __________ 增长中显而易见。",
        answers: [
            { option: "A", answer: "hypothetical", chinese_answer: "假设的", chinese_romanization: "jiǎshè de" },
            { option: "B", answer: "negligible", chinese_answer: "微不足道的", chinese_romanization: "wēi bùzú dào de" },
            { option: "C", answer: "intangible", chinese_answer: "无形的", chinese_romanization: "wúxíng de" },
            { option: "D", answer: "tangible", chinese_answer: "有形的", chinese_romanization: "yǒuxíng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'tangible' means perceptible by touch; clear and definite; real." +
            "<br><br>" +
            "(A) 'hypothetical' means based on or serving as a hypothesis." +
            "<br><br>" +
            "(B) 'negligible' means so small or unimportant as to be not worth considering; insignificant." +
            "<br><br>" +
            "(C) 'intangible' means unable to be touched or grasped; not having a physical presence.",
        chinese_explanation: "(D) '有形的' 意味着可以触摸到的；清晰而确定的；真实的。" +
            "<br><br>" +
            "(A) '假设的' 意味着基于或作为假设的。" +
            "<br><br>" +
            "(B) '微不足道的' 意味着如此小或不重要，不值得考虑的；无关紧要的。" +
            "<br><br>" +
            "(C) '无形的' 意味着无法触及或抓住的；没有物理存在的。"
    },
    {
        id: 3,
        question: "His __________ speech went on for over an hour, losing the audience's interest.",
        chinese_question: "他 __________ 的演讲持续了一个多小时，让观众失去了兴趣。",
        answers: [
            { option: "A", answer: "concise", chinese_answer: "简洁的", chinese_romanization: "jiǎnjié de" },
            { option: "B", answer: "verbose", chinese_answer: "冗长的", chinese_romanization: "rǒngcháng de" },
            { option: "C", answer: "brief", chinese_answer: "简短的", chinese_romanization: "jiǎnduǎn de" },
            { option: "D", answer: "succinct", chinese_answer: "简明的", chinese_romanization: "jiǎnmíng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'verbose' means using or expressed in more words than are needed." +
            "<br><br>" +
            "(A) 'concise' means giving a lot of information clearly and in a few words; brief but comprehensive." +
            "<br><br>" +
            "(C) 'brief' means of short duration." +
            "<br><br>" +
            "(D) 'succinct' means briefly and clearly expressed.",
        chinese_explanation: "(B) '冗长的' 一词意味着使用或表达的词比需要的多。" +
            "<br><br>" +
            "(A) '简洁的' 意味着清晰简明地提供大量信息；简短但全面的。" +
            "<br><br>" +
            "(C) '简短的' 意味着持续时间短的。" +
            "<br><br>" +
            "(D) '简明的' 意味着简短而清晰地表达的。"
    },
    {
        id: 4,
    question: "The new software made several processes __________, reducing the need for manual input.",
    chinese_question: "新软件使几个过程变得 __________，减少了对手动输入的需求。",
    answers: [
        { option: "A", answer: "necessary", chinese_answer: "必需的", chinese_romanization: "bìxū de" },
        { option: "B", answer: "redundant", chinese_answer: "多余的", chinese_romanization: "duōyú de" },
        { option: "C", answer: "essential", chinese_answer: "重要的", chinese_romanization: "zhòngyào de" },
        { option: "D", answer: "vital", chinese_answer: "关键的", chinese_romanization: "guānjiàn de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'redundant' means not or no longer needed or useful; superfluous." +
        "<br><br>" +
        "(A) 'necessary' means required to be done, achieved, or present; needed; essential." +
        "<br><br>" +
        "(C) 'essential' means absolutely necessary; extremely important." +
        "<br><br>" +
        "(D) 'vital' means absolutely necessary or important; essential.",
    chinese_explanation: "(B) '多余的' 一词意味着不需要或不再需要或有用的；多余的。" +
        "<br><br>" +
        "(A) '必需的' 意味着需要完成、实现或存在的；需要的；必要的。" +
        "<br><br>" +
        "(C) '重要的' 意味着绝对必要的；极其重要的。" +
        "<br><br>" +
        "(D) '关键的' 意味着绝对必要或重要的；必要的。"
    },
    {
        id: 5,
        question: "The team's __________ spirit and enthusiasm were evident in their energetic and vibrant performance.",
        chinese_question: "团队的 __________ 精神和热情在他们充满活力和生机的表演中显而易见。",
        answers: [
            { option: "A", answer: "sprightly", chinese_answer: "生气勃勃的", chinese_romanization: "shēngqì bóbó de" },
            { option: "B", answer: "dull", chinese_answer: "无趣的", chinese_romanization: "wúqù de" },
            { option: "C", answer: "lifeless", chinese_answer: "无生气的", chinese_romanization: "wú shēngqì de" },
            { option: "D", answer: "weary", chinese_answer: "疲惫的", chinese_romanization: "píbèi de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'sprightly' means lively; full of energy." +
            "<br><br>" +
            "(B) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(C) 'lifeless' means lacking vigor, vitality, or excitement." +
            "<br><br>" +
            "(D) 'weary' means feeling or showing tiredness.",
        chinese_explanation: "(A) '生气勃勃的' 意味着充满活力的。" +
            "<br><br>" +
            "(B) '无趣的' 意味着缺乏兴趣或兴奋的。" +
            "<br><br>" +
            "(C) '无生气的' 意味着缺乏活力、生气或兴奋的。" +
            "<br><br>" +
            "(D) '疲惫的' 意味着感到或表现出疲劳的。"
    },
    {
        id: 6,
        question: "The scientist quickly identified the __________ data in the research, which had been falsified to support the hypothesis.",
        chinese_question: "科学家很快识别出研究中的 __________ 数据，这些数据被篡改以支持假设。",
        answers: [
                { option: "A", answer: "authentic", chinese_answer: "真实的", chinese_romanization: "zhēnshí de" },
                { option: "B", answer: "genuine", chinese_answer: "真的", chinese_romanization: "zhēn de" },
                { option: "C", answer: "spurious", chinese_answer: "伪造的", chinese_romanization: "wěizào de" },
                { option: "D", answer: "credible", chinese_answer: "可信的", chinese_romanization: "kěxìn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'spurious' means not being what it purports to be; false or fake." +
            "<br><br>" +
            "(A) 'authentic' means of undisputed origin; genuine." +
            "<br><br>" +
            "(B) 'genuine' means truly what something is said to be; authentic." +
            "<br><br>" +
            "(D) 'credible' means able to be believed; convincing.",
        chinese_explanation: "(C) '伪造的' 一词意味着不是真实的；虚假的。" +
            "<br><br>" +
            "(A) '真实的' 意味着来源无可争议的；真正的。" +
            "<br><br>" +
            "(B) '真的' 意味着确实是什么；真实的。" +
            "<br><br>" +
            "(D) '可信的' 意味着能够被相信的；令人信服的。"
    },
    {
        id: 7,
    question: "The artist's __________ lifestyle was reflected in her minimalist home and simple, yet elegant, clothing.",
    chinese_question: "这位艺术家的 __________ 生活方式反映在她的极简主义家居和简单而优雅的服装中。",
    answers: [
        { option: "A", answer: "lavish", chinese_answer: "奢华", chinese_romanization: "shēhuá" },
        { option: "B", answer: "austere", chinese_answer: "简朴", chinese_romanization: "jiǎnpǔ" },
        { option: "C", answer: "decadent", chinese_answer: "颓废", chinese_romanization: "tuífèi" },
        { option: "D", answer: "indulgent", chinese_answer: "纵容", chinese_romanization: "zòngróng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'austere' means severe or strict in manner, attitude, or appearance; having no comforts or luxuries; harsh or ascetic." +
        "<br><br>" +
        "(A) 'lavish' means sumptuously rich, elaborate, or luxurious." +
        "<br><br>" +
        "(C) 'decadent' means characterized by or reflecting a state of moral or cultural decline." +
        "<br><br>" +
        "(D) 'indulgent' means having or indicating a tendency to be overly generous to or lenient with someone.",
    chinese_explanation: "(B) '简朴'一词意味着态度或方式的严格或严厉；没有舒适或奢侈；严厉或禁欲。" +
        "<br><br>" +
        "(A) '奢华' 意味着富丽堂皇，精致或奢华。" +
        "<br><br>" +
        "(C) '颓废' 意味着表现出或反映出道德或文化衰退的状态。" +
        "<br><br>" +
        "(D) '纵容' 意味着有或表示倾向于对某人过于慷慨或宽容。"
    },
    {
        id: 8,
        question: "The artist's __________ use of colors made his paintings instantly recognizable and highly sought after.",
        chinese_question: "这位艺术家对色彩的 __________ 运用使他的画作立刻辨认出来，并且非常受欢迎。",
        answers: [
            { option: "A", answer: "subtle", chinese_answer: "微妙的", chinese_romanization: "wēimiào de" },
            { option: "B", answer: "muted", chinese_answer: "柔和的", chinese_romanization: "róuhé de" },
            { option: "C", answer: "flamboyant", chinese_answer: "华丽的", chinese_romanization: "huálì de" },
            { option: "D", answer: "restrained", chinese_answer: "克制的", chinese_romanization: "kèzhì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'flamboyant' means tending to attract attention because of their exuberance, confidence, and stylishness." +
            "<br><br>" +
            "(A) 'subtle' means so delicate or precise as to be difficult to analyze or describe." +
            "<br><br>" +
            "(B) 'muted' means (of a sound or voice) quiet and soft." +
            "<br><br>" +
            "(D) 'restrained' means characterized by reserve or moderation; unemotional or dispassionate.",
        chinese_explanation: "(C) '华丽的' 意味着因其热情、自信和时尚而吸引注意。" +
            "<br><br>" +
            "'微妙的' 意味着如此精细或精确，以至于难以分析或描述的。" +
            "<br><br>" +
            "'柔和的' 意味着（声音或声音）安静和柔和的。" +
            "<br><br>" +
            "'克制的' 意味着以保留或节制为特征的；不带情感或不带感情的。"
    },
    {
        id: 9,
        question: "The salesperson's __________ attitude made the customers uncomfortable, as it seemed overly eager to please.",
        chinese_question: "销售人员的 __________ 态度让顾客感到不舒服，因为他显得过于殷勤。",
        answers: [
            { option: "A", answer: "disinterested", chinese_answer: "漠不关心的", chinese_romanization: "mò bù guānxīn de" },
            { option: "B", answer: "obsequious", chinese_answer: "谄媚的", chinese_romanization: "chǎnmèi de" },
            { option: "C", answer: "aloof", chinese_answer: "冷淡的", chinese_romanization: "lěngdàn de" },
            { option: "D", answer: "detached", chinese_answer: "超然的", chinese_romanization: "chāorán de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'obsequious' means obedient or attentive to an excessive or servile degree." +
            "<br><br>" +
            "(A) 'disinterested' means not influenced by considerations of personal advantage." +
            "<br><br>" +
            "(C) 'aloof' means not friendly or forthcoming; cool and distant." +
            "<br><br>" +
            "(D) 'detached' means disengaged; separate or disconnected.",
        chinese_explanation: "(B) '谄媚的' 意味着服从或过分注意的程度。" +
            "<br><br>" +
            "(A) '漠不关心的' 意味着不受个人利益的影响。" +
            "<br><br>" +
            "(C) '冷淡的' 意味着不友好或不热情；冷酷和疏远的。" +
            "<br><br>" +
            "(D) '超然的' 意味着脱离的；分离的或断开的。"
    },
    {
        id: 10,
        question: "Her __________ taste in art was evident from the exquisite pieces she collected from around the world.",
        chinese_question: "她在艺术方面的 __________ 品味从她收藏的来自世界各地的精美作品中可见一斑。",
        answers: [
            { option: "A", answer: "unsophisticated", chinese_answer: "不复杂的", chinese_romanization: "bù fùzá de" },
            { option: "B", answer: "crude", chinese_answer: "粗糙的", chinese_romanization: "cūcāo de" },
            { option: "C", answer: "sophisticated", chinese_answer: "复杂的", chinese_romanization: "fùzá de" },
            { option: "D", answer: "plain", chinese_answer: "朴素的", chinese_romanization: "pǔsù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sophisticated' means having a refined knowledge and experience; highly developed or complex." +
            "<br><br>" +
            "(A) 'unsophisticated' means lacking refined worldly knowledge or tastes." +
            "<br><br>" +
            "(B) 'crude' means in a natural or raw state; not yet processed or refined." +
            "<br><br>" +
            "(D) 'plain' means not decorated or elaborate; simple or ordinary in character.",
        chinese_explanation: "(C) '复杂的' 意味着具有精致的知识和经验；高度发达或复杂的。" +
            "<br><br>" +
            "(A) '不复杂的' 意味着缺乏精致的世俗知识或品味。" +
            "<br><br>" +
            "(B) '粗糙的' 意味着处于自然或原始状态；尚未加工或精炼的。" +
            "<br><br>" +
            "(D) '朴素的' 意味着不装饰或复杂的；简单或普通的性格。"
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
