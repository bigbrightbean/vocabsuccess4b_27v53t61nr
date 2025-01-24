// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The company's __________ approach to customer service, focusing on personalized attention and high standards, set it apart from its competitors.",
        chinese_question: "公司 __________ 的客户服务方法，注重个性化关注和高标准，使其与竞争对手区分开来。",
        answers: [
            { option: "A", answer: "refined", chinese_answer: "精致的", chinese_romanization: "jīngzhì de" },
            { option: "B", answer: "basic", chinese_answer: "基本的", chinese_romanization: "jīběn de" },
            { option: "C", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "D", answer: "rudimentary", chinese_answer: "初步的", chinese_romanization: "chūbù de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'refined' means elegant and cultured in appearance, manner, or taste; developed or improved so as to be precise or subtle." +
            "<br><br>" +
            "(B) 'basic' means forming an essential foundation or starting point; fundamental." +
            "<br><br>" +
            "(C) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(D) 'rudimentary' means involving or limited to basic principles.",
        chinese_explanation: "(A) '精致的' 意味着在外观、举止或品味上优雅和有教养的；发展或改进以使之精确或微妙。" +
            "<br><br>" +
            "(B) '基本的' 意味着形成一个基本的基础或起点的；基本的。" +
            "<br><br>" +
            "(C) '简单的' 意味着容易理解或完成的；没有困难的。" +
            "<br><br>" +
            "(D) '初步的' 意味着涉及或限于基本原则的。"
    },
    {
        id: 2,
    question: "His __________ optimism, even in the face of numerous setbacks, inspired everyone around him to stay hopeful.",
    chinese_question: "即使面对众多挫折，他的 __________ 乐观精神仍然激励着周围的每一个人保持希望。",
    answers: [
        { option: "A", answer: "perpetual", chinese_answer: "永久的", chinese_romanization: "yǒngjiǔ de" },
        { option: "B", answer: "fleeting", chinese_answer: "短暂的", chinese_romanization: "duǎnzàn de" },
        { option: "C", answer: "occasional", chinese_answer: "偶尔的", chinese_romanization: "ǒu'ěr de" },
        { option: "D", answer: "rare", chinese_answer: "罕见的", chinese_romanization: "hǎnjiàn de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'perpetual' means never ending or changing; continuous." +
        "<br><br>" +
        "(B) 'fleeting' means lasting for a very short time." +
        "<br><br>" +
        "(C) 'occasional' means occurring, appearing, or done infrequently and irregularly." +
        "<br><br>" +
        "(D) 'rare' means not occurring very often.",
    chinese_explanation: "(A) '永久的' 意味着永不结束或改变的；持续的。" +
        "<br><br>" +
        "(B) '短暂的' 意味着持续时间非常短的。" +
        "<br><br>" +
        "(C) '偶尔的' 意味着不频繁和不规律地发生、出现或完成的。" +
        "<br><br>" +
        "(D) '罕见的' 意味着不经常发生的。"
    },
    {
        id: 3,
        question: "His __________ work habits led to numerous mistakes and a loss of trust from his colleagues.",
        chinese_question: "他 __________ 的工作习惯导致了许多错误，并失去了同事们的信任。",
        answers: [
            { option: "A", answer: "meticulous", chinese_answer: "一丝不苟的", chinese_romanization: "yīsī bùgǒu de" },
            { option: "B", answer: "diligent", chinese_answer: "勤勉的", chinese_romanization: "qínmiǎn de" },
            { option: "C", answer: "slovenly", chinese_answer: "懒散的", chinese_romanization: "lǎnsǎn de" },
            { option: "D", answer: "precise", chinese_answer: "精确的", chinese_romanization: "jīngquè de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'slovenly' means careless, excessively casual." +
            "<br><br>" +
            "(A) 'meticulous' means showing great attention to detail; very careful and precise." +
            "<br><br>" +
            "(B) 'diligent' means having or showing care and conscientiousness in one's work or duties." +
            "<br><br>" +
            "(D) 'precise' means marked by exactness and accuracy of expression or detail.",
        chinese_explanation: "(C) '懒散的' 意味着粗心的，过于随意的。" +
            "<br><br>" +
            "(A) '一丝不苟的' 意味着非常注意细节的；非常小心和精确的。" +
            "<br><br>" +
            "(B) '勤勉的' 意味着在工作或职责上表现出关心和认真。" +
            "<br><br>" +
            "(D) '精确的' 意味着表达或细节的准确性。"
    },
    {
        id: 4,
    question: "His __________ responsibilities prevented him from taking on additional projects.",
    chinese_question: "他 __________ 的责任使他无法承担额外的项目。",
    answers: [
        { option: "A", answer: "present", chinese_answer: "目前", chinese_romanization: "mùqián" },
        { option: "B", answer: "former", chinese_answer: "以前", chinese_romanization: "yǐqián" },
        { option: "C", answer: "potential", chinese_answer: "潜在", chinese_romanization: "qiánzài" },
        { option: "D", answer: "negligible", chinese_answer: "微不足道", chinese_romanization: "wēi bù zú dào" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'present' means existing or occurring now." +
        "<br><br>" +
        "(B) 'former' means having previously been a particular thing." +
        "<br><br>" +
        "(C) 'potential' means having or showing the capacity to develop into something in the future." +
        "<br><br>" +
        "(D) 'negligible' means so small or unimportant as to be not worth considering.",
    chinese_explanation: "(A) '目前' 意味着现在存在或发生。" +
        "<br><br>" +
        "(B) '以前' 意味着以前是某种特定事物。" +
        "<br><br>" +
        "(C) '潜在' 意味着具有或表现出将来发展为某物的能力。" +
        "<br><br>" +
        "(D) '微不足道' 意味着如此小或不重要，以至于不值得考虑。"
    },
    {
        id: 5,
        question: "His __________ attitude made it difficult for him to consider anyone else's needs or opinions.",
        chinese_question: "他的 __________ 态度使他难以考虑他人的需求或意见。",
        answers: [
                { option: "A", answer: "altruistic", chinese_answer: "利他的", chinese_romanization: "lìtā de" },
                { option: "B", answer: "selfless", chinese_answer: "无私的", chinese_romanization: "wúsī de" },
                { option: "C", answer: "egocentric", chinese_answer: "自我中心的", chinese_romanization: "zìwǒ zhōngxīn de" },
                { option: "D", answer: "generous", chinese_answer: "慷慨的", chinese_romanization: "kāngkǎi de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'egocentric' means thinking only of oneself, without regard for the feelings or desires of others; self-centered." +
            "<br><br>" +
            "(A) 'altruistic' means showing a disinterested and selfless concern for the well-being of others; unselfish." +
            "<br><br>" +
            "(B) 'selfless' means concerned more with the needs and wishes of others than with one's own." +
            "<br><br>" +
            "(D) 'generous' means showing a readiness to give more of something, as money or time, than is strictly necessary or expected.",
        chinese_explanation: "(C) '自我中心的' 一词意味着只考虑自己，不顾他人的感受或愿望；以自我为中心的。" +
            "<br><br>" +
            "(A) '利他的' 意味着表现出对他人幸福的无私关心；无私的。" +
            "<br><br>" +
            "(B) '无私的' 意味着更多地关注他人的需求和愿望，而不是自己的需求和愿望。" +
            "<br><br>" +
            "(D) '慷慨的' 意味着表现出准备给予更多的东西，如金钱或时间，比严格必要或预期的更多。"
    },
    {
        id: 6,
    question: "His __________ reputation as a philanthropist was well-deserved, thanks to his many generous contributions to various charitable causes.",
    chinese_question: "他作为慈善家的 __________ 声誉是当之无愧的，因为他对各种慈善事业做出了许多慷慨的贡献。",
    answers: [
        { option: "A", answer: "illustrious", chinese_answer: "杰出的", chinese_romanization: "jiéchū de" },
        { option: "B", answer: "insignificant", chinese_answer: "无足轻重的", chinese_romanization: "wúzúqīngzhòng de" },
        { option: "C", answer: "humble", chinese_answer: "谦逊的", chinese_romanization: "qiānxùn de" },
        { option: "D", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'illustrious' means well known, respected, and admired for past achievements." +
        "<br><br>" +
        "(B) 'insignificant' means too small or unimportant to be worth consideration." +
        "<br><br>" +
        "(C) 'humble' means having or showing a modest or low estimate of one's own importance." +
        "<br><br>" +
        "(D) 'ordinary' means with no special or distinctive features; normal.",
    chinese_explanation: "(A) '杰出的' 意味着因过去的成就而著名、受人尊敬和钦佩的。" +
        "<br><br>" +
        "(B) '无足轻重的' 意味着太小或不重要以至于不值得考虑的。" +
        "<br><br>" +
        "(C) '谦逊的' 意味着对自己的重要性有或表现出谦虚或低估的态度。" +
        "<br><br>" +
        "(D) '普通的' 意味着没有特殊或独特特征的；正常的。"
    },
    {
        id: 7,
    question: "The __________ howl of the wolf echoed through the forest, a sound that made the night feel even more isolated.",
    chinese_question: "狼的 __________ 嚎叫在森林中回荡，这声音让夜晚显得更加孤寂。",
    answers: [
        { option: "A", answer: "lonesome", chinese_answer: "孤独的", chinese_romanization: "gūdú de" },
        { option: "B", answer: "cheerful", chinese_answer: "快乐的", chinese_romanization: "kuàilè de" },
        { option: "C", answer: "busy", chinese_answer: "忙碌的", chinese_romanization: "mánglù de" },
        { option: "D", answer: "lively", chinese_answer: "活泼的", chinese_romanization: "huópō de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'lonesome' means sad because one has no friends or company." +
        "<br><br>" +
        "(B) 'cheerful' means noticeably happy and optimistic." +
        "<br><br>" +
        "(C) 'busy' means having a great deal to do." +
        "<br><br>" +
        "(D) 'lively' means full of life and energy.",
    chinese_explanation: "(A) '孤独的' 意味着因为没有朋友或陪伴而感到悲伤的。" +
        "<br><br>" +
        "(B) '快乐的' 意味着显著地快乐和乐观的。" +
        "<br><br>" +
        "(C) '忙碌的' 意味着有很多事情要做的。" +
        "<br><br>" +
        "(D) '活泼的' 意味着充满活力和能量的。"
    },
    {
        id: 8,
    question: "His __________ criticism of the company's policies made him both respected and feared by his colleagues.",
    chinese_question: "他对公司政策的 __________ 批评让他既受人尊敬又让同事感到害怕。",
    answers: [
        { option: "A", answer: "outspoken", chinese_answer: "直言不讳的", chinese_romanization: "zhí yán bù huì de" },
        { option: "B", answer: "diplomatic", chinese_answer: "圆滑的", chinese_romanization: "yuánhuá de" },
        { option: "C", answer: "tactful", chinese_answer: "机智的", chinese_romanization: "jīzhì de" },
        { option: "D", answer: "discreet", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'outspoken' means frank in stating one's opinions, especially if they are critical or controversial." +
        "<br><br>" +
        "(B) 'diplomatic' means having or showing an ability to deal with people in a sensitive and effective way." +
        "<br><br>" +
        "(C) 'tactful' means having or showing sensitivity in dealing with others or with difficult issues." +
        "<br><br>" +
        "(D) 'discreet' means careful and prudent in one's speech or actions, especially in order to keep something confidential or to avoid embarrassment.",
    chinese_explanation: "(A) '直言不讳的' 意味着坦率地陈述自己的意见，尤其是批评性的或有争议的意见。" +
        "<br><br>" +
        "(B) '圆滑的' 意味着有或表现出以敏感和有效的方式处理人际关系的能力。" +
        "<br><br>" +
        "(C) '机智的' 意味着在处理他人或困难问题时表现出敏感性。" +
        "<br><br>" +
        "(D) '谨慎的' 意味着在言语或行动上小心谨慎，尤其是为了保密或避免尴尬。"
    },
    {
        id: 9,
        question: "The new policy is __________ because it fails to address the core issues affecting the company.",
        chinese_question: "新政策是 __________ 的，因为它未能解决影响公司的核心问题。",
        answers: [
            { option: "A", answer: "effective", chinese_answer: "有效的", chinese_romanization: "yǒuxiào de" },
            { option: "B", answer: "problematic", chinese_answer: "有问题的", chinese_romanization: "yǒu wèntí de" },
            { option: "C", answer: "beneficial", chinese_answer: "有益的", chinese_romanization: "yǒuyì de" },
            { option: "D", answer: "helpful", chinese_answer: "有帮助的", chinese_romanization: "yǒu bāngzhù de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'problematic' means presenting a problem or difficulty." +
            "<br><br>" +
            "(A) 'effective' means successful in producing a desired or intended result." +
            "<br><br>" +
            "(C) 'beneficial' means resulting in good; favorable or advantageous." +
            "<br><br>" +
            "(D) 'helpful' means giving or ready to give help.",
        chinese_explanation: "(B) '有问题的' 意味着提出一个问题或困难。" +
            "<br><br>" +
            "(A) '有效的' 意味着成功地产生预期或意图的结果。" +
            "<br><br>" +
            "(C) '有益的' 意味着导致好结果的；有利的或有益的。" +
            "<br><br>" +
            "(D) '有帮助的' 意味着给予或准备给予帮助的。"
    },
    {
        id: 10,
        question: "Their __________ personalities made it difficult for them to work together on the project, leading to frequent disagreements.",
        chinese_question: "他们 __________ 的性格使得他们难以在项目上合作，导致频繁的争执。",
        answers: [
                { option: "A", answer: "compatible", chinese_answer: "兼容的", chinese_romanization: "jiānróng de" },
                { option: "B", answer: "harmonious", chinese_answer: "和谐的", chinese_romanization: "héxié de" },
                { option: "C", answer: "incompatible", chinese_answer: "不兼容的", chinese_romanization: "bù jiānróng de" },
                { option: "D", answer: "identical", chinese_answer: "相同的", chinese_romanization: "xiāngtóng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'incompatible' means (of two things) so opposed in character as to be incapable of existing together." +
            "<br><br>" +
            "(A) 'compatible' means (of two things) able to exist or occur together without conflict." +
            "<br><br>" +
            "(B) 'harmonious' means forming a pleasing or consistent whole." +
            "<br><br>" +
            "(D) 'identical' means similar in every detail; exactly alike.",
        chinese_explanation: "(C) '不兼容的' 一词意味着（两件事物）性格上对立到无法共存的。" +
            "<br><br>" +
            "(A) '兼容的' 意味着（两件事物）能够在不冲突的情况下共存或发生。" +
            "<br><br>" +
            "(B) '和谐的' 意味着形成一个令人愉悦或一致的整体。" +
            "<br><br>" +
            "(D) '相同的' 意味着在每个细节上相似；完全一样的。"
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
