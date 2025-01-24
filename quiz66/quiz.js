// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ of the ancient king led him to believe he was invincible, ultimately causing his downfall.",
        chinese_question: "古代国王的 __________ 使他认为自己是不可战胜的，最终导致了他的垮台。",
        answers: [
                { option: "A", answer: "hubris", chinese_answer: "傲慢", chinese_romanization: "àomàn" },
                { option: "B", answer: "humility", chinese_answer: "谦逊", chinese_romanization: "qiānxùn" },
                { option: "C", answer: "prudence", chinese_answer: "谨慎", chinese_romanization: "jǐnshèn" },
                { option: "D", answer: "foresight", chinese_answer: "远见", chinese_romanization: "yuǎnjiàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'hubris' figuratively means excessive pride or self-confidence, especially as it leads to downfall." +
            "<br><br>" +
            "(B) 'humility' means a modest or low view of one's own importance." +
            "<br><br>" +
            "(C) 'prudence' means the quality of being prudent; cautiousness." +
            "<br><br>" +
            "(D) 'foresight' means the ability to predict or the action of predicting what will happen or be needed in the future.",
        chinese_explanation: "(A) '傲慢' 在此语境下意指过度的自豪或自信，特别是导致垮台。" +
            "<br><br>" +
            "(B) '谦逊' 意味着对自己重要性的谦虚或低调看法。" +
            "<br><br>" +
            "(C) '谨慎' 意味着谨慎的质量。" +
            "<br><br>" +
            "(D) '远见' 意味着预测或预测未来将发生或需要的能力或行动。"
    },
    {
        id: 2,
        question: "Her responsibilities included financial oversight, but the details of daily operations were outside her __________.",
        chinese_question: "她的职责包括财务监督，但日常运营的细节不在她的 __________ 之内。",
        answers: [
                { option: "A", answer: "involvement", chinese_answer: "参与", chinese_romanization: "cānyù" },
                { option: "B", answer: "purview", chinese_answer: "范围", chinese_romanization: "fànwéi" },
                { option: "C", answer: "assistance", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
                { option: "D", answer: "knowledge", chinese_answer: "知识", chinese_romanization: "zhīshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'purview' means the scope of the influence or concerns of something." +
            "<br><br>" +
            "(A) 'involvement' means the fact or condition of being involved with or participating in something." +
            "<br><br>" +
            "(C) 'assistance' means the action of helping someone with a job or task." +
            "<br><br>" +
            "(D) 'knowledge' means facts, information, and skills acquired through experience or education.",
        chinese_explanation: "(B) '范围'一词指的是影响或关注的范围。" +
            "<br><br>" +
            "(A) '参与' 意味着参与某事的事实或条件。" +
            "<br><br>" +
            "(C) '帮助' 意味着帮助某人完成工作或任务的行为。" +
            "<br><br>" +
            "(D) '知识' 意味着通过经验或教育获得的事实、信息和技能。"
    },
    {
        id: 3,
    question: "The __________ of emotions in her heart made it difficult to make a rational decision.",
    chinese_question: "她心中的 __________ 情感使得她难以做出理性的决定。",
    answers: [
        { option: "A", answer: "peace", chinese_answer: "平静", chinese_romanization: "píngjìng" },
        { option: "B", answer: "hubbub", chinese_answer: "喧闹", chinese_romanization: "xuānnào" },
        { option: "C", answer: "calm", chinese_answer: "冷静", chinese_romanization: "lěngjìng" },
        { option: "D", answer: "order", chinese_answer: "秩序", chinese_romanization: "zhìxù" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'hubbub' means a chaotic noise caused by a crowd of people or confusion." +
        "<br><br>" + 
        "(A) 'peace' means freedom from disturbance." + 
        "<br><br>" + 
        "(C) 'calm' means the absence of violent or confrontational activity." + 
        "<br><br>" + 
        "(D) 'order' means the arrangement or disposition of people or things in relation to each other.",
    chinese_explanation: "(B) “喧闹” 意味着由一群人或混乱引起的混乱噪音。" + 
        "<br><br>" + 
        "(A) '平静' 意味着没有干扰。" + 
        "<br><br>" + 
        "(C) '冷静' 意味着没有暴力或对抗活动。" + 
        "<br><br>" + 
        "(D) '秩序' 意味着人与物之间的排列或布置。"
    },
    {
        id: 4,
    question: "His __________ before entering the sacred chamber showed his respect for the holy space.",
    chinese_question: "他在进入神圣殿堂前的 __________ 表示了他对神圣空间的尊敬。",
    answers: [
        { option: "A", answer: "defiance", chinese_answer: "反抗", chinese_romanization: "fǎnkàng" },
        { option: "B", answer: "genuflection", chinese_answer: "跪拜", chinese_romanization: "guìbài" },
        { option: "C", answer: "arrogance", chinese_answer: "傲慢", chinese_romanization: "àomàn" },
        { option: "D", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'genuflection' means the act of bending the knees in worship or reverence." +
        "<br><br>" +
        "(A)'defiance' means open resistance; bold disobedience." +
        "<br><br>" +
        "(C)'arrogance' means having or revealing an exaggerated sense of one's own importance or abilities." +
        "<br><br>" +
        "(D)'indifference' means lack of interest, concern, or sympathy.",
    chinese_explanation: "(B) '跪拜'一词意味着在崇拜或敬意中弯膝的行为。" +
        "<br><br>" +
        "(A)'反抗' 意味着公开抵抗；大胆的反抗。" +
        "<br><br>" +
        "(C)'傲慢' 意味着具有或表现出夸大的自我重要性或能力感。" +
        "<br><br>" +
        "(D)'冷漠' 意味着缺乏兴趣、关心或同情。"
    },
    {
        id: 5,
    question: "Even in the face of adversity, his __________ remained unshaken, guiding him to make ethical choices.",
    chinese_question: "即使在逆境中，他的 __________ 也未动摇，引导他做出道德选择。",
    answers: [
        { option: "A", answer: "compromise", chinese_answer: "妥协", chinese_romanization: "tuǒxié" },
        { option: "B", answer: "rectitude", chinese_answer: "正直", chinese_romanization: "zhèngzhí" },
        { option: "C", answer: "deceit", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" },
        { option: "D", answer: "manipulation", chinese_answer: "操纵", chinese_romanization: "cāozòng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'rectitude' means morally correct behavior or thinking; righteousness." + 
        "<br><br>" + 
        "(A) 'compromise' means an agreement or settlement of a dispute that is reached by each side making concessions." + 
        "<br><br>" + 
        "(C) 'deceit' means the action or practice of deceiving someone by concealing or misrepresenting the truth." + 
        "<br><br>" + 
        "(D) 'manipulation' means controlling or influencing someone or something cleverly, unfairly, or unscrupulously.",
    chinese_explanation: "(B) '正直'一词意味着道德上正确的行为或思想；正义。" + 
        "<br><br>" + 
        "(A) '妥协' 意味着通过各方让步达成的争端协议或和解。" + 
        "<br><br>" + 
        "(C) '欺骗' 意味着通过隐瞒或歪曲事实来欺骗某人的行为或做法。" + 
        "<br><br>" + 
        "(D) '操纵' 意味着巧妙、不公平或不择手段地控制或影响某人或某事。"
    },
    {
        id: 6,
        question: "Investors need to conduct proper due __________ before committing their money to a new venture.",
        chinese_question: "投资者在将资金投入新企业之前需要进行适当的尽 __________。",
        answers: [
            { option: "A", answer: "diligence", chinese_answer: "勤", chinese_romanization: "qín" },
            { option: "B", answer: "ignorance", chinese_answer: "无知", chinese_romanization: "wúzhī" },
            { option: "C", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "complacency", chinese_answer: "自满", chinese_romanization: "zìmǎn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'diligence' means careful and persistent work or effort, particularly in the context of assessing a business or investment opportunity." +
            "<br><br>" +
            "(B) 'ignorance' means lack of knowledge or information." +
            "<br><br>" +
            "(C) 'neglect' means failure to take proper care in doing something." +
            "<br><br>" +
            "(D) 'complacency' means a feeling of smug or uncritical satisfaction with oneself or one's achievements.",
        chinese_explanation: "(A) '尽勤' 意味着仔细和持续的工作或努力，特别是在评估业务或投资机会时。" +
            "<br><br>" +
            "(B) '无知' 意味着缺乏知识或信息。" +
            "<br><br>" +
            "(C) '忽视' 意味着未能妥善处理某事。" +
            "<br><br>" +
            "(D) '自满' 意味着对自己或自己的成就感到自满或不加批判的满足感。"
    },
    {
        id: 7,
    question: "The startup's __________ was questioned due to its lack of a solid business plan.",
    chinese_question: "由于缺乏稳固的商业计划，这家初创公司的 __________ 受到了质疑。",
    answers: [
        { option: "A", answer: "viability", chinese_answer: "可行性", chinese_romanization: "kěxíng xìng" },
        { option: "B", answer: "growth", chinese_answer: "增长", chinese_romanization: "zēngzhǎng" },
        { option: "C", answer: "expense", chinese_answer: "费用", chinese_romanization: "fèiyòng" },
        { option: "D", answer: "innovation", chinese_answer: "创新", chinese_romanization: "chuàngxīn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'viability' means the ability to work successfully or be practical and effective." + 
        "<br><br>" + 
        "(B) 'growth' means the process of increasing in size." + 
        "<br><br>" + 
        "(C) 'expense' means the cost required for something." + 
        "<br><br>" + 
        "(D) 'innovation' means the action or process of innovating.",
    chinese_explanation: "(A) '可行性' 意味着成功运作或实际有效的能力。" + 
        "<br><br>" + 
        "(B) '增长' 意味着增长的过程。" + 
        "<br><br>" + 
        "(C) '费用' 意味着某物所需的成本。" + 
        "<br><br>" + 
        "(D) '创新' 意味着创新的行动或过程。"
    },
    {
        id: 8,
        question: "The company's ethical __________ guided employees to act with integrity and honesty in all their dealings.",
        chinese_question: "公司的道德 __________ 指导员工在所有交易中以诚信和诚实行事。",
        answers: [
                { option: "A", answer: "precepts", chinese_answer: "准则", chinese_romanization: "zhǔnzé" },
                { option: "B", answer: "profits", chinese_answer: "利润", chinese_romanization: "lìrùn" },
                { option: "C", answer: "policies", chinese_answer: "政策", chinese_romanization: "zhèngcè" },
                { option: "D", answer: "goals", chinese_answer: "目标", chinese_romanization: "mùbiāo" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'precepts' means general rules intended to regulate behavior or thought." +
            "<br><br>" +
            "(B) 'profits' means financial gains, especially the difference between the amount earned and the amount spent in buying, operating, or producing something." +
            "<br><br>" +
            "(C) 'policies' means a course or principle of action adopted or proposed by an organization or individual." +
            "<br><br>" +
            "(D) 'goals' means the object of a person's ambition or effort; an aim or desired result.",
        chinese_explanation: "(A) '准则' 意味着用于规范行为或思想的一般规则。" +
            "<br><br>" +
            "(B) '利润' 意味着财务收益，尤其是赚取的金额与购买、运营或生产所花费的金额之间的差额。" +
            "<br><br>" +
            "(C) '政策' 意味着由组织或个人采用或提出的行动方针或原则。" +
            "<br><br>" +
            "(D) '目标' 意味着一个人雄心或努力的对象；目标或期望的结果。"
    },
    {
        id: 9,
        question: "As a __________ in the tech industry, he attended numerous conferences to build his knowledge and network.",
        chinese_question: "作为科技行业的 __________，他参加了许多会议以增加知识和建立人脉。",
        answers: [
            { option: "A", answer: "neophyte", chinese_answer: "新手", chinese_romanization: "xīnshǒu" },
            { option: "B", answer: "pioneer", chinese_answer: "先锋", chinese_romanization: "xiānfēng" },
            { option: "C", answer: "leader", chinese_answer: "领导者", chinese_romanization: "lǐngdǎo zhě" },
            { option: "D", answer: "expert", chinese_answer: "专家", chinese_romanization: "zhuānjiā" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'neophyte' figuratively means a person who is new to a subject, skill, or belief." +
            "<br><br>" +
            "(B) 'pioneer' means a person who is among the first to explore or settle a new country or area." +
            "<br><br>" +
            "(C) 'leader' means the person who leads or commands a group, organization, or country." +
            "<br><br>" +
            "(D) 'expert' means a person who has a comprehensive and authoritative knowledge of or skill in a particular area.",
        chinese_explanation: "(A) '新手' 在此语境下意指在某一学科、技能或信仰方面的新手。" +
            "<br><br>" +
            "(B) '先锋' 意味着最先探索或定居新国家或地区的人。" +
            "<br><br>" +
            "(C) '领导者' 意味着领导或指挥一个团体、组织或国家的人。" +
            "<br><br>" +
            "(D) '专家' 意味着在特定领域拥有全面和权威知识或技能的人。"
    },
    {
        id: 10,
        question: "The family's finances were thrown into a __________ when the primary earner lost their job unexpectedly.",
        chinese_question: "当主要收入者意外失业时，家庭的财务陷入了 __________。",
        answers: [
            { option: "A", answer: "maelstrom", chinese_answer: "漩涡", chinese_romanization: "xuánwō" },
            { option: "B", answer: "prosperity", chinese_answer: "繁荣", chinese_romanization: "fánróng" },
            { option: "C", answer: "predictability", chinese_answer: "可预测性", chinese_romanization: "kě yùcè xìng" },
            { option: "D", answer: "tranquility", chinese_answer: "宁静", chinese_romanization: "níngjìng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'maelstrom' figuratively means a situation or state of confused movement or violent turmoil." +
            "<br><br>" +
            "(B) 'prosperity' means the state of being prosperous." +
            "<br><br>" +
            "(C) 'predictability' means the quality of being regarded as likely to happen, as behavior or an event." +
            "<br><br>" +
            "(D) 'tranquility' means the quality or state of being tranquil; calm.",
        chinese_explanation: "(A) '漩涡' 在此语境下比喻一种混乱的运动或暴力动荡状态。" +
            "<br><br>" +
            "(B) '繁荣' 意味着繁荣的状态。" +
            "<br><br>" +
            "(C) '可预测性' 意味着被视为可能发生的质量，如行为或事件。" +
            "<br><br>" +
            "(D) '宁静' 意味着宁静的质量或状态。"
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
