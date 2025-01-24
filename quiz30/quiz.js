// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Their relationship had always been __________, filled with passionate arguments and reconciliations.",
        chinese_question: "他们的关系一直很 __________，充满了激烈的争吵和和解。",
        answers: [
            { option: "A", answer: "serene", chinese_answer: "平静", chinese_romanization: "píngjìng" },
            { option: "B", answer: "tumultuous", chinese_answer: "动荡", chinese_romanization: "dòngdàng" },
            { option: "C", answer: "harmonious", chinese_answer: "和谐", chinese_romanization: "héxié" },
            { option: "D", answer: "tranquil", chinese_answer: "安宁", chinese_romanization: "ānníng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'tumultuous' means making a loud, confused noise; uproarious; excited, confused, or disorderly." +
            "<br><br>" +
            "(A) 'serene' means calm, peaceful, and untroubled; tranquil." +
            "<br><br>" +
            "(C) 'harmonious' means forming a pleasing or consistent whole; free from disagreement or dissent." +
            "<br><br>" +
            "(D) 'tranquil' means free from disturbance; calm.",
        chinese_explanation: "(B) '动荡' 意味着发出响亮、混乱的声音；喧闹的；兴奋、困惑或无序的。" +
            "<br><br>" +
            "(A) '平静' 意味着冷静、和平和不受干扰；宁静的。" +
            "<br><br>" +
            "(C) '和谐' 意味着形成一个令人愉快或一致的整体；没有分歧或异议。" +
            "<br><br>" +
            "(D) '安宁' 意味着没有干扰；平静的。"
    },
    {
        id: 2,
        question: "The solution to the complex problem remained __________, despite the team's best efforts to find it.",
        chinese_question: "尽管团队尽了最大的努力，但这个复杂问题的解决方案依然 __________。",
        answers: [
                { option: "A", answer: "obvious", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" },
                { option: "B", answer: "elusive", chinese_answer: "难以捉摸的", chinese_romanization: "nányǐ zhuōmō de" },
                { option: "C", answer: "clear", chinese_answer: "清楚的", chinese_romanization: "qīngchǔ de" },
                { option: "D", answer: "apparent", chinese_answer: "显而易见的", chinese_romanization: "xiǎn ér yì jiàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'elusive' means difficult to find, catch, or achieve." +
            "<br><br>" +
            "(A) 'obvious' means easily perceived or understood; clear, self-evident, or apparent." +
            "<br><br>" +
            "(C) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(D) 'apparent' means clearly visible or understood; obvious.",
        chinese_explanation: "(B) '难以捉摸的' 一词意味着难以找到、捕捉或实现的。" +
            "<br><br>" +
            "(A) '明显的' 意味着容易感知或理解；清晰的，自明的，或显而易见的。" +
            "<br><br>" +
            "(C) '清楚的' 意味着容易感知、理解或解释的。" +
            "<br><br>" +
            "(D) '显而易见的' 意味着清晰可见或理解的；显然的。"
    },
    {
        id: 3,
    question: "The lawyer was an __________ figure in the legal community, known for his integrity and expertise.",
    chinese_question: "这位律师是法律界的 __________ 人物，以其正直和专业知识闻名。",
    answers: [
        { option: "A", answer: "eminent", chinese_answer: "杰出", chinese_romanization: "jiéchū" },
        { option: "B", answer: "unremarkable", chinese_answer: "平凡", chinese_romanization: "píngfán" },
        { option: "C", answer: "typical", chinese_answer: "典型", chinese_romanization: "diǎnxíng" },
        { option: "D", answer: "ordinary", chinese_answer: "普通", chinese_romanization: "pǔtōng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'eminent' means famous and respected within a particular sphere or profession." +
        "<br><br>" +
        "(B) 'unremarkable' means not particularly interesting or surprising." +
        "<br><br>" +
        "(C) 'typical' means having the distinctive qualities of a particular type of person or thing." +
        "<br><br>" +
        "(D) 'ordinary' means with no special or distinctive features; normal.",
    chinese_explanation: "(A) '杰出' 意味着在某个领域或职业中著名且受人尊敬。" +
        "<br><br>" +
        "(B) '平凡' 意味着没有特别有趣或令人惊讶。" +
        "<br><br>" +
        "(C) '典型' 意味着具有某种类型的人的或物的独特品质。" +
        "<br><br>" +
        "(D) '普通' 意味着没有特别或独特的特征；正常的。"
    },
    {
        id: 4,
    question: "His __________ belief in justice drove him to fight for the rights of the oppressed.",
    chinese_question: "他对正义的 __________ 信念促使他为被压迫者的权利而奋斗。",
    answers: [
        { option: "A", answer: "weak", chinese_answer: "虚弱的", chinese_romanization: "xūruò de" },
        { option: "B", answer: "sturdy", chinese_answer: "坚定的", chinese_romanization: "jiāndìng de" },
        { option: "C", answer: "fragile", chinese_answer: "脆弱的", chinese_romanization: "cuìruò de" },
        { option: "D", answer: "delicate", chinese_answer: "精致的", chinese_romanization: "jīngzhì de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'sturdy' means having resolute determination." +
        "<br><br>" +
        "(A) 'weak' means lacking physical strength or vigor." +
        "<br><br>" +
        "(C) 'fragile' means easily broken or damaged." +
        "<br><br>" +
        "(D) 'delicate' means easily broken or damaged; fragile.",
    chinese_explanation: "(B) “坚定的” 意味着有坚定的决心。" +
        "<br><br>" +
        "(A) '虚弱的' 意味着缺乏体力或活力。" +
        "<br><br>" +
        "(C) '脆弱的' 意味着容易破碎或损坏。" +
        "<br><br>" +
        "(D) '精致的' 意味着容易破碎或损坏；脆弱的。"
    },
    {
        id: 5,
        question: "He spoke with __________ passion about the need for environmental conservation, inspiring the audience to take action.",
        chinese_question: "他以 __________ 的激情谈论环境保护的必要性，激励观众采取行动。",
        answers: [
            { option: "A", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "B", answer: "indifferent", chinese_answer: "不感兴趣的", chinese_romanization: "bù gǎn xìngqù de" },
            { option: "C", answer: "vehement", chinese_answer: "强烈的", chinese_romanization: "qiángliè de" },
            { option: "D", answer: "detached", chinese_answer: "超然的", chinese_romanization: "chāorán de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'vehement' means showing strong feeling; forceful, passionate, or intense." +
            "<br><br>" +
            "(A) 'apathetic' means showing or feeling no interest, enthusiasm, or concern." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'detached' means separate or disconnected; aloof.",
        chinese_explanation: "(C) '强烈的' 意味着表现出强烈的情感；有力的、热情的或强烈的。" +
            "<br><br>" +
            "(A) '冷漠的' 意味着没有表现出或感受到兴趣、热情或关心的。" +
            "<br><br>" +
            "(B) '不感兴趣的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(D) '超然的' 意味着分离的或断开的；超然的。"
    },
    {
        id: 6,
        question: "Despite the chaos around her, she maintained a __________ demeanour, handling each challenge with grace.",
        chinese_question: "尽管周围一片混乱，她仍保持 __________ 的举止，优雅地应对每一个挑战。",
        answers: [
            { option: "A", answer: "frantic", chinese_answer: "狂乱", chinese_romanization: "kuángluàn" },
            { option: "B", answer: "agitated", chinese_answer: "激动", chinese_romanization: "jīdòng" },
            { option: "C", answer: "tranquil", chinese_answer: "宁静", chinese_romanization: "níngjìng" },
            { option: "D", answer: "stressed", chinese_answer: "紧张", chinese_romanization: "jǐnzhāng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'tranquil' means free from disturbance; calm." +
            "<br><br>" +
            "(A) 'frantic' means wild or distraught with fear, anxiety, or other emotion." +
            "<br><br>" +
            "(B) 'agitated' means feeling or appearing troubled or nervous." +
            "<br><br>" +
            "(D) 'stressed' means experiencing mental or emotional strain or tension.",
        chinese_explanation: "(C) '宁静' 意味着没有干扰；平静。" +
            "<br><br>" +
            "(A) '狂乱' 意味着因恐惧、焦虑或其他情绪而疯狂或心烦意乱。" +
            "<br><br>" +
            "(B) '激动' 意味着感到或显得不安或紧张。" +
            "<br><br>" +
            "(D) '紧张' 意味着经历精神或情感上的紧张或压力。"
    },
    {
        id: 7,
        question: "Her __________ behavior in the office, such as agreeing with every suggestion made by her superiors without question, and never standing up for herself, made her colleagues see her as someone who would do anything to please the higher-ups.",
        chinese_question: "她在办公室的 __________ 行为，例如毫无疑问地同意上司提出的每一个建议，从不为自己争取权益，让同事们认为她是一个会不惜一切取悦上司的人。",
        answers: [
            { option: "A", answer: "servile", chinese_answer: "奴性的", chinese_romanization: "núxìng de" },
            { option: "B", answer: "autonomous", chinese_answer: "自主的", chinese_romanization: "zìzhǔ de" },
            { option: "C", answer: "rebellious", chinese_answer: "叛逆的", chinese_romanization: "pànnì de" },
            { option: "D", answer: "self-reliant", chinese_answer: "自力更生的", chinese_romanization: "zìlì gēngshēng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'servile' means having or showing an excessive willingness to serve or please others." +
            "<br><br>" +
            "(B) 'autonomous' means having the freedom to govern itself or control its own affairs." +
            "<br><br>" +
            "(C) 'rebellious' means showing a desire to resist authority, control, or convention." +
            "<br><br>" +
            "(D) 'self-reliant' means reliant on one's own powers and resources rather than those of others.",
        chinese_explanation: "(A) '奴性的' 意味着表现出过度愿意服务或取悦他人的。" +
            "<br><br>" +
            "(B) '自主的' 意味着有自由管理自己或控制自己事务的。" +
            "<br><br>" +
            "(C) '叛逆的' 意味着表现出抵抗权威、控制或惯例的欲望。" +
            "<br><br>" +
            "(D) '自力更生的' 意味着依靠自己的力量和资源而不是他人的。"
    },
    {
        id: 8,
    question: "The entrepreneur's __________ vision for revolutionizing the industry was admired by many, but few believed it could be practically implemented.",
    chinese_question: "这位企业家革命性改变行业的 __________ 愿景受到许多人的钦佩，但很少有人相信它可以实际实施。",
    answers: [
        { option: "A", answer: "quixotic", chinese_answer: "唐吉诃德式的", chinese_romanization: "tángjíkēdé shì de" },
        { option: "B", answer: "grounded", chinese_answer: "有根据的", chinese_romanization: "yǒu gēnjù de" },
        { option: "C", answer: "sensible", chinese_answer: "明智的", chinese_romanization: "míngzhì de" },
        { option: "D", answer: "attainable", chinese_answer: "可实现的", chinese_romanization: "kě shíxiàn de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'quixotic' means exceedingly idealistic; unrealistic and impractical." +
        "<br><br>" +
        "(B) 'grounded' means well-balanced and sensible." +
        "<br><br>" +
        "(C) 'sensible' means chosen in accordance with wisdom or prudence; likely to be of benefit." +
        "<br><br>" +
        "(D) 'attainable' means able to be achieved, accomplished, or reached.",
    chinese_explanation: "(A) '唐吉诃德式的' 意味着极度理想主义的；不切实际的。" +
        "<br><br>" +
        "(B) '有根据的' 意味着平衡良好和明智的。" +
        "<br><br>" +
        "(C) '明智的' 意味着根据智慧或审慎选择的；可能有益的。" +
        "<br><br>" +
        "(D) '可实现的' 意味着能够达到、实现或完成的。"
    },
    {
        id: 9,
    question: "The __________ spending habits of the company led to its financial downfall.",
    chinese_question: "公司的 __________ 消费习惯导致了其财务上的失败。",
    answers: [
        { option: "A", answer: "prudent", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" },
        { option: "B", answer: "cautious", chinese_answer: "小心的", chinese_romanization: "xiǎoxīn de" },
        { option: "C", answer: "promiscuous", chinese_answer: "随意的", chinese_romanization: "suíyì de" },
        { option: "D", answer: "economical", chinese_answer: "节约的", chinese_romanization: "jiéyuē de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'promiscuous' means demonstrating or implying an undiscriminating or unselective approach; indiscriminate or casual." +
        "<br><br>" +
        "(A) 'prudent' means acting with or showing care and thought for the future." +
        "<br><br>" +
        "(B) 'cautious' means (of a person) careful to avoid potential problems or dangers." +
        "<br><br>" +
        "(D) 'economical' means giving good value or service in relation to the amount of money, time, or effort spent.",
    chinese_explanation: "(C) '随意的' 意味着表现出或暗示一种无差别或不加选择的方法；不加选择或随意的。" +
        "<br><br>" +
        "(A) '谨慎的' 意味着表现出对未来的关心和思考的。" +
        "<br><br>" +
        "(B) '小心的' 意味着（指人）小心避免潜在问题或危险的。" +
        "<br><br>" +
        "(D) '节约的' 意味着在所花费的钱、时间或精力方面提供良好的价值或服务的。"
    },
    {
        id: 10,
    question: "Her __________ acts of kindness brightened the days of many people in her community, though she didn't volunteer regularly.",
    chinese_question: "她的 __________ 善举照亮了社区里许多人的日子，尽管她并没有经常做义工。",
    answers: [
        { option: "A", answer: "occasional", chinese_answer: "偶尔的", chinese_romanization: "ǒu'ěr de" },
        { option: "B", answer: "habitual", chinese_answer: "习惯性的", chinese_romanization: "xíguànxìng de" },
        { option: "C", answer: "routine", chinese_answer: "常规的", chinese_romanization: "chángguī de" },
        { option: "D", answer: "continuous", chinese_answer: "持续的", chinese_romanization: "chíxù de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'occasional' means occurring, appearing, or done infrequently and irregularly." +
        "<br><br>" +
        "(B) 'habitual' means done constantly or as a habit." +
        "<br><br>" +
        "(C) 'routine' means performed as part of a regular procedure rather than for a special reason." +
        "<br><br>" +
        "(D) 'continuous' means forming an unbroken whole; without interruption.",
    chinese_explanation: "(A) '偶尔的' 意味着不频繁和不规律地发生、出现或完成的。" +
        "<br><br>" +
        "(B) '习惯性的' 意味着不断地或作为习惯完成的。" +
        "<br><br>" +
        "(C) '常规的' 意味着作为常规程序的一部分执行的，而不是出于特别原因的。" +
        "<br><br>" +
        "(D) '持续的' 意味着形成一个不间断的整体；没有中断的。"
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
