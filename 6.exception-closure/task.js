//Задача 1
function parseCount(value) {
	const number = Number.parseInt(value, 10);
	if (number) {
		return number;
	}
	throw new Error('Невалидное значение');
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch (err) {
		return err;
	};
}


//Задача 2

class Triangle {
	constructor(a, b, c) {
		if (((a + b) < c) || ((a + c) < b) || ((c + b) < a)) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
		this.leftSide = a;
		this.rightSide = b;
		this.basicSide = c;
	};

	getPerimeter() {
		return this.leftSide + this.rightSide + this.basicSide;
	};

	getArea() {
		const halfPerimeter = 0.5 * this.getPerimeter();
		return parseFloat(Math.sqrt(halfPerimeter * (halfPerimeter - this.leftSide) * (halfPerimeter - this.rightSide) * (halfPerimeter - this.basicSide)).toFixed(3));
	};

}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (e) {
		return {
			getArea() {
				return "Ошибка! Треугольник не существует";
			},
			getPerimeter() {
				return "Ошибка! Треугольник не существует";
			}
		};
	}
}