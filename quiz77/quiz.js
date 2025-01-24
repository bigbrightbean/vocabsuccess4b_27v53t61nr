// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The historian's __________ about future conflicts in the region was based on his extensive knowledge of past events.",
        chinese_question: "这位历史学家对该地区未来冲突的 __________ 是基于他对过去事件的广泛了解。",
        answers: [
                { option: "A", answer: "prescience", chinese_answer: "预见", chinese_romanization: "yùjiàn" },
                { option: "B", answer: "naivety", chinese_answer: "天真", chinese_romanization: "tiānzhēn" },
                { option: "C", answer: "incredulity", chinese_answer: "怀疑", chinese_romanization: "huáiyí" },
                { option: "D", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'prescience' figuratively means the fact of knowing something before it takes place; foreknowledge." +
            "<br><br>" +
            "(B) 'naivety' means lack of experience, wisdom, or judgment." +
            "<br><br>" +
            "(C) 'incredulity' means the state of being unwilling or unable to believe something." +
            "<br><br>" +
            "(D) 'indifference' means lack of interest, concern, or sympathy.",
        chinese_explanation: "(A) '预见' 在此语境下意指在事情发生之前知道某事的事实；预知。" +
            "<br><br>" +
            "(B) '天真' 意味着缺乏经验、智慧或判断力。" +
            "<br><br>" +
            "(C) '怀疑' 意味着不愿或不能相信某事的状态。" +
            "<br><br>" +
            "(D) '冷漠' 意味着缺乏兴趣、关心或同情。"
    },
    {
        id: 2,
        question: "The senator's __________ on healthcare reform was long on promises but short on concrete plans.",
        chinese_question: "参议员关于医疗改革的 __________ 充满了承诺，但缺乏具体计划。",
        answers: [
                { option: "A", answer: "rhetoric", chinese_answer: "修辞", chinese_romanization: "xiūcí" },
                { option: "B", answer: "legislation", chinese_answer: "立法", chinese_romanization: "lìfǎ" },
                { option: "C", answer: "compromise", chinese_answer: "妥协", chinese_romanization: "tuǒxié" },
                { option: "D", answer: "voting", chinese_answer: "投票", chinese_romanization: "tóupiào" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'rhetoric' figuratively means the art of effective or persuasive speaking or writing, often with a connotation of empty or exaggerated statements." +
            "<br><br>" +
            "(B) 'legislation' means laws, considered collectively." +
            "<br><br>" +
            "(C) 'compromise' means an agreement or a settlement of a dispute that is reached by each side making concessions." +
            "<br><br>" +
            "(D) 'voting' means the action of formally indicating one's choice of a candidate or course of action, especially in an election or a meeting.",
        chinese_explanation: "(A) '修辞' 在此语境下意指有效或有说服力的演讲或写作艺术，通常带有空洞或夸张陈述的含义。" +
            "<br><br>" +
            "(B) '立法' 意味着集体考虑的法律。" +
            "<br><br>" +
            "(C) '妥协' 意味着通过双方做出让步而达成的协议或争端解决。" +
            "<br><br>" +
            "(D) '投票' 意味着正式表明自己对候选人或行动方针的选择的行为，特别是在选举或会议中。"
    },
    {
        id: 3,
    question: "The __________ of the recession was felt across all sectors of the economy.",
    chinese_question: "经济衰退的 __________ 波及了经济的所有部门。",
    answers: [
        { option: "A", answer: "growth", chinese_answer: "增长", chinese_romanization: "zēngzhǎng" },
        { option: "B", answer: "stability", chinese_answer: "稳定", chinese_romanization: "wěndìng" },
        { option: "C", answer: "impact", chinese_answer: "影响", chinese_romanization: "yǐngxiǎng" },
        { option: "D", answer: "indifference", chinese_answer: "无动于衷", chinese_romanization: "wúdòngyúzhōng" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'impact' means the strong effect or influence that something has on a situation or person." + 
        "<br><br>" + 
        "(A) 'growth' means the process of increasing in physical size." + 
        "<br><br>" + 
        "(B) 'stability' means the state of being stable." + 
        "<br><br>" + 
        "(D) 'indifference' means lack of interest, concern, or sympathy.",
    chinese_explanation: "(C) '影响' 意味着某事对某种情况或某人的强烈影响。" + 
        "<br><br>" + 
        "(A) '增长' 意味着体积增加的过程。" + 
        "<br><br>" + 
        "(B) '稳定' 意味着稳定的状态。" + 
        "<br><br>" + 
        "(D) '无动于衷' 意味着缺乏兴趣、关心或同情。"
    },
    {
        id: 4,
        question: "The diamond sparkled with incredible __________ under the showroom lights.",
        chinese_question: "钻石在展厅的灯光下闪耀着难以置信的 __________。",
        answers: [
                { option: "A", answer: "dullness", chinese_answer: "暗淡", chinese_romanization: "àndàn" },
                { option: "B", answer: "refulgence", chinese_answer: "光辉", chinese_romanization: "guānghuī" },
                { option: "C", answer: "opacity", chinese_answer: "不透明", chinese_romanization: "bùtòumíng" },
                { option: "D", answer: "darkness", chinese_answer: "黑暗", chinese_romanization: "hēi'àn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'refulgence' means a radiant or resplendent quality or state; brilliance." +
            "<br><br>" +
            "(A) 'dullness' means lack of brightness, vividness, or sheen." +
            "<br><br>" +
            "(C) 'opacity' means the quality of being opaque, not able to be seen through." +
            "<br><br>" +
            "(D) 'darkness' means the partial or total absence of light.",
        chinese_explanation: "(B) '光辉' 意味着辉煌或灿烂的品质或状态。" +
            "<br><br>" +
            "(A) '暗淡' 意味着缺乏亮度、鲜艳或光泽。" +
            "<br><br>" +
            "(C) '不透明' 意味着不透明的质量，无法看透。" +
            "<br><br>" +
            "(D) '黑暗' 意味着部分或完全没有光。"
    },
    {
        id: 5,
        question: "During the winter months, many animals enter a state of __________ to conserve energy.",
        chinese_question: "在冬季，许多动物进入 __________ 状态以节约能量。",
        answers: [
            { option: "A", answer: "quiescence", chinese_answer: "静止", chinese_romanization: "jìngzhǐ" },
            { option: "B", answer: "hyperactivity", chinese_answer: "过度活跃", chinese_romanization: "guòdù huóyuè" },
            { option: "C", answer: "agitation", chinese_answer: "焦虑", chinese_romanization: "jiāolǜ" },
            { option: "D", answer: "alertness", chinese_answer: "警觉", chinese_romanization: "jǐngjué" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'quiescence' figuratively means the state of being quiet or inactive." +
            "<br><br>" +
            "(B) 'hyperactivity' means the condition of being abnormally or excessively active." +
            "<br><br>" +
            "(C) 'agitation' means a state of anxiety or nervous excitement." +
            "<br><br>" +
            "(D) 'alertness' means the quality of being alert; readiness to deal with any danger or emergency.",
        chinese_explanation: "(A) '静止' 在此语境下意指安静或不活动的状态。" +
            "<br><br>" +
            "(B) '过度活跃' 意味着异常或过度活跃的状态。" +
            "<br><br>" +
            "(C) '焦虑' 意味着焦虑或紧张兴奋的状态。" +
            "<br><br>" +
            "(D) '警觉' 意味着警觉的质量；准备处理任何危险或紧急情况。"
    },
    {
        id: 6,
    question: "The __________ with which he made promises he couldn't keep damaged his reputation.",
    chinese_question: "他轻易许下无法兑现的承诺，这种 __________ 损害了他的声誉。",
    answers: [
        { option: "A", answer: "recklessness", chinese_answer: "鲁莽", chinese_romanization: "lǔmǎng" },
        { option: "B", answer: "sincerity", chinese_answer: "真诚", chinese_romanization: "zhēnchéng" },
        { option: "C", answer: "integrity", chinese_answer: "正直", chinese_romanization: "zhèngzhí" },
        { option: "D", answer: "honesty", chinese_answer: "诚实", chinese_romanization: "chéngshí" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'recklessness' means lack of regard for the danger or consequences of one's actions." + 
        "<br><br>" + 
        "(B) 'sincerity' means the quality of being free from pretense, deceit, or hypocrisy." + 
        "<br><br>" + 
        "(C) 'integrity' means the quality of being honest and having strong moral principles." + 
        "<br><br>" + 
        "(D) 'honesty' means the quality of being honest.",
    chinese_explanation: "(A) '鲁莽' 意味着对危险或后果缺乏关注。" + 
        "<br><br>" + 
        "(B) '真诚' 意味着没有虚伪、欺骗或伪善的品质。" + 
        "<br><br>" + 
        "(C) '正直' 意味着诚实和具有强烈道德原则的品质。" + 
        "<br><br>" + 
        "(D) '诚实' 意味着诚实的品质。"
    },
    {
        id: 7,
        question: "The minor scheduling conflict turned into a full-blown __________, requiring intervention from the manager.",
        chinese_question: "小小的时间表冲突变成了一场彻底的 __________，需要经理干预。",
        answers: [
                { option: "A", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" },
                { option: "B", answer: "kerfuffle", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
                { option: "C", answer: "serenity", chinese_answer: "安宁", chinese_romanization: "ānníng" },
                { option: "D", answer: "peace", chinese_answer: "和平", chinese_romanization: "hépíng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'kerfuffle' figuratively means a commotion or fuss, especially one caused by conflicting views or events." +
            "<br><br>" +
            "(A) 'harmony' means agreement or concord." +
            "<br><br>" +
            "(C) 'serenity' means the state of being calm, peaceful, and untroubled." +
            "<br><br>" +
            "(D) 'peace' means freedom from disturbance; tranquility.",
        chinese_explanation: "(B) '混乱' 在此语境下意指混乱或小题大做，特别是因意见冲突或事件引起的。" +
            "<br><br>" +
            "(A) '和谐' 意味着一致或协调。" +
            "<br><br>" +
            "(C) '安宁' 意味着平静、安宁和无忧无虑的状态。" +
            "<br><br>" +
            "(D) '和平' 意味着没有干扰的自由；宁静。"
    },
    {
        id: 8,
        question: "The big tech company's __________ in the market makes it hard for smaller startups to compete.",
        chinese_question: "这家大科技公司在市场上的 __________ 使得小型初创公司很难竞争。",
        answers: [
            { option: "A", answer: "hegemony", chinese_answer: "霸权", chinese_romanization: "bàquán" },
            { option: "B", answer: "weakness", chinese_answer: "弱点", chinese_romanization: "ruòdiǎn" },
            { option: "C", answer: "equality", chinese_answer: "平等", chinese_romanization: "píngděng" },
            { option: "D", answer: "neutrality", chinese_answer: "中立", chinese_romanization: "zhōnglì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'hegemony' means leadership or dominance, especially by one country or social group over others." +
            "<br><br>" +
            "(B) 'weakness' means the state or condition of lacking strength." +
            "<br><br>" +
            "(C) 'equality' means the state of being equal, especially in status, rights, or opportunities." +
            "<br><br>" +
            "(D) 'neutrality' means the state of not supporting or helping either side in a conflict or disagreement.",
        chinese_explanation: "(A) '霸权' 意味着领导或支配，尤其是一个国家或社会团体对他人的领导或支配。" +
            "<br><br>" +
            "(B) '弱点' 意味着缺乏力量的状态或条件。" +
            "<br><br>" +
            "(C) '平等' 意味着特别是地位、权利或机会上的平等状态。" +
            "<br><br>" +
            "(D) '中立' 意味着不支持或帮助任何一方的状态。"
    },
    {
        id: 9,
        question: "The intellectual __________ of the university encouraged rigorous debate and innovative thinking among the students.",
        chinese_question: "大学的知识性 __________ 鼓励学生之间进行严格的辩论和创新思维。",
        answers: [
                { option: "A", answer: "rigidity", chinese_answer: "刚性", chinese_romanization: "gāngxìng" },
                { option: "B", answer: "milieu", chinese_answer: "环境", chinese_romanization: "huánjìng" },
                { option: "C", answer: "stagnation", chinese_answer: "停滞", chinese_romanization: "tíngzhì" },
                { option: "D", answer: "uniformity", chinese_answer: "统一性", chinese_romanization: "tǒngyī xìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'milieu' means a person's social environment." +
            "<br><br>" +
            "(A) 'rigidity' means the inability to be changed or adapted." +
            "<br><br>" +
            "(C) 'stagnation' means the state of not flowing or moving." +
            "<br><br>" +
            "(D) 'uniformity' means the quality or state of being uniform.",
        chinese_explanation: "(B) '环境'一词意味着一个人的社会环境。" +
            "<br><br>" +
            "(A) '刚性' 意味着不能改变或适应的能力。" +
            "<br><br>" +
            "(C) '停滞' 意味着不流动或不移动的状态。" +
            "<br><br>" +
            "(D) '统一性' 意味着统一的质量或状态。"
    },
    {
        id: 10,
        question: "Her financial __________ allowed her to hide the true state of the company's finances from the auditors for years.",
        chinese_question: "她的财务 __________ 使她多年能够向审计人员隐瞒公司的真实财务状况。",
        answers: [
            { option: "A", answer: "legerdemain", chinese_answer: "诡计", chinese_romanization: "guǐjì" },
            { option: "B", answer: "integrity", chinese_answer: "正直", chinese_romanization: "zhèngzhí" },
            { option: "C", answer: "incompetence", chinese_answer: "无能", chinese_romanization: "wúnéng" },
            { option: "D", answer: "clarity", chinese_answer: "清晰", chinese_romanization: "qīngxī" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'legerdemain' figuratively means skillful and deceptive handling or maneuvering." +
            "<br><br>" +
            "(B) 'integrity' means the quality of being honest and having strong moral principles." +
            "<br><br>" +
            "(C) 'incompetence' means inability to do something successfully." +
            "<br><br>" +
            "(D) 'clarity' means the quality of being clear, in particular.",
        chinese_explanation: "(A) '诡计' 在此语境下比喻巧妙和欺骗性的处理或操纵。" +
            "<br><br>" +
            "(B) '正直' 意味着诚实和有强烈道德原则的品质。" +
            "<br><br>" +
            "(C) '无能' 意味着无法成功地做某事。" +
            "<br><br>" +
            "(D) '清晰' 意味着清晰的质量，尤其是。"
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
