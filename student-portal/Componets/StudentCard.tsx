
/*
File: StudentCard.tsx
Author: Habin Park
Date: October 29, 2026

This component displays one student's information.
It gets the student data from StudentList.
It shows the student's name and grade.
The show details button displays the average and honour roll badge.
The remove button removes the student using the parent function.
*/

"use client";

import { useState } from "react";
import type { Student } from "@/data/students";

// Props for StudentCard
interface StudentCardProps {
    student: Student;
    onRemove: (id: number) => void;
}

const StudentCard = ({ student, onRemove }: StudentCardProps) => {

  // State for showing details
    const [showDetails, setShowDetails] = useState(false);

    return (
    <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">

      {/* Student name and grade */}
        <h3 className="text-lg font-semibold text-gray-900">
        {student.firstName} {student.lastName}
        </h3>

        <p className="text-gray-600 mt-2">
        Grade {student.grade}
        </p>

      {/* Show student details */}
        {showDetails && (
        <div className="mt-4">
            <p>Average: {student.average}%</p>

            {student.average >= 80 && (
            <span className="inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm mt-2">
                Honour roll
            </span>
            )}
        </div>
        )}

      {/* Buttons */}
        <div className="flex gap-3 mt-5">
        <button
            type="button"
            onClick={() => setShowDetails(!showDetails)}
            className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-700"
        >
            {showDetails ? "Hide details" : "Show details"}
        </button>

        <button
            type="button"
            onClick={() => onRemove(student.id)}
            className="border border-red-300 text-red-600 px-4 py-2 rounded-lg hover:bg-red-50"
        >
            Remove
        </button>
        </div>

    </div>
    );
};

export default StudentCard;
