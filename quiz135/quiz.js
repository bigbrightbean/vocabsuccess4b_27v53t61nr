// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "He continued to __________ his innocence despite the evidence against him.",
        chinese_question: "尽管有证据对他不利，他仍然 __________ 自己的清白。",
        answers: [
                { option: "A", answer: "confess", chinese_answer: "承认", chinese_romanization: "chéngrèn" },
                { option: "B", answer: "aver", chinese_answer: "断言", chinese_romanization: "duàn yán" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'aver' means to assert or affirm with confidence." +
                "<br><br>" +
                "(A) 'confess' means to admit to a crime or wrongdoing." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'conceal' means to keep something secret; prevent from being known or noticed.",
        chinese_explanation: "(B) '断言' 意味着自信地断言或肯定。" +
                "<br><br>" +
                "(A) '承认' 意味着承认犯罪或不当行为。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '隐藏' 意味着保密；防止被知道或注意。"
    },
    {
        id: 2,
        question: "His carefree attitude made him feel as if he could __________ through life without a worry.",
        chinese_question: "他无忧无虑的态度让他觉得自己可以 __________ 无忧无虑地生活。",
        answers: [
                { option: "A", answer: "caper", chinese_answer: "欢跃", chinese_romanization: "huānyuè" },
                { option: "B", answer: "struggle", chinese_answer: "奋斗", chinese_romanization: "fèndòu" },
                { option: "C", answer: "stagnate", chinese_answer: "停滞", chinese_romanization: "tíngzhì" },
                { option: "D", answer: "fail", chinese_answer: "失败", chinese_romanization: "shībài" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'caper' means to skip or dance about in a lively or playful way." +
                "<br><br>" +
                "(B) 'struggle' means to make forceful or violent efforts to get free of restraint or constriction." +
                "<br><br>" +
                "(C) 'stagnate' means to cease developing; become inactive or dull." +
                "<br><br>" +
                "(D) 'fail' means to be unsuccessful in achieving one's goal.",
        chinese_explanation: "(A) '欢跃' 意味着以活泼或嬉戏的方式跳跃或舞动。" +
                "<br><br>" +
                "(B) '奋斗' 意味着努力摆脱约束或限制。" +
                "<br><br>" +
                "(C) '停滞' 意味着停止发展；变得不活跃或迟钝。" +
                "<br><br>" +
                "(D) '失败' 意味着未能实现目标。"
    },
    {
        id: 3,
        question: "Before the meeting ended, the manager asked everyone to __________ their ideas to ensure nothing was missed.",
        chinese_question: "在会议结束前，经理要求每个人 __________ 他们的想法，以确保没有遗漏。",
        answers: [
                { option: "A", answer: "recapitulate", chinese_answer: "概述", chinese_romanization: "gàishù" },
                { option: "B", answer: "dismiss", chinese_answer: "驳回", chinese_romanization: "bóhuí" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "extend", chinese_answer: "延长", chinese_romanization: "yáncháng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'recapitulate' means to summarize and restate the main points." +
                "<br><br>" +
                "(B) 'dismiss' means to order or allow to leave; send away." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'extend' means to cause to cover a larger area; make longer or wider.",
        chinese_explanation: "(A) '概述' 意味着总结并重述主要观点。" +
                "<br><br>" +
                "(B) '驳回' 意味着命令或允许离开；送走。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '延长' 意味着使覆盖更大的区域；变长或变宽。"
    },
    {
        id: 4,
        question: "The scandalous gossip was enough to __________ even the most disinterested members of the community.",
        chinese_question: "这些丑闻性的八卦足以 __________ 即使是社区中最不感兴趣的人。",
        answers: [
                { option: "A", answer: "reassure", chinese_answer: "安抚", chinese_romanization: "ānfǔ" },
                { option: "B", answer: "titillate", chinese_answer: "刺激", chinese_romanization: "cìjī" },
                { option: "C", answer: "confuse", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" },
                { option: "D", answer: "soothe", chinese_answer: "安慰", chinese_romanization: "ānwèi" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'titillate' figuratively means to excite or arouse interest or enjoyment." +
                "<br><br>" +
                "(A) 'reassure' means to give confidence." +
                "<br><br>" +
                "(C) 'confuse' means to make unclear." +
                "<br><br>" +
                "(D) 'soothe' means to ease or comfort.",
        chinese_explanation: "(B) '刺激' 一词在比喻上意味着激发或引起兴趣或享受。" +
                "<br><br>" +
                "(A) '安抚' 意味着给予信心。" +
                "<br><br>" +
                "(C) '使困惑' 意味着使不清楚。" +
                "<br><br>" +
                "(D) '安慰' 意味着安慰或舒适。"
    },
    {
        id: 5,
        question: "His constant __________ about the weather made the picnic less enjoyable for everyone else.",
        chinese_question: "他对天气不断的 __________ 让别人对这次野餐不那么愉快。",
        answers: [
                { option: "A", answer: "complimenting", chinese_answer: "赞美", chinese_romanization: "zànměi" },
                { option: "B", answer: "kvetching", chinese_answer: "抱怨", chinese_romanization: "bàoyuàn" },
                { option: "C", answer: "ignoring", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "celebrating", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'kvetching' used figuratively means to complain persistently." +
                "<br><br>" +
                "(A) 'complimenting' means to politely praise or express admiration for someone." +
                "<br><br>" +
                "(C) 'ignoring' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'celebrating' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
        chinese_explanation: "(B) '抱怨' 在比喻意义上指不断抱怨。" +
                "<br><br>" +
                "(A) '赞美' 意味着礼貌地赞扬或表达钦佩。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '庆祝' 意味着通过社交聚会或愉快的活动来纪念重要或快乐的一天或事件。"
    },
    {
        id: 6,
        question: "His smooth talking and charming demeanor could easily __________ anyone he met.",
        chinese_question: "他的能言善辩和迷人的举止可以轻易 __________ 任何他遇到的人。",
        answers: [
                { option: "A", answer: "beguile", chinese_answer: "诱惑", chinese_romanization: "yòuhuò" },
                { option: "B", answer: "repel", chinese_answer: "排斥", chinese_romanization: "páichì" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "anger", chinese_answer: "激怒", chinese_romanization: "jīnù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'beguile' means to charm or enchant someone in a deceptive way." +
                "<br><br>" +
                "(B) 'repel' means to drive or force something away." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'anger' means to make someone feel strong annoyance or displeasure.",
        chinese_explanation: "(A) '诱惑' 意味着以欺骗的方式迷住或吸引某人。" +
                "<br><br>" +
                "(B) '排斥' 意味着驱逐或强迫某事离开。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '激怒' 意味着让某人感到强烈的恼怒或不满。"
    },
    {
        id: 7,
        question: "After years of being held captive, the prisoners were finally __________ and returned to their families.",
        chinese_question: "被俘多年后，囚犯们终于被 __________ 并返回了家人身边。",
        answers: [
                { option: "A", answer: "punished", chinese_answer: "惩罚", chinese_romanization: "chéngfá" },
                { option: "B", answer: "manumitted", chinese_answer: "解放", chinese_romanization: "jiěfàng" },
                { option: "C", answer: "detained", chinese_answer: "拘留", chinese_romanization: "jūliú" },
                { option: "D", answer: "rewarded", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'manumitted' means released from slavery or captivity." +
                "<br><br>" +
                "(A) 'punished' means subjected to a penalty for an offense." +
                "<br><br>" +
                "(C) 'detained' means kept in custody." +
                "<br><br>" +
                "(D) 'rewarded' means given something in recognition of service, effort, or achievement.",
        chinese_explanation: "(B) '解放' 意味着从奴役或监禁中释放。" +
                "<br><br>" +
                "(A) '惩罚' 意味着因犯罪而受到处罚。" +
                "<br><br>" +
                "(C) '拘留' 意味着被关押。" +
                "<br><br>" +
                "(D) '奖励' 意味着因服务、努力或成就而得到的奖励。"
    },
    {
        id: 8,
        question: "Her determination and hard work helped her __________ a successful career.",
        chinese_question: "她的决心和努力帮助她 __________ 了一条成功的职业道路。",
        answers: [
                { option: "A", answer: "chisel", chinese_answer: "开创", chinese_romanization: "kāichuàng" },
                { option: "B", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
                { option: "C", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'chisel' means to shape or carve out a path or career through effort, often used figuratively." +
                "<br><br>" +
                "(B) 'avoid' means to keep away from or stop oneself from doing something." +
                "<br><br>" +
                "(C) 'neglect' means to fail to care for properly." +
                "<br><br>" +
                "(D) 'simplify' means to make something simpler or easier to do or understand.",
        chinese_explanation: "(A) '开创' 意味着通过努力塑造或开创一条道路或职业，通常用作比喻。" +
                "<br><br>" +
                "(B) '避免' 意味着远离或阻止自己做某事。" +
                "<br><br>" +
                "(C) '忽视' 意味着未能适当照顾。" +
                "<br><br>" +
                "(D) '简化' 意味着使某事更简单或更容易做或理解。"
    },
    {
        id: 9,
        question: "She __________ to find her place in a world that seemed too chaotic.",
        chinese_question: "她 __________ 找到在这个看起来太混乱的世界中的位置。",
        answers: [
            { option: "A", answer: "thrived", chinese_answer: "繁荣", chinese_romanization: "fánróng" },
            { option: "B", answer: "struggled", chinese_answer: "挣扎", chinese_romanization: "zhēngzhá" },
            { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "relaxed", chinese_answer: "放松", chinese_romanization: "fàngsōng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'struggled' means to make forceful or violent efforts to get free of restraint or constriction." +
            "<br><br>" +
            "(A) 'thrived' means to grow or develop well or vigorously." +
            "<br><br>" +
            "(C) 'ignored' means to refuse to take notice of or acknowledge; disregard intentionally." +
            "<br><br>" +
            "(D) 'relaxed' means to make or become less tense or anxious.",
        chinese_explanation: "(B) '挣扎' 意味着做出强烈或激烈的努力以摆脱束缚或限制。" +
            "<br><br>" +
            "(A) '繁荣' 意味着良好或旺盛地生长或发展。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认；有意无视。" +
            "<br><br>" +
            "(D) '放松' 意味着使或变得不那么紧张或焦虑。"
    },
    {
        id: 10,
        question: "He __________ that the future of the company was bright despite the recent setbacks.",
        chinese_question: "尽管最近遭遇挫折，他仍然 __________ 公司的未来是光明的。",
        answers: [
                { option: "A", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "B", answer: "confessed", chinese_answer: "承认", chinese_romanization: "chéngrèn" },
                { option: "C", answer: "averred", chinese_answer: "断言", chinese_romanization: "duàn yán" },
                { option: "D", answer: "doubted", chinese_answer: "怀疑", chinese_romanization: "huáiyí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'averred' means to assert or affirm with confidence." +
                "<br><br>" +
                "(A) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(B) 'confessed' means to admit to a crime or wrongdoing." +
                "<br><br>" +
                "(D) 'doubted' means to feel uncertain about something.",
        chinese_explanation: "(C) '断言' 意味着自信地断言或肯定。" +
                "<br><br>" +
                "(A) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(B) '承认' 意味着承认犯罪或不当行为。" +
                "<br><br>" +
                "(D) '怀疑' 意味着对某事感到不确定。"
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
