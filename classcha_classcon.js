//BÀI TẬP VỀ NHÀ: CLASS CHA VÀ CLASS CON

class User {
  constructor(name, age, email) {
    this._name = name;
    this._age = age;
    this._email = email;
  }
 
  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value;
  }
 
  get email() {
    return this._email;
  }
  set age(value) {
    if (value < 0) {
      console.log('Tuổi không hợp lệ!');
      return;
    }
    this._age = value;
  }
 
  introduction() {
    return `Tôi tên là ${this._name}, ${this._age} tuổi, email cá nhân: ${this._email}`;
  }
}
 
class Student extends User {
  constructor(name, age, email, university) {
    super(name, age, email); 
    this._university = university; 
  }
 
  get university() {
    return this._university;
  }
  set university(value) {
    this._university = value;
  }
 
  
  introduction() {
    return super.introduction() + ` - Trường: ${this._university}`;
  }
}
 

const user = new User('Hoàng Phúc Hưng', 20, 'hung.hoang240204@vnuk.udn.vn', 'Viện Nghiên cứu và Đào tạo Việt - Anh');
 
console.log(user.introduction());
 
user.name = 'Hoàng Phúc Hưng';
user.age = 20;
user.university = 'Viện Nghiên cứu và Đào tạo Việt - Anh';
 
console.log(user.name, '-', user.age, '-', user.university);
console.log(user.introduction());
 
user.age = -5;

