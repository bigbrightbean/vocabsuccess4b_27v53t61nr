// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "Their marriage reached an __________, with both partners unwilling to seek counseling or make changes.",
    chinese_question: "他们的婚姻陷入了 __________，双方都不愿意寻求咨询或做出改变。",
    answers: [
        { option: "A", answer: "compromise", chinese_answer: "妥协", chinese_romanization: "tuǒxié" },
        { option: "B", answer: "agreement", chinese_answer: "协议", chinese_romanization: "xiéyì" },
        { option: "C", answer: "impasse", chinese_answer: "僵局", chinese_romanization: "jiāngjú" },
        { option: "D", answer: "breakthrough", chinese_answer: "突破", chinese_romanization: "túpò" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'impasse' means a situation in which no progress is possible, especially because of disagreement." + 
        "<br><br>" + 
        "(A) 'compromise' means an agreement or settlement of a dispute that is reached by each side making concessions." + 
        "<br><br>" + 
        "(B) 'agreement' means a negotiated and typically legally binding arrangement between parties." + 
        "<br><br>" + 
        "(D) 'breakthrough' means a sudden, dramatic, and important discovery or development.",
    chinese_explanation: "(C) '僵局'一词意味着由于分歧而无法取得进展的情况。" + 
        "<br><br>" + 
        "(A) '妥协' 意味着通过各方让步达成的争端协议或和解。" + 
        "<br><br>" + 
        "(B) '协议' 意味着各方之间协商并通常具有法律约束力的安排。" + 
        "<br><br>" + 
        "(D) '突破' 意味着突然、戏剧性和重要的发现或发展。"
    },
    {
        id: 2,
        question: "Throughout his life, he faced many __________, but his resilience kept him moving forward.",
        chinese_question: "他一生中经历了许多 __________，但他的韧性让他不断前进。",
        answers: [
                { option: "A", answer: "vicissitudes", chinese_answer: "变迁", chinese_romanization: "biànqiān" },
                { option: "B", answer: "certainties", chinese_answer: "确定", chinese_romanization: "quèdìng" },
                { option: "C", answer: "stabilities", chinese_answer: "稳定", chinese_romanization: "wěndìng" },
                { option: "D", answer: "comforts", chinese_answer: "舒适", chinese_romanization: "shūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'vicissitudes' means changes or variations, typically ones that are unwelcome or unpleasant." +
            "<br><br>" +
            "(B) 'certainties' means things that are known or proved to be true." +
            "<br><br>" +
            "(C) 'stabilities' means the quality, state, or degree of being stable." +
            "<br><br>" +
            "(D) 'comforts' means things that contribute to physical ease and well-being.",
        chinese_explanation: "(A) '变迁' 意味着变化或变动，通常是指不受欢迎或不愉快的变化。" +
            "<br><br>" +
            "(B) '确定' 意味着已知或被证明为真的事情。" +
            "<br><br>" +
            "(C) '稳定' 意味着稳定的质量、状态或程度。" +
            "<br><br>" +
            "(D) '舒适' 意味着有助于身体舒适和福祉的事物。"
    },
    {
        id: 3,
        question: "The book's __________ made it a quick and insightful read, appreciated by those who value brevity.",
        chinese_question: "这本书的 __________ 使它成为一本快速且有见地的读物，受到重视简洁的人的赞赏。",
        answers: [
                { option: "A", answer: "lengthiness", chinese_answer: "冗长", chinese_romanization: "rǒngcháng" },
                { option: "B", answer: "pithiness", chinese_answer: "简洁", chinese_romanization: "jiǎnjié" },
                { option: "C", answer: "complexity", chinese_answer: "复杂", chinese_romanization: "fùzá" },
                { option: "D", answer: "obscurity", chinese_answer: "模糊", chinese_romanization: "móhú" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pithiness' means the quality of being concise and forcefully expressive." +
            "<br><br>" +
            "(A) 'lengthiness' means the quality of being long or prolonged." +
            "<br><br>" +
            "(C) 'complexity' means the state or quality of being intricate or complicated." +
            "<br><br>" +
            "(D) 'obscurity' means the state of being unknown, inconspicuous, or unimportant.",
        chinese_explanation: "(B) '简洁'一词意味着简明扼要和有力地表达的品质。" +
            "<br><br>" +
            "(A) '冗长' 意味着长或延长的品质。" +
            "<br><br>" +
            "(C) '复杂' 意味着错综复杂或复杂的状态或品质。" +
            "<br><br>" +
            "(D) '模糊' 意味着未知、不显眼或不重要的状态。"
    },
    {
        id: 4,
        question: "She took __________ when her friend ignored her at the party, feeling hurt by the slight.",
        chinese_question: "当她的朋友在聚会上忽视她时，她感到 __________，因为这个轻视让她很受伤。",
        answers: [
            { option: "A", answer: "umbrage", chinese_answer: "生气", chinese_romanization: "shēngqì" },
            { option: "B", answer: "relief", chinese_answer: "放松", chinese_romanization: "fàngsōng" },
            { option: "C", answer: "indifference", chinese_answer: "无动于衷", chinese_romanization: "wúdòngyúzhōng" },
            { option: "D", answer: "pleasure", chinese_answer: "愉快", chinese_romanization: "yúkuài" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'umbrage' means offense or annoyance." +
            "<br><br>" +
            "(B) 'relief' means a feeling of reassurance and relaxation following release from anxiety or distress." +
            "<br><br>" +
            "(C) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(D) 'pleasure' means a feeling of happy satisfaction and enjoyment.",
        chinese_explanation: "(A) '生气' 意味着冒犯或恼怒。" +
            "<br><br>" +
            "(B) '放松' 意味着在解除焦虑或痛苦后的安心和放松的感觉。" +
            "<br><br>" +
            "(C) '无动于衷' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(D) '愉快' 意味着快乐满意的感觉。"
    },
    {
        id: 5,
    question: "The new policy swept through the organization like a __________, leaving no department unaffected.",
    chinese_question: "新政策如同一个 __________ 一样席卷了整个组织，没有一个部门不受影响。",
    answers: [
        { option: "A", answer: "ripple", chinese_answer: "涟漪", chinese_romanization: "liányī" },
        { option: "B", answer: "juggernaut", chinese_answer: "强大力量", chinese_romanization: "qiángdà lìliàng" },
        { option: "C", answer: "murmur", chinese_answer: "低语", chinese_romanization: "dīyǔ" },
        { option: "D", answer: "spark", chinese_answer: "火花", chinese_romanization: "huǒhuā" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'juggernaut' figuratively means a huge, powerful, and overwhelming force or institution." +
        "<br><br>" +
        "(A) 'ripple' means a small wave or series of waves on the surface of water." +
        "<br><br>" +
        "(C) 'murmur' means a soft, indistinct sound made by a person or group of people speaking quietly or at a distance." +
        "<br><br>" +
        "(D) 'spark' means a small fiery particle thrown off from a fire, a light, or a similar source.",
    chinese_explanation: "(B) '强大力量' 在此语境下意指一个巨大、强大和压倒性的力量或机构。" +
        "<br><br>" +
        "(A) '涟漪' 意味着水面上的小波浪或一系列波浪。" +
        "<br><br>" +
        "(C) '低语' 意味着一个人或一群人轻声说话或在远处发出的柔和、不清晰的声音。" +
        "<br><br>" +
        "(D) '火花' 意味着从火、光或类似来源抛出的微小火粒。"
    },
    {
        id: 6,
    question: "With the protection of powerful allies, the corporation operated with virtual __________ in the industry.",
    chinese_question: "在强大盟友的保护下，这家公司在行业中几乎肆无忌惮地运作。",
    answers: [
        { option: "A", answer: "oversight", chinese_answer: "监督", chinese_romanization: "jiāndū" },
        { option: "B", answer: "impunity", chinese_answer: "免罚", chinese_romanization: "miǎnfá" },
        { option: "C", answer: "caution", chinese_answer: "谨慎", chinese_romanization: "jǐnshèn" },
        { option: "D", answer: "limitation", chinese_answer: "限制", chinese_romanization: "xiànzhì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'impunity' figuratively means being free from the negative consequences of actions, often due to powerful protection or influence." + 
        "<br><br>" + 
        "(A) 'oversight' means an unintentional failure to notice or do something." + 
        "<br><br>" + 
        "(C) 'caution' means care taken to avoid danger or mistakes." + 
        "<br><br>" + 
        "(D) 'limitation' means a restriction.",
    chinese_explanation: "(B) '免罚' 在此语境下意指由于强大的保护或影响而免于行为带来的负面后果。" + 
        "<br><br>" + 
        "(A) '监督' 意味着未能注意或做某事的无意失败。" + 
        "<br><br>" + 
        "(C) '谨慎' 意味着为了避免危险或错误而采取的措施。" + 
        "<br><br>" + 
        "(D) '限制' 意味着一种限制。"
    },
    {
        id: 7,
    question: "His __________ was so pronounced that he lost his job due to consistently missing deadlines and failing to complete tasks.",
    chinese_question: "他的 __________ 如此明显，以至于由于经常错过最后期限和未能完成任务而失去了工作。",
    answers: [
        { option: "A", answer: "dedication", chinese_answer: "奉献", chinese_romanization: "fèngxiàn" },
        { option: "B", answer: "ambition", chinese_answer: "野心", chinese_romanization: "yěxīn" },
        { option: "C", answer: "indolence", chinese_answer: "懒惰", chinese_romanization: "lǎnduò" },
        { option: "D", answer: "perseverance", chinese_answer: "毅力", chinese_romanization: "yìlì" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'indolence' means avoidance of activity or exertion; laziness." + 
        "<br><br>" + 
        "(A) 'dedication' means the quality of being dedicated or committed to a task or purpose." + 
        "<br><br>" + 
        "(B) 'ambition' means a strong desire to do or achieve something." + 
        "<br><br>" + 
        "(D) 'perseverance' means persistence in doing something despite difficulty or delay in achieving success.",
    chinese_explanation: "(C) '懒惰'一词意味着避免活动或努力；懒惰。" + 
        "<br><br>" + 
        "(A) '奉献' 意味着致力于某项任务或目的的品质。" + 
        "<br><br>" + 
        "(B) '野心' 意味着强烈的愿望去做或实现某事。" + 
        "<br><br>" + 
        "(D) '毅力' 意味着尽管有困难或延迟成功，仍坚持做某事。"
    },
    {
        id: 8,
    question: "The __________ of implementing renewable energy sources in the city was evaluated through various pilot projects.",
    chinese_question: "通过各种试点项目评估了在该市实施可再生能源的 __________。",
    answers: [
        { option: "A", answer: "viability", chinese_answer: "可行性", chinese_romanization: "kěxíng xìng" },
        { option: "B", answer: "instability", chinese_answer: "不稳定性", chinese_romanization: "bù wěndìng xìng" },
        { option: "C", answer: "complexity", chinese_answer: "复杂性", chinese_romanization: "fùzá xìng" },
        { option: "D", answer: "urgency", chinese_answer: "紧迫性", chinese_romanization: "jǐnpò xìng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'viability' figuratively means the ability to work successfully or be practical and effective." + 
        "<br><br>" + 
        "(B) 'instability' means the state of being likely to change or fail." + 
        "<br><br>" + 
        "(C) 'complexity' means the state or quality of being intricate or complicated." + 
        "<br><br>" + 
        "(D) 'urgency' means importance requiring swift action.",
    chinese_explanation: "(A) '可行性' 在此语境下意指成功运作或实际有效的能力。" + 
        "<br><br>" + 
        "(B) '不稳定性' 意味着可能变化或失败的状态。" + 
        "<br><br>" + 
        "(C) '复杂性' 意味着复杂或复杂的状态或质量。" + 
        "<br><br>" + 
        "(D) '紧迫性' 意味着需要迅速行动的重要性。"
    },
    {
        id: 9,
    question: "When the secret was revealed, the family gathering descended into __________.",
    chinese_question: "当秘密被揭露时，家庭聚会陷入了 __________。",
    answers: [
        { option: "A", answer: "serenity", chinese_answer: "宁静", chinese_romanization: "níngjìng" },
        { option: "B", answer: "pandemonium", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
        { option: "C", answer: "tranquility", chinese_answer: "平静", chinese_romanization: "píngjìng" },
        { option: "D", answer: "peace", chinese_answer: "和平", chinese_romanization: "hépíng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'pandemonium' means wild and noisy disorder or confusion; uproar." + 
        "<br><br>" + 
        "(A) 'serenity' means the state of being calm and peaceful." + 
        "<br><br>" + 
        "(C) 'tranquility' means calmness and peace." + 
        "<br><br>" + 
        "(D) 'peace' means freedom from disturbance.",
    chinese_explanation: "(B) “混乱” 意味着狂野和嘈杂的混乱或骚动。" + 
        "<br><br>" + 
        "(A) '宁静' 意味着平静和安宁的状态。" + 
        "<br><br>" + 
        "(C) '平静' 意味着平静和安宁。" + 
        "<br><br>" + 
        "(D) '和平' 意味着没有干扰。"
    },
    {
        id: 10,
        question: "The merger was delayed because the board insisted on thorough due __________ to ensure there were no hidden liabilities.",
        chinese_question: "董事会坚持进行彻底的尽 __________ 以确保没有隐藏的负债，导致合并被推迟。",
        answers: [
            { option: "A", answer: "diligence", chinese_answer: "勤", chinese_romanization: "qín" },
            { option: "B", answer: "complacency", chinese_answer: "自满", chinese_romanization: "zìmǎn" },
            { option: "C", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "haste", chinese_answer: "匆忙", chinese_romanization: "cōngmáng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'diligence' figuratively means careful and persistent effort to ensure no hidden risks or liabilities." +
            "<br><br>" +
            "(B) 'complacency' means a feeling of smug or uncritical satisfaction with oneself or one's achievements." +
            "<br><br>" +
            "(C) 'neglect' means failure to take proper care in doing something." +
            "<br><br>" +
            "(D) 'haste' means excessive speed or urgency of movement or action; hurry.",
        chinese_explanation: "(A) '尽勤' 在此语境下意指仔细和持续的努力，以确保没有隐藏的风险或负债。" +
            "<br><br>" +
            "(B) '自满' 意味着对自己或自己的成就感到自满或不加批判的满足感。" +
            "<br><br>" +
            "(C) '忽视' 意味着未能妥善处理某事。" +
            "<br><br>" +
            "(D) '匆忙' 意味着过度的速度或行动的紧迫性；急忙。"
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
