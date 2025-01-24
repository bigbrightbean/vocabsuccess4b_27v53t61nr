// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "They would __________ through the night after a big win at the football game.",
        chinese_question: "在足球比赛大胜后，他们会 __________ 整晚。",
        answers: [
                { option: "A", answer: "mourn", chinese_answer: "哀悼", chinese_romanization: "āidào" },
                { option: "B", answer: "carouse", chinese_answer: "狂欢", chinese_romanization: "kuánghuān" },
                { option: "C", answer: "sleep", chinese_answer: "睡觉", chinese_romanization: "shuìjiào" },
                { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'carouse' means to drink plentiful amounts of alcohol and enjoy oneself with others in a noisy, lively way." +
                "<br><br>" +
                "(A) 'mourn' means to feel or show deep sorrow or regret for someone or their death." +
                "<br><br>" +
                "(C) 'sleep' means to rest by sleeping." +
                "<br><br>" +
                "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(B) '狂欢'一词意味着与他人一起大量饮酒和享受喧闹、热闹的方式。" +
                "<br><br>" +
                "(A) '哀悼' 意味着对某人或其死亡感到或表现出深深的悲痛或遗憾。" +
                "<br><br>" +
                "(C) '睡觉' 意味着通过睡眠来休息。" +
                "<br><br>" +
                "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 2,
        question: "Time and neglect had __________ the once beautiful murals in the old church.",
        chinese_question: "时间和疏忽已经 __________ 了旧教堂里曾经美丽的壁画。",
        answers: [
            { option: "A", answer: "restored", chinese_answer: "恢复", chinese_romanization: "huīfù" },
            { option: "B", answer: "effaced", chinese_answer: "抹去", chinese_romanization: "mǒqù" },
            { option: "C", answer: "brightened", chinese_answer: "变亮", chinese_romanization: "biànliàng" },
            { option: "D", answer: "cleaned", chinese_answer: "清洁", chinese_romanization: "qīngjié" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'effaced' means erased or worn away." +
            "<br><br>" +
            "(A) 'restored' means brought back to a former condition." +
            "<br><br>" +
            "(C) 'brightened' means made or became lighter or more cheerful." +
            "<br><br>" +
            "(D) 'cleaned' means made clean or free from dirt.",
        chinese_explanation: "(B) “抹去” 意味着被擦除或磨损。" +
            "<br><br>" +
            "(A) '恢复' 意味着恢复到以前的状态。" +
            "<br><br>" +
            "(C) '变亮' 意味着变得更亮或更愉快。" +
            "<br><br>" +
            "(D) '清洁' 意味着清理或除去污垢。"
    },
    {
        id: 3,
        question: "The organization aims to __________ awareness about the importance of mental health.",
        chinese_question: "该组织旨在 __________ 关于心理健康重要性的认识。",
        answers: [
                { option: "A", answer: "promulgate", chinese_answer: "宣传", chinese_romanization: "xuānchuán" },
                { option: "B", answer: "suppress", chinese_answer: "抑制", chinese_romanization: "yìzhì" },
                { option: "C", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "overlook", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'promulgate' means to promote or make widely known (an idea or cause)." +
                "<br><br>" +
                "(B) 'suppress' means to forcibly put an end to." +
                "<br><br>" +
                "(C) 'neglect' means to fail to care for properly." +
                "<br><br>" +
                "(D) 'overlook' means to fail to notice something.",
        chinese_explanation: "(A) '宣传' 意味着推广或广泛传播（一个想法或事业）。" +
                "<br><br>" +
                "(B) '抑制' 意味着强行终止。" +
                "<br><br>" +
                "(C) '忽视' 意味着未能妥善照顾。" +
                "<br><br>" +
                "(D) '忽略' 意味着未能注意到某事。"
    },
    {
        id: 4,
        question: "Even after his death, some tried to __________ his legacy with baseless accusations.",
        chinese_question: "即使在他去世后，有些人仍试图用毫无根据的指控 __________ 他的遗产。",
        answers: [
                { option: "A", answer: "honor", chinese_answer: "尊敬", chinese_romanization: "zūnjìng" },
                { option: "B", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "C", answer: "calumniate", chinese_answer: "诽谤", chinese_romanization: "fěibàng" },
                { option: "D", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'calumniate' means to make false and defamatory statements about someone." +
                "<br><br>" +
                "(A) 'honor' means to regard with great respect." +
                "<br><br>" +
                "(B) 'support' means to bear all or part of the weight; hold up." +
                "<br><br>" +
                "(D) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
        chinese_explanation: "(C) '诽谤' 意味着对某人做出虚假和诽谤性的陈述。" +
                "<br><br>" +
                "(A) '尊敬' 意味着深深地钦佩某人，因为他们的能力、品质或成就。" +
                "<br><br>" +
                "(B) '支持' 意味着承受全部或部分重量；支撑。" +
                "<br><br>" +
                "(D) '庆祝' 意味着通过社交聚会或愉快的活动来纪念一个重要或快乐的日子或事件。"
    },
    {
        id: 5,
        question: "The campaign aimed to __________ the candidate's reputation through a series of misleading advertisements.",
        chinese_question: "这场运动旨在通过一系列误导性广告 __________ 候选人的声誉。",
        answers: [
                { option: "A", answer: "elevate", chinese_answer: "提升", chinese_romanization: "tíshēng" },
                { option: "B", answer: "asperse", chinese_answer: "诽谤", chinese_romanization: "fěibàng" },
                { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "D", answer: "cherish", chinese_answer: "珍惜", chinese_romanization: "zhēnxī" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'asperse' means to criticize or slander someone's reputation." +
                "<br><br>" +
                "(A) 'elevate' means to raise or lift to a higher position." +
                "<br><br>" +
                "(C) 'support' means to bear all or part of the weight; hold up." +
                "<br><br>" +
                "(D) 'cherish' means to protect and care for someone lovingly.",
        chinese_explanation: "(B) '诽谤' 意味着批评或诽谤某人的声誉。" +
                "<br><br>" +
                "(A) '提升' 意味着提高到更高的位置。" +
                "<br><br>" +
                "(C) '支持' 意味着承受全部或部分重量；支撑。" +
                "<br><br>" +
                "(D) '珍惜' 意味着爱护和关心某人。"
    },
    {
        id: 6,
        question: "His habit of __________ every small mistake made working with him exhausting.",
        chinese_question: "他对每一个小错误 __________ 的习惯使与他共事变得非常累人。",
        answers: [
                { option: "A", answer: "belaboring", chinese_answer: "过分强调", chinese_romanization: "guòfèn qiángdiào" },
                { option: "B", answer: "praising", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
                { option: "C", answer: "ignoring", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "simplifying", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'belabouring' means to argue or elaborate on a subject excessively." +
                "<br><br>" +
                "(B) 'praising' means to express warm approval or admiration of." +
                "<br><br>" +
                "(C) 'ignoring' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'simplifying' means to make something simpler or easier to do or understand.",
        chinese_explanation: "(A) '过分强调' 意味着过度地争论或阐述某个主题。" +
                "<br><br>" +
                "(B) '赞扬' 意味着表达热烈的赞同或钦佩。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '简化' 意味着使某事更简单或更容易做或理解。"
    },
    {
        id: 7,
        question: "The jeweler __________ the silver to prepare it for shaping into a ring.",
        chinese_question: "珠宝商 __________ 银以准备将其制成戒指。",
        answers: [
                { option: "A", answer: "annealed", chinese_answer: "退火", chinese_romanization: "tuìhuǒ" },
                { option: "B", answer: "shattered", chinese_answer: "打碎", chinese_romanization: "dǎsuì" },
                { option: "C", answer: "polished", chinese_answer: "抛光", chinese_romanization: "pāoguāng" },
                { option: "D", answer: "tarnished", chinese_answer: "使失去光泽", chinese_romanization: "shǐ shīqù guāngzé" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'annealed' means to heat and then cool (a material, especially metal or glass) to make it stronger or more flexible." +
                "<br><br>" +
                "(B) 'shattered' means to break suddenly and violently into pieces." +
                "<br><br>" +
                "(C) 'polished' means to make the surface of something smooth and shiny by rubbing it." +
                "<br><br>" +
                "(D) 'tarnished' means to lose or cause to lose luster, especially as a result of exposure to air or moisture.",
        chinese_explanation: "(A) '退火' 意味着加热然后冷却（材料，尤其是金属或玻璃）以使其更强或更柔韧。" +
                "<br><br>" +
                "(B) '打碎' 意味着突然猛烈地分成碎片。" +
                "<br><br>" +
                "(C) '抛光' 意味着通过擦拭使表面光滑和有光泽。" +
                "<br><br>" +
                "(D) '使失去光泽' 意味着失去或使失去光泽，尤其是由于暴露在空气或潮气中。"
    },
    {
        id: 8,
        question: "The novel’s plot was so intriguing that it __________ readers from the very first page.",
        chinese_question: "小说的情节如此引人入胜，从第一页起就 __________ 了读者。",
        answers: [
            { option: "A", answer: "released", chinese_answer: "释放", chinese_romanization: "shìfàng" },
            { option: "B", answer: "arrested", chinese_answer: "吸引", chinese_romanization: "xīyǐn" },
            { option: "C", answer: "questioned", chinese_answer: "询问", chinese_romanization: "xúnwèn" },
            { option: "D", answer: "avoided", chinese_answer: "避免", chinese_romanization: "bìmiǎn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'arrested' means to capture or hold someone's attention." +
            "<br><br>" +
            "(A) 'released' means to set free from confinement or restraint." +
            "<br><br>" +
            "(C) 'questioned' means to ask questions or interrogate." +
            "<br><br>" +
            "(D) 'avoided' means to keep away from or stop oneself from doing something.",
        chinese_explanation: "(B) '吸引' 意味着捕捉或吸引某人的注意力。" +
            "<br><br>" +
            "(A) '释放' 意味着从监禁或约束中释放。" +
            "<br><br>" +
            "(C) '询问' 意味着问问题或审问。" +
            "<br><br>" +
            "(D) '避免' 意味着远离或阻止自己做某事。"
    },
    {
        id: 9,
        question: "The boss would __________ his favorite employees, giving them extra perks and lenient deadlines.",
        chinese_question: "老板会 __________ 他最喜欢的员工，给予他们额外的福利和宽松的截止日期。",
        answers: [
                { option: "A", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "B", answer: "coddle", chinese_answer: "溺爱", chinese_romanization: "nì'ài" },
                { option: "C", answer: "ignore", chinese_answer: "不理", chinese_romanization: "bùlǐ" },
                { option: "D", answer: "punish", chinese_answer: "惩罚", chinese_romanization: "chéngfá" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'coddle' means to treat with excessive indulgence and care." +
                "<br><br>" +
                "(A) 'neglect' means to fail to care for properly." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'punish' means to impose a penalty on someone as retribution for an offense.",
        chinese_explanation: "(B) '溺爱' 意味着过度宠爱和关怀。" +
                "<br><br>" +
                "(A) '忽视' 意味着未能适当照顾。" +
                "<br><br>" +
                "(C) '不理' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '惩罚' 意味着因犯罪而对某人施加惩罚。"
    },
    {
        id: 10,
    question: "The veteran politician struggled to avoid being seen as a __________ in a party increasingly dominated by younger voices.",
    chinese_question: "这位资深政客努力避免在一个越来越由年轻声音主导的政党中被视为 __________。",
    answers: [
        { option: "A", answer: "leader", chinese_answer: "领导", chinese_romanization: "lǐngdǎo" },
        { option: "B", answer: "dotard", chinese_answer: "老糊涂", chinese_romanization: "lǎohútú" },
        { option: "C", answer: "advisor", chinese_answer: "顾问", chinese_romanization: "gùwèn" },
        { option: "D", answer: "advocate", chinese_answer: "倡导者", chinese_romanization: "chàngdǎo zhě" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'dotard' used figuratively means someone out of touch or behind the times, especially in a rapidly changing environment." +
        "<br><br>" +
        "(A) 'leader' means a person who leads or commands a group, organization, or country." +
        "<br><br>" +
        "(C) 'advisor' means a person who gives advice in a particular field." +
        "<br><br>" +
        "(D) 'advocate' means a person who publicly supports or recommends a particular cause or policy.",
    chinese_explanation: "(B) “老糊涂” 在比喻意义上指在快速变化的环境中与时代脱节或落后的人。" +
        "<br><br>" +
        "(A) '领导' 意味着一个带领或指挥一个团体、组织或国家的人。" +
        "<br><br>" +
        "(C) '顾问' 意味着在特定领域提供建议的人。" +
        "<br><br>" +
        "(D) '倡导者' 意味着公开支持或推荐特定事业或政策的人。"
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
