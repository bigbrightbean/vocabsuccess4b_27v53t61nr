// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The judge's ruling was __________, leaving no doubt about the verdict.",
        chinese_question: "法官的裁决是__________的，对判决没有任何疑问。",
        answers: [
            { option: "A", answer: "uncertain", chinese_answer: "不确定的", chinese_romanization: "bù quèdìng de" },
            { option: "B", answer: "unequivocal", chinese_answer: "明确的", chinese_romanization: "míngquè de" },
            { option: "C", answer: "hesitant", chinese_answer: "犹豫的", chinese_romanization: "yóuyù de" },
            { option: "D", answer: "doubtful", chinese_answer: "可疑的", chinese_romanization: "kěyí de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'unequivocal' means leaving no doubt; unambiguous." +
            "<br><br>" +
            "(A) 'uncertain' means not able to be relied on; not known or definite." +
            "<br><br>" +
            "(C) 'hesitant' means tentative, unsure, or slow in acting or speaking." +
            "<br><br>" +
            "(D) 'doubtful' means feeling uncertain about something.",
        chinese_explanation: "(B) '明确的'一词意味着没有疑问的；不含糊的。" +
            "<br><br>" +
            "(A) '不确定的' 意味着不能依靠的；不确定的或不明确的。" +
            "<br><br>" +
            "(C) '犹豫的' 意味着试探性、犹豫不决或行动或说话缓慢的。" +
            "<br><br>" +
            "(D) '可疑的' 意味着对某事感到不确定。"
    },
    {
        id: 2,
        question: "The impact of the new technology on our daily lives has been __________, revolutionizing the way we communicate and work.",
        chinese_question: "新技术对我们日常生活的影响是 __________ 的，彻底改变了我们的沟通和工作方式。",
        answers: [
            { option: "A", answer: "insignificant", chinese_answer: "不重要的", chinese_romanization: "bù zhòngyào de" },
            { option: "B", answer: "exponential", chinese_answer: "指数的", chinese_romanization: "zhǐshù de" },
            { option: "C", answer: "negligible", chinese_answer: "微不足道的", chinese_romanization: "wēi bùzú dào de" },
            { option: "D", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'exponential' means (of an increase) becoming more and more rapid." +
            "<br><br>" +
            "(A) 'insignificant' means too small or unimportant to be worth considering." +
            "<br><br>" +
            "(C) 'negligible' means so small or unimportant as to be not worth considering." +
            "<br><br>" +
            "(D) 'trivial' means of little value or importance.",
        chinese_explanation: "(B) '指数的' 意味着（增长）变得越来越迅速的。" +
            "<br><br>" +
            "(A) '不重要的' 意味着太小或不重要，不值得考虑的。" +
            "<br><br>" +
            "(C) '微不足道的' 意味着如此小或不重要，不值得考虑的。" +
            "<br><br>" +
            "(D) '琐碎的' 意味着价值或重要性很小的。"
    },
    {
        id: 3,
    question: "The scientist's __________ research methods ensured that the experiment's results were accurate and reliable.",
    chinese_question: "这位科学家的 __________ 研究方法确保了实验结果的准确性和可靠性。",
    answers: [
        { option: "A", answer: "painstaking", chinese_answer: "煞费苦心的", chinese_romanization: "shàfèi kǔxīn de" },
        { option: "B", answer: "sloppy", chinese_answer: "马虎的", chinese_romanization: "mǎhu de" },
        { option: "C", answer: "negligent", chinese_answer: "疏忽的", chinese_romanization: "shūhu de" },
        { option: "D", answer: "cursory", chinese_answer: "草率的", chinese_romanization: "cǎoshuài de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'painstaking' means done with or employing great care and thoroughness." +
        "<br><br>" +
        "(B) 'sloppy' means careless and unsystematic." +
        "<br><br>" +
        "(C) 'negligent' means failing to take proper care in doing something." +
        "<br><br>" +
        "(D) 'cursory' means hasty and therefore not thorough or detailed.",
    chinese_explanation: "(A) '煞费苦心的' 意味着以极大的关心和彻底性完成或使用的。" +
        "<br><br>" +
        "(B) '马虎的' 意味着粗心和不系统的。" +
        "<br><br>" +
        "(C) '疏忽的' 意味着没有采取适当的照顾做某事。" +
        "<br><br>" +
        "(D) '草率的' 意味着匆忙的，因此不彻底或不详细的。"
    },
    {
        id: 4,
        question: "Her __________ attitude towards immigrants led to her isolation from more open-minded friends and colleagues.",
        chinese_question: "她对移民的 __________ 态度使她与更开放的朋友和同事疏远了。",
        answers: [
            { option: "A", answer: "accepting", chinese_answer: "接纳的", chinese_romanization: "jiēnà de" },
            { option: "B", answer: "xenophobic", chinese_answer: "仇外的", chinese_romanization: "chóuwài de" },
            { option: "C", answer: "unbiased", chinese_answer: "公正的", chinese_romanization: "gōngzhèng de" },
            { option: "D", answer: "empathetic", chinese_answer: "有同理心的", chinese_romanization: "yǒu tónglǐ xīn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'xenophobic' means having or showing a dislike of or prejudice against people from other countries." +
            "<br><br>" +
            "(A) 'accepting' means willing to tolerate or accept people or situations." +
            "<br><br>" +
            "(C) 'unbiased' means showing no prejudice for or against something; impartial." +
            "<br><br>" +
            "(D) 'empathetic' means showing an ability to understand and share the feelings of another.",
        chinese_explanation: "(B) '仇外的' 意味着对外国人有或表现出不喜欢或偏见。" +
            "<br><br>" +
            "(A) '接纳的' 意味着愿意容忍或接受人或情况。" +
            "<br><br>" +
            "(C) '公正的' 意味着对某事没有偏见；公正的。" +
            "<br><br>" +
            "(D) '有同理心的' 意味着表现出理解和分享他人感受的能力。"
    },
    {
        id: 5,
    question: "His __________ quest to build a utopian society, though noble in intention, was ultimately impractical and doomed to fail.",
    chinese_question: "他建立一个乌托邦社会的 __________ 追求，尽管意图高尚，但最终是不切实际的，注定要失败。",
    answers: [
        { option: "A", answer: "quixotic", chinese_answer: "唐吉诃德式的", chinese_romanization: "tángjíkēdé shì de" },
        { option: "B", answer: "pragmatic", chinese_answer: "务实的", chinese_romanization: "wùshí de" },
        { option: "C", answer: "realistic", chinese_answer: "现实的", chinese_romanization: "xiànshí de" },
        { option: "D", answer: "practical", chinese_answer: "实际的", chinese_romanization: "shíjì de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'quixotic' means exceedingly idealistic; unrealistic and impractical." +
        "<br><br>" +
        "(B) 'pragmatic' means dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations." +
        "<br><br>" +
        "(C) 'realistic' means having or showing a sensible and practical idea of what can be achieved or expected." +
        "<br><br>" +
        "(D) 'practical' means concerned with the actual doing or use of something rather than with theory and ideas.",
    chinese_explanation: "(A) '唐吉诃德式的' 意味着极度理想主义的；不切实际的。" +
        "<br><br>" +
        "(B) '务实的' 意味着以务实的方式处理事情，基于实际而非理论的考虑。" +
        "<br><br>" +
        "(C) '现实的' 意味着具有或表现出对可以实现或预期的事情的合理和实际的想法。" +
        "<br><br>" +
        "(D) '实际的' 意味着关心某事物的实际操作或使用，而不是理论和想法的。"
    },
    {
        id: 6,
    question: "The conference was __________ with attendees, making it one of the most successful events of the year.",
    chinese_question: "会议 __________，成为年度最成功的活动之一。",
    answers: [
        { option: "A", answer: "populous", chinese_answer: "人山人海", chinese_romanization: "rénshānrénhǎi" },
        { option: "B", answer: "quiet", chinese_answer: "安静的", chinese_romanization: "ānjìng de" },
        { option: "C", answer: "empty", chinese_answer: "空的", chinese_romanization: "kōng de" },
        { option: "D", answer: "desolate", chinese_answer: "荒凉的", chinese_romanization: "huāngliáng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'populous' means having a large population; densely populated." +
        "<br><br>" +
        "(B) 'quiet' means making little or no noise." +
        "<br><br>" +
        "(C) 'empty' means containing nothing; not filled or occupied." +
        "<br><br>" +
        "(D) 'desolate' means deserted of people and in a state of bleak and dismal emptiness.",
    chinese_explanation: "(A) '人山人海' 意味着人口众多的；人口密集的。" +
        "<br><br>" +
        "(B) '安静的' 意味着没有或几乎没有声音的。" +
        "<br><br>" +
        "(C) '空的' 意味着没有包含任何东西；未填充或未占用的。" +
        "<br><br>" +
        "(D) '荒凉的' 意味着没有人的状态和荒凉的空旷。"
    },
    {
        id: 7,
    question: "The __________ circumstances of the case puzzled the investigators.",
    chinese_question: "案件的__________情况让调查人员感到困惑。",
    answers: [
        { option: "A", answer: "normal", chinese_answer: "正常的", chinese_romanization: "zhèngcháng de" },
        { option: "B", answer: "typical", chinese_answer: "典型的", chinese_romanization: "diǎnxíng de" },
        { option: "C", answer: "odd", chinese_answer: "奇怪的", chinese_romanization: "qíguài de" },
        { option: "D", answer: "usual", chinese_answer: "平常的", chinese_romanization: "píngcháng de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'odd' means different from what is usual or expected; strange. Figuratively, it can mean unusual or peculiar." +
        "<br><br>" +
        "(A) 'normal' means conforming to a standard; usual, typical, or expected." +
        "<br><br>" +
        "(B) 'typical' means having the distinctive qualities of a particular type of person or thing." +
        "<br><br>" +
        "(D) 'usual' means habitually or typically occurring or done; customary.",
    chinese_explanation: "(C) '奇怪的'一词意味着不同于通常或预期的；奇怪的。比喻地，它可以表示不寻常或奇特的。" +
        "<br><br>" +
        "(A) '正常的' 意味着符合标准的；通常、典型或预期的。" +
        "<br><br>" +
        "(B) '典型的' 意味着具有某种特定类型的人或事物的典型品质的。" +
        "<br><br>" +
        "(D) '平常的' 意味着习惯性或通常发生或完成的；惯常的。"
    },
    {
        id: 8,
    question: "Her reckless comments __________ her position within the company, as they reflected poorly on her judgment and professionalism.",
    chinese_question: "她的鲁莽言论 __________ 了她在公司内的地位，因为这些言论反映了她的判断力和专业素养的不足。",
    answers: [
        { option: "A", answer: "jeopardized", chinese_answer: "危及", chinese_romanization: "wēijí" },
        { option: "B", answer: "strengthened", chinese_answer: "加强", chinese_romanization: "jiāqiáng" },
        { option: "C", answer: "enhanced", chinese_answer: "增强", chinese_romanization: "zēngqiáng" },
        { option: "D", answer: "fortified", chinese_answer: "巩固", chinese_romanization: "gǒnggù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'jeopardized' means to put (someone or something) into a situation in which there is a danger of loss, harm, or failure." +
        "<br><br>" +
        "(B) 'strengthened' means to make or become stronger." +
        "<br><br>" +
        "(C) 'enhanced' means to intensify, increase, or further improve the quality, value, or extent of." +
        "<br><br>" +
        "(D) 'fortified' means to strengthen (a place) with defensive works so as to protect it against attack.",
    chinese_explanation: "(A) '危及' 意味着将（某人或某物）置于存在损失、伤害或失败的危险的情况下。" +
        "<br><br>" +
        "(B) '加强' 意味着使或变得更强。" +
        "<br><br>" +
        "(C) '增强' 意味着加强、增加或进一步提高质量、价值或程度。" +
        "<br><br>" +
        "(D) '巩固' 意味着用防御工事加强（一个地方），以保护它免受攻击。"
    },
    {
        id: 9,
        question: "His __________ writing style, lacking any poetic flair or creativity, made the novel dull and uninspiring.",
        chinese_question: "他的 __________ 写作风格，缺乏任何诗意的才华或创造力，使小说乏味且无启发性。",
        answers: [
                { option: "A", answer: "imaginative", chinese_answer: "富有想象力的", chinese_romanization: "fùyǒu xiǎngxiàng lì de" },
                { option: "B", answer: "exciting", chinese_answer: "令人兴奋的", chinese_romanization: "lìng rén xīngfèn de" },
                { option: "C", answer: "prosaic", chinese_answer: "平凡的", chinese_romanization: "píngfán de" },
                { option: "D", answer: "creative", chinese_answer: "创造性的", chinese_romanization: "chuàngzào xìng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'prosaic' means having the style or diction of prose; lacking poetic beauty." +
            "<br><br>" +
            "(A) 'imaginative' means having or showing creativity or inventiveness." +
            "<br><br>" +
            "(B) 'exciting' means causing great enthusiasm and eagerness." +
            "<br><br>" +
            "(D) 'creative' means relating to or involving the imagination or original ideas, especially in the production of an artistic work.",
        chinese_explanation: "(C) '平凡的' 一词意味着具有散文的风格或措辞；缺乏诗意的美。" +
            "<br><br>" +
            "(A) '富有想象力的' 意味着具有或显示出创造力或发明性。" +
            "<br><br>" +
            "(B) '令人兴奋的' 意味着引起极大热情和渴望的。" +
            "<br><br>" +
            "(D) '创造性的' 意味着与想象力或原创思想有关，尤其是在艺术作品的制作中。"
    },
    {
        id: 10,
        question: "The company was found guilty of __________ practices, misleading customers to increase profits.",
        chinese_question: "公司被发现有 __________ 行为，通过误导客户来增加利润。",
        answers: [
                { option: "A", answer: "honest", chinese_answer: "诚实的", chinese_romanization: "chéngshí de" },
                { option: "B", answer: "fraudulent", chinese_answer: "欺诈的", chinese_romanization: "qīzhà de" },
                { option: "C", answer: "ethical", chinese_answer: "道德的", chinese_romanization: "dàodé de" },
                { option: "D", answer: "genuine", chinese_answer: "真实的", chinese_romanization: "zhēnshí de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'fraudulent' means obtained, done by, or involving deception, especially criminal deception." +
            "<br><br>" +
            "(A) 'honest' means free of deceit and untruthfulness; sincere." +
            "<br><br>" +
            "(C) 'ethical' means relating to moral principles or the branch of knowledge dealing with these." +
            "<br><br>" +
            "(D) 'genuine' means truly what something is said to be; authentic.",
        chinese_explanation: "(B) '欺诈的' 一词意味着通过欺骗获得、完成或涉及欺骗，特别是犯罪欺骗。" +
            "<br><br>" +
            "(A) '诚实的' 意味着没有欺骗和不真实；真诚的。" +
            "<br><br>" +
            "(C) '道德的' 意味着与道德原则或处理这些原则的知识分支有关。" +
            "<br><br>" +
            "(D) '真实的' 意味着确实是所说的那样；真实的。"
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
