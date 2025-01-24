// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "Many people tend to __________ historical figures, overlooking their flaws and mistakes.",
    chinese_question: "许多人倾向于 __________ 历史人物，忽视他们的缺点和错误。",
    answers: [
        { option: "A", answer: "deify", chinese_answer: "神化", chinese_romanization: "shénhuà" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "mock", chinese_answer: "嘲笑", chinese_romanization: "cháoxiào" },
        { option: "D", answer: "criticize", chinese_answer: "批评", chinese_romanization: "pīpíng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'deify' means to worship or regard someone as a god, used figuratively here." +
        "<br><br>" +
        "(B) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'mock' means to tease or laugh at in a scornful or contemptuous manner." +
        "<br><br>" +
        "(D) 'criticize' means to indicate the faults of someone or something in a disapproving way.",
    chinese_explanation: "(A) '神化' 意味着把某人当作神来崇拜或视为神，这里是比喻用法。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '嘲笑' 意味着以轻蔑或蔑视的方式取笑或嘲笑。" +
        "<br><br>" +
        "(D) '批评' 意味着以不赞成的方式指出某人或某物的缺点。"
    },
    {
        id: 2,
        question: "To maintain control, the administration sought to __________ any dissenting opinions within the organization.",
        chinese_question: "为了保持控制，管理层试图 __________ 组织内的任何异议。",
        answers: [
                { option: "A", answer: "foster", chinese_answer: "培养", chinese_romanization: "péiyǎng" },
                { option: "B", answer: "quash", chinese_answer: "镇压", chinese_romanization: "zhènyā" },
                { option: "C", answer: "respect", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" },
                { option: "D", answer: "nurture", chinese_answer: "培育", chinese_romanization: "péiyù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'quash' means to suppress or put an end to forcibly." +
                "<br><br>" +
                "(A) 'foster' means to encourage the development of something." +
                "<br><br>" +
                "(C) 'respect' means to admire deeply." +
                "<br><br>" +
                "(D) 'nurture' means to care for and encourage the growth or development of.",
        chinese_explanation: "(B) '镇压' 意味着强行压制或终止。" +
                "<br><br>" +
                "(A) '培养' 意味着鼓励某事的发展。" +
                "<br><br>" +
                "(C) '尊重' 意味着深深钦佩。" +
                "<br><br>" +
                "(D) '培育' 意味着照顾并鼓励成长或发展。"
    },
    {
        id: 3,
    question: "When her friend went through a difficult breakup, she made sure to __________ and provide a shoulder to cry on.",
    chinese_question: "当她的朋友经历了一次艰难的分手时，她确保 __________ 并提供一个可以依靠的肩膀。",
    answers: [
        { option: "A", answer: "commiserate", chinese_answer: "同情", chinese_romanization: "tóngqíng" },
        { option: "B", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "envy", chinese_answer: "嫉妒", chinese_romanization: "jídù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'commiserate' means to express or feel sympathy or pity, used figuratively here." +
        "<br><br>" +
        "(B) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'envy' means to desire to have a quality, possession, or other desirable attribute belonging to someone else.",
    chinese_explanation: "(A) '同情' 意味着表达或感受到同情或怜悯，这里是比喻用法。" +
        "<br><br>" +
        "(B) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '嫉妒' 意味着渴望拥有属于他人的品质、财产或其他理想的属性。"
    },
    {
        id: 4,
        question: "The experience of failure can __________ even the most confident individuals, making them more humble.",
        chinese_question: "失败的经历可以 __________ 即使是最自信的人，使他们更加谦逊。",
        answers: [
                { option: "A", answer: "chasten", chinese_answer: "磨练", chinese_romanization: "móliàn" },
                { option: "B", answer: "embolden", chinese_answer: "鼓舞", chinese_romanization: "gǔwǔ" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'chasten' means to have a restraining or moderating effect on; to discipline or punish in order to correct." +
                "<br><br>" +
                "(B) 'embolden' means to give someone the courage or confidence to do something." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
        chinese_explanation: "(A) '磨练' 意味着有抑制或缓和的作用；为了纠正而惩戒或处罚。" +
                "<br><br>" +
                "(B) '鼓舞' 意味着给予某人勇气或信心去做某事。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。"
    },
    {
        id: 5,
        question: "The news report __________ the company's reputation with unverified claims.",
        chinese_question: "新闻报道通过未经证实的说法 __________ 了公司的声誉。",
        answers: [
                { option: "A", answer: "praised", chinese_answer: "赞美", chinese_romanization: "zànměi" },
                { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "besmirched", chinese_answer: "玷污", chinese_romanization: "diànwū" },
                { option: "D", answer: "upheld", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'besmirched' means to damage someone's reputation or honor." +
                "<br><br>" +
                "(A) 'praised' means to express warm approval or admiration." +
                "<br><br>" +
                "(B) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'upheld' means to maintain or support.",
        chinese_explanation: "(C) '玷污' 意味着损害某人的声誉或荣誉。" +
                "<br><br>" +
                "(A) '赞美' 意味着表达热烈的赞同或钦佩。" +
                "<br><br>" +
                "(B) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '支持' 意味着维持或支持。"
    },
    {
        id: 6,
    question: "Critics argued that the controversial film would __________ the memory of the historical figure it portrayed.",
    chinese_question: "批评者认为，这部有争议的电影会 __________ 它所描绘的历史人物的记忆。",
    answers: [
        { option: "A", answer: "desecrate", chinese_answer: "亵渎", chinese_romanization: "xièdú" },
        { option: "B", answer: "honor", chinese_answer: "尊敬", chinese_romanization: "zūnjìng" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "improve", chinese_answer: "改善", chinese_romanization: "gǎishàn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'desecrate' means to treat a sacred place or thing with violent disrespect; to violate, used figuratively here." +
        "<br><br>" +
        "(B) 'honor' means to regard with great respect." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'improve' means to make something better.",
    chinese_explanation: "(A) '亵渎' 意味着用暴力的不敬对待一个神圣的地方或事物；亵渎，这里是比喻用法。" +
        "<br><br>" +
        "(B) '尊敬' 意味着对某人或某物表示很高的尊重。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '改善' 意味着使某物变得更好。"
    },
    {
        id: 7,
    question: "She would often __________ about the unfair treatment of employees, advocating for better working conditions.",
    chinese_question: "她经常对员工的不公平待遇 __________，倡导改善工作条件。",
    answers: [
        { option: "A", answer: "whisper", chinese_answer: "低声说", chinese_romanization: "dīshēng shuō" },
        { option: "B", answer: "fulminate", chinese_answer: "强烈抗议", chinese_romanization: "qiángliè kàngyì" },
        { option: "C", answer: "laugh", chinese_answer: "笑", chinese_romanization: "xiào" },
        { option: "D", answer: "applaud", chinese_answer: "鼓掌", chinese_romanization: "gǔzhǎng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'fulminate' used figuratively means to express vehement protest or to speak out angrily and passionately." +
        "<br><br>" +
        "(A) 'whisper' means to speak very softly using one's breath without one's vocal cords, especially for the sake of secrecy." +
        "<br><br>" +
        "(C) 'laugh' means to make the spontaneous sounds and movements of the face and body that are the instinctive expressions of lively amusement." +
        "<br><br>" +
        "(D) 'applaud' means to show approval or praise by clapping.",
    chinese_explanation: "(B) '强烈抗议' 在比喻意义上指强烈抗议或愤怒和热情地发声。" +
        "<br><br>" +
        "(A) '低声说' 意味着用气音非常轻声地说话，尤其是为了保密。" +
        "<br><br>" +
        "(C) '笑' 意味着做出自发的声音和面部和身体的动作，这些是生动娱乐的本能表达。" +
        "<br><br>" +
        "(D) '鼓掌' 意味着通过拍手表示赞同或称赞。"
    },
    {
        id: 8,
        question: "During the emergency, the pilot decided to __________ fuel to make the aircraft lighter.",
        chinese_question: "在紧急情况下，飞行员决定 __________ 燃料以减轻飞机重量。",
        answers: [
                { option: "A", answer: "conserve", chinese_answer: "保存", chinese_romanization: "bǎocún" },
                { option: "B", answer: "jettison", chinese_answer: "抛弃", chinese_romanization: "pāoqì" },
                { option: "C", answer: "store", chinese_answer: "储存", chinese_romanization: "chǔcún" },
                { option: "D", answer: "gather", chinese_answer: "收集", chinese_romanization: "shōují" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'jettison' means to throw or drop something from an aircraft or ship." +
                "<br><br>" +
                "(A) 'conserve' means to protect something from harm or destruction." +
                "<br><br>" +
                "(C) 'store' means to keep something for future use." +
                "<br><br>" +
                "(D) 'gather' means to collect or assemble something.",
        chinese_explanation: "(B) '抛弃' 意味着从飞机或船上扔下或丢弃某物。" +
                "<br><br>" +
                "(A) '保存' 意味着保护某物免受伤害或破坏。" +
                "<br><br>" +
                "(C) '储存' 意味着保存以供未来使用。" +
                "<br><br>" +
                "(D) '收集' 意味着收集或组装某物。"
    },
    {
        id: 9,
        question: "The newspaper is known to __________ the latest news and updates promptly.",
        chinese_question: "这家报纸以迅速 __________ 最新新闻和更新而闻名。",
        answers: [
                { option: "A", answer: "delay", chinese_answer: "延迟", chinese_romanization: "yánchí" },
                { option: "B", answer: "purvey", chinese_answer: "传播", chinese_romanization: "chuánbō" },
                { option: "C", answer: "fabricate", chinese_answer: "捏造", chinese_romanization: "niēzào" },
                { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'purvey' means to supply or spread information or ideas." +
                "<br><br>" +
                "(A) 'delay' means to make someone or something late or slow." +
                "<br><br>" +
                "(C) 'fabricate' means to invent or concoct something, typically with deceitful intent." +
                "<br><br>" +
                "(D) 'ignore' means to refuse to take notice of.",
        chinese_explanation: "(B) '传播' 意味着提供或传播信息或观点。" +
                "<br><br>" +
                "(A) '延迟' 意味着使某人或某事迟到或缓慢。" +
                "<br><br>" +
                "(C) '捏造' 意味着编造或捏造某事，通常是带有欺骗意图。" +
                "<br><br>" +
                "(D) '忽视' 意味着拒绝注意。"
    },
    {
        id: 10,
        question: "The company decided to __________ its controversial advertisement after receiving numerous complaints.",
        chinese_question: "公司在收到大量投诉后，决定 __________ 其有争议的广告。",
        answers: [
                { option: "A", answer: "publish", chinese_answer: "发表", chinese_romanization: "fābiǎo" },
                { option: "B", answer: "retract", chinese_answer: "撤回", chinese_romanization: "chèhuí" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "promote", chinese_answer: "推广", chinese_romanization: "tuīguǎng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'retract' means to withdraw a statement or accusation as untrue or unjustified." +
                "<br><br>" +
                "(A) 'publish' means to make content available to the public." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'promote' means to support or actively encourage.",
        chinese_explanation: "(B) '撤回'一词意味着撤回一项声明或指控，认为其不真实或不公正。" +
                "<br><br>" +
                "(A) '发表' 意味着将内容公之于众。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '推广' 意味着支持或积极鼓励。"
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
