// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Different cultural influences can __________ to create a unique and vibrant society.",
        chinese_question: "不同的文化影响可以 __________ ，形成独特而充满活力的社会。",
        answers: [
                { option: "A", answer: "coalesce", chinese_answer: "合并", chinese_romanization: "hébìng" },
                { option: "B", answer: "fragment", chinese_answer: "分裂", chinese_romanization: "fēnliè" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "stifle", chinese_answer: "抑制", chinese_romanization: "yìzhì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'coalesce' means to come together to form one mass or whole." +
                "<br><br>" +
                "(B) 'fragment' means to break or cause to break into pieces." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'stifle' means to make someone unable to breathe properly; suffocate.",
        chinese_explanation: "(A) '合并' 意味着聚集在一起形成一个整体。" +
                "<br><br>" +
                "(B) '分裂' 意味着分裂或导致分裂成碎片。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '抑制' 意味着使某人无法正常呼吸；窒息。"
    },
    {
        id: 2,
        question: "To ensure peace, the tribe decided to __________ some of their lands to the neighboring tribe.",
        chinese_question: "为了确保和平，部落决定 __________ 一些土地给邻近的部落。",
        answers: [
                { option: "A", answer: "cede", chinese_answer: "割让", chinese_romanization: "gēràng" },
                { option: "B", answer: "conquer", chinese_answer: "征服", chinese_romanization: "zhēngfú" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "exploit", chinese_answer: "利用", chinese_romanization: "lìyòng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'cede' means to give up power or territory." +
                "<br><br>" +
                "(B) 'conquer' means to overcome and take control of a place or people by use of military force." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'exploit' means to make full use of and derive benefit from a resource.",
        chinese_explanation: "(A) '割让' 意味着放弃权力或领土。" +
                "<br><br>" +
                "(B) '征服' 意味着通过军事力量克服和控制一个地方或人民。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '利用' 意味着充分利用和从资源中获益。"
    },
    {
        id: 3,
        question: "His confident manner __________ his extensive experience in the field.",
        chinese_question: "他自信的举止 __________ 了他在该领域的丰富经验。",
        answers: [
                { option: "A", answer: "bespeaks", chinese_answer: "显示", chinese_romanization: "xiǎnshì" },
                { option: "B", answer: "hides", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
                { option: "C", answer: "ignores", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "underestimates", chinese_answer: "低估", chinese_romanization: "dīgū" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'bespeaks' means to indicate or be evidence of something." +
                "<br><br>" +
                "(B) 'hides' means to put or keep out of sight." +
                "<br><br>" +
                "(C) 'ignores' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'underestimates' means to regard something or someone as less capable or important than they really are.",
        chinese_explanation: "(A) '显示' 意味着表明或作为某事的证据。" +
                "<br><br>" +
                "(B) '隐藏' 意味着使某物不被看到。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '低估' 意味着认为某物或某人不如实际那么有能力或重要。"
    },
    {
        id: 4,
        question: "Her kind words did much to __________ his sorrow after the loss of his pet.",
        chinese_question: "她的好话在他失去宠物后极大地 __________ 了他的悲伤。",
        answers: [
                { option: "A", answer: "assuage", chinese_answer: "缓解", chinese_romanization: "huǎnjiě" },
                { option: "B", answer: "exacerbate", chinese_answer: "加剧", chinese_romanization: "jiājù" },
                { option: "C", answer: "neglect", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
                { option: "D", answer: "disregard", chinese_answer: "无视", chinese_romanization: "wúshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'assuage' means to make an unpleasant feeling less intense." +
                "<br><br>" +
                "(B) 'exacerbate' means to make a problem, bad situation, or negative feeling worse." +
                "<br><br>" +
                "(C) 'neglect' means to fail to care for properly." +
                "<br><br>" +
                "(D) 'disregard' means to pay no attention to; ignore.",
        chinese_explanation: "(A) '缓解' 意味着使不愉快的感觉变得不那么强烈。" +
                "<br><br>" +
                "(B) '加剧' 意味着使问题、糟糕的情况或负面情绪变得更糟。" +
                "<br><br>" +
                "(C) '忽略' 意味着未能适当照顾。" +
                "<br><br>" +
                "(D) '无视' 意味着不注意；忽视。"
    },
    {
        id: 5,
        question: "The community __________ on volunteers to run the local events and programs.",
        chinese_question: "社区 __________ 志愿者来举办本地活动和项目。",
        answers: [
                { option: "A", answer: "opposes", chinese_answer: "反对", chinese_romanization: "fǎnduì" },
                { option: "B", answer: "relies", chinese_answer: "依赖", chinese_romanization: "yīlài" },
                { option: "C", answer: "undermines", chinese_answer: "削弱", chinese_romanization: "xuēruò" },
                { option: "D", answer: "distracts", chinese_answer: "分散注意力", chinese_romanization: "fēnsàn zhùyìlì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'relies' means to depend on with full trust or confidence." +
                "<br><br>" +
                "(A) 'opposes' means to disapprove of and attempt to prevent, especially by argument." +
                "<br><br>" +
                "(C) 'undermines' means to erode the base or foundation of something." +
                "<br><br>" +
                "(D) 'distracts' means to prevent someone from giving full attention to something.",
        chinese_explanation: "(B) '依赖' 意味着完全信任或依赖。" +
                "<br><br>" +
                "(A) '反对' 意味着不赞成并试图阻止，特别是通过争论。" +
                "<br><br>" +
                "(C) '削弱' 意味着侵蚀某物的基础或基础。" +
                "<br><br>" +
                "(D) '分散注意力' 意味着阻止某人全神贯注于某事。"
    },
    {
        id: 6,
        question: "During the festival, people __________ in the streets, enjoying the lively music and dancing.",
        chinese_question: "在节日期间，人们在街上 __________，享受着热闹的音乐和舞蹈。",
        answers: [
                { option: "A", answer: "criticized", chinese_answer: "批评", chinese_romanization: "pīpíng" },
                { option: "B", answer: "cavorted", chinese_answer: "欢跃", chinese_romanization: "huānyuè" },
                { option: "C", answer: "sulked", chinese_answer: "生闷气", chinese_romanization: "shēng mèn qì" },
                { option: "D", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'cavorted' means to jump or dance around excitedly." +
                "<br><br>" +
                "(A) 'criticized' means to indicate the faults of someone or something in a disapproving way." +
                "<br><br>" +
                "(C) 'sulked' means to be silent, morose, and bad-tempered out of annoyance or disappointment." +
                "<br><br>" +
                "(D) 'ignored' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(B) '欢跃' 意味着兴奋地跳跃或舞蹈。" +
                "<br><br>" +
                "(A) '批评' 意味着以不赞成的方式指出某人或某事的缺点。" +
                "<br><br>" +
                "(C) '生闷气' 意味着因为恼怒或失望而沉默、阴郁和坏脾气。" +
                "<br><br>" +
                "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 7,
    question: "He felt as if his so-called friends were trying to __________ him for their own benefit.",
    chinese_question: "他觉得他的所谓朋友们似乎在试图为了自己的利益 __________ 他。",
    answers: [
        { option: "A", answer: "fleece", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" },
        { option: "B", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "cherish", chinese_answer: "珍惜", chinese_romanization: "zhēnxī" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'fleece' means to deceive or swindle someone out of money, used figuratively here to mean taking advantage of someone." +
        "<br><br>" +
        "(B) 'support' means to give assistance to." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'cherish' means to protect and care for someone lovingly.",
    chinese_explanation: "(A) '欺骗' 意味着骗取或诈骗某人钱财，这里是比喻用法，指利用某人。" +
        "<br><br>" +
        "(B) '支持' 意味着给予帮助。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '珍惜' 意味着爱护和关心某人。"
    },
    {
        id: 8,
        question: "In many cultures, people tend to __________ historical figures who have made significant contributions, building statues and naming streets after them.",
        chinese_question: "在许多文化中，人们倾向于 __________ 那些做出重大贡献的历史人物，建造雕像和以他们的名字命名街道。",
        answers: [
                { option: "A", answer: "criticize", chinese_answer: "批评", chinese_romanization: "pīpíng" },
                { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "lionize", chinese_answer: "崇拜", chinese_romanization: "chóngbài" },
                { option: "D", answer: "ridicule", chinese_answer: "嘲笑", chinese_romanization: "cháoxiào" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'lionize' means to give a lot of public attention and approval to someone; to treat someone as a celebrity." +
                "<br><br>" +
                "(A) 'criticize' means to express disapproval of someone or something." +
                "<br><br>" +
                "(B) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'ridicule' means to make fun of someone or something in a cruel or harsh way.",
        chinese_explanation: "(C) '崇拜' 一词意味着给予某人很多公众的关注和认可；把某人视为名人。" +
                "<br><br>" +
                "(A) '批评' 意味着对某人或某事表示不满。" +
                "<br><br>" +
                "(B) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '嘲笑' 意味着以残酷或严厉的方式取笑某人或某事。"
    },
    {
        id: 9,
        question: "The company’s expansion plans quickly began to __________, leading to new offices opening in various cities.",
        chinese_question: "公司的扩展计划迅速开始 __________，导致在多个城市开设新办事处。",
        answers: [
                { option: "A", answer: "ramify", chinese_answer: "分支", chinese_romanization: "fēnzhī" },
                { option: "B", answer: "contract", chinese_answer: "收缩", chinese_romanization: "shōusuō" },
                { option: "C", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
                { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'ramify' figuratively means to spread or branch out into different parts." +
                "<br><br>" +
                "(B) 'contract' means to decrease in size, number, or range." +
                "<br><br>" +
                "(C) 'diminish' means to make or become less." +
                "<br><br>" +
                "(D) 'simplify' means to make something simpler or easier to do or understand.",
        chinese_explanation: "(A) '分支' 在此语境下比喻扩展或分支到不同的部分。" +
                "<br><br>" +
                "(B) '收缩' 意味着在大小、数量或范围上减少。" +
                "<br><br>" +
                "(C) '减少' 意味着使或变得更少。" +
                "<br><br>" +
                "(D) '简化' 意味着使某事物更简单或更容易做或理解。"
    },
    {
        id: 10,
    question: "The community leaders __________ against the proposed factory, citing environmental concerns.",
    chinese_question: "社区领导人对拟建的工厂 __________，提出环境问题的担忧。",
    answers: [
        { option: "A", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "B", answer: "fulminated", chinese_answer: "强烈抗议", chinese_romanization: "qiángliè kàngyì" },
        { option: "C", answer: "overlooked", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
        { option: "D", answer: "praised", chinese_answer: "赞美", chinese_romanization: "zànměi" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'fulminated' used figuratively means to express vehement protest or to speak out angrily and passionately." +
        "<br><br>" +
        "(A) 'supported' means to bear all or part of the weight of something." +
        "<br><br>" +
        "(C) 'overlooked' means to fail to notice something." +
        "<br><br>" +
        "(D) 'praised' means to express warm approval or admiration of.",
    chinese_explanation: "(B) '强烈抗议' 在比喻意义上指强烈抗议或愤怒和热情地发声。" +
        "<br><br>" +
        "(A) '支持' 意味着支撑某物的全部或部分重量。" +
        "<br><br>" +
        "(C) '忽略' 意味着未能注意到某事。" +
        "<br><br>" +
        "(D) '赞美' 意味着表达热烈的认可或钦佩。"
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
