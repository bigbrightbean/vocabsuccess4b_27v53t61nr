// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The company's __________ financial records impressed the auditors and stakeholders.",
        chinese_question: "公司的 __________ 财务记录给审计员和利益相关者留下了深刻的印象。",
        answers: [
            { option: "A", answer: "questionable", chinese_answer: "可疑的", chinese_romanization: "kěyí de" },
            { option: "B", answer: "pristine", chinese_answer: "无瑕疵的", chinese_romanization: "wúxiácī de" },
            { option: "C", answer: "dubious", chinese_answer: "怀疑的", chinese_romanization: "huáiyí de" },
            { option: "D", answer: "suspect", chinese_answer: "令人怀疑的", chinese_romanization: "lìngrén huáiyí de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pristine' means in its original condition; unspoiled." +
            "<br><br>" +
            "(A) 'questionable' means doubtful as regards truth or quality." +
            "<br><br>" +
            "(C) 'dubious' means hesitating or doubting." +
            "<br><br>" +
            "(D) 'suspect' means not to be relied on or trusted; possibly dangerous or false.",
        chinese_explanation: "(B) '无瑕疵的' 意味着处于原始状态的；未被破坏的。" +
            "<br><br>" +
            "(A) '可疑的' 意味着对真实性或质量存有疑问的。" +
            "<br><br>" +
            "(C) '怀疑的' 意味着犹豫或怀疑的。" +
            "<br><br>" +
            "(D) '令人怀疑的' 意味着不值得依赖或信任的；可能危险或虚假的。"
    },
    {
        id: 2,
        question: "The manager's __________ approach to implementing new policies caused frustration among the employees.",
        chinese_question: "经理在实施新政策时的 __________ 方法引起了员工的不满。",
        answers: [
            { option: "A", answer: "cautious", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" },
            { option: "B", answer: "deliberate", chinese_answer: "深思熟虑的", chinese_romanization: "shēnsīshúlǜ de" },
            { option: "C", answer: "overzealous", chinese_answer: "过度热心的", chinese_romanization: "guòdù rèxīn de" },
            { option: "D", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbùguānxīn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'overzealous' means excessively enthusiastic or fervent." +
            "<br><br>" +
            "(A) 'cautious' means careful to avoid potential problems or dangers." +
            "<br><br>" +
            "(B) 'deliberate' means done consciously and intentionally." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(C) '过度热心的' 意味着过于热情或狂热的。" +
            "<br><br>" +
            "(A) '谨慎的' 意味着小心避免潜在的问题或危险的。" +
            "<br><br>" +
            "(B) '深思熟虑的' 意味着有意识地和故意地做的。" +
            "<br><br>" +
            "(D) '漠不关心的' 意味着没有特别的兴趣或同情；不关心的。"
    },
    {
        id: 3,
    question: "His __________ approach to planning ensured the event went smoothly.",
    chinese_question: "他__________的计划确保了活动顺利进行。",
    answers: [
        { option: "A", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
        { option: "B", answer: "sloppy", chinese_answer: "草率的", chinese_romanization: "cǎoshuài de" },
        { option: "C", answer: "meticulous", chinese_answer: "一丝不苟的", chinese_romanization: "yīsībùgǒu de" },
        { option: "D", answer: "haphazard", chinese_answer: "随意的", chinese_romanization: "suíyì de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'meticulous' means showing great attention to detail; very careful and precise. Figuratively, it can mean being very thorough and careful." +
        "<br><br>" +
        "(A) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
        "<br><br>" +
        "(B) 'sloppy' means careless and unsystematic; excessively casual." +
        "<br><br>" +
        "(D) 'haphazard' means lacking any obvious principle of organization.",
    chinese_explanation: "(C) '一丝不苟的'一词意味着对细节给予高度关注的；非常仔细和精确的。比喻地，它可以表示非常彻底和小心的。" +
        "<br><br>" +
        "(A) '粗心的' 意味着没有给予足够的关注或考虑以避免伤害或错误的。" +
        "<br><br>" +
        "(B) '草率的' 意味着粗心和没有系统的；过于随意的。" +
        "<br><br>" +
        "(D) '随意的' 意味着缺乏任何明显的组织原则的。"
    },
    {
        id: 4,
        question: "The novel explored the consequences of a __________ lifestyle, highlighting the emotional and social turmoil faced by the protagonist.",
        chinese_question: "这部小说探讨了一种 __________ 的生活方式的后果，突出了主人公面临的情感和社会动荡。",
        answers: [
            { option: "A", answer: "promiscuous", chinese_answer: "滥交的", chinese_romanization: "lànjiāo de" },
            { option: "B", answer: "monogamous", chinese_answer: "一夫一妻的", chinese_romanization: "yī fū yī qī de" },
            { option: "C", answer: "abstinent", chinese_answer: "禁欲的", chinese_romanization: "jìnyù de" },
            { option: "D", answer: "chaste", chinese_answer: "贞洁的", chinese_romanization: "zhēnjié de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'promiscuous' means having or characterized by many transient sexual relationships." +
            "<br><br>" +
            "(B) 'monogamous' means involving marriage to one person at a time." +
            "<br><br>" +
            "(C) 'abstinent' means refraining from an activity or from consumption of something, especially alcohol." +
            "<br><br>" +
            "(D) 'chaste' means abstaining from extramarital, or from all, sexual intercourse.",
        chinese_explanation: "(A) '滥交的' 意味着有或以许多短暂的性关系为特征的。" +
            "<br><br>" +
            "(B) '一夫一妻的' 意味着涉及一次与一个人结婚的。" +
            "<br><br>" +
            "(C) '禁欲的' 意味着戒除某种活动或消费某物，特别是酒精。" +
            "<br><br>" +
            "(D) '贞洁的' 意味着禁欲的，尤其是婚外性行为。"
    },
    {
        id: 5,
        question: "The company’s __________ product launch set the stage for future innovations and established a strong market presence.",
        chinese_question: "公司的 __________ 产品发布为未来的创新奠定了基础，并确立了强大的市场地位。",
        answers: [
            { option: "A", answer: "inaugural", chinese_answer: "首次的", chinese_romanization: "shǒucì de" },
            { option: "B", answer: "concluding", chinese_answer: "结束的", chinese_romanization: "jiéshù de" },
            { option: "C", answer: "obsolete", chinese_answer: "过时的", chinese_romanization: "guòshí de" },
            { option: "D", answer: "routine", chinese_answer: "常规的", chinese_romanization: "chángguī de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'inaugural' means marking the beginning of an institution, activity, or period of office." +
            "<br><br>" +
            "(B) 'concluding' means bringing something to an end." +
            "<br><br>" +
            "(C) 'obsolete' means no longer produced or used; out of date." +
            "<br><br>" +
            "(D) 'routine' means a sequence of actions regularly followed; a fixed program.",
        chinese_explanation: "(A) '首次的' 意味着标志着一个机构、活动或任期的开始。" +
            "<br><br>" +
            "(B) '结束的' 意味着使某事结束。" +
            "<br><br>" +
            "(C) '过时的' 意味着不再生产或使用的；过时的。" +
            "<br><br>" +
            "(D) '常规的' 意味着定期遵循的一系列动作；固定程序。"
    },
    {
        id: 6,
            question: "The small, picturesque town is the __________ representation of rural charm, with its cobblestone streets and cozy cottages.",
            chinese_question: "这个小而如画的城镇是乡村魅力的 __________ 代表，拥有鹅卵石街道和舒适的小屋。",
            answers: [
                { option: "A", answer: "quintessential", chinese_answer: "典范的", chinese_romanization: "diǎnfàn de" },
                { option: "B", answer: "unusual", chinese_answer: "不寻常的", chinese_romanization: "bù xúncháng de" },
                { option: "C", answer: "marginal", chinese_answer: "边缘的", chinese_romanization: "biānyuán de" },
                { option: "D", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" }
            ],
            correctAnswer: "A",
            explanation: "(A) 'quintessential' means representing the most perfect or typical example of a quality or class." +
            "<br><br>" +
            "(B) 'unusual' means not habitually or commonly occurring or done." +
            "<br><br>" +
            "(C) 'marginal' means relating to or situated at the edge or margin of something." +
            "<br><br>" +
            "(D) 'ordinary' means with no special or distinctive features; normal.",
            chinese_explanation: "(A) '典范的' 意味着代表最完美或典型的质量或类别的例子。" +
            "<br><br>" +
            "(B) '不寻常的' 意味着不习惯性或不常见的。" +
            "<br><br>" +
            "(C) '边缘的' 意味着与某物的边缘或边缘有关的。" +
            "<br><br>" +
            "(D) '普通的' 意味着没有特别或独特的特征的；正常的。"
    },
    {
        id: 7,
    question: "His __________ views on culture and society often clashed with the more progressive ideas of his peers.",
    chinese_question: "他对文化和社会的 __________ 观点经常与他同龄人更进步的思想发生冲突。",
    answers: [
        { option: "A", answer: "cosmopolitan", chinese_answer: "世界性的", chinese_romanization: "shìjiè xìng de" },
        { option: "B", answer: "broad-minded", chinese_answer: "心胸开阔的", chinese_romanization: "xīnxiōng kāikuò de" },
        { option: "C", answer: "provincial", chinese_answer: "狭隘的", chinese_romanization: "xiá'ài de" },
        { option: "D", answer: "open-minded", chinese_answer: "思想开放的", chinese_romanization: "sīxiǎng kāifàng de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'provincial' means of or concerning a province of a country or empire; narrow-minded or unsophisticated." +
        "<br><br>" +
        "(A) 'cosmopolitan' means familiar with and at ease in many different countries and cultures." +
        "<br><br>" +
        "(B) 'broad-minded' means tolerant or liberal in one's views and reactions; not easily offended." +
        "<br><br>" +
        "(D) 'open-minded' means willing to consider new ideas; unprejudiced.",
    chinese_explanation: "(C) '狭隘的' 意味着与国家或帝国的一个省有关的；狭隘的或不复杂的。" +
        "<br><br>" +
        "(A) '世界性的' 意味着熟悉并轻松应对许多不同国家和文化的。" +
        "<br><br>" +
        "(B) '心胸开阔的' 意味着在观点和反应上宽容或自由的；不容易被冒犯的。" +
        "<br><br>" +
        "(D) '思想开放的' 意味着愿意考虑新想法的；没有偏见的。"
    },
    {
        id: 8,
    question: "His __________ responses to criticism often alienated his colleagues, making it hard for them to offer constructive feedback.",
    chinese_question: "他对批评的 __________ 反应经常疏远同事，使他们很难提供建设性的反馈。",
    answers: [
        { option: "A", answer: "petulant", chinese_answer: "任性的", chinese_romanization: "rènxìng de" },
        { option: "B", answer: "respectful", chinese_answer: "尊重的", chinese_romanization: "zūnzhòng de" },
        { option: "C", answer: "calm", chinese_answer: "冷静的", chinese_romanization: "lěngjìng de" },
        { option: "D", answer: "understanding", chinese_answer: "善解人意的", chinese_romanization: "shànjiěrényì de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'petulant' means childishly sulky or bad-tempered." +
        "<br><br>" +
        "(B) 'respectful' means feeling or showing deference and respect." +
        "<br><br>" +
        "(C) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
        "<br><br>" +
        "(D) 'understanding' means sympathetically aware of other people's feelings; tolerant and forgiving.",
    chinese_explanation: "(A) '任性的' 意味着孩子气的生气或坏脾气的。" +
        "<br><br>" +
        "(B) '尊重的' 意味着感到或表现出敬意的。" +
        "<br><br>" +
        "(C) '冷静的' 意味着不表现或感到紧张、愤怒或其他强烈情绪的。" +
        "<br><br>" +
        "(D) '善解人意的' 意味着体谅他人感受的；宽容和原谅的。"
    },
    {
        id: 9,
    question: "The doctor's __________ bedside manner reassured the anxious patient.",
    chinese_question: "医生 __________ 的床边态度让焦虑的病人感到放心。",
    answers: [
        { option: "A", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
        { option: "B", answer: "empathetic", chinese_answer: "有同理心的", chinese_romanization: "yǒu tónglǐxīn de" },
        { option: "C", answer: "indifferent", chinese_answer: "无动于衷的", chinese_romanization: "wúdòngyúzhōng de" },
        { option: "D", answer: "harsh", chinese_answer: "严厉的", chinese_romanization: "yánlì de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'empathetic' means showing an ability to understand and share the feelings of others." +
        "<br><br>" +
        "(A) 'apathetic' means showing or feeling no interest, enthusiasm, or concern." +
        "<br><br>" +
        "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
        "<br><br>" +
        "(D) 'harsh' means unpleasantly rough or jarring to the senses.",
    chinese_explanation: "(B) “有同理心的” 意味着表现出理解和分享他人感受的能力。" +
        "<br><br>" +
        "(A) '冷漠的' 意味着没有兴趣、热情或关心。" +
        "<br><br>" +
        "(C) '无动于衷的' 意味着没有特别的兴趣或同情；不关心。" +
        "<br><br>" +
        "(D) '严厉的' 意味着令人不愉快地粗糙或刺耳。"
    },
    {
        id: 10,
    question: "Her job was her __________ haven, where she could escape from the troubles of her personal life.",
    chinese_question: "她的工作是她的 __________ 港湾，让她可以逃离个人生活中的烦恼。",
    answers: [
        { option: "A", answer: "uncertain", chinese_answer: "不确定的", chinese_romanization: "bù quèdìng de" },
        { option: "B", answer: "risky", chinese_answer: "冒险的", chinese_romanization: "màoxiǎn de" },
        { option: "C", answer: "safe", chinese_answer: "安全的", chinese_romanization: "ānquán de" },
        { option: "D", answer: "unpredictable", chinese_answer: "不可预测的", chinese_romanization: "bùkě yùcè de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'safe' means a place of security or refuge." +
        "<br><br>" +
        "(A) 'uncertain' means not able to be relied on; not known or definite." +
        "<br><br>" +
        "(B) 'risky' means full of the possibility of danger, failure, or loss." +
        "<br><br>" +
        "(D) 'unpredictable' means not able to be predicted; changeable.",
    chinese_explanation: "(C) “安全的” 意味着安全或避难的地方。" +
        "<br><br>" +
        "(A) '不确定的' 意味着不能依赖的；未知或不确定的。" +
        "<br><br>" +
        "(B) '冒险的' 意味着充满危险、失败或损失的可能性。" +
        "<br><br>" +
        "(D) '不可预测的' 意味着无法预测的；变化无常的。"
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
