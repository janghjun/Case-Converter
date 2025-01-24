(() => {
    const TitleCase = (str) => {
        var result = [];
        var a = str.toLowerCase().split(" ");
        a = a.filter(item => item);
        for (let i = 0; i < a.length; i++) {
            a[i] = a[i][0].toUpperCase() + a[i].substr(1);
            result.push(a[i]);
        }
        return result.join(" ");
    };

    const SentenceCase = (str) => {
        var result = [];
        let words = str.toLowerCase().split(" ");
        let newsentence = true;

        for (let i = 0; i < words.length; i++) {
            if (newsentence === true || words[i].toLowerCase() === "i") {
                words[i] = words[i][0].toUpperCase() + words[i].substr(1);
                newsentence = false;
            }
            if (
                words[i][words[i].length - 1] === "." ||
                words[i][words[i].length - 1] === "?" ||
                words[i][words[i].length - 1] === "!"
            ) {
                newsentence = true;
            }
        }
        return words.join(" ");
    };

    const UserInput = document.getElementById("text");

    document.getElementById("lower").addEventListener("click", () => {
        UserInput.value = UserInput.value.toLowerCase();
    });
    document.getElementById("upper").addEventListener("click", () => {
        UserInput.value = UserInput.value.toUpperCase();
    });
    document.getElementById("sentence").addEventListener("click", () => {
        UserInput.value = SentenceCase(UserInput.value);
    });
    document.getElementById("title").addEventListener("click", () => {
        UserInput.value = TitleCase(UserInput.value);
    });
})();
