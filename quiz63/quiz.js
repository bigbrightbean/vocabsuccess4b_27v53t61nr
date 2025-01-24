// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His philanthropic efforts earned him __________ from the community, highlighting his commitment to making a difference.",
        chinese_question: "他的慈善努力为他赢得了社区的 __________，彰显了他致力于做出改变的承诺。",
        answers: [
                { option: "A", answer: "scorn", chinese_answer: "轻蔑", chinese_romanization: "qīngmiè" },
                { option: "B", answer: "plaudits", chinese_answer: "赞誉", chinese_romanization: "zànyù" },
                { option: "C", answer: "accusations", chinese_answer: "指控", chinese_romanization: "zhǐkòng" },
                { option: "D", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'plaudits' means praise or approval." +
            "<br><br>" +
            "(A) 'scorn' means the feeling or belief that someone or something is worthless or despicable; contempt." +
            "<br><br>" +
            "(C) 'accusations' means a charge or claim that someone has done something illegal or wrong." +
            "<br><br>" +
            "(D) 'indifference' means lack of interest, concern, or sympathy.",
        chinese_explanation: "(B) '赞誉'一词意味着赞扬或认可。" +
            "<br><br>" +
            "(A) '轻蔑' 意味着认为某人或某物毫无价值或卑鄙的感觉或信念；蔑视。" +
            "<br><br>" +
            "(C) '指控' 意味着声称某人做了非法或错误的事情。" +
            "<br><br>" +
            "(D) '冷漠' 意味着缺乏兴趣、关心或同情。"
    },
    {
        id: 2,
    question: "Her __________ in responding to criticism often made situations worse, as she would react without thinking.",
    chinese_question: "她对批评的 __________ 反应常常使情况变得更糟，因为她会不加思索地反应。",
    answers: [
        { option: "A", answer: "patience", chinese_answer: "耐心", chinese_romanization: "nàixīn" },
        { option: "B", answer: "impetuosity", chinese_answer: "冲动", chinese_romanization: "chōngdòng" },
        { option: "C", answer: "restraint", chinese_answer: "克制", chinese_romanization: "kèzhì" },
        { option: "D", answer: "consideration", chinese_answer: "考虑", chinese_romanization: "kǎolǜ" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'impetuosity' means the quality of being impulsive or acting without careful thought." + 
        "<br><br>" + 
        "(A)'patience' means the capacity to accept or tolerate delay, trouble, or suffering without getting angry or upset." + 
        "<br><br>" + 
        "(C)'restraint' means the action of holding back or keeping someone or something under control." + 
        "<br><br>" + 
        "(D)'consideration' means careful thought, typically over a period of time.",
    chinese_explanation: "(B) '冲动'一词意味着冲动或不经仔细思考而行动的品质。" + 
        "<br><br>" + 
        "(A)'耐心' 意味着接受或忍受延迟、麻烦或痛苦而不生气或沮丧的能力。" + 
        "<br><br>" + 
        "(C)'克制' 意味着控制住或保持某人或某物在控制之下的行为。" + 
        "<br><br>" + 
        "(D)'考虑' 意味着仔细思考，通常是经过一段时间的。"
    },
    {
        id: 3,
        question: "Her __________ in correcting every grammatical error in the report frustrated her colleagues, who were more focused on the content.",
        chinese_question: "她在报告中纠正每一个语法错误的 __________ 让她的同事感到沮丧，他们更关注内容。",
        answers: [
                { option: "A", answer: "flexibility", chinese_answer: "灵活性", chinese_romanization: "línghuó xìng" },
                { option: "B", answer: "pedantry", chinese_answer: "卖弄学问", chinese_romanization: "màinòng xuéwèn" },
                { option: "C", answer: "innovation", chinese_answer: "创新", chinese_romanization: "chuàngxīn" },
                { option: "D", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pedantry' means excessive concern with minor details and rules." +
            "<br><br>" +
            "(A) 'flexibility' means the quality of bending easily without breaking." +
            "<br><br>" +
            "(C) 'innovation' means the action or process of innovating." +
            "<br><br>" +
            "(D) 'indifference' means lack of interest, concern, or sympathy.",
        chinese_explanation: "(B) '卖弄学问'一词意味着过分关注细枝末节和规则。" +
            "<br><br>" +
            "(A) '灵活性' 意味着容易弯曲而不折断的品质。" +
            "<br><br>" +
            "(C) '创新' 意味着创新的行动或过程。" +
            "<br><br>" +
            "(D) '冷漠' 意味着缺乏兴趣、关心或同情。"
    },
    {
        id: 4,
        question: "In the office, she cast __________ on his ability to manage the project, suggesting he lacked the necessary experience.",
        chinese_question: "在办公室里，她对他管理项目的能力进行了 __________，暗示他缺乏必要的经验。",
        answers: [
                { option: "A", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "B", answer: "aspersions", chinese_answer: "诽谤", chinese_romanization: "fěibàng" },
                { option: "C", answer: "solutions", chinese_answer: "解决方案", chinese_romanization: "jiějué fāng'àn" },
                { option: "D", answer: "guidance", chinese_answer: "指导", chinese_romanization: "zhǐdǎo" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'aspersions' means an attack on the reputation or integrity of someone or something." +
            "<br><br>" +
            "(A) 'support' means to bear all or part of the weight of; hold up." +
            "<br><br>" +
            "(C) 'solutions' means a means of solving a problem or dealing with a difficult situation." +
            "<br><br>" +
            "(D) 'guidance' means advice or information aimed at resolving a problem or difficulty, especially as given by someone in authority.",
        chinese_explanation: "(B) '诽谤'一词意味着对某人或某事的名誉或诚信的攻击。" +
            "<br><br>" +
            "(A) '支持' 意味着承受全部或部分重量；支撑。" +
            "<br><br>" +
            "(C) '解决方案' 意味着解决问题或处理困难情况的方法。" +
            "<br><br>" +
            "(D) '指导' 意味着旨在解决问题或困难的建议或信息，特别是由当权者提供的。"
    },
    {
        id: 5,
        question: "He experienced a moment of __________ before signing the contract, wondering if he was making the right decision.",
        chinese_question: "在签合同之前，他经历了一阵 __________，怀疑自己是否做出了正确的决定。",
        answers: [
                { option: "A", answer: "qualm", chinese_answer: "不安", chinese_romanization: "bù'ān" },
                { option: "B", answer: "resolve", chinese_answer: "决心", chinese_romanization: "juéxīn" },
                { option: "C", answer: "confidence", chinese_answer: "自信", chinese_romanization: "zìxìn" },
                { option: "D", answer: "enthusiasm", chinese_answer: "热情", chinese_romanization: "rèqíng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'qualm' means an uneasy feeling of doubt, worry, or fear, especially about one's own conduct; a misgiving." +
            "<br><br>" +
            "(B) 'resolve' means firm determination to do something." +
            "<br><br>" +
            "(C) 'confidence' means the feeling or belief that one can rely on someone or something; firm trust." +
            "<br><br>" +
            "(D) 'enthusiasm' means intense and eager enjoyment, interest, or approval.",
        chinese_explanation: "(A) '不安' 意味着对某事感到怀疑、担忧或恐惧的不安感觉，尤其是关于自己的行为；不安。" +
            "<br><br>" +
            "(B) '决心' 意味着做某事的坚定决心。" +
            "<br><br>" +
            "(C) '自信' 意味着对某人或某事可以依靠的感觉或信念；坚定的信任。" +
            "<br><br>" +
            "(D) '热情' 意味着强烈和热切的享受、兴趣或赞同。"
    },
    {
        id: 6,
        question: "His __________ was often the highlight of conversations, leaving everyone in stitches with his clever and humorous remarks.",
        chinese_question: "他的 __________ 常常是谈话的亮点，他的机智和幽默言辞总能让大家笑得前仰后合。",
        answers: [
                { option: "A", answer: "witticism", chinese_answer: "妙语", chinese_romanization: "miàoyǔ" },
                { option: "B", answer: "ignorance", chinese_answer: "无知", chinese_romanization: "wúzhī" },
                { option: "C", answer: "solemnity", chinese_answer: "严肃", chinese_romanization: "yánsù" },
                { option: "D", answer: "dread", chinese_answer: "恐惧", chinese_romanization: "kǒngjù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'witticism' figuratively means a clever or witty remark." +
            "<br><br>" +
            "(B) 'ignorance' means lack of knowledge or information." +
            "<br><br>" +
            "(C) 'solemnity' means the state or quality of being serious and dignified." +
            "<br><br>" +
            "(D) 'dread' means great fear or apprehension.",
        chinese_explanation: "(A) '妙语' 在此语境下意指聪明或机智的话语。" +
            "<br><br>" +
            "(B) '无知' 意味着缺乏知识或信息。" +
            "<br><br>" +
            "(C) '严肃' 意味着严肃和庄重的状态或质量。" +
            "<br><br>" +
            "(D) '恐惧' 意味着极大的恐惧或担忧。"
    },
    {
        id: 7,
    question: "The __________ of the farm animals ensured a steady supply of milk, eggs, and meat for the community.",
    chinese_question: "农场动物的 __________ 确保了社区有稳定的牛奶、鸡蛋和肉类供应。",
    answers: [
        { option: "A", answer: "lethargy", chinese_answer: "昏睡", chinese_romanization: "hūnshuì" },
        { option: "B", answer: "fecundity", chinese_answer: "繁殖力", chinese_romanization: "fánzhílì" },
        { option: "C", answer: "stagnation", chinese_answer: "停滞", chinese_romanization: "tíngzhì" },
        { option: "D", answer: "decline", chinese_answer: "衰退", chinese_romanization: "shuāituì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'fecundity' means the ability to produce abundant offspring or new growth." + 
        "<br><br>" + 
        "(A)'lethargy' means a lack of energy and enthusiasm." + 
        "<br><br>" + 
        "(C)'stagnation' means a state of not moving or flowing." + 
        "<br><br>" + 
        "(D)'decline' means a gradual and continuous loss of strength, numbers, quality, or value.",
    chinese_explanation: "(B) '繁殖力'一词意味着生产大量后代或新生长的能力。" + 
        "<br><br>" + 
        "(A)'昏睡' 意味着缺乏精力和热情。" + 
        "<br><br>" + 
        "(C)'停滞' 意味着不动或不流动的状态。" + 
        "<br><br>" + 
        "(D)'衰退' 意味着力量、数量、质量或价值的逐渐和持续的损失。"
    },
    {
        id: 8,
    question: "Rising costs and stagnant wages have created significant __________ for many workers.",
    chinese_question: "不断上涨的成本和停滞的工资给许多工人带来了巨大的 __________ 。",
    answers: [
        { option: "A", answer: "hardship", chinese_answer: "困苦", chinese_romanization: "kùnkǔ" },
        { option: "B", answer: "comfort", chinese_answer: "舒适", chinese_romanization: "shūshì" },
        { option: "C", answer: "success", chinese_answer: "成功", chinese_romanization: "chénggōng" },
        { option: "D", answer: "freedom", chinese_answer: "自由", chinese_romanization: "zìyóu" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'hardship' means severe suffering or privation." + 
        "<br><br>" + 
        "(B) 'comfort' means a state of physical ease and freedom from pain or constraint." + 
        "<br><br>" + 
        "(C) 'success' means the accomplishment of an aim or purpose." + 
        "<br><br>" + 
        "(D) 'freedom' means the power or right to act, speak, or think as one wants without hindrance or restraint.",
    chinese_explanation: "(A) '困苦' 意味着严重的痛苦或贫困。" + 
        "<br><br>" + 
        "(B) '舒适' 意味着身体的轻松状态，没有疼痛或约束。" + 
        "<br><br>" + 
        "(C) '成功' 意味着目标或目的的实现。" + 
        "<br><br>" + 
        "(D) '自由' 意味着在没有阻碍或限制的情况下自由行动、说话或思考的权利。"
    },
    {
        id: 9,
        question: "The film exposed the __________ of the advertising industry, revealing how often consumers are misled.",
        chinese_question: "这部电影揭露了广告行业的 __________，揭示了消费者被误导的频率。",
        answers: [
                { option: "A", answer: "transparency", chinese_answer: "透明性", chinese_romanization: "tòumíng xìng" },
                { option: "B", answer: "mendacity", chinese_answer: "虚伪", chinese_romanization: "xūwěi" },
                { option: "C", answer: "forthrightness", chinese_answer: "直率", chinese_romanization: "zhíshuài" },
                { option: "D", answer: "accuracy", chinese_answer: "准确性", chinese_romanization: "zhǔnquè xìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'mendacity' means untruthfulness or a tendency to lie." +
            "<br><br>" +
            "(A) 'transparency' means the quality of being done in an open way without secrets." +
            "<br><br>" +
            "(C) 'forthrightness' means the quality of being honest and straightforward." +
            "<br><br>" +
            "(D) 'accuracy' means the quality of being correct or precise.",
        chinese_explanation: "(B) '虚伪'一词意味着不诚实或倾向于撒谎。" +
            "<br><br>" +
            "(A) '透明性' 意味着以公开方式进行而没有秘密的品质。" +
            "<br><br>" +
            "(C) '直率' 意味着诚实和直率的品质。" +
            "<br><br>" +
            "(D) '准确性' 意味着正确或精确的品质。"
    },
    {
        id: 10,
    question: "Her __________ on the need for better study habits left the students feeling overwhelmed.",
    chinese_question: "她关于需要更好学习习惯的 __________ 让学生们感到不知所措。",
    answers: [
        { option: "A", answer: "harangue", chinese_answer: "训斥", chinese_romanization: "xùnchì" },
        { option: "B", answer: "applaud", chinese_answer: "鼓掌", chinese_romanization: "gǔzhǎng" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "relax", chinese_answer: "放松", chinese_romanization: "fàngsōng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'harangue' means a lengthy and aggressive speech, used figuratively here." + 
        "<br><br>" + 
        "(B) 'applaud' means to show approval or praise by clapping." + 
        "<br><br>" + 
        "(C) 'ignore' means to refuse to take notice of or acknowledge." + 
        "<br><br>" + 
        "(D) 'relax' means to make or become less tense or anxious.",
    chinese_explanation: "(A) '训斥' 意味着冗长而激烈的讲话，这里是比喻用法。" + 
        "<br><br>" + 
        "(B) '鼓掌' 意味着通过拍手表示赞同或称赞。" + 
        "<br><br>" + 
        "(C) '忽视' 意味着拒绝注意或承认。" + 
        "<br><br>" + 
        "(D) '放松' 意味着变得不那么紧张或焦虑。"
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
