// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The proposal to increase taxes on small businesses stirred the __________ of the local business owners.",
        chinese_question: "增加对小企业税收的提议激起了当地企业主的 __________。",
        answers: [
                { option: "A", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" },
                { option: "B", answer: "ire", chinese_answer: "愤怒", chinese_romanization: "fènnù" },
                { option: "C", answer: "gratitude", chinese_answer: "感激", chinese_romanization: "gǎnjī" },
                { option: "D", answer: "amusement", chinese_answer: "娱乐", chinese_romanization: "yúlè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'ire' figuratively means anger." +
            "<br><br>" +
            "(A) 'excitement' means a feeling of great enthusiasm and eagerness." +
            "<br><br>" +
            "(C) 'gratitude' means the quality of being thankful; readiness to show appreciation for and to return kindness." +
            "<br><br>" +
            "(D) 'amusement' means the state or experience of finding something funny.",
        chinese_explanation: "(B) '愤怒' 在此语境下意指愤怒。" +
            "<br><br>" +
            "(A) '兴奋' 意味着极大的热情和渴望。" +
            "<br><br>" +
            "(C) '感激' 意味着感恩的品质；准备表现出欣赏并回报善意。" +
            "<br><br>" +
            "(D) '娱乐' 意味着发现某事有趣的状态或体验。"
    },
    {
        id: 2,
        question: "The government’s new policy acted as an __________ to the housing market, leading to an increase in home sales.",
        chinese_question: "政府的新政策对房地产市场起到了 __________ 作用，导致房屋销售增加。",
        answers: [
                { option: "A", answer: "deterrent", chinese_answer: "威慑", chinese_romanization: "wēishè" },
                { option: "B", answer: "impediment", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
                { option: "C", answer: "impetus", chinese_answer: "动力", chinese_romanization: "dònglì" },
                { option: "D", answer: "obstacle", chinese_answer: "障碍", chinese_romanization: "zhàng'ài" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'impetus' means the force or energy with which a body moves, or something that makes a process or activity happen or happen more quickly." +
            "<br><br>" +
            "(A) 'deterrent' means a thing that discourages or is intended to discourage someone from doing something." +
            "<br><br>" +
            "(B) 'impediment' means a hindrance or obstruction in doing something." +
            "<br><br>" +
            "(D) 'obstacle' means a thing that blocks one's way or prevents or hinders progress.",
        chinese_explanation: "(C) '动力'一词意味着使身体移动的力量或能量，或使过程或活动发生或更快发生的东西。" +
            "<br><br>" +
            "(A) '威慑' 意味着阻止或旨在阻止某人做某事的东西。" +
            "<br><br>" +
            "(B) '阻碍' 意味着做某事的障碍或阻碍。" +
            "<br><br>" +
            "(D) '障碍' 意味着阻挡某人前进或阻止或妨碍进展的东西。"
    },
    {
        id: 3,
    question: "There was a general __________ of politicians among the public after the scandal.",
    chinese_question: "丑闻过后，公众普遍对政治家产生了 __________。",
    answers: [
        { option: "A", answer: "confidence", chinese_answer: "信心", chinese_romanization: "xìnxīn" },
        { option: "B", answer: "trust", chinese_answer: "信任", chinese_romanization: "xìnrèn" },
        { option: "C", answer: "mistrust", chinese_answer: "不信任", chinese_romanization: "bù xìnrèn" },
        { option: "D", answer: "faith", chinese_answer: "信仰", chinese_romanization: "xìnyǎng" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'mistrust' means lack of trust or confidence." + 
        "<br><br>" + 
        "(A) 'confidence' means the feeling or belief that one can rely on someone or something." + 
        "<br><br>" + 
        "(B) 'trust' means firm belief in the reliability, truth, ability, or strength of someone or something." + 
        "<br><br>" + 
        "(D) 'faith' means complete trust or confidence in someone or something.",
    chinese_explanation: "(C) '不信任' 意味着缺乏信任或信心。" + 
        "<br><br>" + 
        "(A) '信心' 意味着相信或信赖某人或某事的感觉或信念。" + 
        "<br><br>" + 
        "(B) '信任' 意味着对某人或某事的可靠性、真实性、能力或力量的坚定信念。" + 
        "<br><br>" + 
        "(D) '信仰' 意味着对某人或某事的完全信任或信心。"
    },
    {
        id: 4,
        question: "The thief used his __________ to pickpocket the man's wallet without him noticing.",
        chinese_question: "小偷利用他的 __________ 偷走了那个男人的钱包，而他却没有注意到。",
        answers: [
            { option: "A", answer: "legerdemain", chinese_answer: "戏法", chinese_romanization: "xìfǎ" },
            { option: "B", answer: "honesty", chinese_answer: "诚实", chinese_romanization: "chéngshí" },
            { option: "C", answer: "openness", chinese_answer: "开放", chinese_romanization: "kāifàng" },
            { option: "D", answer: "integrity", chinese_answer: "正直", chinese_romanization: "zhèngzhí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'legerdemain' means skillful use of one's hands when performing conjuring tricks or deceit." +
            "<br><br>" +
            "(B) 'honesty' means the quality of being honest." +
            "<br><br>" +
            "(C) 'openness' means the quality of being open." +
            "<br><br>" +
            "(D) 'integrity' means the quality of being honest and having strong moral principles.",
        chinese_explanation: "(A) '戏法' 意味着表演魔术时巧妙使用双手的技巧或欺骗。" +
            "<br><br>" +
            "(B) '诚实' 意味着诚实的品质。" +
            "<br><br>" +
            "(C) '开放' 意味着开放的品质。" +
            "<br><br>" +
            "(D) '正直' 意味着诚实和有强烈道德原则的品质。"
    },
    {
        id: 5,
        question: "The whistleblower was treated as a __________ by the company, despite exposing serious wrongdoing.",
        chinese_question: "尽管揭露了严重的不当行为，举报人仍被公司视为 __________。",
        answers: [
            { option: "A", answer: "pariah", chinese_answer: "贱民", chinese_romanization: "jiànmín" },
            { option: "B", answer: "hero", chinese_answer: "英雄", chinese_romanization: "yīngxióng" },
            { option: "C", answer: "manager", chinese_answer: "经理", chinese_romanization: "jīnglǐ" },
            { option: "D", answer: "colleague", chinese_answer: "同事", chinese_romanization: "tóngshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'pariah' means a person who is rejected or ostracized by society or a social group." +
            "<br><br>" +
            "(B) 'hero' means a person who is admired for their courage, outstanding achievements, or noble qualities." +
            "<br><br>" +
            "(C) 'manager' means a person responsible for controlling or administering an organization or group of staff." +
            "<br><br>" +
            "(D) 'colleague' means a person with whom one works in a profession or business.",
        chinese_explanation: "(A) '贱民'一词意味着一个被社会或社会群体拒绝或排斥的人。" +
            "<br><br>" +
            "(B) '英雄' 意味着因勇气、杰出成就或高贵品质而受到钦佩的人。" +
            "<br><br>" +
            "(C) '经理' 意味着负责控制或管理一个组织或一群员工的人。" +
            "<br><br>" +
            "(D) '同事' 意味着在职业或业务中与某人一起工作的人。"
    },
    {
        id: 6,
question: "Her __________ as an expert in renewable energy made her the perfect candidate to lead the new environmental initiative.",
chinese_question: "她作为可再生能源专家的 __________ 使她成为领导新的环境倡议的完美候选人。",
answers: [
    { option: "A", answer: "credentials", chinese_answer: "资历", chinese_romanization: "zīlì" },
    { option: "B", answer: "interests", chinese_answer: "兴趣", chinese_romanization: "xìngqù" },
    { option: "C", answer: "weaknesses", chinese_answer: "弱点", chinese_romanization: "ruòdiǎn" },
    { option: "D", answer: "doubts", chinese_answer: "疑虑", chinese_romanization: "yílǜ" }
],
correctAnswer: "A",
explanation: "(A) 'credentials' means qualifications, achievements, personal qualities, or aspects of a person's background, typically when used to indicate their suitability for something." +
    "<br><br>" +
    "(B) 'interests' means the feeling of wanting to know or learn about something or someone." +
    "<br><br>" +
    "(C) 'weaknesses' means the state or condition of lacking strength." +
    "<br><br>" +
    "(D) 'doubts' means feelings of uncertainty or lack of conviction.",
chinese_explanation: "(A) '资历' 意味着资格、成就、个人素质或背景方面的情况，通常用于表明某人适合某事。" +
    "<br><br>" +
    "(B) '兴趣' 意味着想知道或了解某事或某人的感觉。" +
    "<br><br>" +
    "(C) '弱点' 意味着缺乏力量的状态或条件。" +
    "<br><br>" +
    "(D) '疑虑' 意味着不确定或缺乏信念的感觉。"
    },
    {
        id: 7,
        question: "The politician's __________ was revealed when emails showed he had been secretly negotiating deals behind the scenes.",
        chinese_question: "当电子邮件显示他一直在幕后秘密谈判交易时，这位政治家的 __________ 被揭露了。",
        answers: [
                { option: "A", answer: "subterfuge", chinese_answer: "诡计", chinese_romanization: "guǐjì" },
                { option: "B", answer: "integrity", chinese_answer: "正直", chinese_romanization: "zhèngzhí" },
                { option: "C", answer: "forthrightness", chinese_answer: "直率", chinese_romanization: "zhíshuài" },
                { option: "D", answer: "sincerity", chinese_answer: "真诚", chinese_romanization: "zhēnchéng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'subterfuge' means deceit used in order to achieve one's goal." +
            "<br><br>" +
            "(B) 'integrity' means the quality of being honest and having strong moral principles." +
            "<br><br>" +
            "(C) 'forthrightness' means directness in manner or speech." +
            "<br><br>" +
            "(D) 'sincerity' means the quality of being free from pretense, deceit, or hypocrisy.",
        chinese_explanation: "(A) '诡计' 意味着为了达到目的而使用的欺骗。" +
            "<br><br>" +
            "(B) '正直' 意味着诚实并具有强烈道德原则的品质。" +
            "<br><br>" +
            "(C) '直率' 意味着在方式或言语上的直接性。" +
            "<br><br>" +
            "(D) '真诚' 意味着没有虚伪、欺骗或伪善的品质。"
    },
    {
        id: 8,
        question: "Being the only vegetarian in his family, he sometimes felt like a __________ during holiday meals.",
        chinese_question: "作为家里唯一的素食者，他有时在假日餐桌上感到像个 __________。",
        answers: [
            { option: "A", answer: "pariah", chinese_answer: "贱民", chinese_romanization: "jiànmín" },
            { option: "B", answer: "chef", chinese_answer: "厨师", chinese_romanization: "chúshī" },
            { option: "C", answer: "supporter", chinese_answer: "支持者", chinese_romanization: "zhīchí zhě" },
            { option: "D", answer: "leader", chinese_answer: "领袖", chinese_romanization: "lǐngxiù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'pariah' means a person who is rejected or ostracized by society or a social group." +
            "<br><br>" +
            "(B) 'chef' means a professional cook, typically the chief cook in a restaurant or hotel." +
            "<br><br>" +
            "(C) 'supporter' means a person who approves of and encourages someone or something." +
            "<br><br>" +
            "(D) 'leader' means the person who leads or commands a group, organization, or country.",
        chinese_explanation: "(A) '贱民'一词意味着一个被社会或社会群体拒绝或排斥的人。" +
            "<br><br>" +
            "(B) '厨师' 意味着专业厨师，通常是餐馆或酒店的主厨。" +
            "<br><br>" +
            "(C) '支持者' 意味着赞成和鼓励某人或某事的人。" +
            "<br><br>" +
            "(D) '领袖' 意味着领导或指挥一个团体、组织或国家的人。"
    },
    {
        id: 9,
    question: "The community center acts as a __________ between local residents and the city council, fostering dialogue and community projects.",
    chinese_question: "社区中心充当本地居民与市议会之间的 __________，促进对话和社区项目。",
    answers: [
        { option: "A", answer: "mediator", chinese_answer: "调解员", chinese_romanization: "tiáojiěyuán" },
        { option: "B", answer: "liaison", chinese_answer: "联络员", chinese_romanization: "liánluòyuán" },
        { option: "C", answer: "facilitator", chinese_answer: "协调员", chinese_romanization: "xiétiáoyuán" },
        { option: "D", answer: "negotiator", chinese_answer: "谈判代表", chinese_romanization: "tánpàn dàibiǎo" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'liaison' means communication or cooperation that facilitates a close working relationship between people or organizations." + 
        "<br><br>" + 
        "(A) 'mediator' means a person who attempts to make people involved in a conflict come to an agreement." + 
        "<br><br>" + 
        "(C) 'facilitator' means a person who makes an action or process easy or easier." + 
        "<br><br>" + 
        "(D) 'negotiator' means a person who conducts negotiations.",
    chinese_explanation: "(B) '联络员'一词意味着促进人或组织之间紧密工作关系的沟通或合作。" + 
        "<br><br>" + 
        "(A) '调解员' 意味着试图使冲突中的人达成协议的人。" + 
        "<br><br>" + 
        "(C) '协调员' 意味着使一个行动或过程变得容易或更容易的人。" + 
        "<br><br>" + 
        "(D) '谈判代表' 意味着进行谈判的人。"
    },
    {
        id: 10,
    question: "The __________ in the financial markets caused investors to panic and sell off their stocks.",
    chinese_question: "金融市场的 __________ 导致投资者恐慌并抛售股票。",
    answers: [
        { option: "A", answer: "mayhem", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
        { option: "B", answer: "stability", chinese_answer: "稳定", chinese_romanization: "wěndìng" },
        { option: "C", answer: "prosperity", chinese_answer: "繁荣", chinese_romanization: "fánróng" },
        { option: "D", answer: "clarity", chinese_answer: "清晰", chinese_romanization: "qīngxī" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'mayhem' means a state of chaos and disorder." + 
        "<br><br>" + 
        "(B) 'stability' means the state of being stable." + 
        "<br><br>" + 
        "(C) 'prosperity' means the state of being prosperous." + 
        "<br><br>" + 
        "(D) 'clarity' means the quality of being clear.",
    chinese_explanation: "(A) '混乱' 意味着一种混乱和无序的状态。" + 
        "<br><br>" + 
        "(B) '稳定' 意味着稳定的状态。" + 
        "<br><br>" + 
        "(C) '繁荣' 意味着繁荣的状态。" + 
        "<br><br>" + 
        "(D) '清晰' 意味着清晰的质量。"
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
