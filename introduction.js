function calculateScore(formId) {
    const form = document.getElementById(formId);
    let score = 0;
    const correctAnswers = {
        'quizForm1': ['b', 'c', 'b'],
        'quizForm2': ['b', 'b', 'c']
    };
    
    const answers = correctAnswers[formId];
    answers.forEach((answer, index) => {
        let question = form[`q${index + 1}`];
        let selected = [...question].find(radio => radio.checked);
        if(selected && selected.value === answer) score++;
    });

    alert("Your Score for " + formId + ": " + score + "/" + answers.length);
}

function navigatelesson(direction) {
    // Navigation logic (update as necessary for your site structure)
    if (direction === 'Next') {
        window.location.href = 'styling.html';
    } else if (direction === 'Previous') {
        window.location.href = 'homepage.html';
    }
}
