// CODE here for your Lambda Classes


class Person{
    constructor(data){
        this.name = data.name;
        this.location = data.location;
        this.age = data.age;
  };
    speak(){    
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    };
};

class Students extends Person{
    constructor(data){
        super(data);
        this.previousBackground = data.previousBackground;
        this.className = data.className;
        this.favSubjects = data.favSubjects;
        this.grade = Math.round(Math.random() * 100);
    };
    listSubjects(){
        for(let i = 0; i < this.favSubjects.length; ++ i){
            console.log(`${i+1}) ${this.favSubjects[i]}`);
        }
    };
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    };
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    };
    graduate(){
        if (this.grade >= 70){
            return `${this.name} has successfully passed and is ready for graduation!`;
        }else{
            return `${this.name} is not ready to graduate and should complete more assignments.`;
        }
    }
};

class Instructors extends Person{
    constructor(data){
        super(data);
        this.favLanguage = data.favLanguage;
        this.specialty = data.specialty;
        this.catchPhrase = data.catchPhrase;
    };
    demo(subject){
        return `Today we are learning about ${subject}`;
    };
    grade(student, subject){
        let nScore = Math.round(Math.random() * 40)-20;
        student.grade += nScore;
        return `${student.name} receives a ${nScore} on ${subject}`;
    };
};

class ProjectManagers extends Instructors{
    constructor(data){
        super(data);
        this.gradClassName = data.gradClassName;
        this.favInstructor = data.favInstructor;
    }
    standUp(slackChannel){
        return `${this.name} announces to ${slackChannel}, @channel standy times!`;
    };
    debugCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    };
};

const AverageJoe = new Person({
    name: "Joe",
    age: 30,
    location: "USA"
})

const Anthony = new Students({
    name: "Anthony",
    age: 26,
    location: "KY",
    previousBackground: "Developer",
    className: "WEB21",
    favSubjects: ['JavaScript', 'Backend']
});

const DanLevy = new Instructors({
    name: "Dan Levy",
    age: 100,
    location: "United States",
    previousBackground: "Student at LS",
    className: "WEB21",
    favSubjects: ['Cats', 'Cat', 'Kitler'],
    favLanguage: 'CSS',
    specialty: 'Teaching',
    catchPhrase: 'Good morning'
});

const ChristianI = new ProjectManagers({
    name: "Christian",
    age: 100,
    location: "Internet",
    previousBackground: "Student at LS",
    className: "WEB21",
    favSubjects: ['Front end', 'Back end', 'Full stack'],
    favLanguage: 'English',
    specialty: 'Being awesome',
    catchPhrase: 'Good afternoon',
    gradClassName: 'WEB18',
    favInstructor: 'Josh?'
})

console.log("################");
console.log("#### Person ####");
console.log("################");
console.log(AverageJoe.speak());

console.log("#################");
console.log("#### Student ####");
console.log("#################");
console.log(Anthony.speak());
Anthony.listSubjects();
console.log(Anthony.PRAssignment(Anthony.favSubjects[0]));
console.log(Anthony.sprintChallenge(Anthony.favSubjects[0]));

console.log("####################");
console.log("#### Instructor ####");
console.log("####################");
console.log(DanLevy.speak());
console.log(DanLevy.demo('JavaScript'));
console.log(DanLevy.grade(Anthony, Anthony.favSubjects[0]));

console.log("#########################");
console.log("#### Project Manager ####");
console.log("#########################");
console.log(ChristianI.speak());
console.log(ChristianI.demo('JavaScript'));
console.log(ChristianI.grade(Anthony, Anthony.favSubjects[1]));
console.log(ChristianI.standUp('#Help21'));
console.log(ChristianI.debugCode(Anthony, Anthony.favSubjects[1]));

console.log("#####################");
console.log("### Stretch Goals ###");
console.log("#####################");
console.log(Anthony.graduate());
let nTimes = 0;
while (Anthony.grade < 70 && nTimes < 8){
    WorkHard();
    console.log(Anthony.graduate());
    nTimes++;
}
if (Anthony.grade < 70){ // I added this just so the console would never get flooded. No one should give up on their goals!
    console.log(`${Anthony.name} has not been successful in graduating and should persue a different career`);
}


function WorkHard(){ // This isn't necessary as these 2 lines could be put into the While loop. I just wanted to show I know how to do it
    console.log(ChristianI.grade(Anthony, Anthony.favSubjects[1]));
    console.log(DanLevy.grade(Anthony, Anthony.favSubjects[0]));
}