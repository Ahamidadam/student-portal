/*
 * File: components/StatsPanel.tsx
 * Author: [Member A name]
 * Date: October 29, 2026
 * This component displays three statistics about the school.
 * Its props provide the total students, honour roll count, and graduating count.
 * StudentPortal calculates these numbers from the complete student list.
 * This component displays the supplied numbers without storing additional state.
 * It returns three statistic cards in a responsive grid.
 */

// Describe the numbers received from StudentPortal.
interface StatsPanelProps {
  totalStudents: number;
  honourRollCount: number;
  graduatingCount: number;
}

const StatsPanel = ({
  totalStudents,
  honourRollCount,
  graduatingCount,
}: StatsPanelProps) => {
  // Display the three statistics.
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h3 className="text-sm font-medium text-slate-600">
          Students
        </h3>

        <p className="mt-3 text-3xl font-bold text-slate-900">
          {totalStudents}
        </p>

        <p className="mt-2 text-sm text-slate-600">
          Across all grades
        </p>
      </div>

      <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
        <h3 className="text-sm font-medium text-teal-800">
          Honour roll
        </h3>

        <p className="mt-3 text-3xl font-bold text-teal-900">
          {honourRollCount}
        </p>

        <p className="mt-2 text-sm text-teal-800">
          Average of 80% or higher
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h3 className="text-sm font-medium text-slate-600">
          Graduating
        </h3>

        <p className="mt-3 text-3xl font-bold text-slate-900">
          {graduatingCount}
        </p>

        <p className="mt-2 text-sm text-slate-600">
          Students in grade 12
        </p>
      </div>
    </div>
  );
};

export default StatsPanel;