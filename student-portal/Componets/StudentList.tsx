
/*
File: StudentList.tsx
Author: Habin Park
Date: October 29, 2026

This component shows the list of students.
It gets the student list from the parent component.
It uses StudentCard to display each student.
If there are no students, it shows a message.
The cards are displayed in a grid using Tailwind CSS.
*/

import StudentCard from "./StudentCard";
import type { Student } from "@/data/students";

// Props for StudentList
interface StudentListProps {
    students: Student[];
    onRemove: (id: number) => void;
}

const StudentList = ({ students, onRemove }: StudentListProps) => {

  // Check if the list is empty
    if (students.length === 0) {
    return (
        <p className="text-center text-gray-500 p-5">
        No students to show.
        </p>
    );
    }

  // Show all students
    return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {students.map((student) => (
        <StudentCard
            key={student.id}
            student={student}
            onRemove={onRemove}
        />
        ))}
    </div>
    );
};

export default StudentList;
