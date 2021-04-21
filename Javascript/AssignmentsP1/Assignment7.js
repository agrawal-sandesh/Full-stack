array = [12, 18, 25, 24, 2, 5, 18, 20, 20, 21];

function find_more_than_average(array) {
    sum1 = array.reduce((a, b) => a + b);
    avg = sum1 / array.length;
    filterstudent = array.filter(num => num > avg);
    percent = (filterstudent.length / array.length) * 100;
    return percent;

}

function generate_frequency(array) {
    var freq = [];
    for (var i = 0; i <= 25; i++) {
        count = array.filter(n => n == i);
        freq.push(count.length);
    }
    return freq;

}

more_than_average = (find_more_than_average(array));
console.log("More than avaerage: ", more_than_average);

frequency = generate_frequency(array);
console.log("frequency: ", frequency);