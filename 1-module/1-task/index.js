'use strict';

/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */



function factorial(n) {
	
	 if ( n===0 || n ===1)  { 
	   
	   return 1;
	   
	 } 
	   
	   let mul = n * (n-1);
	   
	   for (let i = n-2; i > 1; i--) {
	     
	     mul = mul * i ;
	     
	   }
	   
	   return mul ;
	 }
