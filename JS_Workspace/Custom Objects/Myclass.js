class Father {
    constructor(jaat, occupation, age) {
        this.jaat = jaat;
        this.occupation = occupation;
        this.age = age;
    }

    detailHome() {
        console.log("The Occupation is: " + this.occupation + ",The age is: " + this.age);
    }

    static caste() {
        console.log("The caste is same no need to change");
    }
}


class Son extends Father {
    constructor(jaat, occupation, age, hobby) {
        super(jaat, occupation, age)
        this.hobby = hobby;
    }
}

Father.caste();
Son.caste();
f = new Father("Agrawal", "Shopkeeper", 58);
s = new Son("Agrawal", "Engineer", 22, "tp");
f.detailHome();
s.detailHome();
console.log(s.hobby);