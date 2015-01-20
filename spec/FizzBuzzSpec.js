describe("FizzBuzz", function() {

	var fizzbuzz; 


	describe("knows when number, Fizz, Buzz, or FizzBuzz", function() {

		it("should return Fizz for 3", function(){
			fizzbuzz = new FizzBuzz();
			expect(fizzbuzz.fizzOrBuzz(3)).toEqual("Fizz");
		});

		it("should return Buzz for 5", function() {
			fizzbuzz = new FizzBuzz();
			expect(fizzbuzz.fizzOrBuzz(5)).toEqual("Buzz");
		});

		it("should return FizzBuzz for 15", function() {
			fizzbuzz = new FizzBuzz();
			expect(fizzbuzz.fizzOrBuzz(15)).toEqual("FizzBuzz");
		});

		it("should know when is a number", function(){
			fizzbuzz = new FizzBuzz();
			expect(fizzbuzz.fizzOrBuzz(1)).toEqual(1);
		});

	});
});