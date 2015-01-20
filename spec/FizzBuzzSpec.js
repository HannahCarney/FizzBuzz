describe("FizzBuzz", function() {

	var fizzbuzz; 

	describe("knows when a number", function() {

		it("is divisible by 3", function() {
			fizzbuzz = new FizzBuzz();
			//fizzbuzz = FizzBuzz.new
			expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
		});

		it("is NOT divisible by 3", function(){
			fizzbuzz = new FizzBuzz();
			expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
		});
	
        it("is divisible by 5", function() {
        	fizzbuzz = new FizzBuzz();
        	expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);	
        });
	    
	    it("is NOT divisble by 5", function() {
	    	fizzbuzz = new FizzBuzz();
	    	expect(fizzbuzz.isDivisibleByFive(1)).toBe(false);
	    });

	    it("is divisible by 15", function() {
	    	fizzbuzz = new FizzBuzz();
	    	expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
	    });

	    it("is NOT divisible by 15", function() {
	    	fizzbuzz = new FizzBuzz();
	    	expect(fizzbuzz.isDivisibleByFifteen(1)).toBe(false);
	    });
	});

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