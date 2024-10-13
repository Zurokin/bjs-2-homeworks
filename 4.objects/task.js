function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

// Метод для добавления оценок
Student.prototype.addMarks = function (...marksToAdd) {
  if (!this.marks) {
    console.log(`${this.name} отчислен, добавление оценок невозможно.`);
    return;
  }
  this.marks.push(...marksToAdd);
};

// Метод для получения среднего балла
Student.prototype.getAverage = function () {
  if (!this.marks || this.marks.length === 0) {
    return 0; // Если нет оценок, вернуть 0
  }
  const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
  return sum / this.marks.length;
};

// Метод для исключения студента
Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};

// Пример использования
const student1 = new Student("Иван", "мужской", 20);
student1.setSubject("Математика");
student1.addMarks(5, 4, 5);
console.log(student1.getAverage());

const student2 = new Student("Анна", "женский", 19);
student2.setSubject("История");
student2.addMarks(3, 2, 4);
console.log(student2.getAverage());

student2.exclude("неуспеваемость");
student2.addMarks(5);
console.log(student2.excluded);
