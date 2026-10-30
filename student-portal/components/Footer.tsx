/*
 * File: components/Footer.tsx
 * Author: Ahamid Adam
 * Date: October 29, 2026
 * This component displays the school's contact information.
 * It does not receive props or store state.
 * The contact details are fictional information for this assignment.
 * Tailwind classes arrange the information for different screen sizes.
 * It returns the footer displayed below the page.
 */

// Display the school name and fictional contact details.
const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-8 text-sm text-slate-600 sm:grid-cols-2">
        <div>
          <p className="font-bold text-slate-900">
            New Generation High School
          </p>

          <p className="mt-2">
            123 Learning Avenue, Calgary, Alberta
          </p>
        </div>

        <div className="break-words">
          <p>Phone: 403-555-0142</p>

          <p className="mt-2">
            Email: office@newgeneration.example
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;