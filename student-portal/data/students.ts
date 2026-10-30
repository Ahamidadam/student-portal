/*
File: students.ts
Author: Habin Park
Date: October 30, 2026

This file stores the student data.
It has a Student interface with student information.
Each student has an id, name, grade and average.
There are 8 students from grades 9 to 12.
The student data will be used in other components.
*/

// Student information
export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  grade: number;
  average: number;
}

// List of students
export const students: Student[] = [
  { id: 1, firstName: "John", lastName: "Smith", grade: 9, average: 85 },
  { id: 2, firstName: "Emma", lastName: "Wilson", grade: 10, average: 78 },
  { id: 3, firstName: "David", lastName: "Lee", grade: 11, average: 92 },
  { id: 4, firstName: "Sarah", lastName: "Kim", grade: 12, average: 88 },
  { id: 5, firstName: "Michael", lastName: "Brown", grade: 12, average: 75 },
  { id: 6, firstName: "Olivia", lastName: "Davis", grade: 9, average: 81 },
  { id: 7, firstName: "James", lastName: "Taylor", grade: 10, average: 69 },
  { id: 8, firstName: "Sophia", lastName: "Anderson", grade: 11, average: 90 },
];
