// Dinesh also joined the group of 3 idiots and now their group is called Four Seasoners.
// Meanwhile, Binoy has moved to a new house in the same locality.
// Now the houses of Ajay, Binoy and Chandru are in the located in the shape of a triangle.
// Dinesh also has moved to a house in the same locality. When Ajay asked Dinesh about the location of his house ,
// Dinesh said that his house is equidistant from the houses of the other 3. Though Ajay was good in Mathematics, he was puzzled.
// Can you please help Ajay out?

// Given the 3 vertices {(x1,y1), (x2,y2) and (x3,y3)} of a triangle,
// write a function to determine the point which is equidistant from all the 3 vertices.

// write a function to return the X co-ordinates.
function find_X_Vertices(X1, Y1, X2, Y2, X3, Y3) {
  return (X1 + X2 + X3) / 3;
}

// write a function to return the Y co-ordinates.
function find_Y_Vertices(X1, Y1, X2, Y2, X3, Y3) {
  return (Y1 + Y2 + Y3) / 3;
}

//Run SpecRunner.html to check the Testcase
