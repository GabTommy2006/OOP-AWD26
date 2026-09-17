class MyClass {
    #x = 0;
    #incX() {
        this.#x++;
        console.log(this.#x);
    }

    setX(x) {
        this.#x = x;
    }

    getX() {
        return this.#x;
    }
}

const m = new MyClass();
m.setX(5);
console.log(m.getX());