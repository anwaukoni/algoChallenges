//Todo- Zombie cluster function

There are n zombies in Seattle, and Austin and Dami are  trying to track them down to figure out who is creating new zombies - thus preventing
an apocalpyse. Other than the patient zero zombies (who became so my mixing MaxRager and tainted Utopium), new people only become zombies after
being scratched by an existing zombie; for this reason zombiism is transitive. This means that if zombie 0 knows zombie 1 and zombie 1 knows
zombie 2, then zombie 0 is connected to zombie 2. A zombie cluster is a group of zombies who are directly or indirectly linked throught the
group of zombies they know (such as  the one who scratched them or supplied them with brains).

Complete the zombie cluster function in your editor. It has  one parameter: an array of binary strings(composed of 0s and 1s) named zombies
that describes as n * n matrix of known connected zombies;

if zombie[i][j] = 0 then the I-th and j-th  zombies do not know one another
(unless the cell contains a 1 and they do know each other).

Your function must return an integer denoting the number of Zombie clusters Austin and Dami have identified in Seattle

Constraints:

- 1 <= n <= 300
- 0 <= i < n
- zombies = n
- Each zombies[i] contains a binary string of n zeroes and ones
- zombie[i][i] = 1 where 0 <= i < n
- zombies[i][j] = zombies[j][i], where 0 <= i < j < n
