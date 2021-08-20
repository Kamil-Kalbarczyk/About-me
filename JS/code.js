const caseFirst = document.querySelector('.case:first-of-type');
const caseSecond = document.querySelector('.case:nth-of-type(2)');
const caseThird = document.querySelector('.case:nth-of-type(3)');
const caseFourth = document.querySelector('.case:nth-of-type(4)');
const caseFifth = document.querySelector('.case:nth-of-type(5)');

const questionFirst = document.querySelector('.question-first');
const questionSecond = document.querySelector('.question-second');
const questionThird = document.querySelector('.question-third');
const questionFourth = document.querySelector('.question-fourth');
const questionFifth = document.querySelector('.question-fifth');

const answerFirst = document.querySelector('p.answer-first');
const answerSecond = document.querySelector('p.answer-second');
const answerThird = document.querySelector('p.answer-third');
const answerFourth = document.querySelector('p.answer-fourth');
const answerFifth = document.querySelector('p.answer-fifth');

caseFirst.addEventListener('click', () => {
    // console.log("działa");
    if (caseFirst.classList.contains('active')) {
        caseFirst.classList.remove('active');
        questionFirst.classList.remove('active');
        answerFirst.classList.remove('active');
    } else {
        caseFirst.classList.add('active');
        questionFirst.classList.add('active');
        answerFirst.classList.add('active');
    }
    caseSecond.classList.remove('active');
    caseThird.classList.remove('active');
    caseFourth.classList.remove('active');
    caseFifth.classList.remove('active');

    questionSecond.classList.remove('active');
    questionThird.classList.remove('active');
    questionFourth.classList.remove('active');
    questionFifth.classList.remove('active');

    answerSecond.classList.remove('active');
    answerThird.classList.remove('active');
    answerFourth.classList.remove('active');
    answerFifth.classList.remove('active');
});

caseSecond.addEventListener('click', () => {
    if (caseSecond.classList.contains('active')) {
        caseSecond.classList.remove('active');
        questionSecond.classList.remove('active');
        answerSecond.classList.remove('active');
    } else {
        caseSecond.classList.add('active');
        questionSecond.classList.add('active');
        answerSecond.classList.add('active');
    }
    caseFirst.classList.remove('active');
    caseThird.classList.remove('active');
    caseFourth.classList.remove('active');
    caseFifth.classList.remove('active');

    questionFirst.classList.remove('active');
    questionThird.classList.remove('active');
    questionFourth.classList.remove('active');
    questionFifth.classList.remove('active');

    answerFirst.classList.remove('active');
    answerThird.classList.remove('active');
    answerFourth.classList.remove('active');
    answerFifth.classList.remove('active');
});

caseThird.addEventListener('click', () => {
    if (caseThird.classList.contains('active')) {
        caseThird.classList.remove('active');
        questionThird.classList.remove('active');
        answerThird.classList.remove('active');
    } else {
        caseThird.classList.add('active');
        questionThird.classList.add('active');
        answerThird.classList.add('active');
    }
    caseFirst.classList.remove('active');
    caseSecond.classList.remove('active');
    caseFourth.classList.remove('active');
    caseFifth.classList.remove('active');

    questionFirst.classList.remove('active');
    questionSecond.classList.remove('active');
    questionFourth.classList.remove('active');
    questionFifth.classList.remove('active');

    answerFirst.classList.remove('active');
    answerSecond.classList.remove('active');
    answerFourth.classList.remove('active');
    answerFifth.classList.remove('active');
});

caseFourth.addEventListener('click', () => {
    if (caseFourth.classList.contains('active')) {
        caseFourth.classList.remove('active');
        questionFourth.classList.remove('active');
        answerFourth.classList.remove('active');
    } else {
        caseFourth.classList.add('active');
        questionFourth.classList.add('active');
        answerFourth.classList.add('active');
    }
    caseFirst.classList.remove('active');
    caseSecond.classList.remove('active');
    caseThird.classList.remove('active');
    caseFifth.classList.remove('active');

    questionFirst.classList.remove('active');
    questionSecond.classList.remove('active');
    questionThird.classList.remove('active');
    questionFifth.classList.remove('active');

    answerFirst.classList.remove('active');
    answerSecond.classList.remove('active');
    answerThird.classList.remove('active');
    answerFifth.classList.remove('active');
});

caseFifth.addEventListener('click', () => {
    if (caseFifth.classList.contains('active')) {
        caseFifth.classList.remove('active');
        questionFifth.classList.remove('active');
        answerFifth.classList.remove('active');
    } else {
        caseFifth.classList.add('active');
        questionFifth.classList.add('active');
        answerFifth.classList.add('active');
    }
    caseFirst.classList.remove('active');
    caseThird.classList.remove('active');
    caseFourth.classList.remove('active');
    caseSecond.classList.remove('active');

    questionFirst.classList.remove('active');
    questionThird.classList.remove('active');
    questionFourth.classList.remove('active');
    questionSecond.classList.remove('active');

    answerFirst.classList.remove('active');
    answerSecond.classList.remove('active');
    answerThird.classList.remove('active');
    answerFourth.classList.remove('active');
});