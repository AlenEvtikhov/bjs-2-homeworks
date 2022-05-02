// Задача 1
class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	};

	fix() {
		return this.state *= 1.5;
	};

	set state(state) {
		if (state > 100) {
			this._state = 100;
		} else if (state < 0) {
			this._state = 0;
		} else {
			this._state = state;
		}
	};


	get state() {
		return this._state;
	};
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = 'magazine';
	}
};

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = 'book';
	};
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'novel';
	}
}
class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'detective';
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'fantastic';
	}
}

//Задача 2

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	};
	addBook(book) {
		if (book.state > 30) {
			return this.books.push(book);
		}
	};
	findBookBy(type, value) {
		for (let i = 0; i < this.books.length; i++) {
			let book = Object.entries(this.books[i]);
			for (let a = 0; a < book.length; a++) {
				if (book[a][0] === type && book[a][1] === value)
					return this.books[i];
			}
		}
		return null;
	};
	giveBookByName(bookName) {
		let book = this.findBookBy("name", bookName);
		if (book != null)
			this.books.splice(this.books.indexOf(book), 1);
		return book;
	};
}

//Задача 3

class Student {
	constructor(name) {
		this.name = name;
		this.subjects = [];
	};

	addMark(mark, subjectName) {
		if (mark < 1 || mark > 5) return 'Ошибка, оценка должна быть числом от 1 до 5';
		(this.subjects[subjectName] === undefined) ? this.subjects[subjectName] = [mark]: this.subjects[subjectName].push(mark);
	};

	getAverageBySubject(subjectName) {
		if (this.subjects[subjectName] === undefined) return "Несуществующий предмет";
		let sum = 0;
		this.subjects[subjectName].forEach(item => sum += item);
		return sum / this.subjects[subjectName].length;
	};

	getAverage() {
		let sum = 0;
		let subjectNames = Object.keys(this.subjects);
		subjectNames.forEach(item => sum += this.getAverageBySubject(item))
		return sum / subjectNames.length;
	};

	exclude(reason) {
		delete this.subjects;
		this.excluded = reason;
	};
}