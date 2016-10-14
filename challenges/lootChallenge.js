/*
Create a JavaScript class named Numbers with a constructor method that takes in two positive
integers (start and end numbers i.e. 1, 1000) and has a prototype method named “result” that
returns array of numbers that includes these start and end integers, as well as all those in
between of them. After this, create another class named PrimeNumbers that is a subclass of
Numbers. Add prototype method to PrimeNumbers class named “result” that returns array similar
to one returned by “result” method of numbers, but in this case such array should only contain
prime numbers. PrimeNumbers should also return the original array generated from its parent class.

*/


class Numbers {
  constructor(start, end){
    this.start = start;
    this.end = end;
  }
  result() {
    let allNumbers = [];
    for (let i = this.start; i <= this.end; i++){
      allNumbers.push(i);
    }
    return allNumbers;
  }
}

class PrimeNumbers extends Numbers {
  constructor(start,end){
    super(start,end);
  }
  result() {
    const numArray = super.result();
    let primeArray = [2];
    const maximumNumber = numArray[numArray.length - 1] + 1;

    //Edge case for empty argument
    if (numArray.length === 0){
      return {
              primeResult: undefined,
              originalArray: super.result()
      }
    }

    //Edge case for arguments less than 2
    if (numArray[numArray.length - 1] < 2){
      return {
              primeResult: [],
              originalArray: super.result()
      }
    }

    //Helper function to check if a number is a prime number
    function isPrimeNumber(value, primeArray) {
      for (let prime of primeArray){
        if (value === 1) return false;

        if (value === prime) return true;

        if (value % prime === 0) return false;
      }
      return true;
    }

    //Function that finds prime numbers
    function findPrime(array) {
      for (let next = 3; next < maximumNumber; next++){
        if (isPrimeNumber(next, primeArray)) primeArray.push(next);
      }
      return primeArray;
    }

    return {
            primeResult: findPrime(numArray),
            originalArray: super.result()
    }
  }


}

const myNumbers = new PrimeNumbers(1,50);

console.log(myNumbers.result());

//Real's Answers
// function primes(array) {
//
// 	let divisionNumbers = [2,3,5,7,11];
//
// 	let primeNumbers = [];
//
//
// 	function isPrimeNumber(value) {
//
// 		for (let prime of divisionNumbers) {
// 			if (value === prime)
// 				return true;
//
// 			// if it is divisible by a prime, and it isn't prime itself,
// 			// then this number is surly not prime.
// 			if (value % prime === 0) {
// 				return false;
// 			}
// 		}
//
// 		return true;
//
// 		// return !divisionNumbers.some( (prime) => value % prime === 0 && !(value === prime)   );
// 	}
//
// 	return array.filter( isPrimeNumber );
// }
//
//
//
// function isPrimeNumber(value, divisionNumbers) {
//
// 	for (let prime of divisionNumbers) {
// 		if (value === prime)
// 			return true;
//
// 		// if it is divisible by a prime, and it isn't prime itself,
// 		// then this number is surly not prime.
// 		if (value % prime === 0) {
// 			return false;
// 		}
// 	}
//
// 	return true;
//
// 	// return !divisionNumbers.some( (prime) => value % prime === 0 && !(value === prime)   );
// }
//
// function primesWithGrowingDivisionNumbers(array) {
// 	let divisionNumbers = [2];
//
//
// 	// this maximum must be same/bigger than any value in the array
// 	let maximum = 50;
//
// 	for (let next = 3 ; next < maximum; ++next) {
// 		if (isPrimeNumber(next, divisionNumbers)) {
// 			divisionNumbers.push(next);
// 		}
// 	}
//
// 	console.log(divisionNumbers);
//
//
//
// 	return array.filter( (number) => isPrimeNumber(number, divisionNumbers) );
// }
//
//
//
//
// primesWithGrowingDivisionNumbers([]);
//
//
//
// function computePrimes(maximum) {
// 	// we start off with a base of 2, which we know to be prime
// 	let knownPrimeNumbers = [2];
//
//
//
// 	/// https://upload.wikimedia.org/wikipedia/commons/b/b9/Sieve_of_Eratosthenes_animation.gif
// 	// we setup an array of colors to represent the sieve
// 	// gray means we haven't yet looked at this particular number,
// 	// and it also means it wasn't knocked out by any previous prime number.
// 	// this sieve is like an associative map { number => color }
// 	let sieve = [];
// 	for (let i = 0; i < maximum; ++i) {
// 		sieve[i] = 'gray';
// 	}
//
// 	console.log(sieve);
//
//
// 	// we start the algorithm, with the base case of the prime being 2
// 	let prime = 2;
//
// 	while (true) {
// 		// for each prime number that we find, (we will go knock out all the multiples of it),
//
// 		// we make a non-gray color for this particular prime
// 		let primeColor = 'color' + prime;
//
// 		// now we will iterate through every multiple of the prime, and "knock it out",
// 		// by coloring it.
// 		let multiple = prime;
//
// 		while (multiple < sieve.length) {
// 			// for each multiple of `prime`,
//
// 			// multiple is 2,4,6,8,10...
// 			// multiple is 3,6,9,12,15...
// 			// multiple is 5,15,20,25,30...
//
//
// 			// knock out the gray color, and replace it with the primeColor
// 			// this marks this number as divisible by a prime.
// 			sieve[multiple] = primeColor;
//
// 			// we add the prime to the multiple to get the next multiple
// 			multiple += prime;
// 		}
//
// 		function findNextPrimeNumber(prime, sieve) {
// 			// find the next prime
// 			while (prime < sieve.length) {
// 				// look through the sieve starting at the current prime,
// 				// and find the first number that hasn't yet been knocked out.
//
// 				prime += 1;
// 				if (sieve[prime] === 'gray')
// 					return prime;
// 			}
//
//
// 			return prime;
// 		}
//
// 		// now that we finished knocking out everything that is a multiple of the
// 		// current prime, we must find the next prime, which is the next gray number
// 		// after the current prime.
// 		prime = findNextPrimeNumber(prime, sieve);
//
// 		if (prime >= sieve.length)
// 			return knownPrimeNumbers;
//
// 		// we just found another prime number
// 		knownPrimeNumbers.push(prime);
// 	}
//
// }
//
//
// function primesViaSieve(array) {
//
//
// 	// this maximum must be same/bigger than any value in the array
// 	let divisionNumbers = computePrimes(50);
//
//
// 	console.log(divisionNumbers);
// }
//
//
// primesViaSieve([]);
//
