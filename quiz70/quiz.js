// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "Only a small __________ of the budget was allocated for marketing.",
    chinese_question: "预算中只有一小 __________ 被分配给市场营销。",
    answers: [
        { option: "A", answer: "portion", chinese_answer: "部分", chinese_romanization: "bùfen" },
        { option: "B", answer: "entirety", chinese_answer: "全部", chinese_romanization: "quánbù" },
        { option: "C", answer: "vision", chinese_answer: "视野", chinese_romanization: "shìyě" },
        { option: "D", answer: "sense", chinese_answer: "感觉", chinese_romanization: "gǎnjué" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'portion' means a part of a whole." + 
        "<br><br>" + 
        "(B) 'entirety' means the whole of something." + 
        "<br><br>" + 
        "(C) 'vision' means the faculty or state of being able to see." + 
        "<br><br>" + 
        "(D) 'sense' means a faculty by which the body perceives an external stimulus; one of the faculties of sight, smell, hearing, taste, and touch.",
    chinese_explanation: "(A) '部分' 意味着整体的一部分。" + 
        "<br><br>" + 
        "(B) '全部' 意味着某物的整体。" + 
        "<br><br>" + 
        "(C) '视野' 意味着能够看到的能力或状态。" + 
        "<br><br>" + 
        "(D) '感觉' 意味着身体感知外部刺激的一种功能；五官中的一种功能，视力、嗅觉、听觉、味觉和触觉。"
    },
    {
        id: 2,
        question: "The cruise ship was a __________, with numerous restaurants, swimming pools, and entertainment venues on board.",
        chinese_question: "这艘游轮是一个 __________，船上有许多餐厅、游泳池和娱乐场所。",
        answers: [
                { option: "A", answer: "dinghy", chinese_answer: "小艇", chinese_romanization: "xiǎotǐng" },
                { option: "B", answer: "raft", chinese_answer: "筏", chinese_romanization: "fá" },
                { option: "C", answer: "behemoth", chinese_answer: "巨兽", chinese_romanization: "jùshòu" },
                { option: "D", answer: "canoe", chinese_answer: "独木舟", chinese_romanization: "dúmùzhōu" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'behemoth' means something enormous, especially a large and powerful organization or entity." +
            "<br><br>" +
            "(A) 'dinghy' means a small boat for recreation or racing, especially an open boat with a mast and sails." +
            "<br><br>" +
            "(B) 'raft' means a flat buoyant structure of timber or other materials fastened together, used as a boat or floating platform." +
            "<br><br>" +
            "(D) 'canoe' means a narrow, keelless boat with pointed ends, propelled by a paddle or paddles.",
        chinese_explanation: "(C) '巨兽'一词意味着巨大的东西，尤其是一个庞大而强大的组织或实体。" +
            "<br><br>" +
            "(A) '小艇' 意味着一种用于娱乐或比赛的小船，尤其是一种带有桅杆和帆的开敞船。" +
            "<br><br>" +
            "(B) '筏' 意味着由木材或其他材料固定在一起的浮筏，用作船或浮动平台。" +
            "<br><br>" +
            "(D) '独木舟' 意味着一种窄而无龙骨的船，两端尖，用桨推进。"
    },
    {
        id: 3,
    question: "Trying to navigate the bureaucracy at the city hall was like wading through a __________.",
    chinese_question: "试图在市政厅处理官僚主义就像在 __________ 中跋涉。",
    answers: [
        { option: "A", answer: "desert", chinese_answer: "沙漠", chinese_romanization: "shāmò" },
        { option: "B", answer: "quagmire", chinese_answer: "困境", chinese_romanization: "kùnjìng" },
        { option: "C", answer: "paradise", chinese_answer: "天堂", chinese_romanization: "tiāntáng" },
        { option: "D", answer: "highway", chinese_answer: "公路", chinese_romanization: "gōnglù" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'quagmire' means an awkward, complex, or hazardous situation." + 
        "<br><br>" + 
        "(A) 'desert' means a barren area of landscape with little precipitation." + 
        "<br><br>" + 
        "(C) 'paradise' means an ideal or idyllic place or state." + 
        "<br><br>" + 
        "(D) 'highway' means a main road, especially one connecting major towns or cities.",
    chinese_explanation: "(B) '困境'一词意味着一种尴尬、复杂或危险的情况。" + 
        "<br><br>" + 
        "(A) '沙漠' 意味着降水很少的不毛之地。" + 
        "<br><br>" + 
        "(C) '天堂' 意味着一个理想或田园诗般的地方或状态。" + 
        "<br><br>" + 
        "(D) '公路' 意味着连接主要城镇或城市的主要道路。"
    },
    {
        id: 4,
    question: "Her kindness was beyond the __________ of those who had only known hardship.",
    chinese_question: "她的善良超出了那些只经历过苦难的人的 __________ 。",
    answers: [
        { option: "A", answer: "ken", chinese_answer: "知识范围", chinese_romanization: "zhīshì fànwéi" },
        { option: "B", answer: "understanding", chinese_answer: "理解", chinese_romanization: "lǐjiě" },
        { option: "C", answer: "awareness", chinese_answer: "意识", chinese_romanization: "yìshí" },
        { option: "D", answer: "perception", chinese_answer: "感知", chinese_romanization: "gǎnzhī" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'ken' means range of knowledge or understanding." + 
        "<br><br>" + 
        "(B) 'understanding' means the ability to comprehend something." + 
        "<br><br>" + 
        "(C) 'awareness' means the state of being conscious of something." + 
        "<br><br>" + 
        "(D) 'perception' means the ability to see, hear, or become aware of something through the senses.",
    chinese_explanation: "(A) '知识范围' 意味着知识或理解的范围。" + 
        "<br><br>" + 
        "(B) '理解' 意味着理解某事的能力。" + 
        "<br><br>" + 
        "(C) '意识' 意味着意识到某事的状态。" + 
        "<br><br>" + 
        "(D) '感知' 意味着通过感官看到、听到或意识到某事的能力。"
    },
    {
        id: 5,
        question: "Her __________ on the issue made it impossible to reach a consensus, frustrating her colleagues.",
        chinese_question: "她在这个问题上的 __________ 使得无法达成共识，令同事们感到沮丧。",
        answers: [
                { option: "A", answer: "intransigence", chinese_answer: "不妥协", chinese_romanization: "bù tuǒxié" },
                { option: "B", answer: "willingness", chinese_answer: "愿意", chinese_romanization: "yuànyì" },
                { option: "C", answer: "openness", chinese_answer: "开放", chinese_romanization: "kāifàng" },
                { option: "D", answer: "compromise", chinese_answer: "妥协", chinese_romanization: "tuǒxié" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'intransigence' means refusal to change one's views or to agree about something." +
            "<br><br>" +
            "(B) 'willingness' means the quality or state of being prepared to do something; readiness." +
            "<br><br>" +
            "(C) 'openness' means lack of restriction; accessibility." +
            "<br><br>" +
            "(D) 'compromise' means an agreement or a settlement of a dispute that is reached by each side making concessions.",
        chinese_explanation: "(A) '不妥协' 意味着拒绝改变观点或就某事达成一致。" +
            "<br><br>" +
            "(B) '愿意' 意味着准备做某事的状态；准备好。" +
            "<br><br>" +
            "(C) '开放' 意味着没有限制；可达性。" +
            "<br><br>" +
            "(D) '妥协' 意味着通过双方做出让步而达成的协议或争端解决。"
    },
    {
        id: 6,
         question: "In the midst of the __________, it was difficult to distinguish friend from foe as everyone seemed to be fighting everyone else.",
        chinese_question: "在 __________ 之中，很难区分敌友，因为每个人似乎都在互相打斗。",
        answers: [
                { option: "A", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" },
                { option: "B", answer: "melee", chinese_answer: "混战", chinese_romanization: "hùnzhàn" },
                { option: "C", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" },
                { option: "D", answer: "order", chinese_answer: "秩序", chinese_romanization: "zhìxù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'melee' means a confused fight, skirmish, or scuffle." +
            "<br><br>" +
            "(A) 'harmony' means the combination of simultaneously sounded musical notes to produce chords and chord progressions having a pleasing effect." +
            "<br><br>" +
            "(C) 'calm' means the absence of violent or confrontational activity within a place or group." +
            "<br><br>" +
            "(D) 'order' means the arrangement or disposition of people or things in relation to each other according to a particular sequence, pattern, or method.",
        chinese_explanation: "(B) '混战'一词意味着混乱的打斗、小冲突或争吵。" +
            "<br><br>" +
            "(A) '和谐' 意味着同时发出的乐音组合，产生和弦和和弦进行，具有令人愉悦的效果。" +
            "<br><br>" +
            "(C) '平静' 意味着在一个地方或群体内没有暴力或对抗性活动。" +
            "<br><br>" +
            "(D) '秩序' 意味着根据特定的顺序、模式或方法排列或安排人或事物的状态。"
    },
    {
        id: 7,
        question: "The CEO's decision to lay off workers without severance pay drew the __________ of labour unions.",
        chinese_question: "首席执行官决定解雇工人而不支付遣散费，引起了工会的 __________。",
        answers: [
                { option: "A", answer: "ire", chinese_answer: "愤怒", chinese_romanization: "fènnù" },
                { option: "B", answer: "admiration", chinese_answer: "钦佩", chinese_romanization: "qīnpèi" },
                { option: "C", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
                { option: "D", answer: "relief", chinese_answer: "轻松", chinese_romanization: "qīngsōng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'ire' figuratively means anger." +
            "<br><br>" +
            "(B) 'admiration' means respect and warm approval." +
            "<br><br>" +
            "(C) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(D) 'relief' means a feeling of reassurance and relaxation following release from anxiety or distress.",
        chinese_explanation: "(A) '愤怒' 在此语境下意指愤怒。" +
            "<br><br>" +
            "(B) '钦佩' 意味着尊重和热情的认可。" +
            "<br><br>" +
            "(C) '冷漠' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(D) '轻松' 意味着在解除焦虑或痛苦后的放心和放松感觉。"
    },
    {
        id: 8,
    question: "The rapid growth of the company is __________ that their strategies are effective.",
    chinese_question: "公司的快速增长是他们策略有效的 __________。",
    answers: [
        { option: "A", answer: "question", chinese_answer: "问题", chinese_romanization: "wèntí" },
        { option: "B", answer: "proof", chinese_answer: "证明", chinese_romanization: "zhèngmíng" },
        { option: "C", answer: "rumor", chinese_answer: "谣言", chinese_romanization: "yáoyán" },
        { option: "D", answer: "doubt", chinese_answer: "怀疑", chinese_romanization: "huáiyí" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'proof' means something that demonstrates the truth or existence of something." + 
        "<br><br>" + 
        "(A) 'question' means a sentence worded or expressed so as to elicit information." + 
        "<br><br>" + 
        "(C) 'rumor' means a currently circulating story or report of uncertain or doubtful truth." + 
        "<br><br>" + 
        "(D) 'doubt' means a feeling of uncertainty or lack of conviction.",
    chinese_explanation: "(B) “证明” 意味着证明某事真实性或存在的事物。" + 
        "<br><br>" + 
        "(A) '问题' 意味着措辞或表达以引出信息的句子。" + 
        "<br><br>" + 
        "(C) '谣言' 意味着不确定或可疑的传闻或报道。" + 
        "<br><br>" + 
        "(D) '怀疑' 意味着不确定或缺乏信心的感觉。"
    },
    {
        id: 9,
    question: "Her __________ in expressing her opinions often caused friction with her colleagues, who found her impulsive and rash.",
    chinese_question: "她在表达自己意见时的 __________ 经常引起同事的摩擦，他们觉得她冲动且草率。",
    answers: [
        { option: "A", answer: "calmness", chinese_answer: "冷静", chinese_romanization: "lěngjìng" },
        { option: "B", answer: "impetuosity", chinese_answer: "冲动", chinese_romanization: "chōngdòng" },
        { option: "C", answer: "restraint", chinese_answer: "克制", chinese_romanization: "kèzhì" },
        { option: "D", answer: "deliberation", chinese_answer: "深思熟虑", chinese_romanization: "shēnsīshúlǜ" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'impetuosity' means the quality of being impulsive or acting without careful thought." + 
        "<br><br>" + 
        "(A)'calmness' means the state or quality of being free from agitation or strong emotion." + 
        "<br><br>" + 
        "(C)'restraint' means the action of holding back or keeping someone or something under control." + 
        "<br><br>" + 
        "(D)'deliberation' means long and careful consideration or discussion.",
    chinese_explanation: "(B) '冲动'一词意味着冲动或不经仔细思考而行动的品质。" + 
        "<br><br>" + 
        "(A)'冷静' 意味着没有激动或强烈情绪的状态或品质。" + 
        "<br><br>" + 
        "(C)'克制' 意味着控制住或保持某人或某物在控制之下的行为。" + 
        "<br><br>" + 
        "(D)'深思熟虑' 意味着长时间和仔细的考虑或讨论。"
    },
    {
        id: 10,
    question: "The __________ of his philosophical writings has influenced generations of thinkers.",
    chinese_question: "他哲学著作的 __________ 影响了几代思想家。",
    answers: [
        { option: "A", answer: "lightness", chinese_answer: "轻盈", chinese_romanization: "qīngyíng" },
        { option: "B", answer: "profundity", chinese_answer: "深刻", chinese_romanization: "shēnkè" },
        { option: "C", answer: "humor", chinese_answer: "幽默", chinese_romanization: "yōumò" },
        { option: "D", answer: "simplicity", chinese_answer: "简单", chinese_romanization: "jiǎndān" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'profundity' figuratively means deep insight or great depth of knowledge or thought." +
        "<br><br>" +
        "(A) 'lightness' means the quality of being light in weight." +
        "<br><br>" +
        "(C) 'humor' means the quality of being amusing or comic." +
        "<br><br>" +
        "(D) 'simplicity' means the quality or condition of being easy to understand or do.",
    chinese_explanation: "(B) '深刻' 在此语境下意指深刻的见解或伟大的知识或思想深度。" +
        "<br><br>" +
        "(A) '轻盈' 意味着轻重量的质量。" +
        "<br><br>" +
        "(C) '幽默' 意味着有趣或滑稽的品质。" +
        "<br><br>" +
        "(D) '简单' 意味着易于理解或做的质量或条件。"
}
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
