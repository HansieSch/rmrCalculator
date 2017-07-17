var rmrDisplay = document.querySelector(".rmr"),
    rmrToLose1kg = document.querySelector(".rmrToLose1kg"),
    rmrToLoseHalfkg = document.querySelector(".rmrToLoseHalfkg"),
    rmrToGain1kg = document.querySelector(".rmrToGain1kg"),
    rmrToGainHalfkg = document.querySelector(".rmrToGainHalfkg");

var sex = document.querySelector("select[name='sex']"),
    weight = document.querySelector("input[name='weight']"),
    height = document.querySelector("input[name='height']"),
    age = document.querySelector("input[name='age']"),
    activityLevel = document.querySelector("select[name='activityLevel']");

function calculateRMR(sex, weight, height, age, activityLevel) {
    if (sex === "male") {
        return activityLevel * (10 * weight + 6.25 * height - 5 * age + 5);
    } else if (sex === "female") {
        return activityLevel * (10 * weight + 6.25 * height - 5 * age - 161);
    }
}

function calculate() {

    // Sanity check: none of these values can be an empty string or 0.
    if (weight.value === "" || weight.value === "0" ||
        height.value === "" || height.value === "0" ||
        age.value === "" || age.value === "0") {
        return;
    }

    // Taking decimal values into account is impractical. Since it's
    // nearly impossible for user to get that accurate with their
    // eating habits.
    var rmr = Math.round(calculateRMR(
        sex.value,
        Number.parseInt(weight.value),
        Number.parseInt(height.value),
        Number.parseInt(age.value),
        Number.parseFloat(activityLevel.value)
    ));

    // 1100cal to lose(-)/gain(+) 1kg of fat daily
    // 550cal to lose(-)/gain(+) 0.5kg of fat daily
    rmrDisplay.innerText = rmr;
    rmrToLose1kg.innerText = rmr - 1100;
    rmrToLoseHalfkg.innerText = rmr - 550;

    rmrToGain1kg.innerText = rmr + 1100;
    rmrToGainHalfkg.innerText = rmr + 550;

}