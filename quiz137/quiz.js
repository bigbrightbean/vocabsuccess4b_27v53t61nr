// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "He couldn't __________ how his decision would affect his future career.",
        chinese_question: "他无法 __________ 自己的决定会如何影响未来的职业生涯。",
        answers: [
                { option: "A", answer: "guarantee", chinese_answer: "保证", chinese_romanization: "bǎozhèng" },
                { option: "B", answer: "predict", chinese_answer: "预测", chinese_romanization: "yùcè" },
                { option: "C", answer: "postpone", chinese_answer: "推迟", chinese_romanization: "tuīchí" },
                { option: "D", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'predict' means to say or estimate that a specified thing will happen in the future or will be a consequence of something." +
                "<br><br>" +
                "(A) 'guarantee' means a formal assurance that certain conditions will be fulfilled." +
                "<br><br>" +
                "(C) 'postpone' means to cause or arrange for something to take place at a time later than that first scheduled." +
                "<br><br>" +
                "(D) 'conceal' means to keep something secret or prevent it from being known.",
        chinese_explanation: "(B) '预测' 意味着说或估计未来会发生某事或某事将是某种结果。" +
                "<br><br>" +
                "(A) '保证' 意味着对某些条件将得到满足的正式保证。" +
                "<br><br>" +
                "(C) '推迟' 意味着使某事在原定时间之后发生。" +
                "<br><br>" +
                "(D) '隐藏' 意味着保密某事或防止其被知晓。"
    },
    {
        id: 2,
    question: "He had to __________ from making any further comments to avoid escalating the argument.",
    chinese_question: "他不得不 __________ 发表进一步评论，以避免争论升级。",
    answers: [
        { option: "A", answer: "engage", chinese_answer: "参与", chinese_romanization: "cānyù" },
        { option: "B", answer: "forbear", chinese_answer: "克制", chinese_romanization: "kèzhì" },
        { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "D", answer: "enhance", chinese_answer: "提高", chinese_romanization: "tígāo" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'forbear' means to refrain from doing something, especially from responding with anger or impatience." +
        "<br><br>" +
        "(A) 'engage' means to participate or become involved in." +
        "<br><br>" +
        "(C) 'support' means to bear all or part of the weight of something." +
        "<br><br>" +
        "(D) 'enhance' means to intensify, increase, or further improve the quality, value, or extent of.",
    chinese_explanation: "(B) '克制' 意味着避免做某事，尤其是避免愤怒或不耐烦地回应。" +
        "<br><br>" +
        "(A) '参与' 意味着参与或介入。" +
        "<br><br>" +
        "(C) '支持' 意味着支撑某物的全部或部分重量。" +
        "<br><br>" +
        "(D) '提高' 意味着加强、增加或进一步提高质量、价值或范围。"
    },
    {
        id: 3,
        question: "They discovered that the charity was being used to __________ donors, with most of the money going to the organizers.",
        chinese_question: "他们发现这个慈善机构被用来 __________ 捐赠者，大部分钱都流向了组织者。",
        answers: [
                { option: "A", answer: "reward", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" },
                { option: "B", answer: "mulct", chinese_answer: "诈骗", chinese_romanization: "zhàpiàn" },
                { option: "C", answer: "thank", chinese_answer: "感谢", chinese_romanization: "gǎnxiè" },
                { option: "D", answer: "include", chinese_answer: "包括", chinese_romanization: "bāokuò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'mulct' means to defraud or swindle." +
                "<br><br>" +
                "(A) 'reward' means to give something in recognition of service or effort." +
                "<br><br>" +
                "(C) 'thank' means to express gratitude." +
                "<br><br>" +
                "(D) 'include' means to make part of a whole.",
        chinese_explanation: "(B) '诈骗' 意味着欺诈或诈骗。" +
                "<br><br>" +
                "(A) '奖励' 意味着因服务或努力而给予某物。" +
                "<br><br>" +
                "(C) '感谢' 意味着表达感激之情。" +
                "<br><br>" +
                "(D) '包括' 意味着成为整体的一部分。"
    },
    {
        id: 4,
        question: "Her talents and hard work __________ her with the skills needed to succeed in her career.",
        chinese_question: "她的天赋和努力 __________ 她所需的技能以在事业上取得成功。",
        answers: [
                { option: "A", answer: "endowed", chinese_answer: "赋予", chinese_romanization: "fùyǔ" },
                { option: "B", answer: "deprived", chinese_answer: "剥夺", chinese_romanization: "bōduó" },
                { option: "C", answer: "restricted", chinese_answer: "限制", chinese_romanization: "xiànzhì" },
                { option: "D", answer: "concealed", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'endowed' means to provide with a quality, ability, or asset." +
                "<br><br>" +
                "(B) 'deprived' means to deny (a person or place) the possession or use of something." +
                "<br><br>" +
                "(C) 'restricted' means to put a limit on; keep under control." +
                "<br><br>" +
                "(D) 'concealed' means to keep something secret or hidden.",
        chinese_explanation: "(A) '赋予' 意味着提供一种品质、能力或资产。" +
                "<br><br>" +
                "(B) '剥夺' 意味着拒绝（某人或某地）拥有或使用某物。" +
                "<br><br>" +
                "(C) '限制' 意味着对某物进行限制；控制。" +
                "<br><br>" +
                "(D) '隐藏' 意味着将某事保密或隐藏。"
    },
    {
        id: 5,
        question: "The fate of the company was __________ when they failed to secure the necessary funding.",
        chinese_question: "当他们未能获得必要的资金时，公司命运已被 __________。",
        answers: [
            { option: "A", answer: "improved", chinese_answer: "改善", chinese_romanization: "gǎishàn" },
            { option: "B", answer: "sealed", chinese_answer: "确定", chinese_romanization: "quèdìng" },
            { option: "C", answer: "questioned", chinese_answer: "质疑", chinese_romanization: "zhíyí" },
            { option: "D", answer: "reconsidered", chinese_answer: "重新考虑", chinese_romanization: "chóngxīn kǎolǜ" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sealed' means determined or fixed firmly." +
            "<br><br>" +
            "(A) 'improved' means to make or become better." +
            "<br><br>" +
            "(C) 'questioned' means to ask questions or express doubt about something." +
            "<br><br>" +
            "(D) 'reconsidered' means to think again about a decision or opinion.",
        chinese_explanation: "(B) '确定' 意味着确定或牢固地固定。" +
            "<br><br>" +
            "(A) '改善' 意味着使变得更好或变得更好。" +
            "<br><br>" +
            "(C) '质疑' 意味着提出问题或对某事表示怀疑。" +
            "<br><br>" +
            "(D) '重新考虑' 意味着再次考虑决定或意见。"
    },
    {
        id: 6,
    question: "The garden was __________ by a neat row of hedges to separate it from the rest of the yard.",
    chinese_question: "花园被一排整齐的树篱 __________ 开来，与院子的其他部分分开。",
    answers: [
        { option: "A", answer: "obscured", chinese_answer: "模糊", chinese_romanization: "móhu" },
        { option: "B", answer: "demarcated", chinese_answer: "划定", chinese_romanization: "huàdìng" },
        { option: "C", answer: "confused", chinese_answer: "迷惑", chinese_romanization: "míhuò" },
        { option: "D", answer: "blended", chinese_answer: "混合", chinese_romanization: "hùnhé" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'demarcated' means to set the boundaries or limits of something." +
        "<br><br>" +
        "(A) 'obscured' means to make unclear or difficult to understand." +
        "<br><br>" +
        "(C) 'confused' means to make someone unable to think clearly." +
        "<br><br>" +
        "(D) 'blended' means to mix together.",
    chinese_explanation: "(B) '划定' 意味着设置某物的边界或限制。" +
        "<br><br>" +
        "(A) '模糊' 意味着使不清楚或难以理解。" +
        "<br><br>" +
        "(C) '迷惑' 意味着使某人无法清晰思考。" +
        "<br><br>" +
        "(D) '混合' 意味着混合在一起。"
    },
    {
        id: 7,
    question: "The article was accused of attempting to __________ the achievements of the award-winning scientist.",
    chinese_question: "这篇文章被指控试图 __________ 这位获奖科学家的成就。",
    answers: [
        { option: "A", answer: "denigrate", chinese_answer: "诋毁", chinese_romanization: "dǐhuǐ" },
        { option: "B", answer: "highlight", chinese_answer: "强调", chinese_romanization: "qiángdiào" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "respect", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'denigrate' means to criticize unfairly or disparage." +
        "<br><br>" +
        "(B) 'highlight' means to emphasize or make prominent." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'respect' means to admire deeply, as a result of their abilities, qualities, or achievements.",
    chinese_explanation: "(A) '诋毁' 意味着不公平地批评或贬低。" +
        "<br><br>" +
        "(B) '强调' 意味着强调或突出。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '尊重' 意味着深深钦佩，由于他们的能力、品质或成就。"
    },
    {
        id: 8,
    question: "The mystery novel __________ the reader's mind in suspense, eager to uncover the next clue.",
    chinese_question: "这本悬疑小说让读者的思绪 __________ 在悬念中，急切地想揭开下一个线索。",
    answers: [
        { option: "A", answer: "illuminated", chinese_answer: "照亮", chinese_romanization: "zhàoliàng" },
        { option: "B", answer: "enshrouded", chinese_answer: "笼罩", chinese_romanization: "lǒngzhào" },
        { option: "C", answer: "clarified", chinese_answer: "澄清", chinese_romanization: "chéngqīng" },
        { option: "D", answer: "revealed", chinese_answer: "揭示", chinese_romanization: "jiēshì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'enshrouded' used figuratively means to cover or envelop completely and hide from view, often with a sense of mystery." +
        "<br><br>" +
        "(A) 'illuminated' means to light up." +
        "<br><br>" +
        "(C) 'clarified' means to make a statement or situation less confused and more comprehensible." +
        "<br><br>" +
        "(D) 'revealed' means to make known to others.",
    chinese_explanation: "(B) '笼罩' 在比喻意义上指完全覆盖或包围，使其隐藏不见，通常带有神秘感。" +
        "<br><br>" +
        "(A) '照亮' 意味着点亮。" +
        "<br><br>" +
        "(C) '澄清' 意味着使声明或情况不那么混乱，更容易理解。" +
        "<br><br>" +
        "(D) '揭示' 意味着让别人知道。"
    },
    {
        id: 9,
        question: "He brought flowers to __________ his wife after their argument.",
        chinese_question: "吵架后，他带来了花来 __________ 妻子。",
        answers: [
                { option: "A", answer: "insult", chinese_answer: "侮辱", chinese_romanization: "wǔrǔ" },
                { option: "B", answer: "mollify", chinese_answer: "安抚", chinese_romanization: "ānfǔ" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "irritate", chinese_answer: "激怒", chinese_romanization: "jīnù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'mollify' means to soothe or calm someone's anger or anxiety." +
                "<br><br>" +
                "(A) 'insult' means to speak or act in a way that is disrespectful." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of." +
                "<br><br>" +
                "(D) 'irritate' means to make someone annoyed or angry.",
        chinese_explanation: "(B) '安抚' 意味着安慰或平息某人的愤怒或焦虑。" +
                "<br><br>" +
                "(A) '侮辱' 意味着以不尊重的方式说话或行动。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意。" +
                "<br><br>" +
                "(D) '激怒' 意味着使某人感到恼怒或愤怒。"
    },
    {
        id: 10,
        question: "The results of the experiment were __________ to provide a clearer picture of the outcomes.",
        chinese_question: "实验结果被 __________ 起来，以提供一个更清晰的结果。",
        answers: [
                { option: "A", answer: "aggregated", chinese_answer: "汇总", chinese_romanization: "huìzǒng" },
                { option: "B", answer: "dismissed", chinese_answer: "驳回", chinese_romanization: "bóhuí" },
                { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "simplified", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'aggregated' means to collect and combine (several separate elements) into a whole." +
                "<br><br>" +
                "(B) 'dismissed' means to order or allow to leave; send away." +
                "<br><br>" +
                "(C) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'simplified' means to make (something) simpler or easier to do or understand.",
        chinese_explanation: "(A) '汇总' 意味着收集和组合（几个独立元素）成一个整体。" +
                "<br><br>" +
                "(B) '驳回' 意味着命令或允许离开；送走。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '简化' 意味着使（某事物）更简单或更容易做或理解。"
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
