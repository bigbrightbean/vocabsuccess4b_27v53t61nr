// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The committee decided to __________ the employee for his inappropriate behavior at work.",
        chinese_question: "委员会决定 __________ 该员工在工作中的不当行为。",
        answers: [
                { option: "A", answer: "censure", chinese_answer: "谴责", chinese_romanization: "qiǎnzé" },
                { option: "B", answer: "reward", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "dismiss", chinese_answer: "解雇", chinese_romanization: "jiěgù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'censure' means to express severe disapproval of (someone or something), typically in a formal statement." +
                "<br><br>" +
                "(B) 'reward' means to give something to (someone) in recognition of their services, efforts, or achievements." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'dismiss' means to order or allow to leave; send away.",
        chinese_explanation: "(A) '谴责' 意味着通常在正式声明中表达对（某人或某事）的强烈不满。" +
                "<br><br>" +
                "(B) '奖励' 意味着为了表彰其服务、努力或成就而给予（某人）某物。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '解雇' 意味着命令或允许离开；送走。"
    },
    {
        id: 2,
        question: "The director refused to __________ the film, insisting that the controversial scenes were essential to the story.",
        chinese_question: "导演拒绝 __________ 这部电影，坚持认为有争议的场景对故事至关重要。",
        answers: [
                { option: "A", answer: "enhance", chinese_answer: "增强", chinese_romanization: "zēngqiáng" },
                { option: "B", answer: "bowdlerize", chinese_answer: "删减", chinese_romanization: "shānjiǎn" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'bowdlerize' means to remove material that is considered offensive or inappropriate from a text." +
                "<br><br>" +
                "(A) 'enhance' means to improve the quality, value, or extent of something." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'praise' means to express warm approval or admiration.",
        chinese_explanation: "(B) '删减' 意味着从文本中删除被认为有冒犯性或不合适的内容。" +
                "<br><br>" +
                "(A) '增强' 意味着提高某事的质量、价值或范围。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '赞美' 意味着表达热烈的赞同或钦佩。"
    },
    {
        id: 3,
        question: "He finally decided to __________ his fears and discuss them openly with his therapist.",
        chinese_question: "他终于决定 __________ 他的恐惧，并与他的治疗师公开讨论。",
        answers: [
                { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "B", answer: "broach", chinese_answer: "提出", chinese_romanization: "tíchū" },
                { option: "C", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
                { option: "D", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'broach' means to raise a sensitive or difficult subject for discussion." +
                "<br><br>" +
                "(A) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(C) 'conceal' means to keep something secret or prevent it from being known." +
                "<br><br>" +
                "(D) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
        chinese_explanation: "(B) '提出' 意味着提出一个敏感或困难的话题进行讨论。" +
                "<br><br>" +
                "(A) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(C) '隐藏' 意味着保密或防止被知道。" +
                "<br><br>" +
                "(D) '庆祝' 意味着通过社交聚会或愉快的活动来纪念一个重要或快乐的日子或事件。"
    },
    {
        id: 4,
        question: "The workers __________ logs to build a sturdy cabin in the woods.",
        chinese_question: "工人们 __________ 木材，在森林里建造了一间坚固的小屋。",
        answers: [
                { option: "A", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "B", answer: "hewed", chinese_answer: "砍", chinese_romanization: "kǎn" },
                { option: "C", answer: "decorated", chinese_answer: "装饰", chinese_romanization: "zhuāngshì" },
                { option: "D", answer: "destroyed", chinese_answer: "毁坏", chinese_romanization: "huǐhuài" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'hewed' means to chop or cut with an ax, pick, or other tool." +
                "<br><br>" +
                "(A) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(C) 'decorated' means to make something look more attractive by adding items or images." +
                "<br><br>" +
                "(D) 'destroyed' means to put an end to the existence of something by damaging or attacking it.",
        chinese_explanation: "(B) '砍' 意味着用斧头、镐或其他工具砍或切。" +
                "<br><br>" +
                "(A) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(C) '装饰' 意味着通过添加物品或图像使某物看起来更吸引人。" +
                "<br><br>" +
                "(D) '毁坏' 意味着通过损坏或攻击使某物不存在。"
    },
    {
        id: 5,
        question: "The playful dog started to __________ across the yard, chasing its tail.",
        chinese_question: "顽皮的狗开始在院子里 __________ ，追逐着自己的尾巴。",
        answers: [
                { option: "A", answer: "caper", chinese_answer: "蹦跳", chinese_romanization: "bèngtiào" },
                { option: "B", answer: "run", chinese_answer: "跑步", chinese_romanization: "pǎobù" },
                { option: "C", answer: "sleep", chinese_answer: "睡觉", chinese_romanization: "shuìjiào" },
                { option: "D", answer: "bark", chinese_answer: "吠叫", chinese_romanization: "fèijiào" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'caper' means to skip or dance about in a lively or playful way." +
                "<br><br>" +
                "(B) 'run' means to move at a speed faster than a walk." +
                "<br><br>" +
                "(C) 'sleep' means to be in a state of rest where the body and mind are not active." +
                "<br><br>" +
                "(D) 'bark' means to make a loud, sharp sound as a dog does.",
        chinese_explanation: "(A) '蹦跳' 意味着以活泼或嬉戏的方式跳跃或舞动。" +
                "<br><br>" +
                "(B) '跑步' 意味着以比走路快的速度移动。" +
                "<br><br>" +
                "(C) '睡觉' 意味着处于身体和心智都不活跃的休息状态。" +
                "<br><br>" +
                "(D) '吠叫' 意味着像狗一样发出响亮的、尖锐的声音。"
    },
    {
        id: 6,
        question: "Successful leaders know how to __________ their resources to maximize productivity.",
        chinese_question: "成功的领导者知道如何 __________ 资源以最大化生产力。",
        answers: [
                { option: "A", answer: "waste", chinese_answer: "浪费", chinese_romanization: "làngfèi" },
                { option: "B", answer: "hoard", chinese_answer: "囤积", chinese_romanization: "túnjī" },
                { option: "C", answer: "allocate", chinese_answer: "分配", chinese_romanization: "fēnpèi" },
                { option: "D", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'allocate' means to distribute resources or duties for a particular purpose." +
                "<br><br>" +
                "(A) 'waste' means to use or expend carelessly, extravagantly, or to no purpose." +
                "<br><br>" +
                "(B) 'hoard' means to accumulate money or valued objects and hide or store away." +
                "<br><br>" +
                "(D) 'neglect' means to fail to care for properly.",
        chinese_explanation: "(C) '分配' 意味着为特定目的分配资源或职责。" +
                "<br><br>" +
                "(A) '浪费' 意味着不小心、奢侈或无目的地使用或消耗。" +
                "<br><br>" +
                "(B) '囤积' 意味着积累金钱或有价值的物品并隐藏或储藏起来。" +
                "<br><br>" +
                "(D) '忽视' 意味着未能适当照顾。"
    },
    {
        id: 7,
        question: "The manager __________ the employees' support to implement the new policy smoothly.",
        chinese_question: "经理 __________ 员工的支持，以顺利实施新政策。",
        answers: [
            { option: "A", answer: "enlisted", chinese_answer: "寻求", chinese_romanization: "xúnqiú" },
            { option: "B", answer: "hindered", chinese_answer: "妨碍", chinese_romanization: "fáng'ài" },
            { option: "C", answer: "excluded", chinese_answer: "排除", chinese_romanization: "páichú" },
            { option: "D", answer: "obstructed", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'enlisted' means secured the support or help of someone." +
            "<br><br>" +
            "(B) 'hindered' means created difficulties for someone, resulting in delay or obstruction." +
            "<br><br>" +
            "(C) 'excluded' means denied access to or barred from a place, group, or privilege." +
            "<br><br>" +
            "(D) 'obstructed' means blocked or got in the way of something.",
        chinese_explanation: "(A) '寻求' 意味着获得某人的支持或帮助。" +
            "<br><br>" +
            "(B) '妨碍' 意味着为某人制造困难，导致延迟或阻碍。" +
            "<br><br>" +
            "(C) '排除' 意味着拒绝进入或禁止进入某个地方、群体或特权。" +
            "<br><br>" +
            "(D) '阻碍' 意味着阻塞或阻挡某事。"
    },
    {
        id: 8,
        question: "Her heart __________ as she waited for the doctor's verdict, fearing the worst.",
        chinese_question: "她等待医生的判决时，她的心 __________ ，担心最坏的情况。",
        answers: [
                { option: "A", answer: "leaped", chinese_answer: "跳跃", chinese_romanization: "tiàoyuè" },
                { option: "B", answer: "misgave", chinese_answer: "不安", chinese_romanization: "bù'ān" },
                { option: "C", answer: "rejoiced", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
                { option: "D", answer: "calmed", chinese_answer: "平静", chinese_romanization: "píngjìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'misgave' means to have a feeling of apprehension or doubt." +
                "<br><br>" +
                "(A) 'leaped' means to jump or move suddenly." +
                "<br><br>" +
                "(C) 'rejoiced' means to feel or show great joy." +
                "<br><br>" +
                "(D) 'calmed' means to become tranquil and quiet.",
        chinese_explanation: "(B) '不安' 意味着感到忧虑或怀疑。" +
                "<br><br>" +
                "(A) '跳跃' 意味着突然跳动或移动。" +
                "<br><br>" +
                "(C) '高兴' 意味着感到或表现出极大的喜悦。" +
                "<br><br>" +
                "(D) '平静' 意味着变得安静和平和。"
    },
    {
        id: 9,
        question: "The investigation was able to __________ new evidence about the case.",
        chinese_question: "调查能够 __________ 有关案件的新证据。",
        answers: [
                { option: "A", answer: "reveal", chinese_answer: "揭示", chinese_romanization: "jiēshì" },
                { option: "B", answer: "hide", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
                { option: "C", answer: "destroy", chinese_answer: "摧毁", chinese_romanization: "cuīhuǐ" },
                { option: "D", answer: "obscure", chinese_answer: "遮掩", chinese_romanization: "zhēyǎn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'reveal' means to make known to others." +
                "<br><br>" +
                "(B) 'hide' means to put or keep out of sight." +
                "<br><br>" +
                "(C) 'destroy' means to put an end to the existence of something by damaging or attacking it." +
                "<br><br>" +
                "(D) 'obscure' means to keep from being seen; conceal.",
        chinese_explanation: "(A) '揭示' 意味着让他人知道。" +
                "<br><br>" +
                "(B) '隐藏' 意味着放置或保持在视线之外。" +
                "<br><br>" +
                "(C) '摧毁' 意味着通过破坏或攻击终止某物的存在。" +
                "<br><br>" +
                "(D) '遮掩' 意味着不让被看到；隐藏。"
    },
    {
        id: 10,
        question: "The changes in the policy __________ the company's commitment to innovation.",
        chinese_question: "政策的变化 __________ 了公司对创新的承诺。",
        answers: [
            { option: "A", answer: "reflected", chinese_answer: "反映", chinese_romanization: "fǎnyìng" },
            { option: "B", answer: "undermined", chinese_answer: "破坏", chinese_romanization: "pòhuài" },
            { option: "C", answer: "concealed", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "D", answer: "opposed", chinese_answer: "反对", chinese_romanization: "fǎnduì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'reflected' means to show an image of; to demonstrate." +
            "<br><br>" +
            "(B) 'undermined' means to damage or weaken." +
            "<br><br>" +
            "(C) 'concealed' means to keep from sight; hide." +
            "<br><br>" +
            "(D) 'opposed' means to disagree with and attempt to prevent.",
        chinese_explanation: "(A) '反映' 意味着显示图像；展示。" +
            "<br><br>" +
            "(B) '破坏' 意味着损害或削弱。" +
            "<br><br>" +
            "(C) '隐藏' 意味着不让被看到；隐藏。" +
            "<br><br>" +
            "(D) '反对' 意味着不同意并试图阻止。"
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
