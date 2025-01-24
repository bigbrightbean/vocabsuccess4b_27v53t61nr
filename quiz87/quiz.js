// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The new policy had a significant __________ on the company's operations, leading to increased efficiency.",
    chinese_question: "新政策对公司的运营产生了显著的 __________ ，提高了效率。",
    answers: [
        { option: "A", answer: "impact", chinese_answer: "影响", chinese_romanization: "yǐngxiǎng" },
        { option: "B", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
        { option: "C", answer: "avoidance", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
        { option: "D", answer: "relief", chinese_answer: "放松", chinese_romanization: "fàngsōng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'impact' means the strong effect or influence that something has on a situation or person." + 
        "<br><br>" + 
        "(B) 'hesitation' means the action of pausing before saying or doing something." + 
        "<br><br>" + 
        "(C) 'avoidance' means the action of keeping away from or not doing something." + 
        "<br><br>" + 
        "(D) 'relief' means a feeling of reassurance and relaxation following release from anxiety or distress.",
    chinese_explanation: "(A) '影响' 意味着某物对情况或人的强烈效果或影响。" + 
        "<br><br>" + 
        "(B) '犹豫' 意味着在说或做某事前暂停的动作。" + 
        "<br><br>" + 
        "(C) '避免' 意味着避开或不做某事的行为。" + 
        "<br><br>" + 
        "(D) '放松' 意味着解除焦虑或痛苦后的安慰和放松感觉。"
    },
    {
        id: 2,
        question: "The company's financial __________ resulted in multiple lawsuits and a tarnished reputation.",
        chinese_question: "公司的财务 __________ 导致了多起诉讼和声誉受损。",
        answers: [
                { option: "A", answer: "success", chinese_answer: "成功", chinese_romanization: "chénggōng" },
                { option: "B", answer: "imbroglio", chinese_answer: "纠纷", chinese_romanization: "jiūfēn" },
                { option: "C", answer: "growth", chinese_answer: "增长", chinese_romanization: "zēngzhǎng" },
                { option: "D", answer: "profit", chinese_answer: "利润", chinese_romanization: "lìrùn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'imbroglio' means an extremely confused, complicated, or embarrassing situation." +
            "<br><br>" +
            "(A) 'success' means the accomplishment of an aim or purpose." +
            "<br><br>" +
            "(C) 'growth' means the process of increasing in physical size." +
            "<br><br>" +
            "(D) 'profit' means a financial gain.",
        chinese_explanation: "(B) '纠纷' 意味着极度混乱、复杂或尴尬的情况。" +
            "<br><br>" +
            "(A) '成功' 意味着实现一个目标或目的。" +
            "<br><br>" +
            "(C) '增长' 意味着在物理尺寸上的增加过程。" +
            "<br><br>" +
            "(D) '利润' 意味着财务收益。"
    },
    {
        id: 3,
        question: "Her __________ made it difficult for her to find joy in everyday activities, as she believed nothing truly mattered.",
        chinese_question: "她的 __________ 使她难以在日常活动中找到快乐，因为她认为没有什么真正重要。",
        answers: [
                { option: "A", answer: "nihilism", chinese_answer: "虚无主义", chinese_romanization: "xūwú zhǔyì" },
                { option: "B", answer: "enthusiasm", chinese_answer: "热情", chinese_romanization: "rèqíng" },
                { option: "C", answer: "curiosity", chinese_answer: "好奇心", chinese_romanization: "hàoqí xīn" },
                { option: "D", answer: "optimism", chinese_answer: "乐观主义", chinese_romanization: "lèguān zhǔyì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'nihilism' figuratively means the rejection of all religious and moral principles, often in the belief that life is meaningless." +
            "<br><br>" +
            "(B) 'enthusiasm' means intense and eager enjoyment, interest, or approval." +
            "<br><br>" +
            "(C) 'curiosity' means a strong desire to know or learn something." +
            "<br><br>" +
            "(D) 'optimism' means hopefulness and confidence about the future or the successful outcome of something.",
        chinese_explanation: "(A) '虚无主义' 在此语境下意指拒绝所有宗教和道德原则，通常相信生活是没有意义的。" +
            "<br><br>" +
            "(B) '热情' 意味着强烈和热切的享受、兴趣或赞同。" +
            "<br><br>" +
            "(C) '好奇心' 意味着强烈的了解或学习某事的愿望。" +
            "<br><br>" +
            "(D) '乐观主义' 意味着对未来或某事成功结果的希望和信心。"
    },
    {
        id: 4,
    question: "The __________ in educational opportunities between urban and rural areas is a major concern for policymakers.",
    chinese_question: "城乡教育机会之间的 __________ 是政策制定者的主要关注点。",
    answers: [
        { option: "A", answer: "disparity", chinese_answer: "差距", chinese_romanization: "chājù" },
        { option: "B", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" },
        { option: "C", answer: "unity", chinese_answer: "团结", chinese_romanization: "tuánjié" },
        { option: "D", answer: "consistency", chinese_answer: "一致性", chinese_romanization: "yīzhì xìng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'disparity' means a great difference." + 
        "<br><br>" + 
        "(B) 'harmony' means agreement or concord." + 
        "<br><br>" + 
        "(C) 'unity' means the state of being united or joined as a whole." + 
        "<br><br>" + 
        "(D) 'consistency' means conformity in the application of something, typically that which is necessary for the sake of logic, accuracy, or fairness.",
    chinese_explanation: "(A) '差距' 意味着巨大的差异。" + 
        "<br><br>" + 
        "(B) '和谐' 意味着一致或和谐。" + 
        "<br><br>" + 
        "(C) '团结' 意味着团结或联合的状态。" + 
        "<br><br>" + 
        "(D) '一致性' 意味着在应用某物时的符合性，通常是为了逻辑、准确性或公平。"
    },
    {
        id: 5,
    question: "To keep the audience engaged, the performer added unexpected elements to break the __________.",
    chinese_question: "为了让观众保持兴趣，表演者加入了意想不到的元素以打破 __________ 。",
    answers: [
        { option: "A", answer: "routine", chinese_answer: "常规", chinese_romanization: "chángguī" },
        { option: "B", answer: "pattern", chinese_answer: "模式", chinese_romanization: "móshì" },
        { option: "C", answer: "monotony", chinese_answer: "单调", chinese_romanization: "dāndiào" },
        { option: "D", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'routine' means a sequence of actions regularly followed; a fixed program." + 
        "<br><br>" + 
        "(B) 'pattern' means a repeated decorative design." + 
        "<br><br>" + 
        "(C) 'monotony' means lack of variety and interest; tedious repetition and routine." + 
        "<br><br>" + 
        "(D) 'harmony' means the combination of simultaneously sounded musical notes to produce chords.",
    chinese_explanation: "(A) '常规' 意味着定期遵循的一系列行动；固定程序。" + 
        "<br><br>" + 
        "(B) '模式' 意味着重复的装饰设计。" + 
        "<br><br>" + 
        "(C) '单调' 意味着缺乏多样性和兴趣；乏味的重复和常规。" + 
        "<br><br>" + 
        "(D) '和谐' 意味着同时发声的音乐音符的组合以产生和弦。"
    },
    {
        id: 6,
        question: "The magician's __________ left the audience in awe as he made the coin disappear and reappear.",
        chinese_question: "魔术师的 __________ 让观众惊叹不已，因为他让硬币消失又重新出现。",
        answers: [
            { option: "A", answer: "legerdemain", chinese_answer: "戏法", chinese_romanization: "xìfǎ" },
            { option: "B", answer: "clumsiness", chinese_answer: "笨拙", chinese_romanization: "bènzhuō" },
            { option: "C", answer: "transparency", chinese_answer: "透明", chinese_romanization: "tòumíng" },
            { option: "D", answer: "straightforwardness", chinese_answer: "坦率", chinese_romanization: "tǎnshuài" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'legerdemain' means skillful use of one's hands when performing conjuring tricks." +
            "<br><br>" +
            "(B) 'clumsiness' means lacking skill or grace in movement or performance." +
            "<br><br>" +
            "(C) 'transparency' means the quality of being done in an open way without secrets." +
            "<br><br>" +
            "(D) 'straightforwardness' means being honest and open.",
        chinese_explanation: "(A) '戏法' 意味着表演魔术时巧妙使用双手的技巧。" +
            "<br><br>" +
            "(B) '笨拙' 意味着在动作或表演中缺乏技巧或优雅。" +
            "<br><br>" +
            "(C) '透明' 意味着以开放的方式进行，没有秘密。" +
            "<br><br>" +
            "(D) '坦率' 意味着诚实和公开。"
    },
    {
        id: 7,
        question: "Their plans to launch a new product line were met with resistance and ultimately put the __________ on the project.",
        chinese_question: "他们推出新产品线的计划遭遇了阻力，最终项目被 __________。",
        answers: [
            { option: "A", answer: "kibosh", chinese_answer: "停止", chinese_romanization: "tíngzhǐ" },
            { option: "B", answer: "highlight", chinese_answer: "亮点", chinese_romanization: "liàngdiǎn" },
            { option: "C", answer: "impetus", chinese_answer: "动力", chinese_romanization: "dònglì" },
            { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'kibosh' figuratively means to put an end to; dispose of decisively." +
            "<br><br>" +
            "(B) 'highlight' means an outstanding part of an event or period of time." +
            "<br><br>" +
            "(C) 'impetus' means the force or energy with which a body moves." +
            "<br><br>" +
            "(D) 'support' means to give assistance to.",
        chinese_explanation: "(A) '停止' 在此语境下比喻结束；果断地处置。" +
            "<br><br>" +
            "(B) '亮点' 意味着事件或时间段中的突出部分。" +
            "<br><br>" +
            "(C) '动力' 意味着物体运动的力或能量。" +
            "<br><br>" +
            "(D) '支持' 意味着给予帮助。"
    },
    {
        id: 8,
        question: "She used a bit of __________ to avoid doing extra work by making it seem like she was already busy.",
        chinese_question: "她用了点 __________ 来避免额外的工作，让人觉得她已经很忙了。",
        answers: [
            { option: "A", answer: "legerdemain", chinese_answer: "诡计", chinese_romanization: "guǐjì" },
            { option: "B", answer: "transparency", chinese_answer: "透明", chinese_romanization: "tòumíng" },
            { option: "C", answer: "negligence", chinese_answer: "疏忽", chinese_romanization: "shūhū" },
            { option: "D", answer: "sincerity", chinese_answer: "真诚", chinese_romanization: "zhēnchéng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'legerdemain' means skillful and deceptive handling or maneuvering." +
            "<br><br>" +
            "(B) 'transparency' means the quality of being done in an open way without secrets." +
            "<br><br>" +
            "(C) 'negligence' means failure to take proper care in doing something." +
            "<br><br>" +
            "(D) 'sincerity' means the quality of being free from pretense, deceit, or hypocrisy.",
        chinese_explanation: "(A) '诡计' 意味着巧妙和欺骗性的处理或操纵。" +
            "<br><br>" +
            "(B) '透明' 意味着以开放的方式进行，没有秘密。" +
            "<br><br>" +
            "(C) '疏忽' 意味着未能妥善照顾。" +
            "<br><br>" +
            "(D) '真诚' 意味着没有伪装、欺骗或虚伪的品质。"
    },
    {
        id: 9,
    question: "Describing the heated argument as a 'friendly debate' is a __________.",
    chinese_question: "将激烈的争论描述为“友好的辩论”是一个 __________。",
    answers: [
        { option: "A", answer: "misnomer", chinese_answer: "用词不当", chinese_romanization: "yòngcí bùdàng" },
        { option: "B", answer: "contradiction", chinese_answer: "矛盾", chinese_romanization: "máodùn" },
        { option: "C", answer: "truth", chinese_answer: "真相", chinese_romanization: "zhēnxiàng" },
        { option: "D", answer: "theory", chinese_answer: "理论", chinese_romanization: "lǐlùn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'misnomer' figuratively means a wrong or inaccurate use of a term." + 
        "<br><br>" + 
        "(B) 'contradiction' means a combination of statements, ideas, or features of a situation that are opposed to one another." + 
        "<br><br>" + 
        "(C) 'truth' means the quality or state of being true." + 
        "<br><br>" + 
        "(D) 'theory' means a supposition or a system of ideas intended to explain something.",
    chinese_explanation: "(A) '用词不当' 在此语境下意指一个错误或不准确的术语使用。" + 
        "<br><br>" + 
        "(B) '矛盾' 意味着一组对立的陈述、想法或特征。" + 
        "<br><br>" + 
        "(C) '真相' 意味着真实的质量或状态。" + 
        "<br><br>" + 
        "(D) '理论' 意味着一种假设或意在解释某事物的思想体系。"
    },
    {
        id: 10,
        question: "The artist's attention to detail brought a sense of __________ to his paintings, making them almost lifelike.",
        chinese_question: "这位艺术家对细节的关注为他的画作带来了 __________ 感，使它们几乎栩栩如生。",
        answers: [
                { option: "A", answer: "distortion", chinese_answer: "扭曲", chinese_romanization: "niǔqū" },
                { option: "B", answer: "verisimilitude", chinese_answer: "逼真", chinese_romanization: "bīzhēn" },
                { option: "C", answer: "abstraction", chinese_answer: "抽象", chinese_romanization: "chōuxiàng" },
                { option: "D", answer: "surrealism", chinese_answer: "超现实主义", chinese_romanization: "chāo xiànshí zhǔyì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'verisimilitude' means the appearance of being true or real." +
            "<br><br>" +
            "(A) 'distortion' means the action of distorting or the state of being distorted." +
            "<br><br>" +
            "(C) 'abstraction' means the quality of dealing with ideas rather than events." +
            "<br><br>" +
            "(D) 'surrealism' means a 20th-century avant-garde movement in art and literature which sought to release the creative potential of the unconscious mind.",
        chinese_explanation: "(B) '逼真'一词意味着看起来真实的外观。" +
            "<br><br>" +
            "(A) '扭曲' 意味着扭曲的动作或状态。" +
            "<br><br>" +
            "(C) '抽象' 意味着处理想法而不是事件的品质。" +
            "<br><br>" +
            "(D) '超现实主义' 意味着20世纪前卫的艺术和文学运动，旨在释放潜意识的创造潜力。"
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
