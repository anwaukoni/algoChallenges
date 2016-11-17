Mr Oct has recently shut down his factory and wants to sell
off his metals to a local businessman. Mr Oct has many rods whose
lengths are represented by array - lengths = {lengths[0], lengths[1], lengths[2],...}.
The local businessman will only pay for rods that have the same length.
Let's say Mr Oct only plans to sell rods of lengths L only. So he had to cut
each rod 0 or more times to maximise the profit. The remaining rods whose length
is not L will be thrown away.

Price of N rods of length L will be N * L * unit_price. Also note that for each
cut made to the rod he had to pay cut_cost.

What is the maximum amount of money Mr. Oct can make?

You have to complete the function maxProfit(cut_cost, unit_price, lengths).

Constraints:
- lengths will contain between 1 to 50 elements, inclusive.
- Each element of lengths will lie in range [1, 10000].
- 1 <= unit_price, cut_cost <= 1000

Input Format:
The function "maxProfit" contains 3 arguments (cut_cost, unit_price, lengths array)

Output Format:
Return an integer denoting the max profit that can be gained my Mr.Oct

Sample Input #00:
cut_cost = 1;
unit_price = 10;
lengths = [26, 103, 59];

Sample output #00:
1770

Explanation #00:
Since cuts are pretty cheap, we can make large number of cuts to reduce the amount
of waste. The optimal length of rods will be 6. We can cut 4 pieces of length 6
from 1st rod then throw piece of length 2, then cut 17 pieces of length 6 from
2nd rod and throw away a piece of length 1 
