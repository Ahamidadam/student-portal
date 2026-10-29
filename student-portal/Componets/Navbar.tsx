/*
 
 * Author: Ahamid
 * Date: October 29, 2026
 * This component displays the school name and navigation links.
 * It does not receive props.
 * Each link targets a section on the same page.
 * Tailwind classes adjust the layout for different screen sizes.
 * It returns the header displayed above the page.
 */

// Display the school name and same-page navigation.
const Navbar = () => {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-bold text-slate-900">
            New Generation High School
          </p>

          <p className="mt-1 text-sm text-slate-600">
            Student portal
          </p>
        </div>

        <nav
          aria-label="Main navigation"
          className="flex flex-wrap gap-4 text-sm font-semibold text-slate-700"
        >
          <a href="#overview" className="hover:text-teal-700">
            Overview
          </a>

          <a href="#students" className="hover:text-teal-700">
            Students
          </a>

          <a href="#add-student" className="hover:text-teal-700">
            Add a student
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;