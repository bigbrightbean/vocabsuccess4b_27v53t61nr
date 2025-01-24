// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "Even in difficult times, he remained __________ to his friends, offering support and encouragement whenever they needed it.",
    chinese_question: "即使在困难时期，他仍然对朋友 __________，在他们需要时提供支持和鼓励。",
    answers: [
        { option: "A", answer: "faithful", chinese_answer: "忠诚的", chinese_romanization: "zhōngchéng de" },
        { option: "B", answer: "fickle", chinese_answer: "善变的", chinese_romanization: "shànbiàn de" },
        { option: "C", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
        { option: "D", answer: "untrustworthy", chinese_answer: "不可信的", chinese_romanization: "bù kěxìn de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'faithful' means loyal, constant, and steadfast." +
        "<br><br>" +
        "(B) 'fickle' means changing frequently, especially as regards one's loyalties or affections." +
        "<br><br>" +
        "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
        "<br><br>" +
        "(D) 'untrustworthy' means not able to be relied on as honest or truthful.",
    chinese_explanation: "(A) '忠诚的' 意味着忠实、始终如一、坚定不移的。" +
        "<br><br>" +
        "(B) '善变的' 意味着频繁变化的，尤其是在忠诚或感情方面的。" +
        "<br><br>" +
        "(C) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。" +
        "<br><br>" +
        "(D) '不可信的' 意味着不能被依赖为诚实或真实的。"
    },
    {
        id: 2,
        question: "Attending the safety training sessions is __________ for all employees to ensure workplace safety.",
        chinese_question: "参加安全培训课程是 __________ 的，以确保工作场所的安全。",
        answers: [
                { option: "A", answer: "optional", chinese_answer: "可选的", chinese_romanization: "kě xuǎn de" },
                { option: "B", answer: "voluntary", chinese_answer: "自愿的", chinese_romanization: "zìyuàn de" },
                { option: "C", answer: "mandatory", chinese_answer: "强制的", chinese_romanization: "qiángzhì de" },
                { option: "D", answer: "suggested", chinese_answer: "建议的", chinese_romanization: "jiànyì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'mandatory' means required by law or rules; compulsory." +
            "<br><br>" +
            "(A) 'optional' means available to be chosen but not obligatory." +
            "<br><br>" +
            "(B) 'voluntary' means done, given, or acting of one's own free will." +
            "<br><br>" +
            "(D) 'suggested' means put forward for consideration.",
        chinese_explanation: "(C) '强制的' 一词意味着法律或规则要求的；强制性的。" +
            "<br><br>" +
            "(A) '可选的' 意味着可以选择但不是强制性的。" +
            "<br><br>" +
            "(B) '自愿的' 意味着出于自愿的。" +
            "<br><br>" +
            "(D) '建议的' 意味着提出供考虑的。"
    },
    {
        id: 3,
        question: "Her __________ analysis of the novel overlooked the deeper themes and underlying messages the author intended to convey.",
        chinese_question: "她对小说的 __________ 分析忽略了作者想要传达的更深层次的主题和潜在信息。",
        answers: [
                { option: "A", answer: "thorough", chinese_answer: "彻底的", chinese_romanization: "chèdǐ de" },
                { option: "B", answer: "profound", chinese_answer: "深刻的", chinese_romanization: "shēnkè de" },
                { option: "C", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" },
                { option: "D", answer: "comprehensive", chinese_answer: "全面的", chinese_romanization: "quánmiàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'superficial' means existing or occurring at or on the surface." +
            "<br><br>" +
            "(A) 'thorough' means complete with regard to every detail; not superficial or partial." +
            "<br><br>" +
            "(B) 'profound' means very great or intense." +
            "<br><br>" +
            "(D) 'comprehensive' means complete; including all or nearly all elements or aspects of something.",
        chinese_explanation: "(C) '表面的' 一词意味着存在或发生在表面上。" +
            "<br><br>" +
            "(A) '彻底的' 意味着关于每个细节的完成；不是表面的或部分的。" +
            "<br><br>" +
            "(B) '深刻的' 意味着非常伟大或强烈的。" +
            "<br><br>" +
            "(D) '全面的' 意味着完整的；包括所有或几乎所有的元素或方面。"
    },
    {
        id: 4,
        question: "Her __________ efforts to complete the project on time were noticed and appreciated by her supervisors.",
        chinese_question: "她 __________ 地努力按时完成项目，得到了主管的认可和赞赏。",
        answers: [
                { option: "A", answer: "lazy", chinese_answer: "懒惰的", chinese_romanization: "lǎnduò de" },
                { option: "B", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
                { option: "C", answer: "assiduous", chinese_answer: "勤勉的", chinese_romanization: "qínmiǎn de" },
                { option: "D", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mò bù guānxīn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'assiduous' means showing great care and perseverance." +
            "<br><br>" +
            "(A) 'lazy' means unwilling to work or use energy." +
            "<br><br>" +
            "(B) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(C) '勤勉的' 一词意味着表现出极大的关心和毅力的。" +
            "<br><br>" +
            "(A) '懒惰的' 意味着不愿意工作或使用精力的。" +
            "<br><br>" +
            "(B) '粗心的' 意味着没有给予足够的注意或考虑以避免伤害或错误的。" +
            "<br><br>" +
            "(D) '漠不关心的' 意味着没有特别的兴趣或同情；不关心的。"
    },
    {
        id: 5,
        question: "The __________ stance of the country's leaders increased tensions and brought the region closer to conflict.",
        chinese_question: "该国领导人的 __________ 立场增加了紧张局势，使该地区更接近冲突。",
        answers: [
                { option: "A", answer: "peaceful", chinese_answer: "和平的", chinese_romanization: "hépíng de" },
                { option: "B", answer: "belligerent", chinese_answer: "好战的", chinese_romanization: "hàozhàn de" },
                { option: "C", answer: "friendly", chinese_answer: "友好的", chinese_romanization: "yǒuhǎo de" },
                { option: "D", answer: "amicable", chinese_answer: "友善的", chinese_romanization: "yǒushàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'belligerent' means hostile and aggressive." +
            "<br><br>" +
            "(A) 'peaceful' means free from disturbance; tranquil." +
            "<br><br>" +
            "(C) 'friendly' means kind and pleasant." +
            "<br><br>" +
            "(D) 'amicable' means characterized by friendliness and absence of discord.",
        chinese_explanation: "(B) '好战的' 一词意味着敌对和攻击性的。" +
            "<br><br>" +
            "(A) '和平的' 意味着没有干扰；宁静的。" +
            "<br><br>" +
            "(C) '友好的' 意味着友好和愉快的。" +
            "<br><br>" +
            "(D) '友善的' 意味着以友好和没有不和的特点。"
    },
    {
        id: 6,
    question: "The __________ debate among the members of the club made it difficult to reach a decision.",
    chinese_question: "俱乐部成员之间的__________辩论使得很难达成决定。",
    answers: [
        { option: "A", answer: "quiet", chinese_answer: "安静的", chinese_romanization: "ān jìng de" },
        { option: "B", answer: "calm", chinese_answer: "平静的", chinese_romanization: "píng jìng de" },
        { option: "C", answer: "rambunctious", chinese_answer: "喧闹的", chinese_romanization: "xuān nào de" },
        { option: "D", answer: "serene", chinese_answer: "宁静的", chinese_romanization: "níng jìng de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'rambunctious' means uncontrollably exuberant; boisterous. Figuratively, it can mean being very lively and chaotic." +
        "<br><br>" +
        "(A) 'quiet' means making little or no noise." +
        "<br><br>" +
        "(B) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
        "<br><br>" +
        "(D) 'serene' means calm, peaceful, and untroubled; tranquil.",
    chinese_explanation: "(C) '喧闹的'一词意味着无法控制的兴高采烈；吵闹的。比喻地，它可以表示非常活跃和混乱的。" +
        "<br><br>" +
        "(A) '安静的' 意味着几乎没有声音。" +
        "<br><br>" +
        "(B) '平静的' 意味着不表现或感到紧张、愤怒或其他强烈情绪的。" +
        "<br><br>" +
        "(D) '宁静的' 意味着平静、安详、不受干扰的；宁静的。"
    },
    {
        id: 7,
        question: "In an attempt to win the contract, the salesman's __________ flattery was almost embarrassing to witness.",
        chinese_question: "为了赢得合同，推销员 __________ 的奉承几乎令人难堪。",
        answers: [
            { option: "A", answer: "obsequious", chinese_answer: "谄媚", chinese_romanization: "chǎnmèi" },
            { option: "B", answer: "forthright", chinese_answer: "直率", chinese_romanization: "zhíshuài" },
            { option: "C", answer: "apathetic", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "D", answer: "candid", chinese_answer: "坦率", chinese_romanization: "tǎnshuài" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'obsequious' means excessively eager to please or obey." +
            "<br><br>" +
            "(B) 'forthright' means direct and outspoken." +
            "<br><br>" +
            "(C) 'apathetic' means showing no interest or concern." +
            "<br><br>" +
            "(D) 'candid' means truthful and straightforward.",
        chinese_explanation: "(A) '谄媚' 意味着过度渴望取悦或服从。" +
            "<br><br>" +
            "(B) '直率' 意味着直接和坦率。" +
            "<br><br>" +
            "(C) '冷漠' 意味着表现出无兴趣或关心。" +
            "<br><br>" +
            "(D) '坦率' 意味着真实和坦率。"
    },
    {
        id: 8,
        question: "The company's __________ behavior led to a loss of customers and a damaged reputation.",
        chinese_question: "该公司的 __________ 行为导致了客户流失和声誉受损。",
        answers: [
            { option: "A", answer: "honorable", chinese_answer: "光荣的", chinese_romanization: "guāngróng de" },
            { option: "B", answer: "perfidious", chinese_answer: "背信弃义的", chinese_romanization: "bèixìn qìyì de" },
            { option: "C", answer: "ethical", chinese_answer: "道德的", chinese_romanization: "dàodé de" },
            { option: "D", answer: "principled", chinese_answer: "有原则的", chinese_romanization: "yǒu yuánzé de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'perfidious' means deceitful and untrustworthy." +
            "<br><br>" +
            "(A) 'honorable' means bringing or worthy of honor." +
            "<br><br>" +
            "(C) 'ethical' means relating to moral principles or the branch of knowledge dealing with these." +
            "<br><br>" +
            "(D) 'principled' means acting in accordance with morality and showing recognition of right and wrong.",
        chinese_explanation: "(B) '背信弃义的' 意味着欺骗和不值得信任的。" +
            "<br><br>" +
            "(A) '光荣的' 意味着带来或值得荣誉的。" +
            "<br><br>" +
            "(C) '道德的' 意味着与道德原则或处理这些知识的分支相关的。" +
            "<br><br>" +
            "(D) '有原则的' 意味着按照道德行事并表现出对是非的认识的。"
    },
    {
        id: 9,
        question: "Her __________ influence on the team led to a toxic work environment, where negativity and distrust flourished.",
        chinese_question: "她对团队的 __________ 影响导致了一个有害的工作环境，负面情绪和不信任蔓延。",
        answers: [
            { option: "A", answer: "pernicious", chinese_answer: "有害的", chinese_romanization: "yǒuhài de" },
            { option: "B", answer: "positive", chinese_answer: "积极的", chinese_romanization: "jījí de" },
            { option: "C", answer: "uplifting", chinese_answer: "振奋的", chinese_romanization: "zhènfèn de" },
            { option: "D", answer: "supportive", chinese_answer: "支持的", chinese_romanization: "zhīchí de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'pernicious' means having a harmful effect, especially in a gradual or subtle way." +
            "<br><br>" +
            "(B) 'positive' means consisting in or characterized by the presence or possession of features or qualities rather than their absence." +
            "<br><br>" +
            "(C) 'uplifting' means morally or spiritually elevating; inspiring happiness or hope." +
            "<br><br>" +
            "(D) 'supportive' means providing encouragement or emotional help.",
        chinese_explanation: "(A) '有害的' 意味着有害的影响，尤其是逐渐或隐蔽地。" +
            "<br><br>" +
            "'积极的' 意味着由存在或拥有特征或品质而不是它们的缺乏所构成的或具有特点的。" +
            "<br><br>" +
            "'振奋的' 意味着在道德上或精神上提升；激发幸福或希望的。" +
            "<br><br>" +
            "'支持的' 意味着提供鼓励或情感上的帮助的。"
    },
    {
        id: 10,
    question: "The politician's __________ rise to power surprised everyone.",
    chinese_question: "这位政治家 __________ 的崛起让所有人都感到惊讶。",
    answers: [
        { option: "A", answer: "gradual", chinese_answer: "逐渐的", chinese_romanization: "zhújiàn de" },
        { option: "B", answer: "swift", chinese_answer: "快速的", chinese_romanization: "kuàisù de" },
        { option: "C", answer: "delayed", chinese_answer: "推迟的", chinese_romanization: "tuīchí de" },
        { option: "D", answer: "resistant", chinese_answer: "抵抗的", chinese_romanization: "dǐkàng de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'swift' means happening quickly or promptly." +
        "<br><br>" +
        "(A) 'gradual' means taking place or progressing slowly or by degrees." +
        "<br><br>" +
        "(C) 'delayed' means postponed or put off to a later time." +
        "<br><br>" +
        "(D) 'resistant' means offering resistance to something or someone.",
    chinese_explanation: "(B) “快速的” 意味着迅速或及时发生。" +
        "<br><br>" +
        "(A) '逐渐的' 意味着缓慢地或逐渐地发生或进展。" +
        "<br><br>" +
        "(C) '推迟的' 意味着推迟到以后的时间。" +
        "<br><br>" +
        "(D) '抵抗的' 意味着对某事或某人提供抵抗。"
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
