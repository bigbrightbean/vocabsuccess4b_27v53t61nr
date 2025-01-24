// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ was evident when she dismissed the concerns of her team, believing her decisions were infallible.",
        chinese_question: "她的 __________ 显而易见，当她忽视团队的担忧时，认为她的决定是无懈可击的。",
        answers: [
                { option: "A", answer: "modesty", chinese_answer: "谦虚", chinese_romanization: "qiānxū" },
                { option: "B", answer: "hubris", chinese_answer: "傲慢", chinese_romanization: "àomàn" },
                { option: "C", answer: "wisdom", chinese_answer: "智慧", chinese_romanization: "zhìhuì" },
                { option: "D", answer: "empathy", chinese_answer: "同理心", chinese_romanization: "tóng lǐ xīn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'hubris' means excessive pride or self-confidence." +
            "<br><br>" +
            "(A) 'modesty' means the quality or state of being unassuming or moderate in the estimation of one's abilities." +
            "<br><br>" +
            "(C) 'wisdom' means the quality of having experience, knowledge, and good judgment." +
            "<br><br>" +
            "(D) 'empathy' means the ability to understand and share the feelings of another.",
        chinese_explanation: "(B) '傲慢'一词意味着过度的骄傲或自信。" +
            "<br><br>" +
            "(A) '谦虚' 意味着对自己能力的估计不过高或适中的品质或状态。" +
            "<br><br>" +
            "(C) '智慧' 意味着具有经验、知识和良好判断力的品质。" +
            "<br><br>" +
            "(D) '同理心' 意味着理解和分享他人感受的能力。"
    },
    {
        id: 2,
        question: "During the festival, the streets were lined with vendors selling all kinds of __________, tempting passersby with the aroma of freshly cooked meals.",
        chinese_question: "在节日期间，街道两旁都是小贩在出售各种 __________，新鲜烹制的食物香味诱惑着过路人。",
        answers: [
                { option: "A", answer: "tools", chinese_answer: "工具", chinese_romanization: "gōngjù" },
                { option: "B", answer: "garments", chinese_answer: "衣服", chinese_romanization: "yīfú" },
                { option: "C", answer: "victuals", chinese_answer: "食物", chinese_romanization: "shíwù" },
                { option: "D", answer: "trinkets", chinese_answer: "小饰品", chinese_romanization: "xiǎo shìpǐn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'victuals' means food or provisions." +
            "<br><br>" +
            "(A) 'tools' means devices or implements used to carry out a particular function." +
            "<br><br>" +
            "(B) 'garments' means items of clothing." +
            "<br><br>" +
            "(D) 'trinkets' means small ornaments or items of jewelry that are of little value.",
        chinese_explanation: "(C) '食物'一词意味着食物或粮食。" +
            "<br><br>" +
            "(A) '工具' 意味着用于执行特定功能的设备或器具。" +
            "<br><br>" +
            "(B) '衣服' 意味着衣服的物品。" +
            "<br><br>" +
            "(D) '小饰品' 意味着小的装饰品或价值不高的珠宝。"
    },
    {
        id: 3,
    question: "In the medical community, the __________ that certain diseases were caused by 'bad blood' persisted until modern science disproved it.",
    chinese_question: "在医学界，某些疾病由“坏血”引起的 __________ 一直存在，直到现代科学证明其错误。",
    answers: [
        { option: "A", answer: "theory", chinese_answer: "理论", chinese_romanization: "lǐlùn" },
        { option: "B", answer: "dogma", chinese_answer: "教条", chinese_romanization: "jiàotiáo" },
        { option: "C", answer: "hypothesis", chinese_answer: "假设", chinese_romanization: "jiǎshè" },
        { option: "D", answer: "discovery", chinese_answer: "发现", chinese_romanization: "fāxiàn" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'dogma' means a principle or set of principles laid down by an authority as incontrovertibly true." + 
        "<br><br>" + 
        "(A) 'theory' means a supposition or a system of ideas intended to explain something." + 
        "<br><br>" + 
        "(C) 'hypothesis' means a supposition or proposed explanation made on the basis of limited evidence as a starting point for further investigation." + 
        "<br><br>" + 
        "(D) 'discovery' means the action or process of discovering or being discovered.",
    chinese_explanation: "(B) '教条' 意味着权威规定的不可辩驳的原则或原则集。" + 
        "<br><br>" + 
        "(A) '理论' 意味着一种假设或一套思想体系，意在解释某事物。" + 
        "<br><br>" + 
        "(C) '假设' 意味着在有限证据基础上提出的假设或解释，作为进一步调查的起点。" + 
        "<br><br>" + 
        "(D) '发现' 意味着发现或被发现的过程。"
    },
    {
        id: 4,
        question: "She lived the life of a true __________, surrounding herself with opulent décor and always attending the most exclusive events.",
        chinese_question: "她过着真正的 __________ 生活，身边围绕着奢华的装饰，总是参加最独特的活动。",
        answers: [
                { option: "A", answer: "ascetic", chinese_answer: "苦行者", chinese_romanization: "kǔxíng zhě" },
                { option: "B", answer: "sybarite", chinese_answer: "享乐主义者", chinese_romanization: "xiǎnglè zhǔyì zhě" },
                { option: "C", answer: "stoic", chinese_answer: "坚忍者", chinese_romanization: "jiānrěn zhě" },
                { option: "D", answer: "frugal", chinese_answer: "节俭者", chinese_romanization: "jiéjiǎn zhě" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sybarite' means a person who is self-indulgent in their fondness for sensuous luxury." +
            "<br><br>" +
            "(A) 'ascetic' means a person who practices severe self-discipline and abstention." +
            "<br><br>" +
            "(C) 'stoic' means a person who can endure pain or hardship without showing their feelings or complaining." +
            "<br><br>" +
            "(D) 'frugal' means sparing or economical with regard to money or food.",
        chinese_explanation: "(B) '享乐主义者'一词意味着一个沉溺于感官奢华的人。" +
            "<br><br>" +
            "(A) '苦行者' 意味着一个实践严格自律和节制的人。" +
            "<br><br>" +
            "(C) '坚忍者' 意味着一个能在不表现出他们的感受或抱怨的情况下忍受痛苦或艰难的人。" +
            "<br><br>" +
            "(D) '节俭者' 意味着在涉及钱或食物方面节俭或经济的人。"
    },
    {
        id: 5,
        question: "The movement was built on the __________ of social justice and equality, inspiring many to join the cause.",
        chinese_question: "这场运动建立在社会正义和平等的 __________ 之上，激励了许多人加入这一事业。",
        answers: [
                { option: "A", answer: "foundation", chinese_answer: "基础", chinese_romanization: "jīchǔ" },
                { option: "B", answer: "edifice", chinese_answer: "大厦", chinese_romanization: "dàshà" },
                { option: "C", answer: "rumor", chinese_answer: "谣言", chinese_romanization: "yáoyán" },
                { option: "D", answer: "hypothesis", chinese_answer: "假设", chinese_romanization: "jiǎshè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'edifice' means a complex system of beliefs or an imposing structure, used figuratively to describe something built up or established." +
            "<br><br>" +
            "(A) 'foundation' means the lowest load-bearing part of a building, typically below ground level." +
            "<br><br>" +
            "(C) 'rumor' means a currently circulating story or report of uncertain or doubtful truth." +
            "<br><br>" +
            "(D) 'hypothesis' means a supposition or proposed explanation made on the basis of limited evidence as a starting point for further investigation.",
        chinese_explanation: "(B) '大厦'一词用于比喻，描述建立或确立的复杂信仰体系或宏伟结构。" +
            "<br><br>" +
            "(A) '基础' 意味着建筑物的最低承重部分，通常在地面以下。" +
            "<br><br>" +
            "(C) '谣言' 意味着一种目前流传的、不确定或可疑的故事或报告。" +
            "<br><br>" +
            "(D) '假设' 意味着在有限证据的基础上提出的假设或拟议的解释，作为进一步调查的起点。"
    },
    {
        id: 6,
        question: "The author's attempt to add emotional depth ended up as pure __________, making the narrative feel overly contrived and sugary.",
        chinese_question: "作者试图增加情感深度，结果变成了纯粹的 __________，使叙述显得过于矫揉造作和甜腻。",
        answers: [
                { option: "A", answer: "treacle", chinese_answer: "甜腻", chinese_romanization: "tián nì" },
                { option: "B", answer: "insight", chinese_answer: "洞察力", chinese_romanization: "dòngchá lì" },
                { option: "C", answer: "clarity", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
                { option: "D", answer: "brevity", chinese_answer: "简洁", chinese_romanization: "jiǎnjié" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'treacle' figuratively means cloying sentimentality or flattery." +
            "<br><br>" +
            "(B) 'insight' means the capacity to gain an accurate and deep understanding of someone or something." +
            "<br><br>" +
            "(C) 'clarity' means the quality of being coherent and intelligible." +
            "<br><br>" +
            "(D) 'brevity' means concise and exact use of words in writing or speech.",
        chinese_explanation: "(A) '甜腻' 在此语境下意指令人厌腻的多愁善感或奉承。" +
            "<br><br>" +
            "(B) '洞察力' 意味着获得准确和深入理解某人或某事的能力。" +
            "<br><br>" +
            "(C) '清晰' 意味着连贯和可理解的质量。" +
            "<br><br>" +
            "(D) '简洁' 意味着在写作或讲话中使用简洁和准确的词语。"
    },
    {
        id: 7,
        question: "The organization was built on the __________ of trust and mutual respect, fostering a collaborative environment.",
        chinese_question: "该组织建立在信任和相互尊重的 __________ 之上，营造了一个合作的环境。",
        answers: [
                { option: "A", answer: "chaos", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
                { option: "B", answer: "edifice", chinese_answer: "大厦", chinese_romanization: "dàshà" },
                { option: "C", answer: "mess", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
                { option: "D", answer: "disorder", chinese_answer: "无序", chinese_romanization: "wúxù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'edifice' means a complex system of beliefs or an imposing structure, used figuratively to describe something built up or established." +
            "<br><br>" +
            "(A) 'chaos' means complete disorder and confusion." +
            "<br><br>" +
            "(C) 'mess' means a dirty or untidy state of things or of a place." +
            "<br><br>" +
            "(D) 'disorder' means a state of confusion.",
        chinese_explanation: "(B) '大厦'一词用于比喻，描述建立或确立的复杂信仰体系或宏伟结构。" +
            "<br><br>" +
            "(A) '混乱' 意味着完全的混乱和困惑。" +
            "<br><br>" +
            "(C) '混乱' 意味着物品或地方的肮脏或凌乱状态。" +
            "<br><br>" +
            "(D) '无序' 意味着一种混乱状态。"
    },
    {
        id: 8,
        question: "Even though he faced several __________, he remained determined to complete his degree and succeed in his career.",
        chinese_question: "尽管他面临几个 __________，但他仍然决心完成学位并在事业上取得成功。",
        answers: [
                { option: "A", answer: "advantages", chinese_answer: "优势", chinese_romanization: "yōushì" },
                { option: "B", answer: "impediments", chinese_answer: "障碍", chinese_romanization: "zhàng'ài" },
                { option: "C", answer: "benefits", chinese_answer: "好处", chinese_romanization: "hǎochù" },
                { option: "D", answer: "incentives", chinese_answer: "激励", chinese_romanization: "jīlì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'impediments' means hindrances or obstructions in doing something." +
            "<br><br>" +
            "(A) 'advantages' means conditions or circumstances that put one in a favorable or superior position." +
            "<br><br>" +
            "(C) 'benefits' means advantages or profits gained from something." +
            "<br><br>" +
            "(D) 'incentives' means things that motivate or encourage someone to do something.",
        chinese_explanation: "(B) '障碍'一词意味着做某事的障碍或阻碍。" +
            "<br><br>" +
            "(A) '优势' 意味着使某人处于有利或优越地位的条件或环境。" +
            "<br><br>" +
            "(C) '好处' 意味着从某事中获得的优势或利益。" +
            "<br><br>" +
            "(D) '激励' 意味着激励或鼓励某人做某事的东西。"
    },
    {
        id: 9,
        question: "The old man's speech was peppered with __________, each one a gem of wisdom gleaned from his years of experience.",
        chinese_question: "老人的讲话中充满了 __________，每一句都是他多年经验中提炼出的智慧结晶。",
        answers: [
                { option: "A", answer: "aphorisms", chinese_answer: "格言", chinese_romanization: "géyán" },
                { option: "B", answer: "monologues", chinese_answer: "独白", chinese_romanization: "dúbái" },
                { option: "C", answer: "discourses", chinese_answer: "论述", chinese_romanization: "lùnshù" },
                { option: "D", answer: "soliloquies", chinese_answer: "自言自语", chinese_romanization: "zìyán zìyǔ" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'aphorisms' means concise statements of a principle or truth." +
            "<br><br>" +
            "(B) 'monologues' means long speeches by one actor in a play or movie, or as part of a theatrical or broadcast program." +
            "<br><br>" +
            "(C) 'discourses' means written or spoken communication or debate." +
            "<br><br>" +
            "(D) 'soliloquies' means acts of speaking one's thoughts aloud when by oneself or regardless of any hearers, especially by a character in a play.",
        chinese_explanation: "(A) '格言'一词意味着对原则或真理的简洁陈述。" +
            "<br><br>" +
            "(B) '独白' 意味着戏剧或电影中一个演员的长篇讲话，或作为戏剧或广播节目的一部分。" +
            "<br><br>" +
            "(C) '论述' 意味着书面或口头的交流或辩论。" +
            "<br><br>" +
            "(D) '自言自语' 意味着一个人在独处时或不考虑任何听众时大声说出的想法，特别是戏剧中的角色。"
    },
    {
        id: 10,
        question: "The politician’s __________ was clear when he was able to push through new legislation with minimal opposition.",
        chinese_question: "这位政治家的 __________ 显而易见，他能够以极少的反对推动新的立法。",
        answers: [
            { option: "A", answer: "clout", chinese_answer: "影响力", chinese_romanization: "yǐngxiǎng lì" },
            { option: "B", answer: "ignorance", chinese_answer: "无知", chinese_romanization: "wúzhī" },
            { option: "C", answer: "failure", chinese_answer: "失败", chinese_romanization: "shībài" },
            { option: "D", answer: "humility", chinese_answer: "谦卑", chinese_romanization: "qiānbēi" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'clout' means influence or power, especially in politics or business." +
            "<br><br>" +
            "(B) 'ignorance' means lack of knowledge or information." +
            "<br><br>" +
            "(C) 'failure' means lack of success." +
            "<br><br>" +
            "(D) 'humility' means a modest or low view of one's own importance.",
        chinese_explanation: "(A) '影响力' 意味着特别是在政治或商业中的影响力或权力。" +
            "<br><br>" +
            "(B) '无知' 意味着缺乏知识或信息。" +
            "<br><br>" +
            "(C) '失败' 意味着缺乏成功。" +
            "<br><br>" +
            "(D) '谦卑' 意味着对自己重要性的谦逊或低调看法。"
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
