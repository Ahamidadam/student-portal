/*
 * File: components/AddStudent.tsx
 * Author: Pinhung Chiang
 * Date: October 30, 2026
 * This component displays the four inputs for a new student.
 * It receives an onAdd callback so StudentPortal can update the list.
 * Local state controls the names, grade and average as the user types.
 * The button trims the names and checks the values before calling onAdd.
 * After adding a student, the inputs return to empty names, grade 9 and average 70.
 */

"use client";

import { useState } from "react";
import type { Student } from "@/data/students";

// The parent assigns the id when it adds the student.
interface AddStudentProps {
  onAdd: (student: Omit<Student, "id">) => void;
}

const AddStudent = ({ onAdd }: AddStudentProps) => {
  // Keep all four inputs controlled, including when a number is cleared.
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [grade, setGrade] = useState("9");
  const [average, setAverage] = useState("70");

  // Check the input and let StudentPortal change the list.
  const handleAdd = () => {
    const trimmedFirstName = firstName.trim();
    const trimmedLastName = lastName.trim();
    const studentGrade = Number(grade);
    const studentAverage = Number(average);

    if (!trimmedFirstName || !trimmedLastName) return;
    if (!Number.isInteger(studentGrade) || studentGrade < 9 || studentGrade > 12) return;
    if (average.trim() === "" || !Number.isFinite(studentAverage) || studentAverage < 0 || studentAverage > 100) return;

    onAdd({
      firstName: trimmedFirstName,
      lastName: trimmedLastName,
      grade: studentGrade,
      average: studentAverage,
    });

    // Reset the panel after a successful addition.
    setFirstName("");
    setLastName("");
    setGrade("9");
    setAverage("70");
  };

  // Use a panel and click event for Assignment 1.
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="first-name" className="block text-sm font-medium text-slate-700">
            First name
          </label>
          <input
            id="first-name"
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
        </div>
        <div>
          <label htmlFor="last-name" className="block text-sm font-medium text-slate-700">
            Last name
          </label>
          <input
            id="last-name"
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
        </div>
        <div>
          <label htmlFor="grade" className="block text-sm font-medium text-slate-700">
            Grade
          </label>
          <input
            id="grade"
            type="number"
            min="9"
            max="12"
            step="1"
            value={grade}
            onChange={(event) => setGrade(event.target.value)}
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
        </div>
        <div>
          <label htmlFor="average" className="block text-sm font-medium text-slate-700">
            Average (%)
          </label>
          <input
            id="average"
            type="number"
            min="0"
            max="100"
            step="any"
            value={average}
            onChange={(event) => setAverage(event.target.value)}
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
        </div>
      </div>
      <button
        type="button"
        onClick={handleAdd}
        className="mt-5 rounded-lg bg-teal-700 px-4 py-2 font-semibold text-white hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
      >
        Add student
      </button>
    </div>
  );
};

export default AddStudent;
