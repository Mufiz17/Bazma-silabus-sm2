function countGrade(scores) {
    const gradeDistribution = { S: 0, A: 0, B: 0, C: 0, D: 0, X: 0 };

    scores.filter(score => score === 100).forEach(() => gradeDistribution.S++);
    scores.filter(score => score < 100 && score >= 90).forEach(() => gradeDistribution.A++);
    scores.filter(score => score < 90 && score >= 80).forEach(() => gradeDistribution.B++);
    scores.filter(score => score < 80 && score >= 60).forEach(() => gradeDistribution.C++);
    scores.filter(score => score < 60 && score >= 0).forEach(() => gradeDistribution.D++);
    scores.filter(score => score === -1).forEach(() => gradeDistribution.X++);

    return gradeDistribution;
}