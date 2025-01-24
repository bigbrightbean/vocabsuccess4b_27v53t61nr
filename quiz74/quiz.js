// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
question: "The student's __________ to the school's dress code demonstrated her respect for the institution.",
chinese_question: "学生对学校着装规定的 __________ 表现出了她对学校的尊重。",
answers: [
    { option: "A", answer: "rebellion", chinese_answer: "反抗", chinese_romanization: "fǎnkàng" },
    { option: "B", answer: "compliance", chinese_answer: "服从", chinese_romanization: "fúcóng" },
    { option: "C", answer: "disregard", chinese_answer: "无视", chinese_romanization: "wúshì" },
    { option: "D", answer: "defiance", chinese_answer: "抵抗", chinese_romanization: "dǐkàng" }
],
correctAnswer: "B",
explanation: "(B) 'compliance' means obedience to a request or command." +
    "<br><br>" +
    "(A) 'rebellion' means opposition to authority." +
    "<br><br>" +
    "(C) 'disregard' means lack of consideration." +
    "<br><br>" +
    "(D) 'defiance' means bold resistance.",
chinese_explanation: "(B) '服从' 意味着服从请求或命令。" +
    "<br><br>" +
    "(A) '反抗' 意味着反对权威。" +
    "<br><br>" +
    "(C) '无视' 意味着缺乏考虑。" +
    "<br><br>" +
    "(D) '抵抗' 意味着大胆抵抗。"
    },
    {
        id: 2,
    question: "The __________ of funding forced the school to cancel the new program.",
    chinese_question: " __________ 资金迫使学校取消了新项目。",
    answers: [
        { option: "A", answer: "surplus", chinese_answer: "过剩", chinese_romanization: "guòshèng" },
        { option: "B", answer: "abundance", chinese_answer: "丰富", chinese_romanization: "fēngfù" },
        { option: "C", answer: "lack", chinese_answer: "缺乏", chinese_romanization: "quēfá" },
        { option: "D", answer: "excess", chinese_answer: "过量", chinese_romanization: "guòliàng" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'lack' means the state of being without or not having enough of something." + 
        "<br><br>" + 
        "(A) 'surplus' means an amount of something left over when requirements have been met; an excess of production or supply." + 
        "<br><br>" + 
        "(B) 'abundance' means a very large quantity of something." + 
        "<br><br>" + 
        "(D) 'excess' means an amount of something that is more than necessary, permitted, or desirable.",
    chinese_explanation: "(C) '缺乏' 意味着没有或不足够某物的状态。" + 
        "<br><br>" + 
        "(A) '过剩' 意味着在满足需求后剩余的数量；生产或供应过剩。" + 
        "<br><br>" + 
        "(B) '丰富' 意味着大量的某物。" + 
        "<br><br>" + 
        "(D) '过量' 意味着超过必要、允许或理想的数量。"
    },
    {
        id: 3,
    question: "The __________ of his sorrow was evident to everyone who saw him after the loss.",
    chinese_question: "在失去之后，他的悲伤的 __________ 对每个看到他的人来说都是显而易见的。",
    answers: [
        { option: "A", answer: "joy", chinese_answer: "快乐", chinese_romanization: "kuàilè" },
        { option: "B", answer: "profundity", chinese_answer: "深度", chinese_romanization: "shēndù" },
        { option: "C", answer: "shallowness", chinese_answer: "浅薄", chinese_romanization: "qiǎnbó" },
        { option: "D", answer: "brevity", chinese_answer: "简洁", chinese_romanization: "jiǎnjié" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'profundity' figuratively means great depth of emotion or feeling." +
        "<br><br>" +
        "(A) 'joy' means a feeling of great pleasure and happiness." +
        "<br><br>" +
        "(C) 'shallowness' means lack of depth." +
        "<br><br>" +
        "(D) 'brevity' means concise and exact use of words in writing or speech.",
    chinese_explanation: "(B) '深度' 在此语境下意指情感或感觉的巨大深度。" +
        "<br><br>" +
        "(A) '快乐' 意味着极大的愉快和幸福感。" +
        "<br><br>" +
        "(C) '浅薄' 意味着缺乏深度。" +
        "<br><br>" +
        "(D) '简洁' 意味着在写作或讲话中使用简明和准确的词语。"
    },
    {
        id: 4,
        question: "The community center was named in her honor, a lasting __________ to her years of volunteer work and dedication.",
        chinese_question: "社区中心以她的名字命名，作为对她多年志愿工作和奉献的持久 __________。",
        answers: [
                { option: "A", answer: "criticism", chinese_answer: "批评", chinese_romanization: "pīpíng" },
                { option: "B", answer: "memorial", chinese_answer: "纪念", chinese_romanization: "jìniàn" },
                { option: "C", answer: "panegyric", chinese_answer: "颂词", chinese_romanization: "sòngcí" },
                { option: "D", answer: "rebuke", chinese_answer: "责备", chinese_romanization: "zébèi" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'panegyric' means a public speech or published text in praise of someone or something." +
            "<br><br>" +
            "(A) 'criticism' means the expression of disapproval based on perceived faults or mistakes." +
            "<br><br>" +
            "(B) 'memorial' means something, especially a structure, established to remind people of a person or event." +
            "<br><br>" +
            "(D) 'rebuke' means an expression of sharp disapproval or criticism.",
        chinese_explanation: "(C) '颂词'一词意味着公开的演讲或出版的文本，赞美某人或某物。" +
            "<br><br>" +
            "(A) '批评' 意味着基于被认为的缺点或错误的不赞成表达。" +
            "<br><br>" +
            "(B) '纪念' 意味着为提醒人们某人或事件而建立的东西，尤其是建筑物。" +
            "<br><br>" +
            "(D) '责备' 意味着尖锐不赞成或批评的表达。"
    },
    {
        id: 5,
        question: "The young intern's __________ was apparent when he trusted the rival company with confidential information, not realizing their ulterior motives.",
        chinese_question: "这名年轻实习生的 __________ 很明显，他信任竞争对手公司透露机密信息，没有意识到他们的别有用心。",
        answers: [
                { option: "A", answer: "insight", chinese_answer: "洞察力", chinese_romanization: "dòngchá lì" },
                { option: "B", answer: "naivete", chinese_answer: "天真", chinese_romanization: "tiānzhēn" },
                { option: "C", answer: "wariness", chinese_answer: "警惕", chinese_romanization: "jǐngtì" },
                { option: "D", answer: "acumen", chinese_answer: "敏锐", chinese_romanization: "mǐnruì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'naivete' means a lack of experience, wisdom, or judgment; innocence or gullibility." +
            "<br><br>" +
            "(A) 'insight' means the capacity to gain an accurate and deep understanding of someone or something." +
            "<br><br>" +
            "(C) 'wariness' means caution about possible dangers or problems." +
            "<br><br>" +
            "(D) 'acumen' means the ability to make good judgments and quick decisions, typically in a particular domain.",
        chinese_explanation: "(B) '天真'一词意味着缺乏经验、智慧或判断；天真或轻信。" +
            "<br><br>" +
            "(A) '洞察力' 意味着获得对某人或某事准确和深入理解的能力。" +
            "<br><br>" +
            "(C) '警惕' 意味着对可能的危险或问题的谨慎。" +
            "<br><br>" +
            "(D) '敏锐' 意味着在特定领域做出良好判断和快速决策的能力。"
    },
    {
        id: 6,
        question: "Her __________ about moving to a new city was evident in her mixed feelings of excitement and fear of the unknown.",
        chinese_question: "她对搬到新城市的 __________ 从她对未知的兴奋和恐惧的混合感觉中显而易见。",
        answers: [
            { option: "A", answer: "ambivalence", chinese_answer: "矛盾心理", chinese_romanization: "máodùn xīnlǐ" },
            { option: "B", answer: "certainty", chinese_answer: "确定性", chinese_romanization: "quèdìng xìng" },
            { option: "C", answer: "enthusiasm", chinese_answer: "热情", chinese_romanization: "rèqíng" },
            { option: "D", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'ambivalence' means the state of having mixed feelings or contradictory ideas about something or someone." +
            "<br><br>" +
            "(B) 'certainty' means firm conviction that something is the case." +
            "<br><br>" +
            "(C) 'enthusiasm' means intense and eager enjoyment, interest, or approval." +
            "<br><br>" +
            "(D) 'indifference' means lack of interest, concern, or sympathy.",
        chinese_explanation: "(A) '矛盾心理' 意味着对某事或某人有混合的感觉或矛盾的想法的状态。" +
            "<br><br>" +
            "(B) '确定性' 意味着坚信某事是事实。" +
            "<br><br>" +
            "(C) '热情' 意味着强烈和热切的享受、兴趣或赞同。" +
            "<br><br>" +
            "(D) '冷漠' 意味着缺乏兴趣、关心或同情。"
    },
    {
        id: 7,
    question: "The __________ of communication led to misunderstandings among the team members.",
    chinese_question: " __________ 沟通导致了团队成员之间的误解。",
    answers: [
        { option: "A", answer: "abundance", chinese_answer: "丰富", chinese_romanization: "fēngfù" },
        { option: "B", answer: "lack", chinese_answer: "缺乏", chinese_romanization: "quēfá" },
        { option: "C", answer: "excess", chinese_answer: "过量", chinese_romanization: "guòliàng" },
        { option: "D", answer: "surplus", chinese_answer: "过剩", chinese_romanization: "guòshèng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'lack' means the state of being without or not having enough of something." + 
        "<br><br>" + 
        "(A) 'abundance' means a very large quantity of something." + 
        "<br><br>" + 
        "(C) 'excess' means an amount of something that is more than necessary, permitted, or desirable." + 
        "<br><br>" + 
        "(D) 'surplus' means an amount of something left over when requirements have been met; an excess of production or supply.",
    chinese_explanation: "(B) '缺乏' 意味着没有或不足够某物的状态。" + 
        "<br><br>" + 
        "(A) '丰富' 意味着大量的某物。" + 
        "<br><br>" + 
        "(C) '过量' 意味着超过必要、允许或理想的数量。" + 
        "<br><br>" + 
        "(D) '过剩' 意味着在满足需求后剩余的数量；生产或供应过剩。"
    },
    {
        id: 8,
        question: "He took __________ at the insinuation that he wasn't working hard enough.",
        chinese_question: "他对暗示他工作不够努力感到 __________。",
        answers: [
            { option: "A", answer: "umbrage", chinese_answer: "生气", chinese_romanization: "shēngqì" },
            { option: "B", answer: "pride", chinese_answer: "骄傲", chinese_romanization: "jiāo'ào" },
            { option: "C", answer: "enjoyment", chinese_answer: "享受", chinese_romanization: "xiǎngshòu" },
            { option: "D", answer: "ignorance", chinese_answer: "无知", chinese_romanization: "wúzhī" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'umbrage' figuratively means offense or annoyance." +
            "<br><br>" +
            "(B) 'pride' means a feeling or deep pleasure or satisfaction derived from one's own achievements." +
            "<br><br>" +
            "(C) 'enjoyment' means the state or process of taking pleasure in something." +
            "<br><br>" +
            "(D) 'ignorance' means lack of knowledge or information.",
        chinese_explanation: "(A) '生气' 在此语境下意指冒犯或恼怒。" +
            "<br><br>" +
            "(B) '骄傲' 意味着从自己的成就中获得的感觉或深深的快乐或满足。" +
            "<br><br>" +
            "(C) '享受' 意味着从某事物中获得快乐的状态或过程。" +
            "<br><br>" +
            "(D) '无知' 意味着缺乏知识或信息。"
    },
    {
        id: 9,
    question: "The merger between the two companies turned into a __________, resulting in massive layoffs and financial losses.",
    chinese_question: "两家公司之间的合并变成了一场 __________，导致了大规模裁员和财务损失。",
    answers: [
        { option: "A", answer: "success", chinese_answer: "成功", chinese_romanization: "chénggōng" },
        { option: "B", answer: "alliance", chinese_answer: "联盟", chinese_romanization: "liánméng" },
        { option: "C", answer: "debacle", chinese_answer: "崩溃", chinese_romanization: "bēngkuì" },
        { option: "D", answer: "partnership", chinese_answer: "合作伙伴关系", chinese_romanization: "hézuò huǒbàn guānxì" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'debacle' figuratively means a sudden and ignominious failure; a fiasco." + 
        "<br><br>" + 
        "(A) 'success' means the accomplishment of an aim or purpose." + 
        "<br><br>" + 
        "(B) 'alliance' means a union or association formed for mutual benefit, especially between countries or organizations." + 
        "<br><br>" + 
        "(D) 'partnership' means an arrangement where parties agree to cooperate to advance their mutual interests.",
    chinese_explanation: "(C) '崩溃' 在此语境下意指突然的、可耻的失败；一场惨败。" + 
        "<br><br>" + 
        "(A) '成功' 意味着实现一个目标或目的。" + 
        "<br><br>" + 
        "(B) '联盟' 意味着为互利而形成的联合或协会，尤其是国家或组织之间的。" + 
        "<br><br>" + 
        "(D) '合作伙伴关系' 意味着各方同意合作以推进他们的共同利益的安排。"
    },
    {
        id: 10,
    question: "The company's new policy changes created a __________ of improvement, but the core issues remained unresolved.",
    chinese_question: "公司的新政策变动创造了一种 __________ 的改善，但核心问题仍未解决。",
    answers: [
        { option: "A", answer: "semblance", chinese_answer: "表象", chinese_romanization: "biǎoxiàng" },
        { option: "B", answer: "deterioration", chinese_answer: "恶化", chinese_romanization: "èhuà" },
        { option: "C", answer: "downfall", chinese_answer: "衰落", chinese_romanization: "shuāiluò" },
        { option: "D", answer: "prosperity", chinese_answer: "繁荣", chinese_romanization: "fánróng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'semblance' figuratively means the outward appearance or apparent form of something, especially when the reality is different." + 
        "<br><br>" + 
        "(B) 'deterioration' means the process of becoming progressively worse." + 
        "<br><br>" + 
        "(C) 'downfall' means a loss of power, prosperity, or status." + 
        "<br><br>" + 
        "(D) 'prosperity' means the state of being prosperous.",
    chinese_explanation: "(A) '表象' 在此语境下意指某物的外在表现或表面形式，尤其是当现实情况有所不同时。" + 
        "<br><br>" + 
        "(B) '恶化' 意味着逐渐变坏的过程。" + 
        "<br><br>" + 
        "(C) '衰落' 意味着权力、繁荣或地位的丧失。" + 
        "<br><br>" + 
        "(D) '繁荣' 意味着繁荣的状态。"
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
