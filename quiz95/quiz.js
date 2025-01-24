// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "She refused to let societal norms __________ her ambitions.",
    chinese_question: "她拒绝让社会规范 __________ 她的抱负。",
    answers: [
        { option: "A", answer: "fetter", chinese_answer: "束缚", chinese_romanization: "shùfù" },
        { option: "B", answer: "inspire", chinese_answer: "激励", chinese_romanization: "jīlì" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'fetter' means to restrict or restrain someone in an unfair or undesirable manner, used figuratively here." +
        "<br><br>" +
        "(B) 'inspire' means to fill someone with the urge or ability to do or feel something." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'encourage' means to give support, confidence, or hope to someone.",
    chinese_explanation: "(A) '束缚' 意味着以不公平或不理想的方式限制或约束某人，这里是比喻用法。" +
        "<br><br>" +
        "(B) '激励' 意味着激发某人做某事的冲动或能力。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '鼓励' 意味着给予支持、信心或希望。"
    },
    {
        id: 2,
    question: "The professor asked the student to __________ his essay to improve its clarity and coherence.",
    chinese_question: "教授要求学生 __________ 他的论文，以提高其清晰度和连贯性。",
    answers: [
        { option: "A", answer: "confuse", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" },
        { option: "B", answer: "emend", chinese_answer: "修改", chinese_romanization: "xiūgǎi" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "obscure", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'emend' means to make corrections or improvements to a text." +
        "<br><br>" +
        "(A) 'confuse' means to make someone unable to think clearly." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'obscure' means to keep from being seen; conceal.",
    chinese_explanation: "(B) '修改' 意味着对文本进行更正或改进。" +
        "<br><br>" +
        "(A) '使困惑' 意味着使某人无法清晰地思考。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '隐藏' 意味着不让看到；隐藏。"
    },
    {
        id: 3,
    question: "It seemed like the team members had __________ to exclude the new member from their activities.",
    chinese_question: "看起来像是队员们 __________ 想将新成员排除在他们的活动之外。",
    answers: [
        { option: "A", answer: "connived", chinese_answer: "合谋", chinese_romanization: "hémóu" },
        { option: "B", answer: "welcomed", chinese_answer: "欢迎", chinese_romanization: "huānyíng" },
        { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "assisted", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'connived' means to secretly allow something immoral, illegal, or harmful to occur; to conspire, used figuratively here." +
        "<br><br>" +
        "(B) 'welcomed' means to greet someone in a friendly way." +
        "<br><br>" +
        "(C) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'assisted' means to help or support.",
    chinese_explanation: "(A) '合谋' 意味着秘密允许某事发生，尤其是非法的或有害的；合谋，这里是比喻用法。" +
        "<br><br>" +
        "(B) '欢迎' 意味着以友好的方式迎接某人。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '帮助' 意味着提供帮助或支持。"
    },
    {
        id: 4,
        question: "The movie's plot revolves around a hero trying to rescue an __________ scientist who was taken by a rogue government faction.",
        chinese_question: "电影的情节围绕着一个英雄试图营救一位被__________的科学家展开，这位科学家被一个流氓政府派别抓走了。",
        answers: [
            { option: "A", answer: "injured", chinese_answer: "受伤的", chinese_romanization: "shòushāng de" },
            { option: "B", answer: "abducted", chinese_answer: "绑架的", chinese_romanization: "bǎngjià de" },
            { option: "C", answer: "acclaimed", chinese_answer: "受赞扬的", chinese_romanization: "shòu zànyáng de" },
            { option: "D", answer: "renowned", chinese_answer: "著名的", chinese_romanization: "zhùmíng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'abducted' means taken away illegally by force or deception; kidnapped." +
            "<br><br>" +
            "(A) 'injured' means harmed, damaged, or impaired." +
            "<br><br>" +
            "(C) 'acclaimed' means publicly praised; celebrated." +
            "<br><br>" +
            "(D) 'renowned' means known or talked about by many people; famous.",
        chinese_explanation: "(B) '绑架的'一词意味着被非法强行或欺骗带走的；绑架的。" +
            "<br><br>" +
            "(A) '受伤的' 意味着受到伤害、损坏或损伤的。" +
            "<br><br>" +
            "(C) '受赞扬的' 意味着受到公众赞扬的；著名的。" +
            "<br><br>" +
            "(D) '著名的' 意味着被许多人知道或谈论的；著名的。"
    },
    {
        id: 5,
        question: "Many people __________ the value of a good night's sleep, not realizing its importance for overall health.",
        chinese_question: "许多人 __________ 睡个好觉的价值，没有意识到它对整体健康的重要性。",
        answers: [
                { option: "A", answer: "prioritize", chinese_answer: "优先考虑", chinese_romanization: "yōuxiān kǎolǜ" },
                { option: "B", answer: "misprize", chinese_answer: "低估", chinese_romanization: "dīgū" },
                { option: "C", answer: "value", chinese_answer: "重视", chinese_romanization: "zhòngshì" },
                { option: "D", answer: "enjoy", chinese_answer: "享受", chinese_romanization: "xiǎngshòu" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'misprize' means to undervalue or fail to appreciate." +
                "<br><br>" +
                "(A) 'prioritize' means to designate or treat as more important." +
                "<br><br>" +
                "(C) 'value' means to consider to be important or beneficial." +
                "<br><br>" +
                "(D) 'enjoy' means to take delight or pleasure in.",
        chinese_explanation: "(B) '低估' 意味着低估或未能欣赏。" +
                "<br><br>" +
                "(A) '优先考虑' 意味着指定或视为更重要。" +
                "<br><br>" +
                "(C) '重视' 意味着认为重要或有益。" +
                "<br><br>" +
                "(D) '享受' 意味着从中获得乐趣或快乐。"
    },
    {
        id: 6,
        question: "The lawyer tried to __________ the contract terms to favour her client.",
        chinese_question: "律师试图 __________ 合同条款以有利于她的客户。",
        answers: [
                { option: "A", answer: "construe", chinese_answer: "解释", chinese_romanization: "jiěshì" },
                { option: "B", answer: "confuse", chinese_answer: "迷惑", chinese_romanization: "míhuò" },
                { option: "C", answer: "follow", chinese_answer: "遵循", chinese_romanization: "zūnxún" },
                { option: "D", answer: "dismiss", chinese_answer: "驳回", chinese_romanization: "bóhuí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'construe' means to interpret (a word or action) in a particular way." +
                "<br><br>" +
                "(B) 'confuse' means to make (someone) unable to think clearly." +
                "<br><br>" +
                "(C) 'follow' means to go or come after (a person or thing proceeding ahead); move or travel behind." +
                "<br><br>" +
                "(D) 'dismiss' means to order or allow to leave; send away.",
        chinese_explanation: "(A) '解释' 意味着以特定方式解释（一个词或一个行为）。" +
                "<br><br>" +
                "(B) '迷惑' 意味着使（某人）无法清晰思考。" +
                "<br><br>" +
                "(C) '遵循' 意味着在（前面行进的人或事物）之后走或来；移动或旅行在后面。" +
                "<br><br>" +
                "(D) '驳回' 意味着命令或允许离开；送走。"
    },
    {
        id: 7,
    question: "The scientist was able to __________ the structure of the new compound using advanced imaging techniques.",
    chinese_question: "科学家能够使用先进的成像技术 __________ 新化合物的结构。",
    answers: [
        { option: "A", answer: "delineate", chinese_answer: "描绘", chinese_romanization: "miáohuì" },
        { option: "B", answer: "obscure", chinese_answer: "掩盖", chinese_romanization: "yǎngài" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'delineate' means to describe or portray something precisely." +
        "<br><br>" +
        "(B) 'obscure' means to keep from being seen; conceal." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'simplify' means to make something simpler or easier to do or understand.",
    chinese_explanation: "(A) '描绘' 意味着精确地描述或描绘某物。" +
        "<br><br>" +
        "(B) '掩盖' 意味着使不被看到；隐藏。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '简化' 意味着使某事更简单或更容易做或理解。"
    },
    {
        id: 8,
        question: "He __________ with his friend to forgive him for the mistake he made.",
        chinese_question: "他 __________ 他的朋友原谅他的错误。",
        answers: [
                { option: "A", answer: "commanded", chinese_answer: "命令", chinese_romanization: "mìnglìng" },
                { option: "B", answer: "pleaded", chinese_answer: "请求", chinese_romanization: "qǐngqiú" },
                { option: "C", answer: "demanded", chinese_answer: "要求", chinese_romanization: "yāoqiú" },
                { option: "D", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pleaded' means to make an emotional appeal." +
                "<br><br>" +
                "(A) 'commanded' means to give an authoritative order." +
                "<br><br>" +
                "(C) 'demanded' means to ask authoritatively or brusquely." +
                "<br><br>" +
                "(D) 'ignored' means to refuse to take notice of or acknowledge; disregard intentionally.",
        chinese_explanation: "(B) '请求' 意味着提出情感上的请求。" +
                "<br><br>" +
                "(A) '命令' 意味着下达权威命令。" +
                "<br><br>" +
                "(C) '要求' 意味着权威地或粗暴地要求。" +
                "<br><br>" +
                "(D) '忽视' 意味着拒绝注意或承认；有意无视。"
    },
    {
        id: 9,
        question: "The new employee managed to __________ the simple task, causing delays in the project.",
        chinese_question: "新员工把这项简单的任务 __________ 了，导致了项目的延误。",
        answers: [
                { option: "A", answer: "bungle", chinese_answer: "搞砸", chinese_romanization: "gǎo zá" },
                { option: "B", answer: "complete", chinese_answer: "完成", chinese_romanization: "wánchéng" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'bungle' means to carry out a task clumsily or incompetently." +
                "<br><br>" +
                "(B) 'complete' means to finish making or doing." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'simplify' means to make something simpler or easier to do or understand.",
        chinese_explanation: "(A) '搞砸' 意味着笨拙或无能地完成一项任务。" +
                "<br><br>" +
                "(B) '完成' 意味着做完或完成。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '简化' 意味着使某事更简单或更容易做或理解。"
    },
    {
        id: 10,
        question: "The __________ life jacket kept him afloat even in rough waters.",
        chinese_question: "__________ 的救生衣让他即使在汹涌的水中也能保持漂浮。",
        answers: [
            { option: "A", answer: "sinking", chinese_answer: "下沉", chinese_romanization: "xiàchén" },
            { option: "B", answer: "heavy", chinese_answer: "重", chinese_romanization: "zhòng" },
            { option: "C", answer: "buoyant", chinese_answer: "漂浮", chinese_romanization: "piāofú" },
            { option: "D", answer: "submerged", chinese_answer: "淹没", chinese_romanization: "yānmò" }
        ],
        correctAnswer: "C,
        explanation: "(A) 'sinking' means going down below the surface of something, especially of a liquid." +
            "<br><br>" +
            "(B) 'heavy' means of great weight." +
            "<br><br>" +
            "(C) 'buoyant' means able or apt to stay afloat or rise to the top of a liquid or gas." +
            "<br><br>" +
            "(D) 'submerged' means under the surface of water.",
        chinese_explanation: "(A) '下沉' 意味着低于某物表面，尤其是液体的表面。" +
            "<br><br>" +
            "(B) '重' 意味着重量大。" +
            "<br><br>" +
            "(C) '漂浮' 意味着能够或适于保持漂浮或上升到液体或气体的顶部。" +
            "<br><br>" +
            "(D) '淹没' 意味着在水面以下。"
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
