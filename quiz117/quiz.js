// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
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
        id: 2,
        question: "The media tends to __________ celebrities, often ignoring their flaws and portraying them as perfect role models.",
        chinese_question: "媒体往往 __________ 名人，经常忽视他们的缺点，把他们描绘成完美的榜样。",
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
        id: 3,
        question: "The team members began to __________ at the constant criticism from their coach.",
        chinese_question: "队员们开始对教练的不断批评感到 __________。",
        answers: [
                { option: "A", answer: "thrive", chinese_answer: "茁壮成长", chinese_romanization: "zhuózhuàng chéngzhǎng" },
                { option: "B", answer: "chafe", chinese_answer: "感到烦恼", chinese_romanization: "gǎndào fánnǎo" },
                { option: "C", answer: "enjoy", chinese_answer: "享受", chinese_romanization: "xiǎngshòu" },
                { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'chafe' means to feel irritation or impatience under restrictive conditions." +
                "<br><br>" +
                "(A) 'thrive' means to grow or develop well." +
                "<br><br>" +
                "(C) 'enjoy' means to take delight or pleasure in something." +
                "<br><br>" +
                "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(B) '感到烦恼' 意味着在限制性条件下感到烦恼或不耐烦。" +
                "<br><br>" +
                "(A) '茁壮成长' 意味着生长或发展得很好。" +
                "<br><br>" +
                "(C) '享受' 意味着从某事中获得乐趣或快乐。" +
                "<br><br>" +
                "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 4,
        question: "Despite efforts to __________ her name, she continued to serve her community with integrity.",
        chinese_question: "尽管有人试图 __________ 她的名声，她仍然以诚信服务于社区。",
        answers: [
                { option: "A", answer: "elevate", chinese_answer: "提升", chinese_romanization: "tíshēng" },
                { option: "B", answer: "asperse", chinese_answer: "诽谤", chinese_romanization: "fěibàng" },
                { option: "C", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
                { option: "D", answer: "cherish", chinese_answer: "珍惜", chinese_romanization: "zhēnxī" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'asperse' means to attack or criticize someone's reputation or character." +
                "<br><br>" +
                "(A) 'elevate' means to raise or lift to a higher position." +
                "<br><br>" +
                "(C) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
                "<br><br>" +
                "(D) 'cherish' means to protect and care for someone lovingly.",
        chinese_explanation: "(B) '诽谤' 意味着攻击或批评某人的声誉或品格。" +
                "<br><br>" +
                "(A) '提升' 意味着提高到更高的位置。" +
                "<br><br>" +
                "(C) '庆祝' 意味着通过社交聚会或愉快的活动来纪念一个重要或快乐的日子或事件。" +
                "<br><br>" +
                "(D) '珍惜' 意味着爱护和关心某人。"
    },
    {
        id: 5,
    question: "Many activists __________ the company's practices, claiming they were harmful to the environment.",
    chinese_question: "许多活动家 __________ 该公司的做法，声称它们对环境有害。",
    answers: [
        { option: "A", answer: "decried", chinese_answer: "谴责", chinese_romanization: "qiǎnzé" },
        { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "D", answer: "celebrated", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'decried' means to publicly denounce or criticize, used figuratively here." +
        "<br><br>" +
        "(B) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'supported' means to bear all or part of the weight of something; to hold up." +
        "<br><br>" +
        "(D) 'celebrated' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
    chinese_explanation: "(A) '谴责' 意味着公开谴责或批评，这里是比喻用法。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '支持' 意味着承担某物的全部或部分重量；支撑。" +
        "<br><br>" +
        "(D) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。"
    },
    {
        id: 6,
        question: "The media tends to __________ sensational stories to attract more viewers.",
        chinese_question: "媒体往往 __________ 耸人听闻的故事以吸引更多观众。",
        answers: [
                { option: "A", answer: "manufacture", chinese_answer: "编造", chinese_romanization: "biānzào" },
                { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
                { option: "D", answer: "clarify", chinese_answer: "澄清", chinese_romanization: "chéngqīng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'manufacture' means to invent or fabricate something, especially with skill." +
                "<br><br>" +
                "(B) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(C) 'simplify' means to make something simpler or easier to do or understand." +
                "<br><br>" +
                "(D) 'clarify' means to make something clearer or easier to understand.",
        chinese_explanation: "(A) '编造' 意味着发明或制作某物，尤其是有技巧地。" +
                "<br><br>" +
                "(B) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(C) '简化' 意味着使某事变得更简单或更容易做或理解。" +
                "<br><br>" +
                "(D) '澄清' 意味着使某事更清楚或更容易理解。"
    },
    {
        id: 7,
        question: "The new policy __________ the abilities of employees to work remotely, causing frustration among the staff.",
        chinese_question: "新政策 __________ 了员工远程工作的能力，引起了员工的挫折感。",
        answers: [
                { option: "A", answer: "circumscribed", chinese_answer: "限制", chinese_romanization: "xiànzhì" },
                { option: "B", answer: "extended", chinese_answer: "扩展", chinese_romanization: "kuòzhǎn" },
                { option: "C", answer: "facilitated", chinese_answer: "促进", chinese_romanization: "cùjìn" },
                { option: "D", answer: "promoted", chinese_answer: "促进", chinese_romanization: "cùjìn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'circumscribed' means restricted or limited." +
                "<br><br>" +
                "(B) 'extended' means made larger or more extensive." +
                "<br><br>" +
                "(C) 'facilitated' means made easier." +
                "<br><br>" +
                "(D) 'promoted' means supported or actively encouraged.",
        chinese_explanation: "(A) '限制' 意味着受到限制或约束。" +
                "<br><br>" +
                "(B) '扩展' 意味着变大或更广泛。" +
                "<br><br>" +
                "(C) '促进' 意味着变得更容易。" +
                "<br><br>" +
                "(D) '促进' 意味着支持或积极鼓励。"
    },
    {
        id: 8,
        question: "In a tragic protest, the activist chose to __________ himself to draw attention to the cause.",
        chinese_question: "在一次悲惨的抗议中，这名活动家选择 __________ 自己，以引起对这一事业的关注。",
        answers: [
                { option: "A", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
                { option: "B", answer: "immolate", chinese_answer: "自焚", chinese_romanization: "zìfén" },
                { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "D", answer: "defend", chinese_answer: "保卫", chinese_romanization: "bǎowèi" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'immolate' means to kill or offer as a sacrifice, especially by burning." +
                "<br><br>" +
                "(A) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
                "<br><br>" +
                "(C) 'support' means to bear all or part of the weight of something." +
                "<br><br>" +
                "(D) 'defend' means to protect from harm or danger.",
        chinese_explanation: "(B) '自焚' 意味着杀死或作为祭品奉献，尤其是通过火烧。" +
                "<br><br>" +
                "(A) '庆祝' 意味着通过社交聚会或愉快的活动来纪念重要或快乐的一天或事件。" +
                "<br><br>" +
                "(C) '支持' 意味着支撑某物的全部或部分重量。" +
                "<br><br>" +
                "(D) '保卫' 意味着保护免受伤害或危险。"
    },
    {
        id: 9,
    question: "She felt deeply hurt when she discovered that her business partner had __________ her by signing a secret deal.",
    chinese_question: "当她发现她的商业伙伴通过签订秘密协议 __________ 她时，她感到非常受伤。",
    answers: [
        { option: "A", answer: "double-crossed", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" },
        { option: "B", answer: "assisted", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
        { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "praised", chinese_answer: "赞扬", chinese_romanization: "zànyáng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'double-crossed' means to betray or deceive someone after initially pretending to support them, used figuratively here." +
        "<br><br>" +
        "(B) 'assisted' means to help someone." +
        "<br><br>" +
        "(C) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'praised' means to express warm approval or admiration.",
    chinese_explanation: "(A) '欺骗' 意味着在最初假装支持某人后背叛或欺骗某人，这里是比喻用法。" +
        "<br><br>" +
        "(B) '帮助' 意味着帮助某人。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '赞扬' 意味着表达热烈的赞同或钦佩。"
    },
    {
        id: 10,
    question: "The mediator worked hard to __________ the conflicting parties and reach a mutually beneficial agreement.",
    chinese_question: "调解员努力 __________ 冲突双方，达成互惠互利的协议。",
    answers: [
        { option: "A", answer: "conciliate", chinese_answer: "调解", chinese_romanization: "tiáojiě" },
        { option: "B", answer: "aggravate", chinese_answer: "加剧", chinese_romanization: "jiājù" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "divide", chinese_answer: "分裂", chinese_romanization: "fēnliè" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'conciliate' means to stop someone from being angry or discontented; to placate or pacify, used figuratively here." +
        "<br><br>" +
        "(B) 'aggravate' means to make a problem, injury, or offense worse or more serious." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'divide' means to separate or be separated into parts.",
    chinese_explanation: "(A) '调解' 意味着使某人不再生气或不满；安抚或平息，这里是比喻用法。" +
        "<br><br>" +
        "(B) '加剧' 意味着使问题、伤害或冒犯变得更糟或更严重。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '分裂' 意味着分离或被分离成部分。"
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
