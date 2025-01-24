// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her mother took __________ at the suggestion that she was not taking good care of her children.",
        chinese_question: "她的母亲对有人暗示她没有好好照顾孩子感到 __________。",
        answers: [
            { option: "A", answer: "umbrage", chinese_answer: "生气", chinese_romanization: "shēngqì" },
            { option: "B", answer: "delight", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
            { option: "C", answer: "humor", chinese_answer: "幽默", chinese_romanization: "yōumò" },
            { option: "D", answer: "appreciation", chinese_answer: "感激", chinese_romanization: "gǎnjī" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'umbrage' figuratively means offense or annoyance." +
            "<br><br>" +
            "(B) 'delight' means great pleasure." +
            "<br><br>" +
            "(C) 'humor' means the quality of being amusing or comic." +
            "<br><br>" +
            "(D) 'appreciation' means recognition and enjoyment of the good qualities of someone or something.",
        chinese_explanation: "(A) '生气' 在此语境下意指冒犯或恼怒。" +
            "<br><br>" +
            "(B) '高兴' 意味着极大的快乐。" +
            "<br><br>" +
            "(C) '幽默' 意味着有趣或滑稽的品质。" +
            "<br><br>" +
            "(D) '感激' 意味着对某人或某物的优点的认可和享受。"
    },
    {
        id: 2,
    question: "His mistakes from the __________ continue to influence his decisions today.",
    chinese_question: "他 __________ 的错误继续影响他今天的决定。",
    answers: [
        { option: "A", answer: "past", chinese_answer: "过去", chinese_romanization: "guòqù" },
        { option: "B", answer: "present", chinese_answer: "现在", chinese_romanization: "xiànzài" },
        { option: "C", answer: "future", chinese_answer: "未来", chinese_romanization: "wèilái" },
        { option: "D", answer: "imminent", chinese_answer: "即将发生", chinese_romanization: "jíjiāng fāshēng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'past' means having happened or existed before now." + 
        "<br><br>" + 
        "(B) 'present' means the period of time now occurring." + 
        "<br><br>" + 
        "(C) 'future' means the time or a period of time following the moment of speaking or writing." + 
        "<br><br>" + 
        "(D) 'imminent' means about to happen.",
    chinese_explanation: "(A) '过去' 意味着在现在之前发生或存在。" + 
        "<br><br>" + 
        "(B) '现在' 意味着现在发生的时间段。" + 
        "<br><br>" + 
        "(C) '未来' 意味着在说话或写作时之后的时间或一段时间。" + 
        "<br><br>" + 
        "(D) '即将发生' 意味着即将发生。"
    },
    {
        id: 3,
        question: "The nurse applied an __________ to the patient's dry, cracked hands, helping to restore moisture and suppleness.",
        chinese_question: "护士在患者干燥、龟裂的手上涂抹了一种 __________，帮助恢复水分和柔软度。",
        answers: [
                { option: "A", answer: "antiseptic", chinese_answer: "抗菌剂", chinese_romanization: "kàngjūn jì" },
                { option: "B", answer: "emollient", chinese_answer: "润肤剂", chinese_romanization: "rùnfū jì" },
                { option: "C", answer: "antibiotic", chinese_answer: "抗生素", chinese_romanization: "kàngshēng sù" },
                { option: "D", answer: "anesthetic", chinese_answer: "麻醉剂", chinese_romanization: "mázuì jì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'emollient' means a substance that softens and moisturizes the skin." +
            "<br><br>" +
            "(A) 'antiseptic' means a substance that prevents the growth of disease-causing microorganisms." +
            "<br><br>" +
            "(C) 'antibiotic' means a medicine that inhibits the growth of or destroys microorganisms." +
            "<br><br>" +
            "(D) 'anesthetic' means a substance that induces insensitivity to pain.",
        chinese_explanation: "(B) '润肤剂'一词意味着一种软化和滋润皮肤的物质。" +
            "<br><br>" +
            "(A) '抗菌剂' 意味着一种防止致病微生物生长的物质。" +
            "<br><br>" +
            "(C) '抗生素' 意味着一种抑制或破坏微生物生长的药物。" +
            "<br><br>" +
            "(D) '麻醉剂' 意味着一种引起对疼痛不敏感的物质。"
    },
    {
        id: 4,
    question: "The __________ between the rival companies made negotiations difficult.",
    chinese_question: "竞争公司之间的 __________ 使谈判变得困难。",
    answers: [
        { option: "A", answer: "alliance", chinese_answer: "联盟", chinese_romanization: "liánméng" },
        { option: "B", answer: "trust", chinese_answer: "信任", chinese_romanization: "xìnrèn" },
        { option: "C", answer: "mistrust", chinese_answer: "不信任", chinese_romanization: "bù xìnrèn" },
        { option: "D", answer: "cooperation", chinese_answer: "合作", chinese_romanization: "hézuò" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'mistrust' means lack of trust or confidence." + 
        "<br><br>" + 
        "(A) 'alliance' means a union or association formed for mutual benefit." + 
        "<br><br>" + 
        "(B) 'trust' means firm belief in the reliability, truth, ability, or strength of someone or something." + 
        "<br><br>" + 
        "(D) 'cooperation' means the process of working together to the same end.",
    chinese_explanation: "(C) '不信任' 意味着缺乏信任或信心。" + 
        "<br><br>" + 
        "(A) '联盟' 意味着为共同利益而形成的联合或协会。" + 
        "<br><br>" + 
        "(B) '信任' 意味着对某人或某事的可靠性、真实性、能力或力量的坚定信念。" + 
        "<br><br>" + 
        "(D) '合作' 意味着共同为同一个目标工作。"
    },
    {
        id: 5,
        question: "The corporation became a __________ in the financial world, influencing global markets with its vast resources and reach.",
        chinese_question: "这家公司成为金融界的一个 __________，凭借其庞大的资源和影响力影响全球市场。",
        answers: [
                { option: "A", answer: "novice", chinese_answer: "新手", chinese_romanization: "xīnshǒu" },
                { option: "B", answer: "behemoth", chinese_answer: "巨兽", chinese_romanization: "jùshòu" },
                { option: "C", answer: "amateur", chinese_answer: "业余爱好者", chinese_romanization: "yèyú àihào zhě" },
                { option: "D", answer: "beginner", chinese_answer: "初学者", chinese_romanization: "chūxué zhě" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'behemoth' means something enormous, especially a large and powerful organization or entity." +
            "<br><br>" +
            "(A) 'novice' means a person new to or inexperienced in a field or situation." +
            "<br><br>" +
            "(C) 'amateur' means a person who engages in a pursuit, especially a sport, on an unpaid basis." +
            "<br><br>" +
            "(D) 'beginner' means a person just starting to learn a skill or take part in an activity.",
        chinese_explanation: "(B) '巨兽'一词意味着巨大的东西，尤其是一个庞大而强大的组织或实体。" +
            "<br><br>" +
            "(A) '新手' 意味着在某个领域或情况下没有经验或不熟练的人。" +
            "<br><br>" +
            "(C) '业余爱好者' 意味着一个从事某种追求，尤其是运动而没有报酬的人。" +
            "<br><br>" +
            "(D) '初学者' 意味着刚开始学习一项技能或参加一项活动的人。"
    },
    {
        id: 6,
        question: "Her __________ in preparing for the exam was evident in her disciplined study schedule and focused attitude.",
        chinese_question: "她在准备考试时的 __________ 体现在她有纪律的学习时间表和专注的态度上。",
        answers: [
            { option: "A", answer: "laziness", chinese_answer: "懒惰", chinese_romanization: "lǎnduò" },
            { option: "B", answer: "sobriety", chinese_answer: "严肃", chinese_romanization: "yánsù" },
            { option: "C", answer: "recklessness", chinese_answer: "鲁莽", chinese_romanization: "lǔmǎng" },
            { option: "D", answer: "negligence", chinese_answer: "疏忽", chinese_romanization: "shūhū" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sobriety' means serious, sensible, and solemn behavior." +
            "<br><br>" +
            "(A) 'laziness' means the quality of being unwilling to work or use energy; idleness." +
            "<br><br>" +
            "(C) 'recklessness' means lack of regard for the danger or consequences of one's actions." +
            "<br><br>" +
            "(D) 'negligence' means failure to take proper care over something.",
        chinese_explanation: "(B) '严肃'一词意味着严肃、明智和庄重的行为。" +
            "<br><br>" +
            "(A) '懒惰' 意味着不愿意工作或使用精力的品质；懒散。" +
            "<br><br>" +
            "(C) '鲁莽' 意味着对危险或后果的漠视。" +
            "<br><br>" +
            "(D) '疏忽' 意味着未能妥善照顾某事。"
    },
    {
        id: 7,
    question: "The workings of the ancient civilization are still outside our __________.",
    chinese_question: "古代文明的运作仍然超出了我们的 __________ 。",
    answers: [
        { option: "A", answer: "ken", chinese_answer: "知识范围", chinese_romanization: "zhīshì fànwéi" },
        { option: "B", answer: "reach", chinese_answer: "触及", chinese_romanization: "chùjí" },
        { option: "C", answer: "grasp", chinese_answer: "理解", chinese_romanization: "lǐjiě" },
        { option: "D", answer: "insight", chinese_answer: "洞察力", chinese_romanization: "dòngchá lì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'ken' means range of knowledge or understanding." + 
        "<br><br>" + 
        "(B) 'reach' means the extent to which someone can touch or grasp something." + 
        "<br><br>" + 
        "(C) 'grasp' means understanding or comprehension." + 
        "<br><br>" + 
        "(D) 'insight' means the capacity to gain an accurate and deep understanding of someone or something.",
    chinese_explanation: "(A) '知识范围' 意味着知识或理解的范围。" + 
        "<br><br>" + 
        "(B) '触及' 意味着某人可以触摸或抓住某物的程度。" + 
        "<br><br>" + 
        "(C) '理解' 意味着理解或领会。" + 
        "<br><br>" + 
        "(D) '洞察力' 意味着获得对某人或某事物准确而深入理解的能力。"
    },
    {
        id: 8,
        question: "The legal case was complicated and required expertise outside the __________ of most lawyers.",
        chinese_question: "这个法律案件很复杂，需要超出大多数律师 __________ 的专业知识。",
        answers: [
                { option: "A", answer: "understanding", chinese_answer: "理解", chinese_romanization: "lǐjiě" },
                { option: "B", answer: "purview", chinese_answer: "范围", chinese_romanization: "fànwéi" },
                { option: "C", answer: "scope", chinese_answer: "范围", chinese_romanization: "fànwéi" },
                { option: "D", answer: "influence", chinese_answer: "影响", chinese_romanization: "yǐngxiǎng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'purview' means the scope of the influence or concerns of something." +
            "<br><br>" +
            "(A) 'understanding' means the ability to understand something; comprehension." +
            "<br><br>" +
            "(C) 'scope' means the extent of the area or subject matter that something deals with or to which it is relevant." +
            "<br><br>" +
            "(D) 'influence' means the capacity to have an effect on the character, development, or behavior of someone or something.",
        chinese_explanation: "(B) '范围'一词指的是影响或关注的范围。" +
            "<br><br>" +
            "(A) '理解' 意味着理解某事的能力；理解。" +
            "<br><br>" +
            "(C) '范围' 意味着某物处理或与之相关的区域或主题的范围。" +
            "<br><br>" +
            "(D) '影响' 意味着影响某人或某物的性格、发展或行为的能力。"
    },
    {
        id: 9,
    question: "He believed that open communication was the __________ to their relationship issues.",
    chinese_question: "他认为开放的沟通是解决他们关系问题的 __________。",
    answers: [
        { option: "A", answer: "problem", chinese_answer: "问题", chinese_romanization: "wèntí" },
        { option: "B", answer: "solution", chinese_answer: "解决方案", chinese_romanization: "jiějué fāng'àn" },
        { option: "C", answer: "conflict", chinese_answer: "冲突", chinese_romanization: "chōngtū" },
        { option: "D", answer: "question", chinese_answer: "问题", chinese_romanization: "wèntí" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'solution' means a means of solving a problem or dealing with a difficult situation." + 
        "<br><br>" + 
        "(A) 'problem' means a matter or situation regarded as unwelcome or harmful and needing to be dealt with and overcome." + 
        "<br><br>" + 
        "(C) 'conflict' means a serious disagreement or argument, typically a protracted one." + 
        "<br><br>" + 
        "(D) 'question' means a sentence worded or expressed so as to elicit information.",
    chinese_explanation: "(B) “解决方案” 意味着解决问题或处理困难情况的方法。" + 
        "<br><br>" + 
        "(A) '问题' 意味着被认为是不受欢迎或有害且需要处理和克服的事项或情况。" + 
        "<br><br>" + 
        "(C) '冲突' 意味着严重的分歧或争论，通常是旷日持久的。" + 
        "<br><br>" + 
        "(D) '问题' 意味着以引出信息为目的的句子。"
    },
    {
        id: 10,
        question: "The __________ of finding the perfect dress on sale just before the party was unbelievable.",
        chinese_question: "在聚会前恰巧发现打折的完美礼服简直是 __________。",
        answers: [
            { option: "A", answer: "frustration", chinese_answer: "挫折", chinese_romanization: "cuòzhé" },
            { option: "B", answer: "serendipity", chinese_answer: "机缘巧合", chinese_romanization: "jīyuán qiǎohé" },
            { option: "C", answer: "monotony", chinese_answer: "单调", chinese_romanization: "dāndiào" },
            { option: "D", answer: "error", chinese_answer: "错误", chinese_romanization: "cuòwù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'serendipity' means the occurrence and development of events by chance in a happy or beneficial way." +
            "<br><br>" +
            "(A) 'frustration' means the feeling of being upset or annoyed as a result of being unable to change or achieve something." +
            "<br><br>" +
            "(C) 'monotony' means lack of variety and interest; tedious repetition and routine." +
            "<br><br>" +
            "(D) 'error' means a mistake.",
        chinese_explanation: "(B) '机缘巧合'一词意味着事情偶然发生并以幸福或有益的方式发展。" +
            "<br><br>" +
            "(A) '挫折' 意味着由于无法改变或实现某事而感到沮丧或恼怒。" +
            "<br><br>" +
            "(C) '单调' 意味着缺乏多样性和兴趣；乏味的重复和常规。" +
            "<br><br>" +
            "(D) '错误' 意味着错误。"
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
