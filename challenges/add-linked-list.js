/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (3 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 8 -> 0 -> 8
 *
 */

 ///  |-1-|    |-2-|     |-3-|
 ///    \-------/ \--------/

 function Node(val) {
   this.value = val;
   this.next = null;
 }

 ///create linked list of length n, with all values v
 ///
 ///Example: createNList(5,1)
 /// | 1 |  | 1 |  | 1 |  | 1 |  | 1 |
 ///   \------/\-----/\----/\-----/
 function createNList(n,v){

 	var list = new Node(v);
 	var tail = list;

 	for (var i = 1; i < n; ++i)
 	{
 	  	var new_node = new Node(v);


 	  	tail.next = new_node;
 	  	tail = tail.next;
 	}

 	return list;
 }

 function createList(array){
 	var list = new Node(array[0]);
 	var tail = list;

 	for (var i = 1; i < array.length; ++i)
 	{
 	  	var new_node = new Node(array[i]);


 	  	tail.next = new_node;
 	  	tail = tail.next;
 	}

 	return list;
 }

 function toArray(list){


 	var cur = list;
 	var result = [];

 	while (cur !== null && cur !== undefined){


 		result.push(cur.value);

 		cur = cur.next;
 	}

 	return result;
 }

 ///returns the length of the list
 function calcListLen(list){
 	var cur = list;

 	var count = 0;

 	/// | 1 |  | 1 |  | 1 |  | 1 |  | 1 |
 	///   \------/\-----/\----/\-----/
 	///   ^
 	/// | 1 |  | 1 |  | 1 |  | 1 |  | 1 |
 	///   \------/\-----/\----/\-----/
 	///          ^
 	/// | 1 |  | 1 |  | 1 |  | 1 |  | 1 |
 	///   \------/\-----/\----/\-----/
 	///                 ^
 	/// | 1 |  | 1 |  | 1 |  | 1 |  | 1 |
 	///   \------/\-----/\----/\-----/
 	///                        ^
 	/// | 1 |  | 1 |  | 1 |  | 1 |  | 1 |
 	///   \------/\-----/\----/\-----/\-x
 	///                               ^

 	///loop through all the nodes in the linked list
 	while (cur !== null && cur !== undefined)
 	{
 	  console.log(cur);

 		count += 1;

 		///move the cursor forward
 		cur = cur.next;
 	}
 	return count;
 }


 ///example:
 ///| 1 | 2 | 3 | 4 | 5 |
 ///                  ^ returns a pointer to this node.
 function getListTail(list){

 	var cur = list;

 	///loop through all the nodes in the linked list
 	while (cur.next !== null && cur.next !== undefined)
 	{
 		///| 1 | 2 | 3 | 4 | 5 |
 		///  ^
 		///| 1 | 2 | 3 | 4 | 5 |
 		///      ^
 		///| 1 | 2 | 3 | 4 | 5 |
 		///          ^
 		///| 1 | 2 | 3 | 4 | 5 |
 		///              ^
 		///| 1 | 2 | 3 | 4 | 5 | <<< STOP HERE
 		///                  ^
 		///| 1 | 2 | 3 | 4 | 5 |
 		///                      ^

 		///move the cursor forward
 		cur = cur.next;
 	}

 	///after this loop, cur still points at a node,
 	/// but `cur.next` is `null`, but `cur` points at the tail

 	return cur;
 }


 ///this will pad a list to the left with a new value; if the list is less than the specified length
 ///
 /// | 1 | 2 | 3 | 4 | 5 |
 /// pad it to 8, with 0s as the padding
 /// | 1 | 2 | 3 | 4 | 5 | 0 | 0 | 0 |
 function padListRight(list,padded_length,padding) {
   var len0 = calcListLen(list);

   ///will start off pointing at the `5` node, in our example.
   var tail = getListTail(list);

   ///will be 3, in our example.
   var new_node_count = (padded_length - len0);


   ///for each new node we want to add,
   for (var i = 0; i < new_node_count; ++i)
   {
   	var new_node = new Node(padding);

 	/// | 1 | 2 | 3 | 4 | 5 |
   	///                   ^ tail
 	/// | 1 | 2 | 3 | 4 | 5 | 0 |
   	///                   ^ tail

   	tail.next = new_node;
 	/// | 1 | 2 | 3 | 4 | 5 | 0 |
   	///                       ^ tail

   	///move the tail forward.
   	tail = tail.next;

   }


 }

 function addLinkedList(lhs, rhs) {

   //        \|/
   //   1234567    |  7 => 6 => 5 => 4 => 3 => 2 => 1
   // +   12345    |  5 => 4 => 3 => 2 => 1
   // ---------
   //  ########

   var lhs_len = calcListLen(lhs);
   var rhs_len = calcListLen(rhs);

   var result_len = Math.max(lhs_len, rhs_len) + 1;


   //
   //  01234567   |  7 => 6 => 5 => 4 => 3 => 2 => 1 => 0
   // +00012345   |  5 => 4 => 3 => 2 => 1 => 0 => 0 => 0
   // ---------
   //  ########   |  0 => 0 => 0 => 0 => 0 => 0 => 0 => 0

   /// 7 => 6 => 5 => 4 => 3 => 2 => 1
   /// 7 => 6 => 5 => 4 => 3 => 2 => 1 => 0
   padListRight(lhs,result_len,0);

   /// 5 => 4 => 3 => 2 => 1
   /// 5 => 4 => 3 => 2 => 1 => 0 => 0 => 0
   padListRight(rhs,result_len,0);


   /// 0 => 0 => 0 => 0 => 0 => 0 => 0 => 0
   var result = createNList(/*n=*/result_len, /*v=*/0);




   ///pointer to the current digit in the lhs number; start at the head
   var lhs_digit_node = lhs;
   ///pointer to the current digit in the rhs number; start at the head
   var rhs_digit_node = rhs;
   ///pointer to the current digit in the result number; start at the head
   var result_digit_node = result;


   var carry = 0;

   ///for each digit,
   for (var digit_index = 0; digit_index < result_len; ++digit_index) {




     ///add the two top digits together and store in the result
     var sum = lhs_digit_node.value + rhs_digit_node.value + carry;

     ///sometimes the value will overflow 10, which means we need to extract the
     /// first digit; we can do this with the mudulo operator, since `x % 10` is
     /// the first digit in the number x.
     var digit = sum % 10;


     ///next carry.
     carry = Math.floor((sum - digit) / 10);
     result_digit_node.value = digit;

     ///  1
     ///
     ///  7
     ///+ 5
     ///-----
     ///  3
     ///
     ///sum = 13 = 1+7+5
     ///digit = 3 = 13 % 10
     ///carry = floor(sum / 10) << rest of digits
     ///
     ///



     ///move all the pointers forward to the next digit.
     lhs_digit_node = lhs_digit_node.next;
     rhs_digit_node = rhs_digit_node.next;
     result_digit_node = result_digit_node.next;
   }


   var last_non_zero_node = result;
   var cur = result;

   ///find the last non-zero node.
   ///example: [3,0,2,1,0]
   ///         [3,0,2,1,0]
   ///          ^cur
   ///		   |last_non_zero_node

   ///         [3,0,2,1,0]
   ///            ^cur
   ///		   |last_non_zero_node

   ///         [3,0,2,1,0]
   ///              ^cur
   ///		       |last_non_zero_node
   ///         [3,0,2,1,0]
   ///                ^cur
   ///		         |last_non_zero_node
   ///         [3,0,2,1,0]
   ///                  ^cur
   ///		         |last_non_zero_node
   ///         [3,0,2,1,0]
   ///                     ^cur, done
   ///		         |last_non_zero_node
   while (cur !== null && cur !== undefined){
   	if (cur.value !== 0)
   	{
   		last_non_zero_node = cur;
   	}

   	cur = cur.next;
   }

   ///now `last_non_zero_node` is the last non-zero node in the result list
   ///so for example if the result is 123, but the the linked list looks like [3,2,1,0],
   /// we want the node that points to 1.
   last_non_zero_node.next = null;


   return result;
 }

module.exports = {Node: Node, addLinkedList: addLinkedList};
