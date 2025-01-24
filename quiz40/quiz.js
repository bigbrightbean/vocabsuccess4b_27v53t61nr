// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The software's __________ design made it popular among professionals who needed advanced features and reliability.",
    chinese_question: "该软件的 __________ 设计使其在需要高级功能和可靠性的专业人士中很受欢迎。",
    answers: [
        { option: "A", answer: "simplistic", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
        { option: "B", answer: "unsophisticated", chinese_answer: "不成熟的", chinese_romanization: "bù chéngshú de" },
        { option: "C", answer: "sophisticated", chinese_answer: "复杂的", chinese_romanization: "fùzá de" },
        { option: "D", answer: "rudimentary", chinese_answer: "基本的", chinese_romanization: "jīběn de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'sophisticated' means complex or intricate." +
        "<br><br>" +
        "(A) 'simplistic' means treating complex issues and problems as if they were much simpler than they really are." +
        "<br><br>" +
        "(B) 'unsophisticated' means lacking refined worldly knowledge or tastes." +
        "<br><br>" +
        "(D) 'rudimentary' means involving or limited to basic principles.",
    chinese_explanation: "(C) '复杂的' 意味着复杂或精细的。" +
        "<br><br>" +
        "(A) '简单的' 意味着将复杂问题视为比实际简单得多。" +
        "<br><br>" +
        "(B) '不成熟的' 意味着缺乏成熟世俗知识或品味的。" +
        "<br><br>" +
        "(D) '基本的' 意味着涉及或限于基本原则的。"
    },
    {
        id: 2,
    question: "Her decision to move abroad was a __________ choice that would change her life forever.",
    chinese_question: "她决定移居国外是一个 __________ 的选择，将永远改变她的生活。",
    answers: [
        { option: "A", answer: "inconsequential", chinese_answer: "无关紧要", chinese_romanization: "wúguān jǐnyào" },
        { option: "B", answer: "momentous", chinese_answer: "重要", chinese_romanization: "zhòngyào" },
        { option: "C", answer: "trivial", chinese_answer: "琐碎", chinese_romanization: "suǒsuì" },
        { option: "D", answer: "negligible", chinese_answer: "微不足道", chinese_romanization: "wēi bù zú dào" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'momentous' means of great importance or significance, especially in its bearing on the future." +
        "<br><br>" +
        "(A) 'inconsequential' means not important or significant." +
        "<br><br>" +
        "(C) 'trivial' means of little value or importance." +
        "<br><br>" +
        "(D) 'negligible' means so small or unimportant as to be not worth considering.",
    chinese_explanation: "(B) '重要' 意味着具有重大意义的，尤其是对未来的影响。" +
        "<br><br>" +
        "(A) '无关紧要' 意味着不重要或不显著。" +
        "<br><br>" +
        "(C) '琐碎' 意味着价值或重要性很小。" +
        "<br><br>" +
        "(D) '微不足道' 意味着太小或不重要，不值得考虑。"
    },
    {
        id: 3,
        question: "His __________ nature allowed him to adapt quickly to the changing circumstances.",
        chinese_question: "他__________的性格使他能够迅速适应不断变化的环境。",
        answers: [
            { option: "A", answer: "helpless", chinese_answer: "无助的", chinese_romanization: "wúzhù de" },
            { option: "B", answer: "inept", chinese_answer: "笨拙的", chinese_romanization: "bènzhuō de" },
            { option: "C", answer: "resourceful", chinese_answer: "足智多谋的", chinese_romanization: "zúzhì duōmóu de" },
            { option: "D", answer: "unprepared", chinese_answer: "未准备好的", chinese_romanization: "wèi zhǔnbèi hǎo de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'resourceful' means having the ability to find quick and clever ways to overcome difficulties. Figuratively, it can mean being adaptable and innovative in various situations." +
            "<br><br>" +
            "(A) 'helpless' means unable to defend oneself or to act without help." +
            "<br><br>" +
            "(B) 'inept' means having or showing no skill; clumsy." +
            "<br><br>" +
            "(D) 'unprepared' means not ready or able to deal with something.",
        chinese_explanation: "(C) '足智多谋的'一词意味着能够快速和巧妙地克服困难的。比喻地，它可以表示在各种情况下适应和创新的。" +
            "<br><br>" +
            "(A) '无助的' 意味着不能自卫或不能在没有帮助的情况下行动的。" +
            "<br><br>" +
            "(B) '笨拙的' 意味着没有或表现出没有技能的；笨拙的。" +
            "<br><br>" +
            "(D) '未准备好的' 意味着没有准备好或能够应对某事的。"
    },
    {
        id: 4,
        question: "Her __________ comment about the weather made everyone laugh, as it highlighted the irony of the situation.",
        chinese_question: "她对天气的 __________ 评论让大家都笑了，因为它突出了这种情况的讽刺意味。",
        answers: [
            { option: "A", answer: "wry", chinese_answer: "嘲讽的", chinese_romanization: "cháofèng de" },
            { option: "B", answer: "serious", chinese_answer: "严肃的", chinese_romanization: "yánsù de" },
            { option: "C", answer: "cheerful", chinese_answer: "快乐的", chinese_romanization: "kuàilè de" },
            { option: "D", answer: "earnest", chinese_answer: "认真的", chinese_romanization: "rènzhēn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'wry' means using or expressing dry, especially mocking, humor." +
            "<br><br>" +
            "(B) 'serious' means solemn or thoughtful in character or manner." +
            "<br><br>" +
            "(C) 'cheerful' means noticeably happy and optimistic." +
            "<br><br>" +
            "(D) 'earnest' means resulting from or showing sincere and intense conviction.",
        chinese_explanation: "(A) '嘲讽的' 意味着使用或表达干涩的，特别是嘲弄的幽默。" +
            "<br><br>" +
            "(B) '严肃的' 意味着性格或举止严肃或深思的。" +
            "<br><br>" +
            "(C) '快乐的' 意味着显著的幸福和乐观。" +
            "<br><br>" +
            "(D) '认真的' 意味着源于或表现出真诚和强烈的信念。"
    },
    {
        id: 5,
        question: "His __________ predictions about the future economy left everyone puzzled and anxious.",
        chinese_question: "他对未来经济的 __________ 预测让所有人都感到困惑和不安。",
        answers: [
            { option: "A", answer: "straightforward", chinese_answer: "直截了当的", chinese_romanization: "zhíjiéliǎodāng de" },
            { option: "B", answer: "oracular", chinese_answer: "神谕般的", chinese_romanization: "shényù bān de" },
            { option: "C", answer: "direct", chinese_answer: "直接的", chinese_romanization: "zhíjiē de" },
            { option: "D", answer: "transparent", chinese_answer: "透明的", chinese_romanization: "tòumíng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'oracular' means resembling an oracle (as in solemnity of delivery); obscurely prophetic." +
            "<br><br>" +
            "(A) 'straightforward' means uncomplicated and easy to understand." +
            "<br><br>" +
            "(C) 'direct' means straightforward and honest." +
            "<br><br>" +
            "(D) 'transparent' means easy to perceive or detect.",
        chinese_explanation: "(B) '神谕般的' 意味着类似于神谕（如庄重的传递）；隐晦的预言。" +
            "<br><br>" +
            "(A) '直截了当的' 意味着不复杂且易于理解的。" +
            "<br><br>" +
            "(C) '直接的' 意味着直截了当和诚实的。" +
            "<br><br>" +
            "(D) '透明的' 意味着容易感知或检测的。"
    },
    {
        id: 6,
        question: "The idea that aliens built the pyramids is __________ and not supported by any credible evidence.",
        chinese_question: "外星人建造金字塔的想法是 __________ 的，没有任何可信的证据支持。",
        answers: [
                { option: "A", answer: "plausible", chinese_answer: "合理的", chinese_romanization: "hélǐ de" },
                { option: "B", answer: "preposterous", chinese_answer: "荒谬的", chinese_romanization: "huāngmiù de" },
                { option: "C", answer: "sensible", chinese_answer: "明智的", chinese_romanization: "míngzhì de" },
                { option: "D", answer: "logical", chinese_answer: "合乎逻辑的", chinese_romanization: "héhū luójí de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'preposterous' means contrary to reason or common sense; utterly absurd or ridiculous." +
            "<br><br>" +
            "(A) 'plausible' means (of an argument or statement) seeming reasonable or probable." +
            "<br><br>" +
            "(C) 'sensible' means (of a statement or course of action) chosen in accordance with wisdom or prudence; likely to be of benefit." +
            "<br><br>" +
            "(D) 'logical' means of or according to the rules of logic or formal argument.",
        chinese_explanation: "(B) '荒谬的' 一词意味着违反理性或常识的；完全荒谬或荒唐的。" +
            "<br><br>" +
            "(A) '合理的' 意味着（论点或陈述）似乎合理或可能的。" +
            "<br><br>" +
            "(C) '明智的' 意味着（陈述或行动方针）根据智慧或谨慎选择的；可能有益的。" +
            "<br><br>" +
            "(D) '合乎逻辑的' 意味着符合逻辑规则或正式论证的。"
    },
    {
        id: 7,
    question: "The negotiations broke down quickly due to the __________ attitude of both parties, who refused to compromise.",
    chinese_question: "由于双方的 __________ 态度，谈判很快就破裂了，双方都拒绝妥协。",
    answers: [
        { option: "A", answer: "hostile", chinese_answer: "敌对的", chinese_romanization: "díduì de" },
        { option: "B", answer: "amicable", chinese_answer: "友好的", chinese_romanization: "yǒuhǎo de" },
        { option: "C", answer: "cooperative", chinese_answer: "合作的", chinese_romanization: "hézuò de" },
        { option: "D", answer: "neutral", chinese_answer: "中立的", chinese_romanization: "zhōnglì de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'hostile' means unfriendly; antagonistic." +
        "<br><br>" +
        "(B) 'amicable' means having a spirit of friendliness." +
        "<br><br>" +
        "(C) 'cooperative' means involving mutual assistance in working toward a common goal." +
        "<br><br>" +
        "(D) 'neutral' means not supporting or helping either side in a conflict or disagreement.",
    chinese_explanation: "(A) '敌对的' 意味着不友好的；对抗的。" +
        "<br><br>" +
        "(B) '友好的' 意味着有友好精神的。" +
        "<br><br>" +
        "(C) '合作的' 意味着在共同目标的工作中相互帮助的。" +
        "<br><br>" +
        "(D) '中立的' 意味着在冲突或争议中不支持或帮助任何一方的。"
    },
    {
        id: 8,
    question: "His __________ insight into the company's issues helped resolve long-standing problems.",
    chinese_question: "他对公司问题的 __________ 洞察力帮助解决了长期存在的问题。",
    answers: [
        { option: "A", answer: "dull", chinese_answer: "迟钝", chinese_romanization: "chídùn" },
        { option: "B", answer: "keen", chinese_answer: "敏锐", chinese_romanization: "mǐnruì" },
        { option: "C", answer: "disinterested", chinese_answer: "不感兴趣", chinese_romanization: "bù gǎn xìngqù" },
        { option: "D", answer: "naive", chinese_answer: "幼稚", chinese_romanization: "yòuzhì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'keen' means having or showing eagerness or enthusiasm." +
        "<br><br>" +
        "(A) 'dull' means lacking interest or excitement." +
        "<br><br>" +
        "(C) 'disinterested' means not influenced by considerations of personal advantage." +
        "<br><br>" +
        "(D) 'naive' means showing a lack of experience, wisdom, or judgment.",
    chinese_explanation: "(B) '敏锐' 意味着有或表现出热情或热心。" +
        "<br><br>" +
        "(A) '迟钝' 意味着缺乏兴趣或兴奋。" +
        "<br><br>" +
        "(C) '不感兴趣' 意味着不受个人利益考虑的影响。" +
        "<br><br>" +
        "(D) '幼稚' 意味着表现出缺乏经验、智慧或判断力。"
    },
    {
        id: 9,
    question: "Their __________ approach to business practices keeps their methods and strategies confidential.",
    chinese_question: "他们对商业实践的 __________ 方法使他们的方法和策略保密。",
    answers: [
        { option: "A", answer: "transparent", chinese_answer: "透明的", chinese_romanization: "tòumíng de" },
        { option: "B", answer: "proprietary", chinese_answer: "专有的", chinese_romanization: "zhuānyǒu de" },
        { option: "C", answer: "open", chinese_answer: "开放的", chinese_romanization: "kāifàng de" },
        { option: "D", answer: "accessible", chinese_answer: "可访问的", chinese_romanization: "kě fǎngwèn de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'proprietary' means relating to an owner or ownership; protected by a patent, copyright, or trademark." +
        "<br><br>" +
        "(A) 'transparent' means easy to perceive or detect." +
        "<br><br>" +
        "(C) 'open' means allowing access, passage, or a view through an empty space." +
        "<br><br>" +
        "(D) 'accessible' means able to be reached or entered.",
    chinese_explanation: "(B) '专有的' 意味着与所有者或所有权有关的；受专利、版权或商标保护的。" +
        "<br><br>" +
        "(A) '透明的' 意味着容易感知或检测的。" +
        "<br><br>" +
        "(C) '开放的' 意味着允许通过一个空的空间进行访问、通过或观看的。" +
        "<br><br>" +
        "(D) '可访问的' 意味着能够到达或进入的。"
    },
    {
        id: 10,
        question: "To achieve __________ performance, the athlete followed a strict training regimen and a balanced diet tailored to his needs.",
        chinese_question: "为了达到 __________ 的表现，这位运动员遵循严格的训练计划和根据他需要定制的均衡饮食。",
        answers: [
            { option: "A", answer: "subpar", chinese_answer: "次等的", chinese_romanization: "cìděng de" },
            { option: "B", answer: "mediocre", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "C", answer: "optimal", chinese_answer: "最佳的", chinese_romanization: "zuìjiā de" },
            { option: "D", answer: "inferior", chinese_answer: "劣质的", chinese_romanization: "lièzhì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'optimal' means best or most favorable; optimum." +
            "<br><br>" +
            "(A) 'subpar' means below an average level." +
            "<br><br>" +
            "(B) 'mediocre' means of only moderate quality; not very good." +
            "<br><br>" +
            "(D) 'inferior' means lower in rank, status, or quality.",
        chinese_explanation: "(C) '最佳的' 意味着最好或最有利的。" +
            "<br><br>" +
            "(A) '次等的' 意味着低于平均水平的。" +
            "<br><br>" +
            "(B) '普通的' 意味着质量一般的；不是很好的。" +
            "<br><br>" +
            "(D) '劣质的' 意味着在等级、地位或质量上较低的。"
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
