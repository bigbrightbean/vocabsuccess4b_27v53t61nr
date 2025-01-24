// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "Under the right conditions, the desert plants can __________ , displaying vibrant colors.",
    chinese_question: "在适当的条件下，沙漠植物可以 __________ ，展示出鲜艳的色彩。",
    answers: [
        { option: "A", answer: "effloresce", chinese_answer: "盛开", chinese_romanization: "shèngkāi" },
        { option: "B", answer: "wither", chinese_answer: "枯萎", chinese_romanization: "kūwěi" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "obscure", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'effloresce' means to blossom or bloom." +
        "<br><br>" +
        "(B) 'wither' means to become dry and shriveled." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'obscure' means to keep from being seen; conceal.",
    chinese_explanation: "(A) '盛开' 意味着开花或绽放。" +
        "<br><br>" +
        "(B) '枯萎' 意味着变干和枯萎。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '隐藏' 意味着防止被看到；隐藏。"
    },
    {
        id: 2,
    question: "Despite the new opportunities, he would __________ to his previous job out of fear of change.",
    chinese_question: "尽管有新的机会，他还是 __________ 于之前的工作，因为害怕改变。",
    answers: [
        { option: "A", answer: "embrace", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
        { option: "B", answer: "default", chinese_answer: "默认", chinese_romanization: "mòrèn" },
        { option: "C", answer: "explore", chinese_answer: "探索", chinese_romanization: "tànsuǒ" },
        { option: "D", answer: "innovate", chinese_answer: "创新", chinese_romanization: "chuàngxīn" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'default' used figuratively means to revert to a usual or expected pattern of behavior." +
        "<br><br>" +
        "(A) 'embrace' means to accept or support willingly and enthusiastically." +
        "<br><br>" +
        "(C) 'explore' means to travel through an unfamiliar area to learn about it." +
        "<br><br>" +
        "(D) 'innovate' means to make changes in something established by introducing new methods, ideas, or products.",
    chinese_explanation: "(B) '默认' 在比喻意义上指恢复到通常或预期的行为模式。" +
        "<br><br>" +
        "(A) '接受' 意味着愿意并热情地接受或支持。" +
        "<br><br>" +
        "(C) '探索' 意味着通过不熟悉的区域旅行以了解它。" +
        "<br><br>" +
        "(D) '创新' 意味着通过引入新方法、想法或产品对既定事物进行更改。"
    },
    {
        id: 3,
    question: "The sudden change in plans will __________ the entire team, disrupting their workflow.",
    chinese_question: "计划的突然变更将 __________ 整个团队，扰乱他们的工作流程。",
    answers: [
        { option: "A", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "B", answer: "discommode", chinese_answer: "打扰", chinese_romanization: "dǎrǎo" },
        { option: "C", answer: "enhance", chinese_answer: "提升", chinese_romanization: "tíshēng" },
        { option: "D", answer: "motivate", chinese_answer: "激励", chinese_romanization: "jīlì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'discommode' used figuratively means to cause inconvenience or trouble to someone." +
        "<br><br>" +
        "(A) 'support' means to bear all or part of the weight of something." +
        "<br><br>" +
        "(C) 'enhance' means to intensify, increase, or further improve the quality or value of." +
        "<br><br>" +
        "(D) 'motivate' means to provide someone with a reason for doing something.",
    chinese_explanation: "(B) '打扰' 在比喻意义上指给某人带来不便或麻烦。" +
        "<br><br>" +
        "(A) '支持' 意味着支撑某物的全部或部分重量。" +
        "<br><br>" +
        "(C) '提升' 意味着加强、增加或进一步改善质量或价值。" +
        "<br><br>" +
        "(D) '激励' 意味着给某人一个做某事的理由。"
    },
    {
        id: 4,
    question: "The CEO's statement aimed to __________ the company from any responsibility for the incident.",
    chinese_question: "CEO的声明旨在使公司免于对该事件的任何责任。",
    answers: [
        { option: "A", answer: "exonerate", chinese_answer: "免除", chinese_romanization: "miǎnchú" },
        { option: "B", answer: "accuse", chinese_answer: "指控", chinese_romanization: "zhǐkòng" },
        { option: "C", answer: "involve", chinese_answer: "牵连", chinese_romanization: "qiānlián" },
        { option: "D", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'exonerate' means to absolve someone or something from blame, used figuratively here." +
        "<br><br>" +
        "(B) 'accuse' means to charge someone with an offense or crime." +
        "<br><br>" +
        "(C) 'involve' means to include someone in an activity or situation." +
        "<br><br>" +
        "(D) 'conceal' means to keep from being seen; hide.",
    chinese_explanation: "(A) '免除' 意味着使某人或某物免于承担过错或错误的责任，这里是比喻用法。" +
        "<br><br>" +
        "(B) '指控' 意味着指控某人犯有罪行。" +
        "<br><br>" +
        "(C) '牵连' 意味着包括某人在活动或情况中。" +
        "<br><br>" +
        "(D) '隐藏' 意味着防止被看到；隐藏。"
    },
    {
        id: 5,
        question: "The boss would often __________ the employees to meet tight deadlines.",
        chinese_question: "老板经常 __________ 员工以赶上紧迫的截止日期。",
        answers: [
                { option: "A", answer: "hector", chinese_answer: "威吓", chinese_romanization: "wēihè" },
                { option: "B", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'hector' means to talk to someone in a bullying way." +
                "<br><br>" +
                "(B) 'praise' means to express warm approval or admiration." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'assist' means to help someone.",
        chinese_explanation: "(A) '威吓' 意味着以一种欺凌的方式对某人说话。" +
                "<br><br>" +
                "(B) '赞美' 意味着表达热烈的赞同或钦佩。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '帮助' 意味着帮助某人。"
    },
    {
        id: 6,
    question: "Despite the pressure, he refused to __________ to the unreasonable demands.",
    chinese_question: "尽管有压力，他仍拒绝 __________ 于不合理的要求。",
    answers: [
        { option: "A", answer: "genuflect", chinese_answer: "屈服", chinese_romanization: "qūfú" },
        { option: "B", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "embrace", chinese_answer: "拥抱", chinese_romanization: "yǒngbào" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'genuflect' means to show excessive deference or respect, used figuratively here." +
        "<br><br>" +
        "(B) 'reject' means to dismiss or refuse something." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'embrace' means to accept or support willingly and enthusiastically.",
    chinese_explanation: "(A) '屈服' 意味着表现出过分的尊敬或敬意，这里是比喻用法。" +
        "<br><br>" +
        "(B) '拒绝' 意味着驳回或拒绝某事物。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '拥抱' 意味着愿意并热情地接受或支持。"
    },
    {
        id: 7,
    question: "The new CEO decided to __________ the old management practices in favor of more modern approaches.",
    chinese_question: "新任首席执行官决定 __________ 旧的管理实践，转而采用更现代的方法。",
    answers: [
        { option: "A", answer: "embrace", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
        { option: "B", answer: "defenestrate", chinese_answer: "抛弃", chinese_romanization: "pāoqì" },
        { option: "C", answer: "preserve", chinese_answer: "保留", chinese_romanization: "bǎoliú" },
        { option: "D", answer: "honor", chinese_answer: "尊敬", chinese_romanization: "zūnjìng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'defenestrate' used figuratively means to remove or discard something forcefully." +
        "<br><br>" +
        "(A) 'embrace' means to accept or support willingly and enthusiastically." +
        "<br><br>" +
        "(C) 'preserve' means to maintain something in its original or existing state." +
        "<br><br>" +
        "(D) 'honor' means to regard with great respect.",
    chinese_explanation: "(B) '抛弃' 在比喻意义上指强制性地移除或丢弃某物。" +
        "<br><br>" +
        "(A) '接受' 意味着愿意并热情地接受或支持。" +
        "<br><br>" +
        "(C) '保留' 意味着维持某物的原始或现有状态。" +
        "<br><br>" +
        "(D) '尊敬' 意味着对某人非常尊敬。"
    },
    {
        id: 8,
        question: "The team's various contributions began to __________ into a cohesive strategy for success.",
        chinese_question: "团队的各种贡献开始 __________ 成为一个连贯的成功策略。",
        answers: [
                { option: "A", answer: "disband", chinese_answer: "解散", chinese_romanization: "jiěsàn" },
                { option: "B", answer: "coagulate", chinese_answer: "凝聚", chinese_romanization: "níngjù" },
                { option: "C", answer: "scatter", chinese_answer: "分散", chinese_romanization: "fēnsàn" },
                { option: "D", answer: "vanish", chinese_answer: "消失", chinese_romanization: "xiāoshī" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'coagulate' figuratively means to come together to form a whole or a unified mass." +
                "<br><br>" +
                "(A) 'disband' means to break up or cause to break up and stop functioning." +
                "<br><br>" +
                "(C) 'scatter' means to throw in various random directions." +
                "<br><br>" +
                "(D) 'vanish' means to disappear suddenly and completely.",
        chinese_explanation: "(B) '凝聚' 在比喻意义上意味着结合在一起形成一个整体或一个统一的整体。" +
                "<br><br>" +
                "(A) '解散' 意味着解散或导致解散并停止运作。" +
                "<br><br>" +
                "(C) '分散' 意味着向各个随机方向抛撒。" +
                "<br><br>" +
                "(D) '消失' 意味着突然完全消失。"
    },
    {
        id: 9,
        question: "During the nature documentary, we watched monkeys __________ through the treetops.",
        chinese_question: "在自然纪录片中，我们看到猴子在树梢间 __________ 。",
        answers: [
                { option: "A", answer: "brachiate", chinese_answer: "摆荡", chinese_romanization: "bǎidàng" },
                { option: "B", answer: "walk", chinese_answer: "走路", chinese_romanization: "zǒulù" },
                { option: "C", answer: "sit", chinese_answer: "坐着", chinese_romanization: "zuòzhe" },
                { option: "D", answer: "sleep", chinese_answer: "睡觉", chinese_romanization: "shuìjiào" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'brachiate' means to move by swinging with the arms from one hold to another." +
                "<br><br>" +
                "(B) 'walk' means to move at a regular pace by lifting and setting down each foot in turn." +
                "<br><br>" +
                "(C) 'sit' means to rest with the body's weight supported by the buttocks or thighs." +
                "<br><br>" +
                "(D) 'sleep' means to be in a state of rest where the body and mind are not active.",
        chinese_explanation: "(A) '摆荡' 意味着通过用手臂从一个支撑点摆荡到另一个支撑点来移动。" +
                "<br><br>" +
                "(B) '走路' 意味着以规则的步伐移动，通过轮流抬起和放下每只脚。" +
                "<br><br>" +
                "(C) '坐着' 意味着身体的重量由臀部或大腿支撑着休息。" +
                "<br><br>" +
                "(D) '睡觉' 意味着处于身体和心智都不活跃的休息状态。"
    },
    {
        id: 10,
        question: "Through years of practice, she managed to __________ the complexities of the legal system.",
        chinese_question: "通过多年的实践，她成功 __________ 了法律系统的复杂性。",
        answers: [
                { option: "A", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "B", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
                { option: "C", answer: "master", chinese_answer: "精通", chinese_romanization: "jīngtōng" },
                { option: "D", answer: "misunderstand", chinese_answer: "误解", chinese_romanization: "wùjiě" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'master' means to become highly skilled or proficient in a particular area." +
                "<br><br>" +
                "(A) 'neglect' means to fail to care for properly." +
                "<br><br>" +
                "(B) 'abandon' means to give up completely." +
                "<br><br>" +
                "(D) 'misunderstand' means to fail to interpret or understand something correctly.",
        chinese_explanation: "(C) '精通' 意味着在某一特定领域变得非常熟练或精通。" +
                "<br><br>" +
                "(A) '忽视' 意味着未能适当照顾。" +
                "<br><br>" +
                "(B) '放弃' 意味着完全放弃。" +
                "<br><br>" +
                "(D) '误解' 意味着未能正确解释或理解某事。"
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
