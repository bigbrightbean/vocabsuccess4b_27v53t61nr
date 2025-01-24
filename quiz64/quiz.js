// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The politician’s __________ was questioned after he was found to have fabricated parts of his background to appeal to voters.",
        chinese_question: "在被发现捏造了部分背景以吸引选民后，这位政治家的 __________ 受到了质疑。",
        answers: [
            { option: "A", answer: "authenticity", chinese_answer: "真实性", chinese_romanization: "zhēnshí xìng" },
            { option: "B", answer: "ambiguity", chinese_answer: "模糊性", chinese_romanization: "móhú xìng" },
            { option: "C", answer: "reliability", chinese_answer: "可靠性", chinese_romanization: "kěkào xìng" },
            { option: "D", answer: "consistency", chinese_answer: "一致性", chinese_romanization: "yīzhì xìng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'authenticity' figuratively means the quality of being genuine or real." +
            "<br><br>" +
            "(B) 'ambiguity' means the quality of being open to more than one interpretation; inexactness." +
            "<br><br>" +
            "(C) 'reliability' means the quality of being trustworthy or performing consistently well." +
            "<br><br>" +
            "(D) 'consistency' means conformity in the application of something, typically that which is necessary for the sake of logic, accuracy, or fairness.",
        chinese_explanation: "(A) '真实性' 在此语境下意指真实或真品的质量。" +
            "<br><br>" +
            "(B) '模糊性' 意味着开放多种解释的质量；不准确。" +
            "<br><br>" +
            "(C) '可靠性' 意味着值得信赖或表现稳定的质量。" +
            "<br><br>" +
            "(D) '一致性' 意味着应用某事物的符合性，通常是出于逻辑、准确性或公平的需要。"
    },
    {
        id: 2,
        question: "Her writing was often criticized for its __________, filled with clichéd expressions of emotion.",
        chinese_question: "她的写作经常因其 __________ 而受到批评，充满了陈词滥调的情感表达。",
        answers: [
                { option: "A", answer: "subtlety", chinese_answer: "微妙", chinese_romanization: "wéimiào" },
                { option: "B", answer: "mawkishness", chinese_answer: "矫情", chinese_romanization: "jiǎoqíng" },
                { option: "C", answer: "sophistication", chinese_answer: "老练", chinese_romanization: "lǎoliàn" },
                { option: "D", answer: "ambiguity", chinese_answer: "模棱两可", chinese_romanization: "móléngliǎngkě" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'mawkishness' means exaggerated or false sentimentality." +
            "<br><br>" +
            "(A) 'subtlety' means the quality or state of being subtle." +
            "<br><br>" +
            "(C) 'sophistication' means the quality of being sophisticated." +
            "<br><br>" +
            "(D) 'ambiguity' means the quality of being open to more than one interpretation; inexactness.",
        chinese_explanation: "(B) '矫情'一词意味着夸张或虚假的感伤。" +
            "<br><br>" +
            "(A) '微妙' 意味着微妙的质量或状态。" +
            "<br><br>" +
            "(C) '老练' 意味着老练的品质。" +
            "<br><br>" +
            "(D) '模棱两可' 意味着开放给多种解释的品质；不准确。"
    },
    {
        id: 3,
        question: "As an effective __________, she facilitated the conversation, ensuring that all viewpoints were considered.",
        chinese_question: "作为一个有效的 __________，她促进了对话，确保所有观点都得到了考虑。",
        answers: [
                { option: "A", answer: "participant", chinese_answer: "参与者", chinese_romanization: "cānyù zhě" },
                { option: "B", answer: "interlocutor", chinese_answer: "对话者", chinese_romanization: "duìhuà zhě" },
                { option: "C", answer: "speaker", chinese_answer: "演讲者", chinese_romanization: "yǎnjiǎng zhě" },
                { option: "D", answer: "attendee", chinese_answer: "出席者", chinese_romanization: "chūxí zhě" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'interlocutor' means a person who takes part in a dialogue or conversation." +
            "<br><br>" +
            "(A) 'participant' means a person who takes part in something." +
            "<br><br>" +
            "(C) 'speaker' means a person who speaks." +
            "<br><br>" +
            "(D) 'attendee' means a person who is present at an event, meeting, or function.",
        chinese_explanation: "(B) '对话者'一词意味着参与对话或谈话的人。" +
            "<br><br>" +
            "(A) '参与者' 意味着参加某事的人。" +
            "<br><br>" +
            "(C) '演讲者' 意味着说话的人。" +
            "<br><br>" +
            "(D) '出席者' 意味着出席活动、会议或功能的人。"
    },
    {
        id: 4,
        question: "Her __________ in expressing her feelings often made others uncomfortable, as the exaggerated emotion seemed forced.",
        chinese_question: "她在表达感情时的 __________ 经常让别人感到不舒服，因为夸张的情感显得做作。",
        answers: [
                { option: "A", answer: "brevity", chinese_answer: "简洁", chinese_romanization: "jiǎnjié" },
                { option: "B", answer: "mawkishness", chinese_answer: "矫情", chinese_romanization: "jiǎoqíng" },
                { option: "C", answer: "subtlety", chinese_answer: "微妙", chinese_romanization: "wéimiào" },
                { option: "D", answer: "authenticity", chinese_answer: "真实性", chinese_romanization: "zhēnshí xìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'mawkishness' means exaggerated or false sentimentality." +
            "<br><br>" +
            "(A) 'brevity' means concise and exact use of words in writing or speech." +
            "<br><br>" +
            "(C) 'subtlety' means the quality or state of being subtle." +
            "<br><br>" +
            "(D) 'authenticity' means the quality of being authentic.",
        chinese_explanation: "(B) '矫情'一词意味着夸张或虚假的感伤。" +
            "<br><br>" +
            "(A) '简洁' 意味着在写作或讲话中使用简明和准确的词语。" +
            "<br><br>" +
            "(C) '微妙' 意味着微妙的质量或状态。" +
            "<br><br>" +
            "(D) '真实性' 意味着真实的品质。"
    },
    {
        id: 5,
    question: "The __________ of youth often leads to bold and daring actions, which can be both admirable and reckless.",
    chinese_question: "年轻人的 __________ 往往导致大胆和勇敢的行动，这既令人钦佩又鲁莽。",
    answers: [
        { option: "A", answer: "caution", chinese_answer: "谨慎", chinese_romanization: "jǐnshèn" },
        { option: "B", answer: "impetuosity", chinese_answer: "冲动", chinese_romanization: "chōngdòng" },
        { option: "C", answer: "prudence", chinese_answer: "小心", chinese_romanization: "xiǎoxīn" },
        { option: "D", answer: "calculation", chinese_answer: "计算", chinese_romanization: "jìsuàn" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'impetuosity' means the quality of being impulsive or acting without careful thought." + 
        "<br><br>" + 
        "(A)'caution' means care taken to avoid danger or mistakes." + 
        "<br><br>" + 
        "(C)'prudence' means the quality of being prudent; cautiousness." + 
        "<br><br>" + 
        "(D)'calculation' means careful thought, especially in making a decision.",
    chinese_explanation: "(B) '冲动'一词意味着冲动或不经仔细思考而行动的品质。" + 
        "<br><br>" + 
        "(A)'谨慎' 意味着采取的避免危险或错误的措施。" + 
        "<br><br>" + 
        "(C)'小心' 意味着谨慎的品质。" + 
        "<br><br>" + 
        "(D)'计算' 意味着仔细考虑，尤其是在做决定时。"
    },
    {
        id: 6,
        question: "The __________ of a new language opens up opportunities for travel and cultural exchange.",
        chinese_question: "新语言的 __________ 为旅行和文化交流开辟了机会。",
        answers: [
            { option: "A", answer: "acquisition", chinese_answer: "获得", chinese_romanization: "huòdé" },
            { option: "B", answer: "loss", chinese_answer: "失去", chinese_romanization: "shīqù" },
            { option: "C", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "disregard", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'acquisition' figuratively means the act of obtaining or gaining possession, especially knowledge or skills." +
            "<br><br>" +
            "(B) 'loss' means the fact or process of losing something or someone." +
            "<br><br>" +
            "(C) 'neglect' means the state or fact of being uncared for." +
            "<br><br>" +
            "(D) 'disregard' means the action or state of disregarding or ignoring something.",
        chinese_explanation: "(A) '获得' 在此语境下意指获取或获得所有权的行为，特别是知识或技能。" +
            "<br><br>" +
            "(B) '失去' 意味着失去某物或某人的事实或过程。" +
            "<br><br>" +
            "(C) '忽视' 意味着无人照顾的状态或事实。" +
            "<br><br>" +
            "(D) '忽略' 意味着无视或忽视某事的行为或状态。"
    },
    {
        id: 7,
        question: "His __________ during the meeting helped to keep everyone focused on the important issues.",
        chinese_question: "他在会议上的 __________ 帮助大家集中注意力在重要问题上。",
        answers: [
            { option: "A", answer: "sobriety", chinese_answer: "严肃", chinese_romanization: "yánsù" },
            { option: "B", answer: "distraction", chinese_answer: "分心", chinese_romanization: "fēn xīn" },
            { option: "C", answer: "negligence", chinese_answer: "疏忽", chinese_romanization: "shūhū" },
            { option: "D", answer: "frivolity", chinese_answer: "轻浮", chinese_romanization: "qīngfú" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'sobriety' figuratively means seriousness, gravity, or solemnity of manner." +
            "<br><br>" +
            "(B) 'distraction' means a thing that prevents someone from giving full attention to something else." +
            "<br><br>" +
            "(C) 'negligence' means failure to take proper care in doing something." +
            "<br><br>" +
            "(D) 'frivolity' means lack of seriousness; lightheartedness.",
        chinese_explanation: "(A) '严肃' 在此语境下意指态度的严肃、庄重或庄严。" +
            "<br><br>" +
            "(B) '分心' 意味着防止某人全神贯注于其他事情的事物。" +
            "<br><br>" +
            "(C) '疏忽' 意味着未能妥善照顾做某事。" +
            "<br><br>" +
            "(D) '轻浮' 意味着缺乏严肃性；轻松愉快。"
    },
    {
        id: 8,
    question: "Her __________ in addressing customer complaints resulted in a significant drop in client satisfaction.",
    chinese_question: "她在处理客户投诉时的 __________ 导致客户满意度大幅下降。",
    answers: [
        { option: "A", answer: "attentiveness", chinese_answer: "细心", chinese_romanization: "xìxīn" },
        { option: "B", answer: "indolence", chinese_answer: "懒惰", chinese_romanization: "lǎnduò" },
        { option: "C", answer: "responsiveness", chinese_answer: "响应", chinese_romanization: "xiǎngyìng" },
        { option: "D", answer: "efficiency", chinese_answer: "效率", chinese_romanization: "xiàolǜ" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'indolence' means avoidance of activity or exertion; laziness." + 
        "<br><br>" + 
        "(A) 'attentiveness' means the action of paying close attention to something." + 
        "<br><br>" + 
        "(C) 'responsiveness' means the quality of reacting quickly and positively." + 
        "<br><br>" + 
        "(D) 'efficiency' means the state or quality of being efficient.",
    chinese_explanation: "(B) '懒惰'一词意味着避免活动或努力；懒惰。" + 
        "<br><br>" + 
        "(A) '细心' 意味着密切注意某事的行为。" + 
        "<br><br>" + 
        "(C) '响应' 意味着快速和积极反应的质量。" + 
        "<br><br>" + 
        "(D) '效率' 意味着高效的状态或质量。"
    },
    {
        id: 9,
    question: "The economic downturn was a __________ of the financial crisis that followed.",
    chinese_question: "经济衰退是随之而来的金融危机的 __________ 。",
    answers: [
        { option: "A", answer: "harbinger", chinese_answer: "预兆", chinese_romanization: "yùzhào" },
        { option: "B", answer: "conclusion", chinese_answer: "结论", chinese_romanization: "jiélùn" },
        { option: "C", answer: "resolution", chinese_answer: "决议", chinese_romanization: "juéyì" },
        { option: "D", answer: "improvement", chinese_answer: "改善", chinese_romanization: "gǎishàn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'harbinger' means a person or thing that announces or signals the approach of another, used figuratively here." + 
        "<br><br>" + 
        "(B) 'conclusion' means the end or finish of an event, process, or text." + 
        "<br><br>" + 
        "(C) 'resolution' means a firm decision to do or not to do something." + 
        "<br><br>" + 
        "(D) 'improvement' means a thing that makes something better or is better than something else.",
    chinese_explanation: "(A) '预兆' 意味着预示或信号另一件事情即将来临的人或事物，这里是比喻用法。" + 
        "<br><br>" + 
        "(B) '结论' 意味着事件、过程或文本的结束或完结。" + 
        "<br><br>" +
        "(C) '决议' 意味着做或不做某事的坚定决定。" + 
        "<br><br>" + 
        "(D) '改善' 意味着使某事变得更好或优于其他事物的事物。"
    },
    {
        id: 10,
        question: "Many people mistakenly believe that there is a __________ for all the world's problems, but in reality, complex issues require nuanced solutions.",
        chinese_question: "许多人误以为存在一种 __________ 可以解决所有世界问题，但实际上，复杂的问题需要细致的解决方案。",
        answers: [
                { option: "A", answer: "panacea", chinese_answer: "万能药", chinese_romanization: "wànnéng yào" },
                { option: "B", answer: "complication", chinese_answer: "复杂", chinese_romanization: "fùzá" },
                { option: "C", answer: "problem", chinese_answer: "问题", chinese_romanization: "wèntí" },
                { option: "D", answer: "deficiency", chinese_answer: "缺乏", chinese_romanization: "quēfá" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'panacea' means a solution or remedy for all difficulties or diseases." +
            "<br><br>" +
            "(B) 'complication' means a circumstance that complicates something; a difficulty." +
            "<br><br>" +
            "(C) 'problem' means a matter or situation regarded as unwelcome or harmful and needing to be dealt with and overcome." +
            "<br><br>" +
            "(D) 'deficiency' means a lack or shortage.",
        chinese_explanation: "(A) '万能药' 意味着解决所有困难或疾病的解决方案或补救措施。" +
            "<br><br>" +
            "(B) '复杂' 意味着使某事复杂化的情况；困难。" +
            "<br><br>" +
            "(C) '问题' 意味着被认为是不受欢迎或有害并需要处理和克服的事情或情况。" +
            "<br><br>" +
            "(D) '缺乏' 意味着缺乏或短缺。"
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
