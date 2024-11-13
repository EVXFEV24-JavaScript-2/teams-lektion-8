// Builder
class ComplexClass {
  constructor(name, title, age, email, settings, ids, products) {
    this.name = name;
    this.title = title;
    this.age = age;
    this.email = email;
    this.settings = settings;
    this.ids = ids;
    this.products = products;
  }

  clone() {
    return new ComplexClass(
      this.name,
      this.title,
      this.age,
      this.email,
      this.settings,
      this.ids,
      this.products
    );
  }
}

class ComplexClassBuilder {
  constructor() {
    this.complexObject = new ComplexClass();
  }

  name(value) {
    this.complexObject.name = value;
    return this;
  }

  title(value) {
    this.complexObject.title = value;
    return this;
  }

  age(value) {
    this.complexObject.age = value;
    return this;
  }

  build() {
    return this.complexObject;
  }
}

const builder = new ComplexClassBuilder();
const complex = builder.name("Ironman").title("Superman").age(45).build();

// Prototype
const complexCopy = complex.clone();

// Singleton
class ApiService {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  fetchImages() {}
}

const apiService = new ApiService("fheiuwhfiurei");

class BankService {
  transferMoney() {}
}

class RealBankService extends BankService {
  transferMoney() {
    // Polymorphism för att skicka pengar på riktigt
  }
}

class TestBankService extends BankService {
  transferMoney() {
    // Skicka pengar på låtsas
  }
}

const bankService = new RealBankService();
// Eller, för tester: const testBankService = new TestBankService();
