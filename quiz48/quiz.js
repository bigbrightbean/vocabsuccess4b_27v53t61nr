// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
            question: "The designer preferred __________ layouts for the website, as they provided more space for content and images.",
            chinese_question: "设计师更喜欢网站的 __________ 布局，因为它们为内容和图像提供了更多空间。",
            answers: [
                { option: "A", answer: "oblong", chinese_answer: "长方形的", chinese_romanization: "chángfāngxíng de" },
                { option: "B", answer: "circular", chinese_answer: "圆形的", chinese_romanization: "yuánxíng de" },
                { option: "C", answer: "compact", chinese_answer: "紧凑的", chinese_romanization: "jǐncòu de" },
                { option: "D", answer: "irregular", chinese_answer: "不规则的", chinese_romanization: "bù guīzé de" }
            ],
            correctAnswer: "A",
            explanation: "(A) 'oblong' means having an elongated shape, as a rectangle or oval." +
                "<br><br>" +
                "(B) 'circular' means having the shape of a circle." +
                "<br><br>" +
                "(C) 'compact' means closely and neatly packed together; dense." +
                "<br><br>" +
                "(D) 'irregular' means not even or balanced in shape or arrangement.",
            chinese_explanation: "(A) '长方形的' 意味着具有拉长的形状，如长方形或椭圆形。" +
                "<br><br>" +
                "(B) '圆形的' 意味着形状像圆。" +
                "<br><br>" +
                "(C) '紧凑的' 意味着紧密和整洁地堆在一起的；密集的。" +
                "<br><br>" +
                "(D) '不规则的' 意味着形状或排列不均匀或不平衡的。"
    },
    {
        id: 2,
        question: "His __________ nature made him hesitant to take on leadership roles.",
        chinese_question: "他的 __________ 性格使他在担任领导角色时犹豫不决。",
        answers: [
            { option: "A", answer: "confident", chinese_answer: "自信的", chinese_romanization: "zìxìn de" },
            { option: "B", answer: "assertive", chinese_answer: "坚定自信的", chinese_romanization: "jiāndìng zìxìn de" },
            { option: "C", answer: "timorous", chinese_answer: "胆小的", chinese_romanization: "dǎnxiǎo de" },
            { option: "D", answer: "bold", chinese_answer: "大胆的", chinese_romanization: "dàdǎn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'timorous' means showing or suffering from nervousness, fear, or a lack of confidence." +
            "<br><br>" +
            "(A) 'confident' means feeling or showing confidence in oneself." +
            "<br><br>" +
            "(B) 'assertive' means having or showing a confident and forceful personality." +
            "<br><br>" +
            "(D) 'bold' means showing an ability to take risks.",
        chinese_explanation: "(C) '胆小的' 意味着表现出或因紧张、恐惧或缺乏信心而遭受痛苦的。" +
            "<br><br>" +
            "(A) '自信的' 意味着对自己充满信心的。" +
            "<br><br>" +
            "(B) '坚定自信的' 意味着表现出自信和坚定个性的。" +
            "<br><br>" +
            "(D) '大胆的' 意味着表现出冒险的能力。"
    },
    {
        id: 3,
    question: "Her __________ spirit helped her overcome many challenges in life.",
    chinese_question: "她的 __________ 精神帮助她克服了生活中的许多挑战。",
    answers: [
        { option: "A", answer: "fleeting", chinese_answer: "短暂的", chinese_romanization: "duǎnzàn de" },
        { option: "B", answer: "enduring", chinese_answer: "持久的", chinese_romanization: "chíjiǔ de" },
        { option: "C", answer: "temporary", chinese_answer: "暂时的", chinese_romanization: "zànshí de" },
        { option: "D", answer: "fragile", chinese_answer: "脆弱的", chinese_romanization: "cuìruò de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'enduring' means lasting over a long period of time; durable." +
        "<br><br>" +
        "(A) 'fleeting' means lasting for a very short time." +
        "<br><br>" +
        "(C) 'temporary' means lasting for only a limited period of time; not permanent." +
        "<br><br>" +
        "(D) 'fragile' means easily broken or damaged.",
    chinese_explanation: "(B) “持久的” 意味着持续很长时间的；耐用的。" +
        "<br><br>" +
        "(A) '短暂的' 意味着持续时间非常短。" +
        "<br><br>" +
        "(C) '暂时的' 意味着只持续有限的时间；非永久的。" +
        "<br><br>" +
        "(D) '脆弱的' 意味着容易破碎或损坏。"
    },
    {
        id: 4,
    question: "The children's __________ requests for candy wore down their parents' patience.",
    chinese_question: "孩子们 __________ 的要糖果的请求耗尽了父母的耐心。",
    answers: [
        { option: "A", answer: "occasional", chinese_answer: "偶尔的", chinese_romanization: "ǒu'ěr de" },
        { option: "B", answer: "importunate", chinese_answer: "纠缠不休的", chinese_romanization: "jiūchán bùxiū de" },
        { option: "C", answer: "polite", chinese_answer: "礼貌的", chinese_romanization: "lǐmào de" },
        { option: "D", answer: "hesitant", chinese_answer: "犹豫的", chinese_romanization: "yóuyù de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'importunate' used figuratively means persistently demanding or annoying." +
        "<br><br>" +
        "(A) 'occasional' means occurring, appearing, or done infrequently and irregularly." +
        "<br><br>" +
        "(C) 'polite' means showing behavior that is respectful and considerate of other people." +
        "<br><br>" +
        "(D) 'hesitant' means tentative, unsure, or slow in acting or speaking.",
    chinese_explanation: "(B) '纠缠不休的' 在比喻意义上指坚持不断地要求或令人恼火。" +
        "<br><br>" +
        "(A) '偶尔的' 意味着不经常且不规律地发生、出现或完成。" +
        "<br><br>" +
        "(C) '礼貌的' 意味着表现出对他人的尊重和体贴。" +
        "<br><br>" +
        "(D) '犹豫的' 意味着行为或言语上的迟疑、不确定或缓慢。"
    },
    {
        id: 5,
        question: "The host was __________ throughout the event, ensuring every guest felt welcome and attended to.",
        chinese_question: "主持人在整个活动中都很 __________，确保每位客人都感到受欢迎和得到照顾。",
        answers: [
            { option: "A", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mò bù guānxīn de" },
            { option: "B", answer: "gracious", chinese_answer: "和蔼的", chinese_romanization: "hé'ǎi de" },
            { option: "C", answer: "inattentive", chinese_answer: "疏忽的", chinese_romanization: "shūhū de" },
            { option: "D", answer: "negligent", chinese_answer: "失职的", chinese_romanization: "shīzhí de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'gracious' means courteous, kind, and pleasant." +
            "<br><br>" +
            "(A) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(C) 'inattentive' means not paying attention to something." +
            "<br><br>" +
            "(D) 'negligent' means failing to take proper care in doing something.",
        chinese_explanation: "(B) '和蔼的' 意味着有礼貌的、善良的和愉快的。" +
            "<br><br>" +
            "'漠不关心的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "'疏忽的' 意味着没有注意到某事的。" +
            "<br><br>" +
            "'失职的' 意味着未能在做某事时尽到适当的注意。"
    },
    {
        id: 6,
        question: "His __________ defense of the proposal convinced the board to approve the new initiative.",
        chinese_question: "他对提案的 __________ 辩护说服了董事会批准这个新举措。",
        answers: [
            { option: "A", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "B", answer: "lackluster", chinese_answer: "无光泽的", chinese_romanization: "wú guāngzé de" },
            { option: "C", answer: "vigorous", chinese_answer: "有力的", chinese_romanization: "yǒulì de" },
            { option: "D", answer: "indifferent", chinese_answer: "无动于衷的", chinese_romanization: "wúdòngyúzhōng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'vigorous' means strong, healthy, and full of energy." +
            "<br><br>" +
            "(A) 'apathetic' means showing or feeling no interest, enthusiasm, or concern." +
            "<br><br>" +
            "(B) 'lackluster' means lacking in vitality, force, or conviction; uninspired or uninspiring." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(C) '有力的' 意味着强壮、健康、充满活力。" +
            "<br><br>" +
            "(A) '冷漠的' 意味着没有兴趣、热情或关心。" +
            "<br><br>" +
            "(B) '无光泽的' 意味着缺乏活力、力量或信念；没有启发性的或没有灵感的。" +
            "<br><br>" +
            "(D) '无动于衷的' 意味着没有特别的兴趣或同情；不关心。"
    },
    {
        id: 7,
    question: "The meeting was filled with __________ discussions about mundane topics, failing to spark any real interest among the attendees.",
    chinese_question: "会议充满了关于琐碎话题的 __________ 讨论，未能引起与会者的真正兴趣。",
    answers: [
        { option: "A", answer: "prosaic", chinese_answer: "平淡的", chinese_romanization: "píngdàn de" },
        { option: "B", answer: "stimulating", chinese_answer: "刺激的", chinese_romanization: "cìjī de" },
        { option: "C", answer: "fascinating", chinese_answer: "迷人的", chinese_romanization: "mírén de" },
        { option: "D", answer: "intriguing", chinese_answer: "引人入胜的", chinese_romanization: "yǐn rén rù shèng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'prosaic' means having the style or diction of prose; lacking poetic beauty; commonplace; unromantic." +
        "<br><br>" +
        "(B) 'stimulating' means encouraging or arousing interest or enthusiasm." +
        "<br><br>" +
        "(C) 'fascinating' means extremely interesting." +
        "<br><br>" +
        "(D) 'intriguing' means arousing one's curiosity or interest; fascinating.",
    chinese_explanation: "(A) '平淡的' 意味着具有散文的风格或措辞；缺乏诗意的美；平凡的；不浪漫的。" +
        "<br><br>" +
        "(B) '刺激的' 意味着鼓励或引起兴趣或热情的。" +
        "<br><br>" +
        "(C) '迷人的' 意味着非常有趣的。" +
        "<br><br>" +
        "(D) '引人入胜的' 意味着引起好奇心或兴趣的；迷人的。"
    },
    {
        id: 8,
        question: "The editor removed the __________ details from the article to keep it concise and focused on the main points.",
        chinese_question: "编辑删除了文章中 __________ 的细节，使其简洁并集中在要点上。",
        answers: [
                { option: "A", answer: "essential", chinese_answer: "重要的", chinese_romanization: "zhòngyào de" },
                { option: "B", answer: "extraneous", chinese_answer: "无关的", chinese_romanization: "wúguān de" },
                { option: "C", answer: "relevant", chinese_answer: "相关的", chinese_romanization: "xiāngguān de" },
                { option: "D", answer: "necessary", chinese_answer: "必需的", chinese_romanization: "bìxū de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'extraneous' means irrelevant or unrelated to the subject being dealt with." +
            "<br><br>" +
            "(A) 'essential' means absolutely necessary; extremely important." +
            "<br><br>" +
            "(C) 'relevant' means closely connected or appropriate to what is being done or considered." +
            "<br><br>" +
            "(D) 'necessary' means required to be done, achieved, or present; needed.",
        chinese_explanation: "(B) '无关的' 一词意味着与所处理的主题无关或不相关的。" +
            "<br><br>" +
            "(A) '重要的' 意味着绝对必要的；极其重要的。" +
            "<br><br>" +
            "(C) '相关的' 意味着与所做或考虑的事情密切相关或适当的。" +
            "<br><br>" +
            "(D) '必需的' 意味着需要完成、实现或存在的；需要的。"
    },
    {
        id: 9,
    question: "Her contributions to the project were __________, and it couldn't have succeeded without her.",
    chinese_question: "她对项目的贡献是 __________ 的，没有她，项目不可能成功。",
    answers: [
        { option: "A", answer: "unnecessary", chinese_answer: "不必要的", chinese_romanization: "bù bìyào de" },
        { option: "B", answer: "optional", chinese_answer: "可选的", chinese_romanization: "kěxuǎn de" },
        { option: "C", answer: "dispensable", chinese_answer: "可有可无的", chinese_romanization: "kě yǒu kě wú de" },
        { option: "D", answer: "indispensable", chinese_answer: "必不可少的", chinese_romanization: "bì bùkě shǎo de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'indispensable' means absolutely necessary." +
        "<br><br>" +
        "(A) 'unnecessary' means not needed." +
        "<br><br>" +
        "(B) 'optional' means available to be chosen but not obligatory." +
        "<br><br>" +
        "(C) 'dispensable' means able to be replaced or done without; superfluous.",
    chinese_explanation: "(D) '必不可少的' 意味着绝对必要的。" +
        "<br><br>" +
        "(A) '不必要的' 意味着不需要的。" +
        "<br><br>" +
        "(B) '可选的' 意味着可供选择但不是强制的。" +
        "<br><br>" +
        "(C) '可有可无的' 意味着可以替代或不需要的；多余的。"
    },
    {
        id: 10,
        question: "The __________ challenges of balancing work and family life require constant effort and adjustment.",
        chinese_question: "平衡工作和家庭生活的 __________ 挑战需要不断的努力和调整。",
        answers: [
            { option: "A", answer: "temporary", chinese_answer: "暂时的", chinese_romanization: "zànshí de" },
            { option: "B", answer: "perennial", chinese_answer: "长期存在的", chinese_romanization: "chángqī cúnzài de" },
            { option: "C", answer: "sporadic", chinese_answer: "零星的", chinese_romanization: "língxīng de" },
            { option: "D", answer: "transient", chinese_answer: "短暂的", chinese_romanization: "duǎnzàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'perennial' means lasting or existing for a long or apparently infinite time; enduring or continually recurring." +
            "<br><br>" +
            "(A) 'temporary' means lasting for only a limited period of time; not permanent." +
            "<br><br>" +
            "(C) 'sporadic' means occurring at irregular intervals or only in a few places; scattered or isolated." +
            "<br><br>" +
            "(D) 'transient' means lasting only for a short time; impermanent.",
        chinese_explanation: "(B) '长期存在的' 意味着持续或存在很长时间或看似无限时间的；持久的或不断重复的。" +
            "<br><br>" +
            "(A) '暂时的' 意味着仅持续有限时间的；不是永久的。" +
            "<br><br>" +
            "(C) '零星的' 意味着在不规则的间隔或仅在少数地方发生的；分散的或孤立的。" +
            "<br><br>" +
            "(D) '短暂的' 意味着仅持续很短时间的；暂时的。"
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
