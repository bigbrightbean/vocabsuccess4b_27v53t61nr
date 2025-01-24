// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The company made a __________ decision to cut costs by laying off workers without consulting the union.",
        chinese_question: "公司做出了 __________ 决定，通过裁员来削减成本，而没有与工会协商。",
        answers: [
            { option: "A", answer: "bilateral", chinese_answer: "双边的", chinese_romanization: "shuāngbiān de" },
            { option: "B", answer: "cooperative", chinese_answer: "合作的", chinese_romanization: "hézuò de" },
            { option: "C", answer: "unilateral", chinese_answer: "单方面的", chinese_romanization: "dān fāngmiàn de" },
            { option: "D", answer: "collective", chinese_answer: "集体的", chinese_romanization: "jítǐ de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'unilateral' means (of an action or decision) performed by or affecting only one person, group, or country involved in a particular situation, without the agreement of another or the others." +
            "<br><br>" +
            "(A) 'bilateral' means having or relating to two sides; affecting both sides." +
            "<br><br>" +
            "(B) 'cooperative' means involving mutual assistance in working toward a common goal." +
            "<br><br>" +
            "(D) 'collective' means done by people acting as a group.",
        chinese_explanation: "(C) '单方面的' 一词意味着（行动或决定）由参与特定情况的一个人、团体或国家执行或影响，而没有与另一方或其他方达成协议。" +
            "<br><br>" +
            "(A) '双边的' 意味着有或涉及两个方面的；影响双方的。" +
            "<br><br>" +
            "(B) '合作的' 意味着在实现共同目标的过程中相互帮助的。" +
            "<br><br>" +
            "(D) '集体的' 意味着由作为一组的人完成的。"
    },
    {
        id: 2,
    question: "His __________ plan to end world hunger in a year was admirable but unrealistic.",
    chinese_question: "他__________的计划在一年内消除世界饥饿是值得钦佩的，但不切实际。",
    answers: [
        { option: "A", answer: "practical", chinese_answer: "实际的", chinese_romanization: "shíjì de" },
        { option: "B", answer: "realistic", chinese_answer: "现实的", chinese_romanization: "xiànshí de" },
        { option: "C", answer: "quixotic", chinese_answer: "不切实际的", chinese_romanization: "bù qiè shíjì de" },
        { option: "D", answer: "pragmatic", chinese_answer: "务实的", chinese_romanization: "wùshí de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'quixotic' means exceedingly idealistic; unrealistic and impractical." +
        "<br><br>" +
        "(A) 'practical' means concerned with the actual doing or use of something rather than with theory and ideas." +
        "<br><br>" +
        "(B) 'realistic' means having or showing a sensible and practical idea of what can be achieved or expected." +
        "<br><br>" +
        "(D) 'pragmatic' means dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations.",
    chinese_explanation: "(C) '不切实际的'一词意味着极其理想主义的；不现实的和不切实际的。" +
        "<br><br>" +
        "(A) '实际的' 意味着关注实际操作或使用的，而不是理论和想法的。" +
        "<br><br>" +
        "(B) '现实的' 意味着对可以实现或期望的事情有或表现出明智和实际的想法。" +
        "<br><br>" +
        "(D) '务实的' 意味着以务实的方式处理事情，而不是基于理论考虑的。"
    },
    {
        id: 3,
        question: "He is __________ for managing the company's finances and ensuring all transactions are recorded accurately.",
        chinese_question: "他 __________ 管理公司的财务，确保所有交易都准确记录。",
        answers: [
            { option: "A", answer: "neglectful", chinese_answer: "忽视的", chinese_romanization: "hūshì de" },
            { option: "B", answer: "responsible", chinese_answer: "负责的", chinese_romanization: "fùzé de" },
            { option: "C", answer: "unreliable", chinese_answer: "不可靠的", chinese_romanization: "bù kěkào de" },
            { option: "D", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbù guānxīn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'responsible' means having an obligation to do something, or having control over or care for someone, as part of one's job or role." +
            "<br><br>" +
            "(A) 'neglectful' means not giving proper care or attention to someone or something." +
            "<br><br>" +
            "(C) 'unreliable' means not able to be relied upon." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(B) “负责的” 意味着有义务做某事，或在工作或角色的一部分中控制或照顾某人。" +
            "<br><br>" +
            "(A) '忽视的' 意味着没有给予适当的关心或注意某人或某事。" +
            "<br><br>" +
            "(C) '不可靠的' 意味着不能依靠的。" +
            "<br><br>" +
            "(D) '漠不关心的' 意味着没有特别的兴趣或同情心；不关心的。"
    },
    {
        id: 4,
        question: "In a democracy, the voice of the people is __________, guiding the actions of the government.",
        chinese_question: "在民主国家，人民的声音是 __________ 的，指导政府的行动。",
        answers: [
            { option: "A", answer: "inconsequential", chinese_answer: "无关紧要的", chinese_romanization: "wúguān jǐnyào de" },
            { option: "B", answer: "paramount", chinese_answer: "最重要的", chinese_romanization: "zuì zhòngyào de" },
            { option: "C", answer: "minor", chinese_answer: "小的", chinese_romanization: "xiǎo de" },
            { option: "D", answer: "secondary", chinese_answer: "次要的", chinese_romanization: "cìyào de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'paramount' means more important than anything else; supreme." +
            "<br><br>" +
            "(A) 'inconsequential' means not important or significant." +
            "<br><br>" +
            "(C) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(D) 'secondary' means coming after, less important than, or resulting from someone or something else that is primary.",
        chinese_explanation: "(B) '最重要的' 意味着比其他任何事情都重要；至高无上的。" +
            "<br><br>" +
            "(A) '无关紧要的' 意味着不重要或不显著的。" +
            "<br><br>" +
            "(C) '小的' 意味着在重要性、严重性或意义上较小的。" +
            "<br><br>" +
            "(D) '次要的' 意味着排在后面，不如某人或某物重要或由其产生。"
    },
    {
        id: 5,
    question: "Studying for the final exams was a __________ task, requiring countless hours of intense focus and effort.",
    chinese_question: "为期末考试复习是一项 __________ 的任务，需要无数小时的高度集中和努力。",
    answers: [
        { option: "A", answer: "grueling", chinese_answer: "艰苦的", chinese_romanization: "jiānkǔ de" },
        { option: "B", answer: "effortless", chinese_answer: "轻松的", chinese_romanization: "qīngsōng de" },
        { option: "C", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
        { option: "D", answer: "straightforward", chinese_answer: "直截了当的", chinese_romanization: "zhíjié liáodàng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'grueling' means extremely tiring and demanding." +
        "<br><br>" +
        "(B) 'effortless' means requiring no physical or mental exertion." +
        "<br><br>" +
        "(C) 'simple' means easily understood or done; presenting no difficulty." +
        "<br><br>" +
        "(D) 'straightforward' means uncomplicated and easy to do or understand.",
    chinese_explanation: "(A) '艰苦的' 意味着极其累人和要求严格的。" +
        "<br><br>" +
        "(B) '轻松的' 意味着不需要体力或脑力劳动的。" +
        "<br><br>" +
        "(C) '简单的' 意味着容易理解或完成的；没有困难的。" +
        "<br><br>" +
        "(D) '直截了当的' 意味着不复杂的，容易做或理解的。"
    },
    {
        id: 6,
        question: "She took __________ notes during the lecture, filling several notebooks with detailed information.",
        chinese_question: "她在讲座期间做了 __________ 的笔记，填满了几本笔记本，记录了详细的信息。",
        answers: [
                { option: "A", answer: "sparse", chinese_answer: "稀疏的", chinese_romanization: "xīshū de" },
                { option: "B", answer: "copious", chinese_answer: "丰富的", chinese_romanization: "fēngfù de" },
                { option: "C", answer: "minimal", chinese_answer: "最少的", chinese_romanization: "zuìshǎo de" },
                { option: "D", answer: "scanty", chinese_answer: "不足的", chinese_romanization: "bùzú de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'copious' means abundant in supply or quantity." +
            "<br><br>" +
            "(A) 'sparse' means thinly dispersed or scattered." +
            "<br><br>" +
            "(C) 'minimal' means of a minimum amount, quantity, or degree." +
            "<br><br>" +
            "(D) 'scanty' means small or insufficient in quantity or amount.",
        chinese_explanation: "(B) '丰富的' 一词意味着供应或数量丰富。" +
            "<br><br>" +
            "(A) '稀疏的' 意味着分散或散布得很稀。" +
            "<br><br>" +
            "(C) '最少的' 意味着数量或程度最少的。" +
            "<br><br>" +
            "(D) '不足的' 意味着数量或量不够的。"
    },
    {
        id: 7,
        question: "Despite her busy schedule, she was always __________ to the concerns of her friends, making time to listen and offer advice.",
        chinese_question: "尽管日程繁忙，她总是对朋友们的担忧表示 __________，抽出时间倾听并提供建议。",
        answers: [
            { option: "A", answer: "dismissive", chinese_answer: "轻视的", chinese_romanization: "qīngshì de" },
            { option: "B", answer: "unsympathetic", chinese_answer: "无同情心的", chinese_romanization: "wú tóngqíng xīn de" },
            { option: "C", answer: "sympathetic", chinese_answer: "有同情心的", chinese_romanization: "yǒu tóngqíng xīn de" },
            { option: "D", answer: "inattentive", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sympathetic' means feeling, showing, or expressing sympathy." +
            "<br><br>" +
            "(A) 'dismissive' means feeling or showing that something is unworthy of consideration." +
            "<br><br>" +
            "(B) 'unsympathetic' means not feeling, showing, or expressing sympathy." +
            "<br><br>" +
            "(D) 'inattentive' means not paying attention.",
        chinese_explanation: "(C) '有同情心的' 意味着感受到、表现或表达同情的。" +
            "<br><br>" +
            "(A) '轻视的' 意味着感觉或表现出某事不值得考虑。" +
            "<br><br>" +
            "(B) '无同情心的' 意味着没有感受到、表现或表达同情的。" +
            "<br><br>" +
            "(D) '粗心的' 意味着不注意的。"
    },
    {
        id: 8,
    question: "She led a __________ lifestyle, indulging in the finest foods and traveling to exotic destinations.",
    chinese_question: "她过着 __________ 的生活，享受最好的食物和旅行到异国目的地。",
    answers: [
        { option: "A", answer: "frugal", chinese_answer: "节俭", chinese_romanization: "jiéjiǎn" },
        { option: "B", answer: "modest", chinese_answer: "谦虚", chinese_romanization: "qiānxū" },
        { option: "C", answer: "luxurious", chinese_answer: "奢华", chinese_romanization: "shēhuá" },
        { option: "D", answer: "simple", chinese_answer: "简单", chinese_romanization: "jiǎndān" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'luxurious' means extremely comfortable, elegant, or enjoyable, especially in a way that involves great expense." +
        "<br><br>" +
        "(A) 'frugal' means sparing or economical with regard to money or food." +
        "<br><br>" +
        "(B) 'modest' means unassuming in the estimation of one's abilities or achievements." +
        "<br><br>" +
        "(D) 'simple' means easily understood or done; presenting no difficulty.",
    chinese_explanation: "(C) '奢华' 意味着极为舒适、优雅或愉快，特别是以涉及巨大费用的方式。" +
        "<br><br>" +
        "(A) '节俭' 意味着在金钱或食物方面节省或经济。" +
        "<br><br>" +
        "(B) '谦虚' 意味着对自己的能力或成就不自夸。" +
        "<br><br>" +
        "(D) '简单' 意味着容易理解或完成；没有困难。"
    },
    {
        id: 9,
    question: "The research paper criticized the __________ use of pesticides, which led to severe environmental damage.",
    chinese_question: "这篇研究论文批评了 __________ 使用杀虫剂的行为，导致了严重的环境破坏。",
    answers: [
        { option: "A", answer: "promiscuous", chinese_answer: "滥用的", chinese_romanization: "lànyòng de" },
        { option: "B", answer: "selective", chinese_answer: "选择性的", chinese_romanization: "xuǎnzé xìng de" },
        { option: "C", answer: "restrained", chinese_answer: "克制的", chinese_romanization: "kèzhì de" },
        { option: "D", answer: "cautious", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'promiscuous' means demonstrating or implying an indiscriminate or unselective approach." +
        "<br><br>" +
        "(B) 'selective' means relating to or involving the selection of the most suitable or best qualified." +
        "<br><br>" +
        "(C) 'restrained' means characterized by reserve or moderation; unemotional or dispassionate." +
        "<br><br>" +
        "(D) 'cautious' means careful to avoid potential problems or dangers.",
    chinese_explanation: "(A) '滥用的' 意味着展示或暗示一种不加选择或不加区分的方法。" +
        "<br><br>" +
        "(B) '选择性的' 意味着涉及选择最合适或最合格的。" +
        "<br><br>" +
        "(C) '克制的' 意味着以保留或适度为特征的；不动感情或冷静的。" +
        "<br><br>" +
        "(D) '谨慎的' 意味着小心避免潜在的问题或危险的。"
    },
    {
        id: 10,
    question: "His __________ memory was so strong that he could recognize a particular perfume years after first encountering it.",
    chinese_question: "他的 __________ 记忆非常强大，以至于在第一次闻到多年后仍能识别出某种香水。",
    answers: [
        { option: "A", answer: "auditory", chinese_answer: "听觉的", chinese_romanization: "tīngjué de" },
        { option: "B", answer: "visual", chinese_answer: "视觉的", chinese_romanization: "shìjué de" },
        { option: "C", answer: "olfactory", chinese_answer: "嗅觉的", chinese_romanization: "xiùjué de" },
        { option: "D", answer: "tactile", chinese_answer: "触觉的", chinese_romanization: "chùjué de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'olfactory' relates to the sense of smell." +
        "<br><br>" +
        "(A) 'auditory' relates to the sense of hearing." +
        "<br><br>" +
        "(B) 'visual' relates to the sense of sight." +
        "<br><br>" +
        "(D) 'tactile' relates to the sense of touch.",
    chinese_explanation: "(C) '嗅觉的'一词意味着与嗅觉有关。" +
        "<br><br>" +
        "(A) '听觉的' 意味着与听觉有关。" +
        "<br><br>" +
        "(B) '视觉的' 意味着与视觉有关。" +
        "<br><br>" +
        "(D) '触觉的' 意味着与触觉有关。"
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
