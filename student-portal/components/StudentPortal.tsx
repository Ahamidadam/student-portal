/*
 * File: components/StudentPortal.tsx
 * Author: Pinhung Chiang
 * Date: October 30, 2026
 * This component brings the student portal sections together.
 * It takes no props and starts with the students from the data file.
 * It owns the student list and search text, updating them through event callbacks.
 * Statistics use the full list while a case-insensitive search selects the visible cards.
 * It returns the overview, student list and add-student panel with matching section ids.
 */

"use client";

import { useState } from "react";
import { students as initialStudents, type Student } from "@/data/students";
import StatsPanel from "./StatsPanel";
import SearchBox from "./SearchBox";
import StudentList from "./StudentList";
import AddStudent from "./AddStudent";

const StudentPortal = () => {
  // Store the list once; children receive data and callbacks.
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [searchText, setSearchText] = useState("");

  // Recalculate the counts and search results on every render.
  const totalStudents = students.length;
  const honourRollCount = students.filter((student) => student.average >= 80).length;
  const graduatingCount = students.filter((student) => student.grade === 12).length;
  const searchName = searchText.trim().toLowerCase();
  const visibleStudents = students.filter((student) =>
    `${student.firstName} ${student.lastName}`.toLowerCase().includes(searchName)
  );

  // Make a new array for each addition, removal or clear.
  const handleAdd = (newStudent: Omit<Student, "id">) => {
    setStudents((currentStudents) => {
      const nextId = Math.max(0, ...currentStudents.map((student) => student.id)) + 1;
      return [...currentStudents, { ...newStudent, id: nextId }];
    });
  };

  const handleRemove = (id: number) => {
    setStudents((currentStudents) => currentStudents.filter((student) => student.id !== id));
  };

  const handleClear = () => {
    setStudents([]);
  };

  // Match the navigation anchors supplied by Navbar.
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 space-y-10 px-4 py-8">
      <section id="overview" aria-labelledby="overview-heading" className="scroll-mt-4">
        <h1 id="overview-heading" className="text-3xl font-bold text-slate-900">
          School overview
        </h1>
        <p className="mb-6 mt-2 text-slate-600">
          View school totals and manage the student list below.
        </p>
        <StatsPanel
          totalStudents={totalStudents}
          honourRollCount={honourRollCount}
          graduatingCount={graduatingCount}
        />
      </section>

      <section id="students" aria-labelledby="students-heading" className="scroll-mt-4">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <h2 id="students-heading" className="text-2xl font-bold text-slate-900">
            Students
          </h2>
          <button
            type="button"
            onClick={handleClear}
            disabled={students.length === 0}
            className="rounded-lg border border-red-300 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Clear all
          </button>
        </div>
        <SearchBox searchText={searchText} onSearchChange={setSearchText} />
        <StudentList students={visibleStudents} onRemove={handleRemove} />
      </section>

      <section id="add-student" aria-labelledby="add-student-heading" className="scroll-mt-4">
        <h2 id="add-student-heading" className="mb-5 text-2xl font-bold text-slate-900">
          Add a student
        </h2>
        <AddStudent onAdd={handleAdd} />
      </section>
    </main>
  );
};

export default StudentPortal;
