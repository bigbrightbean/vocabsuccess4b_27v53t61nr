// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The committee's decision appeared to be __________, favoring the interests of one group over the general good.",
    chinese_question: "委员会的决定似乎是 __________ 的，偏袒某一群体的利益而忽视整体利益。",
    answers: [
        { option: "A", answer: "partisan", chinese_answer: "偏袒", chinese_romanization: "piāntǎn" },
        { option: "B", answer: "fair", chinese_answer: "公平", chinese_romanization: "gōngpíng" },
        { option: "C", answer: "balanced", chinese_answer: "平衡", chinese_romanization: "pínghéng" },
        { option: "D", answer: "impartial", chinese_answer: "公正", chinese_romanization: "gōngzhèng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'partisan' means strongly supporting a particular political party, plan, or leader, usually without considering the other choices carefully." +
        "<br><br>" +
        "(B) 'fair' means in accordance with the rules or standards; legitimate." +
        "<br><br>" +
        "(C) 'balanced' means keeping or showing a balance; arranged in good proportions." +
        "<br><br>" +
        "(D) 'impartial' means treating all rivals or disputants equally; fair and just.",
    chinese_explanation: "(A) '偏袒' 意味着强烈支持某个政党、计划或领导者，通常不仔细考虑其他选择。" +
        "<br><br>" +
        "(B) '公平' 意味着符合规则或标准；合法。" +
        "<br><br>" +
        "(C) '平衡' 意味着保持或显示平衡；安排得当。" +
        "<br><br>" +
        "(D) '公正' 意味着对所有对手或争执者一视同仁；公平和正义。"
    },
    {
        id: 2,
            question: "Her __________ opinion about the new policy made her feedback less credible.",
            chinese_question: "她对新政策的__________意见使她的反馈不那么可信。",
            answers: [
                { option: "A", answer: "unbiased", chinese_answer: "公正的", chinese_romanization: "gōngzhèng de" },
                { option: "B", answer: "fair", chinese_answer: "公平的", chinese_romanization: "gōngpíng de" },
                { option: "C", answer: "impartial", chinese_answer: "无偏见的", chinese_romanization: "wú piānjiàn de" },
                { option: "D", answer: "partial", chinese_answer: "有偏见的", chinese_romanization: "yǒu piānjiàn de" }
            ],
            correctAnswer: "D",
            explanation: "(D) 'partial' means favoring one side in a dispute above the other; biased. Figuratively, it can mean not being fully objective or balanced." +
                "<br><br>" +
                "(A) 'unbiased' means showing no prejudice for or against something; impartial." +
                "<br><br>" +
                "(B) 'fair' means in accordance with the rules or standards; legitimate." +
                "<br><br>" +
                "(C) 'impartial' means treating all rivals or disputants equally; fair and just.",
            chinese_explanation: "(D) '有偏见的' 意味着在争端中偏袒一方；有偏见的。比喻地，它可以表示不完全客观或不平衡的。" +
                "<br><br>" +
                "(A) '公正的' 意味着对某事没有偏见的；公正的。" +
                "<br><br>" +
                "(B) '公平的' 意味着按照规则或标准；合法的。" +
                "<br><br>" +
                "(C) '无偏见的' 意味着平等对待所有对手或争论者的；公正的。"
    },
    {
        id: 3,
        question: "Her __________ attitude towards the guests made her an unpopular host, as she often interrupted conversations and disregarded their feelings.",
        chinese_question: "她对客人们的 __________ 态度使她成为不受欢迎的主人，因为她经常打断谈话并无视他们的感受。",
        answers: [
            { option: "A", answer: "impertinent", chinese_answer: "无礼的", chinese_romanization: "wúlǐ de" },
            { option: "B", answer: "considerate", chinese_answer: "体贴的", chinese_romanization: "tǐtiē de" },
            { option: "C", answer: "gracious", chinese_answer: "亲切的", chinese_romanization: "qīnqiè de" },
            { option: "D", answer: "courteous", chinese_answer: "有礼貌的", chinese_romanization: "yǒu lǐmào de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'impertinent' means not showing proper respect; rude." +
            "<br><br>" +
            "(B) 'considerate' means careful not to cause inconvenience or hurt to others." +
            "<br><br>" +
            "(C) 'gracious' means courteous, kind, and pleasant." +
            "<br><br>" +
            "(D) 'courteous' means polite, respectful, or considerate in manner.",
        chinese_explanation: "(A) '无礼的' 意味着没有表现出应有的尊重；粗鲁的。" +
            "<br><br>" +
            "(B) '体贴的' 意味着小心不引起不便或伤害他人的。" +
            "<br><br>" +
            "(C) '亲切的' 意味着有礼貌、友好和愉快的。" +
            "<br><br>" +
            "(D) '有礼貌的' 意味着有礼貌、尊重或体贴的。"
    },
    {
        id: 4,
        question: "The __________ child complained about everything, from the temperature of his food to the color of his shoes.",
        chinese_question: "这个 __________ 的孩子抱怨一切，从食物的温度到鞋子的颜色。",
        answers: [
                { option: "A", answer: "cheerful", chinese_answer: "快乐的", chinese_romanization: "kuàilè de" },
                { option: "B", answer: "content", chinese_answer: "满意的", chinese_romanization: "mǎnyì de" },
                { option: "C", answer: "querulous", chinese_answer: "爱抱怨的", chinese_romanization: "ài bàoyuàn de" },
                { option: "D", answer: "satisfied", chinese_answer: "满足的", chinese_romanization: "mǎnzú de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'querulous' means complaining in a petulant or whining manner." +
            "<br><br>" +
            "(A) 'cheerful' means noticeably happy and optimistic." +
            "<br><br>" +
            "(B) 'content' means in a state of peaceful happiness." +
            "<br><br>" +
            "(D) 'satisfied' means contented; pleased.",
        chinese_explanation: "(C) '爱抱怨的' 一词意味着以任性或抱怨的方式抱怨。" +
            "<br><br>" +
            "(A) '快乐的' 意味着显著的幸福和乐观。" +
            "<br><br>" +
            "(B) '满意的' 意味着处于和平幸福的状态。" +
            "<br><br>" +
            "(D) '满足的' 意味着满意的；高兴的。"
    },
    {
        id: 5,
    question: "His betrayal caused __________ harm to their friendship, which could never be mended.",
    chinese_question: "他的背叛对他们的友谊造成了 __________ 的伤害，永远无法弥补。",
    answers: [
        { option: "A", answer: "minor", chinese_answer: "轻微", chinese_romanization: "qīngwēi" },
        { option: "B", answer: "temporary", chinese_answer: "临时", chinese_romanization: "línshí" },
        { option: "C", answer: "irreparable", chinese_answer: "不可修复", chinese_romanization: "bùkě xiūfù" },
        { option: "D", answer: "negligible", chinese_answer: "可忽略", chinese_romanization: "kě hūlüè" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'irreparable' means impossible to rectify or repair." +
        "<br><br>" +
        "(A) 'minor' means lesser in importance, seriousness, or significance." +
        "<br><br>" +
        "(B) 'temporary' means lasting for only a limited period of time; not permanent." +
        "<br><br>" +
        "(D) 'negligible' means so small or unimportant as to be not worth considering; insignificant.",
    chinese_explanation: "(C) '不可修复' 意味着无法挽回或修复的。" +
        "<br><br>" +
        "(A) '轻微' 意味着重要性、严重性或意义较小的。" +
        "<br><br>" +
        "(B) '临时' 意味着只持续一段有限的时间；不永久的。" +
        "<br><br>" +
        "(D) '可忽略' 意味着太小或不重要，不值得考虑；不重要的。"
    },
    {
        id: 6,
    question: "Her explanation was __________, missing the key points and leaving us more confused.",
    chinese_question: "她的解释 __________，缺少关键点，让我们更加困惑。",
    answers: [
        { option: "A", answer: "clear", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
        { option: "B", answer: "enlightening", chinese_answer: "启发", chinese_romanization: "qǐfā" },
        { option: "C", answer: "deficient", chinese_answer: "不足", chinese_romanization: "bùzú" },
        { option: "D", answer: "thorough", chinese_answer: "彻底", chinese_romanization: "chètǐ" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'deficient' means lacking some essential quality or element." +
        "<br><br>" +
        "(A) 'clear' means easy to understand." +
        "<br><br>" +
        "(B) 'enlightening' means giving greater knowledge and understanding." +
        "<br><br>" +
        "(D) 'thorough' means complete with regard to every detail.",
    chinese_explanation: "(C) '不足' 意味着缺乏某些必要的质量或元素。" +
        "<br><br>" +
        "(A) '清晰' 意味着容易理解。" +
        "<br><br>" +
        "(B) '启发' 意味着提供更大的知识和理解。" +
        "<br><br>" +
        "(D) '彻底' 意味着涉及每一个细节的完整。"
    },
    {
        id: 7,
    question: "The company's new __________ approach to management aimed to consider everyone's opinions and ideas, fostering a more collaborative work environment.",
    chinese_question: "公司新的 __________ 管理方法旨在考虑每个人的意见和想法，促进更加协作的工作环境。",
    answers: [
        { option: "A", answer: "inclusive", chinese_answer: "包容的", chinese_romanization: "bāoróng de" },
        { option: "B", answer: "isolated", chinese_answer: "孤立的", chinese_romanization: "gūlì de" },
        { option: "C", answer: "limited", chinese_answer: "有限的", chinese_romanization: "yǒuxiàn de" },
        { option: "D", answer: "narrow", chinese_answer: "狭窄的", chinese_romanization: "xiázhǎi de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'inclusive' means including all the services or items normally expected or required." +
        "<br><br>" +
        "(B) 'isolated' means far away from other places, buildings, or people; remote." +
        "<br><br>" +
        "(C) 'limited' means restricted in size, amount, or extent." +
        "<br><br>" +
        "(D) 'narrow' means limited in extent, amount, or scope.",
    chinese_explanation: "(A) '包容的' 意味着包括所有通常期望或需要的服务或项目。" +
        "<br><br>" +
        "(B) '孤立的' 意味着远离其他地方、建筑物或人的；偏远的。" +
        "<br><br>" +
        "(C) '有限的' 意味着在大小、数量或范围上受限的。" +
        "<br><br>" +
        "(D) '狭窄的' 意味着范围、数量或范围有限的。"
    },
    {
        id: 8,
        question: "The __________ aspects of their relationship eventually led to a breakup, as neither could resolve the ongoing issues.",
        chinese_question: "他们关系中的 __________ 方面最终导致了分手，因为双方都无法解决持续存在的问题。",
        answers: [
            { option: "A", answer: "smooth", chinese_answer: "顺利的", chinese_romanization: "shùnlì de" },
            { option: "B", answer: "unproblematic", chinese_answer: "没有问题的", chinese_romanization: "méiyǒu wèntí de" },
            { option: "C", answer: "problematic", chinese_answer: "有问题的", chinese_romanization: "yǒu wèntí de" },
            { option: "D", answer: "agreeable", chinese_answer: "令人愉快的", chinese_romanization: "lìng rén yúkuài de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'problematic' means constituting or presenting a problem or difficulty." +
            "<br><br>" +
            "(A) 'smooth' means having an even and regular surface or consistency; free from perceptible projections, lumps, or indentations." +
            "<br><br>" +
            "(B) 'unproblematic' means not constituting or presenting a problem or difficulty." +
            "<br><br>" +
            "(D) 'agreeable' means enjoyable and pleasurable; pleasant.",
        chinese_explanation: "(C) '有问题的' 意味着构成或呈现问题或困难的。" +
            "<br><br>" +
            "(A) '顺利的' 意味着具有平滑和规律的表面或一致性；没有明显的凸起、团块或凹痕的。" +
            "<br><br>" +
            "(B) '没有问题的' 意味着不构成或不呈现问题或困难的。" +
            "<br><br>" +
            "(D) '令人愉快的' 意味着愉快和愉悦的；令人愉快的。"
    },
    {
        id: 9,
    question: "The __________ system was unable to support the growing demands of the company.",
    chinese_question: "这个 __________ 的系统无法支持公司的增长需求。",
    answers: [
        { option: "A", answer: "efficient", chinese_answer: "高效", chinese_romanization: "gāoxiào" },
        { option: "B", answer: "advanced", chinese_answer: "先进", chinese_romanization: "xiānjìn" },
        { option: "C", answer: "defective", chinese_answer: "有缺陷", chinese_romanization: "yǒu quēxiàn" },
        { option: "D", answer: "modern", chinese_answer: "现代", chinese_romanization: "xiàndài" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'defective' means having a fault or flaw." +
        "<br><br>" +
        "(A) 'efficient' means working in a well-organized and competent way." +
        "<br><br>" +
        "(B) 'advanced' means highly developed or complex." +
        "<br><br>" +
        "(D) 'modern' means relating to the present or recent times.",
    chinese_explanation: "(C) “有缺陷” 意味着有故障或瑕疵。" +
        "<br><br>" +
        "(A) '高效' 意味着以良好组织和能力工作。" +
        "<br><br>" +
        "(B) '先进' 意味着高度发达或复杂。" +
        "<br><br>" +
        "(D) '现代' 意味着与现在或最近的时代有关。"
    },
    {
        id: 10,
    question: "The __________ telemarketer wouldn't stop calling, even after multiple rejections.",
    chinese_question: "纠缠不休的电话推销员在多次拒绝后仍然不停地打电话。",
    answers: [
        { option: "A", answer: "polite", chinese_answer: "有礼貌的", chinese_romanization: "yǒu lǐmào de" },
        { option: "B", answer: "importunate", chinese_answer: "纠缠不休的", chinese_romanization: "jiūchán bùxiū de" },
        { option: "C", answer: "courteous", chinese_answer: "客气的", chinese_romanization: "kèqì de" },
        { option: "D", answer: "respectful", chinese_answer: "尊重的", chinese_romanization: "zūnzhòng de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'importunate' used figuratively means persistently demanding or annoying." +
        "<br><br>" +
        "(A) 'polite' means showing behavior that is respectful and considerate of other people." +
        "<br><br>" +
        "(C) 'courteous' means polite, respectful, or considerate in manner." +
        "<br><br>" +
        "(D) 'respectful' means feeling or showing deference and respect.",
    chinese_explanation: "(B) '纠缠不休的' 在比喻意义上指坚持不断地要求或令人恼火。" +
        "<br><br>" +
        "(A) '有礼貌的' 意味着表现出对他人的尊重和体贴。" +
        "<br><br>" +
        "(C) '客气的' 意味着礼貌、尊重或体贴的行为。" +
        "<br><br>" +
        "(D) '尊重的' 意味着表现出尊重和敬意。"
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
