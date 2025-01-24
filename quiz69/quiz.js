// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ of his career were marked by periods of great success and devastating failures.",
        chinese_question: "他的职业生涯的 __________ 表现为成功和失败交替出现的时期。",
        answers: [
                { option: "A", answer: "vicissitudes", chinese_answer: "变迁", chinese_romanization: "biànqiān" },
                { option: "B", answer: "certainties", chinese_answer: "确定性", chinese_romanization: "quèdìng xìng" },
                { option: "C", answer: "continuities", chinese_answer: "连续性", chinese_romanization: "liánxù xìng" },
                { option: "D", answer: "consistencies", chinese_answer: "一致性", chinese_romanization: "yīzhì xìng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'vicissitudes' figuratively means the changes or variations experienced in life, typically involving both ups and downs." +
            "<br><br>" +
            "(B) 'certainties' means things that are known or proved to be true." +
            "<br><br>" +
            "(C) 'continuities' means the unbroken and consistent existence or operation of something over time." +
            "<br><br>" +
            "(D) 'consistencies' means the quality of always behaving or performing in a similar way.",
        chinese_explanation: "(A) '变迁' 在此语境下意指生活中经历的变化或变动，通常涉及起伏。" +
            "<br><br>" +
            "(B) '确定性' 意味着已知或被证明为真的事情。" +
            "<br><br>" +
            "(C) '连续性' 意味着某物在一段时间内不间断和一致的存在或操作。" +
            "<br><br>" +
            "(D) '一致性' 意味着始终以类似方式行事或表现的质量。"
    },
    {
        id: 2,
        question: "During the sale, the store became a __________ as shoppers rushed to grab the best deals, pushing and shoving each other.",
        chinese_question: "在促销期间，商店变成了 __________，购物者争相抢购最优惠的商品，互相推搡。",
        answers: [
                { option: "A", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" },
                { option: "B", answer: "melee", chinese_answer: "混战", chinese_romanization: "hùnzhàn" },
                { option: "C", answer: "peace", chinese_answer: "和平", chinese_romanization: "hépíng" },
                { option: "D", answer: "serenity", chinese_answer: "宁静", chinese_romanization: "níngjìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'melee' means a confused fight, skirmish, or scuffle." +
            "<br><br>" +
            "(A) 'harmony' means the combination of simultaneously sounded musical notes to produce chords and chord progressions having a pleasing effect." +
            "<br><br>" +
            "(C) 'peace' means freedom from disturbance; tranquility." +
            "<br><br>" +
            "(D) 'serenity' means the state of being calm, peaceful, and untroubled.",
        chinese_explanation: "(B) '混战'一词意味着混乱的打斗、小冲突或争吵。" +
            "<br><br>" +
            "(A) '和谐' 意味着同时发出的乐音组合，产生和弦和和弦进行，具有令人愉悦的效果。" +
            "<br><br>" +
            "(C) '和平' 意味着没有干扰的自由；宁静。" +
            "<br><br>" +
            "(D) '宁静' 意味着平静、和平和无忧无虑的状态。"
    },
    {
        id: 3,
        question: "The rise of the young __________ disrupted the long-standing balance of power, forcing the older generation to adapt to new realities.",
        chinese_question: "年轻的 __________ 的崛起打破了长期存在的权力平衡，迫使老一辈适应新的现实。",
        answers: [
                { option: "A", answer: "incumbent", chinese_answer: "在职者", chinese_romanization: "zàizhí zhě" },
                { option: "B", answer: "upstart", chinese_answer: "暴发户", chinese_romanization: "bàofāhù" },
                { option: "C", answer: "veteran", chinese_answer: "老手", chinese_romanization: "lǎoshǒu" },
                { option: "D", answer: "expert", chinese_answer: "专家", chinese_romanization: "zhuānjiā" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'upstart' means a person who has risen suddenly to wealth or high position, especially one who behaves arrogantly." +
            "<br><br>" +
            "(A) 'incumbent' means the holder of an office or post." +
            "<br><br>" +
            "(C) 'veteran' means a person who has had long experience in a particular field." +
            "<br><br>" +
            "(D) 'expert' means a person who is very knowledgeable about or skillful in a particular area.",
        chinese_explanation: "(B) '暴发户'一词指突然变得富有或高职位的人，尤其是那些行为傲慢的人。" +
            "<br><br>" +
            "(A) '在职者' 意味着担任某个职位或职位的人。" +
            "<br><br>" +
            "(C) '老手' 意味着在某个领域有长时间经验的人。" +
            "<br><br>" +
            "(D) '专家' 意味着在某个领域非常有知识或技能的人。"
    },
    {
        id: 4,
    question: "The corporation's expansion was like a __________, crushing smaller businesses in its path.",
    chinese_question: "这家公司的扩张就像一个 __________，碾压了沿途的小企业。",
    answers: [
        { option: "A", answer: "breeze", chinese_answer: "微风", chinese_romanization: "wéifēng" },
        { option: "B", answer: "juggernaut", chinese_answer: "强大力量", chinese_romanization: "qiángdà lìliàng" },
        { option: "C", answer: "whisper", chinese_answer: "耳语", chinese_romanization: "ěryǔ" },
        { option: "D", answer: "drizzle", chinese_answer: "毛毛雨", chinese_romanization: "máomaoyǔ" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'juggernaut' figuratively means a huge, powerful, and overwhelming force or institution." +
        "<br><br>" +
        "(A) 'breeze' means a gentle wind." +
        "<br><br>" +
        "(C) 'whisper' means speaking very softly using one's breath without one's vocal cords, especially for the sake of privacy." +
        "<br><br>" +
        "(D) 'drizzle' means light rain falling in very fine drops.",
    chinese_explanation: "(B) '强大力量' 在此语境下意指一个巨大、强大和压倒性的力量或机构。" +
        "<br><br>" +
        "(A) '微风' 意味着轻柔的风。" +
        "<br><br>" +
        "(C) '耳语' 意味着用呼吸而不是声带非常轻声地说话，尤其是为了隐私。" +
        "<br><br>" +
        "(D) '毛毛雨' 意味着非常细小的雨滴。"
    },
    {
        id: 5,
    question: "The peaceful countryside filled them with a pleasant __________, a welcome change from their hectic lives.",
    chinese_question: "宁静的乡村使他们感到一种愉快的 __________ ，这对他们忙碌的生活来说是一个受欢迎的变化。",
    answers: [
        { option: "A", answer: "languor", chinese_answer: "倦怠", chinese_romanization: "juàndài" },
        { option: "B", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" },
        { option: "C", answer: "energy", chinese_answer: "能量", chinese_romanization: "néngliàng" },
        { option: "D", answer: "alertness", chinese_answer: "警觉", chinese_romanization: "jǐngjué" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'languor' means a state of tiredness or inertia, used figuratively here." + 
        "<br><br>" + 
        "(B) 'excitement' means a feeling of great enthusiasm and eagerness." + 
        "<br><br>" + 
        "(C) 'energy' means the strength and vitality required for sustained physical or mental activity." + 
        "<br><br>" + 
        "(D) 'alertness' means the quality of being quick to notice things.",
    chinese_explanation: "(A) '倦怠' 意味着疲倦或无力的状态，这里是比喻用法。" + 
        "<br><br>" + 
        "(B) '兴奋' 意味着极大的热情和渴望。" + 
        "<br><br>" + 
        "(C) '能量' 意味着持续进行体力或脑力活动所需的力量和活力。" + 
        "<br><br>" + 
        "(D) '警觉' 意味着迅速注意事物的品质。"
}
    ,
    {
        id: 6,
        question: "His __________ in submitting falsified reports led to his immediate dismissal.",
        chinese_question: "他提交虚假报告的 __________ 导致了他的立即解雇。",
        answers: [
                { option: "A", answer: "integrity", chinese_answer: "正直", chinese_romanization: "zhèngzhí" },
                { option: "B", answer: "impropriety", chinese_answer: "不当行为", chinese_romanization: "bùdàng xíngwéi" },
                { option: "C", answer: "transparency", chinese_answer: "透明", chinese_romanization: "tòumíng" },
                { option: "D", answer: "ethics", chinese_answer: "伦理", chinese_romanization: "lúnlǐ" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'impropriety' figuratively means inappropriate conduct or behavior." +
            "<br><br>" +
            "(A) 'integrity' means the quality of being honest and having strong moral principles." +
            "<br><br>" +
            "(C) 'transparency' means the condition of being transparent." +
            "<br><br>" +
            "(D) 'ethics' means moral principles that govern a person's behavior or the conducting of an activity.",
        chinese_explanation: "(B) '不当行为' 在此语境下意指不恰当的举止或行为。" +
            "<br><br>" +
            "(A) '正直' 意味着诚实和有强烈道德原则的品质。" +
            "<br><br>" +
            "(C) '透明' 意味着透明的条件。" +
            "<br><br>" +
            "(D) '伦理' 意味着规范个人行为或活动进行的道德原则。"
    },
    {
        id: 7,
        question: "Despite the pressures to cut corners, he maintained his __________ and ensured all business practices were above board.",
        chinese_question: "尽管有偷工减料的压力，他仍然保持 __________，确保所有商业行为都是光明正大的。",
        answers: [
                { option: "A", answer: "corruption", chinese_answer: "腐败", chinese_romanization: "fǔbài" },
                { option: "B", answer: "probity", chinese_answer: "正直", chinese_romanization: "zhèngzhí" },
                { option: "C", answer: "deception", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" },
                { option: "D", answer: "greed", chinese_answer: "贪婪", chinese_romanization: "tānlán" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'probity' means the quality of having strong moral principles; honesty and decency." +
            "<br><br>" +
            "(A) 'corruption' means dishonest or fraudulent conduct by those in power, typically involving bribery." +
            "<br><br>" +
            "(C) 'deception' means the action of deceiving someone." +
            "<br><br>" +
            "(D) 'greed' means intense and selfish desire for something, especially wealth, power, or food.",
        chinese_explanation: "(B) '正直'一词意味着具有强烈道德原则的品质；诚实和正派。" +
            "<br><br>" +
            "(A) '腐败' 意味着掌权者的不诚实或欺诈行为，通常涉及贿赂。" +
            "<br><br>" +
            "(C) '欺骗' 意味着欺骗某人的行为。" +
            "<br><br>" +
            "(D) '贪婪' 意味着对某事，尤其是财富、权力或食物的强烈和自私的欲望。"
    },
    {
        id: 8,
        question: "The new policy received official __________ from the board, allowing it to be implemented immediately.",
        chinese_question: "新政策获得了董事会的正式 __________，允许其立即实施。",
        answers: [
            { option: "A", answer: "sanction", chinese_answer: "批准", chinese_romanization: "pīzhǔn" },
            { option: "B", answer: "criticism", chinese_answer: "批评", chinese_romanization: "pīpíng" },
            { option: "C", answer: "rejection", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "D", answer: "oversight", chinese_answer: "监督", chinese_romanization: "jiāndū" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'sanction' means official permission or approval for an action." +
            "<br><br>" +
            "(B) 'criticism' means the expression of disapproval of someone or something based on perceived faults or mistakes." +
            "<br><br>" +
            "(C) 'rejection' means the dismissing or refusing of a proposal, idea, etc." +
            "<br><br>" +
            "(D) 'oversight' means an unintentional failure to notice or do something.",
        chinese_explanation: "(A) '批准' 意味着对某一行动的正式许可或批准。" +
            "<br><br>" +
            "(B) '批评' 意味着基于被认为的缺点或错误对某人或某事的反对。" +
            "<br><br>" +
            "(C) '拒绝' 意味着对提议、想法等的驳回或拒绝。" +
            "<br><br>" +
            "(D) '监督' 意味着未能注意到或做某事的无意之失。"
    },
    {
        id: 9,
        question: "During the family reunion, his cousin cast __________ on his success, implying he had achieved it through unethical means.",
        chinese_question: "在家庭聚会上，他的堂兄对他的成功进行了 __________，暗示他是通过不道德的手段取得的。",
        answers: [
                { option: "A", answer: "encouragement", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
                { option: "B", answer: "aspersions", chinese_answer: "诽谤", chinese_romanization: "fěibàng" },
                { option: "C", answer: "celebrations", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
                { option: "D", answer: "congratulations", chinese_answer: "祝贺", chinese_romanization: "zhùhè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'aspersions' means an attack on the reputation or integrity of someone or something." +
            "<br><br>" +
            "(A) 'encouragement' means the action of giving someone support, confidence, or hope." +
            "<br><br>" +
            "(C) 'celebrations' means the action of marking one's pleasure at an important event or occasion by engaging in enjoyable, typically social, activity." +
            "<br><br>" +
            "(D) 'congratulations' means words expressing praise for an achievement or good wishes on a special occasion.",
        chinese_explanation: "(B) '诽谤'一词意味着对某人或某事的名誉或诚信的攻击。" +
            "<br><br>" +
            "(A) '鼓励' 意味着给予某人支持、信心或希望的行为。" +
            "<br><br>" +
            "(C) '庆祝' 意味着通过从事愉快的、通常是社交活动来标志某个重要事件或场合的行动。" +
            "<br><br>" +
            "(D) '祝贺' 意味着表达对成就的赞美或在特殊场合的良好祝愿。"
    },
    {
        id: 10,
        question: "His __________ became apparent when he started taking items from work without permission, despite having no real need for them.",
        chinese_question: "当他开始未经允许从工作中拿东西时，他的 __________ 变得明显，尽管他并不真正需要这些东西。",
        answers: [
            { option: "A", answer: "kleptomania", chinese_answer: "盗窃癖", chinese_romanization: "dàoqiè pǐ" },
            { option: "B", answer: "generosity", chinese_answer: "慷慨", chinese_romanization: "kāngkǎi" },
            { option: "C", answer: "transparency", chinese_answer: "透明", chinese_romanization: "tòumíng" },
            { option: "D", answer: "integrity", chinese_answer: "正直", chinese_romanization: "zhèngzhí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'kleptomania' figuratively means a recurrent urge to steal, typically without regard for need or profit." +
            "<br><br>" +
            "(B) 'generosity' means the quality of being kind and generous." +
            "<br><br>" +
            "(C) 'transparency' means the quality of being done in an open way without secrets." +
            "<br><br>" +
            "(D) 'integrity' means the quality of being honest and having strong moral principles.",
        chinese_explanation: "(A) '盗窃癖' 在此语境下比喻反复出现的偷窃冲动，通常不考虑需求或利润。" +
            "<br><br>" +
            "(B) '慷慨' 意味着仁慈和慷慨的品质。" +
            "<br><br>" +
            "(C) '透明' 意味着以开放的方式进行，没有秘密。" +
            "<br><br>" +
            "(D) '正直' 意味着诚实和具有强烈道德原则的品质。"
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
