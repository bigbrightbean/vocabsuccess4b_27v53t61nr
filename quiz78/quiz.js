// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The economic crisis caused the value of the currency to __________ rapidly.",
    chinese_question: "经济危机导致货币价值迅速 __________ 。",
    answers: [
        { option: "A", answer: "plunge", chinese_answer: "暴跌", chinese_romanization: "bàodiē" },
        { option: "B", answer: "stabilize", chinese_answer: "稳定", chinese_romanization: "wěndìng" },
        { option: "C", answer: "inflate", chinese_answer: "膨胀", chinese_romanization: "péngzhàng" },
        { option: "D", answer: "rise", chinese_answer: "上升", chinese_romanization: "shàngshēng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'plunge' means to decrease suddenly and significantly." + 
        "<br><br>" + 
        "(B) 'stabilize' means to become or make something more steady and unchanging." + 
        "<br><br>" + 
        "(C) 'inflate' means to increase (something) by filling it with air or gas." + 
        "<br><br>" + 
        "(D) 'rise' means to move upward.",
    chinese_explanation: "(A) '暴跌' 意味着突然和显著地减少。" + 
        "<br><br>" + 
        "(B) '稳定' 意味着变得或使某物更加稳定和不变。" + 
        "<br><br>" + 
        "(C) '膨胀' 意味着通过充气或充气增加（某物）。" + 
        "<br><br>" + 
        "(D) '上升' 意味着向上移动。"
    },
    {
        id: 2,
    question: "The senator was criticized for his __________ in accepting gifts from lobbyists.",
    chinese_question: "这位参议员因接受游说者的礼物而受到批评，认为这是 __________。",
    answers: [
        { option: "A", answer: "honesty", chinese_answer: "诚实", chinese_romanization: "chéngshí" },
        { option: "B", answer: "impropriety", chinese_answer: "不当行为", chinese_romanization: "bùdàng xíngwéi" },
        { option: "C", answer: "integrity", chinese_answer: "正直", chinese_romanization: "zhèngzhí" },
        { option: "D", answer: "propriety", chinese_answer: "适当", chinese_romanization: "shìdàng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'impropriety' means improper behavior or inappropriate conduct." +
        "<br><br>" +
        "(A) 'honesty' means the quality of being honest." +
        "<br><br>" +
        "(C) 'integrity' means the quality of being honest and having strong moral principles." +
        "<br><br>" +
        "(D) 'propriety' means the state or quality of conforming to conventionally accepted standards of behavior or morals.",
    chinese_explanation: "(B) '不当行为' 意味着不适当的行为或不恰当的举止。" +
        "<br><br>" +
        "(A) '诚实' 意味着诚实的品质。" +
        "<br><br>" +
        "(C) '正直' 意味着诚实和有强烈道德原则的品质。" +
        "<br><br>" +
        "(D) '适当' 意味着符合常规接受的行为或道德标准的状态或质量。"
    },
    {
        id: 3,
    question: "Their latest business __________ included a risky investment in an emerging market.",
    chinese_question: "他们最新的商业 __________ 包括在新兴市场进行风险投资。",
    answers: [
        { option: "A", answer: "endeavor", chinese_answer: "努力", chinese_romanization: "nǔlì" },
        { option: "B", answer: "escapade", chinese_answer: "冒险行为", chinese_romanization: "màoxiǎn xíngwéi" },
        { option: "C", answer: "negotiation", chinese_answer: "谈判", chinese_romanization: "tánpàn" },
        { option: "D", answer: "strategy", chinese_answer: "策略", chinese_romanization: "cèlüè" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'escapade' means an act or incident involving excitement, daring, or adventure, often in a risky manner." + 
        "<br><br>" + 
        "(A) 'endeavor' means an attempt to achieve a goal." + 
        "<br><br>" + 
        "(C) 'negotiation' means discussion aimed at reaching an agreement." + 
        "<br><br>" + 
        "(D) 'strategy' means a plan of action designed to achieve a long-term or overall aim.",
    chinese_explanation: "(B) '冒险行为'一词意味着涉及兴奋、大胆或冒险的行为，通常是有风险的。" + 
        "<br><br>" + 
        "(A) '努力' 意味着尝试实现一个目标。" + 
        "<br><br>" + 
        "(C) '谈判' 意味着旨在达成协议的讨论。" + 
        "<br><br>" + 
        "(D) '策略' 意味着为了实现长期或总体目标的行动计划。"
    },
    {
        id: 4,
        question: "The philanthropist's __________ was a beacon of hope for the struggling community, providing much-needed resources.",
        chinese_question: "慈善家的 __________ 是这个挣扎中的社区的希望灯塔，提供了急需的资源。",
        answers: [
            { option: "A", answer: "largesse", chinese_answer: "慷慨", chinese_romanization: "kāngkǎi" },
            { option: "B", answer: "scarcity", chinese_answer: "缺乏", chinese_romanization: "quēfá" },
            { option: "C", answer: "greed", chinese_answer: "贪婪", chinese_romanization: "tānlán" },
            { option: "D", answer: "poverty", chinese_answer: "贫困", chinese_romanization: "pínkùn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'largesse' figuratively means generosity in bestowing money or gifts upon others, often used to describe generosity in giving resources or aid." +
            "<br><br>" +
            "(B) 'scarcity' means the state of being scarce or in short supply." +
            "<br><br>" +
            "(C) 'greed' means intense and selfish desire for something, especially wealth or power." +
            "<br><br>" +
            "(D) 'poverty' means the state of being extremely poor.",
        chinese_explanation: "(A) '慷慨' 在此语境下比喻慷慨地赠送金钱或礼物给他人，通常用来描述在给予资源或援助方面的慷慨。" +
            "<br><br>" +
            "(B) '缺乏' 意味着稀缺或供应不足的状态。" +
            "<br><br>" +
            "(C) '贪婪' 意味着对某事物的强烈和自私的欲望，尤其是财富或权力。" +
            "<br><br>" +
            "(D) '贫困' 意味着极度贫穷的状态。"
    },
    {
        id: 5,
        question: "The once-small startup had grown into a __________, employing thousands of people across multiple countries.",
        chinese_question: "这家曾经的小型初创公司已成长为一个 __________，在多个国家雇佣了数千人。",
        answers: [
                { option: "A", answer: "minnow", chinese_answer: "小鱼", chinese_romanization: "xiǎo yú" },
                { option: "B", answer: "behemoth", chinese_answer: "巨兽", chinese_romanization: "jùshòu" },
                { option: "C", answer: "boutique", chinese_answer: "精品店", chinese_romanization: "jīngpǐn diàn" },
                { option: "D", answer: "hobby", chinese_answer: "爱好", chinese_romanization: "àihào" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'behemoth' means something enormous, especially a large and powerful organization or entity." +
            "<br><br>" +
            "(A) 'minnow' means a small fish that is often used as bait." +
            "<br><br>" +
            "(C) 'boutique' means a small shop specializing in fashionable clothes or accessories." +
            "<br><br>" +
            "(D) 'hobby' means an activity done regularly in one's leisure time for pleasure.",
        chinese_explanation: "(B) '巨兽'一词意味着巨大的东西，尤其是一个庞大而强大的组织或实体。" +
            "<br><br>" +
            "(A) '小鱼' 意味着一种常用作鱼饵的小鱼。" +
            "<br><br>" +
            "(C) '精品店' 意味着一家专门经营时尚服装或配饰的小店。" +
            "<br><br>" +
            "(D) '爱好' 意味着在闲暇时间定期从事的活动，以获得乐趣。"
    },
    {
        id: 6,
    question: "The politician’s career was nearly ruined by the __________ spread by his opponents, which falsely accused him of corruption.",
    chinese_question: "这位政客的事业几乎被对手散布的 __________ 毁掉了，他们错误地指控他腐败。",
    answers: [
        { option: "A", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" },
        { option: "B", answer: "calumny", chinese_answer: "诽谤", chinese_romanization: "fěibàng" },
        { option: "C", answer: "truth", chinese_answer: "事实", chinese_romanization: "shìshí" },
        { option: "D", answer: "compliment", chinese_answer: "恭维", chinese_romanization: "gōngwěi" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'calumny' means the making of false and defamatory statements about someone in order to damage their reputation; slander." + 
        "<br><br>" + 
        "(A)'praise' means the expression of approval or admiration for someone or something." + 
        "<br><br>" + 
        "(C)'truth' means that which is true or in accordance with fact or reality." + 
        "<br><br>" + 
        "(D)'compliment' means a polite expression of praise or admiration.",
    chinese_explanation: "(B) '诽谤'一词意味着为了损害某人的名誉而进行的虚假和诽谤性陈述；诋毁。" + 
        "<br><br>" + 
        "(A)'赞美' 意味着对某人或某事表示赞许或钦佩。" + 
        "<br><br>" + 
        "(C)'事实' 意味着真实或符合事实或现实的事物。" + 
        "<br><br>" + 
        "(D)'恭维' 意味着对某人表示赞美或钦佩的礼貌表达。"
    },
    {
        id: 7,
        question: "She was diagnosed with __________, which explained her uncontrollable urge to steal small items from stores.",
        chinese_question: "她被诊断为 __________，这解释了她无法控制的从商店偷窃小物品的冲动。",
        answers: [
            { option: "A", answer: "kleptomania", chinese_answer: "盗窃癖", chinese_romanization: "dàoqiè pǐ" },
            { option: "B", answer: "generosity", chinese_answer: "慷慨", chinese_romanization: "kāngkǎi"},
            { option: "C", answer: "integrity", chinese_answer: "正直", chinese_romanization: "zhèngzhí" },
            { option: "D", answer: "philanthropy", chinese_answer: "慈善", chinese_romanization: "císhàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'kleptomania' means a recurrent urge to steal, typically without regard for need or profit." +
            "<br><br>" +
            "(B) 'generosity' means the quality of being kind and generous." +
            "<br><br>" +
            "(C) 'integrity' means the quality of being honest and having strong moral principles." +
            "<br><br>" +
            "(D) 'philanthropy' means the desire to promote the welfare of others, expressed especially by the generous donation of money to good causes.",
        chinese_explanation: "(A) '盗窃癖' 意味着反复出现的偷窃冲动，通常不考虑需求或利润。" +
            "<br><br>" +
            "(B) '慷慨' 意味着仁慈和慷慨的品质。" +
            "<br><br>" +
            "(C) '正直' 意味着诚实和具有强烈道德原则的品质。" +
            "<br><br>" +
            "(D) '慈善' 意味着促进他人福利的愿望，特别是通过慷慨捐赠钱财来支持好事业。"
    },
    {
        id: 8,
        question: "The activists were granted __________ in a European embassy after facing threats in their home country.",
        chinese_question: "这些活动人士在面对本国的威胁后，获得了欧洲大使馆的 __________。",
        answers: [
            { option: "A", answer: "asylum", chinese_answer: "庇护", chinese_romanization: "bìhù" },
            { option: "B", answer: "residence", chinese_answer: "居住", chinese_romanization: "jūzhù" },
            { option: "C", answer: "citizenship", chinese_answer: "公民身份", chinese_romanization: "gōngmín shēnfèn" },
            { option: "D", answer: "immigration", chinese_answer: "移民", chinese_romanization: "yímín" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'asylum' means protection granted by a nation to someone who has left their native country as a political refugee." +
            "<br><br>" +
            "(B) 'residence' means the place where someone lives." +
            "<br><br>" +
            "(C) 'citizenship' means the status of being a citizen of a particular country." +
            "<br><br>" +
            "(D) 'immigration' means the action of coming to live permanently in a foreign country.",
        chinese_explanation: "(A) '庇护' 意味着一个国家对离开本国作为政治难民的人提供的保护。" +
            "<br><br>" +
            "(B) '居住' 意味着某人生活的地方。" +
            "<br><br>" +
            "(C) '公民身份' 意味着成为某个国家公民的身份。" +
            "<br><br>" +
            "(D) '移民' 意味着永久居住在外国的行动。"
    },
    {
        id: 9,
        question: "His refined tastes in music and literature marked him as an __________ among his peers.",
        chinese_question: "他对音乐和文学的高雅品味使他在同龄人中被视为一个 __________。",
        answers: [
                { option: "A", answer: "aesthete", chinese_answer: "审美家", chinese_romanization: "shěnměi jiā" },
                { option: "B", answer: "pragmatist", chinese_answer: "实用主义者", chinese_romanization: "shíyòng zhǔyì zhě" },
                { option: "C", answer: "cynic", chinese_answer: "愤世嫉俗者", chinese_romanization: "fènshì jísú zhě" },
                { option: "D", answer: "dilettante", chinese_answer: "半吊子", chinese_romanization: "bàndiàozi" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'aesthete' means a person who has or affects to have a special appreciation of art and beauty." +
            "<br><br>" +
            "(B) 'pragmatist' means a person who is guided more by practical considerations than by ideals." +
            "<br><br>" +
            "(C) 'cynic' means a person who believes that people are motivated purely by self-interest rather than acting for honorable or unselfish reasons." +
            "<br><br>" +
            "(D) 'dilettante' means a person who cultivates an area of interest, such as the arts, without real commitment or knowledge.",
        chinese_explanation: "(A) '审美家' 意味着对艺术和美有特别欣赏或假装有特别欣赏的人。" +
            "<br><br>" +
            "(B) '实用主义者' 意味着更多地以实际考虑为指导的人，而不是理想。" +
            "<br><br>" +
            "(C) '愤世嫉俗者' 意味着相信人们纯粹出于自利动机而不是为了高尚或无私原因行事的人。" +
            "<br><br>" +
            "(D) '半吊子' 意味着在某个兴趣领域（如艺术）没有真正的承诺或知识的人。"
    },
    {
        id: 10,
    question: "To gain the __________ of the community, the new leader made efforts to understand their needs and concerns.",
    chinese_question: "为了赢得社区的 __________ ，新领导人努力了解他们的需求和关切。",
    answers: [
        { option: "A", answer: "respect", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" },
        { option: "B", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "contempt", chinese_answer: "轻视", chinese_romanization: "qīngshì" },
        { option: "D", answer: "arrogance", chinese_answer: "傲慢", chinese_romanization: "àomàn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'respect' means a feeling of deep admiration for someone or something elicited by their abilities, qualities, or achievements." + 
        "<br><br>" + 
        "(B) 'neglect' means failure to care for properly." + 
        "<br><br>" + 
        "(C) 'contempt' means the feeling that a person or a thing is beneath consideration, worthless, or deserving scorn." + 
        "<br><br>" + 
        "(D) 'arrogance' means having or revealing an exaggerated sense of one's own importance or abilities.",
    chinese_explanation: "(A) '尊重' 意味着对某人的能力、品质或成就的深深钦佩之情。" + 
        "<br><br>" + 
        "(B) '忽视' 意味着未能妥善照顾。" + 
        "<br><br>" + 
        "(C) '轻视' 意味着认为某人或某物不值得考虑、无价值或应受鄙视的感觉。" + 
        "<br><br>" + 
        "(D) '傲慢' 意味着拥有或表现出夸大的自我重要性或能力感。"
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
